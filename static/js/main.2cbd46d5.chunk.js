(this.webpackJsonppollimate=this.webpackJsonppollimate||[]).push([[0],{102:function(e,a,t){var n={"./01-12-20.md":103,"./01-19-20.md":104,"./01-21-20.md":105};function c(e){var a=l(e);return t(a)}function l(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=l,e.exports=c,c.id=102},103:function(e,a,t){e.exports=t.p+"static/media/01-12-20.3ea93fb9.md"},104:function(e,a,t){e.exports=t.p+"static/media/01-19-20.cc325eb1.md"},105:function(e,a,t){e.exports=t.p+"static/media/01-21-20.a595683f.md"},106:function(e,a,t){},107:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(35),r=t.n(l),o=(t(48),t(49),t(6)),i=t(3),s=t(9),m=(t(63),t(39)),u=t.n(m),d=t(40),p=t.n(d);var E,f=function(e){var a=Object(n.useRef)(null);return c.a.createElement("div",{className:"container"},c.a.createElement("section",{className:"landing-section"},c.a.createElement("h1",{className:"slogan-text"},"the alternative to animal-mediated pollination"),c.a.createElement("button",{onClick:function(){return function(e){var a=e.current.offsetTop+e.current.offsetParent.offsetTop;return window.scrollTo({top:a,behavior:"smooth"})}(a)}},"Learn More")),c.a.createElement("section",{className:"about-section",ref:a},c.a.createElement("div",{className:"description-container"},c.a.createElement("h2",null,"Honey bees support about $20 billion worth of production in the US alone through animal-mediated pollination.  However, their populations have been on the decline since 2006 due to pesticides, disease, and climate change and could cause a cascading effect regarding crop production."),c.a.createElement("p",null,"Our team aims to provide an alternative solution to animal-mediated pollination with Pollimate. Pollimate is a scalable and autonomous aerial solution that is capable of artificially pollinating crops by leveraging computer vision to localize the drone and accurately pollinate an individual flower."),c.a.createElement("a",{className:"progress-button",href:"https://github.com/jwang61/Bee-Boys/projects/2"},"Follow Our Progress Here ->")),c.a.createElement("div",{className:"image-container"},c.a.createElement("img",{className:"image",src:u.a,alt:"Bee"}))),c.a.createElement("section",{className:"team-section"},c.a.createElement("div",{className:"inner-container"},c.a.createElement("h2",{className:"section-title"},"meet the team"),c.a.createElement("div",{className:"content-container"},c.a.createElement("div",{className:"team-photo-container"},c.a.createElement("img",{src:p.a,alt:"The Team"})),c.a.createElement("div",{className:"team-members"},c.a.createElement("div",{className:"member-container"},c.a.createElement("h4",null,"Gerard Salisi"),c.a.createElement("p",null,"Software Development (Path Planning and Drone Movement)")),c.a.createElement("div",{className:"member-container"},c.a.createElement("h4",null,"Brynn Davis"),c.a.createElement("p",null,"Mechanical Lead and Electrical Lead")),c.a.createElement("div",{className:"member-container"},c.a.createElement("h4",null,"Justin Wang"),c.a.createElement("p",null,"Software Development (Computer Vision/ML)")),c.a.createElement("div",{className:"member-container"},c.a.createElement("h4",null,"Jordan Hu"),c.a.createElement("p",null,"Project Manager/Electrical and Software Support")),c.a.createElement("small",null,"*from left to right"))))))},v=t(19),h=t.n(v),b=t(42),g=(t(65),t(20)),N=t(41),y=(E=t(102)).keys().map(E);function w(e){return{opacity:e.opacity,transform:"scale(".concat(e.scale,")")}}function k(e){return Object(s.b)(e,{stiffness:330,damping:22})}var x={atEnter:{opacity:0,scale:1.2},atLeave:{opacity:k(0),scale:k(.8)},atActive:{opacity:k(1),scale:k(1)}};function O(e){var a=Object(i.g)().index,t=Object(n.useState)(""),l=Object(b.a)(t,2),r=l[0],o=l[1];Object(n.useEffect)((function(){!function(){var e;h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(Promise.all(y.map((function(e){return fetch(e).then((function(e){return e.text()}))}))).catch((function(e){return console.error(e)})));case 2:e=a.sent,o(e);case 4:case"end":return a.stop()}}))}()}),[]);var s=g.blogs[a];return console.log(s),console.log(r),c.a.createElement("section",{className:"inner-container blog-post"},c.a.createElement("h3",{className:"blog-date"},s.date),c.a.createElement("h1",{className:"blog-title"},"0".concat(+a+1,". ").concat(s.title)),c.a.createElement(N.Markdown,{markup:r[a]}))}var j=function(e){var a=Object(i.h)(),t=a.path,n=a.url;return c.a.createElement(s.a,{atEnter:x.atEnter,atLeave:x.atLeave,atActive:x.atActive,mapStyles:w,className:"route-wrapper"},c.a.createElement(i.a,{exact:!0,path:t},c.a.createElement("section",{className:"blog-list-container"},c.a.createElement("div",{className:"inner-container"},g.blogs.map((function(e,a){return c.a.createElement("div",{className:"blog-entry"},c.a.createElement("div",{className:"entry-number"},"0".concat(a+1,".")),c.a.createElement("div",{className:"blog-summary",key:a},c.a.createElement("h2",{className:"summary-blog-title"},e.title),c.a.createElement("h3",{className:"summary-subheader"},e.date),c.a.createElement(o.b,{to:"".concat(n,"/").concat(a),className:"read-more"},"read more")))}))))),c.a.createElement(i.a,{path:"".concat(t,"/:index")},c.a.createElement(O,null)))};t(106);var L=function(e){return c.a.createElement("footer",null,c.a.createElement("ul",{className:"footer-menu"},c.a.createElement(o.b,{to:"/",className:"link footer-link",activeClassName:"active",exact:!0},"Home"),c.a.createElement(o.b,{to:"/blog",className:"link footer-link",activeClassName:"active"},"Weekly Updates")),c.a.createElement("h5",null,"made with React"),c.a.createElement("h6",{className:"footer-updated"},"last updated 01/20/2020"))};function S(e){return{opacity:e.opacity,transform:"scale(".concat(e.scale,")")}}function P(e){return Object(s.b)(e,{stiffness:330,damping:22})}var C={atEnter:{opacity:0,scale:1.2},atLeave:{opacity:P(0),scale:P(.8)},atActive:{opacity:P(1),scale:P(1)}};var B=function(){return c.a.createElement(o.a,{basename:"/pollimate-website/"},c.a.createElement("div",{className:"container"},c.a.createElement("header",null,c.a.createElement("div",null,c.a.createElement(o.b,{to:"/",className:"link nav-title",activeClassName:"header-active",exact:!0},"PolliMate")),c.a.createElement("nav",null,c.a.createElement(o.b,{to:"/",className:"link",activeClassName:"active",exact:!0},"Home"),c.a.createElement(o.b,{to:"/blog",className:"link",activeClassName:"active"},"Weekly Updates"))),c.a.createElement("main",null,c.a.createElement(s.a,{atEnter:C.atEnter,atLeave:C.atLeave,atActive:C.atActive,mapStyles:S,className:"route-wrapper"},c.a.createElement(i.a,{path:"/blog"},c.a.createElement(j,null)),c.a.createElement(i.a,{path:"/"},c.a.createElement(f,null)))),c.a.createElement(L,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},20:function(e){e.exports=JSON.parse('{"blogs":[{"title":"Back to School","date":"01/12/20"},{"title":"Building the Drone","date":"01/19/20"},{"title":"Computer Vision Progress","date":"01/21/20"}]}')},39:function(e,a,t){e.exports=t.p+"static/media/bee.026202f9.png"},40:function(e,a,t){e.exports=t.p+"static/media/team-photo.a675402e.jpg"},43:function(e,a,t){e.exports=t(107)},48:function(e,a,t){},49:function(e,a,t){},63:function(e,a,t){},65:function(e,a,t){},89:function(e,a){}},[[43,1,2]]]);
//# sourceMappingURL=main.2cbd46d5.chunk.js.map