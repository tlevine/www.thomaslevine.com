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
Today, I explain how I identified unique indices in a bunch of spreadsheets,,
and then I encourage you to do something cool with the resulting graph.

## Collecting the spreadsheets

## Too big for CSV!?
Here's an error I came across when parsing [this CSV file](http://public.opendatasoft.com/explore/dataset/scisf_housing_affordability_gap_by_neighborhood_san_francisco_ca/download?format=csv)

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

It turns out that that field contains some larger geojson (I think?) features.
