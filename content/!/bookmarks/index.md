---
title: Bookmarks
kind: article
created_at: 2013-06-18
---
I used to use [delicious](https://delicious.com/tlevine),
but I always found it rather clumsy. I tried
[gitmarks](https://github.com/tlevine/medial_temporal_lobe),
but it also seemed clumsy. So I made my own bookmark manager,
[medial-temporal lobe](https://github.com/tlevine/medial_temporal_lobe).

## How
Here's how you use it.

Save a webpage.

    mtl add http://thomaslevine.com

A randomly-named directory gets created in
`~/.medial_temporal_lobe/memories`. Inside that directory are
an `info` file with metadata, like the URL, and a `source` file,
with the content of the webpage (downloaded with wget).

You can also set tags.

    mtl add -t people,pink http://thomaslevine.com

This creates symlinks inside `~/.medial_temporal_lobe/tags`,
linking to the file in `~/.medial_temporal_lobe/memories`.

`~/.medial_temporal_lobe` is a directory, so you can
[version it with git](https://github.com/tlevine/.medial_temporal_lobe).

I haven't implemented any functions other than `add`, so you have to use
other tools for viewing, editing and deleting the bookmarks.

## Differences
I find it much easier and faster and generally more convenient to
add bookmarks with `mtl` than with Delicious, and I wind up saving
more things.

It is quite easy to tag things, so I add more tags. I generally make an
alias to facilitate this. For example, I was reading about configuring
bundler earlier today, so I wound up with a bunch of things that I wanted
to tag with "ruby" and "bundler", so I made this alias.

    alias a='mtl add -t ruby,bundler'

And then I ran `a $url` for a bunch of urls.

It is also quite easy to search things, even though I haven't implemented
an `mtl` command for it. I just run something like this.

    cd ~/.medial_temporal_temporal/tags/ruby
    cat */info

You could also search within the files, including the saved files.

    grep -r ruby ~/.medial_temporal_lobe/memories

I also use this as a mirror for files I want to read. This is especially
helpful when I'm on a train. (I like trains.) I can bookmark/download a
bunch of files, commit them, push them, pull them from my laptop, get on
the train and then read them without an internet connection. This is, of
course, quite easy to do by other means, but it's not something I would
have done with Delicious.
