(this["webpackJsonpgithub-repo-viewer"]=this["webpackJsonpgithub-repo-viewer"]||[]).push([[0],{46:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var r=c(14),s=c(8),n=c(29),a=(c(46),c(3));function o(){const e=Object(s.c)((e=>e.repos.repositories)),t=Object(s.c)((e=>e.repos.isLoading));return 0===e.length||t?null:Object(a.jsx)("a",{href:e[0].owner.html_url,children:Object(a.jsx)("div",{className:"organization-info container flex-row",children:Object(a.jsxs)("div",{className:"organization-info-inner flex-row",children:[Object(a.jsx)("div",{className:"avatar-container",children:Object(a.jsx)("img",{className:"avatar",src:e[0].owner.avatar_url,alt:"avatar"})}),Object(a.jsx)("div",{className:"organization-name",children:e[0].owner.login})]})})})}var i=c(2),l=c(70),j=c(16);const d=Object(j.b)({name:"repos",initialState:{repositories:[],isLoading:!1,fetchError:!1},reducers:{fetchDataRequest:e=>({...e,isLoading:!0,fetchError:!1}),fetchDataSuccess:(e,t)=>({...e,repositories:t.payload,isLoading:!1,fetchError:!1}),fetchDataFail:e=>({...e,repositories:[],fetchError:!0,isLoading:!1})}}),{fetchDataFail:u,fetchDataSuccess:b,fetchDataRequest:h}=d.actions;var p=d.reducer;c(48);function f(){const[e,t]=Object(i.useState)(""),c=Object(s.b)();return Object(a.jsx)("div",{className:"search-bar flex-row centered",children:Object(a.jsxs)("form",{className:"flex-row",onSubmit:r=>{r.preventDefault(),""!==e&&(c({type:h.type,payload:{org:e}}),t(""))},children:[Object(a.jsx)("input",{className:"search-bar-input",placeholder:"Enter the organization name...",onChange:e=>{t(e.target.value.trim())}}),Object(a.jsx)("button",{type:"submit",className:"submit-button flex-row centered",children:Object(a.jsx)(l.a,{className:"submit-icon"})})]})})}var O=c(71),m=c(72);function x(e){let{title:t,url:c,forksCount:r,watchersCount:s,starsCount:n}=e;return Object(a.jsx)("a",{href:c,children:Object(a.jsxs)("div",{className:"container flex-column",id:"repository",children:[Object(a.jsx)("div",{className:"repo-info repo-title",children:t}),Object(a.jsx)("div",{className:"repo-info repo-url",children:Object(a.jsx)("a",{className:"repo-url",href:c,children:c})}),Object(a.jsxs)("div",{className:"repo-lower flex-row",children:[Object(a.jsxs)("div",{className:"repo-info flex-row centered repo-fork-count repo-count",children:[Object(a.jsx)(O.a,{className:"repo-icon"})," ",r]}),Object(a.jsxs)("div",{className:"repo-info flex-row centered repo-watchers-count repo-count",children:[Object(a.jsx)(m.a,{className:"repo-icon"})," ",s]}),Object(a.jsxs)("div",{className:"repo-info flex-row centered repo-star-count repo-count",children:[Object(a.jsx)(m.b,{className:"repo-icon"})," ",n]})]})]})})}c(49);function v(){return Object(a.jsx)("div",{className:"loading-spinner-container",children:Object(a.jsx)("div",{className:"spinner"})})}function g(){return Object(s.c)((e=>e.repos.fetchError))?Object(a.jsx)("div",{children:"An error occured while fetching."}):Object(a.jsx)("span",{})}c(50);function N(){const e=Object(s.c)((e=>e.repos.repositories)),t=Object(s.c)((e=>e.repos.isLoading)),c=Object(s.c)((e=>e.repos.fetchError)),[r,n]=Object(i.useState)(1),o=6*r,l=o-6,j=e.slice(l,o),d=[];for(let s=1;s<=Math.ceil(e.length/6);s++)d.push(s);return Object(i.useEffect)((()=>{t&&n(1)}),[t]),Object(a.jsxs)("div",{className:"container flex-column centered",id:"repositories",children:[Object(a.jsx)(g,{}),t?Object(a.jsx)(v,{}):j.map((e=>Object(a.jsx)(x,{title:e.name,url:e.html_url,forksCount:e.forks_count,watchersCount:e.watchers_count,starsCount:e.stargazers_count},e.id))),Object(a.jsx)("div",{className:"page-numbers-container flex-row centered",children:!t&&!c&&d.map((e=>Object(a.jsx)("div",{className:e!==r?"page-number":"page-number active",onClick:()=>{n(e),window.scrollTo(0,0)},children:e},e)))})]})}var w=c(31),y=c(30),E=c.n(y),C=c(11);function k(e){return E.a.get("".concat("https://api.github.com","/orgs/").concat(e,"/repos"),{headers:{Accept:"application/vnd.github.v3+json"}})}function*D(e){try{const t=yield Object(C.a)(k,e.payload.org);yield Object(C.b)(b(t.data))}catch(t){yield Object(C.b)({type:u.type})}}const L=Object(w.a)();var S=Object(j.a)({reducer:{repos:p},middleware:[L]});L.run((function*(){yield Object(C.c)(h.type,D)}));c(68);function _(){return Object(a.jsx)(s.a,{store:S,children:Object(a.jsx)("div",{className:"App flex-column centered",children:Object(a.jsxs)("div",{className:"container main flex-column centered",children:[Object(a.jsx)("h1",{className:"header-text",children:"GITHUB REPO VIEWER"}),Object(a.jsx)(f,{}),Object(a.jsx)(o,{}),Object(a.jsx)(N,{})]})})})}n.config();const z=document.getElementById("root");Object(r.render)(Object(a.jsx)(_,{}),z)}},[[69,1,2]]]);
//# sourceMappingURL=main.24de51dc.chunk.js.map