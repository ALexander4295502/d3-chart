const quantizeScale = d3.scaleQuantile()
  .domain([0, 100])
  .range(["red", "white", "green"]);

console.log(quantizeScale(100));
console.log(quantizeScale(50));
console.log(quantizeScale(49));
console.log(quantizeScale(51));
console.log(quantizeScale(33));
console.log(quantizeScale(34));

console.log("whilte : ", quantizeScale.invertExtent('white'));
console.log("red : ", quantizeScale.invertExtent('red'));
console.log("green : ", quantizeScale.invertExtent('green'));