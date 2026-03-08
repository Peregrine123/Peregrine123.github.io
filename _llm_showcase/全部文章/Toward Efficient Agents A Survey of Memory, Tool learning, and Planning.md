---
分区:
tags:
  - LLM
  - Survey
源码:
---
## 分类学
### 高效记忆
#### 记忆构建
- 定义: 将记忆压缩为摘要表示, 而非简单的appending
- 工作记忆
	- 文本型: 通过重写或压缩保持prompt恒定
		- COMEDY: 采用两阶段记忆蒸馏，先提取会话中的关键事件和用户画像，再压缩成紧凑表示。
		- AgentFold: 主动将历史折叠成多尺度摘要，保留最新的一轮完整对话。
	- 隐空间记忆: 以KV Cache, Hidden State等连续信号存在, 不显式的占用token
		- Activation Beacon: 将上下文分块，按比例插入 Beacon Token，将层级 KV 激活值压缩进 Beacon 中，丢弃原始 Token 激活值。
		- MemoryLLM: 维护一个固定大小的可训练记忆 Token 池，通过自更新机制复用潜在知识。
- 外部记忆
	- 定义: 存储在模型外部, 如数据库, 知识图谱, 通过检索形成prompt才能使用
	- Item-based Memory (条目型): 存储片段、摘要或结构化条目。
		- MemoryBank: 存储每日对话记录并总结事件，受艾宾浩斯遗忘曲线启发
		- Agentic Plan Caching: 将成功的执行轨迹转化为 "(keyword, plan template)" 对进行缓存，避免重复规划。
	- Graph-based Memory (图结构型): 构建实体-关系图，适合多跳推理 。
		- Zep: 构建具有时间感知的知识图谱（Temporal KG），存储带有有效期的事实边。
		- AriGraph: 更新统一的语义-情景记忆图，将观察结果作为情景节点链接到语义图中。
- Hierarchical Memory (层级型): 多级存储，支持从粗到细的访问 。
	- MemGPT: 模仿操作系统，将记忆分为 System Instructions, RAM和 Disk，通过分页管理。
	- MemOS: 标准化记忆为 "MemCubes"，包含元数据头和负载，支持跨层级移动。

#### 记忆管理
- 定义: 动态更新, 删除或者合并记忆的策略, 防止存储爆炸
- Rule-Based: 
	- **Mechanisms:** 基于遗忘曲线的衰减（如 MemoryBank ）、FIFO 缓冲区剔除。
- LLM-Based
	- **Mechanisms:** 选择离散操作（ADD/UPDATE/DELETE，如 Mem0 ）或生成式更新（重写相关笔记，如 A-MEM ）
- **Hybrid (混合式):** 结合规则的触发器和 LLM 的语义操作 。
	- MemoryOS: 短期记忆用 FIFO，中期记忆用热度评分（Heat scores），长期记忆更新才调用 LLM。
#### 记忆访问
- 定义: 决定检索什么内容并将其放回给LLM
- 选择
	- **Rule-enhanced Retrieval:** 在检索分中加入时间衰减、重要性评分（如 Generative Agents ）。
	- **Graph-based Retrieval:** 从锚点实体出发扩展邻居子图, AriGraph
- 集成
	- **Textual Integration:** 压缩检索结果，仅将关键句子或结构化笔记放入 Prompt（如 ACE ）。
	- **Latent Integration:** 将检索到的 KV 对直接注入注意力机制，不占用上下文窗口（如 Memory³ ）

### 高效工具学习
#### 工具选择
- 解决问题: 从海量工具池中筛选相关工具, 避免Prompt塞满工具描述
- 外部检索器: 独立模型, 计算Query与tool描述的相似度
	- 使用对比学习, 选中工具后从query中减去该工具的语义表示, 逐步选择
- 多标签选择: 针对固定工具集, 视为分类任务
	- 使用小魔星输出工具概率分布, 仅将＞50的放入prompt中
- 基于此表方法: 将工具特殊为token嵌入词表
	- 将工具映射为token, 生成该token即出发调用, 无需上下文演示
#### 工具调用
- 解决问题: 优化参数填充和执行过程, 降低延迟和token消耗
- 并行调用
	- 并行执行无依赖的函数调用(DAG调度)
- 成本感知
	- 将工具调用视为背包问题, 在预算约束下规划调用
- Test-Time Scaling
	- 利用A* 搜索策略, 使用任务特定的代价函数剪枝错误分支
#### 工具集成推理
- 解决问题: 优化何时调用工具的决策逻辑
- 选择性调用: 
	- 使用CoT数据集微调, 训练模型判断使用参数化知识还是外部工具
- 策略优化
	- 使用RL, 在RL目标中加入工具使用惩罚, 训练模型在不牺牲正确率的前提下减少调用
### 高效规划(Planing)
#### 单智能体规划
- 推理时策略
	- Adaptive Budget: 快慢思考结合
	- Structured Search: 将MCTS应用于Agent轨迹
	- decomposition: 解耦规划与执行
- 基于学习的进化
	- 构建可重用的技能库, 以避免重复规划
- 多智能体协同
	- 拓扑图优化
		- Chain-of-Agent: 链式传递上下文, 线性复杂度
		- 动态学习剪枝低效的通信边
	- 协议通信
		- 使用结构化的伪代码进行交互
	- 蒸馏
		- 将复杂的交互图蒸馏到单个学生模型中, 推理是无需多智能体协调