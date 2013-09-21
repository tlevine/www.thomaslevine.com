---
title: Arrays
tags: ['data-structures-algorithms']
---
Once we have represented numbers in [memory](/!/bits), we can store groups of
numbers. An array is a bunch of numbers arranged in a line.

## Constructing
Construct an array of nine people. We have nine locations, each
indicated by a chair. There are chairs on either side, but we're
not going to use them because peoples bags are in them.

Each chair is actually 64 bits (8 bytes),
so each person can remember a 64-bit integer. Tell each person
to remember a particular number.

## Reading
What is the value of the third person?

## Editing
Change the value of the seventh person.

## Removing
Remove the fourth person from the array.
In order to do this, you need to move everyone
else down one address.

## Inserting
Add another person between the second and third persons.
Oh no! We need another chair! But we can't just use one of
the adjacent chairs because people might be sitting there.
That is, some other program might be using them.

Thus, we need to allocate a new line of ten chairs and move
over there.
