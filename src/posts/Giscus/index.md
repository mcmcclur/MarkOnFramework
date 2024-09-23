---
title: Giscus in Framework
---

<h1>Giscus in Framework</h1>

I've experimented with a few ways to incorporate comments into a blog built with Observable Framework. If the blog is centered around software development, as this one focuses on using Observable Framework, then I think it might be hard to beat *GitHub Discussions embed via Giscus*!

## Giscus 

[The Giscus webpage](https://github.com/apps/giscus) lists several great aspects of the project, including:

- It's free and open source,
- Has no tracking or ads,
- Hosted by Github Discussions so that no further database is required, and still
- Gives the developer total control over things like moderation.

I would also mention that it seems pretty easy to use to me!  There are three things that you need to do to get Giscus working:

- You need a public GitHub repository with Discussions enabled,
- You need to install the [Giscus GitHub App](https://github.com/apps/giscus) into your GitHub workspace, and
- You need to include a script tag in your Framework document or HTML page. You can get your script tag by filling out a form on the [Giscus Webpage](https://giscus.app/), which is pretty convenient since it contains a bit of configuration info.

---

## Comments

If you'd like to try it out, feel free to leave a comment below:

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
