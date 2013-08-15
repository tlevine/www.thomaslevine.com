---
title: I reluctantly define data science
---

## Motivation

### Why I resisted defining data science
I've been resisting using and defining the term "data science".
Such words make me cringe for two main reasons.

1. I don't like words in general, especially nouns; they are too
    simplifying, so you need a lot of them to convey much meaning.
2. People want to be doing sexy things like data science, so everyone
    says he's a data scientist, and this makes the word more meaningless.

These problems aren't at all specific to data science; it's the same
with any sexy field.

### Why I define it now
Recently, many people have suggested that I teach data science.
That sounded fun, but teaching data science involves defining it
enough that I can teach it, so now I give in and define it.

People are still going to use data science to mean whatever they want, but
there is a newly useful approach to quantitative research that comes up in
a lot of settings, and I suppose we could call that "data science".

## The mindset
I see data science as this mindset:

> I want to study how the world works.
> Also, computing power and storage are cheap.
> So I'm going to exploit the cheap computers to study how the world works.

This is also my mindset. I'm going to talk about all of the corollaries that
stem from my mindset, and I guess we'll say that that's data science.

### Store everything
Storage is cheap, so you should store everything that is easy to collect.
Store it in the most raw form that is convenient, and don't worry very
much about how or even whether you're going to analyze it.

### Anything can be quantified
Everything can be turned into a number, and these numbers can be put in tables.
By quantifying things, we simplify them such that a computer can process them.

To me, there is no big difference between "qualitative" and "quantitative" data
nor between "unstructured" and "structured" data because I know that I can convert
between these opposites.

Read more about this [here](/!/world-data-world).

### Boring work should be sent to robots
In general, I think that people should only do things that they want to do;
if something must be done and nobody wants to do it, a robot should do it.
I could come up with economic arguments for this, but this is almost an ethical view for me.

Within the context of data analysis, there are some much more practical reasons
for this. A typical boring task might be drawing a new graph every time some
dataset is updated. A robot will do this with substantially more
consistency/accuracy and for a substantially lower cost.

So here are some mindsets that follow from the aforementioned data science mindset.

* Data collection should be automatic and unobtrusive; questionnaires and lab
    studies are too much work.
* I don't need a full-fleged research plan before you start collecting data;
    I'll record everything that is convenient, and I'll store it in the most raw form.
* All analyses should be scripted.

To say this more explosively, I value laziness.

### Focus on connecting datasets rather than on tuning models
In a conventional statistics class, you'll learn a lot about how to choose
analysis methods that are appropriate for your data collection approach and how
to tune the models for a specific dataset. That way of thinking is not new.

Here's the new thing. Now that we have hoards of inexpensive data, it's not
worth worrying so much about making the best use out of one dataset; it's better
to use a range of datasets, and especially to connect one dataset to lots of
other datasets. To use machine learning speak, you should focus more on collecting
features rather than on tuning your model.

Relating this to the earlier point that you should store everything, here are
some of my mindsets that follow from the original mindset.

* When I'm asked a question about the world, I adapt the question so that it can
    be approximately answered with an existing and convenient dataset.
* I look for opportunities to use existing stores of data in unintended ways.

## Tools
I think these points stem from the first point, the desire to learn how complex
systems work. If you want to do that and you are alive today, you might get
excited by the potential off the ease of collecting and storing quantitative
information, and the aspects above follow logically.


## Other thoughts
Boring to robots 
(This presents some ethical issues

(I also see ergonomics as a mindset, so maybe any discipline is a mindset.)
