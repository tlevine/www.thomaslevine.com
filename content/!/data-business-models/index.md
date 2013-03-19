---
title: Data business models
created_at: 2013-04-15
kind: article
tags: ['data']
relationships: ['scraperwiki']
---

I've been at loads of hip and non-hip data talks here and there and have come
four categories of data business model in this hip data ecosystem. Here they are.

1. Big storage for big people
2. Money in, insight out: Vertically integrated data analysis
3. Internal data analysis on an organization's own data
4. Quantitative finance

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

Several places package data collection, analysis and presentation. I think this
is pretty close to "research". One example is AIMIA, which manages the Nectar
card scheme; as a small part of this, they analyze the data that they collect
and present ideas to clients. Many producers of hip data tools also provide hip
data consulting, so they too fall into this category.

### Data hubs
Some companies produce suites of tools that approach this vertical integration;
when you use these tools, you still have to look at the data yourself, but it
is made much easier. This approaches the
'[data hubs](http://blog.scraperwiki.com/2012/03/09/from-cms-to-dms-c-is-for-content-d-is-for-data/)'
that Francis likes talking about.

Lots of advertising, web and social media analytics tools fall into this
category. You just configure your accounts, let data accumulate, and look at
the flashy dashboard. You still have to put some thought into it, but the
collection, analysis and presentation are all streamlined and integrated and
thus easier for people who wouldn't otherwise do this themselves.

Tools like Tableau, ScraperWiki, RStudio (combined with its tangential R
services) also fall into this category. You still have to do your analysis, but
they let you do all of your analysis in one place, and connections between that
place, your data sources and your presentatino media are easy. Well that's the
idea at least.

## Internal data analysis

Places with lots of data have internal person(s) do something with them. Any
company that's making money must have something like this. The mainstream
companies might call these people "business analysts", and they might do all
their work [in Excel](http://blog.scraperwiki.com/2012/07/31/do-all-analysts-use-excel/).
The hip companies are doing "data science" with open source software before it
gets cool. And the New York City government has a team that just analyzes New
York data to make the various government services more efficient. For the
current discussion, I see these as similar sorts of people.

I was pondering distinguishing between analysis that affects businessy
decisions from models that get written into software. Since I'm just
categorising business models and these things could both be produced by the
same guy working inside a company with lots of data, I chose not to distinguish
between them.

## Quantitative finance

Quantitative finance is special in that the data analysis is very close to a
product in itself; the conclusion of analysis or algorithm is "Make these
trades when that happens." rather than "If you market to these people, you
might sell more products."

This has some interesting implications. For one thing, you could have a whole
company doing quantative finance. On a similar note, I suspect that analyses
can be more complicated because the analyses might only need to be conveyed to
people with quantitative literacy; in the other categories, it might be more
important to convey insights to non-technical managers.

## Conclusionary
Pretend that I made some insightful, conclusionary conclusion in this sentence.
