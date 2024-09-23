---
title: The Notebook
---

<h1>Observable Framework and the Notebook</h1>

If it's not obvious, I'm a huge fan of [Observable Framework](https://observablehq.com/framework/). This site, as well as [my professional consulting site](https://wncviz.com/) are both built with Framework.

The default output is a fairly simple web page with just enough styling to look great. It also provides easy navigation with a sidebar for the site on the left, a table of contents for the page on the right, and a pager at the bottom of the page. In addition, the source files are written mostly in markdown, which is super quick and easy.

## Whither the Notebook?

Prior to March of this year and dating back to late 2018, though, Observable's main product was the [Observable Notebook](https://observablehq.com/documentation/notebooks/). Honestly, I really like the notebook, as well!

Of course, there's no reason that one company can't produce two great products. On the contrary, there could even be a strong, reinforcing synergy between the two. Since, the release of Framework, though, the visibility of the notebook has decreased, a number of social networking tools have been removed, and a number of messages on the Observable Slack channels have indicated a priority shift to Framework.

This might be an overstatement, but it *feels* like the notebook is being abandoned. It also feels like that would be a terrible loss.

### Why the notebook rocks

The notebook is a completely different programming environment - one that mixes text, code, and dynamic output right in one coherent setting. It's ideal for [literate programming](https://en.wikipedia.org/wiki/Literate_programming). As such, it's perfect both for documentation and in an educational setting. I taught a class in [Dynamic Data Visualization](https://observablehq.com/@ddv373/dynamic-data-visualization-csci373) using the notebook, in fact, and it was an excellent experience.

Working with the Notebook is lightning fast and deployment is immediate. If I have a visualization idea 20 minutes before class starts and want to whip it together, I can often do so with the notebook. I just can't work at that rate with Framework.

### Is the Notebook perhaps *better* than Framework?

Short answer to this question is really - no, the Notebook is not better. There's no doubt that you can produce faster, more tightly optimized visualizations with Framework than you can with the Notebook.

It's also true, though, that Framework is not exactly unique in that regard. There are many devtools that follow a similar development pattern of

1. Scaffold setup,
2. develop, and
3. build.

A lot of these are quite awesome.  I don't see why a Javascript developer who's already profficient in, say, React or Svelte or Vite or even Webpack, would move to Framework.

The Observable Notebook, by contrast, is really without peer. There are certainly other notebook based programming environments but none that I know of that work so seemlessly with Javascript and have Observable's reactivity.

## Synergy

Now, imagine this: You create a new, extra groovy data visualization in the Notebook. You want to deploy it, though, as a Framework project. You hit the (as yet non-existent) "Download Framework Project" button and **boom**, you've got a zip file with the full scaffolding for your project, including the code you've written to generate a page with visualizations. You've just got to install the dependencies and view or build the project.

More importantly, *anyone* with a notebook could potentially do this. The bar towards generating Framework projects just got lower. Note that [Svelte's REPL](https://svelte.dev/repl/) does something quite similar, though, it's not a Notebook like environment.

## The `convert` command

It should be noted that Observable does provide a `convert` command that one might hope would do exactly this. It doesn't work very well at all, though, because of syntactical differences between Framework and the notebook. The notebook really needs to be updated so that the Framework and the Notebook are consistent. I'm sure that there's a fair amount of work that would be involved in that. The fact that work has not been a priority, though, is exactly one of the reasons that I feel the notebook might be abandoned.

---

## Comments

If you have thoughts about this that you'd like to share, you can comment via GitHub below.

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
const o = FileAttachment("o.png");
```


<div style="display: none">
  ${o.image()}
</div>
