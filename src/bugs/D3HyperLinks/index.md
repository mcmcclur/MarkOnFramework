---
title: D3 HyperLinks
---

If you dynamically generate links from one page within a Framework project to another page within the same project using code, you might find that it works in development mode but not in production. This might or might not be a bug but it certainly confused me for a bit.

Here's a programmatically generated hyperlink to one of the posts in this project:

```js echo
let link = d3.create('a')
  .attr('href', '/posts/RevealJS/')
  .text('Using RevealJS in Framework')
display(link.node())
```

I would've expected that link to work. In fact, it *does* work in development mode but it doesn't work after build and deployment.

In the process of diagnosing this, I used my brower's inspector to copy that code, which looks like so:

    <a href="/posts/RevealJS/">Using RevealJS in Framework</a>

If I paste that exact code into my markdown file, I get the following link:

<a href="/posts/RevealJS/">Using RevealJS in Framework</a>

That second link *does* work after build.


Note that the bundler modifies the absolute path when creating the second link but that modification doesn't work with the dynamically generated link.
