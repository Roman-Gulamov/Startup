_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{TaPz:function(e,t,n){"use strict";n.r(t);var c=n("o0o1"),i=n.n(c),a=n("HaE+"),r=n("nKUr"),o=n("q1tI"),s=n("VI8d"),d=n("IP2g"),b=n("8tEE"),u=n("Aiso"),l=n.n(u),p=n("doKv"),h=n("vOnD"),m=h.c.div.withConfig({displayName:"About__Wrapper",componentId:"sc-1hbdg1f-0"})(["display:flex;flex-direction:column;justify-content:space-between;"]),j=h.c.div.withConfig({displayName:"About__AboutText",componentId:"sc-1hbdg1f-1"})(["display:flex;flex-direction:row;justify-content:space-between;margin-bottom:3em;@media screen and (max-width:768px){flex-wrap:wrap;margin-bottom:1em;}"]),f=h.c.div.withConfig({displayName:"About__TextItem",componentId:"sc-1hbdg1f-2"})(["font-style:italic;@media screen and (max-width:768px){margin-bottom:2em;text-align:center;}&:first-child{margin-right:1em;}"]),x=h.c.div.withConfig({displayName:"About__AboutDevelopers",componentId:"sc-1hbdg1f-3"})(["display:flex;flex-direction:row;justify-content:space-between;flex-wrap:wrap;"]),g=h.c.div.withConfig({displayName:"About__DevelopersItem",componentId:"sc-1hbdg1f-4"})(["display:flex;flex-direction:column;justify-content:space-between;text-align:center;@media screen and (max-width:768px){margin:0 auto 3em;}"]),w=h.c.div.withConfig({displayName:"About__InvisibleLink",componentId:"sc-1hbdg1f-5"})(["width:2.5em;height:2.5em;border-radius:30%;transition:background 0.3s ease;&:hover{background:#C0301C;}"]),O=h.c.p.withConfig({displayName:"About__ItemName",componentId:"sc-1hbdg1f-6"})(["margin:1em 0 0.7em;text-transform:uppercase;font-weight:bold;"]),_=h.c.p.withConfig({displayName:"About__ItemPosition",componentId:"sc-1hbdg1f-7"})(["font-size:0.9em;"]),v=function(e){var t=e.about;return Object(r.jsx)(r.Fragment,{children:t.team.map((function(e){var t=e.id,n=e.image,c=e.name,i=e.position,a=e.social;return Object(r.jsxs)(g,{children:[Object(r.jsxs)(p.a,{width:"17em",children:[Object(r.jsx)(l.a,{src:n,alt:c,unsized:!0}),Object(r.jsxs)(p.b,{aboutProps:!0,height:"98.6%",background:"rgba(0, 0, 0, 0.3)",children:[Object(r.jsx)(w,{children:Object(r.jsx)("a",{href:"https://www.facebook.com/".concat(a),target:"_blank",children:Object(r.jsx)(d.a,{icon:b.a,size:"lg"})})}),Object(r.jsx)(w,{children:Object(r.jsx)("a",{href:"https://twitter.com/".concat(a),target:"_blank",children:Object(r.jsx)(d.a,{icon:b.c,size:"lg"})})}),Object(r.jsx)(w,{children:Object(r.jsx)("a",{href:"https://vk.com/".concat(a),target:"_blank",children:Object(r.jsx)(d.a,{icon:b.d,size:"lg"})})}),Object(r.jsx)(w,{children:Object(r.jsx)("a",{href:"https://www.linkedin.com/in/".concat(a),target:"_blank",children:Object(r.jsx)(d.a,{icon:b.b,size:"lg"})})})]})]}),Object(r.jsx)(O,{children:c}),Object(r.jsx)(_,{children:i})]},t)}))})},y=n("XdyV"),I=n.n(y),k=n("dSWP"),N=function(e){var t=e.about,n=Object(o.useState)(t),c=n[0],d=n[1];return Object(o.useEffect)((function(){!t&&function(){var e=Object(a.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://my-json-server.typicode.com/Roman-Gulamov/Startup","/about"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,d(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),c?Object(r.jsx)(s.a,{title:"| About",children:Object(r.jsxs)(m,{children:[Object(r.jsx)(j,{children:c.description.map((function(e){var t=e.id,n=e.title;return Object(r.jsx)(f,{children:Object(r.jsx)("p",{children:n})},t)}))}),Object(r.jsx)(x,{children:Object(r.jsx)(v,{about:c})})]})}):Object(r.jsx)(s.a,{title:"| About",children:Object(r.jsx)(k.a,{children:Object(r.jsx)("img",{src:I.a,alt:"loading..."})})})};t.default=N;N.getInitialProps=function(){var e=Object(a.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.req){e.next=3;break}return e.abrupt("return",{about:null});case 3:return e.next=5,fetch("".concat("https://my-json-server.typicode.com/Roman-Gulamov/Startup","/about"));case 5:return n=e.sent,e.next=8,n.json();case 8:return c=e.sent,e.abrupt("return",{about:c});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},hIud:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("TaPz")}])}},[["hIud",0,2,6,1,3,4,5]]]);