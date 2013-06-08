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

print('Data-driven guacamole recipes')
print('Each recipe represents the average tests scores by grade for a particular year.')
data.guacamole <- gastronomify(data$Year, data$Mean.score, data$Grade, recipe = guacamole, inflation = 5)
print(round(data.guacamole, 2))
