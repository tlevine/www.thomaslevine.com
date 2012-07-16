---
title: My personal computer infrastructure
---

This is the architecture that runs my various sites and other services

Here is most of the hardware.

* My office houses a Beaglebone cluster, called "cluster", my main
    workstation, called "desk", and sometimes my Lenovo IdeaPad Y560,
    called "laptop".
* I have three small virtual private servers hosted at Prometeus.
    Call these watermelon, honeydew and mango.
* A bunch of websites and backups are stored on Amason S3.
* Dynamic websites get hosted on NearlyFreeSpeech.net if possible.
* Incremental backups of private things go to Tarsnap.
* I access all of these through a dumb terminal, typically my Chromebook.

Here are their locations and functions.

<table>
  <thead>
    <tr>
      <th>Name</th><th>Internet Address</th><th>Control panel</th><th>Functions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>cluster</td><td>chainsaw.chickenkiller.com</td><td>NA</td><td>Distributed computations</td>
    </tr>
    <tr>
      <td>desk</td><td>chainsaw.chickenkiller.com</td><td>NA</td><td></td>
      <td>Database, email (offlineimap, notmuch, mutt)</td>
    </tr>
    <tr>
      <td>laptop</td><td>chainsaw.chickenkiller.com</td><td>NA</td><td></td><td>Arduino and distributed computations</td>
    </tr>
    <tr>
      <td>watermelon</td><td></td><td></td><td>[git](http://git.thomasevine.com)</td>
    </tr>
    <tr>
      <td>honeydew</td><td></td><td></td><td>[HTTP redirects](http://redirect.thomaslevine.com)</td>
    </tr>
    <tr>
      <td>mango</td><td></td><td></td>
      <td>[Fade Lee](http://fadelee.com), [Pager](http://pager.thomaslevine.com),
          [ntp.js](ttp://ntpjs.thomaslevine.com), [&c.](http://occurrence.thomaslevine.com)</td>
    </tr>
    <tr>
      <td>???</td><td></td><td></td><td>[couch](http://couch.thomasevine.com)</td>
    </tr>
    <tr>
      <td>tarsnap</td><td>NA</td><td></td><td>Email backup</td>
    </tr>
    <tr>
      <td>S3</td><td>Varies</td><td></td>
    </tr>
  </tbody>
</table>
