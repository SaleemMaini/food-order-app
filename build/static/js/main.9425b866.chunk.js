(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{11:function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3K3IZ",total:"Cart_total__2CnBl",actions:"Cart_actions__2uvzP","button--alt":"Cart_button--alt__2oGQz",button:"Cart_button__1bCiN"}},14:function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2UegP",summary:"CartItem_summary__Ocyzb",price:"CartItem_price__1DiMZ",amount:"CartItem_amount__lS5WJ",actions:"CartItem_actions__h-B5S"}},19:function(e,t,n){e.exports={button:"HeaderCartButton_button__2PYfn",icon:"HeaderCartButton_icon__3Wpam",badge:"HeaderCartButton_badge__1jtXQ",bump:"HeaderCartButton_bump__1Hc6B"}},23:function(e,t,n){e.exports={mealsList:"MealsList_mealsList__1Ra_N","meals-appear":"MealsList_meals-appear__2eTXN",errorHandle:"MealsList_errorHandle__3qV_Z"}},24:function(e,t,n){e.exports={meal:"MealItem_meal__3tpdw",description:"MealItem_description__3s4VQ",mealPhoto:"MealItem_mealPhoto__TsIh_",price:"MealItem_price__2SWWK",mealCol:"MealItem_mealCol__MJYyM",mealCard:"MealItem_mealCard__GTqef"}},25:function(e,t,n){e.exports={backdrop:"Modal_backdrop__1C-zG",modal:"Modal_modal__1v4hb","slide-down":"Modal_slide-down__1nl5d"}},29:function(e,t,n){e.exports={form:"MealItemForm_form__a7gDZ",quantityControl:"MealItemForm_quantityControl__1fj8-"}},30:function(e,t,n){e.exports={input:"Input_input__32dYR"}},37:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n.n(a),r=(n(37),n(6)),o=n(0),i=n.n(o),s=n(26),l=n(21),u=n(1),d=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},m=n(19),j=n.n(m),b=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),O=function(e){var t=Object(o.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(o.useContext)(b).items,s=i.reduce((function(e,t){return e+t.amount}),0),l="".concat(j.a.button," ").concat(a?j.a.bump:"");return Object(o.useEffect)((function(){if(0!==i.length){c(!0);var e=setTimeout((function(){return c(!1)}),300);return function(){clearTimeout(e)}}}),[i]),Object(u.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(u.jsx)("span",{className:j.a.icon,children:Object(u.jsx)(d,{})}),Object(u.jsx)("span",{className:j.a.badge,children:s})]})},p=n.p+"static/media/logo.afc79b0a.png",f=function(e){return Object(u.jsx)(s.a,{sticky:"top",bg:"dark",variant:"dark",children:Object(u.jsxs)(l.a,{children:[Object(u.jsxs)(s.a.Brand,{href:"#home",children:[Object(u.jsx)("img",{src:p,alt:"",width:"30",height:"30",className:"mx-3"}),Object(u.jsx)("span",{style:{fontWeight:600},children:"Food order app"})]}),Object(u.jsx)(s.a.Brand,{children:Object(u.jsx)(O,{onClick:e.cartOnClick})})]})})},h=n(13),x=n.n(h),_=n(22),v=function(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(o.useState)(null),i=Object(r.a)(c,2),s=i[0],l=i[1],u=Object(o.useCallback)(function(){var e=Object(_.a)(x.a.mark((function e(t,n){var c,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),l(null),e.prev=2,e.next=5,fetch(t.url,{method:t.method?t.method:"GET",headers:t.headers?t.headers:{},body:t.body?JSON.stringify(t.body):null});case 5:if((c=e.sent).ok){e.next=8;break}throw new Error("Request Failed");case 8:return e.next=10,c.json();case 10:r=e.sent,n(r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),l(e.t0.message||"Something wrong");case 17:a(!1);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,n){return e.apply(this,arguments)}}(),[]);return{isLoading:n,error:s,sendRequest:u}},C=n(23),y=n.n(C),N=n(24),I=n.n(N),g=n(2),k=n(30),M=n.n(k),S=i.a.forwardRef((function(e,t){var n=Object(o.useRef)(),a=function(){return n.current.value};return Object(o.useImperativeHandle)(t,(function(){return{value:a}})),Object(u.jsxs)("div",{className:e.className||M.a.input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object(g.a)({ref:n},e.input))]})})),w=n(29),A=n.n(w),P=function(e){var t=Object(o.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(o.useRef)();return Object(u.jsxs)("form",{className:"".concat(A.a.form," mx-auto"),onSubmit:function(t){t.preventDefault();var n=+i.current.value;n<1||n>25?c(!1):e.onAddToCart(n)},children:[Object(u.jsxs)("div",{className:A.a.quantityControl,children:[Object(u.jsx)("button",{onClick:function(e){if(e.preventDefault(),i.current.value<25)return c(!0),i.current.value++},children:"+"}),Object(u.jsx)(S,{input:{ref:i,id:"quantity_"+e.id,type:"number",min:1,max:25,defaultValue:1,onChange:function(){var e=+i.current.value;c(!(e<1||e>25))}},label:"Quantity"}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),i.current.value>1&&(i.current.value<27&&c(!0),i.current.value--)},children:"-"})]}),Object(u.jsx)("button",{children:"+Add"}),a?"":Object(u.jsx)("p",{style:{color:"red"},children:"quantity is not valid please enter a number between 1 and 25"})]})},R=n(12),T=n(31),E=function(e){var t=Object(o.useContext)(b),n="$".concat(e.price.toFixed(2));return Object(u.jsx)(o.Fragment,{children:Object(u.jsx)(T.a,{className:I.a.mealCol,children:Object(u.jsx)(R.a,{className:"".concat(I.a.mealCard," text-center"),children:Object(u.jsxs)(R.a.Body,{children:[Object(u.jsx)("div",{className:"".concat(I.a.mealPhoto," mx-auto d-flex align-items-center"),children:Object(u.jsx)(R.a.Img,{className:"",variant:"top",src:"".concat(e.src),alt:"Image Photo"})}),Object(u.jsx)(R.a.Title,{children:e.name}),Object(u.jsx)(R.a.Text,{children:e.description}),Object(u.jsx)(R.a.Text,{children:n}),Object(u.jsx)(R.a.Footer,{style:{padding:"0.5rem 0rem"},children:Object(u.jsx)(P,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})," "]})})})})},H=n(32),B=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=v(),i=c.isLoading,s=c.error,d=c.sendRequest;Object(o.useEffect)((function(){d({url:"https://react-http-3176c-default-rtdb.firebaseio.com/meals.json"},(function(e){var t=[];for(var n in e)t.push({id:n,name:e[n].name,description:e[n].description,price:e[n].price,photo:e[n].photo});a(t)}))}),[d]);var m=n.map((function(e){return Object(u.jsx)(E,{id:e.id,name:e.name,description:e.description,price:e.price,src:e.photo},e.id)}));return Object(u.jsxs)(l.a,{className:y.a.mealsList,children:[Object(u.jsx)("header",{children:"Meals List"}),i&&Object(u.jsx)("p",{className:y.a.errorHandle,children:"Loading..."}),s&&Object(u.jsxs)("p",{className:y.a.errorHandle,children:[s," ( Please turn on the VPN if firebase doesn't work in your country )."]}),Object(u.jsx)(H.a,{children:m})]})},F=n(18),L={items:[],totalAmount:0},q=function(e,t){if("ADD_ITEM"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var o=Object(g.a)(Object(g.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(F.a)(e.items))[c]=o}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE_ITEM"===t.type){var i,s=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[s],u=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(g.a)(Object(g.a)({},l),{},{amount:l.amount-1});(i=Object(F.a)(e.items))[s]=d}return{items:i,totalAmount:u}}return t.type,L},D=function(e){var t=Object(o.useReducer)(q,L),n=Object(r.a)(t,2),a=n[0],c=n[1],i={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD_ITEM",item:e})},removeItem:function(e){c({type:"REMOVE_ITEM",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(u.jsx)(b.Provider,{value:i,children:e.children})},z=n(11),J=n.n(z),Q=n(25),V=n.n(Q),W=function(e){return Object(u.jsx)("div",{className:V.a.backdrop,onClick:e.onClick})},G=function(e){return Object(u.jsx)("div",{className:V.a.modal,children:Object(u.jsx)("div",{className:V.a.content,children:e.children})})},X=document.getElementById("modal"),Z=function(e){return Object(u.jsxs)(o.Fragment,{children:[c.a.createPortal(Object(u.jsx)(W,{onClick:e.onClose}),X),c.a.createPortal(Object(u.jsx)(G,{children:e.children}),X)]})},Y=n(14),$=n.n(Y),K=function(e){return Object(u.jsxs)("li",{className:$.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("div",{className:$.a.summary,children:[Object(u.jsx)("span",{className:$.a.price,children:"$".concat(e.price)}),Object(u.jsx)("span",{className:$.a.amount,children:"X ".concat(e.amount)})]})]}),Object(u.jsxs)("div",{className:$.a.actions,children:[Object(u.jsx)("button",{onClick:e.onRemove,children:"-"}),Object(u.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},U=n(7),ee=n.n(U),te=function(e){var t=Object(o.useState)({name:!0,street:!0,postalCode:!0,city:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(o.useRef)(),s=Object(o.useRef)(),l=Object(o.useRef)(),d=Object(o.useRef)(),m=function(e){return""===e.trim()},j=a.name?"".concat(ee.a.control):"".concat(ee.a.control," ").concat(ee.a.invalid),b=a.street?"".concat(ee.a.control):"".concat(ee.a.control," ").concat(ee.a.invalid),O=a.postalCode?"".concat(ee.a.control):"".concat(ee.a.control," ").concat(ee.a.invalid),p=a.city?"".concat(ee.a.control):"".concat(ee.a.control," ").concat(ee.a.invalid);return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=i.current.value(),a=s.current.value(),r=l.current.value(),o=d.current.value(),u=!m(n),j=!m(a),b=5===r.trim().length,O=!m(o);c({name:u,street:j,postalCode:b,city:O}),u&&j&&b&&O&&e.onConfirm({name:n,street:a,city:o,postalCode:r})},className:ee.a.form,children:[Object(u.jsx)(S,{className:j,input:{type:"text",id:"name"},ref:i,label:"Name"}),!a.name&&Object(u.jsx)("p",{className:ee.a.invalidInput,children:"Please enter a valid name."}),Object(u.jsx)(S,{className:b,input:{type:"text",id:"street"},ref:s,label:"Street"}),!a.street&&Object(u.jsx)("p",{className:ee.a.invalidInput,children:"Please enter a valid street."}),Object(u.jsx)(S,{className:O,input:{type:"text",id:"postal"},ref:l,label:"Postal Code"}),!a.postalCode&&Object(u.jsx)("p",{className:ee.a.invalidInput,children:"Please enter a valid postal code (5) numbers."}),Object(u.jsx)(S,{className:p,input:{type:"text",id:"city"},ref:d,label:"City"}),!a.city&&Object(u.jsx)("p",{className:ee.a.invalidInput,children:"Please enter a valid City."}),Object(u.jsxs)("div",{className:ee.a.actions,children:[Object(u.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(u.jsx)("button",{type:"submit",className:ee.a.submit,children:"Confirm"})]})]})},ne=function(e){var t=Object(o.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(o.useState)(!1),l=Object(r.a)(s,2),d=l[0],m=l[1],j=Object(o.useState)(!1),O=Object(r.a)(j,2),p=O[0],f=O[1],h=Object(o.useContext)(b),v=h.items,C="$".concat(h.totalAmount.toFixed(2)),y=v.length>0,N=function(e){h.addItem(Object(g.a)(Object(g.a)({},e),{},{amount:1}))},I=function(e){h.removeItem(e)},k=function(){var e=Object(_.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://react-http-3176c-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:h.items})});case 3:m(!1),f(!0),h.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=Object(u.jsx)("ul",{className:J.a["cart-items"],children:v.map((function(e){return Object(u.jsx)(K,{id:e.id,name:e.name,price:e.price,amount:e.amount,onAdd:N.bind(null,e),onRemove:I.bind(null,e.id)},e.id)}))}),S=!a&&Object(u.jsxs)("div",{className:J.a.actions,children:[Object(u.jsx)("button",{className:J.a["button--alt"],onClick:e.onClose,children:"Close"}),y&&Object(u.jsx)("button",{className:J.a.button,onClick:function(){c(!0)},children:"Order"})]}),w=Object(u.jsx)("p",{children:"Sending order data..."}),A=Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsx)("p",{children:"Successfully sent the oder."}),Object(u.jsx)("div",{className:J.a.actions,children:Object(u.jsx)("button",{className:J.a.button,onClick:e.onClose,children:"Close"})})]}),P=Object(u.jsxs)(i.a.Fragment,{children:[M,Object(u.jsxs)("div",{className:J.a.total,children:[Object(u.jsx)("span",{children:"Total Amount"}),Object(u.jsx)("span",{children:C})]}),a&&Object(u.jsx)(te,{onConfirm:k,onCancel:e.onClose}),S]});return Object(u.jsxs)(Z,{onClose:e.onClose,children:[!d&&!p&&P,d&&!p&&w,!d&&p&&A]})};n(42);var ae=function(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)(D,{children:[n&&Object(u.jsx)(ne,{onClose:function(){a(!1)}}),Object(u.jsx)(f,{cartOnClick:function(){a(!0)}}),Object(u.jsx)("main",{children:Object(u.jsx)(B,{})})]})};c.a.render(Object(u.jsx)(ae,{}),document.getElementById("root"))},7:function(e,t,n){e.exports={form:"Checkout_form__26T_w",control:"Checkout_control__dQM6C",actions:"Checkout_actions__1Bv72",submit:"Checkout_submit__1szXQ",invalid:"Checkout_invalid__t3SS8",invalidInput:"Checkout_invalidInput__21kFS"}}},[[43,1,2]]]);
//# sourceMappingURL=main.9425b866.chunk.js.map