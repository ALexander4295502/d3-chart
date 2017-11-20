d3.json('../data/data.json', function (data) {
  let min = d3.min(data, (d) => d.age);
  console.log(min);
  let extent = d3.extent(data, (d) => d.age);
  console.log(extent);
  let scale = d3.scaleLinear()
    .domain(extent)
    .range([0, 600]);
  console.log(scale(37));

  let ages = d3.set(data, (d) => d.age);
  console.log(ages.values());
});

// d3.csv('../data/data.csv', function (data) {
//   console.log("in csv: ");
//   console.table(data);
// });