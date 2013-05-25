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

![Histogram from $0 to $2,000,000 with one bin far towards the left](<%= item.path %>total-assessed-simple.png)

The data were very positively skewed, so I plotted them on a log scale.

![Histogram on a log scale with several bins, peaking around $100,000](<%= item.path %>total-assessed-log.png)

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

![Scatterplot of standard deviation of different taxes by mean tax, each point being a house](<%= item.path %>apartments.png)

We find the standard deviation correlated with the mean; this makes sense
because they're both indicators of the scale of the assessment; as the mean
tax rate for a house increases, we should expect the standard deviation of
tax rates across government divisions to increase. And this is what we find.

The main thing I notice in this plot, however, is the two outliers on the
top-right. It turns out that these two points are apartment buildings and
that they pay proportionately less in school taxes.

Note also the horizontal bands of points. These bands show that properties of
very different assessed values have the same variation in the size of
excemptions. This might have even received the exact same size of excemption.
This indicates that excemptions are often given as flat reductions in the
effective assessed value rather than as proportions or based on some more
continuous equation.

For example, 2358 properties have a standard deviation of village, county
and school taxes of about $1057. I randomly sampled ten of these.

 county | village |  school
------- | ------- | -------
$15,000 | $15,000 | $13,170
$15,800 | $15,800 | $13,970
$28,150 | $28,150 | $26,320
$28,150 | $28,150 | $26,320
$18,975 | $18,975 | $17,145
$19,850 | $19,850 | $18,020
$22,700 | $22,700 | $20,870
$19,450 | $19,450 | $17,620
$21,200 | $21,200 | $19,370
$20,500 | $20,500 | $18,670

I never extracted the address or any other convenient identifier, so I looked
for a few of these properties in the roll just based on the tax rates.
