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

## Mainstream: Assertion functions
This approach is somewhat standard in other languages. Write functions inside
of files or classes, and run assertions within those functions. Failed
assertions and other errors are caught and raised. There is a 
[shunit](https://code.google.com/p/shunit2/), and some projects use it.

* [git-ftp](https://github.com/resmo/git-ftp/blob/develop/tests/git-ftp-test.sh)

But this is often an artisinal function, specially crafted for a specific project.

* [treegit](https://github.com/tlevine/treegit/blob/master/tests)
* [bash-toolbox](https://github.com/codigorama/bash-toolbox/blob/master/lib/asserts.sh)

## Protocals

* https://github.com/apenwarr/wvtest/blob/master/sh/t/twvtest.sh
* http://testanything.org/wiki/index.php/Tap-functions

## Design for the shell

* [tf](https://github.com/mpapis/tf)
  * rvm uses it https://github.com/wayneeseguin/rvm-test
* http://bmizerany.github.com/roundup/
  * spark uses this https://github.com/holman/spark/blob/master/spark-test.sh
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
