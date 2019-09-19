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

  setXLabels(labels) {
    this.xLabels = labels;
    return this;
  }

  setYLabels(labels) {
    this.yLabels = labels;
    return this;
  }

  render(target) {
    console.table(this.data);
    console.log(
      `rendering heatmap to ${target} -> with color ${this.maxColor}`
    );

    const margin = { top: 30, right: 30, bottom: 30, left: 30 };
    const width = 450 - margin.left - margin.right;
    const height = 450 - margin.top - margin.bottom;

    const colorScale = d3
      .scaleLog()
      .range(["white", DEFAULT_MAX_COLOR])
      .domain([1, 100]);

    const columns = this.xLabels;
    const rows = this.yLabels;
    const x = d3
      .scaleBand()
      .range([0, width])
      .domain(columns)
      .align(0)
      .padding(0.01);
    const y = d3
      .scaleBand()
      .range([height, 0])
      .domain(rows)
      .padding(0.01);

    const svg = d3
      .select(target)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .range([0, width])
      .domain(columns)
      .padding(0.01);
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
        .attr("y", 9)
        .attr("x", 9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(45)")
        .style("text-anchor", "start");

    const y = d3
      .scaleBand()
      .range([height, 0])
      .domain(rows)
      .padding(0.01);
    svg.append("g").call(d3.axisLeft(y));

    svg
      .selectAll()
      .data(this.data, (d) => {
        console.log(d);
        return `${d.column}:${d.row}`;
      })
      .enter()
      .append("rect")
      .attr("x", function(d) {
        return x(d.column);
      })
      .attr("y", function(d) {
        return y(d.row);
      })
      .attr("width", x.bandwidth())
      .attr("height", y.bandwidth())
      .style("fill", function(d) {
        return colorScale(d.value);
      })
      .on("mouseover", function handleMouseOver(event) {
        // draw pop up with the cell information in it.
        console.log(event);
      })
      .on("click", function handleClick(event) {
        // execute the onclick handler passed in on object creation?
        console.log(event, this, d3.mouse(this));
      });
  }
}
