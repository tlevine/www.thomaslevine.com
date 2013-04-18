---
title: Assessed property values
---

[Jake](https://twitter.com/jbialer/) found me the Scarsdale Assessor's 
[roll](https://github.com/tlevine/scarsdale-data/blob/master/assessor/2012.pdf?raw=true).
It appears to contain the address, size and assessed values, among other
things, of all 5954 properties in Scarsdale. I pulled some information out and
had some fun.

I started by collecting the assessed values of the properties. I collected
the full market value, which is equivalent to the assessed value. (It's 
[not really]() the market value.)

I wanted to know what the general distribution of assessed values was like,
so I plotted a histogram.

![](<%= item.path %>total-assessed-simple.png)

The data were very positively skewed, so I plotted them on a log scale.

![](<%= item.path %>total-assessed-log.png)

The mound at the far-left is the 210 of 5954 properties that were assessed
at $0. (These are the properties in the wholly exempt section of the roll.)

I also collected the taxable portion of the assessed values for
county, village and school taxes for each property. These figures are in the
fourth (right-most) of the four columns, and their labels are in the third
of the four columns. These are all equal to or slightly less than the total
assessed value, the difference being tax exemptions.

In addition to these three taxes, each property has a sewer tax and a solid
waste tax. I skipped these for now because they're small.

Looking at variation in assessed value will give us an idea of the different
types of excemptions for each particular tax. Here's a plot of standard
deviation of taxable assessment by mean taxable assessment. It excludes
properties that had the same assessment for all three taxes.

![]()

The standard deviation is inherently correlated with the mean; so we should
expect this line to move right and up.

The first thing I notice is the two outliers on the top-right. It turns out
that these two points are apartment buildings and that they pay proportionately
less in school taxes.

Note also the horizontal bands of points. These bands show that properties of
very different assessed values have the same variation in the size of
excemptions. This might have even received the exact same size of excemption.
This indicates that excemptions are often given as flat reductions in the
effective assessed value rather than as proportions or based on some more
continuous equation.


