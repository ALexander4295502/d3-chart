let div = d3.select('div');
console.log(div.nodes());

let divLinks = div.selectAll('a');
console.log(divLinks.nodes());

console.log(d3.selectAll('div a').nodes());

let actionLink = d3.select('.action');
console.log(actionLink.nodes());

let secondLink = d3.select('a:nth-child(2)');
console.log(secondLink.nodes());

let allLinks = d3.selectAll(document.links);
console.log(allLinks.size());