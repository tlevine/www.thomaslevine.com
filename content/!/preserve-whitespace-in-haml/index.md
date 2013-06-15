---
title: Preserving whitespace in haml
created_at: 2013-06-15
kind: article
---
If been to this site in the last few weeks, you've seen ugly code blocks like
this one (from my article on my [scp wrapper](/!/scp-wrapper/)).

<img alt="Code block with weird indenting"
     src="<%= @item.identifier %>unpreserved.png"
     class="wide" />

But I had intended for the blocks to look like this.

<img alt="Code block with ordinary lack of indenting"
     src="<%= @item.identifier %>preserved.png"
     class="wide" />

What happened?
I recently updated Ruby and the various gems related to my nanoc installation,
and this apparently changed the behavior of haml.

Haml pretty-prints the html that it produces, but it has a command for
[preserving whitespace](http://haml.info/docs/yardoc/file.REFERENCE.html#whitespace_preservation)
in tags like `pre` and `textarea` where you care about the whitespace.
That command is
[`~`](http://haml.info/docs/yardoc/file.REFERENCE.html#tilde),
as opposed to [`=`](http://haml.info/docs/yardoc/file.REFERENCE.html#inserting_ruby_),
and it just runs the function
[`find_and_preserve`](http://haml.info/docs/yardoc/Haml/Helpers.html#find_and_preserve-instance_method) with the default tags.

I was using `=`, so the whitespace in the code blocks was not being preserved.
I fixed this by
[changing](https://github.com/tlevine/www.thomaslevine.com/commit/bfa9a908ed4be14baf7366ddc0957e060f956ff5)
a `=` to a `~`.
