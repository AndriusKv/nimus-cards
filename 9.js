(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{215:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));n(32);var a=n(0),c=n.n(a),l=n(5),i=n(47),s=n(53),o=n(8);function r({deckTitle:e,removeDeck:t,cancelRemoval:n}){return c.a.createElement("div",{className:"mask"},c.a.createElement("div",{className:"modal deck-dialog-box"},c.a.createElement("h3",{className:"deck-dialog-box-title"},"Are you sure you want to remove ",c.a.createElement("b",null,e)," deck?"),c.a.createElement("div",{className:"deck-dialog-box-btns"},c.a.createElement("button",{className:"btn btn-danger",onClick:t},"Remove"),c.a.createElement("button",{className:"btn btn-text",onClick:n},"Cancel"))))}function d({deck:e,showDialog:t,editDeck:n,exportDeck:a}){return c.a.createElement("li",{className:"deck"},c.a.createElement(l.b,{to:`/decks/${e.id}`,className:"deck-title"},e.title),e.description&&c.a.createElement("p",{className:"deck-description"},e.description),c.a.createElement("div",{className:"deck-card-count"},e.cards.length," card",e.cards.length>1&&"s"),c.a.createElement("div",{className:"deck-btn-container"},c.a.createElement("button",{className:"btn btn-icon deck-btn",onClick:()=>n(e)},c.a.createElement(o.a,{name:"edit"}),c.a.createElement("span",null,"Edit")),c.a.createElement("button",{className:"btn btn-icon deck-btn",onClick:()=>a(e)},c.a.createElement(o.a,{name:"export"}),c.a.createElement("span",null,"Export")),c.a.createElement("button",{className:"btn btn-icon deck-btn",onClick:()=>t(e)},c.a.createElement(o.a,{name:"remove"}),c.a.createElement("span",null,"Remove"))))}function m(e){const[t,m]=Object(a.useState)([]),[u,f]=Object(a.useState)({visible:!1}),[b,k]=Object(a.useState)(!0);function p(t){e.history.push(`/decks/${t.id}/edit`)}function E(e){f({visible:!0,deck:e})}function h(){f({visible:!1,deck:null})}async function y(e){const[{saveAs:t},{default:a}]=await Promise.all([n.e(11).then(n.t.bind(null,211,7)),Promise.all([n.e(2),n.e(4)]).then(n.t.bind(null,212,7))]),c=new a,l=c.folder(e.title);l.file("description.txt",e.description),e.cards.forEach((e,t)=>{let n=e.front.attachment;n&&(n={...n},l.file(n.file.name,new Blob([n.file],{type:n.file.type})),n.mimeType=n.file.type,n.file=n.file.name),l.file(`${t}.json`,JSON.stringify({...e,front:{...e.front,attachment:n}},null,2))}),t(await c.generateAsync({type:"blob"}),`${e.title}.zip`)}return Object(a.useEffect)(()=>{Object(s.c)().then(e=>{m(e),k(!1)})},[]),c.a.createElement(a.Fragment,null,c.a.createElement("div",{className:"deck-list-header"},c.a.createElement("h1",{className:"deck-list-title"},"Your Decks")),c.a.createElement("div",{className:"deck-actions"},c.a.createElement("label",{className:"btn btn-icon deck-actions-item",tabIndex:"0",onKeyDown:function(e){"Enter"!==e.key&&" "!==e.key||e.currentTarget.lastElementChild.click()}},c.a.createElement(o.a,{name:"import"}),c.a.createElement("span",null,"Import"),c.a.createElement("input",{type:"file",style:{display:"none"},onChange:async function({target:e}){const[a]=e.files,{default:c}=await Promise.all([n.e(2),n.e(4)]).then(n.t.bind(null,212,7)),l=await c.loadAsync(a),o={id:Object(i.a)(),title:"",description:"",cards:[]};for(const[e,t]of Object.entries(l.files))if(e.endsWith("/")){o.title=e.slice(0,-1);const t=l.files[`${o.title}/description.txt`];t&&(o.description=await t.async("string"))}else if(e.endsWith(".json")){const e=JSON.parse(await t.async("string")),n=e.front.attachment;if(e.id=Object(i.a)(),n){const e=n.file,t=l.files[`${o.title}/${e}`];n.file=new File([await t.async("blob")],e,{type:n.mimeType}),delete n.mimeType}o.cards.push(e)}m([...t,o]),Object(s.d)(o),e.value=""}})),c.a.createElement(l.b,{to:"/decks/create",className:"btn"},"Create")),b?"":t.length?c.a.createElement("ul",null,function(e){return e.map(e=>c.a.createElement(d,{key:e.id,deck:e,showDialog:E,editDeck:p,exportDeck:y}))}(t)):c.a.createElement("h2",{className:"deck-list-message"},"You have no decks"),u.visible&&c.a.createElement(r,{deckTitle:u.deck.title,removeDeck:function(){const e=function(e,t){return e.findIndex(({id:e})=>e===t)}(t,u.deck.id);t.splice(e,1),m([...t]),Object(s.a)(u.deck.id),h()},cancelRemoval:h}))}},47:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));n(32);function a(e){const t=[].concat(e);let n=t.length;for(;n;){const e=Math.floor(Math.random()*n);n-=1,[t[n],t[e]]=[t[e],t[n]]}return t}function c(){return Math.random().toString(32).slice(2,10)}},53:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return s}));const a=new(n(77).a)("nimus-cards");function c(){return a.decks.toArray().catch(e=>{console.log(e)})}function l(e){return a.decks.get(e)}function i(e){a.decks.put(e).catch(e=>{console.log(e)})}function s(e){a.decks.delete(e).catch(e=>{console.log(e)})}a.version(1).stores({decks:"id"})}}]);