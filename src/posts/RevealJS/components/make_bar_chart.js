import * as d3 from "npm:d3";

export function make_bar_chart(alphabet) {
  let w = 800;
  let h = 400;
  let pad = 50;
  let svg = d3.create("svg")
    .attr("viewBox", [0, 0, w, h])
    .style('max-width', `800px`)

  let x_scale_by_alpha = d3
    .scaleBand()
    .domain(d3.sort(alphabet, (o) => o.letter).map((o) => o.letter))
    .range([pad, w - pad])
    .padding(0.2);

  let x_scale_by_frequency_ascending = d3
    .scaleBand()
    .domain(
      d3.sort(alphabet, (o) => o.frequency).map((o) => o.frequency)
    )
    .range([pad, w - pad])
    .padding(0.2);

  let x_scale_by_frequency_descending = d3
    .scaleBand()
    .domain(
      d3.sort(alphabet, (o) => -o.frequency).map((o) => o.frequency)
    )
    .range([pad, w - pad])
    .padding(0.2);

  alphabet.forEach(function (o) {
    o.position_by_alpha = x_scale_by_alpha(o.letter);
    o.position_by_frequency_ascending =
      x_scale_by_frequency_ascending(o.frequency);
    o.position_by_frequency_descending =
      x_scale_by_frequency_descending(o.frequency);
  });

  let posMap = new Map(
    alphabet.map((o) => [
      o.letter,
      {
        position_by_alpha: o.position_by_alpha,
        position_by_frequency_ascending: o.position_by_frequency_ascending,
        position_by_frequency_descending: o.position_by_frequency_descending
      }
    ])
  );

  let max = d3.max(alphabet.map((o) => o.frequency));
  let y_scale = d3
    .scaleLinear()
    .domain([0, max])
    .range([h - pad, pad]);

  let bars = svg.append("g");
  bars
    .selectAll("rect")
    .data(alphabet)
    .join("rect")
    .attr("x", (d) => x_scale_by_alpha(d.letter))
    .attr("y", (d) => y_scale(d.frequency))
    .attr("height", (d) => y_scale(0) - y_scale(d.frequency))
    .attr("width", x_scale_by_alpha.bandwidth())
    .attr("fill", 'steelblue')


  let x_axis = svg
    .append("g")
    .attr("transform", `translate(0,${h - pad})`)
    .call(d3.axisBottom(x_scale_by_alpha).tickSizeOuter(0));
  let y_axis = svg
    .append("g")
    .attr("transform", `translate(${pad})`)
    .call(d3.axisLeft(y_scale).ticks(5).tickSizeOuter(0));
  // y_axis.select("path.domain").attr("stroke", null);

  svg.node().sort = sort;
  return svg.node();

  function sort(type) {
    if (type == "Frequency ascending") {
      bars
        .selectAll("rect")
        .transition()
        .duration(1000)
        .attr("x", (d) => d.position_by_frequency_ascending);
      x_axis
        .selectAll("g.tick")
        .transition()
        .duration(1000)
        .attr(
          "transform",
          (d) =>
            `translate(${
              posMap.get(d).position_by_frequency_ascending + x_scale_by_frequency_ascending.bandwidth() / 2
            }, 0)`
        );
    }
    else if (type == "Frequency descending") {
      bars
        .selectAll("rect")
        .transition()
        .duration(1000)
        .attr("x", (d) => d.position_by_frequency_descending);
      x_axis
        .selectAll("g.tick")
        .transition()
        .duration(1000)
        .attr(
          "transform",
          (d) =>
            `translate(${
              posMap.get(d).position_by_frequency_descending + x_scale_by_frequency_descending.bandwidth() / 2
            }, 0)`
        );
    }
    else if (type == "Alphabetical") {
      bars
        .selectAll("rect")
        .transition()
        .duration(1000)
        .attr("x", (d) => d.position_by_alpha);
      x_axis
        .selectAll("g.tick")
        .transition()
        .duration(1000)
        .attr(
          "transform",
          (d) =>
            `translate(${
              posMap.get(d).position_by_alpha + x_scale_by_alpha.bandwidth() / 2
            }, 0)`
        );
    }
  }
}
