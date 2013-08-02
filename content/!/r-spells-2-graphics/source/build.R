library(knitr)
knit('index.Rmd')
file.rename('index.md', '../index.md')
file.rename('figure', '../figure')
