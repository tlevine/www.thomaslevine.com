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

## Indecision: Automated commands with manual human review

* [git-achievements]()
https://github.com/icefox/git-achievements/blob/9a8921e5a6fbf6adf2c20d34165d9269b693e40a/test/testscript

## Simple assertion functions
This is often a bespoke artisinal function written for a specific project.

* custom (rvm, treegit, )
* https://code.google.com/p/shunit2/

## Protocals

* https://github.com/apenwarr/wvtest/blob/master/sh/t/twvtest.sh
* http://testanything.org/wiki/index.php/Tap-functions

## Designed for the shell

* http://bmizerany.github.com/roundup/
* urchin

Distinguishing among frameworks

* Testing stdout or arbitrary tests
* Test functions
* Specifying stdin
* Urchin's API is files rather than functions.
