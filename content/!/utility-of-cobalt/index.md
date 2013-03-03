---
title: Utlity of Cobalt
tags: ['computer']
kind: article
created_at: 2013-05-05
relationships: ['scraperwiki']
---

x.scraperwiki.com uses a new infrastructure for running scripts. We call it
[Cobalt](https://github.com/scraperwiki/cobalt).

It gives you HTTP APIs for creating computer boxes, running code inside them
and querying SQLite databases stored inside them. It also gives you a static
web server running on the box. We've been using it to run custom scripts for
our data services.

Setting up a project use Cobalt takes a minute, and figuring out how to use
Cobalt the first time takes a few minutes, so tiny projects might be better
off not using Cobalt. (I don't use Cobalt for most things.)

Making a Cobalt box is like making a virtual server, so it is sort of nice if
you want access to GNU/Linux without running it on your main computer or if
maintaining these services seems like too much work. But I still think it isn't
great for tiny, simple projects.

But if it's not that hard for you to set up a static web server and a database
API and whatnot, it's not that helpful that Cobalt has them. Loads of different
tools can already accomplish most of these components, so there's probably an
easier way to set up a simple project than using Cobalt.

![Manually drawn line plot of 'Utility of Cobalt' as a function of 'Project Complexity'](<%= @item.identifier %>doodle.png)

The benefit of Cobalt comes in encapsulating different projects into different
computers and in standardizing the ways that different people do things.
Consider complexity to include the number of people working on the project and
to include any reasonable measure of code/architecture complexity, then look
at the doodle above.

If you have more than one person working on one project, it is nice to have
a standard way of doing things and a place to put everything. You could come
up with your own standards, but if Cobalt's standards work for you, you might
as well use that. We know that the data will be in SQLite, that we can query
it through the web in a particular way, that they are in a particular computer
&c. That's still not that interesting, though, because there are other ways to
standardize things.

If you have more than one person working on one project, it is also nice not
to have to trust other people's code. Rather than someone else's code on my
computer, I can run it on the box. The box contains nothing but the project,
so I don't have to worry about it breaking anything else. When projects involve
many different teams of people, you also might want to separate your project
across multiple boxes, one box per team. The standard Cobalt interfaces make
this a bit easier.
