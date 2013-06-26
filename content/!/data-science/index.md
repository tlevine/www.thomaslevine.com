---
title: I reluctantly define data science
---
I've been resisting using and defining the term "data science", but I'm
starting to give in. People define "data science" such that they are doing it,
so its meaning is never that clear. But maybe all fields are like this.

Either way, there is some newly useful approach to quantitative research,
and I'm going to call that "data science".

## The mindset
I see data science as a mindset. (By the way, I also see ergonomics as a mindset.)
Here are the main parts of the mindset.

1. I want to study how complex systems work.
2. Everything can be turned into a number.
3. Don't use questionnaires, lab studies or other highly manual data collection
    processes; it is often cheaper and more statistically sound to unobtrusobly
    record things that people are already doing.
4. You don't need a full-fleged research plan before you start collecting data;
    record everything that is convenient, and store it in the most raw form.
5. When asked a question about the world, adapt the question so that it can be
    answered with an existing and convenient dataset.

I think these points stem from the first point, the desire to learn how complex
systems work. If you want to do that and you are alive today, you might get
excited by the potential off the ease of collecting and storing quantitative
information, and the aspects above follow logically.

## Overview
I came up with a concept of data science by thinking about how I would teach
it. If I were giving a course on data science, it would have these main parts

1. The data mindset (explained above)
2. Converting a mess into data (ETL/scraping, data formats, logging, messaging, databases, feature extraction, distributed systems, &c.)
3. Stuff you can do once you have data (graphs, interactives, web development, algorithms for statistics/predictions/recommendation, online/realtime statistics &c.)

(I apologize for the parethetical use of startlingly many buzzterms above.)

These points are ordered chronologically by approximate step in a data workflow,
but I think they should be taught all at once in separate projects.

## Details

### But first, some small notes
I happen to mention R libraries for most things, but I actually think
people should be using some other language. Python (pandas) and Scala
(Saddle) seem better because they're faster. I wouldn't really care what
students use.

One point I want to get across is that **you** can do data science too.
I don't mention many buzzwords in the following descriptions, but I
would define them as they come up and briefly rant about how they're
not usually much more meaningful than ordinary words.

### Lesson 1: Everything can be quantified
I would break down distinctions between qualitative information and
quantitative information and distinctions between unstructured and structured
data.

I would discuss what people mean by "qualitative" and "quantitative"
information, what they mean by "unstructured" and "structured" data, and how
people can convert between these opposites.

I would model flows of information through a bureaucracy and show
how that could be gradually converted to computer program. (If you've
seen me give a talk in the last year, I've probably done something like
this with an example of the review of permits to dredge or fill wetlands.)

I would have students write some small program that converts some
inconvenient data source into a table that would produce an interesting
plot.

### Lesson XXX: Tidy data
I would say that "data" means "table" to me. And if you're doing
calculations on a non-relational database, you're approximating a table;
the non-relational structure is just an implementation detail.

I would talk about the concept and merits of tidyness and about how you
can achieve this with `plyr` and `reshape2`. I'd discuss some theory and
language that is embodied in the two libraries.

I'd have students tidy a dataset to the point that they can grammatically
plot it or run a regression or whatnot.

### Lesson XXX: Data storage
Data is a table, but you can store it in a lot of ways.

I'll also talk about how data stores can be used as interfaces between
languages.

A toy project could involve querying a JSON API, loading that into a
fancy database, querying that database, maybe serializing the output
as CSV, and then doing something pretty with the resulting data.

### Lesson XXX: Development practices
This stuff will be quite helpful in the projects, and people don't usually
teach this in school. Students don't have to follow these processes
diligently, but it's nice to know about them.

* Test-driven development
* Documentation-driven development
* Behavior-driven development
* Agile

I'd want to read more about these too.

### Lesson XXX: The shell and dotfiles
I would talk about some shell concepts.

* Pipes
* Directing output
* STDIN, STDOUT, STDERR
* `#!`
* `$PATH`
* Access environment variables from other languages
* `set -e`

I'd also talk about some useful specific programs.

I would have students write a shell script that ties together some things
we've already done. And I'd encourage students play with vim or emacs and
git if they aren't already.

### Lesson XXX: Querying data stores
I would discuss a few general paradigms

* Filesystem
* MapReduce
* SQL and variants
* ReST

### Lesson XXX: Performance concerns
When data gets more than tiny, you have to think about RAM, storage,
speed, &c. I would discuss how this stuff comes up and how you can
deal with it.

I'd rather not assign any practical work that involves dealing with
more than a few gigabytes of data; it would take a while, and the
result wouldn't be that interesting. But some smaller-scale things
would be fun for students who haven't dealt them.

* Extract some bits of information from a shit ton of huge files
    without using much memory at once.
* Optimize some code in a dynamic language by calling C. For example,
    in R, you might vectorize the code or use Rcpp.
* Randomly sample a dataset.

### Lesson XXX: Visual displays of quantitative information
I would talk about different kinds of plots and how they relate to types
of variables. I read an awesome book by Bill Clevelend in the Cornell
Math Library that categoriezed plots based on the types of input data.

I would talk about some of Edward Tufte's principles, and I would have
people draw graphs on paper that embody some of his principles. The main
ones that I think about day to day are below, but I might add others, and
I might also look at other recommendations regarding visual displays.

* Data:ink ratio
* Multidimensionality

There might also be some general graphic design things. I quite like
*Design Elements*, by Timothy Samara.

### Lesson XXX: Quantifying the real world
I would teach people enough about microcontrollers that they would be able
to hook up a sensor to an Arduino and send the sensings to some safe place.

As a project, students could select a sensor, put it in a breadboard,
connect it to an Arduino, write some program, leave it somewhere for a
week, and make a plot. For added fun, they could assemble a Boarduino,
solder it to a breadboard and solder the sensor to it.

I feel like this project and lesson should be optional.

### Lesson XXX: Grammar of graphics
When exploring data, producing mundane visuals or planning complex visuals,
I find the grammar of graphics to be quite helpful. I would explain the
concepts, show examples in `ggplot2` or `d3`, and have students make plots
that slice a complex dataset in `ggplot2` or `d3`.

### Lesson XXX: Storytelling and interactivity
People in journalism talk about telling stories with data to make things
more real. I'd pick from my talk on interactive data from Kelton's
symposium.

If students don't know much about web development, there could be a basic
project where students are given a data source with a convenient web API
and they make a website that displays the data in a way that lets people
find their own stories.

### Lesson a: Web Scraping
It's sort of hard to avoid this series if I'm teaching. I would do
something akin to my talks at the ScraperWiki data camps; I would show
how to diagram a website, make GET requests and parse the HTML. I would
use a website that had one page involving a messy HTTP request, and I
would skip that for now.

### Lesson a + 1: HTTP
I would discuss the components of an HTTP request, talk about the ReST
thing, show how to use some web APIs, and show how to build up a web
request that matches the one your web browser made. I would finish the
part of the site from the web scraping lesson that involved the messy
HTTP request.

### Lessons XXX: Statistics, machine learning, &c.
I think it's too easy for people to talk more than is helpful about

