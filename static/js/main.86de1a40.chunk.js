(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,l){e.exports=l(17)},15:function(e,t,l){},16:function(e,t,l){},17:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),o=l(8),c=l.n(o),r=(l(15),l(16),l(9)),i=l(1),s=l(2),d=l(3),u=l(5),m=l(4),f=l(6),p=function(e){var t=e.todo,l=e.index,a=e.handleDelete,o=e.handleClickCheckBox;return n.a.createElement("li",{className:t.completed?"completed":""},n.a.createElement("div",{className:"view"},n.a.createElement("input",{type:"checkbox",className:"toggle",onClick:function(){return o(l)},checked:t.completed}),n.a.createElement("label",null,t.title),n.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return a(t)}})))},h=function(e){var t=e.todos,l=e.handleDelete,a=e.handleClickCheckBox;return n.a.createElement("ul",{className:"todo-list"},t.length>0&&t.map(function(e,t){return n.a.createElement(p,{todo:e,index:t,key:e.id,handleDelete:l,handleClickCheckBox:a})}))},b=function(e){function t(){var e,l;Object(s.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(l=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={title:"",id:1},l.handleClick=function(e){if(e.preventDefault(),0===e.target.text.value.length)return!1;var t=l.props.addTodo,a={title:l.state.title,completed:!1,id:l.state.id};l.setState(function(e){return{title:"",id:e.id+1}}),t(a)},l.handleChange=function(e){l.setState({title:e.target.value})},l}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.handleClick},n.a.createElement("input",{className:"new-todo",name:"text",placeholder:"What needs to be done?",value:this.state.title,onChange:this.handleChange}),n.a.createElement("input",{type:"submit",style:{display:"none"}}))}}]),t}(n.a.Component),g=function(e){var t=e.todos,l=e.originalTodos,a=e.filterAll,o=e.filterActive,c=e.filterCompleted,r=e.activeTab,i=e.clearAllCompleted;return n.a.createElement("footer",{className:"footer",style:{display:"block"}},n.a.createElement("span",{className:"todo-count"},l.filter(function(e){return!1===e.completed}).length," ","items left"),n.a.createElement("ul",{className:"filters"},n.a.createElement("li",null,n.a.createElement("a",{href:"#/",className:"all"===r&&"selected",onClick:a},"All")),n.a.createElement("li",null,n.a.createElement("a",{href:"#/active",className:"active"===r&&"selected",onClick:o},"Active")),n.a.createElement("li",null,n.a.createElement("a",{href:"#/completed",className:"completed"===r&&"selected",onClick:c},"Completed"))),t.filter(function(e){return!0===e.completed}).length>0&&n.a.createElement("button",{type:"button",className:"clear-completed",style:{display:"block"},onClick:i},"Clear all completed"))};function v(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),l.push.apply(l,a)}return l}function C(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?v(l,!0).forEach(function(t){Object(r.a)(e,t,l[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):v(l).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))})}return e}var k=function(e){function t(){var e,l;Object(s.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(l=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={todos:[],originalTodos:[],activeTab:"",statusAllTodos:!0},l.addTodo=function(e){switch(l.setState(function(t){return{todos:[].concat(Object(i.a)(t.todos),[e]),originalTodos:[].concat(Object(i.a)(t.originalTodos),[e])}}),l.state.activeTab){case"active":l.filterActive();break;case"all":l.filterAll();break;case"completed":l.filterCompleted()}},l.handleDelete=function(e){!e.comleted&&l.setState(function(e){return{items:e.items-1}}),l.setState(function(t){return{todos:Object(i.a)(t.todos).filter(function(t){return t.id!==e.id}),originalTodos:Object(i.a)(t.todos).filter(function(t){return t.id!==e.id})}})},l.handleClickCheckBox=function(e){l.setState(function(t){return{todos:t.todos.map(function(l,a){return a===e?Object.assign(l,{completed:!t.todos[a].completed}):l})}})},l.filterAll=function(){l.setState(function(e){return{todos:Object(i.a)(e.originalTodos),activeTab:"all"}})},l.filterActive=function(){l.setState(function(e){return{todos:Object(i.a)(e.originalTodos).filter(function(e){return!1===e.completed}),activeTab:"active"}})},l.filterCompleted=function(){l.setState(function(e){return{todos:Object(i.a)(e.originalTodos).filter(function(e){return!0===e.completed}),activeTab:"completed"}})},l.handleCheckAll=function(){l.setState(function(e){return{todos:e.todos.map(function(t){return C({},t,{completed:e.statusAllTodos})}),originalTodos:e.originalTodos.map(function(t){return C({},t,{completed:e.statusAllTodos})}),statusAllTodos:!e.statusAllTodos}})},l.clearAllCompleted=function(){l.setState(function(e){return{todos:e.todos.filter(function(e){return!e.completed}),originalTodos:e.originalTodos.filter(function(e){return!e.completed})}})},l}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"todoapp"},n.a.createElement("header",{className:"header"},n.a.createElement("h1",null,"TODOS"),n.a.createElement(b,{addTodo:this.addTodo})),n.a.createElement("section",{className:"main",style:{display:"block"}},n.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onClick:this.handleCheckAll}),n.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),n.a.createElement(n.a.Fragment,null," ",n.a.createElement(h,{todos:this.state.todos,handleDelete:this.handleDelete,handleClickCheckBox:this.handleClickCheckBox}),this.state.originalTodos.length>0&&n.a.createElement(g,{todos:this.state.todos,originalTodos:this.state.originalTodos,filterAll:this.filterAll,filterActive:this.filterActive,filterCompleted:this.filterCompleted,activeTab:this.state.activeTab,clearAllCompleted:this.clearAllCompleted})))))}}]),t}(n.a.Component);c.a.render(n.a.createElement(k,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.86de1a40.chunk.js.map