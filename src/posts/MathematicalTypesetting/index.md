---
title: Mathematical Typesetting
style: "./style.css"
---

# Mathematical Typesetting

<div id="splashville" style="max-width: 100%"></div>

As [described in the documentation](https://observablehq.com/framework/lib/tex), Framework provides mathematical typesetting facilities using its `tex` macro. Technically, the macro is implemented as a particular type of Javascript function called a [tagged template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates). The syntax is quite natural from the perspective of a programmer and it integrates well into Javascript programs.

This syntax is not, however, particularly natural from the LaTeX point of view and, honestly, it's a bit cumbersome compared to standard LaTeX delimiters. Particularly, if you've got a bunch of LaTeX already written, you really want to be able to type

<div class="card">

If $f(x) = e^{-x^2}$, then
$$\int_{-\infty}^{\infty} f(x) \ dx = \sqrt{\pi}.$$

</div>

like so:

    If $f(x) = e^{-x^2}$, then
    $$\int_{-\infty}^{\infty} f(x) \ dx = \sqrt{\pi}.$$

This page outlines a few ways to accomplish this and more.

## Typesetting systems

The gold standard for mathematical typesetting is LaTeX. There are a couple of Javascript libraries that implement LaTeX's mathematical typesetting in the browser:

- [MathJax](https://mathjax.org) and
- [KaTeX](https://katex.org).

They both have their own advantages.

- KaTeX is a bit faster. It's not the 20 or 30 or 50 times faster as some folks want to claim. It is 2 or 3 times as fast, though, according to my experiments.
- MathJax is much more feature rich.
    - It accepts MathML and AsciiMath input, in addition to LaTeX.
    - It can generate SVG output, in addition to HTML.
    - The output is generally interactive, allowing you to zoom an expression, view the input, and (most importantly for some) provides enhanced accessibility features.


## Simplest usage case

The simplest way to use either MathJax or KaTeX is to include `script` tags in the head of your HTML document. In the case of KaTeX, you also need to include a `link` tag to some CSS.

Here are a couple of examples:

- [Using MathJax](./mathjax)
- [Using KaTex](./katex)




 Observable's `tex` macro is built on top of KaTeX and, furthermore, you can use KaTeX directly. KaTeX was originally written as a faster alternative to the more venerable [MathJax](https://mathjax.org).  MathJax has always been more feature rich, though, providing

 - the ability to zoom in on typeset expressions,
 - the option to type code in as AsciiMath,
 - access to the LaTeX or AsciiMath code that generate an expression, and
 - enhanced accessibility features.

Furthermore, the speed difference since version 3 of MathJax is minimal. Let's take a look at how to use MathJax in Framework.

## Placing MathJax in the `head`

If you simply want to use MathJax so that you can delimit LaTeX snippets with simple <code>$dollar$</code> and <code>$$double dollar$$</code> delimiters, then the easiest approach is to include the following line to the YAML frontmatter at the top of the document:

    head: '<script>MathJax = {tex: {inlineMath: [["$", "$"], ["\\(", "\\)"]]},svg: {fontCache: "global"}};</script><script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>'

After doing so, those `script` tags are placed in the resulting HTML file's head element. Thus, we can now enter the following:


While this output *looks* like that [produced by KaTeX](./UsingKaTex/), it's much more interactive. If you simply click on it, you should get a zoomed version. If you control-click, you pull up a contextual menu with more options. This is largely why I prefer MathJax.

## Importing MathJax

MathJax is easy to import from [cloudflare](https://cdnjs.cloudflare.com/). If you want dollar sign delimited snippets to be automatically rendered, you also need to configure it. You can do so by writing a component - i.e. a Javascript file that looks like so:

    import './mathjax-config.js';
    import "https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-svg.js";

    export function import_mathjax() {
      return MathJax
    }

The `mathjax-config` file configures MathJax and should contain at least the following:

    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
      },
      loader: {
        paths: {
          mathjax: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/'
        }
    }

We can then import the MathJax component in a Markdown file:

```js echo
import {import_mathjax} from './components/import_mathjax.js';
const MathJax = import_mathjax();
```

When imported this way, it is *not* necessary to to include the script tags in the head of the document; MathJax will automatically typeset <code>$dollar$,</code> delimited snippets. In addition, though, we now have access to the MathJax object for programmatic use, if desired.

## Programmatic use

Since we've imported MathJax and stored the resulting object in a variable, cleverly named `MathJax`, we can use it programmatically.As a simple example, the drop down menu in the interactive example below specifies a LaTeX snippet; that LaTeX snippet is then typeset using MathJax.

<div class="card collapse">

### Dynamic typesetting with MathJax

```js
let math_string = view(Inputs.select([
  String.raw`x^2`,
  String.raw`\sin(x^2)`,
  String.raw`\frac{1}{\sqrt{1-x^2}}`,
  String.raw`\frac{1}{\sqrt{2\pi}}\int_0^x e^{-\chi^2/2} \, d\chi`
], {label: tex`f(x):`}))
```
```js
MathJax.tex2svgPromise(`f(x) = ${math_string}`).then(p => p)
```
    // Code block one to generate the dropdown
    let math_string = view(Inputs.select([
      String.raw`x^2`,
      String.raw`\sin(x^2)`,
      String.raw`\cos(x^3)`,
      String.raw`\frac{1}{\sqrt{1-x^2}}`
    ], {label: "f(x):"}))

    // Code block two to process the LaTeX input
    display(MathJax.tex2svgPromise(`f(x) = ${math_string}`).then(p => p))

</div>


MathJax loads asynchronously and, as a result, is generally a little trickier to use than KaTeX. In the above example, we use MathJax's `tex2svgPromise`, which waits until all components are loaded before running.

## Comments


<script src="https://giscus.app/client.js"
  data-repo="mcmcclur/MarkOnFramework"
  data-repo-id="R_kgDOM1U_mw"
  data-category="Blog Comments"
  data-category-id="DIC_kwDOM1U_m84CisbR"
  data-mapping="title"
  data-strict="0"
  data-reactions-enabled="1"
  data-emit-metadata="0"
  data-input-position="top"
  data-theme="light"
  data-lang="en"
  crossorigin="anonymous"
  async>
</script>


```js
import {collapse_code} from '/components/collapse_code.js'
import {splash} from './components/typeset_fractal_animation.js';
splash("#splashville")
collapse_code()
```
