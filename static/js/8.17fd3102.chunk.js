(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[8],{55:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return b}));var c=n(60),a=n.n(c),r="1d492e008148c42709362e98500fe1a3",u="https://api.themoviedb.org/3/";function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"week",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return a.a.get("".concat(u,"trending/movie/").concat(t,"?api_key=").concat(r,"&page=").concat(e)).then((function(t){return t.data.results})).catch((function(t){return t}))}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return a.a.get("".concat(u,"search/movie?api_key=").concat(r,"&language=en-US&page=").concat(e,"&query=").concat(t,"&include_adult=false")).then((function(t){return t.data.results})).catch((function(t){return t}))}function s(t){return a.a.get("".concat(u,"movie/").concat(t,"?api_key=").concat(r,"&language=en-US")).then((function(t){return t.data})).catch((function(t){return t}))}function f(t){return a.a.get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(t){return t.data.results})).catch((function(t){return t}))}function b(t){return a.a.get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(r,"&language=en-US")).then((function(t){return t.data.cast})).catch((function(t){return t}))}},59:function(t,e,n){t.exports={list:"MovieGallery_list__298P6"}},62:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var c=n(0),a=n(59),r=n.n(a),u=n(1),o=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,103))}));function i(t){var e=t.movies;return Object(u.jsx)("ul",{className:r.a.list,children:e.map((function(t){return Object(u.jsx)(o,{movie:t},t.id)}))})}},92:function(t,e,n){t.exports={searchbar:"Searchbar_searchbar__jo466",form:"Searchbar_form__XuKjc",button:"Searchbar_button__MhnaU","button-label":"Searchbar_button-label__14f0Y",input:"Searchbar_input__2C4aO"}},99:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return j}));var c=n(97),a=n(56),r=n(0),u=n(2),o=n(55),i=n(92),s=n.n(i),f=n(72),b=(n(71),n(1));var l=function(t){var e=t.onSubmitForm,n=Object(r.useState)(""),c=Object(a.a)(n,2),u=c[0],o=c[1],i=Object(r.useCallback)((function(t){o(t.currentTarget.value.toLowerCase())}),[]),l=Object(r.useCallback)((function(t){if(t.preventDefault(),""===u.trim())return f.b.info("Enter your request",{theme:"dark"});e(u),o("")}),[u,e]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("header",{className:s.a.searchbar,children:Object(b.jsxs)("form",{className:s.a.form,onSubmit:l,children:[Object(b.jsx)("button",{type:"submit",className:s.a.button,onClick:l}),Object(b.jsx)("input",{className:s.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search",value:u,onChange:i})]})})})},h=n(62),j=function(){var t=Object(r.useState)(""),e=Object(a.a)(t,2),n=e[0],i=e[1],s=Object(r.useState)(null),j=Object(a.a)(s,2),m=j[0],d=j[1],v=Object(u.f)(),g=Object(u.g)();Object(r.useEffect)((function(){if(""!==g.search){var t=new URLSearchParams(g.search).get("query");i(t)}}),[g.search]),Object(r.useEffect)((function(){n&&O()}),[n]);var O=function(){Object(o.e)(n).then((function(t){0!==t.length?d(t):f.b.error("No movies for your request ".concat(n))})).catch((function(t){return t}))},p=Object(r.useCallback)((function(t){i(t),v.push(Object(c.a)(Object(c.a)({},g),{},{search:"query=".concat(t)}))}),[v,g]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l,{onSubmitForm:p}),m&&Object(b.jsx)(h.a,{movies:m}),Object(b.jsx)(f.a,{autoClose:3e3})]})}}}]);
//# sourceMappingURL=8.17fd3102.chunk.js.map