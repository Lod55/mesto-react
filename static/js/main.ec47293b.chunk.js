(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),i=n(20),s=n.n(i),r=n(10),u=(n(30),n(24)),l=n(2),p=n(4),j=Object(c.createContext)(),b=n.p+"static/media/fail.7c6a020b.svg",d=n.p+"static/media/success.1b6082f8.svg",m=function(e){var t=e.isOpen,n=e.onClose,c=e.isSuccess,o=Object(p.h)().pathname,i=c?"/sign-up"===o?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"/sign-up"===o?"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.":"\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c \u0432 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",s=c?d:b;return Object(a.jsx)("section",{onClick:function(e){e.target.classList.contains("popup")&&n()},className:"popup popup_type_info-tooltip ".concat(t?"popup_opened":""),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{className:"button popup__button-close",type:"button",onClick:n}),Object(a.jsx)("img",{className:"popup__image-tooltip",src:s,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438"}),Object(a.jsx)("p",{className:"popup__tooltip",children:i})]})})},_=function(e){return Object(a.jsx)(p.b,{children:function(){return e.loggedIn?e.children:Object(a.jsx)(p.a,{to:"./sign-in"})}})},h=n(6),O=n(3),f=function(e){var t=e.onRegister,n={email:"",password:"",confirmation:""},o={email:!1,password:!1,confirmation:!1},i={email:"",password:"",confirmation:""},s=Object(c.useState)(n),u=Object(l.a)(s,2),p=u[0],j=u[1],b=Object(c.useState)(o),d=Object(l.a)(b,2),m=d[0],_=d[1],f=Object(c.useState)(!1),g=Object(l.a)(f,2),v=g[0],x=g[1],N=Object(c.useState)(i),k=Object(l.a)(N,2),C=k[0],y=k[1];Object(c.useEffect)((function(){m.email&&m.password&&m.confirmation?x(!0):x(!1)}),[m]);var S=function(e){var t=e.target,n=t.name,a=t.value,c=t.validity,o=t.validationMessage;j((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(h.a)({},n,a))})),_((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(h.a)({},n,c.valid))})),y((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(h.a)({},n,o))}))},w=function(){j(n),_(o),x(!1),y(i)};return Object(a.jsx)("main",{className:"register content page__content",children:Object(a.jsxs)("div",{className:"register__container",children:[Object(a.jsx)("h2",{className:"register__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsxs)("form",{className:"register__form",name:"form",id:"form-with-register",onSubmit:function(e){if(e.preventDefault(),p.password!==p.confirmation)return _((function(e){return Object(O.a)(Object(O.a)({},e),{},{password:!1,confirmation:!1})})),j((function(e){return Object(O.a)(Object(O.a)({},e),{},{password:"",confirmation:""})})),void y((function(e){return Object(O.a)(Object(O.a)({},e),{},{password:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442",confirmation:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"})}));t(p).then(w).catch((function(e){console.log(e.message||"\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")}))},children:[Object(a.jsx)("input",{className:"register__input register__input_type_email\n        ".concat(m.email?"":"register__input_state_invalid"),type:"email",placeholder:"Email",name:"email",id:"register-input-email",minLength:"2",maxLength:"100",value:p.email,onChange:S,required:!0}),Object(a.jsx)("span",{id:"register-input-email-error",className:"register__error",children:C.email}),Object(a.jsx)("input",{className:"register__input register__input_type_password\n        ".concat(m.password?"":"register__input_state_invalid"),type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",id:"register-input-password",minLength:"6",maxLength:"50",value:p.password,onChange:S,required:!0}),Object(a.jsx)("span",{id:"register-input-password-error",className:"register__error",children:C.password}),Object(a.jsx)("input",{className:"register__input register__input_type_confirm-password\n        ".concat(m.confirmation?"":"register__input_state_invalid"),type:"password",placeholder:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",name:"confirmation",id:"register-input-confirm-password",minLength:"2",maxLength:"50",value:p.confirmation,onChange:S,required:!0}),Object(a.jsx)("span",{id:"register-input-confirm-password-error",className:"register__error",children:C.confirmation}),Object(a.jsx)("button",{className:"button register__button-submit \n            ".concat(v?"":"register__button-submit_invalid"),type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(a.jsx)("div",{className:"register__signin",children:Object(a.jsxs)("p",{children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(a.jsx)(r.b,{to:"/sign-in",className:"register__login-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})})]})})},g=function(e){var t=e.onLogin,n={email:"",password:""},o={email:!1,password:!1},i={email:"",password:""},s=Object(c.useState)(n),r=Object(l.a)(s,2),u=r[0],p=r[1],j=Object(c.useState)(o),b=Object(l.a)(j,2),d=b[0],m=b[1],_=Object(c.useState)(!1),f=Object(l.a)(_,2),g=f[0],v=f[1],x=Object(c.useState)(i),N=Object(l.a)(x,2),k=N[0],C=N[1];Object(c.useEffect)((function(){d.email&&d.password?v(!0):v(!1)}),[d]);var y=function(e){var t=e.target,n=t.name,a=t.value,c=t.validity,o=t.validationMessage;p((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(h.a)({},n,a))})),m((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(h.a)({},n,c.valid))})),C((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(h.a)({},n,o))}))},S=function(){p(n),m(o),v(!1),C(i)};return Object(a.jsx)("main",{className:"login content page__content",children:Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(a.jsxs)("form",{className:"login__form",name:"form",id:"form-with-login",onSubmit:function(e){e.preventDefault(),t(u).then(S).catch((function(e){console.log(e.message||"\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")}))},children:[Object(a.jsx)("input",{className:"login__input login__input_type_email\n        ".concat(d.email?"":"login__input_state_invalid"),type:"email",placeholder:"Email",name:"email",id:"login-input-email",maxLength:"100",value:u.email,onChange:y,required:!0}),Object(a.jsx)("span",{id:"login-input-email-error",className:"login__error",children:k.email}),Object(a.jsx)("input",{className:"login__input login__input_type_password\n        ".concat(d.password?"":"login__input_state_invalid"),type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",id:"login-input-password",maxLength:"50",value:u.password,onChange:y,required:!0}),Object(a.jsx)("span",{id:"login-input-password-error",className:"login__error",children:k.password}),Object(a.jsx)("button",{className:"button login__button-submit \n            ".concat(g?"":"login__button-submit_invalid"),type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})},v=n.p+"static/media/Logo.a307e1c4.svg",x=function(e){var t=e.onSignOut,n=e.userEmail,o=e.loggedIn,i=Object(p.h)().pathname,s=Object(c.useState)(!1),u=Object(l.a)(s,2),j=u[0],b=u[1];return Object(a.jsxs)("header",{className:"header page__header",children:[Object(a.jsx)("img",{src:v,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u041c\u0435\u0441\u0442\u0430 \u0420\u043e\u0441\u0441\u0438\u0438",className:"header__logo"}),o?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{type:"button",className:"header__burger button \n        ".concat(j?"active":""),onClick:function(){b(!j)},children:Object(a.jsx)("span",{})}),Object(a.jsx)("nav",{className:"header__menu \n      ".concat(j?"active":""),children:Object(a.jsxs)("ul",{className:"header__list",children:[Object(a.jsx)("li",{children:Object(a.jsx)("p",{className:"header__email",children:n})}),Object(a.jsxs)("li",{children:["/mesto"===i,Object(a.jsx)("button",{className:"button header__button header__button_type_exit",onClick:t,children:"\u0412\u044b\u0439\u0442\u0438"})]})]})})]}):Object(a.jsx)(r.b,{className:"button header__button",to:"/sign-in"===i?"/sign-up":"/sign-in",children:"/sign-in"===i?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u0445\u043e\u0434"})]})},N=function(e){var t=e.card,n=e.onCardLike,o=e.onImageClick,i=e.onCardTrash,s=Object(c.useContext)(j),r=t.owner._id===s._id,u=t.likes.some((function(e){return e._id===s._id}));return Object(a.jsxs)("article",{className:"place",children:[Object(a.jsx)("img",{className:"place__image",alt:t.name,src:t.link,onClick:function(){return o(t)}}),r?Object(a.jsx)("button",{className:"button place__button-remove",type:"button",onClick:function(){i(t)}}):null,Object(a.jsxs)("div",{className:"place__row-block",children:[Object(a.jsx)("h2",{className:"place__title",children:t.name}),Object(a.jsxs)("div",{className:"place__column-block",children:[Object(a.jsx)("button",{className:"button place__button-like \n            ".concat(u?"place__button-like_active":""),type:"button",onClick:function(){return n(t)}}),Object(a.jsx)("span",{className:"place__score-like",children:t.likes.length})]})]})]})},k=function(e){var t=e.card,n=e.onClose;return Object(a.jsx)("section",{onClick:function(e){e.target.classList.contains("popup")&&n()},className:"popup popup_blackout \n    ".concat(t.isOpen?"popup_opened":""),id:"popup-image",children:Object(a.jsxs)("figure",{className:"popup__figure",children:[Object(a.jsx)("button",{className:"button popup__button-close",type:"button",onClick:n}),Object(a.jsx)("img",{className:"popup__image",alt:t.name,src:t.link}),Object(a.jsxs)("figcaption",{className:"popup__caption",children:[t.name," / \xa9 ",t.owner.name]})]})})},C=function(e){var t=e.children,n=e.name,c=e.title,o=e.textButton,i=e.isOpen,s=e.onClose,r=e.onSubmit,u=e.validationForm;return Object(a.jsx)("section",{onClick:function(e){e.target.classList.contains("popup")&&s()},className:"popup popup_type_".concat(n," ").concat(i?"popup_opened":""),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{className:"button popup__button-close",type:"button",onClick:s}),Object(a.jsx)("h2",{className:"popup__title",children:c}),Object(a.jsxs)("form",{className:"popup__form",name:n,id:n,onSubmit:r,children:[t,Object(a.jsx)("button",{className:"button popup__button-submit \n            ".concat(u?"":"popup__button-submit_invalid"),type:"submit",children:o})]})]})})},y=function(e){var t=e.onUpdateUser,n=e.isOpen,o=e.onClose,i=Object(c.useContext)(j),s={author:i.name||"",about:i.about||""},r={author:!1,about:!1},u={author:"",about:""},p=Object(c.useState)(s),b=Object(l.a)(p,2),d=b[0],m=b[1],_=Object(c.useState)(r),f=Object(l.a)(_,2),g=f[0],v=f[1],x=Object(c.useState)(!1),N=Object(l.a)(x,2),k=N[0],y=N[1],S=Object(c.useState)(u),w=Object(l.a)(S,2),L=w[0],E=w[1];Object(c.useEffect)((function(){m((function(e){return{author:i.name||"",about:i.about||""}}))}),[i]);Object(c.useEffect)((function(){g.author&&g.about?y(!0):y(!1)}),[g]);var I=function(e){var t=e.target,n=t.name,a=t.value,c=t.validity,o=t.validationMessage;m((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(h.a)({},n,a))})),v((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(h.a)({},n,c.valid))})),E((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(h.a)({},n,o))}))},U=function(){m(s),v(r),y(!1),E(u)};return Object(a.jsxs)(C,{name:"popup-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",textButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:n,onClose:function(){o(),U()},onSubmit:function(e){e.preventDefault(),t(d),U()},validationForm:k,children:[Object(a.jsx)("input",{className:"popup__input popup__input_type_author \n        ".concat(g.author?"":"popup__input_state_invalid"),type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",id:"popup-input-name",name:"author",minLength:"2",maxLength:"40",value:d.author,onChange:I,required:!0}),Object(a.jsx)("span",{id:"popup-input-name-error",className:"popup__error",children:L.author}),Object(a.jsx)("input",{className:"popup__input popup__input_type_status \n        ".concat(g.about?"":"popup__input_state_invalid"),type:"text",placeholder:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0441\u0435\u0431\u0435",id:"popup-input-status",name:"about",minLength:"2",maxLength:"200",value:d.about,onChange:I,required:!0}),Object(a.jsx)("span",{id:"popup-input-status-error",className:"popup__error",children:L.about})]})},S=function(e){var t=e.onUpdateAvatar,n=e.isOpen,o=e.onClose,i=Object(c.useState)(""),s=Object(l.a)(i,2),r=s[0],u=s[1],p=Object(c.useState)(!1),j=Object(l.a)(p,2),b=j[0],d=j[1],m=Object(c.useState)(!1),_=Object(l.a)(m,2),h=_[0],O=_[1],f=Object(c.useState)(""),g=Object(l.a)(f,2),v=g[0],x=g[1];Object(c.useEffect)((function(){O(!!b)}),[b]);var N=function(){u(""),d(!1),O(!1),x("")};return Object(a.jsxs)(C,{name:"add-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",textButton:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",isOpen:n,onClose:function(){o(),N()},onSubmit:function(e){e.preventDefault(),t(r),N()},validationForm:h,children:[Object(a.jsx)("input",{className:"popup__input popup__input_type_photo \n        ".concat(b?"":"popup__input_state_invalid"),type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",id:"popup-input-url-avatar",onChange:function(e){var t=e.target,n=t.value,a=t.validity,c=t.validationMessage;u(n),d(a.valid),x(c)},minLength:"7",maxLength:"300",value:r,required:!0}),Object(a.jsx)("span",{id:"popup-input-url-avatar-error",className:"popup__error",children:v})]})},w=function(e){var t=e.onAddPlace,n=e.isOpen,o=e.onClose,i={name:"",link:""},s={name:!1,link:!1},r={name:"",link:""},u=Object(c.useState)(i),p=Object(l.a)(u,2),j=p[0],b=p[1],d=Object(c.useState)(s),m=Object(l.a)(d,2),_=m[0],f=m[1],g=Object(c.useState)(!1),v=Object(l.a)(g,2),x=v[0],N=v[1],k=Object(c.useState)(r),y=Object(l.a)(k,2),S=y[0],w=y[1];Object(c.useEffect)((function(){_.name&&_.link?N(!0):N(!1)}),[_]);var L=function(e){var t=e.target,n=t.name,a=t.value,c=t.validity,o=t.validationMessage;b((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(h.a)({},n,a))})),f((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(h.a)({},n,c.valid))})),w((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(h.a)({},n,o))}))},E=function(){b(i),f(s),N(!1),w(r)};return Object(a.jsxs)(C,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",textButton:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:n,onClose:function(){o(),E()},onSubmit:function(e){e.preventDefault(),t(j),E()},validationForm:x,children:[Object(a.jsx)("input",{className:"popup__input popup__input_type_place-name \n        ".concat(_.name?"":"popup__input_state_invalid"),type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",id:"popup-input-place-name",minLength:"2",maxLength:"30",value:j.name,onChange:L,required:!0}),Object(a.jsx)("span",{id:"popup-input-place-name-error",className:"popup__error",children:S.name}),Object(a.jsx)("input",{className:"popup__input popup__input_type_photo \n        ".concat(_.link?"":"popup__input_state_invalid"),type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"popup-input-url",name:"link",minLength:"7",maxLength:"300",value:j.link,onChange:L,required:!0}),Object(a.jsx)("span",{id:"popup-input-url-error",className:"popup__error",children:S.link})]})},L=function(e){var t=e.onDeleteCard,n=e.isOpen,c=e.onClose;return Object(a.jsx)(C,{name:"remove-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",textButton:"\u0414\u0430",isOpen:n,onClose:c,onSubmit:function(e){e.preventDefault(),t()},validationForm:!0})},E=function(e){var t=e.isLoading,n=e.cards,o=e.onCardDelete,i=e.onCardLike,s=e.onAddPlaceSubmit,r=e.onUpdateAvatar,u=e.onUpdateUser,p=Object(c.useContext)(j),b=Object(c.useState)(!1),d=Object(l.a)(b,2),m=d[0],_=d[1],h=Object(c.useState)(!1),f=Object(l.a)(h,2),g=f[0],v=f[1],x=Object(c.useState)(!1),C=Object(l.a)(x,2),E=C[0],I=C[1],U=Object(c.useState)(!1),T=Object(l.a)(U,2),A=T[0],P=T[1],D=Object(c.useState)({isOpen:!1,owner:{name:""}}),R=Object(l.a)(D,2),q=R[0],z=R[1],B=Object(c.useState)(""),F=Object(l.a)(B,2),J=F[0],M=F[1],H=function(e){return z(Object(O.a)({isOpen:!0},e))},G=function(e){P(!0),M(e._id)},K=function(){_(!1),v(!1),I(!1),P(!1),z({isOpen:!1,owner:{name:""}})},Q=function(e){i(e).catch((function(e){return console.log("Error: ".concat(e))}))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("main",{className:"content page__content",children:[Object(a.jsxs)("section",{className:"profile content__item",children:[Object(a.jsx)("div",{className:"profile__overlay",onClick:function(){return I(!0)},children:Object(a.jsx)("img",{src:p.avatar||"#",alt:"\u0410\u0432\u0430\u0442\u0430\u0440 ".concat(p.name||""),className:"profile__avatar"})}),Object(a.jsxs)("div",{className:"profile__text-block",children:[Object(a.jsxs)("div",{className:"profile__row-block",children:[Object(a.jsx)("h1",{className:"profile__author",children:p.name||"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),Object(a.jsx)("button",{className:"button profile__button-edit",type:"button",onClick:function(){return _(!0)}})]}),Object(a.jsx)("p",{className:"profile__status",children:p.about||"\u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435"})]}),Object(a.jsx)("button",{className:"button profile__button-add",type:"button",onClick:function(){return v(!0)}})]}),t?Object(a.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):Object(a.jsx)("section",{className:"places content__item",children:n.map((function(e){return Object(a.jsx)(N,{card:e,onImageClick:H,onCardLike:Q,onCardTrash:G},e._id)}))})]}),Object(a.jsx)(y,{isOpen:m,onClose:K,onUpdateUser:function(e){u(e).then(K).catch((function(e){return console.log("Error: ".concat(e))}))}}),Object(a.jsx)(w,{isOpen:g,onClose:K,onAddPlace:function(e){s(e).then(K).catch((function(e){return console.log("Error: ".concat(e))}))}}),Object(a.jsx)(S,{isOpen:E,onClose:K,onUpdateAvatar:function(e){r(e).then(K).catch((function(e){return console.log("Error: ".concat(e))}))}}),Object(a.jsx)(L,{isOpen:A,onClose:K,onDeleteCard:function(){o(J).then(K).catch((function(e){return console.log("Error: ".concat(e))}))}}),Object(a.jsx)(k,{card:q,onClose:K})]})},I=function(){return Object(a.jsx)("footer",{className:"footer page__footer",children:Object(a.jsx)("p",{className:"footer__author",children:"\xa9 2020 Mesto Russia Lod55"})})},U="https://auth.nomoreparties.co",T=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))},A=n(22),P=n(23),D=new(function(){function e(t){var n=t.baseUrl,a=t.token,c=t.groupId;Object(A.a)(this,e),this._address=n,this._token=a,this._groupId=c}return Object(P.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/").concat(this._groupId,"/cards"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"getInfoUser",value:function(){return fetch("".concat(this._address,"/").concat(this._groupId,"/users/me"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"setInfoUser",value:function(e){var t=e.author,n=e.about;return fetch("".concat(this._address,"/").concat(this._groupId,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})}).then(this._checkResponse)}},{key:"setCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._address,"/").concat(this._groupId,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:n})}).then(this._checkResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._address,"/").concat(this._groupId,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._address,"/").concat(this._groupId,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._address,"/").concat(this._groupId,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1",token:"429ceaf1-0a34-48aa-a4c9-c70c2c79ac6e",groupId:"cohort-19"}),R=function(){var e={email:""},t=Object(c.useState)(!1),n=Object(l.a)(t,2),o=n[0],i=n[1],s=Object(c.useState)([]),r=Object(l.a)(s,2),b=r[0],d=r[1],h=Object(c.useState)(!1),O=Object(l.a)(h,2),v=O[0],N=O[1],k=Object(c.useState)({}),C=Object(l.a)(k,2),y=C[0],S=C[1],w=Object(c.useState)(!1),L=Object(l.a)(w,2),A=L[0],P=L[1],R=Object(c.useState)(e),q=Object(l.a)(R,2),z=q[0],B=q[1],F=Object(c.useState)(!1),J=Object(l.a)(F,2),M=J[0],H=J[1],G=Object(p.g)(),K=function(e){if(!e)throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.message))};Object(c.useEffect)((function(){N(!0),D.getInitialCards().then((function(e){d(e)})).catch((function(e){return console.log("Error: ".concat(e))})).finally((function(){return N(!1)}))}),[]),Object(c.useEffect)((function(){D.getInfoUser().then((function(e){S(e)})).catch((function(e){return console.log("Error: ".concat(e))}))}),[]);var Q=Object(c.useCallback)((function(){var e,t=localStorage.getItem("jwt");t&&(e=t,fetch("".concat(U,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(T)).then((function(e){e&&(P(!0),B({email:e.data.email}),G.push("/mesto"))})).catch((function(){return G.push("/sign-in")}))}),[G]);Object(c.useEffect)((function(){Q()}),[Q]);return Object(a.jsx)("div",{className:"page__container",children:Object(a.jsxs)(j.Provider,{value:y,children:[Object(a.jsx)(x,{loggedIn:A,onSignOut:function(){localStorage.removeItem("jwt"),B(e),P(!1),G.push("/sign-in")},userEmail:z.email}),Object(a.jsxs)(p.d,{children:[Object(a.jsx)(_,{path:"/mesto",loggedIn:A,children:Object(a.jsx)(E,{onCardDelete:function(e){return D.removeCard(e).then((function(t){K(t);var n=b.filter((function(t){return t._id===e?null:t}));return d(n),t}))},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===y._id}));return D.changeLikeCardStatus(e._id,t).then((function(t){K(t);var n=b.map((function(n){return n._id===e._id?t:n}));return d(n),t}))},onAddPlaceSubmit:function(e){var t=e.name,n=e.link;return D.setCard({name:t,link:n}).then((function(e){return K(e),d([e].concat(Object(u.a)(b))),e}))},onUpdateAvatar:function(e){return D.setUserAvatar(e).then((function(e){return K(e),S(e),e}))},onUpdateUser:function(e){var t=e.author,n=e.about;return D.setInfoUser({author:t,about:n}).then((function(e){return K(e),S(e),e}))},cards:b,isLoading:v})}),Object(a.jsx)(p.b,{path:"/sign-in",exact:!0,children:Object(a.jsx)(g,{onLogin:function(e){return function(e){var t=e.password,n=e.email;return fetch("".concat(U,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:n})}).then(T)}({password:e.password,email:e.email}).then((function(e){if(!e||400===e.statusCode||401===e.statusCode)throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.message));e.token&&(i(!0),H(!0),P(!0),localStorage.setItem("jwt",e.token))})).then(Q).catch((function(e){return i(!0),H(!1),e}))}})}),Object(a.jsx)(p.b,{path:"/sign-up",exact:!0,children:Object(a.jsx)(f,{onRegister:function(e){return function(e){var t=e.password,n=e.email;return fetch("".concat(U,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:n})}).then(T)}({password:e.password,email:e.email}).then((function(e){if(!e||400===e.statusCode)throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.message));return i(!0),H(!0),G.push("/sign-in"),e})).catch((function(e){return i(!0),H(!1),e}))}})}),Object(a.jsx)(p.b,{path:"*",children:A?Object(a.jsx)(p.a,{to:"/mesto"}):Object(a.jsx)(p.a,{to:"/sign-in"})})]}),Object(a.jsx)(I,{}),Object(a.jsx)(m,{isOpen:o,onClose:function(){i(!1)},isSuccess:M})]})})};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(r.a,{basename:"/mesto-react",children:Object(a.jsx)(R,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.ec47293b.chunk.js.map