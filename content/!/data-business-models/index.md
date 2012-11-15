---
title: Data business models
created_at: 2012-11-15
kind: article
---

I've been at loads of hip and non-hip data talks here and there and have come
four categories of data business model in this hip data ecosystem. Here they are.

1. Big storage for big people
2. Money in, insight out: Vertically integrated data analysis
3. Internal data analysis on an organization's own data
4. Quantitative finance

Note that data analysis tools like Excel, ScraperWiki and Tableau are absent;
these are tools that assist this hip data nonsense.

## Big storage for big people
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

## Money in, insight out: Vertically integrated data analysis

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

## Internal data analysis

Places with lots of data have internal person(s) do something with them.

* The New York City government has a team that tries to make the various
    government services more efficient.
* DonorsChoose, FourSquare, Etsy, Kickstarter and Tumblr all have a lot of
    data, and they all have a person or team that analyzes the data.

## Quantitative finance

Quantitative finance is special in that the data analysis is very close to a
product in itself; the conclusion of analysis or algorithm is "Make these
trades when that happens." rather than "If you market to these people, you
might sell more products."

This has some interesting implications. For one thing, you could have a whole
company doing quantative finance. On a similar note, I suspect that analyses
can be more complicated because the analyses might only need to be conveyed to
people with quantitative literacy; in the other categories, it might be more
important to convey insights need to non-technical managers.
