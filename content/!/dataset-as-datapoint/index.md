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

eoeu


## Conclusion
It's easy to focus on individual datasets and miss what's going
on in an open data effort as a whole.

If you start thinking about datasets as datapoints inside of
a super-dataset of datasets, interesting possibilities might
emerge. 

If we treat open data this way, we can use the highly
structured and dense information
