(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c(6),i=c.n(s),a=c(7),r=c(5),l=(c(12),c(0)),o=function(t){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"todostyle",children:Object(l.jsxs)("h1",{children:[t.text," "," ",Object(l.jsx)("span",{className:"cross",children:Object(l.jsx)("i",{className:"fa fa-minus-circle",onClick:function(){t.onSelect(t.id)}})})]})})})},j=function(){var t=Object(n.useState)(""),e=Object(r.a)(t,2),c=e[0],s=e[1],i=Object(n.useState)(localStorage.getItem("lists")?JSON.parse(localStorage.getItem("lists")):[]),j=Object(r.a)(i,2),u=j[0],d=j[1],b=function(t){d((function(e){return e.filter((function(e,c){return c!==t}))}))};return Object(n.useEffect)((function(){localStorage.setItem("lists",JSON.stringify(u))}),[u]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"middle",children:Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("h2",{className:"main",children:"To Do List"}),Object(l.jsx)("input",{type:"text",placeholder:"add your items",onChange:function(t){s(t.target.value)},value:c}),Object(l.jsx)("span",{className:"plus",onClick:function(){d((function(){return[].concat(Object(a.a)(u),[c])})),s("")},children:"+"}),Object(l.jsx)("hr",{}),u.map((function(t,e){return Object(l.jsx)(o,{text:t,id:e,onSelect:b})}))]})})})};i.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.705bb4c9.chunk.js.map