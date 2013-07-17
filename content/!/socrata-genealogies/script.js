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

function commas(x) {
  // http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function prettyCount(x) {
  if (x < 10000) {
    return commas(x)
  } else {
    return commas(Math.round(x/1000)) + 'K'
  }
}

angular.module('genealogy', ['angular-table'])
  .controller('GenealogyCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.emptyFunction = function(row){}

  $http.get('genealogy.json').then(function(res){
    $scope.tables = res.data.map(function(table){
      table.totals = {}
      for (key in {"downloadCount":null,"viewCount":null}) {
        table.totals[key] = commas(table.datasets.map(function(d){return d[key]}).reduce(function(a,b){return a+b}))
      }
      table.datasets = table.datasets.map(function(dataset) {
        var d = new Date()
        d.setTime(1000 * dataset.createdAt)

        shortNameWords = []
        for (var j=0; j < dataset.name.length && j < 4; j++){
          nameWords = dataset.name.split(' ')
          shortNameWords.push(nameWords[j])
        }
        dataset.shortName = shortNameWords.join(' ')
        if (shortNameWords.length < nameWords.length) {
          dataset.shortName+= ' ...'
        }

        dataset.ncell = dataset.nrow * dataset.ncol
        dataset.ncopies = dataset.portals.length
        dataset.source_portal_hack = table.source.portal

        for (key in {"downloadCount":null,"viewCount":null,"ncell":null,"nrow":null,"ncol":null,"ncopies":null}) {
          dataset[key + 'Pretty'] = prettyCount(dataset[key])
        }
        dataset.prettyDate = MONTHS[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear()

        return dataset
      })
      return table
    })
  })
}])

