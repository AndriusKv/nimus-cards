if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!s[e]&&(await new Promise(async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()}),!s[e]))throw new Error(`Module ${e} didn’t register its module`);return s[e]},i=async(i,s)=>{const r=await Promise.all(i.map(e));s(1===r.length?r[0]:r)},s={require:Promise.resolve(i)};self.define=(i,r,c)=>{s[i]||(s[i]=new Promise(async s=>{let d={};const b={uri:location.origin+i.slice(1)},n=await Promise.all(r.map(i=>"exports"===i?d:"module"===i?b:e(i))),a=c(...n);d.default||(d.default=a),s(d)}))}}define("./sw.js",["./workbox-5d3caa67"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0.js",revision:"8ce645c0113dc2d1c24a351afbd20b74"},{url:"1.js",revision:"f67e6d7028da3ad8d8ba0432bb37d7ba"},{url:"10.js",revision:"c1cf2e740de18114c3dfcbb20e4cb0b7"},{url:"11.js",revision:"5ae8cc81b8375f9fe53d7cfb7fd27cbd"},{url:"2.js",revision:"c80f54b31e180ff34af270c6e6f0500b"},{url:"2.js.LICENSE.txt",revision:"455f9f3ae849b1b7c9d5b5f2d351830a"},{url:"3.js",revision:"3a3ba0890d27a1312f859ddcfbb973dd"},{url:"4.js",revision:"03e50146d0679f9f60e96d67e8b9481e"},{url:"7.js",revision:"92b5ec8973aad62c3562d1b09fc067e1"},{url:"7.main.css",revision:"52b078c39ae40f0cb35674e584bb3684"},{url:"8.js",revision:"977afabb52e25f38884544a413bb44e9"},{url:"9.js",revision:"b8f34320abeb6e938d528a24a6d5562a"},{url:"favicon.png",revision:"5cd7a2b3bacc80b736488b22d34db797"},{url:"index.html",revision:"590897afcbe0701d9eb54feff96ea863"},{url:"main.css",revision:"3543902c495dc8434027b777c85b8e4d"},{url:"main.js",revision:"f987861528995673ce2e2ec114e87e20"},{url:"vendor.js",revision:"efcf53d51e6c45b58941255af8a3b326"},{url:"vendor.js.LICENSE.txt",revision:"f231859d6585c4cd5f80c344783ed269"}],{}),self.__WB_DISABLE_DEV_LOGS=!0}));
