---
title: Open data possibilities
tags: ['socrata']
---
I've brief suspended my open data studies to prepare
some things for [Zipfian Academy](http://zipfianacademy)'s
first twelve-week course, but I've been accumulating
lots of ideas of things you could do with data about
open data. I plan on doing a lot of them, but I
probably can't do all, so you should take one of these
ideas and do something awesome.

## What's in the portals?

### Socrata v GitHub
GitHub has a pretty CSV table visualizer thingy that supports small CSV files.
What proportion of Socrata tables are small enough to be supported by GitHub?

### Compare official datasets to derived datasets
The `data.json` file contains only the official datasets and the federated datasets.
The search of the site contains all of the derived views. Let's compare these two to
see what sort of data gets studied within the data portat.

### Openness by department and city
Some departments are more resistant to opening data. I'm told that the departments
that are more political tend to be more resistent to opening data. I want to use
open data release as an indicator of politicalness of a department, and I want to
see how open data release (politicalness) of equivalent departments (like education)
vary by city.

## Better search and linked data

Let's find links bytween datasets. Ideally, let's get a bunch of datasets with rich
linked data about them and try to predict the linkages. Specific things I want to try

* Find datasets that can be joined on common variables (columns).
* Determine the statistical unit (meaning of a row) of a dataset.
* Aggregate datasets so that they can be joined.
* Automatically union datasets by selecting datasets with the same variables (columns)
    and statistical units (rows)
* Fill in the codebook (data dictionary). For datasets missing codebooks, we might be
    able to pick some of the information out of codebooks with other dictionaries.

## Data quality

### Dataset and data portal scorecard
The current obvious metrics of dataset and data portal quality are
size, like number of records and number of datasets. There are other
things that we might want to worry about.

There are a few guidelines as to how to do open data.
There's one from [Sunlight](http://sunlightfoundation.com/opendataguidelines/),
there's one from the [AppGen audit](http://www.appgen.me/audit/),
I have a list from a conversation from [Noel](http://noneck.org/),
and there are a bunch of open data laws and policies.

People like the Sunlight Foundation and the Open Data Institute
have rated the openness of various places. I would like to make
such a rating in a more automated way.

### Completeness of portals
By looking at data from FOIA and other portals, we can guess whether
a city has a particular dataset internally and check whether it has
been released publicly. Let's do this across all cities and see whether
a particular sort of data is available in particular cities.

### Prerequisites


## Indirect
There are lots of data portals, and not all
aspects of the various data portals software
are documented. Here are some things that will
help with further studies in the areas discussed
above.

215/b6a:om: Who federates whom on Socrata?
215/21a:om: Download data from other data portal software
215/7ad:om: Open data and MuckRock

## Studies with open data

215/bf1:om: Where is gentrification gonna happen next?
215/1c0:om: Open data song
215/b3e:om: Tutorial on analyzing open data
