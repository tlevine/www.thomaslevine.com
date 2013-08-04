---
title: Moments of a function
---
I made this table years ago to help me understand what the moments of a function were.

$$
\begin{table*}
\begin{tabular*}{\textwidth}{@{\extracolsep{\fill}} l l r r r r r}
\toprule
Name                & Formula &
$\mu_{0}$ & $\mu_{1}$ & $\mu_{2}$ & $\mu_{3}$ & $\mu_{4}$ \\
\midrule 
Crude moment        & $\theta^{n}=E \left( X^n \right) $ &
  & $\mu$ & & & \\
Central moment      & $\theta^{n}=E \left( \left[ X - E \left( X \right) \right]^n \right)$ &
1 & 0     & $\sigma^2$ & & \\
Standardized moment & $\frac{\theta^{n}=E \left( \left[ X - E \left( X \right) \right]^n \right)}{\sigma^n}$ &
  & 0     & 1          & $\gamma_1$ & $\gamma_2$ \\
\bottomrule
\end{tabular*}
\caption{\label{moments.tab} Moments of a function, where $\mu=mean$, $\sigma^2=variance$, $\gamma_1=skewness$ and $\gamma_2=kurtosis$.}
\end{table*}
$$
