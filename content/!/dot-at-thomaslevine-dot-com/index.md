---
title: A new email address
description: Fix your email address validators, people!
tweet_text: "@facebook, @tumblr and @Pinterest don't like my new email address. http://thomaslevine.com/!/dot-at-thomaslevine-dot-com/"
tweet_link: https://twitter.com/thomaslevine/status/389497585708179456
twitter_title: Twitter's fine with it though.
twitter_image: twitter.png
facebook_image: facebook.png
created_at: 2013-10-13
kind: article
---

## Choosing an email address
Since I can have any address at thomaslevine.com,
I've had a hard time choosing one. There's a fun,
long story about previous email addresses, and I
can explain that some other time. Anyway, I've
changed my email address yet again. Here it is.

<blockquote id="e-post">
<noscript>dot at thomaslevine dot com</noscript>
</blockquote>

## Validity
Most websites are fine with this new email address,
but some don't like it.

It works in [Mailman](http://www.gnu.org/software/mailman/).

!["A confirmation message has been sent..." message](mailman.png){:.wide}

When I try to change my email address in
[Facebook](https://facebook.com/perluette),
it says I "must provide a valid email."

!["You must provide a valid email." error message](facebook.png){:.wide}

It works on [Twitter](https://twitter.com/thomaslevine).

!["A confirmation email was sent" success message](twitter.png){:.wide}

[Pinterest](https://pinterest.com/perluette) says it's "not a valid email format".

!["not a valid email format" error message](pinterest.png)

[Tumblr](https://www.tumblr.com) says it "isn't correct".

!["The email address isn't correct." error message](tumblr.png)

[PyPI](https://pypi.python.org/pypi) and 
[npm](http://npmjs.org/) let's me update my email address just fine.

But the [Arch User Repository](https://aur.archlinux.org) doesn't.

!["The email address is invalid." error message](aur.png)

[data.gov.uk](https://data.gov.uk) allows my address.

!["You will now receive an email..." message](data-uk.png){:.wide}

I couldn't test [data.gov](https://data.gov).

!["Due to the lapse in federal government funding, this website is not available"](data-us.png){:.wide}

It's not just websites that are getting it wrong; some mail servers don't
recognize it!

    <[redacted]@hotmail.com>: host mx2.hotmail.com[65.55.92.168] said: 550
    5.7.0 (SNT0-MC3-F22) Message could not be delivered. Please ensure the
    message is RFC 5322 compliant. (in reply to end of DATA command)


Fix your [email address](http://tools.ietf.org/html/rfc3696) validators, people!
