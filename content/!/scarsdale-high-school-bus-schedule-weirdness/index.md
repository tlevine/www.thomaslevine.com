---
title: Scarsdale High School bus schedule weirdness
short_title: Weird bus schedules
tags: ['scarsdale', 'data']
kind: article
created_at: 2013-01-25
---

Scarsdale High School bus schedules are
[here](http://www.scarsdaleschools.org/cms/lib5/NY01001205/Centricity/Domain/13/SHSBusSchedule.pdf).
I want to make a map of them! And maybe do other things.

I manually transcribed the file because it's a small messy scan.
In my [resulting spreadsheet](https://raw.github.com/tlevine/scarsdale-data/master/school-buses/bus_stops.csv),
each row is a bus stop on a trip. (The trip from home to school and the trip
from school to home are different trips.)

I found some funny rows in the spreadsheet.

The same stop is presented twice.

    route.name,route.number,stop.id,time,n.students,location
    ...
    HS 25 AM,           157,    10, 7:27 am,      0,ROCK CREEK LN & SYCAMORE RD
    HS 25 AM,           157,    11, 7:27 am,      6,ROCK CREEK LN & SYCAMORE RD
    ...

Some locations are weird.

    route.name,route.number,stop.id,time,n.students,location
    ...
    HS 28 AM,           155,     3, 7:02 am,      2,OLD WHITE PLAINS RD & WELLHOUSE CLOSE & OLD WHITE PLAINS RD
    ...
    HS 28 AM,           155,    15, 7:21 am,      1,WEAVER ST & HWY 125 & CO HWY 129 & WEAVER ST & HWY 125 & CO HWY 129 & HILLANDALE DR &  HILLANDDALE DR & HILLANDALE CLOSE
    ...
    HS 70 PM(3:10),     157,    12, 3:40 pm,      0,GRIFFEN AVENUE & BRITTANY CLOSE & GRIFFEN AVENUE
    ...
    HS 74 PM(4:15),      95,     3, 4:19 pm,      0,WHITE RD & SPRAGUE RD & SPRAGUE AVE & SPRAGUE RD & SPRAGUE AVE & WHITE RD
    ...
    HS 74 PM(4:15),      95,    18, 4:45 pm,      0,MAMARONECK RD & MAMARONECK RD & CARTHAGE RD
    HS 74 PM(4:15),      95,    19, 4:47 pm,      0,INNES RD & HEATHCOTE RD & HEATHCOTE RD
    HS 74 PM(4:15),      95,    20, 4:50 pm,      0,HAVERFORD AVE & WEAVER ST & HWY 125 & WEAVER ST & HWY 125
    HS 74 PM(4:15),      95,    21, 4:51 pm,      0,BRADFORD RD & WEAVER ST & HWY 125 & CO HWY 129 & WEAVER ST & HWY 125 & CO HWY 129
    ...
    HS 74 PM(4:15),      95,    23, 4:54 pm,      0,GRIFFEN AVENUE & GRAND PK AVE & GRIFFEN AVENUE
    HS 74 PM(4:15),      95,    24, 4:56 pm,      0,GRIFFEN AVENUE & MURDOCK RD & GRIFFEN AVENUE
    ...
    HS 74 PM(4:15),      95,    26, 4:59 pm,      0,FAIRWAY DR & BARNWALL LN & FAIRWAY DR
    HS 74 PM(4:15),      95,    27, 5:00 pm,      0,MAMARONECK RD & BARKER LN & MAMARONECK RD
    HS 74 PM(4:15),      95,    28, 5:01 pm,      0,MAMARONECK RD & COLONIAL RD & MAMARONECK RD
    HS 74 PM(4:15),      95,    29, 5:01 pm,      0,MAMARONECK RD & MAMARONECK RD & STRATTON RD

And several other rows have "location[s]" at three-street intersections.

Analyses if the schedules will come eventually; I just thought I'd share this
first. And if you can't wait for me, you can take a look at the 
[data](https://github.com/tlevine/scarsdale-data/tree/master/school-buses) yourself.
