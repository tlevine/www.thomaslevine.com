#!/usr/bin/env Rscript
#
# These run in different lines so they can be separated if need be.
#

# Mirror
r <- getOption("repos")
r["CRAN"] <- "http://cran.mirrors.hoobly.com"
options(repos = r)
rm(r)

# General
install.packages(c('plyr', 'ggplot2', 'reshape', 'stringr', 'ProjectTemplate'))

# One parallel framework
install.packages('snowfall')

# Another, with two backends
install.packages(c('foreach'))
install.packages(c('parallel', 'doParallel'))
install.packages(c('snow', 'doSNOW'))

# Now that ProjectTemplate is installed, we can enable the Rprofile because
file.rename('.Rprofile.new', '.Rprofile')
