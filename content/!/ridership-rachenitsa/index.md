---
title: The Ridership Rachenitsa
created_at: 2013-07-14
kind: article
description: A music video about the ridership of Chicago buses and New York subways
twitter_image: square.png
facebook_image: square.png
tags: ['sensing-data', 'music']
---
This is a music video about the ridership of Chicago buses and New York subways
for the past few years.

<video src="<%= @item.identifier %>transit.webm" controls width="100%"></video>

## Music
Each musical beat is a day, as is each vertical line. One musical instrument
represents the daily ridership of Chicago buses, and the other represens the daily
ridership of New York subways. (Both are measured at fare collection points.)

## Video
The vertical line on the graph also represents the daily ridership. It is colored
according to the city whose ridership was proportionately higher for that day.
The top of the line is the rate for the city with proportionately higher ridership,
and the bottom of the line is for the one with proportionately lower ridership.

Daily ridership is also represented by the white/grey ticks at the left and right
of the video. The brightest tick is for the present day, and the duller ticks are
for progressively earlier days going back seven days.

## Related
More music

* [CSV Soundsystem](http://csvsoundsystem.com)
* [FMS Symphony](http://fms.csvsoundsystem.com)

Why

* [Music videos in R](http://www.livestream.com/knerd/video?clipId=pla_a5d59285-9399-47dc-aaef-2b9a77142d5e)
* [Sensory data experiences](/!/sensory-data-experiences)

Software

* [Source code for the Ridership Rachenitsa](https://github.com/csv/transit-ridership)
* [Data-driven rhythms](https://github.com/csv/ddr)
