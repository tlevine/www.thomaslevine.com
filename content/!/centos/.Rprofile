# Sample Rprofile.site file 

# Things you might want to change
options(papersize="letter") 
options(editor="vim") 
# options(pager="internal")

# R interactive prompt 
options(prompt="  ")
options(continue="+ ") 

# to prefer Compiled HTML 
# help options(chmhelp=TRUE) 
# to prefer HTML help 
# options(htmlhelp=TRUE) 

# General options 
options(tab.width = 2) 
options(width=160)
options(graphics.record=TRUE) 

# Repositories
r <- getOption("repos")
r["CRAN"] <- "http://cran.mirrors.hoobly.com"
options(repos = r)
rm(r)

#These make errors easier to see.
options(showWarnCalls=T, showErrorCalls=T)

# Name for the history
.history.stamp <- paste(format(Sys.time(), '%Y-%m-%d') round(runif(1) * 100000), sep = '_')

#History size
Sys.setenv(R_HISTSIZE='100000')

# History directory
if (!file.exists('~/.history')){
  dir.create('~/.history')
}

# History
.R_HISTFILE = paste('~/.history/r-', .history.stamp, sep = '')

# Logging
sink(file = paste(.R_HISTFILE, '.log', sep = ''), split=T)



# Set up my cluster. They have six cores each, so five workers each.
.socketHosts = c(
  rep('tlevine@slave1.thomaslevine.com', 5),
  rep('tlevine@slave2.thomaslevine.com', 5)
)

# Using snowfall, which doesn't work with plyr
cl.snowfall <- function(){
  library(snowfall)
  sfInit(parallel = T, socketHosts = .socketHosts)
}

# Using foreach
# This gives errors because the context isn't properly sent,
# https://groups.google.com/d/msg/manipulatr/A5s4l4p641I/oHkfZOOGlR8J
# But it seems to work; try something slow like downloading a file.
cl.foreach.parallel <- function(){
  library(doParallel)
  cl <- makePSOCKcluster(.socketHosts)
  registerDoParallel(cl)
}
cl.foreach.snow <- function(){
  library(doSNOW)
  cl <- makeSOCKcluster(.socketHosts)
  registerDoSNOW(cl)
}

.First <- function(){
  # ProjectTemplate loads a bunch of things on load.project()
  library(ProjectTemplate)
}

.Last <- function() {
  if (!any(commandArgs()=='--no-readline') && interactive()){
    require(utils)
    try(savehistory(.R_HISTFILE)))
  }
}
