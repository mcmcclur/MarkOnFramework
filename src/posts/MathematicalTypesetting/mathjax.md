---
title: Simple MathJax
head: '<script>MathJax = {tex: {inlineMath: [["$", "$"], ["\\(", "\\)"]]},svg: {fontCache: "global"}};</script><script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>'
---

<h1>Simple MathJax</h1>

This little page implements MathJax in Framework in the simplest possible way. That is, we simply place the following `head` declaration in the YAML front matter:

    head: '<script>MathJax = {tex: {inlineMath: [["$", "$"], ["\\(", "\\)"]]},svg: {fontCache: "global"}};</script><script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>'

Then, we can type


<div class="card">

If $f(x) = e^{-x^2}$, then
$$\int_{-\infty}^{\infty} f(x) \ dx = \sqrt{\pi}.$$

</div>

like so:

    If $f(x) = e^{-x^2}$, then
    $$\int_{-\infty}^{\infty} f(x) \ dx = \sqrt{\pi}.$$
