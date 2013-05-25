This is based on jingoro's nanoc-html5boilerplate

    git://github.com/jingoro/nanoc-html5boilerplate.git

[![Dependency Status](https://gemnasium.com/jingoro/nanoc-html5boilerplate.png)](https://gemnasium.com/jingoro/nanoc-html5boilerplate)

**NOTE: The boilerplate project is no longer being maintained after June 1, 2013. I should consider taking the project over.

## Styles

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

+ Add the email address javascript.
* Make sure links are correct.
* Style the articles.
+ Decide on the navigation bar icons.
* Make the ! index article boxes more interesting
+ Remove in-contact-card / links

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

    nanoc validate-html
    nanoc validate-css
    nanoc validate-links
