(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(24)},,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=(a(14),a(3)),u=a(1),s=(a(16),a(2),{carro:["Motor","Porta","Cap\xf4","Pneu","Antena"],Fruta:["Banana","Ma\xe7\xe3","P\xeara","Mam\xe3o","Laranja"],Corpo:["Bra\xe7o","Perna","C\xe9rebro","Pesco\xe7o","Olhos"],Computador:["Mouse","Teclado","Monitor","Gabinete"],"programa\xe7\xe3o":["Linguagem","Framework","JavaScript","React"],alimento:["Arroz","Feij\xe3o","Carne","Leite","Ovo"]}),i=(a(18),function(e){var t=e.startGame;return r.a.createElement("div",{className:"start"},r.a.createElement("h1",null,"Secret Word"),r.a.createElement("p",null,"Clique no bot\xe3o abaixo para come\xe7ar a jogar"),r.a.createElement("button",{onClick:t},"Come\xe7ar o jogo"))}),m=(a(20),function(e){var t=e.verifyLetter,a=(e.pickedWord,e.pickedCategory),c=e.letters,o=e.guessedLetters,l=e.wrongLetters,s=e.guesses,i=e.score,m=Object(n.useState)(""),b=Object(u.a)(m,2),d=b[0],f=b[1],p=Object(n.useRef)(null);return r.a.createElement("div",{className:"game"},r.a.createElement("p",{className:"points"},r.a.createElement("span",null,"Pontua\xe7\xe3o: ",i)),r.a.createElement("h1",null,"Advinhe a palavra "),r.a.createElement("h3",{className:"tip"},"Dica sobre a palavra: ",r.a.createElement("span",null,a)),r.a.createElement("p",null,"Voc\xea ainda tem ",s," tentativas(s)."),r.a.createElement("div",{className:"wordContainer"},c.map(function(e,t){return o.includes(e)?r.a.createElement("span",{key:t,className:"letter"},e):r.a.createElement("span",{key:t,className:"blankSquare"})})),r.a.createElement("div",{className:"letterContainer"},r.a.createElement("p",null,"Tente advinhar uma letra da palavra:"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(d),f(""),p.current.focus()}},r.a.createElement("input",{type:"text",name:"letter",maxLength:"1",onChange:function(e){return f(e.target.value)},value:d,ref:p,required:!0}),r.a.createElement("button",null,"Jogar!"))),r.a.createElement("div",{className:"wrongLettersContainer"},r.a.createElement("p",null,"Letras j\xe1 utilizadas:"),l.map(function(e,t){return r.a.createElement("span",{key:t},e,", ")})))}),b=(a(22),function(e){var t=e.retry,a=e.score;return r.a.createElement("div",null,r.a.createElement("h1",null,"Game Over"),r.a.createElement("h2",null,"A sua pontua\xe7\xe3o foi: ",r.a.createElement("span",null,a)),r.a.createElement("button",{onClick:t},"Resetar jogo"))}),d=[{id:1,name:"start"},{id:2,name:"game"},{id:3,name:"end"}],f=3;var p=function(){var e=Object(n.useState)(d[0].name),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(s),p=Object(u.a)(o,1)[0],j=Object(n.useState)(""),E=Object(u.a)(j,2),g=E[0],O=E[1],v=Object(n.useState)(""),C=Object(u.a)(v,2),h=C[0],k=C[1],S=Object(n.useState)([]),w=Object(u.a)(S,2),L=w[0],y=w[1],M=Object(n.useState)([]),N=Object(u.a)(M,2),P=N[0],F=N[1],A=Object(n.useState)([]),x=Object(u.a)(A,2),B=x[0],G=x[1],J=Object(n.useState)(f),R=Object(u.a)(J,2),T=R[0],q=R[1],D=Object(n.useState)(0),W=Object(u.a)(D,2),z=W[0],I=W[1],V=Object(n.useCallback)(function(){var e=Object.keys(p),t=e[Math.floor(Math.random()*Object.keys(e).length)];return{word:p[t][Math.floor(Math.random()*p[t].length)],category:t}},[p]),H=Object(n.useCallback)(function(){K();var e=V(),t=e.word,a=e.category,n=t.split("");n=n.map(function(e){return e.toLowerCase()}),O(t),k(a),y(n),c(d[1].name)},[V]),K=function(){F([]),G([])};return Object(n.useEffect)(function(){T<=0&&(K(),c(d[2].name))},[T]),Object(n.useEffect)(function(){var e=Object(l.a)(new Set(L));P.length===e.length&&(I(function(e){return e+100}),H())},[P,L,H]),r.a.createElement("div",{className:"App"},"start"===a&&r.a.createElement(i,{startGame:H}),"game"===a&&r.a.createElement(m,{verifyLetter:function(e){var t=e.toLowerCase();P.includes(t)||B.includes(t)||(L.includes(t)?F(function(e){return[].concat(Object(l.a)(e),[t])}):(G(function(e){return[].concat(Object(l.a)(e),[t])}),q(function(e){return e-1})))},pickedWord:g,pickedCategory:h,letters:L,guessedLetters:P,wrongLetters:B,guesses:T,score:z}),"end"===a&&r.a.createElement(b,{retry:function(){I(0),q(f),c(d[0].name)},score:z}))},j=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,25)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null))),j()}],[[6,3,2]]]);
//# sourceMappingURL=main.820db767.chunk.js.map