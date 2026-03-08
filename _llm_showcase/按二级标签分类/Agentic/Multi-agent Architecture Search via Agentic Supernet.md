---
tags:
  - LLM
  - Agentic
源码:
发表时间: 2025-06-09
会议: ICML
---
## Abstract + Introduction
### 背景
- 手动编排: 早期多智能体(MetaGPT), 高度依赖人类专家的先验来设计交互流程
- 自动化设计: 出现了一些工作, 试图自动搜索最优的Agent架构
- 普遍共识: 致力于寻找一个最优的静态图结构来集中处理数据集中的所有问题
### 挑战
- 想要用一套静态系统囊括所有case, 往往造成很大的问题不适配性
	- 如果一个简单的数学问题, 使用一个复杂结构的系统, 无疑是一种浪费
	- 领域适应性差
- 不可微的优化难题(现在应该已经解决了): Agent由离散的自然语言和工具调用组成, 无法直接更新
### 贡献
>[!核心论点] 
> - 我们应该构建一个Agentic Supernet, 他是一个概率且连续的架构分布
> - 针对每个具体的问题, 从超网中采样处最适合该查询难度的子结构
> - 双重优化: 结合概率分布的梯度更新和基于文本的梯度更新

## Method
### 架构定义
- 智能体算子的定义$$\mathcal{O}=\{\{\mathcal{M}_{i}\}_{i=1}^{m},\mathcal{P},\{\mathcal{T}_{i}\}_{i=1}^{n}\}$$
	- **$\mathcal{M}$ (Models):** 使用了哪些 LLM（比如 GPT-4, Llama-3）
	- **$\mathcal{P}$ (Prompts):** 使用了什么提示词
	- **$\mathcal{T}$ (Tools):** 使用了哪些工具
- 统一性: 作者指出，现有的各种 Agent 方法本质上都是算子的特例
	- **CoT:** 就是 1 个 LLM + 特定 Prompt + 0 个工具
	- **Debate:** 就是多个 LLM + 交互 Prompt
	- **Self-RAG:** 就是 LLM + 检索工具

- 多智能体系统
	- 一个多智能体系统 $\mathcal{G}$ 被定义为一个图：$$\mathcal{G}=\{\mathcal{V},\mathcal{E}\}$$**$\mathcal{V}$ (Vertices):** 选中的算子集合 
	- **$\mathcal{E}$ (Edges):** 算子之间的连接关系

- 智能体超网
	- 超网 $\mathcal{A}$ 是一个分层的、条件概率分布的集合$$\pi_{l}(\mathcal{O})=p(\mathcal{O}|\mathcal{A}_{1:l-1})$$整个超网定义了所有可能的 Agent 系统配置的联合概率

- 问题定义
	- **目标函数：** 给定一个数据集 $\mathcal{D}$（包含问题 $q$ 和答案 $a$），我们要找到一个最优的分布 $\mathbb{P}(\mathcal{G}|q)$，使得下式最大化：$$\max_{\mathbb{P}(\mathcal{G}|q)} \mathbb{E}_{(q,a)\sim\mathcal{D}} [U(\mathcal{G};q,a) - \lambda \cdot C(\mathcal{G};q)]$$**$U(\cdot)$ (Utility/Performance):** 效用，即算得对不对、好不好
	- **$C(\cdot)$ (Cost):** 成本，即 Token 花费或时间开销
	- **$\lambda$ (Lambda):** 权衡系数。这是一个**惩罚项**

### 智能体超网的问题感知的动态架构
- 动机: 我们要更具问题的难度和领域来抽取合适的多智能体架构
- 工作机制: 
	- Supernet结构: 构建一个多层的DAG, 每一层都包含多个算子, 如CoT, ReAct, Debate, Reflextion
	- Controller: 轻量的神经网络(MoE风格), 当Query进来时, Controller更具问题的特征, 计算每一层各个操作被选中的概率
	- 早退机制: 系统包含特殊的操作: 早退, 当控制器认为当前层已经足够解决问题, 就会激活早退, 截断后续操作
