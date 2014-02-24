---
title: Cool things happen when you look at lots of spreadsheets at once
created_at: 2014-02-24
kind: article
tags: ['open-data']
twitter_image: unsilo.png
facebook_image: unsilo.png
description: A whirlwind tour of my studies about open data
---
Here are some materials for
[my talk at Open Austin](),
but they're written in normal language, so they'll probably serve as a decent summary
of my work thus far to people who are reading this on the internet.

## Outline of the talk

Introduction

* What are "open data"? Show the video.
* Data about open data, data-driven open data

Two approaches

1. We have all of these data, so something interesting must be in it.
2. We are interested in something. Let's collect data that will tell us about that thing.

How I collect these data

1. Downloading the data
2. Representing all the spreadsheets as one spreadsheet
3. Looking inside the various datasets

Cool things that happen

## Introduction
Let's talk about some things I've been [learning about open data](/open-data).
For the longest time, I had no idea what people meant when they were talking
about "open data", and I think that's part of why I started looking at the
stuff. So now I have a bit of an idea of what the open data thing is.

### "Open data"
[This video](/!/open-data-in-plain-english) summarizes pretty well most of
the good things people say about open data, at least for government data.
But I think this sort of thinking makes open data seem way to complicated.

### Sharing
Sharing is usually good, and I think that's the heart of what everyone likes
about "open data", and we have a word for it because people aren't used to
this idea. But when the thing that we're sharing is complicated and
sometimes-private numbers, useful sharing gets hard. This happens when you're
trying to share with the whole world, but it also happens when you're trying
to share within a small company. 

We want to share, but we're not very good at it, and this open data stuff is
part of our attempt to get better at sharing.

### Recursive data-driving
One benefit of open data might be the ability for people to use lots of different
datasets in order to make data-driven decisions. The people who are releasing open
data surely get this, so they're obviously using data to make decisions about their
open data initiatives, right?

Actually, they're not, so I started doing that. Also, I'm doing it quite publicly,
so you could say this is open data about open data.

## My process and findings
I was taught in school that you come up with your question and then collect data
that perfectly answer that question. This way works, but you can often learn more
faster and with less work if you're a bit sloppier.

I like to think of two approaches of deciding what to study.

1. We have all of these data, so something interesting must be in it.
2. We are interested in something. Let's collect data that will tell us about that thing.

I think the former is more obvious: Initially, I found it quite odd that
nobody had looked at the data about the data. So I did.

Let's talk a bit about the latter. Let's say we want to study someone's sleep patterns.
In order to do this, we wind to find out when the person is sleeping. We could do this
by having the person record on paper the times at which she goes to sleep and wakes up,
but that would be a lot of work. Other ideas

