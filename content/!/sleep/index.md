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
