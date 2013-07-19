
## Future research
Before you scroll down to the table of dataset progenies, I'm going to comment
on some ideas for future study that I've come up with. I've already alluded to
some future study above; belowe, I'm focusing on things that I haven't really
discussed above.

A small note on grammar:
I talk about these studies as if I'm going to do them, but that's just because
I normally find that easier than convincing other people to help; all of the code
and data is free/libre/open, so you can also help or do these yourself rather
than waiting for me.

### Users
As far as I could tell, Socrata's API doesn't make it particularly easy to
get a list of all of the users, so I started with views. But now I have
a list of all of the users who have created views, which is close enough to
the list of all of the users. I'd like to see who is creating views, what
sorts of views they're creating. I'm particularly interested in ordinary
citizens who are creating lots of views.

<!--
### Socrata features
Socrata sells a bunch of add-on integration features. I'm somewhat curious to
see which cities are using which features, and we can determine this based on
the sorts of data that are in each portal.
-->

### Data quality
A couple months ago, [Ashley Williams](https://twitter.com/ag_dubs) and I
[prototyped](http://www.appgen.me/audit/report) a tool for identifying
data quality issues in the data portal. We had a
[slew of best practices](http://www.appgen.me/audit) that we had found to
be frequently violated in the New York data portal, but we didn't know
enough about Socrata to evaluate them properly. Many of these were already
on my list for further study, but I got some more ideas on this front
through my conversation with [Nicole Neditch](https://twitter.com/nneditch),
who administrates Oakland's data portal.

**Codebooks**: Socrata doesn't really have a feature for including
explanations of what the different variables in a dataset mean. (I'd call
this a data dictionary or a codebook.) However, some datasets may already
include codebooks. I'm personally just a bit curious as to which datasets
have codebooks and whether that impacts their use. But this could also work
its way into our hypothetical tool. For example, we could look for datasets
with lots of views and without codebooks; those might be useful datasets
to write codebooks for.

**Geocoding**: Socrata is quite slow at geocoding. Nicole suspects that
this is because all of the geocoding for all of the portals runs on
one server. This is something that Socrata could improve, but there's
a lot that cities can already do about this. This issue came up in relation
to Oakland's [CrimeWatch maps](https://data.oaklandnet.com/Public-Safety/CrimeWatch-Maps-Past-90-Days/ym6k-rx7a).
The dataset has geospatial coordinates, is quite long, and is updated
frequently. Every time it is updated, all of the geocoded coordinates
get cleared, and the geocoding restarts, so the geocoding never finishes.
Oakland actually has the geospatial data in its database, but through
some accident, it wasn't appearing in the dataset. If we could identify
datasets like these, we could fix geocoding problems before people complain about them.

