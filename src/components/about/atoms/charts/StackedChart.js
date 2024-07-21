import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const StackedBarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const width = 1500;
      const marginTop = 30;
      const marginRight = 10;
      const marginBottom = 0;
      const marginLeft = 250;

      const series = d3.stack()
        .keys(d3.union(data.map(d => d.category)))
        .value(([, D], key) => D.get(key).percentage)
        (d3.index(data, d => d.question, d => d.category));

      const height = series[0].length * 100 + marginTop + marginBottom;

      const x = d3.scaleLinear()
        .domain([0, d3.max(series, d => d3.max(d, d => d[1]))])
        .range([marginLeft, width - marginRight]);

      const y = d3.scaleBand()
        .domain(d3.groupSort(data, D => -d3.sum(D, d => d.percentage), d => d.question))
        .range([marginTop, height - marginBottom])
        .padding(0.3);

      const color = d3.scaleOrdinal()
        .domain(series.map(d => d.key))
        .range(d3.schemeSpectral[series.length])
        .unknown("#ccc");

      const formatValue = x => isNaN(x) ? "N/A" : x.toLocaleString("en");

      const svg = d3.select(chartRef.current)
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto;");

      svg.append("g")
        .selectAll()
        .data(series)
        .join("g")
        .attr("fill", d => color(d.key))
        .selectAll("rect")
        // eslint-disable-next-line no-sequences
        .data(D => D.map(d => (d.key = D.key, d)))
        .join("rect")
        .attr("x", d => x(d[0]))
        .attr("y", d => y(d.data[0]))
        .attr("height", y.bandwidth())
        .attr("width", d => x(d[1]) - x(d[0]))
        .attr("height", y.bandwidth() * 0.8)
        .on("mouseover", (_event, d) => {
          tooltip.style("visibility", "visible")
            .html(`${d.data[0]}? <br>${formatValue(d.data[1].get(d.key).percentage)}% ${d.key}`);
        })
        .on("mousemove", event => {
          tooltip.style("top", (event.pageY - 10) + "px")
            .style("left", (event.pageX + 10) + "px");
        })
        .on("mouseout", () => tooltip.style("visibility", "hidden"));

      svg.append("g")
        .attr("transform", `translate(0,${marginTop})`)
        .call(d3.axisTop(x).ticks(width / 100, "s"))
        .call(g => g.selectAll(".domain").remove());

      svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(y).tickSizeOuter(0))
        .call(g => g.selectAll(".domain").remove()).call(g => g.selectAll(".tick text")
        .style("font-size", "16px")
        .call(wrap, marginLeft - 50, -20));

      const tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("background-color", "white")
        .style("padding", "5px")
        .style("border", "1px solid #aaa")
        .style("border-radius", "3px")
        .style("visibility", "hidden");
    }
  }, [data]);
  function wrap(text, width, xOffset) {
    text.each(function() {
      const text = d3.select(this);
      const words = text.text().split(/\s+/).reverse();
      let word;
      let line = [];
      let lineNumber = 0;
      const lineHeight = 1.2; // Adjust line height as needed
      const y = text.attr("y");
      const dy = parseFloat(text.attr("dy"));
      let tspan = text.text(null)
        .append("tspan")
        .attr("x", xOffset)
        .attr("y", y)
        .attr("dy", dy + "em");

      // eslint-disable-next-line no-cond-assign
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan")
            .attr("x", 0)
            .attr("y", y)
            .attr("dy", `${++lineNumber * lineHeight + dy}em`)
            .text(word);
        }
      }
    });
  }
  return <svg ref={chartRef} />;
};

export default StackedBarChart;
