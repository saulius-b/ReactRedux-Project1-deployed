(this.webpackJsonpimagesearchversion2=this.webpackJsonpimagesearchversion2||[]).push([[0],{24:function(e,t,a){e.exports=a(53)},29:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),s=a.n(c),l=(a(29),a(3)),o=a(6),i=a(23),u=a(12);var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ENTER_TEXT":return Object(u.a)(Object(u.a)({},e),{},{searchText:[].concat(Object(i.a)(e.searchText),[t.payload])});default:return e}},h=a(4),p=a(11),E=a.n(p),v=function(e){return{type:"ENTER_TEXT",payload:e}};var d=function(e){var t=e.result.map((function(e){return r.a.createElement("figure",{className:"gallery-frame",key:e.id},r.a.createElement("img",{className:"gallery-img",src:e.urls.regular,alt:""}),r.a.createElement("figcaption",null,"Author: ",e.user.name))}));return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement("div",{className:"searchDiv"},r.a.createElement("h1",null,"Image search app"),r.a.createElement("input",{name:"text",onChange:e.onChange,placeholder:"Search Unsplash for some cool pics!",value:e.text}),r.a.createElement("br",null),r.a.createElement("button",{className:"myButton",onClick:e.handleClick},"Search"),r.a.createElement("button",{className:"myButton",type:"submit"},"Save search"))),r.a.createElement("div",{className:"saveDiv"},e.saveInfo),r.a.createElement("div",{className:"picDiv"},function(){var a=r.a.createElement("div",{className:"spinner"});return e.isLoading?a:t}(),function(){if(e.nothingFound)return"Nothing found, please try another keyword."}()),r.a.createElement("div",{className:"footer"},"Created by Saulius Bal\u010di\u016bnas"))};var f=function(){var e="5K3WAlgbQBcHPunHaZhah0yg9kDDhpLMJ6tlEEv_RYI",t=Object(n.useState)(""),a=Object(h.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)([]),i=Object(h.a)(o,2),u=i[0],m=i[1],p=Object(n.useState)(!1),f=Object(h.a)(p,2),g=f[0],b=f[1],O=Object(n.useState)(),_=Object(h.a)(O,2),y=_[0],N=_[1];function T(e){e.response?alert("Issue with the response, error code: "+e.response.status):e.request?alert("Issue the with the request"):alert("Error",e.message)}var S=Object(l.b)(),j=function(e){return S(v(e))},x=Object(l.c)((function(e){return e.searchText})).map((function(e,t){return r.a.createElement("p",{className:"saveLi",key:t,onClick:function(){return D(e.searchText)}},e.searchText)})),D=function(t){N(!1),b(!0);var a="https://api.unsplash.com/search/photos?page=1&query="+t+"&client_id="+e+"&per_page=33&orientation=portrait";E.a.get(a).then((function(e){m(e.data.results),0===e.data.total&&N(!0),b(!1)})).catch(T)};return r.a.createElement("div",null,r.a.createElement(d,{onSubmit:function(e){e.preventDefault(),""!==c&&(j({searchText:c}),s(""))},onChange:function(e){s(e.target.value)},handleClick:function(t){t.preventDefault(),N(!1),b(!0);var a="https://api.unsplash.com/search/photos?page=1&query="+c+"&client_id="+e+"&per_page=50&orientation=portrait";E.a.get(a).then((function(e){m(e.data.results),0===e.data.total&&N(!0),b(!1),s("")})).catch(T)},nothingFound:y,result:u,isLoading:g,saveInfo:x,text:c}))},g=Object(o.b)(m,{searchText:[]},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var b=function(){return r.a.createElement(l.a,{store:g},r.a.createElement("div",null,r.a.createElement(f,null)))};s.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.40da4b3b.chunk.js.map