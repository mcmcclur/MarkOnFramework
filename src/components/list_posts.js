import config from './observablehq.config.js'
import * as d3 from 'npm:d3';

export function list_posts() {
  let ul = d3.create('ul')
  config.pages.forEach(function(p) {
    let li = ul.append('li')
    let link = li.append('a')

    // Note that absolute path doesn't
    // work right here
    link.attr('href', `.${p.path}`)
    link.text(p.name)
    let date = li.append('span')
      .style('color', '#666')
      .style('font-size', '0.8em')
    date.text(` (${p.date})`)
  });

  return ul.node();
}
