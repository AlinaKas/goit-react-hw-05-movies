(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[4],{100:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return m}));var n=a(98),c=a(56),r=a(0),o=a(2),i=a(55),u=a(93),s=a.n(u),l=a(73),b=(a(72),a(1));var f=function(t){var e=t.onSubmitForm,a=Object(r.useState)(""),n=Object(c.a)(a,2),o=n[0],i=n[1],u=Object(r.useCallback)((function(t){i(t.currentTarget.value.toLowerCase())}),[]),f=Object(r.useCallback)((function(t){if(t.preventDefault(),""===o.trim())return l.b.info("Enter your request",{theme:"dark"});e(o),i("")}),[o,e]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("header",{className:s.a.searchbar,children:Object(b.jsxs)("form",{className:s.a.form,onSubmit:f,children:[Object(b.jsx)("button",{type:"submit",className:s.a.button,onClick:f}),Object(b.jsx)("input",{className:s.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search",value:o,onChange:u})]})})})},h=a(63),m=(a(94),a(62),function(){var t=Object(r.useState)(""),e=Object(c.a)(t,2),a=e[0],u=e[1],s=Object(r.useState)(null),m=Object(c.a)(s,2),j=m[0],d=m[1],_=Object(o.f)(),v=Object(o.g)();Object(o.i)().url;Object(r.useEffect)((function(){if(""!==v.search){var t=new URLSearchParams(v.search).get("query");u(t)}}),[v.search]),Object(r.useEffect)((function(){a&&g()}),[a]);var g=function(){Object(i.e)(a).then((function(t){0!==t.length?d(t):l.b.error("No movies for your request ".concat(a))}))},p=Object(r.useCallback)((function(t){u(t),d([]),_.push(Object(n.a)(Object(n.a)({},v),{},{search:"query=".concat(t)}))}),[_,v]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{onSubmitForm:p}),j&&Object(b.jsx)(h.a,{movies:j}),Object(b.jsx)(l.a,{autoClose:3e3})]})})},55:function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"e",(function(){return u})),a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return l})),a.d(e,"a",(function(){return b}));var n=a(61),c=a.n(n),r="1d492e008148c42709362e98500fe1a3",o="https://api.themoviedb.org/3/";function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"week",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return c.a.get("".concat(o,"trending/movie/").concat(t,"?api_key=").concat(r,"&page=").concat(e)).then((function(t){return t.data.results})).catch((function(t){return t}))}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return c.a.get("".concat(o,"search/movie?api_key=").concat(r,"&language=en-US&page=").concat(e,"&query=").concat(t,"&include_adult=false")).then((function(t){return t.data.results})).catch((function(t){return t}))}function s(t){return c.a.get("".concat(o,"movie/").concat(t,"?api_key=").concat(r,"&language=en-US")).then((function(t){return t.data})).catch((function(t){return t}))}function l(t){return c.a.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(t){return t.data.results})).catch((function(t){return t}))}function b(t){return c.a.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(r,"&language=en-US")).then((function(t){return t.data.cast})).catch((function(t){return t}))}},59:function(t,e,a){t.exports={link:"MovieGalleryItem_link__2yIKl",item:"MovieGalleryItem_item__34vdF",title:"MovieGalleryItem_title__Adss0",titleWrap:"MovieGalleryItem_titleWrap__3by4z"}},60:function(t,e,a){t.exports={list:"MovieGallery_list__298P6"}},62:function(t,e,a){"use strict";e.a=a.p+"static/media/default_avatar.2d3c9af7.png"},63:function(t,e,a){"use strict";a.d(e,"a",(function(){return b}));a(0);var n=a(2),c=a(9),r=a(59),o=a.n(r),i=a(1);function u(t){var e=t.movie,a=Object(n.g)();return Object(i.jsx)("li",{className:o.a.item,children:Object(i.jsxs)(c.b,{className:o.a.link,exact:!0,to:{pathname:"/movies/".concat(e.id),state:{from:a,label:"Back to search"}},children:[Object(i.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.original_title,width:"300",className:o.a.image}),Object(i.jsx)("div",{className:o.a.titleWrap,children:Object(i.jsx)("h3",{className:o.a.title,children:e.original_title})})]})})}var s=a(60),l=a.n(s);function b(t){var e=t.movies;return Object(i.jsx)("ul",{className:l.a.list,children:e.map((function(t){return Object(i.jsx)(u,{movie:t},t.id)}))})}},93:function(t,e,a){t.exports={searchbar:"Searchbar_searchbar__jo466",form:"Searchbar_form__XuKjc",button:"Searchbar_button__MhnaU","button-label":"Searchbar_button-label__14f0Y",input:"Searchbar_input__2C4aO"}},94:function(t,e,a){t.exports={error:"MoviesSearchPage_error__1c8ZY",defaultImage:"MoviesSearchPage_defaultImage__2mrzX"}}}]);
//# sourceMappingURL=4.b3033a1a.chunk.js.map