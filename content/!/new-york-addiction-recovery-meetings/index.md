---
title: Addiction Recovery Meetings
tags: ['data']
---
I collected some information about addiction recovery meetings from
[In The Rooms](http://www.intherooms.com) for [Addicaid](http://addicaid.com/).
I got information on meetings within 125 miles of Brooklyn.

![Meetings plotted as points on a map of the New York metropolitan area](<%= item.identifier %>map.png)

They just wanted this information so they could list the meetings on a phone
application, but I thought I could have more fun with the data.

Let's focus on New York city because most of them are there.

![Meetings plotted as points on a map New York City](<%= item.identifier %>nyc.png)

Most meetings list the day and time at which they meet, so we can also see when
they happen during the week. Getting this to render nicely in a web browser was
annoying, so you get it as a [pdf](<%= item.identifier %>over-week.pdf).

The data aren't particularly clean; in particular, I sometimes treated meetings
after noon as having happened twelve hours earlier. This explains the 1 am
meetings. Aside from these errors, meetings tend to happen when people are
neither working nor sleeping.

Some particularly popular locations stand out. I think these are easier to see
in table form; here are the locations that had at least ten meetings.
(Some of these locations are actually the same place with different links.)

<style>
#top-locations thead tr,
#top-locations tbody tr:nth-child(6n + 4),
#top-locations tbody tr:nth-child(6n + 5),
#top-locations tbody tr:nth-child(6n + 6) {
    background-color: #DDD;
}
#top-locations th:first-child,
#top-locations td:first-child {
    width: 80%;
}

#top-locations th:last-child,
#top-locations td:last-child {
    text-align: right;
    width: 20%;
}
</style>
<table id="top-locations">
    <thead>
        <tr>
            <th>Location</th>
            <th>Number of meetings</th>
        </tr>
    </thead>
    <tbody>
        <tr><td><a href="http://meetings.intherooms.com/locations/ATLANTIC-CITY/NEW-AC-Club-House-VENICE-ISLAND-/46522">NEW AC Club House VENICE ISLAND</a></td><td>15</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/Bay-Shore/Penataquit-Methodist-Church/16360">Penataquit Methodist Church</a></td><td>10</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/Bayside/Islamorada-Group/28880">Islamorada Group</a></td><td>28</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/Marlboro/Mens-Disc/25044">Men's Disc.</a></td><td>19</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/New-York/419-West-129th-Street/15524">419 West 129th Street</a></td><td>17</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/New-York/46th-Street-Club-House/39061">46th Street Club House</a></td><td>35</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/New-York/993-Intervale-Avenue--Westchester-Avenue-10457/39063">993 Intervale Avenue (@ Westchester Avenue) 10457</a></td><td>258</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/New-York/Holy-Name-Church/15607">Holy Name Church</a></td><td>10</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/New-York/Holy-Name-Church/39195">Holy Name Church</a></td><td>19</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/New-York/I-Can-Club/39496">I Can Club</a></td><td>12</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/New-York/Jan-Hus-Church/35810">Jan Hus Church</a></td><td>10</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/New-York/Jan-Hus-Church/39098">Jan Hus Church</a></td><td>13</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/New-York/Our-Lady-of-Mount-Carmel-Church/39525">Our Lady of Mount Carmel Church</a></td><td>10</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/New-York/St-Monicas-Church/39971">St. Monica's Church</a></td><td>14</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/Oakdale/Oakdale-Fellowship/18652">Oakdale Fellowship</a></td><td>16</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/PALERMO/STAGECOACH-GROUP/28075">STAGECOACH GROUP</a></td><td>35</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/Paramus/Bergen-Regional-Medical-Center/15207">Bergen Regional Medical Center</a></td><td>12</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/Philadelphia/Last-Stop-Club-House/14843">Last Stop Club House</a></td><td>16</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/Philadelphia/White-Hall-Recreation-Center/14845">White Hall Recreation Center</a></td><td>73</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/Princeton/24-Club/20582">24 Club</a></td><td>14</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/RHINEBACK/THIRD-LUTHERAN-CHURCH/24489">THIRD LUTHERAN CHURCH</a></td><td>15</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/Reading/Holy-Spirit-Lutheran-Church/14964">Holy Spirit Lutheran Church</a></td><td>11</td></tr>
        <tr><td><a href="http://meetings.intherooms.com/locations/Trenton/Cadwalader-Asbury-United-Methodist-Church/14627">Cadwalader Asbury United Methodist Church</a></td><td>10</td></tr>
    </tbody>
</table>

I wonder how these locations manage to have so many meetings listed. Hmm and
maybe it's worth telling them about Addicaid.
