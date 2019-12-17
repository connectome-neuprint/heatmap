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
  {column: 'Beta', row: 'Beta', value: 0, label: '0', label2: '2', forceLabel: true},
  {column: 'Dish', row: 'Dish', value: 5000, label2: '0', forceLabel: true},
  {column: 'Dish', row: 'Cish', value: 18, label2: '5', forceLabel: true},
  {column: 'AlphaXX', row: 'Beta', value: 450, label2: '0', forceLabel: true },
  {column: 'Beta', row: 'Cish', value: 21, label2: '3'},
  {column: 'Cish', row: 'AlphaXX', value: null, label2: '8', forceLabel: true},
  {column: 'Dish', row: 'AlphaXX', value: 38, label: 'alternative', label2: '1'},
];

const xLabels = ["AlphaXX", "Beta", "Cish", "Dish"]

for ( let i = 0; i < 2; i+=1) {
  ["AlphaXX", "Beta", "Cish", "Dish"].forEach(item => {xLabels.push(`${item}${i}`)});
}

const yLabels = ["AlphaXX", "Beta", "Cish", "Dish", "Beta1"].reverse();
// grab the target div
const target = document.getElementById('heatmap');
// render the heatmap into the target.
heatmap.setYLabels(yLabels).setXLabels(xLabels).setData(testData).render(target);


const target2 = document.getElementById('heatmap2');
const yLabels2 = ['distal','proximal'];

const testData2 = [
  { column: 'distal', row: 'distal', value: "34", label2: "34" },
  { column: 'distal', row: 'proximal', value: 45 },
  { column: 'proximal', row: 'distal', value:56 },
  { column: 'proximal', row: '', value:23 },
];

heatmap.setYLabels(yLabels2).setXLabels(yLabels2).setData(testData2).render(target2);
