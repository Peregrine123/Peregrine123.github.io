---
tags:
  - LLM
  - Based
源码:
发表时间:
---
## Abstract + Introduction
### 背景
- GLM-4.5已经证明通过单一的MoE架构整合Agentic，Reasoning 和 Coding(ARC), 即可达到SOTA水平
- LLM正在从被动的知识库转变为主动的问题解决者, 代码范式逐渐转变为Vibe Coding
### 挑战
- 长程交互稳定性: Agent任务通常涉及长达数小时的自主编写与多轮交互, 如何维持长文本下的保真度和逻辑连贯性至关重要
- 强化学习效率: 传统同步强化学习在长路径Agent内采样时会产生严重的GPU Bubble(RL Infra)
### 贡献
>[!核心论点] 
> - 作者旨在推动 AI 从人类驱动的 Vibe Coding 转向 AI 自主规划、实现与迭代的 **Agentic Engineering**
> 	- 采用 **DSA（DeepSeek Sparse Attention）** 降低训练与推理成本并维持长文本保真度
> 	- 构建**异步强化学习基础设施**（slime 框架），通过解耦生成与训练过程极大提升训练效率
> 	- 引入**思维模式创新**（如 Interleaved Thinking 和 Preserved Thinking）提升复杂任务的稳定性

## Method
#### 训练流程图
![[Pasted image 20260219110540.png]]

## Exp



## 启示