(this["webpackJsonptodo-react-v1"]=this["webpackJsonptodo-react-v1"]||[]).push([[0],{16:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n.n(o),a=n(9),i=n.n(a),s=(n(16),n(4)),d=n(1);var r=function(t){var e=Object(o.useState)(t.edit?t.edit.value:""),n=Object(s.a)(e,2),c=n[0],a=n[1],i=Object(o.useRef)(null);Object(o.useEffect)((function(){i.current.focus()}));var r=function(t){a(t.target.value)},u=function(e){e.preventDefault(),""==c&&alert("Please enter some text"),t.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),a("")};return Object(d.jsx)("form",{onSubmit:u,className:"todo-form",children:t.edit?Object(d.jsxs)("div",{className:"update",children:[Object(d.jsx)("input",{placeholder:"Update your item",value:c,onChange:r,name:"text",type:"text",ref:i,className:"todo-input edit"}),Object(d.jsx)("button",{onClick:u,className:"todo-button edit",children:"Update"})]}):Object(d.jsxs)("div",{className:"add",children:[Object(d.jsx)("input",{placeholder:"Add a todo",value:c,onChange:r,name:"text",className:"todo-input",ref:i,type:"text"}),Object(d.jsx)("button",{onClick:u,className:"todo-button",children:"Add todo"})]})})},u=n(7),l=n(10),j=n(11),b=function(t){var e=t.todos,n=t.completeTodo,c=t.removeTodo,a=t.updateTodo,i=Object(o.useState)({id:null,value:""}),u=Object(s.a)(i,2),b=u[0],m=u[1];return b.id?Object(d.jsx)(r,{edit:b,onSubmit:function(t){a(b.id,t),m({id:null,value:""})}}):e.map((function(t,e){return Object(d.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(d.jsx)("div",{className:"todo-text",onClick:function(){return n(t.id)},children:t.text},t.id),Object(d.jsxs)("div",{className:"icons",children:[Object(d.jsx)(l.a,{onClick:function(){return c(t.id)},className:"delete-icon"}),Object(d.jsx)(j.a,{onClick:function(){return m({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))};var m=function(){var t=Object(o.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"What's the Plan for Today?"}),Object(d.jsx)(r,{onSubmit:function(t){var e;if(t.text&&!/^\s*$/.test(t.text)){var o=[t].concat(Object(u.a)(n));c(o),(e=console).log.apply(e,Object(u.a)(n))}}}),Object(d.jsx)(b,{todos:n,completeTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));c(e)},removeTodo:function(t){var e=Object(u.a)(n).filter((function(e){return e.id!==t}));c(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&c((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var f=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(m,{})})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.0028f4af.chunk.js.map