import * as d3 from "d3";

const DEFAULT_MAX_COLOR = "#ff0000";

export default class SVGHeatMap {
  constructor(props = {}) {
    this.maxColor = props.maxColor || DEFAULT_MAX_COLOR;
  }

  setData(dataArray) {
    this.data = dataArray;
    return this;
  }

  render(target) {
    console.table(this.data);
    console.log(
      `rendering heatmap to ${target} -> with color ${this.maxColor}`
    );
  }
}
