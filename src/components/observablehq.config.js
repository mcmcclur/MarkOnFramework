// I defined the constants in a function simply so I
// don't need to place those long definitions prior
// to the default export.
const {pages, o, mastodon, linkedin, github} = constants();

export default {
  title: "Mark on Framework",
  style: "/posts/postStyle.css",
  head,
  pages,
  footer,
  header
};

function header() {
  return `<div class="header">
  <div class="header-item">
    <a href="/">
      Mark on Framework
    </a>
  </div>
  <div class="header-item push">
    <a href="https://observablehq.com/@mcmcclur">
      ${o}
    </a>
  </div>
  <div class="header-item">
    <a href="https://mastodon.social/@mark31459">
      ${mastodon}
    </a>
  </div>
  <div class="header-item">
    <a href="https://www.linkedin.com/in/mark-mcclure-6739911a9/">
      ${linkedin}
    </a>
  </div>
  <div class="header-item">
    <a href="https://github.com/mcmcclur">
      ${github}
    </a>
  </div>
</div>`
}


function footer({path}) {
  let match = pages.find(o => o.path + 'index' == path);
  if(match) {
    let date_string =  match.date;
    return `Built with <a href="https://observablehq.com/">Observable</a> on ${match.date}.`
  }
  else {
    return null;
  }
}

function head({title, path}) {
  let base_head_elements = `
    <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32">
    <meta property="og:type" content="Observable Framework Site" />
    <meta property="og:author" content="Mark McClure" />`;
  let head_elements = '';
  if(title == "Mark on Framework") {
    head_elements = `
    <meta property='og:title' content='Mark on Framework'/>
    <meta property="og:url" content="https://mcmcclur.observablehq.cloud/mark-on-framework/" />
    <meta name='description' content="Mark's thoughts on Observable Framework, including cool techniques."/>
    <meta property='og:description' content="Mark's thoughts on Observable Framework, including cool techniques."/>
    <meta property='og:image' content='https://mcmcclur.observablehq.cloud/mark-on-framework/_file/favicon.81fd45b7.png'/>
    `
  }
  else if(title == "About") {
    head_elements = `
    <meta property='og:title' content='About Mark on Framework'/>
    <meta property="og:url" content="https://mcmcclur.observablehq.cloud/mark-on-framework/posts/about/" />
    <meta name='description' content="A description of this site and how it was built." />
    <meta property='og:description' content="A description of this site and how it was built."/>
    <meta property='og:image' content='https://mcmcclur.observablehq.cloud/mark-on-framework/_file/favicon.81fd45b7.png'/>
    `
  }
  else if(title == "Mathematical Typesetting") {
    head_elements = `
    <meta property='og:title' content='Mathematical Typesetting'/>
    <meta property="og:url" content="https://mcmcclur.observablehq.cloud/mark-on-framework/posts/MathematicalTypesetting/" />
    <meta name='description' content="Various ways to typeset mathematics within an Observable Framework project." />
    <meta property='og:description' content="Various ways to typeset mathematics within an Observable Framework project." />
    <meta property='og:image' content='https://mcmcclur.observablehq.cloud/mark-on-framework/_file/favicon.81fd45b7.png'/>
    `
  }
  else if(title == "The Notebook") {
    head_elements = `
    <meta property='og:title' content='Observable Framework and the Notebook'/>
    <meta property="og:url" content="https://mcmcclur.observablehq.cloud/mark-on-framework/posts/TheNotebook/" />
    <meta name='description' content="Praise for Observable Framework but a lament for the Notebook." />
    <meta property='og:description' content="Praise for Observable Framework but a lament for the Notebook." />
    <meta property='og:image' content='https://mcmcclur.observablehq.cloud/mark-on-framework/_file/favicon.81fd45b7.png'/>
    `
  }
  else if(title == "RevealJS") {
    head_elements = `
    <meta property='og:title' content='RevealJS in Framework'/>
    <meta property="og:url" content="https://mcmcclur.observablehq.cloud/mark-on-framework/posts/RevealJS/" />
    <meta name='description' content="A description of how to use RevealJS within Observable Framework." />
    <meta property='og:description' content="A description of how to use RevealJS within Observable Framework." />
    <meta property='og:image' content='https://mcmcclur.observablehq.cloud/mark-on-framework/_file/favicon.81fd45b7.png'/>
    `
  }
  else if(title == "Giscus in Framework") {
    head_elements = `
    <meta property='og:title' content='Giscus in Framework'/>
    <meta property="og:url" content="https://mcmcclur.observablehq.cloud/mark-on-framework/posts/Giscus/" />
    <meta name='description' content="A description of how to use Giscus within Observable Framework." />
    <meta property='og:description' content="A description of how to use Giscus within Observable Framework." />
    <meta property='og:image' content='https://mcmcclur.observablehq.cloud/mark-on-framework/_file/favicon.81fd45b7.png'/>
    `
  }

  return `${base_head_elements}${head_elements}`;
}

