!function(e){function t(t){for(var n,r,c=t[0],o=t[1],i=t[2],m=0,H=[];m<c.length;m++)r=c[m],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&H.push(l[r][0]),l[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(u&&u(t);H.length;)H.shift()();return s.push.apply(s,i||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var o=a[r];0!==l[o]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={3:0},l={3:0},s=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{5:1,6:1,7:1}[e]&&t.push(r[e]=new Promise((function(t,a){for(var n=e+".main.css",l=c.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var i=(u=s[o]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(i===n||i===l))return t()}var m=document.getElementsByTagName("style");for(o=0;o<m.length;o++){var u;if((i=(u=m[o]).getAttribute("data-href"))===n||i===l)return t()}var H=document.createElement("link");H.rel="stylesheet",H.type="text/css",H.onload=t,H.onerror=function(t){var n=t&&t.target&&t.target.src||l,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[e],H.parentNode.removeChild(H),a(s)},H.href=l,document.getElementsByTagName("head")[0].appendChild(H)})).then((function(){r[e]=0})));var a=l[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=l[e]=[t,n]}));t.push(a[2]=n);var s,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=function(e){return c.p+""+({}[e]||e)+".js"}(e);var i=new Error;s=function(t){o.onerror=o.onload=null,clearTimeout(m);var a=l[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",i.name="ChunkLoadError",i.type=n,i.request=r,a[1](i)}l[e]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:o})}),12e4);o.onerror=o.onload=s,document.head.appendChild(o)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var m=0;m<o.length;m++)t(o[m]);var u=i;s.push([31,4]),a()}({20:function(e,t,a){},25:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);a(18),a(19),a(20);var n=a(0),r=a.n(n),l=a(15),s=a(6),c=a(1),o=(a(25),a(8));var i=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("nav",{className:"header-nav"},r.a.createElement(s.b,{to:"/",className:"header-logo-link"},r.a.createElement(o.a,{name:"cards",className:"header-logo-icon"}),r.a.createElement("span",null,"NimusCards")),r.a.createElement("ul",{className:"header-nav-items"},r.a.createElement("li",{className:"header-nav-item"},r.a.createElement(s.c,{to:"/decks",exact:!0,className:"header-link",activeClassName:"active"},"Decks")),r.a.createElement("li",{className:"header-nav-item"},r.a.createElement(s.c,{to:"/decks/create",className:"header-link",activeClassName:"active"},"Create")))))};a(30);var m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"home-hero"},r.a.createElement("h1",{className:"home-hero-title"},"NimusCards"),r.a.createElement("p",{className:"home-hero-desc"},"Simple learning with flashcards."),r.a.createElement(s.b,{to:"/decks/create",className:"btn home-hero-btn"},"Get Started")),r.a.createElement("h2",{className:"home-features-title"},"Features"),r.a.createElement("ul",{className:"home-features"},r.a.createElement("li",{className:"home-feature"},r.a.createElement(o.a,{name:"media",className:"home-icon"}),r.a.createElement("h3",{className:"home-feature-title"},"Media-Rich"),r.a.createElement("p",null,"Easily add images and sounds to your flashcards.")),r.a.createElement("li",{className:"home-feature"},r.a.createElement(o.a,{name:"responsive",className:"home-icon"}),r.a.createElement("h3",{className:"home-feature-title"},"Responsive"),r.a.createElement("p",null,"Responsive web design makes user experience consistent across multiple devices.")),r.a.createElement("li",{className:"home-feature"},r.a.createElement(o.a,{name:"offline",className:"home-icon"}),r.a.createElement("h3",{className:"home-feature-title"},"Works Offline"),r.a.createElement("p",null,"Even without connection, you can still use NimusCards."))))};class u extends r.a.Component{constructor(e){super(e),this.state={visible:!1,message:""}}componentDidMount(){window.addEventListener("sw-state-change",({detail:e})=>{"init"===e?this.showPopup("Content is cached for offline use."):"update"===e&&this.showPopup("Update is available, please refresh.")})}showPopup(e){this.setState({visible:!0,message:e}),setTimeout(()=>{this.setState({visible:!1})},6e3)}render(){return r.a.createElement("div",{className:"service-worker-popup"+(this.state.visible?" visible":"")},r.a.createElement("p",null,this.state.message))}}const H=Object(n.lazy)(()=>Promise.all([a.e(0),a.e(6)]).then(a.bind(null,145))),d=Object(n.lazy)(()=>Promise.all([a.e(0),a.e(1),a.e(7)]).then(a.bind(null,143))),V=Object(n.lazy)(()=>Promise.all([a.e(0),a.e(1),a.e(5)]).then(a.bind(null,144)));Object(l.render)(r.a.createElement(s.a,null,r.a.createElement(i,null),r.a.createElement("main",{className:"main"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",exact:!0,component:m}),r.a.createElement(c.a,{path:"/decks",exact:!0,component:H}),r.a.createElement(c.a,{path:"/decks/create",component:d,key:"create"}),r.a.createElement(c.a,{path:"/decks/:id",exact:!0,component:V}),r.a.createElement(c.a,{path:"/decks/:id/edit",component:d,key:"edit"}),r.a.createElement(c.a,{component:function(){return r.a.createElement("p",{className:"no-match-message"},"This page isn't available")}}))),r.a.createElement(u,null))),document.getElementById("app")),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(e=>{e.onupdatefound=()=>{const t=e.installing;t.onstatechange=()=>{"installed"===t.state&&function(e,t=null){const a=new CustomEvent(e,{detail:t});window.dispatchEvent(a)}("sw-state-change",navigator.serviceWorker.controller?"update":"init")}}}).catch(console.log)})},8:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n);function l({name:e,title:t,className:a}){const n={cards:"M21.47,4.35L20.13,3.79V12.82L22.56,6.96C22.97,5.94 22.5,4.77 21.47,4.35M1.97,\n            8.05L6.93,20C7.24,20.77 7.97,21.24 8.74,21.26C9,21.26 9.27,21.21 9.53,21.1L16.9,\n            18.05C17.65,17.74 18.11,17 18.13,16.26C18.14,16 18.09,15.71 18,15.45L13,3.5C12.71,\n            2.73 11.97,2.26 11.19,2.25C10.93,2.25 10.67,2.31 10.42,2.4L3.06,5.45C2.04,5.87 1.55,\n            7.04 1.97,8.05M18.12,4.25A2,2 0 0,0 16.12,2.25H14.67L18.12,10.59",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18, 2.9 17.35,2.9 16.96,\n            3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",remove:"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",media:"M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,\n            17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3M15.96,10.29L13.21,13.83L11.25,\n            11.47L8.5,15H19.5L15.96,10.29Z",responsive:"M4,6V16H9V12A2,2 0 0,1 11,10H16A2,2 0 0,1 18,12V16H20V6H4M0,20V18H4A2,2 0 0,\n            1 2,16V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V16A2,2 0 0,1 20,18H24V20H18V20C18,21.11 17.1,\n            22 16,22H11A2,2 0 0,1 9,20H9L0,20M11.5,20A0.5,0.5 0 0,0 11,20.5A0.5,0.5 0 0,0 11.5,\n            21A0.5,0.5 0 0,0 12,20.5A0.5,0.5 0 0,0 11.5,20M15.5,20A0.5,0.5 0 0,0 15,20.5A0.5,0.5 0 0,\n            0 15.5,21A0.5,0.5 0 0,0 16,20.5A0.5,0.5 0 0,0 15.5,20M13,20V21H14V20H13M11,12V19H16V12H11Z",offline:"M2.28,3L1,4.27L2.47,5.74C2.04,6 1.61,6.29 1.2,6.6L3,9C3.53,8.6 4.08,8.25 4.66,\n            7.93L6.89,10.16C6.15,10.5 5.44,10.91 4.8,11.4L6.6,13.8C7.38,13.22 8.26,12.77 9.2,\n            12.47L11.75,15C10.5,15.07 9.34,15.5 8.4,16.2L12,21L14.46,17.73L17.74,21L19,19.72M12,\n            3C9.85,3 7.8,3.38 5.9,4.07L8.29,6.47C9.5,6.16 10.72,6 12,6C15.38,6 18.5,7.11 21,\n            9L22.8,6.6C19.79,4.34 16.06,3 12,3M12,9C11.62,9 11.25,9 10.88,9.05L14.07,12.25C15.29,\n            12.53 16.43,13.07 17.4,13.8L19.2,11.4C17.2,9.89 14.7,9 12,9Z","add-file":"M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M11,15V12H9V15H6V17H9V20H11V17H14V15H11Z","image-file":"M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M6,20H15L18,20V12L14,16L12,14L6,20M8,9A2,2 0 0,0 6,11A2,2 0 0,0 8,13A2,2 0 0,0 10,11A2,2 0 0,0 8,9Z","audio-file":"M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,\n            2.89 4.89,2 6,2M9,16A2,2 0 0,0 7,18A2,2 0 0,0 9,20A2,2 0 0,0 11,18V13H14V11H10V16.27C9.71,\n            16.1 9.36,16 9,16Z","video-file":"M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M17,19V13L14,15.2V13H7V19H14V16.8L17,19Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",flip:"M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z",text:"M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z","text-short":"M4,9H20V11H4V9M4,13H14V15H4V13Z","list-checkbox":"M21,19V17H8V19H21M21,13V11H8V13H21M8,7H21V5H8V7M4,5V7H6V5H4M3,5A1,1 0 0,1 4,4H6A1,1 0 0,1 7,5V7A1,1 0 0,1 6,8H4A1,1 0 0,1 3,7V5M4,11V13H6V11H4M3,11A1,1 0 0,1 4,10H6A1,1 0 0,1 7,11V13A1,1 0 0,1 6,14H4A1,1 0 0,1 3,13V11M4,17V19H6V17H4M3,17A1,1 0 0,1 4,16H6A1,1 0 0,1 7,17V19A1,1 0 0,1 6,20H4A1,1 0 0,1 3,19V17Z","add-list-item":"M2,16H10V14H2M18,14V10H16V14H12V16H16V20H18V16H22V14M14,6H2V8H14M14,10H2V12H14V10Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",notes:"M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M5,13V15H16V13H5M5,9V11H19V9H5Z",grid:"M4 4H8V8H4zM10 4H14V8H10zM16 4H20V8H16zM4 10H8V14H4zM10 10H14V14H10zM16 10H20V14H16zM4 16H8V20H4zM10 16H14V20H10zM16 16H20V20H16z","list-2-col":"M11,8H3V6h8ZM21,6H13V8h8ZM11,11H3v2h8Zm10,0H13v2h8ZM11,16H3v2h8Zm10,0H13v2h8Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",export:"M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z",import:"M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z",settings:"M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65c-.04-.24-.25-.42-.5-.42h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z","dots-vertical":"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"};return r.a.createElement("svg",{viewBox:"0 0 24 24",className:a},t&&r.a.createElement("title",null,t),r.a.createElement("path",{d:n[e]}))}}});