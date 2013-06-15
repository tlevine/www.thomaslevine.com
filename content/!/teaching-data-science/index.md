---
title: Teaching Data Science
---
I've recently been around several people who have been teaching data science in
various ways. I've always been skeptical of the utility of the educational
"data science" that I've seen, but that might be because I'm always skeptical
of schooling and of anything termed "data science". Or maybe I'm just skeptical
of everything. My distaste for the buzzterms tends to relate largely to the
semantic ambiguity of the terms, but the various related concepts tend to be
meaningful and appealing, so it is worth defining and teaching them. My
conclusion from this ramble on the utility of teaching the nebulous concept of
"data science" was that it would be nice to figure out what data science
involves and how I would teach it.

First, I see data science as a mindset. I also see ergonomics (another thing
I apparently know a lot about) as a mindset, so it might just be that everything
becomes a mindset once you get good at it. Here are some main aspects of this
mindset.

1. Everything can be turned into a number.
2. It is rude and statistically unsound to ask people questions that will only
    be used for study.
    * It is better to surveille people unobtrusobly (like by watching security
        cameras or reading web server logs) or to use questions that they have
        other reason to answer (like by reading credit card purchases or
        Tweets).
    * I actually don't see those two approaches as different; it's more like
        they're different ways of saying the same thing.
3. As a corallary to the previous point, if collecting data on complex behaviors
    is convenient/inexpensive, you should collect the data even if you have no
    plans to use them. For example, if you make a website that starts getting
    much traffic, you should log every interaction that you can conveniently
    log, or at least every HTTP request that is made.
4. When asked a question about the world, adapt the question so that it can be
    answered with an existing and convenient dataset.

