---
title: Higher-power error statistics
description: The mode minimizes the sum of points, the median minimizes the sum of lines, and the mean minimizes the sum of squares. What about the sum of cubes, and so on?
facebook_image: screenshot.png
twitter_image: screenshot.png
tags: ['doodles']
kind: article
created_at: 2013-08-04
tweet_text: Is there a name for higher-power error statistics (beyond mode, median and mean)?
facebook_text: Is there a name for higher-power error statistics (beyond mode, median and mean)?
---
Let's say we have a bunch of numbers, represented by the tick marks towards
the bottom the fancy interactive chart drawing thingy below. Next, we chose
some other number, represented by the big red bar that you can drag.

## Sums of shapes
For each number in our bunch (each tick mark), we could draw a line from the
number to the other number we chose (the red bar). Then we could draw a square
for each of these numbers with a side as long as the this line. (These squares
are represented by the squares in the chart thingy.) We could add up the areas
of all of these squares. People call that the *sum of squared error* or the
*sum of squares*.

Instead of adding up the squares, we could just add up the lines. People call
that the *sum of absolute errors*, but I like calling it the *sum of lines*.


## Values of the other number that minimize the sums of shapes

<div id="viz" style='width: 640px; margin-left: auto; margin-right: auto;'></div>
<small>
  Nota bene: The line and square at the bottom right are *proportional* to but
  *not equal* to the sums of lines and squares, respectively.
</small>

<script src="d3.v3.min.js" charset="utf-8"></script>
<script src="script.js"></script>
