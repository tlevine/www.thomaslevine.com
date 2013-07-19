---
title: Progeny of Ten Socrata Datasets
created_at: 2013-07-19
kind: article
twitter_image: screenshot.png
facebook_image: screenshot.png
tweet_text: The World Bank (@WBOpenFinances) contract award dataset has been forked 345 times. http://thomaslevine.com/!/socrata-genealogies/
description: How are datasets are transformed in Socrata, and what can we can learn from that?
twitter_description: How are datasets are transformed in Socrata, and what can we can learn from that?
facebook_text: The @World Bank's contract award dataset has been forked 345 times. http://thomaslevine.com/!/socrata-genealogies/
facebook_title: How are datasets are transformed in Socrata, and what can we can learn from that?
facebook_description: It's cool what you can do when everyone's data analysis is logged and exposed publicly over the web.
---
Governments and other organizations have recently been trying to open up their
data. Socrata's [Open Data Portal](http://www.socrata.com/open-data-portal/) software
is one tool that tries to help with this; an organization using Socrata is given a website
("portal") hosted by Socrata where they can upload their datasets and where
the public can download them.

I recently downloaded all of the metadata about all of the datasets from all
of the Socrata portals and then posted this [summary](/!/socrata-summary) of
the data. Now on to some deeper analysis.

## What is a dataset?
As the Twitters have pointed out,the dataset counts that I presented in my
initial summary are somewhat deceptive.


