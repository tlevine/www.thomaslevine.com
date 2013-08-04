---
title: gastronomify
created_at: 2013-07-31
tags: ['sensing-data']
tweet_text: A long-overdue post on gastRonomify http://thomaslevine.com/!/gastronomify
description: Convert data into food with R
kind: article
---
I just wrote an R package that lets you turn data into food.
It's called [`gastronomify`](https://github.com/tlevine/gastronomify).
Install it like so.

```
install_git('git://github.com/csv/gastronomify.git')
```

Then generate recipes. [Here](<%= @item.identifier %>yahoo-finance.r)'s
an example gastronomification of four stocks' prices for the past six
years; it creates one recipe for each day.

```
#!/usr/bin/env Rscript
library(quantmod)
library(gastronomify)
library(plyr)

dow <- c(
  'MMM',
  'AA',
  'T',
  'AXP',
  'BAC',
  'BA',
  'CAT',
  'CSCO',
  'CVX',
  'KO',
  'DD',
  'XOM',
  'GE',
  'HPQ',
  'HD',
  'INTC',
  'IBM',
  'JPM',
  'JNJ',
  'KFT',
  'MCD',
  'MRK',
  'MSFT',
  'PFE',
  'PG',
  'TRV',
  'UTX',
  'VZ',
  'WMT',
  'DIS'
)
# getSymbols(paste(dow[1:5], collapse=';'), src='yahoo')
recent.prices <- alply(dow[1:5], 1, get)
names(recent.prices) <- dow[1:5]

data <- data.frame(
  close = c(
    recent.prices$MMM$MMM.Close,
    recent.prices$AA$AA.Close,
    recent.prices$AXP$AXP.Close,
    recent.prices$BAC$BAC.Close
  ),
  stock = rep(c('MMM', 'AA', 'AXP', 'BAC'), each = nrow(recent.prices$MMM)),
  date = c(
    rownames(as.data.frame(recent.prices$MMM)),
    rownames(as.data.frame(recent.prices$AA)),
    rownames(as.data.frame(recent.prices$AXP)),
    rownames(as.data.frame(recent.prices$BAC))
  ) 
)
names(data)[1] <- 'close'

recipes <- gastronomify(
  x = 'date', y = 'close', group = 'stock',
  data = data, recipe = guacamole
)

print(recipes[1:30,])
```

And [here](<%= @item.identifier %>math-tests.r)'s one of math test scores.
```
#!/usr/bin/env Rscript
library(plyr)
library(reshape2)
library(gastronomify)

# https://data.cityofnewyork.us/Education/Math-Test-Results-2006-2012-District-All-Students/7yig-nj52?
if (!('math.tests' %in% ls())) {
  math.tests <- read.csv('http://data.cityofnewyork.us/api/views/7yig-nj52/rows.csv?accessType=DOWNLOAD')
  math.tests <- math.tests[c('District', 'Grade', 'Year', 'Number.Tested', 'Mean.Scale.Score', 'Num.Level.1', 'Num.Level.2', 'Num.Level.3', 'Num.Level.4')]
  math.tests <- subset(math.tests, Grade != 'All Grades')
  math.tests <- math.tests[c('District', 'Grade', 'Year', 'Mean.Scale.Score')]
}

data <- ddply(math.tests, c('Year', 'Grade'), function(df) {
  c(Mean.score=mean(df$Mean.Scale.Score))
})

print('Each recipe represents the average tests scores by grade for a particular year.')
data.guacamole <- gastronomify(data$Year, data$Mean.score, data$Grade, recipe = guacamole, inflation = 50)
print(round(data.guacamole, 2))
```

## The future
I plan on extending this package in two main ways.

First, I'd like to add more recipes, including recipes
that can go horribly wrong when you mess up the
proportions; these will make it easy to detect outliers.

Second, I'd like to integrate taskrabbit so that you can
convert your data directly to food, without leaving R.
This will involve improving the metadata around recipes
so that the taskrabbits know what to do.

I'm also going to explore other ways of representing data
through food, and I don't know where that will take me.
