import * as d3 from "npm:d3"
import * as Plot from "npm:@observablehq/plot";
import tex from "npm:@observablehq/tex";

export function responsive_plot(a) {
  // We're going to plot a graph of the sine function
  // and we'd like the tick marks expressed in terms of pi.
  const f = (x) => Math.sin(a*x);

  // Set up the size of the image.
  let w = 900;
  let h = 0.3 * w;

  // Set up a container for the image.
  // The container has the *relative* position
  // so that we can place texed tickmarks in
  // absolutely positioned DIVs.
  let container = d3
    .create("div")
    .style("position", "relative")
    .style("width", `${w}px`)
    .style("height", `${h}px`);

  // The points to plot.
  let dx = 0.01;
  let pts = d3.range(-10, 10 + dx, dx).map((x) => [x, f(x)]);

  // We'll use  Observable Plot to generate the graph.
  // Store the result in a variable, since we'll modify
  // it a bit.
  let plot = Plot.plot({
    // title: tex`f(x) = \sin(${a == 1 ? "" : a == -1 ? "-" : a}x)`,
    margin: 30,
    width: w,
    height: h,
    y: { domain: [-1.1, 1.1] },
    marks: [
      Plot.line(pts, {strokeWidth: 4}),
      Plot.axisX({
        y: 0,
        ticks: d3.range(-3 * Math.PI, 3 * Math.PI + dx, Math.PI),
        tickFormat: () => null
      }),
      Plot.ruleY([0]),
      Plot.axisY({
        x: 0,
        ticks: [-1, 1],
        tickFormat: () => null
      }),
      Plot.ruleX([0])
    ]
  });

  // Plot the plot in the container.
  container.append(() => plot);

  // Observable Plot exposes scales that makes it
  // easy to place stuff correctly in the plot.
  let x_scale = plot.scale("x");
  let y_scale = plot.scale("y");

  // Add x-tick labels. Each label is contained in
  // an absolutely positioned DIV whose left style
  // is determined by the tick value.
  container
    .selectAll(null)
    .data(d3.range(-3, 3.1, 1))
    .join("div")
    .attr("class", "x-tick-label")
    .style("position", "absolute")
    .style("left", (n) =>
      `${x_scale.apply(n * Math.PI) - (n < 0 ? 20 : n==1 ? 8 : 12)}px`)
    .style("top", `${y_scale.apply(0) - 25}px`)
    .style("padding", "2px")

    // append the label; the code for the label function
    // is defined below and returns a tex macro that looks
    // something like tex`${n}\pi`
    .append(label);

  // Add y-tick labels as well for consistency.
  container
    .selectAll(null)
    .data([-1, 1])
    .join("div")
    .attr("class", "y-tick-label")
    .style("position", "absolute")
    .style("right", `${x_scale.apply(0) + 5}px`)
    .style("top", (n) => `${y_scale.apply(n) - 38}px`)
    .style("padding", "2px")
    .append((n) => tex`${n}`);

  return container.node();
}

function label(n) {
  if (Math.abs(n) > 1) {
    return tex` ${n}\pi`;
  } else if (n == -1) {
    return tex` -\pi`;
  } else if (n == 1) {
    return tex` \pi`;
  } else {
    return tex` `;
  }
}