[Version control commits](http://yihui.name/en/2009/10/50000-revisions-committed-to-r/)

![R commits](../data-about-open-data-talk-december-2-2013/r-commits.gif){:.wide}

[Tweets](https://hackpad.com/Measuring-Socioeconomic-Indicators-in-Arabic-Tweets-IZ5ByP2LvIt)

![Bar plot of Tweet times](../data-about-open-data-talk-december-2-2013/tweet-times.jpg){:.wide}

If the person is me, we can use shell history activity.

    #!/bin/sh
    # This file is history.sh
    for epochtime in $(grep '^#[0-9]\{10\}$' ~/.history/sh-2013-1[12]*|cut -d\# -f2); do
      date --date=@$epochtime +%H
    done | sort | uniq -c | awk '{print $2, "%"$1"s"}' > /tmp/formatted
    
    while read line; do
      # Remove the first space
      nospace=$(echo $line | sed 's/ //')
      printf "$line\n" | tr \  -|sed s/----------------------------------------/=/g|sed -e s/-//g -e 's/=/ =/'
    done < /tmp/formatted

Here's the resulting histogram.

    $ ./history.sh
    00 =========
    01 =======
    02 =====
    03 ====
    04 =======
    05 ============
    06 ======
    07 ====
    08 =
    09 =
    10 =====
    11 ===
    12 ==
    13 ======
    14 =====
    15 ======
    16 ==============
    17 ==============================
    18 =======================================
    19 ============================
    20 ===============
    21 ==========
    22 ==================
    23 ==================

Note that these times are in UTC because that's how I roll.

In this approach of deciding what to study, the idea is that we can
answer our curiosities by building on some existing data collection.
[These](/!/brainstorming) brief thoughts on brainstorming might be
of interest.

## Collecting the data about data
First I download a bunch of spreadsheets and spreadsheet metadata.
Then I assemble all this stuff into a spreadsheet about spreadsheets.
In this super-spreadsheet, each record corresponds to a full
sub-spreadsheet; you could say that I am aggregating each spreadsheet
to produce a few statistics that get put into this spreadsheet.

### Downloading
Data catalogs make it kind of easy to get a bunch of spreadsheets all together.
The basic approach is this.

1. Get all of the dataset identifiers.
2. Download the metadata document about each dataset.
3. Download data files about each dataset.

I've implemented this for the following data catalog softwares.

* Socrata
* CKAN
* Junar (kind of)
* OpenDataSoft

This allows me to get all of the data from most of the open data catalogs I know about.

Let's walk through how that works for the different softwares.

#### Socrata
In Socrata, I hit the `/api/views` endpoint to get all of the datasets.
(They're spread across different pages, but they're all returned.)

> http://data.austintexas.gov//api/views?page=3

All of the metadata are returned in the search results, so this also accomplishes
the second step of downloading the metadata documents.

That said, you can also download the metadata documents separately;
here's one of them.

> https://data.austintexas.gov/api/views/5tye-7ray

Most datasets in Socrata Open Data Portal correspond to spreadsheets, and
you can download those by appending `/rows.csv?accessType=DOWNLOAD`.

> https://data.austintexas.gov/api/views/5tye-7ray/rows.csv?accessType=DOWNLOAD

It took me a while to figure all of this out, so a lot of what I was doing over
the summer was writing documentation.

#### CKAN
Someone wrote a good CKAN client, so I use that to download the CKAN stuff.
This is how I get a list of all the dataset identifiers.

    #!/usr/bin/env python
    import ckanapi
    portal = ckanapi.RemoteCKAN('http://data.gov.uk')
    datasets = portal.action.package_list()

That only provides the identifiers, so I continue with the following code
to get the metadata documents.

    for dataset in datasets:
        dataset_information = portal.action.package_show(id = dataset)

[Here](http://data.gov.uk/api/2/rest/package/index-of-multiple-deprivation)'s
an example of one such metadata file.

Most datasets on CKAN catalogs link to other websites for the main "data"
files, and the links are stored in the matadata files.

#### Junar
In Junar, it's hard to get a list of all of the datasets. You can do a
search like so.

> http://paloalto.cloudapi.junar.com/datastreams/search?query=grapefruit&auth-key=da782fcac90afb0a310f72a4f63baff6d26fc0b1

Well at least that used to work. It seems that that API key doesn't work anymore.

I'm pretty sure that the rest of the process works just fine once you have
a dataset identifier, but I don't remember how that all works at the moment.

#### OpenDataSoft
In OpenDataSoft, you can run an empty search to get the metadata about all
of the datasets in a single file.

> http://parisdata.opendatasoft.com/api/datasets/1.0/search?rows=1000000

Like with the other softwares, you can also get the metadata about a
specific dataset; here's a URL for that.

> http://parisdata.opendatasoft.com/api/datasets/1.0/arbresremarquablesparis2011

Each dataset corresponds to a spreadsheet, and you can download that by
adding `/download?format=csv` to the above URL.

> http://parisdata.opendatasoft.com/explore/dataset/arbresremarquablesparis2011/download?format=csv

### Putting them in a spreadsheet
Once I get all these data together


Now I have a spreadsheet of datasets.

[![A spreadsheet of spreadsheets](/!/dataset-as-datapoint/spreadsheet-spreadsheet.png){:.wide}](/!/dataset-as-datapoint)

Here are the some of fields I get from that.

* portal
* id
* name
* attribution
* averageRating
* category
* createdAt
* description
* displayType
* downloadCount
* numberOfComments
* oid
* publicationAppendEnabled
* publicationDate
* publicationStage
* publicationGroup
* rowsUpdatedBy
* rowsUpdatedAt
* signed
* tableId
* totalTimesRated
* viewCount
* viewLastModified
* viewType
* nrow
* column names and types
* owner.id
* owner.displayName
* owner.emailUnsubscribed
* owner.privacyControl
* owner.profileLastModified
* owner.roleName
* owner.screenName
* owner.rights
* tableAuthor.id
* tableAuthor.displayName
* tableAuthor.emailUnsubscribed
* tableAuthor.privacyControl
* tableAuthor.profileLastModified
* tableAuthor.roleName
* tableAuthor.screenName
* tableAuthor.rights
* displayFormat
* flags
* metadata
* rights
* tags

#### What I found
First, nobody has any idea of what is going on in open data.
This was my main conclusion after I tweeted about [this article](/!/socrata-summary/);
I thought it would not be that interesting, but people strangely liked it.
Many people know about datasets that are relevant to their work,
municipality, &c., but nobody seems to know about the availability of
data on broader topics, and nobody seems to have a good way of
finding out what is available. And nobody has a great idea of who
is using which data.

Second, resolving [duplicate datasets](/!/socrata-genealogies/#types-of-duplicate-datasets) is annoying. Three types of duplication

1. SODA queries: Filtered views, charts, maps
2. Federation
3. Uploaded twice

### Data about people who use data
Let's look a bit at how people interact with these data. One of Socrata's
features is built-in charting tools that are supposed to
"[consumeriz\[e\] the data experience](http://www.socrata.com/open-innovation/)"
Basically, you can go to `data.cityofnewyork.us` or any Socrata site, find
an existing dataset, and make a new chart, map, query, &c. from it.
It turns out that Socrata exposes a lot of knowledge about how this feature
gets used.

#### Getting the data
Notice the "owner" and "tableAuthor" fields in the previous download.
These refer to user accounts in Socrata.

Internally, each new chart is represented as a "view" on the underlying
data "table".

[![A date table family in Socrata](/!/socrata-genealogies/family.jpg){:.wide}](/!/socrata-genealogies#term-table)

Anyway, if I use just these columns,
I now have a dataset of users. I didn't use SQL, but if I had, the
query would have been sort of like this.

    SELECT * FROM (
      SELECT 
        "owner.id",
        "owner.displayName",
        "owner.emailUnsubscribed",
        "owner.privacyControl",
        "owner.profileLastModified",
        "owner.roleName",
        "owner.screenName",
        "owner.rights"
      FROM "datasets"
      UNION ALL
      SELECT 
        "tableAuthor.id",
        "tableAuthor.displayName",
        "tableAuthor.emailUnsubscribed",
        "tableAuthor.privacyControl",
        "tableAuthor.profileLastModified",
        "tableAuthor.roleName",
        "tableAuthor.screenName",
        "tableAuthor.rights"
      FROM "datasets"
    )
    GROUP BY "id"

That is, I combine stack the owner columns and tableAuthor columns into one
table and then remove duplicates based on the `id` field. If I didn't remove
duplicates, I would have multiple rows per user.
(The query would actually be a bit more complicated than this because it would
have to count how many times a user owns a view and has authored a table.)

Don't worry if that didn't make sense to you; the point is that we can use
datasets in different ways than they seem to be intended.

#### What I found
My main conclusion is that people don’t use these charting tools all that much.

##### Big users
Most of the users in the dataset (7790 to be exact) had made exactly one view.
Actually, there are probably even more with no views, but I don't have the
data on them.

![](/!/socrata-users/figure/n.views.png){:.wide}

Similarly, the users who have owned and authored the most tables tend to work
for either Socrata or clients of Socrata.

Neither of these discoveries should be a surprise; you can call it the
[Pareto principle](http://en.wikipedia.org/wiki/Pareto_principle) if you want.

##### Consumerizing
I wanted to see examples of this consumerized data analysis that was being
advertised, so I tried to find users who were not employed by Socrata or its
clients. I eventually [found some](/!/socrata-users/#also-no-tables).

As I said above, my main conclusion is that people don’t use these charting
tools all that much. More specifically,

1. The people who create the most charts are people who maintain data portals
2. Aside from those who maintain data portals, the people who create the most
    charts are usually making different charts of the same data.
3. I found a small number of people who seem to be using the charts for broader
    things. I haven't really talked to any of them, but the little I do know of
    their stories is interesting.

### Finding data is hard
I realized that I using my spreadsheet rather than Socrata's search tool to look
up data. This was funny, and it pointed out to me an interesting phenomenon about
the sharing of government data. As I said earlier, nobody has any idea of what is
going on with open data. At a most basic level, even though we have these catalogs
of datasets, people can't really figure out what is in the catalog.

I have [identified](/!/openprism)
two broad categories of issues related to this.

1. Naive search method
2. Siloed open data portals

Let's talk about the second one.

![Diagram about siloed open data portals and some layer to un-silo them](../data-about-open-data-talk-december-2-2013/unsilo.jpg){:.wide}

I made a [rather simple site](http://openprism.thomaslevine.com) to demonstrate this idea.

### File formats

We're supposed to use certain file formats.

* "Mandate open formats for government data" ([Sunlight Foundation](http://sunlightfoundation.com/opendataguidelines/#open-formats))
* "structured data" ([5 stars](http://inkdroid.org/journal/2010/06/04/the-5-stars-of-open-linked-data/))
* "Data Must Be Machine processable" ([Open Government Working Group](http://www.opengovdata.org/home/8principles))

#### Getting the data
This time, I used the `data.json` endpoint, which is supposed to return
a [DCAT](http://project-open-data.github.io/schema/) listing of all of
the datasets. It turns out that this endpoint
[isn't implemented properly](/!/socrata-formats/#cutoff-at-1000),
but we'll make do

#### What I found
What are the file formats?

![Bar plot of file formats by portal](/!/socrata-formats/figure/all-formats.png){:.wide}

It turns out that file formats tell you quite a bit about the type of data too.
Take a look at [Missouri](/!/missouri-data-licensing/)

### Licensing
Other data catalog software [works differently](https://github.com/tlevine/open-data-download)
than Socrata, but the process it isn't any more fancy. I downloaded data from catalogs running
these software.

* Socrata
* CKAN
* OpenDataSoft
* Junar

And then I [looked at](http://thomaslevine.com/!/open-data-licensing/)
the licenses that different datasets have.

![Licenses across all portals](/!/open-data-licensing/p2.png){:.wide}

Most data catalogs either have a license on everything or a license on nothing.)

![Bar graph of proportion of datasets](/!/open-data-licensing/p1.png){:.wide}

As I said before, [Missouri](/!/missouri-data-licensing/) is interesting.
Also, they get this licensing right.

> [Licensing is important because it reduces uncertainty.](http://opendatacommons.org/faq/)

### Updating
Open government data are supposed to be kept up-to-date.
[Pretty much nobody](http://thomaslevine.com/!/data-updatedness/#even-simpler) does this.

#### Getting the data
Recall that there were some date fields in those Socrata data.

* `createdAt`
* `publicationDate`
* `rowsUpdatedAt`
* `viewLastModified`

Once I figured out what these meant and dealt with [duplicates](/!/data-updatedness#removing-duplicates),
I could check whether datasets were being updated.

#### What I found
First, hardly any datasets ever get updated.

![Hardly any datasets get updated](/!/data-updatedness/figure/any_update.png){:.wide}

Second, the ones that have been updated were mostly updated two years ago.
There might have been some bulk Socrata migration at the beginning of September 2011.

![Bulk migration?](/!/data-updatedness/figure/publish_v_update.png){:.wide}

Here are the datasets that got published before 2013 and got updated during 2013.

![Old data still kept up-to-date](/!/data-updatedness/figure/publish_v_update_2013.png){:.wide}

It's only 13 datasets.

![Those 13 datasets, by portal](/!/data-updatedness/figure/updates_2013_url.png){:.wide}

## Future things
The general thing I'm doing here is just studying data about open data.
People haven't done much of this, so it's turning up some interesting thing.

I've started seeing four perspectives I could take in future study,
and the general idea for all of these is to automate existing manual processes.

1. Check how well open data guidelines are being followed.
2. Help people find data of interest to them; come up with something better than our current search bars.
3. Fill in blank metadata fields.
4. Figure out what makes for good data sharing; what are the impacts of organizational structures,
    hackathons, data catalog software, and open data policies on things that we care about?

They're really all the same thing, actually, but
I'm focusing on the first of these for the immediate future.

## Exercises
Attendees of this [NYC Open Data meetup](http://www.meetup.com/NYC-Open-Data/events/147380312/)
typically want to learn exactly how to do things, rather than just getting a general
idea of some new idea. (At least, this is the impression I get.) It's sort of "open data"
from a different angle; if everyone knows how to do things with data, then even messy data
would be quite open in a sense. But I digress.

Let's learn how to plan a crazy project like this. I've prepared two exercises.

### Outlining a program
Choose an open data catalog from this list.

* [Washington, District of Columbia](http://data.dc.gov)
* [Greater Portland, Oregon](http://www.civicapps.org/datasets)
* [Utah](http://www.utah.gov/open)
* [New Hampshire](http://nhopengov.org)
* [Louisville, Kentucky](http://portal.louisvilleky.gov/service/data)
* [Philidelphia, Pennsylvania](http://www.opendataphilly.org) (It runs [this software](https://github.com/azavea/Open-Data-Catalog/).)

First, diagram how a person could manually download all of the datasets.
You want to get the most raw form available, not the sort of aggregates
that you might see in a plot.

After you've done that, change the labels in the diagram so that it describes
a computer program that downloads the datasets.

If you're lucky, you'll find API documentation, but you don't need it;
figure out what the API is, and write the documentation yourself.

For the one-minute presentation, walk through your outline of your program.
You can draw a diagram, write out steps in words, click through the website,
or just explain it without any visuals.

### Using simple variables to represent grand concepts
Select a document from this list, then select a single guideline within
the document. Brainstorm ways that you could test how well the guideline
is being followed. Try to come up with approaches that don't involve
much manual work.

* Open Knowledge Foundation [Open Data Census](http://census.okfn.org/)
* Tim Berners-Lee [Five Stars](http://inkdroid.org/journal/2010/06/04/the-5-stars-of-open-linked-data/) of open linked data.
    <!-- http://opendata.stackexchange.com/a/529 -->
* Open Government Working Group [8 Principles of Open Government Data](http://www.opengovdata.org/home/8principles)
* Sunlight Foundation [Open Data Policy Guidelines](http://sunlightfoundation.com/opendataguidelines/)
* Open Data Institute [Certificates](https://certificates.theodi.org/)

For the one-minute presentation, show us the open data guidelines that you
chose and explain the approaches you came up with.

You'll probably have time to look at more than one guideline, but you probably
won't have time to talk about more than two. If this is the case, choose
one or two that you though were most interesting.