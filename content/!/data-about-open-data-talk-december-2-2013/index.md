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

#### Getting the data
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

[![A date table family in Socrata](/!/socrata-genealogies/family.jpg)](/!/socrata-genealogies#term-table)

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

![](/!/socrata-users/figure/n.views.png)

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

![Diagram about siloed open data portals and some layer to un-silo them]()

I made a [rather simple site](http://openprism.thomaslevine.com) to demonstrate this idea.

### File formats
http://thomaslevine.com/!/socrata-formats/


### Licensing
Other data catalog software [works differently](https://github.com/tlevine/open-data-download)
than Socrata, but the process it isn't any more fancy. I downloaded data from more....

http://thomaslevine.com/!/open-data-licensing/

### What I found

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
