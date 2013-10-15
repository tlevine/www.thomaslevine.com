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
Once we have created a data table, we might decide to make a fancy equation that
explains how some values in the table are related to each other. We might call
this a *model*.

Here's part of a data table about the wealth and health of nations.

Year | Country | Life expectancy (years) | Income Per Person
---- | ------- | ----------------------- | -----------------
2013 | United States                | 79 | $41,678
2013 | Ukraine                      | 68 |  $6,390
2013 | Ethiopia                     | 63 |    $959

What we're calling "income per person" is technically gross-domestic product per
capita, adjusted for purchasing power parity and inflation. But don't worry about
that if it sounds like Greek.

Here's a fancy [graph](http://www.gapminder.org/world/#$majorMode=chart$is;shi=t;ly=2003;lb=f;il=t;fs=11;al=30;stl=t;st=t;nsl=t;se=t$wst;tts=C$ts;sp=5.59290322580644;ti=2012$zpv;v=0$inc_x;mmid=XCOORDS;iid=phAwcNAVuyj1jiMAkmq1iMg;by=ind$inc_y;mmid=YCOORDS;iid=phAwcNAVuyj2tPLxKvvnNPA;by=ind$inc_s;uniValue=8.21;iid=phAwcNAVuyj0XOoBL_n5tAQ;by=ind$inc_c;uniValue=255;gid=CATID0;by=grp$map_x;scale=log;dataMin=283;dataMax=110808$map_y;scale=lin;dataMin=18;dataMax=87$map_s;sma=49;smi=2.65$cd;bd=0$inds=;example=75)
of the data.

And here's a model that describes those data.

$$Life expectancy = Income per person$$

In this model, life expectency and income per person
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
