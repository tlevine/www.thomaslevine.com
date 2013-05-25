---
title: Covariance drawings
created_at: 2012-12-29
kind: article
---
## Covariance
Covariance is the average of these rectangles.

![Scribbles](<%= item.identifier %>cov.jpg)

## Variance
Variance is just the covariance of something with itself.

## Correlation
We can form a rectangle with the sides of the variance squares. We can draw
two overlapping rectangles on top of that based on the covariance, and their
intersection forms another rectangle.

![Rectangles](<%= item.identifier %>total-variance.jpg)

It happens that the absolute area of the covariance rectangle is less than or
equal to the area of this rectangle. The following doodle might convince you
of that.

![Rectangles](<%= item.identifier %>bounds.jpg)

Correlation is how much of the aforedoodled rectangle is filled by the
covariance; $$R$$ is the proportion along a side, and $$R^2$$ is the proportion
of the area. The dimensions of that rectangle and of three rectangles that it
encloses are drawn below.

![Four rectangles](<%= item.identifier %>dimensions.jpg)

## Ordinary least squares regression
Each OLS regression coefficient is like the quotient of the
rectangles in the top of this doodle and the squares in the bottom.

![Scribbles](<%= item.identifier %>ols.jpg)

I'll be shocked if anyone followed these scribbles; I'll make a video eventually.
