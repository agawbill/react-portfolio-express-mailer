(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[8],{471:function(e,a,t){"use strict";var n=t(0),o=t.n(n),c=t(38),s=t(71),r=t(472),l=t.n(r),i=(t(473),t(474)),m=t.n(i);a.a=function(e){var a=null;switch(e.type){case"about me":a=o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:m.a.Icon},o.a.createElement(c.a,{icon:s.a,size:"1x"})),o.a.createElement("span",{className:m.a.Header2},e.title));break;case"contact":a=o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:m.a.Icon},o.a.createElement(c.a,{icon:s.g,size:"1x"})),o.a.createElement("span",{className:m.a.Header2},e.title));break;case"latest posts":a=o.a.createElement("div",{style:{paddingTop:"35px",paddingBottom:"20px",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"200px",maxHeight:"100%",backgroundSize:"100% 100%",backgroundImage:"url(".concat(l.a,")"),lineHeight:"140px",marginTop:"29px",marginBottom:"29px"}},o.a.createElement("span",{className:m.a.Icon},o.a.createElement(c.a,{icon:s.c,size:"1x"})),o.a.createElement("span",{className:m.a.Header4},e.title));break;case"latest projects":a=o.a.createElement("div",{style:{paddingTop:"35px",paddingBottom:"20px",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"200px",maxHeight:"100%",backgroundSize:"100% 100%",backgroundImage:"url(".concat(l.a,")"),lineHeight:"140px",marginTop:"29px",marginBottom:"29px"}},o.a.createElement("span",{className:m.a.Icon},o.a.createElement(c.a,{icon:s.h,size:"1x"})),o.a.createElement("span",{className:m.a.Header3},e.title));break;case"projects":a=o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:m.a.Icon},o.a.createElement(c.a,{icon:s.h,size:"1x"})),o.a.createElement("span",{className:m.a.Header2},e.title));break;case"blogs":a=o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:m.a.Icon},o.a.createElement(c.a,{icon:s.c,size:"1x"})),o.a.createElement("span",{className:m.a.Header2},e.title));break;default:a=null}return o.a.createElement("div",{className:m.a.Header},a)}},472:function(e,a,t){e.exports=t.p+"static/media/projectHeader2.531f39d2.png"},473:function(e,a,t){e.exports=t.p+"static/media/postHeader.70668384.png"},474:function(e,a,t){e.exports={Header:"Header_Header__3yweT",Icon:"Header_Icon__3FM6g",Header1:"Header_Header1__1XuJS",Header2:"Header_Header2__2OnET",Header3:"Header_Header3__1yhoq",Header4:"Header_Header4__2RR68"}},485:function(e,a,t){e.exports={PostSnapshot:"PostSnapshot_PostSnapshot__2pIaZ",PostBody:"PostSnapshot_PostBody__2ncqS",PostTitle:"PostSnapshot_PostTitle__3MTTY",Content:"PostSnapshot_Content__AnixP",CategoryContainer:"PostSnapshot_CategoryContainer__3dPAV",Category:"PostSnapshot_Category__3gvay",DateName:"PostSnapshot_DateName__7DjzU",PostWidth:"PostSnapshot_PostWidth__3K0hp"}},486:function(e,a,t){e.exports={Posts:"PostSnapshots_Posts__1v53J"}},491:function(e,a,t){"use strict";var n=t(0),o=t.n(n),c=(t(477),t(485)),s=t.n(c),r=t(51),l=Object(r.f)(function(e){var a=new Date(e.dateCreated),t=[s.a.PostSnapshot];void 0!==e.location&&"/blog"===e.location.pathname&&(t=[s.a.PostSnapshot,s.a.PostWidth]);return o.a.createElement("div",{className:t.join(" "),onClick:e.clicked},o.a.createElement("div",{className:s.a.PostBody,style:{backgroundImage:"url(".concat(e.image,")")}},o.a.createElement("div",{className:s.a.CategoryContainer},o.a.createElement("span",{className:s.a.Category},e.category))),o.a.createElement("div",{className:s.a.Content},o.a.createElement("div",{className:s.a.PostTitle},e.title),o.a.createElement("div",{className:s.a.DateName},e.user," | ",a.toDateString()),o.a.createElement("p",null,o.a.createElement("i",null,e.headline)),function(a){var t=e.body.split(" ");if(t.length<a)return t.join(" ");var n=t[a-1].split("").slice(-1)[0];return-1!==[".","!",",","?",";"].indexOf(n)?"".concat(t.slice(0,a+1).join(" "),"..."):"".concat(t.slice(0,a).join(" "),"...")}(25)))}),i=t(486),m=t.n(i);a.a=Object(r.f)(function(e){var a=m.a.Posts;void 0!==e.location&&"/projects"===e.location.pathname&&(a=m.a.Posts);var t=e.posts.slice(0,6).map(function(a){return o.a.createElement(l,{image:a.images[0].url,category:a.category,body:a.body,title:a.title,user:a.user.username,email:a.email,headline:a.headline,dateCreated:a.created_at,clicked:function(){return t=a.id,n=a.slug,void e.history.push({pathname:"/blog/".concat(n),search:"?id=".concat(t)});var t,n},id:a.id,key:a.id})});return o.a.createElement("div",{className:a},t)})},597:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),c=t(72),s=t(471),r=t(491),l=t(469);a.default=function(e){var a=Object(c.c)(function(e){return e.blogs.posts}),t=Object(c.c)(function(e){return e.content.blogsData.content}),i=Object(c.c)(function(e){return e.content.blogsData.title});return Object(n.useEffect)(function(){document.title=i}),o.a.createElement(l.a,null,o.a.createElement(s.a,{type:"blogs",title:" Blogs"}),t,o.a.createElement("hr",null),o.a.createElement(r.a,{posts:a}))}}}]);
//# sourceMappingURL=8.d40bc2b3.chunk.js.map