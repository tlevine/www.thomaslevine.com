---
title: Data set as Data point
---
<!-- For the winter issue of Socrata's magazine -->
I've recently been collecting and studying
[data about open data](/open-data).

## Data set as data point
The main inspiration for all of these studies is the idea that
any collection of things could be seen as data to be analyzed.

Specifically, even a collection of datasets could be treated
as a dataset of datasets, with a record for each particular
dataset.

## Metadata as data
The term "metadata" is sort of funny. Metadata are data about
data, but they're still data, so do we really need another term
for it? In studying metadata about 100,000 datasets, I started
to see what it means.

When people talk about "metadata", they're
usually thinking of information that you'd use for cataloging
and framing the data rather than stuff on which you would do
"data analysis". That is, metadata are things that you would use
for styling webpages, titling graphs, and searching datasets,
but you would never put them in a spreadsheet.
Of course, it doesn't have to be this way.

When we see datasets as data points, we see metadata as data.
Inside of our collection of datasets, we have a record for each
sub-dataset, and this record is composed of metadata about that
sub-dataset.

## Creating new fields in our dataset of datasets
Another thing about metadata is that they are usually recorded
separately of the data. For example, the title of a dataset will
probably be in the metadata, but the number of rows in the dataset
might not be. This shouldn't stop us from from counting how many
rows each sub-dataset has and putting that in our dataset-of-datasets.

Don't get me wrong; there is much to be learned by studying the
metadata alone. In a [couple](/!/socrata-formats)
[cases](/!/socrata-deduplicate), I used data straight from
Socrata's [DCAT]() endpoint,
which only includes some minimal metadata.

I'm still at the early stages of computing new fields to describe
the different sub-datasets in our dataset-of-datasets, but some
interesting things are already coming out of this approach.

In many cases, I treated the names of the columns as a field.
Thus, for each sub-dataset in the dataset of datasets, I had
fields relating to the names and data types of different columns.
I also treated the number of rows as a field. In concert, these
fields allowed me to find [similar datasets](http://appgen.me/audit/report),
[large datasets](/!/socrata-summary) and
[changes to datasets](/!/socrata-genealogies).

## Why this matters
By treating datasets as datapoints, treating metadata as data
and creating of new attributes to describe datasets, I am able
to conduct all of these studies about open data. But why should
anyone else treat open data this way? I believe that thinking
of datasets as datapoints will lead to lots of useful things.
For now, I'll talk about two things: searching for datasets,
measuring data portal usage.

### Searching for datasets
Part of the goal of a data catalog is to make it easier to find
datasets, so that we don't need to ask someone where to find them.
Data portal software lets us search the catalogs, but the search
typically isn't very helpful. On all of the data portals I've
looked at, the text search is just an ordinary text search on the
metadata and, in some cases, the full dataset. We can do better.

Datasets are highly structured, and we can use that to make the
search better.  Let's say we have a dataset containing a post code
column and we search for "crimes in Shoreditch". The dataset might
not actually say "Shoreditch" anywhere because it just has post
codes, but we should be able to find the dataset.

If we're thinking about datasets and data points, this is sort of
natural; here's a crude version. We get a list of all of the names
of neighborhoods in London. We look at each dataset, determine
the dataset contains data about each neighborhood, and assign a
value of yes or no for each of these neighborhoods. Since we're
thinking of the dataset as a row in a data table, we're just adding
a bunch of columns to the data table. With these richer table, we
can improve our search feature.

### Data portal usage
We often use the number of datasets on a portal as a measure of
data portal quality. Unfortunately, this number isn't very meaningful.

Depending on the situation, it could make sense to break up a
larger dataset or to combine a bunch of smaller datasets.
Neither of these manipulations really changes the amount of data
on the portal, but they will substantially impact our metric
(number of datasets on the portal). Thus, this isn't a particularly
informative metric. Moreover, such a metric may encourage us to
break up a larger dataset into pieces when it doesn't really
make sense to.

We can develop a better metric for the amount of data on a portal,
but we should also come up with measures for the other things that
we really care about. Here are some examples.

* **Completeness**: What proportion of a government's data has been
    released on the portal?
* **User groups**: Does the dataset tend to be used by people inside
    of government or outside of government? What proportion of dowloads
    come from government buildings?
* **Timeliness**: How up-to-date are the data? How many datasets
    that were published more than a year ago have been updated within
    the past year?

If we think of datasets as data points, it is natural for us to
get creative about the data that we collect about each dataset.

## Conclusion
Open data portals make it easier to consume data once someone
has decided to publish them, but they don't yet give us the
bigger picture of what's going on inside an open data initiative.
We can't really tell what datasets are available, who's using them,
what impact they're having, or whether they are of good quality.

We need to give data publishers and data consumers a better picture
of what is going on in open data portals. I don't know how we'll do
that, but I think we'll get somewhere if we start thinking of datasets
as datapoints.
