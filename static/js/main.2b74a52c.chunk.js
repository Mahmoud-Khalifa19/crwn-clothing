(window["webpackJsonpcrwn-clothing"]=window["webpackJsonpcrwn-clothing"]||[]).push([[0],{48:function(e,t,n){e.exports=n(84)},59:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),i=n.n(c),l=n(16),o=n(5),s=n(40),u=n(14),m=n(29),p=n(41),d=n.n(p),b=n(42),h=n.n(b),f=n(4),g="SET_CURRENT_USER",v={currentUser:null},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(f.a)(Object(f.a)({},e),{},{currentUser:t.payload});default:return e}},y={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},O=n(47),k=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(f.a)(Object(f.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(O.a)(e),[Object(f.a)(Object(f.a)({},t),{},{quantity:1})])},j=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id===t.id})):e.map((function(e){return e.id===t.id?Object(f.a)(Object(f.a)({},e),{},{quantity:e.quantity-1}):e}))},w={hidden:!0,cartItems:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.TOGGLE_CART_HIDDEN:return Object(f.a)(Object(f.a)({},e),{},{hidden:!e.hidden});case y.ADD_ITEM:return Object(f.a)(Object(f.a)({},e),{},{cartItems:k(e.cartItems,t.payload)});case y.REMOVE_ITEM:return Object(f.a)(Object(f.a)({},e),{},{cartItems:j(e.cartItems,t.payload)});case y.CLEAR_ITEM_FROM_CART:return Object(f.a)(Object(f.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id===t.payload.id}))});default:return e}},C={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return t.type,e},U={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;return t.type,e},S={key:"root",storage:h.a,whitelist:["cart"]},T=Object(u.c)({user:E,cart:N,directory:x,shop:I}),R=Object(m.a)(S,T),A=[d.a],M=Object(u.d)(R,u.a.apply(void 0,A)),P=Object(m.b)(M),B=(n(59),n(7)),_=n.n(B),D=n(15),G=n(17),L=n(18),V=n(20),W=n(19),H=n(6),q=n(3),z=(n(61),n(21)),F=Object(q.a)([function(e){return e.directory}],(function(e){return e.sections})),J=(n(62),Object(H.g)((function(e){var t=e.title,n=e.imageUrl,a=e.size,c=e.history,i=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(a," menu-item"),onClick:function(){return c.push("".concat(l.url).concat(i))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),Q=(n(64),Object(q.b)({sections:F})),Y=Object(o.b)(Q)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,n=Object(z.a)(e,["id"]);return r.a.createElement(J,Object.assign({key:t},n))})))})),K=n(11),X=n(12);function Z(){var e=Object(K.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px 80px;\n"]);return Z=function(){return e},e}var $=X.b.div(Z()),ee=function(){return r.a.createElement($,null,r.a.createElement(Y,null))};function te(){var e=Object(K.a)(["\n    min-width: 165px;\n    width: auto;\n    height: 50px;\n    letter-spacing: 0.5px;\n    line-height: 50px;\n    padding: 0 35px 0 35px;\n    font-size: 15px;\n    text-transform: uppercase;\n    font-family: 'Open Sans Condensed';\n    font-weight: bolder;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n\n    ","\n\n"]);return te=function(){return e},e}function ne(){var e=Object(K.a)(["\nbackground-color: #4285f4;\ncolor: white;\n\n&:hover {\n  background-color: #357ae8;\n  border: none;\n}\n\n"]);return ne=function(){return e},e}function ae(){var e=Object(K.a)(["\nbackground-color: white;\ncolor: black;\nborder: 1px solid black;\n\n&:hover {\n  background-color: black;\n  color: white;\n  border: none;\n\n}\n"]);return ae=function(){return e},e}function re(){var e=Object(K.a)(["\nbackground-color: black;\ncolor: white;\nborder: none;\n\n&:hover{\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n\n}\n"]);return re=function(){return e},e}var ce=Object(X.a)(re()),ie=Object(X.a)(ae()),le=Object(X.a)(ne()),oe=X.b.button(te(),(function(e){return e.isGoogleSignIn?le:e.inverted?ie:ce})),se=function(e){var t=e.children,n=Object(z.a)(e,["children"]);return r.a.createElement(oe,n,t)},ue=function(){return{type:y.TOGGLE_CART_HIDDEN}},me=function(e){return{type:y.ADD_ITEM,payload:e}},pe=(n(66),Object(o.b)(null,(function(e){return{addItem:function(t){return e(me(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},c)),r.a.createElement(se,{onClick:function(){return n(t)},inverted:!0},"Add to cart"))}))),de=(n(67),function(e){var t=e.title,n=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},n.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(pe,{key:e.id,item:e})}))))}),be=Object(q.a)([function(e){return e.shop}],(function(e){return e.collections})),he=Object(q.a)([be],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),fe=(n(68),Object(q.b)({collections:he})),ge=Object(o.b)(fe)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,n=Object(z.a)(e,["id"]);return r.a.createElement(de,Object.assign({key:t},n))})))})),ve=(n(69),Object(o.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(q.a)([be],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collection,n=t.title,a=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},n),r.a.createElement("div",{className:"items"},a.map((function(e){return r.a.createElement(pe,{key:e.id,item:e})}))))}))),Ee=n(27),ye=n.n(Ee);n(70),n(73);ye.a.initializeApp({apiKey:"AIzaSyAOxQWYY192vPdpXx5yr9H24FMxaQuSVFQ",authDomain:"crwn-mk.firebaseapp.com",databaseURL:"https://crwn-mk.firebaseio.com",projectId:"crwn-mk",storageBucket:"",messagingSenderId:"956148830747",appId:"1:956148830747:web:5d0d847f3e0249b9"});var Oe=function(){var e=Object(D.a)(_.a.mark((function e(t,n){var a,r,c,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=we.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,a.set(Object(f.a)({displayName:r,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),ke=function(e){var t=e.docs.map((function(e){var t=e.data(),n=t.title,a=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:a}}));console.log(t)},je=ye.a.auth(),we=ye.a.firestore(),Ne=new ye.a.auth.GoogleAuthProvider;Ne.setCustomParameters({prompt:"select_account"});var Ce=function(){return je.signInWithPopup(Ne)},xe=(ye.a,function(e){Object(V.a)(n,e);var t=Object(W.a)(n);function n(){var e;Object(G.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromSnapshot=null,e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){we.collection("collections").onSnapshot(function(){var e=Object(D.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ke(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this.props.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(H.b,{exact:!0,path:"".concat(e.path),component:ge}),r.a.createElement(H.b,{path:"".concat(e.path,"/:collectionId"),component:ve}))}}]),n}(r.a.Component)),Ue=n(26),Ie=(n(75),function(e){var t=e.handleChange,n=e.label,a=Object(z.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},n):null)}),Se=(n(76),function(e){Object(V.a)(n,e);var t=Object(W.a)(n);function n(e){var a;return Object(G.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(D.a)(_.a.mark((function e(t){var n,r,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,c=n.password,e.prev=2,e.next=5,je.signInWithEmailAndPassword(r,c);case 5:a.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(Ue.a)({},r,n))},a.state={email:"",password:""},a}return Object(L.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(Ie,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),r.a.createElement(Ie,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(se,{type:"submit"}," Sign in "),r.a.createElement(se,{onClick:Ce,isGoogleSignIn:!0},"Sign in with Google"))))}}]),n}(r.a.Component)),Te=(n(77),function(e){Object(V.a)(n,e);var t=Object(W.a)(n);function n(){var e;return Object(G.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(D.a)(_.a.mark((function t(n){var a,r,c,i,l,o,s;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,r=a.displayName,c=a.email,i=a.password,l=a.confirmPassword,i===l){t.next=5;break}return alert("password dont match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,je.createUserWithEmailAndPassword(c,i);case 8:return o=t.sent,s=o.user,t.next=12,Oe(s,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(Ue.a)({},a,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(L.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"}," I do not have an account"),r.a.createElement("span",null," Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(Ie,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(Ie,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(Ie,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(Ie,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(se,{type:"submit"}," SIGN UP")))}}]),n}(r.a.Component)),Re=(n(78),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(Se,null),r.a.createElement(Te,null))}),Ae=(n(79),Object(o.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:y.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(me(t))},removeItem:function(t){return e(function(e){return{type:y.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,a=e.addItem,c=e.removeItem,i=t.name,l=t.imageUrl,o=t.price,s=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:l,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},s),r.a.createElement("div",{className:"arrow",onClick:function(){return a(t)}},"\u276f")),r.a.createElement("span",{className:"price"},o),r.a.createElement("div",{className:"remove-button",onClick:function(){return n(t)}},"\u2715"))}))),Me=n(46),Pe=n.n(Me),Be=function(e){var t=e.price,n=100*t;return r.a.createElement(Pe.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://sendeyo.com/up/d/f3eb2117da",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_I3DhabRNaU1PM2V37GVv8t0700G7rz7GL6"})},_e=function(e){return e.cart},De=Object(q.a)([_e],(function(e){return e.cartItems})),Ge=Object(q.a)([_e],(function(e){return e.hidden})),Le=Object(q.a)([De],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Ve=Object(q.a)([De],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),We=(n(80),Object(q.b)({cartItems:De,total:Ve})),He=Object(o.b)(We)((function(e){var t=e.cartItems,n=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(Ae,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},"TOTAL: $",n),r.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"),r.a.createElement(Be,{price:n}))}));function qe(){return(qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ze(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Fe=r.a.createElement("g",null),Je=r.a.createElement("g",null),Qe=r.a.createElement("g",null),Ye=r.a.createElement("g",null),Ke=r.a.createElement("g",null),Xe=r.a.createElement("g",null),Ze=r.a.createElement("g",null),$e=r.a.createElement("g",null),et=r.a.createElement("g",null),tt=r.a.createElement("g",null),nt=r.a.createElement("g",null),at=r.a.createElement("g",null),rt=r.a.createElement("g",null),ct=r.a.createElement("g",null),it=r.a.createElement("g",null),lt=function(e){var t=e.svgRef,n=e.title,a=ze(e,["svgRef","title"]);return r.a.createElement("svg",qe({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Fe,Je,Qe,Ye,Ke,Xe,Ze,$e,et,tt,nt,at,rt,ct,it)},ot=r.a.forwardRef((function(e,t){return r.a.createElement(lt,qe({svgRef:t},e))})),st=(n.p,n(81),Object(q.b)({itemCount:Le})),ut=Object(o.b)(st,(function(e){return{toggleCartHidden:function(){return e(ue())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(ot,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},n))})),mt=(n(82),function(e){var t=e.item,n=t.imageUrl,a=t.price,c=(t.name,t.quantity);return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:n,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c," x $",a)))}),pt=(n(83),Object(q.b)({cartItems:De})),dt=Object(H.g)(Object(o.b)(pt)((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(mt,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(se,{onClick:function(){n.push("/checkout"),a(ue())}},"GO TO CHECKOUT"))}))),bt=Object(q.a)([function(e){return e.user}],(function(e){return e.currentUser}));function ht(){return(ht=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ft(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var gt=r.a.createElement("title",null,"Group"),vt=r.a.createElement("desc",null,"Created with Sketch."),Et=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),yt=function(e){var t=e.svgRef,n=e.title,a=ft(e,["svgRef","title"]);return r.a.createElement("svg",ht({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),void 0===n?gt:n?r.a.createElement("title",null,n):null,vt,Et)},Ot=r.a.forwardRef((function(e,t){return r.a.createElement(yt,ht({svgRef:t},e))}));n.p;function kt(){var e=Object(K.a)(["\npadding: 10px 15px;\ncursor: pointer;\n"]);return kt=function(){return e},e}function jt(){var e=Object(K.a)(["\n      width: 50%;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n"]);return jt=function(){return e},e}function wt(){var e=Object(K.a)(["\n      height: 100%;\n      width: 70px;\n      padding: 25px;\n"]);return wt=function(){return e},e}function Nt(){var e=Object(K.a)(["\n    height: 70px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 25px;\n"]);return Nt=function(){return e},e}var Ct=X.b.div(Nt()),xt=Object(X.b)(l.b)(wt()),Ut=X.b.div(jt()),It=Object(X.b)(l.b)(kt()),St=Object(q.b)({currentUser:bt,hidden:Ge}),Tt=Object(o.b)(St)((function(e){var t=e.currentUser,n=e.hidden;return r.a.createElement(Ct,null,r.a.createElement(xt,{to:"/"},r.a.createElement(Ot,{className:"logo"})),r.a.createElement(Ut,null,r.a.createElement(It,{to:"/shop"},"SHOP"),r.a.createElement(It,{to:"/shop"},"CONTACT"),t?r.a.createElement(It,{as:"div",onClick:function(){return je.signOut()}},"SIGN OUT"):r.a.createElement(It,{to:"/signin"},"SIGN IN"),r.a.createElement(ut,null)),n?null:r.a.createElement(dt,null))})),Rt=function(e){Object(V.a)(n,e);var t=Object(W.a)(n);function n(){var e;Object(G.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=je.onAuthStateChanged(function(){var t=Object(D.a)(_.a.mark((function t(n){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,Oe(n);case 3:t.sent.onSnapshot((function(t){e(Object(f.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Tt,null),r.a.createElement(H.d,null,r.a.createElement(H.b,{exact:!0,path:"/",component:ee}),r.a.createElement(H.b,{path:"/shop",component:xe}),r.a.createElement(H.b,{exact:!0,path:"/checkout",component:He}),r.a.createElement(H.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?r.a.createElement(H.a,{to:"/"}):r.a.createElement(Re,null)}})))}}]),n}(r.a.Component),At=Object(q.b)({currentUser:bt}),Mt=Object(o.b)(At,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:g,payload:e}}(t))}}}))(Rt);i.a.render(r.a.createElement(o.a,{store:M},r.a.createElement(l.a,null,r.a.createElement(s.a,{persistor:P},r.a.createElement(Mt,null)))),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.2b74a52c.chunk.js.map