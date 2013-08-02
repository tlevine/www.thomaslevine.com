library(knitr)
library(sqldf)

knit('index.Rmd')
file.rename('index.md', '../index.md')
if (file.exists('../figure')) {
  file.remove('../figure')
}
file.rename('figure', '../figure')
