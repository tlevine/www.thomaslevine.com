This is based on jingoro's nanoc-html5boilerplate

    git://github.com/jingoro/nanoc-html5boilerplate.git

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

# Extra Functionality

- [jQuery](http://jquery.com/)
- [Haml](http://haml-lang.com/)
- [Sass](http://sass-lang.com/)
- [Compass](http://compass-style.org/)
- [Markdown](https://github.com/gettalong/kramdown)
- [Cache busting](https://github.com/avdgaag/nanoc-cachebuster)
- [Image compression](https://github.com/jingoro/nanoc-image-compressor)
- [Javascript concatenation](https://github.com/jingoro/nanoc-javascript-concatenator)
- [Javascript minification](https://github.com/lautis/uglifier)

# License

Public domain

# Todo

- CSS fingerprinting doesn't seem to work...
- Improve dependency tracking for cache busting
- Option to turn on/off minification