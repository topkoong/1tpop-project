(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3613:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(786)}])},6488:function(e,t,s){"use strict";var l=s(1527);t.Z=function(){return(0,l.jsx)("div",{className:"spinner-container",children:(0,l.jsxs)("div",{className:"loader p-5 rounded-full flex space-x-3",children:[(0,l.jsx)("div",{className:"w-5 h-5 bg-black rounded-full animate-bounce"}),(0,l.jsx)("div",{className:"w-5 h-5 bg-black rounded-full animate-bounce"}),(0,l.jsx)("div",{className:"w-5 h-5 bg-black rounded-full animate-bounce"})]})})}},786:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return E},default:function(){return T}});var l=s(7135),n=s(1962),r=s(2006),a=s(4254),i=s(1527),c=(s(1853),s(3783),s(4363),s(6794)),o=s(5727),x=s(4256),d=s.n(x),u=s(7389),m=s(4875),p=s.n(m),h=s(2699),f=function(e){var t=e.url,s=e.backgroundColor,l=e.fontColor,n=e.text;return(0,i.jsxs)("div",{className:"w-full stacked",children:[(0,i.jsx)("div",{className:p()("mb-12 sm:mb-16 w-[133px] sm:w-[173px] md:w-[233px] lg:w-[273px] h-[33px] sm:h-[43px] md:h-[83px] lg:h-[93px] flex justify-center items-center",(0,u.Z)({"bg-[#0047FF]":(0,h.isEmpty)(s)},"bg-[".concat(s,"]"),!(0,h.isEmpty)(s))),children:(0,i.jsx)("h2",{className:p()("text-base md:text-2xl lg:text-3xl uppercase font-bold",(0,u.Z)({"text-white":(0,h.isEmpty)(l)||!(0,h.isEmpty)(l)&&"#ffffff"===(null===l||void 0===l?void 0:l.toLocaleLowerCase())},"text-[".concat(l),!(0,h.isEmpty)(l))),children:null!==n&&void 0!==n?n:"New Music"})}),(0,i.jsx)("img",{className:"w-full media",src:t})]})},g=s(4588),j=s.n(g),b=s(6488),w=s(365),v=s.n(w),N=s(5643),y=s.n(N),k=s(5107),_=function(){var e=(0,l.Z)((function(){var e;return(0,a.__generator)(this,(function(t){switch(t.label){case 0:return e={},[4,v().get("".concat("https://tpop-server.herokuapp.com","/videos?sort=views&limit=3"),(e.headers={"X-API-Key":"7992d6fa-a7db-4981-b1d2-f97dc45e0311"},e))];case 1:return[2,t.sent().data]}}))}));return function(){return e.apply(this,arguments)}}(),P=function(){var e=(0,l.Z)((function(){var e;return(0,a.__generator)(this,(function(t){switch(t.label){case 0:return e={},[4,v().get("".concat("https://tpop-server.herokuapp.com","/images/sliders"),(e.headers={"X-API-Key":"7992d6fa-a7db-4981-b1d2-f97dc45e0311"},e))];case 1:return[2,t.sent().data]}}))}));return function(){return e.apply(this,arguments)}}(),E=!0,T=function(){var e,t,s,l=y()().startOf("isoWeek").tz("Asia/Bangkok").format("l"),a=y()().endOf("isoWeek").tz("Asia/Bangkok").format("l"),x=(0,k.useQuery)("fetchTopViewsVideosInfos",_),u=x.isLoading,m=x.isError,p=x.data,g=x.error,w=(0,k.useQuery)("fetchImageSliders",P),v=w.isLoading,N=w.isError,E=w.data,T=w.error;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d(),{children:[(0,i.jsx)("title",{children:"1TPOP - \u0e40\u0e0a\u0e47\u0e04\u0e2d\u0e31\u0e19\u0e14\u0e31\u0e1a\u0e40\u0e1e\u0e25\u0e07\u0e2e\u0e34\u0e15 2022 \u0e2d\u0e31\u0e1e\u0e40\u0e14\u0e17\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e17\u0e38\u0e01\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c\u0e44\u0e14\u0e49\u0e01\u0e48\u0e2d\u0e19\u0e43\u0e04\u0e23"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{name:"description",content:"1TPOP - \u0e40\u0e0a\u0e47\u0e04\u0e2d\u0e31\u0e19\u0e14\u0e31\u0e1a\u0e40\u0e1e\u0e25\u0e07\u0e2e\u0e34\u0e15\u0e17\u0e38\u0e01\u0e41\u0e19\u0e27 2022 \u0e2d\u0e31\u0e1e\u0e40\u0e14\u0e17\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e17\u0e38\u0e01\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c\u0e44\u0e14\u0e49\u0e01\u0e48\u0e2d\u0e19\u0e43\u0e04\u0e23 \u0e40\u0e1e\u0e25\u0e07\u0e2e\u0e34\u0e15\u0e15\u0e34\u0e14\u0e0a\u0e32\u0e23\u0e4c\u0e15 \u0e01\u0e32\u0e23\u0e31\u0e19\u0e15\u0e35 \u0e23\u0e27\u0e21 Top Chart Songs \u0e40\u0e1e\u0e25\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14"}),(0,i.jsx)("meta",{property:"og:title",content:"1TPOP - \u0e40\u0e0a\u0e47\u0e04\u0e2d\u0e31\u0e19\u0e14\u0e31\u0e1a\u0e40\u0e1e\u0e25\u0e07\u0e2e\u0e34\u0e15\u0e17\u0e38\u0e01\u0e41\u0e19\u0e27 2022 \u0e2d\u0e31\u0e1e\u0e40\u0e14\u0e17\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e17\u0e38\u0e01\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c\u0e44\u0e14\u0e49\u0e01\u0e48\u0e2d\u0e19\u0e43\u0e04\u0e23 \u0e40\u0e1e\u0e25\u0e07\u0e2e\u0e34\u0e15\u0e15\u0e34\u0e14\u0e0a\u0e32\u0e23\u0e4c\u0e15 \u0e01\u0e32\u0e23\u0e31\u0e19\u0e15\u0e35 \u0e23\u0e27\u0e21 Top Chart Songs \u0e40\u0e1e\u0e25\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14"}),(0,i.jsx)("meta",{property:"og:description",content:"1TPOP - \u0e40\u0e0a\u0e47\u0e04\u0e2d\u0e31\u0e19\u0e14\u0e31\u0e1a\u0e40\u0e1e\u0e25\u0e07\u0e2e\u0e34\u0e15 2022 \u0e2d\u0e31\u0e1e\u0e40\u0e14\u0e17\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e17\u0e38\u0e01\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c\u0e44\u0e14\u0e49\u0e01\u0e48\u0e2d\u0e19\u0e43\u0e04\u0e23 \u0e40\u0e1e\u0e25\u0e07\u0e2e\u0e34\u0e15\u0e15\u0e34\u0e14\u0e0a\u0e32\u0e23\u0e4c\u0e15 \u0e01\u0e32\u0e23\u0e31\u0e19\u0e15\u0e35 \u0e23\u0e27\u0e21 Top Chart Songs \u0e40\u0e1e\u0e25\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14"}),(0,i.jsx)("meta",{property:"og:url",content:"https://topkoong.github.io/1tpop-project/"}),(0,i.jsx)("meta",{property:"og:locale",content:"th_TH"}),(0,i.jsx)("meta",{property:"og:site_name",content:"1TPOP"}),(0,i.jsx)("link",{rel:"icon",href:"./favicon.ico"})]}),(0,i.jsxs)("main",{className:"w-full h-full",children:[v||(0,h.isEmpty)(E)?(0,i.jsx)(b.Z,{}):N&&(0,n.Z)(T,Error)?(0,i.jsxs)("span",{children:["Error: ",null===T||void 0===T?void 0:T.message," "]}):(0,i.jsx)("section",{className:"h-full",children:(0,i.jsx)(c.tq,{pagination:{clickable:!0},spaceBetween:50,slidesPerView:1,loop:!0,autoplay:{delay:2500},navigation:!0,onSlideChange:function(){return console.log("slide change")},onSwiper:function(e){return console.log(e)},modules:[o.pt,o.tl],children:E.map((function(e,t){return(0,i.jsx)(c.o5,{className:"w-full",children:(0,i.jsx)(f,(0,r.Z)({},e))},t)}))})}),(0,i.jsx)("section",{className:"p-8",children:(0,i.jsxs)("div",{className:"w-fit",children:[(0,i.jsx)("h2",{className:"text-base md:text-3xl lg:text-6xl xl:text-7xl uppercase font-bold",children:"All Chart"}),(0,i.jsx)("div",{className:"flex-grow border-t h-[8px] md:h-[18px] bg-gradient-to-r from-[#FF2727] to-[#0047FF]"})]})}),(0,i.jsxs)("section",{className:"p-8 my-4 md:my-24 h-full bg-black",children:[(0,i.jsxs)("div",{className:"flex justify-between mb-8",children:[(0,i.jsxs)("h1",{className:"text-base lg:text-3xl uppercase font-bold text-white",children:["YouTube\u2019s T-POP Top Songs Chart This Week!"," ",(0,i.jsx)("span",{className:"inline-block text-sm md:text-base lg:text-xl xl:text-2xl font-bold text-white",children:"(".concat(l," - ").concat(a,")")})]}),(0,i.jsx)(j(),{href:"/charts",children:(0,i.jsx)("p",{className:"cursor-pointer uppercase text-white text-sm md:text-base lg:text-xl xl:text-2xl font-bold",children:"view all >>"})})]}),u||(0,h.isEmpty)(p)?(0,i.jsx)(b.Z,{}):m&&(0,n.Z)(g,Error)?(0,i.jsxs)("span",{children:["Error: ",null===g||void 0===g?void 0:g.message," "]}):(0,i.jsxs)("div",{className:"flex gap-8",children:[(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsx)("p",{className:"text-white text-base my-2",children:p[0].title}),(0,i.jsx)("img",{className:"w-full",src:p[0].maxresImageUrl,alt:""})]}),(0,i.jsx)("div",{className:"w-full",children:p.slice(1).map((function(l){return(0,i.jsxs)("div",{className:"flex items-center gap-8 my-2",children:[(0,i.jsx)("img",{className:"w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] 2xl:w-[380px]",src:null!==(s=null!==(t=null!==(e=l.maxresImageUrl)&&void 0!==e?e:l.standardImageUrl)&&void 0!==t?t:l.highImageUrl)&&void 0!==s?s:l.mediumImageUrl,alt:""}),(0,i.jsx)("p",{className:"text-white text-base",children:l.title})]},l.title)}))})]})]}),(0,i.jsx)("footer",{className:"bg-black h-[190px] w-full flex justify-center items-center",children:(0,i.jsx)("h4",{className:"text-center uppercase text-white font-bold text-3xl lg:text-6xl xl:text-7xl",children:"1TPOP!"})})]})]})}}},function(e){e.O(0,[933,201,964,275,434,774,888,179],(function(){return t=3613,e(e.s=t);var t}));var t=e.O();_N_E=t}]);