---
分区:
tags:
  - LLM
  - MLLM
源码:
---
## Abstract + Introduction
### 背景
- 以LLAVA为代表, 他们使用CLIP或SigLIP等视觉编码器提取高级语义特征, 然后再映射到LLM中, 只能解决理解性问题, 不能解决生成任务
- 以Diffusion模型或者基于VQ-VAE为代表的自回归模型, 他们更加擅长与生成任务
- 统一派: 为了实现理解和生成的统一, 之前的研究倾向于使用VQ-tokenizer这类单一的视觉编码器来同时负责理解和生成
### 挑战
- 理解任务需要图像的高级语义, 对细节不敏感
- 生成任务需要底层细节, 对绘画结构要求高
- 使用单一编码器解决生成和理解任务, 会造成模型陷入矛盾为了保留生成图像的细节, 必然会牺牲语义的抽象能力
### 贡献
>[!核心论点] 
> - 我们应该把视觉编码器和文本编码器解耦
> - 使用SigLIP进行理解, VQ-Tokenizer进行生成, 但是最终共享同一个自回归Transformer后端
## Method
### 工作机制
#### 对于纯文本
- 使用LLM自带的tokenizer
#### 多模态理解任务
- 图像->SigLIP Enocder提取高维语义 -> understanding Adapter -> LLM
#### 视觉生成任务
- 图像 -> VQ-tokenizer -> Generation Adapter -> LLM

#### 统一处理
- 所有的特征最终拼接为一个一维特征
#### 输出
- 文本回复: 使用 Text Head来输出离散的token
- 图像生成: 使用 Image Head 输出李淑娜的图像token_id 然后解码为像素

## Exp



## 启示