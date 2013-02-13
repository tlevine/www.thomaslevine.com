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

Let's [plot a histogram](https://github.com/dzerbino/ascii_plots/blob/master/hist)
of the file sizes. I'm running this from the root of the documents repository,
and I cleaned up the output a tiny bit.

    $ ls --block-size=K -Hs */public_notice.pdf | sed 's/[^0-9 ].*//' | hist 5
      15 |   2 | **
      20 |  55 | ********************************************************************************
      25 |   4 | *****
      30 |   4 | *****
      35 |  11 | ****************
      40 |   4 | *****
      45 |   2 | **
      50 |   2 | **
      60 |   1 | *
      75 |   1 | *
      80 |   1 | *
      95 |   1 | *
     100 |   2 | **
     120 |   1 | *
     125 |   2 | **
     135 |   1 | *
     145 |   3 | ****
     150 |   6 | ********
     155 |   4 | *****
     160 |   8 | ***********
     165 |   3 | ****
     170 |   6 | ********
     175 |   7 | **********
     180 |  24 | **********************************
     185 |  11 | ****************
     190 |   6 | ********
     195 |   4 | *****
     200 |  23 | *********************************
     205 |   7 | **********
     210 |   7 | **********
     215 |   3 | ****
     220 |   3 | ****
     225 |   1 | *
     230 |   1 | *
     235 |   1 | *
     240 |   2 | **
     245 |   2 | **
     250 |   1 | *
     255 |   3 | ****
     265 |   1 | *
     280 |   1 | *
     460 |   1 | *
     545 |   1 | *
     585 |   1 | *
     740 |   1 | *
     860 |   2 | **
     885 |   1 | *
     915 |   1 | *
     920 |   1 | *
     945 |   1 | *
     950 |   1 | *
     980 |   1 | *
    2000 |   1 | *
    2240 |   1 | *
    2335 |   1 | *
    7420 |   1 | *
    TOTAL| 248 |


The histogram two modes
