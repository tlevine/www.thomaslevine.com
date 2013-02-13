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

The histogram shows us two modes. The smaller mode, around 20 kb, corresponds to
files with no images (PDF export from Microsoft Word), and the larger mode
corresponds to files with images (scans of print-outs of the Microsoft Word
documents). It looks like about 80 are just text and the other 170 are scans.

This isn't a real histogram, but if we'd used a real one with an interval scale,
the outliers would be more obvious. Let's cut off the distribution at 400 kb
and look more closely at the unusually large documents that are above that
cutoff.

What's in that 7 mb file? Well let's find it.

    $ ls --block-size=K -Hs */public_notice.pdf | grep '742.K'
    7424K MVN-2010-1080-WLL_MVN-2010-1032-WLLB/public_notice.pdf

You can see it [here](https://github.com/tlevine/scott-documents/raw/master/MVN-2010-1080-WLL_MVN-2010-1032-WLLB/public_notice-2012-08-09.pdf).
It's not a typical public notice; rather, it is a series of scanned documents
related to a permit transfer request. Interesting.

Next, how are two large files within 5 kb of each other?

    $ ls --block-size=K -Hs */public_notice.pdf | grep 860K
    860K MVN-2012-006152-WII/public_notice.pdf
    860K MVN-2012-1797-CU/public_notice.pdf

Those are here

* [MVN-2012-006152-WII](https://github.com/tlevine/scott-documents/raw/master/MVN-2012-006152-WII/public_notice-2012-11-20.pdf).
* [MVN-2012-1797-CU](https://github.com/tlevine/scott-documents/raw/master/MVN-2012-1797-CU/public_notice-2012-10-02.pdf).

Hmm. Nothing special about those. People see patterns in randomness.

Now let's look at some basic properties of the pdf files. This will give us a
basic overview of one file.

    $ pdfinfo MVN-2013-00026-WKK/public_notice.pdf
    Creator:        FUJITSU fi-4010CU
    Producer:       Adobe Acrobat 9.52 Paper Capture Plug-in
    CreationDate:   Fri Jan 25 09:45:08 2013
    ModDate:        Fri Jan 25 09:46:16 2013
    Tagged:         yes
    Form:           none
    Pages:          3
    Encrypted:      no
    Page size:      606.1 x 792 pts
    Page rot:       0
    File size:      199251 bytes
    Optimized:      yes
    PDF version:    1.6

Let's run it on all of the files.

    $ for file in */public_notice.pdf; do pdfinfo $file && echo; done
    # Lots of output here

What was used to produce these files?

    $ for file in */public_notice.pdf; do pdfinfo $file|sed -n 's/Creator: *//p' ; done|sort|uniq -c
    33 Acrobat PDFMaker 10.1 for Word
    48 Acrobat PDFMaker 9.1 for Word
    10 FUJITSU fi-4010CU
    135 HardCopy
    7 HP Digital Sending Device
    2 Oracle9iAS Reports Services
    6 PScript5.dll Version 5.2.2
    4 Writer

When were they created?

    for file in */public_notice.pdf; do pdfinfo $file|grep CreationDate: > /dev/null && date -d "$(pdfinfo $file|sed -n 's/CreationDate: *//p')" --rfc-3339 date ; done
    2012-07-03
    2012-07-06
    2012-07-06
    2012-07-06
    # ...

How many pages do they have?

    $ for file in */public_notice.pdf; do pdfinfo $file|sed -n 's/Pages: *//p' ; done | hist 1
     1    |   1 | 
     2    |  27 | **********
     3    | 198 | ********************************************************************************
     4    |  16 | ******
     5    |   1 | 
     8    |   2 | 
    10    |   1 | 
    31    |   1 | 
    40    |   1 | 
    TOTAL | 248 |

It might actually be fun to see relate these variables to each other. For
example, when did the Corps upgrade from PDFMaker 9.1 to PDFMaker 10.1?

Anyway, we got somewhere interesting without looking at the files. Now let's
look at them.

## If messy, raw file contents are fine
