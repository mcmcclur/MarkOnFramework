// Collapse the collapsibles
// From https://github.com/observablehq/framework/issues/833

export function collapse_code() {
  document.querySelectorAll('.collapse > .observablehq-pre-container').forEach(el => {
    let wrapper = document.createElement('details');
    wrapper.className = 'code'
    let summary = document.createElement('summary')
    summary.textContent = "View the code:"
    wrapper.appendChild(summary)
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  });
}
