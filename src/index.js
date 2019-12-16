import * as d3 from "d3";

const DEFAULT_MAX_COLOR = "#ff0000";
const DEFAULT_HEIGHT = 450;
const DEFAULT_WIDTH = 450;

export default class HeatMap {
  constructor(props = {}) {
    this.maxColor = props.maxColor || DEFAULT_MAX_COLOR;
    this.height = props.height || DEFAULT_HEIGHT;
    this.width = props.width || DEFAULT_WIDTH;
    this.onClick = props.onClick;
    this.onMouseOver = props.onMouseOver;
    this.onMouseOut = props.onMouseOut;
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

  determineYMarginWidth(target) {
    let maxWidth = 0;
    const rows = this.yLabels;
    const tempYScale = d3
      .scaleBand()
      .range([0, 0])
      .domain(rows)
      .padding(0.01);

    d3.select(target)
      .append('svg')
      .attr("id", "yHeightCheck")
      .append("g")
      .call(d3.axisLeft(tempYScale))
      .selectAll("text")
      .each(function() {
        maxWidth = Math.max(this.getBoundingClientRect().width, maxWidth);
      })
    d3.select("#yHeightCheck")
      .remove();

    return Math.ceil(maxWidth) + 10;
  }

  determineXMarginHeight(target) {
    let maxWidth = 0;
    const columns = this.xLabels
    const tempXScale = d3
      .scaleBand()
      .range([0, 0])
      .domain(columns)
      .padding(0.01);

    d3.select(target)
      .append('svg')
      .attr("id", "xHeightCheck")
      .append("g")
      .call(d3.axisBottom(tempXScale))
      .selectAll("text")
      .attr("y", 9)
      .attr("x", -9)
      .attr("dy", ".35em")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "start")
      .each(function() {
        maxWidth = Math.max(this.getBoundingClientRect().height, maxWidth);
      })

    d3.select("#xHeightCheck")
      .remove();

    return Math.ceil(maxWidth) + 10;

  }

  render(target) {
    const { onClick, onMouseOver, onMouseOut, maxColor, xLabels } = this;
    // remove any previously rendered items
    const existingSVGs = target.getElementsByTagName('svg');
    Array.from(existingSVGs).forEach(svg => {
      target.removeChild(svg);
    });

    const leftMarginWidth = this.determineYMarginWidth(target);
    const bottomMarginHeight = this.determineXMarginHeight(target);

    const margin = { top: bottomMarginHeight, right: 30, bottom: 30, left: leftMarginWidth };
    const width = this.width - margin.left - margin.right;
    const height = this.height - margin.top - margin.bottom;

    const maxValue = this.data.reduce((acc, currentValue) => Math.max(acc, currentValue.value), 0)

    const colorScale = d3
      .scaleLog()
      .range(["white", maxColor])
      .domain([1, maxValue]);

    const columns = xLabels;
    const rows = this.yLabels;
    const xAxis = d3
      .scaleBand()
      .range([0, width])
      .domain(columns)
      .align(0)
      .padding(0.01);

    const yAxis = d3
      .scaleBand()
      .range([height, 0])
      .domain(rows)
      .padding(0.01);

    const svg = d3
      .select(target)
      .append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("style", "max-width: 100%")
      .append("g")
      .attr("id", "margin-offset")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // add the x axis to the heatmap
    svg
      .append("g")
      .attr("transform", `translate(-1.5,0)`)
      .call(d3.axisTop(xAxis))
      .selectAll("text")
      .attr("y", -9)
      .attr("x", 9)
      .attr("dy", ".35em")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "start");

    // add the y axis to the heatmap
    svg
      .append("g")
      .attr("transform", `translate(-1.5, 0)`)
      .call(d3.axisLeft(yAxis));

    // add the data blocks to the heatmap.
    const blocks = svg.selectAll()
      .data(this.data, d => {
        return `${d.column}:${d.row}`;
      })
      .enter()
      .append("g")
      .attr("transform", function(d) { return `translate(${xAxis(d.column)},${yAxis(d.row)})`; });


    blocks.append("rect")
      .attr("width", xAxis.bandwidth())
      .attr("height", yAxis.bandwidth())
      .style("fill", function(d) {
        return colorScale(d.value);
      })
     .on("mouseover", function handleMouseOver(event) {
        d3.select(this).style("cursor", "pointer")
          .style("fill", "orange");
        // draw pop up with the cell information in it.
        if (onMouseOver) {
          onMouseOver(event, this);
        }
      })
      .on("mouseout", function handleMouseOver(event) {
        const originalColor = colorScale(d3.select(this).data()[0].value);
        d3.select(this).style("cursor", "default")
          .style("fill",originalColor);
        // remove pop up with the cell information in it.
        if (onMouseOut) {
          onMouseOut(event, this);
        }
      })
      .on("click", function handleClick(event) {
        // execute the onclick handler passed in on object creation?
        if (onClick) {
          onClick(event, this, d3.mouse(this));
        }
      });

    // TODO: combine the two text labels in a "g" element, so that they can be
    // easily centered in the rect.

    // if ( (width / this.xLabels.length) > 80) {
      // add the text labels
      blocks.append("text")
        .attr("x", xAxis.bandwidth() / 2)
        .attr("y", (yAxis.bandwidth() / 2) - 10)
        .style("text-anchor", "middle")
        .attr("pointer-events", "none")
        .attr("dy", ".35em")
      .text(function(d) {
        if ((width / xLabels.length) > 80 || d.forceLabel) {
          return d.label || d.value;
        }
        return null;
      });

      // add the secondary text labels
      blocks.append("text")
        .attr("x", xAxis.bandwidth() / 2)
        .attr("y", (yAxis.bandwidth() / 2) + 10)
        .style("text-anchor", "middle")
        .attr("pointer-events", "none")
        .attr("dy", ".35em")
      .text(function(d) {
        if ((width / xLabels.length) > 80 || d.forceLabel) {
          return d.label2;
        }
        return null;
      });
    // }



  }
}
