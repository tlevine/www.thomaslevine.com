---
title: Websites to data tables
---
I apparently know a lot about making websites into data tables.
You might call this "web scraping". Here's a bit of how I go about
writing computer programs that do that.

## What I mean by "making websites into data tables"
Much of the world's data are stored in ways that are annoying for me
to work with. For example, they might be on paper,
in [PDF files](/!/parsing-pdfs/), or in HTML files. And they might be
spread across many files of various formats. Sometimes we're lucky enough
that the files are available on a website.

When one format doesn't work for me, I convert the data to a different format.
In the present article, I focus on getting data out of HTML files that were
downloaded over the web (with the hypertext transfer protocal).

## Human parallels
Once you figure out how a human could acquire the
data from the website, it's rather straightforward (though probably
still tedious) to get a computer to do it. Imagine that different
websites are different buildings and that you are running around
among a few buildings to get the data you want. You go to one place
and find some of the data that you need, and that place points you
to a few other places. You follow all of these leads, recording what
you find along the way.

Conceptually, this process doesn't change that much when you switch
from humans to computers. It also doesn't change that much if the website
you're using calls itself an "application programming interface" (API).
The API might be a little easier to read, but you're still going to the
API, asking it for something, getting stuff back, and continuing on to
wherever it points you.

## Concepts

1. Download a web page (HTTP)
2. Save results for reproducability
3. Read file formats (HTML, JSON, Javascript, RSS)
4. Save the data as a table

## Libraries you want

* HTTP client
* Storage of some sort (for example, files)
* Fancy parsers
  * HTML/XML, XPath, CSS
  * JSON
* General parsers
  * Regular expressions
  * strptime
* PDFs and images
  * http://thomaslevine.com/!/parsing-pdfs
  * https://www.meetup.com/Data-Wranglers-DC/events/160592492/

## Starting a project
Here's what I do when I'm contemplating getting data tables out of websites.

First, I ponder whether it's worth doing at all. I first want to know that
someone will use the data table that I produce.

Second, I ponder whether it's worth automating nicely. If the data are just
a few numbers spread across a few pages, it's probably not worth writing a
special thing.

Third, I figure out how a person would navigate all of the websites and
do whatever is desired.

Fourth, I start automating just part of the human process. I try to start with
a tiny part that is easy and will be useful quickly.

## Examples

* Scott
* Scarsdale property
* Craigslist
