---
title: scp wrapper
tags: ['dotfiles']
---

This has happened to me too many times.

    $ scp bicycles.csv chainsaw.thomaslevine.com
    $

I wanted to copy the file `bicycles.csv` to the home directory of `$USER` on
`chainsaw.thomaslevine.com`. I meant to write this.

    $ scp bicycles.csv chainsaw.thomaslevine.com:

But I forgot the colon, so instead of copying the file to a different computer,
I copied the file to the local computer, naming it `chainsaw.thomaslevine.com`.

    $ scp bicycles.csv chainsaw.thomaslevine.com
    $ ls
    bicycles.csv  chainsaw.thomaslevine.com

<!--- finish the link -->
[Here](https://github.com/tlevine/.prophyl-teh-awesum) is my solution.

    scp() {
      # Require a colon to be provided.
      if echo "$*"|grep ':' > /dev/null; then
        command scp $*
      else
        command scp --help
        echo \ 
        echo "warning: The scp command that you ran has no colon, so you probably don't"
        echo '         want to run it. Use "env scp" if you really meant to do that;'
        echo '         you can run "env !!".'
        return 1
      fi
    }

If the wrapper function finds no colon in the grep arguments, it warns you that
you probably wanted a colon to be in the function. If you really did want to
run the command without a colon, you can just run it with `env !!`.

Elsewhere in my `.profile`, I make sure that the `.profile` is only applied in
login shells, and not in scripts, so if scripts that use `scp` without a colon
are still fine.
