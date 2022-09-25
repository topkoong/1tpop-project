(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41],{6791:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/artist/experiment",function(){return s(5222)}])},6488:function(e,t,s){"use strict";var a=s(1527),n=function(){return(0,a.jsx)("div",{className:"spinner-container",children:(0,a.jsxs)("div",{className:"loader p-5 rounded-full flex space-x-3",children:[(0,a.jsx)("div",{className:"w-5 h-5 bg-black rounded-full animate-bounce"}),(0,a.jsx)("div",{className:"w-5 h-5 bg-black rounded-full animate-bounce"}),(0,a.jsx)("div",{className:"w-5 h-5 bg-black rounded-full animate-bounce"})]})})};t.Z=n},5222:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var a=s(1527),n=s(4256),r=s.n(n),l=s(7135),i=s(1962),c=s(4254),o=s(959),d=s(6488),x=s(365),m=s.n(x),u=s(2699),$=s(5107),p=function(e){var t,s=e.color,n=(0,o.useState)(1),r=n[0],x=n[1],p=(t=(0,l.Z)(function(){var e,t;return(0,c.__generator)(this,function(s){switch(s.label){case 0:return t={},[4,m().get("".concat("https://tpop-server.herokuapp.com","/videos"),(t.headers={"X-API-Key":"7992d6fa-a7db-4981-b1d2-f97dc45e0311"},t))];case 1:return[2,e=s.sent().data]}})}),function(){return t.apply(this,arguments)}),h=(0,$.useQuery)("fetchVideosInfos",p),f=h.isLoading,j=h.isError,b=h.data,g=h.error;return f||(0,u.isEmpty)(b)?(0,a.jsx)(d.Z,{}):j&&(0,i.Z)(g,Error)?(0,a.jsxs)("span",{children:["Error: ",null==g?void 0:g.message," "]}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"flex flex-wrap",children:(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)("ul",{className:"flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row",role:"tablist",children:Array.isArray(b)&&(null==b?void 0:b.map(function(e,t){var n=e.videoId,l=e.artist;return(0,a.jsx)("li",{className:"-mb-px mr-2 last:mr-0 flex-auto text-center",children:(0,a.jsx)("a",{className:"text-2xl font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal "+(r===t+1?"text-white bg-black":"text-"+s+"-600 bg-white"),onClick:function(e){e.preventDefault(),x(t+1)},"data-toggle":"tab",href:"#link".concat(t+1),role:"tablist",children:l})},n)}))}),Array.isArray(b)&&(null==b?void 0:b.map(function(e,t){var s=e.videoId,n=e.song,l=e.views,i=e.publishedAt,c=e.defaultImageUrl,o=e.mediumImageUrl,d=e.highImageUrl,x=e.standardImageUrl,m=e.maxresImageUrl;return(0,a.jsx)("div",{className:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded",children:(0,a.jsx)("div",{className:"px-4 py-5 flex-auto",children:(0,a.jsx)("div",{className:"tab-content tab-space",children:(0,a.jsxs)("div",{className:r===t+1?"block":"hidden",id:"link1",children:[(0,a.jsxs)("h3",{className:"text-xl uppercase font-normal my-8",children:["Song: ",n]}),(0,a.jsxs)("h4",{className:"text-xl uppercase font-normal my-8",children:["Views:"," ",l.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),(0,a.jsxs)("h4",{className:"text-xl uppercase font-normal my-8",children:["Release date:"," ",new Date(i).toLocaleDateString()]}),!(0,u.isEmpty)(c)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"my-4 text-xl uppercase font-bold",children:"Default"}),(0,a.jsx)("div",{children:(0,a.jsx)("img",{src:c,alt:"Default-".concat(t)})})]}),!(0,u.isEmpty)(o)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"my-4 text-xl uppercase font-bold",children:"Medium"}),(0,a.jsx)("div",{children:(0,a.jsx)("img",{src:o,alt:"Medium-".concat(t)})})]}),!(0,u.isEmpty)(d)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"my-4 text-xl uppercase font-bold",children:"High"}),(0,a.jsx)("div",{children:(0,a.jsx)("img",{src:d,alt:"High-".concat(t)})})]}),!(0,u.isEmpty)(x)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"my-4 text-xl uppercase font-bold",children:"Standard"}),(0,a.jsx)("div",{children:(0,a.jsx)("img",{src:x,alt:"Standard-".concat(t)})})]}),!(0,u.isEmpty)(m)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"my-4 text-xl uppercase font-bold",children:"Max Res"}),(0,a.jsx)("div",{children:(0,a.jsx)("img",{src:m,alt:"Max Res-".concat(t)})})]})]})})})},"".concat(s,"-").concat(t))}))]})})})};function h(){return(0,a.jsx)(p,{color:"black"})}var f=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"1TPOP"}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{name:"description",content:"1TPOP - Get a YouTube video thumbnail from the YouTube API"}),(0,a.jsx)("meta",{property:"og:title",content:"1TPOP - THE WEEK'S MOST POPULAR CURRENT SONGS ACROSS ALL GENRES"}),(0,a.jsx)("meta",{property:"og:description",content:"1TPOP - Retrieve information about a specific video."}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("main",{className:"px-8 w-full",children:[(0,a.jsx)("h1",{className:"text-4xl uppercase font-bold my-8",children:"Get a YouTube video thumbnail from the YouTube API"}),(0,a.jsx)("h2",{className:"text-2xl uppercase font-medium my-8",children:"Retrieve information about a specific video."}),(0,a.jsx)(h,{})]})]})}}},function(e){e.O(0,[201,841,774,888,179],function(){return e(e.s=6791)}),_N_E=e.O()}]);