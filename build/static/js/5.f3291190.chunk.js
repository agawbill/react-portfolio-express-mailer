(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[5],{112:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(10),o=a(24),c=a(113),s=a.n(c),i=(a(114),a(115)),u=a.n(i);t.a=function(e){var t=null;switch(e.type){case"about me":t=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:u.a.Icon},r.a.createElement(l.a,{icon:o.a,size:"1x"})),r.a.createElement("span",{className:u.a.Header2},e.title));break;case"contact":t=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:u.a.Icon},r.a.createElement(l.a,{icon:o.g,size:"1x"})),r.a.createElement("span",{className:u.a.Header2},e.title));break;case"latest posts":t=r.a.createElement("div",{style:{paddingTop:"35px",paddingBottom:"20px",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"200px",maxHeight:"100%",backgroundSize:"100% 100%",backgroundImage:"url(".concat(s.a,")"),lineHeight:"140px",marginTop:"29px",marginBottom:"29px"}},r.a.createElement("span",{className:u.a.Icon},r.a.createElement(l.a,{icon:o.c,size:"1x"})),r.a.createElement("span",{className:u.a.Header4},e.title));break;case"latest projects":t=r.a.createElement("div",{style:{paddingTop:"35px",paddingBottom:"20px",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"200px",maxHeight:"100%",backgroundSize:"100% 100%",backgroundImage:"url(".concat(s.a,")"),lineHeight:"140px",marginTop:"29px",marginBottom:"29px"}},r.a.createElement("span",{className:u.a.Icon},r.a.createElement(l.a,{icon:o.h,size:"1x"})),r.a.createElement("span",{className:u.a.Header3},e.title));break;case"projects":t=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:u.a.Icon},r.a.createElement(l.a,{icon:o.h,size:"1x"})),r.a.createElement("span",{className:u.a.Header2},e.title));break;case"blogs":t=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:u.a.Icon},r.a.createElement(l.a,{icon:o.c,size:"1x"})),r.a.createElement("span",{className:u.a.Header2},e.title));break;default:t=null}return r.a.createElement("div",{className:u.a.Header},t)}},113:function(e,t,a){e.exports=a.p+"static/media/projectHeader2.531f39d2.png"},114:function(e,t,a){e.exports=a.p+"static/media/postHeader.70668384.png"},115:function(e,t,a){e.exports={Header:"Header_Header__3yweT",Icon:"Header_Icon__3FM6g",Header1:"Header_Header1__1XuJS",Header2:"Header_Header2__2OnET",Header3:"Header_Header3__1yhoq",Header4:"Header_Header4__2RR68"}},130:function(e,t,a){e.exports={PostSnapshot:"PostSnapshot_PostSnapshot__2pIaZ",PostBody:"PostSnapshot_PostBody__2ncqS",PostTitle:"PostSnapshot_PostTitle__3MTTY",Content:"PostSnapshot_Content__AnixP",CategoryContainer:"PostSnapshot_CategoryContainer__3dPAV",Category:"PostSnapshot_Category__3gvay",DateName:"PostSnapshot_DateName__7DjzU",PostWidth:"PostSnapshot_PostWidth__3K0hp"}},131:function(e,t,a){e.exports={Posts:"PostSnapshots_Posts__1v53J"}},132:function(e,t,a){e.exports={Projects:"ProjectSnapshots_Projects__1weGV",ProjectLanding:"ProjectSnapshots_ProjectLanding__3bJQg"}},133:function(e,t,a){e.exports={ProjectSnapshot:"ProjectSnapshot_ProjectSnapshot__2mxjv",ProjectBody:"ProjectSnapshot_ProjectBody__1xMWb",ProjectTitle:"ProjectSnapshot_ProjectTitle__33nL6",Content:"ProjectSnapshot_Content__1SI7_",CategoryContainer:"ProjectSnapshot_CategoryContainer__1olQa",Category:"ProjectSnapshot_Category__kh6j3",ProjectWidth:"ProjectSnapshot_ProjectWidth__18gyi"}},134:function(e,t,a){e.exports={Complete:"EmailForm_Complete__1JqCt",Error:"EmailForm_Error__2WBzL"}},139:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(14),o=a(132),c=a.n(o),s=a(133),i=a.n(s),u=Object(l.f)(function(e){var t=[i.a.ProjectSnapshot];return void 0!==e.location&&"/projects"===e.location.pathname&&(t=[i.a.ProjectSnapshot,i.a.ProjectWidth]),r.a.createElement("div",{className:t.join(" "),onClick:e.clicked},r.a.createElement("div",{className:i.a.ProjectBody,style:{backgroundImage:"url(".concat(e.image,")")}},r.a.createElement("div",{className:i.a.CategoryContainer},r.a.createElement("span",{className:i.a.Category},e.category))),r.a.createElement("div",{className:i.a.Content},r.a.createElement("div",{className:i.a.ProjectTitle},e.title),e.body.substring(0,150),"..."))});t.a=Object(l.f)(function(e){var t=e.projects.slice(0,6).map(function(t){return r.a.createElement(u,{image:t.images[0].url,category:t.category,body:t.body,title:t.title,user:t.user.username,email:t.email,dateCreated:t.created_at,id:t.id,clicked:function(){return a=t.id,n=t.slug,void e.history.push({pathname:"/projects/".concat(n),search:"?id=".concat(a)});var a,n},key:t.id})});return r.a.createElement("div",{className:c.a.Projects},t)})},140:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=(a(122),a(130)),o=a.n(l),c=a(14),s=Object(c.f)(function(e){var t=new Date(e.dateCreated),a=[o.a.PostSnapshot];return void 0!==e.location&&"/blog"===e.location.pathname&&(console.log("hlo"),a=[o.a.PostSnapshot,o.a.PostWidth]),r.a.createElement("div",{className:a.join(" "),onClick:e.clicked},r.a.createElement("div",{className:o.a.PostBody,style:{backgroundImage:"url(".concat(e.image,")")}},r.a.createElement("div",{className:o.a.CategoryContainer},r.a.createElement("span",{className:o.a.Category},e.category))),r.a.createElement("div",{className:o.a.Content},r.a.createElement("div",{className:o.a.PostTitle},e.title),r.a.createElement("div",{className:o.a.DateName},e.user," | ",t.toDateString()),r.a.createElement("p",null,r.a.createElement("i",null,e.headline)),e.body))}),i=a(131),u=a.n(i);t.a=Object(c.f)(function(e){var t=u.a.Posts;void 0!==e.location&&"/projects"===e.location.pathname&&(t=u.a.Posts);var a=e.posts.slice(0,6).map(function(t){return r.a.createElement(s,{image:t.images[0].url,category:t.category,body:t.body,title:t.title,user:t.user.username,email:t.email,headline:t.headline,dateCreated:t.created_at,clicked:function(){return a=t.id,n=t.slug,void e.history.push({pathname:"/blog/".concat(n),search:"?id=".concat(a)});var a,n},id:t.id,key:t.id})});return r.a.createElement("div",{className:t},a)})},141:function(e,t,a){"use strict";var n=a(5),r=a.n(n),l=a(11),o=a(15),c=a(13),s=a(0),i=a.n(s),u=a(149),m=a.n(u),g=a(154),d=a.n(g),E=a(153),p=a.n(E),O=a(135),h=a.n(O),b=a(136),j=a.n(b),f=a(134),y=a.n(f),v=a(49);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach(function(t){Object(c.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var D={error:!1,loading:!1,done:null},P=function(e,t){switch(t.type){case"SEND":return C({},e,{loading:!0});case"DONE":return C({},e,{loading:!1,done:!0});case"ERROR":return{loading:!1,error:!0};default:throw new Error("should not be reached")}},N=function(){var e=Object(s.useReducer)(P,D),t=Object(o.a)(e,2),a=t[0],n=t[1],c=v.a.url;return{sendRequest:Object(s.useCallback)(function(){var e=Object(l.a)(r.a.mark(function e(t,a){var l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:"SEND"}),e.next=4,fetch(c,{method:a,headers:{"Content-Type":"application/json"},mode:"no-cors",body:JSON.stringify(t)});case 4:return l=e.sent,e.next=7,l.json();case 7:e.sent,l.ok&&n({type:"DONE"}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),n({type:"ERROR"});case 15:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t,a){return e.apply(this,arguments)}}(),[c]),done:a.done,error:a.error,loading:a.loading}},S=a(35);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach(function(t){Object(c.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var H={firstName:"",lastName:"",email:"",subject:"",category:"",message:""},x=function(e,t){switch(t.type){case"FIRSTNAME":return B({},e,{firstName:t.value});case"LASTNAME":return B({},e,{lastName:t.value});case"EMAIL":return B({},e,{email:t.value});case"SUBJECT":return B({},e,{subject:t.value});case"CATEGORY":return B({},e,{category:t.value});case"MESSAGE":return B({},e,{message:t.value});case"RESET":return B({},H);default:throw new Error("we shouldn't have gotten here")}};t.a=function(e){var t=Object(s.useReducer)(x,H),a=Object(o.a)(t,2),n=a[0],c=a[1],u=N(),g=u.sendRequest,E=u.loading,O=u.done,b=u.error,f=Object(s.useState)(!0),v=Object(o.a)(f,2),_=v[0],C=v[1],D=null,P=null,A="Submit",B=function(){var e=Object(l.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:"".concat(n.firstName," ").concat(n.lastName),email:n.email,subject:n.subject,category:n.category,message:n.message},e.next=3,g(t,"POST");case 3:c({type:"RESET"});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return E&&(A=i.a.createElement(S.a,{size:"button"})),P=_?null:i.a.createElement("span",{className:y.a.Error},"All fields must be filled out"),O?D=i.a.createElement("span",{className:y.a.Complete},"Email sent successfully!"):b&&(D=i.a.createElement("span",{className:y.a.Error},"Sorry, an error occurred. Please try again.")),i.a.createElement(m.a,{onSubmit:function(e){e.preventDefault(),""===n.firstName||""===n.lastName||""===n.email||""===n.message||""===n.subject||""===n.category?(console.log("hello"),C(!1)):(C(!0),B())}},i.a.createElement(m.a.Label,null,"Name"),i.a.createElement(m.a.Group,null,i.a.createElement(m.a.Row,null,i.a.createElement(j.a,null,i.a.createElement(m.a.Control,{placeholder:"First name",value:n.firstName,onChange:function(e){return c({type:"FIRSTNAME",value:e.target.value.trim()})}})),i.a.createElement(j.a,null,i.a.createElement(m.a.Control,{placeholder:"Last name",value:n.lastName,onChange:function(e){return c({type:"LASTNAME",value:e.target.value.trim()})}})))),i.a.createElement(m.a.Group,{controlId:"formBasicEmail"},i.a.createElement(m.a.Label,null,"Email Address"),i.a.createElement(m.a.Control,{type:"email",placeholder:"Enter email",value:n.email,onChange:function(e){return c({type:"EMAIL",value:e.target.value.trim()})}}),i.a.createElement(m.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),i.a.createElement(m.a.Group,null,i.a.createElement(m.a.Label,null,"Subject"),i.a.createElement(m.a.Control,{placeholder:"Subject",value:n.subject,onChange:function(e){return c({type:"SUBJECT",value:e.target.value.trim()})}})),i.a.createElement(m.a.Group,null,i.a.createElement(m.a.Label,null,"Category"),i.a.createElement(m.a.Control,{as:"select",value:n.category,onChange:function(e){return c({type:"CATEGORY",value:e.target.value.trim()})}},i.a.createElement("option",null),i.a.createElement("option",null,"..."))),i.a.createElement(m.a.Group,null,i.a.createElement(m.a.Label,null,"Message"),i.a.createElement(p.a,null,i.a.createElement(h.a,{as:"textarea","aria-label":"With textarea",value:n.message,onChange:function(e){return c({type:"MESSAGE",value:e.target.value.trim()})}}))),i.a.createElement(d.a,{variant:"primary",type:"submit",style:{width:"80px"}},A),D,P)}},155:function(e,t,a){e.exports=a.p+"static/media/banner4.6914e116.png"},156:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAAFVBMVEX////6+vr9/f3+/v77+/v8/Pz5+fnUxEs+AAAD2klEQVR4Xu3cMW4UQRSE4ScbDrC7NvFgOMCCIAfsAxhxAu5/CYhcoJ7FTdbP+l5aqqCk1iTz66/vh/27bRbU6wvJY7Og6u1ucGwX1NVusrUL9jce+wX7G7d2wf7GY79gf+PWMhg3HnsG48ataVD14a/g1DMYN27tgtz7Q+5bz2DcuLUMxi/BsXVQ10/JuXWQL8Gpd5CN59ZBNp56B9l4bhvkPv0O7hsH2fj1cHNuHWTjfesg93Bh4fVDg8bdH/euLtzHu+FWa9Qh9/N8qXL95pBbs5Eh+Qbsvsfcmo0MyTdg/xORW7JRw/Rnx6/ZqGH6s+PXbGTIl/rnvcqAFRsZclPPXMYv2ahMr8nxazYq02fHr9moTJ8dv2ajMn12/IKNDPkxU/mcGWs1MuS2Zi4/ThdsVN7i7Htcs1F5i7Pvcb3G05DHyUb+Za/XqLzF2fe4ZqMyfXb8mo3K9NnxazYq02fHr9moTJ8dv2ajMn12/JqNyvTZ8Ws2avvfytWajXox9/IJOgQdgg5Bh6BD0CHoEHQIOgQdgg5Bh6BD0CHoEHQIOgRdT1BubDQF5cZGT1BubDQF5cZGT1BubDQF5cZGT1BubPQG5dJoDsql0RuUS6M5KJdGb1AujeagXBq9Qbk0moNyafQG5dJoDsql0RuUS6M5KJdGb1AujeagXBq9Qbk0moNyaXQH5dLoD8ql0R+U22rVQ9Ah6BB0CDoEHYIOQYegQ9Ah6BB0CDoEHYIOQYegQ9Ah6DjoOOg46DjoOOg46DjoOOg46DjoOOg46DjoOOg46DjoOOg46DjoOOg46BB0CDoEHYIOQYegQ9Ah6BB0CDoEHYIOQYegQ9Ah6BB0CDoOOg46DjoOOg46DjoOOg46DjoOOg46DjoOOg46DjoOOg46DjoOOg46DjoEHYIOQYegQ9Ah6BB0CDoEHYIOQYegQ9Ah6BB0CDoEHYKOg46DjoOOg46DjoOOg46DjoOOg46DjoOOg46DjoOOg46DjoOOg46DjoMOQYegQ9Ah6BB0CDoEHYIOQYegQ9Ah6BB0CDoEHYIOQYeg46DjoOOg46DjoOOg46DjoOOg46DjoOOg46DjoOOg46DjoOOg46DjoOOgQ9Ah6BB0CDoEHYIOQYegQ9Ah6BB0CDoEHYIOQYegQ9Ah6DjoOOg46DjoOOg46DjoOOg46DjoOOg46DjoOOg46DjoOOg46DjoOOg46BB0CDoEHYIOQYegQ9Ah6BB0CDoEHYIOQYegQ9Ah6BB0CDoOOg46DjoOOg46DjoOOg46DjoOOg46DjoOOg46DjoOOg46DjoOOg46DrpfMHoHl1WY49wAAAAASUVORK5CYII="},236:function(e,t,a){e.exports={Banner:"Landing_Banner__1dNXv",BannerContainer:"Landing_BannerContainer__2b-H3",ContentContainer:"Landing_ContentContainer__1Da5w",ContactForm:"Landing_ContactForm__SWFgv",ContactContainer:"Landing_ContactContainer__VukCX",NoPadding:"Landing_NoPadding__3OhFS",Projects:"Landing_Projects__2wNyF"}},237:function(e,t,a){e.exports={AboutLanding:"AboutLanding_AboutLanding__1xyY_",Fade:"AboutLanding_Fade__1b8ny",FadeIn:"AboutLanding_FadeIn__1z8TU"}},238:function(e,t,a){e.exports=a.p+"static/media/aboutHeader.225075eb.png"},261:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),o=a(155),c=a.n(o),s=(a(156),a(140)),i=a(139),u=a(236),m=a.n(u),g=a(15),d=a(237),E=a.n(d),p=a(18),O=(a(238),function(e){var t=[r.a.createElement("span",null,r.a.createElement("strong",null,r.a.createElement("i",null,"Hi! ")),"My name is",r.a.createElement("strong",null,r.a.createElement("i",null," Anthony Gawbill")),"...",r.a.createElement("br",null),"Here's a little about what"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"motivates"))," ","me, my"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"achievements")),", and what I"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"value")),"..."),r.a.createElement("span",null,"My values center around"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"hard work")),", creative"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"problem solving")),", feeding my"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"thirst for knowledge ")),"and"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"skill development")),", and forging meaningful"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"relationships ")),"with others based on a foundation of"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"trust")),","," ",r.a.createElement("strong",null,r.a.createElement("i",null,"empathy")),", and a willingness to"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"listen")),","," ",r.a.createElement("strong",null,r.a.createElement("i",null,"learn ")),"and forego judgment."),r.a.createElement("span",null,"Ultimately, I plan to use my"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"time and skills"))," ","to work toward"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"resolving"))," ","the more"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"challenging problems"))," ","facing our society, produce"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"accomplishments ")),"that"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"transcend my own self interests")),", and contribute"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"constructively"))," ","to the",r.a.createElement("strong",null,r.a.createElement("i",null," well-being of others")),"."),r.a.createElement("span",null,"I have a"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"Bachelor's Degree "))," ","in Psychology, and a"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"Master's Degree"))," ","in Clinical Health Psychology and Counseling. My career history involves",r.a.createElement("strong",null,r.a.createElement("i",null," helping vulnerable populations ")),"like the"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"sick"))," ","and"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"elderly ")),"(see my resume)."),r.a.createElement("span",null,"I"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"enjoy "))," ","and am"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"accustomed to environments ")),"where I am afforded the opportunity to"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"learn"))," ","and"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"grow ")),"as both a"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"self-starter ")),"and in"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"collaborative settings")),"."),r.a.createElement("span",null,r.a.createElement("center",null,r.a.createElement("strong",null,r.a.createElement("i",null,"Thank you! ")),"If you would like to read more about me,"," ",r.a.createElement("b",null,r.a.createElement(p.b,{to:"/about"},"click here")),"!"))];return Object(n.useEffect)(function(){e.length(t.length)},[e,t.length]),r.a.createElement("div",null,t[e.index])}),h=function(e){var t=Object(n.useState)(null),a=Object(g.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(1),s=Object(g.a)(c,2),i=s[0],u=s[1],m=Object(n.useState)(500),d=Object(g.a)(m,2),p=d[0],h=d[1],b=Object(n.useState)(0),j=Object(g.a)(b,2),f=j[0],y=j[1];Object(n.useEffect)(function(){var e=setInterval(function(){i<2*l?u(function(e){return e+1}):(h(500),u(1)),i%2===0?h(1200):(h(8e3),y(function(e){return e+1}))},p);return 2===i&&y(0),function(){return clearInterval(e)}},[i,p,l]);var v=Object(n.useCallback)(function(e){o(e)},[]),_=null;return i%2===0&&null!==l&&(_=[E.a.Fade,E.a.FadeIn]),r.a.createElement("div",{className:E.a.AboutLanding},r.a.createElement("div",{className:null===_?E.a.Fade:_.join(" ")},r.a.createElement(O,{index:f,length:v,imageUrl:e.imageUrl})))},b=a(112),j=a(141),f=a(108),y=a(106),v=a(107);t.default=function(e){var t=Object(l.c)(function(e){return e.blogs.posts}),a=Object(l.c)(function(e){return e.projects.projects}),o=Object(l.c)(function(e){return e.content.aboutData});return Object(n.useEffect)(function(){document.title="Anthony Gawbill"}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:m.a.BannerContainer},r.a.createElement(f.a,{fluid:!0},r.a.createElement(y.a,{className:m.a.NoPadding},r.a.createElement(v.a,{className:m.a.NoPadding},r.a.createElement("div",{className:m.a.Banner,style:{backgroundImage:"url(".concat(c.a,")")}},r.a.createElement(h,{imageUrl:o.images[0].url})))))),r.a.createElement("div",{className:m.a.ContentContainer,style:{boxShadow:"0 4px 6px -6px #222"}},r.a.createElement(f.a,{fluid:!0},r.a.createElement(y.a,null,r.a.createElement(v.a,{lg:3,className:m.a.ContactContainer},r.a.createElement("center",null,r.a.createElement("h2",{className:m.a.ContactForm},"Contact")),r.a.createElement(j.a,null)),r.a.createElement(v.a,{lg:5},r.a.createElement("center",null,r.a.createElement(b.a,{title:"   Latest Posts",type:"latest posts"})),r.a.createElement(s.a,{posts:t})),r.a.createElement(v.a,{lg:4},r.a.createElement("center",null,r.a.createElement(b.a,{title:"   Latest Projects",type:"latest projects"})),r.a.createElement(i.a,{projects:a}))))))}}}]);
//# sourceMappingURL=5.f3291190.chunk.js.map