(this["webpackJsonpreact-menu"]=this["webpackJsonpreact-menu"]||[]).push([[0],{16:function(e,a,t){},28:function(e,a,t){e.exports=t.p+"static/media/Halloranns(2).e976affb.svg"},29:function(e,a,t){e.exports=t.p+"static/media/Hallorannslogo.d69db9ad.svg"},30:function(e,a,t){e.exports=t.p+"static/media/Halloranns_name only(1).5275eec0.svg"},33:function(e,a,t){e.exports=t(67)},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(27),l=t.n(r),s=(t(38),t(39),t(40),t(41),t(42),t(3)),i=t(4),o=t(5),m=t(6),u=t(28),d=t.n(u),p=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){return Object(s.a)(this,t),a.call(this,e)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg navbar-dark"},c.a.createElement("a",{className:"navbar-brand",href:"#"},c.a.createElement("img",{className:"pb-0",src:d.a})),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},["Welcome","Menu","Press","Reservations"].map((function(e){return c.a.createElement("ul",{className:"navbar-nav ml-auto text-right"},c.a.createElement("li",{className:"nav-item text-right"},c.a.createElement("a",{className:"nav-link",href:"#"},e)))})))))}}]),t}(c.a.Component),v=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){return Object(s.a)(this,t),a.call(this,e)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"hero",className:"jumbotron jumbotron-fluid"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4"}),c.a.createElement("p",{className:"lead"})))}}]),t}(c.a.Component),E=t(29),f=t.n(E),h=t(30),b=t.n(h),N=t(7),g=t(10),y=t(11),O=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("footer",{className:"footer mt-auto py-3"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 col-sm-12 text-white mt-5 mb-5 text-left"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("img",{src:b.a}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("p",null,c.a.createElement("b",null,"Mon-Sat:")," 10am-11pm"),c.a.createElement("ul",{className:"list-unstyled"},c.a.createElement("li",{className:"mt-3"},c.a.createElement(N.a,{icon:g.b})," 333 Wonderview Avenue, Estes Park, Colorado"),c.a.createElement("li",null,c.a.createElement(N.a,{icon:g.c})," 1-833-888-0237"),c.a.createElement("li",null,c.a.createElement(N.a,{icon:g.a}),"  info@halloranns-overlook.com")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"row d-flex justify-content-center"},c.a.createElement("div",{className:"col"},c.a.createElement(N.a,{icon:y.a,size:"2x"})),c.a.createElement("div",{className:"col"},c.a.createElement(N.a,{icon:y.b,size:"2x"})),c.a.createElement("div",{className:"col"},c.a.createElement(N.a,{icon:y.c,size:"2x"})),c.a.createElement("div",{className:"col"})))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col text-left"}))),c.a.createElement("div",{className:"col-md-4 col-sm-12 text-right"}),c.a.createElement("div",{className:"col-md-4 col-sm-12 text-right"},c.a.createElement("img",{src:f.a}))))))}}]),t}(c.a.Component),j=t(13),w=t.n(j),x=t(32),k=t(31),S=t(8),M=(t(16),t(48).default),T=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).getMenuItem=n.getMenuItem.bind(Object(S.a)(n)),n.fetchMenuItems=n.fetchMenuItems.bind(Object(S.a)(n)),n.setPrice=n.setPrice.bind(Object(S.a)(n)),n.state={menu:[]},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){if(window.localStorage[this.props.menuType]){var e=JSON.parse(window.localStorage[this.props.menuType]);this.setState({menu:e})}else this.fetchMenuItems(this.props.count)}},{key:"fetchMenuItems",value:function(e){for(var a=0;a<e;a++)this.getMenuItem()}},{key:"componentDidUpdate",value:function(){window.localStorage.setItem(this.props.menuType,JSON.stringify(this.state.menu))}},{key:"getMenuItem",value:function(){var e=Object(k.a)(w.a.mark((function e(){var a,t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this,e.next=3,M.get("https://entree-f18.herokuapp.com/v1/menu").then((function(e){var t=e.data.menu_items[0].description.split("with"),n=t[0],c="with"+t[1];return{name:n,price:a.setPrice(),description:c}})).catch((function(e){})).finally((function(){}));case 3:return t=e.sent,e.next=6,this.setState({menu:[].concat(Object(x.a)(this.state.menu),[t])});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setPrice",value:function(){return Math.floor(15*Math.random())+10}},{key:"render",value:function(){return c.a.createElement("div",{className:"card border-0"},c.a.createElement("div",{id:"menuItems",className:"card-body text-center mr-5"},c.a.createElement("ul",null,this.state.menu.length>0?this.state.menu.map((function(e,a){return c.a.createElement("div",{className:"mb-3"},c.a.createElement("li",{id:"list",className:"list-unstyled",key:a},c.a.createElement("b",null,e.name," ~ ",e.price)),c.a.createElement("li",{id:"list",className:"list-unstyled text-small"},c.a.createElement("small",null,c.a.createElement("i",null,e.description))))})):null)))}}]),t}(c.a.Component),I=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){return Object(s.a)(this,t),a.call(this,e)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"accordion",id:"accordionExample"},c.a.createElement("div",{className:"card border-0"},c.a.createElement("div",{className:"card-header bg-white",id:"headingOne"},c.a.createElement("h2",{className:"mb-0"},c.a.createElement("h2",{className:"sections"},this.props.menuType," "))),c.a.createElement("div",{id:"collapseOne",className:"collapse show","aria-labelledby":"headingOne","data-parent":"#accordionExample"},c.a.createElement("div",{className:"card-body"},c.a.createElement(T,{menuType:this.props.menuType,count:this.props.count}))))))}}]),t}(c.a.Component),C=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){return Object(s.a)(this,t),a.call(this,e)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(I,{menuType:"Specials",id:"special",count:2}),c.a.createElement(I,{menuType:"Appetizers",id:"apps",count:15}),c.a.createElement(I,{menuType:"Entrees",id:"entrees",count:10}),c.a.createElement(I,{menuType:"Sides & Salads",id:"sides",count:8}),c.a.createElement(I,{menuType:"Desserts",id:"dessert",count:3}))}}]),t}(c.a.Component);var P=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,null),c.a.createElement(v,null),c.a.createElement(C,null),c.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(65),t(25),t(66);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.120a1e73.chunk.js.map