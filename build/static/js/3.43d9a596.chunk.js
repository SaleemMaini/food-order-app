(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{29:function(t,e,a){t.exports={"cart-items":"Cart_cart-items__3K3IZ",total:"Cart_total__2CnBl",actions:"Cart_actions__2uvzP","button--alt":"Cart_button--alt__2oGQz",button:"Cart_button__1bCiN"}},30:function(t,e,a){t.exports={backdrop:"Modal_backdrop__1C-zG",modal:"Modal_modal__1v4hb","slide-down":"Modal_slide-down__1nl5d"}},31:function(t,e,a){t.exports={"cart-item":"CartItem_cart-item__2UegP",summary:"CartItem_summary__Ocyzb",price:"CartItem_price__1DiMZ",amount:"CartItem_amount__lS5WJ",actions:"CartItem_actions__h-B5S"}},32:function(t,e,a){t.exports={form:"Checkout_form__26T_w",control:"Checkout_control__dQM6C",actions:"Checkout_actions__1Bv72",submit:"Checkout_submit__1szXQ",invalid:"Checkout_invalid__t3SS8",invalidInput:"Checkout_invalidInput__21kFS"}},33:function(t,e,a){"use strict";a.r(e);var n=a(11),c=a.n(n),s=a(15),o=a(3),i=a(2),r=a(1),l=a.n(r),d=a(29),u=a.n(d),j=a(30),m=a.n(j),b=a(14),O=a.n(b),p=a(0),h=function(t){return Object(p.jsx)("div",{className:m.a.backdrop,onClick:t.onClick})},_=function(t){return Object(p.jsx)("div",{className:m.a.modal,children:Object(p.jsx)("div",{className:m.a.content,children:t.children})})},x=document.getElementById("modal"),C=function(t){return Object(p.jsxs)(r.Fragment,{children:[O.a.createPortal(Object(p.jsx)(h,{onClick:t.onClose}),x),O.a.createPortal(Object(p.jsx)(_,{children:t.children}),x)]})},f=a(4),v=a(31),N=a.n(v),y=function(t){return Object(p.jsxs)("li",{className:N.a["cart-item"],children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:t.name}),Object(p.jsxs)("div",{className:N.a.summary,children:[Object(p.jsx)("span",{className:N.a.price,children:"$".concat(t.price)}),Object(p.jsx)("span",{className:N.a.amount,children:"X ".concat(t.amount)})]})]}),Object(p.jsxs)("div",{className:N.a.actions,children:[Object(p.jsx)("button",{onClick:t.onRemove,children:"-"}),Object(p.jsx)("button",{onClick:t.onAdd,children:"+"})]})]})},k=a(16),I=a(32),S=a.n(I),g=function(t){var e=Object(r.useState)({name:!0,street:!0,postalCode:!0,city:!0}),a=Object(i.a)(e,2),n=a[0],c=a[1],s=Object(r.useRef)(),o=Object(r.useRef)(),l=Object(r.useRef)(),d=Object(r.useRef)(),u=function(t){return""===t.trim()},j=n.name?"".concat(S.a.control):"".concat(S.a.control," ").concat(S.a.invalid),m=n.street?"".concat(S.a.control):"".concat(S.a.control," ").concat(S.a.invalid),b=n.postalCode?"".concat(S.a.control):"".concat(S.a.control," ").concat(S.a.invalid),O=n.city?"".concat(S.a.control):"".concat(S.a.control," ").concat(S.a.invalid);return Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=s.current.value(),n=o.current.value(),i=l.current.value(),r=d.current.value(),j=!u(a),m=!u(n),b=5===i.trim().length,O=!u(r);c({name:j,street:m,postalCode:b,city:O}),j&&m&&b&&O&&t.onConfirm({name:a,street:n,city:r,postalCode:i})},className:S.a.form,children:[Object(p.jsx)(k.a,{className:j,input:{type:"text",id:"name"},ref:s,label:"Name"}),!n.name&&Object(p.jsx)("p",{className:S.a.invalidInput,children:"Please enter a valid name."}),Object(p.jsx)(k.a,{className:m,input:{type:"text",id:"street"},ref:o,label:"Street"}),!n.street&&Object(p.jsx)("p",{className:S.a.invalidInput,children:"Please enter a valid street."}),Object(p.jsx)(k.a,{className:b,input:{type:"text",id:"postal"},ref:l,label:"Postal Code"}),!n.postalCode&&Object(p.jsx)("p",{className:S.a.invalidInput,children:"Please enter a valid postal code (5) numbers."}),Object(p.jsx)(k.a,{className:O,input:{type:"text",id:"city"},ref:d,label:"City"}),!n.city&&Object(p.jsx)("p",{className:S.a.invalidInput,children:"Please enter a valid City."}),Object(p.jsxs)("div",{className:S.a.actions,children:[Object(p.jsx)("button",{type:"button",onClick:t.onCancel,children:"Cancel"}),Object(p.jsx)("button",{type:"submit",className:S.a.submit,children:"Confirm"})]})]})};e.default=function(t){var e=Object(r.useState)(!1),a=Object(i.a)(e,2),n=a[0],d=a[1],j=Object(r.useState)(!1),m=Object(i.a)(j,2),b=m[0],O=m[1],h=Object(r.useState)(!1),_=Object(i.a)(h,2),x=_[0],v=_[1],N=Object(r.useContext)(f.a),k=N.items,I="$".concat(N.totalAmount.toFixed(2)),S=k.length>0,P=function(t){N.addItem(Object(o.a)(Object(o.a)({},t),{},{amount:1}))},w=function(t){N.removeItem(t)},R=function(){var t=Object(s.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(!0),t.next=3,fetch("https://react-http-3176c-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:e,orderedItems:N.items})});case 3:O(!1),v(!0),N.clearCart();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),z=Object(p.jsx)("ul",{className:u.a["cart-items"],children:k.map((function(t){return Object(p.jsx)(y,{id:t.id,name:t.name,price:t.price,amount:t.amount,onAdd:P.bind(null,t),onRemove:w.bind(null,t.id)},t.id)}))}),F=!n&&Object(p.jsxs)("div",{className:u.a.actions,children:[Object(p.jsx)("button",{className:u.a["button--alt"],onClick:t.onClose,children:"Close"}),S&&Object(p.jsx)("button",{className:u.a.button,onClick:function(){d(!0)},children:"Order"})]}),M=Object(p.jsx)("p",{children:"Sending order data..."}),A=Object(p.jsxs)(l.a.Fragment,{children:[Object(p.jsx)("p",{children:"Successfully sent the oder."}),Object(p.jsx)("div",{className:u.a.actions,children:Object(p.jsx)("button",{className:u.a.button,onClick:t.onClose,children:"Close"})})]}),B=Object(p.jsxs)(l.a.Fragment,{children:[z,Object(p.jsxs)("div",{className:u.a.total,children:[Object(p.jsx)("span",{children:"Total Amount"}),Object(p.jsx)("span",{children:I})]}),n&&Object(p.jsx)(g,{onConfirm:R,onCancel:t.onClose}),F]});return Object(p.jsxs)(C,{onClose:t.onClose,children:[!b&&!x&&B,b&&!x&&M,!b&&x&&A]})}}}]);
//# sourceMappingURL=3.43d9a596.chunk.js.map