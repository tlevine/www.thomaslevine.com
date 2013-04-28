---
title: wsync
kind: article
created_at: 2013-04-28
---
I like to encapsulate the non-deterministic parts of data analysis systems,
particularly the acquisition of data from a remote server.
I prefer to use crude and robust methods for acquiring the data from
elsewhere and then to analyze everything deterministically based on the
local version of the data.

To that end, I have this awesome tiny script that I call
[`wsync`](https://github.com/tlevine/wsync). You use it like this.

    wsync http://thomaslevine.com/\!/wsync wsync html

`wsync` versions one file. The first time you run that command, `wsync` will
download the file, saves it with a datestamp and links a current version to
the datestamped version.

## What it does
If you've already run it, `wsync` downloads the file and checks for differences
between the it and the old file (referenced by the symlink). If the new file is
the same as the previous version, nothing new is saved. If the new file is
different, the new file is saved, with a datestamp, and the symlink is changed.

I typically use `wsync` with a cron job to download files into a git submodule
for a larger project. For example, in [Scott](http://scott.thomaslevine.com),
I [download](https://github.com/tlevine/scott/tree/master/reader/bin)
an [unreliable and dynamic webpage](https://github.com/tlevine/scott-listings)
periodically. In my [competing April 25 meetup analysis](/!/april-25-stats-talks/),
I use it to save historical RSVP statuses from Meetup groups.

## Moral of the story
`wsync` is a particular implementation of my data retrieval cache, in shell,
but I apply this approach more broadly, and I recommend that you do too if
you're periodically downloading the same file. This allows you to write
deterministic ("pure") data analyses, which are often more robust be easier to debug.
