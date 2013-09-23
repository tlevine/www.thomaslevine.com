---
created_at: 2013-09-23
kind: article
title: Socrata's federation network
tweet_text: Well this changes our @socrata data portal statistics.... http://thomaslevine.com/!/socrata-deduplicate
tweet_link_a: https://twitter.com/thomaslevine/status/361993726496735232
twitter_title: I finally deduplicated the Socrata dataset data
description: .
twitter_image: figure/network.png
facebook_image: figure/network.png
tags: ['socrata', 'open-data']
---
Lots of governments use Socrata data portals to release their open data.
This results in a super-dataset of datasets that tells us something about
the ecosystem surrounding open data.

For a [couple months](/!/socrata-summary), I've been studying the data
about these data and have continuously been dealing with duplicated data.
I finally fixed that, so now I have more accurate statistics on portals.

## Types of duplication
I'm concerned with
[two forms of duplication](/!/socrata-genealogies/#types-of-duplicate-datasets).

1. [Views](/!/socrata-genealogies/#term-view) derived from original
    [datasets](/!/socrata-genealogies/#term-dataset)
2. Federated datasets

## Dealing with derived views
It's easy enough to deal with the former type of duplication.
One way is to use the `/data.json`/`/api/dcat` endpoint.
Unfortunately, this endpoint only provides the first 1000 entries.
I have been told that this has been fixed, but I had trouble getting
it working this morning.

That's not a big deal because there's another easy way. I produced a
[CSV file of Socrata data](https://github.com/tlevine/socrata-analysis/blob/master/socrata.csv)
a couple months ago. Each row in the file corresponds to a view on Socrata,
and the views that are original datasets have a displayType of `table`, I think.
(There's a notable exception: Sometimes, the original table is private and
a derived view is made available to the public.)

## Dealing with federation
Dealing with federation is less straightforward. The `/data.json` endpoint
doesn't clearly indicate whether a dataset is federated, and neither does
my CSV file. If I had been more careful when producing the CSV file, it could
have such a field, but I don't want to make another one because that took a
long time. So I took the federation links from somewhere else.

n easy place to get the federation links is fro
