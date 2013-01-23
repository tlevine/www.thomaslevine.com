---
title: Postures of toilet use
---

## Introduction
Western sitting-style toilets are presumably intended to be used in a seated
position,[^mclelland1982] except when used by males for exclusively urination.
But the word on the street is that people often adopt a hovering posture
instead of the seated posture in order to cope with unsanitary toilets.

[Several](http://www.yelp.com/topic/san-francisco-toilets-sit-or-hover)
[threads](http://www.yelp.com/topic/queens-public-bathroom-in-nyc)
[on](http://www.yelp.com/topic/oakland-toilet-seat-dilemma)
[Yelp](http://www.yelp.com/topic/redwood-city-for-the-ladies-public-toilets-sit-or-squat)
[discuss this issue.](http://www.yelp.com/topic/chicago-toilet-seats-piss-discuss)
One person admitted to PostSecret that he or she hasn't sat on a toilet for the
[four years](http://www.flickr.com/photos/withinreason/2593730231/), and this
sparked [some](http://www.postsecretcommunity.com/chat/viewtopic.php?t=98076)
[discussion](http://www.postsecretcommunity.com/chat/viewtopic.php?t=98095)
on PostSecret forums.
There's even a website that reviews toilets and tells
you whether to [Sit or Squat](https://www.sitorsquat.com/).

I also find sitting to be unpleasant because the toilet seat tends to be
colder than I would like. But other people don't seem to bring this reason
up in conversation, and I actually only realized it just recently.

Greed[^greed1995] and Moore[^moore1991] anecdotally found that young ladies
are often taught that hovering is proper and that sitting is unclean. 
[Several](http://www.wikihow.com/Use-a-Public-Restroom)
[WikiHow](http://www.wikihow.com/Urinate-Standing-up-As-a-Female)
[articles](http://www.wikihow.com/Safely-Use-a-Public-Bathroom)
provide examples of this phenomenon.

Formal quantitative studies have found hovering to be common among
Taiwanese people[^cai1998] and
British gynaecological outpatients [^moore1991],

Many of the referenced forum discussions explain that hovering, rather than
sitting, creates more of a mess. Presumably, this is because hovering puts the
relevant body parts in a less stable position that is higher above the toilet,
making it harder to aim.

If these anecdotes about the causes and effects of hovering are correct, then
the clean toilet is an unstable equilibrium of a toilet's sanitary state;
toilets get dirty, so people hover, so the toilets get dirty, so people hover.

![Cycle of hovering and toilet cleanliness](https://raw.github.com/tlevine/toilet-posture-toilet-hackers-presentation/master/2-cycle.png)

In other contexts, this cycle is sometimes termed the
"[broken windows theory](http://en.wikipedia.org/wiki/Broken_windows_theory)".
Understanding the mechanisms of toilet cleanliness can help us design and
maintain efficient toilets that people want to use, so it would be nice to
see whether this this model explains toilet sanitation issues.

### Goals
In this post, I try to establish whether this cycle of hovering and toilet
dirt exists by looking at the postures that university students say they'd
use in toilet-use scenarios of differing privacy and cleanliness.

### Terms
Western toilets typically consist of a bowl and a seat with a large hole in the
middle. The seat typically can lie on the bowl or be lifted above the bowl.
I consider four categories of postures in which this contraption can be used.

#### Sitting
Sitting-style toilets are designed
to be used in a seated posture [^mclelland1982],
which we define as one where the buttocks or thighs touch the toilet.

#### Hovering
Hovering, also called squatting or semi-squatting, describes postures where the
feet are on the floor but the buttocks and thighs are above the toilet. This is
accomplished through knee extension and trunk flexion.[^cai2003][^greed2003]

#### Squatting
In squatting, the thighs touch the legs and the trunk touches or nearly touches
the thighs.  In order to accomplish this on a sitting-style toilet, one puts his
or her feet on the toilet seat. This is probably much less common in countries
where sitting toilets are the norm.

Confusingly, term "squatting" is also often used to refer to what I term "hovering".

#### Standing
Males commonly stand at toilets when they are urinating.
In this posture, the person faces the toilet and stands in front of the toilet.

## Methods
In May 2011, I sent a questionnaire to randomly selected Cornell University students
(graduate and undergraduate). The questionnaire asked more questions than I
presently present, but I'll just explain the relevant questions.

### Questions
I asked each participant for his or her sex. Participants were required to
choose the more appropriate of "male" or "female". I also asked each particpant
what posture he or she would use in 12 different scenarious. For each scenario,
the participant was required to respond with one of these postures:

* Sit
* Hover
* Squat
* Stand
* Other

The 12 scenarios came from a three variables in a $$2\times2\times3$$ layout.
The variables were

* Privacy level (public or private)
* Cleanliness (dirty, clean or unspecified)
* Task (urinate or defecate)

For example, one question was

> If you are urinating at a very dirty private toilet, which posture are you
> most likely to use?

The "unspecified" cleanliness level meant that cleanliness level was not
mentioned; for example, another question was

> If you are urinating at a public toilet, which posture are you
> most likely to use?

### Validity testing
I pilot-tested the questionnaire on nine people. For each of
these pilot test participants, I asked the participant to complete the
questionnaire, and then I interviewed the participants to see how they
had interpreted each of the questions. I made some changes based on this
pilot study, but all of the students responded the same in person as they
had on the questionnaire. I found the participants in the psychology
department's participant pool.

### Main sample
I selected random students from the school's public electronic directory.
(It's the same directory as the one from [this study](/!/middle-names/) on
middle names at Cornell University.

I sent emails to 390 students. The emails asked the participants to
complete the questionnaire online in exchange for a one-in-three chance
of winning $10. For students who did not respond, I sent up to two
reminder emails.

### Reliability testing
A week after the survey emails were sent, I selected the 20 people who
had responded first. I sent them a very similar email asking that they
take the questionnaire again in order to test it's reliability. These
participants received the same compensation as they had received in the
main survey phase---another one-in-three chance at winning $10, even if
they had won before.

## Results
Of the 390 students to which questionnaires were sent, 179 completed the
questionnaire. There were 110 females and 79 males.

### Popularity of posture by situation
Within each of the 12 situations, the most popular posture was normally
sitting. This makes sense given that they are called "sitting toilets".
Notable exceptions are when men are urinating (They stand) and when women are
urinating at dirty or public toilets. This first series of eight plots looks at the
four situations of unspecified cleanliness for each of the two sexes.

![plot of chunk pie.matrix.1](figure/pie.matrix.1.png) 


The table below presents the popularity of the two most popular
postures for each situation. By "popularity", I mean the proportion of
Cornell University students who would say they use the posture if I
asked.

sex | task | privacy | cleanliness | hover | other | sit | stand
--- | --- | --- | --- | --- | --- | --- | ---
male | defecate | private | unspecified | 1 (1%) | 3 (4%) | 75 (95%) | 0 (0%)
male | defecate | private | clean | 2 (3%) | 0 (0%) | 73 (92%) | 4 (5%)
male | defecate | private | dirty | 42 (53%) | 3 (4%) | 31 (39%) | 3 (4%)
male | defecate | public | unspecified | 8 (10%) | 4 (5%) | 67 (85%) | 0 (0%)
male | defecate | public | clean | 2 (3%) | 1 (1%) | 73 (92%) | 3 (4%)
male | defecate | public | dirty | 49 (62%) | 5 (6%) | 22 (28%) | 3 (4%)
male | urinate | private | unspecified | 1 (1%) | 4 (5%) | 14 (18%) | 60 (76%)
male | urinate | private | clean | 1 (1%) | 0 (0%) | 13 (16%) | 65 (82%)
male | urinate | private | dirty | 6 (8%) | 0 (0%) | 1 (1%) | 72 (91%)
male | urinate | public | unspecified | 5 (6%) | 4 (5%) | 2 (3%) | 68 (86%)
male | urinate | public | clean | 2 (3%) | 0 (0%) | 7 (9%) | 70 (89%)
male | urinate | public | dirty | 6 (8%) | 0 (0%) | 1 (1%) | 72 (91%)
female | defecate | private | unspecified | 1 (1%) | 3 (3%) | 104 (95%) | 2 (2%)
female | defecate | private | clean | 6 (5%) | 2 (2%) | 101 (92%) | 1 (1%)
female | defecate | private | dirty | 65 (59%) | 14 (13%) | 28 (25%) | 3 (3%)
female | defecate | public | unspecified | 20 (18%) | 3 (3%) | 86 (78%) | 1 (1%)
female | defecate | public | clean | 32 (29%) | 1 (1%) | 75 (68%) | 2 (2%)
female | defecate | public | dirty | 64 (58%) | 19 (17%) | 23 (21%) | 4 (4%)
female | urinate | private | unspecified | 6 (5%) | 2 (2%) | 100 (91%) | 2 (2%)
female | urinate | private | clean | 10 (9%) | 0 (0%) | 98 (89%) | 2 (2%)
female | urinate | private | dirty | 87 (79%) | 5 (5%) | 12 (11%) | 6 (5%)
female | urinate | public | unspecified | 59 (54%) | 2 (2%) | 47 (43%) | 2 (2%)
female | urinate | public | clean | 48 (44%) | 0 (0%) | 59 (54%) | 3 (3%)
female | urinate | public | dirty | 86 (78%) | 9 (8%) | 8 (7%) | 7 (6%)


The "other" option was especially popular for dirty toilet situations.
I suspect that participants chose this to indicate that they would never
ever under any circumstances ever use such a toilet.

### Results by participant
I made a separate plot for each participant to characterize that participant's
posture choice.

### General trends
Recall that I have a factorial layout of questions within participant
and that I collected sex at the participant level. I thus used a
multitlevel model with participant as a random effect.

As the earlier summaries indicate, people generally either followed
our societally expected posture or hovered. Thus, I'm using the binary
response of whether the person hovered instead of a multivariate
response, in order to make the results easier to understand.

I started out with some models on the original variables and then
combined variables in order to reduce dimensionality and develop more
concise results.

### Reducing dimensionality
I converted the categorical "posture" variable into a binary "dirty posture"
variable. I considered "hover" and "other" to be dirty, and I considered
"sit" to be clean. I considered "stand" to be dirty unless it was marked
by a male for a scenario involving urination. (Standing is actually
[pretty]((http://sormlandlandsting.vansterpartiet.se/files/2011/05/motion-k%C3%B6nl%C3%B6sa-toaletter.pdf),
[dirty](/!/risley-toilets/),
and some males
[choose to sit](http://isitnormal.com/story/peeing-sitting-down-920/),
but I see standing as the conventional, baseline posture for these scenarios.)
Nobody had marked "squat", so that didn't need to be converted.

### Does dirt promote dirt?

Using only the data from private toilet scenarios, I fitted a multilevel
logistic regression in `MCMCglmm` with the participant as a random effect.

```
## dirtyposture ~ 1 + dirty * defecate * male
```


I used the default weakly informative prior.

Some output is here

     Iterations = 9001:12991
     Thinning interval  = 10
     Sample size  = 400 
    
     DIC: 356 
    
     G-structure:  ~participantId
    
                  post.mean l-95% CI u-95% CI eff.samp
    participantId      4.32     2.99     5.48      7.7
    
     R-structure:  ~units
    
          post.mean l-95% CI u-95% CI eff.samp
    units    0.0211   0.0036   0.0509     5.88
    
     Location effects: dirtyposture ~ 1 + dirty * defecate * male 
    
                        post.mean l-95% CI u-95% CI eff.samp  pMCMC   
    (Intercept)            -3.018   -3.653   -2.387     8.12 <0.003 **
    dirty                   6.102    5.508    6.780     3.11 <0.003 **
    defecate               -1.350   -1.702   -0.765     4.31 <0.003 **
    male                   -2.351   -3.259   -1.674    10.41 <0.003 **
    dirty:defecate          0.349   -0.430    0.860     5.62   0.33   
    dirty:male             -4.733   -5.685   -3.990     5.30 <0.003 **
    defecate:male          -0.453   -1.633    0.479     3.83   0.26   
    dirty:defecate:male     5.944    4.162    7.720     3.09 <0.003 **
    ---
    Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1


I simulated observations based on the posterior distribution, and the
simulated rates of dirty posture in each of the eight scenarios matched
the observed rates. <!-- XXX Add links. They're graphs/posturetype*.pdf -->

If the toilet is very clean, females will probably use a clean posture
(normally sitting), and males are even more likely to use a clean posture
(normally standing). If females are defecating, they are also more likely
to use a clean posture; some who would have hovered when urinating
switch to sitting when defecating.

What if the toilet is dirty? Females will probably use a dirty posture
(hovering), and they are more likely to do so for urination than for
defecation. Males will also choose a dirty posture (hovering) for
defecation at dirty toilets, though they are less likely to choose
such a posture than females are. A major difference arises for the
urination at dirty toilet scenario; males are very likely to choose
a clean posture (standing), whereas females will probably hover.

These results match those in the summaries, but the models consider how
one posture choice depends on the person and show that these relationships
hold at the person level rather than only at the higher level of a group
of persons.

### Does privacy act like cleanliness?

I fit a similar model, switching privacy for cleanliness and using data from
only the scenarios where I did not specify cleanliness. If this model
is similar to the privacy model, we might see cleanliness and privacy as
indicators of each other.

    dirtyposture ~ 1 + public * defecate * male

More output is here

     Iterations = 9001:12991
     Thinning interval  = 10
     Sample size  = 400 
    
     DIC: 302.1 
    
     G-structure:  ~participantId
    
                  post.mean l-95% CI u-95% CI eff.samp
    participantId      9.34     7.38     11.6     65.9
    
     R-structure:  ~units
    
          post.mean l-95% CI u-95% CI eff.samp
    units    0.0472  0.00434    0.126     5.54
    
     Location effects: dirtyposture ~ 1 + public * defecate * male 
    
                         post.mean l-95% CI u-95% CI eff.samp  pMCMC   
    (Intercept)             -4.629   -5.431   -3.854     7.06 <0.003 **
    public                   5.357    4.730    5.937     7.31 <0.003 **
    defecate                -1.905   -2.578   -1.160     4.42 <0.003 **
    male                    -0.598   -2.002    0.789     6.78   0.46   
    public:defecate         -1.416   -2.207   -0.546     6.00 <0.003 **
    public:male             -4.397   -5.856   -2.797     3.11 <0.003 **
    defecate:male            0.632   -0.757    1.355     6.64   0.31   
    public:defecate:male     3.806    2.997    4.653    12.90 <0.003 **
    ---
    Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1

These models are structurally quite similar, so let's compare their
corresponding coefficients. The corresponding fixed effect coefficients are
mostly pretty close between the two models, but the average intercept
(that is, the random participant effect) is much higher for the privacy model.

Said otherwise, the differences between different scenarios are similar,
but people are overall more likely to use a dirty posture in the cleanliness
model than in the privacy model. Keep in mind that these models use different
subsets of the data; the first model uses only private scenarios, and the
second uses only scenarious that did not mention cleanliness.

This is all to say that privacy level and cleanliness level appear to
have similar impacts on choice of posture.

To make this more clear, I've converted the regression
coefficients into probabilities of using a dirty posture in each
condition. These probabilities ignore the participant random effect,
so they apply to an average person. Here are the probabilities for
the first model.

defecate | male | dirty | 0 | 1 | p
--- | --- | --- | --- | --- | --- | --- | ---
0 | 0 | 0 | 98 | 12 | 0.109090909090909
0 | 0 | 1 | 12 | 98 | 0.890909090909091
0 | 1 | 0 | 78 | 1 | 0.0126582278481013
0 | 1 | 1 | 73 | 6 | 0.0759493670886076
1 | 0 | 0 | 101 | 9 | 0.0818181818181818
1 | 0 | 1 | 28 | 82 | 0.745454545454545
1 | 1 | 0 | 77 | 2 | 0.0253164556962025
1 | 1 | 1 | 34 | 45 | 0.569620253164557


And here they are for the second.

defecate | male | public | 0 | 1 | p
--- | --- | --- | --- | --- | --- | --- | ---
0 | 0 | 0 | 100 | 10 | 0.0909090909090909
0 | 0 | 1 | 47 | 63 | 0.572727272727273
0 | 1 | 0 | 74 | 5 | 0.0632911392405063
0 | 1 | 1 | 70 | 9 | 0.113924050632911
1 | 0 | 0 | 104 | 6 | 0.0545454545454545
1 | 0 | 1 | 86 | 24 | 0.218181818181818
1 | 1 | 0 | 75 | 4 | 0.0506329113924051
1 | 1 | 1 | 67 | 12 | 0.151898734177215


The probabilities listed in these tables are quite similar to each other.
As I discussed earlier, the probabilities are generally higher in the latter
table, but the differences between probabilities are in the same direction
and of similar magnitude. This is another way that we can see that
cleanliness and privacy seem to affect posture choice similarly.

### Reliability testing

I sent a second questionnaire to 20 people, and 16 responded. For each
person's response to each question, I checked whether the responses from
the two rounds matched each other.

task | cleanliness | privacy | Same | Different
--- | --- | --- | --- | --- | --- | --- | ---
defecate | clean | private | 16 | 0
defecate | clean | public | 15 | 1
defecate | dirty | private | 14 | 2
defecate | dirty | public | 16 | 0
defecate | unspecified | private | 15 | 1
defecate | unspecified | public | 13 | 3
urinate | clean | private | 15 | 1
urinate | clean | public | 15 | 1
urinate | dirty | private | 14 | 2
urinate | dirty | public | 14 | 2
urinate | unspecified | private | 16 | 0
urinate | unspecified | public | 16 | 0

For the least consistent question, 13 out of the 16 people (81%) had the same
response for both rounds. So the responses were quite consistent between the
test and retest questionnaires.

## Thoughts

### Broken windows

At the beginning of this paper, I presented the following hypothesis.

> Toilets get dirty, so people hover, so toilets get dirty.

The present study supports this hypothesis; people were more likely to
say that they'd hover or use a different dirtying posture at dirty or
public toilets than at clean or private toilets. For a more complete
verification of this hypothesis, another study could observe how
posture choice affects the dirting of the toilet and see whether my
categorization of postures into clean postures and dirty postures is
reasonable.

### Decision processes

The study also gives us an idea of how people might decide whether to hover when
using a public toilet or a dirty toilet. Men and women are both unlikely to
hover while defecating, presumably because it is difficult. This might change
if toilets were designed in ways that made hovering easier or harder.

### Men and women

Moreover, the study shows how the cleanliness of a bathroom might affect
different groups differently.

When using a clean or private toilet ("pleasant toilet" henceforth),
people are more likely to use a clean posture.

For use of an dirty or public ("unpleasant") toilet, the differences between males
and females become relevant. For defecation, both sexes generally
choose to sit. For urination, men generally choose to stand, and
women generally choose to hover. This switch demonstrates a
compromise between sanitary comfort and musculoskeletal comfort.

People would prefer not to have to touch the unpleasant toilet.
Men and women pee in different ways and thus accomplish this in
different ways; men stand, and women hover. Standing is
presumably much easier than hovering, so most men stand during
urination, while only about half of women hover. (The rest mostly sits.)
Men and women poop more similarly, so when they switch to
defecation, the rates of clean and dirty postures are closer.
The rates are still a bit higher for women, though; it might be
that women have more practice in hovering and thus are more
likely to hover at an unpleasant toilet.

The current study compared males and females, but loads of other things that
could affect how people use a toilet. These things include anthropometry,
fatigue and disablities.

### Toilet design

Toilets are called "sitting" toilets, but lots of people hover,
even in the most desirable of conditions. Something is wrong here.
The design and conventions of toilets do not match the way that
toilets are used. Let's consider changing that.

If people want to hover, maybe we should let them hover. Would
adding bars to stalls help people hover? And would that, in turn,
make people happier?

Maybe we can make toilets fit a wider range of people. Men have
the luxary of calmly standing while urinating, whereas women have
to either hover or bear touching the seat. Could toilets be
designed in some way that matched the female anatomy? Clara Greed
[^greed2003] might give you us ideas. More generally, can we
design healthful toilets that still align with our cultural
expectations? Alexander Kira[^kira] has ideas on that.

The insistence on hovering over a public toilet can also be seen
as a silly obsession with cleanliness. Sitting on the public
toilet is probably perfectly safe, and hovering is known to
have undesirable health outcomes, like
taking longer to pee [^moore1991].

As an aside, we should consider squatting. Among other benefits,
it might make peeing faster.[^amjadi2006][^rane2008]
On the other hand, it might not.[^unsal2004]

Maybe we should just get over this.
Alternatively, maybe we can keep toilets from feeling dirty.

### Keeping toilets clean

Public bathrooms are notoriously dirty.
(They even scare children.[^vernon2003][^lundblad2005])
The present study
provides insights into how we can efficiently reduce this dirt.
The current study has related the broken windows theory to the
cleanliness of bathrooms. When people use dirty bathrooms,
they tend to use postures that make toilets dirtier. Thus,
clean bathrooms stay clean, but dirty bathrooms get dirtier.

Rather than cleaning bathrooms once a day or waiting until
they get messy, consider quickly tidying them up every hour
or so; wipe the toilets and the sinks, pick trash up from the
ground, and flush any toilets that haven't been flushed.
This may stop toilets from getting particularly dirty,
allowing toilets to stay reasonably clean throughout the day
without major cleaning.

### Trivia

The estimated prevalences of various postures of toilet use
(For example, 54% of women hover when urinating in public toilets.)
might make for fun dinner conversation.

## Proprietary references

[^amjadi2006]:
[^cai1998]:
[^cai2003]:
[^greed1995]:
[^greed2003]:
[^kira]:
[^lundblad2005]:
[^moore1991],:
[^mclelland1982],:
[^rane2008]:
[^teaching]:
[^unsal2004]:
[^vernon2003]:
