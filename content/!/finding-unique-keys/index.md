---
title: Finding unique keys in a thousand spreadsheets
tags: ['open-data']
tweet_text: These spreadsheets didn't specify unique indices, so I figured them out.
---
People often complain about how people don't write good metadata for their
spreadsheets. That is, we don't have a good description of how the data were
collected, what the fields mean, who updates them, &c. Since we rarely seem
to get people to do this, I've been thinking that we should just expect
metadata to be woefully incomplete and that we should deal with it rather
than trying to get people to write metadata in the way that we're used to.

In [playing with lots of spreadsheets](/open-data), I've started thinking
that we can just figure out the metadata given an ordinary CSV file.
Today, I explain how I identified unique indices in a bunch of spreadsheets,
and then I encourage you to do something cool with the resulting graph.

## Collecting the spreadsheets
I used all of the spreadsheets in all of the [OpenDataSoft](https://opendatasoft.com)
catalogs that I knew about.

* [http://data.iledefrance.fr](http://data.iledefrance.fr)
* [http://opendata.paris.fr.opendatasoft.com](http://opendata.paris.fr.opendatasoft.com)
* [http://tourisme04.opendatasoft.com](http://tourisme04.opendatasoft.com)
* [http://tourisme62.opendatasoft.com](http://tourisme62.opendatasoft.com)
* [http://grandnancy.opendatasoft.com](http://grandnancy.opendatasoft.com)
* [http://bistrotdepays.opendatasoft.com](http://bistrotdepays.opendatasoft.com)
* [http://scisf.opendatasoft.com](http://scisf.opendatasoft.com)
* [http://pod.opendatasoft.com](http://pod.opendatasoft.com)
* [http://dataratp.opendatasoft.com](http://dataratp.opendatasoft.com)
* [http://public.opendatasoft.com](http://public.opendatasoft.com)
* [http://ressources.data.sncf.com](http://ressources.data.sncf.com)

The process for downloading them is reasonably
similar to the process for any other data catalog software, and it's explained
[here]().

The "CSV" files that come out of OpenDataSoft are delimited by semicolons;
I guess we could call them "SSV" files or "SCSV" files, but I'm going to keep
calling them "CSV".

### Why OpenDataSoft
Here are a few reasons why I chose OpenDataSoft.

First, all of the data are stored on OpenDataSoft's system, at very predictable URLs
based on the dataset identifiers.
(This is [similar to Socrata and different from CKAN]().)
This makes it easy to download all of the datasets.

Second, OpenDataSoft is easier for me to work with than Socrata; it is much faster,
it doesn't have the same [duplication issues](),
and the API is a bit simpler and better documented.

Third, I suspected that OpenDataSoft would have more complete metadata than other
catalogs. I suspected this based on a discussion I had with Marie-{}, Jean-Marc
and Benoit. They explained to me that they focus a lot on making it easy to add
metadata; here is their reasoning: If it's easy to add metadata, then people will
add metadata, and if the data have good metadata, then people will use them.

### Too big for CSV!?
A few of the files contained cells that were too big for the CSV parser I was using.
Here's an example of the error, which happened on
[this CSV file](http://public.opendatasoft.com/explore/dataset/scisf_housing_affordability_gap_by_neighborhood_san_francisco_ca/download?format=csv).

    Traceback (most recent call last):
      File "/lockers/tlevine_vol/git/featured-spreadsheets/featured_spreadsheets/examine.py", line 26, in featurize
        pk = fromcsv(fp, delimiter = ';')
      File "/usr/local/lib/python3.3/dist-packages/special_snowflake/api.py", line 6, in fromcsv
        return _fromdicts(header, data, n_columns, only_adjacent)
      File "/usr/local/lib/python3.3/dist-packages/special_snowflake/fromdicts.py", line 23, in _fromdicts
        for row in data:
      File "/usr/lib/python3.3/csv.py", line 110, in __next__
        row = next(self.reader)
    _csv.Error: field larger than field limit (131072)

It turns out that that field contains some larger geojson (I think?) features
and represented in OpenDataSoft as having a "geom_{}" type.


Rather than dealing
with this in a smart way, I just ignored all spreadsheets containing "geom_{}"
types.



## Finding the unique keys
My approach for finding the unique keys in a spreadsheet is explained
below and is codified in the
[https://pypi.python.org/pypi/special_snowflake](special_snowflake) package.

### Choosing candidates


### Checking whether each candidate index is unique
