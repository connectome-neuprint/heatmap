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
  {column: 'AlphaXX', row: 'AlphaXX', value: 34, label: '34', label2: '2'},
  {column: 'Beta', row: 'Beta', value: 10, label: '10', label2: '2'},
  {column: 'Dish', row: 'Dish', value: 50, label: '50', label2: '0'},
  {column: 'Dish', row: 'Cish', value: 18, label: '18', label2: '5'},
  {column: 'AlphaXX', row: 'Beta', value: 45, label: '45', label2: '0'},
  {column: 'Beta', row: 'Cish', value: 21, label: '21', label2: '3'},
  {column: 'Cish', row: 'AlphaXX', value: 2, label: '2', label2: '8'},
  {column: 'Dish', row: 'AplhaXX', value: 38, label: '38', label2: '1'},
];

const xLables = ["AlphaXX", "Beta", "Cish", "Dish", "Beta1"];
const yLables = ["AlphaXX", "Beta", "Cish", "Dish", "Beta1"].reverse();
// grab the target div
const target = document.getElementById('heatmap');
// render the heatmap into the target.
heatmap.setYLabels(yLables).setXLabels(xLables).setData(testData).render(target);
