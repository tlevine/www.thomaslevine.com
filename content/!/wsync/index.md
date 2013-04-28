---
title: wsync
kind: article
created_at: 2013-04-28
---
I like to encapsulate the non-deterministic parts of data analysis systems.
For me, a main part of this is the retrieval of data from sources other than
the filesystem, like websites. I prefer to use crude and robust methods for
acquiring the data from elsewhere and then to analyze everything
deterministically based on the local version of the data.

To that end, I have this awesome tiny script that I call
[`wsync`](https://github.com/tlevine/wsync). You use it like this.

    wsync http://thomaslevine.com/\!/wsync wsync html

I typically use `wsync` with a cron job to download files into a git submodule
for a larger project. For example, in [Scott](http://scott.thomaslevine.com),
I [download](https://github.com/tlevine/scott/tree/master/reader/bin)
an [unreliable and dynamic webpage](https://github.com/tlevine/scott-listings)
periodically. In my [competing April 25 meetup analysis](/!/april-25-stats-talks/),
I use it to save historical RSVP statuses from Meetup groups.
