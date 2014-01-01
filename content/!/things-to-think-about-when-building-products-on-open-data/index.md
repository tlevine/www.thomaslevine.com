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

### Connecting organizations and relating datasets
Different cities are all still cities, so they collect similar data. But they
have different policies and different bookkeeping practices, so not all of their
data are out, and the data have different schemas. And, of course, all of the data
are on different websites.

As I see it, products like [Socrata](http://socrata.com), [CKAN](http://ckan.org),
and [OpenDataSoft](http://opendatasoft.com) wind up focusing much more on helping
the publishers get the data out than on helping consumers find and use data.

How do we help the consumers? Rather than getting everyone to adopt
[specific standards](http://www.w3.org/standards/semanticweb/data),
I think we can just roll with this and make products that fill this gap between
the publisher and the consumer.

![Magic middle layer for consumers](../data-about-open-data-talk-december-2-2013/unsilo.jpg)

Products like [Enigma](http://enigma.io) try fill this gap by making it easier
for ordinary humans to find public data. If you take this further, you can wind
up with something that feels more like a new dataset rather than a bunch of
existing datasets; [OpenCorporates](https://opencorporates.com) is an example of
that.

This sort of thing has surely been around for a while. I think Bloomberg and
Palantir are this but with datasets that we don't think of as "open". Also,
I don't really know what "data warehousing" and "business intelligence" are,
but the entirity of those fields might also fall into this category.
And a bunch of nominally data "analysis" products do this to some degree
as well.

## Breaking the linear flow of data
I should note that this is still somewhat problematic because it encourages a
linear flow of data, and that doesn't help people collaborate on the editing of
datasets.

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
