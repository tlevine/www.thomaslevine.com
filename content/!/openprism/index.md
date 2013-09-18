---
title: OpenPrism
description: Open the open data silos!
subtitle: Better searches for open data
tweet_text: Search all the portals! http://openprism.thomaslevine.com http://thomaslevine.com/!/openprism @CKANproject @junar @socrata #opendata
tweet_link: https://twitter.com/thomaslevine/status/367025550843326464
twitter_image: taco.png
facebook_image: taco.png
tags: ['socrata', 'open-data']
kind: article
created_at: 2013-08-12
---
There are loads of open data portals
There's even [portal about data portals](http://datacatalogs.org).
And each of these portals has loads of datasets.

[OpenPrism](http://openprism.thomaslevine.com) is my most recent
attempt at understanding what is going on in all of these portals.
Read on if you want to see why I made it, or just go to the site
and start playing with it.

## People don't know much about open data
Nobody seems to know what is in the data portals.
Many people know about datasets that are relevant to their work,
municipality, &c., but nobody seems to know about the availability of
data on broader topics, and nobody seems to have a good way of
finding out what is available.

If someone does know any of this, he probably works for an open data
portal. Still, he probably doesn't know much about what is going on in
other portals.

## Naive search method
One difficulty in discovering open data is the search paradigm.

Open data portals approach searching data as if data were normal prose;
your search terms are some keywords, a category, &c., and your results are
dataset titles and descriptions.

There are other approaches.
For example, [AppGen](http://www.appgen.me/)
searches for datasets with the same variables as each other,
and the results are automatically generated app prototypes.

## Siloed open data portals
Another issue is that people tend to use data from only one portal;
they use their local government's portals or their organizations' portals.

Let me give you a couple examples of why this should maybe be different.
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
