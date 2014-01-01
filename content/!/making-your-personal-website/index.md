---
title: How to make a personal website, in 9001 easy steps
tweet_text: Here's the lazy proces I went through for making my fancy website.
description: Making your own personal website might seem daunting, but it's not hard if you break it into smaller steps.
twitter_description: Because New Years resolutions are a thing
kind: article
created_at: 2014-01-01
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
a CouchDB, and in a 60-page book written in $$LaTeX$$.
I probably used other places too.

I was somewhat inspired by [The Dump](http://www.the-dump.net/).

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

Most of my things were already publically accessible on the web,
so I mostly made a list of all of the links to them. I did this
as a [webpage](https://github.com/tlevine/www.thomaslevine.com/blob/c1e1302b2fe43bbe98902a08367bb4d01feea66e/content/index.html),
but you could do it in an email or blog post or whatever.

## Write about your stuff
You probably want to write a little something about each thing.
At the very least, you might want to give them titles.

I wrote these descriptions all over the place, but a lot were
as captions on SmugMug. This was sort of a good idea, but only
because I was uploading lots of pictures to SmugMug. The point
is that you don't need to have a fancy website before you can
create content for the website.

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

[Here](https://github.com/tlevine/thomaslevine.com/tree/master/hack/blog)'s
me putting the things into directories before I was using my current
website-generator system.

## Make a simple website
The point was to make a website, so start putting stuff up
somewhere. I wound up with a list of links before I had nicely
structured files, so I just put that up. It went through
many incarnations, but here are a few.

* SmugMug photo gallery thing
* A bunch of files that I edited manually
* Pages generated from that 60-page $$LaTeX$$ book with
    [HeVeA](http://hevea.inria.fr/) and a hacky shell script

If you have nicely structured files and no other list, you
could just dump them on a plain Apache web server,
like [this](http://chainsaw.thomaslevine.com/).
I suspect there's even some fancy easy-to-use
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

## My particular website
You probably want a website that isn't exactly like mine, but it
might be worth explaining how my website works right now.

### Copying it
You are welcome to base your website on mine; the source code
is [here](https://github.com/tlevine/www.thomaslevine.com).
That said, the process for editing it is designed very specifically
for me and is not very well documented, so you might not like it.

If you want to use it, start by keeping all of the logic the same
and just changing things in the `content/!` directory and in the
`content/index.haml` file. Get something working, and worry later
about making it look pretty.

### Notable featurues
If you don't want to use it, you still might take some inspiration
from some of the decisions I made

#### Static website generator
My website doesn't have anything where people log in or upload files
or otherwise send input to the server. Thus, I can serve my website
as ordinary files.

Editing these files is annoying, so I use a static website generator that writes these files based on the simpler and less-annoying files
with which I configure my website. I happen to use
[nanoc](http://nanoc.ws/), but there are tons of them.

#### Git
It scares me to edit things without tracking their history. I settled
a few years ago on using [Git](http://git-scm.com) for this, so that's
what I use for versioning the all of the content on my website.
(The distinction isn't always clear, but I'm right now making a
distinction between content and logic.)

When I build the site with nanoc, the resulting files go into the
`output` directory, and then I upload them to a static file hosting
service (more on that later).

This `output` directory is a
[git submodule](http://git-scm.com/book/en/Git-Tools-Submodules)
with just the resulting website. This is cool in case I ever can't
get nanoc working in the future; even if I can't rebuild the site,
I'll be able to see what old versions looked like.

#### Git remotes
It also scares me to edit things without having multiple backups on
different continents, so I have Git remotes. I used to use Gitorious,
and I still have my own server that I push things to, but I wind up
using GitHub a lot of the time. It works decently and isn't annoying
once you've set things up the first time, but I don't like this
because it's proprietary

#### GitHub Pages
If you already have everything in Git and you've already given in to
proprietary GitHub software, you might as well use GitHub Pages to
host your website. GitHub Pages serves a website from files committed
to a Git repository.

Recall that the compiled website goes into the `output` directory and
that this directory is a git submodule. I push that submodule to
GitHub, and it gets served through GitHub Pages.

I must point out that there are some things I don't like about GitHub
Pages. First, as I said above, it's proprietary. Second, I can't serve
different pages depending on the
[Accept-Language header](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).

#### Directory structure
I went with this directory structure for pages.

    /!/this-cool-thing/index.html
    /!/that-cool-thing/index.html

This results in two pages, one at
`http://thomaslevine.com/!/this-cool-thing`,
and the other at
`http://thomaslevine.com/!/that-cool-thing`.

This structure is nice because it gives me a place to put more
than one file per page.

    /!/this-cool-thing/index.html
    /!/this-cool-thing/picture-of-thing.jpg
    /!/that-cool-thing/index.html
    /!/that-cool-thing/ugh-microsoft-word.docx

### Remember, you might be different
I just explained how my site works, but you are probably not a clone
of me. Starting with my ideas might not be a bad idea, but try to come
up with something that suits you better.

## Review
Making your personal website might seem daunting, but it's easy if you
break it into tiny pieces. Start by saving everything. Once you have
a lot of things, organize them, and write about them. Don't worry very
much at first about making the website pretty; just get things started.
And in designing your website, focus on making it easy for you to add
content rather than on making it pleasant for other people to view.
