(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[1],{100:function(A,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return M}));var c=t(56),a=t(2),i=t(0),j=t(55),I=t(14),s=t(96),n=t.n(s),b=t(1),M=function(){var A=Object(i.useState)([]),e=Object(c.a)(A,2),t=e[0],s=e[1],M=Object(i.useState)("pending"),E=Object(c.a)(M,2),v=E[0],O=E[1],Q=Object(a.h)().movieId;return Object(i.useEffect)((function(){Object(j.a)(Q).then(s).catch((function(A){return A})).finally(O("success"))}),[Q]),"pending"===v?Object(b.jsx)(I.a,{}):"success"===v?Object(b.jsx)("ul",{className:n.a.list,children:t&&t.length>0?t.map((function(A){var e=A.id,t=A.profile_path,c=A.name,a=A.character;return Object(b.jsxs)("li",{className:n.a.item,children:[Object(b.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w300".concat(t):"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMsaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0OCA3OS4xNjQwMzYsIDIwMTkvMDgvMTMtMDE6MDY6NTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMzI1QUNGMUY1QTgxMUVCQjk3OENEOTBFQkMyQjk2NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMzI1QUNGMkY1QTgxMUVCQjk3OENEOTBFQkMyQjk2NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQzMjVBQ0VGRjVBODExRUJCOTc4Q0Q5MEVCQzJCOTY1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzMjVBQ0YwRjVBODExRUJCOTc4Q0Q5MEVCQzJCOTY1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAEAsLCwwLEAwMEBcPDQ8XGxQQEBQbHxcXFxcXHx4XGhoaGhceHiMlJyUjHi8vMzMvL0BAQEBAQEBAQEBAQEBAQAERDw8RExEVEhIVFBEUERQaFBYWFBomGhocGhomMCMeHh4eIzArLicnJy4rNTUwMDU1QEA/QEBAQEBAQEBAQEBA/8AAEQgBLADIAwEiAAIRAQMRAf/EAHEAAQADAQEBAAAAAAAAAAAAAAABBAUDAgYBAQEAAAAAAAAAAAAAAAAAAAABEAEAAgEDAgQDBgUFAQAAAAAAAQIDEVEEITFBcRIy0SJSYYGhwUITkbHhggViM1MUNBURAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APswBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeb5KUjW9or5y425vHjtM28o+ILAq/wD0MX02/D4pjnYJ7+qPOPgosjxTNiyey8TO3i9oAAAAAAAAAAAAAAAAAOPI5FcNd7z7ag95MtMVfVedI8N5UcvOyX6Y/kr+LhkyXyW9V51l5UTMzM6zOs7ygBAAB3xcvNj6a+qu1vi4ArVw8jHmj5elvGs93VjRMxMTE6THaYX+Ly/3PkydL+E/V/UFoBAAAAAAAAAAAAB4y5a4qTe3h2jeWVe9sl5vadZl25mb9zL6Y9tOkefirqAAgAAAAAAdusdwBp8XkfvU0t769/t+13ZGLJOLJF48O8bw1omLRFo6xPWBUgIAAAAAAAADnyMn7eG1/HTSPOXRT/yF+lKb6zP3KKIAgAAAAAAAAAA0OBk9WKaT3pPTylnrHBv6c8R4WiY/MVpAIAAAAAAAADO58654jasNFm83/wBFvKP5KK4AgAAAAAAAAAA6YJ9Oak/6oc3qnvr5x/MVsAIAAAAAAAADO58aZ9d6w0VP/IU6UvtrWf5qKIAgAAAAAAAAAA94Y9Wakb2h4WOFT1Z4nwrEz+QrSAQAAAAAAAAHLkY/3MNqx37x5w6gMUd+Zh/by6x7b9Y8/GHBQAEAAAAAAAAGhwMfpxzee956eUKWLHOXJFI8e87Q1q1itYrHSIjSBUgIAAAAAAAAAAOebFXNjmk/dO0su9LUtNLRpMd2w48jj1zV2vHa35Soyx6vS2O01vGkw8iAAAAAAAmImZ0jrM+C/wAXiejTJk9/hXb+or1xOP8AtU9Vvfbv9kbLAIAAAAAAAAAAAAAAPGXDjy19N412nxhQy8LLTrT56/Z3/g0hRi/YNfJTDf8A3IrP2z3V7cbh/X6f7o/MFAXP+rxf+f8AGHqvF4njk9X90QCi7YuLmy9Yj01+qekL+PDx69aRXXfvLqDjg42PD1j5r/VP5OwIAAAAAAAAAAAImYiNZnSI7zIJFXLzqV6Y49c79oVMnIzZfdbptHSFGhk5ODH7rRM7R1lXv/kI/RT77T8FIB3tzeRb9Xp8oc7Zclvde0/fLwAACAAD1XJkr7bTHlMvIDvXmciv6vV5xq7U/wAhP66ffWfipArUpy8F+kW0na3R2YrpjzZcXstMRt4fwBrCni59Z6ZY9M/VHb+C3W1bR6qzExPjCCQAAAAUuTze9MM+d/gDtn5WPD091/pjw81DLnyZZ1vPTwrHaHMUABAAAAAAAAAAAAAAB7x5cmKdaTpvHhLwA0cHMpk0rf5L/hKyxVvjcyaaUy9aeFvGBV8RExMax1ie0iCjy+V69ceOfl/VbdUBQAEAAAAAAAAAAAAAAAAAAAAWOLyZxT6L9cc/gK4KACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANnSNjSNkiKjSNjSNkgI0jY0jZICNI2NI2SAjSNjSNkgI0jY0jZICNI2NI2SAjSNjSNkgI0jY0jZICNI2NI2SAjSNjSNkgI0jY0jZICNI2EgAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z",alt:c,className:n.a.image}),Object(b.jsxs)("div",{className:n.a.contentWrap,children:[Object(b.jsx)("h3",{className:n.a.title,children:c}),Object(b.jsx)("p",{className:n.a.description,children:a})]})]},e)})):Object(b.jsx)("p",{className:n.a.message,children:"Nothing found"})}):void 0}},96:function(A,e,t){A.exports={list:"Cast_list__HCeTh",item:"Cast_item__2BzhE",contentWrap:"Cast_contentWrap__1t3Yv",title:"Cast_title__3g4uq",description:"Cast_description__2ihPT",message:"Cast_message__1eVHk"}}}]);
//# sourceMappingURL=cast.3b6f5244.chunk.js.map