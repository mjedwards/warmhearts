import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const DonutChart = ({ data, width, pastName, currentName }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const height = Math.min(width, 500);
    const radius = Math.min(width, height) / 2;
    const arc = d3.arc()
      .innerRadius(radius * 0.67)
      .outerRadius(radius - 1);
    const pie = d3.pie()
      .padAngle(1 / radius)
      .sort(null)
      .value(d => d.value);
    // const color = d3.scaleOrdinal()
    //   .domain(data.map(d => d.name))
    //   .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse());
    const color = d3.scaleOrdinal()
    .domain(data.map(d => d.name))
    .range([
      "#1F2937",
      "#EC523D" 
    ]);
    const svg = d3.select(chartRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "max-width: 100%; height: auto;");
    const tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background", "#fff")
      .style("border", "1px solid #ccc")
      .style("padding", "8px")
      .style("border-radius", "4px")
      .style("font-family", "sans-serif")
      .style("font-size", "12px")
      .style("color", "#333");

    svg.append("g")
      .selectAll()
      .data(pie(data))
      .join("path")
      .attr("fill", d => color(d.data.name))
      .attr("d", arc)
      .on("mouseover", function(event, d) {
        tooltip.style("visibility", "visible")
          .text(`${d.data.name}: ${d.data.value.toLocaleString()}`);
      })
      .on("mousemove", function(event) {
        tooltip.style("top", (event.pageY - 10) + "px")
          .style("left", (event.pageX + 10) + "px");
      })
      .on("mouseout", function() {
        tooltip.style("visibility", "hidden");
      });

    svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .attr("font-weight", "bold")
      .selectAll()
      .data(pie(data))
      .join("text")
      .attr("transform", d => `translate(${arc.centroid(d)})`)
      .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
        .attr("x", 0)
        .attr("y", "0.7em")
        .attr("fill-opacity", 0.7)
        .text(d => d.data.value.toLocaleString("en-US")));

    const past = data.find(d => d.name === pastName).value;
    const current = data.find(d => d.name === currentName).value;
    const decrease = Math.round(((past - current) / past * 100).toFixed(2));

    svg.append("text")
      .attr("text-anchor", "middle")
      .attr("font-size", 24)
      .attr("font-weight", "bold")
      .attr("y", 10)
      .text(`${decrease}% Decrease`);

    return () => {
      tooltip.remove();
      svg.selectAll("*").remove();
    };
  }, [data, width]);

  return <svg ref={chartRef} />;
};

export default DonutChart;
