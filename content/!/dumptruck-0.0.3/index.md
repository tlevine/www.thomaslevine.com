---
title: DumpTruck Version 0.0.3
created_at: 2012-08-02
kind: article
---

I've added some new features to [DumpTruck](http://www.dumptruck.io).

## Changes

### Dictionary case sensitivity
I removed the dictionaries with case-insensitive keys because that just seemed
to be delaying the conversion to case sensitivity.

### Ordered Dictionaries
`DumpTruck.execute` now returns a `collections.OrderedDict` for each row rather
than a `dict` for each row. Also, order is respected on insert, so you can pass
OrderedDicts to `DumpTruck.insert` or `DumpTruck.create_table` to specify
column order.

### Index creation syntax
Previously, indices were created with

    #!python
    DumpTruck.create_index(table_name, column_names)

This order was chosen to match SQL syntax. It has been changed to

    #!python
    DumpTruck.create_index(column_names, table_name)

to match the syntax for `DumpTruck.insert`.

### Handling NULL values
Null value handling has been documented and tweaked.

### RowId
`dt.insert` returns the
the [rowid](http://www.sqlite.org/lang_createtable.html#rowid)
or rowids of the inserted row or rows.

## scraperwiki_local

The DumpTruck interface has changed slightly, so I also adjusted
scraperwiki_local based on those changes.

## Install

Get the new version from pip.

    #!sh
    pip install dumptruck

## More documentation

The full documentation is [on GitHub](https://github.com/tlevine/dumptruck).
