---
slug: ai
sidebar_position: 140
title: AI 辅助
sidebar_label: AI 辅助
---

## AI 辅助

随着大语言模型的发展，AI 在内容生成、数据分析与处理、软件开发等领域都有了很大的进展。Lattics 的 AI 功能围绕内容创作、深度研究和灵感启发设计，强调模型选择、人工校正、批量处理和隐私保护。

### 1. 多种模型接入

Lattics 支持主流 AI 模型接入方式。除了 OpenAI、Anthropic、Google Gemini、DeepSeek、GLM、Kimi 等模型厂商，也支持 OpenRouter、OpenCode 等第三方模型接入方式，并支持本地 Ollama 模型和自行部署在云端的模型。

<Image src="/images/ai/model-providers.jpg" width={80}></Image>

### 2. 按工具配置模型

AI 翻译、校对、改写、创意写作、深度研究等功能都可以分别指定模型。你可以为不同任务选择更适合的模型，例如用一个模型处理翻译，用另一个模型处理研究或创意写作。

<Image src="/images/ai/tool-model-settings.jpg" width={80}></Image>

### 3. 人与 AI 协作

Lattics 的 AI 生成结果可以继续编辑。如果你认为 AI 翻译结果不够理想，可以直接在翻译内容上修改，修改后的信息会作为后续翻译的参考和修正依据。

<Image src="/images/ai/editable-translation.jpg" width={80}></Image>

你也可以对 AI 生成的结果进行评论，并回溯 AI 生成的历史版本。例如多轮改写后，如果发现之前某个版本更合适，可以回到该版本继续修改。

<Video src="/images/ai/version-history.mp4" width={80}></Video>

在 AI Chat 中，可以把内容直接拖拽到 Lattics 的文章中。如果内容包含网页链接，Lattics 会保留链接并生成参考文献信息，包括标题、URL 和访问日期，方便论文写作和资料整理。

<Video src="/images/ai/ai-citations.mp4" width={80}></Video>

### 4. 批量处理

你可以在项目大纲中选中多篇文章，批量翻译或改写；也可以在 AI Chat 中通过 @ 引用多篇文章，让 AI 对这些内容进行批量处理，从而提升资料整理和内容加工效率。

<Image src="/images/ai/batch-at-mentions.jpg" width={80}></Image>

### 5. 隐私保护

Lattics 提供项目范围授权能力。默认情况下，AI 只能读取用户选中的文字、指定的文章，或通过 @ 明确指向的内容，不会自动访问所有项目内容。如果需要把项目内容作为本地知识库，需要先把对应项目的访问权限授权给 AI。

为了进一步提升敏感数据安全性，Lattics 会对提交给 AI 的内容进行脱敏处理，包括电话号码、邮箱地址、身份证号码、API Key、Token 等隐私信息。
