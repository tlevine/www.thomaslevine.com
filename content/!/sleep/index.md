I like sleeping.

![Picture of Tom sleeping and looking happy.]()

Here's how you sleep for nine hours in a few different languages.

## Haskell

    #!/usr/bin/env runhaskell
    import Control.Concurrent (threadDelay)
    main = do
      threadDelay $ 9 * 60 * 60 * (round $ 1e6)

## Shell

    #!/bin/sh
    sleep 9h

## Python

    #!/usr/bin/env python
    from time import sleep
    sleep(9 * 60 * 60)

## JavaScript

    #!/usr/bin/env node
    setTimeout(function(){}, 9 * 60 * 60 * 1e6)

## PostgreSQL

    SELECT pg_sleep(9 * 60 * 60);

## Go

    package main

    import "time"

    func main() {
      time.Sleep(9 * time.Hour)
    }

## PostScript

[Here](http://computer-programming-forum.com/36-postscript/690b094ddc0d0a26.htm)'s a hack.

## C

    #include <unistd.h>

    main()
    {
      sleep(9 * 60 * 60);
    }

## GProlog
I haven't figured out how to do arithmetic yet.

    sleep(32400).

## Vim

    :sleep 32400
