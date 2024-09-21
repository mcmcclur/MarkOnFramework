// import * as d3 from "npm:d3";

import {select, scaleLinear, line, range, sum, schemeCategory10} from 'npm:d3';
const d3 = {select, scaleLinear, line, range, sum, schemeCategory10};

export async function NELightning(el)  {
  let w = window.innerWidth;
  let svg_width;
  if (w > 720) {
    svg_width = 0.8 * w;
  } else {
    svg_width = w;
  }
  let svg_height = 0.3 * svg_width;
  let pad = 10;
  let div = d3.select(`#${el}`);
  div.selectAll("*").remove();
  let svg = div
    .append("svg")
    .attr("viewBox", [0, 0, svg_width, svg_height])
    .style("max-width", `${2 * svg_width}px`);

  let xmin = 0;
  let xmax = 1;
  let ymin = 0;
  let ymax = 4;

  const xScale = d3
    .scaleLinear()
    .domain([xmin, xmax])
    .range([pad, svg_width - pad]);
  const yScale = d3
    .scaleLinear()
    .domain([ymin, ymax])
    .range([svg_height - pad, pad]);
  const rScale = d3
    .scaleLinear()
    .domain([0, xmax - xmin])
    .range([0, svg_width]);
  const pts_to_path = d3
    .line()
    .x(function (d) {
      return xScale(d[0]);
    })
    .y(function (d) {
      return yScale(d[1]);
    });

  let dd = (xmax - xmin) / 60;
  let xpts = d3.range(xmin, xmax + dd, dd);
  let pts = xpts.map((x) => [x, f(x)]);

  for (let i = 0; i < pts.length; i++) {
    await delay(10).then(function () {
      svg
        .append("rect")
        .attr("x", xScale(pts[i][0] - dd / 2))
        .attr("y", 0)
        .attr("width", svg_width / 60)
        .attr("height", svg_height)
        .attr("fill", "white")
        .attr("opacity", 0)
        .on("mouseenter", function () {
          svg
            .select(`#circle${i}`)
            .attr("r", rScale(0.006))
            .attr("fill", "black");
        })
        .on("mouseleave", function () {
          svg
            .select(`#circle${i}`)
            .attr("r", rScale(0.004))
            .attr("fill", d3.schemeCategory10[i % 10]);
        });
      svg
        .append("path")
        .attr("d", pts_to_path(pts.slice(i, i + 2)))
        .attr("stroke", "black")
        .attr("stroke-width", 1)
        .attr("fill", "none");
      svg
        .append("circle")
        .attr("id", `circle${i}`)
        .attr("cx", xScale(pts[i][0]))
        .attr("cy", yScale(pts[i][1]))
        .attr("r", rScale(0.004))
        .attr("fill", d3.schemeCategory10[i % 10])
        .attr("stroke", "black")
        .attr("stroke-width", 1);
    });
  }
}

function f(x) {
  return (
    2 - d3.sum(d3.range(12).map(n => Math.cos(5 ** n * Math.PI * x) / 2 ** n))
  );
}

function delay(duration, value) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(value);
    }, duration);
  });
}
