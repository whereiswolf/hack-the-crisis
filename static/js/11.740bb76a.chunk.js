(this["webpackJsonphack-the-crisis"]=this["webpackJsonphack-the-crisis"]||[]).push([[11],{212:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return J}));var n,r=a(49),o=a(0),c=a.n(o),i=a(157),m=a(154),l=a(191),s=a(213),u=a(193),d=a(200),p=a(190),h=a(22),v=a(9),E=a(43),b=a(90);function x(){var e=Object(r.a)(["\n  query Voucher($id: Int!) {\n    voucher(where: { id: $id }) {\n      id\n      name\n      imageUrl\n      description\n      price\n      promotion\n      tags {\n        name\n      }\n      business {\n        name\n      }\n    }\n  }\n"]);return x=function(){return e},e}var f=Object(b.b)(x()),g="MYSELF",j="FRIEND",y=[{value:g,title:"The Voucher is for myself"},{value:j,title:"The Voucher is for someone else"}],O=(n={},Object(v.a)(n,g,{name:"Enter your full name",email:"Enter your email"}),Object(v.a)(n,j,{name:"Enter friend's full name",email:"Enter friend's email"}),n),P=a(13),k=a(83),w=a(41),V=a(91),C=a(92);function I(){var e=Object(r.a)(["\n  margin-top: 15px !important;\n  margin-bottom: 15px !important;\n  > div:nth-child(2) {\n    border-radius: 5px;\n    padding: 2px;\n    background-color: "," !important;\n  }\n"]);return I=function(){return e},e}function S(){var e=Object(r.a)(["\n  margin-top: -25px !important;\n  margin-bottom: 25px !important;\n"]);return S=function(){return e},e}function N(){var e=Object(r.a)(["\n  > button > span {\n    color: #fe3f59 !important;\n  }\n"]);return N=function(){return e},e}function A(){var e=Object(r.a)(["\n  background-color: "," !important;\n  width: 42px;\n  height: 42px;\n  min-width: 0 !important;\n  padding: 0 !important;\n  > span {\n    padding: 0 !important;\n    font-size: 24px !important;\n  }\n"]);return A=function(){return e},e}function B(){var e=Object(r.a)(["\n  color: ",";\n"]);return B=function(){return e},e}var F=Object(w.c)(m.a)(B(),k.b.primary[50]),T=Object(w.c)(l.a)(A(),k.b.primary[55]),U=Object(w.c)(p.a)(N()),q=Object(w.c)(p.a)(S()),D=Object(w.c)(p.a)(I(),k.b.primary[55]),G=Object(u.a)((function(e){return Object(d.a)({root:{background:"#000",flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},orderConfig:{textAlign:"center",height:"90vh",background:e.palette.primary.main},orderInfo:{height:"500px"},orderBusiness:{flex:"1 1 auto",background:"#161616"},orderImg:{height:"380px",width:"380px"}})})),J=function(){var e,t,a,n,r,l=Object(P.c)(),u=Object(i.a)(f,{variables:{id:l}}).data,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Object(o.useState)(0),a=Object(E.a)(t,2),n=a[0],r=a[1],c=function(){return r(n+1)},i=function(){return n>0&&r(n-1)};return{addVoucher:c,removeVoucher:i,vouchersNumber:n,vouchersPrice:(n*e).toFixed(2)}}(null===u||void 0===u||null===(e=u.voucher)||void 0===e?void 0:e.price),v=d.addVoucher,b=d.removeVoucher,x=d.vouchersNumber,k=d.vouchersPrice,w=function(){var e=Object(o.useState)(g),t=Object(E.a)(e,2),a=t[0],n=t[1],r=Object(o.useState)(""),c=Object(E.a)(r,2),i=c[0],m=c[1],l=Object(o.useState)(""),s=Object(E.a)(l,2),u=s[0],d=s[1],p=Object(o.useState)(""),h=Object(E.a)(p,2),v=h[0],b=h[1];return{destinationProps:{controlledValue:a,onChange:function(e){return n(e)}},nameProps:{value:i,onChange:function(e){return m(e)},placeholder:O[a].name},emailProps:{value:u,onChange:function(e){return d(e)},placeholder:O[a].email},noteProps:a===j&&{value:v,onChange:function(e){return b(e)},placeholder:"Say something to your friend!"}}}(),I=w.destinationProps,S=w.nameProps,N=w.emailProps,A=w.noteProps,B=G();return c.a.createElement("div",{className:B.root},c.a.createElement(p.a,{container:!0,spacing:0},c.a.createElement(p.a,{container:!0,xs:8,spacing:0},c.a.createElement(p.a,{container:!0,direction:"column"},c.a.createElement(p.a,{container:!0,spacing:0,className:B.orderInfo,justify:"center",alignItems:"center"},c.a.createElement(p.a,{container:!0,item:!0,xs:6,spacing:1,justify:"center",alignItems:"center"},c.a.createElement(s.a,{className:B.orderImg,alt:"order-image",src:null===u||void 0===u||null===(t=u.voucher)||void 0===t?void 0:t.imageUrl})),c.a.createElement(p.a,{item:!0,xs:6,spacing:1},c.a.createElement(m.a,{variant:"h4",color:"textPrimary"},null===u||void 0===u||null===(a=u.voucher)||void 0===a?void 0:a.name))),c.a.createElement(p.a,{container:!0,spacing:0,className:B.orderBusiness},c.a.createElement(p.a,{item:!0,xs:1}),c.a.createElement(p.a,{item:!0,xs:11},c.a.createElement(p.a,{item:!0,xs:12},c.a.createElement(F,{variant:"h6"},"Add other Vouchers from"," ",c.a.createElement(m.a,{color:"textPrimary",component:"span",variant:"h6"},null===u||void 0===u||null===(n=u.voucher)||void 0===n||null===(r=n.business)||void 0===r?void 0:r.name))),c.a.createElement(p.a,{item:!0,xs:12},c.a.createElement(m.a,{variant:"h5",color:"textPrimary"},"Back this"," ",c.a.createElement(m.a,{color:"secondary",component:"span",variant:"h5"},"business"))),c.a.createElement(p.a,null,c.a.createElement(m.a,{variant:"body1",color:"textSecondary"},"Do you want to show some extra love ? Pick the price and add it to the total amount of your current Voucher order.")))))),c.a.createElement(p.a,{container:!0,xs:4,className:B.orderConfig,justify:"center",alignItems:"center"},c.a.createElement(p.a,{container:!0,xs:1}),c.a.createElement(p.a,{container:!0,xs:10,spacing:3},c.a.createElement(p.a,{item:!0,xs:12},c.a.createElement(m.a,{variant:"h4",color:"textPrimary"},"Complete Your"," ",c.a.createElement(m.a,{color:"secondary",component:"span",variant:"h4"},"order"))),c.a.createElement(p.a,{item:!0,xs:12},c.a.createElement(m.a,{variant:"body1",color:"textSecondary"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.")),c.a.createElement(p.a,{item:!0,xs:12},c.a.createElement(F,{variant:"h6"},"Fill the fields below")),c.a.createElement(p.a,{item:!0,xs:12},c.a.createElement(V.a,Object.assign({options:y},I))),c.a.createElement(p.a,{item:!0,xs:12},c.a.createElement(C.a,S)),c.a.createElement(p.a,{item:!0,xs:12},c.a.createElement(C.a,N)),A&&c.a.createElement(p.a,{item:!0,xs:12},c.a.createElement(C.a,A)),c.a.createElement(D,{container:!0,xs:12,justify:"space-between"},c.a.createElement(U,{item:!0,xs:2},c.a.createElement(T,{onClick:b,color:"secondary"},"-")),c.a.createElement(p.a,{item:!0,xs:8},c.a.createElement(m.a,{variant:"h6",color:"textPrimary"},"Buy ",x," Vouchers")),c.a.createElement(p.a,{item:!0,xs:2},c.a.createElement(T,{onClick:v,color:"secondary"},"+"))),c.a.createElement(p.a,{item:!0,xs:12},c.a.createElement(F,{variant:"h5"},"Total Amount")),c.a.createElement(q,{item:!0,xs:12},c.a.createElement(m.a,{variant:"h4",color:"textPrimary"},"\u20ac ",k)),c.a.createElement(p.a,{item:!0,xs:12},c.a.createElement(h.b,{variant:"contained"},"Go to Payment"))),c.a.createElement(p.a,{container:!0,xs:1}))))}}}]);
//# sourceMappingURL=11.740bb76a.chunk.js.map