---
title: Moments of a function
description: I made a table years ago to help me understand what the moments of a function were.
kind: article
created_at: 2013-08-04
tweet_text: Biostatistics Ryan Gosling prompts me to look through old notes. http://thomaslevine.com/!/moments-of-a-function/
tweet_link: https://twitter.com/thomaslevine/status/364063019954745345
facebook_link: https://www.facebook.com/perluette/posts/2511035939940
twitter_image: biostatistics-ryan-gosling.jpg
facebook_image: biostatistics-ryan-gosling.jpg
---
I made this table years ago to help me understand what the moments of a function were.

Name                | Formula                                                                               | $$\mu_{0}$$ | $$\mu_{1}$$ | $$\mu_{2}$$  | $$\mu_{3}$$  | $$\mu_{4}$$ 
------------------- | ------------------------------------------------------------------------------------- | ----------- | ----------- | ------------ | ------------ | ----------- --
Crude moment        | $$\mu_{n}=E \left( X^n \right) $$                                                     |             | $$\mu$$     |              |              |
Central moment      | $$\mu_{n}=E \left( \left[ X - E \left( X \right) \right]^n \right)$$                  | 1           | 0           | $$\sigma^2$$ |              |
Standardized moment | $$\frac{\mu_{n}=E \left( \left[ X - E \left( X \right) \right]^n \right)}{\sigma^n}$$ |             | 0           | 1            | $$\gamma_1$$ | $$\gamma_2$$

<!-- I found this in some old notes that I'd written in LaTeX.

\begin{table*}
\begin{tabular*}{\textwidth}{@{\extracolsep{\fill}} l l r r r r r}
\toprule
Name                & Formula &
$\mu_{0}$ & $\mu_{1}$ & $\mu_{2}$ & $\mu_{3}$ & $\mu_{4}$ \\
\midrule 
Crude moment        & $\mu_{n}=E \left( X^n \right) $ &
  & $\mu$ & & & \\
Central moment      & $\mu_{n}=E \left( \left[ X - E \left( X \right) \right]^n \right)$ &
1 & 0     & $\sigma^2$ & & \\
Standardized moment & $\frac{\mu_{n}=E \left( \left[ X - E \left( X \right) \right]^n \right)}{\sigma^n}$ &
  & 0     & 1          & $\gamma_1$ & $\gamma_2$ \\
\bottomrule
\end{tabular*}
\caption{\label{moments.tab} Moments of a function, where $\mu=mean$, $\sigma^2=variance$, $\gamma_1=skewness$ and $\gamma_2=kurtosis$.}
\end{table*}

-->

Read it like this: The second ($$\mu_2$$) central moment is $$\sigma^2$$.

Some moments always have a particular value. For example,
the zeroth central moment is always one; we plug zero into
the central moment formula for $$n$$, and we wind up taking
the expected value of a bunch of ones.
Some of the moments have special names; $$\mu$$ is the mean,
$$\sigma^2$$is the variance, $$\gamma_1$$is the skewness,
and $$\gamma_2$$is the kurtosis.

I don't exactly know what drove me to learn about the moments
of a function. It couldn't have had anything to do with any sort
of class or work, so I probably just read about them in a book.
And I have yet to find any practical reason to know about them.

But it was all worth it because now I understand
[Biostatistics Ryan Gosling](http://biostatisticsryangoslingreturns.tumblr.com/post/55797271777).

![Hey girl, I loved you from the E(X) I saw you.](biostatistics-ryan-gosling.jpg)
