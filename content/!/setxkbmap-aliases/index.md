---
title: setxkbmap aliases
kind: article
created_at: 2013-07-01
tags: ['dotfiles']
---

I normally use the Dvorak keyboard layout, so I configure Dvorak to be the
default layout on my computers. When other people use my computers, they
normally want to switch the layout to qwerty. So I have this.

    alias aoeu='setxkbmap us'
    alias asdf='setxkbmap us -variant dvorak'

Now I can just type the home row left hand to switch between these two
layouts.

I sometimes use the Dvorak-inspired French and Swedish layouts. I can select
the French one with `setxkbmap` like so.

    alias fr='setxkbmap fr -variant dvorak'

I still haven't figured out how to select the Swedish one with `setxkbmap`.
