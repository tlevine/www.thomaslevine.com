---
title: Parsing PDF Files
created_at: 2013-02-13
kind: article
tags: ['data']
---

Much of the world's data are stored in portable document format (PDF) files.
This is not my preferred storage or presentation format, so I often convert
such files into databases, graphs, or [spreadsheets](http://csvsoundsystem.com).

First, some advise people who are unsure as to whether any sort of automated
data format conversion is feasible: It is.

Now, how can we convert PDFs into something more helpful? I sort of follow
this decision process.

1. Do we need to read the file contents at all?
2. Do we only need to extract the text and/or images?
3. Do we care about the layout of the file?
4. Do we need to process images at all, like with optical character recognition (OCR)?

A somewhat separate issue is how clean the result needs to be.

