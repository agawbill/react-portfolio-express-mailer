(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[4],{105:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(10),c=a(23),o=a(106),s=a.n(o);t.a=function(e){var t=null;switch(e.type){case"about me":t=l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:s.a.Icon},l.a.createElement(r.a,{icon:c.a,size:"1x"})),l.a.createElement("span",{className:s.a.Header2},e.title));break;case"contact":t=l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:s.a.Icon},l.a.createElement(r.a,{icon:c.g,size:"1x"})),l.a.createElement("span",{className:s.a.Header2},e.title));break;case"latest posts":t=l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:s.a.Icon},l.a.createElement(r.a,{icon:c.c,size:"1x"})),l.a.createElement("span",{className:s.a.Header2},e.title));break;case"latest projects":case"projects":t=l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:s.a.Icon},l.a.createElement(r.a,{icon:c.h,size:"1x"})),l.a.createElement("span",{className:s.a.Header2},e.title));break;case"blogs":t=l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:s.a.Icon},l.a.createElement(r.a,{icon:c.c,size:"1x"})),l.a.createElement("span",{className:s.a.Header2},e.title));break;default:t=null}return l.a.createElement("div",{className:s.a.Header},t)}},106:function(e,t,a){e.exports={Header:"Header_Header__3yweT",Icon:"Header_Icon__3FM6g",Header1:"Header_Header1__1XuJS",Header2:"Header_Header2__2OnET"}},118:function(e,t,a){e.exports={PostSnapshot:"PostSnapshot_PostSnapshot__2pIaZ",PostSnapshotOverlay:"PostSnapshot_PostSnapshotOverlay__oLtvg",Category:"PostSnapshot_Category__3gvay",PostSnapshotImage:"PostSnapshot_PostSnapshotImage__1wdWB",PostSnapshotIndicator:"PostSnapshot_PostSnapshotIndicator__2xe5s",PostBody:"PostSnapshot_PostBody__2ncqS",PostHeadline:"PostSnapshot_PostHeadline__19uM7",DateName:"PostSnapshot_DateName__7DjzU"}},119:function(e,t,a){e.exports={ProjectSnapshot:"ProjectSnapshot_ProjectSnapshot__2mxjv",WidthLanding:"ProjectSnapshot_WidthLanding__1Me4T",WidthProjects:"ProjectSnapshot_WidthProjects__2jIAc",ProjectSnapshotIndicator:"ProjectSnapshot_ProjectSnapshotIndicator__2q5Eo",ProjectBody:"ProjectSnapshot_ProjectBody__1xMWb",ProjectTitleText:"ProjectSnapshot_ProjectTitleText__2sEhO",ProjectDescText:"ProjectSnapshot_ProjectDescText__2I2mG"}},122:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(14),c=a(119),o=a.n(c),s=Object(r.f)(function(e){var t=[o.a.ProjectSnapshot,o.a.WidthLanding];return void 0!==e.location&&"/projects"===e.location.pathname&&(t=[o.a.ProjectSnapshot,o.a.WidthProjects]),l.a.createElement("div",{className:t.join(" "),onClick:e.clicked},l.a.createElement("div",{className:o.a.ProjectSnapshotIndicator}),l.a.createElement("div",{className:o.a.ProjectBody,style:{backgroundImage:"url(".concat(e.image,")")}},l.a.createElement("div",{className:o.a.ProjectTitleText},l.a.createElement("span",null,e.title)),l.a.createElement("div",{className:o.a.ProjectDescText},l.a.createElement("span",null,e.body.substring(0,100),"..."))))});t.a=Object(r.f)(function(e){var t=e.projects.map(function(t){return l.a.createElement(s,{image:t.images[0].url,category:t.category,body:t.body,title:t.title,user:t.user.username,email:t.email,dateCreated:t.created_at,id:t.id,clicked:function(){return a=t.id,n=t.slug,void e.history.push({pathname:"/projects/".concat(n),search:"?id=".concat(a)});var a,n},key:t.id})});return l.a.createElement(l.a.Fragment,null,t)})},123:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(110),c=a.n(r),o=a(118),s=a.n(o),i=Object(n.memo)(function(e){var t=new Date(e.dateCreated);return l.a.createElement("div",{className:s.a.PostSnapshot,onClick:e.clicked},l.a.createElement("div",{className:s.a.PostSnapshotImage,style:{backgroundImage:"url(".concat(e.image,")")}}),l.a.createElement("div",{className:s.a.PostSnapshotIndicator}),l.a.createElement("div",{className:s.a.PostBody,style:{backgroundImage:"url(".concat(e.image,")")}},l.a.createElement("div",{className:s.a.PostSnapshotOverlay},l.a.createElement("h4",{className:s.a.Category},e.category),l.a.createElement("h3",null,e.title),l.a.createElement("h4",{className:s.a.PostHeadline},l.a.createElement(c.a,{source:e.headline})),l.a.createElement("h6",null,l.a.createElement(c.a,{source:"".concat(e.body.substring(0,200),"...")})),l.a.createElement("div",{className:s.a.DateName},e.user," | ",t.toDateString()))))}),m=a(14);t.a=Object(m.f)(function(e){var t=e.posts.map(function(t){return l.a.createElement(i,{image:t.images[0].url,category:t.category,body:t.body,title:t.title,user:t.user.username,email:t.email,headline:t.headline,dateCreated:t.created_at,clicked:function(){return a=t.id,n=t.slug,void e.history.push({pathname:"/blog/".concat(n),search:"?id=".concat(a)});var a,n},id:t.id,key:t.id})});return l.a.createElement(l.a.Fragment,null,t)})},131:function(e,t,a){e.exports=a.p+"static/media/banner2.2c63847a.jpeg"},211:function(e,t,a){e.exports={Banner:"Landing_Banner__1dNXv"}},212:function(e,t,a){e.exports={AboutLanding:"AboutLanding_AboutLanding__1xyY_",Fade:"AboutLanding_Fade__1b8ny",FadeIn:"AboutLanding_FadeIn__1z8TU"}},226:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),c=a(131),o=a.n(c),s=a(123),i=a(122),m=a(211),u=a.n(m),d=a(15),E=a(212),g=a.n(E),p=a(17),h=function(e){var t=[l.a.createElement("span",null,l.a.createElement("img",{src:e.imageUrl,align:"left",alt:"portrait of me"})," ",l.a.createElement("strong",null,l.a.createElement("i",null,"Hi!")),l.a.createElement("br",null),"My name is",l.a.createElement("strong",null,l.a.createElement("i",null," Anthony Gawbill")),"...",l.a.createElement("br",null),"Here's a little about what"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"motivates"))," ","me, my"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"achievements")),", and what I"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"value")),"..."),l.a.createElement("span",null,"My values center around"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"hard work")),", creative"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"problem solving")),", feeding my"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"thirst for knowledge ")),"and"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"skill development")),", and forging meaningful"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"relationships ")),"with others based on a foundation of"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"trust")),","," ",l.a.createElement("strong",null,l.a.createElement("i",null,"empathy")),", and a willingness to"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"listen")),","," ",l.a.createElement("strong",null,l.a.createElement("i",null,"learn ")),"and forego judgment."),l.a.createElement("span",null,"Ultimately, I plan to use my"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"time and skills"))," ","to work toward"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"resolving"))," ","the more"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"challenging problems"))," ","facing our society, produce"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"accomplishments ")),"that"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"transcend my own self interests")),", and contribute"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"constructively"))," ","to the",l.a.createElement("strong",null,l.a.createElement("i",null," well-being of others")),"."),l.a.createElement("span",null,"I have a"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"Bachelor's Degree "))," ","in Psychology, and a"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"Master's Degree"))," ","in Clinical Health Psychology and Counseling. My career history involves",l.a.createElement("strong",null,l.a.createElement("i",null," helping vulnerable populations ")),"like the"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"sick"))," ","and"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"elderly ")),"(see my resume)."),l.a.createElement("span",null,"I"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"enjoy "))," ","and am"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"accustomed to environments ")),"where I am afforded the opportunity to"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"learn"))," ","and"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"grow ")),"as both a"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"self-starter ")),"and in"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"collaborative settings")),"."),l.a.createElement("span",null,l.a.createElement("center",null,l.a.createElement("strong",null,l.a.createElement("i",null,"Thank you! ")),"If you would like to read more about me,"," ",l.a.createElement("b",null,l.a.createElement(p.b,{to:"/about"},"click here")),"!"))];return Object(n.useEffect)(function(){e.length(t.length)},[e,t.length]),l.a.createElement(l.a.Fragment,null,t[e.index])},_=function(e){var t=Object(n.useState)(null),a=Object(d.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(1),s=Object(d.a)(o,2),i=s[0],m=s[1],u=Object(n.useState)(500),E=Object(d.a)(u,2),p=E[0],_=E[1],b=Object(n.useState)(0),j=Object(d.a)(b,2),y=j[0],v=j[1];Object(n.useEffect)(function(){var e=setInterval(function(){i<2*r?m(function(e){return e+1}):(_(500),m(1)),i%2===0?_(1200):(_(8e3),v(function(e){return e+1}))},p);return 2===i&&v(0),function(){return clearInterval(e)}},[i,p,r]);var f=null;return i%2===0&&null!==r&&(f=[g.a.Fade,g.a.FadeIn]),l.a.createElement("div",{className:g.a.AboutLanding},l.a.createElement("div",{className:null===f?g.a.Fade:f.join(" ")},l.a.createElement(h,{index:y,length:function(e){c(e)},imageUrl:e.imageUrl})))},b=a(105),j=a(102),y=a(103);t.default=function(e){var t=Object(r.c)(function(e){return e.blogs.posts}),a=Object(r.c)(function(e){return e.projects.projects}),n=Object(r.c)(function(e){return e.content.aboutData});return l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a,null,l.a.createElement(y.a,null,l.a.createElement("div",{className:u.a.Banner,style:{backgroundImage:"url(".concat(o.a,")")}},l.a.createElement(_,{imageUrl:n.images[0].url})))),l.a.createElement(j.a,{className:u.a.Landing},l.a.createElement(y.a,{lg:8},l.a.createElement(b.a,{title:"  Latest Posts",type:"latest posts"}),l.a.createElement(s.a,{posts:t})),l.a.createElement(y.a,{lg:4},l.a.createElement(b.a,{title:"  Latest Projects",type:"latest projects"}),l.a.createElement(i.a,{projects:a}))))}}}]);
//# sourceMappingURL=4.791a0d36.chunk.js.map