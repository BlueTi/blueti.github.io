/*! For license information please see component---src-templates-tag-template-js-ec99afe8cde192e90b8c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/d1K":function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));a("q1tI");var i=a("Wbzz"),n=a("iSRb"),o=a.n(n),c=a("AeFk"),s=function(e){var t=e.author,a=e.isIndex;return Object(c.a)("div",{className:o.a.author},Object(c.a)(i.Link,{to:"/"},Object(c.a)("img",{src:Object(i.withPrefix)(t.photo),className:o.a.author__photo,width:"75",height:"75",alt:t.name})),!0===a?Object(c.a)("h1",{className:o.a.author__title},Object(c.a)(i.Link,{className:o.a["author__title-link"],to:"/"},t.name)):Object(c.a)("h2",{className:o.a.author__title},Object(c.a)(i.Link,{className:o.a["author__title-link"],to:"/"},t.name)),Object(c.a)("p",{className:o.a.author__subtitle},t.bio))},l=a("7Qib"),r=a("euHg"),_=a.n(r),m=function(e){var t=e.name,a=e.icon;return Object(c.a)("svg",{className:_.a.icon,viewBox:a.viewBox},Object(c.a)("title",null,t),Object(c.a)("path",{d:a.path}))},u=a("aU/I"),d=a.n(u),b=function(e){var t=e.contacts;return Object(c.a)("div",{className:d.a.contacts},Object(c.a)("ul",{className:d.a.contacts__list},Object.keys(t).map((function(e){return t[e]?Object(c.a)("li",{className:d.a["contacts__list-item"],key:e},Object(c.a)("a",{className:d.a["contacts__list-item-link"],href:Object(l.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},Object(c.a)(m,{name:e,icon:Object(l.b)(e)}))):null}))))},p=a("Nrk+"),g=a.n(p),f=function(e){var t=e.copyright;return Object(c.a)("div",{className:g.a.copyright},t)},h=a("je8k"),j=a.n(h),v=function(e){var t=e.menu;return Object(c.a)("nav",{className:j.a.menu},Object(c.a)("ul",{className:j.a.menu__list},t.map((function(e){return Object(c.a)("li",{className:j.a["menu__list-item"],key:e.path},Object(c.a)(i.Link,{to:e.path,className:j.a["menu__list-item-link"],activeClassName:j.a["menu__list-item-link--active"]},e.label))}))))},O=a("SySy"),k=a.n(O),N=a("gGy4"),x=function(e){var t=e.isIndex,a=Object(N.b)(),i=a.author,n=a.copyright,o=a.menu;return Object(c.a)("div",{className:k.a.sidebar},Object(c.a)("div",{className:k.a.sidebar__inner},Object(c.a)(s,{author:i,isIndex:t}),Object(c.a)(v,{menu:o}),Object(c.a)(b,{contacts:i.contacts}),Object(c.a)(f,{copyright:n})))}},"1xLx":function(e,t,a){e.exports={feed__item:"Feed-module--feed__item--Bm0MP","feed__item-title":"Feed-module--feed__item-title--34sOw","feed__item-title-link":"Feed-module--feed__item-title-link--2qfTF","feed__item-description":"Feed-module--feed__item-description--2_Zuy","feed__item-meta-time":"Feed-module--feed__item-meta-time--3hc6b","feed__item-meta-divider":"Feed-module--feed__item-meta-divider--2GeAw","feed__item-meta-category-link":"Feed-module--feed__item-meta-category-link--lAu1I","feed__item-readmore":"Feed-module--feed__item-readmore--rMfbv"}},"6V6j":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("q1tI");var i=a("Wbzz"),n=a("1xLx"),o=a.n(n),c=a("AeFk"),s=function(e){var t=e.edges;return Object(c.a)("div",{className:o.a.feed},t.map((function(e){return Object(c.a)("div",{className:o.a.feed__item,key:e.node.fields.slug},Object(c.a)("div",{className:o.a["feed__item-meta"]},Object(c.a)("time",{className:o.a["feed__item-meta-time"],dateTime:new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long"})),Object(c.a)("span",{className:o.a["feed__item-meta-divider"]}),Object(c.a)("span",{className:o.a["feed__item-meta-category"]},Object(c.a)(i.Link,{to:e.node.fields.categorySlug,className:o.a["feed__item-meta-category-link"]},e.node.frontmatter.category))),Object(c.a)("h2",{className:o.a["feed__item-title"]},Object(c.a)(i.Link,{className:o.a["feed__item-title-link"],to:e.node.fields.slug},e.node.frontmatter.title)),Object(c.a)("p",{className:o.a["feed__item-description"]},e.node.frontmatter.description),Object(c.a)(i.Link,{className:o.a["feed__item-readmore"],to:e.node.fields.slug},"Read"))})))}},"Nrk+":function(e,t,a){e.exports={copyright:"Copyright-module--copyright--1YLES"}},RBgx:function(e,t,a){e.exports={page:"Page-module--page--V2155",page__inner:"Page-module--page__inner--3xzwp",page__title:"Page-module--page__title--t1zKX",page__body:"Page-module--page__body--1A7TB"}},RXmK:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var i=a("q1tI"),n=a("RBgx"),o=a.n(n),c=a("0/XF"),s=a("AeFk"),l=[{name:"Pages",title:"Pages"}],r=function(e){var t=e.title,a=e.children,n=Object(i.useRef)();return Object(i.useEffect)((function(){n.current.scrollIntoView()})),Object(s.a)("div",{ref:n,className:o.a.page},Object(s.a)(c.a,{indices:l}),Object(s.a)("div",{className:o.a.page__inner},t&&Object(s.a)("h1",{className:o.a.page__title},t),Object(s.a)("div",{className:o.a.page__body},a)))}},SySy:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--1zM7S",sidebar__inner:"Sidebar-module--sidebar__inner--2Tprz"}},U4DU:function(e,t,a){e.exports={pagination:"Pagination-module--pagination--3T_m0",pagination__prev:"Pagination-module--pagination__prev--3tRFv","pagination__prev-link":"Pagination-module--pagination__prev-link--2vesn","pagination__prev-link--disable":"Pagination-module--pagination__prev-link--disable--1Fxw2",pagination__next:"Pagination-module--pagination__next--19bJd","pagination__next-link":"Pagination-module--pagination__next-link--3ln7y","pagination__next-link--disable":"Pagination-module--pagination__next-link--disable--AsM50"}},UbMB:function(e,t,a){var i;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var o=typeof i;if("string"===o||"number"===o)e.push(this&&this[i]||i);else if(Array.isArray(i))e.push(n.apply(this,i));else if("object"===o)for(var c in i)a.call(i,c)&&i[c]&&e.push(this&&this[c]||c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(i=function(){return n}.apply(t,[]))||(e.exports=i)}()},"aU/I":function(e,t,a){e.exports={contacts:"Contacts-module--contacts--3fb7G",contacts__list:"Contacts-module--contacts__list--27zok","contacts__list-item":"Contacts-module--contacts__list-item--1Adud","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2L60c"}},euHg:function(e,t,a){e.exports={icon:"Icon-module--icon--1T2h2"}},hZQ8:function(e,t,a){"use strict";a.r(t);a("q1tI");var i=a("Zttt"),n=a("/d1K"),o=a("6V6j"),c=a("RXmK"),s=a("v0M6"),l=a("gGy4"),r=a("AeFk");t.default=function(e){var t=e.data,a=e.pageContext,_=Object(l.b)(),m=_.title,u=_.subtitle,d=a.tag,b=a.currentPage,p=a.prevPagePath,g=a.nextPagePath,f=a.hasPrevPage,h=a.hasNextPage,j=t.allMarkdownRemark.edges,v=b>0?'All Posts tagged as "'+d+'" - Page '+b+" - "+m:'All Posts tagged as "'+d+'" - '+m;return Object(r.a)(i.a,{title:v,description:u},Object(r.a)(n.a,null),Object(r.a)(c.a,{title:d},Object(r.a)(o.a,{edges:j}),Object(r.a)(s.a,{prevPagePath:p,nextPagePath:g,hasPrevPage:f,hasNextPage:h})))}},iSRb:function(e,t,a){e.exports={author__photo:"Author-module--author__photo--HnDWV",author__title:"Author-module--author__title--ZztQd","author__title-link":"Author-module--author__title-link--BY7f8",author__subtitle:"Author-module--author__subtitle--3hbMX"}},je8k:function(e,t,a){e.exports={menu:"Menu-module--menu--2aN3O",menu__list:"Menu-module--menu__list--1uKDu","menu__list-item":"Menu-module--menu__list-item--27cxj","menu__list-item-link":"Menu-module--menu__list-item-link--29Sd-","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2HzKy"}},v0M6:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a("q1tI");var i=a("UbMB"),n=a.n(i),o=a("Wbzz"),c=a("WlAH"),s=a("U4DU"),l=a.n(s),r=a("AeFk"),_=n.a.bind(l.a),m=function(e){var t=e.prevPagePath,a=e.nextPagePath,i=e.hasNextPage,n=e.hasPrevPage,s=_({"pagination__prev-link":!0,"pagination__prev-link--disable":!n}),m=_({"pagination__next-link":!0,"pagination__next-link--disable":!i});return Object(r.a)("div",{className:l.a.pagination},Object(r.a)("div",{className:l.a.pagination__prev},Object(r.a)(o.Link,{rel:"prev",to:n?t:"/",className:s},c.b.PREV_PAGE)),Object(r.a)("div",{className:l.a.pagination__next},Object(r.a)(o.Link,{rel:"next",to:i?a:"/",className:m},c.b.NEXT_PAGE)))}}}]);
//# sourceMappingURL=component---src-templates-tag-template-js-ec99afe8cde192e90b8c.js.map