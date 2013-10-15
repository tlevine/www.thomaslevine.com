---
title: What's in a table?
tags: ['datakind']
---
## "Data" means "table"
I don't really like to distinguish between data and anything else
because [everything is data to me](/!/world-data-world). But I sort
of do make a distinction, and here it is: Data are things in data tables.

Once we express the world in data tables, we can study it with a
wide body of analytical tools that expect data to be in tables.
When we work with tables so much, we come up with lots of fancy
words to describe all of the different parts of a table.

## Rows and columns
Here's a data table.

![A handwritten data table]()

It has a grid with a value in each of the rectangular boxes.
Being this sort of grid, it has columns and rows. These columns
and rows mean special things.

### Rows
The very first line in that table says "id, location, ...".
This line is called the "header", and we'll get to that later.

The rest of the lines are all *rows*.
A data table represents a collection of things, and each individual
thing is represented as a row. For example, this table is about a
collection of XXX, so each row is a XXX.

![The same handwritten data table, but with a row of the table highlighted]()

It is quite important to know that each row is a XXX, so we have a
name for this relationship; we say that XXX is the the *statistical unit*
in this data table.

**Synonyms**: Rows are also called *records*

### Columns
In this data table, we have recorded a bunch of information about
each XXX. More precisely, we have recorded the same sorts of information
about each XXX. For example, the first box in each row contains the YYY
for that XXX, and the second box in each row contains the ZZZ for the XXX.

Thus, all of the values in a given column are about the same sort of thing.
For example, the second column contains all of the ZZZs. We usually indicate
this in the header line; we know that the second column contains ZZZs because
the box at the top of the column says "ZZZ".

![The same handwritten data table, but with a column of the table highlighted]()

**Synonyms**: Columns are also called *variables* and *features*. These words
sound very fancy, but they're not; when a data scientist says "variable" or
"feature", he's just using a fancy word for "column".

#### Another meaning of "variable"
This meaning of the word "variable" can be confusing if you were taught a different
meaning of "variable" in school. If you are used to this meaning, you'll think that
*x* in the following equation is a variable.

$$12 = x + 7$$

I usually think of these as different meanings of the word "variable",
but it turns out that these two senses of "variable" are quite related.
The next paragraph explains how they are related. This relationship usually
confuses me, so it might confuse you. If it does, just ignore the next paragraph
and go on.

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

Let's get back to why these two senses of variable are the same
thing. One sense is a column in a table, and the other sense is
an unknown in an equation. A variable in the column sense is just
a lot of variables in the latter sense; we're solving the same
equation lots of times (as many times as we have rows), by
plugging in different values for the same unknows.

![Explanatory picture]()

### You can't switch them
You could make a data table where rows are variables and columns are records,
but hardly anyone does that, and I get confused when people do.


## Review

* A **foo** is a bar baz.

## Ask questions!

Data science has lots of words and concepts that often sound fancier
than they really are. What should I tell you about next?
