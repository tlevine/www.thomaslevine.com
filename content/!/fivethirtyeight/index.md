Fivethirtyeight and all of the talk about it is interesting, but his statistical
model, in particular, is not. In this post, I recount the story of how I recognized
this, I praise the boringness of his model and I ponder what the interest in such
a boring model tells us about the world in general.

## My discovery of Nate Silver
I first learned of Nate Silver and fivethirtyeight a few days ago from a tweet by
Travis Swicegood referencing an article by Andrew Gelman. Before this, I hadn't
ever heard of Nate Silver or his blog. And after reading this, I still didn't
realize that Nate Silver was so well-known or that the blog was published in the
New York Times.

The article discussed the practical meaning of Nate Silver's probabilities but didn't
go in to how these probabilities are computed. I figured that they must be computed
from some crazy Bayesian model that relates newly released data to data from past
elections. So it sounded like utter nonsense to me.

## Recognition of Nate Silver as a pop culture phenomenon.
I recognized over the next few days through various conversations that people see
Nate Silver's model as some crazy awesome new technology and that all of the straight
girls want to have his babies.

I also finally figured out (The [Wikipedia article]()
was informative.) that it was a blog on the New York Times, so I read some
of it. Most of his statistics/graphs/tables make sense to me, but I don't understand
why the graphs at the top of prediction over time change when you switch between the 
forecast and the nowcast.

But I still didn't understand how he arrived at his predictions.

## Figuring out the model

After soliciting some explanations [on Twitter]()
and reading about Nate Silver [on the NICAR list](),
I realized that fivethirtyeight's model was stupidly simple and was hyped up to be
may more complex than it was.

> Nate Silver's model is simple aggregation of polls that ask which candidate people
> plan to vote for. The simulation part can be seen as an approximation of the
> probability that you supposedly learned in middle school.