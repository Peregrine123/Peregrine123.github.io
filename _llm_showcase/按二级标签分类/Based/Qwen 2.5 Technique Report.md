---
分区: arxiv
tags:
  - LLM
  - Based
源码: 有
---
## Abstract + Introduction
- 背景
- 挑战
- 贡献
	- 在pre-training阶段使用18T数据
	- post-training阶段使用复杂的RL方法
		- DRPO, DPO
		- 提高了指令遵循, 长文本生成和结构化数据的能力
## Method

#### 分词器
- 使用BBPE(Byte-level-byte-pair encoding)

#### Pre-training
##### 预训练数据
- 更好的数据过滤: 使用 Qwen2 作为评估器
- 更好的math和code数据
- 更好的合成数据: 源自Qwen系列
- 更好的数据fusion
	- internet上电子商务, 娱乐和社交媒体的信息被过渡呈现了, 要降采样
	- 科技, 学术则是过少呈现, 要上采样
##### Scaling Law对超参数的挑选有帮助
##### 长文本训练
- 逐步增加context的长度, 从32668, 然后指数上升, 分多阶段进行训练

#### Post-training
- 扩展的[[SFT]]
- 两阶段的RL
	- 在线RL
		- 提升模型的数学, 代码, 指令遵循等能力
	- 离线RL
		- 人类对齐阶段
## Exp
- 模型数据
## 启示