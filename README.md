This is based on jingoro's nanoc-html5boilerplate

    git://github.com/jingoro/nanoc-html5boilerplate.git

## Styles
Each page is composed of one `big-card` and several `little-card` boxes.
A `big-card` is 336 pixels by 168 pixels, with 28-pixel padding and 14-pixel margin.
a `little-card` is 84 pixels square, with 14-pixel padding and 14-pixel margin.
A `big-card` takes a full line, and three `little-card` boxes fit on one line.
Each line is centered to the page.

A big card contains either a business card or a title.
On the index page (`/`), the big card is a business card.
On the index page for a particular blog section (`/!/`, `/scarsdale/`, &c.),
the big card is the title of the section.
On a blog post, the big card is the title of the blog post.

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
