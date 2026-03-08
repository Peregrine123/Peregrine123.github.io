---
分区:
tags:
  - LLM
  - Based
源码:
---
## Abstract + Introduction
- 背景
	- 业界大多数模型都走向了预训练-微调范式
	- [[GPT-2]]开创了预训练-prompt范式, 一次训练即可完成
- 挑战
	- 这种预训练-微调范式, 需要为不同的任务设置新的标注数据集, 这是昂贵费时的
	- 泛化能力存在局限性
	- 不符合人类的学习方式
	- 不够通用
- 贡献
	- 通过进一步的扩大[[Scaling Law]], 模型可以通过one-shot或few-shot这种上下文学习的模型, 使得模型可以不更新梯度和权重, 就能在各种下游任务上获得好的表现
	- 构建了史无前例的175B的GPT-3模型
	- 创建了zero-shot, one-shot, few-shot的学习范式
## Exp
#### 模型能力随模型参数提升
![[Pasted image 20251016111647.png]]
- 我们可以看到 few>one>zero的情况, 并且scaling law也被验证

#### 部分任务上效果接近微调后的任务
![[Pasted image 20251016112026.png]]
## 启示
- 开启了prompt时代, 好的prompt能够引导模型展现强能力