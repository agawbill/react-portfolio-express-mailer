(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[6],{471:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(38),i=t(71),o=t(472),l=t.n(o),s=(t(473),t(474)),m=t.n(s);a.a=function(e){var a=null;switch(e.type){case"about me":a=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:m.a.Icon},r.a.createElement(c.a,{icon:i.a,size:"1x"})),r.a.createElement("span",{className:m.a.Header2},e.title));break;case"contact":a=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:m.a.Icon},r.a.createElement(c.a,{icon:i.g,size:"1x"})),r.a.createElement("span",{className:m.a.Header2},e.title));break;case"latest posts":a=r.a.createElement("div",{style:{paddingTop:"35px",paddingBottom:"20px",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"200px",maxHeight:"100%",backgroundSize:"100% 100%",backgroundImage:"url(".concat(l.a,")"),lineHeight:"140px",marginTop:"29px",marginBottom:"29px"}},r.a.createElement("span",{className:m.a.Icon},r.a.createElement(c.a,{icon:i.c,size:"1x"})),r.a.createElement("span",{className:m.a.Header4},e.title));break;case"latest projects":a=r.a.createElement("div",{style:{paddingTop:"35px",paddingBottom:"20px",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"200px",maxHeight:"100%",backgroundSize:"100% 100%",backgroundImage:"url(".concat(l.a,")"),lineHeight:"140px",marginTop:"29px",marginBottom:"29px"}},r.a.createElement("span",{className:m.a.Icon},r.a.createElement(c.a,{icon:i.h,size:"1x"})),r.a.createElement("span",{className:m.a.Header3},e.title));break;case"projects":a=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:m.a.Icon},r.a.createElement(c.a,{icon:i.h,size:"1x"})),r.a.createElement("span",{className:m.a.Header2},e.title));break;case"blogs":a=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:m.a.Icon},r.a.createElement(c.a,{icon:i.c,size:"1x"})),r.a.createElement("span",{className:m.a.Header2},e.title));break;default:a=null}return r.a.createElement("div",{className:m.a.Header},a)}},472:function(e,a,t){e.exports=t.p+"static/media/projectHeader2.531f39d2.png"},473:function(e,a,t){e.exports=t.p+"static/media/postHeader.70668384.png"},474:function(e,a,t){e.exports={Header:"Header_Header__3yweT",Icon:"Header_Icon__3FM6g",Header1:"Header_Header1__1XuJS",Header2:"Header_Header2__2OnET",Header3:"Header_Header3__1yhoq",Header4:"Header_Header4__2RR68"}},489:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(490),i=t.n(c),o=t(38),l=t(71),s=t(86);a.a=function(e){var a=function(e){switch(e){case"facebook":window.open("https://www.facebook.com/sharer/sharer.php?u=".concat(window.location.href),"_blank");break;case"twitter":window.open("http://twitter.com/share?text=Check out this post!&url=".concat(window.location.href),"_blank");break;case"linkedin":window.open("https://www.linkedin.com/sharing/share-offsite/?url=".concat(window.location.href,"&summary=Check out this post!"),"_blank");break;case"email":window.open("mailto: ?&subject=Check out this post!&body=".concat(window.location.href," Check out this post!"),"_blank")}};return r.a.createElement("div",{className:i.a.ShareIcons},r.a.createElement(o.a,{icon:l.f,size:e.size,style:{color:"red"},onClick:function(){return a("email")}}),r.a.createElement(o.a,{icon:s.b,size:e.size,style:{color:"#3b5998"},onClick:function(){return a("facebook")}}),r.a.createElement(o.a,{icon:s.f,size:e.size,style:{color:"#1da1f2"},onClick:function(){return a("twitter")}}),r.a.createElement(o.a,{icon:s.d,size:e.size,style:{color:"#0e76a8"},onClick:function(){return a("linkedin")}}))}},490:function(e,a,t){e.exports={ShareIcons:"ShareIcons_ShareIcons__1WpyD"}},591:function(e,a,t){e.exports={Viwer:"Viewer_Viwer__2vpRk",ViewerImage:"Viewer_ViewerImage__3BoeK",ViewerNext:"Viewer_ViewerNext__12X5Y",ViewerPrev:"Viewer_ViewerPrev__3R03E",ViewerExit:"Viewer_ViewerExit__1_cmS"}},592:function(e,a,t){e.exports={Gallery:"Gallery_Gallery__3v6Q5"}},593:function(e,a,t){e.exports={Project:"Project_Project__vaq1W",ProjectContainer:"Project_ProjectContainer__2NCqA",ProjectDescription:"Project_ProjectDescription__3xQeJ",ProjectGallery:"Project_ProjectGallery__nBEz6",ProjectVideo:"Project_ProjectVideo__f4-zg",DateName:"Project_DateName__2S38n",NameHighlight:"Project_NameHighlight__1RxhU"}},601:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(72),i=t(150),o=t(113),l=t(58),s=t(212),m=t(38),d=t(71),u=t(591),p=t.n(u),g=function(e){return r.a.createElement("div",{className:p.a.Viewer},r.a.createElement(s.a,{open:e.open,close:e.close}),r.a.createElement("div",{className:p.a.ViewerImage,style:{backgroundImage:"url(".concat(e.image,")")}}),r.a.createElement(m.a,{className:p.a.ViewerNext,icon:d.e,size:"2x",onClick:e.next}),r.a.createElement(m.a,{className:p.a.ViewerPrev,icon:d.d,size:"2x",onClick:e.previous}),r.a.createElement(m.a,{className:p.a.ViewerExit,icon:d.i,size:"3x",onClick:e.close}))},E=t(592),f=t.n(E),_=function(e){var a=Object(n.useState)(null),t=Object(l.a)(a,2),c=t[0],i=t[1],o=Object(n.useState)(!1),s=Object(l.a)(o,2),m=s[0],d=s[1],u=null;m&&(u=r.a.createElement(g,{image:c.image.url,open:m,close:function(){d(!d)},previous:function(){var a=e.images.findIndex(function(e){return e.id===c.image.id}),t={image:e.images[e.images.length-1],imageIndex:e.images.length-1};if(a>0&&a<=e.images.length-1){var n={image:e.images[c.imageIndex-1],imageIndex:c.imageIndex-1};i(n)}else 0===a&&i(t)},next:function(){var a=e.images.findIndex(function(e){return e.id===c.image.id}),t={image:e.images[0],imageIndex:0};if(a>=0&&a<e.images.length-1){var n={image:e.images[c.imageIndex+1],imageIndex:c.imageIndex+1};i(n)}else a===e.images.length-1&&i(t)}}));var p=e.images.map(function(e,a){var t={image:e,imageIndex:a};return r.a.createElement("img",{src:e.url,key:e.id,onClick:function(){return function(e){i(e),d(!0)}(t)},alt:"project"})});return r.a.createElement(r.a.Fragment,null,u,r.a.createElement("div",{className:f.a.Gallery},p))},h=t(593),w=t.n(h),x=t(489),b=t(471),k=t(5),j=t(15),v=t(60),N=t.n(v),H=t(61),P=r.a.forwardRef(function(e,a){var t=e.bsPrefix,n=e.className,c=e.children,i=e.aspectRatio,o=Object(j.a)(e,["bsPrefix","className","children","aspectRatio"]),l=Object(H.a)(t,"embed-responsive"),s=r.a.Children.only(c);return r.a.createElement("div",Object(k.a)({ref:a},o,{className:N()(l,n,i&&l+"-"+i)}),r.a.cloneElement(s,{className:N()(s.props.className,l+"-item")}))});P.defaultProps={aspectRatio:"1by1"};var y=P,I=t(477),V=t.n(I),z=t(469);a.default=function(e){var a=Object(c.c)(function(e){return e.projects.currentProject}),t=Object(c.b)();Object(n.useEffect)(function(){var a=new URLSearchParams("".concat(e.location.search)).get("id");return a||e.history.push("/"),t(i.c(a)),function(){return t(i.g())}},[t,e.location.search,e.history,a]),Object(n.useEffect)(function(){a&&(document.title=a.title)},[a]);var l=r.a.createElement(o.a,null);if(a){var s=null===a.projectURL?null:r.a.createElement("a",{href:a.projectURL,target:"blank"},"Click Here to Visit"),m=new Date(a.created_at);l=r.a.createElement("div",{className:w.a.Project},r.a.createElement(b.a,{type:"projects",title:" "+a.title}),s,r.a.createElement(x.a,{size:"lg"}),r.a.createElement("span",{className:w.a.DateName},"By ",r.a.createElement("a",{href:"mailto:".concat(a.email)},a.user.username)," on"," ",m.toDateString()," at ",m.toLocaleTimeString()),r.a.createElement("hr",null),r.a.createElement(y,{aspectRatio:"21by9",style:{marginBottom:"15px"}},r.a.createElement("iframe",{src:a.videoURL,title:"demo-video"})),r.a.createElement("div",{className:w.a.ProjectContainer},r.a.createElement("div",{className:w.a.ProjectGallery},r.a.createElement("b",null,"Click to Enlarge"),r.a.createElement(_,{images:a.images})),r.a.createElement("div",{className:w.a.ProjectDescription},r.a.createElement(V.a,{source:a.body}))))}return r.a.createElement(z.a,null,l)}}}]);
//# sourceMappingURL=6.7fac6249.chunk.js.map