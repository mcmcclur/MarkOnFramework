---
title: Simple KaTeX
head: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" crossorigin="anonymous"><script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js" crossorigin="anonymous"></script><script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js" crossorigin="anonymous" onload="renderMathInElement(document.body);"></script>'
---

<h1>Simple KaTeX</h1>

This little page implements KaTeX in Framework in the simplest possible way. That is, we simply place the following `head` declaration in the YAML front matter:

    head: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" crossorigin="anonymous"><script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js" crossorigin="anonymous"></script><script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js" crossorigin="anonymous" onload="renderMathInElement(document.body);"></script>'

Then, we can type


<div class="card">

If $f(x) = e^{-x^2}$, then
$$\int_{-\infty}^{\infty} f(x) \ dx = \sqrt{\pi}.$$

</div>

like so:

    If $f(x) = e^{-x^2}$, then
    $$\int_{-\infty}^{\infty} f(x) \ dx = \sqrt{\pi}.$$
