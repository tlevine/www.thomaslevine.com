library(knitr)
library(sqldf)

knit('index.Rmd')
file.rename('index.md', '../index.md')
if (file.exists('../figure')) {
  for (figure in list.files('../figure')) {
    file.remove(paste0('../figure/',figure))
  }
  file.remove('../figure')
}
file.rename('figure', '../figure')
