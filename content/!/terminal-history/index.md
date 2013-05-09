---
title: Terminal history
tags: ['dotfiles']
created_at: 2013-05-09
kind: article
---
If you use the default shell environment settings, you'll probably wind up
storing very little of your history. Computers are so big, powerful and cheap
these days that this is stupid; we should store more.

My history configuration is better. Here are some things it does.

* History is never deleted.
* History is backed up and synchronized across computers with git.
* Commands are timestamped.
* A new file is created for each shell window.

Here's how I implement that. First, make sure that we never delete history.

    # Too many commands of history per session
    export HISTSIZE=100000000000000000000

    # Ten gigabytes of maximum history size
    export HISTFILESIZE=10000000000

Put timestamps in the history files; the timestamp goes in the line above the command.

    # Save timestamps in the history.
    export HISTTIMEFORMAT="[%F %T %Z]" 

Save to a new file. Datestamp the file to make it easy to search. Add a random
number so that history files from multiple shells opened in the same nanosecond,
perhaps across different computers, do not have name clashes.

    # Save history to ~/.history/sh-date-host-randomnumber
    export HISTFILE="$HOME/.history/sh-$(date --rfc-3339 ns)-${RANDOM}"

Write to the history file after each command; do not wait until the shell session
has been exited.

    # Append continuously
    # http://ask.fedoraproject.org/question/18/how-to-keep-history-commands-in-sync-across
    _sync_history(){
      builtin history -a
      HISTFILESIZE=$HISTFILESIZE
    }
    PROMPT_COMMAND=_sync_history

When we separate the history files like this, the built-in history command
becomes near-useless. Override that command; instead of searching the current
session's history, search the last month's history.

    history(){
      # Search the current month's history.
      if [ "$#" = '0' ]; then
        grep -hv '^#[0-9]*$' "$HOME/.history/sh-$(date +%Y-%m)"*
      else
        builtin history "$@"
      fi
    }

The above discourse is just documention of [this file](https://github.com/tlevine/.prophyl-teh-awesum/blob/master/source/history-sh).
The other part is a [crontab](https://github.com/tlevine/.prophyl-teh-awesum/blob/master/crontab) entry that synchronizes my `~/.history`
directory every hour.

    @hourly cd "${HOME}/.history" && git init && git add . &&  git commit . -m "@hourly commit" && git pull ; git push
