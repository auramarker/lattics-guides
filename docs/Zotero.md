---
slug: zotero
sidebar_position: 460
title: Zotero
sidebar_label: Zotero
---

Lattics 深度集成了 Zotero，你可以通过下载并安装 Zotero 插件，即可将 Zotero 的 note 或者 Zotero 中已被标记为高亮的 PDF内容通过拖拽或者复制到 Lattics 中 ，并会自动携带其引用链接和参考文献的元数据

Lattics 提供了两种处理 Zotero 内容的方式：

1. 自动将 Zotero 内容创建为一个卡片，并在文档中以标题引用的方式显示

   以此方式创建的卡片，还会携带上该内容所引自的参考文献元数据。如果在文档中添加参考文献的块元素，该标题引用就会自动变为引用。打开该卡片的扩展信息界面，在界面底部会看到该卡片的来源，点击该来源的链接，可以打开 Zotero 相应的 PDF 文件。这种方式适合于并不需要在文档中显示 Zotero 原文，而只希望添加引用，或者该内容可能会被多次引用的场景
2. 保持 Zotero 内容的文本信息，但在其后显示其引用的PDF链接

   点击此内容之后的链接，将可以打开 Zotero中对应的引用位置。如果在文档中添加参考文献的块元素，该链接将会变为引用。这种方式适合于需要在文档中显示 Zotero 内容原文，并且该原文并不需要重复引用的场景

以上两种方式，可以在设置界面中的“参考文献”部分，开启或者关闭 “自动创建 Zotero 内容为卡片”的选项开关即可
<Image  src="/images/zotero_link.jpg" width={80}/>

**注意**：

1. 有两种 Zotero 插件选项，一种是官方开发的 Lattics for Zotero，支持 Zotero 7，下载链接为：[https://lattics.com/zh-CN/lattics-for-zotero](https://lattics.com/zh-CN/lattics-for-zotero)， 另一种是第三方开发的 Better BibTeX 插件， 支持 Zotero 6，在 Lattics 设置界面中的“参考文献”部分，已经提供了它们的下载链接
2. 如果安装了插件后，并没有能携带引用链接或参考文献元数据，那么请检查一下 Zotero，该插件是否正常启动运行了，也可以重启 Zotero 之后再次尝试
