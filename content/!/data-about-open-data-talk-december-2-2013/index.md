Here are some materials for
[my talk at NYC Open Data](http://www.meetup.com/NYC-Open-Data/events/147380312/).

## Data about open data
Let's talk about some things I've been [learning about open data](/open-data).
For the longest time, I had no idea what people meant when they were talking
about "open data". But now I have [this video](/!/open-data-in-plain-english)
that gives a decent explanation, at least for government data.

To some degree, "open data" is just the sharing of data, but we have a word for
it because people aren't used to this idea. Sharing data within just company is
already pretty hard, but good things might happen once you do it.

One benefit of open data might be the ability for people to use lots of different
datasets in order to make data-driven decisions. The people who are releasing open
data surely get this, so they're obviously using data to make decisions about their
open data initiatives, right?

Actually, they're not, so I started doing that. Also, I'm doing it quite publicly,
so you could say this is open data about open data.

### Data about data

#### How I got them
[![Diagram about downloading Socrata data](/!/socrata-summary/architecture.jpg)](/!/socrata-summary)

Now I have a spreadsheet of datasets.

[![A spreadsheet of spreadsheets](/!/dataset-as-datapoint/spreadsheet-spreadsheet.png)](/!/dataset-as-datapoint)

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
First, nobody has any idea of what is going on.
[This article](/!/socrata-summary/) should not have been interesting, but people liked it.

Second, resolving [duplicate datasets](/!/socrata-genealogies/#types-of-duplicate-datasets) is annoying. Three types of duplication

1. SODA queries: Filtered views, charts, maps
2. Federation
3. Uploaded twice

### Data about people who use data

### How I got them
Notice the "owner" and "tableAuthor" fields in the previous download.
These refer to user accounts in Socrata. If I use just these columns,
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

Don't worry if that didn't make sense to you; the point is that we can use
datasets in different ways than they seem to be intended.

### What I found
The users who have owned and authored the most tables tend to either work for
Socrata or work for clients of Socrata.
/!/socrata-users/#also-no-tables



###

Other data catalog software [works differently](https://github.com/tlevine/open-data-download),
but the process it isn't any more fancy.

### What I found
* http://openprism.thomaslevine.com

### No metadata
If we're lucky, we have some data about our datasets, but we don't have much data
about the data about our datasets. If anything, there's API documentation, but it's
usually pretty bad. So here's how I figure out what's going on.

There are examples of this in most of the articles.
Maybe also take screenshots of the site and compare site to the metadata files.




## Brainstorming
I like to think of two approaches of deciding what to study.

1. We have all of these data, so something interesting must be in it.
2. We are interested in something. Let's collect data that will tell us about that thing.

I think the former is more obvious; let's talk a bit about the latter.
Specifically, let's talk about brainstorming and six thinking hats.

## Exercises

### Outline a program
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

### Operationalizing constructs
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
