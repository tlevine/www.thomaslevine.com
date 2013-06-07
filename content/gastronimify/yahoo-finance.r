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
getSymbols(paste(dow[1:5], collapse=';'), src='yahoo')
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
