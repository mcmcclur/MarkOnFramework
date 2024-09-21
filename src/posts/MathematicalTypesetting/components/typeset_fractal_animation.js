// Silly typset fractal animation

import * as d3 from 'npm:d3';
import katex from 'https://cdn.jsdelivr.net/npm/katex@0.16.11/+esm';
import {delay} from '/components/delay.js';

export function splash(divID) {
  let depth;
  if(window.innerWidth < 600) {
    depth = 3
  }
  else {
    depth = 4
  }
  const div = d3.select(divID);
  const step = (s) => s.replaceAll("x", "{{}_{x}^{x}x_x^x}");
  let s = "x";
  for (let i = 0; i < depth; i++) {
    s = step(s);
  }
  katex.render(s, div.node(), {
      throwOnError: false,
      displayMode: true
  });
  let xs = div.select('.katex-html').selectAll("span");
  let cnt = 0;
  let nodes = xs.nodes().forEach(function(node) {
    let d3Node = d3.select(node);
    if(d3Node.text() == "x" && d3Node.selectChildren().size() == 0) {
      d3Node.style('opacity', 0);
      delay(5 * cnt++).then(() => d3Node.transition().style('opacity', 1))
    }
  })
}
