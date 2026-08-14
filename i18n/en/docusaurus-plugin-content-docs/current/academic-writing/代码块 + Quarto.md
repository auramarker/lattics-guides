---
slug: executable-code-blocks
sidebar_position: 420
title: Code Block + Executable Code
---

Through the / menu, you can add Code Block into the document. The functions supported by Lattics code blocks include:

* **Syntax highlighting**: include all mainstream programming languages, even Matlab
* **Automatic wrapping**: no line wrapping by default, but it can be turned on in the code block style in the style template interface
* **Custom style:** you can set the font size, border, background color and other styles of the code block in the style template

  <Image src='/images/code/No-512-image.png' width={35} widthSm={75}></Image>

* **Tab indentation**: You can use Tab to indent code lines, and you can select multiple lines of code and use Tab to indent in batches
* **Inline code**, it can be added inline through the / menu, or added through Markdown's inline code syntax ` `. Note that there must be a space between the two quotation marks.

Lattics will also support executable code blocks in the future, including Python, R, Julia, JavaScript, etc. **Lattics is not responsible for debugging code**, which needs to be done through IDE development tools such as VSCode. **The executable code added to Lattics will be assumed to be able to run normally by default.**

The purpose of Lattics supporting executable code is to achieve the result of tools such as Jupyter Notebook and R Markdown, that is, to draw charts and graphics by running code in the document, and even to interact with them, to **improve the computability and interactivity of the document**, and to export very high-quality academic papers and research reports, in which **the data and code are reusable**.
