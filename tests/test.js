import SVGHeatMap from '../src/index';

const heatmap = new SVGHeatMap({
  onClick(event, item, coordinates) {
    console.log(event, item, coordinates);
  },
  height: 750,
  width: 750,
});

// set up some example data
const testData = [
  {column: 'AlphaXXXXXXXXX', row: 'EnumXXXXX', value: 34, label: '34', label2: '2'},
  {column: 'Beta', row: 'Help', value: 10, label: '10', label2: '2'},
  {column: 'Dish', row: 'Fit', value: 50, label: '50', label2: '0'},
  {column: 'Dish', row: 'Gup', value: 18, label: '18', label2: '5'},
  {column: 'AlphaXXXXXXXXX', row: 'Help', value: 45, label: '45', label2: '0'},
  {column: 'Beta', row: 'Gup', value: 21, label: '21', label2: '3'},
  {column: 'Cish', row: 'EnumXXXXX', value: 2, label: '2', label2: '8'},
  {column: 'Dish', row: 'EnumXXXXX', value: 38, label: '38', label2: '1'},
];

const xLables = ["AlphaXXXXXXXXX", "Beta", "Cish", "Dish"];
const yLables = ["EnumXXXXX", "Fit", "Gup", "Help"];
// grab the target div
const target = document.getElementById('heatmap');
// render the heatmap into the target.
heatmap.setYLabels(yLables).setXLabels(xLables).setData(testData).render(target);