[![@tomschenkjr Tweets about Chicago's filters](tomschenkjr.png)](https://twitter.com/tomschenkjr/status/354010005504147456)

[![@SR_spatial Tweets about patterns of derived datasets](SR_spatial.png)](https://twitter.com/SR_spatial/status/354088265344749568)

Many of the things that I was calling a dataset can be seen as a
copy or a derivative of another dataset. In this post, I'll discuss

1. Socrata concepts and terminology
2. Ways that we can arrive at apparent duplicates in Socrata data
3. The progeny of ten Socrata datasets

## Socrata terminology
Most of my work on this for the past week has been figuring out
Socrata's terminology and schema. Let's define some Socrata terms.

### Everything is a view
When you go to the home page of a Socrata portal, you can
"Search & Browse Datasets and Views". This phrasing is sort
of wrong. "**view**" is just a generic concept that refers
to any sort of file or data that is presented to a user.

Everything in that list on the home page is a view. I haven't
yet explained what a dataset is, but a dataset is a type of
view. For example, the top two views in
[explore.data.gov](https://explore.data.gov/) are currently (July 17)
[White House Visitor Records Requests](https://explore.data.gov/dataset/White-House-Visitor-Records-Requests/644b-gaut)
and [U.S. Overseas Loans and Grants (Greenbook)](https://explore.data.gov/dataset/White-House-Visitor-Records-Requests/644b-gaut).

[![Search & Browse Datasets and Views](search-browse.png){:.wide}](https://explore.data.gov/)

You also get a list of "View Types". Below, I define some
of these view types.

### Datasets
Let's start with the **dataset**.
A dataset is when you get when you upload data to Socrata in one of
its supported tabular formats.

### Filtered views
Before I define "filtered views", I want to explain why they exist.
Socrata helps people publish their data by providing various APIs
for importing from different data sources, and Socrata helps people
consume data by providing a data analysis suite inside the web browser.
This includes maps and graphs and whatnot that you can embed in
websites rather than just in PDF documents.

Socrata also allows you to "Filter"
datasets. For example, here I filter the list of
[Public Works Volunteer Opportunities](https://data.oaklandnet.com/Environmental/Public-Works-Volunteer-Opportunities/sduu-bfki)
to include only opportunities on July 29.

![Filtering on date July 29](filter.png){:.wide}

[Here](https://data.oaklandnet.com/Environmental/Volunteer-Opportunities-on-July-29/vyhb-nqtw)'s the resulting filtered view.

**Filtered views** are queries on a dataset. The queries are represented internally in the
[SODA filter query language](http://dev.socrata.com/deprecated/querying-datasets).

### Charts and maps
**Charts** and **maps** are also queries on a dataset.
The difference between filtered views, charts and maps is quite subtle.
They are all queries on datasets; they just display a different
visualization when you view them on the Socrata website.

There are other types of views, but we don't need to know about them
for now.

### Tables
![A table family, containing a dataset and several filtered views, charts and maps](<%= @item.identifier %>family.jpg){:.wide}
<!-- Icons from https://explore.data.gov/stylesheets/images/icons/type_icons_30.png?1 -->

There is also a concept of a **table**, and
it is somewhat abstract. Here are two ways of thinking of it.

First, a more conceptual explanation.
After someone uploads a dataset, a variety of filtered views,
charts and maps can emerge. I see this as a family of views,
with the parent being the original dataset and the ancestors
being all of the filtered views, charts and maps that make
SODA queries on the original dataset. In Socrata, this family
is called a table.

Next, a more technical explanation.
The data are stored in a table, and this table is not exposed directly to users. 
The most raw form of the table is exposed through a dataset, which is an empty
query on the dataset (equivalent to `SELECT * FROM table_name;`). Filtered views,
charts and maps act on the table rather than on the source dataset; they're just
like datasets, except that they include a query.

### Federation
Socrata doesn't provide a particularly obvious means for searching multiple
data portals at once. (This was part of my motivation for downloading all of
the datasets.) But it is possible for one data portal to include all of
another portal's datasets.

Sometimes, you'll see a view in the search & browse pane with a gray background,
instead of white. Hawaii has a bunch of these.

[![Hawaii data portal](hawaii.png){:.wide}](https://data.hawaii.gov/)

These views are "provided" by other portals through a process called
"federation". The destination portal (data.hawaii.gov in the above screenshot)
makes a request to the source portal (data.explore.gov in the above screenshot)
to federate the source portal's data.

This request shows up in the administrator interface for the source portal.
If the source portal accepts the request, all of the views from the source portal
are provided to the destination portal as in the screenshot above. Here are
[two](http://www.socrata.com/video/socrata-open-data-federation-demonstration/)
[videos](http://www.socrata.com/datagov/open-data-federation-video/) about that.

If you look closely, you'll notice that the federated views are actually just
links to the source portal; the views show up in the search, but they aren't
otherwise copied to the destination portal.

## Types of duplicate datasets

[![@richmanmax Tweets "deduuuuuupe."](deduuuuuupe.png)](https://twitter.com/richmanmax/status/353956877501087746)

Now that you know a bit more about how Socrata works, I can explain my three
categories of datasets-that-I-counted-twice.

### SODA queries: Filtered views, charts, maps
After a dataset is uploaded, people can create many views that derive from it.
In my previous analysis, I counted filtered views, charts and maps all as separate
entities. I think it's worth separating these because they can be derived from the
source datasets.

If people are using Socrata as it is intended, there should be tons of filtered
views, charts and maps, and they'll give us an interesting picture of how the
portal is being used.

### Federation
When datasets are federated, *all* of the datasets from the source portal are
provided to the destination. (You can't pick and choose.) That is, they show up
in search as links to the source portal.

In my previous analysis, I counted federated datasets as belonging to the portal
to which they're provided. Also, I downloaded them in a way that made it hard for
me figure out what the source portal was. It's easy to fix, so I might download
them all again and graph the network of federation across Socrata portals.

(For those who are curious, the issue was that I followed HTTP redirects and
didn't record whether I was following a redirect or accessing the page directly.)

### Copied rather than elegantly linked
Some datasets have simply been uploaded to two different portals.
Lombardia's museums is an example of that.

<!-- I don't know why the Kramdown table syntax isn't working here. -->
<table>
  <thead>
    <tr>
      <th>Portal</th>
      <th>Identifier</th>
      <th>Rows</th>
      <th>Columns</th>
      <th>Downloads</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>dati.lombardia.it</td>
      <td><a href="https://dati.lombardia.it/Cultura/Musei/3syc-54zf?">3syc-54zf</a></td>
      <td>234</td>
      <td>56</td>
      <td>1675</td>
    </tr>
    <tr>
      <td>opendata.socrata.com</td>
      <td><a href="https://opendata.socrata.com/Education/Musei-Lombardi/54y8-wyde?">54y8-wyde</a></td>
      <td>234</td>
      <td>56</td>
      <td>9</td>
    </tr>
  </tbody>
</table>

I identified this group by looking for datasets with the same numbers of rows,
the same number of columns, and similar names.
I haven't done it on a larger scale, but that would be fun to do later.

## Ten large dataset families
It took me quite a while to figure out everything that I explained above.
(That's a story in itself.) My goal all along was to start looking
at how families of datasets are related, so now I'll talk about what I
did on that front.

### Methodology
I grouped all of the views that I had collected by table. (Recall that
a table in Socrata is a dataset plus the family of views that derives
from that particular dataset.)

Once I had grouped them, I found the ten largest families, by number of
different views. To be clear, this is the number of Socrata entities
called "views" rather than the number of times people viewed the dataset.
(Confusingly, Socrata also provides the latter sort of view count, and 
I've included that figure in the present report.)

Out of these datasets, I took the top ten datasets, and I
show their families in the fancy table at the end of this page. Select a dataset,
and then you can see all of that dataset plus all of the filtered views,
maps and charts of that dataset. You can also see which portals each of
these datasets is federated to. You can sort by the different columns,
and you can click on a row to see more detail.

And In case you're reading this a year later, the data were collected from
Socrata portals at the end of May 2013.

### Discussion
*This section might make more sense if you play with the fancy table first.*

#### Why it's not a tree
In Socrata, you can create a filtered view, chart or map based on a dataset,
and the link to the source dataset will be preserved. This is represented
in the table below.

Unfortunately, the genealogy is not recorded any deeper than this; if you
create a new filtered view based on an existing filtered view, the SODA query
is simply combined between the two views, and the new filtered view is
represented as a child of the original dataset rather than a child of the old
filtered view.

Thus, we don't get the full family tree that you might have expected.

#### Compare family statistics with view statistics
In some cases, like with the White House visitor records requests, most of the
downloads and hits for the whole family are from this source dataset.
In other cases, like the World Bank major contract awards, only a small
minority comes from this source dataset. This occurrence is illustrated by the
plots below.

The first plot looks at hits, and the second at downloads. Within each plot,
the left (red) dot is the number of hits/downloads that the source dataset
received and the right (blue) dot is the total hits/downloads across the whole
family.

If these are close to each other (that is, the black line is short),
most of the hits/downloads came from the source dataset.
If they are far apart, most
hits/downloads came from filtered views, charts and maps.

![Hits by dataset family](<%= @item.identifier %>hits.png){:.wide}

![Downloads by dataset family](<%= @item.identifier %>downloads.png){:.wide}

This information might tell us something about
how people like to use the data. Perhaps people working with the World Bank
contracts are interested in subsets for their particular region and time.
And maybe people are just playing with the White House data because it's the
first one in the list.

#### View size and shape
The view size and shape give us an idea of what sort of queries people are running.
Are people selecting certain variables, or are they aggregating or subsetting
the records?

![A rectangle indicating the original dataset](<%= @item.identifier %>query-1.jpg)

![The same rectangle, with a shorter one for a record subset](<%= @item.identifier %>query-2.jpg)

![The same rectangles, with a tall, thin one for a selection of variables](<%= @item.identifier %>query-3.jpg)

#### Federation
As I discussed earlier, federation is all-or-nothing; you either include all
of the source portal's datasets or none of them. So you would expect that the
"Federation" column would list the same number of copies for each dataset.
In at least one instance (FEC contributions), this is not the case.
I haven't figured out what's going on there.

### Relevance
Socrata exposes enough of the data analysis process that we can start to see
what sorts of analyses different people are doing. We can see what sorts of
datasets are interesting to people. We may even be able to develop new
guidelines for publishing datasets through analysis of what makes datasets more
likely to be viewed, downloaded and filtered on Socrata.

### Data family explorer
And now, the aforementioned fancy table. As I said above, this table contains
the families/tables associated with the ten datasets with the largest families.
Select a dataset, and then you can see all of that dataset plus all of the
filtered views, charts and maps, with some information about each. And if you
sort by "Created" date, the first one should be the source dataset.

<!-- Scripts after the introduction so you don't notice the table loading -->
<script src="angular.min.js"></script>
<script src="angular-table.js"></script>
<script src="angular-strap.js"></script>
<script src="script.js"></script>
<link rel="stylesheet" href="style.css">
<div ng-app="genealogy">
  <div ng-controller="GenealogyCtrl">
    <select ng-model="table" ng-options="t.source.name for t in tables">
      <option value="">Choose a dataset</option>
    </select>
    <div ng-show="table">
      <h3>The family/table</h3>
      <ul>
        <li><strong>Original source</strong>: <a href="https://{{table.source.portal}}/-/-/{{table.source.id}}">{{table.source.portal}}</a></li>
        <li><strong>Number of children</strong>: {{table.datasets.length}}</li>
        <li><strong>Total downloads</strong>: {{ table.totals.downloadCount }}</li>
        <li><strong>Total views</strong>: {{ table.totals.viewCount }}</li>
        <li><strong>Description</strong>: {{table.source.description}}</li>
      </ul>
      <h3>Its member views</h3>
      <angular-table model="table.datasets" default-sort-column="createdAt">
        <header-row>

          <header-column sortable="true" sort-field-name="name">
            <div style="display: inline-block;">Name</div>
            <sort-arrow-ascending></sort-arrow-ascending>
            <sort-arrow-descending></sort-arrow-descending>
          </header-column>

          <header-column class="skinny" sortable="true" sort-field-name="createdAt">
            <div style="display: inline-block;">Created</div>
            <sort-arrow-ascending></sort-arrow-ascending>
            <sort-arrow-descending></sort-arrow-descending>
          </header-column>

          <header-column class="skinny" sortable="true" sort-field-name="viewCount">
            <div style="display: inline-block;">Hits</div>
            <sort-arrow-ascending></sort-arrow-ascending>
            <sort-arrow-descending></sort-arrow-descending>
          </header-column>

          <header-column class="skinny" sortable="true" sort-field-name="downloadCount">
            <div style="display: inline-block;">Down-loads</div>
            <sort-arrow-ascending></sort-arrow-ascending>
            <sort-arrow-descending></sort-arrow-descending>
          </header-column>

          <header-column class="less-skinny" sortable="true" sort-field-name="ncell">
            <div style="display: inline-block;">Size</div>
            <sort-arrow-ascending></sort-arrow-ascending>
            <sort-arrow-descending></sort-arrow-descending>
          </header-column>

          <header-column sortable="true" sort-field-name="ncopies">
            <div style="display: inline-block;">Federation</div>
            <sort-arrow-ascending></sort-arrow-ascending>
            <sort-arrow-descending></sort-arrow-descending>
          </header-column>

        </header-row>

        <row on-selected="emptyFunction" selected-color="#111">
          <column><a href="https://{{row.source_portal_hack}}/-/-/{{row.id}}" title="{{row.name}}">{{row.shortName}}</a></column>
          <column class="skinny">{{row.prettyDate}}</column>
          <column class="skinny number">{{row.viewCountPretty}}</column>
          <column class="skinny number">{{row.downloadCountPretty}}</column>
          <column class="less-skinny">
            {{row.ncellPretty}} cells
            <ul style="list-style: none;" class="snug" ng-show="row.rowSelected">
              <li class="snug"><small>{{row.ncolPretty}} variables</small></li>
              <li class="snug"><small>{{row.nrowPretty}} records</small></li>
            </ul>
          </column>
          <column>
            <span ng-hide="row.rowSelected">{{row.ncopiesPretty}}</span>
            <ul class="snug" style="list-style: none;" ng-show="row.rowSelected">
              <li class="snug" ng-repeat="portal in row.portals"><small>{{portal}}</small></li>
            </ul>
          </column>
        </row>
      </angular-table>
    </div>
  </div>
</div>
