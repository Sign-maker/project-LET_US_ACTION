"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[708],{4708:function(e,a,t){t.r(a),t.d(a,{default:function(){return Je}});var n=t(2791),s="HomePage_section_HomePage__jKM4+",l="HomePage_container_HomePage__rt41b",r="HomePage_container_daliNorma__uZC3S",i="HomePage_container_MonthStats__bSkCY",o=t(9439),c=t(5861),d=t(4687),m=t.n(d),_=t(5705),u=t(8007),h=t(4651),y="MyDailyNormaModal_modal__dpA03",x="MyDailyNormaModal_header__SF9Ii",N="MyDailyNormaModal_title__lBG8N",p="MyDailyNormaModal_closeButton__84DNY",j="MyDailyNormaModal_closeIcon__1GLJg",v="MyDailyNormaModal_formulaBody__zRAb3",f="MyDailyNormaModal_formulaBlock__L2ynD",g="MyDailyNormaModal_formula__glu7p",M="MyDailyNormaModal_text__H4dBN",b="MyDailyNormaModal_formulaText__rhgEU",D="MyDailyNormaModal_formulaExplain__XyYnf",w="MyDailyNormaModal_calc__ZLL-T",S="MyDailyNormaModal_calcTitle__JwDiC",L="MyDailyNormaModal_calcForm__ay8Gn",W="MyDailyNormaModal_choiceGender__RcwV-",T="MyDailyNormaModal_genderText__-0+Lk",C="MyDailyNormaModal_calcWeight__YH1Sa",k="MyDailyNormaModal_calcLabel__PGSef",Z="MyDailyNormaModal_calcInput__pVpMA",B="MyDailyNormaModal_calcQuantity__OvLSb",P="MyDailyNormaModal_quantitytext__AzVwb",E="MyDailyNormaModal_quantityInput__aV+te",F="MyDailyNormaModal_drinkQuantity__cCGHJ",R="MyDailyNormaModal_drinkInput__Z3zNU",z="MyDailyNormaModal_error__8MvVi",H="MyDailyNormaModal_inputError__pX3td",O="MyDailyNormaModal_saveButton__98jnl",A="MyDailyNormaModalBtn_saveButton__huOoj",V=t(3329),I=function(){return(0,V.jsx)("div",{children:(0,V.jsx)("button",{type:"submit",className:A,children:"Save"})})},Y=t(4189),J=function(e){var a=e.onClose,t=(0,n.useState)(""),s=(0,o.Z)(t,2),l=s[0],r=s[1],i=(0,n.useState)(""),d=(0,o.Z)(i,2),A=d[0],J=d[1],q=(0,n.useState)("2.0"),U=(0,o.Z)(q,2),X=U[0],G=U[1],K=(0,n.useState)("female"),Q=(0,o.Z)(K,2),$=Q[0],ee=Q[1],ae=(0,n.useState)(2),te=(0,o.Z)(ae,2),ne=te[0],se=te[1],le=(0,n.useState)(!1),re=(0,o.Z)(le,2),ie=re[0],oe=re[1],ce=(0,Y.a)().updateMyDailyNorma;(0,n.useEffect)((function(){de(l,A,$)}),[l,A,$]),(0,n.useEffect)((function(){ie||G(ne.toString())}),[ne,ie]);var de=function(e,a,t){e>0&&a>=0?se(("female"===t?.03*e+.4*a:.04*e+.6*a).toFixed(1)):se(2)},me=function(){var e=(0,c.Z)(m().mark((function e(t){var n,s;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitting,e.prev=1,s={dailyNorma:parseFloat(X)>0?parseFloat(X):parseFloat(ne)},e.next=5,ce({dailyNorma:1e3*s.dailyNorma});case 5:a(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("Failed to update daily norma:",e.t0);case 11:return e.prev=11,n(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(a){return e.apply(this,arguments)}}(),_e=u.Ry({weight:u.Rx().min(10,"Weight must be at least 10 kg").when("time",(function(e,a){return e?a.required("Weight is required if time is provided"):a})),time:u.Rx().max(24,"Time must be at most 24 hours").nullable(),consumedWater:u.Rx().required("Consumed water is required").min(0,"Consumed water must be at least 0")});return(0,V.jsxs)("div",{className:y,children:[(0,V.jsxs)("div",{className:x,children:[(0,V.jsx)("p",{className:N,children:"My Daily Norma"}),(0,V.jsx)("button",{className:p,onClick:a,children:(0,V.jsx)(h.S1K,{className:j})})]}),(0,V.jsx)(_.J9,{initialValues:{weight:"",time:"",consumedWater:"2.0"},validationSchema:_e,onSubmit:me,children:function(e){var a=e.isSubmitting,t=e.errors,n=e.touched,s=e.setFieldValue;return(0,V.jsxs)(_.l0,{className:v,children:[(0,V.jsxs)("div",{className:f,children:[(0,V.jsxs)("div",{className:g,children:[(0,V.jsxs)("p",{className:M,children:["For girl:",(0,V.jsx)("span",{className:b,children:"V=(M*0.03) + (T*0.4)"})]}),(0,V.jsxs)("p",{className:M,children:["For man:",(0,V.jsx)("span",{className:b,children:"V=(M*0.04) + (T*0.6)"})]})]}),(0,V.jsx)("div",{children:(0,V.jsx)("p",{className:D,children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})})]}),(0,V.jsxs)("div",{className:w,children:[(0,V.jsx)("p",{className:S,children:"Calculate your rate:"}),(0,V.jsxs)("div",{className:L,children:[(0,V.jsxs)("label",{className:T,children:[(0,V.jsx)(_.gN,{className:W,type:"radio",name:"gender",value:"female",checked:"female"===$,onChange:function(){ee("female"),oe(!1)}}),"For woman"]}),(0,V.jsxs)("label",{className:T,children:[(0,V.jsx)(_.gN,{className:W,type:"radio",name:"gender",value:"male",checked:"male"===$,onChange:function(){ee("male"),oe(!1)}}),"For man"]}),t.gender&&n.gender&&(0,V.jsx)("div",{className:z,children:t.gender})]}),(0,V.jsxs)("div",{className:C,children:[(0,V.jsx)("label",{className:k,children:(0,V.jsx)("span",{children:"Your weight in kilograms:"})}),(0,V.jsx)(_.gN,{className:"".concat(Z," ").concat(t.weight&&n.weight?H:""),type:"number",name:"weight",placeholder:"0",onChange:function(e){s("weight",e.target.value),r(e.target.value),oe(!1)}}),t.weight&&n.weight&&(0,V.jsx)("div",{className:z,children:t.weight})]}),(0,V.jsxs)("div",{className:C,children:[(0,V.jsx)("label",{className:k,children:"The time of active participation in sports or other activities with a high physical load in hours:"}),(0,V.jsx)(_.gN,{className:"".concat(Z," ").concat(t.time&&n.time?H:""),type:"number",name:"time",placeholder:"0",onChange:function(e){s("time",e.target.value),J(e.target.value),oe(!1)}}),t.time&&n.time&&(0,V.jsx)("div",{className:z,children:t.time})]}),(0,V.jsxs)("label",{className:B,children:[(0,V.jsx)("span",{className:P,children:"The required amount of water in liters per day:"}),(0,V.jsxs)("label",{className:E,children:[ne," L"]})]})]}),(0,V.jsxs)("div",{className:F,children:[(0,V.jsx)("p",{className:S,children:"Write down how much water you will drink:"}),(0,V.jsx)(_.gN,{className:"".concat(R," ").concat(t.consumedWater&&n.consumedWater?H:""),type:"number",name:"consumedWater",placeholder:"0",min:"0",max:"15",step:"any",value:X,onChange:function(e){s("consumedWater",e.target.value),G(e.target.value),oe(!0)}}),t.consumedWater&&n.consumedWater&&(0,V.jsx)("div",{className:z,children:t.consumedWater})]}),(0,V.jsx)("div",{className:O,children:(0,V.jsx)(I,{isSubmitting:a})})]})}})]})},q={container:"DailyNorma_container__F2b73",contentsDailyNorma:"DailyNorma_contentsDailyNorma__1JDDf",titleDailyNorma:"DailyNorma_titleDailyNorma__YZ2MK",contentsDailyNormaWater:"DailyNorma_contentsDailyNormaWater__ihDOs",titleDailyNormaWater:"DailyNorma_titleDailyNormaWater__KSJZF",Button:"DailyNorma_Button__r6mMp"},U=t(9321),X=function(){var e=(0,n.useState)(!1),a=(0,o.Z)(e,2),t=a[0],s=a[1],l=((0,Y.a)().user.dailyNorma/1e3).toFixed(1),r=function(){s(!1)};return(0,V.jsxs)("div",{className:q.container,children:[(0,V.jsxs)("div",{className:q.contentsDailyNorma,children:[(0,V.jsx)("h3",{className:q.titleDailyNorma,children:"My daily norma"}),(0,V.jsxs)("div",{className:q.contentsDailyNormaWater,children:[(0,V.jsx)("p",{className:q.titleDailyNormaWater,children:"".concat(l," L")}),(0,V.jsx)("button",{className:q.Button,type:"button",onClick:function(){s(!0)},children:"Edit"})]})]}),(0,V.jsx)("div",{className:q.DailyNormaBackground}),t&&(0,V.jsx)(U.Z,{onClose:r,children:(0,V.jsx)(J,{onClose:r})})]})};var G,K,Q=t.p+"static/media/sprite.a8721442ebb821c65ba361e33c92bada.svg",$="WaterRatioPanel_container__7PnQd",ee="WaterRatioPanel_containerPanel__vi-Ba",ae="WaterRatioPanel_panelText__iSRyb",te="WaterRatioPanel_percentsRange__Yu37K",ne="WaterRatioPanel_percentsPoint__49X3f",se="WaterRatioPanel_percentsValue__f5uvO",le="WaterRatioPanel_valueCurent__MxpTt",re="WaterRatioPanel_valueNotCurent__Sguk+",ie="WaterRatioPanel_addBtn__TfGpp",oe=t(71),ce={modal_content:"TodayListModal_modal_content__SkrMT",header:"TodayListModal_header__tW7PW",btn_close:"TodayListModal_btn_close__R3WRc",icon_close:"TodayListModal_icon_close__urlyP",title:"TodayListModal_title__7lJcX",add_box_modal:"TodayListModal_add_box_modal__DVd0h",previos_info:"TodayListModal_previos_info__UIaUu",today_volume:"TodayListModal_today_volume__Aewf8",today_time:"TodayListModal_today_time__Xhp+T",add_water:"TodayListModal_add_water__hfqDL",add_water_container_btn:"TodayListModal_add_water_container_btn__4mBl2",button_ml:"TodayListModal_button_ml__oSTWh",increment_and_dicrement_icons:"TodayListModal_increment_and_dicrement_icons__lMJob",amount:"TodayListModal_amount__4APIU",amoun_water:"TodayListModal_amoun_water__uEUW1",add_paragraf:"TodayListModal_add_paragraf__OYKV2",add_time:"TodayListModal_add_time__smu3c",select:"TodayListModal_select__-fcAx",error_message:"TodayListModal_error_message__aeOON",inputError:"TodayListModal_inputError__LO63b",input_time:"TodayListModal_input_time__upV0b",input_number:"TodayListModal_input_number__njEGQ",modal_footer:"TodayListModal_modal_footer__hm-Y3",span_ml:"TodayListModal_span_ml__35RvB",add_save_btn:"TodayListModal_add_save_btn__9SyNz"},de=["title","titleId"];function me(){return me=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},me.apply(this,arguments)}function _e(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function ue(e,a){var t=e.title,s=e.titleId,l=_e(e,de);return n.createElement("svg",me({width:36,height:36,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:a,"aria-labelledby":s},l),t?n.createElement("title",{id:s},t):null,G||(G=n.createElement("path",{d:"M6.261 3.13 8.4 32.79v.08h18.412l2.139-29.646V3.13H6.26zM26.056 32.04H9.162L7.558 9.824h.882l1.45 19.578c.009.103.055.199.13.27.074.07.172.11.274.11h.034a.401.401 0 0 0 .356-.279.414.414 0 0 0 .02-.159L9.252 9.824H27.66l-1.604 22.215zm1.66-23.046H9.19l-.318-4.328a.423.423 0 0 0-.137-.274.412.412 0 0 0-.284-.107.413.413 0 0 0-.276.146.425.425 0 0 0-.1.299l.319 4.27h-.893l-.364-5.043h20.944l-.364 5.037z",fill:"#407BFF"})),K||(K=n.createElement("path",{d:"M12.78 13.932c.265 0 .525-.08.745-.23.221-.149.393-.362.495-.61a1.38 1.38 0 0 0-.291-1.485 1.325 1.325 0 0 0-1.463-.295 1.346 1.346 0 0 0-.602.502 1.376 1.376 0 0 0 .166 1.72c.252.255.594.398.95.398zm0-1.898a.524.524 0 0 1 .488.331.544.544 0 0 1-.114.585.527.527 0 0 1-.903-.38.54.54 0 0 1 .155-.38c.099-.1.233-.156.374-.156zM12.774 18.358c.003.268.085.53.235.752.15.222.36.394.607.494a1.324 1.324 0 0 0 1.457-.309 1.38 1.38 0 0 0 .28-1.484 1.357 1.357 0 0 0-.497-.607 1.329 1.329 0 0 0-1.697.182 1.363 1.363 0 0 0-.385.972zm1.866 0a.542.542 0 0 1-.327.495.522.522 0 0 1-.577-.116.54.54 0 0 1 .374-.916c.14 0 .275.057.375.157.099.1.155.237.155.38zM22.313 18.392c.265 0 .525-.08.746-.23.22-.149.392-.361.494-.61a1.38 1.38 0 0 0-.29-1.484 1.325 1.325 0 0 0-1.463-.295 1.347 1.347 0 0 0-.603.501 1.376 1.376 0 0 0 .167 1.72c.251.255.593.398.949.398zm0-1.892a.524.524 0 0 1 .49.332.543.543 0 0 1-.118.586.527.527 0 0 1-.901-.387.54.54 0 0 1 .157-.376.525.525 0 0 1 .372-.155zM17.637 15.825c.266 0 .525-.08.746-.23.22-.15.393-.362.495-.611a1.38 1.38 0 0 0-.291-1.484 1.326 1.326 0 0 0-1.463-.295 1.346 1.346 0 0 0-.603.501 1.376 1.376 0 0 0 .167 1.72c.252.255.593.399.95.399zm0-1.899a.524.524 0 0 1 .489.332.543.543 0 0 1-.115.584.527.527 0 0 1-.576.117.53.53 0 0 1-.327-.496.546.546 0 0 1 .145-.398.528.528 0 0 1 .384-.168v.03zM15.078 23.545c.005.221.075.436.2.617s.3.321.504.402a1.093 1.093 0 0 0 1.199-.262 1.13 1.13 0 0 0 .228-1.223 1.122 1.122 0 0 0-.409-.5 1.097 1.097 0 0 0-.613-.188 1.13 1.13 0 0 0-.786.348 1.163 1.163 0 0 0-.323.806zm1.109-.3a.293.293 0 0 1 .273.185.304.304 0 0 1-.064.327.295.295 0 0 1-.322.065.297.297 0 0 1-.183-.277c0-.08.031-.156.087-.212a.293.293 0 0 1 .209-.088zM20.441 22.293c.228.008.453-.054.646-.177s.345-.302.436-.514a1.17 1.17 0 0 0-.234-1.274 1.132 1.132 0 0 0-1.254-.25c-.21.09-.387.242-.51.437a1.166 1.166 0 0 0 .147 1.436c.204.21.48.332.77.342zm0-1.425c.079 0 .154.031.21.088a.303.303 0 0 1 0 .424.294.294 0 0 1-.42 0 .308.308 0 0 1-.091-.212.305.305 0 0 1 .089-.215.294.294 0 0 1 .212-.085zM22.785 12.98c.225 0 .445-.068.632-.194a1.15 1.15 0 0 0 .42-.518 1.17 1.17 0 0 0-.247-1.258 1.123 1.123 0 0 0-1.24-.25 1.142 1.142 0 0 0-.51.425 1.166 1.166 0 0 0 .14 1.457c.214.216.503.338.805.338zm0-1.425a.291.291 0 0 1 .26.049.298.298 0 0 1 .117.24.304.304 0 0 1-.117.239.294.294 0 0 1-.26.049.291.291 0 0 1-.26-.05.298.298 0 0 1-.117-.239.304.304 0 0 1 .118-.24.294.294 0 0 1 .26-.048zM11.665 30.59a.41.41 0 0 0-.218.247.422.422 0 0 0 .03.33.419.419 0 0 0 .364.225.382.382 0 0 0 .182-.04 12.27 12.27 0 0 1 5.614-1.385c2.067.03 4.104.496 5.984 1.368a.405.405 0 0 0 .465-.061.416.416 0 0 0 .104-.464.425.425 0 0 0-.216-.231 15.518 15.518 0 0 0-6.337-1.443c-2.076.002-4.122.5-5.972 1.454z",fill:"#407BFF"})))}var he=n.forwardRef(ue),ye=(t.p,t(3479)),xe=function(e){var a=e.onClose,t=e.isEditing,s=(0,n.useState)(""),l=(0,o.Z)(s,2),r=l[0],i=l[1],d=(0,n.useState)(""),h=(0,o.Z)(d,2),y=h[0],x=h[1],N=(0,n.useState)([]),p=(0,o.Z)(N,2),j=p[0],v=p[1];(0,n.useEffect)((function(){for(var e=new Date,a=e.getHours(),t=e.getMinutes(),n=[],s=a;s<24;s++)for(var l=0;l<60;l+=5)if(!(s===a&&l<t)){var r=String(s).padStart(2,"0"),i=String(l).padStart(2,"0"),o="".concat(r,":").concat(i);n.push(o)}var c=String(a).padStart(2,"0"),d=String(t).padStart(2,"0"),m="".concat(c,":").concat(d);x(m),v(n)}),[]);var f=new Date,g=String(f.getDate()).padStart(2,"0"),M=String(f.getMonth()+1).padStart(2,"0"),b=String(f.getFullYear()),D="".concat(g,".").concat(M,".").concat(b),w=function(e,a){var t=e>=12?"PM":"AM",n=e%12||12,s=String(a).padStart(2,"0");return"".concat(n,":").concat(s," ").concat(t)}(f.getHours(),f.getMinutes()),S=function(){i((function(e){return e||r||0}))},L=function(){var e=(0,c.Z)(m().mark((function e(t,n){var s,l,i,o,c;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=n.resetForm,n.setError,l=t.time,i=t.amount,o=l||y,c=i||r,console.log("Form values:",{amount:c,time:o,date:D}),s(),a();case 8:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),W=u.Ry().shape({amount:u.Rx().required("Amount is required").min(0,"Amount must be greater than or equal to 0").max(5e3,"Amount cannot exceed 5000")});return(0,V.jsx)(V.Fragment,{children:(0,V.jsxs)("div",{className:ce.modal_content,children:[(0,V.jsxs)("div",{className:ce.header,children:[(0,V.jsx)("h2",{className:ce.title,children:t?"Edit the entered amount of water":"Add water"}),(0,V.jsx)("button",{type:"button",className:ce.btn_close,onClick:a,children:(0,V.jsx)(oe.IOM,{className:ce.icon_close})})]}),(0,V.jsx)(_.J9,{initialValues:{amount:"",time:""},validationSchema:W,onSubmit:L,children:function(e){var a=e.errors,n=e.touched,s=e.setFieldValue,l=e.values;return(0,V.jsx)(_.l0,{autoComplete:"off",children:(0,V.jsxs)("div",{className:ce.add_box_modal,children:[t&&(0,V.jsxs)("div",{className:ce.previos_info,children:[(0,V.jsx)(he,{}),(0,V.jsxs)("p",{className:ce.today_volume,children:[l.amount||0," ml"]}),(0,V.jsx)("p",{className:ce.today_time,children:w})]}),(0,V.jsx)("h3",{children:"Correct entered data:"}),(0,V.jsxs)("div",{className:ce.add_water,children:[(0,V.jsx)("p",{className:ce.add_paragraf,children:"Amount of water:"}),(0,V.jsxs)("div",{className:ce.add_water_container_btn,children:[(0,V.jsx)("button",{type:"button",className:ce.button_ml,onClick:function(){var e=Number(l.amount||0)-50;s("amount",e>0?e:0)},children:(0,V.jsx)(ye.hXO,{className:ce.increment_and_dicrement_icons})}),(0,V.jsx)("div",{className:ce.amount,children:(0,V.jsxs)("p",{className:ce.amoun_water,children:[l.amount||0," ml"]})}),(0,V.jsx)("button",{type:"button",className:ce.button_ml,onClick:function(){var e=Number(l.amount||0)+50;s("amount",e<5e3?e:5e3)},children:(0,V.jsx)(ye.yJ4,{className:ce.increment_and_dicrement_icons})})]})]}),(0,V.jsxs)("div",{className:ce.add_time,children:[(0,V.jsx)("p",{className:ce.add_paragraf,children:"Recording time:"}),(0,V.jsxs)(_.gN,{as:"select",name:"time",style:{width:"100%"},className:ce.select,onChange:function(e){return x(e.target.value)},children:[(0,V.jsx)("option",{value:y,children:y},"current-time"),j.map((function(e){return(0,V.jsx)("option",{value:e,children:e},e)}))]})]}),(0,V.jsxs)("div",{children:[(0,V.jsx)("h3",{children:"Enter the value of the water used:"}),(0,V.jsx)(_.gN,{type:"number",className:"".concat(ce.input_number," ").concat(a.amount&&n.amount?ce.inputError:""),name:"amount",min:0,max:5e3,placeholder:"0",onBlur:S}),(0,V.jsx)(_.Bc,{name:"amount",component:"div",className:ce.errorMessage})]}),(0,V.jsxs)("div",{className:ce.modal_footer,children:[(0,V.jsxs)("span",{className:ce.span_ml,children:[l.amount||0," ml"]}),(0,V.jsx)("button",{className:ce.add_save_btn,type:"submit",children:"Save"})]})]})})}})]})})},Ne=function(){var e=(0,n.useState)(!0),a=(0,o.Z)(e,2),t=a[0],s=a[1],l=(0,n.useState)(!1),r=(0,o.Z)(l,2),i=r[0],c=r[1],d=(0,Y.a)().user,m=function(){s(!0)},_=750/(1e3*d.dailyNorma).toFixed(1)*100;return(0,V.jsxs)("div",{className:$,children:[(0,V.jsxs)("div",{className:ee,children:[(0,V.jsx)("label",{className:ae,children:"Today"}),(0,V.jsx)("input",{className:te,style:{backgroundSize:"".concat(_,"% 100%")},onChange:function(){},type:"range",value:"".concat(_),min:"0",max:"100",step:"1"}),(0,V.jsxs)("label",{className:ne,children:[(0,V.jsx)("span",{children:"|"}),(0,V.jsx)("span",{children:"|"}),(0,V.jsx)("span",{children:"|"})]}),(0,V.jsxs)("label",{className:se,children:[(0,V.jsx)("span",{className:0===_?le:re,children:"0%"}),(0,V.jsx)("span",{className:50===_?le:re,children:"50%"}),(0,V.jsx)("span",{className:_>=100?le:re,children:"100%"})]})]}),(0,V.jsxs)("button",{className:ie,onClick:function(){c(!1),s(!1)},children:[(0,V.jsx)("svg",{children:(0,V.jsx)("use",{href:Q+"#icon-plus"})}),(0,V.jsx)("span",{children:"Add water"})]}),!t&&(0,V.jsx)(U.Z,{onClose:m,children:(0,V.jsx)(xe,{onClose:m,isEditing:i})})]})},pe={monthHeader:"calendar_monthHeader__wTcDs",month:"calendar_month__IIWYv",monthHeaderBtn:"calendar_monthHeaderBtn__vNhcv",monthBtn:"calendar_monthBtn__Ecxex",monthName:"calendar_monthName__wtEtX",dayliList:"calendar_dayliList__PVpjI",day:"calendar_day__PyFUu",daySpan:"calendar_daySpan__f2m5y",percent:"calendar_percent__iQ6NO"},je={popup:"PopApCalendar_popup__mPxk3",currentDate:"PopApCalendar_currentDate__mX-iV",table:"PopApCalendar_table__836D-",tableList:"PopApCalendar_tableList__BxTJ6",listNorma:"PopApCalendar_listNorma__zhWli"},ve=function(e){var a=e.isOpen,t=e.onClose,s=e.selectedDay,l=e.selectedMonth,r=e.position,i=(0,n.useRef)(null),c=(0,n.useRef)(null),d=(0,n.useState)({x:r.x,y:r.y}),m=(0,o.Z)(d,2),_=m[0],u=m[1];return(0,n.useEffect)((function(){var e=function(e){"Escape"===e.key&&t()},n=function(e){i.current&&!i.current.contains(e.target)&&e.target!==c.current&&t()};return a&&(!function(){var e=c.current.getBoundingClientRect(),a=i.current.getBoundingClientRect(),t=r.x,n=r.y;r.x+a.width>e.right&&(t=e.right-a.width),u({x:t,y:n})}(),document.addEventListener("keydown",e),document.addEventListener("mousedown",n)),function(){document.removeEventListener("keydown",e),document.removeEventListener("mousedown",n)}}),[a,t,r]),a?(0,V.jsx)("div",{ref:c,children:(0,V.jsx)("div",{ref:i,className:je.popup,style:{top:_.y,left:_.x,position:"fixed"},children:(0,V.jsxs)("div",{className:je.popupContent,children:[(0,V.jsxs)("p",{className:je.currentDate,children:[s,", ",l]}),(0,V.jsxs)("ul",{className:je.table,children:[(0,V.jsxs)("li",{className:je.tableList,children:["Daily norma:",(0,V.jsx)("span",{className:je.listNorma,children:"1.5L"})]}),(0,V.jsxs)("li",{className:je.tableList,children:["Fulfillment of the daily norm:",(0,V.jsx)("span",{className:je.listNorma,children:"100%"})]}),(0,V.jsxs)("li",{className:je.tableList,children:["How many servings of water:",(0,V.jsx)("span",{className:je.listNorma,children:"6"})]})]})]})})}):null},fe=function(e){var a=e.month,t=(0,n.useState)(null),s=(0,o.Z)(t,2),l=s[0],r=s[1],i=(0,n.useState)(null),c=(0,o.Z)(i,2),d=c[0],m=c[1],_=(0,n.useState)(!1),u=(0,o.Z)(_,2),h=u[0],y=u[1],x=(0,n.useState)({x:0,y:0}),N=(0,o.Z)(x,2),p=N[0],j=N[1];return(0,V.jsxs)("div",{children:[(0,V.jsx)("ul",{className:pe.dayliList,children:Array.from({length:new Date(a.getFullYear(),a.getMonth()+1,0).getDate()},(function(e,a){return a+1})).map((function(e){return(0,V.jsxs)("li",{className:pe.day,onClick:function(t){return function(e,t){r(e),m(a.toLocaleString("en-US",{month:"long"})),y(!0),j({x:t.clientX,y:t.clientY})}(e,t)},children:[(0,V.jsx)("span",{className:pe.daySpan,children:e}),(0,V.jsx)("p",{className:pe.percent,children:"60%"})]},e)}))}),(0,V.jsx)("div",{className:pe.popupContainer,children:(0,V.jsx)(ve,{isOpen:h,onClose:function(){return y(!1)},selectedDay:l,selectedMonth:d,position:p})})]})},ge=function(){var e=(0,n.useState)(new Date),a=(0,o.Z)(e,2),t=a[0],s=a[1],l=(0,n.useState)([]),r=(0,o.Z)(l,1)[0];return(0,V.jsxs)("div",{className:pe.calendar,children:[(0,V.jsxs)("div",{className:pe.monthHeader,children:[(0,V.jsx)("p",{className:pe.month,children:"Month"}),(0,V.jsxs)("div",{className:pe.monthHeaderBtn,children:[(0,V.jsx)("button",{className:pe.monthBtn,onClick:function(){s((function(e){var a=new Date(e);return a.setMonth(a.getMonth()-1),a}))},children:"<"}),(0,V.jsxs)("span",{className:pe.monthName,children:[t.toLocaleString("en-US",{month:"long"}),", ",t.getFullYear()]}),(0,V.jsx)("button",{className:pe.monthBtn,onClick:function(){s((function(e){var a=new Date(e);return a.setMonth(a.getMonth()+1),a}))},children:">"})]})]}),(0,V.jsx)(fe,{month:t,waterConsumptionData:r})]})},Me="TodayWaterList_containerToday__TJfu1",be="TodayWaterList_todayText__uXr6+",De="TodayWaterList_containerList__4Syd9",we="TodayWaterList_ulWrap__E5pvM",Se="TodayWaterList_listItem__Nh9Nv",Le="TodayWaterList_waterItem__+fvoc",We="TodayWaterList_infoWrap__TEXcc",Te="TodayWaterList_wrapBtn__0g7WW",Ce="TodayWaterList_volume__vm0bK",ke="TodayWaterList_time__4fofH",Ze="TodayWaterList_editBtn__Knn2Q",Be="TodayWaterList_deleteBtn__129sg",Pe="TodayWaterList_addBtn__UkIMC",Ee="DeleteWaterModal_modal_text__D8zlv",Fe="DeleteWaterModal_modal_content__vhJ+t",Re="DeleteWaterModal_header__+o3cH",ze="DeleteWaterModal_btn_close__bcafC",He="DeleteWaterModal_icon_close__Kviru",Oe="DeleteWaterModal_btn_container__DMZGt",Ae="DeleteWaterModal_btn_cancel__-LcoH",Ve="DeleteWaterModal_btn_logout__r249Z",Ie=function(e){var a=e.onClose;return(0,V.jsx)(V.Fragment,{children:(0,V.jsxs)("div",{className:Fe,children:[(0,V.jsxs)("div",{className:Re,children:[(0,V.jsx)("h2",{children:"Delete entry"}),(0,V.jsx)("button",{type:"button",className:ze,onClick:a,children:(0,V.jsx)(oe.IOM,{className:He})})]}),(0,V.jsx)("p",{className:Ee,children:"Are you sure you want to delete the entry?"}),(0,V.jsxs)("div",{className:Oe,children:[(0,V.jsx)("button",{type:"button",className:Ae,onClick:a,children:"Cancel"}),(0,V.jsx)("button",{type:"button",className:Ve,children:"Delete"})]})]})})},Ye=function(){var e=(0,n.useState)(!0),a=(0,o.Z)(e,2),t=a[0],s=a[1],l=(0,n.useState)(!1),r=(0,o.Z)(l,2),i=r[0],c=r[1],d=(0,n.useState)(!1),m=(0,o.Z)(d,2),_=m[0],u=m[1],h=function(){u(!0)},y=function(){u(!1)},x=function(){s(!0)},N=function(){c(!0),s(!1)},p=function(e){return new Date(e).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})},j=[{_id:"id-1",amountWater:"500",date:"4"},{_id:"id-2",amountWater:"500",date:"4"},{_id:"id-3",amountWater:"500",date:"6"},{_id:"id-4",amountWater:"500",date:"2"}];return(0,V.jsxs)("div",{className:Me,children:[(0,V.jsx)("h2",{className:be,children:"Today"}),(0,V.jsx)("div",{className:De,children:(0,V.jsxs)("ul",{className:we,children:[(null===j||void 0===j?void 0:j.length)>0?j.slice().sort((function(e,a){return new Date(e.date).getTime()-new Date(a.date).getTime()})).map((function(e){var a=e.amountWater,t=e.date,n=e._id;return(0,V.jsxs)("li",{className:Se,children:[(0,V.jsxs)("div",{className:We,children:[(0,V.jsx)("svg",{children:(0,V.jsx)("use",{href:Q+"#cup"})}),(0,V.jsxs)("p",{className:Ce,children:[a," ml"]}),(0,V.jsx)("p",{className:ke,children:p(t)})]}),(0,V.jsxs)("div",{className:Te,children:[(0,V.jsx)("button",{className:Ze,onClick:N,children:(0,V.jsx)("svg",{children:(0,V.jsx)("use",{href:Q+"#edit"})})}),(0,V.jsx)("button",{className:Be,onClick:h,children:(0,V.jsx)("svg",{children:(0,V.jsx)("use",{href:Q+"#trash"})})})]})]},n)})):(0,V.jsx)("li",{children:(0,V.jsx)("p",{className:Le,children:"No notes yet"})}),(0,V.jsxs)("button",{className:Pe,onClick:function(){c(!1),s(!1)},children:[(0,V.jsx)("svg",{children:(0,V.jsx)("use",{href:Q+"#plus"})}),"Add water"]}),_&&(0,V.jsx)(U.Z,{onClose:y,children:(0,V.jsx)(Ie,{onClose:y})}),!t&&(0,V.jsx)(U.Z,{onClose:x,children:(0,V.jsx)(xe,{onClose:function(){c(!1),x()},isEditing:i})})]})})]})},Je=function(){return(0,V.jsxs)("section",{className:s,children:[(0,V.jsx)("h2",{className:"visually-hidden","aria-label":"Water tracker",children:"Water tracker join us"}),(0,V.jsx)("div",{className:"container",children:(0,V.jsxs)("div",{className:l,children:[(0,V.jsxs)("div",{className:r,children:[(0,V.jsx)(X,{}),(0,V.jsx)(Ne,{})]}),(0,V.jsxs)("div",{className:i,children:[(0,V.jsx)(Ye,{}),(0,V.jsx)(ge,{})]})]})})]})}}}]);
//# sourceMappingURL=708.00deae7d.chunk.js.map