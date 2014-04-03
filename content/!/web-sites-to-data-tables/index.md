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
I like to think of three main components of a system that converts
webpages into data tables.

1. Download a web page (HTTP)
2. Read file formats (HTML, JSON, Javascript, RSS, &c.)
3. Save the data as a table (CSV, JSON, SQL, &c.)

### Downloading
Web browsers and web servers communicate over the
[hypertext transfer protocol](/!/street-sign-protocol/).
Thus, I like to use an HTTP client when downloading webpages.
I usually use [requests](http://python-requests.org)
if I'm working in Python.

    import requests
    response = requests.get('http://thomaslevine.com')

This downloading step is the one scary step of the process.
It's scary because we don't know how the download is going to
go. Moreover, our internet connection might go down, and
the webpage might get updated. Thus, it's good to save HTTP
responses. In Python, I like to save the responses with
[pickle_warehouse](http://pypi.python.org/pypi/pickle_warehouse).

    import pickle_warehouse
    w = pickle_warehouse.Warehouse('responses')
    w['http://thomaslevine.com'] = response

This is also nice because you can load the HTTP responses from
your own computer rather than downloading them each time.

### Parsing
Once we've downloaded the data, we have files sitting on our computer.
HTML files are quite common on the web, so let's discuss how I parse
HTML files. I use an HTML parser to convert the raw HTML text into a
fancy HTML object in whatever programming language I'm using. This lets
me search the HTML in lots of fancy ways. In Python, I would use lxml.

    import lxml.html
    html = lxml.html.fromstring(response.text)

Once the HTML is parsed, I usually use one of two languages for
searching within the parsed html object. These languages are CSS selectors
and XPath, and lxml supports both of them. For example, here's how
you might select a table.

    html.xpath('//id("main")/table')
    html.cssselect('#main > table')

Regardless of what HTML parser you use, I recommend that you use CSS selectors
or XPath rather than using a special language that is specific to your particular
library; this way, your skills will transfer easily to other libraries.

As I said, there are a lot of HTML files on the web, but there are other
file formats too. You'll have to use other methods to parse other file formats.
Here are some other articles about other parsing methods.

* [Regular expressions](http://www.grymoire.com/Unix/Regular.html)
* [Portable document format](/!/parsing-pdfs/)
* [strptime](http://linux.die.net/man/3/strptime)

### Saving
I'm presuming that you want to save the data as a
[data table](http://www.datakind.org/blog/whats-in-a-table/).
You might prefer a graph structure or something else,
but that won't make things much different.

Once your program has read the web page, you have the data
saved in data structures in your programming language. Now you
just need to write them out to structured files. You can use
an ordinary CSV or JSON writer to write to simple files, and
you can use a database driver to write to a fancier database.

You can also convert to some intermediary data structure before
saving to a file. In R, you might use data frames. In Python,
you might use SQLAlchemy. Surrounding both these structures
are a slew of tools that will convert to all different formats.

Regardless of which of these methods I use, I set up my program
such that I can whimsically destroy the table and regenerate it
based on other files that I have saved to my computer. Things
gen annoyingly complicated when the parsing depends on the data
in the output table.

## Libraries you want
As a summary, here are the sorts of libraries that you might want.

* HTTP client
* Storage of some sort
  * Files
  * Relational database
* Text parsers
  * HTML/XML, XPath, CSS
  * JSON
  * Regular expressions
  * strptime
* Other parsers
  * PDF
  * Images
  * Video
  * &c.

Most of these probably exist in whatever language you're using,
so you probably just need to figure out what the right library is.

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
