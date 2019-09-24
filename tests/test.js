import SVGHeatMap from '../src/index';

const heatmap = new SVGHeatMap({
  onClick(event, item, coordinates) {
    console.log(event, item, coordinates);
  },
  height: 600,
  width: 600,
});

// set up some example data
const testData = [
  {column: 'AlphaXX', row: 'AlphaXX', value: 34},
  {column: 'Beta', row: 'Beta', value: 10, label: ' ', label2: '2'},
  {column: 'Dish', row: 'Dish', value: 5000, label2: '0'},
  {column: 'Dish', row: 'Cish', value: 18, label2: '5'},
  {column: 'AlphaXX', row: 'Beta', value: 45, label2: '0'},
  {column: 'Beta', row: 'Cish', value: 21, label2: '3'},
  {column: 'Cish', row: 'AlphaXX', value: 2, label2: '8'},
  {column: 'Dish', row: 'AlphaXX', value: 38, label: 'alternative', label2: '1'},
];

const xLabels = ["AlphaXX", "Beta", "Cish", "Dish", "Beta1"];
const yLabels = ["AlphaXX", "Beta", "Cish", "Dish", "Beta1"].reverse();
// grab the target div
const target = document.getElementById('heatmap');
// render the heatmap into the target.
heatmap.setYLabels(yLabels).setXLabels(xLabels).setData(testData).render(target);
