---
title: Analyze all the datasets
created_at: 2013-07-07
tags: ['socrata']
kind: article
twitter_image: figure/datasets_size_over_time2.png
facebook_image: figure/big_portals_downloads.png
tweet_text: This one time, I Socrata's 80,000 datasets and analyzed them all.
description: This one time, I Socrata's 80,000 datasets and analyzed them all.
facebook_text: Guess how many datasets are in all of the Socrata portals.
facebook_title: And which ones are the most popular?
facebook_description: This one time, I all of Socrata's datasets and analyzed them.
---
<% root = 'https://github.com/tlevine/socrata-download/tree/master/' %>

I downloaded the metadata files for all of the datasets across all of the Socrata data portals.
Here I explain how I did that and present an summary of the sorts of data that we find in the portals.

## Acquiring the data
I acquired the data the same way any ordinary person could have,
except that I had substantial assistance from robot scripts.
You can see the general workflow below.

[![A flow chart diagraming how the program works](<%= @item.identifier %>architecture.jpg)](<%= @item.identifier %>architecture.jpg)

### Listing the portals
First, I get a list of Socrata portals from the Socrata [status page](http://status.socrata.com).
This page makes loads the portal names and descriptions from [this JSON file](http://status.socrata.com/sites).
I download parse that file in [`portals.py`](<%= root %>portals.py){:.code}. Most of the portal URLs
are in the `description` fields, but this isn't always the case, so I used some heuristics to
tidy that up.

    #
    # From portals.py
    # 
    if is_domain(portal['description']):
        domain = portal['description']
    elif is_domain(portal['name']):
        domain = portal['name']
    elif portal['name'] == 'Socrata':
        continue
    else:
        warnings.warn('Could not find a valid domain for %s, skipping' % portal['name'])
        continue

    domain = domain.replace('https://', '').replace('http://', '')

It turns out that the [opendata.socrata.com](https://opendata.socrata.com) portal isn't
 listed there, so I add that one manually.

Next, I create a directory for each data portal and start downloading and parsing data
from each individual portal. Most of the portal-specific stuff is enclosed in the
[`run_one.sh`](<%= root %>run_one.sh){:.code} script.

### Search for datasets
As far as I could tell, Socrata doesn't have a formal API for searching datasets, so I
just searched with the ordinary web interface. In [`search.sh`](<%= root %>search.sh){:.code},
I make a search for all datasets of all kinds, and then I keep going to the next page
as long as there are results. I save all of the results in a `searches` directory inside
of the portal data folder. For example, search results for `data.colorado.gov` go in
`data/data.colorado.gov/searches`.

### Find dataset identifiers
The search result pages are big HTML blobs. The script [`viewids.py`](<%= root %>viewids.py){:.code}
finds the Socrata 4x4 identifiers in these HTML files and saves them to a file called
`viewids`. It makes a separate file for each portal.

### Download dataset metadata
You can download the metadata for a particular dataset at the url
`https://${SOCRATA_URL}/views/${viewid}.json`, where `SOCRATA_URL` is something like
`dati.lombardia.it` and `viewid` is something like `tuar-wxya`.
The script [`views.sh`](<%= root %>views.sh){:.code} downloads the metadata files.

There are sometimes other attachments that you can read about in the "About" section
of a dataset, and those don't get downloaded automatically.

### Download the datasets themselves
Downloading the datasets is similarly straightforward; you just go to 
`https://${SOCRATA_URL}/api/views/${viewid}/rows.csv?accessType=DOWNLOAD`,
where `SOCRATA_URL` is again something like
`dati.lombardia.it` and `viewid` is again something like `tuar-wxya`.
[`rows.sh`](<%= root %>rows.sh){:.code} does this.

Unfortunately, Socrata is pretty slow enough that this is actually pretty annoying,
so I'm not downloading the actual datasets for now, just the metadata.

### Conversion to a table
All of the steps so far are encapsulated in the file [`run.sh`](<%= root %>run.sh){:.code},
and that is the file that I run. This resulted in a bunch of inconsistently structured
JSON files. There are a lot of different ways that one may want to reformat these
files, and I happened to want a table with specific sorts of information, so I decided
to separate that into a different file (and repository altogether).

A script in the [analysis repository](https://github.com/tlevine/socrata-analysis)
opens all of the JSON files and makes a row in a CSV file for each one. It doesn't take
all of the fields. It handles nested structures by extracting flat features from them;
for example, I take the number of dataset tags rather than the full list of tags.


You can download this table [here](https://github.com/tlevine/socrata-analysis/blob/master/socrata.csv).
The following analyses all come from that table.

### Missing metadata
[`summary.sh`](https://github.com/tlevine/socrata-analysis/blob/master/python/summary.sh){:.code} tells me which files are empty (as a result of
HTTP errors) and how total files there are. It turns out that six of the Hawaii files
are empty. The Hawaii data portal had only just started as I was downloading the files,
so it might be that these datasets got changed suddenly between the searching and the
downloading.

    $ ./summary.sh 
    Empty files:
    data/data.hawaii.gov/views/qbr3-puhj
    data/data.hawaii.gov/views/s8xa-f7xy
    data/data.hawaii.gov/views/mmnd-twmz
    data/data.hawaii.gov/views/bi6a-gquj
    data/data.hawaii.gov/views/r7hz-w7x9
    data/data.hawaii.gov/views/wbtr-iq8j
    There are 89120 total datasets in all of the Socrata portals.
    Of those, 89114 contain metadata; the others are empty files.

## Two interesting points about the Socrata software
I learned some fun things about Socrata in doing all of this.

### Multi-portal architecture
All of the different Socrata portals are probably served from the same web application.
I say this because rate limits apply across portals rather than within portals and because
all of the sites were down for maintenance on the same day (6/26/2013).

When I open Socrata portals in my web browser, I feel like they are different installations
for each city. I suspect that Socrata found that people want to feel like they have their
own curated portal rather than feeling like they are dumping data into the abyss of
[opendata.socrata.com](https://opendata.socrata.com).

### URLs
If you navigate to a dataset in Socrata in your web browser, you'll wind up with a URL like this.

> [https://iranhumanrights.socrata.com/dataset/List-of-Prisoners-of-Conscience-in-Iran/uqfx-z9cf](https://iranhumanrights.socrata.com/dataset/List-of-Prisoners-of-Conscience-in-Iran/uqfx-z9cf).

It turns out that the directories don't matter; this URL also works.

> [https://iranhumanrights.socrata.com/-/-/uqfx-z9cf](https://iranhumanrights.socrata.com/-/-/uqfx-z9cf)

So if you ever are curious for more information about a dataset that you find in the spreadsheet,
you can just type in a URL like that for the particular dataset and look at all of the information
that Socrata has on it.

## Initial analysis
Anyway, on to the quantitative analysis.

For now, I'm just going to give a broader summary of the datasets in Socrata. I'm mainly
looking at the following variables, each of which has one observation per dataset.

* Data portal
* Date published
* Download count
* Number of rows
* Number of columns

### Sizes
Let's first see which portals are biggest. Which has the most datasets?


    socrata$portal <- factor(socrata$portal, levels = names(sort(table(socrata$portal), 
        decreasing = T)))

    ggplot(socrata) + aes(x = portal) + geom_bar() + coord_flip() + scale_y_log10("Number of datasets", 
        breaks = 10^(0:4)) + scale_x_discrete("Data portal")

[![plot of chunk big_portals_datasets](figure/big_portals_datasets.png){:.wide}](figure/big_portals_datasets.png)

Which portals get the most downloads?


    .download <- ddply(socrata, "portal", function(df) {
        c(datasets = nrow(df), downloads = sum(df$downloadCount))
    })
    socrata$portal <- factor(socrata$portal, levels = .download$portal[order(.download$downloads, 
        decreasing = T)])

    ggplot(.download) + aes(x = portal, y = downloads) + geom_point() + coord_flip() + 
        scale_y_log10("Number of dataset downloads", labels = comma, breaks = 10^c(2:9)) + 
        scale_x_discrete("Data portal")

[![plot of chunk big_portals_downloads](figure/big_portals_downloads.png){:.wide}](figure/big_portals_downloads.png)

Do any of them have few datasets but get a lot of downloads?

    ggplot(.download) + aes(x = datasets, y = downloads, color = portal) + geom_point() + 
        scale_x_log10("Number of datasets", breaks = 10^(0:4)) + scale_y_log10("Number of dataset downloads", 
        labels = comma, breaks = 10^c(2:9))

[![plot of chunk big_portals_density_scatter](figure/big_portals_density_scatter.png)](figure/big_portals_density_scatter.png) 


Here's the same plot except with the portal names in the plot.
This might be easier or harder to read.


    ggplot(.download) + aes(x = datasets, y = downloads, label = portal) + geom_text() + 
        scale_x_log10("Number of datasets", breaks = 10^(0:4)) + scale_y_log10("Number of dataset downloads", 
        labels = comma, breaks = 10^c(2:9))

[![plot of chunk big_portals_density_text](figure/big_portals_density_text.png){:.wide}](figure/big_portals_density_text.png)

What are the most popular datasets for each portal? Let's first do the one with
the most downloads.


    datasets <- ddply(socrata, "portal", function(df) {
        df[order(df$downloadCount, decreasing = T)[1], c("id", "name", "createdAt", 
            "downloadCount")]
    })
    (listify(datasets))

* `data.ny.gov`: [U.S. Overseas Loans and Grants (Greenbook)](https://data.ny.gov/-/-/5gah-bvex) (63084 downloads)
* `data.oregon.gov`: [U.S. Overseas Loans and Grants (Greenbook)](https://data.oregon.gov/-/-/5gah-bvex) (63086 downloads)
* `data.hawaii.gov`: [U.S. Overseas Loans and Grants (Greenbook)](https://data.hawaii.gov/-/-/5gah-bvex) (63085 downloads)
* `data.ok.gov`: [U.S. Overseas Loans and Grants (Greenbook)](https://data.ok.gov/-/-/5gah-bvex) (63086 downloads)
* `data.illinois.gov`: [U.S. Overseas Loans and Grants (Greenbook)](https://data.illinois.gov/-/-/5gah-bvex) (63084 downloads)
* `opendata.socrata.com`: [Watch Finder](https://opendata.socrata.com/-/-/wv3s-d6ja) (37999 downloads)
* `explore.data.gov`: [U.S. Overseas Loans and Grants (Greenbook)](https://explore.data.gov/-/-/5gah-bvex) (63084 downloads)
* `data.seattle.gov`: [Seattle Real Time Fire 911 Calls](https://data.seattle.gov/-/-/kzjm-xkqj) (436431 downloads)
* `www.metrochicagodata.org`: [Snow Alerts](https://www.metrochicagodata.org/-/-/jpfu-k3rv) (47389 downloads)
* `data.cityofchicago.org`: [Snow Alerts](https://data.cityofchicago.org/-/-/jpfu-k3rv) (46890 downloads)
* `bronx.lehman.cuny.edu`: [311 Service Requests from 2010 to Present](https://bronx.lehman.cuny.edu/-/-/erm2-nwe9) (50101 downloads)
* `data.cityofnewyork.us`: [311 Service Requests from 2010 to Present](https://data.cityofnewyork.us/-/-/erm2-nwe9) (47969 downloads)
* `data.baltimorecity.gov`: [Baltimore City Government Entities](https://data.baltimorecity.gov/-/-/cut3-c4bx) (68268 downloads)
* `data.sfgov.org`: [Off-Street parking lots and parking garages](https://data.sfgov.org/-/-/uupn-yfaw) (93951 downloads)
* `data.medicare.gov`: [Hospital General Information](https://data.medicare.gov/-/-/v287-28n3) (8773 downloads)
* `opendata.go.ke`: [Kenya County Fact Sheets Dec 2011](https://opendata.go.ke/-/-/zn6m-25cf) (12312 downloads)
* `data.kingcounty.gov`: [Adult Jail Booking: Jun. 1, 2012 to May 31, 2013 as of Jun. 6, 2013](https://data.kingcounty.gov/-/-/j56h-zgnm) (6294 downloads)
* `finances.worldbank.org`: [Number of Contracts per Supplier](https://finances.worldbank.org/-/-/besw-hc5u) (2146 downloads)
* `data.govloop.com`: [GovLoop Member Data](https://data.govloop.com/-/-/qcqe-y2ms) (5855 downloads)
* `www.opendatanyc.com`: [NYCERS Meeting Agenda 4-26-2011](https://www.opendatanyc.com/-/-/39qk-dccg) (1176 downloads)
* `data.sunlightlabs.com`: [White House Visitor Logs & Lobbyists](https://data.sunlightlabs.com/-/-/6brm-4efm) (4885 downloads)
* `data.energystar.gov`: [ENERGY STAR Certified Residential Clothes Washers](https://data.energystar.gov/-/-/cmae-djp4) (2503 downloads)
* `healthmeasures.aspe.hhs.gov`: [User Guide](https://healthmeasures.aspe.hhs.gov/-/-/8wsm-y3sw) (207 downloads)
* `cookcounty.socrata.com`: [Comptroller - Annual Salaries As Of Sep 16 2011](https://cookcounty.socrata.com/-/-/q8p4-325d) (2958 downloads)
* `datacatalog.cookcountyil.gov`: [Comptroller - Annual Salaries As Of Sep 16 2011](https://datacatalog.cookcountyil.gov/-/-/q8p4-325d) (2958 downloads)
* `dati.lombardia.it`: [Elenco Regionale degli agriturismo](https://dati.lombardia.it/-/-/xy9p-k9bj) (7259 downloads)
* `data.nola.gov`: [NOLA Addresses](https://data.nola.gov/-/-/div8-5v7i) (1275 downloads)
* `info.samhsa.gov`: [SAMHSA Publications](https://info.samhsa.gov/-/-/y8ub-8msh) (904 downloads)
* `data.austintexas.gov`: [Restaurant Inspection Scores](https://data.austintexas.gov/-/-/ecmv-9xxi) (4091 downloads)
* `data.edmonton.ca`: [Residential Snow Clearing Schedule](https://data.edmonton.ca/-/-/7gh5-bnbs) (1125 downloads)
* `data.mo.gov`: [Missouri Employee Phone Directory API](https://data.mo.gov/-/-/2448-477a) (2039 downloads)
* `data.maryland.gov`: [Certified Cover Crops Planted in the Chesapeake Bay Watershed (Annually)](https://data.maryland.gov/-/-/w6r7-apye) (258 downloads)
* `data.cms.gov`: [Inpatient Prospective Payment System (IPPS) Provider Summary for the Top 100 Diagnosis-Related Groups (DRG)](https://data.cms.gov/-/-/97k6-zzx3) (1321 downloads)
* `data.wa.gov`: [Unemployment Rates for Washington State and Counties, 1990 - 2010](https://data.wa.gov/-/-/hvq3-y2jb) (696 downloads)
* `health.data.ny.gov`: [Cancer Mapping Data: 2005-2009](https://health.data.ny.gov/-/-/cw3n-fkji) (519 downloads)
* `data.colorado.gov`: [Colorado Department of Education's School View](https://data.colorado.gov/-/-/tedy-p7a5) (257 downloads)
* `data.consumerfinance.gov`: [Credit Card Complaints](https://data.consumerfinance.gov/-/-/25ei-6bcr) (4042 downloads)
* `data.undp.org`: [UNDP Projects - 2011](https://data.undp.org/-/-/jner-twha) (400 downloads)
* `nmfs.socrata.com`: [Approved Public Comments for Aquaculture Listening Sessions (2010)](https://nmfs.socrata.com/-/-/79hh-qgjg) (766 downloads)
* `data.cityofboston.gov`: [Food Establishment Inspections](https://data.cityofboston.gov/-/-/qndu-wx8w) (185 downloads)
* `data.honolulu.gov`: [Parking Facilties](https://data.honolulu.gov/-/-/383v-jhbi) (243 downloads)
* `www.data.act.gov.au`: [ACTION timetables - Google Transit Feed](https://www.data.act.gov.au/-/-/2acm-wq55) (185 downloads)
* `data.montgomerycountymd.gov`: [Budget](https://data.montgomerycountymd.gov/-/-/r89j-py2p) (430 downloads)
* `gettingpastgo.socrata.com`: [State Developmental Education Policies](https://gettingpastgo.socrata.com/-/-/5zve-3pvy) (166 downloads)
* `data.somervillema.gov`: [Rodent Information](https://data.somervillema.gov/-/-/tp6j-gpfj) (50 downloads)
* `iranhumanrights.socrata.com`: [List of Prisoners of Conscience in Iran](https://iranhumanrights.socrata.com/-/-/uqfx-z9cf) (359 downloads)
* `data.acgov.org`: [Alameda County Restaurants Inspections](https://data.acgov.org/-/-/3d5b-2rnz) (274 downloads)
* `deleon.socrata.com`: [De Leon Community Profile](https://deleon.socrata.com/-/-/ebc4-7c6f) (104 downloads)
* `electionsdata.kingcounty.gov`: [Master KC Ballot Drop Box Dataset](https://electionsdata.kingcounty.gov/-/-/k59d-q4u8) (17 downloads)
* `data.cityofmadison.com`: [Assessor Property Information](https://data.cityofmadison.com/-/-/u7ns-6d4x) (86 downloads)
* `data.wellingtonfl.gov`: [Test SD Active Rental Licenses](https://data.wellingtonfl.gov/-/-/gria-8rsx) (92 downloads)
* `data.taxpayer.net`: [Earmarks 2010](https://data.taxpayer.net/-/-/jwqi-dvsg) (25 downloads)
* `data.oaklandnet.com`: [CrimeWatch Maps Past 90-Days](https://data.oaklandnet.com/-/-/ym6k-rx7a) (18 downloads)
* `www.halifaxopendata.ca`: [LIDAR DEM 5M](https://www.halifaxopendata.ca/-/-/eedr-6dvi) (78 downloads)
* `data.raleighnc.gov`: [GoTriangle](https://data.raleighnc.gov/-/-/2ukz-55ex) (27 downloads)
* `data.nfpa.org`: [Sparky's Wish List- USA](https://data.nfpa.org/-/-/xrhe-tp5d) (14 downloads)
* `data.weatherfordtx.gov`: [Animal Shelter - All Animal Cases](https://data.weatherfordtx.gov/-/-/2ek5-qq7s) (7 downloads)
* `data.slcgov.com`: [Planning Permits](https://data.slcgov.com/-/-/myq9-p4zu) (5 downloads)
* `data.snostat.org`: [Budget Information 2011-2013](https://data.snostat.org/-/-/sn24-xxit) (4 downloads)
* `data.redmond.gov`: [Check Register](https://data.redmond.gov/-/-/7v22-4z3a) (6 downloads)

Next, let's do the one with the most downloads per time since published.

    datasets <- ddply(socrata, "portal", function(df) {
        df[order(df$downloadCount/as.numeric(as.Date("2013-07-01") - df$createdAt), 
            decreasing = T)[1], c("id", "name", "createdAt", "downloadCount")]
    })
    (listify(datasets))

* `data.ny.gov`: [311 Service Requests from 2010 to Present](https://data.ny.gov/-/-/erm2-nwe9) (50398 downloads)
* `data.oregon.gov`: [U.S. Overseas Loans and Grants (Greenbook)](https://data.oregon.gov/-/-/5gah-bvex) (63086 downloads)
* `data.hawaii.gov`: [U.S. Overseas Loans and Grants (Greenbook)](https://data.hawaii.gov/-/-/5gah-bvex) (63085 downloads)
* `data.ok.gov`: [U.S. Overseas Loans and Grants (Greenbook)](https://data.ok.gov/-/-/5gah-bvex) (63086 downloads)
* `data.illinois.gov`: [U.S. Overseas Loans and Grants (Greenbook)](https://data.illinois.gov/-/-/5gah-bvex) (63084 downloads)
* `opendata.socrata.com`: [Watch Finder](https://opendata.socrata.com/-/-/wv3s-d6ja) (37999 downloads)
* `explore.data.gov`: [U.S. Overseas Loans and Grants (Greenbook)](https://explore.data.gov/-/-/5gah-bvex) (63084 downloads)
* `data.seattle.gov`: [Seattle Real Time Fire 911 Calls](https://data.seattle.gov/-/-/kzjm-xkqj) (436431 downloads)
* `www.metrochicagodata.org`: [Snow Alerts](https://www.metrochicagodata.org/-/-/jpfu-k3rv) (47389 downloads)
* `data.cityofchicago.org`: [Snow Alerts](https://data.cityofchicago.org/-/-/jpfu-k3rv) (46890 downloads)
* `bronx.lehman.cuny.edu`: [WasteTonnagebyBorough](https://bronx.lehman.cuny.edu/-/-/yucu-pifp) (1 downloads)
* `data.cityofnewyork.us`: [WasteTonnagebyBorough](https://data.cityofnewyork.us/-/-/yucu-pifp) (1 downloads)
* `data.baltimorecity.gov`: [propertytaxes](https://data.baltimorecity.gov/-/-/qgsp-ij25) (1 downloads)
* `data.sfgov.org`: [Off-Street parking lots and parking garages](https://data.sfgov.org/-/-/uupn-yfaw) (93951 downloads)
* `data.medicare.gov`: [Hospital General Information](https://data.medicare.gov/-/-/v287-28n3) (8773 downloads)
* `opendata.go.ke`: [Kenya County Fact Sheets Dec 2011](https://opendata.go.ke/-/-/zn6m-25cf) (12312 downloads)
* `data.kingcounty.gov`: [Adult Jail Booking: Jun. 1, 2012 to May 31, 2013 as of Jun. 6, 2013](https://data.kingcounty.gov/-/-/j56h-zgnm) (6294 downloads)
* `finances.worldbank.org`: [mexico](https://finances.worldbank.org/-/-/k2jv-62pr) (1 downloads)
* `data.govloop.com`: [GovLoop Member Data](https://data.govloop.com/-/-/qcqe-y2ms) (5855 downloads)
* `www.opendatanyc.com`: [POLICE Investment Meeting Public Agenda 1-14-13](https://www.opendatanyc.com/-/-/rzrg-u63k) (28 downloads)
* `data.sunlightlabs.com`: [White House Visitor Logs & Lobbyists](https://data.sunlightlabs.com/-/-/6brm-4efm) (4885 downloads)
* `data.energystar.gov`: [ENERGY STAR Certified Boilers](https://data.energystar.gov/-/-/6rww-hpns) (1102 downloads)
* `healthmeasures.aspe.hhs.gov`: [User Guide](https://healthmeasures.aspe.hhs.gov/-/-/8wsm-y3sw) (207 downloads)
* `cookcounty.socrata.com`: [Comptroller - Annual Salaries As Of Sep 16 2011](https://cookcounty.socrata.com/-/-/q8p4-325d) (2958 downloads)
* `datacatalog.cookcountyil.gov`: [Comptroller - Annual Salaries As Of Sep 16 2011](https://datacatalog.cookcountyil.gov/-/-/q8p4-325d) (2958 downloads)
* `dati.lombardia.it`: [Elenco Regionale degli agriturismo](https://dati.lombardia.it/-/-/xy9p-k9bj) (7259 downloads)
* `data.nola.gov`: [NOLA GIS Planning And Zoning Data](https://data.nola.gov/-/-/fhra-haa6) (875 downloads)
* `info.samhsa.gov`: [Health Reform Webinars](https://info.samhsa.gov/-/-/nszz-zta2) (842 downloads)
* `data.austintexas.gov`: [Restaurant Inspection Scores](https://data.austintexas.gov/-/-/ecmv-9xxi) (4091 downloads)
* `data.edmonton.ca`: [Residential Snow Clearing Schedule](https://data.edmonton.ca/-/-/7gh5-bnbs) (1125 downloads)
* `data.mo.gov`: [Missouri Employee Phone Directory API](https://data.mo.gov/-/-/2448-477a) (2039 downloads)
* `data.maryland.gov`: [Greenhouse Gas Emissions Estimates Chart](https://data.maryland.gov/-/-/ax7z-6f32) (228 downloads)
* `data.cms.gov`: [Inpatient Prospective Payment System (IPPS) Provider Summary for the Top 100 Diagnosis-Related Groups (DRG)](https://data.cms.gov/-/-/97k6-zzx3) (1321 downloads)
* `data.wa.gov`: [Hazardous Waste Generation by Location](https://data.wa.gov/-/-/t2ye-2r5a) (404 downloads)
* `health.data.ny.gov`: [Cancer Mapping Data: 2005-2009](https://health.data.ny.gov/-/-/cw3n-fkji) (519 downloads)
* `data.colorado.gov`: [SOC Authorization Consent Form V1 042013](https://data.colorado.gov/-/-/6syd-2xqm) (61 downloads)
* `data.consumerfinance.gov`: [Consumer Complaints](https://data.consumerfinance.gov/-/-/x94z-ydhh) (1902 downloads)
* `data.undp.org`: [UNDP Projects - 2011](https://data.undp.org/-/-/jner-twha) (400 downloads)
* `nmfs.socrata.com`: [Approved Public Comments for Aquaculture Listening Sessions (2010)](https://nmfs.socrata.com/-/-/79hh-qgjg) (766 downloads)
* `data.cityofboston.gov`: [Crime Incident Reports](https://data.cityofboston.gov/-/-/7cdf-6fgx) (139 downloads)
* `data.honolulu.gov`: [Parking Facilties](https://data.honolulu.gov/-/-/383v-jhbi) (243 downloads)
* `www.data.act.gov.au`: [ACTION timetables - Google Transit Feed](https://www.data.act.gov.au/-/-/2acm-wq55) (185 downloads)
* `data.montgomerycountymd.gov`: [Budget](https://data.montgomerycountymd.gov/-/-/r89j-py2p) (430 downloads)
* `gettingpastgo.socrata.com`: [State Developmental Education Policies](https://gettingpastgo.socrata.com/-/-/5zve-3pvy) (166 downloads)
* `data.somervillema.gov`: [Rodent Information](https://data.somervillema.gov/-/-/tp6j-gpfj) (50 downloads)
* `iranhumanrights.socrata.com`: [List of Prisoners of Conscience in Iran](https://iranhumanrights.socrata.com/-/-/uqfx-z9cf) (359 downloads)
* `data.acgov.org`: [Alameda County Restaurants Inspections](https://data.acgov.org/-/-/3d5b-2rnz) (274 downloads)
* `deleon.socrata.com`: [De Leon Community Profile](https://deleon.socrata.com/-/-/ebc4-7c6f) (104 downloads)
* `electionsdata.kingcounty.gov`: [KC Fire Protection District 44](https://electionsdata.kingcounty.gov/-/-/mx4r-zru7) (6 downloads)
* `data.cityofmadison.com`: [Assessor Property Information](https://data.cityofmadison.com/-/-/u7ns-6d4x) (86 downloads)
* `data.wellingtonfl.gov`: [Test SD Active Rental Licenses](https://data.wellingtonfl.gov/-/-/gria-8rsx) (92 downloads)
* `data.taxpayer.net`: [FY2008 Earmarks](https://data.taxpayer.net/-/-/3c67-qqqv) (19 downloads)
* `data.oaklandnet.com`: [City of Oakland Proposed Policy Budget FY2013-15](https://data.oaklandnet.com/-/-/b8mb-8tti) (12 downloads)
* `www.halifaxopendata.ca`: [LIDAR DEM 5M](https://www.halifaxopendata.ca/-/-/eedr-6dvi) (78 downloads)
* `data.raleighnc.gov`: [Police Crime Data](https://data.raleighnc.gov/-/-/ffzc-kk5q) (3 downloads)
* `data.nfpa.org`: [Sparky's Wish List- USA](https://data.nfpa.org/-/-/xrhe-tp5d) (14 downloads)
* `data.weatherfordtx.gov`: [Monthly Sales Tax Collections](https://data.weatherfordtx.gov/-/-/c4zr-3y7x) (6 downloads)
* `data.slcgov.com`: [Planning Permits](https://data.slcgov.com/-/-/myq9-p4zu) (5 downloads)
* `data.snostat.org`: [Snohomish County Buildings](https://data.snostat.org/-/-/pdma-n7bb) (4 downloads)
* `data.redmond.gov`: [Check Register](https://data.redmond.gov/-/-/7v22-4z3a) (6 downloads)

### Dataset shapes
Within the context of the current analysis, a datasets is a table. A table has columns and rows.
How tall and fat are these datasets?

I thought it would be cool to show dataset size as a rectangle because datasets are tables.

    ggplot(socrata) + aes(xmin = 0, ymin = 0, xmax = ncol, ymax = nrow, fill = portal) + 
        geom_rect(alpha = 0.1) + scale_x_log10("Number of columns", labels = comma) + 
        scale_y_log10("Number of rows", labels = comma)

[![plot of chunk shapes_rect](figure/shapes_rect.png)](figure/shapes_rect.png) 

But that looks bad, so let's do it as points.

    ggplot(socrata) + aes(x = ncol, y = nrow, color = portal) + geom_point(alpha = 0.5) + 
        scale_x_log10("Number of columns", labels = comma) + scale_y_log10("Number of rows", 
        labels = comma)

    ## Warning: Removed 542 rows containing missing values (geom_point).

[![plot of chunk shapes_scatter](figure/shapes_scatter.png){:.wide}](figure/shapes_scatter.png)

Some datasets have no rows nor columns. Here are ten of them.

    deleted <- socrata[(socrata$nrow == 0 & socrata$ncol == 0), ]
    set.seed(13984382)
    (listify(deleted[sample.int(nrow(deleted), 10), ]))

* `data.illinois.gov`: [U.S. Air Force Biographies](https://data.illinois.gov/-/-/xtgy-ahki) (554 downloads)
* `data.oregon.gov`: [1991 Toxics Release Inventory data for the state of New Hampshire](https://data.oregon.gov/-/-/wi7k-6su5) (297 downloads)
* `data.ok.gov`: [List of Public Elementary and Secondary Schools: 1986-Present](https://data.ok.gov/-/-/ehs2-pq45) (557 downloads)
* `data.ny.gov`: [1999 Toxics Release Inventory data for the state of Idaho](https://data.ny.gov/-/-/3n4u-7vms) (265 downloads)
* `data.ny.gov`: [Social Security Administration Percentage of Fast-Track Receipts for Fiscal Year 2010 and 2011](https://data.ny.gov/-/-/tzgk-ytkj) (219 downloads)
* `data.ok.gov`: [2011 Federal Register in XML](https://data.ok.gov/-/-/6qji-a8pa) (345 downloads)
* `data.ny.gov`: [Alternative Transportation Fuels (ATF) and Alternative Fueled Vehicles (AFV) 2007](https://data.ny.gov/-/-/ecmx-ixe4) (1066 downloads)
* `data.ok.gov`: [Gravesite locations of Veterans and beneficiaries in KANSAS, as of October 2012.](https://data.ok.gov/-/-/m2bb-jypa) (17 downloads)
* `data.illinois.gov`: [1991 Toxics Release Inventory data for the District of Columbia](https://data.illinois.gov/-/-/rd3u-gh5c) (401 downloads)
* `data.oregon.gov`: [National Bridge Inventory - Louisiana-2002](https://data.oregon.gov/-/-/mzwa-q9aa) (3 downloads)

These datasets appear to be either deleted or non-tabular.

Now let's look at average dataset size by portal, where size is number of columns (`ncol`),
number of rows (`nrow`) or number of cells (`ncell`).


    .sizes <- ddply(socrata, "portal", function(df) {
        c(ncol = mean(df$ncol), nrow = mean(df$nrow), ncell = mean(df$ncol * df$nrow))
    })
    base <- ggplot(.sizes) + aes(y = portal) + geom_point() + scale_x_log10(labels = comma)

    print(base + aes(x = nrow))

    ## Warning: Removed 17 rows containing missing values (geom_point).

[![plot of chunk dataset_size_by_portal](figure/dataset_size_by_portal1.png){:.wide}](figure/dataset_size_by_portal1.png) 

    print(base + aes(x = ncol))

[![plot of chunk dataset_size_by_portal](figure/dataset_size_by_portal2.png){:.wide}](figure/dataset_size_by_portal2.png) 

    print(base + aes(x = nrow * ncol))

    ## Warning: Removed 17 rows containing missing values (geom_point).

[![plot of chunk dataset_size_by_portal](figure/dataset_size_by_portal3.png){:.wide}](figure/dataset_size_by_portal3.png) 

### Time
What does the growth of downloads of a dataset look like? We don't have the data
for individual datasets, but we can compare the current download counts old datasets
to new datasets.

Has dataset size changed over the past couple years?

    base <- ggplot(socrata) + aes(x = createdAt, group = portal, color = portal) + 
        geom_point(alpha = 0.5) + scale_y_log10(labels = comma)

    print(base + aes(y = nrow))

    ## Warning: Removed 621 rows containing missing values (geom_point).

[![plot of chunk datasets_size_over_time](figure/datasets_size_over_time1.png)](figure/datasets_size_over_time1.png) 

    print(base + aes(y = ncol))

    ## Warning: Removed 79 rows containing missing values (geom_point).

[![plot of chunk datasets_size_over_time](figure/datasets_size_over_time2.png)](figure/datasets_size_over_time2.png) 

    print(base + aes(y = nrow * ncol))

    ## Warning: Removed 621 rows containing missing values (geom_point).

[![plot of chunk datasets_size_over_time](figure/datasets_size_over_time3.png)](figure/datasets_size_over_time3.png) 

When did datasets get uploaded?

    ggplot(socrata) + aes(x = createdAt, group = portal, fill = portal) + geom_bar()

    ## stat_bin: binwidth defaulted to range/30. Use 'binwidth = x' to adjust
    ## this.

    ## Warning: position_stack requires constant width: output may be incorrect

[![plot of chunk datasets_when_uploaded](figure/datasets_when_uploaded.png)](figure/datasets_when_uploaded.png) 

On what days of the week do datasets get uploaded?

    socrata$createdAt.dayOfWeek <- factor(strftime(socrata$createdAt, format = "%a"), 
        levels = c("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"))
    ggplot(socrata) + aes(x = createdAt.dayOfWeek, group = portal, fill = portal) + 
        geom_bar() + scale_y_continuous("Dataset uploads", labels = comma) + scale_x_discrete("Day of the week")

[![plot of chunk datasets_day_of_week_uploaded](figure/datasets_day_of_week_uploaded.png)](figure/datasets_day_of_week_uploaded.png) 



## Future plans
I'm conducting more detailed studies around more pointed data portal considerations;
expect those to come out over the next few months. And I could use your help. If you
use or publish open data, I'd love to talk and see what you would like to know about
how open data get used; there's probably a lot we can learn from this dataset.
