(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41],{1784:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/videos/[videoId]",function(){return i(2385)}])},2921:function(e,t,i){"use strict";var n=i(1527);t.Z=function(){return(0,n.jsx)("div",{className:"spinner-container",children:(0,n.jsxs)("div",{className:"loader p-5 rounded-full flex space-x-3",children:[(0,n.jsx)("div",{className:"w-5 h-5 bg-black rounded-full animate-bounce"}),(0,n.jsx)("div",{className:"w-5 h-5 bg-black rounded-full animate-bounce"}),(0,n.jsx)("div",{className:"w-5 h-5 bg-black rounded-full animate-bounce"})]})})}},4885:function(e,t,i){"use strict";i.d(t,{Z:function(){return a}});var n=i(959);function s(e){var t=(0,n.useState)(!1),i=t[0],s=t[1];return(0,n.useEffect)((function(){var t=window.matchMedia(e);s(t.matches);var i=function(e){return s(e.matches)};return t.addEventListener("change",i),function(){return t.removeEventListener("change",i)}}),[]),i}function a(){var e={isXs:s("(max-width: 640px)"),isSm:s("(min-width: 641px) and (max-width: 768px)"),isMd:s("(min-width: 769px) and (max-width: 1024px)"),isLg:s("(min-width: 1025px) and (max-width: 1279px)"),isXl:s("(min-width: 1280px) and (max-width: 1535px)"),is2Xl:s("(min-width: 1536px)"),active:"xs"};return e.isXs&&(e.active="xs"),e.isSm&&(e.active="sm"),e.isMd&&(e.active="md"),e.isLg&&(e.active="lg"),e.isXl&&(e.active="xl"),e.is2Xl&&(e.active="2xl"),e}},2385:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return y},default:function(){return N}});var n=i(7135),s=i(1962),a=i(4254),l=i(1527),r=(i(1853),i(1161)),o=i.n(r),c=i(8978),d=i(2530),x=i(2699),u=i(5643),p=i.n(u),m=i(4885);c.kL.register(c.uw,c.f$,c.ZL,c.jn,c.Dx,c.u,c.De,c.ST,c.vn,c.od);var h=function(e){var t=e.videoId;return(0,l.jsx)("div",{className:"overflow-hidden pb-[56%] relative h-0",children:(0,l.jsx)("iframe",{className:"left-0 top-0 h-full w-full absolute",width:"853",height:"480",src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube video player"})})},f=function(e){var t,i,n,s,a=e.videoInfos,r=a.map((function(e){return p()(e.date).tz("Asia/Bangkok").format("l")})),o=(0,m.Z)(),c=o.isLg,u=o.isXl,f=o.is2Xl,g=p()().startOf("isoWeek").tz("Asia/Bangkok").format("l"),v=p()().endOf("isoWeek").tz("Asia/Bangkok").format("l"),w={labels:r,datasets:[{type:"line",label:"(".concat(g," - ").concat(v,")"),borderColor:"rgb(255, 99, 132)",data:a.map((function(e,t){return e.views})),backgroundColor:a.map((function(e,t){return t%2===0?"rgba(53, 162, 235, 0.5)":"rgba(255, 99, 132, 0.5)"})),borderWidth:4,fill:!1},{label:"(".concat(g," - ").concat(v,")"),data:a.map((function(e,t){return e.views})),backgroundColor:a.map((function(e,t){return t!==a.length-1?"#5C5C5C":"#0047FF"}))}]};return(0,l.jsxs)("div",{className:"mt-4 px-4 grid grid-cols-1 md:grid-cols-2 md:gap-4",children:[(0,l.jsxs)("div",{className:"bg-white p-4 h-fit",children:[(0,l.jsx)(h,{videoId:(0,x.isEmpty)(a)||(0,x.isEmpty)(a[0])||(0,x.isEmpty)(null===(t=a[0])||void 0===t?void 0:t.videoId)?"":null===(i=a[0])||void 0===i?void 0:i.videoId}),(0,l.jsx)("div",{className:"w-full grid gap-4",children:(0,l.jsxs)("div",{className:"grid grid-cols-3 bg-white w-full",children:[(0,l.jsxs)("div",{className:"bg-white w-14 col-end-1 grid items-center border-r-2 border-black my-4",children:[(0,l.jsx)("p",{className:"text-black text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl",children:1}),(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsx)("svg",{width:"21",height:"18",viewBox:"0 0 21 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M10.5 0L20.4593 17.25H0.540708L10.5 0Z",fill:"#BDFF00"})})})]}),(0,l.jsx)("div",{className:"w-full p-8 col-span-full",children:(0,l.jsxs)("div",{className:"grid grid-rows-2 h-full gap-4",children:[(0,l.jsx)("div",{className:"w-full",children:(0,l.jsx)("p",{className:"text-black font-bold text-base lg:text-2xl",children:a[0].title})}),(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"flex justify-start gap-8",children:[(0,l.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,l.jsx)("svg",{width:"33",height:"34",viewBox:"0 0 33 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("ellipse",{cx:"16.2785",cy:"16.7718",rx:"16.2785",ry:"16.7718",fill:"#D9D9D9"})}),(0,l.jsxs)("p",{className:"font-bold text-sm md:text-base lg:text-lg",children:[" ",c||u||f?null===(n=a[a.length-1])||void 0===n||null===(s=n.views)||void 0===s?void 0:s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):Intl.NumberFormat("en",{notation:"compact"}).format(a[a.length-1].views)]})]}),(0,l.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,l.jsx)("svg",{width:"33",height:"34",viewBox:"0 0 33 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("ellipse",{cx:"16.2785",cy:"16.7718",rx:"16.2785",ry:"16.7718",fill:"#D9D9D9"})}),(0,l.jsx)("p",{className:"font-bold text-sm md:text-base lg:text-lg",children:p()(a[0].publishedAt).tz("Asia/Bangkok").format("l")})]})]})})]})})]},a[0].title)})]}),(0,l.jsx)("div",{className:"bg-white p-4",children:(0,l.jsx)(d.kL,{type:"bar",options:{responsive:!0,plugins:{legend:{position:"top"},title:{display:!0}}},data:w})})]})},g=i(2921),v=i(365),w=i.n(v),b=i(7169),j=i(1463),k=function(){var e=(0,n.Z)((function(e){return(0,a.__generator)(this,(function(t){switch(t.label){case 0:return[4,w().get("".concat("https://tpop-server.herokuapp.com","/videos/").concat(e,"/infos/daily"),{headers:{"X-API-Key":"7992d6fa-a7db-4981-b1d2-f97dc45e0311"}})];case 1:return[2,t.sent().data]}}))}));return function(t){return e.apply(this,arguments)}}(),y=!0,N=function(e){var t=e.videoInfos,i=p()().startOf("isoWeek").tz("Asia/Bangkok").format("l"),n=p()().endOf("isoWeek").tz("Asia/Bangkok").format("l"),a=(0,j.useRouter)().query.videoId,r=(0,b.a)(["fetchDailyVideoInfo",a],(function(e){var t=e.queryKey;return k(t[1])}),{initialData:t.find((function(e){return e.videoId===a}))}),c=r.isLoading,d=r.isError,u=r.data,m=r.error,h=(null===u||void 0===u?void 0:u.title)||"";return c||(0,x.isEmpty)(t)||(0,x.isEmpty)(u)?(0,l.jsx)(g.Z,{}):d&&(0,s.Z)(m,Error)?(0,l.jsxs)("span",{children:["Error: ",null===m||void 0===m?void 0:m.message," "]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o(),{children:[(0,l.jsxs)("title",{children:["1TPOP - ",h]}),(0,l.jsx)("meta",{property:"og:type",content:"website"}),(0,l.jsx)("meta",{name:"description",content:"1TPOP - ".concat(h)}),(0,l.jsx)("meta",{property:"og:title",content:"1TPOP - ".concat(h)}),(0,l.jsx)("meta",{property:"og:description",content:"1TPOP - ".concat(h)}),(0,l.jsx)("meta",{property:"og:url",content:"https://topkoong.github.io/1tpop-project/".concat(null===u||void 0===u?void 0:u.videoId)}),(0,l.jsx)("meta",{property:"og:site_name",content:"1TPOP"}),(0,l.jsx)("meta",{property:"og:locale",content:"th_TH"}),(0,l.jsx)("link",{rel:"icon",href:"https://topkoong.github.io/1tpop-project/favicon.ico"}),(0,l.jsx)("meta",{property:"og:image:url",content:"https://topkoong.github.io/1tpop-project/apple-icon-180x180.png"})]}),(0,l.jsxs)("main",{className:"w-full bg-[#efefef]",children:[(0,l.jsx)("div",{className:"px-8 flex w-full bg-[#3D3D3D] h-[144px] flex-col items-start justify-center gap-4",children:(0,l.jsxs)("h1",{className:"text-base lg:text-3xl uppercase font-bold text-white",children:["Graph of the Week"," ",(0,l.jsx)("span",{className:"inline-block text-sm md:text-base lg:text-xl xl:text-2xl font-bold text-white",children:"(".concat(i," - ").concat(n,")")})]})}),(0,l.jsx)(f,{videoInfos:t})]})]})}}},function(e){e.O(0,[933,201,964,251,694,307,774,888,179],(function(){return t=1784,e(e.s=t);var t}));var t=e.O();_N_E=t}]);