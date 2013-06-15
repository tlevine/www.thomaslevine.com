---
title: Teaching Data Science
---
I've recently been around several people who have been teaching data science in
various ways. I've always been skeptical of the utility of the educational
"data science" that I've seen, but that might be because I'm always skeptical
of schooling and of anything termed "data science". Or maybe I'm just skeptical
of everything. My distaste for the buzzterms tends to relate largely to the
semantic ambiguity of the terms, but the various related concepts tend to be
meaningful and appealing, so it is worth defining and teaching them. My
conclusion from this ramble on the utility of teaching the nebulous concept of
"data science" was that it would be nice to figure out what data science
involves and how I would teach it.

## The mindset
First, I see data science as a mindset. I also see ergonomics (another thing
I apparently know a lot about) as a mindset, so it might just be that everything
becomes a mindset once you get good at it. Here are some main aspects of this
mindset.

1. It is fun to learn how complex systems work and to apply the resulting
    knowledge, and quantitative information can assist in this fun.
2. Everything can be turned into a number.
3. It is rude and statistically unsound to ask people questions that will only
    be used for study.
    * It is better to surveille people unobtrusobly (like by watching security
        cameras or reading web server logs) or to use questions that they have
        other reason to answer (like by reading credit card purchases or
        Tweets).
    * I actually don't see those two approaches as different; it's more like
        they're different ways of saying the same thing.
4. As a corallary to the previous point, if collecting data on complex behaviors
    is convenient/inexpensive, you should collect the data even if you have no
    plans to use them. For example, if you make a website that starts getting
    much traffic, you should log every interaction that you can conveniently
    log, or at least every HTTP request that is made.
5. When asked a question about the world, adapt the question so that it can be
    answered with an existing and convenient dataset.

I think these points stem from a desire to learn how complex systems work.
If you want to do that and you are alive today, you might get excited by the
potential off the ease of collecting and storing quantitative information,
and the aspects above follow logically.

## Specific lessons
If I were to teach data science, I would teach things that are obvious
consequences of the above mindset. That is, I would expose and reinforce
the above mindset, and I would teach methods that allow people to embody
the above mindset.

The following sections are these various topics, grouped into lessons
and ordered in the order I would give them. (But if a lesson is titled
"Lesson XXX", I haven't figured out where it goes yet.)

I happen to mention R libraries for most things, but I actually think
people should be using some other language. Python (pandas) and Scala
(Saddle) seem better because they're faster. I wouldn't really care what
students use.

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

## Specific projects
Preferably, there wouldn't be much of me standing in a room giving formal
lessons; there would be more of people working on related projects with
my help. People would work on complex projects that interest them.

Creation of any reasonably complex data project should help convince
an employer to employ someone as a data scientist, but if people are
particularly concerned for their employability, I could make sure that
projects hit a few skill sets that would be relevant for their desired
employment.

If people can't come up with an idea, I would seed their thoughts with

1. the various projects that I've started and maybe collected data for
2. studies of their personal information, like emails, chat logs,
    activity on websites, &c.
3. projects of relevance to their work or to a non-profit organization

Depending on the length of the course, it might be one or three projects
that embody the data science mindset and use some skills that were discussed.
Here follow some components of these projects

### Mess to numbers
The project should convert a mess of information into at least one
tidy table. (This table might not be exposed directly to consumers of
the project.)

The mess could be the real world, collected with sensors or a
previously-digitized repository, like book scans.

### Web
The project should be explained as a website. Minimally, this could be
just a Tumblr blog post about an analysis, but it would be more cool if
interactions and animations can be used to add more dimensions of data
or to make a story that is more relevant to the particular viewer.

* Automatic compilation of the website (with knitr, for example)
* Writing of some HTML, CSS, Javascript, &c.
* Sexy moving visuals and whatnot
* Website automatically updates with new data from a data feed.

## General relationship to existing fields
People with data science mindset want to start studying things in certain
ways, so they wind up deciding to learn certain sorts of things. At a high
level, the following doodle explains those things.

![Plot of the four professions' abilities with analysis and abilities with computers](<%= @item.identifier %>data-people.png)

Data scientists know both how to learn things from numbers (analysis skills)
and how to turn things into numbers (computer skills).

### Not domain knowledge
Drew Conway says that domain knowledge is also part of the data science thing,
but I don't like including that. Here are few reasons why.

#### 1. Domain knowledge is good for everyone.
It's probably good for anyone working in a particular area to know about
that area. For example, analysts need to know the area so they can analyze
it, statisticians need to know the area so they can specify appropriate
models and write good reports, and engineers need to understand how their
users use things. So domain expertise doesn't distinguish data scientists
from anyone else.

#### 2. Domain knowledge is seen as the role of the analyst or the academic
In contemporary organizations and society, domain knowledge appears to be
the role of the analyst or the academic. With experience, the
analyst/academic learns a lot about a particular domain, whereas other role
get better at other things that can be applied to different domains.

#### 3. The data science mindset is about learning and teaching
The data science mindset is about the using digital quantitative
information to learn how complex systems work and to convey this
knowledge to others; the specific manner of system isn't part of the
mindset.

#### 4. What is a domain anyway?
When I'm with a group of people who don't know computer stuff know that
computers could help their organization do stuff better, maybe I'm acting
as an expert in the domain of data science.

