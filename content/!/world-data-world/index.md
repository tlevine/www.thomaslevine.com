---
title: World -> Data -> World
---
To me, it is common sense that data could be extracted from a pair
of pants and that that data could be converted into a slice of apple pie.
But for many (most?) people, it is not common sense. I think this is a
particularly important concept to convey if we want to teach data literacy
(or whatever you want to call it). So now I'll talk about some ways that
I teach this concept.

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
[Scott](http://scott.thomaslevine.com), my wetlands permit application monitoring thing.
The resulting diagram looks like this.



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
simpler.

/!/parsing-pdfs/

## Data -> World: CSV Soundsystem
This theme underlies much of [CSV Soundsystem](http://csvsoundsystem.com)'s work.
Most of us in CSV work in journalism, so it makes sense that we're always thinking
about how to make data into stories that are accessible to ordinary people.

### Music videos
For CSV Soundsystem, you're thinking the music videos?
http://www.youtube.com/watch?v=rLZDvXPIDa0
http://fms.csvsoundsystem.com
http://tlevine.github.io/multisensory-data-zipfian/transit.webm

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

