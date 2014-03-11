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
