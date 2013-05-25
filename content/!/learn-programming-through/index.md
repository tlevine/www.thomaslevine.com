---
title: Learn Computers Through ______
tags: ['computer']
created_at: 2012-08-09
kind: article
---
Some people write software to solve annoyances in their everyday lives. Here
are some such annoyances.

* [Collaborating on music](http://en.wikipedia.org/wiki/SoundCloud#History)
* [Forgetting a USB drive](http://en.wikipedia.org/wiki/Dropbox_(service)#History)
* [Making complex HTTP requests in Python](http://python-requests.org)

I do the same. But once I learn all of the technical stuff about how to make
the thing that solves the annoyance, I normally don't need to write anything
more than a configuration file. Some recent examples

* I was using Gmail. Ugh. Now, my email is hosted by [Gandi](http://gandi.net),
    downloaded by [offlineimap](http://offlineimap.org), searched by
    [notmuch](http://notmuchmail.org), composed and read Gandi-hosted
    [Roundcube](http://roundcube.net/)
    <!--with [mutt]() or [roundcube]() and backed up on [Tarsnap]().-->
* I make a lot of Git repositories. Some of them contain secrets. I could host
    them on Gitorious, Bitbucket, GitHub, &c., but creating repositories on
    these sites is annoying ([Hub](http://defunkt.io/hub/) helps though.), and
    private ones are expensive. So I installed
    [cgit](http://hjemli.net/git/cgit/), configured the web server to do some
    authentication and wrote a tiny script for creating the repositories. See
    my configuration on [a cgit server](http://git.thomaslevine.com) or on
    [GitHub](https://github.com/tlevine/treegit).
* Connecting Python with SQLite is annoying, so I wrote
    [DumpTruck](http://www.dumptruck.io). But now that I know enough about
    SQLite, partly from writing DumpTruck, I can use SQLite directly just fine.

I suspect that solving everyday problems provides motivation for learning to
program. With this mindset, I avoid learning things until I want to fix
something, and I'm fine with not learning things that people say I should
learn if I don't feel like learning them. But I do pick up the general
approaches and existing methods of doing various things, so I wind up
learning/doing them quickly when I feel like doing them.

I often suggest that data format conversion scripts are good projects for
people who want to learn to program. I like them because it is clear what they
do and because simple ones can still be helpful. But I generally neglect to
mention the more fundamental aspect of data format conversion being an everyday
problem for some people, specifically the sort of people that I tend to hang
around.

I want to try teaching people computers/programming through other annoyances.
This might be maintaining a calendar, writing papers or saving photographs.
(These things annoyed me, so I've come up with nerdy solutions to them.)
If you have some annoying repetitive task (not necessarily one that involves
a computer) and want to learn more about computers/programming in order to
make it less annoying, talk to me.
