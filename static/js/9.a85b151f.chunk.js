(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[9],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n(56),i=n(0),c=n(2),s=n(9),r=n(93),o=n.n(r),A=n(55),l=n(14),u=n(61),v=n(1),d=Object(i.lazy)((function(){return n.e(4).then(n.bind(null,102))})),h=Object(i.lazy)((function(){return n.e(1).then(n.bind(null,100))})),j=function(){var e,t,n,r,j=Object(c.f)(),p=Object(c.g)(),f=Object(c.h)().movieId,g=Object(i.useState)({}),b=Object(a.a)(g,2),m=b[0],x=b[1],O=Object(c.i)(),k=O.url,_=O.path,y=m.title,P=m.genres,J=m.vote_average,M=m.overview,D=m.poster_path,R=D?"https://image.tmdb.org/t/p/w300".concat(D):u.a;Object(i.useEffect)((function(){Object(A.b)(f).then(x).catch((function(e){return e}))}),[f]);return Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{type:"submit",onClick:function(){var e,t;j.push(null!==(e=null===p||void 0===p||null===(t=p.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")},className:o.a.btn,children:"\u140a BACK"}),m&&Object(v.jsxs)("div",{className:o.a.contentWrap,children:[Object(v.jsx)("img",{src:R,alt:y,width:"300",className:o.a.image}),Object(v.jsxs)("div",{className:o.a.infoWrap,children:[Object(v.jsx)("h2",{className:o.a.movieTitle,children:y}),Object(v.jsxs)("p",{className:o.a.info,children:["User score:",Object(v.jsx)("span",{className:o.a.rating,children:J})]}),Object(v.jsxs)("p",{className:o.a.info,children:["Overview:",Object(v.jsx)("span",{className:o.a.description,children:M})]}),Object(v.jsxs)("p",{className:o.a.info,children:["Genres:",Object(v.jsx)("span",{className:o.a.description,children:P&&P.map((function(e){return Object(v.jsx)("span",{className:o.a.genre,children:e.name},e.id)}))})]}),Object(v.jsx)("h3",{className:o.a.title,children:"Additional Information"}),Object(v.jsxs)("div",{className:o.a.linkWrap,children:[Object(v.jsx)(s.c,{className:o.a.link,activeClassName:o.a.activeLink,to:{pathname:"".concat(k,"/cast"),state:{from:null!==(e=null===p||void 0===p||null===(t=p.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"}},children:"Cast"}),Object(v.jsx)(s.c,{className:o.a.link,activeClassName:o.a.activeLink,to:{pathname:"".concat(k,"/reviews"),state:{from:null!==(n=null===p||void 0===p||null===(r=p.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/"}},children:"Reviews"})]})]})]}),Object(v.jsx)(i.Suspense,{fallback:Object(v.jsx)(l.a,{}),children:Object(v.jsxs)(c.c,{children:[Object(v.jsx)(c.a,{path:"".concat(_,"/cast"),children:m&&Object(v.jsx)(h,{})}),Object(v.jsx)(c.a,{path:"".concat(_,"/reviews"),children:m&&Object(v.jsx)(d,{})})]})})]})}},55:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return A})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u}));var a=n(60),i=n.n(a),c="1d492e008148c42709362e98500fe1a3",s="https://api.themoviedb.org/3/";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"week",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return i.a.get("".concat(s,"trending/movie/").concat(e,"?api_key=").concat(c,"&page=").concat(t)).then((function(e){return e.data.results})).catch((function(e){return e}))}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return i.a.get("".concat(s,"search/movie?api_key=").concat(c,"&language=en-US&page=").concat(t,"&query=").concat(e,"&include_adult=false")).then((function(e){return e.data.results})).catch((function(e){return e}))}function A(e){return i.a.get("".concat(s,"movie/").concat(e,"?api_key=").concat(c,"&language=en-US")).then((function(e){return e.data})).catch((function(e){return e}))}function l(e){return i.a.get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1")).then((function(e){return e.data.results})).catch((function(e){return e}))}function u(e){return i.a.get("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(c,"&language=en-US")).then((function(e){return e.data.cast})).catch((function(e){return e}))}},61:function(e,t,n){"use strict";t.a="data:image/png;base64,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"},93:function(e,t,n){e.exports={contentWrap:"MovieDetailsPage_contentWrap__3elVc",btn:"MovieDetailsPage_btn__urAdY",infoWrap:"MovieDetailsPage_infoWrap__RWi4B",movieTitle:"MovieDetailsPage_movieTitle__36upY",info:"MovieDetailsPage_info__2D1ex",description:"MovieDetailsPage_description__2XI5s",rating:"MovieDetailsPage_rating__JVlEz MovieDetailsPage_info__2D1ex",genre:"MovieDetailsPage_genre__3pSpl MovieDetailsPage_description__2XI5s",image:"MovieDetailsPage_image__Z1ERs",title:"MovieDetailsPage_title__VrDbs",linkWrap:"MovieDetailsPage_linkWrap__1NPxF",link:"MovieDetailsPage_link__bjx_3",activeLink:"MovieDetailsPage_activeLink__2Dj_x MovieDetailsPage_link__bjx_3"}}}]);
//# sourceMappingURL=9.a85b151f.chunk.js.map