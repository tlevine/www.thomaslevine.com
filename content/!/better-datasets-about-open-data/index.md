---
title: Organizing my data about data
description: I'm starting to put my data data in one code repository.
tweet_text: Making my data about open data less confusing http://thomaslevine.com/!/better-datasets-about-open-data/
tweet_link: ''
kind: article
created_at: 2014-01-27
tags: ['open-data']
---
I've recently been [studying data about open data](/open-data),
and I want to make it easy for other people to use my data data for more
data data studies.
I previously [documented](/!/my-datasets-about-open-data)
much of the data data that I'd collected, but that was all a mess,
so I've been organizing them a bit more nicely. All of the old stuff
still applies, but stuff I do in the near future will follow the
presently document structure.

## Getting the code
I'm trying to put all programs for accessing the data data into a single git
repository [hosted on GitHub](https://github.com/tlevine/open-data).
Get it like so.

    git clone git@github.com:tlevine/open-data.git --recursive

You need `--recursive` because
there are separate submodules for different data data sources.

## Running things
Most of the directions for downloading stuff from other places are written as
Python modules and are stored in the root of the repository. I intend for
`run.py` to be the entry point to all of these modules. In some cases,
however, I copied a file from another place and didn't integrate it into this
structure.

Don't expect things to be particularly well documented, but you can try to
figure out what I did by looking in the Makefile.
Most of the make tasks involve importing the `run.py` file and
running one of the functions in it.

## Directory structure
The root of the repository contains five directories.

    $ git ls-files|sed -n 's/\/.*//p'|uniq
    downloads
    instances.ckan.org
    opendata.socrata.com
    reports

The `instances.ckan.org` and `opendata.socrata.com` directories contain one
webpage file each. These files contain lists of data catalogs.

The `downloads` directory contains a few git submodules, and most of the 
stuff that gets downloaded winds up in these submodules.

The `reports` directory contains lots of English and R rather than Python.
Each report has an R script (named something `.r`) that renders an Rmarkdown
file (named something `.Rmd`). There are other small files too, but I don't
have a system as to why they go where they do.

Some of the scripts produce a `./cache` directory.

    $ ls -d */
    cache/  downloads/  instances.ckan.org/  opendata.socrata.com/  reports/

The function of this directory is explained later.

## Loading cached data
On all of the computers that I might run this code on, I store the `/tmp` 
directory on RAM.

    $ df -h|sed -n -e 1p -e '/\/tmp$/p'
    Filesystem      Size  Used Avail Use% Mounted on
    tmpfs           7.8G  1.3G  6.6G  16% /tmp

To make things run faster, I use `/tmp/open-data.sqlite` to store caches that
I can lose. Run `make to-disk` to copy this file to the `./cache` directory, 
and run `make from-disk` to copy `./cache/open-data.sqlite` to the `/tmp` directory.

## Documentation
If it's taking you a while to figure out how something works,
[email me](mailto:_@thomaslevine.com), and I might document it.
And if you figure out how something works, do send me any
documentation that you happen to come up with, even if it's a mess.
