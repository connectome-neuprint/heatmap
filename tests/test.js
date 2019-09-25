import SVGHeatMap from '../src/index';

const heatmap = new SVGHeatMap({
  onClick(event, item, coordinates) {
    console.log(event, item, coordinates);
  },
  // height: 300,
  // width: 300,
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

const xLabels = ["AlphaXX", "Beta", "Cish", "Dish", "Beta1", "AlphaXX1", "Beta1", "Cish1", "Dish1", "Beta2", "AlphaXX2", "Beta2", "Cish2", "Dish2", "Beta3", "AlphaXXi4", "Beta4", "Cish4", "Dish4", "Beta5", "AlphaXX5", "Beta5", "Cish5", "Dish5", "Beta6", "AlphaXX6", "Beta6", "Cish6", "Dish6", "Beta7"];
const yLabels = ["AlphaXX", "Beta", "Cish", "Dish", "Beta1"].reverse();
// grab the target div
const target = document.getElementById('heatmap');
// render the heatmap into the target.
heatmap.setYLabels(yLabels).setXLabels(xLabels).setData(testData).render(target);


const target2 = document.getElementById('heatmap2');
const yLabels2 = ['distal','proximal'];

const testData2 = [
  { column: 'distal', row: 'distal', value: 34 },
  { column: 'distal', row: 'proximal', value: 45 },
  { column: 'proximal', row: 'distal', value:56 },
  { column: 'proximal', row: '', value:23 },
];

heatmap.setYLabels(yLabels2).setXLabels(yLabels2).setData(testData2).render(target2);
