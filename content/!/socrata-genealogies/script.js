var MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

function prettyCount(x) {
  var thousands = Math.round(x / 1000)
  // http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  return thousands.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'K'
}

angular.module('geneology', ['angular-table'])
  .controller('GeneologyCtrl', ['$scope', '$http', function($scope, $http) {
  // Buttons
  $http.get('geneology.json').then(function(res){
    $scope.tables = res.data.map(function(table){
      table.totals = {}
      for (key in {"downloadCount":null,"viewCount":null}) {
        table.totals[key] = table.datasets.map(function(d){return d[key]}).reduce(function(a,b){return a+b}).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
      table.datasets = table.datasets.map(function(dataset) {
        var d = new Date()
        d.setTime(1000 * dataset.createdAt)

        shortNameWords = []
        for (var j=0; j < dataset.name.length && j < 6; j++){
          nameWords = dataset.name.split(' ')
          shortNameWords.push(nameWords[j])
        }
        dataset.shortName = shortNameWords.join(' ')
        if (shortNameWords.length < nameWords.length) {
          dataset.shortName+= ' ...'
        }

        for (key in {"downloadCount":null,"viewCount":null}) {
          dataset[key + 'Pretty'] = prettyCount(dataset[key])
        }
        dataset.prettyDate = MONTHS[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear()
        dataset.ncell = dataset.nrow * dataset.ncol
        dataset.ncopies = dataset.portals.length
        dataset.source_portal_hack = table.source.portal
        return dataset
      })
      return table
    })
  })
}])
