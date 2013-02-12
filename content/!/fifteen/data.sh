#!/bin/bash

notmuch search --output=files $(date -d 2005-03-30 +%s)..$(date -d 2006-03-30 +%s) from:Thomas\ Levine|grep 'All Mail' > /tmp/from.me
notmuch search --output=files $(date -d 2005-03-30 +%s)..$(date -d 2006-03-30 +%s) | grep 'All Mail' > /tmp/all

header() {
  echo -e "datetime\tline.count\tchar.count\tfrom\tto"
}

features() {
  # The email file
  email="$1"

  # Convert this to a CSV row.
  lines=$(wc -l "$email"|sed 's/ \/.*//')
  chars=$(wc -m "$email"|sed 's/ \/.*//')

  rawdate=$(sed -n '0,/^Received: /s/^Received: by .*; //p' "$email")
  stddate=$(date -d "$rawdate" +'%Y-%m-%d %H:%M:%S')

  from=$(sed -n '0,/^From: /s/^From: //p' "$email")
  to=$(sed -n '0,/^To: /s/^To: //p' "$email")

  echo -e "$stddate\t$lines\t$chars\t$from\t$to"
}

header > /tmp/email-from.me.tsv
while read line; do
  features "$line" >> /tmp/email-from.me.tsv
done < /tmp/from.me

header > /tmp/email-all.tsv
while read line; do
  features "$line" >> /tmp/email-all.tsv
done < /tmp/all
