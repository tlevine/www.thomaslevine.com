#!/bin/bash

notmuch search --output=files $(date -d 2005-03-30 +%s)..$(date -d 2006-03-30 +%s) from:Thomas\ Levine|grep 'All Mail' > /tmp/filenames

header() {
  echo "email\tdatetime\tline.count\tchar.count\tfrom\tto"
}

features() {
  # The email file
  email="$1"

  # Convert this to a CSV row.
  lines=$(wc -l "$email"|sed 's/ \/.*//')
  chars=$(wc -m "$email"|sed 's/ \/.*//')

  rawdate=$(sed -n 's/^Received: by .*; //p' "$email")
  stddate=$(date -d "$rawdate" +'%Y-%m-%d %H:%M:%S')

  from=$(sed -n 's/From: //p' "$email")
  to=$(sed -n 's/To: //p' "$email")

  echo "$email\t$stddate\t$lines\t$chars\t$from\t$to"
}

header > /tmp/email.tsv
while read line; do
  features "$line" >> /tmp/email.tsv
done < /tmp/filenames
