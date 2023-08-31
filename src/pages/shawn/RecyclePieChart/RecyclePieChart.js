import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import data from "./iteration1Recycle.json";

const RecyclePieChart = () => {
  const [recyclingData, setRecyclingData] = useState([]);

  useEffect(() => {
    setRecyclingData(data);
    if (recyclingData.length > 0) {
      drawPieChart("Total"); // Set the default state to "Total"
    }
  }, [recyclingData]);

  const tooltip = d3
    .select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("background-color", "white")
    .style("padding", "5px")
    .style("border", "1px solid black")
    .style("border-radius", "5px")
    .style("opacity", 0);

  const drawPieChart = (financial_year = "Total") => {
    let filteredData;

    if (financial_year === "Total") {
      filteredData = recyclingData.reduce(
        (acc, curr) => {
          acc.total_kerbside_recycling_recycled +=
            curr.total_kerbside_recycling_recycled;
          acc.not_recycled_kerbside += curr.not_recycled_kerbside;
          return acc;
        },
        { total_kerbside_recycling_recycled: 0, not_recycled_kerbside: 0 }
      );
    } else {
      filteredData = recyclingData.find(
        (d) => d.financial_year === financial_year
      );
    }

    const totalSum =
      filteredData.total_kerbside_recycling_recycled +
      filteredData.not_recycled_kerbside;

    const pieData = [
      {
        title: "Recycled",
        value: filteredData.total_kerbside_recycling_recycled,
      },
      { title: "Not Recycled", value: filteredData.not_recycled_kerbside },
    ];

    const margin = { top: 300, right: 200, bottom: 0, left: 300 };
    const width = 1500 - margin.left - margin.right;
    const height = 700 - margin.top - margin.bottom;
    const radius = 180;

    const color = d3
      .scaleOrdinal()
      .domain(["Recycled", "Not Recycled"])
      .range(["#5EC9A9", "#AFE4B8"]);

    const pie = d3.pie().value((d) => d.value)(pieData);
    const arc = d3
      .arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    // Clear existing SVG
    d3.select("#pie").selectAll("*").remove();

    const svg = d3
      .select("#pie")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const mainSvg = d3.select("#pie").select("svg");
    mainSvg
      .append("text")
      .attr("x", width / 2 - 195)
      .attr("y", margin.top - 200) // Adjust this value to position the text above the pie chart
      .attr("text-anchor", "middle")
      .attr("font-size", "16px")
      .attr("font-weight", "bold")
      .text(`Total: ${totalSum} tons`);

    const g = svg
      .selectAll(".arc")
      .data(pie)
      .enter()
      .append("g")
      .attr("class", "arc")
      .on("mouseover", function (d, i) {
        d3.select(this).transition().duration("50").attr("opacity", ".95");
      })
      .on("mouseout", function (d, i) {
        d3.select(this).transition().duration("50").attr("opacity", "1");
      });

    g.append("text")
      .attr("x", 10) // Position it in the middle of the SVG width
      .attr("y", -250) // Position it slightly above the top edge of the main chart area
      .attr("text-anchor", "middle") // Ensure the text is centered
      .attr("font-size", "24px") // Set font size
      .attr("fill", "#000000") // Set font color
      .text("Total Yearly Recycled vs Not Recycled Collections");

    g.append("path")
      .attr("d", arc)
      .style("fill", (d) => color(d.data.title))
      .on("mouseover", (event, d) => {
        d3.select(event.currentTarget)
          .transition()
          .duration("50")
          .attr("opacity", ".85");
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip
          .html(d.data.title + ": " + d.data.value + " tons")
          .style("left", event.pageX + "px")
          .style("top", event.pageY - 28 + "px");
      })
      .on("mouseout", (event, d) => {
        d3.select(event.currentTarget)
          .transition()
          .duration("50")
          .attr("opacity", "1");
        tooltip.transition().duration(500).style("opacity", 0);
      })
      .transition()
      .duration(1000)
      .attrTween("d", function (d) {
        const i = d3.interpolate(d.startAngle, d.endAngle);
        return function (t) {
          d.endAngle = i(t);
          return arc(d);
        };
      });

    // Legend properties
    const legendRectSize = 18;
    const legendSpacing = 4;

    // Draw the legend
    const legend = svg
      .selectAll(".legend")
      .data(color.domain())
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", function (d, i) {
        const height = legendRectSize + legendSpacing;
        const offset = (height * color.domain().length) / 2;
        const horz = width - 800; // Adjust this as needed
        const vert = i * height + height / 2 - offset;
        return `translate(${horz},${vert})`;
      });

    legend
      .append("rect")
      .attr("width", legendRectSize)
      .attr("height", legendRectSize)
      .style("fill", color)
      .style("stroke", color);

    legend
      .append("text")
      .attr("x", legendRectSize + legendSpacing)
      .attr("y", legendRectSize - legendSpacing)
      .text((d) => d);
  };

  const styles = {
    buttonContainer: {
      marginTop: "-200px",
      marginLeft: "85px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    row: {
      display: "flex",
      justifyContent: "left",
      gap: "10px",
    },
    button: {
      padding: "10px 20px",
    },
    totalButton: {
      padding: "10px 20px",
      width: "auto", // Ensure that the width is based on content
      maxWidth: "433px", // Limit the maximum width of the button
    },
  };

  const renderButtonRows = () => {
    let rows = [];
    for (let i = 0; i < 4; i++) {
      rows.push(
        <div key={i} style={styles.row}>
          {recyclingData.slice(i * 5, i * 5 + 5).map((d) => (
            <button
              style={styles.button}
              key={d.financial_year}
              onClick={() => drawPieChart(d.financial_year)}
            >
              {d.financial_year}
            </button>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <div>
      <div id="pie"></div>
      <div style={styles.buttonContainer}>
        <button
          style={styles.totalButton}
          onClick={() => drawPieChart("Total")}
        >
          Total
        </button>
        {renderButtonRows()}
      </div>
    </div>
  );
};

export default RecyclePieChart;
