"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6803],{"../../node_modules/vidstack/node_modules/lit-html/async-directive.js":(t,e,s)=>{s.d(e,{Kq:()=>c,OA:()=>n.OA,u$:()=>n.u$});var i=s("../../node_modules/vidstack/node_modules/lit-html/directive-helpers.js"),n=s("../../node_modules/vidstack/node_modules/lit-html/directive.js"),o=(t,e)=>{var s,i=t._$AN;if(void 0===i)return!1;for(var n of i)null===(s=n._$AO)||void 0===s||s.call(n,e,!1),o(n,e);return!0},l=t=>{var e,s;do{if(void 0===(e=t._$AM))break;(s=e._$AN).delete(t),t=e}while(0===(null==s?void 0:s.size))},a=t=>{for(var e;e=t._$AM;t=e){var s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),u(e)}};function r(t){void 0!==this._$AN?(l(this),this._$AM=t,a(this)):this._$AM=t}function d(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size){if(e){if(Array.isArray(i))for(var a=s;a<i.length;a++)o(i[a],!1),l(i[a]);else null!=i&&(o(i,!1),l(i))}else o(this,t)}}var u=t=>{var e,s;t.type==n.OA.CHILD&&(null!==(e=t._$AP)&&void 0!==e||(t._$AP=d),null!==(s=t._$AQ)&&void 0!==s||(t._$AQ=r))};class c extends n.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),a(this),this.isConnected=t._$AU}_$AO(t){var e,s,i=!(arguments.length>1)||void 0===arguments[1]||arguments[1];t!==this.isConnected&&(this.isConnected=t,t?null===(e=this.reconnected)||void 0===e||e.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),i&&(o(this,t),l(this))}setValue(t){if((0,i.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{var e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}},"../../node_modules/vidstack/node_modules/lit-html/directive-helpers.js":(t,e,s)=>{s.d(e,{Rt:()=>n,mY:()=>l});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var{I:i}=s("../../node_modules/vidstack/node_modules/lit-html/lit-html.js").ge,n=t=>void 0===t.strings,o={},l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;return t._$AH=e}},"../../node_modules/vidstack/node_modules/lit-html/directive.js":(t,e,s)=>{s.d(e,{OA:()=>i,WL:()=>o,u$:()=>n});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=t=>function(){for(var e=arguments.length,s=Array(e),i=0;i<e;i++)s[i]=arguments[i];return{_$litDirective$:t,values:s}};class o{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"../../node_modules/vidstack/node_modules/lit-html/directives/if-defined.js":(t,e,s)=>{s.d(e,{J:()=>n});var i=s("../../node_modules/vidstack/node_modules/lit-html/lit-html.js"),n=t=>null!=t?t:i.s6},"../../node_modules/vidstack/node_modules/lit-html/directives/unsafe-html.js":(t,e,s)=>{s.d(e,{D:()=>o,_:()=>l});var i=s("../../node_modules/vidstack/node_modules/lit-html/lit-html.js"),n=s("../../node_modules/vidstack/node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class o extends n.WL{constructor(t){if(super(t),this.et=i.s6,t.type!==n.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===i.s6||null==t)return this.ft=void 0,this.et=t;if(t===i.c0)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;var e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}o.directiveName="unsafeHTML",o.resultType=1;var l=(0,n.u$)(o)},"../../node_modules/vidstack/node_modules/lit-html/directives/unsafe-svg.js":(t,e,s)=>{s.d(e,{T:()=>l});var i=s("../../node_modules/vidstack/node_modules/lit-html/directive.js"),n=s("../../node_modules/vidstack/node_modules/lit-html/directives/unsafe-html.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class o extends n.D{}o.directiveName="unsafeSVG",o.resultType=2;var l=(0,i.u$)(o)},"../../node_modules/vidstack/node_modules/lit-html/lit-html.js":(t,e,s)=>{s.d(e,{XX:()=>G,c0:()=>C,ge:()=>L,qy:()=>w,s6:()=>q});var i,n=window,o=n.trustedTypes,l=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,a="$lit$",r="lit$".concat((Math.random()+"").slice(9),"$"),d="?"+r,u="<".concat(d,">"),c=document,p=()=>c.createComment(""),m=t=>null===t||"object"!=typeof t&&"function"!=typeof t,v=Array.isArray,h=t=>v(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),$="[ 	\n\f\r]",g=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,f=/-->/g,b=/>/g,y=RegExp(">|".concat($,"(?:([^\\s\"'>=/]+)(").concat($,"*=").concat($,"*(?:[^ 	\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),x=/'/g,_=/"/g,A=/^(?:script|style|textarea|title)$/i,k=t=>function(e){for(var s=arguments.length,i=Array(s>1?s-1:0),n=1;n<s;n++)i[n-1]=arguments[n];return{_$litType$:t,strings:e,values:i}},w=k(1),C=(k(2),Symbol.for("lit-noChange")),q=Symbol.for("lit-nothing"),Z=new WeakMap,S=c.createTreeWalker(c,129,null,!1);function M(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==l?l.createHTML(e):e}var T=(t,e)=>{for(var s,i=t.length-1,n=[],o=2===e?"<svg>":"",l=g,d=0;d<i;d++){for(var c=t[d],p=void 0,m=void 0,v=-1,h=0;h<c.length&&(l.lastIndex=h,null!==(m=l.exec(c)));)h=l.lastIndex,l===g?"!--"===m[1]?l=f:void 0!==m[1]?l=b:void 0!==m[2]?(A.test(m[2])&&(s=RegExp("</"+m[2],"g")),l=y):void 0!==m[3]&&(l=y):l===y?">"===m[0]?(l=null!=s?s:g,v=-1):void 0===m[1]?v=-2:(v=l.lastIndex-m[2].length,p=m[1],l=void 0===m[3]?y:'"'===m[3]?_:x):l===_||l===x?l=y:l===f||l===b?l=g:(l=y,s=void 0);var $=l===y&&t[d+1].startsWith("/>")?" ":"";o+=l===g?c+u:v>=0?(n.push(p),c.slice(0,v)+a+c.slice(v)+r+$):c+r+(-2===v?(n.push(void 0),d):$)}return[M(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),n]};class W{constructor(t,e){var s,{strings:i,_$litType$:n}=t;this.parts=[];var l=0,u=0,c=i.length-1,m=this.parts,[v,h]=T(i,n);if(this.el=W.createElement(v,e),S.currentNode=this.el.content,2===n){var $=this.el.content,g=$.firstChild;g.remove(),$.append(...g.childNodes)}for(;null!==(s=S.nextNode())&&m.length<c;){if(1===s.nodeType){if(s.hasAttributes()){var f=[];for(var b of s.getAttributeNames())if(b.endsWith(a)||b.startsWith(r)){var y=h[u++];if(f.push(b),void 0!==y){var x=s.getAttribute(y.toLowerCase()+a).split(r),_=/([.?@])?(.*)/.exec(y);m.push({type:1,index:l,name:_[2],strings:x,ctor:"."===_[1]?N:"?"===_[1]?B:"@"===_[1]?P:j})}else m.push({type:6,index:l})}for(var k of f)s.removeAttribute(k)}if(A.test(s.tagName)){var w=s.textContent.split(r),C=w.length-1;if(C>0){s.textContent=o?o.emptyScript:"";for(var q=0;q<C;q++)s.append(w[q],p()),S.nextNode(),m.push({type:2,index:++l});s.append(w[C],p())}}}else if(8===s.nodeType){if(s.data===d)m.push({type:2,index:l});else for(var Z=-1;-1!==(Z=s.data.indexOf(r,Z+1));)m.push({type:7,index:l}),Z+=r.length-1}l++}}static createElement(t,e){var s=c.createElement("template");return s.innerHTML=t,s}}function O(t,e){var s,i,n,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,l=arguments.length>3?arguments[3]:void 0;if(e===C)return e;var a=void 0!==l?null===(s=o._$Co)||void 0===s?void 0:s[l]:o._$Cl,r=m(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==r&&(null===(i=null==a?void 0:a._$AO)||void 0===i||i.call(a,!1),void 0===r?a=void 0:(a=new r(t))._$AT(t,o,l),void 0!==l?(null!==(n=o._$Co)&&void 0!==n?n:o._$Co=[])[l]=a:o._$Cl=a),void 0!==a&&(e=O(t,a._$AS(t,e.values),a,l)),e}class I{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e,{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:c).importNode(s,!0);S.currentNode=n;for(var o=S.nextNode(),l=0,a=0,r=i[0];void 0!==r;){if(l===r.index){var d=void 0;2===r.type?d=new E(o,o.nextSibling,this,t):1===r.type?d=new r.ctor(o,r.name,r.strings,this,t):6===r.type&&(d=new V(o,this,t)),this._$AV.push(d),r=i[++a]}l!==(null==r?void 0:r.index)&&(o=S.nextNode(),l++)}return S.currentNode=c,n}v(t){var e=0;for(var s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class E{constructor(t,e,s,i){var n;this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){var t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;m(t=O(this,t,e))?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==C&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):h(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==q&&m(this._$AH)?this._$AA.nextSibling.data=t:this.$(c.createTextNode(t)),this._$AH=t}g(t){var e,{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=W.createElement(M(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(s);else{var o=new I(n,this),l=o.u(this.options);o.v(s),this.$(l),this._$AH=o}}_$AC(t){var e=Z.get(t.strings);return void 0===e&&Z.set(t.strings,e=new W(t)),e}T(t){v(this._$AH)||(this._$AH=[],this._$AR());var e,s=this._$AH,i=0;for(var n of t)i===s.length?s.push(e=new E(this.k(p()),this.k(p()),this,this.options)):e=s[i],e._$AI(n),i++;i<s.length&&(this._$AR(e&&e._$AB.nextSibling,i),s.length=i)}_$AR(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,s=arguments.length>1?arguments[1]:void 0;for(null===(t=this._$AP)||void 0===t||t.call(this,!1,!0,s);e&&e!==this._$AB;){var i=e.nextSibling;e.remove(),e=i}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class j{constructor(t,e,s,i,n){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,n=this.strings,o=!1;if(void 0===n)(o=!m(t=O(this,t,e,0))||t!==this._$AH&&t!==C)&&(this._$AH=t);else{var l,a,r=t;for(t=n[0],l=0;l<n.length-1;l++)(a=O(this,r[s+l],e,l))===C&&(a=this._$AH[l]),o||(o=!m(a)||a!==this._$AH[l]),a===q?t=q:t!==q&&(t+=(null!=a?a:"")+n[l+1]),this._$AH[l]=a}o&&!i&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class N extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}var H=o?o.emptyScript:"";class B extends j{constructor(){super(...arguments),this.type=4}j(t){t&&t!==q?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name)}}class P extends j{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t){var e,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;if((t=null!==(e=O(this,t,s,0))&&void 0!==e?e:q)!==C){var i=this._$AH,n=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==q&&(i===q||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class V{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}var L={O:a,P:r,A:d,C:1,M:T,L:I,R:h,D:O,I:E,V:j,H:B,N:P,U:N,F:V},D=n.litHtmlPolyfillSupport;null==D||D(W,E),(null!==(i=n.litHtmlVersions)&&void 0!==i?i:n.litHtmlVersions=[]).push("2.8.0");var G=(t,e,s)=>{var i,n,o=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e,l=o._$litPart$;if(void 0===l){var a=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=l=new E(e.insertBefore(p(),a),a,void 0,null!=s?s:{})}return l._$AI(t),l}},"../../node_modules/vidstack/prod/chunks/vidstack-7xep0lg7.js":(t,e,s)=>{s.d(e,{In:()=>h,UT:()=>g,kj:()=>v,xZ:()=>u});var i=s("../../node_modules/vidstack/prod/chunks/vidstack-CRlI3Mh7.js"),n=s("../../node_modules/vidstack/node_modules/lit-html/lit-html.js"),o=s("../../node_modules/vidstack/node_modules/lit-html/directives/if-defined.js"),l=s("../../node_modules/vidstack/node_modules/lit-html/directives/unsafe-svg.js"),a=s("../../node_modules/vidstack/node_modules/lit-html/async-directive.js"),r=s("../../node_modules/vidstack/prod/chunks/vidstack-Cpte_fRf.js");class d extends a.Kq{#t=null;#e=!1;#s=null;constructor(t){super(t),this.#e=t.type===a.OA.ATTRIBUTE||t.type===a.OA.BOOLEAN_ATTRIBUTE}render(t){return t!==this.#t&&(this.disconnected(),this.#t=t,this.isConnected&&this.#i()),this.#t?this.#n((0,i.se)(this.#t)):n.s6}reconnected(){this.#i()}disconnected(){this.#s?.(),this.#s=null}#i(){this.#t&&(this.#s=(0,i.QZ)(this.#o.bind(this)))}#n(t){return this.#e?(0,o.J)(t):t}#l(t){this.setValue(this.#n(t))}#o(){this.#l(this.#t?.())}}function u(t){return(0,a.u$)(d)((0,i.EW)(t))}class c{#a;#r;elements=new Set;constructor(t,e){this.#a=t,this.#r=e}connect(){this.#d();let t=new MutationObserver(this.#u);for(let e of this.#a)t.observe(e,{childList:!0,subtree:!0});(0,i.zp)(()=>t.disconnect()),(0,i.zp)(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,e){(0,i.vA)(t)?(e.textContent="",e.append(t)):((0,n.XX)(null,e),(0,n.XX)(t,e)),e.style.display||(e.style.display="contents");let s=e.firstElementChild;if(!s)return;let o=e.getAttribute("data-class");o&&s.classList.add(...o.split(" "))}#u=(0,i.s_)(this.#d.bind(this));#d(t){if(t&&!t.some(t=>t.addedNodes.length))return;let e=!1;for(let t of this.#a.flatMap(t=>[...t.querySelectorAll("slot")]))!t.hasAttribute("name")||this.elements.has(t)||(this.elements.add(t),e=!0);e&&this.#r(this.elements)}}let p=0,m="data-slot-id";class v{#a;slots;constructor(t){this.#a=t,this.slots=new c(t,this.#d.bind(this))}connect(){this.slots.connect(),this.#d();let t=new MutationObserver(this.#u);for(let e of this.#a)t.observe(e,{childList:!0});(0,i.zp)(()=>t.disconnect())}#u=(0,i.s_)(this.#d.bind(this));#d(){for(let t of this.#a)for(let e of t.children){if(1!==e.nodeType)continue;let t=e.getAttribute("slot");if(!t)continue;e.style.display="none";let s=e.getAttribute(m);for(let i of(s||e.setAttribute(m,s=++p+""),this.slots.elements)){if(i.getAttribute("name")!==t||i.getAttribute(m)===s)continue;let n=document.importNode(e,!0);t.includes("-icon")&&n.classList.add("vds-icon"),n.style.display="",n.removeAttribute("slot"),this.slots.assign(n,i),i.setAttribute(m,s)}}}}function h({name:t,class:e,state:s,paths:a,viewBox:r="0 0 32 32"}){return(0,n.qy)`<svg
    class="${"vds-icon"+(e?` ${e}`:"")}"
    viewBox="${r}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${(0,o.J)(t??s)}
  >
    ${(0,i.Kg)(a)?(0,l.T)(a):u(a)}
  </svg>`}class ${#c={};#p=!1;slots;constructor(t){this.slots=new c(t,this.#m.bind(this))}connect(){this.slots.connect()}load(){this.loadIcons().then(t=>{this.#c=t,this.#p=!0,this.#m()})}*#v(){for(let t of Object.keys(this.#c)){let e=`${t}-icon`;for(let s of this.slots.elements)s.name===e&&(yield{icon:this.#c[t],slot:s})}}#m(){if(this.#p)for(let{icon:t,slot:e}of this.#v())this.slots.assign(t,e)}}class g extends ${connect(){super.connect();let{player:t}=(0,r.$c)();if(!t.el)return;let e,s=new IntersectionObserver(t=>{t[0]?.isIntersecting&&(e?.(),e=void 0,this.load())});s.observe(t.el),e=(0,i.zp)(()=>s.disconnect())}}},"../../node_modules/vidstack/prod/chunks/vidstack-BOTZD4tC.js":(t,e,s)=>{function i(t,e){return[...t].sort(e?o:n)}function n(t,e){return t.height===e.height?(t.bitrate??0)-(e.bitrate??0):t.height-e.height}function o(t,e){return e.height===t.height?(e.bitrate??0)-(t.bitrate??0):e.height-t.height}function l(t){return()=>t()?"true":"false"}s.d(e,{F:()=>i,M:()=>l})},"../../node_modules/vidstack/prod/chunks/vidstack-CwTj4H1w.js":(t,e,s)=>{s.d(e,{W:()=>n});var i=s("../../node_modules/vidstack/node_modules/lit-html/lit-html.js");class n extends HTMLElement{rootPart=null;connectedCallback(){this.rootPart=(0,i.XX)(this.render(),this,{renderBefore:this.firstChild}),this.rootPart.setConnected(!0)}disconnectedCallback(){this.rootPart?.setConnected(!1),this.rootPart=null,(0,i.XX)(null,this)}}},"../../node_modules/vidstack/prod/define/vidstack-player-default-layout.js":(t,e,s)=>{var i=s("../../node_modules/vidstack/prod/chunks/vidstack-CRlI3Mh7.js"),n=s("../../node_modules/vidstack/prod/chunks/vidstack-Cpte_fRf.js"),o=s("../../node_modules/vidstack/prod/chunks/vidstack-Ds_q5BGO.js"),l=s("../../node_modules/vidstack/node_modules/lit-html/lit-html.js"),a=s("../../node_modules/vidstack/prod/chunks/vidstack-7xep0lg7.js"),r=s("../../node_modules/vidstack/prod/chunks/vidstack-DE4XvkHU.js"),d=s("../../node_modules/vidstack/prod/chunks/vidstack-BOTZD4tC.js"),u=s("../../node_modules/vidstack/node_modules/lit-html/directives/if-defined.js"),c=s("../../node_modules/vidstack/node_modules/lit-html/async-directive.js"),p=s("../../node_modules/vidstack/node_modules/lit-html/directive.js"),m=new WeakMap,v=(0,p.u$)(class extends c.Kq{render(t){return l.s6}update(t,e){var s,[i]=e,n=i!==this.G;return n&&void 0!==this.G&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=i,this.dt=null===(s=t.options)||void 0===s?void 0:s.host,this.ot(this.lt=t.element)),l.s6}ot(t){var e;if("function"==typeof this.G){var s=null!==(e=this.dt)&&void 0!==e?e:globalThis,i=m.get(s);void 0===i&&(i=new WeakMap,m.set(s,i)),void 0!==i.get(this.G)&&this.G.call(this.dt,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.dt,t)}else this.G.value=t}get rt(){var t,e,s;return"function"==typeof this.G?null===(e=m.get(null!==(t=this.dt)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.G):null===(s=this.G)||void 0===s?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),h=s("../../node_modules/vidstack/prod/chunks/vidstack-vDnjyKV8.js");let $=(0,i.q6)();function g(){return(0,i.NT)($)}let f={colorScheme:"system",download:null,customIcons:!1,disableTimeSlider:!1,menuContainer:null,menuGroup:"bottom",noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1};class b extends i.uA{static props=f;#h;#$=(0,i.EW)(()=>{let t=this.$props.when();return this.#g(t)});#f=(0,i.EW)(()=>{let t=this.$props.smallWhen();return this.#g(t)});get isMatch(){return this.#$()}get isSmallLayout(){return this.#f()}onSetup(){this.#h=(0,n.$c)(),this.setAttributes({"data-match":this.#$,"data-sm":()=>this.#f()?"":null,"data-lg":()=>this.#f()?null:"","data-size":()=>this.#f()?"sm":"lg","data-no-scrub-gesture":this.$props.noScrubGesture}),(0,i.Pp)($,{...this.$props,when:this.#$,smallWhen:this.#f,userPrefersAnnouncements:(0,i.O)(!0),userPrefersKeyboardAnimations:(0,i.O)(!0),menuPortal:(0,i.O)(null)})}onAttach(t){(0,o.GU)(t,this.$props.colorScheme)}#g(t){return"never"!==t&&((0,i.Lm)(t)?t:(0,i.EW)(()=>t(this.#h.player.state))())}}let y=b.prototype;function x(t,e){(0,i.QZ)(()=>{let{player:s}=(0,n.$c)(),o=s.el;return o&&(0,i.Bq)(o,"data-layout",e()&&t),()=>o?.removeAttribute("data-layout")})}function _(t,e){return t()?.[e]??e}function A(){return(0,a.xZ)(()=>{let{translations:t,userPrefersAnnouncements:e}=g();return e()?(0,l.qy)`<media-announcer .translations=${(0,a.xZ)(t)}></media-announcer>`:null})}function k(t,e=""){return(0,l.qy)`<slot
    name=${`${t}-icon`}
    data-class=${`vds-icon vds-${t}-icon${e?` ${e}`:""}`}
  ></slot>`}function w(t){return t.map(t=>k(t))}function C(t,e){return(0,a.xZ)(()=>_(t,e))}function q({tooltip:t}){let{translations:e}=g(),{remotePlaybackState:s}=(0,n.nV)(),o=(0,a.xZ)(()=>{let t=_(e,"AirPlay"),n=(0,i.Fb)(s());return`${t} ${n}`}),r=C(e,"AirPlay");return(0,l.qy)`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${o}>
          ${k("airplay")}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-airplay-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Z({tooltip:t}){let{translations:e}=g(),{remotePlaybackState:s}=(0,n.nV)(),o=(0,a.xZ)(()=>{let t=_(e,"Google Cast"),n=(0,i.Fb)(s());return`${t} ${n}`}),r=C(e,"Google Cast");return(0,l.qy)`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${o}>
          ${k("google-cast")}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-google-cast-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function S({tooltip:t}){let{translations:e}=g(),s=C(e,"Play"),i=C(e,"Pause");return(0,l.qy)`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${C(e,"Play")}
        >
          ${w(["play","pause","replay"])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-play-tooltip-text">${s}</span>
        <span class="vds-pause-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function M({tooltip:t,ref:e=i.lQ}){let{translations:s}=g(),n=C(s,"Mute"),o=C(s,"Unmute");return(0,l.qy)`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${C(s,"Mute")}
          ${v(e)}
        >
          ${w(["mute","volume-low","volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-mute-tooltip-text">${o}</span>
        <span class="vds-unmute-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function T({tooltip:t}){let{translations:e}=g(),s=C(e,"Closed-Captions On"),i=C(e,"Closed-Captions Off");return(0,l.qy)`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${C(e,"Captions")}
        >
          ${w(["cc-on","cc-off"])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-cc-on-tooltip-text">${i}</span>
        <span class="vds-cc-off-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function W({tooltip:t}){let{translations:e}=g(),s=C(e,"Enter Fullscreen"),i=C(e,"Exit Fullscreen");return(0,l.qy)`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${C(e,"Fullscreen")}
        >
          ${w(["fs-enter","fs-exit"])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-fs-enter-tooltip-text">${s}</span>
        <span class="vds-fs-exit-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function O({backward:t,tooltip:e}){let{translations:s,seekStep:i}=g(),n=t?"Seek Backward":"Seek Forward",o=C(s,n);return(0,l.qy)`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${(0,a.xZ)(()=>(t?-1:1)*i())}
          aria-label=${o}
        >
          ${t?k("seek-backward"):k("seek-forward")}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        ${C(s,n)}
      </media-tooltip-content>
    </media-tooltip>
  `}function I(){let{translations:t}=g(),{live:e}=(0,n.nV)(),s=C(t,"Skip To Live"),i=C(t,"LIVE");return e()?(0,l.qy)`
        <media-live-button class="vds-live-button" aria-label=${s}>
          <span class="vds-live-button-text">${i}</span>
        </media-live-button>
      `:null}function E(){return(0,a.xZ)(()=>{let{download:t,translations:e}=g(),s=t();if((0,i.gD)(s))return null;let{source:o,title:a}=(0,n.nV)(),r=o(),d=(0,h.d_)({title:a(),src:r,download:s});return d?(0,l.qy)`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${C(e,"Download")}
                href=${d.url+`?download=${d.name}`}
                download=${d.name}
                target="_blank"
              >
                <slot name="download-icon" data-class="vds-icon" />
              </a>
            </media-tooltip-trigger>
            <media-tooltip-content class="vds-tooltip-content" placement="top">
              ${C(e,"Download")}
            </media-tooltip-content>
          </media-tooltip>
        `:null})}function j(){let{translations:t}=g();return(0,l.qy)`
    <media-captions
      class="vds-captions"
      .exampleText=${C(t,"Captions look like this")}
    ></media-captions>
  `}function N(){return(0,l.qy)`<div class="vds-controls-spacer"></div>`}function H(t,e){return(0,l.qy)`
    <media-menu-portal .container=${(0,a.xZ)(t)} disabled="fullscreen">
      ${e}
    </media-menu-portal>
  `}function B(t,e,s,l){let a=(0,i.Kg)(e)?document.querySelector(e):e;a||(a=t?.closest("dialog")),a||(a=document.body);let r=document.createElement("div");r.style.display="contents",r.classList.add(s),a.append(r),(0,i.QZ)(()=>{if(!r)return;let{viewType:t}=(0,n.nV)(),e=l();(0,i.Bq)(r,"data-view-type",t()),(0,i.Bq)(r,"data-sm",e),(0,i.Bq)(r,"data-lg",!e),(0,i.Bq)(r,"data-size",e?"sm":"lg")});let{colorScheme:d}=g();return(0,o.GU)(r,d),r}function P({placement:t,tooltip:e,portal:s}){let{textTracks:o}=(0,n.$c)(),{viewType:d,clipStartTime:u,clipEndTime:c}=(0,n.nV)(),{translations:p,thumbnails:m,menuPortal:v,noModal:h,menuGroup:$,smallWhen:f}=g();if((0,i.EW)(()=>{let t=u(),e=c()||1/0,s=(0,i.O)(null);(0,r.q)(o,"chapters",s.set);let n=s()?.cues.filter(s=>s.startTime<=e&&s.endTime>=t);return!n?.length})())return null;let b=(0,i.EW)(()=>h()?(0,i.oA)(t):f()?null:(0,i.oA)(t)),y=(0,i.EW)(()=>f()||"bottom"!==$()||"video"!==d()?0:26),x=(0,i.O)(!1),_=(0,l.qy)`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${(0,a.xZ)(b)}
      offset=${(0,a.xZ)(y)}
    >
      ${(0,a.xZ)(()=>x()?(0,l.qy)`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${(0,a.xZ)(m)}
          >
            <template>
              <media-radio class="vds-chapter-radio vds-radio">
                <media-thumbnail class="vds-thumbnail"></media-thumbnail>
                <div class="vds-chapter-radio-content">
                  <span class="vds-chapter-radio-label" data-part="label"></span>
                  <span class="vds-chapter-radio-start-time" data-part="start-time"></span>
                  <span class="vds-chapter-radio-duration" data-part="duration"></span>
                </div>
              </media-radio>
            </template>
          </media-chapters-radio-group>
        `:null)}
    </media-menu-items>
  `;return(0,l.qy)`
    <media-menu class="vds-chapters-menu vds-menu" @open=${function(){x.set(!0)}} @close=${function(){x.set(!1)}}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${C(p,"Chapters")}
          >
            ${k("menu-chapters")}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${(0,i.Tn)(e)?(0,a.xZ)(e):e}
        >
          ${C(p,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${s?H(v,_):_}
    </media-menu>
  `}function V(t){let{style:e}=new Option;return e.color=t,e.color.match(/\((.*?)\)/)[1].replace(/,/g," ")}(0,i._w)(y,"isMatch"),(0,i._w)(y,"isSmallLayout");let L={type:"color"},D={type:"radio",values:{"Monospaced Serif":"mono-serif","Proportional Serif":"pro-serif","Monospaced Sans-Serif":"mono-sans","Proportional Sans-Serif":"pro-sans",Casual:"casual",Cursive:"cursive","Small Capitals":"capitals"}},G={type:"radio",values:["None","Drop Shadow","Raised","Depressed","Outline"]},R={fontFamily:"pro-sans",fontSize:"100%",textColor:"#ffffff",textOpacity:"100%",textShadow:"none",textBg:"#000000",textBgOpacity:"100%",displayBg:"#000000",displayBgOpacity:"0%"},U=Object.keys(R).reduce((t,e)=>({...t,[e]:(0,i.O)(R[e])}),{});for(let t of Object.keys(U)){let e=localStorage.getItem(`vds-player:${(0,i.BW)(t)}`);(0,i.Kg)(e)&&U[t].set(e)}function K(){for(let t of Object.keys(U)){let e=R[t];U[t].set(e)}}let Q=!1,z=new Set,F=0;function X({label:t="",value:e="",children:s}){if(!t)return(0,l.qy)`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${s}</div>
      </div>
    `;let i=`vds-menu-section-${++F}`;return(0,l.qy)`
    <section class="vds-menu-section" role="group" aria-labelledby=${i}>
      <div class="vds-menu-section-title">
        <header id=${i}>${t}</header>
        ${e?(0,l.qy)`<div class="vds-menu-section-value">${e}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${s}</div>
    </section>
  `}function Y({label:t,children:e}){return(0,l.qy)`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${t}</div>
      ${e}
    </div>
  `}function J({label:t,icon:e,hint:s}){return(0,l.qy)`
    <media-menu-button class="vds-menu-item">
      ${k("menu-arrow-left","vds-menu-close-icon")}
      ${e?k(e,"vds-menu-item-icon"):null}
      <span class="vds-menu-item-label">${(0,a.xZ)(t)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${s?(0,a.xZ)(s):null} </span>
      ${k("menu-arrow-right","vds-menu-open-icon")}
    </media-menu-button>
  `}function tt(){return(0,l.qy)`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function te(){return(0,l.qy)`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function ts({label:t=null,value:e=null,upIcon:s="",downIcon:i="",children:n,isMin:o,isMax:r}){let d=t||e,u=[i?k(i,"down"):null,n,s?k(s,"up"):null];return(0,l.qy)`
    <div
      class=${`vds-menu-item vds-menu-slider-item${d?" group":""}`}
      data-min=${(0,a.xZ)(()=>o()?"":null)}
      data-max=${(0,a.xZ)(()=>r()?"":null)}
    >
      ${d?(0,l.qy)`
            <div class="vds-menu-slider-title">
              ${[t?(0,l.qy)`<div>${t}</div>`:null,e?(0,l.qy)`<div>${e}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${u}</div>
          `:u}
    </div>
  `}let ti={type:"slider",min:0,max:400,step:25,upIcon:null,downIcon:null,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"},tn={type:"slider",min:0,max:100,step:5,upIcon:null,downIcon:null,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"};function to({label:t,option:e,type:s}){var o;let{player:r}=(0,n.$c)(),{translations:d}=g(),u=U[s],c=()=>_(d,t);function p(){(0,i.io)(),r.dispatchEvent(new Event("vds-font-change"))}if("color"===e.type)return Y({label:(0,a.xZ)(c),children:(0,l.qy)`
        <input
          class="vds-color-picker"
          type="color"
          .value=${(0,a.xZ)(u)}
          @input=${function(t){u.set(t.target.value),p()}}
        />
      `});if("slider"===e.type){let t=function(t){u.set(t.detail+"%"),p()},{min:s,max:i,step:n,upIcon:o,downIcon:r}=e;return ts({label:(0,a.xZ)(c),value:(0,a.xZ)(u),upIcon:o,downIcon:r,isMin:()=>u()===s+"%",isMax:()=>u()===i+"%",children:(0,l.qy)`
        <media-slider
          class="vds-slider"
          min=${s}
          max=${i}
          step=${n}
          key-step=${n}
          .value=${(0,a.xZ)(()=>parseInt(u()))}
          aria-label=${(0,a.xZ)(c)}
          @value-change=${t}
          @drag-value-change=${t}
        >
          ${tt()}${te()}
        </media-slider>
      `})}let m=(o=e.values,(0,i.cy)(o)?o.map(t=>({label:t,value:t.toLowerCase()})):Object.keys(o).map(t=>({label:t,value:o[t]})));return(0,l.qy)`
    <media-menu class=${`vds-${(0,i.BW)(s)}-menu vds-menu`}>
      ${J({label:c,hint:()=>{let t=u(),e=m.find(e=>e.value===t)?.label||"";return _(d,(0,i.Kg)(e)?e:e())}})}
      <media-menu-items class="vds-menu-items">
        ${function({value:t=null,options:e,hideLabel:s=!1,children:n=null,onChange:o=null}){function r(t){let{value:e,label:o}=t;return(0,l.qy)`
      <media-radio class="vds-radio" value=${e}>
        ${k("menu-radio-check")}
        ${s?null:(0,l.qy)`
              <span class="vds-radio-label" data-part="label">
                ${(0,i.Kg)(o)?o:(0,a.xZ)(o)}
              </span>
            `}
        ${(0,i.Tn)(n)?n(t):n}
      </media-radio>
    `}return(0,l.qy)`
    <media-radio-group
      class="vds-radio-group"
      value=${(0,i.Kg)(t)?t:t?(0,a.xZ)(t):""}
      @change=${o}
    >
      ${(0,i.cy)(e)?e.map(r):(0,a.xZ)(()=>e().map(r))}
    </media-radio-group>
  `}({value:u,options:m,onChange({detail:t}){u.set(t),p()}})}
      </media-menu-items>
    </media-menu>
  `}function tl({label:t,checked:e,defaultChecked:s=!1,storageKey:n,onChange:o}){let{translations:r}=g(),u=n?localStorage.getItem(n):null,c=(0,i.O)(!!(u??s)),p=(0,i.O)(!1),m=(0,a.xZ)((0,d.M)(c)),v=C(r,t);function h(t){t?.button!==1&&(c.set(t=>!t),n&&localStorage.setItem(n,c()?"1":""),o(c(),t),p.set(!1))}return n&&o((0,i.se)(c)),e&&(0,i.QZ)(()=>void c.set(e())),(0,l.qy)`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${v}
      aria-checked=${m}
      data-active=${(0,a.xZ)(()=>p()?"":null)}
      @pointerup=${h}
      @pointerdown=${function(t){0===t.button&&p.set(!0)}}
      @keydown=${function(t){(0,i.SK)(t)&&h()}}
    ></div>
  `}function ta(){let{audioGains:t}=g(),e=t();return(0,i.cy)(e)?e[0]??0:e.min}function tr(){let{audioGains:t}=g(),e=t();return(0,i.cy)(e)?e[e.length-1]??300:e.max}function td(){let{audioGains:t}=g(),e=t();return(0,i.cy)(e)?e[1]-e[0]||25:e.step}function tu(){let{playbackRates:t}=g(),e=t();return(0,i.cy)(e)?e[0]??0:e.min}function tc(){let{playbackRates:t}=g(),e=t();return(0,i.cy)(e)?e[e.length-1]??2:e.max}function tp(){let{playbackRates:t}=g(),e=t();return(0,i.cy)(e)?e[1]-e[0]||.25:e.step}function tm({placement:t,portal:e,tooltip:s}){return(0,a.xZ)(()=>{let{viewType:o}=(0,n.nV)(),{translations:r,menuPortal:u,noModal:c,menuGroup:p,smallWhen:m}=g(),v=(0,i.EW)(()=>c()?(0,i.oA)(t):m()?null:(0,i.oA)(t)),h=(0,i.EW)(()=>m()||"bottom"!==p()||"video"!==o()?0:26),$=(0,i.O)(!1);!function(){let{player:t}=(0,n.$c)();z.add(t),(0,i.zp)(()=>z.delete(t)),Q||((0,i.P1)(()=>{for(let e of(0,i.YD)(U)){let s=U[e],n=R[e],o=`--media-user-${(0,i.BW)(e)}`,l=`vds-player:${(0,i.BW)(e)}`;(0,i.QZ)(()=>{let i=s(),a=i===n,r=a?null:function(t,e,s){switch(e){case"fontFamily":let i="capitals"===s?"small-caps":"";return t.el?.style.setProperty("--media-user-font-variant",i),function(t){switch(t){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}(s);case"fontSize":case"textOpacity":case"textBgOpacity":case"displayBgOpacity":return(parseInt(s)/100).toString();case"textColor":return`rgb(${V(s)} / var(--media-user-text-opacity, 1))`;case"textShadow":return function(t){switch(t){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}(s);case"textBg":return`rgb(${V(s)} / var(--media-user-text-bg-opacity, 1))`;case"displayBg":return`rgb(${V(s)} / var(--media-user-display-bg-opacity, 1))`}}(t,e,i);for(let t of z)t.el?.style.setProperty(o,r);a?localStorage.removeItem(l):localStorage.setItem(l,i)})}},null),Q=!0)}();let f=(0,l.qy)`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${(0,a.xZ)(v)}
        offset=${(0,a.xZ)(h)}
      >
        ${(0,a.xZ)(()=>$()?[(0,a.xZ)(()=>{let{translations:t}=g();return(0,l.qy)`
      <media-menu class="vds-playback-menu vds-menu">
        ${J({label:()=>_(t,"Playback"),icon:"menu-playback"})}
        <media-menu-items class="vds-menu-items">
          ${[X({children:function(){let{remote:t}=(0,n.$c)(),{translations:e}=g(),s="Loop";return Y({label:C(e,s),children:tl({label:s,storageKey:"vds-player::user-loop",onChange(e,s){t.userPrefersLoopChange(e,s)}})})}()}),(0,a.xZ)(()=>{let{translations:t}=g(),{canSetPlaybackRate:e,playbackRate:s}=(0,n.nV)();return e()?X({label:C(t,"Speed"),value:(0,a.xZ)(()=>1===s()?_(t,"Normal"):s()+"x"),children:[ts({upIcon:"menu-speed-up",downIcon:"menu-speed-down",children:function(){let{translations:t}=g(),e=C(t,"Speed");return(0,l.qy)`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${e}
      min=${(0,a.xZ)(tu)}
      max=${(0,a.xZ)(tc)}
      step=${(0,a.xZ)(tp)}
      key-step=${(0,a.xZ)(tp)}
    >
      ${tt()}${te()}
    </media-speed-slider>
  `}(),isMin:()=>s()===tu(),isMax:()=>s()===tc()})]}):null}),(0,a.xZ)(()=>{let{hideQualityBitrate:t,translations:e}=g(),{canSetQuality:s,qualities:o,quality:r}=(0,n.nV)(),u=(0,i.EW)(()=>!s()||o().length<=1),c=(0,i.EW)(()=>(0,d.F)(o()));return u()?null:X({label:C(e,"Quality"),value:(0,a.xZ)(()=>{let s=r()?.height,i=t()?null:r()?.bitrate,n=i&&i>0?`${(i/1e6).toFixed(2)} Mbps`:null,o=_(e,"Auto");return s?`${s}p${n?` (${n})`:""}`:o}),children:[ts({upIcon:"menu-quality-up",downIcon:"menu-quality-down",children:function(){let{translations:t}=g(),e=C(t,"Quality");return(0,l.qy)`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${e}>
      ${tt()}${te()}
    </media-quality-slider>
  `}(),isMin:()=>c()[0]===r(),isMax:()=>c().at(-1)===r()}),function(){let{remote:t,qualities:e}=(0,n.$c)(),{autoQuality:s,canSetQuality:o,qualities:l}=(0,n.nV)(),{translations:a}=g(),r="Auto";return(0,i.EW)(()=>!o()||l().length<=1)()?null:Y({label:C(a,r),children:tl({label:r,checked:s,onChange(s,i){s?t.requestAutoQuality(i):t.changeQuality(e.selectedIndex,i)}})})}()]})})]}
        </media-menu-items>
      </media-menu>
    `}),(0,a.xZ)(()=>{let{translations:t}=g();return(0,l.qy)`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${J({label:()=>_(t,"Accessibility"),icon:"menu-accessibility"})}
        <media-menu-items class="vds-menu-items">
          ${[X({children:[function(){let{userPrefersAnnouncements:t,translations:e}=g(),s="Announcements";return Y({label:C(e,s),children:tl({label:s,storageKey:"vds-player::announcements",onChange(e){t.set(e)}})})}(),(0,a.xZ)(()=>{let{translations:t,userPrefersKeyboardAnimations:e,noKeyboardAnimations:s}=g(),{viewType:o}=(0,n.nV)();if((0,i.EW)(()=>"video"!==o()||s())())return null;let l="Keyboard Animations";return Y({label:C(t,l),children:tl({label:l,defaultChecked:!0,storageKey:"vds-player::keyboard-animations",onChange(t){e.set(t)}})})})]}),X({children:[(0,a.xZ)(()=>{let{hasCaptions:t}=(0,n.nV)(),{translations:e}=g();return t()?(0,l.qy)`
      <media-menu class="vds-font-menu vds-menu">
        ${J({label:()=>_(e,"Caption Styles")})}
        <media-menu-items class="vds-menu-items">
          ${[X({label:C(e,"Font"),children:[to({label:"Family",option:D,type:"fontFamily"}),to({label:"Size",option:ti,type:"fontSize"})]}),X({label:C(e,"Text"),children:[to({label:"Color",option:L,type:"textColor"}),to({label:"Shadow",option:G,type:"textShadow"}),to({label:"Opacity",option:tn,type:"textOpacity"})]}),X({label:C(e,"Text Background"),children:[to({label:"Color",option:L,type:"textBg"}),to({label:"Opacity",option:tn,type:"textBgOpacity"})]}),X({label:C(e,"Display Background"),children:[to({label:"Color",option:L,type:"displayBg"}),to({label:"Opacity",option:tn,type:"displayBgOpacity"})]}),X({children:[function(){let{translations:t}=g();return(0,l.qy)`
    <button class="vds-menu-item" role="menuitem" @click=${K}>
      <span class="vds-menu-item-label">${(0,a.xZ)(()=>_(t,"Reset"))}</span>
    </button>
  `}()]})]}
        </media-menu-items>
      </media-menu>
    `:null})]})]}
        </media-menu-items>
      </media-menu>
    `}),(0,a.xZ)(()=>{let{noAudioGain:t,translations:e}=g(),{audioTracks:s,canSetAudioGain:o}=(0,n.nV)();return(0,i.EW)(()=>!(o()&&!t())&&s().length<=1)()?null:(0,l.qy)`
      <media-menu class="vds-audio-menu vds-menu">
        ${J({label:()=>_(e,"Audio"),icon:"menu-audio"})}
        <media-menu-items class="vds-menu-items">
          ${[(0,a.xZ)(()=>{let{translations:t}=g(),{audioTracks:e}=(0,n.nV)(),s=C(t,"Default");return(0,i.EW)(()=>e().length<=1)()?null:X({children:(0,l.qy)`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${J({label:()=>_(t,"Track")})}
          <media-menu-items class="vds-menu-items">
            <media-audio-radio-group
              class="vds-audio-track-radio-group vds-radio-group"
              empty-label=${s}
            >
              <template>
                <media-radio class="vds-audio-track-radio vds-radio">
                  <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                  <span class="vds-radio-label" data-part="label"></span>
                </media-radio>
              </template>
            </media-audio-radio-group>
          </media-menu-items>
        </media-menu>
      `})}),(0,a.xZ)(()=>{let{noAudioGain:t,translations:e}=g(),{canSetAudioGain:s}=(0,n.nV)();if((0,i.EW)(()=>!s()||t())())return null;let{audioGain:o}=(0,n.nV)();return X({label:C(e,"Boost"),value:(0,a.xZ)(()=>Math.round(((o()??1)-1)*100)+"%"),children:[ts({upIcon:"menu-audio-boost-up",downIcon:"menu-audio-boost-down",children:function(){let{translations:t}=g(),e=C(t,"Boost");return(0,l.qy)`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${e}
      min=${(0,a.xZ)(ta)}
      max=${(0,a.xZ)(tr)}
      step=${(0,a.xZ)(td)}
      key-step=${(0,a.xZ)(td)}
    >
      ${tt()}${te()}
    </media-audio-gain-slider>
  `}(),isMin:()=>((o()??1)-1)*100<=ta(),isMax:()=>((o()??1)-1)*100===tr()})]})})]}
        </media-menu-items>
      </media-menu>
    `}),(0,a.xZ)(()=>{let{translations:t}=g(),{hasCaptions:e}=(0,n.nV)(),s=C(t,"Off");return e()?(0,l.qy)`
      <media-menu class="vds-captions-menu vds-menu">
        ${J({label:()=>_(t,"Captions"),icon:"menu-captions"})}
        <media-menu-items class="vds-menu-items">
          <media-captions-radio-group
            class="vds-captions-radio-group vds-radio-group"
            off-label=${s}
          >
            <template>
              <media-radio class="vds-caption-radio vds-radio">
                <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                <span class="vds-radio-label" data-part="label"></span>
              </media-radio>
            </template>
          </media-captions-radio-group>
        </media-menu-items>
      </media-menu>
    `:null})]:null)}
      </media-menu-items>
    `;return(0,l.qy)`
      <media-menu class="vds-settings-menu vds-menu" @open=${function(){$.set(!0)}} @close=${function(){$.set(!1)}}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${C(r,"Settings")}
            >
              ${k("menu-settings","vds-rotate-icon")}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${(0,i.Tn)(s)?(0,a.xZ)(s):s}
          >
            ${C(r,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${e?H(u,f):f}
      </media-menu>
    `})}function tv({orientation:t,tooltip:e}){return(0,a.xZ)(()=>{let{pointer:s,muted:r,canSetVolume:d}=(0,n.nV)();if("coarse"===s()&&!r())return null;if(!d())return M({tooltip:e});let c=(0,i.O)(void 0),p=(0,o._T)(c);return(0,l.qy)`
      <div class="vds-volume" ?data-active=${(0,a.xZ)(p)} ${v(c.set)}>
        ${M({tooltip:e})}
        <div class="vds-volume-popup">${function({orientation:t}={}){let{translations:e}=g(),s=C(e,"Volume");return(0,l.qy)`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${s}
      orientation=${(0,u.J)(t)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}({orientation:t})}</div>
      </div>
    `})}function th(){let t=(0,i.O)(void 0),e=(0,i.O)(0),{thumbnails:s,translations:n,sliderChaptersMinWidth:r,disableTimeSlider:d,seekStep:u,noScrubGesture:c}=g(),p=C(n,"Seek"),m=(0,a.xZ)(d),h=(0,a.xZ)(()=>e()<r()),$=(0,a.xZ)(s);return(0,o.wY)(t,()=>{let s=t();s&&e.set(s.clientWidth)}),(0,l.qy)`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${p}
      key-step=${(0,a.xZ)(u)}
      ?disabled=${m}
      ?no-swipe-gesture=${(0,a.xZ)(c)}
      ${v(t.set)}
    >
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${h}>
        <template>
          <div class="vds-slider-chapter">
            <div class="vds-slider-track"></div>
            <div class="vds-slider-track-fill vds-slider-track"></div>
            <div class="vds-slider-progress vds-slider-track"></div>
          </div>
        </template>
      </media-slider-chapters>
      <div class="vds-slider-thumb"></div>
      <media-slider-preview class="vds-slider-preview">
        <media-slider-thumbnail
          class="vds-slider-thumbnail vds-thumbnail"
          .src=${$}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function t$(){return(0,a.xZ)(()=>{let{live:t}=(0,n.nV)();return t()?I():(0,l.qy)`
    <div class="vds-time-group">
      ${(0,a.xZ)(()=>{let{duration:t}=(0,n.nV)();return t()?[(0,l.qy)`<media-time class="vds-time" type="current"></media-time>`,(0,l.qy)`<div class="vds-time-divider">/</div>`,(0,l.qy)`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `})}function tg(){return(0,a.xZ)(()=>{let{textTracks:t}=(0,n.$c)(),{title:e,started:s}=(0,n.nV)(),o=(0,i.O)(null);return(0,r.q)(t,"chapters",o.set),o()&&(s()||!e())?tf():(0,l.qy)`<media-title class="vds-chapter-title"></media-title>`})}function tf(){return(0,l.qy)`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}class tb extends a.UT{async loadIcons(){let t=(await s.e(3303).then(s.bind(s,"../../node_modules/vidstack/prod/chunks/vidstack-H72EDyqs.js"))).icons,e={};for(let s of Object.keys(t))e[s]=(0,a.In)({name:s,paths:t[s]});return e}}var ty=s("../../node_modules/vidstack/prod/chunks/vidstack-CwTj4H1w.js");s("../../node_modules/vidstack/node_modules/lit-html/directives/unsafe-svg.js");let tx=class extends b{static props={...super.props,when:({viewType:t})=>"audio"===t,smallWhen:({width:t})=>t<576}};class t_ extends(0,i.xr)(ty.W,tx){static tagName="media-audio-layout";static attrs={smallWhen:{converter:t=>"never"!==t&&!!t}};#h;#b=(0,i.O)(!1);onSetup(){this.forwardKeepAlive=!1,this.#h=(0,n.$c)(),this.classList.add("vds-audio-layout"),this.#y()}onConnect(){x("audio",()=>this.isMatch),this.#x()}render(){return(0,a.xZ)(this.#_.bind(this))}#_(){return this.isMatch?[A(),j(),(0,l.qy)`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[O({backward:!0,tooltip:"top start"}),S({tooltip:"top"}),O({tooltip:"top"}),(0,a.xZ)(()=>{let t=(0,i.O)(void 0),e=(0,i.O)(!1),s=(0,n.$c)(),{title:r,started:d,currentTime:u,ended:c}=(0,n.nV)(),{translations:p}=g(),m=(0,o.ZG)(t),h=()=>d()||u()>0,$=()=>{let t=c()?"Replay":h()?"Continue":"Play";return`${_(p,t)}: ${r()}`};function f(){return(0,l.qy)`
        <span class="vds-title-text">
          ${(0,a.xZ)($)}${(0,a.xZ)(()=>h()?tf():null)}
        </span>
      `}return(0,i.QZ)(()=>{m()&&document.activeElement===document.body&&s.player.el?.focus({preventScroll:!0})}),(0,o.wY)(t,function(){let s=t(),n=!!s&&!m()&&s.clientWidth<s.children[0].clientWidth;s&&(0,i.p1)(s,"vds-marquee",n),e.set(n)}),r()?(0,l.qy)`
          <span class="vds-title" title=${(0,a.xZ)($)} ${v(t.set)}>
            ${[f(),(0,a.xZ)(()=>e()&&!m()?f():null)]}
          </span>
        `:N()}),th(),(0,a.xZ)(()=>{let{live:t,duration:e}=(0,n.nV)();return t()?I():e()?(0,l.qy)`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null}),tv({orientation:"vertical",tooltip:"top"}),T({tooltip:"top"}),E(),q({tooltip:"top"}),function(){let t="top end";return[P({tooltip:"top",placement:t,portal:!0}),tm({tooltip:"top end",placement:t,portal:!0})]}()]}
        </media-controls-group>
      </media-controls>
    `]:null}#x(){let{menuPortal:t}=g();(0,i.QZ)(()=>{if(!this.isMatch)return;let e=B(this,this.menuContainer,"vds-audio-layout",()=>this.isSmallLayout),s=e?[this,e]:[this];return(this.$props.customIcons()?new a.kj(s):new tb(s)).connect(),t.set(e),()=>{e.remove(),t.set(null)}})}#y(){let{pointer:t}=this.#h.$state;(0,i.QZ)(()=>{"coarse"===t()&&(0,i.QZ)(this.#A.bind(this))})}#A(){if(!this.#b()){(0,i.k6)(this,"pointerdown",this.#k.bind(this),{capture:!0});return}(0,i.k6)(this,"pointerdown",t=>t.stopPropagation()),(0,i.k6)(window,"pointerdown",this.#w.bind(this))}#k(t){let{target:e}=t;(0,o.sb)(e)&&e.closest(".vds-time-slider")&&(t.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),this.#b.set(!0))}#w(){this.#b.set(!1),this.removeAttribute("data-scrubbing")}}var tA=s("../../node_modules/vidstack/node_modules/lit-html/directive-helpers.js"),tk=(0,p.u$)(class extends p.WL{constructor(){super(...arguments),this.key=l.s6}render(t,e){return this.key=t,e}update(t,e){var[s,i]=e;return s!==this.key&&((0,tA.mY)(t),this.key=s),i}});class tw extends b{static props={...super.props,when:({viewType:t})=>"video"===t,smallWhen:({width:t,height:e})=>t<576||e<380}}function tC(){return(0,a.xZ)(()=>{let t=(0,n.$c)(),{noKeyboardAnimations:e,userPrefersKeyboardAnimations:s}=g();if((0,i.EW)(()=>e()||!s())())return null;let r=(0,i.O)(!1),{lastKeyboardAction:d}=t.$state;(0,i.QZ)(()=>{r.set(!!d());let t=setTimeout(()=>r.set(!1),500);return()=>{r.set(!1),window.clearTimeout(t)}});let u=(0,i.EW)(()=>{let t=d()?.action;return t&&r()?(0,i.BW)(t):null}),c=(0,i.EW)(()=>`vds-kb-action${r()?"":" hidden"}`),p=(0,i.EW)(tq),m=(0,i.EW)(()=>{let t=function(){let{$state:t}=(0,n.$c)();switch(t.lastKeyboardAction()?.action){case"togglePaused":return t.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return t.muted()||0===t.volume()?"kb-mute-icon":t.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${t.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${t.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return t.hasCaptions()?`kb-cc-${t.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}();return t?(0,o.TL)(t):null});return(0,l.qy)`
      <div class=${(0,a.xZ)(c)} data-action=${(0,a.xZ)(u)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${(0,a.xZ)(p)}</div>
        </div>
        ${(0,a.xZ)(()=>tk(d(),function(){let t=m();return t?(0,l.qy)`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${t}</div>
        </div>
      `:null}()))}
      </div>
    `})}function tq(){let{$state:t}=(0,n.$c)(),e=t.lastKeyboardAction()?.action,s=t.audioGain()??1;switch(e){case"toggleMuted":return t.muted()?"0%":tZ(t.volume(),s);case"volumeUp":case"volumeDown":return tZ(t.volume(),s);default:return""}}function tZ(t,e){return`${Math.round(t*e*100)}%`}function tS(){return(0,l.qy)`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function tM(){let{menuGroup:t,smallWhen:e}=g(),s=()=>"top"===t()||e()?"bottom":"top",n=(0,i.EW)(()=>`${s()} ${"top"===t()?"end":"center"}`),o=(0,i.EW)(()=>`${s()} end`);return[P({tooltip:n,placement:o,portal:!0}),tm({tooltip:n,placement:o,portal:!0})]}function tT(){return(0,a.xZ)(()=>{let{noGestures:t}=g();return t()?null:(0,l.qy)`
      <div class="vds-gestures">
        <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="pointerup"
          action="toggle:controls"
        ></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="dblpointerup"
          action="toggle:fullscreen"
        ></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
      </div>
    `})}class tW extends(0,i.xr)(ty.W,tw){static tagName="media-video-layout";static attrs={smallWhen:{converter:t=>"never"!==t&&!!t}};#h;onSetup(){this.forwardKeepAlive=!1,this.#h=(0,n.$c)(),this.classList.add("vds-video-layout")}onConnect(){x("video",()=>this.isMatch),this.#x()}render(){return(0,a.xZ)(this.#_.bind(this))}#x(){let{menuPortal:t}=g();(0,i.QZ)(()=>{if(!this.isMatch)return;let e=B(this,this.menuContainer,"vds-video-layout",()=>this.isSmallLayout),s=e?[this,e]:[this];return(this.$props.customIcons()?new a.kj(s):new tb(s)).connect(),t.set(e),()=>{e.remove(),t.set(null)}})}#_(){let{load:t}=this.#h.$props,{canLoad:e,streamType:s,nativeControls:i}=this.#h.$state;return!i()&&this.isMatch?"play"!==t()||e()?"unknown"===s()?tS():this.isSmallLayout?[A(),tT(),tS(),j(),tC(),(0,l.qy)`<div class="vds-scrim"></div>`,(0,l.qy)`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[q({tooltip:"top start"}),Z({tooltip:"bottom start"}),N(),T({tooltip:"bottom"}),E(),tM(),tv({orientation:"vertical",tooltip:"bottom end"})]}
        </media-controls-group>

        ${N()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[N(),S({tooltip:"top"}),N()]}
        </media-controls-group>

        ${N()}

        <media-controls-group class="vds-controls-group">
          ${[t$(),tg(),W({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${th()}
        </media-controls-group>
      </media-controls>
    `,(0,a.xZ)(()=>{let{duration:t}=(0,n.nV)();return 0===t()?null:(0,l.qy)`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})]:[A(),tT(),tS(),tC(),j(),(0,l.qy)`<div class="vds-scrim"></div>`,(0,l.qy)`
      <media-controls class="vds-controls">
        ${[(0,l.qy)`
    <media-controls-group class="vds-controls-group">
      ${(0,a.xZ)(()=>{let{menuGroup:t}=g();return"top"===t()?[N(),tM()]:null})}
    </media-controls-group>
  `,N(),(0,l.qy)`<media-controls-group class="vds-controls-group"></media-controls-group>`,N(),(0,l.qy)`
            <media-controls-group class="vds-controls-group">
              ${th()}
            </media-controls-group>
          `,(0,l.qy)`
            <media-controls-group class="vds-controls-group">
              ${[S({tooltip:"top start"}),tv({orientation:"horizontal",tooltip:"top"}),t$(),tg(),T({tooltip:"top"}),(0,a.xZ)(()=>{let{menuGroup:t}=g();return"bottom"===t()?tM():null}),q({tooltip:"top"}),Z({tooltip:"top"}),E(),function(){let{translations:t}=g(),e=C(t,"Enter PiP"),s=C(t,"Exit PiP");return(0,l.qy)`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${C(t,"PiP")}
        >
          ${w(["pip-enter","pip-exit"])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${e}</span>
        <span class="vds-pip-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}(),W({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]:(0,l.qy)`
    <div class="vds-load-container">
      ${[tS(),S({tooltip:"top"})]}
    </div>
  `:null}}(0,i.Xq)(t_),(0,i.Xq)(tW)}}]);