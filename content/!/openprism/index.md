---
title: OpenPrism
description: Open the open data silos!
subtitle: Better searches for open data
tweet_text: This time, I searched all the data portals. http://openprism.thomaslevine.com http://thomaslevine.com/!/openprism @ckan @junar @socrata
twitter_image: taco.png
facebook_image: taco.png
tags: ['socrata']
---
There are so many open data portals
that some people made a [portal about data portals](http://datacatalogs.org).
And each of these portals has loads of datasets.

[OpenPrism](http://openprism.thomaslevine.com) is my most recent
attempt at understanding what is going on in all of these portals.
I explain below why I made it.

## People don't know much about open data
Nobody seems to know much about what open data are out there.

Many people know about datasets that are relevant to their work,
municipality, &c., but nobody seems to know about the availability of
data on broader topics, and nobody seems to have a good way of
finding out what is available.

If someone does know any of this, he probably works for an open data
portal. Still, he probably doesn't know much about what is going on in
other portals.

## Naive search method
One part of the difficulty of discovering open data is the search paradigm.

Open data portals approach searching data as if data were normal prose;
your search terms are some keywords, a category, &c., and your results are
dataset titles and descriptions.

There are other approaches.
For example, [AppGen](http://www.appgen.me/)
searches for datasets with the same variables as each other,
and the results are randomly generated apps.

## Siloed open data portals
Another issue is that people tend to use data from only one portal;
they use their local government's portals or their organizations' portals.

Perhaps I'm considering making an app to help people find parking, and
I want to see what parking lot data are available before I put much work
into the app.
Or maybe I want to find all of the data about sewer overflows so that I
can expand my initiative to [reduce water pollution](http://dontflush.me).

[OpenPrism](http://openprism.thomaslevine.com) is one small attempt
at making it easier to search. Rather than going to all of the different
portals and making a separate search for each portal, you type your
search in one search bar, and you get results from a bunch of different
Socrata, CKAN and Junar portals.
