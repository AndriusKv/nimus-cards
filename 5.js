(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,t,a){},102:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return c}));let n=JSON.parse(localStorage.getItem("nimus-cards-settings"))||{randomize:{value:!0},cardCount:{value:10},timeoutDuration:{value:""}};function s(){return n}function c(e){n={...n,...e},localStorage.setItem("nimus-cards-settings",JSON.stringify(n))}},106:function(e,t,a){"use strict";var n,s,c=a(133),r=a(134),l=RegExp.prototype.exec,o=String.prototype.replace,i=l,u=(n=/a/,s=/b*/g,l.call(n,"a"),l.call(s,"a"),0!==n.lastIndex||0!==s.lastIndex),d=r.UNSUPPORTED_Y||r.BROKEN_CARET,m=void 0!==/()??/.exec("")[1];(u||m||d)&&(i=function(e){var t,a,n,s,r=this,i=d&&r.sticky,f=c.call(r),v=r.source,b=0,p=e;return i&&(-1===(f=f.replace("y","")).indexOf("g")&&(f+="g"),p=String(e).slice(r.lastIndex),r.lastIndex>0&&(!r.multiline||r.multiline&&"\n"!==e[r.lastIndex-1])&&(v="(?: "+v+")",p=" "+p,b++),a=new RegExp("^(?:"+v+")",f)),m&&(a=new RegExp("^"+v+"$(?!\\s)",f)),u&&(t=r.lastIndex),n=l.call(i?a:r,p),i?n?(n.input=n.input.slice(b),n[0]=n[0].slice(b),n.index=r.lastIndex,r.lastIndex+=n[0].length):r.lastIndex=0:u&&n&&(r.lastIndex=r.global?n.index+n[0].length:t),m&&n&&n.length>1&&o.call(n[0],a,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(n[s]=void 0)})),n}),e.exports=i},130:function(e,t,a){"use strict";var n=a(131),s=a(14),c=a(58),r=a(60),l=a(35),o=a(34),i=a(135),u=a(136),d=Math.max,m=Math.min,f=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,b=/\$([$&'`]|\d\d?)/g;n("replace",2,(function(e,t,a,n){var p=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,E=n.REPLACE_KEEPS_$0,y=p?"$":"$0";return[function(a,n){var s=o(this),c=null==a?void 0:a[e];return void 0!==c?c.call(a,s,n):t.call(String(s),a,n)},function(e,n){if(!p&&E||"string"==typeof n&&-1===n.indexOf(y)){var c=a(t,e,this,n);if(c.done)return c.value}var o=s(e),f=String(this),v="function"==typeof n;v||(n=String(n));var b=o.global;if(b){var h=o.unicode;o.lastIndex=0}for(var x=[];;){var k=u(o,f);if(null===k)break;if(x.push(k),!b)break;""===String(k[0])&&(o.lastIndex=i(f,r(o.lastIndex),h))}for(var N,w="",O=0,S=0;S<x.length;S++){k=x[S];for(var C=String(k[0]),R=d(m(l(k.index),f.length),0),j=[],I=1;I<k.length;I++)j.push(void 0===(N=k[I])?N:String(N));var $=k.groups;if(v){var T=[C].concat(j,R,f);void 0!==$&&T.push($);var A=String(n.apply(void 0,T))}else A=g(C,f,R,j,$,n);R>=O&&(w+=f.slice(O,R)+A,O=R+C.length)}return w+f.slice(O)}];function g(e,a,n,s,r,l){var o=n+e.length,i=s.length,u=b;return void 0!==r&&(r=c(r),u=v),t.call(l,u,(function(t,c){var l;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return a.slice(0,n);case"'":return a.slice(o);case"<":l=r[c.slice(1,-1)];break;default:var u=+c;if(0===u)return t;if(u>i){var d=f(u/10);return 0===d?t:d<=i?void 0===s[d-1]?c.charAt(1):s[d-1]+c.charAt(1):t}l=s[u-1]}return void 0===l?"":l}))}}))},131:function(e,t,a){"use strict";a(132);var n=a(32),s=a(12),c=a(13),r=a(106),l=a(9),o=c("species"),i=!s((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u="$0"==="a".replace(/./,"$0"),d=c("replace"),m=!!/./[d]&&""===/./[d]("a","$0"),f=!s((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));e.exports=function(e,t,a,d){var v=c(e),b=!s((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),p=b&&!s((function(){var t=!1,a=/a/;return"split"===e&&((a={}).constructor={},a.constructor[o]=function(){return a},a.flags="",a[v]=/./[v]),a.exec=function(){return t=!0,null},a[v](""),!t}));if(!b||!p||"replace"===e&&(!i||!u||m)||"split"===e&&!f){var E=/./[v],y=a(v,""[e],(function(e,t,a,n,s){return t.exec===r?b&&!s?{done:!0,value:E.call(t,a,n)}:{done:!0,value:e.call(a,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:m}),g=y[0],h=y[1];n(String.prototype,e,g),n(RegExp.prototype,v,2==t?function(e,t){return h.call(e,this,t)}:function(e){return h.call(e,this)})}d&&l(RegExp.prototype[v],"sham",!0)}},132:function(e,t,a){"use strict";var n=a(57),s=a(106);n({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},133:function(e,t,a){"use strict";var n=a(14);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},134:function(e,t,a){"use strict";var n=a(12);function s(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},135:function(e,t,a){"use strict";var n=a(104).charAt;e.exports=function(e,t,a){return t+(a?n(e,t).length:1)}},136:function(e,t,a){var n=a(59),s=a(106);e.exports=function(e,t){var a=e.exec;if("function"==typeof a){var c=a.call(e,t);if("object"!=typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return s.call(e,t)}},137:function(e,t,a){},138:function(e,t,a){},150:function(e,t,a){"use strict";a.r(t);a(130),a(56),a(103);var n=a(0),s=a.n(n),c=a(1),r=(a(137),a(31)),l=a(98),o=a(102),i=a(99),u=a(37);function d({score:e,name:t,className:a}){const n={"--width":(e.total?e[t]/e.total*100:50)+"%"};return s.a.createElement("div",{className:`score-bar score-${t}-bar${a?" "+a:""}`,style:n},e[t])}function m({score:e}){return s.a.createElement("div",{className:"study-score"},s.a.createElement("div",{className:"study-score-bar-name-container"},s.a.createElement("span",null,"Wrong"),s.a.createElement("span",null,"Right")),s.a.createElement("div",{className:"study-score-bar-container"},s.a.createElement(d,{score:e,name:"wrong"}),s.a.createElement(d,{score:e,name:"right"})))}var f=a(8);function v({score:e,deck:t,ids:a}){const n=!!Object(r.b)(t.cards).length,c=!!Object(r.c)(t.cards).length,l=t.cards.filter(e=>a.some(t=>e.id===t));return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"deck-score-container"},s.a.createElement("h3",{className:"deck-score-title"},"Session Results"),s.a.createElement("div",{className:"deck-score-accuracy"},s.a.createElement("span",{className:"deck-score-accuracy-name"},"Accuracy"),s.a.createElement("span",{className:"deck-score-accuracy-value"},Math.round(e.right/e.total*100),"%")),s.a.createElement("div",{className:"deck-score-bars"},s.a.createElement(d,{score:e,name:"wrong"}),s.a.createElement(d,{score:e,name:"right"})),s.a.createElement("div",{className:"deck-score-btn-container"},n?s.a.createElement(f.b,{to:{pathname:`/decks/${t.id}/pearn`,search:"?reload=1"},className:"btn btn-text deck-score-btn"},"Learn"):s.a.createElement("span",{className:"btn btn-text deck-score-btn disabled"},"Learn"),c?s.a.createElement(f.b,{to:{pathname:`/decks/${t.id}/review`,search:"?reload=1"},className:"btn btn-text deck-score-btn"},"Review"):s.a.createElement("span",{className:"btn btn-text deck-score-btn disabled"},"Review"),s.a.createElement(f.b,{to:{pathname:`/decks/${t.id}/practice`,search:"?reload=1"},className:"btn btn-text deck-score-btn"},"Practice"),s.a.createElement(f.b,{to:"/decks",className:"btn btn-text deck-score-btn"},"Close"))),s.a.createElement("ul",{className:"study-session-stats"},s.a.createElement("li",{className:"study-session-stats-item"},s.a.createElement("div",{className:"study-session-stats-column study-session-stats-header-item"},"Front"),s.a.createElement("div",{className:"study-session-stats-column study-session-stats-header-item study-session-stats-back-column"},"Back"),s.a.createElement("div",{className:"study-session-stats-column study-session-stats-header-item study-session-stats-accuracy-column"},"Accuracy"),s.a.createElement("div",{className:"study-session-stats-column study-session-stats-header-item study-session-stats-streak-column"},"Streak")),l.map((e,t)=>{var a,n;return s.a.createElement("li",{className:"study-session-stats-item",key:t},s.a.createElement("div",{className:"study-session-stats-column"},(null==(a=e.front.attachment)?void 0:a.description)||e.front.text),s.a.createElement("div",{className:"study-session-stats-column study-session-stats-back-column"},"text"===(n=e.back).type||"exact"===n.type?n.typeOptions.value:"multi"===n.type?n.typeOptions.options.find(({id:e})=>n.typeOptions.correctId===e).value:void 0),s.a.createElement("div",{className:"study-session-stats-column study-session-stats-accuracy-column"},s.a.createElement(d,{score:e.score,className:"small",name:"wrong"}),s.a.createElement(d,{score:e.score,className:"small",name:"right"})),s.a.createElement("div",{className:"study-session-stats-column study-session-stats-streak-column"},e.score.streak))})))}function b({notes:e,handleStudyExit:t}){const[a,c]=Object(n.useState)(!1);return s.a.createElement("div",{className:"study-footer"},s.a.createElement("div",{className:"study-footer-btns"},(null==e?void 0:e.value)&&s.a.createElement("button",{className:"btn btn-text study-footer-btn",onClick:function(){c(!a)}},"Notes"),s.a.createElement("button",{className:"btn btn-text study-footer-btn study-exit-btn",onClick:t},"Exit")),a&&s.a.createElement("div",{className:"study-card-notes"},e.value))}function p({id:e,side:t}){const[a,c]=Object(n.useState)(null),[r,l]=Object(n.useState)(!1);function o(){l(!0)}return Object(n.useEffect)(()=>{let a="",n="";if(t.attachment){const{blob:s,url:r,type:l}=t.attachment;n=s?"blob":"url",a=s?URL.createObjectURL(s):r,c({id:e,src:a,mediaType:l,type:n})}else c(null);return()=>{"blob"===n&&URL.revokeObjectURL(a)}},[e]),s.a.createElement(s.a.Fragment,null,function(){if(!a||a.id!==e)return null;const{mediaType:t,src:n}=a;return"image"===t?s.a.createElement("img",{src:n,alt:"",className:"study-image",onClick:o}):"audio"===t?s.a.createElement("audio",{src:n,className:"study-audio",controls:!0}):"video"===t?s.a.createElement("video",{src:n,className:"study-video",crossOrigin:"anonymous",autoPlay:!0,controls:!0}):null}(),t.text&&s.a.createElement("div",{className:"study-front-text",style:{fontSize:t.textSize+"px"}},t.text),r&&s.a.createElement("div",{className:"study-expaned-image-mask",onClick:function(){l(!1)}},s.a.createElement("img",{src:a.src,className:"study-expaned-image",alt:""})))}var E=a(11);function y({card:e,selectOption:t,handleSubmit:a}){const{back:n,revealed:c}=e,{type:l,typeOptions:o}=n;return"text"===l?s.a.createElement("div",{className:"study-card-text-content",style:{fontSize:o.textSize+"px"}},o.value):"exact"===l?function(){let t="input study-exact-input";return c&&(t+=e.isCorrect?" right":" wrong"),s.a.createElement("form",{onSubmit:a,className:"study-exact"},s.a.createElement("label",null,s.a.createElement("div",{className:"study-exact-top"},s.a.createElement("div",{className:"study-exact-title"},"Your Answer:"),n.typeOptions.caseSensitive?s.a.createElement("div",{className:"study-exact-notice"},s.a.createElement(E.a,{name:"info",className:"study-exact-notice-icon"}),s.a.createElement("span",null,"Answer is case sensitive")):""),s.a.createElement("input",{type:"input",className:t,name:"answer",disabled:c})),s.a.createElement("button",{className:"btn study-exact-btn",disabled:c},"Check Answer"))}():"multi"===l?s.a.createElement("ul",{className:Object(r.a)("study-multi",`study-multi-${n.typeOptions.layout}-type`,c?"revealed":"")},o.options.map(({id:e,value:a},l)=>s.a.createElement("li",{key:l},s.a.createElement("button",{onClick:()=>t(e),className:Object(r.a)("btn study-multi-item",`study-multi-${n.typeOptions.layout}-type-item`,c&&o.correctId===e?"correct":"")},a)))):null}var g=function({card:e,selectOption:t,revealAnswer:a,nextStep:n,skipNextStepTimeout:c}){return"text"!==e.back.type||e.revealed?s.a.createElement("div",{className:"study-card study-card-"+e.back.type},s.a.createElement(p,{id:e.id,side:e.front}),s.a.createElement(y,{card:e,selectOption:t,handleSubmit:function(t){if(t.preventDefault(),e.revealed)return;const a=t.target.elements.answer.value;let s=!1;s=e.back.typeOptions.caseSensitive?a===e.back.typeOptions.value:a.toLowerCase()===e.back.typeOptions.value.toLowerCase(),n(s)}}),"text"===e.back.type&&e.revealed&&!e.timerReveal&&s.a.createElement("div",{className:"study-card-text-btns"},e.finished?s.a.createElement("button",{className:"btn study-card-text-btn",onClick:c},"Next"):s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:"btn btn-danger study-card-text-btn",disabled:e.finished,onClick:()=>n(!1)},"I Was Wrong"),s.a.createElement("button",{className:"btn btn-success study-card-text-btn",disabled:e.finished,onClick:()=>n(!0)},"I Got It Right")))):s.a.createElement("div",{className:"study-card study-card-text"},s.a.createElement(p,{id:e.id,side:e.front}),s.a.createElement("button",{className:"btn study-card-text-btn study-card-text-reveal-btn",onClick:a},"Check"))};a(138);var h=function({revealed:e,initDuration:t,callback:a}){const[c,r]=Object(n.useState)(t),l=Object(n.useRef)(0);return Object(n.useEffect)(()=>(function e(t){t<1?a():l.current=setTimeout(()=>{const a=t-1;r(a),e(a)},1e3)}(c),()=>{clearTimeout(l.current)}),[]),Object(n.useEffect)(()=>{e&&clearTimeout(l.current)},[e]),s.a.createElement("div",{className:"timer"},function(e){const t=function(e){const t=e%60;return t<10?"0"+t:t}(e),a=function(e){const t=Math.floor(e/60%60);return e>=3600&&t<10?"0"+t:t}(e),n=function(e){return Math.floor(e/3600)}(e);return`${n?n+":":""}${a}:${t}`}(c))};t.default=function(){const e=Object(c.f)(),t=Object(c.h)(),[a,d]=Object(n.useState)(null),f=Object(n.useRef)(0),p=Object(o.a)(),{location:E}=e;function y(){Object(l.b)(t.params.id).then(e=>{e?function(e){const a=t.url.split("/")[3];let{cards:n}=e;if("learn"===a){if(n=Object(r.b)(n),!n.length)return void d({message:"You learned all available cards, come back later for a review."})}else if("review"===a&&(n=Object(r.c)(n),!n.length))return void d({message:"You have nothing to review at this moment, come back later."});n=p.randomize.value?Object(r.f)(n):n;const s=n.slice(0,p.cardCount.value).map(e=>(e.score=e.score||{streak:0,right:0,wrong:0,total:0},e));d({mode:a,deck:e,cardCount:s.length,cards:s,card:x(s),score:{right:0,wrong:0,total:0}}),Object(r.e)(e.title)}(e):d({error:!0})})}function x(e){const[t]=e;return"multi"===t.back.type&&(t.back.typeOptions.options=Object(r.f)(t.back.typeOptions.options)),{...t}}function k(e,t){const n=a.deck.cards.find(t=>t.id===e);n.frozen||(function(e,t){const a=e.level||0;let n=a;t?n=a<8?a+1:8:(e.frozen=!0,n=1);const s=6*Math.pow(2,n-1)*n;e.level=n,e.nextReview=new Date(Date.now()+60*s*60*1e3)}(n,t),function(e,t){t?(e.score.streak+=1,e.score.right+=1):(e.frozen=!0,e.score.streak=0,e.score.wrong+=1),e.score.total=e.score.right+e.score.wrong}(n,t))}function N(e,t={}){const n=function(e){const{score:t}=a;return e?t.right+=1:t.wrong+=1,t.total=t.right+t.wrong,t}(e),s=a.cards.shift(),c={...s,...t,isCorrect:e,revealed:!0,finished:!0};"learn"!==a.mode&&"review"!==a.mode||k(s.id,e),e?a.sessionCardIds=[...a.sessionCardIds||[],s.id]:(a.cards.push(s),a.cards=p.randomize.value?Object(r.f)(a.cards):a.cards),delete s.revealed,d({...a,card:c,score:n}),f.current=setTimeout(w,1600)}function w(){const{cards:e,mode:t}=a,n=!e.length;!n||"learn"!==t&&"review"!==t||(a.deck.cards=a.deck.cards.map(e=>(delete e.frozen,e)),Object(l.d)(a.deck)),d({...a,wasLastCard:n,card:n?null:x(e)})}function O(t){t&&Object(l.d)(a.deck),e.push("/decks")}return Object(n.useEffect)(()=>{var t;"1"===new URLSearchParams(E.search).get("reload")?(e.replace({pathname:E.pathname,search:"",state:{reloaded:!0}}),y()):(null==(t=E.state)?void 0:t.reloaded)||y()},[E.pathname+E.search]),a?a.error||a.message?s.a.createElement(u.a,{message:a.message}):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"study-header"},s.a.createElement("div",{className:"study-progress",style:{transform:`scaleX(${a.card?(a.cardCount-a.cards.length)/a.cardCount:1})`}}),s.a.createElement("h1",{className:"study-header-title"},a.deck.title),!a.wasLastCard&&!a.card.finished&&p.timeoutDuration.value>0&&s.a.createElement(h,{revealed:a.card.revealed,initDuration:p.timeoutDuration.value,callback:function(){N(!1,{timerReveal:!0})}})),a.wasLastCard?s.a.createElement(v,{score:a.score,deck:a.deck,ids:a.sessionCardIds}):s.a.createElement(s.a.Fragment,null,s.a.createElement(m,{score:a.score}),s.a.createElement(g,{card:a.card,selectOption:function(e){a.card.revealed||N(e===a.card.back.typeOptions.correctId)},revealAnswer:function(){a.card.revealed=!0,d({...a,card:a.card})},skipNextStepTimeout:function(){clearTimeout(f.current),w()},nextStep:N}),s.a.createElement(b,{notes:a.card.notes,handleStudyExit:function(){"learn"===a.mode||"review"===a.mode?d({...a,exitModalVisible:!0}):e.push("/decks")}})),a.exitModalVisible&&s.a.createElement(i.a,{hide:function(){d({...a,exitModalVisible:!1})}},s.a.createElement("h3",{className:"modal-title"},"Do you want to save your progress?"),s.a.createElement("div",{className:"study-exit-modal-btns"},s.a.createElement("button",{className:"btn btn-text study-exit-modal-btns",onClick:()=>O(!0)},"Save and Exit"),s.a.createElement("button",{className:"btn btn-text study-exit-modal-btns",onClick:()=>O(!1)},"Exit Without Saving")))):null}},98:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return c})),a.d(t,"d",(function(){return r})),a.d(t,"a",(function(){return l}));const n=new(a(101).a)("nimus-cards");function s(){return n.decks.toArray().then(o).catch(e=>{console.log(e)})}function c(e){return n.decks.get(e)}function r(e){n.decks.put(e).catch(e=>{console.log(e)})}function l(e){n.decks.delete(e).catch(e=>{console.log(e)})}function o(e){return e.sort((e,t)=>{const a=new Date(e.createdAt||0),n=new Date(t.createdAt||0);return a<n?1:a>n?-1:0})}n.version(1).stores({decks:"id"})},99:function(e,t,a){"use strict";var n=a(0),s=a.n(n);a(100);t.a=function({className:e,hide:t,children:a}){const c=Object(n.useCallback)((function({key:e}){"Escape"===e&&t()}),[]);return Object(n.useEffect)(()=>(window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}),[]),s.a.createElement("div",{className:"modal-mask",onClick:function({target:e,currentTarget:a}){e===a&&t()}},s.a.createElement("div",{className:"modal"+(e?" "+e:"")},a))}}}]);