I have nine pairs of these socks.

![A pair of feet wearing black toe socks]()

Each pair contains a left sock and a right sock; the left sock only fits on the
left foot.

Figuring out whether a sock is a left sock or a right sock takes some time. I
could figure this out right after doing a wash and tie them in pairs. But not
having to do that is one of the benefits of all having all the same socks.

I could also just sort them into a pile of left socks and a pile of right
socks. But I wouldn't trust the piles to stay intact, at least if I'm not at
home.

If I have a pile of mixed left socks and right socks, I can confidently select
enough to have as many as I need for a trip by taking extra socks. Some mental
arithmetic told me how many I need. I've drawn it on paper so it's easier to
explain.

If I have $$n$$ socks, how many can I expect to be left socks? Well the best
guess is $$\frac{n}{2}$$, but how variable is it?

Treat sock foot (left or right) as a binomial random variable with
$$p = \frac{1}{2}$$. The proportion of left socks can be modeled with a binomial
distribution, which can be approximated as a normal random variable with
a variance of $$\frac{p\times\(1 - p\)}{n}$$.

<!-- images -->

We can find a confidence interval for this proportion


Now we multiply the conservative end of that convidence interval by the number
of socks to see how many socks are confidently left socks.


Let's flip these equations around so that I can choose how many socks to bring
given that I want at least $$m$$ socks. We'll approximate $$n$$ by $$m$$ so
we can do the calculations in our head. This will overestimate the variance
because the sample size will be smaller than it really is, so it's safe to do
this. We just compute the standard error, multiply it by $$m$$ and add it to
$$m$$. That should be enough socks.
