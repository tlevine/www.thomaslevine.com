---
title: My personal computer infrastructure
---

This is the architecture that runs my various sites and other services

### Hardware

* My office houses a Beaglebone cluster, called "cluster", my main
    workstation, called "desk", and sometimes my Lenovo IdeaPad Y560,
    called "laptop".
* I have three small virtual private servers hosted at Prometeus.
    Call these watermelon, honeydew and mango.
* A bunch of websites and backups are stored on Amason S3.
* Dynamic websites get hosted on NearlyFreeSpeech.net if possible.
* Incremental backups of private things go to Tarsnap.
* I access all of these through a dumb terminal, typically my Chromebook.

### Services
Here are the services and their associated computers.

<form method="post" action="https://www.prometeus.net/billing/clientarea.php?action=productdetails"><input type="hidden" name="x" value="9"><input type="hidden" name="y" value="8">(<input type="submit" value="watermelon">)</form>

* [Git](http://git.thomaslevine.com) ([Prometeus](https://www.prometeus.net/billing/clientarea.php?action=products) id 1192)
* [HTTP redirects](http://redirect.thomaslevine.com) ([Prometeus](https://www.prometeus.net/billing/clientarea.php?action=products) id 1015)
* [Fade Lee](http://fadelee.com) ([Prometeus](https://www.prometeus.net/billing/clientarea.php?action=products) id 1020)
* [Pager](http://pager.thomaslevine.com) ([Prometeus](https://www.prometeus.net/billing/clientarea.php?action=products) id 1020)
* [ntp.js](ttp://ntpjs.thomaslevine.com) ([Prometeus](https://www.prometeus.net/billing/clientarea.php?action=products) id 1020)
* [&c.](http://occurrence.thomaslevine.com) ([Prometeus](https://www.prometeus.net/billing/clientarea.php?action=products) id 1020)
* [couch](http://couch.thomasevine.com) (???)
* Email backup ([Tarsnap]())
* [thomaslevine.com](http://www.thomaslevine.com) ([S3](https://console))
* [Scraping tutorial](http://scraperwiki.thomaslevine.com) ([S3](https://console))
* [BetterCoach](http://bettercoa.ch) ([S3](https://console))
* []() ([S3](https://console))
* []() ([S3](https://console))
* []() ([S3](https://console))
* [Piwik](http://piwik.thomaslevine.com) ([NearlyFreeSpeech.net]())
* [Status](http://piwik.thomaslevine.com) ([NearlyFreeSpeech.net]())

### Home network
My [home network](http://chainsaw.chickenkiller.com) does assorted things.
* cluster: distributed computations)
* desk: database, email (offlineimap, notmuch, mutt), main workstation
* laptop: arduino and distributed computations
