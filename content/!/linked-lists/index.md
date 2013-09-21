---
title: Arrays
tags: ['data-structures-algorithms']
---
Once we have represented numbers in [memory](/!/bits), we can store groups of
numbers. A list is a bunch of numbers arranged in order but not in a line.

Arrange some chairs in four rows of four. Each chair has an address, like
(0, 2) or (3, 1).

The person leading these games plays the computer program.

## Constructing
Each person represents a "cons cell". A cons cell can remember two things:
a value and an address.

For this game, let's say that the value must be a 64-bit integer.

### First element
The program tells one person to sit down at a particular chair, to remember
a particular number, and not to remember an address. The program has to remember
where this person is.

### Second element
The program asks the first element what address he remembered. The first element
says he remembers no address. Then the program tells another person to sit down
somewhere else, to remember a value, and not to remember an address. The program
also tells the first element to remember the second element's address.

### And so on
Keep going until you get up to six elements in the list.

## Reading
What is the value of the third person?

## Editing
Change the value of the seventh person.

## Removing
Remove the fourth person from the array.
Just tell the third person to remember a different address.

The fourth person can actually keep sitting there,
but we have him get up so that we can free up a chair (some memory).

## Inserting
Add a person between the first and second people.
(Switch the first person's address.)
