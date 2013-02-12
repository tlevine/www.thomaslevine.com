

This happened.

![Screenshot of a facebook message where Danger "gives" Tom the "age" "15"]()


While I was fifteen, I sent 989 emails.

    $ notmuch search --output=files $(date -d 2005-03-30 +%s)..$(date -d 2006-03-30 +%s) from:Thomas\ Levine|grep 'All Mail'|wc -l
    989

I received 9730 (10719 minu 989) emails.

    $ notmuch search --output=files $(date -d 2005-03-30 +%s)..$(date -d 2006-03-30 +%s) |grep 'All Mail'|wc -l
    10719

