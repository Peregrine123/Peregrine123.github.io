---
分区:
tags:
  - LLM
  - code_agent
源码:
---
## Abstract + Introduction
### 背景
- 基础模型: 当时的LLM已经具备比较强的代码生成能力, 但是在语法和语义准确性存在偏差
- 多智能体的早期引入: 学界开始引入多智能体的概念, 例如CodeCoT和MapCoder, 这些框架大多使用线性/瀑布流的流程设计
### 挑战
- 错误信号的cascade 传播: 在线性工作流中, 如果上游的Agent误解了需求, 会导致这个错误被叠加传递, 最后生成错误的结果
- 缺乏自我纠错的机制: 现有的工作流往往是一次成型, 缺乏自我反思的能力, 无法回顾自己的生成代码或者测试案例是否高质量, 导致最终的任务不可达
- 稳定性差: 系统的整体表现严重以来与每个Agent节点的表现
### 贡献
>[!核心论点] 
> - 传统的线性多智能体是不够的, 应该构建一个**生成-剪枝**的自我反思机制, 并通过循环反馈来打破级联传播
> - 四角色: Prompt Agent, Coding Agent, Test Agent, Repair Agent
> - 剪枝策略: 在每个阶段生成多个候选项, 利用LLM的自我评估过滤掉低质量输出

## Method
### 分层剪枝机制
#### 动机
- 以往的CoT或者Agent框架, 都是一次成型, 不可避免的会有风险, 所以我们通过多次采样来得到最好的样本
#### 工作机制
- Parse I: Prompt生成: Prompt Agent 并不是输出一个Prompt 而是输出一个 Prompt Pool, 系统会通过评价每个Prompt的质量, 并且使用最佳的Prompt进入下一步
- Parse II(Test Case生成): Test Agent生成 Test Pool, 并剔除掉格式错误或无用的测试用例
- Parse III(Code Generation): Code Agent根据筛选后的Prompt生成多个代码片段, 凡是有语法错误(无法编译)都直接被剔除
- Parse IV(Repair): 即使是修复, 也需要被剪枝, 确保建议的清晰度和相关性 

#### 实现细节
- 基于LLM的评分矩阵$$Score = [Clarity, Relevance, Conciseness, Context]$$
	- 其中每一项取值为 0 或 1
	- 只有当Score全为1, 才能通过
- 基于规则的剪枝筛选
	- **Empty Input:** 输入是否为空？
	- **Incomplete Format:** 格式是否完整？
	- **Invalid Values:** 数值是否非法？ 只有满足所有条件的测试用例才会被保留 。

## Exp
- 该研究证明了**中间过程的质量控制**比单纯增加 Agent 的数量或复杂性更能显著提升代码生成的 Pass@1 率（从 MapCoder 的 72.8% 提升至 77.8%）


## 启示