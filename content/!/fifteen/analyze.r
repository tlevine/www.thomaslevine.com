#!/usr/bin/env Rscript

e <- read.csv(
  '/tmp/email.tsv', sep = '\t',
  colClasses = c('POSIXct', 'integer', 'integer', 'character', 'character')
)

e$n.emails <- 1:nrow(e)

p <- ggplot(e.me) + aes(x = as.Date(datetime), size = char.count, y = n.emails) + geom_point() +
  scale_x_date('Date', limits = as.Date(c('2005-03-30', '2006-03-30'))) +

print(p)
