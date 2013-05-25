#!/usr/bin/env Rscript

e <- read.csv(
  '/tmp/email.tsv', sep = '\t',
  colClasses = c('POSIXct', 'integer', 'integer', 'character', 'character')
)
e$mb <- e$char.count * 2^(-20)
e$n.emails[order(e$datetime)] <- 1:nrow(e)

p <- ggplot(e) + aes(x = as.Date(datetime), size = mb, y = n.emails) +
  scale_x_date('Date', limits = as.Date(c('2005-03-30', '2006-03-30'))) +
  scale_size_continuous('Size in megabytes') +
  geom_point(alpha = 0.2)

e$date <- as.Date(e$datetime)
fifteen <- seq(as.Date('2005-03-30'), as.Date('2006-03-30'), by = 1)
email.by.day <- sapply(fifteen, function(d) {
  n.emails <- e[e$date == d,'n.emails']
  if (length(n.emails) > 0) diff(range(n.emails)) else 0
})

p <- ggplot(data.frame(day = fifteen, emails = email.by.day)) +
  aes(x = day, y = email.by.day) +
  geom_line()

print(p)
