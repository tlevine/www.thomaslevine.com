---
title: Websites to data tables
---
I apparently know a lot about making websites into data tables.
You might call this "web scraping". Here's a bit of how I go about
writing computer programs that do that.

## Human parallels
Once you figure out how a human could acquire the data from the
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
