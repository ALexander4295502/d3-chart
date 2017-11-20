let scores = [
  { name: 'Alice', score: 96},
  { name: 'Billy', score: 83},
  { name: 'Cindy', score: 91},
  { name: 'David', score: 96},
  { name: 'Emily', score: 88}
];

d3.select('.chart')
  .append('svg')
    .attr('width', 225)
    .attr('height', 300)
  .selectAll('rect')
  .data(scores)
  .enter()
  .append('rect')
  // d is the first element represents the data and i is the index
  .attr('y', (d, i) => i * 33)
  .style('width', d => d.score + 'px')
  .text((d) => d.name)
  .attr('class', 'bar');

