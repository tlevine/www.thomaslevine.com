---
title: How to make a personal website, in 9001 easy steps
---
Making your own personal website might seem daunting, but
it's not hard if you break it into smaller steps.

## Recording your works
Start recording everything worth recording. Write
it down, take video, or whatever. It doesn't matter how
you do it or how you organize things; just record things
while you still remember them, and store them in a place
you won't lose them. (Email attachments are perfectly
acceptable.)

Before I had a good system, I stored things in email
attachments, Google Docs, hard drives, Gitorious (git
repositories), Tumblr, SmugMug, S3, Twitter, Facebook,
and probably other places.

## Organizing your works
Nobody other than you is going to read your website once
you have it, at least at first, so don't worry about
designing it for other people. In fact, you don't even need
a website; just come up with some system that makes it
easy for you to find the things you've recorded. I'll
divide my approach to this into two categories.

* Making a list
* Organizing files into a standard structure

### Make a list
If you've been using email attachments to store your works,
you could just list the names of the works and search terms
that will find them. I actually didn't do this, but the point
is that it doesn't have to be fancy.

![Example]()

Most of my things were already publically accessible on the web,
so I mostly made a list of all of the links to them. I did this
as a [webpage](),
but you could do it in an email or blog post or whatever.

### Get them into files on a filesystem
For anything you have been storing as ordinary files, copy the
files into a new place with standard naming conventions.
I suggest the following structure.

    things-i-did/name-of-thing/file-about-thing

For example,

    things-i-did/middle-names/askcensus.eml
    things-i-did/middle-names/cornell_middle_names_by_school.png
    things-i-did/middle-names/us_middle_names_over_time_by_state.pdf
    things-i-did/middle-names/us_middle_names_over_time.png

Don't worry yet about writing the web page about it.


## Write about your stuff
You probably want to write a little something about each thing.
I wrote these descriptions all over the place, but a lot were
as captions on SmugMug. This was sort of a good idea, but only
because I was uploading lots of pictures to SmugMug. The point
is that you don't need to have a fancy website before you can
create content for the website.

## Make a simple website
The point was to make a website, so start putting stuff up
somewhere. I wound up with a list of links before I had nicely
structured files, so I just put that up. It went through
many incarnations, but here are a few.

* XXX
* XXX

If you have nicely structured files and no other list, you
could just dump them on a plain Apache web server,
like [this](http://chainsaw.thomaslevine.com/).

You know, I suspect there's even some fancy easy-to-use
drag-files-somewhere-and-have-them-magically-served thing.

## Make a fancy website with a static website generator
Lots of blog
software suggests a structure like this.

    /posts/this-cool-thing.html
    /posts/that-cool-thing.html

I went with a slightly different structure.

    /posts/this-cool-thing/index.html
    /posts/that-cool-thing/index.html

This structure is nice because it gives me a place to put more
than one file per page.

    /posts/this-cool-thing/index.html
    /posts/this-cool-thing/picture-of-thing.jpg
    /posts/that-cool-thing/index.html
    /posts/that-cool-thing/ugh-microsoft-word.docx
