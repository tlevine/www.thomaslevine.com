---
title: Building products on open data
tags: ['open-data']
---
I've lately been studying [data about open data](/open-data). This has led me to,
among other things, some ideas of things you might want to know if they're making
products that use open data. So here they are.

## Open data isn't that special
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
and maybe that you can query them with an "API". And that's because there
isn't anything special about it. People will get excited that your app uses
open data, but open data isn't fundamentally different from any other files.




## Publishing verses consumption
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

### Relating datasets
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

This might sound like [linked data](http://www.w3.org/standards/semanticweb/data),
and that can scare people. My advice above has similar goals to linked data, but I
think we can accomplish some of them with simpler approaches than the Semantic Web
technologies.

## Storing all these datasets
If you're storing lots of datasets, they'll take up lots of space, but that doesn't
mean that your storage system needs to be complicated.

### More centralized
Most people seem to start with storing everything in one relational database,
with one database row per dataset row (possibly across tables or in one table).
I'm told that this is how [ScraperWiki](https://scraperwiki.com),
[Exversion](https://exversion.com), and
[Socrata](https://socrata.com) all started out.
<!-- http://www.youtube.com/watch?v=CnurrM06oyM -->

### Less centralized
You probably don't need your data to be this centralized. You'll have a lot of
datasets, but most of them are probably pretty small. Thus, if you just store
datasets in a simple way (like as ordinary files, maybe across a few computers),
you're probably fine. This simplifies things like backing up data and
parallelizing across datasets.

You might want to do something that involves lots of datasets, like grouping datasets by schema.
In such cases, treat each dataset as an observation in a larger dataset, calculate
whatever numbers/features/statistics you need, and put them into a new dataset.
Said more fancy-like, apply/map across each of the datasets and combine them into
a new dataset.

In my [recent studies](/open-data), I've just been storing data as ordinary files on
an ordinary filesystem and loading them all into memory. This is partly because I
haven't been particulary concerned with latency, but I think I'd do something
quite similar if that concerned me more.

Perhaps I should mention that I apply this thinking more broadly; I think people
jump to using fancy databases too quickly; much (most?) of the time, ordinary files
work just fine.

## Licensing
You might be wondering what legal issues you'll have to deal with if you use open data.
Ideally, you wouldn't have to worry about such things. In fact,
the [Open Knowledge Foundation](http://okfn.org/) [defines](http://opendefinition.org/)
open content as content for which you don't have to deal with legal issues.

> A piece of data or content is open if anyone is free to use, reuse, and redistribute it — subject only, at most, to the requirement to attribute and/or share-alike.

Less-than-ideally, a lot of open data sites [lack](/!/open-data-licensing) open licenses.
That said, it might still be fine to use data from these sites. Here are two reasons why.

1. In the United States, you can't copyright facts, so it's likely a lot of datasets
    can't be copyrighted. You can still restrict access to things, but you'd need to
    use a contract to impose such restrictions.
2. The organizations that are releasing lots of data want the data to be used.
    If they don't include a license or they include a restrictive license, I suspect
    that it's just because they don't know what to do.

If you're using data from a site without an obvious license, you might want to talk
to a lawyer about it. Actually, you should totally do this and then tell me about it
afterwards because I'm curious to hear more thoughts on the matter.

## The sharing of data
Most of the special characteristics that I see in open data can be thought
of as issues with generic [sharing](/!/what-is-open-data) of data. These
come about when lots of people are updating and reading the same datasets,
even when the data are only shared within a small company.
