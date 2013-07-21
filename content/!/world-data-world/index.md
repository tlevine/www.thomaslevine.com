---
title: World -> Data -> World
---
To me, it is common sense that data could be extracted from a pair
of pants and that that data could be converted into a slice of apple pie.
But for many (most?) people, it is not common sense. I think this is a
particularly important concept to convey if we want to teach data literacy
(or whatever you want to call it). So now I'll talk about some ways that
I teach this concept.

## What is data?
People use the word "data" to mean everything, so I never really know
what people mean when they're talking about it. But when I think of
"data", I'm thinking specifically of tables, with variables as columns.
Hadley Wickham would call this "[tidy data](http://vita.had.co.nz/papers/tidy-data.pdf)".

(A note for non-relational hipsters: This doesn't have anything to do
with database paradigms; non-relational databases store tidy data too.)

## World -> Data
We can collect information from the world and convert it into data.
This tends to come to people more easily. My main points here are that
data is simply a concise representation of ordinary human knowledge
and that fancy computers use the same processes that people do.

The concept that the world can be converted into data seems to come
quite naturally to people when I find a situation where the people are
already doing that. People often ask me to teach web scraping, and I
generally subvert that request to teach them about how anything can
be converted into data. I do that by walking through the architecture
of a complex data-driven system and by brainstorming different types
of information that can be extracted from a web page.

### Architecture walkthrough
People expect me to tell them what Python code to write to pull the
numbers out of the web page. If I have time, I get to that, but I
start by breaking down the process by which a human would collect the
data. If the students don't have a good example, I use
[Scott](http://scott.thomaslevine.com), my wetlands permit application
monitoring thing. The resulting diagram looks like this.



We walk through it as a human process, and then we start converting
it to a computerized process, trying to start with the parts that are
harder for people to do and easier for computers do do.

### Brainstorming information extraction
Eventually, someone asks how to extract information from PDF files, and
this is my opportunity to brainstorm different types of information that
can be extracted. People often want something that will give them the
text of the PDF file formatted in semantically reasonable way. Maybe they
just want [search](http://communityboostr.org/resource/searching-lots-inconveniently-formatted-files-once)

But sometimes (normally?) people would be better off with something much
simpler. And here is where it becomes helpful to think about converting
the PDFs to data. Rather then getting the full text of the PDF, what if
we create a few variables to describe the different PDFs? Here are some
possibilities.

* Number of pages
* Identity number, zip code, &c.
* Whether the PDF contains a particular word

The utility of these different possibilties depends on what you're doing.
Read more about that [here](/!/parsing-pdfs/).

The point is that we can collect any number of features from PDF files,
represent those features as a table, with one row per PDF file and then
use ordinary quantitative methods on that table.

## Data -> World: CSV Soundsystem
I just talked for way-too-long about how to convert the world into data.
Now let's go in the other direction: How do we convert tidy data tables
back into real things?

This theme underlies much of [CSV Soundsystem](http://csvsoundsystem.com)'s work.
Most of us in CSV work in journalism, so it makes sense that we're always thinking
about how to make data into stories that are accessible to ordinary people.

### Music videos
We're most known for our music videos.

A while ago, I made a video about the gifts my true love gave to me
on the twelve days of Christmas.

<iframe width="560" height="315" src="http://www.youtube.com/embed/rLZDvXPIDa0" frameborder="0" allowfullscreen></iframe>

Then CSV made a music video about the financial crisis.

[<img alt="FMS Symphony" src="<% @item.identifier %>fms.png" class="wide" />](http://fms.csvsoundsystem.com)

Most recently, I made one about transit ridership in Chicago and New York.

<video src="http://tlevine.github.io/multisensory-data-zipfian/transit.webm"></video>

### Data gastronomification
https://github.com/csv/gastronomify
http://www.youtube.com/watch?v=3CiDW7NVa8o
https://twitter.com/internetrebecca/status/352955293291913217

And our tools for making music videos
https://github.com/csv/ddr
https://github.com/csv/transit-ridership/blob/master/merge.sh

And there are related things that I've been less involved in,
like Twitter bots and haiku-searchers.

Do you think I can make a blog post about all of these and count it as one project?
The general theme making data real to people through media other than graphs.

