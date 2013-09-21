---
title: Bits
tags: ['data-structures-algorithms']
---
What are bits and bytes and memory and 32-bit integers?
Here are instructions for games with people that introduce these concepts.

## One bit
Let's represent one person as a bit. The person is always
"on" or "off", and this is the only thing she can remember.
We can use this person in a program to remember something.

We have two functions in our program that are exchanging
information. One of them checks whether the weather will
be rainy tomorrow. It sets the value of the bit. The other
function tells us [whether to bring an umbrella](http://umbrellatoday.com/).

In Python, they might look like this.


    def function_one():
        # Pretend that tomorrows_weather is defined elsewhere.
        return tomorrows_weather() == 'rainy'

    def function_two(bit):
        if bit:
            print 'Bring an umbrella.'
        else:
            print "Don't bring an umbrella."

    bit = function_one()
    function_two(bit)

## A few bits
