---
title: Things to think about when you're building products on open data
---

## Storing all these datasets
With open data, you have lots of tiny datasets. The individual open datasets are
usually small enough that any storage approach will be fine if you're only using
a few of them, but you'll need to think a bit if you're storing lots of datasets.

### Centralized
As far as I know, ScraperWiki, Exversion and Socrata all started with storing
everything in one relational database, with one database row per dataset row
(possibly across tables or in one table).

### Less centralized
You probably don't need your data to be this centralized. Well, at least that's
what ScraperWiki thinks; ScraperWiki eventually switched to storing each dataset
as a separate SQLite3 database.

I haven't been particulary concerned with performance in my
[recent studies](/socrata), so I've just been storing data as ordinary files on
an ordinary filesystem.

## Conflation of publishing with consumption
I think this is the interesting data-preparation issue with open data:
Data are released by government/organization, but you might not be interested
in data by government.

### Search within a portal
For example, you can go to the Paris data portal and get data about
[coffee]() and
[wifi]().
Maybe you're not interested in data specifically about Paris; maybe you're
actually interested in coffee and wifi in general. Or maybe you're interested
in a different subset, like wifi access in places other than cafes. Either way,
you can use data from places other than Paris.

### Publishing versus consumption
Paris publishes its data to the Paris data portal. This makes a lot of sense;
Paris's government has lots of data, and they're just trying to get it out there
in a place where people can find it.

People like me consume Paris's data by going to Paris's data portal.
As we saw above, this doesn't necessarily match the consumers' needs;
I'm not necessarily interested in data specifically about Paris.

### Combine across portals
Different cities are all still cities, so they collect similar data. But they
have different policies and different bookkeeping practices, so not all of their
data are out, and the data have different schemas.

Your product can fix this by connecting all of these datasets.
