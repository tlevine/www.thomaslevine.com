// Email address
(function(){
  // http://stackoverflow.com/questions/11935175/sampling-a-random-subset-from-an-array
  var chainsaw=['','@thomaslevine', 'com'].join('.')
  var epost = document.getElementById("e-post")
  if (epost){
    epost.innerHTML=chainsaw
  }
})()
