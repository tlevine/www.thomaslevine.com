---
title: Bookmarks
---
I used to use [delicious](),
but I always found it rather clumsy. I tried
[gitmarks](),
but it also seemed clumsy. So I made my own bookmark manager,
[Medial-temporal lobe]().
Here's how you used it.

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
[version it with git]().

I haven't implemented any functions other than `add`, so you have to use
other tools for viewing, editing and deleting the bookmarks.
