import SVGHeatMap from '../src/index';

const heatmap = new SVGHeatMap();

// set up some example data
const testData = [
  {column: 'Alpha', row: 'Enum', value: 34},
  {column: 'Beta', row: 'Help', value: 10},
  {column: 'Dish', row: 'Fit', value: 50},
  {column: 'Dish', row: 'Gup', value: 18},
  {column: 'Alpha', row: 'Help', value: 45},
  {column: 'Beta', row: 'Gup', value: 21},
  {column: 'Cish', row: 'Enum', value: 2},
  {column: 'Dish', row: 'Enum', value: 38},
];
// grab the target div
const target = document.getElementById('heatmap');
// render the heatmap into the target.
heatmap.setData(testData).render(target);
