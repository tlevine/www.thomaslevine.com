---
title: Ancestries of Nine Socrata datasets
created_at: 2013-07-18
kind: article
---

[![@richmanmax Tweets "deduuuuuupe."](deduuuuuupe.png)](https://twitter.com/richmanmax/status/353956877501087746)
[![@tomschenkjr Tweets about Chicago's filters](tomschenkjr.png)](https://twitter.com/tomschenkjr/status/354010005504147456)
[![@SR_spatial Tweets about patterns of derived datasets](SR_spatial.png)](https://twitter.com/SR_spatial/status/354088265344749568)

I downloaded all of the metadata about all of the Socrata datasets during the week of ...
Explain viewFilters and provisions to other data portals
Out of these datasets, I took out nine of the top ten (Explain the weird one.) datasets, and here I show their families.
Explain the quirk about redirects that I didn't handle

## Notes from Nicole Neditch
* Oakland had the option to import all of the datasets from other portals in order to make the search work across portals, but they couldn't import just some of the datasets.
* People liked that Socrata has a lot of technical support
* When choosing the portal, they looked at just Socrata, CKAN and Junar. (There aren't really many people in this market.)
* Junar seemed too basic and unable to handle larger data and more datasets, and they didn't have an API to sync datasets from internal datasets.
* CKAN needed either internal support or a separate contracted support
* Nicole can send me the analysis.
* http://dev.socrata.com/publishers/importing
* Qualms
  * It's really slow, especially with geocoding. She things there's just one server that does all of the geocoding.
  * https://data.oaklandnet.com/
  * CKAN has bugs. Like mapping never works right. Socrata's mapping and visualization tools work really well.
  * "Any city staff person can generate a map of location-based data on the fly."
  * Embed a pie chart of the wildlife prevention thing. If they didn't have socrata, they probably would have put together a pdf report. There are other tools for this, but the people working for the city don't know them.
  * That couple downloaded and filtered the data, but they couldn't print it.
  * It seems that you can query on queries, but then when you save it it doesn't store.
  * Federation: https://cities-datagov.demo.socrata.com/
  * For Oakland, it's just Nicole and Titus
* Socrata has a bunch of add-on features like integrations and a checkbook dashboard. It might be fun to get a list of these from Socrata and then see which portals use which features
* Metadata could be better. Like an "explanation of what the fields are" (codebook, data dictionary)
  
<!-- Scripts after the introduction so you don't notice the table loading -->
<script src="angular.min.js"></script>
<script src="angular-table.js"></script>
<script src="angular-strap.js"></script>
<script src="script.js"></script>
<link rel="stylesheet" href="style.css">
<div ng-app="genealogy">
  <div ng-controller="GenealogyCtrl">
    <select ng-model="table" ng-options="t.source.name for t in tables">
      <option value="">Choose a dataset</option>
    </select>
    <div ng-show="table">
      <h3>The family</h3>
      <ul>
        <li><strong>Original source</strong>: <a href="https://{{table.source.portal}}/-/-/{{table.source.id}}">{{table.source.portal}}</a></li>
        <li><strong>Number of children</strong>: {{table.datasets.length}}</li>
        <li><strong>Total downloads</strong>: {{ table.totals.downloadCount }}</li>
        <li><strong>Total views</strong>: {{ table.totals.viewCount }}</li>
        <li><strong>Description</strong>: {{table.source.description}}</li>
      </ul>
      <h3>Its members</h3>
      <angular-table model="table.datasets" default-sort-column="createdAt">
        <header-row>

          <header-column sortable="true" sort-field-name="name">
            <div style="display: inline-block;">Name</div>
            <sort-arrow-ascending></sort-arrow-ascending>
            <sort-arrow-descending></sort-arrow-descending>
          </header-column>

          <header-column class="skinny" sortable="true" sort-field-name="createdAt">
            <div style="display: inline-block;">Created</div>
            <sort-arrow-ascending></sort-arrow-ascending>
            <sort-arrow-descending></sort-arrow-descending>
          </header-column>

          <header-column class="skinny" sortable="true" sort-field-name="viewCount">
            <div style="display: inline-block;">Views</div>
            <sort-arrow-ascending></sort-arrow-ascending>
            <sort-arrow-descending></sort-arrow-descending>
          </header-column>

          <header-column class="skinny" sortable="true" sort-field-name="downloadCount">
            <div style="display: inline-block;">Down-loads</div>
            <sort-arrow-ascending></sort-arrow-ascending>
            <sort-arrow-descending></sort-arrow-descending>
          </header-column>

          <header-column class="less-skinny" sortable="true" sort-field-name="ncell">
            <div style="display: inline-block;">Size</div>
            <sort-arrow-ascending></sort-arrow-ascending>
            <sort-arrow-descending></sort-arrow-descending>
          </header-column>

          <header-column sortable="true" sort-field-name="ncopies">
            <div style="display: inline-block;">Federation</div>
            <sort-arrow-ascending></sort-arrow-ascending>
            <sort-arrow-descending></sort-arrow-descending>
          </header-column>

        </header-row>

        <row on-selected="emptyFunction" selected-color="#111">
          <column><a href="https://{{row.source_portal_hack}}/-/-/{{row.id}}" title="{{row.name}}">{{row.shortName}}</a></column>
          <column class="skinny">{{row.prettyDate}}</column>
          <column class="skinny number">{{row.viewCountPretty}}</column>
          <column class="skinny number">{{row.downloadCountPretty}}</column>
          <column class="less-skinny">
            {{row.ncellPretty}} cells
            <ul style="list-style: none;" class="snug" ng-show="row.rowSelected">
              <li class="snug"><small>{{row.ncolPretty}} variables</small></li>
              <li class="snug"><small>{{row.nrowPretty}} records</small></li>
            </ul>
          </column>
          <column>
            <span ng-hide="row.rowSelected">{{row.ncopiesPretty}}</span>
            <ul class="snug" style="list-style: none;" ng-show="row.rowSelected">
              <li class="snug" ng-repeat="portal in row.portals"><small>{{portal}}</small></li>
            </ul>
          </column>
        </row>
      </angular-table>
    </div>
  </div>
</div>
