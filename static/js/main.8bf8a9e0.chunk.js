(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,function(e,t,n){e.exports={bothCounters:"App_bothCounters__3gPmO",container:"App_container__Gw0hg",buttons:"App_buttons__2jeqC",counter:"App_counter__1N54d",buttonBlock:"App_buttonBlock__2iESY",limit:"App_limit__1oH3s",message:"App_message__yZwKb",errorClass:"App_errorClass__v225h",countSetter:"App_countSetter__3mV2S",inputValueBlock:"App_inputValueBlock__1qH7v",spanInputTitle:"App_spanInputTitle__3ykRX",spanInputValue:"App_spanInputValue__1XztC",redInput:"App_redInput__2Y172"}},,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(5),s=n.n(r),u=(n(10),n(3)),l=n(1),o=n.n(l),i=(n(11),n(0)),j=function(e){var t=e.count,n=e.maxCount,a=e.correctData,c=e.error,r=t===n?o.a.limit:"";return Object(i.jsx)(i.Fragment,{children:c?Object(i.jsx)("div",{className:o.a.errorClass,children:"Incorrect value!"}):a?Object(i.jsx)("div",{className:r,children:t}):Object(i.jsx)("div",{className:o.a.message,children:"enter values and press 'set'"})})},p=function(e){var t=e.callback,n=e.title,a=e.condition;return Object(i.jsx)("span",{children:Object(i.jsx)("button",{disabled:a,className:o.a.buttons,onClick:t,children:n})})},b=function(e){var t=e.count,n=e.minValue,a=e.correctData,c=e.maxValue,r=e.setCount,s=e.error;return Object(i.jsxs)("div",{className:o.a.container,children:[Object(i.jsx)("div",{className:o.a.counter,children:Object(i.jsx)(j,{count:t,maxCount:c,correctData:a,error:s})}),Object(i.jsxs)("div",{className:o.a.buttonBlock,children:[Object(i.jsx)(p,{callback:function(){r(t+1)},title:"Inc",condition:t===c||!a}),Object(i.jsx)(p,{callback:function(){r(n)},title:"Reset",condition:t===n||!a})]})]})},m=function(e){var t=e.title,n=e.value,a=e.changingValue,c=e.error?o.a.redInput:o.a.spanInputValue;return Object(i.jsxs)("div",{className:o.a.inputValueBlock,children:[Object(i.jsxs)("span",{className:o.a.spanInputTitle,children:[t,":"]}),Object(i.jsx)("input",{value:n,type:"number",onChange:a,className:c})]})},d=function(e){var t=e.minValue,n=e.maxValue,a=e.setMaxValue,c=e.setMinValue,r=e.setCount,s=e.setCorrectData,u=e.error;return Object(i.jsxs)("div",{className:o.a.container,children:[Object(i.jsxs)("div",{className:o.a.countSetter,children:[Object(i.jsx)(m,{title:"Max value",value:n,changingValue:a,error:u}),Object(i.jsx)(m,{title:"Start value",value:t,changingValue:c,error:u})]}),Object(i.jsx)("div",{className:o.a.buttonBlock,children:Object(i.jsx)(p,{callback:function(){r(t),s(!0)},title:"Set",condition:u})})]})},_=function(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n},x=function(e,t){localStorage.setItem(e,JSON.stringify(t))};var O=function(){var e=Object(a.useState)(_("set minValue",0)),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(_("set maxValue",1)),s=Object(u.a)(r,2),l=s[0],j=s[1],p=Object(a.useState)(_("set count",n)),m=Object(u.a)(p,2),O=m[0],v=m[1],h=Object(a.useState)(!0),V=Object(u.a)(h,2),g=V[0],f=V[1],C=n>=l||n<0;return Object(a.useEffect)((function(){x("set minValue",n),x("set maxValue",l),x("set count",O)}),[n,l,O]),Object(i.jsxs)("div",{className:o.a.bothCounters,children:[Object(i.jsx)(d,{minValue:n,maxValue:l,setMinValue:function(e){var t=Number(e.currentTarget.value);c(t),f(!1)},setMaxValue:function(e){var t=Number(e.currentTarget.value);j(t),f(!1)},setCount:v,setCorrectData:f,error:C}),Object(i.jsx)(b,{count:O,minValue:n,maxValue:l,setCount:v,correctData:g,error:C})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),v()}],[[13,1,2]]]);
//# sourceMappingURL=main.8bf8a9e0.chunk.js.map