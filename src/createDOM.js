d3.select('.title')
  .append('div', 'a:nth-child(2)')
    .style('color', 'red')
    .html('Inventory <b>SALE</b>')
  .append('button')
    .style('display', 'block')
    .text('submit');

d3.select('.action').remove();