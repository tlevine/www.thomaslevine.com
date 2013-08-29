---
title: I visit Socrata
---
<!--
I want knowledge to be shared. I did this and that and that other thing.
Blah blah blah.
It makes sense that I would care about open data.
But never used for practical purpose
So maybe I'm more interested in the sharing of knowledge.
-->
I recently downloaded the metadata files for all of the datasets on
60 Socrata open data portals and started studying how open data and
open data portals get used. Interesting things
[happen](http://thomaslevine.com/socrata) when you do craziness like this.

I visited Socrata in Seattle last Friday to talk about my findings and
meet everyone. But the most important part of my visit was of course
going out for teriyaki for lunch; it was so important that Chris Metcalf
sent me a Google Calendar invitation for it. They've been doing this for
about 19 months and have only missed two weeks!

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

## Hackathons
At the first hackathon for the [NYC Big Apps](http://nycbigapps.com/)
competition, [Ashley Williams](http://heyashleyashley.com) and
[I](http://thomaslevine.com) started talking about the sort of apps that
come out of contemporary hackathons. We looked specifically at the
winning apps for previous NYC Big Apps competitions and were bothered
by how structurally similar these apps were; they were all basically the
same app to me, so I found this to be a huge waste of development time.
Instead of making yet another hackathon app, we determined that we would
algorithmically generate apps based on random datasets in the data portal.

## Apps
We noticed that many apps follow a search-for-things-on-a-map paradigm;
that is, you fill out a search form and get results on a map. In
[AppGen](http://appgen.me), we automated the creation of the cliche
hackathon app. We combined datasets from the New York data portal,
randomly chose a title based on the datasets' metadata, generated some
nonsense description text, randomly chose map tiles and put the data on
an app. We deployed apps (actually just proxies) to Heroku to make it
look like they were separate apps, and we randomly varied the server
HTTP header to make it look like they were running on different web
servers. Being cliche hackathon apps, AppGen-generated apps also broke
a month after being created.

## Portal exploration
AppGen turned out to be a decent way of exploring the data portal
and of rapidly prototyping open data apps. Putting datasets into apps
makes them a bit more tangible and less foreign. We started noticing
some issues with the datasets and composed an 
[audit](http://www.appgen.me/audit) of data portal quality.

## Dataset dataset
All of the data portals that I've seen display datasets as if they were
ordinary web pages. I thought we could do better.

In building AppGen, I wound up downloading all of the datasets on the
New York data portal. I generalized it to run on any Socrata Open Data
Portal, then I downloaded all of the metadata about all of the datasets
on 60 Socrata portals.


Over the past couple months, I've been looking at data from Socrata
data portals to study how open data is published and consumed. I've
been wondering what is in the portals, what people like, ...

And a week ago, I visited Socrata and talked about some of my findings.



What I do

Why I do what I do

How that brought me to Socrata



slides



