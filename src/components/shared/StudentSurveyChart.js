import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const StudentSurveyChart = () => {
  const svgRef = useRef();

  const data = [
    {
      question: "Feel better about myself",
      values: [64, 36, 0, 0]
    },
    {
      question: "Helpful to me",
      values: [94, 6, 0, 0]
    },
    {
      question: "Helps interpersonal relationship with peers",
      values: [42, 48, 5, 5]
    },
    {
      question: "Highly recommends",
      values: [86, 13, 1, 0]
    },
    {
      question: "Make me successful",
      values: [36, 50, 6, 8]
    }
  ];

  const responses = ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"];
  const colors = ["#EF4444", "#F59E0B", "#EDE047", "#84CC16"]; // Red, Orange, Yellow, Green

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 150, bottom: 100, left: 60 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.bottom - margin.top;

    const container = svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    const g = container
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Scales
    const x0 = d3.scaleBand()
      .domain(data.map(d => d.question))
      .range([0, width])
      .padding(0.2);

    const x1 = d3.scaleBand()
      .domain(responses)
      .range([0, x0.bandwidth()])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, 100])
      .range([height, 0]);

    // Create tooltip
    const tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background", "rgba(0, 0, 0, 0.8)")
      .style("color", "white")
      .style("padding", "8px")
      .style("border-radius", "4px")
      .style("font-size", "12px")
      .style("opacity", 0)
      .style("pointer-events", "none");

    // Create bars
    const questionGroups = g.selectAll(".question-group")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "question-group")
      .attr("transform", d => `translate(${x0(d.question)}, 0)`);

    questionGroups.selectAll(".bar")
      .data(d => responses.map((response, i) => ({
        response,
        value: d.values[i],
        question: d.question,
        color: colors[i]
      })))
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => x1(d.response))
      .attr("y", d => y(d.value))
      .attr("width", x1.bandwidth())
      .attr("height", d => height - y(d.value))
      .attr("fill", d => d.color)
      .style("cursor", "pointer")
      .on("mouseover", function(event, d) {
        d3.select(this).style("opacity", 0.8);
        tooltip.transition().duration(200).style("opacity", 1);
        tooltip.html(`${d.question}<br/>${d.response}: ${d.value}%`)
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY - 10) + "px");
      })
      .on("mouseout", function() {
        d3.select(this).style("opacity", 1);
        tooltip.transition().duration(200).style("opacity", 0);
      });

    // X-axis
    g.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x0))
      .selectAll("text")
      .style("text-anchor", "end")
      .style("font-size", "10px")
      .style("fill", "white")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-45)");

    // Style X-axis line and ticks
    g.select(".domain").style("stroke", "white");
    g.selectAll(".tick line").style("stroke", "white");

    // Y-axis
    const yAxis = g.append("g")
      .call(d3.axisLeft(y));

    yAxis.selectAll("text")
      .style("fill", "white")
      .style("font-size", "12px");

    // Style Y-axis line and ticks
    yAxis.select(".domain").style("stroke", "white");
    yAxis.selectAll(".tick line").style("stroke", "white");

    // Y-axis label
    g.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .style("fill", "white")
      .style("font-size", "14px")
      .text("Percentage");

    // Grid lines
    g.append("g")
      .attr("class", "grid")
      .call(d3.axisLeft(y)
        .tickSize(-width)
        .tickFormat("")
      )
      .selectAll("line")
      .style("stroke", "white")
      .style("stroke-opacity", 0.3);

    // Legend
    const legend = container.append("g")
      .attr("transform", `translate(${width + margin.left + 20}, ${margin.top})`);

    const legendItems = legend.selectAll(".legend-item")
      .data(responses)
      .enter()
      .append("g")
      .attr("class", "legend-item")
      .attr("transform", (d, i) => `translate(0, ${i * 25})`);

    legendItems.append("circle")
      .attr("r", 6)
      .attr("fill", (d, i) => colors[i]);

    legendItems.append("text")
      .attr("x", 15)
      .attr("y", 0)
      .attr("dy", "0.35em")
      .style("fill", "white")
      .style("font-size", "12px")
      .text(d => d);

    // Cleanup tooltip on component unmount
    return () => {
      d3.select("body").selectAll(".tooltip").remove();
    };

  }, []);

  return (
    <div className="w-full flex justify-center">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default StudentSurveyChart;