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

One person plays the number-reader. This person reads the number
from right to left like so.

1. Start the number at zero.
2. If the right-most person is on, add one to the number.
3. If the next person is on, add two to the number.
4. If the next person is on, add four to the number.
5. And so on

Write the number from left to write, reversing the above
algorithm and accounting for powers of two.

Play with reading and writing from the line of bits, varying
the length of the line of bits.

### Unsigned and signed numbers
The act of representing numbers in the above way is called an
"unsigned" number.

You've noticed that there are only so many numbers you can
represent with so many bits. For example, the highest number
in an five-bit unsigned integer is 31, and the lowest
integer is zero.

What if we wanted to be able to represent the corresponding
negative numbers too? That is, what if we want to 
This involves representing twice as many (minus one) possible
numbers. How can we do that?

Let's add another person at the left. This person tells us
whether the number is positive or negative. Now let's
represent a very positive integer, like 200, and a very
negative integer, like -200.

This method is inefficient because it makes our algorithm more
complicated. Also, it gives us one fewer number because there
are two representations of zero.

Instead, let's just reader algorithm so the number starts from
the most negative value instead of from zero. And switch our
writer algorithm accordingly.

### Number lengths
We group bits into bytes. A byte just means "eight bits".
We still represent integers the same way as above; we just use
multiples of eight for the number of bits.

We can represent the whole numbers zero to 255 in a single byte.
In practice, we rarely use single-byte numbers. There are special
names for numbers based on their length.

* An `int16` is a two-byte (16-bit) integer.
* An `int32` is a four-byte (32-bit) integer.
* An `int64` is an eight-byte (64-bit) integer.

Each of these can be signed or unsigned. Let's perform these!
If you don't have enough people to play all of the bits, swap
people for pieces of paper that are dark on one side and light
on the other.

Some languages (including Python) abstract all of this away and
let you represent arbitrarily large numbers without worrying about
how to represent them as bits.

## Memory
The stick of memory in your computer contains lots and lots of bits.
Each bit has an address. To store a value, we indicate which bits it
is stored in, and then we set the bits.

Perform these! Arrange a bunch of cards into groups so that you can
easily address them, then flip them around and store things.
