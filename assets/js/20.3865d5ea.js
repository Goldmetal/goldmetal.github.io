(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{349:function(t,a,s){"use strict";s.r(a);var e=s(15),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"api-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-page"}},[t._v("#")]),t._v(" API Page")]),t._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("VT helps you generate an API page "),a("RouterLink",{staticClass:"link-hover-effect absolute-link",attrs:{to:"/api/"}},[t._v("like this site's API page")]),t._v(", which is very useful to index APIs.")],1),t._v(" "),a("h2",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),a("h3",{attrs:{id:"_1-create-api-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-api-pages"}},[t._v("#")]),t._v(" 1. Create API pages")]),t._v(" "),a("p",[t._v("Create "),a("code",[t._v("api/index.md")]),t._v(" and some sub pages:")]),t._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("├── docs\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("│   ├── api\n")])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("│   │   ├── config-foo.md\n")]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("│   │   ├── config-bar.md\n")]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("│   │   ├── config-baz.md\n")]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("│   │   └── index.md\n")])]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("│   ├── guide\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("│   │   ├── getting-started.md\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("│   │   ├── index.md\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("│   │   └── ...\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("│   └── index.md\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("└── package.json\n")])])])])]),a("h3",{attrs:{id:"_2-config-sidebar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-config-sidebar"}},[t._v("#")]),t._v(" 2. Config sidebar")]),t._v(" "),a("p",[t._v("Using "),a("a",{staticClass:"link-hover-effect external-link",attrs:{href:"https://vuepress.vuejs.org/theme/default-theme-config.html#multiple-sidebars",target:"_blank",rel:"noopener noreferrer"}},[t._v("Multiple Sidebars"),a("OutboundLink")],1),t._v(" to define a sidebar for API.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sidebar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"/api/"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Config"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          collapsable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/config-foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/config-bar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/config-baz"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-enable-api-page-layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-enable-api-page-layout"}},[t._v("#")]),t._v(" 3. Enable API page layout")]),t._v(" "),a("p",[t._v("Declare that "),a("code",[t._v("api/index.md")]),t._v(" is api index page:")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[t._v("api: true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);