(this["webpackJsonptypes-format"]=this["webpackJsonptypes-format"]||[]).push([[0],[,,,,function(e,t,n){},,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(5),r=n.n(o),l=(n(4),n(12),function(e){var t=e.children;return c.a.createElement("div",{className:"layout"},t)}),i=n(1),s=n(2),u=n(6),f=(n(18),n(19),n(20),function(e){return function(e){var t=e.split("");return t[0]=t[0].toUpperCase(),t.join("")}(e.replace(/_([a-z])/g,(function(e,t){return t.toUpperCase()})))}),m={mode:"json",theme:"material",lineNumbers:!0},p=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),o=n[0],r=n[1],l=Object(a.useState)(""),p=Object(i.a)(l,2),v=p[0],d=p[1],g=Object(a.useState)(""),h=Object(i.a)(g,2),y=h[0],b=h[1],j=Object(a.useState)(""),E=Object(i.a)(j,2),O=E[0],C=E[1],w=Object(a.useState)(!1),N=Object(i.a)(w,2),_=N[0],k=N[1];function S(){if(v){var e=function(e,t,n,a){if(!a){var c=[],o={};s(n,e,!0);var r="// ".concat(e).concat(t,"\n\n").concat(c.join("\n"));return console.log(r),r}function l(t){var n=t.item,a=t.n,c=(t.res,t.names),o=(t.d,Object.keys(n).map((function(e){return typeof e}))),r=Object.keys(n),l="".concat(r.join(""),"-").concat(o.join("")),i=c["".concat(e).concat(a)];if(i){if(i.temp!==l)return i.count+=1,s(n,"".concat(e).concat(a).concat(i.count)),"".concat(e).concat(a).concat(i.count);i.count+=1}else s(n,"".concat(e).concat(a)),c["".concat(e).concat(a)]={count:1,temp:l}}function i(t,n,a,r){var i={};for(var s in t){var u=t[s];if(null===u)i[s]=null;else if("function"===typeof u)i[s]="() => void";else if(u instanceof Array)if(u[0]instanceof Object){var m=f(s),p=l({item:u[0],n:m,res:i,names:o,d:s});i[s]=p?"".concat(p,"[]"):"".concat(e).concat(m,"[]")}else{for(var v=null,d=0;d<u.length;d++){var g=u[d];if(v||(v=typeof g),v!==typeof g){v=null;break}}i[s]="".concat(v||"any","[]")}else if(u instanceof Object){var h=f(s),y=l({item:u,n:h,res:i,names:o,d:s});i[s]=y||"".concat(e).concat(h)}else i[s]=typeof u}return c[c.length]="export".concat(a?" default":""," interface ").concat(n," ").concat(JSON.stringify(i)).concat(r?"[]":"").replace(/\{/g,"{\n\t").replace(/\}/g,"\n}").replace(/\"/g,"").replace(/\:/g,"?:").replace(/\,/g,",\n\t"),i}function s(e,t,n){if(e instanceof Array)if(e[0]instanceof Object)i(e[0],t,n,!0);else{for(var a=null,o=0;o<e.length;o++){var r=e[o];if(a||(a=typeof r),a!==typeof r){a=null;break}}c.push("export".concat(n?" default":""," interface ").concat(t," ").concat(a||"any","[]"))}else i(e,t,n)}}(y,O,v,!1);r(e)}}return Object(a.useEffect)((function(){return S(),function(){}}),[v,y,O]),c.a.createElement("div",{className:"grid-container typesContent"},c.a.createElement("div",{className:"row row_input"},c.a.createElement("div",{className:"col_6"},c.a.createElement("input",{placeholder:"\u8bf7\u8f93\u5165\u7c7b\u578b\u540d",value:y,onChange:function(e){b(e.target.value)}})),c.a.createElement("div",{className:"col_6"},c.a.createElement("input",{placeholder:"\u8bf7\u8f93\u5165\u7c7b\u63cf\u8ff0",value:O,onChange:function(e){C(e.target.value)}}))),c.a.createElement("div",{className:"row row_content"},c.a.createElement("div",{className:"col_6 col_left",style:{position:"relative"}},c.a.createElement(s.UnControlled,{options:m,onChange:function(e,t,n){try{var a=JSON.parse(n);d(a)}catch(c){}}})),c.a.createElement("div",{className:"col_6 col_right"},c.a.createElement(s.Controlled,{value:o,options:m,onBeforeChange:function(e,t,n){r(o)},onChange:function(e,t,n){}}),c.a.createElement(u.CopyToClipboard,{text:o,onCopy:function(){k(!0),setTimeout((function(){k(!1)}),3e3)}},c.a.createElement("span",{className:"copy_content"},_?"\u5df2\u590d\u5236":"\u590d\u5236")))))},v=(n(21),n(22),function(){return c.a.createElement(l,null,c.a.createElement(p,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.0c0cd53d.chunk.js.map