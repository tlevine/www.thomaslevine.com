#!/usr/bin/env runhaskell
import Control.Concurrent (threadDelay)
main = do
  threadDelay $ 5 * 60 * (round $ 1e6)
