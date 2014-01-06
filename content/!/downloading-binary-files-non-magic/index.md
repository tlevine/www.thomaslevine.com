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

### As one code block
The code above is separated across multiple blocks.
Here is the code for downloading the file and then
saving it to a file, in one code block.

    # Python
    import requests
    response = requests.get('http://thomaslevine.com')
    open('/tmp/www.thomaslevine.com', 'wb').write(response.content)

### More about HTTP
If you're curious, you can read a bit more about how HTTP
works in these places:

* a
* b
* c

## Bytes and bits
The `response.content` is displayed as a series of characters, but it is
stored in Python as bytes.

    In : type(response.content)
    Out: builtins.bytes

Starting with the above example, it becomes relevant that I'm using Python 3
(specifically, 3.3.3) and not Python 2.

### Bytes as characters
It's easy to confuse the two because we often
represent bytes as characters when displaying them.
At a lower level, bytes represent numbers between 0 and 255 (inclusive),
so we can also represent bytes as a series of numbers; here are the first
ten bytes represented as characters.

    print(response.content[:10])
    # b'<!DOCTYPE '

### Bytes as numbers
And here they are represented as numbers.

    print([x for x in response.content[:10]])
    # [60, 33, 68, 79, 67, 84, 89, 80, 69, 32]

### Bytes as base 2 numbers
We happen to represent numbers in base 10 usually, but
we could also represent these bytes as numbers in base two.

    print([bin(x) for x in response.content[:10]])
    # [ '0b111100',  '0b100001', '0b1000100',
    #  '0b1001111', '0b1000011', '0b1010100',
    #  '0b1011001', '0b1010000', '0b1000101',
    #   '0b100000']

The number is the part after `0b`; the following representation
might be more clear

    print([bin(x)[2:].zfill(8) for x in response.content[:10]])
    # ['00111100', '00100001', '01000100',
    #  '01001111', '01000011', '01010100',
    #  '01011001', '01010000', '01000101',
    #  '00100000']

### Bytes are eight bits
To be clear, I've shown these three representations of the
first byte.

1. As a character, it's `<`.
2. As a base 10 number, it's 60.
3. As a base 2 number, it's 111100.

Each byte is made of eight bits. Each bit can be on or off.
If you have eight light switches, there are 256 different lighting
combinations ($$2^8$$), and this is how we arrive at the aforementioned
range of byte values.

To say it another way, the highest possible value for a byte is 255.

    In [50]: bytes([255])
    Out[50]: b'\xff'

I'll get an error if I try to make a byte of value 256.

    In [51]: bytes([256])                                                                                                                   
    ---------------------------------------------------------------------------
    ValueError                                Traceback (most recent call last)
    <ipython-input-51-a19a7ec1812b> in <module>()
    ----> 1 bytes([256])

    ValueError: bytes must be in range(0, 256)

### Bits
So far, I've been representing the HTML as a series of bytes.
We could also represent it as a series of bits, not grouped
into bytes.

    print(''.join(bin(x)[2:].zfill(8) for x in response.content[:10]))
    # 00111100001000010100010001001111010000110101010001011001010100000100010100100000

`bin(x)[2:].zfill(8)` is my hacky and concise way of converting an integer into
a string of zeros and ones.

### Encodings
If I wanted to remember that mommy was riding a horse, I might use a pen to
write "Mommy is riding a horse." When I type this on a keyboard and save it
as a file, I'm representing the sentence as a series of bytes (numbers between 0 and 255).

There are all sorts of methods by which we could represent the sentence as
numbers, and each of these different methods is called an "encoding".
For example, we could assign a number to each sentence.

|Number|Sentence|
|------|--------|
|     0|Mommy is riding a horse.|
|     1|Daddy is riding a horse.|
|     2|Mommy is riding an elephant.|
|     3|Daddy is riding an elephant.|

Or we could assign a number to each word.

|Number|Sentence|
|------|--------|
|     0|Mommy|
|     1|is|
|     2|riding|
|     3|a|
|     4|horse|
|     5|.|
|     6|Daddy|
|     7|elephant|

We could also do something more complicated, like having numbers for different
languages, grammatical constructs, and capitalizations.

It's a lot of work to explain how an encoding works, so it's nice if we can
all use the same encodings rather than always inventing our own. By now,
we have a few standard ways of encoding text.

I downloaded a text webpage, and it got sent to me as bytes, and there are a
lot of ways we can represent bytes. One way we can represent bytes is as
characters, through an encoding called [latin1](http://en.wikipedia.org/wiki/ISO/IEC_8859-1).
But there are other encodings. Here's a sentence.

    sentence = bytes([229, 170, 189, 229, 170, 189, 233, 168, 142,
                      233, 166, 172, 239, 188, 140, 233, 166, 172,
                      230, 133, 162, 239, 188, 140, 229, 170, 189,
                      229, 170, 189, 231, 189, 181, 233, 166, 172,
                      227, 128, 130])

Let's decode it with latin1.

    print(sentence.decode('latin1'))
    # åª½åª½é¨é¦¬ï¼é¦¬æ¢ï¼åª½åª½ç½µé¦¬ã

That looks ugly; maybe it was encoded as something other than latin1.
It turns out that it was encoded as [UTF-8](http://en.wikipedia.org/wiki/UTF-8).

    print(sentence.decode('utf-8'))
    # 媽媽騎馬，馬慢，媽媽罵馬。

## Downloading a video
A video file is also a series of bytes, but it is not encoded as latin1.
It's also not encoded as utf-8. For example, this
[video about open data](http://thomaslevine.com/!/open-data-in-plain-english/open-data-in-plain-english.webm)
is encoded as [WebM](http://en.wikipedia.org/wiki/WebM).

Regardless of the encoding, it's still a series of bytes, and we don't need to
know anything about the encoding in order to download a series of bytes;
downloading this file is the same as downloading a text file.

    # Python
    import requests
    url = 'http://thomaslevine.com/!/open-data-in-plain-english/open-data-in-plain-english.webm'
    response = requests.get(url)
    open('/tmp/open-data-in-plain-english.webm', 'wb').write(response.content)

We could decode the bytes with one of our text decoders, but it will probably
look pretty nonsense.

    In [153]: print(response.content[:10])
    b'\x1aE\xdf\xa3\x01\x00\x00\x00\x00\x00'

    In [154]: print(response.content[:20].decode('latin1'))
    '\x1aEß£\x01\x00\x00\x00\x00\x00\x00\x1fB\x86\x81\x01B÷\x81\x01'

Yep, nonsense. And the UTF-8 decoder doesn't even understand it.

    In [155]: print(response.content[:20].decode('utf-8'))
    ---------------------------------------------------------------------------
    UnicodeDecodeError                        Traceback (most recent call last)
    <ipython-input-155-c3e10d8dd816> in <module>()
    ----> 1 response.content.decode('utf-8')

    UnicodeDecodeError: 'utf-8' codec can't decode byte 0x86 in position 13: invalid start byte

It might make more sense if we play the file with a video player
that understands WebM.

    mplayer /tmp/open-data-in-plain-english.webm

## Footnotes

[^protocol]:
    (I say "usually" because this only happens if you are using
    HTTP; if the url you enter starts with "ftp://", for example,
    it does something different.)
