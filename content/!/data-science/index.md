---
title: I reluctantly define data science
---

## Motivation

### Why I resisted defining data science
I've been resisting using and defining the term "data science".
Such words make me cringe for two main reasons.

1. I don't like words in general, especially nouns; they are too
    simplifying, so you need a lot of them to convey much meaning.
2. People want to be doing sexy things like data science, so everyone
    says he's a data scientist, and this makes the word more meaningless.

These problems aren't at all specific to data science; it's the same
with any sexy field.

### Why I define it now
Recently, many people have suggested that I teach data science.
That sounded fun, but teaching data science involves defining it
enough that I can teach it, so now I give in and define it.

People are still going to use data science to mean whatever they want, but
there is a newly useful approach to quantitative research that comes up in
a lot of settings, and I suppose we could call that "data science".

## The mindset
I see data science as this mindset:

> Computing power and storage are cheap, so I'm going to exploit them to study how the world works.

This is also my mindset. I'm going to talk about all of the corollaries that
stem from my mindset, and I guess we'll say that that's data science.

### Anything can be quantified
Everything can be turned into a number, and these numbers can be put in tables.
By quantifying things, we simplify them such that a computer can process them.

To me, there is no big difference between "qualitative" and "quantitative" data
nor between "unstructured" and "structured" data because I know that I can convert
between these opposites.

### Boring work should be sent to robots
In general, I think that people should only do things that they want to do;
if something must be done and nobody wants to do it, a robot should do it.
I could come up with economic arguments for this, but this is almost an ethical view for me.

Within the context of data analysis, there are some much more practical reasons
for this. A typical boring task might be drawing a new graph every time some
dataset is updated. Here's why a robot should do it.

* A robot will do it with more consistency/accuracy than a human will.
* Robots (computers) are cheap; if we have a robot draw the graphs, we can
    draw way more graphs than if we had humans doing it.
* If the robot is well documented and runs free/libre/open-source software,
    we can understand exactly what it is doing.

To say this more explosively, I value laziness.



3. Data collection should be automatic and unobtrusive; questionnaires and lab
    studies are too much work.
4. You don't need a full-fleged research plan before you start collecting data;
    record everything that is convenient, and store it in the most raw form.
5. When asked a question about the world, adapt the question so that it can be
    answered with an existing and convenient dataset.

I think these points stem from the first point, the desire to learn how complex
systems work. If you want to do that and you are alive today, you might get
excited by the potential off the ease of collecting and storing quantitative
information, and the aspects above follow logically.

### The data mindset
If you have the aforementioned data mindset, the following are true.

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

## Other thoughts
Boring to robots 
(This presents some ethical issues

(I also see ergonomics as a mindset, so maybe any discipline is a mindset.)
