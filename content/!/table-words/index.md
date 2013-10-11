---
title: What's in a table?
tags: ['datakind']
---
## "Data" means "table"
I don't really like to distinguish between data and anything else
because [everything is data to me](/!/world-data-world). But I sort
of do make a distinction, and here it is.

> Data are things in data tables

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

Recall that data tables describe collections of things. A  *column* is a list
of values where the different values all describe the same aspect of different
things.

![The same handwritten data table, but with a column of the table highlighted]()

Columns are also called *variables*, 

## Lists
Earlier, I said that a column is a special list of values. We could also say

 (Actually, people might say *vector* instead of *list*, but they mean
pretty much the same thing.)

### You can't switch them
You could make a data table where rows are variables and columns are records,
but hardly anyone does that, and I get confused when people do.

## Schemas and formats


## Review

* A **foo** is a bar baz.
