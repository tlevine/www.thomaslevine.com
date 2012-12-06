---
title: Tests for your shell
created_at: 2012-12-12
kind: article
---
Extreme hipster superheroes like me need tests for their shell. Here's what's
available.

## YOLO: No automated testing
Few shell scripts have any automated testing because shell programmers live
life on the edge. Inevitably, this results in tedious manual 'testing'. Loads
of projects use this approach.

* [git flow](https://github.com/nvie/gitflow)
* [homeshick](https://github.com/andsens/homeshick)
* [ievms](https://github.com/xdissent/ievms/blob/master/ievms.sh)
* [rbenv](https://github.com/sstephenson/rbenv)
* [z](https://github.com/rupa/z)

Here are some more. I separated them because they're all shell profiles.

* [bashinator](http://www.bashinator.org/)
* [bash-it](https://github.com/revans/bash-it)
* [prezto](https://github.com/sorin-ionescu/prezto)
* [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)

## Posers: Automated commands with manual human review
You can easily generate a rough test suite by just saving the commands you used
for manual debugging; this creates the illusion of living only once while
actually living multiple times. Here are some examples.

* [git-achievements](https://github.com/icefox/git-achievements/blob/9a8921e5a6fbf6adf2c20d34165d9269b693e40a/test/testscript).
* [xcat](http://sourceforge.net/apps/mediawiki/xcat/index.php?title=Programming_Tips#Testing_Man_Pages)

## Mainstream: Test cases are functions
This approach is somewhat standard in other languages. Write functions inside
of files or classes, and run assertions within those functions. Failed
assertions and other errors are caught and raised.

In [Roundup](http://bmizerany.github.com/roundup/), test cases are
functions, and their return code determines whether the test passes. Shell
already has a nice assertion function called `test`, so Roundup doesn't need
to implement its own. It also helps you structure your tests; you can use the
`describe` function to name your tests, and you can define `before` and `after`
functions to be run before and after test cases, respectively. For an example
of roundup in action, check out [spark](https://github.com/holman/spark/blob/master/spark-test.sh)

[shunit](https://code.google.com/p/shunit2/) is similar. One notable difference
is that it defines its own assertion functions, like `assertEquals` and
`assertFalse` [git-ftp](https://github.com/resmo/git-ftp/blob/develop/tests/git-ftp-test.sh)
uses it.

[tf](https://github.com/mpapis/tf) is also similar, but it is cool because it
provides some special shell-style assertions ("matchers") that are specified as
shell comments. Rather than just testing status codes or stdout, you can also
test environment characteristics, and you can test multiple properties of one
command. [rvm](https://github.com/wayneeseguin/rvm-test) uses it.

There are some language-agnostic protocals with assertion libraries in multiple
languages. The idea is that you can combine test results from several
languages. I guess this is more of a big deal for shell than for other
languages because shell is likely to be used for a small component of a project
that mostly uses another language.
[WvTest](https://github.com/apenwarr/wvtest/blob/master/sh/t/twvtest.sh) and
[Test Anything Protocal](http://testanything.org/wiki/index.php/Tap-functions)
(This site is down for me right now.) are examples of that.

Even though all of these frameworks exist, artisinal test frameworks are
often specially crafted for a specific projects. This is the case for
[bash-toolbox](https://github.com/codigorama/bash-toolbox/blob/master/lib/asserts.sh)
and [treegit](https://github.com/tlevine/treegit/blob/master/tests).

Implementing your own framework like this is pretty simple; the main thing you
need to know is that `$?` gives you the exit code of the previous command, so
something like this will tell you whether the previous command passed.

    [ "$?" = '0' ]

## Ironic elegance: Design for the shell
Assertion libraries are common and reasonable in other languages, but I don't
think they work as well for shell. Shell uses a bizarre concept of input and
output, so the sort of assertion functions that work in other languages don't
feel natural to me in shell; shell thinks differently.

In [Urchin](http://www.urchin.sh), test cases are executable files. A test
passes if its exit code is 0. You can define setup and teardown procedures;
these are also files. For an example of Urchin tests, check out
[nvm](https://github.com/creationix/nvm/tree/master/test/fast).
(By the way, I wrote both Urchin and the nvm tests.)

In [cmdtest](http://liw.fi/cmdtest/), one test case spans multiple files.
Minimally, you provide the test script, but you can also provide files for the
stdin, the intended stdout, the intended stderr and the intended exit code.
Like in urchin, the setup and teardown procedures are files.

The fundamental similarity that I see between Urchin and cmdtest is that they
are based on files rather than functions; this is totally the shell way to do
things. There are obviously other similarities between these two frameworks,
but I think most of the other similarities can be seen as stemming from the
file basis of test cases.

Here's one particularly cool feature that might not be obvious.
Earlier, I mentioned some protocals for testing in multiple languages. I found
them somewhat strange because I see shell as the standard interface between
languages. In Urchin and cmdtest, test cases are just files, so you can
actually use these frameworks to test code written in any language.

## Which framework should I use?
If you are writing anything complicated in shell, it could probably use some
tests. For the simplest tests, writing your own framework is fine, but for
anything complicated, I recommend either Urchin or cmdtest. You'll want to use
a different one depending on your project.

cmdtest makes it easy to specify inputs and test outputs, but it doesn't have
a special way of testing what files have changed. Also, the installation is a
bit more involved.

Urchin doesn't help you at all with outputs, but it makes testing side-effects
easier. In urchin, you can nest tests inside of directories; to test a
side-effect, you make a subdirectory, put the command of interest in the
`setup_dir` file and then test your side effects in your test files.
Urchin is also easier to install; it's just a shell script.

I recommend cmdtest if you are mainly testing input and output; otherwise, I
recommend Urchin. If you are working on a very simple project, you might also
consider writing your own framework.

## For hip trend-setters like me
Test-driven development is mainstream in other languages
but uncommon in shell. Nobody does test-driven development in shell, so all of
these approaches are ahead of the curve. Hip programmers like me know this, so
we're testing our shell scripts now, before shell testing gets big.
