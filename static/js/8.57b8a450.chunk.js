(this["webpackJsonphack-the-crisis"]=this["webpackJsonphack-the-crisis"]||[]).push([[8],{163:function(t,e,r){"use strict";r.d(e,"a",(function(){return v})),r.d(e,"b",(function(){return b}));var n=r(162),i=r(2),o=r(0),s=r(69),u=r(45),a=r(7),c=function(){function t(t,e){this.isMounted=!1,this.previousOptions={},this.context={},this.options={},this.options=t||{},this.context=e||{}}return t.prototype.getOptions=function(){return this.options},t.prototype.setOptions=function(t,e){void 0===e&&(e=!1),e&&!Object(u.a)(this.options,t)&&(this.previousOptions=this.options),this.options=t},t.prototype.unmount=function(){this.isMounted=!1},t.prototype.refreshClient=function(){var t=this.options&&this.options.client||this.context&&this.context.client;Object(a.b)(!!t,2);var e=!1;return t!==this.client&&(e=!0,this.client=t,this.cleanup()),{client:this.client,isNew:e}},t.prototype.verifyDocumentType=function(t,e){var r=Object(n.e)(t);Object(n.d)(e),Object(n.d)(r.type);Object(a.b)(r.type===e,3)},t}(),l=function(t){function e(e){var r=e.options,n=e.context,i=e.onNewData,o=t.call(this,r,n)||this;return o.previousData={},o.currentObservable={},o.runLazy=!1,o.runLazyQuery=function(t){o.cleanup(),o.runLazy=!0,o.lazyOptions=t,o.onNewData()},o.getExecuteResult=function(){var t=o.getQueryResult();return o.startQuerySubscription(),t},o.obsRefetch=function(t){return o.currentObservable.query.refetch(t)},o.obsFetchMore=function(t){return o.currentObservable.query.fetchMore(t)},o.obsUpdateQuery=function(t){return o.currentObservable.query.updateQuery(t)},o.obsStartPolling=function(t){o.currentObservable&&o.currentObservable.query&&o.currentObservable.query.startPolling(t)},o.obsStopPolling=function(){o.currentObservable&&o.currentObservable.query&&o.currentObservable.query.stopPolling()},o.obsSubscribeToMore=function(t){return o.currentObservable.query.subscribeToMore(t)},o.onNewData=i,o}return Object(i.c)(e,t),e.prototype.execute=function(){this.refreshClient();var t=this.getOptions(),e=t.skip,r=t.query;return(e||r!==this.previousData.query)&&(this.removeQuerySubscription(),this.previousData.query=r),this.updateObservableQuery(),this.isMounted&&this.startQuerySubscription(),this.getExecuteSsrResult()||this.getExecuteResult()},e.prototype.executeLazy=function(){return this.runLazy?[this.runLazyQuery,this.execute()]:[this.runLazyQuery,{loading:!1,networkStatus:s.b.ready,called:!1,data:void 0}]},e.prototype.fetchData=function(){var t=this.getOptions();if(t.skip||!1===t.ssr)return!1;var e=this.currentObservable.query;return!!e.getCurrentResult().loading&&e.result()},e.prototype.afterExecute=function(t){var e=this,r=(void 0===t?{}:t).lazy,n=void 0!==r&&r;return this.isMounted=!0,n&&!this.runLazy||(this.handleErrorOrCompleted(),setTimeout((function(){e.currentObservable.query&&e.currentObservable.query.resetQueryStoreErrors()}))),this.previousOptions=this.getOptions(),this.unmount.bind(this)},e.prototype.cleanup=function(){this.removeQuerySubscription(),delete this.currentObservable.query,delete this.previousData.result},e.prototype.getOptions=function(){var e=t.prototype.getOptions.call(this);return this.lazyOptions&&(e.variables=Object(i.a)(Object(i.a)({},e.variables),this.lazyOptions.variables),e.context=Object(i.a)(Object(i.a)({},e.context),this.lazyOptions.context)),this.runLazy&&delete e.skip,e},e.prototype.ssrInitiated=function(){return this.context&&this.context.renderPromises},e.prototype.getExecuteSsrResult=function(){var t,e=!1===this.getOptions().ssr,r=this.refreshClient().client.disableNetworkFetches,n={loading:!0,networkStatus:s.b.loading,called:!0,data:void 0};return e&&(this.ssrInitiated()||r)?n:(this.ssrInitiated()&&(t=this.context.renderPromises.addQueryPromise(this,this.getExecuteResult)||n),t)},e.prototype.prepareObservableQueryOptions=function(){var t=this.getOptions();this.verifyDocumentType(t.query,n.b.Query);var e=t.displayName||"Query";return!this.ssrInitiated()||"network-only"!==t.fetchPolicy&&"cache-and-network"!==t.fetchPolicy||(t.fetchPolicy="cache-first"),Object(i.a)(Object(i.a)({},t),{displayName:e,context:t.context,metadata:{reactComponent:{displayName:e}}})},e.prototype.initializeObservableQuery=function(){var t,e;if(this.ssrInitiated()&&(this.currentObservable.query=this.context.renderPromises.getSSRObservable(this.getOptions())),!this.currentObservable.query){var r=this.prepareObservableQueryOptions();this.previousData.observableQueryOptions=Object(i.a)(Object(i.a)({},r),{children:null}),this.currentObservable.query=this.refreshClient().client.watchQuery(Object(i.a)({},r)),this.ssrInitiated()&&(null===(e=null===(t=this.context)||void 0===t?void 0:t.renderPromises)||void 0===e||e.registerSSRObservable(this.currentObservable.query,r))}},e.prototype.updateObservableQuery=function(){if(this.currentObservable.query){var t=Object(i.a)(Object(i.a)({},this.prepareObservableQueryOptions()),{children:null});Object(u.a)(t,this.previousData.observableQueryOptions)||(this.previousData.observableQueryOptions=t,this.currentObservable.query.setOptions(t).catch((function(){})))}else this.initializeObservableQuery()},e.prototype.startQuerySubscription=function(){var t=this;if(!this.currentObservable.subscription&&!this.getOptions().skip){var e=this.currentObservable.query;this.currentObservable.subscription=e.subscribe({next:function(e){var r=e.loading,n=e.networkStatus,i=e.data,o=t.previousData.result;o&&o.loading===r&&o.networkStatus===n&&Object(u.a)(o.data,i)||t.onNewData()},error:function(e){if(t.resubscribeToQuery(),!e.hasOwnProperty("graphQLErrors"))throw e;var r=t.previousData.result;(r&&r.loading||!Object(u.a)(e,t.previousData.error))&&(t.previousData.error=e,t.onNewData())}})}},e.prototype.resubscribeToQuery=function(){this.removeQuerySubscription();var t=this.currentObservable.query.getLastError(),e=this.currentObservable.query.getLastResult();this.currentObservable.query.resetLastResults(),this.startQuerySubscription(),Object.assign(this.currentObservable.query,{lastError:t,lastResult:e})},e.prototype.getQueryResult=function(){var t=this.observableQueryFields(),e=this.getOptions();if(e.skip)t=Object(i.a)(Object(i.a)({},t),{data:void 0,error:void 0,loading:!1,called:!0});else{var r=this.currentObservable.query.getCurrentResult(),n=r.loading,o=r.partial,u=r.networkStatus,a=r.errors,c=r.error,l=r.data;if(a&&a.length>0&&(c=new s.a({graphQLErrors:a})),t=Object(i.a)(Object(i.a)({},t),{loading:n,networkStatus:u,error:c,called:!0}),n){var p=this.previousData.result&&this.previousData.result.data;t.data=p&&l?Object(i.a)(Object(i.a)({},p),l):p||l}else if(c)Object.assign(t,{data:(this.currentObservable.query.getLastResult()||{}).data});else{var b=this.currentObservable.query.options.fetchPolicy;if(e.partialRefetch&&!l&&o&&"cache-only"!==b)return Object.assign(t,{loading:!0,networkStatus:s.b.loading}),t.refetch(),t;t.data=l}}return t.client=this.client,this.previousData.loading=this.previousData.result&&this.previousData.result.loading||!1,this.previousData.result=t,t},e.prototype.handleErrorOrCompleted=function(){var t=this.currentObservable.query;if(t){var e=t.getCurrentResult(),r=e.data,n=e.loading,i=e.error;if(!n){var o=this.getOptions(),s=o.query,a=o.variables,c=o.onCompleted,l=o.onError;if(this.previousOptions&&!this.previousData.loading&&Object(u.a)(this.previousOptions.query,s)&&Object(u.a)(this.previousOptions.variables,a))return;c&&!i?c(r):l&&i&&l(i)}}},e.prototype.removeQuerySubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)},e.prototype.observableQueryFields=function(){return{variables:this.currentObservable.query.variables,refetch:this.obsRefetch,fetchMore:this.obsFetchMore,updateQuery:this.obsUpdateQuery,startPolling:this.obsStartPolling,stopPolling:this.obsStopPolling,subscribeToMore:this.obsSubscribeToMore}},e}(c);function p(t,e,r){void 0===r&&(r=!1);var s=Object(o.useContext)(Object(n.c)()),a=Object(o.useReducer)((function(t){return t+1}),0),c=a[0],p=a[1],b=e?Object(i.a)(Object(i.a)({},e),{query:t}):{query:t},h=Object(o.useRef)(!0),v=Object(o.useRef)(!1),d=Object(o.useRef)(),f=d.current||new l({options:b,context:s,onNewData:function(){!f.ssrInitiated()&&h.current?v.current=!0:p()}});f.setOptions(b),f.context=s,f.ssrInitiated()&&!d.current&&(d.current=f);var O=function(t,e){var r=Object(o.useRef)();return r.current&&Object(u.a)(e,r.current.key)||(r.current={key:e,value:t()}),r.current.value}((function(){return r?f.executeLazy():f.execute()}),{options:Object(i.a)(Object(i.a)({},b),{onError:void 0,onCompleted:void 0}),context:s,tick:c}),y=r?O[1]:O;return Object(o.useEffect)((function(){d.current||(d.current=f),h.current=!1,v.current&&(v.current=!1,p())})),Object(o.useEffect)((function(){return f.afterExecute({lazy:r})}),[y.loading,y.networkStatus,y.error,y.data]),Object(o.useEffect)((function(){return function(){return f.cleanup()}}),[]),O}function b(t,e){return p(t,e,!1)}var h=function(t){function e(e){var r=e.options,i=e.context,o=e.result,s=e.setResult,u=t.call(this,r,i)||this;return u.runMutation=function(t){void 0===t&&(t={}),u.onMutationStart();var e=u.generateNewMutationId();return u.mutate(t).then((function(t){return u.onMutationCompleted(t,e),t})).catch((function(t){if(u.onMutationError(t,e),!u.getOptions().onError)throw t}))},u.verifyDocumentType(r.mutation,n.b.Mutation),u.result=o,u.setResult=s,u.mostRecentMutationId=0,u}return Object(i.c)(e,t),e.prototype.execute=function(t){return this.isMounted=!0,this.verifyDocumentType(this.getOptions().mutation,n.b.Mutation),t.client=this.refreshClient().client,[this.runMutation,t]},e.prototype.afterExecute=function(){return this.isMounted=!0,this.unmount.bind(this)},e.prototype.cleanup=function(){},e.prototype.mutate=function(t){var e=this.getOptions(),r=e.mutation,n=e.variables,o=e.optimisticResponse,s=e.update,u=e.context,a=void 0===u?{}:u,c=e.awaitRefetchQueries,l=void 0!==c&&c,p=e.fetchPolicy,b=Object(i.a)({},t),h=Object.assign({},n,b.variables);return delete b.variables,this.refreshClient().client.mutate(Object(i.a)({mutation:r,optimisticResponse:o,refetchQueries:b.refetchQueries||this.getOptions().refetchQueries,awaitRefetchQueries:l,update:s,context:a,fetchPolicy:p,variables:h},b))},e.prototype.onMutationStart=function(){this.result.loading||this.getOptions().ignoreResults||this.updateResult({loading:!0,error:void 0,data:void 0,called:!0})},e.prototype.onMutationCompleted=function(t,e){var r=this.getOptions(),n=r.onCompleted,i=r.ignoreResults,o=t.data,u=t.errors,a=u&&u.length>0?new s.a({graphQLErrors:u}):void 0;this.isMostRecentMutation(e)&&!i&&this.updateResult({called:!0,loading:!1,data:o,error:a}),n&&n(o)},e.prototype.onMutationError=function(t,e){var r=this.getOptions().onError;this.isMostRecentMutation(e)&&this.updateResult({loading:!1,error:t,data:void 0,called:!0}),r&&r(t)},e.prototype.generateNewMutationId=function(){return++this.mostRecentMutationId},e.prototype.isMostRecentMutation=function(t){return this.mostRecentMutationId===t},e.prototype.updateResult=function(t){!this.isMounted||this.previousResult&&Object(u.a)(this.previousResult,t)||(this.setResult(t),this.previousResult=t)},e}(c);function v(t,e){var r=Object(o.useContext)(Object(n.c)()),s=Object(o.useState)({called:!1,loading:!1}),u=s[0],a=s[1],c=e?Object(i.a)(Object(i.a)({},e),{mutation:t}):{mutation:t},l=Object(o.useRef)();var p=(l.current||(l.current=new h({options:c,context:r,result:u,setResult:a})),l.current);return p.setOptions(c),p.context=r,Object(o.useEffect)((function(){return p.afterExecute()})),p.execute(u)}!function(t){function e(e){var r=e.options,n=e.context,i=e.setResult,o=t.call(this,r,n)||this;return o.currentObservable={},o.setResult=i,o.initialize(r),o}Object(i.c)(e,t),e.prototype.execute=function(t){if(!0===this.getOptions().skip)return this.cleanup(),{loading:!1,error:void 0,data:void 0,variables:this.getOptions().variables};var e=t;this.refreshClient().isNew&&(e=this.getLoadingResult());var r=this.getOptions().shouldResubscribe;return"function"===typeof r&&(r=!!r(this.getOptions())),!1!==r&&this.previousOptions&&Object.keys(this.previousOptions).length>0&&(this.previousOptions.subscription!==this.getOptions().subscription||!Object(u.a)(this.previousOptions.variables,this.getOptions().variables)||this.previousOptions.skip!==this.getOptions().skip)&&(this.cleanup(),e=this.getLoadingResult()),this.initialize(this.getOptions()),this.startSubscription(),this.previousOptions=this.getOptions(),Object(i.a)(Object(i.a)({},e),{variables:this.getOptions().variables})},e.prototype.afterExecute=function(){this.isMounted=!0},e.prototype.cleanup=function(){this.endSubscription(),delete this.currentObservable.query},e.prototype.initialize=function(t){this.currentObservable.query||!0===this.getOptions().skip||(this.currentObservable.query=this.refreshClient().client.subscribe({query:t.subscription,variables:t.variables,fetchPolicy:t.fetchPolicy}))},e.prototype.startSubscription=function(){this.currentObservable.subscription||(this.currentObservable.subscription=this.currentObservable.query.subscribe({next:this.updateCurrentData.bind(this),error:this.updateError.bind(this),complete:this.completeSubscription.bind(this)}))},e.prototype.getLoadingResult=function(){return{loading:!0,error:void 0,data:void 0}},e.prototype.updateResult=function(t){this.isMounted&&this.setResult(t)},e.prototype.updateCurrentData=function(t){var e=this.getOptions().onSubscriptionData;this.updateResult({data:t.data,loading:!1,error:void 0}),e&&e({client:this.refreshClient().client,subscriptionData:t})},e.prototype.updateError=function(t){this.updateResult({error:t,loading:!1})},e.prototype.completeSubscription=function(){var t=this.getOptions().onSubscriptionComplete;t&&t(),this.endSubscription()},e.prototype.endSubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)}}(c);!function(){function t(){this.queryPromises=new Map,this.queryInfoTrie=new Map}t.prototype.registerSSRObservable=function(t,e){this.lookupQueryInfo(e).observable=t},t.prototype.getSSRObservable=function(t){return this.lookupQueryInfo(t).observable},t.prototype.addQueryPromise=function(t,e){return this.lookupQueryInfo(t.getOptions()).seen?e():(this.queryPromises.set(t.getOptions(),new Promise((function(e){e(t.fetchData())}))),null)},t.prototype.hasPromises=function(){return this.queryPromises.size>0},t.prototype.consumeAndAwaitPromises=function(){var t=this,e=[];return this.queryPromises.forEach((function(r,n){t.lookupQueryInfo(n).seen=!0,e.push(r)})),this.queryPromises.clear(),Promise.all(e)},t.prototype.lookupQueryInfo=function(t){var e=this.queryInfoTrie,r=t.query,n=t.variables,i=e.get(r)||new Map;e.has(r)||e.set(r,i);var o=JSON.stringify(n),s=i.get(o)||{seen:!1,observable:null};return i.has(o)||i.set(o,s),s}}()},252:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return L}));var n=r(0),i=r.n(n),o=r(196),s=r(163),u=r(20),a=r(19),c=r(21),l=r(160);function p(){var t=Object(u.a)(["\n  font-weight: bold !important;\n  font-size: !important;\n  line-height: 24px !important;\n  margin-bottom: 10px !important;\n  letter-spacing: 0.25px;\n  color: ",";\n"]);return p=function(){return t},t}function b(){var t=Object(u.a)(["\n  font-family: Exo !important;\n  font-weight: 800 !important;\n  font-size: 27px !important;\n  line-height: 32px !important;\n  letter-spacing: 0.3375px;\n  color: ",";\n  text-align: left;\n"]);return b=function(){return t},t}function h(){var t=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 20px 33px;\n"]);return h=function(){return t},t}function v(){var t=Object(u.a)(["\n  width: 400px;\n  height: 400px;\n  background-color: ",";\n  border-radius: 18px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n"]);return v=function(){return t},t}function d(){var t=Object(u.a)(["\n  margin-bottom: 30px !important;\n  justify-content: center;\n"]);return d=function(){return t},t}function f(){var t=Object(u.a)(["\n  margin-top: 30px;\n"]);return f=function(){return t},t}function O(){var t=Object(u.a)(["\n  margin-top: 30px !important;\n  height: 47px;\n"]);return O=function(){return t},t}function y(){var t=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 40px 100px 40px 60px;\n  background-color: ",";\n"]);return y=function(){return t},t}function g(){var t=Object(u.a)(["\n  em {\n    font-style: normal;\n    color: ",";\n  }\n  margin-bottom: 30px !important;\n"]);return g=function(){return t},t}Object(a.c)(l.a)(g(),(function(t){return t.theme.palette.secondary.main}));var m=Object(a.c)(o.a)(y(),(function(t){return t.theme.palette.primary.main})),j=Object(a.c)(c.d)(O()),x=Object(a.c)(c.h)(f()),R=Object(a.c)(c.g)(d()),q=Object(a.c)(c.e)(v(),(function(t){return t.theme.palette.text.disabled})),Q=Object(a.c)(o.a)(h()),w=Object(a.c)(l.a)(b(),(function(t){return t.theme.palette.text.primary})),E=Object(a.c)(l.a)(p(),(function(t){return t.theme.palette.info.main})),S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.category,r=t.voucher;return i.a.createElement(m,{container:!0,justify:"center"},i.a.createElement(R,{title:"This Voucher ends in:",subtitle:"Hurry up!",date:r&&r.expirationDate?new Date(r.expirationDate):new Date}),i.a.createElement(q,{data:r},i.a.createElement(Q,{container:!0,direction:"column",alignItems:"flex-start"},i.a.createElement(E,null,null===e||void 0===e?void 0:e.name),i.a.createElement(w,null,null===r||void 0===r?void 0:r.name))),i.a.createElement(x,{oldPrice:(null===r||void 0===r?void 0:r.price)||0,newPrice:(null===r||void 0===r?void 0:r.promotion)||0}),i.a.createElement(j,{variant:"contained"},"Get this deal!"))},M=r(89);function D(){var t=Object(u.a)(["\n  query {\n    vouchersForYou {\n      id\n      name\n      imageUrl\n      description\n      expirationDate\n      price\n      promotion\n      tags {\n        name\n      }\n      business {\n        name\n        vouchers {\n          id\n          name\n          price\n          imageUrl\n        }\n      }\n    }\n  }\n"]);return D=function(){return t},t}var k=Object(M.b)(D());function P(){var t=Object(u.a)(["\n  em {\n    font-style: normal;\n    color: ",";\n  }\n"]);return P=function(){return t},t}function z(){var t=Object(u.a)(["\n  height: 100%;\n"]);return z=function(){return t},t}var C=Object(a.c)(o.a)(z()),I=Object(a.c)(l.a)(P(),(function(t){return t.theme.palette.secondary.main})),L=function(){var t=Object(s.b)(k,{}).data,e=(t=void 0===t?{}:t).vouchersForYou;return i.a.createElement(C,{container:!0},i.a.createElement(o.a,{xs:12,container:!0,justify:"center",alignItems:"center"},i.a.createElement(I,{color:"textPrimary",variant:"h2"},"Get the ",i.a.createElement("em",null,"best")," deals")),null===e||void 0===e?void 0:e.map((function(t,e){return i.a.createElement(o.a,{item:!0,xs:4,key:"best-deal-".concat(e)},i.a.createElement(S,{category:t.business.category,voucher:t}))})))}}}]);
//# sourceMappingURL=8.57b8a450.chunk.js.map