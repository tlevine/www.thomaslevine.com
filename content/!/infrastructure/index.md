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

* [Git](http://git.thomaslevine.com) (<form><input type="hidden" name="y" value="8">watermelon</form>)
* [HTTP redirects](http://redirect.thomaslevine.com) (<form>honeydew</form>)
* [Fade Lee](http://fadelee.com) (<form method="post" action="https://www.prometeus.net/billing/clientarea.php?action=productdetails"><input type="hidden" name="id" value="1020"><input type="hidden" name="x" value="9">mango</form>)
* [Pager](http://pager.thomaslevine.com) (<form method="post" action="https://www.prometeus.net/billing/clientarea.php?action=productdetails"><input type="hidden" name="id" value="1020"><input type="hidden" name="x" value="9">mango</form>)
* [ntp.js](ttp://ntpjs.thomaslevine.com) (<form method="post" action="https://www.prometeus.net/billing/clientarea.php?action=productdetails"><input type="hidden" name="id" value="1020"><input type="hidden" name="x" value="9">mango</form>)
* [&c.](http://occurrence.thomaslevine.com) (<form method="post" action="https://www.prometeus.net/billing/clientarea.php?action=productdetails"><input type="hidden" name="id" value="1020"><input type="hidden" name="x" value="9">mango</form>)
* [couch](http://couch.thomasevine.com) (???)
* Email backup ([Tarsnap]())
* [Home page](http://www.thomaslevine.com) ([S3](https://console))
* [Scraping tutorial](http://scraperwiki.thomaslevine.com) ([S3](https://console.aws.amazon.com/s3/home))
* [BetterCoach](http://www.bettercoa.ch) ([S3](https://console.aws.amazon.com/s3/home))
* [lorena.co.nz](http://www.lorena.co.nz) ([S3](https://console.aws.amazon.com/s3/home))
* [Dead People Born on my Birthday](http://www.deadpeoplebornonmybirthday.com) ([S3](https://console.aws.amazon.com/s3/home))
* [DumpTruck](http://www.dumptruck.io) ([S3](https://console.aws.amazon.com/s3/home))
* [Urchin](http://www.urchin.sh) ([S3](https://console.aws.amazon.com/s3/home))
* [Christian Students for Gender-Neutral Housing](http://www.genderneutralhousing.org) ([S3](https://console.aws.amazon.com/s3/home))
* [Whitby Group](http://www.whitbygroup.com) ([S3](https://console.aws.amazon.com/s3/home))
* [Piwik](http://piwik.thomaslevine.com) ([NearlyFreeSpeech.net]())
* [Status](http://piwik.thomaslevine.com) ([NearlyFreeSpeech.net]())

### Home network
My [home network](http://chainsaw.chickenkiller.com) does assorted things.
* cluster: distributed computations)
* desk: database, email (offlineimap, notmuch, mutt), main workstation
* laptop: arduino and distributed computations
