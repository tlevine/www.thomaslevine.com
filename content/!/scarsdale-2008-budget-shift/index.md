---
title: Changes in Scarsdale appropriations
short_title: Villiage appro-priations
tags: ['scarsdale', 'data']
kind: article
created_at: 2012-12-23
---
<% budget = 'https://github.com/tlevine/scarsdale-data/raw/master/budget/' %>
The village substantially reduced its budget after 2008, mainly in the capital
projects fund.

[![Appropriation by year and fund](<%= @item.identifier %>appropriations.png)](<%= @item.identifier %>appropriations.png)

The fund's appropriation typically increases by a couple million dollars each
year, but the appropriation was decreased by about $20 million in 2009-2010,
or about two-thirds. Let's figure out why.

## 2009 Changes
More specifically, public building costs were decreased by about $11.5 million,
and highway improvement costs were decreased by about $8.5 million.
(See page 109 of the [2009-2010 budget](<%= budget %>2009-2010_adopted_budget.pdf))

The decrease in public building cost can be explained by reduced work on the
Public Safety HQ Renovation/Expansion, which had cost $12 million in 2008-2009.
(See page 117 of the [2009-2010 budget](<%= budget %>2009-2010_adopted_budget.pdf))

The decrease in highway improvement cost can be explained by reduced bridge
construction, for which about $9 million had been allocated in 2009-2010.
(See page 119 of the [2009-2010 budget](<%= budget %>2009-2010_adopted_budget.pdf))

## Previous appropriations
Each budget shows the information for a few years prior. Based on this, it
appears that the budgeted appropriations jumped to a higher level a few years
ago.

### Public Safety HQ expansion
[![](<%= @item.identifier %>04-public_safety.png)](<%= @item.identifier %>04-public_safety.png)

In 2005-2006, the public safety HQ expansion was budgeted $6 million, of which
about $500,000 was for planning and $5.5 million was for construction.
Apparently, the planning was conducted but the construction apparently not.
The construction was to be funded by a bond, so I guess they just didn't take
out the loan.

Not having constructed the expansion, the village budgeted about $5.5 million
for the the expansion in 2006-2007. It happened yet again in 2007-2008, but the
cost estimate was $11 million instead of $5.5 million. The project was finally
realized in 2009-2010. That year, the cost was originally predicted to be $12
million, but it wound up costing only $11.5 million.

### Popham Road Bridge construction
[![](<%= @item.identifier %>04-popham_road_bridge.png)](<%= @item.identifier %>04-popham_road_bridge.png)

The same sort of thing happened for the Popham Road Bridge construction. In
2005-2006, 2006-2007 and 2007-2008 it had been budget $10.5 million of mostly
grant money, but little was spent on the project for these three years. (Maybe
we didn't get the grant?) In 2008-2009, it was budgeted about $10 million, of
which about $8.5 million was a grant. The bridge construction finally started,
but it was funded by the federal stimulus instead of the grant.

## Difference between adopted (planned) expenditures and actual expenditures
There had been plans for years to spend money on the public safety HQ and the
Popham Road Bridge, but it took a few years before they were realized. They
remained in the budget, however, so you might get the wrong impression of what
the village is spending if you just look at the budget every year.

[![](<%= @item.identifier %>04-difference.png)](<%= @item.identifier %>04-difference.png)

The differences between the adopted (planned) expenditures and the estimated
(close to the actual) expenditures for these two projects is on the order of
$15 million each year, or about one-fifth of the adopted budget for the whole
village. This gets me wondering about general trends in the difference between
what is planned and what actually happens.
