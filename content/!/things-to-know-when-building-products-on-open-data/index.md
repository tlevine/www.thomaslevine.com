---
title: Things to think about when you're building products on open data
---

## Storing
Individual open datasets are usually small enough that any storage approach
will be fine, but you'll need to think a bit if you're storing lots of datasets

As far as I know, ScraperWiki, Exversion and Socrata all started with storing
everything in one relational database, with one database row per dataset row
(possibly across tables or in one table).

I see this as unnecessary centralization. ScraperWiki eventually switched to
storing each dataset as a separate SQLite3 database.

## Conflation of publishing with consumption
Data are released by government/organization, but you might not be interested
in data by government

Your product can fix this by connecting a bunch of datasets.

Different cities are all still cities, so they collect similar data. But they
have different policies and different bookkeeping practices, so not all of their
data are out, and the data have different schemas.
