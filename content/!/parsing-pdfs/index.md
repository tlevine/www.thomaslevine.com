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

I'll show a few different approaches to parsing and analyzing
[these](https://github.com/tlevine/scott-documents) PDF files.
Different approaches make sense depending on the question you ask.

These files are public notices of applications for permits to dredge or fill
wetlands. The Army Corps of Engineers posts these notices so that the public
may comment on the notices before the Corps approves them; people are thus
able to voice concerns about whether these permits would fall within the rules
about what sorts of construction is permissible.

Theses files are
[downloaded daily](https://github.com/tlevine/scott/tree/master/reader)
from the [New Orleans Army Corps of Engineers website](http://www.mvn.usace.army.mil/ops/regulatory/publicnotices.asp?ShowLocationOrder=False)
and renamed according to the permit application and the date of download.
They feed into [this website](http://scott.thomaslevine.com), which is primarily
used by the Gulf Restoration Network in their efforts to protect the wetlands.

## If you don't need the file contents
Basic things like file size, file name and modification date might be useful
in some contexts. In the case of PDFs, file size will give you an idea of how
many/much of the PDFs are text and how many/much are images.

an initial pass through the data
