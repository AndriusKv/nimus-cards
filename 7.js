(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{100:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},111:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=(a(107),a(30),a(104),a(108),a(9));var r=function({id:e,attachmentId:t,side:a}){const[r,s]=Object(n.useState)(null),[i,o]=Object(n.useState)(!1),m=Object(n.useRef)(null),d=Object(n.useRef)(null);function u(){m.current.currentTime=0,m.current.play()}function p(){d.current.currentTime=0,d.current.play()}function b(){const{mediaType:e,src:t,attachmentId:a}=r;return"image"===e?c.a.createElement("button",{className:"btn btn-icon study-image-btn",onClick:v},c.a.createElement("img",{src:t,alt:"",className:"study-image"})):"audio"===e?c.a.createElement("button",{className:"btn study-audio-btn",onClick:u},c.a.createElement(l.a,{name:"volume",className:"study-audio-btn-icon"}),c.a.createElement("audio",{src:t,ref:m,key:a,autoPlay:!0})):"video"===e?c.a.createElement("button",{className:"btn btn-icon study-video-btn",onClick:p},c.a.createElement("video",{src:t,className:"study-video",crossOrigin:"anonymous",ref:d,key:a,autoPlay:!0})):null}function v(){o(!i)}function f(){return c.a.createElement("div",{className:"study-front-text",style:{fontSize:a.textSize+"px"}},a.text)}return Object(n.useEffect)(()=>{let e="",n="";if(a.attachment){const{blob:c,url:l,type:r}=a.attachment;n=c?"blob":"url",e=c?URL.createObjectURL(c):l,s({src:e,attachmentId:t,mediaType:r})}else s(null);return()=>{"blob"===n&&URL.revokeObjectURL(e)}},[e,t]),c.a.createElement(c.a.Fragment,null,a.text&&r?c.a.createElement("div",{className:"study-front-content"},b(),f()):a.text?f():r?b():null,i&&c.a.createElement("div",{className:"study-expanded-image-mask",onClick:function(){o(!1)}},c.a.createElement("img",{src:r.src,className:"study-expanded-image",alt:""})))},s=(a(109),a(31));var i=function({card:e,selectOption:t,handleSubmit:a}){const{back:n,revealed:r}=e,{type:i,typeOptions:o}=n;return"text"===i?c.a.createElement("div",{className:"study-card-text-content",style:{fontSize:o.textSize+"px"}},o.value):"exact"===i?function(){let t="input study-exact-input";return r&&(t+=e.isCorrect?" right":" wrong"),c.a.createElement("form",{onSubmit:a,className:"study-exact"},c.a.createElement("label",null,c.a.createElement("div",{className:"study-exact-top"},c.a.createElement("div",{className:"study-exact-title"},"Your Answer:"),n.typeOptions.caseSensitive?c.a.createElement("div",{className:"study-exact-notice"},c.a.createElement(l.a,{name:"info",className:"study-exact-notice-icon"}),c.a.createElement("span",null,"Answer is case sensitive")):""),c.a.createElement("input",{type:"input",className:t,name:"answer",disabled:r})),c.a.createElement("button",{className:"btn study-exact-btn",disabled:r},"Check Answer"))}():"multi"===i?c.a.createElement("ul",{className:Object(s.a)("study-multi",`study-multi-${n.typeOptions.layout}-type`,r?"revealed":"")},o.options.map(({id:e,value:a},l)=>c.a.createElement("li",{key:e+l},c.a.createElement("button",{onClick:()=>t(e),className:Object(s.a)("btn study-multi-item",`study-multi-${n.typeOptions.layout}-type-item`,r&&o.correctId===e?"correct":"")},a)))):null};t.a=function({card:e,selectOption:t,revealAnswer:a,nextStep:n,skipNextStepTimeout:l}){return"text"!==e.back.type||e.revealed?c.a.createElement("div",{className:"study-card"},c.a.createElement(r,{id:e.id,attachmentId:e.attachmentId,side:e.front}),c.a.createElement(i,{card:e,selectOption:t,handleSubmit:function(t){if(t.preventDefault(),t.persist(),e.revealed)return;const a=t.target.elements.answer.value;let c=!1;c=e.back.typeOptions.caseSensitive?a===e.back.typeOptions.value:a.toLowerCase()===e.back.typeOptions.value.toLowerCase(),n(c),setTimeout(()=>{t.target.reset()},1600)}}),"text"===e.back.type&&e.revealed&&c.a.createElement(c.a.Fragment,null,e.finished||e.timerReveal?c.a.createElement("button",{className:"btn btn-invert study-card-text-btn",onClick:l},"Next"):c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-negative study-card-text-btn",disabled:e.finished,onClick:()=>n(!1)},"I Was Wrong"),c.a.createElement("button",{className:"btn btn-positive study-card-text-btn",disabled:e.finished,onClick:()=>n(!0)},"I Got It Right")))):c.a.createElement("div",{className:"study-card"},c.a.createElement(r,{id:e.id,attachmentId:e.attachmentId,side:e.front}),c.a.createElement("button",{className:"btn btn-invert study-card-text-btn",onClick:a},"Check"))}},120:function(e,t,a){},121:function(e,t,a){},134:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);a(30);var n=a(0),c=a.n(n),l=(a(120),a(103)),r=a.n(l),s=a(31),i=a(98),o=a(9);function m({textSize:e,handleChange:t}){return c.a.createElement("select",{className:"input create-side-select",title:"Text size",defaultValue:e,onChange:t},c.a.createElement("option",{value:"16"},"16px"),c.a.createElement("option",{value:"24"},"24px"),c.a.createElement("option",{value:"36"},"36px"),c.a.createElement("option",{value:"48"},"48px"))}a(121);var d=function({addAttachment:e}){const[t,a]=Object(n.useState)(""),[l,r]=Object(n.useState)("image");function s(e){a(e),setTimeout(()=>{a("")},3200)}function i(){s(`URL does not contain valid ${l} file.`)}return c.a.createElement("div",{className:"upload-panel"},c.a.createElement("div",{className:"upload-type-selection"},["image","audio","video"].map((e,t)=>c.a.createElement("button",{className:"btn btn-icon-text upload-type-selection-btn"+(l===e?" active":""),onClick:()=>r(e),key:t},c.a.createElement(o.a,{name:e+"-file"}),c.a.createElement("span",null,e)))),c.a.createElement("div",{className:"upload-panel-content"},c.a.createElement("label",{className:"btn upload-panel-import-input-container"},c.a.createElement("span",null,"Select File"),c.a.createElement("input",{type:"file",className:"sr-only",onChange:function({target:t}){const[a]=t.files;t.value="",a.type.split("/")[0]!==l?s(`Selected file is not ${"v"===l[0]?"a":"an"} ${l} file.`):e({blob:a,type:l})}})),c.a.createElement("div",{className:"upload-panel-item-separator"},"OR"),t&&c.a.createElement("div",{className:"upload-panel-message"},t),c.a.createElement("form",{onSubmit:function(t){const a=t.target.elements.url.value.trim();if(t.preventDefault(),a){if("image"===l){const t=new Image;t.onload=()=>{e({url:a,type:l})},t.onerror=e=>{i(),console.log(e)},t.src=a}else if("audio"===l){const t=new Audio(a);t.onloadedmetadata=()=>{e({url:a,type:l})},t.onerror=e=>{i(),console.log(e)}}else if("video"===l){const t=document.createElement("video");t.crossOrigin="anonymous",t.onloadedmetadata=()=>{e({url:a,type:l})},t.onerror=e=>{i(),console.log(e)},t.src=a}}else s("Please specify valid url.")},className:"upload-panel-form"},c.a.createElement("input",{type:"text",name:"url",className:"input upload-panel-form-input",placeholder:"Enter URL..."}),c.a.createElement("button",{className:"btn upload-panel-form-btn"},"Upload"))))},u=(a(104),c.a.memo(({attachment:e})=>{const{blob:t,url:a,type:n}=e,l=t?URL.createObjectURL(t):a;return"image"===n?c.a.createElement("img",{src:l,alt:"",className:"create-side-image"}):"audio"===n?c.a.createElement("audio",{src:l,className:"create-side-audio",controls:!0}):"video"===n?c.a.createElement("video",{src:l,className:"create-side-video",crossOrigin:"anonymous",controls:!0}):null}));var p=function({side:e,addAttachment:t,removeAttachment:a,updateAttachmentDescription:l,handleChange:r}){var s;const[i,p]=Object(n.useState)("text"),{text:b,textSize:v,attachment:f}=e;function E({target:e}){p(e.value)}return c.a.createElement("div",{className:"create-card-side"},c.a.createElement("div",{className:"create-side-toolbar"},c.a.createElement("ul",{className:"create-side-types"},c.a.createElement("li",{className:"create-side-type"},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",className:"sr-only create-type-radio",value:"text",checked:"text"===i,onChange:E}),c.a.createElement(o.a,{name:"text",title:"Text",className:"create-option-type-icon"}))),c.a.createElement("li",{className:"create-side-type"},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",className:"sr-only create-type-radio",value:"attachment",checked:"attachment"===i,onChange:E}),c.a.createElement(o.a,{name:"attachment",title:"Attachment",className:"create-option-type-icon"})))),"text"===i&&c.a.createElement(m,{textSize:v,handleChange:e=>r(e,"front","textSize")})),"text"===i?c.a.createElement("div",{className:"create-side-content create-front-side-content"},c.a.createElement("textarea",{className:"input create-side-text-input",value:b,style:{fontSize:v+"px"},onChange:e=>r(e,"front","text")}),function(){const t=e.errors;return(null==t?void 0:t.attachmentMessage)?c.a.createElement("div",{className:"create-side-message"},t.attachmentMessage):(null==t?void 0:t.textMessage)?c.a.createElement("div",{className:"create-side-message"},t.textMessage):null}()):c.a.createElement("div",{className:"create-side-content create-front-side-content"},f?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"create-side-panel"},c.a.createElement("button",{type:"button",className:"btn btn-icon create-side-panel-btn",onClick:a,title:"Remove attachment"},c.a.createElement(o.a,{name:"remove"})),c.a.createElement(u,{attachment:f}),(null==(s=e.errors)?void 0:s.attachmentMessage)&&c.a.createElement("div",{className:"create-side-attachment-message"},e.errors.attachmentMessage)),c.a.createElement("input",{type:"text",className:"input create-side-attachment-input",placeholder:"Describe attachment",defaultValue:f.description,onChange:l})):c.a.createElement(d,{addAttachment:t})))};var b=function({side:e,updateCardBack:t}){var a;const{type:n,textOptions:l,multiOptions:r,exactOptions:i}=e;function d({target:a},n){const{value:c}=a;c!==e[n]&&(l[n]=c,t({textOptions:l}))}function u({target:e}){r.layout=e.value,t({multiOptions:r})}function p({target:e}){const{name:a,value:n}=e,c=r.options[a];n!==c.value&&(c.value=n,t({multiOptions:r}))}function b({target:e}){const{name:a,value:n,checked:c}=e;"caseSensitive"===a?i.caseSensitive=c:i.value=n,t({exactOptions:i})}function v(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"create-multi-layout"},c.a.createElement("div",{className:"create-multi-layout-title"},"Layout"),c.a.createElement("div",{onInput:u,className:"create-multi-layout-items"},c.a.createElement("label",{className:"create-multi-layout-item"},c.a.createElement("input",{type:"radio",className:"sr-only create-type-radio",name:"multi-select",value:"short",defaultChecked:"short"===r.layout}),c.a.createElement(o.a,{name:"grid",className:"create-option-type-icon"})),c.a.createElement("label",{className:"create-multi-layout-item"},c.a.createElement("input",{type:"radio",className:"sr-only create-type-radio",name:"multi-select",value:"medium",defaultChecked:"medium"===r.layout}),c.a.createElement(o.a,{name:"list-2-col",className:"create-option-type-icon"})),c.a.createElement("label",{className:"create-multi-layout-item"},c.a.createElement("input",{type:"radio",className:"sr-only create-type-radio",name:"multi-select",value:"long",defaultChecked:"long"===r.layout}),c.a.createElement(o.a,{name:"menu",className:"create-option-type-icon"})))),c.a.createElement("ul",null,r.options.map(({id:e,value:a},n)=>c.a.createElement("li",{className:"create-option",key:e},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",className:"sr-only radio-input",name:"multi-option",checked:r.correctId===e,onChange:()=>function(e){r.correctId=e,t({multiOptions:r})}(e)}),c.a.createElement("div",{className:"radio",title:"Mark answer as correct"})),c.a.createElement("input",{type:"text",className:"input create-option-input",name:n,defaultValue:a,autoComplete:"off",onChange:p}),c.a.createElement("button",{className:"btn btn-icon",title:"Remove answer",onClick:()=>{return e=n,r.options.splice(e,1),void t({multiOptions:r});var e}},c.a.createElement(o.a,{name:"remove"}))))))}return c.a.createElement("div",{className:"create-card-side"},c.a.createElement("div",{className:"create-side-toolbar"},c.a.createElement("ul",{className:"create-side-types",onChange:function({target:e}){t({type:e.value})}},c.a.createElement("li",{className:"create-side-type"},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",className:"sr-only create-type-radio",name:"type-select",value:"text",defaultChecked:"text"===n}),c.a.createElement(o.a,{name:"text",title:"Text",className:"create-option-type-icon"}))),c.a.createElement("li",{className:"create-side-type"},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",className:"sr-only create-type-radio",name:"type-select",value:"multi",defaultChecked:"multi"===n}),c.a.createElement(o.a,{name:"list-checkbox",title:"Multiple choice",className:"create-option-type-icon"}))),c.a.createElement("li",{className:"create-side-type"},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",className:"sr-only create-type-radio",name:"type-select",value:"exact",defaultChecked:"exact"===n}),c.a.createElement(o.a,{name:"text-short",title:"Exact answer",className:"create-option-type-icon"})))),"text"===n&&c.a.createElement(m,{textSize:l.textSize,handleChange:e=>d(e,"textSize")}),"multi"===n&&c.a.createElement("button",{className:"btn btn-icon",onClick:function(){r.options.length<8&&(r.options.push({id:Object(s.e)()}),t({multiOptions:r}))},title:"Add option",disabled:r.options.length>=8},c.a.createElement(o.a,{name:"add-list-item"}))),c.a.createElement("div",{className:"create-side-content"},function(e){return"text"===e?c.a.createElement("textarea",{className:"input create-side-text-input",value:l.value,style:{fontSize:l.textSize+"px"},onChange:e=>d(e,"value")}):"multi"===e?v():"exact"===e?c.a.createElement("div",{onChange:b},c.a.createElement("label",{className:"create-exact-input-container"},c.a.createElement("div",{className:"create-exact-input-title"},"Provide an answer:"),c.a.createElement("input",{type:"text",className:"input create-exact-input",name:"input",autoComplete:"off",defaultValue:i.value})),c.a.createElement("label",{className:"checkbox-container create-exact-checkbox-container"},c.a.createElement("input",{type:"checkbox",className:"sr-only checkbox-input",name:"caseSensitive",defaultChecked:i.caseSensitive}),c.a.createElement("div",{className:"checkbox"},c.a.createElement("div",{className:"checkbox-tick"})),c.a.createElement("span",{className:"checkbox-label"},"Case sensitive"))):null}(n),(null==(a=e.errors)?void 0:a.message)&&c.a.createElement("div",{className:"create-side-message"},e.errors.message)))};function v({value:e,handleChange:t}){return c.a.createElement("div",{className:"create-card-notes-container"},c.a.createElement("textarea",{className:"input create-card-notes-input",placeholder:"Notes...",value:e,onChange:e=>t(e,"notes","value")}))}a(134);var f=a(111),E=a(99);var y=function({card:e,hide:t}){return c.a.createElement(E.a,{className:"container create-card-preview-modal",hide:t},c.a.createElement("h3",{className:"modal-title"},"Card Preview"),c.a.createElement(f.a,{card:e,selectOption:t,revealAnswer:t,nextStep:t}))};t.default=function(e){const[t,a]=Object(n.useState)(null),[l,m]=Object(n.useState)([]);let d=0;function u(){return{id:Object(s.e)(),front:{text:"",textSize:16},back:{type:"text",textOptions:{value:"",textSize:16},multiOptions:{correctId:"",layout:"short",options:[{id:Object(s.e)()},{id:Object(s.e)()}]},exactOptions:{caseSensitive:!1,value:""}},notes:{value:""},score:{streak:0,right:0,wrong:0,total:0}}}function f(e,n){const c=e+n,l=t.cards;[l[e],l[c]]=[l[c],l[e]],a({...t})}function E({target:e}){const{name:n,value:c}=e;t[n]=c,"title"===n&&t.missingTitle&&delete t.missingTitle,a({...t})}function h({target:e},n,c){const{value:l}=e,r=t.cards[t.selectedCardIndex];if(l!==r[n][c]){var s;if(r[n][c]=l,"front"===n)r.modified=!0,(null==(s=r.front.error)?void 0:s.textMessage)&&delete r.front.error.textMessage;a({...t})}}function x(e){return e.attachment?!!e.attachment.description:!!e.text}function N(e){return{validOptionCount:e.options.reduce((e,{value:t})=>(t&&(e+=1),e),0),correctId:e.correctId}}function g(e){if("text"===e.type)return e.textOptions.value.length>0;if("exact"===e.type)return e.exactOptions.value.length>0;const{validOptionCount:t,correctId:a}=N(e.multiOptions);return t>1&&a}if(Object(n.useEffect)(()=>{const{id:t}=e.match.params;"/decks/create"===e.match.path?(a({id:Object(s.e)(),title:"",description:"",selectedCardIndex:0,cards:[u(),u()]}),Object(s.f)("Create a new deck")):t&&Object(i.b)(t).then(e=>{e&&(e.makingEdit=!0,e.selectedCardIndex=0,e.cards=e.cards.map(e=>(e.back={...u().back,...e.back,type:e.back.type,[e.back.type+"Options"]:e.back.typeOptions},delete e.back.typeOptions,e)),a(e),Object(s.f)("Editing "+e.title))})},[]),Object(n.useEffect)(()=>(clearTimeout(d),l.length>0&&(d=setTimeout(()=>{m([])},8e3)),()=>{clearTimeout(d)}),[l.length]),!t)return null;const k=t.selectedCardIndex,O=t.cards.length,C=t.cards[k];return c.a.createElement(c.a.Fragment,null,c.a.createElement("label",{className:"create-field"},c.a.createElement("div",{className:"create-field-title"},"Title"),c.a.createElement("input",{className:"input create-field-input",name:"title",value:t.title,onChange:E}),t.missingTitle&&c.a.createElement("div",{className:"create-field-input-message"},"Please provide title for your deck.")),c.a.createElement("label",{className:"create-field"},c.a.createElement("div",{className:"create-field-title"},"Description"),c.a.createElement("input",{className:"input create-field-input",name:"description",value:t.description,onChange:E})),c.a.createElement("ul",{className:"create-card-select"},t.cards.map((e,n)=>c.a.createElement("li",{className:"create-card-select-item",key:n},c.a.createElement("button",{className:`btn btn-text create-card-select-btn${n===t.selectedCardIndex?" active":""}${e.invalid?" invalid":""}${e.valid?" valid":""}`,onClick:()=>function(e){e!==t.selectedCardIndex&&a({...t,selectedCardIndex:e})}(n)},n+1))),c.a.createElement("li",{className:"create-card-select-item"},c.a.createElement("button",{onClick:function(){const e=t.cards[t.cards.length-1],n=u();n.front.textSize=e.front.textSize,n.back.type=e.back.type,"text"===n.back.type?n.back.textOptions.textSize=e.back.textOptions.textSize:"multi"===n.back.type?n.back.multiOptions.layout=e.back.multiOptions.layout:"exact"===n.back.type&&(n.back.exactOptions.caseSensitive=e.back.exactOptions.caseSensitive),a({...t,cards:[...t.cards,n]})},className:"btn btn-icon create-card-select-btn",title:"Add Card"},c.a.createElement(o.a,{name:"plus"})))),c.a.createElement("div",{className:"create-card"},c.a.createElement("div",{className:"create-card-header"},c.a.createElement("div",{className:"create-card-index-container"},c.a.createElement("button",{className:"btn btn-icon create-card-header-item",onClick:()=>f(k,-1),title:"Swap with the left card",disabled:0===k},c.a.createElement(o.a,{name:"chevron-left"})),c.a.createElement("div",{className:"create-card-index"},k+1),c.a.createElement("button",{className:"btn btn-icon create-card-header-item",onClick:()=>f(k,1),title:"Swap with the right card",disabled:k===O-1},c.a.createElement(o.a,{name:"chevron-right"}))),c.a.createElement("div",{className:"create-card-preview-btn-container create-card-header-item"},c.a.createElement("button",{className:"btn btn-icon",title:"Preview card",onClick:()=>function(e){x(e.front)&&g(e.back)?(e.visible=!0,e.back.typeOptions=e.back[e.back.type+"Options"],"multi"===e.back.type&&(e.back.typeOptions.options=Object(s.g)(e.back.multiOptions.options.filter(({value:e})=>e)))):(e.message="Can't preview invalid card",setTimeout(()=>{delete e.message,a({...t})},2400)),a({...t})}(C)},c.a.createElement(o.a,{name:"preview"})),C.message&&c.a.createElement("p",{className:"create-card-preview-message"},C.message)),c.a.createElement("button",{className:"btn btn-icon",title:"Clone card",onClick:()=>function(e){const n=r()(t.cards[e]);n.id=Object(s.e)(),t.selectedCardIndex=e,t.cards.splice(e,0,n),a({...t})}(k)},c.a.createElement(o.a,{name:"clone"})),O>1&&c.a.createElement("button",{className:"btn btn-icon create-card-remove-card-btn",title:"Remove card",onClick:()=>function(e){const n=t.cards[e];(x(n.front)||g(n.back)||n.notes.value)&&m([...l,n]),t.selectedCardIndex=e>0?e-1:0,t.cards.splice(e,1),a({...t})}(k)},c.a.createElement(o.a,{name:"remove"}))),c.a.createElement("div",{className:"create-card-main",key:C.id},c.a.createElement(p,{side:C.front,addAttachment:function(e){const n=t.cards[t.selectedCardIndex];n.modified=!0,n.front.attachment=e,delete n.front.error,a({...t})},removeAttachment:function(){const e=t.cards[t.selectedCardIndex];e.modified=!0,delete e.front.attachment,delete e.front.error,a({...t})},updateAttachmentDescription:function({target:e}){var n;const c=t.cards[t.selectedCardIndex];c.modified=!0,c.front.attachment.description=e.value,(null==(n=c.front.error)?void 0:n.attachmentMessage)&&delete c.front.error,a({...t})},handleChange:h}),c.a.createElement(b,{side:C.back,updateCardBack:function(e){const n=t.cards[t.selectedCardIndex];n.modified=!0,n.back={...n.back,...e},delete n.back.error,a({...t})}})),c.a.createElement(v,{value:C.notes.value,handleChange:h}),C.visible&&c.a.createElement(y,{card:C,hide:()=>function(e){delete e.visible,delete e.back.typeOptions,a({...t})}(C)})),l.length>0&&c.a.createElement("div",{className:"create-undo-dialog"},c.a.createElement("span",null,"Removed ",l.length," card",l.length>1?"s":""),c.a.createElement("button",{className:"btn btn-text create-dialog-undo-btn",onClick:function(){m([]),a({...t,cards:t.cards.concat(l)})}},"UNDO")),c.a.createElement("div",{className:"create-footer"},t.globalMessage&&c.a.createElement("span",{className:"create-message"},t.globalMessage),c.a.createElement("button",{className:"btn create-submit-btn",onClick:function(){t.title||(t.missingTitle=!0);const n=function(e){let a=0;for(const t of e){let e=0;if(t.valid=!1,t.invalid=!1,x(t.front))e+=1,delete t.front.error;else{t.front.error=t.front.error||{};const{text:e,attachment:a,error:n}=t.front;a&&!a.description?n.attachmentMessage="Please provide attachment description.":e||(n.textMessage="Please fill in the text field or provide an attachment.")}if(g(t.back))e+=1,delete t.back.error;else{t.back.error=t.back.error||{};const{type:e,textOptions:a,exactOptions:n,multiOptions:c,error:l}=t.back;if("text"!==e||a.value)if("exact"!==e||n.value){if("multi"===e){const{validOptionCount:e,correctId:t}=N(c);e<2?l.message="Please fill in at least 2 options.":t||(l.message="Please select correct option.")}}else l.message="Please provide an answer.";else l.message="Please fill in the text field."}2===e?(a+=1,t.valid=!0):t.invalid=!0}return t.globalMessage=a<2?"Please fill in at least 2 cards.":"",a===e.length}(t.cards);t.title&&n?(t.cards=t.cards.map(e=>{const t={type:e.back.type,typeOptions:e.back[e.back.type+"Options"]};return e.modified&&(delete e.score,delete e.level,delete e.nextReview),delete e.modified,delete e.invalid,delete e.valid,"multi"===t.type&&(t.typeOptions.options=e.back.multiOptions.options.filter(({value:e})=>e)),e.back=t,e}),t.createdAt=t.createdAt||Date.now(),e.history.push("/decks"),Object(i.d)(t)):a({...t})}},t.makingEdit?"Update":"Create")))}},98:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"d",(function(){return r})),a.d(t,"a",(function(){return s}));const n=new(a(101).a)("nimus-cards");function c(){return n.decks.toArray().then(i).catch(e=>{console.log(e)})}function l(e){return n.decks.get(e)}function r(e){n.decks.put(e).catch(e=>{console.log(e)})}function s(e){n.decks.delete(e).catch(e=>{console.log(e)})}function i(e){return e.sort((e,t)=>e.createdAt<t.createdAt?1:e.createdAt>t.createdAt?-1:0)}n.version(1).stores({decks:"id"})},99:function(e,t,a){"use strict";var n=a(0),c=a.n(n);a(100);t.a=function({className:e,hide:t,children:a}){const l=Object(n.useCallback)((function({key:e}){"Escape"===e&&t()}),[]);return Object(n.useEffect)(()=>(window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}),[]),c.a.createElement("div",{className:"modal-mask",onClick:function({target:e,currentTarget:a}){e===a&&t()}},c.a.createElement("div",{className:"modal"+(e?" "+e:"")},a))}}}]);