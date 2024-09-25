---
title: About
---

<h1>About Mark on Framework</h1>

I've got a few Framework projects out in production by now, including [my professional data viz site](https://wncviz.com) and its [companion blog](https://blog.wncviz.com) (which is a separate Framework project), in addition to this one.

So, why another one?

Well, Observable offers hosting on its cloud platform with one free project - so why not try it out? Besides, having used Observable since it was still beta in 2018, created and published several hundred Observable notebooks, and joined the first Ambassador cohort, I know a few tricks and things about Observable that might be worth saying.

## Styling

Largely, this site follows Framework conventions for styling using Framework's default stylesheet and light theme, as [described in the documentation](https://observablehq.com/framework/themes). Even the header at the top of the page is mostly ripped right out of Framework's documentation pages. The social media icons are just SVG.

The front page gets just a little trickier by suppressing both the sidebar and table of contents and supplying a bit of my own styles to create the groovy dynamic masthead. It's worth mentioning, though, that you can style your Framework site just about anyway that you want. [WNC Viz](https://wncviz.com), for example, is a Framework site but eschews Observable styling altogether and uses Bootstrap instead.

## Dates

I'm thinking that project might be something like a blog so it seems natural to indicate when each post was written. If you look at the footer of any given page, you might notice that the written date is right there.

That's in contrast to the default footer which indicates when the whole project was built. I accomplished this change by simply writing a custom footer function.

In principle, it shouldn't be hard at all to create a data file indicating when the posts were written and incorporate that into a more prominent position the page. I like it where it is, though, so I haven't gone to the trouble.

## Commenting via GitHub and Giscus

Another fun feature of this site is that you can comment on any of the posts using GitHub Comments via the Giscus App! You can read more about that on the [Giscus post](/posts/Giscus/).

---

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
