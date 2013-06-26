// Email address
(function(){
  var words = [
    'hamster',
    'paraphernalia',
    'perluette',

    // http://marvin.cs.uidaho.edu/misspell.html
    'accessible',
    'accidentally',
    'definitely',
    'fuchsia',
    'mayonnaise',
    'mosquito',
    'occurrence',
    'orangutan',
    'pamphlet',
    'syllable',
    'vinaigrette',
    'wildebeest',
    'zucchini',
    'xylophone',
  ]

  // http://stackoverflow.com/questions/11935175/sampling-a-random-subset-from-an-array
  var word = words[Math.floor(Math.random()*words.length)]
  var chainsaw=[word,'thomaslevine.com'].join('@')
  var epost = document.getElementById("e-post")
  if (epost){
    epost.innerHTML=chainsaw
  }
})()

$(function(){
  setTimeout(function(){
    $('#feedback').fadeIn()
  }, 2 * 60 * 1000)
})
