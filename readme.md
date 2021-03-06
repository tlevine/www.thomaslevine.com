www.thomaslevine.com
===

## Authoring posts

### Syntax
Posts are written as subdirectories of `content/!`, with the main file having a basename
of `index`.

I can write posts in any of the supported markup languages. I tend to use markup or HTML.
Regardless of the language, you can put a block of YAML parameters at the top. In order
to be listed in the `/!` section, it needs at least the parameters `title`, `created_at`,
and `kind`. (`kind` is always `article` for this sort of page.)

    ---
    title: Analyze all the datasets
    created_at: 2013-07-07
    kind: article
    ---

There are some others that you can add.

tags
: If you tag something as `socrata` and configure the tag, it will show up in the list at
`/socrata`.

`main_class`
: This is the body class. You probably don't want to use it inside an article; it's more
    for layouts.

`tweet_link`
: The "Discuss" link sends people here.

`other_source`
: If you include this, an "Other source" link to `other_source` will appear under "View Source"

`description`
: This goes in the metadata in the page.

These will be used for metadata elsewhere:

* `twitter_title` (The `title` is used if this is not set.)
* `twitter_image` (The apple touch icon is used if this is not set.)
* `twitter_description` (The `description` is used if this is not set.)
* `facebook_title` (The `title` is used if this is not set.)
* `facebook_image` (The apple touch icon is used if this is not set.)
* `facebook_description` (The `description` is used if this is not set.)

The following paramaters don't do anything, but I use them to store related information.

`tweet_text`
: The text that I'm going to use for the tweet.

`facebook_text`
: The text that I'm going to use for the Facebook status update.

`facebook_link`
: The URL of the relevant Facebook status update.

So the result might look like this.

    ---
    title: Analyze all the datasets
    created_at: 2013-07-07
    tags: ['socrata']
    kind: article
    image: figure/datasets_size_over_time2.png
    tweet_text: This one time, I Socrata's 80,000 datasets and analyzed them all.
    twitter_description: This one time, I Socrata's 80,000 datasets and analyzed them all.
    facebook_text: Guess how many datasets are in all of the Socrata portals.
    facebook_title: And which ones are the most popular?
    facebook_description: This one time, I all of Socrata's datasets and analyzed them.
    ---

### Deploying
Compile it locally.

    nanoc

View it locally.

    nanoc view

Run the checks, mainly the link validity check

    nanoc check external_links

Deploy by pushing the `output` directory to github.

    cd output
    git commit . -m compile
    git push

## Website styles

### Cards
Each page is composed of one `big-card`, several `little-card` boxes and
possibly an `article` box.
A `big-card` is 336 pixels by 168 pixels, with 28-pixel padding and 14-pixel margin.
a `little-card` is 84 pixels square, with 14-pixel padding and 14-pixel margin.
A `big-card` takes a full line, and three `little-card` boxes fit on one line.
Each line is centered to the page.

A `big-card` can be either a `business-card` or a `title-card`.
A `little-card` can be either `link` or `link-group`.

A big card contains either a business card or a title.
On the index page (`/`), the big card is a business card.
On the index page for a particular blog section (`/!/`, `/scarsdale/`, &c.),
the big card is the title of the section.
On a blog post, the big card is the title of the blog post.

### Parameters
`$square` is the base square for the layout in pixels.

`$calling-card-long` and `$calling-card-short` are the long and short sides,
respectively of a `big-card` in pixels.

`$topic-card-width` is the width of a `little-card` in squares, including
its half-square padding.

The parameters could be refactors.

### Order
The first row of the page is the `#nav`. It is always the following three
`little-card` boxes, in this order

1. "~", a link to `/`
2. "!", a link to `/!/`
3. "?", a link to `/!/about/`

On the blog category pages, a `#categories` row is included. It contains up to
three `little-card` boxes, one for each of three blog categories. Each one is
colored according to the section's color.

The next row is always the `big-card` box. It is also the `header`

On blog posts, the `big-card` is followed by an `article`. After the article are
two `little-card` boxes, with an empty space in the middle. One links to the
previous post, and the other links to the next post. These two `little-card`
boxes are the `#pagination`.

On other pages, the `big-card` is followed by a bunch of `little-card` boxes
that link to different places. These are the `#links`.

### Sections
The main blog is at `/!/` and contains a box for each post. Special sections
are at `/scarsdale/` and maybe two other places. Each section page has its own
color, and all references to this section use this color.
The scarsdale section is maroon.
All other pages use the color pink.

## To do

* After I compile, I want to make sure links are correct.
* When I click on the first article in the `/!` section, it should be clear that the change has changed.
* Prune the random email addresses so that only awesome ones come up.

## Quick Start
1\. Make sure you have [Ruby](http://www.ruby-lang.org/en/downloads/) and [bundler](http://gembundler.com/) installed.

    gem install bundler

2\. Clone the git repository or [download the zipball](https://github.com/jingoro/nanoc-html5boilerplate/zipball/master) and extract it.

    git clone git@github.com:jingoro/nanoc-html5boilerplate.git mysite

3\. Run bundler command to install the required gems.

    cd mysite
    bundle

4\. (Optional) [Install image compression binaries](https://github.com/toy/image_optim#binaries-installation) if your project will contain images.

5\. Compile the site.

    nanoc compile

You can view the skeleton site by browsing the generated `output/index.html` file.

6\. Validate the output

    nanoc check --all

## Development

### Composing
`master` should always have a presentable website state, including `created_at`
dates. This way, the site can be recompiled automatically every day, and queued
posts can be added automatically. Developing on master is okay as long as
articles in progress are not given a `kind` `article` and a `created_at` date.

There are a few helpful scripts for reviewing the various queued posts.
Run `./non-articles.sh` to find files named `content/!/*/index.md`
that are not marked as kind `article`. These are typically drafts.
Run `./posts-by-date.sh` to list these posts by `created_at` date. This
is helpful for planning when queued posts will post themselves.

## Rendering
Compile the site, and recompile when files are changed.

    guard exec nanoc

Serve the compiled files.

    nanoc view

### Deploying
To push new version of the site, check out master, compile the site, make sure that
all is well, then commit and push the submodule `output` directory, which has only
a `gh-pages` branch.

    git checkout master
    nanoc
    cd output
    git commit . -m compile
    git push
    cd ..
    git commit . -m update\ submodule
    git push

### Upgrading
To upgrade to a newer version of the boilerplate, checkout `nanoc-h5bp`, then
pull the new version.

    git checkout nanoc-h5bp
    git pull git://github.com/jingoro/nanoc-html5boilerplate.git master

Then checkout `upgrade`, which is an old version of the site, and merge the changes.

    git checkout upgrade
    git merge nanoc-h5bp
    echo Deal with merge crap.
    bundle # figure out how to set the directory; it uses the system directory, so i wound up installing stuff manually with gem
    nanoc
    echo Compile the site, and make sure it works.
    git commit -a

Now, merge with `master` and deal with more merge crap.

    git checkout upgrade
    git merge nanoc-h5bp
    echo Deal with merge crap.
    bundle
    nanoc
    echo Compile the site, and make sure it works.
    git commit -a

Finally, you can merge into master.

    git checkout master
    git merge upgrade

## References
This is based on jingoro's nanoc-html5boilerplate

    git://github.com/jingoro/nanoc-html5boilerplate.git

**NOTE: The boilerplate project is no longer being maintained after June 1, 2013. I should consider taking the project over.
