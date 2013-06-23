---
title: Bookmarks
kind: article
created_at: 2013-06-23
tweet: Meta-hipsters do bookmarking in shell
description: Underwhelmed by existing bookmark programs, I wound up writing my own.
twitter_image: tags.png
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

Or see which how many things are in each tag.

    $ find ~/.medial_temporal_lobe/tags -type l|cut -d/ -f2|uniq -c|head -n20
      2 happstack
      1 encoding
      3 html
      1 poverty
      1 s3cmd
      1 plots
     11 passwords
      1 heroku
      3 bundler
      6 javascript
      1 popular
      1 ggplot
      5 shell
      2 new_york
      4 aluminum_bed
      2 statistics
      2 hlm
      2 foi
      1 video
      1 networkx

And combine tags.

    cd ~/.medial_temporal_lobe/tags
    git mv arch/* arch_linux
    rmdir arch
    git commit . -m 'Combine arch tags'

I also use this as a mirror for files I want to read. This is especially
helpful when I'm on a train. (I like trains.) I can bookmark/download a
bunch of files, commit them, push them, pull them from my laptop, get on
the train and then read them without an internet connection. This is, of
course, quite easy to do by other means, but it's not something I would
have done with Delicious.
