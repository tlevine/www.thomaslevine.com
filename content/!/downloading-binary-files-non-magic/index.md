If you have some idea of how to write a website,
you 

complicated but not magic



## Downloading a text file
When you type in a URL in your web browser and hit enter,
your web browser usually makes an HTTP GET request.[^protocol]
You can do that like so in [Python]()
with [requests]().

    #! Python
    import requests
    response = requests.get('http://thomaslevine.com')

This response object contains a lot of things, including
the body of the response, which is the HTML of the webpage.
Let's look at the first 200 characters.

    # Python
    print(response.content[:200])

This is the result.

    b'<!DOCTYPE html>\n<!--[if lt IE 7]> <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">\n<html class="no-js lt-ie9 lt-ie8 lt-ie7"></html>\n <![endif]'

I can save this stuff to a file.

    # Python
    open('/tmp/www.thomaslevine.com', 'wb').write(response.content)

And once I do that, it's an ordinary text file.

    # Shell
    head /tmp/www.thomaslevine.com

This is what I get back from head.

    <!DOCTYPE html>
    <!--[if lt IE 7]> <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
    <html class="no-js lt-ie9 lt-ie8 lt-ie7"></html>
     <![endif]--><!--[if IE 7]>    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
    <html class="no-js lt-ie9 lt-ie8"></html>
     <![endif]--><!--[if IE 8]>    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
    <html class="no-js lt-ie9"></html>
     <![endif]--><!--[if gt IE 8]><!--><html class="no-js">
      <!--<![endif]-->
      <head>

### More about HTTP for the curious
If you're curious, you can read a bit more about how that
works in these places:

* a
* b
* c

## Bytes and bits


## Downloading an image

import requests
response = requests.get('
http://thomaslevine.com/!/open-data-in-plain-english/open-data-in-plain-english.webm
')
response.status_code
response.headers
response.content[:10]
fp = open('/tmp/a.webm', 'wb')
fp.write(response.content)
open('/tmp/aasdfasdf', 'w').write('subway')
history

## Footnotes

[^protocol]:
    (I say "usually" because this only happens if you are using
    HTTP; if the url you enter starts with "ftp://", for example,
    it does something different.)
