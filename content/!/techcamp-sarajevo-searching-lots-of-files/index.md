---
title: Searching lots of inconveniently formatted files at once
kind: article
created_at: 2013-05-25
relationships: ['techsoup', 'state-dept']
---
*This is cross-posted to [community boost_r](http://communityboostr.org/resource/searching-lots-inconveniently-formatted-files-once).*

At [TechCamp Sarajevo](http://wiki.techcampglobal.org/index.php?title=TechCamp:Sarajevo_Agenda),
some transparency advocates wanted a simple way to search lots of PDF and Word
documents at once without knowing much about computers. Here's what we came up with.

## What sort of search?
To decide which software to use, first decide which of these three software
types you want.

We were mostly thinking about full text search. **Full text search** just displays
all of the occurrences of a particular phrase, like when you use one of those
"Find" boxes where you type something and see all of its occurrences.

If your files start as scans of paper documents (images), you'll need to run
the files through **optical character recognition** first.

Rather than searching specific phrases, you might consider clustering the many documents
by **document similarity**. This is probably a bit different than you are used
to, so it might yield results that you hadn't anticipated.

## Full text search

### Software
There are a lot of tools in this area. First decide whether you want the files
to be stored online. This can help with collaboration and can simplify backup.
On the other hand, keeping files offline can be more secure, reduce your
dependence on a good internet connection and give you more flexibility with software.

If you want to store your files **online**, use
[Google Drive](https://drive.google.com) or
[DocumentCloud](http://www.documentcloud.org).
If you want to keep them **offline**, use 
[DocFetcher](http://docfetcher.sourceforge.net/),
[Spotlight (Mac)](https://developer.apple.com/technologies/mac/) or
[Alfresco](http://wiki.alfresco.com/).

DocumentCloud and DocFetcher are free/libre/open-source.

### Directions
Full text search was our main focus, so we composed directions for using the
full text search software.

The online tools (Google Drive and DocumentCloud) work reasonably similarly to
each other. To search with these tools,

1. Make an account.
2. Upload the documents.
3. Select the documents.
4. Search.

The offline tools (DocFetcher, Spotlight and Alfresco) also work similarly to
each other. For these,

1. Install the software.
2. Put the documents on your hard drive, and remember where you put them.
3. Inside of the program (Spotlight, DocFetcher or Alfresco), indicate that the
    directory containing the files should be "indexed". This might also be
    phrased as "adding" a directory.
4. Inside of the program, "index" your hard drive.
5. Search.

## Optical character recognition
Adobe Acrobat Pro can run optical character recognition on several files in batch.

If that doesn't work for you or if you are opposed to proprietary software,
consider the many free/libre/open-source graphical OCR tools.

* [YAGF](http://symmetrica.net/cuneiform-linux/yagf-en.html)
* [lime-OCR](http://code.google.com/p/lime-ocr/)
* [tesseract-gui](http://tesseract-gui.sourceforge.net/)

These free tools do batch OCR across many files, but batch jobs might be less
convenient in these programs than in Adobe Acrobat Pro.

## Document similarity
Try [Overview](https://www.overviewproject.org/) in conjunction with
[DocumentCloud](http://www.documentcloud.org/).
To learn more, you can watch a [video](https://www.overviewproject.org/help)
about it or read its [blog](http://overview.ap.org/).
