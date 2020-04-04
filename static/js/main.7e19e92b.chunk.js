(this["webpackJsonphack-the-crisis"]=this["webpackJsonphack-the-crisis"]||[]).push([[1],{110:function(e,t,a){"use strict";a.r(t);var n,r=a(65),o=a(50),c=a(77),i=a.n(c),l=a(33),u=a(6),b={en:{translation:(n={},Object(u.a)(n,l.b.MODULE_NAME,"Home"),Object(u.a)(n,l.b.DATA_LOADING,"Loading data from GraphQL..."),Object(u.a)(n,l.b.DATA_ERROR,"Error when loading data from GraphQL :("),n)}},A=a(8),s=a(22),O=a.n(s),E=a(60),m=a(0),d=a.n(m),D=a(115),h=a(137),_=a(41),L=a(59),p=a(32),f=a(43),R=a(86),j={100:"#101010",80:"#1B1B1B",70:"#282828",60:"#2A2A2C",50:"#3B3D46",20:"#7F7F7F"},M={100:"#00C067",50:"#27C9B0"},N={100:"#FE3F59"},g="#fff",T={100:"#F6F6F6",50:"#BDBDBD"},G={100:"#F2F2F2",90:"#F5F4F4"},U={primary:{light:j[70],main:j[80],dark:j[100],contrastText:g},secondary:{light:M[50],main:M[50],dark:M[100],contrastText:g},warning:{main:N[100]},text:{primary:T[100],secondary:T[50]}},v={primary:{light:G[90],main:G[100],contrastText:j[50]},secondary:{light:M[50],main:M[100],contrastText:g},warning:{main:N[100]},text:{primary:j[50],secondary:j[20]}},I={typography:{useNextVariants:!0,fontFamily:["Muli","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}},y=Object(R.a)(Object(f.a)({},I,{palette:v})),w=Object(R.a)(Object(f.a)({},I,{palette:U})),F=a(66),P={API_URL:Object({NODE_ENV:"production",PUBLIC_URL:"/hack-the-crisis",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL},x=new F.a({uri:P.API_URL}),B=a(133),k=a(134),S=a(135),Q=a(136),C=a(138),W=Object(A.b)("common",{LOGIN:"LOGIN"}),H=a(49);function V(){var e=Object(H.a)(["\n  padding-top: 64px;\n"]);return V=function(){return e},e}var K=_.c.div(V()),J=function(e){var t=e.items,a=e.children,n=Object(o.b)(),r=n.t,c=n.i18n;return d.a.createElement(d.a.Fragment,null,d.a.createElement(B.a,null,d.a.createElement(k.a,null,d.a.createElement(S.a,{container:!0,justify:"space-between"},d.a.createElement(S.a,{item:!0},d.a.createElement(Q.a,null,"Place for Logo")),d.a.createElement(S.a,{item:!0},t.map((function(e){var t=e.label,a=e.path;return d.a.createElement(C.a,{key:a,to:a,component:L.b},r(t))}))),d.a.createElement(S.a,{item:!0},d.a.createElement(C.a,null,c.language),d.a.createElement(C.a,null,r(W.LOGIN)))))),d.a.createElement(K,null,a))},$=function(){return d.a.createElement("h3",null,"Page not found ",d.a.createElement("span",{role:"img","aria-label":"\ud83d\ude22"}))},q=a(61);function z(){var e=Object(H.a)(["\n  body {\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n  }\n"]);return z=function(){return e},e}var X,Y,Z,ee,te,ae=Object(_.b)(z()),ne=function(e){var t=e.modules,a=Object(m.useState)(!0),n=Object(E.a)(a,1)[0]?w:y,r=function(e){return e.reduce((function(e,t){return[].concat(Object(q.a)(e),Object(q.a)(t.routes))}),[])}(t),o=function(e){return e.reduce((function(e,t){return[].concat(Object(q.a)(e),[{label:t.label,path:t.path}])}),[])}(t);return d.a.createElement(D.a,{client:x},d.a.createElement(h.a,{theme:n},d.a.createElement(_.a,{theme:n},d.a.createElement(ae,null),d.a.createElement(L.a,null,d.a.createElement(J,{items:o},d.a.createElement(p.c,null,r.map((function(e){return d.a.createElement(p.a,Object.assign({key:e.path},e))})),d.a.createElement(p.a,{component:$})))))))},re=function(e){return e.error?d.a.createElement("h3",null,"Oh nooess!"):d.a.createElement("h3",null,"Loading...")},oe={i18n:b,routes:Object(A.a)("",[{path:"/",exact:!0,component:O()({loader:function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,139))},loading:re})}]),name:l.a,path:"",label:l.b.MODULE_NAME},ce=a(35),ie={i18n:{en:{translation:(X={},Object(u.a)(X,ce.b.MODULE_NAME,"Best deals"),Object(u.a)(X,ce.b.DATA_LOADING,"Loading data from GraphQL..."),Object(u.a)(X,ce.b.DATA_ERROR,"Error when loading data from GraphQL :("),X)}},routes:Object(A.a)("/best-deals",[{path:"/",exact:!0,component:O()({loader:function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,142))},loading:re})}]),name:ce.a,path:"/best-deals",label:ce.b.MODULE_NAME},le=a(36),ue={i18n:{en:{translation:(Y={},Object(u.a)(Y,le.b.MODULE_NAME,"Vouchers"),Object(u.a)(Y,le.b.DATA_LOADING,"Loading data from GraphQL..."),Object(u.a)(Y,le.b.DATA_ERROR,"Error when loading data from GraphQL :("),Y)}},routes:Object(A.a)("/vouchers",[{path:"/",exact:!0,component:O()({loader:function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,143))},loading:re})}]),name:le.a,path:"/vouchers",label:le.b.MODULE_NAME},be=a(37),Ae={i18n:{en:{translation:(Z={},Object(u.a)(Z,be.b.MODULE_NAME,"Businesses"),Object(u.a)(Z,be.b.DATA_LOADING,"Loading data from GraphQL..."),Object(u.a)(Z,be.b.DATA_ERROR,"Error when loading data from GraphQL :("),Z)}},routes:Object(A.a)("/businesses",[{path:"/",exact:!0,component:O()({loader:function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,144))},loading:re})}]),name:be.a,path:"/businesses",label:be.b.MODULE_NAME},se=a(38),Oe={i18n:{en:{translation:(ee={},Object(u.a)(ee,se.b.MODULE_NAME,"About us"),Object(u.a)(ee,se.b.DATA_LOADING,"Loading data from GraphQL..."),Object(u.a)(ee,se.b.DATA_ERROR,"Error when loading data from GraphQL :("),ee)}},routes:Object(A.a)("/about-us",[{path:"/",exact:!0,component:O()({loader:function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,145))},loading:re})}]),name:se.a,path:"/about-us",label:se.b.MODULE_NAME},Ee=a(39),me=[oe,ie,ue,Ae,Oe,{i18n:{en:{translation:(te={},Object(u.a)(te,Ee.b.MODULE_NAME,"Contact"),Object(u.a)(te,Ee.b.DATA_LOADING,"Loading data from GraphQL..."),Object(u.a)(te,Ee.b.DATA_ERROR,"Error when loading data from GraphQL :("),te)}},routes:Object(A.a)("/contact",[{path:"/",exact:!0,component:O()({loader:function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,146))},loading:re})}]),name:Ee.a,path:"/contact",label:Ee.b.MODULE_NAME}],de={en:{translation:Object(u.a)({},W.LOGIN,"Login")}},De=me.reduce((function(e,t){var a=t.i18n;return i()(e,a)}),de);r.a.use(o.a).init({resources:De,lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}});r.a;var he=a(42),_e=a.n(he);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));_e.a.render(d.a.createElement(ne,{modules:me}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(8),r="home";t.b=Object(n.b)(r,{MODULE_NAME:"MODULE_NAME",DATA_LOADING:"DATA_LOADING",DATA_ERROR:"DATA_ERROR"})},35:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(8),r="best-deals";t.b=Object(n.b)(r,{MODULE_NAME:"MODULE_NAME",DATA_LOADING:"DATA_LOADING",DATA_ERROR:"DATA_ERROR"})},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(8),r="vouchers";t.b=Object(n.b)(r,{MODULE_NAME:"MODULE_NAME",DATA_LOADING:"DATA_LOADING",DATA_ERROR:"DATA_ERROR"})},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(8),r="businesses";t.b=Object(n.b)(r,{MODULE_NAME:"MODULE_NAME",DATA_LOADING:"DATA_LOADING",DATA_ERROR:"DATA_ERROR"})},38:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(8),r="about-us";t.b=Object(n.b)(r,{MODULE_NAME:"MODULE_NAME",DATA_LOADING:"DATA_LOADING",DATA_ERROR:"DATA_ERROR"})},39:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(8),r="contact";t.b=Object(n.b)(r,{MODULE_NAME:"MODULE_NAME",DATA_LOADING:"DATA_LOADING",DATA_ERROR:"DATA_ERROR"})},8:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var n=a(6),r=a(43),o=a(60),c=function(e,t){return Object.entries(t).reduce((function(t,a){var c=Object(o.a)(a,2),i=c[0],l=c[1];return Object(r.a)({},t,Object(n.a)({},i,"".concat(e,"_").concat(l)))}),{})},i=function(e,t){return t.map((function(t){return Object(r.a)({},t,{path:"".concat(e).concat(t.path)})}))}},89:function(e,t,a){e.exports=a(110)}},[[89,2,3]]]);
//# sourceMappingURL=main.7e19e92b.chunk.js.map