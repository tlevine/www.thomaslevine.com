---
title: R graphics tricks that you probably shouldn't use
description: Learn from my mistakes! Don't waste years of your life learning to make nice plots with base R graphics.
tweet_text: R curses for data witches
twitter_image: complicated-2.png
facebook_image: complicated-2.png
created_at: 2013-08-02
kind: article
---
I've spent/wasted years of my life trying to make nice plots with
base R graphics, so I've learned a bunch of base R graphics tricks.
One annoying part of base R graphics is that the defaults look ugly,
so I'm going to show you how to make some bar plots, strip charts,
and line plots that don't look so ugly.

You might pick up some useful tricks from this post, but I really
hope that the insanity of it encourages you to use ggplot instead.

## Data
I'm going to use data came from an earlier version of
[this website](http://peregrinossantiago.es/eng/pilgrims-office/statistics/).
They're "statistics about pilgrims who have arrived in Santiago".
The observations are monthly, but I'm missing the Novembers and Decembers.

    pilgrams <- sqldf("select * from pilgram", dbname = "pilgrams-db.sqlite")

I'm also going to use data from a
[wellbeing study](https://data.somervillema.gov/dataset/Results-of-2011-Wellbeing-Study/pjhx-dusc)
about Somerville, Massachusetts. There are a lot of missing values in this dataset, and I'm only
trying to show you how to make plots, so I'm just going to remove the missing values.

    wellbeing <- na.omit(read.csv("http://data.somervillema.gov/api/views/pjhx-dusc/rows.csv?accessType=DOWNLOAD"))

## Bar plots
Maybe we want count the marital statuses of Somerville residents.
This won't work.

    barplot(wellbeing$X24..What.is.your.marital.status.)

Instead, you need to give barplot a vector of heights. We can make one with `table`.

    barplot(table(wellbeing$X24..What.is.your.marital.status.))

![plot of chunk barplot-1](figure/barplot-1.png){:.wide}


I can't read the bar labels, so let's make the bars horizontal.

    barplot(table(wellbeing$X24..What.is.your.marital.status.), horiz = TRUE)

![plot of chunk barplot-2](figure/barplot-2.png){:.wide}

Oops. Now the labels are rotated the wrong way. The `las` parameter to `par` handles that.

    barplot(table(wellbeing$X24..What.is.your.marital.status.), horiz = TRUE, las = 1)

![plot of chunk barplot-3](figure/barplot-3.png){:.wide}

And let's adjust the margin and bar labels so the text doesn't fall off.

    levels(wellbeing$X24..What.is.your.marital.status.)[3] <- "Living with a partner\nbut not married"
    par(mar = c(5, 12, 4, 2))
    barplot(table(wellbeing$X24..What.is.your.marital.status.), horiz = TRUE, las = 1)

![plot of chunk barplot-4](figure/barplot-4.png){:.wide}

I also want to sort the bars so they're easier to read.

    barplot(sort(table(wellbeing$X24..What.is.your.marital.status.), decreasing = TRUE), horiz = TRUE, las = 1)

![plot of chunk barplot-5](figure/barplot-5.png){:.wide}

The black border around the bars is noisy; let's remove it.

    barplot(
      sort(table(wellbeing$X24..What.is.your.marital.status.), decreasing = TRUE),
      horiz = TRUE, las = 1, border = NA)

![plot of chunk barplot-6](figure/barplot-6.png){:.wide}

Now the colors don't match. We could just make the bars black,

    barplot(
      sort(table(wellbeing$X24..What.is.your.marital.status.), decreasing = TRUE),
      horiz = TRUE, las = 1, border = NA, col = 1)

![plot of chunk barplot-7](figure/barplot-7.png){:.wide}

but that's a bit harsh. Instead, let's make everything grey.

    barplot(
      sort(table(wellbeing$X24..What.is.your.marital.status.), decreasing = TRUE),
      horiz = TRUE, las = 1, border = NA,
      col = "#666666", fg = "#333333", col.axis = "#333333")

![plot of chunk barplot-8](figure/barplot-8.png){:.wide}

And add a title, of course

    barplot(
      sort(table(wellbeing$X24..What.is.your.marital.status.), decreasing = TRUE),
      horiz = TRUE, las = 1, border = NA, col = "#666666", fg = "#333333", col.axis = "#333333", 
      xlab = "Number of residents", main = "Marital statuses of Somerville residents")

![plot of chunk barplot-9](figure/barplot-9.png){:.wide}

Summing that up, this is approximately what I think the default barplot function should be.

    tom.barplot <- function(height, col = 'grey', border = NA, ...) {
      barplot(
        sort(table(height)), col = col, border = border,
        col = '#666666', fg = '#333333', col.axis = '#333333',
        ...
      )
    }

## Strip charts
Here is a strip chart about how people in Somerville are feeling, on a range of 1 to 10.

    stripchart(wellbeing$X1...First.of.all..how.happy.do.you.feel.right.now.., method = "jitter")

![plot of chunk stripchart-1](figure/stripchart-1.png){:.wide}

The observations are randomly jittered above, but we can also stack the observations.

    stripchart(wellbeing$X1...First.of.all..how.happy.do.you.feel.right.now.., method = "stack")

![plot of chunk stripchart-2](figure/stripchart-2.png){:.wide}

Let's change the scale to emphasize its limits.

stripchart(wellbeing$X1...First.of.all..how.happy.do.you.feel.right.now.., method = "stack", xlim = c(1, 10))

![plot of chunk stripchart-3](figure/stripchart-3.png){:.wide}

The white boxes with borders are noisy; let's change them to filled boxes.
The default point type (`pch = 1`) doesn't support a fill color (`bg`),
so we have to switch to a different point type.

    stripchart(
      wellbeing$X1...First.of.all..how.happy.do.you.feel.right.now..,
      method = "stack", xlim = c(1, 10), col = NA, pch = 22, bg = 1)

![plot of chunk stripchart-4](figure/stripchart-4.png){:.wide}

You can see all of the pch types here, from `example(points)`.

    pchShow()

![plot of chunk stripchart-pch](figure/stripchart-pch.png){:.wide}

That's just a bar plot. Let's switch back to jittering and make the
points translucent.

    stripchart(
      wellbeing$X1...First.of.all..how.happy.do.you.feel.right.now..,
      method = "jitter", xlim = c(1, 10), col = NA, pch = 22, bg = "#00000033")

![plot of chunk stripchart-5](figure/stripchart-5.png){:.wide}

Let's make a nicer axis.

    stripchart(
      wellbeing$X1...First.of.all..how.happy.do.you.feel.right.now..,
      method = "jitter", xlim = c(1, 10), col = NA, pch = 22, bg = "#00000033", axes = FALSE, 
      xlab = "How happy do you feel right now, on a scale of 1 to 10?",
      main = "How happy Somerville residents feel")
    axis(1, at = 1:10)

![plot of chunk stripchart-6](figure/stripchart-6.png){:.wide}

And let's not waste half of the canvas.

    stripchart(
      wellbeing$X1...First.of.all..how.happy.do.you.feel.right.now..,
      method = "jitter", xlim = c(1, 10), col = NA, pch = 22, bg = "#00000033", axes = FALSE, 
      xlab = "How happy do you feel right now, on a scale of 1 to 10?",
      main = "How happy Somerville residents feel", jitter = 0.5, ylim = c(0, 2))
    axis(1, at = 1:10)

![plot of chunk stripchart-7](figure/stripchart-7.png){:.wide}

## Stacked bar plots
Now we could also color the points by a different color depending on the
gender.

    barplot(
      table(
        wellbeing$X15..Gender..1..female..2..male.,
        wellbeing$X1...First.of.all..how.happy.do.you.feel.right.now..),
      border = NA, col = c("#333333", "#999999"), 
      xlab = "How happy do you feel right now, on a scale of 1 to 10?",
      main = "How happy Somerville residents feel, by gender")

![plot of chunk stacked-barplot-1](figure/stacked-barplot-1.png){:.wide}

We make the legend in a separate command.

    wellbeing$X15..Gender..1..female..2..male. <- factor(wellbeing$X15..Gender..1..female..2..male., levels = 1:2)
    levels(wellbeing$X15..Gender..1..female..2..male.) <- c("Female", "Male")
    col <- c("#333333", "#999999")
    barplot(
      table(wellbeing$X15..Gender..1..female..2..male.,
        wellbeing$X1...First.of.all..how.happy.do.you.feel.right.now..),
      border = NA, col = col, xlab = "How happy do you feel right now, on a scale of 1 to 10?", 
      ylab = "Number of residents", main = "How happy Somerville residents feel, by gender")
    legend("topleft", legend = levels(wellbeing$X15..Gender..1..female..2..male.), col = NA, pch = 22, pt.bg = col)

![plot of chunk stacked-barplot-2](figure/stacked-barplot-2.png){:.wide}

## par
All of these `col`, `pch`, `bg`, `fg`, `border`, &c. commands are graphical
parameters passed to `par`. You can set their global defaults with `par`,
but they won't necessarily apply to the same scope as when you pass them
within a function. For example, `bg` applies to the outer canvas's background.

    par(bg = "yellow")
    plot(Total ~ id, data = pilgrams, type = "l")

![plot of chunk par-1](figure/par-1.png){:.wide}

You might use this to set fonts across all of your plots.

    par(family = "serif", font = 3, font.lab = 3, font.main = 2, font.sub = 3)
    plot(Total ~ id, data = pilgrams, type = "l", main = "Pilgrams")

![plot of chunk par-2](figure/par-2.png){:.wide}

I tend to find the global namespace unpleasant, so I like to wrap that
in a function that closes the device afterwards, with `dev.off`.
(The settings only apply to the current device.)

    plot.something <- function(a, b, c, e, f) {
      par(family = 'serif', font = 3, font.lab = 3, font.main = 2, font.sub = 3)
      plot(a ~ b, col = c)
      lines(d, e)
      # ...
      dev.off()
    }

`mfrow` and `mfcol` allow you to make multiple plots in one device

    par(mfrow = c(2, 2))
    plot(lm(Men ~ Women, data = pilgrams), mfrow = c(2, 2))

![plot of chunk par-3](figure/par-3.png){:.wide}

`bty` lets you change the outer border of the plot.

    plot(Total ~ id, data = pilgrams, type = "l", bty = "l")

![plot of chunk par-4](figure/par-4.png){:.wide}

Its options are quite hilarious; here is its entry in `?par`.

    ‘bty’ A character string which determined the type of ‘box’ which
         is drawn about plots.  If ‘bty’ is one of ‘"o"’ (the
         default), ‘"l"’, ‘"7"’, ‘"c"’, ‘"u"’, or ‘"]"’ the resulting
         box resembles the corresponding upper case letter.  A value
         of ‘"n"’ suppresses the box.

Most plotting commands call `plot.new`, which clears the plot by
default. Setting `new` to `TRUE` makes it not clear the plot, which
can help you build up more complicated plots.

## Line plots
Displaying multiple sets of lines and points on a graph gets more messy.
For example, let's say we want to make two lines to represent pilgram
counts. One is for people on horseback, and the other is for people on
foot. First, I like to make an empty plot with the full range so we don't
cut anything off. Let's also put the labels and remove the axes.

    plot.pilgram.base <- function() {
      plot(0, 0,
        xlim = range(pilgrams$id),
        ylim = c(0, max(c(pilgrams$Foot, pilgrams$Bicicle))),
        xlab = "Month", ylab = "Number of pilgrams",
        main = "Pilgrams by month and transportation medium", 
        axes = FALSE, type = "n")
    }
    plot.pilgram.base()

![plot of chunk complicated-1](figure/complicated-1.png){:.wide}

The key there is `type = 'n'`, which makes no data be plotted.
Now we can add the lines one at a time.

    plot.pilgram.lines <- function() {
      lines(Foot ~ id, data = pilgrams, lty = 1)
      lines(Bicicle ~ id, data = pilgrams, lty = 2)
      legend("topleft", c("Foot", "Bicycle"), title = "Transportation media", lty = 1:2)
    }
    plot.pilgram.base()
    plot.pilgram.lines()

![plot of chunk complicated-2](figure/complicated-2.png){:.wide}

I removed the axes because the default axes are usually quite
ugly. Now let's add prettier axes.

    plot.pilgram.axes <- function() {
      axis(1, at = seq(1, 80, 10), labels = paste("January", unique(pilgrams$year)))
      par(las = 1)
      axis(2, at = seq(0, 60000, 10000), labels = c(0, paste0(1:6, "0,000")))
    }
    plot.pilgram.base()
    plot.pilgram.lines()
    plot.pilgram.axes()

![plot of chunk complicated-3](figure/complicated-3.png){:.wide}

The tick marks go at `at`, and they are labeled with `labels`.

The past seven expressions/lines of code are approximately my boilerplate for simple
line plots. How is it that this take seven expressions when the strip chart and bar
plot boilerplates only take one each?

Partly, this is because I switched the default axis for calls to `axis`; I usually
do this with any plot, but I left it out of the earlier stripcharts and bar plot.
But the main reason for the increased size is that different levels/subsets need to
be plotted as separate calls in order to make separate curves/lines on the plot.

## Conclusion
I just showed you some boilerplate bar plots, strip chart and
line plots, each involving a few lines of code to produce the plot
that I conceive as the default.

Setting each of the defaults involved a bit of work. Moreover, each
plot type took slightly different inputs, so I needed to transform
the data a bit differently for each one and to send different
parameters for each one.

ggplot, on the other hand, has a much more reasonable and standardized
plot-configuration interface (through the grammar of graphics). The
equivalent ggplot commands for all of these plots would have been about
as complicated but much more predictable and consistent across plot types.

I still use base R graphics for [music videos](/music), but
I try to use ggplot for everything else.
