---
title: Scarsdale Village tax rates and inflation
short_title: Taxes and inflation
tags: ['scarsdale', 'data']
created_at: 2013-03-27
kind: article
---

I took some [information](https://github.com/tlevine/scarsdale-data/blob/master/budget/appendix_a1-tax.csv)
out of the Scarsdale budgets and noticed that the property tax rate increases quite consisently.

<img alt="Tax rate over time"
     src="<%= @item.identifier %>tax_rate_by_year.png"
     class="wide" />

The property tax rate is a proportion of the assessed value of the house; if
your house is assessed at $10,000 and the tax rate is 24%, you pay $2,400 in
village taxes.

On your bill and in the budget, it's actually represented in permil rather
than percent; for every $1,000 of assessed value, you pay $240 in taxes.
You can learn more about that [here](/!/scarsdale-tax-bill).

Anyway, I was somewhat surprised by the consistent increase, so I looked a bit further.
I wondered whether the increase could be explained by inflation, so I plotted
the tax rate against the value of a dollar in today's dollars based on the
Consumer Price Index. (This tries to adjust for inflation.)

<img alt="Tax rate as a function of inflation"
     src="<%= @item.identifier %>tax_rate_by_inflation.png"
     class="wide" />

This doesn't look that different from the previous plot becauses the value of
a dollar changes quite consistently. I didn't find it that helpful for figuring
out whether inflation explained the changes.

Next, I adjusted the tax rate for inflation. You can think of the adjusted tax
rate (dotted line) as the fair tax rate for each year if you were to pay for
that year's taxes (the solid line) in 2009 rather than in the year to which
they correspond.

<img alt="Raw and inflation-adjusted tax rate over time"
     src="<%= @item.identifier %>adj_tax_rate.png"
     class="wide" />

If the increase in property tax rate is explained only by inflation, this line
should be flat. Well, it would have bumps, but it wouldn't increase or decrease on
average. Aside from the shift in 2008, the line is sort of flat, but it does
tend upwards. This suggests to me that something other than general inflation
is increasing the property tax.

After doing all this, I noticed that the village already does a similar analysis.
Look at the "CPI % Incr Yr to Yr" column on page 158 of the
[2012--13 adopted budget](https://github.com/tlevine/scarsdale-data/blob/master/budget/2012-2013_adopted_budget.pdf?raw=true).
The analysis in the budget also finds that the tax rate increases relative the
consumer price index.
