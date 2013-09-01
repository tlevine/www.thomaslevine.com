
Someone recently asked me to explain what a computer "protocal" is.
This is one of those words that sounds more special than it is; you
could just-as-accurately call it a language or an expectation.

## The street sign protocal 
To make that more clear, I'll document a protocal that we might not
usually think of a protocal. Let's call it the Street Sign Protocal
(SSP).

To keep things simple, I'll actually document a simple version of the
Street Sign Protocal. Let's call it the Simple Street Sign Protocal (SSSP).

### Specification
SSSP is a way of exchanging the names of *streets*. It involves
*street signs* mounted on *poles* near the *corners* of
*four-way intersections*. Let's define these terms.

* A *street* is a paved public thoroughfare in a built environment.
    (This definition is taken from [Wikipedia](http://en.wikipedia.org/wiki/Street).)
* A *four-way intersection* is a place where two streets cross.
    Its shape is approximately a rectangle, with one side having the
    width of one street and the other side having the width of the
    other street.
* Being rectangular, a four-way intersection has four *corners* at the
    usual places.
* A *pole* is a long cylinder sticking out of the ground.
* A *street sign* is a flat rectangular thing that has text on both faces.
    The sign is oriented such that the text reads left-to-right.

Next, let's discuss what is expected of all of the.

Each four-way intersection has four corners, and each pole is associated with
a corner of an intersection. Each corner must have zero or one poles, and at least
one of the corners of a four-way intersection must have a pole; thus, an
intersection must have between one and four poles.

Poles must be mounted within about ten feet of a corner of the intersection
but not on the paved area of the street or the intersection. (It is okay for them
to be mounted on the sidewalk.) It must stick straight out of the ground; the long
axis of the cylinder must be approximately in line with the direction of gravity.

Each street sign displays the name of one street. The street sign must include the
name of the street in very large text. This name must be written on both faces of
the sign and must be especially easy to see, even at night.

Street signs are mounted on poles, each pole having exactly two street signs.
The street signs must be aligned in a particular way. One of the faces must be
just-barely-touching (tangent) the pole. The sign must also line up with its
corresponding street; that is, the wide axis of the rectangular sign must run
parallel the corresponding street.

Each pole must contain two street signs, each one corresponding to a different
one of the two streets at the four-way intersection.

### Implimenting a SSSP writer
Here is one possible procedure for encoding street names in SSSP. This procedure
expects a four-way intersection and the names of the two streets as input. It
outputs SSSP (two street signs mounted to a pole near the intersection).

1. Determine which corner(s) of the intersections the street signs should be
    mounted on. You might consider the locations of buildings, the presence
    of sidewalks, the traffic patterns and the presence of visual obstacles
    like trees.
2. Print the signs with the street names.
3. Cast a pole.
4. Put a pole and street signs on a truck.
5. Drive the truck to the intersection, and park nearby.
6. Carry the materials and some tools to the intersection.
7. Stick the pole in the ground near the chosen corner. I imagine that this
    involves putting up caution tape, digging a hole, securing the pole, pouring
    some concrete and covering it back up, but I don't really know. If this were
    software, I'd try to use separate pole-installation library so I don't have
    to implement the pole-installation procedure myself.
8. Mount the street signs to the pole. Position them about ten feet above the ground,
    with one on top of the other and with the centers of the signs touching the pole,
    and otherwise in the appropriate orientations specified by the protocal. Secure
    them with a sign bracket.
9. Drive the truck back to wherever you got it from.

### Implimenting a SSSP reader





## Hypertext Transfer Protocal


## 
