---
title: Shell Testing
created_at: 2012-12-01
kind: article
---
Extreme hipster superheroes like me need tests for their shell. Here's what's
available.

## YOLO: No automated testing
Few shell scripts have any automated testing because shell programmers live
life on the edge. Inevitably, this results in tedious manual 'testing'. Loads
of projects use this approach.

* [git flow](https://github.com/nvie/gitflow)
* [rbenv](https://github.com/sstephenson/rbenv)
* Shell frameworks
  * [bashinator](http://www.bashinator.org/)
  * [bash-it](https://github.com/revans/bash-it)
  * [prezto](https://github.com/sorin-ionescu/prezto)
  * [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)
* [ievms](https://github.com/xdissent/ievms/blob/master/ievms.sh)
* [z](https://github.com/rupa/z)

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

[Roundup](http://bmizerany.github.com/roundup/) lets you define tests as
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
provides some special shell-style assertions ("Matchers") that are specified as
shell comments. Rather than just testing status codes or stdout, you can also
test environment characteristics, and you can test multiple properties of one
command. [rvm](https://github.com/wayneeseguin/rvm-test) uses it.

There are some language-agnostic protocals with assertion libraries in multiple
languages. The idea is that you can combine test results from several
languages. I guess this is more of a big deal for shell than for other
languages because shell is likely to be used for a small componend of a project
that mostly uses another language.
[WvTest](https://github.com/apenwarr/wvtest/blob/master/sh/t/twvtest.sh) and
[Test Anything Protocal](http://testanything.org/wiki/index.php/Tap-functions)
(This site is down for me right now.) are examples of that.

Even though all of these frameworks exist, the artisinal test frameworks are
often specially crafted for a specific projects. This is the case for
[bash-toolbox](https://github.com/codigorama/bash-toolbox/blob/master/lib/asserts.sh)
and [treegit](https://github.com/tlevine/treegit/blob/master/tests).

## Ironic elegance: Design for the shell
Assertion libraries are common and reasonable in other languages, but I don't
think they work as well for shell. Shell uses a bizarre concept of input and
output, so the sort of assertion functions that work in other languages don't
feel natural to me in shell.

[cmdtest](http://liw.fi/cmdtest/) is 

* urchin


nvm and lithium and urchin and ?

## Final thoughts
blah blah

Note that you can always test one language in another. This is quite ugly in
most languages, but testing other languages from shell isn't so bad. For most
of the approaches above, you'd just run the other-language program from the
test case. In urchin, you can even write the test in the other language and
return an appropriate exit code.

Some general ways of categorizing these frameworks? Maybe?

* Testing stdout or arbitrary tests
* Test functions
* Specifying stdin
* Urchin's API is files rather than functions.

Conclusionary conclusion
