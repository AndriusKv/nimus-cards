(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),c=n.n(a),l=n(6),s=(n(108),n(40)),i=n(47),r=n(8);function o({deckTitle:e,removeDeck:t,cancelRemoval:n}){return c.a.createElement("div",{className:"mask"},c.a.createElement("div",{className:"modal deck-dialog-box"},c.a.createElement("h3",{className:"deck-dialog-box-title"},"Are you sure you want to remove ",c.a.createElement("b",null,e)," deck?"),c.a.createElement("div",{className:"deck-dialog-box-btns"},c.a.createElement("button",{className:"btn btn-danger",onClick:t},"Remove"),c.a.createElement("button",{className:"btn btn-text",onClick:n},"Cancel"))))}n(109);var d=n(65);var m=function({hide:e}){const[t,n]=Object(a.useState)(Object(d.a)());function l({key:t}){"Escape"===t&&e()}return Object(a.useEffect)(()=>(window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}),[]),Object(a.useEffect)(()=>{Object(d.b)(t)},[t]),c.a.createElement("div",{className:"mask",onClick:function({target:t,currentTarget:n}){t===n&&e()}},c.a.createElement("div",{className:"modal",onChange:function({target:e}){const a=e.getAttribute("data-name"),c=t[a];switch(e.type){case"checkbox":c.value=e.checked;break;case"text":c.value=e.validity.valid&&parseInt(e.value,10)||0}n({...t,[a]:c})}},c.a.createElement("h3",{className:"deck-settings-modal-title"},"Settings"),c.a.createElement("div",{className:"deck-settings-item"},c.a.createElement("label",{className:"checkbox-container"},c.a.createElement("input",{type:"checkbox",className:"sr-only checkbox-input","data-name":"randomize",defaultChecked:t.randomize.value}),c.a.createElement("div",{className:"checkbox deck-settings-checkbox"},c.a.createElement("div",{className:"checkbox-tick"})),c.a.createElement("span",{className:"checkbox-label"},"Randomize cards"))),c.a.createElement("div",{className:"deck-settings-item"},c.a.createElement("label",null,c.a.createElement("span",null,"Use"),c.a.createElement("input",{type:"text",className:"input deck-settings-input","data-name":"cardCount",pattern:"^[0-9]+$",defaultValue:t.cardCount.value}),c.a.createElement("span",null,"cards per study session"),c.a.createElement("div",{className:"deck-settings-message"},"Please provide a valid whole number."))),c.a.createElement("div",{className:"deck-settings-item"},c.a.createElement("label",null,c.a.createElement("span",null,"Reveal answer after"),c.a.createElement("input",{type:"text",className:"input deck-settings-input","data-name":"timeoutDuration",pattern:"^0*|0*([5-9][0-9]*|[1-9]+[0-9]+)$",defaultValue:t.timeoutDuration.value}),c.a.createElement("span",null,"seconds"),c.a.createElement("div",{className:"deck-settings-message"},"Please provide a valid whole number.",c.a.createElement("br",null)," Minimal accepted value is 5 seconds.")))))};n(110);var u=function({children:e}){const[{id:t,visible:n},l]=Object(a.useState)({id:"",visible:!1}),i=Object(a.useCallback)((function({target:e}){const n=e.closest(".dropdown-container");let a=!0;n&&n.id===t&&(a=e.closest(".dropdown-btn"));a&&(o.current&&l({id:t,visible:!1}),window.removeEventListener("click",i))}),[t]),o=Object(a.useRef)(!1);return Object(a.useEffect)(()=>(o.current=!0,l({visible:n,id:Object(s.a)()}),()=>{o.current=!1,window.removeEventListener("click",i)}),[]),c.a.createElement("div",{id:t,className:"dropdown-container"},c.a.createElement("button",{className:"btn btn-icon",onClick:function(){n?window.removeEventListener("click",i):window.addEventListener("click",i),l({id:t,visible:!n})}},c.a.createElement(r.a,{name:"dots-vertical"})),n&&c.a.createElement("div",{className:"dropdown"},e))};function b({deck:e,showDialog:t,exportDeck:n}){return c.a.createElement("li",{className:"deck"},c.a.createElement("div",{className:"deck-info"},c.a.createElement("div",null,c.a.createElement("h2",{className:"deck-title"},e.title),e.description&&c.a.createElement("p",{className:"deck-description"},e.description),c.a.createElement("div",{className:"deck-card-count"},e.cards.length," card",e.cards.length>1&&"s")),c.a.createElement(u,null,c.a.createElement(l.b,{to:`/decks/${e.id}/edit`,className:"btn btn-icon dropdown-btn"},c.a.createElement(r.a,{name:"edit"}),c.a.createElement("span",null,"Edit")),c.a.createElement("button",{className:"btn btn-icon dropdown-btn",onClick:()=>n(e)},c.a.createElement(r.a,{name:"export"}),c.a.createElement("span",null,"Export")),c.a.createElement("button",{className:"btn btn-icon dropdown-btn",onClick:()=>t(e)},c.a.createElement(r.a,{name:"remove"}),c.a.createElement("span",null,"Remove")))),c.a.createElement("div",{className:"deck-btn-container"},c.a.createElement(l.b,{to:"/decks/"+e.id,className:"btn btn-text deck-btn"},"Practice")))}t.default=function(){const[e,t]=Object(a.useState)([]),[d,u]=Object(a.useState)({visible:!1}),[f,k]=Object(a.useState)(!1),[E,p]=Object(a.useState)(!0);function v(e){u({visible:!0,deck:e})}function N(){u({visible:!1,deck:null})}async function g(e){const[{saveAs:t},{default:a}]=await Promise.all([n.e(8).then(n.t.bind(null,141,7)),n.e(2).then(n.t.bind(null,142,7))]),c=new a,l=c.folder(e.title);l.file("metadata.json",JSON.stringify({title:e.title,description:e.description,studyMode:e.studyMode},null,2)),e.cards.forEach((e,t)=>{const n=e.front.attachment;let a=void 0;n&&(n.blob?(a={type:n.type,mimeType:n.blob.type,blobName:n.blob.name},l.file(n.blob.name,new Blob([n.blob],{type:n.blob.type}))):a=n),l.file(t+".json",JSON.stringify({...e,front:{...e.front,attachment:a}},null,2))});t(await c.generateAsync({type:"blob"}),e.title+".zip")}return Object(a.useEffect)(()=>{Object(i.c)().then(e=>{t(e),p(!1)})},[]),c.a.createElement(a.Fragment,null,c.a.createElement("div",{className:"decks-header"},c.a.createElement("h1",{className:"decks-title"},"Your Decks"),c.a.createElement(l.b,{to:"/decks/create",className:"btn deck-create-link"},"Create")),c.a.createElement("div",{className:"decks-top-bar"},c.a.createElement("label",{className:"btn btn-icon decks-top-bar-item deck-import-input-container"},c.a.createElement(r.a,{name:"import"}),c.a.createElement("span",null,"Import"),c.a.createElement("input",{type:"file",className:"sr-only",onChange:async function({target:a}){const[c]=a.files,{default:l}=await n.e(2).then(n.t.bind(null,142,7)),r=await l.loadAsync(c),o={id:Object(s.a)(),title:"",description:"",createdAt:new Date,cards:[]};for(const[e,t]of Object.entries(r.files))if(e.endsWith("/metadata.json")){const e=JSON.parse(await t.async("string"));Object.assign(o,e)}else if(e.endsWith(".json")){const e=JSON.parse(await t.async("string")),n=e.front.attachment;if(e.id=Object(s.a)(),n&&n.blobName){const{blobName:e}=n,t=r.files[`${o.title}/${e}`];n.blob=new File([await t.async("blob")],e,{type:n.mimeType}),delete n.blobName,delete n.mimeType}o.cards.push(e)}t([...e,o]),Object(i.d)(o),a.value=""}})),c.a.createElement("button",{className:"btn btn-icon decks-top-bar-item",onClick:function(){k(!0)}},c.a.createElement(r.a,{name:"settings"}),c.a.createElement("span",null,"Settings"))),E?"":e.length?c.a.createElement("ul",null,function(e){return e.map(e=>c.a.createElement(b,{key:e.id,deck:e,showDialog:v,exportDeck:g}))}(e)):c.a.createElement("h2",{className:"deck-list-message"},"You have no decks"),d.visible&&c.a.createElement(o,{deckTitle:d.deck.title,removeDeck:function(){const n=function(e,t){return e.findIndex(({id:e})=>e===t)}(e,d.deck.id);e.splice(n,1),t([...e]),Object(i.a)(d.deck.id),N()},cancelRemoval:N}),f&&c.a.createElement(m,{hide:function(){k(!1)}}))}},40:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));n(32);function a(e){const t=[].concat(e);let n=t.length;for(;n;){const e=Math.floor(Math.random()*n);n-=1,[t[n],t[e]]=[t[e],t[n]]}return t}function c(){return Math.random().toString(32).slice(2,10)}},47:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return i}));const a=new(n(64).a)("nimus-cards");function c(){return a.decks.toArray().then(r).catch(e=>{console.log(e)})}function l(e){return a.decks.get(e)}function s(e){a.decks.put(e).catch(e=>{console.log(e)})}function i(e){a.decks.delete(e).catch(e=>{console.log(e)})}function r(e){return e.sort((e,t)=>{const n=new Date(e.createdAt||0),a=new Date(t.createdAt||0);return n<a?1:n>a?-1:0})}a.version(1).stores({decks:"id"})},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));let a=JSON.parse(localStorage.getItem("nimus-cards-settings"))||{randomize:{value:!0},cardCount:{value:""},timeoutDuration:{value:""}};function c(){return a}function l(e){a={...a,...e},localStorage.setItem("nimus-cards-settings",JSON.stringify(a))}}}]);