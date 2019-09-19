import SVGHeatMap from '../src/index';

const heatmap = new SVGHeatMap();

// set up some example data
const testData = [
  {column: 'AlphaXXXXXXXXX', row: 'EnumXXXXX', value: 34},
  {column: 'Beta', row: 'Help', value: 10},
  {column: 'Dish', row: 'Fit', value: 50},
  {column: 'Dish', row: 'Gup', value: 18},
  {column: 'AlphaXXXXXXXXX', row: 'Help', value: 45},
  {column: 'Beta', row: 'Gup', value: 21},
  {column: 'Cish', row: 'EnumXXXXX', value: 2},
  {column: 'Dish', row: 'EnumXXXXX', value: 38},
];

const xLables = ["AlphaXXXXXXXXX", "Beta", "Cish", "Dish"];
const yLables = ["EnumXXXXX", "Fit", "Gup", "Help"];
// grab the target div
const target = document.getElementById('heatmap');
// render the heatmap into the target.
heatmap.setYLabels(yLables).setXLabels(xLables).setData(testData).render(target);
