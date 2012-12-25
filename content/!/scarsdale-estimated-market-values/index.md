---
title: Where does the "market value" on your tax bill come from?
short_title: Tax bill "market value"
tags: ['scarsdale', 'data']
kind: article
created_at: 2013-01-02
---
Scarsdale's tax bills look like this.

[![Picture of a village tax bill](<%= @item.identifier %>village.jpg)](<%= @item.identifier %>village.jpg)

At the end, they use a "uniform percent" to calculate a "full market value".

[![Picture of the "ADDITIONAL INFORMATION" section of the bill](<%= @item.identifier %>additional.jpg)](<%= @item.identifier %>additional.jpg)

## What does that percentage mean?

You can divide the assessed value of your house by the percentage to arrive at
the "market value" that is listed on the bill. For example, a house assessed at
$10,000 could be divided by 2% to yield an estimated market value of $500,000.

## How is it chosen?

Now that I've explained that, where does the figure come from? As you'll see,
it's not particularly obvious, so I suspect that it comes from some reasonably
informed calculation. But what is the calculation?

In an attempt to find out, I plotted the estimated value of a house assessed at
$10,000 for each year. The x-axis is the value of a dollar in 2012 dollars
during the year of the tax bill, based on the Consumer Price Index. (This is an
attempt at adjusting for inflation.) The percentages are just the percentages
listed on the tax bills, which are equivalent to the y-axis estimated house
market value.

[![Plot of nominal market value as a function of the value of a dollar over time](<%= @item.identifier %>plot.png)](<%= @item.identifier %>plot.png)

If the percentage were simply a crude adjustment for inflation, the line would
be straight and increasing. It looks sort of like that until 2008, but it went
back down after that. Since the line isn't straight and increasing, it seems
that the percentage is derived some other way. How anti-climatic.

## Thank you, Grandma
The budgets [posted online](http://www.scarsdale.com/Home/Departments/VillageTreasurer.aspx)
only go back to 2006, so I collected
[these data](https://github.com/tlevine/scarsdale-data/tree/master/grandma)
from my grandmother's tax bills.
