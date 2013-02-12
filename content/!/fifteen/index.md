

This happened.

![Screenshot of a facebook message where Danger "gives" Tom the "age" "15"]()


While I was fifteen, I sent 989 emails.

    $ notmuch search --output=files $(date -d 2005-03-30 +%s)..$(date -d 2006-03-30 +%s) from:Thomas\ Levine|grep 'All Mail'|wc -l
    989

I received 9730 (10719 minus 989) emails.

    $ notmuch search --output=files $(date -d 2005-03-30 +%s)..$(date -d 2006-03-30 +%s) |grep 'All Mail'|wc -l
    10719

I made some plots and stuff. Something happened in June 2005.

    notmuch search $(date -d 2005-06-01 +%s)..$(date -d 2005-07-01 +%s) from:Thomas\ Levine
