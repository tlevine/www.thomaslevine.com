---
title: Open Data 500 Data Package
tags: ['open-data']
kind: article
tweet_text: I made a data package of the Open Data 500 data! http://thomaslevine.com/!/open-data-500-data-package
created_at: 2014-02-03
other_source: https://github.com/tlevine/open-data-500
---
<style>tr { text-align: left; }</style>
I recently took a stab at documenting the
[Open Data 500](http://www.opendata500.com) data format,
but my [work thus far](/!/open-data-500-data-dictionary)
leaves much to be desired. I looked at it a bit more over the weekend,
and I think I have a pretty good idea about it now.
Collecting all of my findings about the data format,
I packaged the data in a way that should be a bit easier to work with.

## More stuff I figured out about the Open Data 500 data
It was pretty simple to convert the data formats once I figured them out, but
that step took me a while. The main issue was reconciling the conflicting data
that are reported on the Open Data 500 site.

### The conflicting data
The Open Data 500 Team released four data files in its "Downloads" section,
and it implicitly released two HTML data files elsewhere on its site.
Some of these seem to present the same data in different formats, but when
I looked closely, I found that they actually contained different data, and
I wasn't really sure which data to use. Do I combine the different files?
If a company is in one file but not another, is it part of the study?
Is one of the files more up-to-date?

I never really figured out what to do about all this.

### All questionnaire responses will be included
Until I did last week's research into the Open Data 500 methodology,
I had the impression that the Open Data 500 involved some assessment of
companies beyond what they say in the questionnaire. Now, I think that
the study is just an ordinary questionnaire survey and that they want as
many responses as they can get. If this is the case, the Open Data 500 Team
would probably want to report any company that completed the questionnaire.

In assembling my Open Data 500 dataset, I thus think it's safe to include
any company that was included in any of the official Open Data 500 dataset
releases.

### Only the HTML version gets updated
The CSV and JSON versions of the larger Open Data 500 list include
51 companies each, and the HTML version of the larger Open Data 500 list
includes 100 companies. I wasn't really sure what to make of this, but now
I have a guess.

I scraped the data from the various HTML pages on the site, and I noticed
that there is indeed quite complete data for all of these 100 companies.
I thus think that these companies responded to the questionnaire.

Also, I noticed that the "download" section isn't being updated.
I downloaded the JSON and CSV files in this section when they
were first released in December, and they files on the website
haven't changed since.

I haven't been downloading the HTML files regularly, but it looks like the
site is being updated.
I found [this code repository](https://github.com/GovLab/OpenData500),
which seems to be the code for the site. In that repository as well,
the "download" files have never been updated. But recent development on
the site has been happening, so I find it conceivable that the data behind
the HTML files is being updated. The data are being stored in Mongo rather
than as files in the repository, so I can't say for sure that the data are
being updated, but it seems likely.

Anyway, my broader conclusion is that the HTML pages **are** being updated and
the "download" section **is not** being updated.

## Packaging the data
I produced two different CSV file to describe the same data, and these file
should make a lot more sense than the official CSV files. One of the files,
`companies.csv`, has a row for every company and is normalized. The other,
`datasets.csv`, has a row for every dataset, with different rows duplicating
the data about the companies; it is denormalized and contains no data about
the companies that lack datasets.

### Upstream sources
The data come from the "full list" section of the Open Data 500 website.
I took most of the data for any particular company from its page on the website;
for example, most of the data for Appallicious came from
[`http://www.opendata500.com/Appallicious/`](http://www.opendata500.com/Appallicious/).
I also took data from the [full list page](http://www.opendata500.com/candidates).
If the same field was present on both pages (for example, the company name),
I used the value on the company's particular page rather than the value on the
main "full list" page.

### Schema of the companies file
This version of the dataset is a single CSV file,
where each row is a company and most columns
are answers to questionnaire questions. (I think! Remember that I'm guessing at
all of this.) Here are the columns that I think to come from the first page of
the questionnaire.

Column name             | Question from the questionnaire
----------------------- | -------------------------------
`company.name`          | Name of your company
`company.url            | Company URL
`location`              | "In which city is this company located?", and "State" (two questions)
`year.founded`          | Founding Year
`fte`                   | Number of FTE's
`type.of.company`       | Type of Company
`category`              | What category best describes your company?
`function`              | Which best describes the function of your company?
`source.of.revenue`     | Which of the following are significant sources of revenue for your company?
`description`           | Please give us a short public statement describing your company’s mission and work. You can take this material from your website or other publications if you choose to.
`description.short`     | As a summary, please provide a one sentence description of your company.
`social.impact`         | Besides revenue generation, how do you measure the impact your company has for society and the public good? 
`financial.info`        | Please include any financial or operational information that will help us understand your company. We are interested in specific information like past and projected annual revenues, total outside investment dollars to date, and significant investors or partners. 

The `dataset` field contains a CSV file of the datasets listed on subsequent
pages of the questionnaire. This file has a row for each dataset, and it has
columns for the URL (`dataset.url`) and name (`dataset.name`) of the dataset.

The three remaining fields are not from the questionnaire

Column name             | Meaning
----------------------- | -------------------------------
`company.href`          | Location of the company page within the Open Data 500 website
`data.collection`       | Which method was used for data collection? ("questionnaire" or "undocumented")

And I suspect that the `sectors(s)` column comes from the questionnaire,
but I haven't figured out what question it's from.

### Schema of the datasets file
In the datasets file, each row is a dataset used by a company.
The datasets file contains all of the columns that are in the companies
file except for the `datasets` column, and it adds two more columns:
`dataset.url` for the link to the dataset, and `dataset.name` for the
name of the dataset. These are the two columns inside the nested CSV
files in the companies file.

Because each row is about a dataset, this file contains no data about
companies with zero datasets.

### Questionnaire versus undocumented data collection
I separate the data collection methods for the Open Data 500 into two methods.

1. Convenience-sampled questionnaire responses
    ("[comprehensive call](#comprehensive-call-sampling-strategy)")
2. Undocumented data collection

Data from both sorts of data collection are included in the companies dataset,
and the `data.collection` field indicates which method was used.
You'll also notice that much of the data are missing for rows that were
collected with the undocumented method.

The datasets file, on the other hand, contains no data about companies that
were collected through the undocumented method; in the undocumented data
collection method, no data were produced about datasets used by the companies.

## Using the data
You can download the files here.

* [`companies.csv`](https://raw.github.com/tlevine/open-data-500/master/companies.csv).
* [`datasets.csv`](https://raw.github.com/tlevine/open-data-500/master/datasets.csv).

I've also packaged the it as a
[Data Package](http://data.okfn.org/standards/data-package),
check out the git repository 
(`git://github.com/tlevine/open-data-500.git`)
so you can use any of
[these fancy tools](http://data.okfn.org/tools)
to load the `datapackage.json` file.

Do tell me if you have any trouble with the files.
And I'd love to hear about
anything that you find with the data!
