---
title: Edit my site
description: This is how you make changes to www.thomaslevine.com.
---
Most of the articles on my site are quite a mess, and it would be nice if
that could change. Here's how you can help.

## GitHub way
At the bottom of each article is a "View Source" link.

![The "View Source" link]()

Click this link and arrive at the GitHub page for the source file for the
present page. It's usually written in [markdown]().

![The GitHub page for the present page]()

[Create an account]() if you haven't already, and
[log in]() if you haven't already.

And then make a fork of the repository in GitHub if you haven't already.
That is, click the "Fork" button to fork the `www.thomaslevine.com` project.
{:#fork}

Once you've created an account, logged in and forked, go to the "View Source"
link again. The URL is something like this.

    https://...

Switch "tlevine" for your GitHub username, and go to that URL. Then click
"Edit" and edit the page.

Once you've made a bunch of edits, you can submit a "Pull request", and
I'll get around to it eventually.

But you're better off <a href="mailto:_@thomaslevine.com">emailing me</a>
because I hardly ever look at GitHub notifications.

## Git way
There are some problems with the GitHub approach above. In particular,
it involves using the proprietary GitHub web interface, you probably
need a mouse to do it, and you can't create your own git branch. Thus,
you may prefer using git directly.

[Install git]() if you haven't already.
Then clone my repository.

    git clone git://github.com/tlevine/www.thomaslevine.com.git

Create your own repository somewhere. You could do this by creating
a fork on GitHub as explained [above](#fork), but you could also use
any number of other git hosting systems. However you wind up doing
it, add your repository as a remote. If your git remote is at
`git@gitorious.org:foobar/www.thomaslevine.com.git`, run this.

    git remote add me git@gitorious.org:foobar/www.thomaslevine.com.git

And push the present version of the site to your server.

    git push me master

Now, make your own branch. Well, you don't really need to do this,
but it makes thing cleaner.

    git checkout -b foobar

Then make your edits

    echo 'I am a banana.' > content/\!/edit-my-site/index.md

Commit them.

    git commit content/\!/edit-my-site/index.md -m banana

And push to your remote.

    git push me foobar

The cool thing about branches is that you could make a separate
branch for each group of edits. You could make a different branch
for each blog post that you edit, each paragraph that you edit,
or for each of a few alternative edits. By making branches, you
make it easy for me to include some of your changes without looking
through all of them at once.

Once you've made some edits, send me an email with the address of
the remote (`git@gitorious.org:foobar/www.thomaslevine.com.git`
in the above example).

## Licensing
I license the entirity of this site (excluding things that I don't
own and have used as fair use) under a
[Creative Commons Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/deed.en_US) license.
Thus, all of your changes will be licensed alike.
