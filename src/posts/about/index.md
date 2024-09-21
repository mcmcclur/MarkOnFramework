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

## Commenting via Mastodon Social

Anyone with a Mastodon account can comment on this or other posts. [Mastodon](https://joinmastodon.org/) is a decentralized social media platform that aspires to alleviate many of the problems that arise in conglomerate based social media.

As [described by Wikipedia](https://en.wikipedia.org/wiki/Mastodon_(social_network)), Mastodon has microblogging features modeled after Twitter. Rather than a single, monolithic server, though, there are a large number of independently run severs, each with its own policies. The servers interact well with one another so that users can select a server whose policies they meets their values and still keep access to a larger social network.

I've got an account on [Mastodon Social](https://mastodon.social), which is one of the larger servers, and also interact some with [Vis Social](https://vis.social/). This page uses [Dan Pecos's MastodonComments component](https://github.com/dpecos/mastodon-comments) (modified only slightly) to add commenting to a page in Observable Framework. The comments are hosted on [Mastodon Social](https://mastodon.social/) and mirrored here.

Thus, if you've got a Mastodon account, you can tell me what you think about all this using the "Add comment" button below.

---

## Comments

<mastodon-comments host="mastodon.social" user="mark31459" tootId="113042798013708740" style="width : 640px"></mastodon-comments>


```js
import {MastodonComments} from '/components/mastodon-comments.js';
```
