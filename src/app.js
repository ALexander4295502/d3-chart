var linearScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, 1]);

console.log(linearScale(50));