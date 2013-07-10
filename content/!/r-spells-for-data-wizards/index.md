---
title: R spells for data wizards
description: Some R tricks that you might not find in typical introductory materials
kind: article
created_at: 2013-07-10
tags: ['data']
tweet_text: I have no idea how people learn R. http://thomaslevine.com/!/magic-r-commands
twitter_image: lists.png
facebook_image: lists.png
---

I've never come up with a good way for learning/teaching the cool parts of R.
I feel like that's sort of how R is; there's an awesome way to do everything,
but it's all very specific and kind of hacky.

I thought of some magic incantations that you might not find in
introductory R books/documentation/classes and wrote about them below.

## CSV
When loading a CSV, don't convert strings to factors.

    read.csv('csvsoundsystem.com/soundsystem.csv', stringsAsFactors = F)

When writing a CSV, don't add the rownames.

    write.csv(iris, file = 'iris.csv', row.names = F)

## Indexing
It's easy to miss a level of indexing, especially with lists.

    str(list(a = 3)[1][[1]])
    # num 3

    str(list(a = 3)[1])
    # List of 1
    # $ a: num 3

    str(list(a = 3))
    # List of 1
    # $ a: num 3

You can use character vectors indices.

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

## Factors
Factor levels are sorted alphabetically by default

    levels(factor(10:1))
    # [1] "1"  "2"  "3"  "4"  "5"  "6"  "7"  "8"  "9"  "10"

If you want to change that, just create a new factor,
specifying the level order manually.
    
    factor(parking$GarOrLot, levels = c('G', 'L'))

And you rename a level or levels like so.

    levels(OrchardSprays<reatment)[3:5] <- c('X', 'Y', 'Z')

## Concatenating text
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
Show all factor levels in a ggplot.

    ggplot(iris[1:50,]) + aes(x = Species, y = Sepal.Length) +
      scale_x_discrete('Species', drop = F) + geom_jitter()

Also, in general, **use ggplot**. Base R graphics are
[more work than they're worth](http://www.livestream.com/knerd/video?clipId=pla_a5d59285-9399-47dc-aaef-2b9a77142d5e),
except maybe if you're
[making](http://www.youtube.com/watch?v=rLZDvXPIDa0)
[music](http://fms.csvsoundsystem.com)
[videos](http://www.youtube.com/watch?v=tcnoBL0tvpc).

That said, if you do use base R graphics, try using `locator`
when you're perfecting the layout of base R graphics.

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

## Higher-order functions
R's "apply" functions would be called "maps" in other languages.
If you're applying along a list or vector, `lapply` or `sapply`, respectively, are convenient.

`apply` maps along any dimension of an array; you specify the dimension as an argument.

`mapply` maps along a matrix, passing multiple arguments to the function

`rollapply` is really cool. It applies a function with a rolling window.
For example, here's a rolling z-score that [Brian](http://brianabelson.com) wrote.

    library(zoo)

    roll_z <- function(x){
        scores <- z(x)
        scores[length(x)]
    }

    z_change <- rollapply(rnorm(1000), 40, roll_z)

## Other stuff
Use ProjectTemplate.

    library(ProjectTemplate)

Use `str` to find out something's type.

    str(ChickWeight)

`sqldf` works both on R data.frames and on other databases

    sqldf('SELECT foo FROM bar') # Use the bar data.frame
    sqldf('SELECT foo FROM bar', dbname = 'baz.db') # Use the baz.db SQLite database

Use `download.file` to download files.

Sort one thing by another thing.

    iris[order(iris$Sepal.Length),]
    cars$speed[order(cars$dist)]
