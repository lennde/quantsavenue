(this.webpackJsonpquantsavenue=this.webpackJsonpquantsavenue||[]).push([[0],{19:function(e,t,a){e.exports=a(33)},24:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},26:function(e,t,a){},28:function(e,t,a){e.exports=a.p+"static/media/header.58f0ace4.png"},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),c=(a(24),a(11)),i=a(4),s=a(12),m=a(13),u=a(17),d=(a(25),a(26),a(45)),h=(a(27),a(46)),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={data:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://quantsavenue.eu.pythonanywhere.com/").then((function(e){return e.text()})).then((function(t){return e.setState({data:JSON.parse(t).msg})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("img",{src:a(28),className:"img-header"})),r.a.createElement(d.a,{container:!0,spacing:3},r.a.createElement(d.a,{item:!0,xs:12}),r.a.createElement(d.a,{item:!0,xs:6},"Terminal",r.a.createElement(h.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",size:"sm"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"14-12-2019 18:00"),r.a.createElement("td",null,"How to price an autocallable")),r.a.createElement("tr",null,r.a.createElement("td",null,"14-12-2019 18:00"),r.a.createElement("td",null,"Book: The man who solved the markets"))))),r.a.createElement(d.a,{item:!0,xs:6},"Exchange",r.a.createElement(h.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",size:"sm"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"14-12-2019 18:00"),r.a.createElement("td",null,"How to solve for a coupon"))))),r.a.createElement(d.a,{item:!0,xs:3},"Interview Prep"),r.a.createElement(d.a,{item:!0,xs:3},"Coaching"),r.a.createElement(d.a,{item:!0,xs:3},"Lifestyle"),r.a.createElement(d.a,{item:!0,xs:3},"Job Opportunities"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.82e32cb1.chunk.js.map