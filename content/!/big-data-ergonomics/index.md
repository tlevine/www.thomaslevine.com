---
title: Big Data Ergonomics
created_at: 2012-08-26
---
I know enough about "data science" that people
[ask me for advice](http://datakind.org/2012/08/data-heroes-tom-levine/)
about it. I also know something about "ergonomics".

I don't normally work with "big data", unless you define them as "data that don't
[fit in Excel](http://blog.scraperwiki.com/2012/07/31/do-all-analysts-use-excel/)",
but I'd know what to do if I had such a properly enormous dataset.

I remarked one day that there was no "big data ergonomics", so I decided to
invent it. But what would it be? Ergonomics already uses "data", so the
emphasis here is on "big" rather than "data".

## What would "big data ergonomics" be?
Without trying to define "ergonomics", (The concept is as nebulous as "big data"
and "data science".) let's say for now that ergonomics, or at least the aspect
that interests me, tends to study human phenomena with small effects and long-term
consequences. This includes making things easier to use, studying/reducing
repetitive strain injuries, finding ways to work more productively and safely,
and sizing and otherwise adapting objects for different people.

Regardless of how you define them, "big data" will have way more observations
than small data. "Big data" thus have larger sample sizes, and they
also might be more representative of some population because they might be
spread out more frequently and continuously over time and might involve more
random sampling.

Ergonomics is already using "small data" in the form of lab studies,
questionnaires and other observations by people. If we replaced the human
observers with computers, we could collect some "big data".

It sounds like "big data" would solve some of these "ergonomics" problems quite
well; ergonomics would like to study small effects over long periods of time.
A large sample (or better, a population) might help us tease out small effects,
and collection over a long time-span might help us see long-term impacts of
interventions of ergonomic interest.

## Brainstorming a simple big data ergonomic study
I wanted to make a simple something that would explain my concept of
"big data ergonomics" and see whether it made sense. This would be a study
of sorts, preferrably with the following properties

* The data would have many rows, probably collected over time, so I have big data.
* The data would have few columns to keep things simple.
* The study would be an experiment rather than an observational study.
* I would run the initial study on a small group of people (like maybe just me),
    but it would have to be easy and inexpensive to run it across many people.
* The study would address a topic that isn't addressed well by the more
    typical small-data ergonomics studies.

Now I should explain further the concept of ergonomics. Different people define
ergonomics very differently, but the International Ergonomics Association
[defines](http://iea.cc/01_what/What%20is%20Ergonomics.html) it as

> the scientific discipline concerned with the understanding of the interactions
> among humans and other elements of a system, and the profession that applies
> theoretical principles, data and methods to design in order to optimize human
> well being and overall system [productivity].

(At the time that I cited this webpage, the definition stopped mid-sentence,
but I doubt that that was on purpose.)

I see the definition as emphasizing **well-being** and **productivity**, so
I figured that a particularly simple study would yield a dataset with minimally
three columns:

1. A measure of well-being
2. A measure of productivity
3. Time of the observation

If I ran this on more people than me, there would be a fourth column for participant,
which would link to some demographic information that would not be collected as often.

Now I just needed to think of the well-being and productivity variables.
I thought of a bunch of things, but it turned out that there was a study that
I'd been wanting to do and that would benefit from a big-data twist.

## (How) do people move their keyboards around the desk?
<!-- This is lifted from my 2011 NSF GRFP application -->

### Background
With the goal of figuring out how to make computer work more productive and safe, much research has related the design of computer workstations both to productivity and to risk factors for musculoskeletal injury. This research leads to guidelines for designers and engineers [3,4]. Because computers are so new and constantly changing, the guidelines are continuously being refined and expanded. My research contributes to this effort.

My focus has been on computer keyboards and mice. Through my research on keyboards and mice, I’ve identified a particular limitation of many ergonomics studies of computer workstation design. In many such studies, keyboards are attached to the desk so participants cannot move them. This is done to control variables and reduce error variance, but it poses an external validity issue: Do the results still apply if people tend to move keyboards in the real world? People touch the keyboard when they type, so a change in keyboard positioning (KP) probably changes arm posture and muscle activity. (A similar relationship has actually been demonstrated for mouse position [5,6].)

One of my past studies found wide variations in KP [7]; some keyboards were positioned far to the left, whereas others were far to the right. In order to make more general conclusions about the use of computer keyboards, we need to address this variability.

### 
