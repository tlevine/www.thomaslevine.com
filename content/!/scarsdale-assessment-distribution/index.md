---
title: Assessed property values
created_at: 2013-05-25
kind: article
---

[Jake](https://twitter.com/jbialer/) found me the Scarsdale Assessor's 
[roll](https://github.com/tlevine/scarsdale-data/blob/master/assessor/2012.pdf?raw=true).
It appears to contain the address, size and assessed values, among other
things, of all 5,954 properties in Scarsdale. I pulled some information out and
had some fun.

I started by collecting the assessed values of the properties. I collected
the full market value, which is equivalent to the assessed value. (It's 
not really the market value.)

## Overview
I wanted to know what the general distribution of assessed values was like,
so I plotted a histogram.

![Histogram from $0 to $2,000,000 with one bin far towards the left](<%= item.identifier %>total-assessed-simple.png)

The data were very positively skewed, so I plotted them on a log scale.

![Histogram on a log scale with several bins, peaking around $100,000](<%= item.identifier %>total-assessed-log.png)

The mound at the far-left is the 210 of 5954 properties that were assessed
at $0. (These are the properties in the wholly exempt section of the roll.)

I also collected the taxable portion of the assessed values for
county, village and school taxes for each property. These figures are in the
fourth (right-most) of the four columns, and their labels are in the third
of the four columns. These are all equal to or slightly less than the total
assessed value, the difference being tax exemptions.

In addition to these three taxes, each property has a sewer tax and a solid
waste tax. I skipped these for now because they're small.

## Apartments
Looking at variation in assessed value will give us an idea of the different
types of exemptions for each particular tax. Here's a plot of standard
deviation of taxable assessment by mean taxable assessment. It excludes
properties that had the same assessment for all three taxes.

![Scatterplot of standard deviation of different taxes by mean tax, each point being a house](<%= item.identifier %>apartments.png)

We find the standard deviation correlated with the mean; this makes sense
because they're both indicators of the scale of the assessment; as the mean
tax rate for a house increases, we should expect the standard deviation of
tax rates across government divisions to increase. And this is what we find.

The main thing I notice in this plot, however, is the two outliers on the
top-right. It turns out that these two points are apartment buildings and
that they pay proportionately less in school taxes.

## Common exemptions
Note also the horizontal bands of points. These bands show that properties of
very different assessed values have the same variation in the size of
exemptions. This might have even received the exact same size of exemptions.
This indicates that exemptions are often given as flat reductions in the
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

In all of these cases, the county and village taxes are the same, and the
school tax is $1,830 less than the county and village taxes.

I never extracted the address or any other convenient identifier, so I looked
for a few of these properties in the roll just based on the tax rates.

The first record seems to correspond to the Wabecks (page 608 of the roll).

<img alt="Record in the roll for the Wabecks"
     src="<%= item.identifier %>wabeck.png"
     class="wide" />

They, like many others, have the `41854 RES STAR` exemption code. Here are a
couple other records with different exemption codes (from page 685).

<img alt="Two records in the roll"
     src="<%= item.identifier %>685.png"
     class="wide" />

The first record has both the `41854 RES STAR` exemption and the
`41121 WAR VET` exemption. The `41854 RES STAR` exemption seems to deduct
$1,830 from the school taxes, as we found above. The `41121 WAR VET`
exemption seems to deduct $1,010 from the county and village taxes.

The second record has no exemptions, so the assessed value equals the
taxable values.

If you look in the last few pages of the roll, you'll see summaries of these
various exemptions. It turns out that `41854 RES STAR` is a pretty common
exemption.

Curious as to what that stood for, I looked around a bit.
[New York](http://www.tax.ny.gov/pit/property/star/index.htm) summarizes it as follows.

> Two types of STAR exemptions:
> 
> **Basic STAR**
> 
> * available for owner-occupied, primary residences where the resident owners' and their spouses income is less than $500,000
> * exempts the first $30,000 of the full value of a home from school taxes
> 
> **Enhanced STAR**
> 
> * provides an increased benefit for the primary residences of senior citizens (age 65 and older) with qualifying incomes
> * exempts the first $63,300 of the full value of a home from school taxes as of 2013-14 school tax bills (up from $62,200 in 2012-13)
> 
> STAR exemptions apply only to school district taxes. They don't apply to property taxes for other purposes, such as county, town or city (except in cities where city property taxes fund schools - Buffalo, New York City, Rochester, Syracuse and Yonkers).

We can see the specific exemption amount for Scarsdale on
[this page](http://www.tax.ny.gov/pit/property/star/star55.htm).
That page says $1,830, which is $30 less than the number I found. Hmm.

## Closing thoughts
I've been learning fun things about the financial structure of Scarsdale,
Westchester and New York through studies like this. I hope I managed to convey
some of the knowledge to you.

Here are some ways of building on the current analysis.

* Look for properties with unusual combinations of exemptions.
* Parse more information from the roll.
* Figure out why the exemption amount from the roll is different from the
    amount from the New York website.
