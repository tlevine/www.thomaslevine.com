---
title: Hip "Data" Nonsense
created_at: 2012-11-15
kind: article
---

I've been at loads of hip and non-hip data talks here and there and have come
up with some ideas about what this data nonsense is.

## Terms
I think that "big data" and "data science" are usually defined such that the
person defining the term is using it. For example,

> line from the DataKind EMC video

But these terms do seem to be somewhat meaningful sometimes.

### "Big data"
When people describe something as "big data", the thing is usually physically
big (in bytes). So a petabyte of data would might be big data.

Other people propose thresholds, like when the data don't fit in random-access
memory or when the data don't fit on one computer. (Some talk at Strata NY 2011
used this one.) More generally, we might say that data are "big" when they
don't physically fit the world's standard data analysis tool, [Excel](/!/excel/).
When this happens, you need to know something more about computers in order to
store and analyze the data.

Judging data-bigness by physical size works today, but the size that seems big
today is different from what seemed big twenty years ago and from what will
seem big in twenty years. I present below two descriptions of big data that
get to the causes of data-bigness.

Some guy at Strata London 2012 proposed that big data come about when it
becomes less expensive to store data than it is to decide whether to delete
the data. We've recently moved from filing cabinets and libraries all the
way to Hadoop clusters and
[low-power hard drives](http://aws.amazon.com/glacier/), so it recently has
become reasonable to just save anything. Or so this guy might say.

Where do all of these data come from? I think part of this big data thing is
that the data are collected more automatically than they were before. Before
computers, if the post office wanted to study where mail is sent, I guess it
could sample letters at various points within the postal system and find their
destinations, return addresses and route through the postal system. There
might be tools to assist this data collection, but someone would still have
to take part in the data collection. Today, we already have all of our emails,
Twitter posts and other internet presense in reasonably standard digital
formats, so this process is much more automatic. I thus propose that automation
of data collection is part of the big data thing.

### "Data science"
What is "data science"? It broadly seems to be some combination of "statistics"
and "computer engineering". They're in quotes because they're all stupidly
ambiguous and because I don't feel like defining them except in relation to
each-other.

I'll define "data science" by relating it to "statistics" and to software
engineering. Let's start with the comparison with "statistics".

#### "Data science" and "statistics"
The statistical methods used in "data science" and "big data" seem quite
unsophisticated compared to those used in "statistics".

Often, it's just search. For example, the data team at [La Nación]()
showed me how they're acquiring loads of documents and allowing journalists to
search them. I'm sure that they'll eventually start doing crude quantitative
analyses on the overall document sets, but even the search has already been
valuable.

The quantitative analyses that do happen are still quite simple. Consider
the FourSquare checkin analyses that a couple people from FourSquare showed at
DataGotham. It was mostly scatterplots of checkins on top of a map and
sometimes played over time. They touched on the models they were using to
guess the location to which someone wanted to check in, but the main points of
their talks were the knowledge that we gain by looking at checkin histories,
and these simple plots were more helpful for conveying this.

These "data" fields are more concerned about consuming and practically
applying gobs of data than they are about modeling the data.

#### "Data science" and "software engineering"
The products of "software engineering" tend to be tools, and the products of
"data science" tend to be knowledge. I've broken that distinction into some
technical components. Nota bene: These components exaggerate the differences.

**Realtime v. batch**: If something is "realtime", it is the result of
"software engineering"; "data science" is always batch. (Let's avoid worrying
too much about what "realtime" means. I happen to take "realtime" to mean push
rather than pull, but this claim should work for any reasonable definition of
"realtime".)

**Organization**: "Data scientists" are embedded within organizations that have
questions about data (typically about their own data, though that depends on
how we think of ownership). Consider any hip web startup with a large database.
"Software engineers", on the other hand, make products to be used by other
organizations or by other departments within a large organization. Consider
any hip web startup ever. Also consider some teams within large companies; I
know someone who worked at Google as a "software engineer" to write code for
packaging ChromeBooks.

### Conflating "data science" and "big data"
Some people conflate "data science" and "big data". For some definitions of
these two phrases, the conflation makes perfect sense, like when "big data"
means that the data are big enough that you need to know something about
computers.

Some people are more concerned with "data science" than they are with "big
data", and vice-versa. For example, "big data" is much talked-about at Strata,
but "data science" isn't discussed as much. I sort of think that "big data"
is buzzier and more popular among the marketing departments.

On the other hand, "data science" is more common among people I hang out with,
and we don't seem to talk about "big data" very much. Part of this is that we
can do useful things with small datasets too. But I feel like we don't talk
about "big data" even when a dataset gets large. It might be that we want some
word to describe what we do. "Statistician" and "computer stuff" aren't close
enough; "big data" might do just fine for this.

## Data business models
I've come up with four categories of data business model.

1. Big storage for big people
2. Money in, insight out: Vertically integrated data analysis
3. Internal data analysis on an organization's own data
4. Quantitative finance

Note that data analysis tools like Excel, ScraperWiki and Tableau are absent;
these are tools that assist this hip data nonsense.

### Big storage for big people
This is mostly Hadoop. For example,

* Teradata
* Hortonworks
* MapR
* Cloudera

Some people are using NoHadoop. (I just invented this word.)

* Datastax (Cassandra)
* Couchbase (Couch but not the original Couch)
* 10gen (Mongo)

Either way, these companies sell consulting, training, hosting, proprietary
special features &c. to big businesses with shit tons of data.

### Money in, insight out: Vertically integrated data analysis

Several places package data collection, analysis and presentation.
I think this is pretty close to "research". One example is AIMIA,
which manages the Nectar card scheme; they analyze the data that
they collect and present ideas to clients. Many producers of hip
data tools also provide hip data consulting, so they too fall into
this category.

Some companies produce suites of tools that approach this vertical integration;
when you use these tools, you still have to look at the data yourself, but it
is made much easier. This approaches the
"[data hubs]()"
that Francis likes talking about.
<!-- One less obvious example is
[RStudio](), which makes both an IDE and a bunch of tangential R services. -->
Most advertising, web and social media analytics tools fall into this category.
You just configure your accounts, let data accumulate, and look at the flashy
dashboard. You still have to put some thought into it, but the collection,
analysis and presentation are all streamlined and integrated and thus easier
for people who wouldn't otherwise do this themselves.

### Internal data analysis

Places with lots of data have internal person(s) do something with them.

* The New York City government has a team that tries to make the various
    government services more efficient.
* DonorsChoose, FourSquare, Etsy, Kickstarter and Tumblr all have a lot of
    data, and they all have a person or team that analyzes the data.

### Quantitative finance

Quantitative finance is special in that the data analysis is very close to a
product in itself; the conclusion of analysis or algorithm is "Make these
trades when that happens." rather than "If you market to these people, you
might sell more products."

This has some interesting implications. For one thing, you could have a whole
company doing quantative finance. On a similar note, I suspect that analyses
can be more complicated because the analyses might only need to be conveyed to
people with quantitative literacy; in the other categories, it might be more
important to convey insights need to non-technical managers.
