(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[788],{5110:function(){},4788:function(a,e,n){"use strict";n.r(e),n.d(e,{default:function(){return X}});var t=n(2791),s="HomePage_section_HomePage__jKM4+",l="HomePage_container_HomePage__rt41b",i="HomePage_container_daliNorma__uZC3S",r="HomePage_container_MonthStats__bSkCY",c=n(9439),o=n(5861),d=n(4687),m=n.n(d),u=n(5705),_=n(8007),h=n(9128),y={modal:"MyDailyNormaModal_modal__dpA03",header:"MyDailyNormaModal_header__SF9Ii",title:"MyDailyNormaModal_title__lBG8N",closeButton:"MyDailyNormaModal_closeButton__84DNY",closeIcon:"MyDailyNormaModal_closeIcon__1GLJg",formulaBody:"MyDailyNormaModal_formulaBody__zRAb3",formulaBlock:"MyDailyNormaModal_formulaBlock__L2ynD",formula:"MyDailyNormaModal_formula__glu7p",text:"MyDailyNormaModal_text__H4dBN",formulaText:"MyDailyNormaModal_formulaText__rhgEU",formulaExplain:"MyDailyNormaModal_formulaExplain__XyYnf",calc:"MyDailyNormaModal_calc__ZLL-T",calcTitle:"MyDailyNormaModal_calcTitle__JwDiC",calcForm:"MyDailyNormaModal_calcForm__ay8Gn",choiceGender:"MyDailyNormaModal_choiceGender__RcwV-",calcWeight:"MyDailyNormaModal_calcWeight__YH1Sa",calcLabel:"MyDailyNormaModal_calcLabel__PGSef",calcInput:"MyDailyNormaModal_calcInput__pVpMA",calcQuantity:"MyDailyNormaModal_calcQuantity__OvLSb",quantitytext:"MyDailyNormaModal_quantitytext__AzVwb",quantityInput:"MyDailyNormaModal_quantityInput__aV+te",drinkQuantity:"MyDailyNormaModal_drinkQuantity__cCGHJ",drinkInput:"MyDailyNormaModal_drinkInput__Z3zNU",saveButton:"MyDailyNormaModal_saveButton__98jnl"},N="MyDailyNormaModalBtn_saveButton__huOoj",x=n(3329),j=function(){return(0,x.jsx)("div",{children:(0,x.jsx)("button",{type:"submit",className:N,children:"Save"})})},p=n(9321),f=function(a){var e=a.onClose,n=(0,t.useState)({gender:"",weight:0,time:0,consumedWater:0}),s=(0,c.Z)(n,1)[0];(0,t.useEffect)((function(){var a=function(a){"Escape"===a.key&&e()};return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}}),[e]);var l=_.Ry().shape({gender:_.Z_().required("Gender is required"),weight:_.Rx().required("Weight is required").min(10,"Weight must be at least 10 kg"),time:_.Rx().required("Time is required").max(24,"Time must be at most 24 hours"),consumedWater:_.Rx().required("Consumed water is required").min(0,"Consumed water must be at least 0")}),i=function(){var a=(0,o.Z)(m().mark((function a(e,n){return m().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n.setSubmitting;case 1:case"end":return a.stop()}}),a)})));return function(e,n){return a.apply(this,arguments)}}();return(0,x.jsx)(p.Z,{onClose:e,children:(0,x.jsxs)("div",{className:y.modal,onClick:function(a){a.target===a.currentTarget&&e()},children:[(0,x.jsxs)("div",{className:y.header,children:[(0,x.jsx)("p",{className:y.title,children:"My daily norma"}),(0,x.jsx)("button",{className:y.closeButton,onClick:e,children:(0,x.jsx)(h.S1K,{className:y.closeIcon})})]}),(0,x.jsx)(u.J9,{initialValues:s,validationSchema:l,onSubmit:i,children:function(a){var e=a.isSubmitting;return(0,x.jsxs)(u.l0,{className:y.formulaBody,children:[(0,x.jsxs)("div",{className:y.formulaBlock,children:[(0,x.jsxs)("div",{className:y.formula,children:[(0,x.jsxs)("p",{className:y.text,children:["For girl:",(0,x.jsx)("span",{className:y.formulaText,children:"V=(M*0,03) + (T*0,4)"})]}),(0,x.jsxs)("p",{className:y.text,children:["For man:",(0,x.jsx)("span",{className:y.formulaText,children:"V=(M*0,04) + (T*0,6)"})]})]}),(0,x.jsx)("div",{children:(0,x.jsx)("p",{className:y.formulaExplain,children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})})]}),(0,x.jsxs)("div",{className:y.calc,children:[(0,x.jsx)("p",{className:y.calcTitle,children:"Calculate your rate:"}),(0,x.jsxs)("div",{className:y.calcForm,children:[(0,x.jsxs)("label",{children:[(0,x.jsx)(u.gN,{className:y.choiceGender,type:"radio",name:"gender",value:"woman"}),"For woman"]}),(0,x.jsxs)("label",{children:[(0,x.jsx)(u.gN,{className:y.choiceGender,type:"radio",name:"gender",value:"man"}),"For man"]}),(0,x.jsx)(u.Bc,{name:"gender",component:"div",className:y.error})]}),(0,x.jsxs)("div",{className:y.calcWeight,children:[(0,x.jsx)("label",{className:y.calcLabel,children:(0,x.jsx)("span",{children:"Your weight in kilograms:"})}),(0,x.jsx)(u.gN,{className:y.calcInput,type:"number",name:"weight",placeholder:"0"}),(0,x.jsx)(u.Bc,{name:"weight",component:"div",className:y.error})]}),(0,x.jsxs)("div",{className:y.calcWeight,children:[(0,x.jsx)("label",{className:y.calcLabel,children:"The time of active participation in sports or other activities with a high physical load in hours:"}),(0,x.jsx)(u.gN,{className:y.calcInput,type:"number",name:"time",placeholder:"0"}),(0,x.jsx)(u.Bc,{name:"time",component:"div",className:y.error})]}),(0,x.jsxs)("label",{className:y.calcQuantity,children:[(0,x.jsx)("span",{className:y.quantitytext,children:"The required amount of water in liters per day:"}),(0,x.jsx)("label",{className:y.quantityInput,children:"1.6L"})]})]}),(0,x.jsxs)("div",{className:y.drinkQuantity,children:[(0,x.jsx)("p",{className:y.calcTitle,children:"Write down how much water you will drink:"}),(0,x.jsx)(u.gN,{className:y.drinkInput,type:"number",name:"consumedWater",placeholder:"0",min:"0",max:"15Liters",step:"0.250Ml"}),(0,x.jsx)(u.Bc,{name:"consumedWater",component:"div",className:y.error})]}),(0,x.jsx)("div",{className:y.saveButton,children:(0,x.jsx)(j,{isSubmitting:e})})]})}})]})})},v={container:"DailyNorma_container__F2b73",contentsDailyNorma:"DailyNorma_contentsDailyNorma__1JDDf",titleDailyNorma:"DailyNorma_titleDailyNorma__YZ2MK",contentsDailyNormaWater:"DailyNorma_contentsDailyNormaWater__ihDOs",titleDailyNormaWater:"DailyNorma_titleDailyNormaWater__KSJZF",Button:"DailyNorma_Button__r6mMp"},M=function(){var a=(0,t.useState)(!1),e=(0,c.Z)(a,2),n=e[0],s=e[1],l=1.5.toFixed(1);return(0,x.jsxs)("div",{className:v.container,children:[(0,x.jsxs)("div",{className:v.contentsDailyNorma,children:[(0,x.jsx)("h3",{className:v.titleDailyNorma,children:"My daily norma"}),(0,x.jsxs)("div",{className:v.contentsDailyNormaWater,children:[(0,x.jsx)("p",{className:v.titleDailyNormaWater,children:"".concat(l," L")}),(0,x.jsx)("button",{className:v.Button,type:"button",onClick:function(){s(!0)},children:"Edit"})]})]}),(0,x.jsx)("div",{className:v.DailyNormaBackground}),n&&(0,x.jsx)(f,{onClose:function(){return s(!1)}})]})};var g=n.p+"static/media/sprite.a8721442ebb821c65ba361e33c92bada.svg",D="WaterRatioPanel_container__7PnQd",b="WaterRatioPanel_containerPanel__vi-Ba",W="WaterRatioPanel_panelText__iSRyb",w="WaterRatioPanel_percentsRange__Yu37K",k="WaterRatioPanel_percentsPoint__49X3f",T="WaterRatioPanel_percentsValue__f5uvO",B="WaterRatioPanel_valueCurent__MxpTt",L="WaterRatioPanel_valueNotCurent__Sguk+",S="WaterRatioPanel_addBtn__TfGpp",C=function(){return(0,x.jsxs)("div",{className:D,children:[(0,x.jsxs)("div",{className:b,children:[(0,x.jsx)("label",{className:W,children:"Today"}),(0,x.jsx)("input",{className:w,style:{backgroundSize:"".concat(50,"% 100%")},onChange:function(){},type:"range",value:"".concat(50),min:"0",max:"100",step:"1"}),(0,x.jsxs)("label",{className:k,children:[(0,x.jsx)("span",{children:"|"}),(0,x.jsx)("span",{children:"|"}),(0,x.jsx)("span",{children:"|"})]}),(0,x.jsxs)("label",{className:T,children:[(0,x.jsx)("span",{className:L,children:"0%"}),(0,x.jsx)("span",{className:B,children:"50%"}),(0,x.jsx)("span",{className:L,children:"100%"})]})]}),(0,x.jsxs)("button",{className:S,onClick:function(){},children:[(0,x.jsx)("svg",{children:(0,x.jsx)("use",{href:g+"#icon-plus"})}),(0,x.jsx)("span",{children:"Add water"})]})]})},P={monthHeader:"calendar_monthHeader__wTcDs",month:"calendar_month__IIWYv",monthBtn:"calendar_monthBtn__Ecxex",monthName:"calendar_monthName__wtEtX",dayliList:"calendar_dayliList__PVpjI",day:"calendar_day__PyFUu",daySpan:"calendar_daySpan__f2m5y",percent:"calendar_percent__iQ6NO"},I=n(5110),R=function(a){var e=a.month,n=a.waterConsumptionData,t=function(a){var e=n[{}];return e&&e.consumption<e.plan?"not-achieved":""};return(0,x.jsx)("ul",{className:P.dayliList,children:Array.from({length:new Date(e.getFullYear(),e.getMonth()+1,0).getDate()},(function(a,e){return e+1})).map((function(a){return(0,x.jsxs)("li",{className:P.day,onClick:function(){return(0,I.onDayClick)(a)},children:[(0,x.jsx)("span",{className:"".concat(t()," ").concat(P.daySpan),children:a}),(0,x.jsx)("p",{className:P.percent,children:"60%"})]},a)}))})},q=function(){var a=(0,t.useState)(new Date),e=(0,c.Z)(a,2),n=e[0],s=e[1],l=(0,t.useState)([]),i=(0,c.Z)(l,1)[0];return(0,x.jsxs)("div",{className:P.calendar,children:[(0,x.jsxs)("div",{className:P.monthHeader,children:[(0,x.jsx)("p",{className:P.month,children:"Month"}),(0,x.jsxs)("div",{className:P.monthHeaderBtn,children:[(0,x.jsx)("button",{className:P.monthBtn,onClick:function(){s((function(a){var e=new Date(a);return e.setMonth(e.getMonth()-1),e}))},children:"<"}),(0,x.jsxs)("span",{className:P.monthName,children:[n.toLocaleString("en-US",{month:"long"}),", ",n.getFullYear()]}),(0,x.jsx)("button",{className:P.monthBtn,onClick:function(){s((function(a){var e=new Date(a);return e.setMonth(e.getMonth()+1),e}))},children:">"})]})]}),(0,x.jsx)(R,{month:n,waterConsumptionData:i})]})},F="TodayWaterList_containerToday__TJfu1",H="TodayWaterList_todayText__uXr6+",E="TodayWaterList_containerList__4Syd9",Z="TodayWaterList_ulWrap__E5pvM",G="TodayWaterList_listItem__Nh9Nv",V="TodayWaterList_infoWrap__TEXcc",Y="TodayWaterList_wrapBtn__0g7WW",Q="TodayWaterList_volume__vm0bK",A="TodayWaterList_time__4fofH",J="TodayWaterList_editBtn__Knn2Q",K="TodayWaterList_deleteBtn__129sg",U="TodayWaterList_addBtn__UkIMC",O=function(){return(0,x.jsxs)("div",{className:F,children:[(0,x.jsx)("h2",{className:H,children:"Today"}),(0,x.jsx)("div",{className:E,children:(0,x.jsxs)("ul",{className:Z,children:[(0,x.jsxs)("li",{className:G,children:[(0,x.jsxs)("div",{className:V,children:[(0,x.jsx)("svg",{children:(0,x.jsx)("use",{href:g+"#cup"})}),(0,x.jsxs)("p",{className:Q,children:["250"," ml"]}),(0,x.jsx)("p",{className:A,children:function(a){return new Date(a).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})}("0")})]}),(0,x.jsxs)("div",{className:Y,children:[(0,x.jsx)("button",{className:J,onClick:function(){},children:(0,x.jsx)("svg",{children:(0,x.jsx)("use",{href:g+"#edit"})})}),(0,x.jsx)("button",{className:K,onClick:function(){},children:(0,x.jsx)("svg",{children:(0,x.jsx)("use",{href:g+"#trash"})})})]})]},"12121"),(0,x.jsxs)("button",{className:U,onClick:function(){},children:[(0,x.jsx)("svg",{children:(0,x.jsx)("use",{href:g+"#plus"})}),"Add water"]})]})})]})},X=function(){return(0,x.jsxs)("section",{className:s,children:[(0,x.jsx)("h2",{className:"visually-hidden","aria-label":"Water tracker",children:"Water tracker join us"}),(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:l,children:[(0,x.jsxs)("div",{className:i,children:[(0,x.jsx)(M,{}),(0,x.jsx)(C,{})]}),(0,x.jsxs)("div",{className:r,children:[(0,x.jsx)(O,{}),(0,x.jsx)(q,{})]})]})})]})}}}]);
//# sourceMappingURL=788.a9f3d6cf.chunk.js.map