(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(1240)}])},1240:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return M}});var r=e(5893),i=e(9008),o=e(214),a=e.n(o),s=e(7294),u=e(9813),l=e.n(u),c=e(7650),d=e(1770),h=e(5344),m=e(2128),v=e(3321),f=e(6447),j=e(7357),x=e(5861),p=function(){var n=(0,s.useState)(new Date),t=n[0],e=n[1];return(0,s.useEffect)((function(){setInterval((function(){return e(new Date)}),1e3)}),[]),(0,r.jsx)(x.Z,{variant:"h4",gutterBottom:!0,component:"div",children:t.toLocaleDateString("en-GB",{hour:"numeric",minute:"numeric",second:"numeric",day:"numeric",month:"short",year:"numeric"})})},C=e(3952),_=e.n(C),Z=function(){return(0,r.jsx)("div",{className:_().footerContainer,children:"Hardik Naik"})},b=e(7857);function g(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function y(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){g(n,t,e[t])}))}return n}var w=function(){var n=(0,s.useState)(null),t=n[0],e=n[1],i=(0,s.useState)(null),o=i[0],a=i[1],u=(0,s.useState)(null),C=u[0],_=u[1],g=function(n,t){return t.getMonth()-n.getMonth()+12*(t.getFullYear()-n.getFullYear())},w=function(n,t){var e=new Date(t-n);return Math.abs(e.getUTCFullYear()-1970)};return(0,r.jsxs)("div",{className:l().mainContainer,children:[(0,r.jsxs)("div",{className:l().titleContainer,children:[(0,r.jsx)("h1",{children:"Date & Time Calculator"}),(0,r.jsx)(p,{})]}),(0,r.jsx)("div",{className:l().dateContainer,children:(0,r.jsxs)(h.Z,{dateAdapter:d.Z,children:[(0,r.jsx)(f.Z,{spacing:3,children:(0,r.jsx)(m.Z,{disableFuture:!0,label:"From Date",openTo:"year",views:["year","month","day"],value:t,onChange:function(n){e(n)},renderInput:function(n){return(0,r.jsx)(c.Z,y({},n))}})}),(0,r.jsx)(f.Z,{spacing:3,children:(0,r.jsx)(m.Z,{disableFuture:!0,label:"To Date",openTo:"year",views:["year","month","day"],value:o,onChange:function(n){a(n)},renderInput:function(n){return(0,r.jsx)(c.Z,y({},n))},minDate:t})})]})}),(0,r.jsxs)("div",{className:l().buttonContainer,children:[(0,r.jsx)(v.Z,{variant:"outlined",onClick:function(){e(null),a(null),_(null)},children:"Clear"}),(0,r.jsx)(v.Z,{variant:"contained",onClick:function(){var n={};n.millisecond=Math.abs(o-t),n.second=Math.round(n.millisecond/1e3),n.minutes=Math.round(n.second/60),n.hours=Math.round(n.minutes/60),n.days=Math.round(n.hours/24),n.months=g(new Date(t),new Date(o)),n.years=w(new Date(t),new Date(o)),_(n)},disabled:!t||!o,children:"Calculate"})]}),C&&(0,r.jsx)("div",{className:l().dateContainer,children:(0,r.jsxs)(j.Z,{sx:{width:"100%",maxWidth:500},children:[0!=C.years&&(0,r.jsxs)(x.Z,{variant:"h6",gutterBottom:!0,component:"div",children:["Years: ",(0,r.jsx)(b.ZP,{start:0,end:null===C||void 0===C?void 0:C.years,duration:1.5})]}),0!=C.months&&(0,r.jsxs)(x.Z,{variant:"h6",gutterBottom:!0,component:"div",children:["Months: ",(0,r.jsx)(b.ZP,{start:0,end:null===C||void 0===C?void 0:C.months,duration:1.5})]}),(0,r.jsxs)(x.Z,{variant:"h6",gutterBottom:!0,component:"div",children:["Days: ",(0,r.jsx)(b.ZP,{start:0,end:null===C||void 0===C?void 0:C.days,duration:1.5})]}),(0,r.jsxs)(x.Z,{variant:"h6",gutterBottom:!0,component:"div",children:["Hours: ",(0,r.jsx)(b.ZP,{start:0,end:null===C||void 0===C?void 0:C.hours,duration:1.5})]}),(0,r.jsxs)(x.Z,{variant:"h6",gutterBottom:!0,component:"div",children:["Minutes: ",(0,r.jsx)(b.ZP,{start:0,end:null===C||void 0===C?void 0:C.minutes,duration:1.5})]}),(0,r.jsxs)(x.Z,{variant:"h6",gutterBottom:!0,component:"div",children:["Seconds: ",(0,r.jsx)(b.ZP,{start:0,end:null===C||void 0===C?void 0:C.second,duration:1.5})]}),(0,r.jsxs)(x.Z,{variant:"h6",gutterBottom:!0,component:"div",children:["Milliseconds: ",(0,r.jsx)(b.ZP,{start:0,end:null===C||void 0===C?void 0:C.millisecond,duration:1.5})]})]})}),(0,r.jsx)(Z,{})]})};function M(){return(0,r.jsxs)("div",{className:a().container,children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Time Calculator"}),(0,r.jsx)("meta",{name:"description",content:"Time Calculate with Years Months Days Hours Minutes Seconds"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(w,{})]})}},3952:function(n){n.exports={footerContainer:"Footer_footerContainer__nH_FT"}},214:function(){},9813:function(n){n.exports={mainContainer:"Main_mainContainer__xsoCv",dateContainer:"Main_dateContainer__4qWp7",buttonContainer:"Main_buttonContainer__ABA3m",titleContainer:"Main_titleContainer__utq7b"}}},function(n){n.O(0,[446,774,888,179],(function(){return t=8581,n(n.s=t);var t}));var t=n.O();_N_E=t}]);