(()=>{"use strict";var n={402:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"body {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(189, 178, 178);\n}\n\nheader {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n  margin: 0;\n}\n\nheader > p:first-of-type {\n  font-size: 1.5rem;\n}\n\nmain {\n  display: flex;\n}\n\nhr {\n  width: 100%;\n}\n\nul {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 0 40px;\n}\n\nul > li {\n  list-style: none;\n}\n\nul > li > a {\n  display: inline-block;\n  width: 200px;\n  text-decoration: none;\n  padding: 5px 10px;\n  color: rgb(231, 226, 216);\n  background-color: rgb(95, 85, 85);\n  border: 2px solid rgb(54, 51, 51);\n  border-radius: 10px;\n}\n\n#new-project {\n  display: inline-block;\n  width: 200px;\n  padding: 8px 10px;\n  border: 2px solid rgb(54, 51, 51);\n  border-radius: 10px;\n}\n\narticle {\n  width: 100vw;\n  height: 100vh;\n  border-radius: 10px;\n  background-color: rgb(224, 212, 212);\n}\n\narticle > div {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(402),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;document.addEventListener("DOMContentLoaded",(()=>{(()=>{const n=document.createElement("header");n.innerHTML="\n    <p>Tasks</p>\n    <p>Keep your obligations in check!</p>\n  ",document.body.appendChild(n)})(),(()=>{const n=document.createElement("main"),e=document.createElement("aside");e.innerHTML='\n    <ul>\n      <li><a href="#">Today</a></li>\n      <li><a href="#">Upcoming</a></li>\n    </ul>\n    <hr>\n    <ul class="projects">\n    </ul>\n    <ul>\n      <li><input type="text" id="new-project" placeholder="Add new Project" minlength="3"></li>\n    </ul>\n  ';const t=document.createElement("article");n.appendChild(e),n.appendChild(t),document.body.appendChild(n)})(),(()=>{if(localStorage.getItem("project-name")){const n=document.querySelector(".projects");n.textContent="",JSON.parse(localStorage.getItem("project-name")).forEach((e=>{n.innerHTML+=`\n        <li><a href="#">${e.name}</a></li>\n      `}))}})(),(()=>{const n=[];function e(){const e=document.querySelector("#new-project");return e.addEventListener("keypress",(t=>{var r;13!==t.keyCode&&13!==t.which||(t.preventDefault(),""!=e.value&&(n.push((n=>{const e=[];return{name:n,tasks:e,addTask:function(n){e.push(n)}}})(e.value)),localStorage.setItem("project-name",JSON.stringify(n)),r=e.value,document.querySelector(".projects").innerHTML+=`\n  <li><a href="#">${r}</a></li>\n`,(n=>{document.querySelector("article").innerHTML=`\n    <div>\n      <h1>${n.name}</h1>\n      <button id="add-task">Add new Task</button>\n    </div>\n  `})(n[n.length-1])),e.value="")})),e}e()})()})),console.log(localStorage)})()})();