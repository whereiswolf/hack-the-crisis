(this["webpackJsonphack-the-crisis"]=this["webpackJsonphack-the-crisis"]||[]).push([[9],{242:function(e){e.exports=JSON.parse('[{"stylers":[{"visibility":"simplified"}]},{"stylers":[{"color":"#131314"}]},{"featureType":"water","stylers":[{"color":"#131313"},{"lightness":7}]},{"elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":25}]}]')},249:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W}));var a=n(39),r=n(0),i=n.n(r),l=n(163),c=n(196),o=n(21),u=n(44),s=n(20),m=n(89);function d(){var e=Object(s.a)(["\n  query Businesses($category: Int, $name: String) {\n    businesses(categoryId: $category, name: $name) {\n      id\n      name\n      imageUrl\n      amount\n    }\n  }\n"]);return d=function(){return e},e}var p={BUSINESSES:Object(m.b)(d())},b=n(19);function v(){var e=Object(s.a)(["\n  padding: 80px 64px 80px 0px;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n"]);return v=function(){return e},e}var y=b.c.div(v()),E=n(197),f=n(70),g=[{value:"list",label:"List"},{value:"map",label:"Business map"}],h=function(e){var t=e.listType,n=e.onChange,a=Object(f.c)().t;return i.a.createElement(c.a,{container:!0,spacing:2},g.map((function(e){var r=e.value,l=e.label;return i.a.createElement(c.a,{item:!0,key:l},i.a.createElement(E.a,{variant:"contained",color:t===r?"secondary":"primary",onClick:function(){return n(r)}},a(l)))})))},O=n(160);function j(){var e=Object(s.a)(["\n  em {\n    font-style: normal;\n    color: ",";\n  }\n"]);return j=function(){return e},e}var x=Object(b.c)(O.a)(j(),(function(e){return e.theme.palette.secondary.main})),S=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(x,{color:"textPrimary",variant:"h2"},"Businesses in need of ",i.a.createElement("em",null,"support")),i.a.createElement("br",null),i.a.createElement(O.a,{color:"textSecondary",variant:"body1"},"Ad ad minim est mollit deserunt duis qui reprehenderit minim laborum sit. Ipsum mollit est quis non ex ad sit. Lorem mollit exercitation dolore velit velit ad ut sint irure ut excepteur ad. Qui quis nostrud ad labore. Adipisicing ex enim irure labore magna anim laboris amet proident quis sint aute. Cillum id ex cupidatat id."))},T=n(72),C=n(71);function k(){var e=Object(s.a)(["\n  query {\n    categories {\n      id\n      name\n    }\n  }\n"]);return k=function(){return e},e}var I={CATEGORIES:Object(m.b)(k())},L={title:"-",value:""},A=[{value:"",title:"All"},{value:C.b.Local,title:"Local"},{value:C.b.Online,title:"Online"}],F=[{value:0,label:"Unsupported"},{value:1,label:"5-40%"},{value:2,label:"40-75%"},{value:3,label:"Over 75%"}],q=function(e){var t=e.level,n=e.onChange;return i.a.createElement(c.a,{container:!0,spacing:2},F.map((function(e){var a=e.value,r=e.label;return i.a.createElement(c.a,{item:!0,key:r},i.a.createElement(E.a,{variant:"contained",onClick:function(){return n(a)},color:t===a?"secondary":"primary"},r))})))},B=function(e){var t=e.onFind,n=function(){var e=Object(l.b)(I.CATEGORIES).data;return e?[L].concat(Object(T.a)(e.categories.map((function(e){var t=e.id;return{title:e.name,value:t}})))):[]}(),u=Object(r.useState)(""),s=Object(a.a)(u,2),m=s[0],d=s[1],p=Object(r.useState)(""),b=Object(a.a)(p,2),v=b[0],y=b[1],E=Object(r.useState)(""),f=Object(a.a)(E,2),g=f[0],h=f[1],j=Object(r.useState)(0),x=Object(a.a)(j,2),S=x[0],C=x[1];return i.a.createElement(c.a,{container:!0,direction:"column",spacing:2},i.a.createElement(c.a,{item:!0},i.a.createElement(O.a,{color:"textPrimary",variant:"h5"},"Let us help you")),i.a.createElement(c.a,{item:!0,container:!0,spacing:2},i.a.createElement(c.a,{item:!0,md:6},i.a.createElement(o.l,{name:"category",placeholder:"Business Category",options:n,onChange:d})),i.a.createElement(c.a,{item:!0,md:6},i.a.createElement(o.l,{name:"type",placeholder:"Type of service",options:A,onChange:y})),i.a.createElement(c.a,{item:!0,md:9},i.a.createElement(o.m,{name:"name",placeholder:"Find business by name",value:g,onChange:h})),i.a.createElement(c.a,{item:!0,container:!0,md:3,justify:"flex-end"},i.a.createElement(o.d,{fullWidth:!0,onClick:function(){return t({category:m,businessType:v,name:g,supportLevel:S})}},"Find")),i.a.createElement(c.a,{item:!0,container:!0,direction:"column"},i.a.createElement("br",null),i.a.createElement(O.a,{variant:"h6",color:"textPrimary"},"Find by support level"),i.a.createElement("br",null),i.a.createElement(q,{level:S,onChange:C}))))};function U(){var e=Object(s.a)(["\n  padding: 64px;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n"]);return U=function(){return e},e}var w=b.c.div(U()),P=function(e){var t=e.onFind,n=e.onListTypeChange,a=e.listType;return i.a.createElement(w,null,i.a.createElement(c.a,{container:!0,direction:"column",justify:"center",spacing:10},i.a.createElement(c.a,{item:!0,container:!0,direction:"column",justify:"center",spacing:2},i.a.createElement(c.a,{item:!0},i.a.createElement(h,{listType:a,onChange:n})),i.a.createElement(c.a,{item:!0},i.a.createElement(S,null))),i.a.createElement(c.a,{item:!0},i.a.createElement(B,{onFind:function(e){return t({category:(n=e).category||null,businessType:n.businessType||null,name:n.name||null});var n}}))))},G=n(221),$=n.n(G),J=n(51),N=n(241),R=n(242),z={lat:59.332652,lng:18.069259},K=function(e){var t=function(){var e=Object(N.usePosition)(!1),t=e.latitude,n=e.longitude;return void 0===t||void 0===n?z:{lat:t,lng:n}}();return i.a.createElement($.a,{bootstrapURLKeys:{key:J.d.MAPS_KEY},defaultCenter:t,center:t,defaultZoom:14,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){return function(e){return e.panTo(t)}(e.map)},options:{styles:R}})},M={category:null,businessType:null,name:null},W=function(){var e=Object(l.b)(p.BUSINESSES,{variables:M}),t=e.data,n=void 0===t?{businesses:[]}:t,s=e.refetch,m=n.businesses,d=localStorage.getItem("listType")||"list",b=Object(r.useState)(d),v=Object(a.a)(b,2),E=v[0],f=v[1],g=Object(u.useHistory)();return i.a.createElement(c.a,{container:!0,style:{height:"100%"}},i.a.createElement(c.a,{item:!0,md:5},i.a.createElement(P,{onFind:s,onListTypeChange:function(e){f(e),localStorage.setItem("listType",e)},listType:E})),i.a.createElement(c.a,{item:!0,md:7},"list"===E?i.a.createElement(y,null,i.a.createElement(o.f,{type:"business",items:m,onClick:function(e){var t=e.id;return g.push("/businesses/".concat(t))}})):i.a.createElement(K,null)))}}}]);
//# sourceMappingURL=9.71d9d976.chunk.js.map