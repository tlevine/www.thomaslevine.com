---
title: Data set as Data point
---
<!-- For the winter issue of Socrata's magazine -->
I've recently been collecting and studying
[data about open data](/open-data).

The key insight that makes this possible
and relevance
metrics

## Data set as data point
The inspiration for all of these studies is the idea that
any collection of things could be seen as data to be analyzed.

Specifically, even a collection of datasets could be treated
as a dataset of datasets, with a record for each particular
dataset.

## Metadata as data
The term "metadata" is sort of funny. Metadata are data about
data, but they're still data, so do we really need another term
for it? In studying metadata about 100,000 datasets, I started
to see what it means. When people talk about "metadata", they're
usually thinking of information that you'd use for cataloging
and framing the data rather than stuff that you would do "data
analysis" on. Of course, it doesn't have to be this way.

When we see datasets as data points, we see metadata as data.
Inside of our collection of datasets, we have a record for each
sub-dataset; and inside each record, we have a bunch of
fields/attributes/variables/features about the dataset. What fields
should go in there? The metadata fields are a pretty good place
to start.

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
copy from the search article


### Data portal usage
Chicago v New York
UK v US

dataset count

why a problem

A particular dataset could always be broken up into smaller
datasets. The best way to break up a dataset (or not) will
depend on the context, but the dataset count metric encourages
us to break up datasets into smaller pieces.

ignores update frequency, dataset size, data quality,
history

## Conclusion
Open data portals make it easier to consume data once someone
has decided to publish them. But it's still hard to get a
bigger picture of what's going on inside an open data initiative.
We have some basic usage metrics and some basic search features,
but this isn't enough.

When I speak with people about the sorts of data that are on
People who run data portals know a lot about their data and how
they are used, but these people only learned this by doing the
day-to-day work of putting data online and keeping them up-to-date.

This approach to learning what data are on a data portal isn't
good enough. First, it needs to be faster; if we don't come up
with something better, we can't expect anyone other than portal
maintainers to really know what data an organization has released.
Second, this approach is not in line with data-driven
decision-making. If we want to use data in government when making
decisions, we should use data when making decisions about open
data iniatives. And we can only do that with data about these
iniatives.

Data publishers and consumers need to know about the offerings of
open data initiatives, so we need to make that easier to figure out.
I don't know how we'll do that, but I we'll get somewhere if we start
thinking of datasets as datapoints.
