#!/bin/bash

notmuch search --output=files $(date -d 2005-03-30 +%s)..$(date -d 2006-03-30 +%s) from:Thomas\ Levine|grep 'All Mail'|head > /tmp/filenames

header() {
  echo datetime,line.count,char.count
}

features() {
  # The email file
  email="$1"

  # Convert this to a CSV row.
  lines=$(wc -l "$email"|sed 's/ \/.*//')
  chars=$(wc -m "$email"|sed 's/ \/.*//')

  rawdate=$(sed -n 's/^Received: by .*; //p' "$email")
  stddate=$(date -d "$rawdate" +'%Y-%m-%d %H:%M:%S')

  echo "$stddate,$lines,$chars,"
}

header
while read line; do
  features "$line"
done < /tmp/filenames
