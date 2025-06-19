---
sidebar_position: 440
slug: bibliography
title: Bibliography
---

When writing papers and research reports, it is often necessary to cite other papers or books, and serious academic journals have also set different standards for bibliography styles. Therefore, citing, managing, and editing the content and style of bibliography often takes up a lot of time in writing papers and reports, and these tasks have no real value for paper writing and should be completed automatically.

To this end, Lattics innovatively supports five ways to cite reference, and provides automatically generating bibliography lists, which will greatly improve the efficiency of citing references in paper and report writing.

1. **Copy or drag the content from Zotero**

   Zotero is a widely used bibliography management software. You can use it to highlight PDF papers and take notes. After installing the Lattics for Zotero plug-in, you can copy or drag the notes or PDF highlights from Zotero to the Lattics article as a citation, and the metadata of the reference will be included. For specific usage methods, please refer to the "Zotero" section of the user guide, or watch the video tutorial provided by the Lattics official website
2. **Extract PDF content as cards and cite them in the articles**

   First, drag or import the PDF file into the project outline. If the PDF file carries literature metadata, Lattics will automatically parse it. If the PDF file lacks them, you can supplement and edit it in the extension information interface of the PDF file. For example, the title, author, journal name, publication date, DOI and other information can be manually added and edited.

   Then, open the PDF in Lattics for reading. you can select some content excerpts as cards. These cards will automatically carry the metadata and record the page number. In the extension information interface of the card, the link to the PDF will be displayed in the backward link. Click the link, you can open the PDF and locate the corresponding page position.

   Finally, drag the card from the card library to the article, or directly use @ to quote it.
   <Video src="/images/bib/new_bib.webm" />

3. **Directly cite PDF files or bibliography files**

   After importing the PDF file, you can drag the PDF directly into the Lattics articles, or quote the PDF file through @ shortcut.

   Sometimes, you may not be able to obtain the PDF file, but you can obtain its reference metadata, such as in BibTex, RIS, and EndNote formats, which are easily available on academic journal websites or pre-print websites. Lattics supports to create and import of these information. The method to create a bibliography file in Lattics is firstly copy the reference information in BibTex, RIS, or EndNote formats on the web page, and then create a new bibliography in the Lattics project outline, paste them into the editing pop-up window, and when the content is recognized as a supported reference format, it can be saved as a Bib file.

   You can also import reference files in batches by dragging them into the project outline. Currently supported reference formats are: BibTex, RIS, and EndNote. Created and imported reference files can also be dragged into Lattics articles, or cited them by @ shortcut

   <Video src="/images/bib/pdf_locate.webm" />

4. **Extract as a card in the Web app and cite in the article**

   Web content is also a source of references. In Lattics, you can open the Web app, visit the corresponding web page, select part of the content on the page, and drag it directly into the Lattics article, or extract it as a card and then cite it in the article. Lattics will automatically create metadata for the card, including article title, author, URL, publication time, access time, etc.
5. **Create cards directly and manually add metadata to them**

   In some cases, you may not be able to obtain the original files or source link, but only have excerpts of the content. In this case, you only need to create a card in Lattics and add metadata such as title, author, journal name, publication date, etc. in the extension information interface of the card, and then to cite them as bibliography in the article.

The above five methods are ways to add literature citations in articles. To automatically create a bibliography list in a article, you also need to add a bibliography block element and adjust the required bibliography style:

1. **Adding a Bibliography Block Element**

   In the article, where the bibliography list needs to be displayed, add the bibliography block element by pressing the / shortcut. After adding the bibliography block element, the reference citations already added to the article will be automatically displayed in the style of the bibliography. During the editing process of the article, when the position of the reference citation changes, the bibliography list number will be automatically adjusted.

   The style of the bibliography can be adjusted freely. Lattics has built-in more than 10 common journal CSL styles, which can be switched in the bibliography block element with one click. After switching, the style of each bibliography in the text will also be automatically refreshed.

   The bibliography block element can be converted to the text to editing and proofreading
   <Video src="/images/bib/auto_bib.mp4" />

2. **Customize bibliography templates and styles**

   There are so many journals that we cannot create bibliography styles for each of them, so Lattics uses the CSL bibliography specification. You can download more CSL templates and import them into Lattics, or you can refer to a CSL template, modify the XML parameters, and create your own bibliography style.

   Download English CSL template: [https://github.com/citation-style-language/styles](https://github.com/citation-style-language/styles)
   <Video src="/images/bib/import_csl.webm" />

**Notice**:

1. **Display bibliography list in footnotes**
   Unlike traditional text editors such as Word and WPS, if you want to display bibliography in footnotes, you only need to select the CSL style of note type in the bibliography block element. In the built-in CSL templates, Bluebook Law Review and China Nations Standard GB T 7714-2015 note are both of this type.

   After switching to the note type CSL style, when exporting PDF or Word files, Lattics will automatically calculate and display the bibliography at the bottom of each page or at the end of the article, depending on the selected footnote display position when exporting PDF or Word files

2. **Display the bibliography list in the footnote and at the end of the article same time**

In some special cases, if you need to display the bibliography list at the bottom of each page and at the end of the article same time, you also need to select the note type CSL style, and set the footnote position to "bottom of the page & end of the document" in the PDF and Word export interface

The above is the method of adding, managing and editing literature citations and bibliography lists in Lattics. They are more convenient than traditional editor Word and WPS, because everything is automated and can be completed by dragging and dropping. The style switching and number refresh of the bibliography list are all automatic, without manually triggering any unnecessary operations.
