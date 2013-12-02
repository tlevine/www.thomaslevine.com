#!/bin/sh
for epochtime in $(grep '^#[0-9]\{10\}$' ~/.history/sh-2013-1[12]*|cut -d\# -f2); do
  date --date=@$epochtime +%H
done | sort | uniq -c | awk '{print $2, "%"$1"s"}' > /tmp/formatted

while read line; do
  # Remove the first space
  nospace=$(echo $line | sed 's/ //')
  printf "$line\n" | tr \  -|sed s/----------------------------------------/=/g|sed -e s/-//g -e 's/=/ =/'
done < /tmp/formatted
