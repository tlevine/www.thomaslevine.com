---
title: Foo
created_at: 2013-10-10
kind: article
---

This happened.

![Screenshot of a facebook message where Danger "gives" Tom the "age" "15"]()

I received no further direction. So the present writing happened.

While I was fifteen, I sent 989 emails.

    $ notmuch search --output=files $(date -d 2005-03-30 +%s)..$(date -d 2006-03-30 +%s) from:Thomas\ Levine|grep 'All Mail'|wc -l
    989

I received 9730 (10719 minus 989) emails.

    $ notmuch search --output=files $(date -d 2005-03-30 +%s)..$(date -d 2006-03-30 +%s) |grep 'All Mail'|wc -l
    10719

I made some plots and stuff. Something happened in June 2005.

    notmuch search $(date -d 2005-06-01 +%s)..$(date -d 2005-07-01 +%s) from:Thomas\ Levine

It looks like that was just a conversation about some mathematical series.

I found it slightly more interesting just to read the titles of the emails.

    notmuch search $(date -d 2005-03-30 +%s)..$(date -d 2006-03-30 +%s)|less

Things that stand out:

* I emailed lots of Gmail invites to myself.
* I studied some Esperanto with the help of a tutor, Detlef
* Many emails pertained to these school clubs
  * Shakespeare
  * Math team, Pythagoreans and chess club (the same group of people)
  * Technology club
* I emailed school assignments to myself.
* I went to France that summer.
