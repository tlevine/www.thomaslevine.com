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
the bottom the fancy interactive plot drawing thingy below. Next, we chose
some other number, represented by the big red bar that you can drag.

## Sums of shapes
For each number in our bunch (each tick mark), we could draw a line from the
number to the other number we chose (the red bar). Then we could draw a square
for each of these numbers with a side as long as the this line. (These squares
are represented by the squares in the plot thingy.) We could add up the areas
of all of these squares. People call that the *sum of squared error* or the
*sum of squares*.

Instead of adding up the squares, we could just add up the lines. People call
that the *sum of absolute errors*, but I like calling it the *sum of lines*.

Sometimes, these lines will have no length because the two numbers that form
the line (the tick mark and the red bar) are the same number. We could draw
a point for each tick mark whose value is not exactly the same as the red bar.
Then we could count how many points we have and call that the *sum of points*.

<div id="viz" style='width: 640px; margin-left: auto; margin-right: auto;'></div>
<small>
  Nota bene: The line and square at the bottom right are *proportional* to but
  *not equal* to the sums of lines and squares, respectively.
</small>
<script src="d3.v3.min.js" charset="utf-8"></script>
<script src="script.js"></script>

## Values of the other number that minimize the sums of shapes
If you play around with the plot above, you'll find one location of the red bar
that yields the smallest sum of squares. (The "Sum of squares" square at the
bottom-right will be smallest for this situation.) We call this location the *mean*.

You'll also find one spot or two adjacent spots that yield the smallest sum of
lines. We call this location the *median*.

And you'll find at least one spot with the smallest sum of points. (This spot
will have particularly few points in the "Sum of points" section at the
bottom-left.) We call this spot the *mode*.

## Extrapolating the distance measure
I see the sum of points as the zero-order distance measure, the sum of lines
as the one-order distance measure and sum of squares as the two-order distance
measure. A general distance measure that includes all of these is the
sum of n-dimensional volumes (Is there a better word for that?) of the
n-dimensional hypercubes. Said more concisely,

$$Distance_n=\sum_i |x_i - c|^n$$

where each *i* corresponds to an observation (represented above by tick marks),
*n* is the number of dimensions, and *c* represents that other number (represented
above by the red bar).

### Sum of squares
The sum of squares is thus this.

$$Distance_2=\sum_i |x_i - c|^2$$

And the value of *c* that minimizes $$Distance_2$$ is the *mean*.

### Sum of lines
The sum of lines is this.

$$Distance_1=\sum_i |x_i - c|^1$$

And the value of *c* that minimizes $$Distance_1$$ is the *median*.

### Sum of points
To make this work with the zero-order distance, let's define $$0^0$$ to equal 0.
The sum of lines is this.

$$Distance_0=\sum_i |x_i - c|^0$$

And the value of *c* that minimizes $$Distance_1$$ is the *mode*.

## Center points for higher-power distance measures
