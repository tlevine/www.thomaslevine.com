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
2. Everything can be turned into a number, and these numbers can be put in tables.
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

### The data mindset
If you have the aforementioned data mindset, the following are true.

* You see little difference between "qualitative" and "quantitative" data
    nor between "unstructured" and "structured" data because you know that
    you can convert between these opposites.
* You look for opportunities to use existing stores of data in unintended ways.
* All analyses should be scripted.

Some lessons that would fall under this topic

* Development practices (test-driven development, &c.)
* git
* a good text editor
* Brainstorming
* User research methods

### Converting a mess into data
Here are some things that I'd introduce related to preparing data.

* The concept of tidy data tables (from Hadley Wickham)
* Data serialization formats (CSV, JSON, XML, &c.)
* The POSIX shell
* Storage API paradigms (filesystem, MapReduce, SQL and variants, ReST)
* Performance concerns (memory, storage, CPU, network, parallelizing)
* Microcontrollers, sensors, &c.
* How client-side and server-side web analytics work
* Making HTTP requests, mainly for web scraping
* Parsing XML and HTML, mainly for web scraping
* Messaging, queues, &c.
* Regular expressions

### What you can do with data
Here are things I'd introduce on what you can do with data.

* Tufte's thoughts on visual displays of quantitative information
* The grammar of graphics
* Conveying data through a story, interactively
* The concepts of prediction and inference
* The difference or lack thereof between statistics and machine learning
* How to think about the type signature of a prediction formula
    (numerical/categorical, response variable, supervized/unsupervized)
* Common machine learning algorithms (You can also call these "stastical
    methods".)
* Natural language processing approaches
* Web development, focusing on simple static websites

## Incompleteness
That definition is quite involved, but I'm likely to keep adding to it as
I remember things. Also, keep in mind that these topics would be only
shallowly discussed in an introductory course and that the professional
data scientist would have deeper knowledge in many of these areas.
