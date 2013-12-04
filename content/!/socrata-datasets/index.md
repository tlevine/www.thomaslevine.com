In my various studies of open data, I've been focusing on the
data in the Socrata portals and have had to deal with some
annoying quirks in the way the data are modeled. I haven't
properly dealt with it yet. Until now!

## How data are stored on Socrata
Data on Socrata is displayed in [views](#term-view),
which are queries on [tables](#term-table).
When you put a new data source on a Socrata portal, you get both
a new table and a [dataset](#term-dataset)
view that is a query of the full table.
(So it would be `SELECT * FROM [table]` in SQL.)

### Derivatives
In the Socrata web interface, you can create lots of different views
on the same source data. You can make different queries on the same
table, and you can visualize them as charts, maps, and a
[bunch of other things]().
When you save your new view, it gets added to the data portal, and
it will show up in searches.

### Federation
Data are uploaded to one Socrata portal, but they can be
[federated]()
to other Socrata portals. Thus, if you get all of the datasets from
all of the portals, you can easily have duplicates and not know which
portal they came from.

### Privacy
Some data on Socrata are private. In many cases, the source data are
private and a query on the data (a [filtered view]())
is public. Thus, it is possible that the most complete form of the data
that a data publisher is releasing would be in a different type of view
than dataset.

## Getting just the source data
If we want just the source data, we have to remove these derivatives and
these duplicates.

### With a search
If you run an ordinary search on a portal, filtering for only dataset
views, you'll get none of the derivatives. It's possible that you'll miss
some data where the original dataset is private and only a filter on the
dataset is public.

(Search API?)

Dealing with federation is quite easy. In the HTML search interface that
is intended for humans, federated datasets are shaded blue and shown as
links to other data portals, rather than being shaded white and linking
within the same portal. When searching the site, simply ignore these
federated datasets, and you're good.

### With `/api/dcat.json`
<!-- https://twitter.com/chrismetcalf/status/376079563240898560 -->
Go the [`/api/dcat.json`](https://data.oaklandnet.com/api/dcat.json) page

I was told that the `/api/dcat.json` endpoint shows only the source data.
I haven't checked this myself, and I don't know how it handles datasets
where the original upload is private but a filter on it is public.
Anyway, let's just hope that the `/api/dcat.json` endpoint lets deals with
the derivatives properly for us.

In that case, we just have to deal with federation. The
`/api/dcat.json` endpoint doesn't give you any indication as to whether a
dataset is federated. Federated datasets share the same exact identifier
across portals, so it is easy to separate distinct datasets, but it is
less obvious how to tell which portals they came from.

We can deal with that by looking at the network of federation from the
portal hope pages. Each portal's homepage has a box like this that says
which portals it federates.

()

The particular portal contains all of the datasets that all of these
federated portals contain. If you construct the network of federation
from these portal homepages, you can resolve duplicates properly. If
the same dataset is on a few different portals, it's because the
different portals all federate the same portal. Since you know what
the network of federation is from the homepages, you can figure out
which portal was the original portal.

The bigger problem with `/api/dcat.json` is that it only returns the
first 1,000 datasets. I am told that you can use query arguments to
get more, but I've never gotten this working.

### With a search
