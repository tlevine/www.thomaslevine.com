---
title: Magic R commands
tags: ['data']
---

I've never come up with a good way for learning/teaching the cool parts of R.
I guess that's just how R is; it's all a hack. Anyway, here are some magic
incantations.

## General stuff
When loading a CSV, don't convert strings to factors.

    read.csv('csvsoundsystem.com/soundsystem.csv', stringsAsFactors = F)

Use ProjectTemplate.

    library(ProjectTemplate)

`sqldf` works on R data.frames and on other databases

    sqldf('SELECT foo FROM bar') # Use the bar data.frame
    sqldf('SELECT foo FROM bar', dbname = 'baz.db') # Use the baz.db SQLite database

`mapply` maps along a matrix, passing multiple arguments to the function


## Maintenance
Update your packages.

    update.packages()

## .Rprofile
Set your preferred mirror

    r <- getOption("repos")
    r["CRAN"] <- "http://cran.mirrors.hoobly.com"
    options(repos = r)
    rm(r)

Remove the carrots from the beginnings of the lines so that you can run code
that you've copied from the shell.

    options(prompt="  ")
    options(continue="+ ") 

Make the screen wide

    options(width=160)

Save your command history and output

    Sys.setenv(R_HISTSIZE='100000')
    sink(file = paste('~/.history/r-log-', strftime(Sys.time(), '%F %H:%M:%OS9'), '-', sep = ''), split=T)


