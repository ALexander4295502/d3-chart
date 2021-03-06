let margin = {top: 20, right: 40, bottom: 40, left: 40};
let width = 425 - margin.left - margin.right;
let height = 625 - margin.top - margin.bottom;

let svg = d3.select('.chart')
  .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

svg.append('rect')
  .attr('width', width)
  .attr('height', height)
  .style('fill', 'lightblue')
  .style('stroke', 'green');

svg.append('rect')
  .attr('x', width / 2)
  .attr('width', width / 2)
  .attr('height', height)
  .style('fill', 'lightblue')
  .style('stroke', 'green');

// let yScale = d3.scaleLinear()
//   .domain([0, 1e6])
//   .range([height, 0]);
//
// let yAxis = d3.axisLeft(yScale).ticks(10, 's');

// let yScale = d3.scaleLinear()
//   .domain([0, 100])
//   .range([height, 0]);
//
// let yAxis = d3.axisLeft(yScale).tickValues([8, 19, 42, 88]);

let yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0]);

let yAxis = d3.axisLeft(yScale);
svg.call(yAxis);

let xScale = d3.scaleTime()
  .domain([new Date(2016, 0, 1, 6), new Date(2016, 0, 1, 9)])
  .range([0, width]);

// let xAxis = d3.axisBottom(xScale).ticks(d3.timeMinute.every(45));
let xAxis = d3.axisBottom(xScale)
  .ticks(5)
  .tickSizeInner(10)
  .tickSizeOuter(20)
  .tickPadding(15);
svg
  .append('g')
    .attr('transform', `translate(0, ${height})`)
  .call(xAxis);