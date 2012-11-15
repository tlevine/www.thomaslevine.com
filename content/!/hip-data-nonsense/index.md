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


### Relationships among these terms
Some people conflate "data science" and "big data". For some definitions of
these two phrases, the conflation makes perfect sense, particularly


