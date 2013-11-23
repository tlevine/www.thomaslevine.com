---
title: Changes in appropriations to Scarsdale Village funds
short_title: Village funds
tags: ['scarsdale']
kind: article
created_at: 2012-12-14
other_source: https://github.com/tlevine/scarsdale-data
---

What does Scarsdale Village spend money on, and how does it change over time?
The village [budgets](http://www.scarsdale.com/Home/Departments/VillageTreasurer.aspx)
might be informative.

The budget is divided into six funds.

* General Fund
* Capital Projects
* Public Library
* Internal Service Fund Central Garage (INT SVCE CEN GAR)
* Pool
* Water

The various funds receive money from several sources. One of these sources is
taxes; village taxes go into the general fund, but much of the general fund is
transferred to other funds. At least I think that's how it works.

I looked at the appropriations (spending) of the respective funds. Well I
actually looked at the planned appropriations for each coming year; the actual
appropriations were generally a bit lower. (That's a story for another blog post.)

Anyway, what did the government spend?

[<img alt="Appropriation by year and fund"
      src="<%= @item.identifier %>appropriations.png"
      class="wide" />
](<%= @item.identifier %>appropriations.png)

The general fund and capital projects are the big ones, but capital projects
suddenly dropped in 2009. Keep in mind that some of the general fund money is
just being transferred to the other funds.

Something interesting apparently happened to the capital projects fund in 2009,
but the changes in the smaller funds aren't apparent on this scale. I adjusted
the scale to use the proportional change in appropriation by fund. This way,
we can compare changes among funds of very different sizes. The width of the
lines represents the absolute appropriation of the fund at each year.

[<img alt="Changes in appropriation by fund relative 2003"
      src="<%= @item.identifier %>changes.png"
      class="wide" />
](<%= @item.identifier %>changes.png)

The Internal Service Fund Central Garage, General Fund and Public Library Fund increase at a similar rate.
This rate happens to be about half the rate of inflation (based on the Consumer
Price Index).

The Pool, Water and Capital Projects funds are markedly different.
Water appropriations went up a lot for a few years and have come back down a bit.
Pool appropriations have stayed about the same, rather than slightly increasing.
And Capital Projects appropriations dropped suddenly in 2009.

Precisely what happened? It's in the
[budgets](https://github.com/tlevine/scarsdale-data/tree/master/budget).
And I'll blog about it eventually.
