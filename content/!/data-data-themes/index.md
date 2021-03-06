---
title: Themes in my data research about data
tags: ['open-data']
---
## Premise
I've been looking at what happens when download lots of spreadsheets
(and associated metadata) and apply crude analyses across all of them
at once.

## Methods
I [download](/!/better-datasets-about-open-data/)
a bunch of spreadsheets and spreadsheet metadata from various
open data catalogs.
I then assemble all this stuff into 
[spreadsheets about spreadsheets](/!/better-datasets-about-open-data/).

[![A spreadsheet of spreadsheets](/!/dataset-as-datapoint/spreadsheet-spreadsheet.png){:.wide}](/!/dataset-as-datapoint)

Usually, each record corresponds to a full sub-spreadsheet; you could say
that I am aggregating each spreadsheet to produce a few statistics that
get put into this spreadsheet.

[![A drawing of spreadsheets being turned statistics about spreadsheets](/!/dataset-as-datapoint/dataset-features.jpg){:.wide}](/!/dataset-as-datapoint)

## Relevance
As I see it, the recent "open data" efforts have come about because we see
value in [sharing](/!/what-is-open-data/) but are not very good at it.
One person can understand what data she has and where they come from, but it's
hard to convey this understanding, even to small team that is only using a few
datasets (spreadsheets).

## Applications
In looking at all these spreadsheets, I've wound up studying how people share
data, and I've been coming up with some things to assist in the sharing of
data. I describe below three ways of thinking about what I've been doing, but
they're really all the same thing.

### Finding relevant data without good metadata
I think about two broad issues relating to the
[searching of spreadsheets](/!/searching-data-tables).

**Searching across publishers**.
It's hard to search for the turnstile turn log data for the New York Subways
without knowing that the data get released by the Metropolitan Transit Authority.
What if we didn't have to know that, just like with the modern internet search
engines. [OpenPrism](http://openprism.thomaslevine.com) is a prototype of that idea.

**Using the structure of spreadsheets**.
We search for spreadsheets the same way we search for news articles. What if
we took advantage of the structure that is present in spreadsheets? I think we
can improve our search by looking at the numerical relationships among different
spreadsheets. 

People always complain about the inadequete quality of metadata, so I don't
expect metadata to be useful. We can build search tools that can figure out
the metadata that we wished we had.

### Quantifying data quality
Lots of people say we should have good quality data, and some people have
articulated what would make data good.

* Open Knowledge Foundation [Open Data Census](http://census.okfn.org/)
* Tim Berners-Lee [Five Stars](http://inkdroid.org/journal/2010/06/04/the-5-stars-of-open-linked-data/) of open linked data.
    <!-- http://opendata.stackexchange.com/a/529 -->
* Open Government Working Group [8 Principles of Open Government Data](http://www.opengovdata.org/home/8principles)
* Sunlight Foundation [Open Data Policy Guidelines](http://sunlightfoundation.com/opendataguidelines/)
* Open Data Institute [Certificates](https://certificates.theodi.org/)

These are written out in words. If we write them out as numbers, we might be
able to calculate them more easily. For example, if we
[automatically check whether links are alive](http://thomaslevine.com/!/zombie-links/),
we can tell quite quickly when things break.

### Effects of releasing data
People say that open data is good, that good data have the above-linked
characteristics, and that good things will happen when people release the
data. But is any of that actually the case?

I would love to asses how the release a dataset impacts real things like
trust in government and economic growth, but that's a lot of work. The closest
I've gotten is by looking at the
[different software products](/!/socrata-products/) that people use and at
how these products get used.

## Thoughtful thought
I would love for [most of our content to be shared](/!/openprism/), even the
sloppy drafts and incomplete spreadsheets. Rather than making everything nice
before we release it, let's just get better at dealing with messy stuff.
