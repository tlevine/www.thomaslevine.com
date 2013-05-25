---
title: tmux aliases
tags: ['dotfiles']
created_at: 2013-06-07
kind: article
---
Before I implemented my `tmuxa` and `tmuxl` aliases, the three `tmux` calls
that I used most often were `tmux`, `tmux list-sessions` and `tmux attach`.

    $ grep ^tmux ~/.history/sh-201*|sed -e s/^.*:// -e 's/ *$//' |sort|uniq -c
        127 tmux
        149 tmuxa
          2 tmuxa 0
          1 tmuxa -t0
          3 tmuxa -t 0
          6 tmuxa -t23
          1 tmuxa -t 23
          4 tmuxa -t32
          1 tmuxa -t 5
         15 tmux attach
          2 tmux attach -t0
          1 tmux attach -t16
          1 tmux attach -t18
          2 tmux attach -t 23
          1 tmux attach -t27
          1 tmux attach -t28
          1 tmux attach -t 32
         18 tmuxl
          1 tmux --list-sessions
          7 tmux list-sessions

Those commands are long, so I [made them shorter](https://github.com/tlevine/.prophyl-teh-awesum/blob/master/source/tmux).

    alias tmuxl='tmux list-sessions'
    alias tmuxa='tmux attach'
