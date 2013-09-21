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
How do we represent something more complicated than yes/no?
Let's not worry about functions for now. If the only numbers
in the universe are zero and one, how could we represent the
bit as being one of these?

Let's stop pretending that the only numbers are zero and one.
If we have two people/bits, can we represent the number two?
What about the number three? What about four? And five, and so on?

## Just whole numbers
Let's limit the numbers that we'll try representing to whole
numbers, which are integers from zero up. Add more people to
the line of bits, have them remember being on or off.

Read the number from right to left like so.

1. Start the number at zero.
2. If the right-most person is on, add one to the number.
3. If the next person is on, add two to the number.
4. If the next person is on, add four to the number.
5. And so on

Vary the length of the line of bits.
