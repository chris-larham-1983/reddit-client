(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{145:function(e,t,a){},146:function(e,t,a){},148:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(12),o=a.n(r),s=(a(57),a(5)),l=(a(63),a(49)),i=a(24),u=a(7),m=a.n(u),d=(a(33),a(13)),p=a(23),b=a.n(p),E=function(e,t){for(var a=["k","M","G","T","P","E","Z","Y"],n=a.length-1;n>=0;n-=1){var c=Math.pow(1e3,n+1);if(e<=-c||e>=c)return+(e/c).toFixed(t)+a[n]}return e},f=(a(65),function(e){return c.a.createElement("div",{className:"card ".concat(e.className)},e.children)}),v=a(45),g=a.n(v),h=(a(145),a(146),function(e){var t=e.name;return c.a.createElement("img",{src:"https://avatars.dicebear.com/api/bottts/".concat(t,".svg"),alt:"".concat(t," profile"),className:"avatar-profile-image"})}),y=function(e){var t=e.comment;return c.a.createElement("div",{className:"comment"},c.a.createElement("div",{className:"comment-metadata"},c.a.createElement(h,{name:t.author}),c.a.createElement("p",{className:"comment-author"},t.author),c.a.createElement("p",{className:"comment-created-time"},b.a.unix(t.created_utc).fromNow())),c.a.createElement(g.a,{source:t.body}))},N=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],o=a[1],s=e.post,l=e.onToggleComments,u=function(e){o(e===r?0:1===e?1:-1)};return c.a.createElement("article",{key:s.id},c.a.createElement(f,null,c.a.createElement("div",{className:"post-wrapper"},c.a.createElement("div",{className:"post-votes-container"},c.a.createElement("button",{type:"button",className:"icon-action-button up-vote ".concat(1===r&&"active"),onClick:function(){return u(1)},"aria-label":"Up vote"},1===r?c.a.createElement(d.d,{className:"icon-action"}):c.a.createElement(d.c,{className:"icon-action"})),c.a.createElement("p",{className:"post-votes-value ".concat(1===r?"up-vote":-1===r?"down-vote":"")},E(s.ups,1)),c.a.createElement("button",{type:"button",className:"icon-action-button down-vote ".concat(-1===r&&"active"),onClick:function(){return u(-1)},"aria-label":"Down vote"},-1===r?c.a.createElement(d.b,{className:"icon-action"}):c.a.createElement(d.a,{className:"icon-action"}))),c.a.createElement("div",{className:"post-container"},c.a.createElement("h3",{className:"post-title"},s.title),c.a.createElement("div",{className:"post-link-container"},c.a.createElement("a",{href:s.url,target:"_self",style:{color:"crimson"}},"Read Full Post")),c.a.createElement("div",{className:"post-details"},c.a.createElement("span",{className:"author-details"},c.a.createElement(h,{name:s.author}),c.a.createElement("span",{className:"author-username"},s.author)),c.a.createElement("span",null,b.a.unix(s.created_utc).fromNow()),c.a.createElement("span",{className:"post-comments-container"},c.a.createElement("button",{type:"button",className:"icon-action-button ".concat(s.showingComments&&"showing-comments"),onClick:function(){return l(s.permalink)},"aria-label":"Show comments"},c.a.createElement(d.e,{className:"icon-action"})),E(s.num_comments,1))),s.errorComments?c.a.createElement("div",null,c.a.createElement("h3",null,"Error loading comments")):s.loadingComments?c.a.createElement("div",null,c.a.createElement(m.a,null),c.a.createElement(m.a,null),c.a.createElement(m.a,null),c.a.createElement(m.a,null)):s.showingComments?c.a.createElement("div",null,s.comments.map((function(e){return c.a.createElement(y,{comment:e,key:e.id})}))):null))))},S=(a(148),function(e,t){return Math.floor(Math.random()*t)+e}),C=function(){return c.a.createElement("article",{className:"post"},c.a.createElement("div",{className:"post-votes-container"},c.a.createElement("button",{type:"button",className:"icon-action-button up-vote","aria-label":"Up vote"},c.a.createElement(d.c,{className:"icon-action"})),c.a.createElement(m.a,{className:"post-votes-value post-votes-value-loading"}),c.a.createElement("button",{type:"button",className:"icon-action-button down-vote","aria-label":"Down vote"},c.a.createElement(d.a,{className:"icon-action"}))),c.a.createElement("div",{className:"post-container"},c.a.createElement("h3",{className:"post-title"},c.a.createElement(m.a,{width:S(100,200)})),c.a.createElement("div",{className:"post-image-container"},c.a.createElement(m.a,{height:250})),c.a.createElement("div",{className:"post-details"},c.a.createElement("span",null,c.a.createElement(m.a,{width:S(20,50)})),c.a.createElement("span",null,c.a.createElement(m.a,{width:S(50,100)})),c.a.createElement("span",{className:"post-comments-container"},c.a.createElement("button",{type:"button",className:"icon-action-button","aria-label":"Show comments"},c.a.createElement(d.e,{className:"icon-action"})),c.a.createElement(m.a,{width:S(10,50)})))))},w=a(3),k=a.n(w),j=a(31),x=a(15),O=a(17),T=a(10),D="https://www.reddit.com",P=function(){var e=Object(x.a)(k.a.mark((function e(t){var a,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(D).concat(t,".json"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n.data.children.map((function(e){return e.data})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(x.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(D,"/subreddits.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a.data.children.map((function(e){return e.data})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(x.a)(k.a.mark((function e(t){var a,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(D).concat(t,".json"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n[1].data.children.map((function(e){return e.data})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L={posts:[],error:!1,isLoading:!1,searchTerm:"",selectedSubreddit:localStorage.getItem("selectedSubreddit")||"/r/Coding/"},_=Object(O.b)({name:"redditPosts",initialState:L,reducers:{setPosts:function(e,t){e.posts=t.payload},startGetPosts:function(e){e.isLoading=!0,e.error=!1},getPostsSuccess:function(e,t){e.isLoading=!1,e.posts=t.payload,document.getElementsByTagName("H2")[0].scrollIntoView(!0)},getPostsFailed:function(e){e.isLoading=!1,e.error=!0},setSearchTerm:function(e,t){e.searchTerm=t.payload},setSelectedSubreddit:function(e,t){e.selectedSubreddit=t.payload,e.searchTerm=""},toggleShowingComments:function(e,t){e.posts[t.payload].showingComments=!e.posts[t.payload].showingComments},startGetComments:function(e,t){e.posts[t.payload].showingComments=!e.posts[t.payload].showingComments,e.posts[t.payload].showingComments&&(e.posts[t.payload].loadingComments=!0,e.posts[t.payload].error=!1)},getCommentsSuccess:function(e,t){e.posts[t.payload.index].loadingComments=!1,e.posts[t.payload.index].comments=t.payload.comments},getCommentsFailed:function(e,t){e.posts[t.payload].loadingComments=!1,e.posts[t.payload].error=!0}}}),G=_.actions,R=G.getPostsFailed,M=G.getPostsSuccess,V=G.startGetPosts,B=G.setSearchTerm,H=G.setSelectedSubreddit,J=G.getCommentsFailed,U=G.getCommentsSuccess,z=G.startGetComments,A=_.reducer,Y=function(e){return function(){var t=Object(x.a)(k.a.mark((function t(a){var n,c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(V()),t.next=4,P(e);case 4:n=t.sent,c=n.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{showingComments:!1,comments:[],loadingComments:!1,errorComments:!1})})),a(M(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a(R());case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},Z=function(e){return e.reddit.selectedSubreddit},q=Object(T.a)([function(e){return e.reddit.posts},function(e){return e.reddit.searchTerm}],(function(e,t){return""!==t?e.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())})):e})),K=(a(150),a(48)),Q=(a(151),a(47)),W=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],o=a[1],l=Object(s.c)((function(e){return e.reddit.searchTerm})),u=e.selectedSubreddit,m=Object(s.b)();Object(n.useEffect)((function(){o(l)}),[l]);var d=function(e){e.preventDefault(),m(B(r))};return c.a.createElement("header",null,c.a.createElement("div",{className:"logo"},c.a.createElement(Q.a,{className:"logo-icon"}),c.a.createElement("p",null,"Reddit",c.a.createElement("span",null,"Minimal"))),c.a.createElement("form",{className:"search",onSubmit:d},c.a.createElement("input",{type:"text",placeholder:"Search ".concat(u),value:r,onChange:function(e){o(e.target.value)},"aria-label":"Search posts"}),c.a.createElement("button",{type:"submit",onClick:d,"aria-label":"Search"},c.a.createElement(K.a,null))))},X=function(){var e=Object(s.c)((function(e){return e.reddit})),t=e.isLoading,a=e.error,r=e.searchTerm,o=e.selectedSubreddit,i=Object(s.c)(q),u=Object(s.b)();Object(n.useEffect)((function(){""!==o&&u(Y(o))}),[o]);var m=function(e){return function(t){u(function(e,t){return function(){var a=Object(x.a)(k.a.mark((function a(n){var c;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n(z(e)),a.next=4,F(t);case 4:c=a.sent,n(U({index:e,comments:c})),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),n(J(e));case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(e,t))}};return t?c.a.createElement(l.a,{animation:"zoom"},Array(S(3,10)).fill(c.a.createElement(C,null))):a?c.a.createElement("div",{className:"error"},c.a.createElement("h2",null,"Failed to load posts."),c.a.createElement("button",{type:"button",onClick:function(){return u(Y(o))}},"Try again")):0===i.length?c.a.createElement("div",{className:"error"},c.a.createElement("h2",null,'No posts matching "',r,'"'),c.a.createElement("button",{type:"button",onClick:function(){return u(B(""))}},"Go home")):c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",null,c.a.createElement("button",{type:"button",onClick:function(){document.getElementsByTagName("H2")[0].scrollIntoView()}},c.a.createElement("span",null,c.a.createElement("u",null,"View Popular Subreddits")))),c.a.createElement("h1",null,c.a.createElement("span",{className:"headingText"},"Posts for ",c.a.createElement("span",{className:"topic"},o))),c.a.createElement(W,{selectedSubreddit:o}),i.map((function(e,t){return c.a.createElement(N,{key:e.id,post:e,onToggleComments:m(t)})})))},$=Object(O.b)({name:"subreddits",initialState:{subreddits:[],error:!1,isLoading:!1},reducers:{startGetSubreddits:function(e){e.isLoading=!0,e.error=!1},getSubredditsSuccess:function(e,t){e.isLoading=!1,e.subreddits=t.payload},getSubredditsFailed:function(e){e.isLoading=!1,e.error=!0}}}),ee=$.actions,te=ee.getSubredditsFailed,ae=ee.getSubredditsSuccess,ne=ee.startGetSubreddits,ce=$.reducer,re=function(e){return e.subreddits.subreddits},oe=(a(152),function(){var e=Object(s.b)(),t=Object(s.c)(re),a=Object(s.c)(Z);return Object(n.useEffect)((function(){e(function(){var e=Object(x.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(ne()),e.next=4,I();case 4:a=e.sent,t(ae(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(te());case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]),c.a.createElement(f,{className:"subreddit-card"},c.a.createElement("h2",null,c.a.createElement("span",null,"Popular Subreddits")),c.a.createElement("button",{className:"blockDisplay",onClick:function(){document.getElementsByTagName("H1")[0].scrollIntoView()}},"View Posts for ",c.a.createElement("span",null,a)),c.a.createElement("ul",{className:"subreddits-list"},t.map((function(t){return c.a.createElement("li",{key:t.id,className:"".concat(a===t.url&&"selected-subreddit")},c.a.createElement("button",{type:"button",onClick:function(){e(H(t.url)),localStorage.setItem("selectedSubreddit",t.url)}},c.a.createElement("img",{src:t.icon_img||"https://avatars.dicebear.com/api/avataaars/".concat(t.display_name,".svg"),alt:"".concat(t.display_name),className:"subreddit-icon",style:{border:"3px solid ".concat(t.primary_color)}}),t.display_name))})),c.a.createElement("li",{key:"coding",className:"".concat("/r/Coding/"===a&&"selected-subreddit")},c.a.createElement("button",{type:"button",onClick:function(){e(H("/r/Coding/")),localStorage.setItem("selectedSubreddit","/r/Coding/")},className:"topic1"},c.a.createElement("span",null,"Coding Discussion"))),c.a.createElement("li",{key:"conspiracy",className:"".concat("/r/Conspiracy/"===a&&"selected-subreddit")},c.a.createElement("button",{type:"button",onClick:function(){e(H("/r/Conspiracy/")),localStorage.setItem("selectedSubreddit","/r/Conspiracy/")},className:"topic2"},c.a.createElement("span",null,"Conspiracy Theories"))),c.a.createElement("li",{key:"coronavirus",className:"".concat("/r/Coronavirus/"===a&&"selected-subreddit")},c.a.createElement("button",{type:"button",onClick:function(){e(H("/r/Coronavirus/")),localStorage.setItem("selectedSubreddit","/r/Coronavirus/")},className:"topic3"},c.a.createElement("span",null,"Coronavirus Discussion"))),c.a.createElement("li",{key:"debateEvolution",className:"".concat("/r/DebateEvolution/"===a&&"selected-subreddit")},c.a.createElement("button",{type:"button",onClick:function(){e(H("/r/DebateEvolution/")),localStorage.setItem("selectedSubreddit","/r/DebateEvolution/")},className:"topic4"},c.a.createElement("span",null,"Evolutionary Debate"))),c.a.createElement("li",{key:"debateReligion",className:"".concat("/r/DebateReligion/"===a&&"selected-subreddit")},c.a.createElement("button",{type:"button",onClick:function(){e(H("/r/DebateReligion/")),localStorage.setItem("selectedSubreddit","/r/DebateReligion/")},className:"topic5"},c.a.createElement("span",null,"Religious Debate"))),c.a.createElement("li",{key:"soccer",className:"".concat("/r/Soccer/"===a&&"selected-subreddit")},c.a.createElement("button",{type:"button",onClick:function(){e(H("/r/Soccer/")),localStorage.setItem("selectedSubreddit","/r/Soccer/")},className:"topic6"},c.a.createElement("span",null,"Soccer Chat")))))});var se=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("main",null,c.a.createElement(X,null),c.a.createElement(oe,null)))},le=a(9),ie=Object(O.a)({reducer:Object(le.c)({reddit:A,subreddits:ce})});o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,{store:ie},c.a.createElement(se,null))),document.getElementById("root"))},33:function(e,t,a){},52:function(e,t,a){e.exports=a(153)},57:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.fd3eded5.chunk.js.map