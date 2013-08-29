---
title: I visit Socrata
---
I recently downloaded the metadata files for all of the datasets on
60 Socrata open data portals and started studying how open data and
open data portals get used. Interesting things
[happen](http://thomaslevine.com/socrata) when you do craziness like this.

## Teriyaki
I visited Socrata in Seattle last Friday. The most important part of my
visit was of course going out for teriyaki for lunch; it was so important
that Developer Evangelist Chris Metcalf sent me a Google Calendar invitation for it. They've
been doing this for about 19 months and have only missed two weeks!

During my visit, I also talked about my findings and met everyone and
learned a lot about how open data portals get implemented and managed.

## Why
After my talk, VP of marketing Saf Rabah asked me why I had done all of
this study of open data. That was a good question; I regularly forget
that I tend to do strange things.

I think most things do better when knowledge is shared. I run and write
free software, I pay attention to media licensing, I read copyright law
when I was in high school, and I started a
[Free Culture Foundation](http://freeculture.org) chapter in college,
and I naturally care about open data. But that still doesn't quite explain it.

### Hackathon apps
At the first hackathon for the [NYC Big Apps](http://nycbigapps.com/)
competition, [Ashley Williams](http://heyashleyashley.com) and
[I](http://thomaslevine.com) started talking about the sort of apps that
come out of contemporary hackathons. We quickly decided to
algorithmically generate random hackathon apps.

We noticed that many apps follow a search-for-things-on-a-map paradigm;
that is, you fill out a search form and get results on a map. We
automated the creation of the cliche hackathon apps in
[AppGen](http://appgen.me). (Being cliche hackathon apps,
AppGen-generated apps also broke a month after being created.)

### Dataset dataset
In building AppGen, I wound up downloading all of the datasets on the
New York data portal. I generalized it to run on any Socrata Open Data
Portal, then I downloaded all of the metadata about all of the datasets
on 60 Socrata portals.

Data portals tend to display datasets as if they were ordinary web pages. 
I started treating datasets as data points and doing analysis across
datasets. (There are a bunch of puns here that use the word "meta" in
multiple ways.) I think this is the main novelty of all my open data
studies; I've just been quantifying things that people didn't think to
quantify.

### Communication
Someone recently suggested that I'm generally interested in understanding
how knowledge gets created and shared. Fun story:
A few years ago, I became quite interested in the power of signage; signs
are treated as authoritative even though anyone can put up a sign. This one
time, I posted "EMERGENCY EXIT ONLY ALARM WILL SOUND" signs on doors that
weren't emergency exits only. Those emergency signs are scary! Even I was
afraid of opening the doors afterwards!

When so much information passes through a central and open resource like
a data portal, we acquire rich data about how different people produce and
analyze data. This ecosystem of open data doesn't just give us more data
to analyze; it also allows us to analyze data analysis.
