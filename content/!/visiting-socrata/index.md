---
title: I visit Socrata
---
I recently downloaded the metadata files for all of the datasets on
60 Socrata open data portals and started studying how open data and
open data portals get used. Interesting things
[happen](http://thomaslevine.com/socrata) when you do craziness like this.

I visited Socrata in Seattle last Friday to talk about my findings and
meet everyone. But the most important part of my visit was of course
going out for teriyaki for lunch; it was so important that Chris Metcalf
sent me a Google Calendar invitation for it. They've been doing this for
about 19 months and have only missed two weeks!

I met most of the people there. I asked a lot of questions and learned a
lot about how open data portals get implemented and managed.

## Why
People wonder why I did all this stuff with Socrata data, and I don't
necessarily know. I think most things do better when knowledge is shared,
so I obviously care about open data; I want it to be easy for data to be
reused so that we don't have to duplicate each other's work.

Someone recently suggested that I'm actually just interested in
understanding how knowledge gets created and shared. That would explain
a lot of other things about me. For example, I have been quite
interested in the power of signage; signs are treated as authoritative
even though anyone can put up a sign. This one time, I posted "EMERGENCY
EXIT ONLY ALARM WILL SOUND" signs on doors that weren't emergency exits
only. Those emergency signs are scary! Even I was afraid of opening the
doors afterwards!

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
To me, "data" means "data table", anything can be turned into data, and
data can be turned into anything. Our statistical methods know how to
interpret data, so we convert complicated concepts into data because
that's what our statistical methods use, then we convert the results
into things like graphs so we can understand them.

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
