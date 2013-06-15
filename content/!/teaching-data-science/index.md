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

## The mindset
First, I see data science as a mindset. I also see ergonomics (another thing
I apparently know a lot about) as a mindset, so it might just be that everything
becomes a mindset once you get good at it. Here are some main aspects of this
mindset.

1. It is fun to learn how complex systems work and to apply the resulting
    knowledge, and quantitative information can assist in this fun.
2. Everything can be turned into a number.
3. It is rude and statistically unsound to ask people questions that will only
    be used for study.
    * It is better to surveille people unobtrusobly (like by watching security
        cameras or reading web server logs) or to use questions that they have
        other reason to answer (like by reading credit card purchases or
        Tweets).
    * I actually don't see those two approaches as different; it's more like
        they're different ways of saying the same thing.
4. As a corallary to the previous point, if collecting data on complex behaviors
    is convenient/inexpensive, you should collect the data even if you have no
    plans to use them. For example, if you make a website that starts getting
    much traffic, you should log every interaction that you can conveniently
    log, or at least every HTTP request that is made.
5. When asked a question about the world, adapt the question so that it can be
    answered with an existing and convenient dataset.

I think these points stem from a desire to learn how complex systems work.
If you want to do that and you are alive today, you might get excited by the
potential off the ease of collecting and storing quantitative information,
and the aspects above follow logically.

## Implementation
People who with data science mindset want to start studying things in certain
ways, so they wind up deciding to learn certain sorts of things.

At a high level, 

Drew Conway says that domain knowledge is also part of the data science thing,
but I don't like including that. Here are few reasons why.

1. It's probably good for anyone working in a particular area to know about
    that area. For example, analysts need to know the area so they can analyze
    it, statisticians need to know the area so they can specify appropriate
    models and write good reports, and engineers need to understand how their
    users use things. So domain expertise doesn't distinguish data scientists
    from anyone else.
2. In contemporary organizations, domain knowledge appears to be the role of
    the analyst. With experience, the analyst learns a lot about a particular
    domain, whereas other roles get better at other things that can be applied
    to different domains.
3. The data science mindset is about the using digital quantitative
    information to learn how complex systems work and to convey this
    knowledge to others; the specific manner of system isn't part of the
    mindset.
4. What is a domain anyway? When I'm with a group of people who don't know
    computer stuff know that computers could help their organization do stuff
    better, maybe I'm acting as an expert in the domain of data science.
