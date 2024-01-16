(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Chatbot:()=>B,createChatBotMessage:()=>i,createClientMessage:()=>u,createCustomMessage:()=>l,default:()=>I,useChatbot:()=>H});const r=require("react");var a=e.n(r);const n=require("react-conditionally-render");var o=e.n(n),s=function(){return s=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)},c=function(e,t){return{message:e,type:t,id:Math.round(Date.now()*Math.random())}},i=function(e,t){return s(s(s({},c(e,"bot")),t),{loading:!0})},l=function(e,t,r){return s(s({},c(e,t)),r)},u=function(e,t){return s(s({},c(e,"user")),t)},m=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(e)return e.apply(void 0,t)};function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},d.apply(this,arguments)}const g=({styles:e={},...t})=>a().createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t),a().createElement("path",{d:"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"})),f=function(e){var t=e.message,r=e.customComponents;return a().createElement("div",{className:"react-chatbot-kit-user-chat-message-container"},a().createElement(o(),{condition:!!r.userChatMessage,show:m(r.userChatMessage,{message:t}),elseShow:a().createElement("div",{className:"react-chatbot-kit-user-chat-message"},t,a().createElement("div",{className:"react-chatbot-kit-user-chat-message-arrow"}))}),a().createElement(o(),{condition:!!r.userAvatar,show:m(r.userAvatar),elseShow:a().createElement("div",{className:"react-chatbot-kit-user-avatar"},a().createElement("div",{className:"react-chatbot-kit-user-avatar-container"},a().createElement(g,{className:"react-chatbot-kit-user-avatar-icon"})))}))},h=function(){return a().createElement("div",{className:"react-chatbot-kit-chat-bot-avatar"},a().createElement("div",{className:"react-chatbot-kit-chat-bot-avatar-container"},a().createElement("p",{className:"react-chatbot-kit-chat-bot-avatar-letter"},"B")))},p=function(){return a().createElement("div",{className:"chatbot-loader-container"},a().createElement("svg",{id:"dots",width:"50px",height:"21px",viewBox:"0 0 132 58",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},a().createElement("g",{stroke:"none",fill:"none"},a().createElement("g",{id:"chatbot-loader",fill:"#fff"},a().createElement("circle",{id:"chatbot-loader-dot1",cx:"25",cy:"30",r:"13"}),a().createElement("circle",{id:"chatbot-loader-dot2",cx:"65",cy:"30",r:"13"}),a().createElement("circle",{id:"chatbot-loader-dot3",cx:"105",cy:"30",r:"13"})))))};var v=function(){return v=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},v.apply(this,arguments)};const y=function(e){var t=e.message,n=e.withAvatar,s=void 0===n||n,c=e.loading,i=e.messages,l=e.customComponents,u=e.setState,d=e.customStyles,g=e.delay,f=e.id,y=(0,r.useState)(!1),b=y[0],E=y[1];(0,r.useEffect)((function(){var e;return function(t,r){var a=750;g&&(a+=g),e=setTimeout((function(){var e=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,o=t.length;n<o;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}([],t,!0).map((function(e){return e.id===f?v(v({},e),{loading:!1,delay:void 0}):e}));r((function(t){return v(v({},t),{messages:e})}))}),a)}(i,u),function(){clearTimeout(e)}}),[g,f]),(0,r.useEffect)((function(){g?setTimeout((function(){return E(!0)}),g):E(!0)}),[g]);var w={backgroundColor:""},P={borderRightColor:""};return d&&(w.backgroundColor=d.backgroundColor,P.borderRightColor=d.backgroundColor),a().createElement(o(),{condition:b,show:a().createElement("div",{className:"react-chatbot-kit-chat-bot-message-container"},a().createElement(o(),{condition:s,show:a().createElement(o(),{condition:!!(null==l?void 0:l.botAvatar),show:m(null==l?void 0:l.botAvatar),elseShow:a().createElement(h,null)})}),a().createElement(o(),{condition:!!(null==l?void 0:l.botChatMessage),show:m(null==l?void 0:l.botChatMessage,{message:t,loader:a().createElement(p,null)}),elseShow:a().createElement("div",{className:"react-chatbot-kit-chat-bot-message",style:w},a().createElement(o(),{condition:c,show:a().createElement(p,null),elseShow:a().createElement("span",null,t)}),a().createElement(o(),{condition:s,show:a().createElement("div",{className:"react-chatbot-kit-chat-bot-message-arrow",style:P})}))}))})};function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},b.apply(this,arguments)}const E=({styles:e={},...t})=>a().createElement("svg",b({width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),a().createElement("g",{clipPath:"url(#clip0_678_6057)"},a().createElement("path",{d:"M4.01 6.03l7.51 3.22-7.52-1 .01-2.22zm7.5 8.72L4 17.97v-2.22l7.51-1zM2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z",fill:"#000",fillOpacity:".38"})),a().createElement("defs",null,a().createElement("clipPath",{id:"clip0_678_6057"},a().createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"}))));function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},w.apply(this,arguments)}const P=({styles:e={},...t})=>a().createElement("svg",w({width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),a().createElement("g",{clipPath:"url(#clip0_678_6056)"},a().createElement("path",{d:"M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z",fill:"#000",fillOpacity:".38"})),a().createElement("defs",null,a().createElement("clipPath",{id:"clip0_678_6056"},a().createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"}))));var S=function(){return S=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},S.apply(this,arguments)},O=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,o=t.length;n<o;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))};const k=function(e){var t=e.state,n=e.setState,s=e.widgetRegistry,i=e.messageParser,l=e.parse,u=e.customComponents,m=e.actionProvider,d=e.botName,g=e.customStyles,h=e.headerText,p=e.customMessages,v=e.placeholderText,b=e.validator,w=e.disableScrollToBottom,k=e.messageHistory,M=e.actions,C=e.messageContainerRef,N=t.messages,j=(0,r.useState)(""),x=j[0],T=j[1],A=(0,r.useState)(null),H=(A[0],A[1]),R=(0,r.useRef)(null),B=(0,r.useRef)(null),I=function(){setTimeout((function(){var e;C.current&&(C.current.scrollTop=null===(e=null==C?void 0:C.current)||void 0===e?void 0:e.scrollHeight)}),50)};(0,r.useEffect)((function(){w||I()}));var _=function(){n((function(e){return S(S({},e),{messages:O(O([],e.messages,!0),[c(x,"user")],!1)})})),I(),T("")},W={backgroundColor:""};g&&g.chatButton&&(W.backgroundColor=g.chatButton.backgroundColor);var z="Conversation with "+d;h&&(z=h);var V="Write your message here";return v&&(V=v),a().createElement("div",{className:"react-chatbot-kit-chat-container"},a().createElement("div",{className:"react-chatbot-kit-chat-inner-container"},a().createElement(o(),{condition:!!u.header,show:u.header&&u.header(m),elseShow:a().createElement("div",{className:"react-chatbot-kit-chat-header"},z)}),a().createElement("div",{className:"react-chatbot-kit-chat-message-container",ref:C},a().createElement(o(),{condition:"string"==typeof k&&Boolean(k),show:a().createElement("div",{dangerouslySetInnerHTML:{__html:k}})}),N.map((function(e,r){return"bot"===e.type?a().createElement(a().Fragment,{key:e.id},function(e,r){var c;c=e.withAvatar?e.withAvatar:function(e,t){if(0===t)return!0;var r=e[t-1];return!("bot"===r.type&&!r.widget)}(N,r);var i=S(S({},e),{setState:n,state:t,customComponents:u,widgetRegistry:s,messages:N,actions:M});if(e.widget){var l=s.getWidget(i.widget,S(S({},t),{scrollIntoView:I,payload:e.payload,actions:M}));return a().createElement(a().Fragment,null,a().createElement(y,S({customStyles:g.botMessageBox,withAvatar:c},i,{key:e.id})),a().createElement(o(),{condition:!i.loading,show:l||null}))}return a().createElement(y,S({customStyles:g.botMessageBox,key:e.id,withAvatar:c},i,{customComponents:u,messages:N,setState:n}))}(e,r)):"user"===e.type?a().createElement(a().Fragment,{key:e.id},function(e){var r=s.getWidget(e.widget,S(S({},t),{scrollIntoView:I,payload:e.payload,actions:M}));return a().createElement(a().Fragment,null,a().createElement(f,{message:e.message,key:e.id,customComponents:u}),r||null)}(e)):function(e,t){return!!t[e.type]}(e,p)?a().createElement(a().Fragment,{key:e.id},function(e){var r=p[e.type],o={setState:n,state:t,scrollIntoView:I,actionProvider:m,payload:e.payload,actions:M};if(e.widget){var c=s.getWidget(e.widget,S(S({},t),{scrollIntoView:I,payload:e.payload,actions:M}));return a().createElement(a().Fragment,null,r(o),c||null)}return r(o)}(e)):void 0})),a().createElement("div",{style:{paddingBottom:"15px"}})),a().createElement("div",{className:"react-chatbot-kit-chat-input-container"},a().createElement("form",{ref:B,className:"react-chatbot-kit-chat-input-form",onSubmit:function(e){if(e.preventDefault(),b&&"function"==typeof b){if(b(x)){if(_(),l)return l(x);i.parse(x)}}else{if(_(),l)return l(x);i.parse(x)}}},a().createElement("input",{className:"react-chatbot-kit-chat-input",placeholder:V,value:x,onChange:function(e){return T(e.target.value)}}),a().createElement("button",{className:"react-chatbot-kit-chat-btn-send",style:W},a().createElement(P,{className:"react-chatbot-kit-chat-btn-send-icon",onClick:function(){R.current.click()}})),a().createElement("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],r=new FileReader;r.onload=function(){if(H(r.result),n((function(e){return S(S({},e),{messages:O(O([],e.messages,!0),[c(r.result,"user"),c("Uploaded "+t.name,"user")],!1)})})),I(),l)return l("Uploaded "+t.name);i.parse("Uploaded "+t.name)},t&&r.readAsDataURL(t)},ref:R,className:"react-chatbot-kit-image-input",style:{display:"none"}}),a().createElement("button",{className:"react-chatbot-kit-chat-btn-send",style:W},a().createElement(E,{className:"react-chatbot-kit-chat-btn-send-icon"}))))))},M=function(e){var t=e.message;return a().createElement("div",{className:"react-chatbot-kit-error"},a().createElement("h1",{className:"react-chatbot-kit-error-header"},"Ooops. Something is missing."),a().createElement("div",{className:"react-chatbot-kit-error-container"},a().createElement(y,{message:t,withAvatar:!0,loading:!1,id:1,customStyles:{backgroundColor:""},messages:[]})),a().createElement("a",{href:"https://fredrikoseberg.github.io/react-chatbot-kit-docs/",rel:"noopener norefferer",target:"_blank",className:"react-chatbot-kit-error-docs"},"View the docs"))};var C=function(e){return e.widgets?e.widgets:[]},N=function(e){try{new e}catch(e){return!1}return!0},j=function(){return j=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},j.apply(this,arguments)};const x=function(e,t){var r=this;this.addWidget=function(e,t){var a=e.widgetName,n=e.widgetFunc,o=e.mapStateToProps,s=e.props;r[a]={widget:n,props:s,mapStateToProps:o,parentProps:j({},t)}},this.getWidget=function(e,t){var a=r[e];if(a){var n,o=j(j(j(j({scrollIntoView:t.scrollIntoView},a.parentProps),"object"==typeof(n=a.props)?n:{}),r.mapStateToProps(a.mapStateToProps,t)),{setState:r.setState,actionProvider:r.actionProvider||t.actions,actions:t.actions,state:t,payload:t.payload});return a.widget(o)||null}},this.mapStateToProps=function(e,t){if(e)return e.reduce((function(e,r){return e[r]=t[r],e}),{})},this.setState=e,this.actionProvider=t};var T=function(){return T=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},T.apply(this,arguments)},A=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,o=t.length;n<o;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))};const H=function(e){var t=e.config,n=e.actionProvider,o=e.messageParser,s=e.messageHistory,c=e.runInitialMessagesWithHistory,m=e.saveMessages,d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["config","actionProvider","messageParser","messageHistory","runInitialMessagesWithHistory","saveMessages"]),g="",f="";if(!t||!n||!o)return{configurationError:g="I think you forgot to feed me some props. Did you remember to pass a config, a messageparser and an actionprovider?"};var h=function(e,t){var r=[];return e.initialMessages||r.push("Config must contain property 'initialMessages', and it expects it to be an array of chatbotmessages."),r}(t);if(h.length)return{invalidPropsError:f=h.reduce((function(e,t){return e+t}),"")};var p=function(e){return e.state?e.state:{}}(t);s&&Array.isArray(s)?t.initialMessages=A([],s,!0):"string"==typeof s&&Boolean(s)&&(c||(t.initialMessages=[]));var v,y,b,E=a().useState(T({messages:A([],t.initialMessages,!0)},p)),w=E[0],P=E[1],S=a().useRef(w.messages),O=a().useRef(),k=a().useRef();(0,r.useEffect)((function(){S.current=w.messages})),(0,r.useEffect)((function(){s&&Array.isArray(s)&&P((function(e){return T(T({},e),{messages:s})}))}),[]),(0,r.useEffect)((function(){var e=k.current;return function(){if(m&&"function"==typeof m){var t=e.innerHTML.toString();m(S.current,t)}}}),[]),(0,r.useEffect)((function(){O.current=w}),[w]);var M=n,j=o;return N(M)&&N(j)?(v=new n(i,P,u,O.current,l,d),y=new x(P,v),b=new o(v,O.current),C(t).forEach((function(e){return null==y?void 0:y.addWidget(e,d)}))):(v=n,b=o,y=new x(P,null),C(t).forEach((function(e){return null==y?void 0:y.addWidget(e,d)}))),{widgetRegistry:y,actionProv:v,messagePars:b,configurationError:g,invalidPropsError:f,state:w,setState:P,messageContainerRef:k,ActionProvider:M,MessageParser:j}};var R=function(){return R=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},R.apply(this,arguments)};const B=function(e){var t=e.actionProvider,r=e.messageParser,n=e.config,o=e.headerText,s=e.placeholderText,c=e.saveMessages,l=e.messageHistory,u=e.runInitialMessagesWithHistory,m=e.disableScrollToBottom,d=e.validator,g=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["actionProvider","messageParser","config","headerText","placeholderText","saveMessages","messageHistory","runInitialMessagesWithHistory","disableScrollToBottom","validator"]),f=H(R({config:n,actionProvider:t,messageParser:r,messageHistory:l,saveMessages:c,runInitialMessagesWithHistory:u},g)),h=f.configurationError,p=f.invalidPropsError,v=f.ActionProvider,y=f.MessageParser,b=f.widgetRegistry,E=f.messageContainerRef,w=f.actionProv,P=f.messagePars,S=f.state,O=f.setState;if(h)return a().createElement(M,{message:h});if(p.length)return a().createElement(M,{message:p});var C=function(e){return e.customStyles?e.customStyles:{}}(n),j=function(e){return e.customComponents?e.customComponents:{}}(n),x=function(e){return e.botName?e.botName:"Bot"}(n),T=function(e){return e.customMessages?e.customMessages:{}}(n);return N(v)&&N(y)?a().createElement(k,{state:S,setState:O,widgetRegistry:b,actionProvider:w,messageParser:P,customMessages:T,customComponents:R({},j),botName:x,customStyles:R({},C),headerText:o,placeholderText:s,validator:d,messageHistory:l,disableScrollToBottom:m,messageContainerRef:E}):a().createElement(v,{state:S,setState:O,createChatBotMessage:i},a().createElement(y,null,a().createElement(k,{state:S,setState:O,widgetRegistry:b,actionProvider:v,messageParser:y,customMessages:T,customComponents:R({},j),botName:x,customStyles:R({},C),headerText:o,placeholderText:s,validator:d,messageHistory:l,disableScrollToBottom:m,messageContainerRef:E})))},I=B;module.exports=t})();