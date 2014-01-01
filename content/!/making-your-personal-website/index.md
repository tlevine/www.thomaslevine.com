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

## Make a fancy website
By now, you have a lot of nicely organized content on the web.
This is still not quite what you want; the following things
could be improved.

* You want it to be easy for you to add new material to the
    website.
* You want the website to look pretty.

Now that you have a bunch of content, you can play around with
a few different ways of accomplishing that. There are all sorts
of things that you can do. Here are two main things to think about.

### How do you like to add new content?
I like working with ordinary files, so I make new webpages by
making new files inside of a terminal. But you might prefer to
use a word processor on a website or to take videos with your phone.

### How can you make this whole system easy to manage?
Lots of
things could go wrong when things get fancy like this. Pay attention
to things that seem annoying, and come up with ways around this.
Annoying things might include

* Maintaining whatever server you have
* The process for uploading new files to the site
* Having the appropriate software to edit your site

Try to keep this fancy system simple. When it has to be complicated,
let the complicated things be either things you already understand
well or things that you'll learn quickly.

## Copy my website if you like
I've put some thought in my website, so it might be useful to you.

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

You are welcome to base your website on mine; the source code
is [here]().
You can even keep all of the logic the same and just change
things in the `content/!` directory and in the `content/index.haml`
file. Get something working, and worry later about making it look
pretty.
