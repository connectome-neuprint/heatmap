import SVGHeatMap from '../src/index';

const heatmap = new SVGHeatMap();

// set up some example data
const testData = [
  ['foo',12,34,23,56],
  ['bar',56,23,12,67],
  ['baz',1,4,67,3,],
];
// grab the target div
const target = document.getElementById('heatmap');
// render the heatmap into the target.
heatmap.setData(testData).render(target);
