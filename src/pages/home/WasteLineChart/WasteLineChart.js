import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import graphData from "./iteration1Waste.json";

function WasteLineChart() {
  // const [graphData, setGraphData] = useState([]);

  // useEffect(() => {
  //   // Fetch data from JSON
  //   fetch("./datasets/iteration1Waste.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setGraphData(data);
  //       drawGraph();
  //     });
  // }, []);

  useEffect(() => {
    if (graphData.length > 0) {
      drawGraph();
    }
  }, [graphData]);

  const tooltip = d3
    .select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px");

  function drawGraph() {
    const margin = { top: 50, right: 600, bottom: 20, left: 100 };
    const svgWidth = 1500; // Set a default width or fetch from a container
    const svgHeight = 500; // Set a default height

    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;

    // Remove any existing SVG
    d3.select("#svgcontainer").selectAll("svg").remove();

    // Group
    const g = d3
      .select("#svgcontainer")
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    g.append("text")
      .attr("x", width / 2) // Position it in the middle of the SVG width
      .attr("y", -10) // Position it slightly above the top edge of the main chart area
      .attr("text-anchor", "middle") // Ensure the text is centered
      .attr("font-size", "24px") // Set font size
      .attr("fill", "#000000") // Set font color
      .text("Total Yearly Waste Collections");

    // Add background color for the chart area
    g.append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "#4a4f4b");

    // Assuming your data structure has a 'financial_year' for x-axis and 'total_garbage_collected' for y-axis:
    const xScale = d3
      .scaleBand()
      .domain(graphData.map((d) => d.financial_year))
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(graphData, (d) => d.total_garbage_collected * 1.2)])
      .range([height, 0]);

    // // y-axis gridline
    // g.append("g")
    //   .attr("class", "y-axis-grid")
    //   .call(d3.axisLeft(yScale).tickSize(-width).tickFormat("").ticks(5));

    // Shadow effect
    const defs = g.append("defs");
    const filter = defs.append("filter").attr("id", "shadow");
    filter
      .append("feOffset")
      .attr("in", "SourceGraphic")
      .attr("dx", 0)
      .attr("dy", 10)
      .attr("result", "offOut");
    filter
      .append("feGaussianBlur")
      .attr("in", "offOut")
      .attr("stdDeviation", 10)
      .attr("result", "blurOut");
    filter
      .append("feBlend")
      .attr("in", "SourceGraphic")
      .attr("in2", "blurOut")
      .attr("mode", "normal");

    const grad = defs
      .append("linearGradient")
      .attr("id", "grad")
      .attr("x1", "0%")
      .attr("x2", "0%")
      .attr("y1", "0%")
      .attr("y2", "100%");

    var colors = [
      ["rgb(250,128,114)", "0.5"], // Adjust the opacity here for the start of the gradient
      ["rgb(250,128,114)", "0"],
    ];

    grad
      .selectAll("stop")
      .data(colors)
      .enter()
      .append("stop")
      .style("stop-color", function (d) {
        return d[0];
      })
      .style("stop-opacity", function (d) {
        return d[1];
      })
      .attr("offset", function (d, i) {
        return 100 * (i / (colors.length - 1)) + "%";
      });

    // Axis
    // x-axis
    const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
    g.append("g")
      .attr("transform", "translate(0, " + height + ")")
      .attr("class", "graph-axis")
      .call(xAxis.scale(xScale))
      .append("text")
      .attr("x", width)
      .attr("y", -6)
      .attr("text-anchor", "end")
      .attr("font", "10px sans-serif")
      .attr("letter-spacing", "1px")
      .attr("fill", "#dae3dc")
      .text("Years");
    // y-axis
    const yAxis = d3.axisLeft(yScale).ticks(5).tickSizeOuter(0);
    g.append("g")
      .attr("class", "graph-axis y-axis-tick")
      .call(
        d3
          .axisLeft(yScale)
          .tickSize(-width)
          .ticks(5)
          .tickFormat((d) => `${(d / 1000000).toFixed(1)} Mt`)
      )
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .attr("font", "10px sans-serif")
      .attr("letter-spacing", "1px")
      .attr("fill", "#dae3dc")
      .text("Weight (in million tons)");

    // Data line
    const line = d3
      .line()
      .x((d) => xScale(d.financial_year) + xScale.bandwidth() / 2)
      .y((d) => yScale(d.total_garbage_collected));

    // define the area
    var area = d3
      .area()
      .x((d) => xScale(d.financial_year) + xScale.bandwidth() / 2)
      .y0(height)
      .y1((d) => yScale(d.total_garbage_collected));

    const path = g
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "#FA8072")
      .attr("stroke-width", "2px")
      //.style("filter", "url(#shadow)")
      .attr("d", line(graphData));

    g.append("path")
      .attr("class", "area")
      .attr("d", area(graphData))
      .attr("fill", "url(#grad");

    // Transition
    const totalLength = path.node().getTotalLength();
    path
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength);
    path.transition().duration(5000).attr("stroke-dashoffset", 0);

    // Data dots
    g.selectAll("line-circle")
      .data(graphData)
      .enter()
      .append("circle")
      .attr("r", 4)
      .attr("fill", (d) => {
        if (d.financial_year === 0) {
          // Adjusted this condition based on your dataset
          return "none";
        } else {
          return "#FA8072";
        }
      })
      .attr("cx", (d) => xScale(d.financial_year) + xScale.bandwidth() / 2)
      .attr("cy", (d) => yScale(d.total_garbage_collected))
      .attr("r", 5)
      .on("mouseover", function (event, d) {
        tooltip.text(
          d.financial_year +
            ": " +
            d.total_garbage_collected.toLocaleString() +
            " tons"
        );
        tooltip.style("visibility", "visible");
      })
      .on("mousemove", function (event) {
        tooltip
          .style("top", event.pageY - 10 + "px")
          .style("left", event.pageX + 10 + "px");
      })
      .on("mouseout", function (event) {
        tooltip.style("visibility", "hidden");
      });

    // Removing y-axis 0 tick-line
    d3.selectAll(".y-axis-tick .tick line").each(function (d, i) {
      if (i === 0) {
        this.remove();
      }
    });
  }

  return <div id="svgcontainer"></div>;
}

export default WasteLineChart;