- 关键细节:
	- **架构的条件概率分布：** 论文将 Multi-Agent System (MAS) $\mathcal{G}$ 的生成建模为条件概率：$$p(a|q,\pi,\mathbb{O}) = \int e(a|\mathcal{G})\mathbb{Q}_{\phi}(\mathcal{G}|q,\pi,\mathbb{O})d\mathcal{G}$$
		- 这里 $\mathbb{Q}_{\phi}$ 是控制器，它决定了针对查询 $q$，生成架构 $\mathcal{G}$ 的概率。
	- Controller的工作流$$\mathbb{Q}_{\phi}(\mathcal{G}|q,\pi,\mathbb{O}) = \prod_{l=1}^{L}\pi_{l}(\mathcal{V}_{l}|q,\{\mathcal{V}_{h}\}_{h=1}^{l-1})$$
		- 在决定第 $l$ 层派谁上场时，Controller 不仅看**用户的问题 $q$**，还要看**前几层选了谁 ($\mathcal{V}_{h}$) 及其产出的状态**。
	- MoE 风格的路由$$\mathcal{V}_l = \{ \text{operators} \mid \sum \text{scores} > thres \}$$作者使用一个阈值机制，只激活那些累积概率超过阈值的 Operators

### 成本约束下的超网优化
- 动机: Supernet中包含的两类参数
	- **连续参数 $\pi$：** 路由的概率（可以求导）
	- **离散参数 $\mathbb{O}$：** Operator 内部的 Prompt 和工具调用（**黑盒，不可求导**）
	- 传统的梯度下降无法优化 Prompt 内容
- 训练的总目标
	- $$\min \mathbb{E}_{(\mathcal{G},a)\sim\mathcal{D}} [ -p(a|q,\pi,\mathbb{O}) + \lambda \cdot C(\mathcal{G};q) ]$$
		- $p(a|q...)$策略网络的输出
		- $C(\mathcal{G};q)$, 惩罚项, 成本越低越好
- Controller 做出的决定是离散的, 我们比较将其连续化
	- 经验贝叶斯蒙特卡洛
		- **采样 (Sample)：** 针对同一个问题，Controller 尝试采样出 $K$ 种不同的架构 ($\mathcal{G}_1, ..., \mathcal{G}_K$)
		- **行与评估：** 让这 $K$ 种架构分别去解题，看看谁算对了，谁花钱少。
		- **计算权重 ($m_k$)：**$$m_k = \frac{p(a|q,\mathcal{G}_k)}{\sum p} - \lambda \cdot \frac{C(\mathcal{G}_k)}{\sum C}$$
		- **更新梯度：**$$\nabla_{\pi}\mathcal{L} \approx \frac{1}{K} \sum [ m_k \nabla_{\pi} p(\mathcal{G}_k) ]$$**解读：** 告诉 Controller 神经网络：“刚才那个 $\mathcal{G}_k$ 表现不错（$m_k$ 高），下次遇到类似问题，请**增加**生成这种架构的概率！” 
- 算子自优化
	- 优于Prompt是无法求导的, 那么我们直接让Agent进行自我反思, 让他们对自己的架构做出决定
	- **更新 (Update)：** 优化器 LLM 返回三种类型的“文本梯度”来修正算子：
	- **$T_{\mathcal{P}}$ (Prompt Gradient)：** 修改提示词。例如：“在提示词里加上‘请一步步思考’。”
	- **$T_{\mathcal{T}}$ (Temperature Gradient)：** 调整温度。例如：“模型由于太发散导致错误，建议降低温度。”
	- **$T_{N}$ (Node Structure Gradient)：** 调整结构。例如：“辩论算子里的辩手太少了，增加一个反方辩手。”
## Exp
#### 结果矩阵
![[Pasted image 20260208141129.png]]
#### 效用性能
![[Pasted image 20260208141345.png]]


## 启示
- 收到NAS, 神经架构搜索(搜索最优CNN)的启发
- 初具主从控制的架构, 但是其主控制器并不是LLM, 这就导致了一定程度上的复杂设计
- 太过于复杂了, 这相当于单独训练一个神经网络作为编排器, 但是当今LLM的能力不断跃升, 已经具备分解任务的能力, 而且解释性也更强, 也免去了算子分配的复杂操作