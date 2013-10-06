---
title: Things to think about when you're building products on open data
tags: ['open-data']
---
People write and talk a lot about
[why we need open data](http://opendatahandbook.org/en/why-open-data/) and 
[how to release open data](http://www.codeforamerica.org/09-24-2013/).
Part of the strategy for making open data useful is getting people to
make [software](http://youtu.be/6cRtbA_d4RI?t=12m40s) that use them.

<!--
To this end, 
"[app](http://nycbigapps.com/)" [competitions](http://opendatachallenge.org/)

http://www.youtube.com/watch?v=LijchWVlirc
-->

I've seen writing and talk about how to make software that uses open data,
but it's usually limited to an explanation that data exist on some website
and maybe that you can query them with an "API".

I've lately been studying [data about open data](/open-data). Among other things,
I now have some ideas of things that people should know if they're making products
that use open data. So here they are.

In my mind, I have a particular category for software that connects to all the
things and lets you make stuff from them. In composing the following thoughts,
I was mainly thinking about this sort of software. But the thoughts might apply
a bit more broadly.

## Storing all these datasets
With open data, you have lots of tiny datasets. The individual open datasets are
usually small enough that any storage approach will be fine if you're only using
a few of them, but you'll need to think a bit if you're storing lots of datasets.

### Centralized
Most people seem to start with storing everything in one relational database,
with one database row per dataset row (possibly across tables or in one table).
Examples include [ScraperWiki](https://scraperwiki.com),
[Exversion](https://exversion.com), and
[Socrata](https://socrata.com)

### Less centralized
You probably don't need your data to be this centralized. Well, at least that's
what I think, and that's what ScraperWiki thought; ScraperWiki eventually switched
to storing each dataset as a separate SQLite3 database. Actually, other aspects
of the infrastructure have become much less centralized. And it makes sense that
both ScraperWiki and I like this approach because I used to work there.

In my [recent studies](/open-data), I've just been storing data as ordinary files on
an ordinary filesystem and loading them all into memory. This is partly because I
haven't been particulary concerned with performance, but I think I'd do something
quite similar if performance did concern me more; I load data into memory when I'm
using them, and store them in a very simple way when I'm not using them.

## Conflation of publishing with consumption
I think this is the interesting data-preparation issue with open data:
Data are released by government/organization, but you might not be interested
in data by government.

### Different portals
Paris publishes its data to the Paris data portal. This makes a lot of sense;
Paris's government has lots of data, and they're just trying to get it out there
in a place where people can find it.

You can go to the Paris data portal and get data about
[coffee]() and
[wifi]().
Maybe you're not interested in data specifically about Paris; maybe you're
actually interested in coffee and wifi in general. Or maybe you're interested
in a different subset, like wifi access in places other than cafes.

People can consume Paris's data by going to Paris's data portal, but they might
not be interested in data about Paris specifically. It would be nice to have one
place with all of the relevant data, and your software can help with that.

### Connect data across portals
Different cities are all still cities, so they collect similar data. But they
have different policies and different bookkeeping practices, so not all of their
data are out, and the data have different schemas. There are so many different
people working on this that it's not worth getting them to use the same procedures.

But your product can help to connect all of these datasets. At the least, you can
help people find out about related datasets. Build a fancier version of search;
you might even call it a recommender.

You can also get fancier about combining datasets. Figure out what schemas
are common for particular sorts of data, and get different datasets into a reasonable
schema so that you can query across all cities at once.

People have been dealing with this sort of issue inside of large organizations with
lots of proprietary data, like investment banks. I've recently arrived at a bunch of
ideas about how we can make open data better, but Goldman Sachs (for example) figured
this out years ago when they started having this variety of data internally.
And they've already built out many of the things I suggest here.
