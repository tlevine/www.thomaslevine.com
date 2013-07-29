---
title: R graphics magic that you should never use
---
I've been making graphics in R for quite a while

I've spent years of my life trying to make nice plots with base R
graphics. I've learned a bunch of tricks along the way, so now I'm
going to show you everything I can remember.


### `par()$box`

    ‘bty’ A character string which determined the type of ‘box’ which
         is drawn about plots.  If ‘bty’ is one of ‘"o"’ (the
         default), ‘"l"’, ‘"7"’, ‘"c"’, ‘"u"’, or ‘"]"’ the resulting
         box resembles the corresponding upper case letter.  A value
         of ‘"n"’ suppresses the box.

## Conclusion
I hope that you see how much of a mess base R graphics is.
Learn from my mistakes! Don't torture yourself with base R graphics;
**use ggplot**!
