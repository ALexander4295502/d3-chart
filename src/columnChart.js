let margin = {top: 20, right: 40, bottom: 50, left: 40};
let width = 425 - margin.left - margin.right;
let height = 625 - margin.top - margin.bottom;

let fullWidth = width + margin.left + margin.right;
let fullHeight = height + margin.top + margin.bottom;

let svg = d3.select('.chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .call(responsivefy)
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

let data = [
  {score: 63, subject: 'Mathematics'},
  {score: 82, subject: 'Geography'},
  {score: 74, subject: 'Spelling'},
  {score: 97, subject: 'Reading'},
  {score: 52, subject: 'Science'},
  {score: 74, subject: 'Chemistry'},
  {score: 97, subject: 'Physics'},
  {score: 52, subject: 'ASL'}
];

let yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0]);

let yAxis = d3.axisLeft(yScale);

svg.call(yAxis);

let xScale = d3.scaleBand()
  .paddingInner(0.2)
  .paddingOuter(0.5)
  .domain(data.map(d => d.subject))
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
  .call(xAxis)
  .selectAll('text')
  .style('text-anchor', 'end')
  .attr('transform', 'rotate(-20)');

svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', d => xScale(d.subject))
  .attr('y', d => yScale(d.score))
  .attr('width', d => xScale.bandwidth())
  .attr('height', d => height - yScale(d.score));

function responsivefy(svg) {
  // get container + svg aspect ratio
  let container = d3.select(svg.node().parentNode),
    width = parseInt(svg.style("width")),
    height = parseInt(svg.style("height")),
    aspect = width / height;

  // add viewBox and preserveAspectRatio properties,
  // and call resize so that svg resizes on inital page load
  svg.attr("viewBox", "0 0 " + width + " " + height)
    .attr("preserveAspectRatio", "xMinYMid")
    .call(resize);

  // to register multiple listeners for same event type,
  // you need to add namespace, i.e., 'click.foo'
  // necessary if you call invoke this function for multiple svgs
  // api docs: https://github.com/mbostock/d3/wiki/Selections#on
  d3.select(window).on("resize." + container.attr("id"), resize);

  // get width of container and resize svg to fit it
  function resize() {
    let targetWidth = parseInt(container.style("width"));
    svg.attr("width", targetWidth);
    svg.attr("height", Math.round(targetWidth / aspect));
  }
}