function constants() {
  const pages = [
    {
      name: "Giscus in Framework",
      pager: 'posts',
      date: "Sunday, September 22, 2024",
      path: "/posts/Giscus/"
    },
    {
      name: "RevealJS",
      pager: 'posts',
      date: "Friday, September 20, 2024",
      path: "/posts/RevealJS/"
    },
    {
      name: "Mathematical Typesetting",
      pager: 'posts',
      date: "Monday, September 16, 2024",
      path: "/posts/MathematicalTypesetting/"
    },
    {
      name: "About this site",
      pager: 'posts',
      date: "Sunday, September 15, 2024",
      path: "/posts/about/"
    },
    {
      name: "The Notebook",
      pager: 'posts',
      date: "Thursday, August 29, 2024",
      path: "/posts/TheNotebook/"
    }
  ];

  const o = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 21.92930030822754 22.68549919128418" fill="currentColor"><path d="M10.9646 18.9046C9.95224 18.9046 9.07507 18.6853 8.33313 18.2467C7.59386 17.8098 7.0028 17.1909 6.62722 16.4604C6.22789 15.7003 5.93558 14.8965 5.75735 14.0684C5.56825 13.1704 5.47613 12.2574 5.48232 11.3427C5.48232 10.6185 5.52984 9.92616 5.62578 9.26408C5.7208 8.60284 5.89715 7.93067 6.15391 7.24843C6.41066 6.56618 6.74143 5.97468 7.14438 5.47308C7.56389 4.9592 8.1063 4.54092 8.72969 4.25059C9.38391 3.93719 10.1277 3.78091 10.9646 3.78091C11.977 3.78091 12.8542 4.00021 13.5962 4.43879C14.3354 4.87564 14.9265 5.49454 15.3021 6.22506C15.6986 6.97704 15.9883 7.7744 16.1719 8.61712C16.3547 9.459 16.447 10.3681 16.447 11.3427C16.447 12.067 16.3995 12.7593 16.3035 13.4214C16.2013 14.1088 16.0206 14.7844 15.7644 15.437C15.4994 16.1193 15.1705 16.7108 14.7739 17.2124C14.3774 17.714 13.8529 18.1215 13.1996 18.4349C12.5463 18.7483 11.8016 18.9046 10.9646 18.9046ZM12.8999 13.3447C13.4242 12.8211 13.7159 12.0966 13.7058 11.3427C13.7058 10.5639 13.4436 9.89654 12.92 9.34074C12.3955 8.78495 11.7441 8.50705 10.9646 8.50705C10.1852 8.50705 9.53376 8.78495 9.00928 9.34074C8.49569 9.87018 8.21207 10.5928 8.22348 11.3427C8.22348 12.1216 8.48572 12.7889 9.00928 13.3447C9.53376 13.9005 10.1852 14.1784 10.9646 14.1784C11.7441 14.1784 12.3891 13.9005 12.8999 13.3447ZM10.9646 22.6855C17.0199 22.6855 21.9293 17.6068 21.9293 11.3427C21.9293 5.07871 17.0199 0 10.9646 0C4.90942 0 0 5.07871 0 11.3427C0 17.6068 4.90942 22.6855 10.9646 22.6855Z"></path></svg>';


  const mastodon = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#563ACC" class="bi bi-mastodon" viewBox="0 0 16 16"><path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a4 4 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522q0-1.288.66-2.046c.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764q.662.757.661 2.046z"/></svg>';


  const linkedin = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#0077B5" class="bi bi-linkedin" viewBox="0 0 22 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>';

  const github = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#333" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>';

  return {pages, o, mastodon, linkedin, github}
}
