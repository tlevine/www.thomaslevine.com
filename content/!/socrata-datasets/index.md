I've recently been [studying data about open data](/open-data),
and I'm hearing that other people want to do the same. Yay!

Some people have asked for the data that I've collected so that
they can study things without spending a month downloading all
the data and formatting them properly and whatnot.
This article is for those people and for people who wanted that
but never asked.

## Metadata about data about metadata from Socrata
I've been using data from Socrata data portal websites for most
of these studies. I think I've
provided almost enough information so that people can reuse these
data, and I hope that this article provides the remaining bits
so that people can actually use the data to study open data.

### What I've provided so far
There are a lot of annoying quirks in the way
data are modeled, and I've explained much of this before.

I posted spreadsheets of these data quite a long while ago, and
people have been able to download them.

### What I haven't provided
I haven't explained which of the annoying quirks are fixed in the
various spreadsheets.

Also, I haven't prominently linked to these
spreadsheets.

## Files I've produced
Here are some files that I've already produced so that you don't have to
create your own. I've referenced the programs that produced these files,
but haven't been trying to download the data more than once, so I suspect
that the programs won't work quite as you expect them to.

These files include only Socrata data.

* [`socrata.csv`](https://github.com/tlevine/socrata-analysis/blob/33af3a27f58a20828801fe750524cb687d66d4e9/socrata.csv)
    is based on metadata files from all views as of July.
    It includes duplicates from both federation and derived views.
    I produced it by searching all the portals
    [without attempting to remove duplicates](#not-removing-duplicates).
    The code is [here]().
* [`users.csv`](https://github.com/tlevine/socrata-analysis/blob/33af3a27f58a20828801fe750524cb687d66d4e9/users.csv)
    is a transformation of `socrata.csv` such that each row is a user.
    It includes counts of views and tables belonging to each user, but
    I don't remember how I handled duplicates there. The code for that
    is [here](https://github.com/tlevine/socrata-analysis/blob/33af3a27f58a20828801fe750524cb687d66d4e9/numbers/run.py#L207),
    and a high-level explanation is [here](/!/data-about-open-data-talk-december-2-2013/#data-about-people-who-use-data).
* [`catalogs-2013-08-28.db`](https://github.com/tlevine/socrata-catalog/blob/3a7d72b5b7332a26dd6066edb44749a634bfe48c/catalogs-2013-08-28.db) is a table of all of the Socrata DCAT files.
    It has resolved these quirks in these ways, but it still has these quirks
* [`socrata-deduplicated.csv`](https://github.com/tlevine/socrata-analysis/blob/33af3a27f58a20828801fe750524cb687d66d4e9/socrata-deduplicated.csv)
    is `socrata.csv` with
    [federation-induced duplicates removed](#dealing-with-federation).
    That is, if data were federated from one portal to three portals,
    this file includes the data from only the first portal. It still
    includes derived data. The code is [here](https://github.com/tlevine/socrata-defederate/blob/c2c32f5f1db3563db8c4f671d7ebae6ab91c73ec/dedupe.py).
* [`federation.json`](https://github.com/tlevine/socrata-defederate/blob/c2c32f5f1db3563db8c4f671d7ebae6ab91c73ec/federation.json) is also produced by
    [`dedupe.py`](https://github.com/tlevine/socrata-defederate/blob/c2c32f5f1db3563db8c4f671d7ebae6ab91c73ec/dedupe.py).
    (The [Makefile](https://github.com/tlevine/socrata-defederate/blob/c2c32f5f1db3563db8c4f671d7ebae6ab91c73ec/Makefile) may be informative.)
    I used it to make [this plot](/!/socrata-deduplicate/#graph-diagram).

These files include data from Socrata, CKAN, Junar, and OpenDataSoft.

* [`licensing.csv`](https://github.com/tlevine/open-data-download/blob/8886bd048e1aafd9e5e64106c87f41394b6a7bcb/licensing.csv)
    contains a record for each dataset across a bunch of catalogs.
    The column `license_standard` is the binned license.
    (See [this plot](/!/open-data-licensing/#which-licenses).)
    [`query-license.py`](https://github.com/tlevine/open-data-download/blob/8886bd048e1aafd9e5e64106c87f41394b6a7bcb/query-license.py) might get you thinking about how it was produced.
* [OpenPrism](http://openprism.thomaslevine.com) lists a bunch of
    data catalog websites [in its source code](https://github.com/tlevine/openprism/blob/gh-pages/src/index.js).
    I assembled these lists by checking [datacatalogs.org](http://datacatalogs.org),
    by checking the since-changed Socrata status page
    and by contacting Junar and OpenDataSoft directly.
* It turns out that a bunch of CKAN instances listed on
    [datacatalogs.org](http://datacatalogs.org) aren't up anymore.
    [`ckan_workingness.csv`](https://github.com/tlevine/open-data-download/blob/3115221f193e08d2e83eb753e8154ea9593fec55/ckan_workingness.csv) has a list of what's still working,
    and [`download_ckan.py`](https://github.com/tlevine/open-data-download/blob/3115221f193e08d2e83eb753e8154ea9593fec55/download_ckan.py#L62) shows how that list was assembled.

The remainder of this article summarizes the various quirks that I've dealt
with and haven't dealt with.

## How data are stored on Socrata
Data on Socrata is displayed in [views](/!/socrata-genealogies#term-view),
which are queries on [tables](/!/socrata-genealogies#term-table).
When you put a new data source on a Socrata portal, you get both
a new table and a [dataset](/!/socrata-genealogies#term-dataset)
view that is a query of the full table.
(The dataset view would be `SELECT * FROM [table]` in SQL.)

### Derivatives
In the Socrata web interface, you can create lots of different views
on the same source data. You can make different queries on the same
table, and you can visualize them as charts, maps, and a
[bunch of other things](/!/socrata-calendars).
When you save your new view, it gets added to the data portal, and
it will show up in searches.

### Federation
Data are uploaded to one Socrata portal, but they can be
[federated](/!/socrata-genealogies#term-federation)
to other Socrata portals. Thus, if you get all of the datasets from
all of the portals, you can easily have duplicates and not know which
portal they came from.

### Privacy
Some data on Socrata are private. In many cases, the source data are
private and a query on the data (a [filtered view](/!/socrata-genealogies#term-filtered-view))
is public. Thus, it is possible that the most complete form of the data
that a data publisher is releasing would be in a different type of view
than dataset.

### View metadata files
Regardless of whether it's a dataset, filter, chart, map, or whatever,
each view has a metadata file at a url like this.

    https://data.maryland.gov/api/views/${id}.json

For example, here's the file for
[this view](https://data.maryland.gov/Energy-and-Environment/Certified-Cover-Crops-Planted-in-the-Chesapeake-Ba/w6r7-apye?)

> [https://data.maryland.gov/api/views/w6r7-apye.json](https://data.maryland.gov/api/views/w6r7-apye.json)

I'll refer to this "metadata file" quite a bit in the sections below.

## Removing duplicates from derived view
If we want just the source data, we have to remove these derivative
datasets. I'll explain removing federated data later.

### Not removing duplicates
At first, I
[didn't remove duplicates](/!/socrata-summary#acquiring-the-data).
I just searched browsed through all of the search results, followed
the links to the datasets, and downloaded all of the metadata files.
This has problems, as I've explained above; below are some better
approaches.

### Searching for only dataset views
If you run an ordinary search on a portal, filtering for only dataset
views, you'll get none of the derivatives. It's possible that you'll miss
some data where the original dataset is private and only a filter on the
dataset is public.

If you use the ordinary search webpages rather than the API, you can ols
deal with federation in the same step. In the HTML search interface that
is intended for humans, federated datasets are shaded blue and shown as
links to other data portals, rather than being shaded white and linking
within the same portal. When searching the site, simply ignore these
federated datasets, and you're good.

All of the links to datasets include the 4x4 identifier for the dataset,
and you can use that to determine the URL of the corresponding metadata file.

### Using `/api/dcat.json`
<!-- https://twitter.com/chrismetcalf/status/376079563240898560 -->
The [`/api/dcat.json`](https://data.oaklandnet.com/api/dcat.json) page
is supposed to give us a listing of all of the official data in a portal.
It provides different data from the metadata files I discuss above, but
it includes the dataset identifiers, and you can use those to look up
the corresponding metadata files.

I was told that the `/api/dcat.json` endpoint shows only the source data.
I haven't checked this myself, and I don't know how it handles datasets
where the original upload is private but a filter on it is public.
Anyway, let's just hope that the `/api/dcat.json` endpoint lets deals with
the derivatives properly for us.

In that case, we just have to deal with federation. The
`/api/dcat.json` endpoint doesn't give you any indication as to whether a
dataset is federated, but you can use the method that is described
[below](#dealing-with-federation).

The bigger problem with `/api/dcat.json` is that it only returns the
first 1,000 datasets. I am told that you can use query arguments to
get more, but I've never gotten this working.

### Collapsing by tableId
This is the approach I wind up using most of the time, mainly because
the initial download of all the metadata took a long time and I didn't
want to run one again.

The metadata
file for each view contains a `tableId` field corresponding to the
table that stores the data corresponding to the particular view.

If you download [without removing duplicates](#not-removing-duplicates),
you'll wind up with multiple files that all have the same `tableId` field.
If you put all of these files into a spreadsheet, with one row per metadata
file, you'll wind up with a `tableId` column.

If you group the table by `tableId`, you will wind up with one record
per table. It's still difficult to figure out which view is the
original, but you can aggregate the various fields in different ways
depending on what you need.

For example, I [aggregated](https://github.com/tlevine/socrata-analysis/blob/33af3a27f58a20828801fe750524cb687d66d4e9/words/15-dates.r#L17)
to maximum family-wide row count and the sum of family-wide download
counts when I looked at the
[updating of datasets](/!/data-updatedness/).

### Approaches I haven't tried yet
I've tried not to concern myself so much with fixing Socrata's APIs,
so I've been trying to deal with duplication in ways that are easy
rather than best. Here are two things you could do to figure out
exactly which view is the original view within a table.

#### Parsing queries
Some view metadata files include a query, presumably the query that
is run on the original table to get the particular subset. By parsing
these, you might be able to determine which view of the views belonging
to one table is the original view.

<!-- XXX Link to examples. -->

#### Parsing more web pages
I can figure out the genealogy by looking at the web pages, so a program
could be written that does this. I think the site does some AJAXy something
that I haven't figured out yet, but would be easy to parse this with
something like Selenium, PhantomJS, or jsdom that renders the whole page.

## Dealing with federation
We can deal with federation by looking at the network of federation from the
portal hope pages. Each portal's homepage has a box like this that says
which portals it federates.

![Federated Domains](/!/socrata-deduplicate/federated-domains.png)

The particular portal contains all of the datasets that all of these
federated portals contain. If you construct the network of federation
from these portal homepages, you can resolve duplicates properly. If
the same dataset is on a few different portals, it's because the
different portals all federate the same portal. Since you know what
the network of federation is from the homepages, you can figure out
which portal was the original portal.

Regardless of the method you used to assemble your dataset of datasets,
the resulting dataset will have a column for portal and a column for
identifier. Once you determine what this network of federation is, you
can look for identical datasets that are present in multiple portals
and then remove datasets that are not from the original portal.
I did that [here](/!/socrata-deduplicate).

## Notable statistics I computed

### Table size
The metadata file does not explicitly state the number of columns and the
number of rows in the dataset, but there's enough in the file to figure out
what these two numbers are.

The metadata files contain a "columns" field, which has a list
of dictionaries. Each of these dictionaries has a count of null
values and a count non-null values, and the sum of these two
counts is the number of columns.

[This](https://github.com/tlevine/socrata-analysis/blob/master/numbers/socrata/__init__.py#L93)
is the relevant code, I think. If I'm reading my own code correctly,
the `original_data` variable is just a parse of the JSON metadata file.
