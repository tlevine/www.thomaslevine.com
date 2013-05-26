//$(function(){
  var words = [
    // http://marvin.cs.uidaho.edu/misspell.html
    'accessible',
    'accidentally',
    'definitely',
    'fuchsia',
    'hamster',
    'mayonnaise',
    'mosquito',
    'perluette',
    'occurrence',
    'orangutan',
    'pamphlet',
    'syllable',
    'vinaigrette',
    'wildebeest',
    'zucchini',
    'xylophone'
  ]
  // console.log(words.join('\nis '))

  // http://stackoverflow.com/questions/11935175/sampling-a-random-subset-from-an-array
  var word = words[Math.floor(Math.random()*words.length)]
  var chainsaw=[word,'thomaslevine.com'].join('@')
  var epost = document.getElementById("e-post")
  if (epost){
    epost.innerHTML=chainsaw
  }
//})

