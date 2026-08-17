---
slug: executable-code-blocks
sidebar_position: 420
title: 代码块 + Quarto 可执行代码
---
通过 / 菜单，可以在文档中添加代码块。Lattics 的代码块支持的功能包括：

* **语法高亮**：涵盖所有主流的编程语言，甚至包括了 Matlab
* **代码自动换行**：默认是不换行的，但是可以样式模版界面中的代码块样式中开启
* **自定义样式**：可在样式模版中设置代码块的字号、边框、背景色等样式

  <Image src='/images/code/No-181-image.png' width={35} widthSm={75}></Image>

* **Tab 缩进**： 可以使用 Tab 缩进代码行，并且可以选中多行代码，使用 Tab 批量缩进
* **行内代码**，可通过 / 菜单在行内添加，或者通过 Markdown 的行内代码语法 ` ` 添加 ，需要注意，两个引号之间需要有空格

Lattics 后续也将支持**可执行代码块**，包括 Python，R，Julia，JavaScript 等。 **Lattics 并不负责调试代码**，调试代码需要通过 VSCode 等 IDE 开发工具完成，添加到 Lattics 中的**可执行代码将被默认认为是可以正常运行**的

Lattics 支持可执行代码的目的是能够实现类似 Jupyter Notebook, R Markdown 等工具的效果，即能够在文档中插入通过代码运行所绘制出来的图表和图形，甚至可以进行交互，以**提高文档的可计算，可交互性**，可以直接导出非常高质量的学术论文和研究报告，并且**使得文档中的数据和代码可复用**。
