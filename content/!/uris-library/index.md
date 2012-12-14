---
title: Why don't people use this reading room?
short_title: Library reading room
created_at: 2012-01-18
kind: article
tags: ['ergonomics']
---

Library administration at Cornell University recognized that one library's
main reading room was always empty while the one across the street was always
full. Tal Gluck and I tried to figure out why.

![Picture of a library reading room](<%= @item.path %>room.jpg)

We established functions and user groups for this reading room and then
compared the library to other similar libraries. We conducted interviews with
members of different the user groups, observed the space several times, read
some relevant literature. Based on all this, we also composed a questionnaire
and distributed it to people in several Cornell libraries.

<!-- ![Line plot of number of people using kiosk computers over time between 3:50 and 4:50](kiosk.png) -->

We identified key environmental qualities that may be contributing to the
decreased use of the Dean Room. We also had some thoughts about how people use
libraries in general.

The full paper is [here](<%= @item.path %>poe.pdf).

All of the source code is on [Gitorious](http://gitorious.org/tlevine/dea2500).

    git clone git://gitorious.org/tlevine/dea2500.git

If you dare, take a look at the [questionnaire](<%= @item.path %>questionnaire.pdf) and its
[resulting data](<%= @item.path %>questionnaire-data.csv).
Here's a [summary](<%= @item.path %>questionnaire-summary.pdf) of the data.
