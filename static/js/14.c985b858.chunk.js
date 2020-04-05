(this["webpackJsonphack-the-crisis"]=this["webpackJsonphack-the-crisis"]||[]).push([[14],{255:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return ke}));var a,r=t(39),o=t(0),i=t.n(o),c=t(166),u=t(205),m=t(163),l=t(199),s=t(20),p=t(9),d=t(25),b=t(92);function f(){var e=Object(d.a)(["\n  mutation CreateOneOrder(\n    $email: String!\n    $name: String!\n    $count: Int\n    $voucherId: Int\n  ) {\n    createOneOrder(\n      data: {\n        email: $email\n        name: $name\n        count: $count\n        voucher: { connect: { id: $voucherId } }\n      }\n    ) {\n      id\n    }\n  }\n"]);return f=function(){return e},e}function h(){var e=Object(d.a)(["\n  query Voucher($id: Int!) {\n    voucher(where: { id: $id }) {\n      id\n      name\n      imageUrl\n      description\n      price\n      promotion\n      tags {\n        name\n      }\n      business {\n        name\n        vouchers {\n          id\n          name\n          price\n          imageUrl\n        }\n      }\n    }\n  }\n"]);return h=function(){return e},e}var x=Object(b.b)(h()),v=Object(b.b)(f()),g="MYSELF",E="FRIEND",j=[{value:g,title:"The Voucher is for myself"},{value:E,title:"The Voucher is for someone else"}],O=(a={},Object(p.a)(a,g,{name:"Enter your full name",email:"Enter your email"}),Object(p.a)(a,E,{name:"Enter friend's full name",email:"Enter friend's email"}),a),y=t(10),w=t(94),k=t(93),P=t(202),C=t(210),I=t(257),S=t(19);function B(){var e=Object(d.a)(["\n  margin-bottom: 22px !important;\n"]);return B=function(){return e},e}function V(){var e=Object(d.a)(["\n  > div {\n    margin-right: 15px;\n  }\n"]);return V=function(){return e},e}var z=Object(S.c)(l.a)(V()),N=Object(S.c)(l.a)(B()),$=Object(P.a)((function(e){return Object(C.a)({orderInfo:{height:"360px"},orderImg:{height:"300px",width:"300px"}})})),F=function(e){var n=e.voucher,t=(n=void 0===n?{}:n).tags,a=void 0===t?[]:t,r=n.name,o=n.expirationDate,c=n.imageUrl,u=n.price,p=n.promotion,d=$();return i.a.createElement(l.a,{container:!0,spacing:0,className:d.orderInfo,justify:"center",alignItems:"center"},i.a.createElement(l.a,{container:!0,item:!0,xs:5,spacing:1,justify:"center",alignItems:"center"},i.a.createElement(I.a,{className:d.orderImg,alt:"order-image",src:c})),i.a.createElement(l.a,{container:!0,xs:7,direction:"column",justify:"space-between",spacing:1},i.a.createElement(z,{item:!0,xs:12},a&&a.map((function(e,n){return i.a.createElement(s.c,{key:n},e.name)}))),i.a.createElement(N,{item:!0,xs:12},i.a.createElement(m.a,{variant:"h4",color:"textPrimary"},r)),i.a.createElement(l.a,{container:!0,xs:12},i.a.createElement(l.a,{item:!0,xs:6},i.a.createElement(s.h,{oldPrice:u||0,newPrice:p||0,alignItems:"flex-start"})),i.a.createElement(l.a,{item:!0,xs:6},i.a.createElement(s.g,{title:"Ends in",date:new Date(o||new Date)})))))},U=t(200),A=t(51),q=function(){return i.a.createElement(l.a,{item:!0,xs:12},i.a.createElement(m.a,{variant:"h5",color:"textPrimary"},"Back this"," ",i.a.createElement(m.a,{color:"secondary",component:"span",variant:"h5"},"business")),i.a.createElement(m.a,{variant:"body1",color:"textSecondary"},"Do you want to show some extra love ? Pick the price and add it to the total amount of your current Voucher order."),i.a.createElement("br",null))};function D(){var e=Object(d.a)(["\n  margin-top: 10px !important;\n"]);return D=function(){return e},e}function T(){var e=Object(d.a)(["\n  margin-top: 30px !important;\n"]);return T=function(){return e},e}function G(){var e=Object(d.a)(["\n  max-height: 50px;\n"]);return G=function(){return e},e}function H(){var e=Object(d.a)(["\n  width: 100px !important;\n  margin-right: 20px !important;\n  * {\n    color: "," !important;\n  }\n  > div {\n    font-weight: 800;\n    background: ",";\n  }\n  input {\n    padding: 12px !important;\n  }\n"]);return H=function(){return e},e}function J(){var e=Object(d.a)(["\n  margin-top: 15px !important;\n  margin-bottom: 15px !important;\n  > div:nth-child(2) {\n    border-radius: 5px;\n    padding: 2px;\n    background-color: "," !important;\n  }\n"]);return J=function(){return e},e}function L(){var e=Object(d.a)(["\n  margin-top: -25px !important;\n  margin-bottom: 25px !important;\n"]);return L=function(){return e},e}function M(){var e=Object(d.a)(["\n  > button > span {\n    color: #fe3f59 !important;\n  }\n"]);return M=function(){return e},e}function Y(){var e=Object(d.a)(["\n  background-color: "," !important;\n  width: 42px;\n  height: 42px;\n  min-width: 0 !important;\n  padding: 0 !important;\n  > span {\n    padding: 0 !important;\n    font-size: 24px !important;\n  }\n"]);return Y=function(){return e},e}function R(){var e=Object(d.a)(["\n  color: ",";\n"]);return R=function(){return e},e}var Z=Object(S.c)(m.a)(R(),A.b.primary[50]),K=Object(S.c)(U.a)(Y(),A.b.primary[55]),Q=Object(S.c)(l.a)(M()),W=Object(S.c)(l.a)(L()),X=Object(S.c)(l.a)(J(),A.b.primary[55]),_=Object(S.c)(k.a)(H(),A.b.black,A.b.text[50]),ee=Object(S.c)(s.d)(G()),ne=Object(S.c)(q)(T()),te=Object(S.c)(l.a)(D()),ae=Object(P.a)((function(e){return Object(C.a)({root:{background:"#000",flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},orderConfig:{textAlign:"center",height:"90vh",background:e.palette.primary.main},orderInfo:{height:"400px"},orderBusiness:{flex:"1 1 auto",background:"#161616"},orderImg:{height:"340px",width:"340px"}})})),re=t(209),oe=function(e){return i.a.createElement("svg",Object.assign({width:"35",height:"32",viewBox:"0 0 35 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"inline-block"}},e),i.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M16.4694 30.8156C16.7844 31.0119 17.1422 31.1111 17.5 31.1111C17.8578 31.1111 18.2156 31.0119 18.5306 30.8156C19.2033 30.3956 35 20.3992 35 9.72222C35 4.36139 30.6386 0 25.2778 0C22.1783 0 19.3064 1.6275 17.5 4.04444C15.6936 1.6275 12.8217 0 9.72222 0C4.36139 0 0 4.36139 0 9.72222C0 20.3992 15.7967 30.3956 16.4694 30.8156Z",fill:"#27C9B0"}))};function ie(){var e=Object(d.a)(["\n  width: 80%;\n  height: 80%;\n  background-image: url('","');\n  background-size: cover;\n  background-position: center center;\n  border-radius: 100%;\n  box-sizing: border-box;\n  border: 5px solid ",";\n  box-shadow: 0 0 0 11px ",",\n    0 0 0 14px ",",\n    0 0 0 20px ",",\n    0 0 0 22px ",";\n"]);return ie=function(){return e},e}function ce(){var e=Object(d.a)(["\n  width: ","px !important;\n  height: ","px !important;\n"]);return ce=function(){return e},e}function ue(){var e=Object(d.a)([""]);return ue=function(){return e},e}function me(){var e=Object(d.a)(["\n  font-family: Exo !important;\n  font-weight: 500 !important;\n  font-size: 38px !important;\n  color: ",";\n  text-align: center;\n"]);return me=function(){return e},e}function le(){var e=Object(d.a)(["\n  font-family: Exo !important;\n  font-weight: 800 !important;\n  font-size: 55px !important;\n  color: ",";\n  text-align: center;\n"]);return le=function(){return e},e}function se(){var e=Object(d.a)(["\n  font-weight: 300 !important;\n  font-size: 15px !important;\n  line-height: 20px !important;\n  color: ",";\n  text-align: center;\n"]);return se=function(){return e},e}function pe(){var e=Object(d.a)(["\n  width: ","px !important;\n  height: ","px !important;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 18px;\n  box-sizing: border-box;\n  padding: 54px 60px 80px 60px;\n  outline: none;\n  background-color: ",";\n"]);return pe=function(){return e},e}function de(){var e=Object(d.a)(["\n  margin-left: 12px !important;\n"]);return de=function(){return e},e}var be=Object(S.c)(oe)(de()),fe=Object(S.c)(l.a)(pe(),950,700,(function(e){return e.theme.palette.primary.main})),he=Object(S.c)(m.a)(se(),(function(e){return e.theme.palette.text.secondary})),xe=Object(S.c)(m.a)(le(),(function(e){return e.theme.palette.secondary.main})),ve=Object(S.c)(m.a)(me(),(function(e){return e.theme.palette.info.dark})),ge=S.c.div(ue()),Ee=Object(S.c)(l.a)(ce(),200,200),je=(S.c.div(ie(),(function(e){return e.src}),(function(e){return e.theme.palette.secondary.main}),(function(e){return e.theme.palette.primary.main}),(function(e){return Object(y.c)(e.theme.palette.secondary.main,.35)}),(function(e){return e.theme.palette.primary.main}),(function(e){return Object(y.c)(e.theme.palette.secondary.main,.15)})),Object(P.a)((function(e){var n=e.palette;e.spacing,e.breakpoints;return Object(C.a)({avatar:{width:"80%",boxSizing:"border-box",height:"80%",border:"5px solid ".concat(n.secondary.main),boxShadow:"0 0 0 11px ".concat(n.primary.main,",\n    0 0 0 14px ").concat(Object(y.c)(n.secondary.main,.35),",\n    0 0 0 20px ").concat(n.primary.main,",\n    0 0 0 22px ").concat(Object(y.c)(n.secondary.main,.15),";")}})}))),Oe=function(e){var n=e.isOpen,t=void 0!==n&&n,a=e.description,r=void 0===a?"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\nveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\ncommodo consequat. Thank you from BingoBong team!;":a,o=e.imageUrl,c=e.onClick,u=je();return i.a.createElement(re.a,{open:t},i.a.createElement(fe,{container:!0,direction:"column",justify:"space-between",alignItems:"center"},i.a.createElement(Ee,{container:!0,justify:"center",alignItems:"center"},i.a.createElement(I.a,{src:o,className:u.avatar})),i.a.createElement(ge,null,i.a.createElement(ve,null,"Thank you for"),i.a.createElement(xe,null,"supporting us!",i.a.createElement(be,null),i.a.createElement(be,null),i.a.createElement(be,null))),i.a.createElement(he,null,r),i.a.createElement(s.d,{variant:"contained",onClick:c},"Find other amazing deals!")))},ye=t(44),we=function(e){var n=e.name;return i.a.createElement(te,{item:!0,xs:12},i.a.createElement(Z,{variant:"h6"},"Add other Vouchers from"," ",i.a.createElement(m.a,{color:"textPrimary",component:"span",variant:"h6"},n)))},ke=function(){var e,n,t=Object(y.d)(),a=Object(c.b)(x,{variables:{id:t}}).data,p=(a=void 0===a?{}:a).voucher,d=Object(ye.useHistory)(),b=Object(o.useState)(!1),f=Object(r.a)(b,2),h=f[0],P=f[1],C=function(){var e=Object(o.useState)(""),n=Object(r.a)(e,2),t=n[0],a=n[1],i=Object(o.useState)(0),c=Object(r.a)(i,2),u=c[0],m=c[1];return{submitBonusPrice:function(){m(u+(Number(t)||0)),a("0.00")},bonusPriceProps:{value:t,onChange:function(e){return a(e)},placeholder:"0.00"},totalBonusPrice:u,resetBonus:function(){return m(0)}}}(),I=C.totalBonusPrice,S=C.submitBonusPrice,B=C.bonusPriceProps,V=C.resetBonus,z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=Object(o.useState)(0),a=Object(r.a)(t,2),i=a[0],c=a[1],u=function(){return c(i+1)},m=function(){return i>0&&c(i-1)};return{addVoucher:u,removeVoucher:m,vouchersNumber:i,vouchersPrice:(i*e+n).toFixed(2)}}((null===p||void 0===p?void 0:p.promotion)||(null===p||void 0===p?void 0:p.price),I),N=z.addVoucher,$=z.removeVoucher,U=z.vouchersNumber,A=z.vouchersPrice,q=function(){var e=Object(o.useState)(g),n=Object(r.a)(e,2),t=n[0],a=n[1],i=Object(o.useState)(""),c=Object(r.a)(i,2),u=c[0],m=c[1],l=Object(o.useState)(""),s=Object(r.a)(l,2),p=s[0],d=s[1],b=Object(o.useState)(""),f=Object(r.a)(b,2),h=f[0],x=f[1];return{destinationProps:{controlledValue:t,onChange:function(e){return a(e)}},nameProps:{value:u,onChange:function(e){return m(e)},placeholder:O[t].name},emailProps:{value:p,onChange:function(e){return d(e)},placeholder:O[t].email},noteProps:t===E&&{value:h,onChange:function(e){return x(e)},placeholder:"Say something to your friend!"},resetForm:function(){m(""),d(""),x(""),a(g)}}}(),D=q.destinationProps,T=q.nameProps,G=q.emailProps,H=q.noteProps,J=q.resetForm,L=Object(c.a)(v,{onCompleted:function(e){P(!0),J(),V()}}),M=Object(r.a)(L,1)[0],Y=ae();return i.a.createElement("div",{className:Y.root},i.a.createElement(Oe,{imageUrl:null===p||void 0===p?void 0:p.imageUrl,isOpen:h,onClick:function(){return P(!1)}}),i.a.createElement(l.a,{container:!0,spacing:0},i.a.createElement(l.a,{container:!0,xs:8,spacing:0},i.a.createElement(l.a,{container:!0,direction:"column"},i.a.createElement(F,{voucher:p||{}}),i.a.createElement(l.a,{container:!0,spacing:0,className:Y.orderBusiness},i.a.createElement(l.a,{item:!0,xs:1}),i.a.createElement(l.a,{container:!0,item:!0,xs:11},i.a.createElement(l.a,{item:!0,xs:12},i.a.createElement(we,{name:null===p||void 0===p||null===(e=p.business)||void 0===e?void 0:e.name}),i.a.createElement(l.a,{item:!0,xs:12},i.a.createElement(s.f,{withHorizontalCards:!0,items:(null===p||void 0===p||null===(n=p.business)||void 0===n?void 0:n.vouchers)||[],onClick:function(e){var n=e.id;return d.push("/vouchers/".concat(n))}}))),i.a.createElement(l.a,{item:!0,xs:12},i.a.createElement(ne,null),i.a.createElement(_,Object.assign({},B,{InputProps:{startAdornment:i.a.createElement(u.a,{position:"start"},"\u20ac")}})),i.a.createElement(ee,{onClick:function(){return S()},variant:"outlined"},"Add to amount")))))),i.a.createElement(l.a,{container:!0,xs:4,className:Y.orderConfig,justify:"center",alignItems:"center"},i.a.createElement(l.a,{container:!0,xs:1}),i.a.createElement(l.a,{container:!0,xs:10,spacing:3},i.a.createElement(l.a,{item:!0,xs:12},i.a.createElement(m.a,{variant:"h4",color:"textPrimary"},"Complete Your"," ",i.a.createElement(m.a,{color:"secondary",component:"span",variant:"h4"},"order"))),i.a.createElement(l.a,{item:!0,xs:12},i.a.createElement(m.a,{variant:"body1",color:"textSecondary"},null===p||void 0===p?void 0:p.description)),i.a.createElement(l.a,{item:!0,xs:12},i.a.createElement(Z,{variant:"h6"},"Fill the fields below")),i.a.createElement(l.a,{item:!0,xs:12},i.a.createElement(w.a,Object.assign({options:j},D))),i.a.createElement(l.a,{item:!0,xs:12},i.a.createElement(k.a,T)),i.a.createElement(l.a,{item:!0,xs:12},i.a.createElement(k.a,G)),H&&i.a.createElement(l.a,{item:!0,xs:12},i.a.createElement(k.a,H)),i.a.createElement(X,{container:!0,xs:12,justify:"space-between"},i.a.createElement(Q,{item:!0,xs:2},i.a.createElement(K,{onClick:$,color:"secondary"},"-")),i.a.createElement(l.a,{item:!0,xs:8},i.a.createElement(m.a,{variant:"h6",color:"textPrimary"},"Buy ",U," Vouchers")),i.a.createElement(l.a,{item:!0,xs:2},i.a.createElement(K,{onClick:N,color:"secondary"},"+"))),i.a.createElement(l.a,{item:!0,xs:12},i.a.createElement(Z,{variant:"h5"},"Total Amount")),i.a.createElement(W,{item:!0,xs:12},i.a.createElement(m.a,{variant:"h4",color:"textPrimary"},"\u20ac ",A)),i.a.createElement(l.a,{item:!0,xs:12},i.a.createElement(s.d,{variant:"contained",onClick:function(){M({variables:{email:G.value,name:T.value,count:U,voucherId:t}})}},"Go to Payment"))),i.a.createElement(l.a,{container:!0,xs:1}))))}}}]);
//# sourceMappingURL=14.c985b858.chunk.js.map