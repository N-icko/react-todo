(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(6),r=a.n(c),o=a(4),i=a(7),m=a(3);a(13);var s=function(e){var t=e.addTodoHandler,a=e.setFilter,c=Object(n.useRef)(null);return l.a.createElement("div",{className:"container mt2 z-depth-1"},l.a.createElement("form",{className:"row valign-wrapper"},l.a.createElement("div",{className:"col m8"},l.a.createElement("input",{className:"input",ref:c,type:"text",placeholder:"Write your TODO task here..."})),l.a.createElement("div",{className:"col m2"},l.a.createElement("button",{className:"waves-effect waves-light btn w100",type:"submit",onClick:function(e){e.preventDefault(),t(c.current.value),c.current.value=""}},l.a.createElement("i",{className:"small material-icons"},"playlist_add"))),l.a.createElement("div",{className:"col input-field m2"},l.a.createElement("select",{onChange:function(e){a(e.target.value)},className:"browser-default"},l.a.createElement("option",{value:"all"},"All"),l.a.createElement("option",{value:"complete"},"Complete"),l.a.createElement("option",{value:"incomplete"},"Incomplete")))))};a(14);var u=function(e){var t=e.filter,a=e.deleteHandler,n=e.completeHandler,c=e.filteredTodos;return l.a.createElement("div",{className:"container todo-main z-depth-1"},c.length?l.a.createElement("ul",{className:"todo-list"},c.map((function(e){return l.a.createElement("li",{className:"list-item valign-wrapper row ".concat(e.complete?"complete grey-text":""),key:e.id},l.a.createElement("span",{className:"col s10 list-text"},e.todoTitle),l.a.createElement("div",{className:"col s2 list-buttons center-align"},l.a.createElement("button",{className:"waves-effect waves-light btn ".concat(e.complete?"complete grey-text":""),type:"button",onClick:function(){n(e.id)}},l.a.createElement("i",{className:"small material-icons"},"done")),l.a.createElement("button",{className:"waves-effect waves-light btn ".concat(e.complete?"complete grey-text":""),type:"button",onClick:function(){a(e.id)}},l.a.createElement("i",{className:"small material-icons"},"delete"))))}))):l.a.createElement("div",null,l.a.createElement("h1",{className:"flow-text center-align"},"Sorry, your ".concat(t," todo list is empty!"))))};a(15);var d=function(){return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper px2 cyan darken-1"},l.a.createElement("a",{href:"/",className:"brand-logo"},"Your ",l.a.createElement("strong",null,"TODO"))))};a(16);var p=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("all"),p=Object(m.a)(r,2),f=p[0],v=p[1],E=Object(n.useState)([]),b=Object(m.a)(E,2),N=b[0],g=b[1];return Object(n.useEffect)((function(){!function(){switch(f){case"complete":g(a.filter((function(e){return!0===e.complete})));break;case"incomplete":g(a.filter((function(e){return!1===e.complete})));break;default:g(a)}}()}),[a,f]),l.a.createElement("div",{className:"main light-blue lighten-5"},l.a.createElement(d,null),l.a.createElement(s,{addTodoHandler:function(e){var t={todoTitle:e,id:8*Math.random(),complete:!1};c([t].concat(Object(i.a)(a)))},setFilter:v}),l.a.createElement(u,{filter:f,deleteHandler:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))},completeHandler:function(e){c((function(t){return t.map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{complete:!t.complete}):t}))}))},filteredTodos:N}))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.7c539228.chunk.js.map