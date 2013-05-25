---
title: URL Encoding and Decoding
tags: ['dotfiles']
created_at: 2012-06-15
kind: article
---
There was a time when I quite often wanted to encode or decode a URL.
Conveniently, someone had already written
[this](http://ruslanspivak.com/2010/06/02/urlencode-and-urldecode-from-a-command-line/).

    alias urlencode='python -c "import sys, urllib as ul; orig = sys.argv[1] if len(sys.argv) == 2 else sys.stdin.read() ; print ul.quote_plus(orig)"'
    alias urldecode='python -c "import sys, urllib as ul; orig = sys.argv[1] if len(sys.argv) == 2 else sys.stdin.read() ; print ul.unquote_plus(orig)"'

It accepts input from `/dev/stdin` and from `$1`. That is, both of these
commands produce the same thing.

    urlencode 'localhost:8000/?q=SELECT needle FROM haystack LIMIT 3;'
    echo 'localhost:8000/?q=SELECT needle FROM haystack LIMIT 3;'|urlencode
