var back  = document.querySelector('#videos .back')
var above = document.querySelector('#videos .above')

function play() {
  above.play()
  if ((back.currentTime + 1) < back.duration) {
    back.play()
  }
}

function pause() {
  var videos = document.querySelectorAll('#videos video')
  for (var i = 0; i < videos.length; i++) {
    videos[i].pause()
  }
}

// Seek to the appropriate places
var length = 3746.000512 - 79 - 19
var _set = function(element, offset) {
  return function(x) {
    if (x > 1 || x < 0) {
      throw 'x must be between 0 and 1'
    }
    element.currentTime = offset + x * length + 19
  }
}
var _get = function(element, offset) {
  return (element.currentTime - offset - 19) / length
}
  
// Seek functions
var setBack = _set(back, 79.520136)
var setAbove= _set(above, 6.999342)
var getAbove= _get(above, 6.999342)

window.onload = function() {
  // Volume
  back.muted = true

  // Synchronize videos
  setBack(0)
  setAbove(0)

  // Seek bar
  var seek  = document.querySelector('#seek')
  seek.addEventListener('blur', pause)
  seek.addEventListener('mousedown', pause)
  seek.addEventListener('mouseup', seekFunc)
  seek.addEventListener('keyup', seekFunc)
  above.addEventListener('timeupdate', function() {
    if (above.playing) {
      seek.value = getAbove()
    }
  })
  
  function seekFunc() {
    setAbove(seek.value)
    setBack(Math.min(seek.value, 1))
  }
}
