(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[6],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n(56),i=n(0),c=n(2),s=n(9),o=n(96),r=n.n(o),l=n(55),A=n(14),u=n(57),v=n(1),d=Object(i.lazy)((function(){return n.e(9).then(n.bind(null,103))})),h=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,104))})),j=function(){var e,t,n,o,j,b,p,g,f,m=Object(c.f)(),x=Object(c.g)(),O=Object(c.h)().movieId,k=Object(i.useState)({}),_=Object(a.a)(k,2),y=_[0],P=_[1],J=Object(c.i)(),M=J.url,D=J.path,R=y.title,S=y.genres,w=y.vote_average,N=y.overview,C=y.poster_path,z=C?"https://image.tmdb.org/t/p/w300".concat(C):u.a;Object(i.useEffect)((function(){Object(l.b)(O).then(P).catch((function(e){return e}))}),[O]);return Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{type:"submit",onClick:function(){var e,t,n;m.push(null!==(e=null===x||void 0===x||null===(t=x.state)||void 0===t||null===(n=t.from)||void 0===n?void 0:n.location)&&void 0!==e?e:"/movies")},className:r.a.btn,children:"\u140a BACK TO SEARCH"}),y&&Object(v.jsxs)("div",{className:r.a.contentWrap,children:[Object(v.jsx)("img",{src:z,alt:R,width:"300",className:r.a.image}),Object(v.jsxs)("div",{className:r.a.infoWrap,children:[Object(v.jsx)("h2",{className:r.a.movieTitle,children:R}),Object(v.jsxs)("p",{className:r.a.info,children:["User score:",Object(v.jsx)("span",{className:r.a.rating,children:w})]}),Object(v.jsxs)("p",{className:r.a.info,children:["Overview:",Object(v.jsx)("span",{className:r.a.description,children:N})]}),Object(v.jsxs)("p",{className:r.a.info,children:["Genres:",Object(v.jsx)("span",{className:r.a.description,children:S&&S.map((function(e){return Object(v.jsx)("span",{className:r.a.genre,children:e.name},e.id)}))})]}),Object(v.jsx)("h3",{className:r.a.title,children:"Additional Information"}),Object(v.jsxs)("div",{className:r.a.linkWrap,children:[Object(v.jsx)(s.c,{className:r.a.link,activeClassName:r.a.activeLink,to:{pathname:"".concat(M,"/cast"),state:{state:{from:{location:null!==(e=null===x||void 0===x||null===(t=x.state)||void 0===t||null===(n=t.from)||void 0===n?void 0:n.location)&&void 0!==e?e:"/",label:null!==(o=null===x||void 0===x||null===(j=x.state)||void 0===j||null===(b=j.from)||void 0===b?void 0:b.label)&&void 0!==o?o:"Back to Home"}}}},children:"Cast"}),Object(v.jsx)(s.c,{className:r.a.link,activeClassName:r.a.activeLink,to:{pathname:"".concat(M,"/reviews"),state:{backUrl:"".concat((null===(p=x.state)||void 0===p?void 0:p.searchValue)?"/movies":"/"),searchValue:null!==(g=null===(f=x.state)||void 0===f?void 0:f.searchValue)&&void 0!==g?g:""}},children:"Reviews"})]})]})]}),Object(v.jsx)(i.Suspense,{fallback:Object(v.jsx)(A.a,{}),children:Object(v.jsxs)(c.c,{children:[Object(v.jsx)(c.a,{path:"".concat(D,"/cast"),children:y&&Object(v.jsx)(h,{})}),Object(v.jsx)(c.a,{path:"".concat(D,"/reviews"),children:y&&Object(v.jsx)(d,{})})]})})]})}},55:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return A})),n.d(t,"a",(function(){return u}));var a=n(62),i=n.n(a),c="1d492e008148c42709362e98500fe1a3",s="https://api.themoviedb.org/3/";function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"week",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return i.a.get("".concat(s,"trending/movie/").concat(e,"?api_key=").concat(c,"&page=").concat(t)).then((function(e){return e.data.results})).catch((function(e){return e}))}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return i.a.get("".concat(s,"search/movie?api_key=").concat(c,"&language=en-US&page=").concat(t,"&query=").concat(e,"&include_adult=false")).then((function(e){return e.data.results})).catch((function(e){return e}))}function l(e){return i.a.get("".concat(s,"movie/").concat(e,"?api_key=").concat(c,"&language=en-US")).then((function(e){return e.data})).catch((function(e){return e}))}function A(e){return i.a.get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1")).then((function(e){return e.data.results})).catch((function(e){return e}))}function u(e){return i.a.get("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(c,"&language=en-US")).then((function(e){return e.data.cast})).catch((function(e){return e}))}},57:function(e,t,n){"use strict";t.a="data:image/png;base64,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"},96:function(e,t,n){e.exports={contentWrap:"MovieDetailsPage_contentWrap__3elVc",btn:"MovieDetailsPage_btn__urAdY",infoWrap:"MovieDetailsPage_infoWrap__RWi4B",movieTitle:"MovieDetailsPage_movieTitle__36upY",info:"MovieDetailsPage_info__2D1ex",description:"MovieDetailsPage_description__2XI5s",rating:"MovieDetailsPage_rating__JVlEz MovieDetailsPage_info__2D1ex",genre:"MovieDetailsPage_genre__3pSpl MovieDetailsPage_description__2XI5s",image:"MovieDetailsPage_image__Z1ERs",title:"MovieDetailsPage_title__VrDbs",linkWrap:"MovieDetailsPage_linkWrap__1NPxF",link:"MovieDetailsPage_link__bjx_3",activeLink:"MovieDetailsPage_activeLink__2Dj_x MovieDetailsPage_link__bjx_3"}}}]);
//# sourceMappingURL=6.39b81fce.chunk.js.map