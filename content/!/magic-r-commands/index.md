---
title: Magic R commands
kind: article
created_at: 2013-07-10
tags: ['data']
---

I've never come up with a good way for learning/teaching the cool parts of R.
I guess that's just how R is; it's all a hack. Anyway, here are some magic
incantations.

## General stuff
When loading a CSV, don't convert strings to factors.

    read.csv('csvsoundsystem.com/soundsystem.csv', stringsAsFactors = F)

When writing a CSV, don't add the rownames.

    write.csv(iris, file = 'iris.csv', row.names = F)

If you change the row names, you can use character vectors to query the data frame.

    row.names(HairEyeColor)
    # [1] "Black" "Brown" "Red"   "Blond"

    row.names(HairEyeColor) <- c('Pink', 'Blue', 'Green', 'Clear')
    HairEyeColor['Pink',,]
    #        Sex
    # Eye     Male Female
    #   Brown   32     36
    #   Blue    11      9
    #   Hazel   10      5
    #   Green    3      2

    HairEyeColor[,,'Male']
    #        Eye
    # Hair    Brown Blue Hazel Green
    #   Pink     32   11    10     3
    #   Blue     53   50    25    15
    #   Green    10   10     7     7
    #   Clear     3   30     5     8

Use ProjectTemplate.

    library(ProjectTemplate)

Use `str` to find out something's type.

    str(ChickWeight)

It's easy to miss a level of indexing, especially with lists.

    str(list(a = 3)[1][[1]])
    # num 3

    str(list(a = 3)[1])
    # List of 1
    # $ a: num 3

    str(list(a = 3))
    # List of 1
    # $ a: num 3

`sqldf` works both on R data.frames and on other databases

    sqldf('SELECT foo FROM bar') # Use the bar data.frame
    sqldf('SELECT foo FROM bar', dbname = 'baz.db') # Use the baz.db SQLite database

`mapply` maps along a matrix, passing multiple arguments to the function

Use `download.file` to download files.

Sort one thing by another thing.

    iris[order(iris$Sepal.Length),]
    cars$speed[order(cars$dist)]

This is how you concatenate text.

    paste('abc', 'def', sep = '')

In JavaScript, this would be `'abc' + 'def'`. Sort of.
R's `paste` is more powerful because supports vectors!
If you pass it vectors, `paste` will ordinarily concatenate corresponding elements
across vector.

    paste(c('a','b','c'), 1:3)

If you want to concatenate the elements within a vector,
use `collapse`

    paste(c('Pack', 'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs.'), collapse = ' ')

In case that isn't clear, it would look like this in JavaScript:

    ['Pack', 'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs.'].join(' ')

## Plotting
Try `locator` when you're perfecting the layout of base R graphics.

Show all factor levels in a ggplot.

    ggplot(iris[1:50,]) + aes(x = Species, y = Sepal.Length) +
      scale_x_discrete('Species', drop = F) + geom_point()

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


