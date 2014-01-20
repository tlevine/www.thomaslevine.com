---
tags: ['open-data']
---
With all of our wonderful government open data efforts, we now have more
government data floating around than anyone could possibly follow. It's getting
to the point that we need new ways of finding data.

## The difficulties in searching open data
Through [assorted studies of open data](/open-data), I [identified](/!/openprism)
two difficulties in searching open datasets.

1. **Naive search method**.
    Open data portals approach searching data as if data were normal prose;
    you enter text and search datasets as if they were normal documents.
2. **Siloed search engines**.
    Governments release data to their own websites (data portals), often
    containing their own website-specific search engines. This is a very
    reasonable approach for releasing the data, but it means that people need
    to go to a bunch of different sites when they're looking for data.

## Existing prototypes of alternative search methods
I've begun prototyping alternatives to the two above situations.
[AppGen](http://www.appgen.me/) is an example of a different search method;
it searches for datasets with the same variables as each other,
and the results are automatically generated app prototypes.

[OpenPrism](http://openprism.thomaslevine.com) is an example of a single
search engine for many websites; it sends a search to about a hundred different
open data catalogs and returns the results to you in the same page.

My exploration of measures of data quality have involved ad-hoc searches
based on some less obvious things, such as

* [Licensing](/!/open-data-licensing)
* [The person who created a chart](/!/socrata-users)
* Data [formats](/!/socrata-formats) and [displays](/!/socrata-calendars)
* How [up-to-date](/!/data-updatedness) data are

## My proposal: Search spreadsheets with spreadsheets
I propose to develop and package these various prototypes and ideas into a
search tool for datasets. I call this tool "superprism".

### Guiding principle
The design of this tool will follow this principle:

> When we are searching for texts, we enter text into a search engine and
> recieve a list of texts. When we are searching for spreadsheets, we should
> enter a spreadsheet into the search engine and receive a list of spreadsheets.

### Mock-up of the interface
The tool will be implemented as a command-line program, and here's what the
interface will look like.

The input to the search is a CSV file.

    $ superprism lobbyists.csv

The output is a list of URLs.

    http://catalog.data.gov/dataset/lobbying-disclosure-reports
    http://catalog.data.gov/dataset/us-international-trade-in-goods-and-services

All of the fancy dataset search methods (schema, users, &c.) are hidden from
the user; these methods are used to select the output datasets, but the user
doesn't need to know what they are.

Most users won't need to see exactly how the datasets are chosen, but there is
a flag for displaying information about how the result datasets were chosen.
This flag is called `--debug`. I have yet to decide the exact format of the
output, and it will mainly be based on what is helpful for me while developing
the tool.

You can also specify which type of URL should be returned; the output can
be either URLs to data catalog web pages or URLs directly to spreadsheet files.
The former is the default; to get the latter, pass the `-u` flag.

    $ superprism -u lobbyists.csv
    https://explore.data.gov/api/views/aqdm-v85k/rows.csv?accessType=DOWNLOAD
    http://www.census.gov/foreign-trade/statistics/historical/exhibit_history.xls

The search tool will be released as free software, and I will build the
underlying search libraries with the intent that other people may easily use
them in their own programs, without calling superprism from the command line.

### Possible future work
At the moment, I want to focus on an initial dataset search tool, and the
program mocked-up above is all that I propose for the grant. Once that is
working, however, I plan on expanding this project in the following areas.

* Make a website where one can search by uploading a dataset
* Collect data about what people are searching for, in order to improve the search
* 
