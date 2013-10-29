<!-- 

Many important lessons are about ways of thinking rather than specific
material. When one changes her way of thinking, things that previously
seemed impossible can become common sense. I have been using interactive
music and food technology to teach the concept that data can be converted
into anything. I create seemingly impossible pieces. Then I explain to
people how these things work and provide the software for them to create
their own seemingly impossible pieces. By learning how the pieces work
and by playing with the software, people learn this deeper concept that
data can be turned into anything.

-->

# On the use of a seemingly impossible technology to teach different way of thinking
To me, it is common sense that data could be extracted from a pair
of pants and that that data could be converted into a slice of apple pie.
But for many people, it is not common sense.

An understanding of this concept can change how someone thinks; things
that previously seemed impossible become common sense after one really
gets this concept.

The best way I've found to teach this concept is to create interactive
technology that seems impossible until you understand the new concept.

In this article, I'll first explain what I mean by "data" and why we
care about data. Next, I'll explain how I use interactive music and
food experiences to teach the concept that we can can convert data
into anything. There is a different approach that I use for teaching
that anything can be converted into data, but I'll save that explanation
for another time.

## What data are, and why we want them
People use the word "data" to mean everything, so I never really know
what people mean when they're talking about it. For the purposes of the
present article, I'm considering data to be a collection of things,
where each thing is represented in some digital, quantified, or
structured form. I typically think of this as tables, with each column
being a variable and each row being a different thing in the collection.

Regardless of whether you think of this as a table, this representation
is helpful because much of our quantitative methods expect inputs in this
form. Once we express the world in this form, we can apply any of our
quantitative methods (statistics, machine learning, modelling, whatever
you want to call them) and discover things that would have been hard to
discover without the help of math and computers.

## Converting data into real things
In order to teach this concept that data could be converted into anything,
I convert data into real things while
still conveying the complex relationships within the data.

### Music videos
We're most known for our music videos.

A while ago, I made a video about the gifts my true love gave to me
on the twelve days of Christmas.

<iframe width="560" height="315" src="http://www.youtube.com/embed/rLZDvXPIDa0" frameborder="0" allowfullscreen></iframe>

[csv soundsystem](http://csvsoundsystem.com)
is a hacker collective with many projects surrounding this theme.
We collectively made a song about the financial crisis based on
treasury data.

[<img alt="FMS Symphony" src="<% @item.identifier %>fms.png" class="wide" />](http://fms.csvsoundsystem.com)

More recently, I made one about transit ridership in Chicago and New York.

<video width="100%" src="/!/ridership-rachenitsa/transit.webm"></video>

And here's a show that csv soundsystem played.

<iframe src="//player.vimeo.com/video/76190871" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/76190871">csv soundsystem at Codame</a> from <a href="http://vimeo.com/lamthuyvo">Lam Thuy Vo</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

When people hear this, they just think of it as music;
it seems impossible that it could have been produced with data.
This gives us an opportunity to explain how anything that people
manipulate (like notes that we play on an instrument) can be
informed by data.

### Data gastronomification
We also started getting into data gastronomification, that is,
turning data into food. Here are some
[data cookies](https://twitter.com/internetrebecca/status/352955293291913217)
and some
[data guacamole](https://github.com/tlevine/data-guacamole)

Again, we're just making normal food. People initially
don't understand how it could come from data,
and this gives us an opportunity
to talk about relating data to the real world.

### Interactivity
When people see a wacky thing that csv soundsystem made with data,
they start thinking about the idea that data can be converted into
anything. What really hammers it home is that we make tools that
let you create your own data-driven music and gastronomifications.
We have packages that let you compose music in
[R](https://github.com/csv/ddr), and
[Python](https://github.com/csv/ddpy),
[Google Spreadsheets](https://github.com/csv/sheetmusic),
and we have a package that lets you convert data into
[recipes for food](https://github.com/csv/gastronomify)
(Here's a video [a video](http://www.youtube.com/watch?v=3CiDW7NVa8o) about them.)

For people who are already comfortable with R, Python or Google
Spreadsheets, these packages feel like any other package. Without
knowing much about music or food, people can make their own data
sonifications and data gastronomifications. With this power, people
start thinking more creatively about how to convert data into
real things rather than just graphs and tables.

## Conclusion
When one wants to learn about the history of a topic or the use
of a specific tool, a typical book or class can work quite well.
I don't think they work as well for teaching more abstract ways
of thinking, like the idea that data can be extracted from anything
and that data can be turned into anything.

Instead of teaching a normal class, I show people something that,
at first, seems impossible. They get curious about how music could
possibly be created from data about the federal treasury, and they
want to know how it works. As they learn about how it works,
they also learn the deeper concept that we can convert anything
into data and can convert data into anything.
