---
title: Local ScraperWiki Library
created_at: 2012-06-07
kind: article
relationships: ['scraperwiki']
---

It rather annoying that you can only use the scraperwiki library
on a ScraperWiki instance; most of it could work fine elsewhere.

So I've pulled it out so you can use it offline. Well I've actually
only done it for Python so far. You can install it from PyPI.

    #!sh
    pip install scraperwiki_local

And then you can `import scraperwiki` in scripts run on your local
computer. The `scraperwiki.sqlite` component is powered by
[DumpTruck](http://dumptruck.io), which you can install independently
of `scraperwiki_local`.

    #!sh
    pip install dumptruck

## Differences

DumpTruck works a bit differently from (and better than) the hosted ScraperWiki,
library, and some of these are passed on to the scraperwiki_local library,
but the change shouldn't break much existing code. To give you an idea of the
ways they differ, here are two differences.

### Complex cell values

What happens if you do this?

    #!python
    import scraperwiki
    shopping_list = ['carrots', 'orange juice', 'chainsaw']
    scraperwiki.sqlite.save([], 'shopping_list': shopping_list)

On a ScraperWiki server, `shopping_list` is converted to its unicode
representation, which looks like this:

    #!python
    [u'carrots', u'orange juice', u'chainsaw']

In the local version, it is encoded to JSON, so it looks like this:

    #!python
    ["carrots","orange juice","chainsaw"]

And when you retrieve it, it comes back as a list rather than as a string.
And if it can't be encoded to JSON, you get an error.

### Case-insensitive column names

SQL is less sensitive to case than Python. The following code works fine
in both versions of the library.

    #!python
    In [1]: shopping_list = ['carrots', 'orange juice', 'chainsaw']

    In [2]: scraperwiki.sqlite.save([], {'shopping_list': shopping_list})

    In [3]: scraperwiki.sqlite.save([], {'sHOpPiNg_liST': shopping_list})

    In [4]: scraperwiki.sqlite.select('* from swdata')

    Out[4]: 
    [{u'shopping_list': [u'carrots', u'orange juice', u'chainsaw']},
     {u'shopping_list': [u'carrots', u'orange juice', u'chainsaw']}]

Note that the key in the returned data is 'shopping_list' and not
'sHOpPiNg_liST'; the database uses the first one that was sent.
Now let's retrieve the individual cell values.

    #!python
    In [5]: data = scraperwiki.sqlite.select('* from swdata')

    In [6]: print([row['shopping_list'] for row in data])
    Out[6][[u'carrots', u'orange juice', u'chainsaw'], [u'carrots', u'orange juice', u'chainsaw']]

The code above works in both versions of the library, but the code below
only works in the local version; it raises a KeyError on the hosted version.

    #!python
    In [7]: print(data[0]['Shopping_List'])
    Out[7][[u'carrots', u'orange juice', u'chainsaw']]

In the hosted version, `scraperwiki.sqlite.select` returns a list of ordinary
dictionaries. In the local version, `scraperwiki.sqlite.select` returns a list
of [special dictionaries](https://github.com/tlevine/dicti) that have
case-insensitive keys.

## Develop locally

Here's a start at developing ScraperWiki scripts locally, with whatever coding
environment you are used to.

For a lot of things, the local library will do the same thing as the hosted.
For another lot of things, there will be differences and the differences won't matter.

If you want to develop locally (just Python for now), you can use the local library
and then move your script to a ScraperWiki script when you've finished developing it.
Or you could just run it somewhere else.

If you like developing locally, you might also want to take a look at
[Thom Neale's ScraperWiki scraper](https://github.com/twneale/scraperwikiscraper).
