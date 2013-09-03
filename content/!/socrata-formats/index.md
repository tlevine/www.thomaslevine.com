---
title: What file formats are on the data portals?
description: I looked at the file formats of datasets on open data portals.
tweet_text: San Francisco has a lot of shapefiles.
tweet_title: And Missouri has a lot of PDFs.
tweet_description: What file formats are on the data portals?
kind: article
created_at: 2013-09-03
---
I found some more open data about open data to [study](/socrata).
While [at Socrata's office](http://www.socrata.com/blog/my-visit-to-socrata-and-data-analysis-about-data-analysis/) on Friday,
I learned of the [`/data.json`](https://data.oregon.gov/data.json) endpoint.
It contains an entry for each [dataset](/!/socrata-genealogies/#term-dataset),
uploaded by the data publisher; it doesn't contain all of the other
views that are based on these source datasets.
And it has [this format](http://project-open-data.github.io/schema/).

## How many datasets?
Socrata portals have [50,000 different views](/!/socrata-users/#the-user-data-format), but only
8922 are original datasets.

The `/data.json` files include federated datasets, so some of these
datasets are duplicated. I did not remove duplicates, so I'm working
with 15699 datasets, with a median of
96 datasets per portal.


```r
p.portal.counts
```

```
## Warning: font family 'Datasets per portal, based on the data.json file'
## not found in PostScript font database Warning: font family 'Datasets per
## portal, based on the data.json file' not found in PostScript font database
## Warning: font family 'Datasets per portal, based on the data.json file'
## not found in PostScript font database Warning: font family 'Datasets per
## portal, based on the data.json file' not found in PostScript font database
## Warning: font family 'Datasets per portal, based on the data.json file'
## not found in PostScript font database Warning: font family 'Datasets per
## portal, based on the data.json file' not found in PostScript font database
## Warning: font family 'Datasets per portal, based on the data.json file'
## not found in PostScript font database Warning: font family 'Datasets per
## portal, based on the data.json file' not found in PostScript font database
## Warning: font family 'Datasets per portal, based on the data.json file'
## not found in PostScript font database Warning: font family 'Datasets per
## portal, based on the data.json file' not found in PostScript font database
```

![plot of chunk portal-counts](figure/portal-counts.png) 


### No derived datasets
This is much lower than my [earlier figure](/!/socrata-summary)
because the present figure does not include [derived views](/!/socrata-genealogies#soda-queries-filtered-views-charts-maps) (map, charts, &c.).

Some time, I'll compare the within-portal counts of original datasets
and derived datasets. But not right now.

### Federated data
It still includes [federated data](/!/socrata-genealogies/#term-federation) (duplicates),
however, and this file doesn't make it easy to determine which direction
the federation is in. Some day, I'll look more at federation, probably by 
reading the federation information from home pages of the portals
or by following the links in the `/data.json` file.

### Cutoff at 1000?
I find it highly suspicious the following nine portals have exactly 1000
datasets and no portals have more than 1000.


```r
paste(names(sort(table(datasets$portal), decreasing = T)[1:9]), collapse = "\n")
```

```
## [1] "bronx.lehman.cuny.edu\ndata.cityofnewyork.us\ndata.hawaii.gov\ndata.illinois.gov\ndata.ny.gov\ndata.ok.gov\ndata.oregon.gov\nexplore.data.gov\nwww.metrochicagodata.org"
```


Half of these portals federate `explore.data.gov`, which has quite a few datasets, and the JSON
files seem to just include some of the `explore.data.gov` data. I think these
files have only the first 1000 datasets, and I haven't figured out how to look
at the next pages, so I'll focus the present analysis on portals with fewer
than 1000 datasets.

## My curiousity about file formats
I've recently become curious about what formats the datasets come from. When
tabular data get loaded into a Socrata data portal, they get converted to a
tabular representation within the portal software. From that, they get converted
to a range of different tabular formats.

The Socrata data portal doesn't explicitly store the source format because of
how the import process works. Most of the data [probably come from Excel](scraperwiki),
and the data that aren't from Excel typically come from inside of a government
network where policies would make it inconvenient to expose the database to the
world. Because of this, Socrata doesn't query database servers. Instead, data
publishers write middlemen that act as both database clients and Socrata clients.
They query the database and then make [web requests](api)
to the Socrata portal.

## `/data.json` contains file format information
The `/data.json` endpoint contains a file format field per the Project Open Data
schema. This refers to the format of the data as served from the Socrata portal,
not the format it was stored in before it got to the Socrata portal. But this
still tells us something about the source file formats.

People sometimes upload things that Socrata doesn't interpret as tables. PDFs are
a major example. Other times, people upload or link to
files that could be tables but don't specify that they are tables; those are called
"external links". Read more on dataset types [here](/!/open-by-default#types-of-visualizations-on-socrata-portals).

Data formats are represented in two fields, `format` and `distribution`. `distribution`{#distribution}
seems to contain all of the different available formats. If the data are imported as
tabular data, it contains CSV, JSON, XML, &c., all served from the Socrata site.
And if the data are external links, the file will contain a few external links, still
specifying the file types. The `format` field contains one of the formats that are
specified in the `distribution` field. I think it's just the first of the formats.
For the present analysis, I'm using the `format` field.

Recall that the present dataset of datasets counts federated datasets multiple times.
The following plot shows the file types of the deduplicated dataset dataset, across
all portals.

(image of counts across portal)

And here are some of the main types by portal (counting federated datasets in all of their portals).


```r
p.all
```

![plot of chunk all-formats](figure/all-formats.png) 


`csv` mostly refers
to data that Socrata represents as a table; this is the sort of data that Socrata
can convert to a range of different tabular data formats.
It is also my [preferred file format](http://csvsoundsystem.com).

Everything that is not CSV appears to be an external link.

## CSV
Most datasets are CSV (8143 of 15699).
I was curious as to how this varies by portal and over time, and the following image
addresses that.


```r
p.csv.cum.facet
```

```
## Warning: Removed 4 rows containing missing values (geom_path). Warning:
## Removed 4 rows containing missing values (geom_path). Warning: Removed 10
## rows containing missing values (geom_path). Warning: Removed 4 rows
## containing missing values (geom_path). Warning: Removed 4 rows containing
## missing values (geom_path). Warning: Removed 193 rows containing missing
## values (geom_path). Warning: font family 'Dataset formats by portal over
## time' not found in PostScript font database Warning: font family 'Dataset
## formats by portal over time' not found in PostScript font database
## Warning: font family 'Dataset formats by portal over time' not found in
## PostScript font database Warning: font family 'Dataset formats by portal
## over time' not found in PostScript font database Warning: font family
## 'Dataset formats by portal over time' not found in PostScript font
## database Warning: font family 'Dataset formats by portal over time' not
## found in PostScript font database Warning: font family 'Dataset formats by
## portal over time' not found in PostScript font database Warning: font
## family 'Dataset formats by portal over time' not found in PostScript font
## database Warning: font family 'Dataset formats by portal over time' not
## found in PostScript font database Warning: font family 'Dataset formats by
## portal over time' not found in PostScript font database Warning: font
## family 'Dataset formats by portal over time' not found in PostScript font
## database Warning: font family 'Dataset formats by portal over time' not
## found in PostScript font database Warning: font family 'Dataset formats by
## portal over time' not found in PostScript font database
```

![plot of chunk csv-cum-facet](figure/csv-cum-facet.png) 


The image above contains one plot per data portal. The x-axis of each plot is the date,
the y-axis is the proportion[^proportion] of datasets that are tabular (CSV), and the
width of the line is the number of datasets on the portal.
For example, if there were 100 datasets on a portal in June 2011 and 80 were CSV, the
line would be near the top of the graph and quite skinny at June 2011.

We can thus see how many datasets each portal has and what the different formats are.

## Some interesting portals
Some portals have only CSV data (like `data.medicare.gov`), but most contain
other data. I am curious both as to what other data formats they have and what
prompted the shifts in dataset format.

Missouri mostly has PDFs.


```r
p.data.mo.gov
```

![plot of chunk mo](figure/mo.png) 


Also interesting about Missouri is that it federates [Kansas City](https://data.kcmo.org/),
which didn't appear in my list of portals.

I know I said I'd focus on portals with fewer than 1000 datasets, but Lehman College is
interesting because it has lots of zipped files.


```r
p.bronx.lehman.cuny.edu
```

![plot of chunk lehman](figure/lehman.png) 


San Francisco has a lot of CSVs, a lot of externally linked zip files,
and a lot of externally linked files of unknown format.


```r
p.data.sfgov.org
```

![plot of chunk sf](figure/sf.png) 


## Determination of external link file formats
It looks like the format of external links is determined by the file name.
For example, Edmonton's
[Road and Traffic Updates](https://data.edmonton.ca/Transportation/Road-and-Traffic-Updates/5ggc-prfp?)
are marked as `application/rss+xml` because the external link,
[http://www.trumba.com/calendars/construction-and-special-events-road-closures.rss](http://www.trumba.com/calendars/construction-and-special-events-road-closures.rss),
ends in `.rss`.

In contrast, the [Maryland Land Use/ Land Cover: 1973, 2002, 2010](https://data.maryland.gov/d/ywbg-ptfh)
dataset is marked as having the format `application/octet-stream` because the
external link, [http://planning.maryland.gov/OurWork/landUseDownload.shtml](http://planning.maryland.gov/OurWork/landUseDownload.shtml),
ends in `.shtml`.

<!-- sqldf("select title, 'https://' || portal || '/d/' || identifier AS portalURL, accessURL from catalog where identifier = 'ywbg-ptfh'", dbname = '/tmp/catalog.db') -->

## Dates of significant changes
A few portals have only CSV data since the beginning, but most have had other formats.
Looking at the plots, we can see dates where there was a sudden change in the proportion
of datasets that were CSV.

### Sudden changes at the beginning
When the first dataset gets uploaded, the proportion of datasets that are CSV is either
zero or one. Thus, the line for all of these datasets starts either at zero or one.
Most datasets sharply change after that; `data.austintexas.gov` and `data.mo.gov` are
examples.

Others stay at this level for quite a while because no datasets were uploaded for a
while. `data.raleighnc.gov` is an example of this. Here are its first ten datasets.


```r
sqldf("select title, created, format, 'https://' || portal || '/d/' || identifier as url from catalog where portal like '%ralei%' order by created limit 10;", 
    dbname = "/tmp/catalog.db")
```

```
##                                  title    created
## 1                 Building Permit Data 2012-03-14
## 2                 Building Permit Data 2012-03-14
## 3           City of Raleigh Quickfacts 2013-02-19
## 4                      Raleigh Parking 2013-02-28
## 5      Raleigh Electric Utilities 2011 2013-02-28
## 6          Raleigh Communications 2011 2013-02-28
## 7               Raleigh Buildings 2011 2013-02-28
## 8             Raleigh Parks and Trails 2013-02-28
## 9                  Raleigh Trail Areas 2013-02-28
## 10 Family Income In The Past 12 Months 2013-02-28
##                             format                                    url
## 1                         text/csv https://data.raleighnc.gov/d/s68n-gffw
## 2                         text/csv https://data.raleighnc.gov/d/pep8-sb8v
## 3                         text/csv https://data.raleighnc.gov/d/fuys-kh3c
## 4  application/zip; charset=binary https://data.raleighnc.gov/d/g3uq-k7zm
## 5  application/zip; charset=binary https://data.raleighnc.gov/d/jrpi-4amz
## 6  application/zip; charset=binary https://data.raleighnc.gov/d/fcx2-d4t3
## 7  application/zip; charset=binary https://data.raleighnc.gov/d/46tk-23jt
## 8  application/zip; charset=binary https://data.raleighnc.gov/d/3fmi-wyx6
## 9  application/zip; charset=binary https://data.raleighnc.gov/d/pwv5-a5ca
## 10                        text/csv https://data.raleighnc.gov/d/apbx-xr7f
```


The first two datasets were uploaded in the middle of March 2012 and were CSV format,
making the datasets 100% CSV. The next was uploaded in the middle of February 2013 and
was also CSV, so the proportion was still 100% CSV. At the end of the month, six
zip files were uploaded, reducing the proportion to 33% CSV.

### Sudden changes after the beginning
`data.sfgov.org` had a sudden change in the proportion of datasets that were CSV, but
it was after a long while, so a lot of related datasets might have been uploaded all
at once. Let's look at when datasets were uploaded.


```r
p.sf.changes
```

```
## Warning: font family 'Formats of newly open San Francisco datasets over
## time' not found in PostScript font database Warning: font family 'Formats
## of newly open San Francisco datasets over time' not found in PostScript
## font database Warning: font family 'Formats of newly open San Francisco
## datasets over time' not found in PostScript font database Warning: font
## family 'Formats of newly open San Francisco datasets over time' not found
## in PostScript font database Warning: font family 'Formats of newly open
## San Francisco datasets over time' not found in PostScript font database
## Warning: font family 'Formats of newly open San Francisco datasets over
## time' not found in PostScript font database Warning: font family 'Formats
## of newly open San Francisco datasets over time' not found in PostScript
## font database Warning: font family 'Formats of newly open San Francisco
## datasets over time' not found in PostScript font database Warning: font
## family 'Formats of newly open San Francisco datasets over time' not found
## in PostScript font database Warning: font family 'Formats of newly open
## San Francisco datasets over time' not found in PostScript font database
## Warning: font family 'Formats of newly open San Francisco datasets over
## time' not found in PostScript font database Warning: font family 'Formats
## of newly open San Francisco datasets over time' not found in PostScript
## font database Warning: font family 'Formats of newly open San Francisco
## datasets over time' not found in PostScript font database Warning: font
## family 'Formats of newly open San Francisco datasets over time' not found
## in PostScript font database Warning: font family 'Formats of newly open
## San Francisco datasets over time' not found in PostScript font database
```

![plot of chunk sf-changes](figure/sf-changes.png) 


This has the quite similar information to the earlier plots, but it's a bit more precise.
San Francisco added lots of datasets in January 2012, November 2012, and December 2012, and proportionately
few of these datasets were CSV. What were they?

Here are ten of the January datasets.


```
                                                                   title    created          format                                url
             Arterial Streets of San Francisco (Zipped Shapefile Format) 2012-01-01 application/zip https://data.sfgov.org/d/2ivi-ywmk
                Orthophoto 1ft resolution (1993) - (Zipped MrSID Format) 2012-01-01 application/zip https://data.sfgov.org/d/2xc9-is4u
                                     City Lots (Zipped Shapefile Format) 2012-01-01 application/zip https://data.sfgov.org/d/3vyz-qy9p
            Census 2000 Block Group (No Water) (Zipped Shapefile Format) 2012-01-01 application/zip https://data.sfgov.org/d/4aaa-ycik
           Orthophoto 1ft (1993) - Treasure Island (Zipped MrSID Format) 2012-01-01 application/zip https://data.sfgov.org/d/4drs-6tjy
                                                            SFPD Sectors 2012-01-01 application/zip https://data.sfgov.org/d/4mzs-yjt7
                    SFPD Crime Reporting Plots (Zipped Shapefile Format) 2012-01-01 application/zip https://data.sfgov.org/d/5aii-qc4e
 Neighborhood Marketplace Initiative Corridors (Zipped Shapefile Format) 2012-01-01 application/zip https://data.sfgov.org/d/5fxg-wene
      San Francisco Basemap Street Centerlines (Zipped Shapefile Format) 2012-01-01 application/zip https://data.sfgov.org/d/5rn4-fswj
                 The Presidio of San Francisco (Zipped Shapefile Format) 2012-01-01 application/zip https://data.sfgov.org/d/5sny-6aph
```

It looks like January is mostly externally linked, zipped shapefiles. Most of the
datasets say "shapefile" in their `title`, `description` or [`distribution`](#distribution] fields.


```r
p.sf.shapefiles
```

```
## Warning: font family 'Formats of newly open San Francisco datasets over
## time' not found in PostScript font database Warning: font family 'Formats
## of newly open San Francisco datasets over time' not found in PostScript
## font database Warning: font family 'Formats of newly open San Francisco
## datasets over time' not found in PostScript font database Warning: font
## family 'Formats of newly open San Francisco datasets over time' not found
## in PostScript font database Warning: font family 'Formats of newly open
## San Francisco datasets over time' not found in PostScript font database
## Warning: font family 'Formats of newly open San Francisco datasets over
## time' not found in PostScript font database Warning: font family 'Formats
## of newly open San Francisco datasets over time' not found in PostScript
## font database Warning: font family 'Formats of newly open San Francisco
## datasets over time' not found in PostScript font database Warning: font
## family 'Formats of newly open San Francisco datasets over time' not found
## in PostScript font database Warning: font family 'Formats of newly open
## San Francisco datasets over time' not found in PostScript font database
## Warning: font family 'Formats of newly open San Francisco datasets over
## time' not found in PostScript font database Warning: font family 'Formats
## of newly open San Francisco datasets over time' not found in PostScript
## font database Warning: font family 'Formats of newly open San Francisco
## datasets over time' not found in PostScript font database Warning: font
## family 'Formats of newly open San Francisco datasets over time' not found
## in PostScript font database Warning: font family 'Formats of newly open
## San Francisco datasets over time' not found in PostScript font database
```

![plot of chunk sf-shapefile](figure/sf-shapefile.png) 


And a lot of the rest of the January files look like zipped shapefiles, even though the
titles and descriptions don't say so.

So San Francisco suddenly uploaded a bunch of shapefiles in January and November/December.

### Plateaus of dataset counts
Some of the plots make it look like lots of datasets were suddenly uploaded one time
and no datasets were uploaded again. This is mainly for the
[portals with more than 1000 datasets](#cutoff-at-1000),
so I think this is because we're seeing only the first 1000 datasets.

## CSV, pdf, zip and octet-stream
Based on the examples above, it seems like a lot of datasets are PDF, zip or unknown
external links. I made the following series of plots to check it. It is just like the
[similar image above](#csv) except for the y-axes; instead of representing the
proportion of datasets that are CSV, each y-axis represents the proportion of datasets
that are CSV, PDF, zip or unknown external links.


```r
p.csv.pdf.zip.octet.cum.facet
```

```
## Warning: Removed 4 rows containing missing values (geom_path). Warning:
## Removed 4 rows containing missing values (geom_path). Warning: Removed 10
## rows containing missing values (geom_path). Warning: Removed 4 rows
## containing missing values (geom_path). Warning: Removed 4 rows containing
## missing values (geom_path). Warning: Removed 193 rows containing missing
## values (geom_path). Warning: font family 'Dataset formats by portal over
## time' not found in PostScript font database Warning: font family 'Dataset
## formats by portal over time' not found in PostScript font database
## Warning: font family 'Dataset formats by portal over time' not found in
## PostScript font database Warning: font family 'Dataset formats by portal
## over time' not found in PostScript font database Warning: font family
## 'Dataset formats by portal over time' not found in PostScript font
## database Warning: font family 'Dataset formats by portal over time' not
## found in PostScript font database Warning: font family 'Dataset formats by
## portal over time' not found in PostScript font database Warning: font
## family 'Dataset formats by portal over time' not found in PostScript font
## database Warning: font family 'Dataset formats by portal over time' not
## found in PostScript font database Warning: font family 'Dataset formats by
## portal over time' not found in PostScript font database Warning: font
## family 'Dataset formats by portal over time' not found in PostScript font
## database Warning: font family 'Dataset formats by portal over time' not
## found in PostScript font database Warning: font family 'Dataset formats by
## portal over time' not found in PostScript font database
```

![plot of chunk csv-pdf-zip-octet-cum-facet](figure/csv-pdf-zip-octet-cum-facet.png) 


Most of the curves are pretty straight and stay near 1, meaning that the proportion doesn't
change much and that the proportion is quite high. Thus, it looks like most datasets are
either CSV, pdf, zip or external links of unknown format.

### Conclusions

### Formats
I was mainly wondering about the source formats of the data. It turns out that most datasets
are tables. Aside from tables, there are lots of externally linked files, mostly PDFs and zip archives.

### Shapefiles
I've been thinking recently about how to infer the organizational structure of a municipality
based on the open data that they release, and the finding with the San Francisco shapefiles
alludes to this. It might be that one department within the San Francisco government manages
and uses most of the geospatial data and that the open data team happened to work with them
in January, November and December of 2012.

## Future study
This got me thinking about other ways of studying file formats.

### The attribution field
Socrata's SODA 1 API [contains]() an `attribution` field, which references the URL from
which the dataset was taken. (I presume that this is entered manually.) This would be one
way of figuring out the source format, or at least some related information about the source.

### Externally linked CSVs
Not all of the CSV-formatted datasets necessarily come from Socrata; some might be links
to external CSV files. There is enough information in `/data.json` to determine which of
these categories a CSV dataset falls into.

### Determining the formats of external links
It looks to me like the format type of external links is determined based on the file
extension of the URL; `octet-stream` datasets seem to correspond to URLs without file
extensions or with file extensions like `aspx` that don't clearly correspond to a
particular file types. One could determine the formats of these datasets by
downloading the files.

## Footnotes

[^proportion]: It's actually a tad bit more complicated than that. These dates are the
    creation dates of the datasets that are available today; I do not know about datasets
    that were historically on the portal and have since been deleted.
