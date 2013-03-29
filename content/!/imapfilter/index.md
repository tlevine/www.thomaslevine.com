---
title: imapfilter
created_at: 2013-03-29
kind: article
---
I use [imapfilter](https://github.com/lefcha/imapfilter) to filter my mail.
It's awesome.

## So simple
I just wrote a `~/.imapfilter/config.lua` file and added `imapfilter`
to my email-synchronization [crontab](https://github.com/tlevine/.prophyl-teh-awesum/blob/54c7b7ec472ac53c2dbf445e81b393c3bc26ad3e/crontab) entry.

    @hourly imapfilter && offlineimap && notmuch new 

## Overview of filters
All mail comes into the "INBOX" folder.

I use imapfilter to move some messages into "Spam" and others into "Pulse".
"Spam" is for spam, "Pulse" is for emails that I use for statistical
modelling but don't read directly.

Most of my emails go to "Pulse", but some stay in "INBOX".

            Pulse
              |
    Mail -> INBOX
              |
            Spam 

## My configuration
Some of the filters that I use contain information that could be unsafe to post
publically, so I've removed some of the pulse filters, replaced them with the
line `-- ...`, and posted the configuration [here](<%= @item.identifier %>config.lua).
I walk through it below.

First, I set some options that were in the configuration files that I based
mine on. I don't know what they do.

    options.timeout = 120
    options.subscribe = true

Second, I define a function for pulling my email address and password from my
[.offlineimaprc](http://offlineimap.org/).

    function offlineimap (key)
      local status
      local value
      status, value = pipe_from('grep -A2 mail.gandi.net ~/.offlineimaprc | grep ' .. key .. '|cut -d= -f2')
      value = string.gsub(value, ' ', '')
      value = string.gsub(value, '\n', '')
      return value
    end

Third, I set the IMAP account credentials.

    ----------------
    --  Accounts  --
    ----------------

    T = IMAP {
        server   = offlineimap('remotehost'),
        username = offlineimap('remoteuser'),
        password = offlineimap('remotepass'),

        ssl = 'ssl3',
        port = 993,
    }

I select the things to be moved into "Pulse".

    pulse = (
        T.INBOX:contain_from('facebookmail.com') +
        T.INBOX:contain_from('twitter.com') +
        T.INBOX:contain_from('voice.google.com') +
        T.INBOX:contain_from('postmaster.twitter.com') +
        T.INBOX:contain_from('linkedin.com') + T.INBOX:contain_field('Reply-To', 'reply.linkedin.com') +
        T.INBOX:contain_from('voice-noreply@google.com') +
        T.INBOX:contain_from('plus.google.com') +
        -- ...
        T.INBOX:contain_from('github.com')
    )

Then I move them.

    pulse:move_messages(T.Pulse)

And I do the same for "Spam".

    spam = (
        T.INBOX:contain_from('FattorossTedCEO@aol.com') +
        T.INBOX:contain_subject('PMX:#')
    )
    spam:move_messages(T.Spam)
