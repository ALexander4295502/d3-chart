// d3.select('#block')
//   .transition()
//     .duration(1000)
//     // .delay(750)
//     // .ease(d3.easeBounceInOut)
//     .ease(d3.easeBounceOut)
//     .style('width', '200px')
//   .transition()
//     .duration(1000)
//     .ease(d3.easeBounceOut)
//     .style('height', '300px')
//   .transition()
//     .duration(1000)
//     .ease(d3.easeQuadOut)
//     .style('background-color', 'purple');

function go() {
  let t = d3.transition()
    .delay(1000)
    .duration(1000);

  d3.selectAll('.block')
    .transition(t)
    .style('width', '400px');

  d3.select('.a')
    .transition(t)
    .style('background-color', 'blue');

  d3.select('.b')
    .transition(t)
    .style('background-color', 'orange');
}

function configure(t, delay, duration) {
  return t.delay(delay).duration(duration);
}

function goNow() {
  d3.selectAll('.block')
    .transition()
    .call(configure, 1000, 1000)
    .style('height', '300px')
    .transition()
    .call(configure, 10, 1000)
    .style('border', '10px solid black');
}