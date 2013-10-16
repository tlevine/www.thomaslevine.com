---
title: What's in a table?
tags: ['datakind']
---
<style>
#row tbody tr:nth-of-type(odd),
#column tbody tr td:nth-of-type(3n)
{
  background-color: white;
}
</style>

## "Data" means "table"
I don't really like to distinguish between data and anything else
because [everything is data to me](/!/world-data-world). But I sort
of do make a distinction, and here it is: Data are things in data tables.

Once we express the world in data tables, we can study it with a
wide body of analytical tools that expect data to be in tables.
When we work with tables so much, we come up with lots of fancy
words to describe all of the different parts of a table.

## Rows and columns
Here's a data table about the wealth and health of nations.

Country | Life expectancy (years) | Income Per Person
------- | ----------------------- | -----------------
United States                | 79 | $41,678
Ukraine                      | 68 |  $6,390
Ethiopia                     | 63 |    $959

It has a grid with a value in each of the rectangular boxes.
Being this sort of grid, it has columns and rows. These columns
and rows mean special things.

*What we're calling "income per person" is technically gross-domestic product per
capita, adjusted for purchasing power parity and inflation. But don't worry about
that if it sounds like Greek.*

### Rows
The very first line in that table says "id, location, ...".
This line is called the "header", and we'll get to that later.

The rest of the lines are all *rows*.
A data table represents a collection of things, and each individual
thing is represented as a row. For example, this table is about a
collection of countries, so each row is a country.

Country | Life expectancy (years) | Income Per Person
------- | ----------------------- | -----------------
United States                | 79 | $41,678
Ukraine                      | 68 |  $6,390
Ethiopia                     | 63 |    $959
{:#row}

It is quite important to know that each row is a XXX, so we have a
name for this relationship; we say that XXX is the the *statistical unit*
in this data table.

**Synonyms**: Rows are also called *records*, *observations*, *trials*
and probably a bunch of other things.

### Columns
In this data table, we have recorded a bunch of information about
each the wealth and health of nations. More precisely, we have recorded
the same sorts of information about each country during the year 2012.
The first box in each row contains the name of that country,
and the second box contains the life expectancy for that country,
and the third contains the income per person.

Thus, all of the values in a given column are about the same sort of thing.
For example, the second column contains all of the ZZZs. We usually indicate
this in the header line; we know that the second column contains ZZZs because
the box at the top of the column says "ZZZ".

Country | Life expectancy (years) | Income Per Person
------- | ----------------------- | -----------------
United States                | 79 | $41,678
Ukraine                      | 68 |  $6,390
Ethiopia                     | 63 |    $959
{:#column}

**Synonyms**: Columns are also called *variables* and *features*. These words
sound very fancy, but they're not; when a data scientist says "variable" or
"feature", she's just using a fancy word for "column".

### You can't switch them
You could make a data table where rows are variables and columns are records,
but hardly anyone does that, and I get confused when people do.

![Funny drawing]()

## Review

* A **foo** is a bar baz.

## Ask questions!

Data science has lots of words and concepts that often sound fancier
than they really are. What should I tell you about next?
