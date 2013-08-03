/* Most of the plot's DOM elements are destroyed and recreated
   on every drag of the red bar, and CSS is not separated from
   the Javascript.
   
   The resulting plot doesn't seem to be outrageously slow, but
   I apologize regardless for such an ugly creation. */

(function(){
  window.viz = {}

  viz.skewedDistribution = function() {
    var x = Math.random()
    if (x > 0.99) {
      return 0.99
    } else if (x < 0.02) {
      return 0.01
    } else if (x > 0.9) {
      return x
    } else {
      return Math.pow(x, 0.3)
    }
  }

  viz.sample = function(distribution, n) {
    var _sample = []
    for (var i = 0; i < n; i++) {
      _sample.push(distribution())
    }
    return _sample
  }

  viz.pow= function(a, b) {
    if (a === 0 && b === 0) {
      return 0
    } else {
      return Math.pow(a, b)
    }
  }

  viz.error = function(n) {
    // Polynomial-n error metric
    return function(a, b) {
      return viz.pow(Math.abs(b - a), n)
    }
  }

  viz.sumOfShapes = function(n, _sample, centerPoint) {
    return _sample.map(function(x) { return viz.error(n)(centerPoint, x)})
      .reduce(function(a, b) { return a + b })
  }

  viz.scaledSumOfShapes = function(n, _sample, centerPoint) {
    var rawSumOfShapes = viz.sumOfShapes(n, _sample, centerPoint)
    var extremeLeftSumOfShapes = viz.sumOfShapes(n, _sample, _sample[0])
    var extremeRightSumOfShapes = viz.sumOfShapes(n, _sample, _sample[_sample.length - 1])
    var extremeSumOfShapes = Math.max(extremeLeftSumOfShapes, extremeRightSumOfShapes)
    return rawSumOfShapes / extremeSumOfShapes
  }

  var SIDE = 640
  var identity = function(d) { return d }
  var sample = viz.sample(viz.skewedDistribution, 75).sort().map(function(d) {
    return Math.round(d * 50) / 50
  })
  var defaultCenter = 0.5
  var centerBarWidth = 1/100

  viz.increment = function(interval) {
    return function(d, i) {
      return SIDE - i * interval
    }
  }

  viz.viz = d3.select("#viz")
    .append('svg').attr('width', SIDE).attr('height', SIDE * 1.01)
    .attr('style', 'display: block')

  viz.caption = d3.select("#viz")
    .append('div')
    .attr('class', 'caption')
    .attr('style', 'display: block')

  viz.mode = viz.caption.append('svg').attr('class', 'mode').attr('width', SIDE/3).attr('height', SIDE * 4/9)
  viz.mode.append('text').attr('x', SIDE/6).attr('y', SIDE * 3.5/9)
    .attr('style', 'text-anchor: middle;')
    .attr('fill', 'white')
    .text('Sum of points')

  viz.median = viz.caption.append('svg').attr('class', 'median').attr('width', SIDE/3).attr('height', SIDE * 4/9)
  viz.median.append('text').attr('x', SIDE/6).attr('y', SIDE * 3.5/9)
    .attr('style', 'text-anchor: middle;')
    .attr('fill', 'white')
    .text('Sum of lines')

  viz.mean = viz.caption.append('svg').attr('class', 'mean').attr('width', SIDE/3).attr('height', SIDE * 4/9)
  viz.mean.append('text').attr('x', SIDE/6).attr('y', SIDE * 3.5/9)
    .attr('style', 'text-anchor: middle;')
    .attr('fill', 'white')
    .text('Sum of squares')

  viz.viz.selectAll('line.tick')
    .data(sample)
    .enter()
    .append('line')
    .attr('class', 'tick')
    .attr('x1', function(d) { return SIDE * d })
    .attr('x2', function(d) { return SIDE * d })
    .attr('y1', 0.99 * SIDE)
    .attr('y2', 1.01 * SIDE)
    .attr('stroke', 'white')
    .attr('stroke-opacity', 0.3)
    .attr('stroke-width', SIDE / 200)

  viz.plot = function(center) {
    // The error distance from center
    errorSide = function(d) {
      return SIDE * Math.abs(center - d)
    }

    viz.viz.selectAll('circle.d0').remove()
    viz.viz.selectAll('line.d1').remove()
    viz.viz.selectAll('rect.d2').remove()

    viz.mode.selectAll('circle').remove()
    viz.median.selectAll('line').remove()
    viz.mean.selectAll('rect').remove()

    // Point errors (corresponds to the mode)
    viz.viz.selectAll('circle.d0')
      .data(sample)
      .enter()
      .append('circle')
      .attr('class', 'd0')
      .attr('cx', function(d) { return SIDE * d })
      .attr('cy', viz.increment(SIDE / 75))
      .attr('r', SIDE / 250)
      .attr('fill', 'white')
      .attr('fill-opacity', function(d) {
        return d === center ? 0 : 1
      })

    // Linear errors (corresponds to the median)
    viz.viz.selectAll('line.d1')
      .data(sample)
      .enter()
      .append('line')
      .attr('class', 'd1')
      .attr('x1', function(d) {
        return SIDE * (d < center ? d : (center + centerBarWidth))
      })
      .attr('x2', function(d) {
        return SIDE * (d > center ? d : (center + centerBarWidth))
      })
      .attr('y1', viz.increment(SIDE / 75))
      .attr('y2', viz.increment(SIDE / 75))
      .attr('stroke', 'white')
      .attr('stroke-dasharray', (SIDE/80) + ', ' + (SIDE /160))
      .attr('stroke-width', SIDE / 400)
      .attr('stroke-opacity', 0.4)

    // Square errors (corresponds to the mean)
    viz.viz.selectAll('rect.d2')
      .data(sample)
      .enter()
      .append('rect')
      .attr('class', 'd2')
      .attr('x', function(d) {
        return SIDE * (d < center ? d : center)
      })
      .attr('y', function(d) {
        return SIDE - errorSide(d)
      })
      .attr('height', errorSide)
      .attr('width',  errorSide)
      .attr('fill', 'white')
      .attr('fill-opacity', 0.03)

    viz.modeData = sample.map(function(x) { return viz.pow(x - center, 0) }).filter(function(x) { return x === 1})

    viz.mode.selectAll('circle')
      .data(viz.modeData)
      .enter()
      .append('circle')
      .attr('class', 'd0')
      .attr('cx', function(d, i) {
        return (SIDE/3) * ((i%10) * (1/11) + 1/11)
      })
      .attr('cy', function(d, i) {
        return (SIDE/3) * (1 - (Math.floor(i/ 10) * (1/11) + 1/11)) + (SIDE/3/11) - (SIDE/250)
      })
      .attr('r', SIDE / 250)
      .attr('fill', 'white')
      .attr('fill-opacity', function(d) {
        return d === center ? 0 : 1
      })

    viz.median.selectAll('line')
      .data([(SIDE / 3) * viz.scaledSumOfShapes(1, sample, center)])
      .enter()
      .append('line')
      .attr('y1', SIDE/3)
      .attr('y2', function(d) { return (SIDE/3)-d})
      .attr('x1', SIDE/6)
      .attr('x2', SIDE/6)
      .attr('stroke', 'white')
      .attr('stroke-width', SIDE/90)

    viz.mean.selectAll('rect')
      .data([(SIDE / 3) * viz.scaledSumOfShapes(2, sample, center)])
      .enter()
      .append('rect')
      .attr('y', function(d) {return SIDE/3 - d})
      .attr('x', function(d) {return ((SIDE/3) - d) /2})
      .attr('height', identity)
      .attr('width', identity)
      .attr('fill', 'white')

//  viz.caption.select('
  }

  // https://gist.github.com/enjalot/1378144
  var drag = d3.behavior.drag()
    .on("drag", function(d,i) {
      window.e = d3.event
      d = (Math.min(Math.max(0, d3.event.x - SIDE * centerBarWidth), SIDE) / SIDE)
      d = Math.round(d * 50) / 50
      d = Math.min(d, 74/75) // Prevent the slider from falling off the screen
      viz.viz.selectAll('#drag-me').remove()
      d3.select(this).attr("x", SIDE * d)
      viz.plot(d)

      // Move the bar to the front because I'm sloppily rewriting
      // http://stackoverflow.com/questions/14167863/how-can-i-bring-a-circle-to-the-front-with-d3
      d3.select(this).each(function() { this.parentNode.appendChild(this);})
    })

  // Go
  viz.plot(defaultCenter)

  // Selected center point
  viz.viz.selectAll('rect.center')
    .data([defaultCenter])
    .enter()
    .append('rect')
    .attr('class', 'center')
    .attr('x', function(d) { return SIDE * (d - centerBarWidth)})
    .attr('y', 0)
    .attr('height', SIDE * 1.01)
    .attr('width', SIDE * 2 * centerBarWidth)
    .attr('fill', '#fe57a1')
    .attr('fill-opacity', 0.7)
    .call(drag)

  viz.viz.append('text')
    .attr('x', SIDE/2).attr('y', SIDE/8)
    .attr('style', 'text-anchor: end;')
    .attr('id', 'drag-me')
    .attr('fill', 'white')
    .text('Drag the pink bar -->')

})()
