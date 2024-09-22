import * as d3 from "npm:d3";

export function make_it() {
  const w = 800;
  const h = 200;
  const pad = 20;

  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, w, h])
    .style('max-width', `${w}px`)
    .style('border', 'solid 1px black');

  const dot = svg.append('circle')
    .attr('cx', 0.1*w)
    .attr('cy', 0.5*h)
    .attr('r', 0.2*h)
    .attr('fill', 'black')

  svg.node().update = update;
  return svg.node();

  function update(side, transition=true) {
    if(side == "left") {
      if(transition) {
        dot
          .transition()
          .duration(750)
          .attr('cx', 0.1*w)
      }
      else {
        dot
          .attr('cx', 0.1*w)
      }
    }
    else if(side == "right") {
      if(transition) {
        dot
          .transition()
          .duration(750)
          .attr('cx', 0.9*w)
      }
      else {
        dot
          .attr('cx', 0.9*w)
      }
    }
  }
}
