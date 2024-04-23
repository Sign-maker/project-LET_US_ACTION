"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[454],{3549:function(s,e,r){var a=r(5861),n=r(1413),o=r(9439),i=r(4687),t=r.n(i),c=r(2791),l=r(5705),m=r(8007),d=r(8617),u=r(7689),p=r(1087),h=r(4189),_=r(6564),w=r(7186),Z=r(9346),f=r(3329);e.Z=function(){var s=(0,h.a)(),e=s.logIn,r=s.register,i=(0,u.TH)(),x=(0,c.useState)(!1),g=(0,o.Z)(x,2),N=g[0],j=g[1],v=(0,c.useState)(!1),F=(0,o.Z)(v,2),b=F[0],C=F[1],S=(0,c.useState)(!1),A=(0,o.Z)(S,2),I=A[0],k=A[1],y=function(){j(!N)},E=function(){C(!b)},P="/signup"===i.pathname,R=P?{email:"",password:"",confirmPassword:""}:{email:"",password:""},q=m.Ry((0,n.Z)({email:m.Z_().email("Invalid email address").required("Email is required"),password:m.Z_().min(8,"Password must be at least 8 characters").max(64,"Password must be no more than 64 characters").required("Password is required")},P&&{confirmPassword:m.Z_().oneOf([m.iH("password"),null],"Passwords must match").required("Confirm password is required")})),M=function(){var s=(0,a.Z)(t().mark((function s(a,n){var o,i,c,l,m;return t().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return o=n.setSubmitting,i=n.resetForm,s.prev=1,k(!0),c=a.email,l=a.password,m=P?r:e,s.next=7,m({email:c,password:l});case 7:P?(i(),(0,Z.S)("Registration successful!")):(0,Z.S)("You have successfully logged into your account!"),s.next=14;break;case 10:s.prev=10,s.t0=s.catch(1),s.t0.message&&(0,Z.s)("Something wrong occurred"),(0,Z.s)(s.t0);case 14:return s.prev=14,o(!1),k(!1),s.finish(14);case 18:case"end":return s.stop()}}),s,null,[[1,10,14,18]])})));return function(e,r){return s.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:w.Z.signinContainer,children:[(0,f.jsx)("h2",{className:w.Z.title,children:P?"Sign Up":"Sign In"}),(0,f.jsx)(l.J9,{initialValues:R,validationSchema:q,onSubmit:M,validateOnBlur:!0,validateOnChange:!0,children:function(s){return(0,f.jsxs)(l.l0,{className:w.Z.form,children:[(0,f.jsxs)("div",{className:w.Z.inputContainer,children:[(0,f.jsx)("label",{className:w.Z.label,htmlFor:"email",children:"Enter your email"}),(0,f.jsx)(l.gN,{className:"".concat(w.Z.input," ").concat(s.errors.email&&s.touched.email?w.Z.inputError:""),type:"email",name:"email",placeholder:"E-mail"}),(0,f.jsx)(l.Bc,{name:"email",component:"div",className:w.Z.errorMessage})]}),(0,f.jsxs)("div",{className:w.Z.inputContainer,children:[(0,f.jsx)("label",{className:w.Z.label,htmlFor:"password",children:"Enter your password"}),(0,f.jsxs)("div",{className:w.Z.fieldContainer,children:[(0,f.jsx)(l.gN,{className:"".concat(w.Z.input," ").concat(s.errors.password&&s.touched.password?w.Z.inputError:""),type:N?"text":"password",name:"password",placeholder:"Password"}),(0,f.jsx)("div",{className:w.Z.passwordIconContainer,onClick:y,children:N?(0,f.jsx)(d.Vvo,{className:w.Z.passwordIcon}):(0,f.jsx)(d.E6r,{className:w.Z.passwordIcon})})]}),(0,f.jsx)(l.Bc,{name:"password",component:"div",className:w.Z.errorMessage})]}),P&&(0,f.jsxs)("div",{className:w.Z.inputContainer,children:[(0,f.jsx)("label",{className:w.Z.label,htmlFor:"confirmPassword",children:"Repeat your password"}),(0,f.jsxs)("div",{className:w.Z.fieldContainer,children:[(0,f.jsx)(l.gN,{className:"".concat(w.Z.input," ").concat(s.errors.confirmPassword&&s.touched.confirmPassword?w.Z.inputError:""),type:b?"text":"password",name:"confirmPassword",placeholder:"Repeat Password"}),(0,f.jsx)("div",{className:w.Z.passwordIconContainer,onClick:E,children:b?(0,f.jsx)(d.Vvo,{className:w.Z.passwordIcon}):(0,f.jsx)(d.E6r,{className:w.Z.passwordIcon})})]}),(0,f.jsx)(l.Bc,{name:"confirmPassword",component:"div",className:w.Z.errorMessage})]}),(0,f.jsx)("button",{className:w.Z.button,type:"submit",disabled:s.isSubmitting||I,children:I?(0,f.jsx)(_.Z,{size:20,color:"#ffffff",loading:I}):P?"Sign Up":"Sign In"})]})}}),(0,f.jsx)(p.OL,{to:P?"/signin":"/signup",className:w.Z.link,children:P?"Sign In":"Sign Up"})]})}},4454:function(s,e,r){r.r(e);r(2791);var a=r(3549),n=r(7186),o=r(3329);e.default=function(){return(0,o.jsx)("section",{className:n.Z.AuthFormSection,children:(0,o.jsx)("div",{className:"".concat(n.Z.div," container"),children:(0,o.jsx)(a.Z,{})})})}},7186:function(s,e){e.Z={AuthFormSection:"AuthForm_AuthFormSection__Su+Kz",div:"AuthForm_div__l-S9-",signinContainer:"AuthForm_signinContainer__C+Gai",title:"AuthForm_title__nrVeh",form:"AuthForm_form__N+Fyz",label:"AuthForm_label__-RWhN",fieldContainer:"AuthForm_fieldContainer__txbFE",input:"AuthForm_input__dB7h2",passwordIconContainer:"AuthForm_passwordIconContainer__J7eew",inputContainer:"AuthForm_inputContainer__44gmQ",passwordIcon:"AuthForm_passwordIcon__eKLRo",button:"AuthForm_button__+RFEI",link:"AuthForm_link__3I+HY",errorMessage:"AuthForm_errorMessage__poTln",inputError:"AuthForm_inputError__pMkyj"}}}]);
//# sourceMappingURL=454.e817f4e5.chunk.js.map