---
title: Searching open data with AppGen and OpenPrism
tweet_text: ??
twitter_image: ??
facebook_image: ??
tags: ['socrata']
---
I've recently been noticing that nobody really knows what open data
are out there. There are all of these different datasets with various
schemas on all of these portals, but people don't wind up hearing
about many of them.

## Search method
Part of the issue is that portals approach searching data as if they
were normal files; your search terms are some keywords, a category, &c.,
and your results are dataset titles and descriptions.
[AppGen](http://www.appgen.me/) presents a different approach to search;
AppGen searches for datasets with the same variables as each other,
and the result was is randomly generated app.

## Siloed open data portals
Another issue is that people tend to use data from only one portal;
they use their local government's portals or their organizations' portals.

What if I wanted to find all of the datasets about sewer overflows so
that I could expand my initiative to [reduce water pollution](http://dontflush.me)?
Or what if I wanted 

I could copy my search terms into the search boxes on all different data
portals, but that would take a while because there are a lot of portals,
so many that some people made a [portal about data portals](http://datacatalogs.org).

Instead,
Type your search in one search bar, and get results from all of the Socrata and CKAN portals.

This is a static website that calls the Socrata and CKAN APIs.

http://openprism.thomaslevine.com
https://github.com/tlevine/openprism.git


Data portal search API documentation

* [Junar](http://wiki.junar.com/index.php/API)
* [Socrata](https://github.com/jasonlally/open-data-browser/blob/dev/data/dataportalapi.py)
* [CKAN](http://docs.ckan.org/en/ckan-1.7/apiv3.html)
