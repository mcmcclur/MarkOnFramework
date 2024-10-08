---
title: Mark on Framework
style: frontPage.css
sidebar: false
toc: false
---

<!-- The animated title block -->
<div id="masthead">
    <h1 class='small-title'>Mark on Framework</h1>
    <div class="chart_container">
      <div id="chart"></div>
      <div class="hide-small" id='Mark'>Mark on</div>
      <div class="hide-small" id='Framework'>Framework</div>
    </div>
</div>

I've been programming in one form or another since 1980, started using D3 to create visualizations for the classes I teach around 2012, discovered Observable while it was still in beta in 2018, and was part of the *first* Observable Ambassador cohort.

I also maintain several other sites that use Observable Framework and/or D3.  These include

- [WNC Viz](https://wncviz.com), my professional site in data visualization consultancy,
- [The WNC Viz Blog](https://blog.wncviz.com), which is a separate Framework project, and
- [Mark's Math](https://marksmath.org), my academic website.

*I'd like to think I have something worth saying about Observable Framework.*

So, this is where I'm going to say those things - right here in the Observable Cloud.

<h2>GitHub coordination</h2>

The complete code for this Framework Project is [hosted on Github](https://github.com/mcmcclur/MarkOnFramework). In addition, you can leave comments on the posts using your GitHub credentials, powered by [Giscus](https://giscus.app).

You can read more about that in the [Giscus post](/posts/giscus/)!

<h2>Posts</h2>

```js
import {list_posts} from './components/list_posts.js';
display(list_posts())
```

Thanks for reading and do feel free to leave comments on the posts!

```js
import {NELightning} from './components/NELightning.js';
NELightning("chart");
```
