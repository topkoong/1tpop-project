(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4875:function(t,e){var n;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var s=typeof n;if("string"===s||"number"===s)t.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&t.push(o)}}else if("object"===s){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var a in n)i.call(n,a)&&n[a]&&t.push(a)}}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(n=function(){return r}.apply(e,[]))||(t.exports=n)}()},4475:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8251)}])},3375:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getDomainLocale=function(t,e,n,i){return!1};("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&"undefined"===typeof e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},6854:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(553).Z;n(2359).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(7022).Z,s=n(5997).Z,o=r(n(959)),a=n(321),u=n(7899),c=n(4279),l=n(2065),h=n(4374),f=n(3375),d=n(5627),p={};function y(t,e,n,i){if(t&&a.isLocalURL(e)){Promise.resolve(t.prefetch(e,n,i)).catch((function(t){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:t&&t.locale;p[e+"%"+n+(r?"%"+r:"")]=!0}}var v=o.default.forwardRef((function(t,e){var n,r=t.href,v=t.as,m=t.children,g=t.prefetch,b=t.passHref,x=t.replace,C=t.shallow,w=t.scroll,j=t.locale,O=t.onClick,q=t.onMouseEnter,P=t.onTouchStart,k=t.legacyBehavior,S=void 0===k?!0!==Boolean(!1):k,M=s(t,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,!S||"string"!==typeof n&&"number"!==typeof n||(n=o.default.createElement("a",null,n));var E=!1!==g,F=o.default.useContext(c.RouterContext),T=o.default.useContext(l.AppRouterContext);T&&(F=T);var D,A=o.default.useMemo((function(){var t=i(a.resolveHref(F,r,!0),2),e=t[0],n=t[1];return{href:e,as:v?a.resolveHref(F,v):n||e}}),[F,r,v]),_=A.href,L=A.as,R=o.default.useRef(_),K=o.default.useRef(L);S&&(D=o.default.Children.only(n));var Q=S?D&&"object"===typeof D&&D.ref:e,N=i(h.useIntersection({rootMargin:"200px"}),3),I=N[0],U=N[1],H=N[2],V=o.default.useCallback((function(t){K.current===L&&R.current===_||(H(),K.current=L,R.current=_),I(t),Q&&("function"===typeof Q?Q(t):"object"===typeof Q&&(Q.current=t))}),[L,Q,_,H,I]);o.default.useEffect((function(){var t=U&&E&&a.isLocalURL(_),e="undefined"!==typeof j?j:F&&F.locale,n=p[_+"%"+L+(e?"%"+e:"")];t&&!n&&y(F,_,L,{locale:e})}),[L,_,U,j,E,F]);var Z={ref:V,onClick:function(t){S||"function"!==typeof O||O(t),S&&D.props&&"function"===typeof D.props.onClick&&D.props.onClick(t),t.defaultPrevented||function(t,e,n,i,r,s,u,c,l,h){if("A"!==t.currentTarget.nodeName.toUpperCase()||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&a.isLocalURL(n)){t.preventDefault();var f=function(){"beforePopState"in e?e[r?"replace":"push"](n,i,{shallow:s,locale:c,scroll:u}):e[r?"replace":"push"](n,{forceOptimisticNavigation:!h})};l?o.default.startTransition(f):f()}}(t,F,_,L,x,C,w,j,Boolean(T),E)},onMouseEnter:function(t){S||"function"!==typeof q||q(t),S&&D.props&&"function"===typeof D.props.onMouseEnter&&D.props.onMouseEnter(t),!E&&T||a.isLocalURL(_)&&y(F,_,L,{priority:!0})},onTouchStart:function(t){S||"function"!==typeof P||P(t),S&&D.props&&"function"===typeof D.props.onTouchStart&&D.props.onTouchStart(t),!E&&T||a.isLocalURL(_)&&y(F,_,L,{priority:!0})}};if(!S||b||"a"===D.type&&!("href"in D.props)){var z="undefined"!==typeof j?j:F&&F.locale,G=F&&F.isLocaleDomain&&f.getDomainLocale(L,z,F.locales,F.domainLocales);Z.href=G||d.addBasePath(u.addLocale(L,z,F&&F.defaultLocale))}return S?o.default.cloneElement(D,Z):o.default.createElement("a",Object.assign({},M,Z),n)}));e.default=v,("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&"undefined"===typeof e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},4374:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(553).Z;Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootRef,n=t.rootMargin,c=t.disabled||!o,l=i(r.useState(!1),2),h=l[0],f=l[1],d=i(r.useState(null),2),p=d[0],y=d[1];r.useEffect((function(){if(o){if(c||h)return;if(p&&p.tagName){var t=function(t,e,n){var i=function(t){var e,n={root:t.root||null,margin:t.rootMargin||""},i=u.find((function(t){return t.root===n.root&&t.margin===n.margin}));if(i&&(e=a.get(i)))return e;var r=new Map,s=new IntersectionObserver((function(t){t.forEach((function(t){var e=r.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return e={id:n,observer:s,elements:r},u.push(n),a.set(n,e),e}(n),r=i.id,s=i.observer,o=i.elements;return o.set(t,e),s.observe(t),function(){if(o.delete(t),s.unobserve(t),0===o.size){s.disconnect(),a.delete(r);var e=u.findIndex((function(t){return t.root===r.root&&t.margin===r.margin}));e>-1&&u.splice(e,1)}}}(p,(function(t){return t&&f(t)}),{root:null==e?void 0:e.current,rootMargin:n});return t}}else if(!h){var i=s.requestIdleCallback((function(){return f(!0)}));return function(){return s.cancelIdleCallback(i)}}}),[p,c,n,e,h]);var v=r.useCallback((function(){f(!1)}),[]);return[y,h,v]};var r=n(959),s=n(427),o="function"===typeof IntersectionObserver,a=new Map,u=[];("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&"undefined"===typeof e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},2065:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TemplateContext=e.GlobalLayoutRouterContext=e.LayoutRouterContext=e.AppRouterContext=void 0;var i=(0,n(7022).Z)(n(959)),r=i.default.createContext(null);e.AppRouterContext=r;var s=i.default.createContext(null);e.LayoutRouterContext=s;var o=i.default.createContext(null);e.GlobalLayoutRouterContext=o;var a=i.default.createContext(null);e.TemplateContext=a},8251:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return T}});var i=n(2006),r=n(1527),s=(n(6287),n(6606),n(3376),n(6102));const o=console;var a=n(7122),u=n(6464);class c{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,s.PN)(this.cacheTime)&&(this.gcTimeout=setTimeout((()=>{this.optionalRemove()}),this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,null!=t?t:s.sk?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class l extends c{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||o,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||function(t){const e="function"===typeof t.initialData?t.initialData():t.initialData,n="undefined"!==typeof t.initialData?"function"===typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0,i="undefined"!==typeof e;return{data:e,dataUpdateCount:0,dataUpdatedAt:i?null!=n?n:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isInvalidated:!1,status:i?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState,this.meta=t.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.meta=null==t?void 0:t.meta,this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(t,e){const n=(0,s.oE)(this.state.data,t,this.options);return this.dispatch({data:n,type:"success",dataUpdatedAt:null==e?void 0:e.updatedAt,manual:null==e?void 0:e.manual}),n}setState(t,e){this.dispatch({type:"setState",state:t,setStateOptions:e})}cancel(t){var e;const n=this.promise;return null==(e=this.retryer)||e.cancel(t),n?n.then(s.ZT).catch(s.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some((t=>!1!==t.options.enabled))}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some((t=>t.getCurrentResult().isStale))}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!(0,s.Kp)(this.state.dataUpdatedAt,t)}onFocus(){var t;const e=this.observers.find((t=>t.shouldFetchOnWindowFocus()));e&&e.refetch({cancelRefetch:!1}),null==(t=this.retryer)||t.continue()}onOnline(){var t;const e=this.observers.find((t=>t.shouldFetchOnReconnect()));e&&e.refetch({cancelRefetch:!1}),null==(t=this.retryer)||t.continue()}addObserver(t){-1===this.observers.indexOf(t)&&(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){-1!==this.observers.indexOf(t)&&(this.observers=this.observers.filter((e=>e!==t)),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,e){var n,i;if("idle"!==this.state.fetchStatus)if(this.state.dataUpdatedAt&&null!=e&&e.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var r;return null==(r=this.retryer)||r.continueRetry(),this.promise}if(t&&this.setOptions(t),!this.options.queryFn){const t=this.observers.find((t=>t.options.queryFn));t&&this.setOptions(t.options)}Array.isArray(this.options.queryKey);const o=(0,s.G9)(),a={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},c=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>{if(o)return this.abortSignalConsumed=!0,o.signal}})};c(a);const l={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(a)):Promise.reject("Missing queryFn"),meta:this.meta};var h;(c(l),null==(n=this.options.behavior)||n.onFetch(l),this.revertState=this.state,"idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(i=l.fetchOptions)?void 0:i.meta))&&this.dispatch({type:"fetch",meta:null==(h=l.fetchOptions)?void 0:h.meta});const f=t=>{var e,n;((0,u.DV)(t)&&t.silent||this.dispatch({type:"error",error:t}),(0,u.DV)(t))||(null==(e=(n=this.cache.config).onError)||e.call(n,t,this));this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=(0,u.Mz)({fn:l.fetchFn,abort:null==o?void 0:o.abort.bind(o),onSuccess:t=>{var e,n;"undefined"!==typeof t?(this.setData(t),null==(e=(n=this.cache.config).onSuccess)||e.call(n,t,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1):f(new Error("undefined"))},onError:f,onFail:()=>{this.dispatch({type:"failed"})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){this.state=(e=>{var n,i;switch(t.type){case"failed":return{...e,fetchFailureCount:e.fetchFailureCount+1};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,fetchFailureCount:0,fetchMeta:null!=(n=t.meta)?n:null,fetchStatus:(0,u.Kw)(this.options.networkMode)?"fetching":"paused",...!e.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:null!=(i=t.dataUpdatedAt)?i:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0}};case"error":const r=t.error;return(0,u.DV)(r)&&r.revert&&this.revertState?{...this.revertState}:{...e,error:r,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),a.V.batch((()=>{this.observers.forEach((e=>{e.onQueryUpdate(t)})),this.cache.notify({query:this,type:"updated",action:t})}))}}var h=n(7498);class f extends h.l{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,e,n){var i;const r=e.queryKey,o=null!=(i=e.queryHash)?i:(0,s.Rm)(r,e);let a=this.get(o);return a||(a=new l({cache:this,logger:t.getLogger(),queryKey:r,queryHash:o,options:t.defaultQueryOptions(e),state:n,defaultOptions:t.getQueryDefaults(r),meta:e.meta}),this.add(a)),a}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){const e=this.queriesMap[t.queryHash];e&&(t.destroy(),this.queries=this.queries.filter((e=>e!==t)),e===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){a.V.batch((()=>{this.queries.forEach((t=>{this.remove(t)}))}))}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,e){const[n]=(0,s.I6)(t,e);return"undefined"===typeof n.exact&&(n.exact=!0),this.queries.find((t=>(0,s._x)(n,t)))}findAll(t,e){const[n]=(0,s.I6)(t,e);return Object.keys(n).length>0?this.queries.filter((t=>(0,s._x)(n,t))):this.queries}notify(t){a.V.batch((()=>{this.listeners.forEach((e=>{e(t)}))}))}onFocus(){a.V.batch((()=>{this.queries.forEach((t=>{t.onFocus()}))}))}onOnline(){a.V.batch((()=>{this.queries.forEach((t=>{t.onOnline()}))}))}}class d extends c{constructor(t){super(),this.options={...t.defaultOptions,...t.options},this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||o,this.observers=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0},this.meta=t.meta,this.updateCacheTime(this.options.cacheTime),this.scheduleGc()}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){-1===this.observers.indexOf(t)&&(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter((e=>e!==t)),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()}async execute(){const t=()=>{var t;return this.retryer=(0,u.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:()=>{this.dispatch({type:"failed"})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(t=this.options.retry)?t:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},e="loading"===this.state.status;try{var n,i,r,s,o,a;if(!e){var c,l,h,f;this.dispatch({type:"loading",variables:this.options.variables}),null==(c=(l=this.mutationCache.config).onMutate)||c.call(l,this.state.variables,this);const t=await(null==(h=(f=this.options).onMutate)?void 0:h.call(f,this.state.variables));t!==this.state.context&&this.dispatch({type:"loading",context:t,variables:this.state.variables})}const u=await t();return null==(n=(i=this.mutationCache.config).onSuccess)||n.call(i,u,this.state.variables,this.state.context,this),await(null==(r=(s=this.options).onSuccess)?void 0:r.call(s,u,this.state.variables,this.state.context)),await(null==(o=(a=this.options).onSettled)?void 0:o.call(a,u,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:u}),u}catch(b){try{var d,p,y,v,m,g;throw null==(d=(p=this.mutationCache.config).onError)||d.call(p,b,this.state.variables,this.state.context,this),await(null==(y=(v=this.options).onError)?void 0:y.call(v,b,this.state.variables,this.state.context)),await(null==(m=(g=this.options).onSettled)?void 0:m.call(g,void 0,b,this.state.variables,this.state.context)),b}finally{this.dispatch({type:"error",error:b})}}}dispatch(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:e.failureCount+1};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"loading":return{...e,context:t.context,data:void 0,error:null,isPaused:!(0,u.Kw)(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...e,data:t.data,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,isPaused:!1,status:"error"};case"setState":return{...e,...t.state}}})(this.state),a.V.batch((()=>{this.observers.forEach((e=>{e.onMutationUpdate(t)})),this.mutationCache.notify({mutation:this,type:"updated",action:t})}))}}class p extends h.l{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,e,n){const i=new d({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(e),state:n,defaultOptions:e.mutationKey?t.getMutationDefaults(e.mutationKey):void 0,meta:e.meta});return this.add(i),i}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter((e=>e!==t)),this.notify({type:"removed",mutation:t})}clear(){a.V.batch((()=>{this.mutations.forEach((t=>{this.remove(t)}))}))}getAll(){return this.mutations}find(t){return"undefined"===typeof t.exact&&(t.exact=!0),this.mutations.find((e=>(0,s.X7)(t,e)))}findAll(t){return this.mutations.filter((e=>(0,s.X7)(t,e)))}notify(t){a.V.batch((()=>{this.listeners.forEach((e=>{e(t)}))}))}resumePausedMutations(){const t=this.mutations.filter((t=>t.state.isPaused));return a.V.batch((()=>t.reduce(((t,e)=>t.then((()=>e.continue().catch(s.ZT)))),Promise.resolve())))}}var y=n(6045),v=n(7516);function m(){return{onFetch:t=>{t.fetchFn=()=>{var e,n,i,r,s,o;const a=null==(e=t.fetchOptions)||null==(n=e.meta)?void 0:n.refetchPage,u=null==(i=t.fetchOptions)||null==(r=i.meta)?void 0:r.fetchMore,c=null==u?void 0:u.pageParam,l="forward"===(null==u?void 0:u.direction),h="backward"===(null==u?void 0:u.direction),f=(null==(s=t.state.data)?void 0:s.pages)||[],d=(null==(o=t.state.data)?void 0:o.pageParams)||[];let p=d,y=!1;const v=t.options.queryFn||(()=>Promise.reject("Missing queryFn")),m=(t,e,n,i)=>(p=i?[e,...p]:[...p,e],i?[n,...t]:[...t,n]),x=(e,n,i,r)=>{if(y)return Promise.reject("Cancelled");if("undefined"===typeof i&&!n&&e.length)return Promise.resolve(e);const s={queryKey:t.queryKey,pageParam:i,meta:t.meta};var o;o=s,Object.defineProperty(o,"signal",{enumerable:!0,get:()=>{var e,n;return null!=(e=t.signal)&&e.aborted?y=!0:null==(n=t.signal)||n.addEventListener("abort",(()=>{y=!0})),t.signal}});const a=v(s);return Promise.resolve(a).then((t=>m(e,i,t,r)))};let C;if(f.length)if(l){const e="undefined"!==typeof c,n=e?c:g(t.options,f);C=x(f,e,n)}else if(h){const e="undefined"!==typeof c,n=e?c:b(t.options,f);C=x(f,e,n,!0)}else{p=[];const e="undefined"===typeof t.options.getNextPageParam;C=!a||!f[0]||a(f[0],0,f)?x([],e,d[0]):Promise.resolve(m([],d[0],f[0]));for(let n=1;n<f.length;n++)C=C.then((i=>{if(!a||!f[n]||a(f[n],n,f)){const r=e?d[n]:g(t.options,i);return x(i,e,r)}return Promise.resolve(m(i,d[n],f[n]))}))}else C=x([]);return C.then((t=>({pages:t,pageParams:p})))}}}}function g(t,e){return null==t.getNextPageParam?void 0:t.getNextPageParam(e[e.length-1],e)}function b(t,e){return null==t.getPreviousPageParam?void 0:t.getPreviousPageParam(e[0],e)}class x{constructor(t={}){this.queryCache=t.queryCache||new f,this.mutationCache=t.mutationCache||new p,this.logger=t.logger||o,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}mount(){this.unsubscribeFocus=y.j.subscribe((()=>{y.j.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())})),this.unsubscribeOnline=v.N.subscribe((()=>{v.N.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var t,e;null==(t=this.unsubscribeFocus)||t.call(this),null==(e=this.unsubscribeOnline)||e.call(this)}isFetching(t,e){const[n]=(0,s.I6)(t,e);return n.fetchStatus="fetching",this.queryCache.findAll(n).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,e){var n;return null==(n=this.queryCache.find(t,e))?void 0:n.state.data}getQueriesData(t){return this.getQueryCache().findAll(t).map((({queryKey:t,state:e})=>[t,e.data]))}setQueryData(t,e,n){const i=this.queryCache.find(t),r=null==i?void 0:i.state.data,o=(0,s.SE)(e,r);if("undefined"===typeof o)return;const a=(0,s._v)(t),u=this.defaultQueryOptions(a);return this.queryCache.build(this,u).setData(o,{...n,manual:!0})}setQueriesData(t,e,n){return a.V.batch((()=>this.getQueryCache().findAll(t).map((({queryKey:t})=>[t,this.setQueryData(t,e,n)]))))}getQueryState(t,e){var n;return null==(n=this.queryCache.find(t,e))?void 0:n.state}removeQueries(t,e){const[n]=(0,s.I6)(t,e),i=this.queryCache;a.V.batch((()=>{i.findAll(n).forEach((t=>{i.remove(t)}))}))}resetQueries(t,e,n){const[i,r]=(0,s.I6)(t,e,n),o=this.queryCache,u={type:"active",...i};return a.V.batch((()=>(o.findAll(i).forEach((t=>{t.reset()})),this.refetchQueries(u,r))))}cancelQueries(t,e,n){const[i,r={}]=(0,s.I6)(t,e,n);"undefined"===typeof r.revert&&(r.revert=!0);const o=a.V.batch((()=>this.queryCache.findAll(i).map((t=>t.cancel(r)))));return Promise.all(o).then(s.ZT).catch(s.ZT)}invalidateQueries(t,e,n){const[i,r]=(0,s.I6)(t,e,n);return a.V.batch((()=>{var t,e;if(this.queryCache.findAll(i).forEach((t=>{t.invalidate()})),"none"===i.refetchType)return Promise.resolve();const n={...i,type:null!=(t=null!=(e=i.refetchType)?e:i.type)?t:"active"};return this.refetchQueries(n,r)}))}refetchQueries(t,e,n){const[i,r]=(0,s.I6)(t,e,n),o=a.V.batch((()=>this.queryCache.findAll(i).filter((t=>!t.isDisabled())).map((t=>{var e;return t.fetch(void 0,{...r,cancelRefetch:null==(e=null==r?void 0:r.cancelRefetch)||e,meta:{refetchPage:i.refetchPage}})}))));let u=Promise.all(o).then(s.ZT);return null!=r&&r.throwOnError||(u=u.catch(s.ZT)),u}fetchQuery(t,e,n){const i=(0,s._v)(t,e,n),r=this.defaultQueryOptions(i);"undefined"===typeof r.retry&&(r.retry=!1);const o=this.queryCache.build(this,r);return o.isStaleByTime(r.staleTime)?o.fetch(r):Promise.resolve(o.state.data)}prefetchQuery(t,e,n){return this.fetchQuery(t,e,n).then(s.ZT).catch(s.ZT)}fetchInfiniteQuery(t,e,n){const i=(0,s._v)(t,e,n);return i.behavior=m(),this.fetchQuery(i)}prefetchInfiniteQuery(t,e,n){return this.fetchInfiniteQuery(t,e,n).then(s.ZT).catch(s.ZT)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,e){const n=this.queryDefaults.find((e=>(0,s.yF)(t)===(0,s.yF)(e.queryKey)));n?n.defaultOptions=e:this.queryDefaults.push({queryKey:t,defaultOptions:e})}getQueryDefaults(t){if(!t)return;const e=this.queryDefaults.find((e=>(0,s.to)(t,e.queryKey)));return null==e?void 0:e.defaultOptions}setMutationDefaults(t,e){const n=this.mutationDefaults.find((e=>(0,s.yF)(t)===(0,s.yF)(e.mutationKey)));n?n.defaultOptions=e:this.mutationDefaults.push({mutationKey:t,defaultOptions:e})}getMutationDefaults(t){if(!t)return;const e=this.mutationDefaults.find((e=>(0,s.to)(t,e.mutationKey)));return null==e?void 0:e.defaultOptions}defaultQueryOptions(t){if(null!=t&&t._defaulted)return t;const e={...this.defaultOptions.queries,...this.getQueryDefaults(null==t?void 0:t.queryKey),...t,_defaulted:!0};return!e.queryHash&&e.queryKey&&(e.queryHash=(0,s.Rm)(e.queryKey,e)),"undefined"===typeof e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),"undefined"===typeof e.useErrorBoundary&&(e.useErrorBoundary=!!e.suspense),e}defaultMutationOptions(t){return null!=t&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==t?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}var C=n(7592),w=n(1161),j=n.n(w),O=n(143),q=n.n(O),P=n(4875),k=n.n(P),S=n(1463),M=n(959),E=function(){var t=(0,M.useState)(!1),e=t[0],n=t[1],i=(0,S.useRouter)();return(0,r.jsx)("header",{children:(0,r.jsx)("nav",{className:"bg-white px-8 py-2.5",children:(0,r.jsxs)("div",{className:"flex flex-wrap justify-between items-center mx-auto",children:[(0,r.jsx)(q(),{href:"/",children:(0,r.jsx)("div",{className:"flex items-center cursor-pointer",children:(0,r.jsx)("span",{className:"self-center text-transparent text-3xl lg:text-5xl xl:text-6xl bg-clip-text bg-gradient-to-r from-[#FF2727] to-[#0047FF] font-bold whitespace-nowrap",children:"1TPOP!"})})}),(0,r.jsx)("button",{"data-collapse-toggle":"navbar-default",type:"button",className:"inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black","aria-controls":"navbar-default","aria-expanded":"false",onClick:function(){return n(!e)},children:e?(0,r.jsx)("svg",{className:"fill-current h-6 w-6 lg:hidden",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M6 18L18 6M6 6l12 12"})}):(0,r.jsx)("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,r.jsx)("div",{className:"".concat(e?"block":"hidden"," w-full md:block md:w-auto"),id:"navbar-default",children:(0,r.jsxs)("ul",{className:"flex flex-col p-4 mt-4 bg-white rounded-lg md:flex-row md:space-x-8 md:mt-0",children:[(0,r.jsx)("li",{className:k()("uppercase font-bold text-base lg:text-xl block py-2 pr-4 pl-3 text-black rounded md:p-0",{"underline decoration-[#0047FF] decoration-4 underline-offset-4":"/charts"===i.pathname}),children:(0,r.jsx)(q(),{href:"/charts","aria-current":"page",children:"CHARTS"})}),(0,r.jsx)("li",{className:k()("uppercase font-bold text-base lg:text-xl block py-2 pr-4 pl-3 text-black rounded md:p-0",{"underline decoration-[#0047FF] decoration-4 underline-offset-4":"/contact"===i.pathname||"/donate"===i.pathname}),children:(0,r.jsx)(q(),{href:"/contact",children:"Contact"})})]})})]})})})},F=function(t){var e=t.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(E,{}),e]})};var T=function(t){var e=t.Component,n=t.pageProps,s=(0,M.useState)((function(){return new x}))[0];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(j(),{children:[(0,r.jsx)("title",{children:"1TPOP - \u0e2d\u0e31\u0e1e\u0e40\u0e14\u0e17\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e17\u0e38\u0e01\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c\u0e44\u0e14\u0e49\u0e01\u0e48\u0e2d\u0e19\u0e43\u0e04\u0e23 \u0e40\u0e1e\u0e25\u0e07\u0e2e\u0e34\u0e15\u0e15\u0e34\u0e14\u0e0a\u0e32\u0e23\u0e4c\u0e15 \u0e01\u0e32\u0e23\u0e31\u0e19\u0e15\u0e35 \u0e23\u0e27\u0e21 Top Chart Songs \u0e40\u0e1e\u0e25\u0e07\u0e2e\u0e34\u0e15 \u0e40\u0e1e\u0e25\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14"}),(0,r.jsx)("meta",{name:"description",content:"1TPOP - \u0e2d\u0e31\u0e1e\u0e40\u0e14\u0e17\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e17\u0e38\u0e01\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c\u0e44\u0e14\u0e49\u0e01\u0e48\u0e2d\u0e19\u0e43\u0e04\u0e23 \u0e40\u0e1e\u0e25\u0e07\u0e2e\u0e34\u0e15\u0e15\u0e34\u0e14\u0e0a\u0e32\u0e23\u0e4c\u0e15 \u0e01\u0e32\u0e23\u0e31\u0e19\u0e15\u0e35 \u0e23\u0e27\u0e21 Top Chart Songs \u0e40\u0e1e\u0e25\u0e07\u0e2e\u0e34\u0e15 \u0e40\u0e1e\u0e25\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"https://topkoong.github.io/1tpop-project/apple-icon-57x57.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"https://topkoong.github.io/1tpop-project/apple-icon-60x60.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"https://topkoong.github.io/1tpop-project/apple-icon-72x72.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"https://topkoong.github.io/1tpop-project/apple-icon-76x76.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"https://topkoong.github.io/1tpop-project/apple-icon-114x114.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"https://topkoong.github.io/1tpop-project/apple-icon-120x120.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"https://topkoong.github.io/1tpop-project/apple-icon-144x144.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"https://topkoong.github.io/1tpop-project/apple-icon-152x152.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"https://topkoong.github.io/1tpop-project/apple-icon-180x180.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"https://topkoong.github.io/1tpop-project/android-icon-192x192.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"https://topkoong.github.io/1tpop-project/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"https://topkoong.github.io/1tpop-project/favicon-96x96.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"https://topkoong.github.io/1tpop-project/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"icon",href:"https://topkoong.github.io/1tpop-project/favicon.ico"}),(0,r.jsx)("link",{rel:"manifest",href:"https://topkoong.github.io/1tpop-project/manifest.json"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,r.jsx)("meta",{name:"msapplication-TileImage",content:"https://topkoong.github.io/1tpop-project/ms-icon-144x144.png"}),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,r.jsx)("meta",{property:"og:image:url",content:"https://topkoong.github.io/1tpop-project/apple-icon-180x180.png"})]}),(0,r.jsx)(F,{children:(0,r.jsx)(C.aH,{client:s,children:(0,r.jsx)(e,(0,i.Z)({},n))})})]})}},6606:function(){},3376:function(){},6287:function(){},1161:function(t,e,n){t.exports=n(2894)},143:function(t,e,n){t.exports=n(6854)},1463:function(t,e,n){t.exports=n(6070)},7389:function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:function(){return i}})},2006:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var i=n(7389);function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){(0,i.Z)(t,e,n[e])}))}return t}},6045:function(t,e,n){"use strict";n.d(e,{j:function(){return o}});var i=n(7498),r=n(6102);class s extends i.l{constructor(){super(),this.setup=t=>{if(!r.sk&&window.addEventListener){const e=()=>t();return window.addEventListener("visibilitychange",e,!1),window.addEventListener("focus",e,!1),()=>{window.removeEventListener("visibilitychange",e),window.removeEventListener("focus",e)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){var t;this.hasListeners()||(null==(t=this.cleanup)||t.call(this),this.cleanup=void 0)}setEventListener(t){var e;this.setup=t,null==(e=this.cleanup)||e.call(this),this.cleanup=t((t=>{"boolean"===typeof t?this.setFocused(t):this.onFocus()}))}setFocused(t){this.focused=t,t&&this.onFocus()}onFocus(){this.listeners.forEach((t=>{t()}))}isFocused(){return"boolean"===typeof this.focused?this.focused:"undefined"===typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}}const o=new s},7122:function(t,e,n){"use strict";n.d(e,{V:function(){return r}});var i=n(6102);const r=function(){let t=[],e=0,n=t=>{t()},r=t=>{t()};const s=r=>{e?t.push(r):(0,i.A4)((()=>{n(r)}))},o=()=>{const e=t;t=[],e.length&&(0,i.A4)((()=>{r((()=>{e.forEach((t=>{n(t)}))}))}))};return{batch:t=>{let n;e++;try{n=t()}finally{e--,e||o()}return n},batchCalls:t=>(...e)=>{s((()=>{t(...e)}))},schedule:s,setNotifyFunction:t=>{n=t},setBatchNotifyFunction:t=>{r=t}}}()},7516:function(t,e,n){"use strict";n.d(e,{N:function(){return o}});var i=n(7498),r=n(6102);class s extends i.l{constructor(){super(),this.setup=t=>{if(!r.sk&&window.addEventListener){const e=()=>t();return window.addEventListener("online",e,!1),window.addEventListener("offline",e,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",e)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){var t;this.hasListeners()||(null==(t=this.cleanup)||t.call(this),this.cleanup=void 0)}setEventListener(t){var e;this.setup=t,null==(e=this.cleanup)||e.call(this),this.cleanup=t((t=>{"boolean"===typeof t?this.setOnline(t):this.onOnline()}))}setOnline(t){this.online=t,t&&this.onOnline()}onOnline(){this.listeners.forEach((t=>{t()}))}isOnline(){return"boolean"===typeof this.online?this.online:"undefined"===typeof navigator||"undefined"===typeof navigator.onLine||navigator.onLine}}const o=new s},6464:function(t,e,n){"use strict";n.d(e,{DV:function(){return c},Kw:function(){return a},Mz:function(){return l}});var i=n(6045),r=n(7516),s=n(6102);function o(t){return Math.min(1e3*2**t,3e4)}function a(t){return"online"!==(null!=t?t:"online")||r.N.isOnline()}class u{constructor(t){this.revert=null==t?void 0:t.revert,this.silent=null==t?void 0:t.silent}}function c(t){return t instanceof u}function l(t){let e,n,c,l=!1,h=0,f=!1;const d=new Promise(((t,e)=>{n=t,c=e})),p=()=>!i.j.isFocused()||"always"!==t.networkMode&&!r.N.isOnline(),y=i=>{f||(f=!0,null==t.onSuccess||t.onSuccess(i),null==e||e(),n(i))},v=n=>{f||(f=!0,null==t.onError||t.onError(n),null==e||e(),c(n))},m=()=>new Promise((n=>{e=t=>{if(f||!p())return n(t)},null==t.onPause||t.onPause()})).then((()=>{e=void 0,f||null==t.onContinue||t.onContinue()})),g=()=>{if(f)return;let e;try{e=t.fn()}catch(n){e=Promise.reject(n)}Promise.resolve(e).then(y).catch((e=>{var n,i;if(f)return;const r=null!=(n=t.retry)?n:3,a=null!=(i=t.retryDelay)?i:o,u="function"===typeof a?a(h,e):a,c=!0===r||"number"===typeof r&&h<r||"function"===typeof r&&r(h,e);!l&&c?(h++,null==t.onFail||t.onFail(h,e),(0,s.Gh)(u).then((()=>{if(p())return m()})).then((()=>{l?v(e):g()}))):v(e)}))};return a(t.networkMode)?g():m().then(g),{promise:d,cancel:e=>{f||(v(new u(e)),null==t.abort||t.abort())},continue:()=>{null==e||e()},cancelRetry:()=>{l=!0},continueRetry:()=>{l=!1}}}},7498:function(t,e,n){"use strict";n.d(e,{l:function(){return i}});class i{constructor(){this.listeners=[],this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.push(t),this.onSubscribe(),()=>{this.listeners=this.listeners.filter((e=>e!==t)),this.onUnsubscribe()}}hasListeners(){return this.listeners.length>0}onSubscribe(){}onUnsubscribe(){}}},6102:function(t,e,n){"use strict";n.d(e,{A4:function(){return j},G9:function(){return O},Gh:function(){return w},I6:function(){return c},Kp:function(){return a},PN:function(){return o},Rm:function(){return f},SE:function(){return s},VS:function(){return m},X7:function(){return h},ZT:function(){return r},_v:function(){return u},_x:function(){return l},oE:function(){return q},sk:function(){return i},to:function(){return p},yF:function(){return d}});const i="undefined"===typeof window;function r(){}function s(t,e){return"function"===typeof t?t(e):t}function o(t){return"number"===typeof t&&t>=0&&t!==1/0}function a(t,e){return Math.max(t+(e||0)-Date.now(),0)}function u(t,e,n){return C(t)?"function"===typeof e?{...n,queryKey:t,queryFn:e}:{...e,queryKey:t}:t}function c(t,e,n){return C(t)?[{...e,queryKey:t},n]:[t||{},e]}function l(t,e){const{type:n="all",exact:i,fetchStatus:r,predicate:s,queryKey:o,stale:a}=t;if(C(o))if(i){if(e.queryHash!==f(o,e.options))return!1}else if(!p(e.queryKey,o))return!1;if("all"!==n){const t=e.isActive();if("active"===n&&!t)return!1;if("inactive"===n&&t)return!1}return("boolean"!==typeof a||e.isStale()===a)&&(("undefined"===typeof r||r===e.state.fetchStatus)&&!(s&&!s(e)))}function h(t,e){const{exact:n,fetching:i,predicate:r,mutationKey:s}=t;if(C(s)){if(!e.options.mutationKey)return!1;if(n){if(d(e.options.mutationKey)!==d(s))return!1}else if(!p(e.options.mutationKey,s))return!1}return("boolean"!==typeof i||"loading"===e.state.status===i)&&!(r&&!r(e))}function f(t,e){return((null==e?void 0:e.queryKeyHashFn)||d)(t)}function d(t){return JSON.stringify(t,((t,e)=>b(e)?Object.keys(e).sort().reduce(((t,n)=>(t[n]=e[n],t)),{}):e))}function p(t,e){return y(t,e)}function y(t,e){return t===e||typeof t===typeof e&&(!(!t||!e||"object"!==typeof t||"object"!==typeof e)&&!Object.keys(e).some((n=>!y(t[n],e[n]))))}function v(t,e){if(t===e)return t;const n=g(t)&&g(e);if(n||b(t)&&b(e)){const i=n?t.length:Object.keys(t).length,r=n?e:Object.keys(e),s=r.length,o=n?[]:{};let a=0;for(let u=0;u<s;u++){const i=n?u:r[u];o[i]=v(t[i],e[i]),o[i]===t[i]&&a++}return i===s&&a===i?t:o}return e}function m(t,e){if(t&&!e||e&&!t)return!1;for(const n in t)if(t[n]!==e[n])return!1;return!0}function g(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function b(t){if(!x(t))return!1;const e=t.constructor;if("undefined"===typeof e)return!0;const n=e.prototype;return!!x(n)&&!!n.hasOwnProperty("isPrototypeOf")}function x(t){return"[object Object]"===Object.prototype.toString.call(t)}function C(t){return Array.isArray(t)}function w(t){return new Promise((e=>{setTimeout(e,t)}))}function j(t){w(0).then(t)}function O(){if("function"===typeof AbortController)return new AbortController}function q(t,e,n){return null!=n.isDataEqual&&n.isDataEqual(t,e)?t:"function"===typeof n.structuralSharing?n.structuralSharing(t,e):!1!==n.structuralSharing?v(t,e):e}},7592:function(t,e,n){"use strict";n.d(e,{NL:function(){return a},aH:function(){return u}});var i=n(959);const r=i.createContext(void 0),s=i.createContext(!1);function o(t,e){return t||(e&&"undefined"!==typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=r),window.ReactQueryClientContext):r)}const a=({context:t}={})=>{const e=i.useContext(o(t,i.useContext(s)));if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},u=({client:t,children:e,context:n,contextSharing:r=!1})=>{i.useEffect((()=>(t.mount(),()=>{t.unmount()})),[t]);const a=o(n,r);return i.createElement(s.Provider,{value:!n&&r},i.createElement(a.Provider,{value:t},e))}}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],(function(){return e(4475),e(6070)}));var n=t.O();_N_E=n}]);