---
title: Installing Selenium
created_at: 2012-04-24
kind: article
tags: ['data']
---

The Selenium Server documentation is unnecessarily painful;
installing Selenium is not hard.

Set up a real framebuffer or a
[virtual framebuffer](http://dionysus.uraganov.net/software/how-to-install-selenium-server-with-firefox-on-ubuntu-11-10/)

Download the selenium **standalone** version.

    wget http://selenium.googlecode.com/files/selenium-server-standalone-2.21.0.jar

Run it.

    # If you're using a virtual framebuffer, start it like so
    Xvfb :99 -ac &
    export DISPLAY=:99seleniumrc
    
    java -jar selenium-server-standalone-2.21.0.jar -port 4443

Set that up as a daemon if you wish.

## Chrome
You need the Chrome driver in order to use Selenium with Chrome.
Download it [here](http://code.google.com/p/chromedriver/downloads/list),
unzip it, and put the contained `chromedriver` file in your path.
If you have my computer, you might run something like this.

    wget http://chromedriver.googlecode.com/files/chromedriver_linux64_2.3.zip
    unzip chromedriver_linux64_2.3.zip
    export PATH="$PATH:$PWD"

The Chrome driver expects Chrome, not Chromium. If you want to use Chromium,
make Chromium look like Chrome; run this as your user.

    alias chrome=chromium

(Those directions came from [here](https://bitbucket.org/ScraperWiki/scraperwiki-classic/wiki/RunningTests#!installing-chrome).)

The previous two code blocks must be run in the same shell session as the one
where you are going to run `java -jar selenium-server-standalone-2.21.0.jar -port 4443`.
