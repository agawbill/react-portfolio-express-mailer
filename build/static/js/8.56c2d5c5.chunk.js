(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[8],{470:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(38),o=t(71),s=(t(471),t(472),t(473)),l=t.n(s);a.a=function(e){var a=null;switch(e.type){case"about me":a=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:l.a.Icon},r.a.createElement(c.a,{icon:o.a,size:"1x"})),r.a.createElement("span",{className:l.a.Header2},e.title));break;case"contact":a=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:l.a.Icon},r.a.createElement(c.a,{icon:o.g,size:"1x"})),r.a.createElement("span",{className:l.a.Header2},e.title));break;case"latest posts":a=r.a.createElement("div",{className:l.a.protector},r.a.createElement("h1",{className:l.a.ribbon},r.a.createElement("strong",{className:l.a.ribbonContent},r.a.createElement("span",{className:l.a.Icon},r.a.createElement(c.a,{icon:o.c,size:"1x"})),r.a.createElement("span",{className:l.a.dropShadow},e.title))));break;case"latest projects":a=r.a.createElement("div",{className:l.a.protector},r.a.createElement("h1",{className:l.a.ribbon},r.a.createElement("strong",{className:l.a.ribbonContent},r.a.createElement("span",{className:l.a.Icon},r.a.createElement(c.a,{icon:o.h,size:"1x"})),r.a.createElement("span",{className:l.a.dropShadow},e.title))));break;case"projects":a=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:l.a.Icon},r.a.createElement(c.a,{icon:o.h,size:"1x"})),r.a.createElement("span",{className:l.a.Header2},e.title));break;case"blogs":a=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:l.a.Icon},r.a.createElement(c.a,{icon:o.c,size:"1x"})),r.a.createElement("span",{className:l.a.Header2},e.title));break;default:a=null}return r.a.createElement("div",{className:l.a.Header},a)}},471:function(e,a,t){e.exports=t.p+"static/media/projectHeader2.531f39d2.png"},472:function(e,a,t){e.exports=t.p+"static/media/postHeader.70668384.png"},473:function(e,a,t){e.exports={Header:"Header_Header__3yweT",Icon:"Header_Icon__3FM6g",Header1:"Header_Header1__1XuJS",Header2:"Header_Header2__2OnET",Header3:"Header_Header3__1yhoq",Header4:"Header_Header4__2RR68",protector:"Header_protector__2D_pi",ribbon:"Header_ribbon__1D04P",ribbonContent:"Header_ribbonContent__wUzO1",dropShadow:"Header_dropShadow__387aj"}},486:function(e,a,t){e.exports={Projects:"ProjectSnapshots_Projects__1weGV",ProjectLanding:"ProjectSnapshots_ProjectLanding__3bJQg",AddMargin:"ProjectSnapshots_AddMargin__1daO6"}},487:function(e,a,t){e.exports={ProjectSnapshot:"ProjectSnapshot_ProjectSnapshot__2mxjv",ProjectBody:"ProjectSnapshot_ProjectBody__1xMWb",ProjectTitle:"ProjectSnapshot_ProjectTitle__33nL6",Content:"ProjectSnapshot_Content__1SI7_",CategoryContainer:"ProjectSnapshot_CategoryContainer__1olQa",Category:"ProjectSnapshot_Category__kh6j3",AddMargin:"ProjectSnapshot_AddMargin__sCKp-",ProjectWidth:"ProjectSnapshot_ProjectWidth__18gyi"}},491:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(51),o=t(486),s=t.n(o),l=t(487),i=t.n(l),d=Object(c.g)(function(e){var a=[i.a.ProjectSnapshot];void 0!==e.location&&"/projects"===e.location.pathname&&(a=[i.a.ProjectSnapshot,i.a.ProjectWidth,i.a.AddMargin]);return r.a.createElement("div",{className:a.join(" "),onClick:e.clicked},r.a.createElement("div",{className:i.a.ProjectBody,style:{backgroundImage:"url(".concat(e.image,")")}},r.a.createElement("div",{className:i.a.CategoryContainer},r.a.createElement("span",{className:i.a.Category},e.category))),r.a.createElement("div",{className:i.a.Content},r.a.createElement("div",{className:i.a.ProjectTitle},e.title),function(a){var t=e.body.split(" ");if(t.length<a)return t.join(" ");var n=t[a-1].split("").slice(-1)[0];return-1!==[".","!",",","?",";",":","&"].indexOf(n)?"".concat(t.slice(0,a+1).join(" "),"..."):"".concat(t.slice(0,a).join(" "),"...")}(40)))});a.a=Object(c.g)(function(e){var a=s.a.Projects;void 0!==e.location&&"/projects"===e.location.pathname&&(a=[s.a.Projects,s.a.AddMargin].join(" "));var t=e.projects.slice(0,6).map(function(a){return r.a.createElement(d,{image:a.images[0].url,category:a.category,body:a.body,title:a.title,user:a.user.username,email:a.email,dateCreated:a.created_at,id:a.id,clicked:function(){return t=a.id,n=a.slug,void e.history.push({pathname:"/projects/".concat(n),search:"?id=".concat(t)});var t,n},key:a.id})});return r.a.createElement("div",{className:a},t)})},594:function(e,a,t){},599:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(72),o=t(491),s=t(470),l=t(594),i=t.n(l),d=t(468);a.default=function(e){var a=Object(c.c)(function(e){return e.content.projectsData.title}),t=Object(c.c)(function(e){return e.content.projectsData.content}),l=Object(c.c)(function(e){return e.projects.selectedProjects}),m=Object(c.c)(function(e){return e.projects.remainingProjects});return Object(n.useEffect)(function(){document.title=a}),r.a.createElement(d.a,null,r.a.createElement(s.a,{type:"projects",title:" Projects"}),t,r.a.createElement("hr",null),r.a.createElement("div",{className:i.a.Projects},r.a.createElement(o.a,{projects:l})),r.a.createElement("hr",null),r.a.createElement("div",{className:i.a.Projects},r.a.createElement(o.a,{projects:m})))}}}]);
//# sourceMappingURL=8.56c2d5c5.chunk.js.map