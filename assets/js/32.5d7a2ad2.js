(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{254:function(t,r,o){},272:function(t,r,o){"use strict";o(254)},290:function(t,r,o){"use strict";o.r(r);o(91);var i={props:{repo:{default:null,type:String},contributors:{type:[Array,String],default:null},title:{type:String,default:null}},data:()=>({contribuitorsx:[]}),mounted(){this.consultContributors()},watch:{contribuitors(){this.Contribuitorsx=[],this.consultContributors()}},methods:{consultContributors(){this.contributors&&("all"==this.contributors?fetch("https://api.github.com/repos/"+this.repo+"/contributors").then(t=>t.json()).then(t=>{this.contribuitorsx=t}):this.contribuitors.forEach(t=>{fetch("https://api.github.com/users/"+t).then(t=>t.json()).then(t=>{this.contribuitorsx.push(t)})}))}}},s=(o(272),o(15)),n=Object(s.a)(i,(function(){var t=this,r=t._self._c;return t.contribuitorsx.length>0?r("div",{staticClass:"con-contribuitor"},[r("h3",{class:{allcontribuitors:"all"==t.contributors}},[t._v("\n        "+t._s(t.title||"contributors of")+" "),r("b",[t._v("Vuesax")])]),t._v(" "),r("ul",[t._l(t.contribuitorsx,(function(o,i){return i<19?r("li",{attrs:{title:o.login}},[r("a",{attrs:{target:"_blank",href:o.html_url,rel:"noopener noreferrer"}},[r("img",{attrs:{src:o.avatar_url,alt:""}}),t._v(" "),r("img",{staticClass:"img-blur",attrs:{src:o.avatar_url,alt:""}})])]):t._e()})),t._v(" "),t._l(t.contribuitorsx,(function(o,i){return 19==i?r("li",{class:{"is-see-more":19==i},attrs:{title:"See more"}},[r("router-link",{attrs:{to:"/contribuitors/"}},[r("vs-icon",{attrs:{icon:"add"}})],1)],1):t._e()}))],2),t._v(" "),"all"==t.contributors?r("div",{staticClass:"con-btns-contribuitors"},[r("button",{attrs:{type:"button",name:"button"}},[r("router-link",{attrs:{to:"/contribuitors/"}},[t._v("Contributors")])],1)]):t._e()]):t._e()}),[],!1,null,null,null);r.default=n.exports}}]);