(this["webpackJsonpsequence-memory"]=this["webpackJsonpsequence-memory"]||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(17),s=n.n(c),r=(n(47),n(27)),o=n(12),l=n(9),u=n(39),j=n.n(u),d=n(36),b=n.n(d),h=n(38),O=n.n(h),m=(n(48),n(71)),p=n(73),f=n(72),v=n(74),g=n(2);var x=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(6),s=Object(l.a)(c,2),u=s[0],d=s[1],h=Object(i.useState)(99),x=Object(l.a)(h,2),S=x[0],C=x[1],k=Object(i.useState)([]),w=Object(l.a)(k,2),I=w[0],B=w[1],L=Object(i.useState)(!0),N=Object(l.a)(L,2),T=N[0],q=N[1],D=Object(i.useState)(30),F=Object(l.a)(D,2),M=F[0],V=F[1],z=Object(i.useState)(M),E=Object(l.a)(z,2),R=E[0],A=E[1],J=Object(i.useState)([]),P=Object(l.a)(J,2),G=P[0],U=P[1],H=Object(i.useState)(1),K=Object(l.a)(H,2),Q=K[0],W=K[1],X=Object(i.useRef)(void 0),Y=function(){speechSynthesis.cancel();for(var e=[],t=[],i=0;i<u;i++){var a=Math.floor(Math.random()*(S+1));e.push(a),t.push(void 0)}B(e),U(t),A(M),n?(Z(e),q(!1)):q(!0)},Z=function(e){clearTimeout(X.current),A(M),$(e,0)},$=function e(t,n){var i=new SpeechSynthesisUtterance(t[n].toString());i.voice=speechSynthesis.getVoices()[2],console.log(i),i.onend=function(){n+1===t.length&&_()},i.onstart=function(){n+1<t.length&&setTimeout((function(){return e(t,n+1)}),1e3*Q)},speechSynthesis.speak(i)},_=function(){A(M),X.current=setInterval((function(){R>0?A((function(e){return e>0?e-1:0})):clearInterval(X.current)}),1e3)};Object(i.useEffect)((function(){0===R&&q(!1)}),[R]),Object(i.useEffect)((function(){Y(),n?q(!1):_()}),[n]);var ee=R>0?"hidden":"initial";return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("header",{className:"App-header",children:[Object(g.jsxs)("div",{style:{marginBottom:"20px"},children:[Object(g.jsxs)(m.a,{component:"label",container:!0,alignItems:"center",spacing:3,style:{marginBottom:"20px"},children:[Object(g.jsx)(m.a,{item:!0,children:Object(g.jsx)(p.a,{variant:n?"outlined":"contained",color:"primary",onClick:function(){n&&a(!1)},children:"Display"})}),Object(g.jsx)(m.a,{item:!0,children:Object(g.jsx)(p.a,{variant:n?"contained":"outlined",color:"secondary",onClick:function(){n||a(!0)},children:"Speak"})})]}),Object(g.jsx)(f.a,{id:"seq-length-slider",gutterBottom:!0,children:"Sequence Length"}),Object(g.jsx)(v.a,{defaultValue:u,value:u,valueLabelDisplay:"auto",step:1,marks:!0,min:4,max:14,onChange:function(e,t){return d(t)}}),Object(g.jsx)(f.a,{id:"countdown-duration-slider",gutterBottom:!0,children:"".concat(n?"Lapsed":"Memorizing"," Time (secs):")}),Object(g.jsx)(v.a,{defaultValue:u,value:M,valueLabelDisplay:"auto",step:5,marks:!0,min:5,max:60,onChange:function(e,t){return V(t)}}),Object(g.jsxs)(m.a,{component:"label",container:!0,alignItems:"center",spacing:0,children:[Object(g.jsx)(m.a,{item:!0,children:Object(g.jsx)(f.a,{id:"seq-length-slider",gutterBottom:!0,children:"Item Range: 0 to"})}),Object(g.jsx)(m.a,{item:!0,children:Object(g.jsx)("input",{type:"number",className:"answer-input",maxLength:2,value:S,onChange:function(e){var t=parseInt(e.target.value);C(t)}})})]}),Object(g.jsxs)("div",{style:{visibility:n?"initial":"hidden"},children:[Object(g.jsx)(f.a,{id:"countdown-duration-slider",gutterBottom:!0,children:"Speech Speed"}),Object(g.jsx)(v.a,{defaultValue:Q,value:Q,valueLabelDisplay:"auto",step:.1,marks:!0,min:.8,max:2,onChange:function(e,t){return W(t)}})]})]}),Object(g.jsx)(p.a,{variant:"contained",color:"secondary",onClick:Y,children:"Generate New"}),Object(g.jsx)("p",{style:{visibility:T?"initial":"hidden"},children:I.join(" - ")}),Object(g.jsx)("div",{className:"answer-container",style:{visibility:ee},children:I.map((function(e,t){return Object(g.jsx)("input",{type:"number",className:"answer-input",id:"".concat(t),onChange:function(e){return function(e,t){var n=Object(o.a)(G);n[t]=parseInt(e),U(n)}(e.target.value,t)},disabled:T},t)}))}),Object(g.jsx)("div",{className:"answer-container",style:{visibility:0===R&&T?"initial":"hidden"},children:I.map((function(e,t){return e===G[t]?Object(g.jsx)(b.a,{style:Object(r.a)(Object(r.a)({},y),{},{color:O.a[500]}),fontSize:"large"},t):Object(g.jsx)(j.a,{color:"error",fontSize:"large",style:Object(r.a)({},y)},t)}))}),Object(g.jsxs)("p",{children:["Time remaining: ",R]}),Object(g.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){q(!0)},style:{visibility:0!==R||T?"hidden":"initial"},children:"Reveal"})]})})},y={width:"1.7rem",margin:"0 14px"},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),c(e),s(e)}))};s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(x,{})}),document.getElementById("root")),S()}},[[56,1,2]]]);
//# sourceMappingURL=main.60a8da5f.chunk.js.map