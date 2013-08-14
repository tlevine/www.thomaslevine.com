---
title: How to use Socrata's site analytics API
description: Unofficial documentation of an unofficial Socrata API
created_at: 2013-08-14
kind: article
tweet_text: I really like writing documentation. http://thomaslevine.com/!/socrata-analytics-api
tweet_link1:
twitter_image: 
tags: ['socrata']
---

When a data publisher opens its site analytics page, it also opens a
web API endpoint for the site analytics. Here's how that endpoint works.

The base endpoint is at `/api/site_metrics.json`.

    GET /api/site_metrics.json

You access this endpoint by making a typical GET request; you don't need
any special cookie, header, or API key. Two query arguments are required

* `start`
* `end`

These are both dates, represented as milliseconds since January 1, 1970.
(It's something like "<script>document.write((new Date()).getTime())</script><noscript>1376439688459</noscript>".)
These arguments define the range within which the analytics will be aggregated.

This endpoint exposes three methods.

* Site-wide statistics (no method)
* Site-wide statistics by time interval (`series`)
* Most popular (`top`)

## Site-wide statistics (no method)

    GET /api/site_metrics.json

If you specify no method argument, you'll get some statistics
about the entire portal, such as the total number of datasets
created since the beginning of time (`datasets-created-total`),
the number of datasets created within the date range specified
by `start` and `end` (`datasets-created`), and the number of
rows of data that were accessed via the API within the date
range (`rows-accessed-api`).

    curl https://data.oregon.gov/api/site_metrics.json?start=1375315200000&end=1376438399999
    {
      "datasets-created-total" : 5623,
      "datasets-deleted-total" : 4801,
      "datasets-created-blobby-total" : 113,
      "datasets-deleted-blobby-total" : 4,
      "datasets-created-href-total" : 13,
      "datasets-deleted-href-total" : 10,
      "rows-created-total" : 40757082,
      "rows-deleted-total" : 25546425,
      "page-views-total" : 2599228,
      "embeds-total" : 489504,
      "embeds" : 12094,
      "maps-created" : 99,
      "bytes-out" : 112213178897,
      "page-views" : 74530,
      "rows-loaded-api" : 20272,
      "rows-accessed-website" : 59636,
      "rows-loaded-download" : 8771634,
      "rows-accessed-api" : 611,
      "rows-loaded-website" : 778954,
      "rows-deleted" : 628998,
      "rows-accessed-rss" : 610,
      "maps-deleted" : 99,
      "filters-created" : 4995,
      "rows-loaded-widget" : 1347648,
      "rows-accessed-widget" : 67687,
      "geocoding-requests" : 10009,
      "users-created" : 645,
      "datasets-created" : 147,
      "js-page-view" : 68095,
      "datasets-deleted" : 122,
      "rows-accessed-download" : 379,
      "view-loaded" : 16599,
      "app-token-created" : 1,
      "charts-deleted" : 17,
      "shares" : 1,
      "rows-loaded-rss" : 26698,
      "bytes-in" : 658003507,
      "filters-deleted" : 4985,
      "charts-created" : 16,
      "rows-created" : 1040389,
      "comments" : 2
    }

## Site-wide statistics by time interval (`series`)

    GET /api/site_metrics.json?method=series

If you want to get site-wide statistics by day, you could
use no method (above) and vary the start and end dates.
The series method lets you do something equivalent in one
HTTP request.

This method requires an additional parameter, `slice`.
Valid values include

* `DAILY`
* `WEEKLY`
* `MONTHLY`
* `YEARLY`

The result is a list of associative arrays, each one
corresponding to a time interval and containing the same
metrics that we would see with no method.

    curl 'https://data.oregon.gov/api/site_metrics.json?start=1375315200000&end=1376438399999&method=series&slice=WEEKLY'
    [ {
      "__start__" : 1374969600000,
      "metrics" : {
        ...
      },
      "__end__" : 1375574399999
    }, {
      "__start__" : 1375574400000,
      "metrics" : {
        ...
      },
      "__end__" : 1376179199999
    }, {
      ...
    } ]

## Most popular (`top`)

    GET /api/site_metrics.json?method=top

Return the most common entities of a particular type.
You specify the entity type with the required argument `top`;
it can be any of the following.

* `DATASETS`
* `REFERRERS`
* `SEARCHES`
* `EMBEDS`

The output is always an associative array, but the schema
depends on the type of entity.

#### Top Datasets

    GET /api/site_metrics.json?method=top&top=DATASETS

This returns a mapping from 4x4 ids to some sort of count.
I presume that it's a view count, but it might be something
else, like a download count.

#### Top Referrers

    GET /api/site_metrics.json?method=top&top=REFERRERS

This also returns counts, presumably view counts. The root associative array
maps an origin (like `http://thomaslevine.com`) to an associative
array, and that child associative array maps the rest of the url
(like `<%= @item.identifier %>?foo=bar`) to a count.

    curl 'https://data.oregon.gov/api/site_metrics.json?start=1375315200000&end=1376438399999&method=top&top=REFERRERS&_=1376451966200'
    {
      "https://govspace.oregon.gov" : {
        "/community/forall/testdrive/jasonstest?view=overview" : 2,
        "/index.jspa" : 1,
        "/community/agencies/das/geo/gpl" : 1,
        "/index.jspa?showhomepage=true" : 1,
        "/community/forall/testdrive/jasonstest" : 18
      },
      ...,
      "http://www.state.or.us" : {
        "/DAS/Pages/mobile_bldgclose.aspx" : 2,
        "/Pages/do_business_in_oregon.aspx" : 1,
        "/Pages/sitemap.aspx" : 1,
        "/docs/pop_box/news_story_template.doc" : 1,
        "/ODA/FSD/Pages/recalls.aspx" : 1,
        "/DAS/pages/bldg_close/index.aspx" : 1
      }
    }

#### Top Searches

    GET /api/site_metrics.json?method=top&top=SEARCHES

Searches are separated into dataset searches and user searches.
Within each, a mapping from search terms to counts is returned.

    curl 'https://data.oregon.gov/api/site_metrics.json?start=1375315200000&end=1376438399999&method=top&top=SEARCHES&_=1376451966200'
    {
      "top-user-searches" : {
        "Tiffany.Koss@state.or.us" : 1
      },
      "top-dataset-searches" : {
        "Oregon Public Meetings" : 2,
        "copy of 501 c3" : 1,
        ...
      }
    }

#### Top Embeds

    GET /api/site_metrics.json?method=top&top=EMBEDS

This returns the same format as the top referrers; the root associative array
maps an origin (like `http://thomaslevine.com`) to an associative
array, and that child associative array maps the rest of the url
(like `<%= @item.identifier %>?foo=bar`) to a count.
