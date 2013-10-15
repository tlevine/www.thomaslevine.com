---
title: Multiple meanings of the word "variable"
---
## Two meanings of "variable"

### Variable in an equation
If you ever took an algebra class, you'll think that
*x* in the following equation is a variable.

$$12 = x + 7$$

### Variable in a data table
As I've [explained prevously](/!/table-words), when I say "variable",
I'm usually talking about a column in a data table. That is, "variable"
is a synonym for "column".

This meaning of the word "variable" can be confusing if you were taught
a different meaning of "variable" in school. You might find it strange that
we use the word "variable" in two seemingly different ways. In fact,
I usually think of these as different meanings of the word "variable".

### Relatedness
It turns out that these two senses of "variable" are quite related.
In the current blog post, I hope to explain why we use the same word to
describe two concepts that seem sort of different.

## Models

<!-- How I chose the dataset

s <- read.csv('socrata.csv')
small <- subset(s, nrow > 100 & nrow < 200 & ncol < 10 & ncol.number > 3 & portal != 'opendata.socrata.com')
small[c('portal','id','name')]
-->

Once we have created a data table, we might decide to make a fancy equation that
explains how some values in the table are related to each other. We might call
this a *model*. It might be something like this.

$$Sunday ridership = Saturday ridership - 1 million people$$

In this model, Sunday ridership and Saturday ridership are
just numbers that we take from one row of the table.
To make that look more like what you might be used to, let's
rewrite it like this.

$$y = x - 1 million people$$

A model allows us to express complex things with more simply.
The model won't be exactly right, of course; it's just a model.
One way we can use a model is to make predictions. Typically we
write the equation such that the left side is the thing we are
predicting and the right side is the stuff we know.

### Making predictions
The last row in our data table is the observation for this year.
Note that we don't have a value for the "actual spending" column.
That's because we'll have to wait a few months before we see what
the government spends this year. We don't want to wait that long,
so let's use our model to predict it. We know *x*, so let's plug
that in.

<!-- maybe switch this for something simpler, like inmates in jail next month -->

$$y = 8 - 3 $$

When we have such an equation, we can plug in the values we know
and solve for the value on the left side.

## Conclusion
Let's get back to why these two senses of variable are the same
thing. One sense is a column in a table, and the other sense is
an unknown in an equation. A variable in the column sense is just
a lot of variables in the latter sense; we're solving the same
equation lots of times (as many times as we have rows), by
plugging in different values for the same unknows.

![Explanatory picture]()

## Ask more questions
...
