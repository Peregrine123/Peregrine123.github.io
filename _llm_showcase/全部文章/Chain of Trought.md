---
分区:
tags:
  - LLM
  - Prompting
源码:
---
## Abstract + Introduction
- 背景
	- 由[[GPT-3]]开启的预训练-Prompt范式, 让[[In-context learning]]这一概念成为主流, 学者都在研究如何通过精心设计Prompt与进行few-shot, 让模型表现出更好的能力
	- [[Scaling Law]]深入人心
- 挑战
	- 在复杂推理层面, LLM无法表现出多步推理的能力, 往往在数学, 编程等复杂人物上失败, LLM似乎只是在做模式匹配, 而非思考
	- 少样本提示下, 即问题->答案的示例, 无法激发模型深层推理的能力
	- 模型给出错误答案时, 我们很难得知模型为何犯错
- 贡献
	- 核心论点: LLM本身具备复杂推理的潜能, 但需要被引导出来, 他们主张通过[[Chain of Trought]]的方式, 展现出模型的内在思考, 再最终得出答案的过程
## Method
### prompt设计
![[Pasted image 20251017095252.png]]
- 在few-shot示例中 自然引入思考的实例, 让模型在回答时进行自发思考
## Exp
### math上的结果
![[Pasted image 20251017095421.png]]
- 可以看出, 通过CoT技术, 模型在数理逻辑能力上得到大幅提升
### CoT在不同模型参数量下对性能的提升
![[Pasted image 20251017095818.png]]
- 可以看出 CoT 对模型都有这显著的性能提升


## 启示
- CoT技术 为后来的RL reasoning大时代打下坚实基础