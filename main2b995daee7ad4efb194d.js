"use strict";(self.webpackChunkreact_typescript_webpack_setup=self.webpackChunkreact_typescript_webpack_setup||[]).push([[792],{210:(r,n,A)=>{var e=A(723),o=A(72),t=A.n(o),s=A(825),i=A.n(s),a=A(659),c=A.n(a),p=A(56),l=A.n(p),d=A(540),C=A.n(d),x=A(113),g=A.n(x),u=A(159),h={};h.styleTagTransform=g(),h.setAttributes=l(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=C(),t()(u.A,h),u.A&&u.A.locals&&u.A.locals;var b=A(911),m={};m.styleTagTransform=g(),m.setAttributes=l(),m.insert=c().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=C(),t()(b.A,m),b.A&&b.A.locals&&b.A.locals;const y=A.p+"e04aaba29a3d335de44c.png",f=A.p+"e68b35f4774979ae220b.svg";var B=A(6),w=A(471),k=A(671);const E=function(){var r=(0,w.useState)(0),n=(0,B.A)(r,2),A=n[0],e=n[1];return(0,k.jsxs)("div",{children:[(0,k.jsx)("h3",{children:"Update the count and edit src/App.tsx, state is preserved"}),(0,k.jsxs)("button",{onClick:function(){return e((function(r){return r+1}))},children:["Count - ",A]})]})},v=function(){return(0,k.jsxs)("div",{className:"container",children:[(0,k.jsx)("img",{src:"./assets/logo.png",alt:"Logo Direct Source Path"}),(0,k.jsx)("img",{src:y,alt:"Logo Import"}),(0,k.jsx)("h1",{children:"React TS Starter Template using Webpack"}),(0,k.jsxs)("h2",{children:["Running in ",(0,k.jsx)("u",{children:"production"})," Mode"]}),(0,k.jsxs)("h3",{children:["author: ","shivp436"]}),(0,k.jsx)("img",{src:f,alt:"React Logo"}),(0,k.jsx)(E,{}),(0,k.jsx)("h3",{children:"Just testing a subheading"})]})};(0,e.H)(document.getElementById("root")).render((0,k.jsx)(v,{}))},911:(r,n,A)=>{A.d(n,{A:()=>i});var e=A(963),o=A.n(e),t=A(89),s=A.n(t)()(o());s.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]),s.push([r.id,'*{box-sizing:border-box}body{background-color:#333;font-family:"Roboto",sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;overflow:hidden;margin:0;padding:20px}.container{background-color:#999;border-radius:10px;box-shadow:0 10px 20px rgba(0,0,0,.1),0 6px 6px rgba(0,0,0,.1);padding:50px 20px;text-align:center;max-width:100%;width:800px}h3{margin:0;opacity:.5;letter-spacing:2px}img{width:100px;margin-bottom:20px}.joke{font-size:30px;letter-spacing:1px;line-height:40px;margin:50px auto;max-width:600px}.btn{background-color:#333;color:#999;border:0;border-radius:10px;box-shadow:0 5px 15px rgba(0,0,0,.1),0 6px 6px rgba(0,0,0,.1);padding:14px 40px;font-size:16px;cursor:pointer}.btn:active{transform:scale(0.98)}.btn:focus{outline:0}a{color:#333;text-decoration:none;margin:40px 0;display:block;color:#000}a:hover{text-decoration:underline}list{list-style-type:none;text-align:left}.list-item{padding:10px 0;text-align:left;list-style-type:disc}',"",{version:3,sources:["webpack://./src/styles/styles.scss"],names:[],mappings:"AAQA,EACE,qBAAA,CAGF,KACE,qBAXc,CAYd,+BAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,sBAAA,CACA,YAAA,CACA,eAAA,CACA,QAAA,CACA,YAAA,CAGF,WACE,qBAvBgB,CAwBhB,kBAAA,CACA,8DAvBA,CAwBA,iBAAA,CACA,iBAAA,CACA,cAAA,CACA,WAAA,CAGF,GACE,QAAA,CACA,UAAA,CACA,kBAAA,CAGF,IACE,WAAA,CACA,kBAAA,CAGF,MACE,cAAA,CACA,kBAAA,CACA,gBAAA,CACA,gBAAA,CACA,eAAA,CAGF,KACE,qBArDc,CAsDd,UArDgB,CAsDhB,QAAA,CACA,kBAAA,CACA,6DACE,CAEF,iBAAA,CACA,cAAA,CACA,cAAA,CAEA,YACE,qBAAA,CAGF,WACE,SAAA,CAIJ,EACE,UA1Ec,CA2Ed,oBAAA,CACA,aAAA,CACA,aAAA,CACA,UAAA,CAGF,QACE,yBAAA,CAGF,KACE,oBAAA,CACA,eAAA,CAGF,WACE,cAAA,CACA,eAAA,CACA,oBAAA",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\r\n\r\n$primary-color: #333;\r\n$secondary-color: #999;\r\n$box-shadow:\r\n  0 10px 20px rgba(0, 0, 0, 0.1),\r\n  0 6px 6px rgba(0, 0, 0, 0.1);\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: $primary-color;\r\n  font-family: 'Roboto', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  margin: 0;\r\n  padding: 20px;\r\n}\r\n\r\n.container {\r\n  background-color: $secondary-color;\r\n  border-radius: 10px;\r\n  box-shadow: $box-shadow;\r\n  padding: 50px 20px;\r\n  text-align: center;\r\n  max-width: 100%;\r\n  width: 800px;\r\n}\r\n\r\nh3 {\r\n  margin: 0;\r\n  opacity: 0.5;\r\n  letter-spacing: 2px;\r\n}\r\n\r\nimg {\r\n  width: 100px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.joke {\r\n  font-size: 30px;\r\n  letter-spacing: 1px;\r\n  line-height: 40px;\r\n  margin: 50px auto;\r\n  max-width: 600px;\r\n}\r\n\r\n.btn {\r\n  background-color: $primary-color;\r\n  color: $secondary-color;\r\n  border: 0;\r\n  border-radius: 10px;\r\n  box-shadow:\r\n    0 5px 15px rgba(0, 0, 0, 0.1),\r\n    0 6px 6px rgba(0, 0, 0, 0.1);\r\n  padding: 14px 40px;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n\r\n  &:active {\r\n    transform: scale(0.98);\r\n  }\r\n\r\n  &:focus {\r\n    outline: 0;\r\n  }\r\n}\r\n\r\na {\r\n  color: $primary-color;\r\n  text-decoration: none;\r\n  margin: 40px 0;\r\n  display: block;\r\n  color: #000;\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\nlist {\r\n  list-style-type: none;\r\n  text-align: left;\r\n}\r\n\r\n.list-item {\r\n  padding: 10px 0;\r\n  text-align: left;\r\n  list-style-type: disc;\r\n}\r\n"],sourceRoot:""}]);const i=s},159:(r,n,A)=>{A.d(n,{A:()=>i});var e=A(963),o=A.n(e),t=A(89),s=A.n(t)()(o());s.push([r.id,"h1 {\n  color: red;\n}\n","",{version:3,sources:["webpack://./src/styles/styles.css"],names:[],mappings:"AAAA;EACE,UAAU;AACZ",sourcesContent:["h1 {\r\n  color: red;\r\n}\r\n"],sourceRoot:""}]);const i=s}},r=>{r.O(0,[195],(()=>r(r.s=210))),r.O()}]);
//# sourceMappingURL=main2b995daee7ad4efb194d.js.map