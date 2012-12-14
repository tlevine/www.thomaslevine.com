---
title: Bare domain redirect server
created_at: 2012-06-18
kind: article
---
I just switched most of my sites to S3. This has made things so simple and
easy. I have a script that mounts my S3 buckets in ~/s3 (I'll blog about it
and link that here). It uses s3fs, so when I copy my websites, it sets
appropriate headers. Then I just set bucket policies and CNAME records and
all is well. And now I have come up with a nice solution for bare domain
redirects.

I sort of wanted [mod_rewrite as a service](https://twitter.com/thomaslevine/status/214749416635105281),
but I couldn't find that, so I looked for a cheap VPS. I found a bunch of
them through [lowendbox](http://www.lowendbox.com). I settled on the cheapest
plan I could find. Here are the specs.

    KVM1 Budget KVM VPS
    1 Core / 128MB RAM / 6GB HD
    Bandwidth: 256GB
    SAS2 10K RAID storage

I installed Debian and set up a little script that lets me do this.

```#sh
ssh rewrite.thomaslevine.com 'add_rewrite thomaslevine.com'
```

I just need to point the `thomaslevine.com` A record to `rewrite`'s
IP address, run the above command, and host `www.thomaslevine.com`
somewhere else.

## Low-end VPS plans
This VPS is absurdly powerful, so I was pondering doing some other things on
the same box too. But it's so cheap (€11.25 per year) that it's sort of not
worth trying to use it to its full extend.

I might get a couple of these more for git and piwik, respectively.
Also, if you find yourself needing bare domain redirects, tell me, and I'll
be happy to set them up for you.
