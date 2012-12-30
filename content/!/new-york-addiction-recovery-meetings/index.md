---
title: Addiction Recovery Meetings
tags: ['data']
---
<style>
#slides {
    overflow: hidden;
    position: relative;
    width: 420px;
    height: 350px;
}

@media screen and (min-width: 500px) {
    #slides {
        width: 525px;
        height: 610px;
    }
}

@media screen and (min-width: 1008px) {
    #slides {
        width: 840px;
        height: 650px;
    }
}
 
#slides .slide-container {
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
}
  
#slides .slide-container img {
    position: absolute;
}

/*    Hide the slide data container    */
#slides .slides {
    display: none;
}
</style>
I collected some information about addiction recovery meetings from
[In The Rooms](http://www.intherooms.com) for [Addicaid](http://addicaid.com/).
I got information on meetings within 125 miles of Brooklyn.

![Meetings plotted as points on a map of the New York metropolitan area](<%= item.identifier %>map.png)

Let's focus on New York city because most of them are there.

![Meetings plotted as points on a map New York City](<%= item.identifier %>nyc.png)

Most meetings list the day and time at which they meet, so we can also see when
they happen during the week.

<div id="slides">
    <div class="slide-container">
        <img src="over-week-001.png" alt="Animation of current meetings over the week">
    </div>
    <ol class="slides">
    <% (1..336).to_a.each do |i| %>
        <li>
            <a href="over-week-<%= '%03d' % i %>.png"></a>
        </li>
    <% end %>
    </ol>
</div>
<input type="range" min="1" max="336" step="1">

(There's also a [pdf](<%= item.identifier %>over-week.pdf).)

The data aren't particularly clean; in particular, I sometimes treated meetings
after noon as having happened twelve hours earlier.

<script src="/js/vendor/jquery.js"></script>
<script src="/js/vendor/really-simple-slideshow.js"></script>
<script>
$(function(){
  $("#slides").rsfSlideshow({
    effect: 'fade',
    interval: 0.1,
    transition: 100,
  })
  $("#slides").rsfSlideshow('bindIndex', $('#slider'), true)
})
</script>

