(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[2],{55:function(t,n,e){"use strict";e.d(n,"d",(function(){return r})),e.d(n,"e",(function(){return o})),e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return l}));var a=e(62),c=e.n(a),A="1d492e008148c42709362e98500fe1a3",i="https://api.themoviedb.org/3/";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"week",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return c.a.get("".concat(i,"trending/movie/").concat(t,"?api_key=").concat(A,"&page=").concat(n)).then((function(t){return t.data.results})).catch((function(t){return t}))}function o(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return c.a.get("".concat(i,"search/movie?api_key=").concat(A,"&language=en-US&page=").concat(n,"&query=").concat(t,"&include_adult=false")).then((function(t){return t.data.results})).catch((function(t){return t}))}function u(t){return c.a.get("".concat(i,"movie/").concat(t,"?api_key=").concat(A,"&language=en-US")).then((function(t){return t.data})).catch((function(t){return t}))}function s(t){return c.a.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(A,"&language=en-US&page=1")).then((function(t){return t.data.results})).catch((function(t){return t}))}function l(t){return c.a.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(A,"&language=en-US")).then((function(t){return t.data.cast})).catch((function(t){return t}))}},57:function(t,n,e){"use strict";n.a="data:image/png;base64,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"},60:function(t,n,e){t.exports={list:"MovieGallery_list__298P6"}},61:function(t,n,e){t.exports={link:"MovieGalleryItem_link__2yIKl",item:"MovieGalleryItem_item__34vdF",title:"MovieGalleryItem_title__Adss0",titleWrap:"MovieGalleryItem_titleWrap__3by4z"}},63:function(t,n,e){"use strict";e.d(n,"a",(function(){return f}));e(0);var a=e(60),c=e.n(a),A=e(2),i=e(9),r=e(61),o=e.n(r),u=e(57),s=e(1);function l(t){var n=t.movie,e=Object(A.g)(),a=n.original_title,c=n.poster_path,r=c?"https://image.tmdb.org/t/p/w300".concat(c):u.a;return Object(s.jsx)("li",{className:o.a.item,children:Object(s.jsxs)(i.b,{className:o.a.link,exact:!0,to:{pathname:"movies/".concat(n.id),state:{from:e,label:"BACK TO HOME"}},children:[Object(s.jsx)("img",{src:r,alt:a,width:"300",className:o.a.image}),Object(s.jsx)("div",{className:o.a.titleWrap,children:Object(s.jsx)("h3",{className:o.a.title,children:a})})]})})}function f(t){var n=t.movies;return Object(s.jsx)("ul",{className:c.a.list,children:n.map((function(t){return Object(s.jsx)(l,{movie:t},t.id)}))})}},92:function(t,n,e){t.exports={title:"PageHeading_title__1ffyz"}},98:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return l}));var a=e(56),c=e(0),A=e(63),i=e(55),r=e(92),o=e.n(r),u=e(1),s=function(t){var n=t.text;return Object(u.jsx)("h1",{className:o.a.title,children:n})},l=function(){var t=Object(c.useState)([]),n=Object(a.a)(t,2),e=n[0],r=n[1];return Object(c.useEffect)((function(){Object(i.d)().then(r).catch((function(t){return t}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(s,{text:"Popular Movies"}),e&&Object(u.jsx)(A.a,{movies:e})]})}}}]);
//# sourceMappingURL=home-page.e400024b.chunk.js.map