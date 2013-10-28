---
title: World -> Data -> World
tags: ['sensing-data']
---
To me, it is common sense that data could be extracted from a pair
of pants and that that data could be converted into a slice of apple pie.
But for many people, it is not common sense. I think that people need
to get this concept before they can understand how we use data to
influence our world, and I've been teaching this concept in a few different ways.

I break this article into three major sections.

1. What I mean by "data", and why we want them
2. How to teach that we can extract data from anything
3. How to teach that we can convert data into anything

## What data are, and why we want them
People use the word "data" to mean everything, so I never really know
what people mean when they're talking about it. For the purposes of the
present article, I'm considering data to be a collection of things,
where each thing is represented in some digital, quantified, or
structured form. I typically think of this as tables, with each column
being a variable and each row being a different thing in the collection.

Regardless of whether you think of this as a table, this representation
is helpful because much of our quantitative methods expect inputs in this
form. Once we express the world in this form, we can apply any of our
quantitative methods (statistics, machine learning, modelling, whatever
you want to call them) and discover things that would have been hard to
discover without the help of math and computers.

## World -> Data: We can extract data from anything
We can collect information from the world and convert it into data.
This tends to come to people more easily. The main point here is to
recognize that people already do things like this, though the result
is not always so precise and concrete as a dataset. I teach this
step of data extraction by gradually switching human processes to
digital, data-based processes.

### Architecture
When people ask me to teach web scraping,
they expect me to tell them what Python code to write to pull the
numbers out of the web page. If I have time, I get to that, but I
start by breaking down the process by which a human would collect the
data.

It's best to do this with a process that the learners already
know well, especially if they already want to convert it to a more
automated process. But if the students don't have a good example, I use
[Scott](https://github.com/tlevine/scott), my wetlands permit application
monitoring system.

We walk through it as a human process and draw a diagram.
In the case of Scott, the resulting diagram looks like this.

> If you are reading this, tell me to add the diagram.

Then we start converting it to a computerized process. We do this by
slightly and gradually changing the diagram. The structure of the diagram
stays exactly the same because the digital process mirrors the human process;
the only difference is the labels of the different steps within the process.
For example, "send a courier to pick up the letter" becomes "download the file
from the website".

> Another diagram

Because the structure isn't changing at all, we can also move only part of
the process over, and this is how things work in real life. When something
is necessary but unpleasant, we start with the parts that lead to large
improvements with little effort. In the example above, a good place to start
is switching the courier's daily trip for a program that runs every day and
checks for new files.

The main point in all of this is that data extraction is not magical. Instead,
we are just mirroring a human process in computer code and being much more
explicit about what we are observing during the process.

### Choosing what information to extract
Sometimes, people conduct complex analyses based on disparate sources of
information and draw complex conclusions. This analytical process is a
little harder to break down, but it is still a human process that we can
mirror with a computer.

In the case of public notices related to development on wetlands, one
important conclusion to draw is whether to submit a comment on the letter
that discourages the proposed development.

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

More recently, I made one about transit ridership in Chicago and New York.

<video width="100%" src="/!/ridership-rachenitsa/transit.webm"></video>

And here's a show we played.

<iframe src="//player.vimeo.com/video/76190871" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/76190871">csv soundsystem at Codame</a> from <a href="http://vimeo.com/lamthuyvo">Lam Thuy Vo</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

We have some tools for making these music videos

* [data-driven rhythms](https://github.com/csv/ddr)
* [scripts to concatenate R plots](https://github.com/csv/transit-ridership/blob/master/merge.sh)

### Data gastronomification
We also started getting into data gastronomification, that is,
turning data into food.

* [gastronomify](https://github.com/csv/gastronomify) R package
* [a video](http://www.youtube.com/watch?v=3CiDW7NVa8o) about it
* [data cookies](https://twitter.com/internetrebecca/status/352955293291913217)

### Data-driven prose and poetry
Other people in CSV are quite into Twitter bots and into finding
unintentional haikus. Check out our [TreasuryIO](http://twitter.com/TreasuryIO) bot!

## Conclusion
