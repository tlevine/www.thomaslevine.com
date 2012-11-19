---
title: Shell Testing
created_at: 2012-12-01
kind: article
---
Extreme hipster superheroes like me need tests for their shell. Here's what's
available.

## YOLO: No automated testing
Few shell scripts have any automated testing because shell programmers live
life on the edge. Inevitably, this results in tedious manual 'testing'. Here
are some projects that use this approach

nvm before i made them
http://www.bashinator.org/
https://github.com/revans/bash-it
https://github.com/sorin-ionescu/prezto
https://github.com/robbyrussell/oh-my-zsh
https://github.com/nvie/gitflow
https://github.com/sstephenson/rbenv
https://github.com/rupa/z
https://github.com/xdissent/ievms/blob/master/ievms.sh

## Posers: Automated commands with manual human review
You can easily generate a rough test suite by just saving the commands you used
for manual debugging. For example,
[git-achievements has this](https://github.com/icefox/git-achievements/blob/9a8921e5a6fbf6adf2c20d34165d9269b693e40a/test/testscript).
(I've actually written [better tests](https://github.com/tlevine/git-achievements/tree/gh-pages/test) for it,
but they haven't made their way in.)

http://sourceforge.net/apps/mediawiki/xcat/index.php?title=Programming_Tips#Testing_Man_Pages

## Mainstream: Assertion functions
This approach is somewhat standard in other languages. Write functions inside
of files or classes, and run assertions within those functions. Failed
assertions and other errors are caught and raised. There is a 
[shunit](https://code.google.com/p/shunit2/), but most shell projects

* git-ftp uses shunit https://github.com/resmo/git-ftp/blob/develop/tests/git-ftp-test.sh

This is often a bespoke artisinal function written for a specific project.

* custom (rvm, treegit, )
https://github.com/codigorama/bash-toolbox


## Protocals

* https://github.com/apenwarr/wvtest/blob/master/sh/t/twvtest.sh
* http://testanything.org/wiki/index.php/Tap-functions

## Design for the shell

* http://bmizerany.github.com/roundup/
  * spark uses this https://github.com/holman/spark/blob/master/spark-test.sh
* urchin

Distinguishing among frameworks

* Testing stdout or arbitrary tests
* Test functions
* Specifying stdin
* Urchin's API is files rather than functions.

## Final thoughts
blah blah

Note that you can always test one language in another. This is quite ugly in
most languages, but testing other languages from shell isn't so bad. For most
of the approaches above, you'd just run the other-language program from the
test case. In urchin, you can even write the test in the other language and
return an appropriate exit code.

Conclusionary conclusion
