(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,n){},57:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(13),s=n.n(r),i=(n(57),n(6)),o=n(25),l=n(26),j=n(32),b=n(30),u=(n(38),n(45)),d=n.n(u),h=n(14),m=n(75),O=n(2),x=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={isLoggedIn:!1,userID:"",name:"",email:"",picture:""},a.responseFacebook=function(e){a.setState({isLoggedIn:!0,userID:e.userID,name:e.name,email:e.email,picture:e.picture.data.url})},a.componentClicked=function(){console.log("Facebook btn clicked")},a.handleFailure=function(){console.log("failed to login")},a.checkState=function(e){console.log(e)},a.state={},a.cont="",a}return Object(l.a)(n,[{key:"getFBCont",value:function(){return this.cont}},{key:"setState",value:function(e){this.setState({isLoggedIn:{bool:e}})}},{key:"setName",value:function(e){this.setState({name:e})}},{key:"render",value:function(){var e;return e=this.state.isLoggedIn?Object(O.jsxs)("div",{style:{width:"400px",margin:"auto",background:"#f4f4f4",padding:"20px"},children:[Object(O.jsx)("img",{src:this.state.picture,alt:this.state.name}),Object(O.jsxs)("h2",{children:["Welcome ",this.state.name]}),"Email: ",this.state.email]}):Object(O.jsx)(d.a,{appId:"203256658124872",autoLoad:!1,render:function(e){return Object(O.jsxs)(h.a,{onClick:e.onClick,className:"Facebook",style:{background:"#4267b2"},children:[Object(O.jsx)(m.a,{className:"mx-2"}),"Continue with Facebook"]})},fields:"name,email,picture",onClick:this.componentClicked,onFailure:this.handleFailure,callback:this.responseFacebook}),this.cont=e,Object(O.jsx)(O.Fragment,{children:e})}}]),n}(a.Component),g=n(46),f=n.n(g),p=n(76),v=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={isLoggedIn:!1,userID:"",name:"",email:"",picture:""},e.responseGoogle=function(t){console.log(t),console.log(t.profileObj),e.setState({isLoggedIn:!0,userID:t.profileObj.userID,name:t.profileObj.name,email:t.profileObj.email,picture:t.profileObj.imageUrl})},e}return Object(l.a)(n,[{key:"render",value:function(){var e;return e=this.state.isLoggedIn?Object(O.jsxs)("div",{style:{width:"400px",margin:"auto",background:"#f4f4f4",padding:"20px"},children:[Object(O.jsx)("img",{src:this.state.picture,alt:this.state.name}),Object(O.jsxs)("h2",{children:["Welcome ",this.state.name]}),"Email: ",this.state.email]}):Object(O.jsx)(f.a,{clientId:"957975470640-c8nifvp8u0n99122n016hrmt04s0n1gt.apps.googleusercontent.com",buttonText:"Login with Google",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin",icon:!0,render:function(e){return Object(O.jsxs)(h.a,{onClick:e.onClick,disabled:e.disabled,className:"Google",style:{background:"#DB4437"},children:[Object(O.jsx)(p.a,{className:"mx-2"}),"Continue with Google"]})}}),Object(O.jsx)(O.Fragment,{children:e})}}]),n}(a.Component),k=n(35),y=n(19);function S(e){var t=Object(a.useState)(""),n=Object(k.a)(t,2),c=n[0],r=n[1];return Object(O.jsx)(y.a.Control,{type:"text",value:c,ref:e.ref,placeholder:"Enter Name",onChange:function(e){return r(e.target.value)},className:"mt-3 mb-3"})}function N(e){var t=Object(a.useState)("example@email.com"),n=Object(k.a)(t,2),c=n[0],r=n[1];return Object(O.jsx)(y.a.Control,{type:"email",value:c,ref:e.ref,placeholder:"Enter Name",onChange:function(e){return r(e.target.value)},className:"mt-3 mb-3"})}function L(e){var t=Object(a.useState)(""),n=Object(k.a)(t,2),c=n[0],r=n[1];return Object(O.jsx)(y.a.Control,{type:"password",value:c,ref:e.ref,placeholder:"Enter Password",onChange:function(e){return r(e.target.value)},className:"mt-3 mb-3"})}var C=n(15),I=n(21);var w=function(){return Object(O.jsx)("div",{className:"Login mt-5",children:Object(O.jsxs)(C.a,{className:"",children:[Object(O.jsx)("h4",{className:"float-left",children:"Login"}),Object(O.jsxs)(I.a,{style:{width:"18rem",border:0},className:"mx-auto",children:[Object(O.jsx)(N,{}),Object(O.jsx)(L,{}),Object(O.jsx)(h.a,{children:" Log in"}),Object(O.jsx)("span",{children:"or"}),Object(O.jsx)(x,{}),Object(O.jsx)(v,{})]})]})})},F=n(29),E=n(77);var D=function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.index}),Object(O.jsx)("td",{children:e.title})]})})};var T=function(e,t){for(var n="#",a="Title",c=[],r=1;r<=10;r++){var s="article: ".concat(r);c.push(Object(O.jsx)(D,{index:r,title:s}))}return Object(O.jsxs)(E.a,{striped:!0,hover:!0,variant:"primary",className:"mt-5",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:a}),Object(O.jsx)("th",{children:n})]})}),Object(O.jsx)("tbody",{children:c})]})};var G=function(){var e=Object(F.b)((function(e){return e.articles}));return console.log(e),Object(O.jsx)("div",{className:"Home",children:Object(O.jsx)(C.a,{children:Object(O.jsx)(T,{})})})},R=n(42),A=n.n(R),B=n(48);var J=function(e){var t=function(){var e=Object(B.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"Register m-5",children:[Object(O.jsx)("h1",{children:"Register a new SEEDS account"}),Object(O.jsx)("span",{children:"Add to the rapidly growing repository of software engineering methods!"}),Object(O.jsx)(C.a,{className:"p-5",children:Object(O.jsxs)(I.a,{style:{width:"20rem",border:0},className:"mx-auto",children:[Object(O.jsxs)(y.a,{onSubmit:t,children:[Object(O.jsx)(S,{}),Object(O.jsx)(N,{}),Object(O.jsx)(L,{}),Object(O.jsx)(h.a,{className:"mt-3 mb-3",style:{width:"100%"},children:"Register"})]}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:"or"}),Object(O.jsx)(x,{}),Object(O.jsx)(v,{})]})})]})},P=n(23),_=n(34);var H=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(_.a,{className:"navbar navbar-expand-lg navbar-dark bg-primary p-3",variant:"dark",children:[Object(O.jsx)(_.a.Brand,{href:"/",children:"SEEDS"}),Object(O.jsx)(_.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(O.jsxs)(P.a,{className:"mr-auto",children:[Object(O.jsx)(P.a.Link,{href:"/",children:"Home"}),Object(O.jsx)(P.a.Link,{href:"/Login",children:"Login"}),Object(O.jsx)(P.a.Link,{href:"/Register",children:"Register"})]})]}),Object(O.jsx)(i.a,{exact:!0,path:"/",component:G}),Object(O.jsx)(i.a,{exact:!0,path:"/Login",component:w}),Object(O.jsx)(i.a,{exact:!0,path:"/Register",component:J})]})};var U=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(C.a,{fluid:"true",children:[Object(O.jsx)(H,{}),Object(O.jsx)("small",{children:"SEEDS App created by: Ellaira, Jordan, StJohn"})]})})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},W=n(41),q=(n(70),n(71),n(20)),z=n(51),K="FETCH_ALL",Q="ADD",V={article:{key:"",title:"",author:""},formSubmitted:!1},X=n(18),Y="LOGIN",Z="REGISTER",$="SUBMISSION_STATUS",ee={profile:{name:"",email:"",profileImage:""},formSubmitted:!1},te=Object(q.b)({articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return t.payload;case Q:default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:case Y:case $:return Object(X.a)(Object(X.a)({},e),{},{profile:t.payload.user,formSubmitted:!1});default:return e}}}),ne=Object(q.d)(te,Object(q.c)(Object(q.a)(z.a)));s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(W.a,{children:Object(O.jsx)(F.a,{store:ne,children:Object(O.jsx)(U,{})})})}),document.getElementById("root")),M()}},[[72,1,2]]]);
//# sourceMappingURL=main.1575e51c.chunk.js.map