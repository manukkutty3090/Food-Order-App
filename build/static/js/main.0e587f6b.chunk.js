(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1L5zp",total:"Cart_total__3QeXe",actions:"Cart_actions__3T7Fx","button--alt":"Cart_button--alt__1kgxQ",button:"Cart_button__1ay0H"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1Lm3i",summary:"CartItem_summary__1L8tI",price:"CartItem_price__39COr",amount:"CartItem_amount__z5l7W",actions:"CartItem_actions__2Uhog"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__20JsF",icon:"HeaderCartButton_icon__1XWkF",badge:"HeaderCartButton_badge__uM6Bz",bump:"HeaderCartButton_bump__6j6W9"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__2AlOs",description:"MealItem_description__AHdIr",price:"MealItem_price__2FGIe"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1Cbmz",modal:"Modal_modal__1vX4J","slide-down":"Modal_slide-down__1aJJ7"}},function(e,t,n){e.exports={header:"Header_header__1VKi4","main-image":"Header_main-image__pKK48"}},,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__LNhRk"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__Ms0y3","meals-appear":"AvailableMeals_meals-appear__38k_X"}},function(e,t,n){e.exports={form:"MealItemForm_form__1DHIi",bump:"MealItemForm_bump__2RV7t"}},function(e,t,n){e.exports={input:"Input_input__1gVwi"}},function(e,t,n){e.exports={card:"Card_card__-GyyD"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(15),c=n.n(a),i=(n(28),n(3)),r=n(1),s=n.n(r),o=n(12),l=n.n(o),d=n.p+"static/media/meals.2971f633.jpg",m=n(7),u=n.n(m),j=n(0),b=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},O=s.a.createContext({items:[],amount:0,addItem:function(e){},removeItem:function(e){}});var x=function(e){var t=Object(r.useContext)(O).items,n=t.reduce((function(e,t){return e+t.amount}),0),a=Object(r.useState)(!1),c=Object(i.a)(a,2),s=c[0],o=c[1];Object(r.useEffect)((function(){if(0!==t.length){o(!0);var e=setTimeout((function(){o(!1)}),300);return function(){clearTimeout(e)}}}),[t]);var l="".concat(u.a.button," ").concat(s?u.a.bump:"");return Object(j.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(j.jsx)("span",{className:u.a.icon,children:Object(j.jsx)(b,{})}),Object(j.jsx)("span",{children:"Your Cart"}),Object(j.jsx)("span",{className:u.a.badge,children:n})]})};var p=function(e){return Object(j.jsxs)(r.Fragment,{children:[Object(j.jsxs)("header",{className:l.a.header,children:[Object(j.jsx)("h1",{children:"ORDER FOOD"}),Object(j.jsx)(x,{onClick:e.onShowCart})]}),Object(j.jsx)("div",{className:l.a["main-image"],children:Object(j.jsx)("img",{src:d,alt:"A table full of food!"})})]})},h=n(16),_=n.n(h),f=function(){return Object(j.jsxs)("section",{className:_.a.summary,children:[Object(j.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(j.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(j.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(17),C=n.n(v),g=n(10),A=n.n(g),N=n(18),y=n.n(N),I=n(2),H=n(19),M=n.n(H),k=s.a.forwardRef((function(e,t){return Object(j.jsxs)("div",{className:M.a.input,children:[Object(j.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(j.jsx)("input",Object(I.a)({ref:t},e.input))]})}));var w=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(j.jsxs)("form",{className:y.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(j.jsx)(k,{ref:s,label:"Amount",input:{id:e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(j.jsx)("button",{children:"+ Add"}),!a&&Object(j.jsx)("p",{children:"please enter a valid amount (1-5)."})]})};var F=function(e){var t=Object(r.useContext)(O),n="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:A.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("div",{className:A.a.description,children:e.description}),Object(j.jsx)("div",{className:A.a.price,children:n})]}),Object(j.jsx)("div",{children:Object(j.jsx)(w,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},R=n(20),B=n.n(R);var D=function(e){return Object(j.jsx)("div",{className:B.a.card,children:e.children})},S=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}];var z=function(){var e=S.map((function(e){return Object(j.jsx)(F,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(j.jsx)("div",{className:C.a.meals,children:Object(j.jsx)(D,{children:Object(j.jsx)("ul",{children:e})})})};var E=function(){return Object(j.jsxs)(r.Fragment,{children:[Object(j.jsx)(f,{}),Object(j.jsx)(z,{})]})},T=n(8),J=n.n(T),V=n(11),L=n.n(V),X=function(e){return Object(j.jsx)("div",{className:L.a.backdrop,onClick:e.onHideCart})},G=function(e){return Object(j.jsx)("div",{className:L.a.modal,children:Object(j.jsx)("div",{className:L.a.content,children:e.children})})},K=document.getElementById("overlays");var P=function(e){return Object(j.jsxs)(r.Fragment,{children:[J.a.createPortal(Object(j.jsx)(X,{onHideCart:e.onHideCart}),K),J.a.createPortal(Object(j.jsx)(G,{children:e.children}),K)]})},W=n(4),$=n.n(W),Q=n(5),Y=n.n(Q),q=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:Y.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:Y.a.summary,children:[Object(j.jsx)("span",{className:Y.a.price,children:t}),Object(j.jsxs)("span",{className:Y.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:Y.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})};var U=function(e){var t=Object(r.useContext)(O),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(I.a)(Object(I.a)({},e),{},{amount:1}))},s=Object(j.jsx)("ul",{className:$.a["cart-items"],children:t.items.map((function(e){return Object(j.jsx)(q,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(j.jsxs)(P,{onHideCart:e.onHideCart,children:[s,Object(j.jsxs)("div",{className:$.a.total,children:[Object(j.jsx)("span",{children:"Total Amount"}),Object(j.jsx)("span",{children:n})]}),Object(j.jsxs)("div",{className:$.a.actions,children:[Object(j.jsx)("button",{className:$.a["button--alt"],onClick:e.onHideCart,children:"close"}),a&&Object(j.jsx)("button",{className:$.a.button,children:"Order"})]})]})},Z=n(13),ee={items:[],totalAmount:0},te=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(I.a)(Object(I.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(Z.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],d=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(I.a)(Object(I.a)({},l),{},{amount:l.amount-1});(s=Object(Z.a)(e.items))[o]=m}return{items:s,totalAmount:d}}return ee},ne=function(e){var t=Object(r.useReducer)(te,ee),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(j.jsx)(O.Provider,{value:s,children:e.children})};var ae=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)(ne,{children:[Object(j.jsx)(p,{onShowCart:function(){a(!0)}}),n&&Object(j.jsx)(U,{onHideCart:function(){a(!1)}}),Object(j.jsx)("main",{children:Object(j.jsx)(E,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(ae,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.0e587f6b.chunk.js.map