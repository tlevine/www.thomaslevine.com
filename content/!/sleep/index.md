Sleep for five minutes in different languages.

## Haskell

    #!/usr/bin/env runhaskell
    import Control.Concurrent (threadDelay)
    main = do
      threadDelay $ 5 * 60 * (round $ 1e6)

## Shell

    #!/bin/sh
    sleep 5m

## Python

    #!/usr/bin/env python
    from time import sleep
    sleep(5 * 60)

## JavaScript

    #!/usr/bin/env node
    setTimeout(function(){}, 5 * 60 * 1e6)

## PostgreSQL

    SELECT pg_sleep(5 * 60);

## Go

    package main

    import "time"

    func main() {
      time.Sleep(5 * time.Minute)
    }

## PostScript

[Here](http://computer-programming-forum.com/36-postscript/690b094ddc0d0a26.htm)'s a hack.

## C

    #include <unistd.h>

    main()
    {
      sleep(5 * 60);
    }
