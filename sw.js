if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,s,a)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const d={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return i;case"module":return d;default:return e(r)}})).then(e=>{const r=a(...e);return i.default||(i.default=r),i})}))}}define("./sw.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0.js",revision:"a80498226779a4d655504b1be796fcaa"},{url:"1.js",revision:"672caab8f334c37cd9a0d9d974ff9057"},{url:"10.js",revision:"11556dab17347800e5bfa953b361ec51"},{url:"2.js",revision:"9d3053bcdd503404da8810043284c0fa"},{url:"2.js.LICENSE.txt",revision:"455f9f3ae849b1b7c9d5b5f2d351830a"},{url:"4.main.css",revision:"3fa0b7c4272d995ea7ca9e87f9b20ab2"},{url:"5.js",revision:"a257378786a48f57308fc08eecf7f827"},{url:"5.main.css",revision:"818e25efb517ff8499d59a3d4f50c77c"},{url:"6.js",revision:"dd279c33a5890d17f3a362acd076ad5a"},{url:"6.main.css",revision:"bcdf7cae78a54143ff01314f2809f007"},{url:"7.js",revision:"7aa39b1a3b165a248b8fa342940fda56"},{url:"7.main.css",revision:"b35c307e7b8cb84fd7d6df893ade9568"},{url:"8.js",revision:"eacd091f0771498796132fa0b20510d2"},{url:"8.main.css",revision:"26ad0be0487b887a057dd2f06bf50f8e"},{url:"9.js",revision:"d327f465b1680d9679cb2e8e58518e5e"},{url:"android-chrome-192x192.png",revision:"d14680e61691cf63bace18e70744e47c"},{url:"android-chrome-512x512.png",revision:"95f5432d81527a9ad1f70e8abdf78c23"},{url:"apple-touch-icon.png",revision:"d8882932d24e582f2614a81802f37f6c"},{url:"favicon-16x16.png",revision:"5a61ca8d9e3818b0e842fa87131f8eb6"},{url:"favicon-32x32.png",revision:"41ae843a6cb40619f71c17e2dd9104ee"},{url:"favicon.ico",revision:"976479122a08ebed5d89837f2ca3666d"},{url:"index.html",revision:"e8dd70ac35a33b72eee89c5313f80d63"},{url:"main.css",revision:"d493e3694cbf89ade5eda88a5dfec723"},{url:"main.js",revision:"61c6425d591a703faf17590ad34f9665"},{url:"manifest.json",revision:"874e561c173176bdb24944f4e9fc0233"},{url:"vendor.js",revision:"76e98dc599318f740320d87ba0cf758d"},{url:"vendor.js.LICENSE.txt",revision:"c64c486544348f10a6d6c716950bc223"}],{}),self.__WB_DISABLE_DEV_LOGS=!0}));
