"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[5125],{"./libs/map/src/components/loading-indicator/stories/vl-map-loading-indicator.stories.ts":(e,t,a)=>{a.r(t),a.d(t,{MapLoadingIndicatorDefault:()=>v,__namedExportsOrder:()=>h,default:()=>b});var n=a("./libs/common/storybook/src/index.ts"),r=a("./node_modules/lit/index.js"),o=a("./node_modules/ol/MapEvent.js");a("./libs/map/src/vl-map.ts"),a("./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts");var i=a("./libs/common/utilities/src/index.ts"),s=a("./node_modules/lit/decorators.js"),l=a("./node_modules/ol/Observable.js");class c extends i.fS{static{this.styles=(0,r.iv)`
        @keyframes progress {
            0% {
                left: 0;
                width: 0;
            }
            50% {
                width: 100%;
            }
            100% {
                right: 0;
                width: 0;
            }
        }

        :host(.loading) {
            position: absolute;
            height: 3px;
            background: rgba(0, 85, 204, 0.6); /*komt overeen met blauw van de vl-button.*/
            animation: progress 2s infinite ease-in-out;
            animation-delay: 250ms;
            z-index: 2;
        }
    `}connectedCallback(){super.connectedCallback(),this.eventKeyLoadStart=this.map.on("loadstart",()=>{this.toggleLoadingClass(!0)}),this.eventKeyLoadEnd=this.map.on("loadend",()=>{this.toggleLoadingClass(!1)})}disconnectedCallback(){super.disconnectedCallback(),(0,l.B)(this.eventKeyLoadStart),(0,l.B)(this.eventKeyLoadEnd)}toggleLoadingClass(e){e?this.classList.add("loading"):this.classList.remove("loading")}get map(){return this.closest("vl-map")}}c=function(e,t,a,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(t,a,i):r(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i}([(0,s.Mo)("vl-map-loading-indicator")],c),a("./node_modules/react/index.js");var d=a("./node_modules/react/jsx-runtime.js"),p=a("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),m=a("./node_modules/@storybook/blocks/dist/index.mjs");function u(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre"},(0,p.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"map-loading-indicator",children:"Map Loading Indicator"}),"\n",(0,d.jsxs)(t.p,{children:["Gebruik de ",(0,d.jsx)(t.code,{children:"map-loading-indicator"})," component om op te vangen wanneer de ",(0,d.jsx)(t.a,{href:"/docs/map-map--map-default",children:"vl-map"})," aan het\nladen is.",(0,d.jsx)("br",{}),"\nToont een 'loading' bar bovenaan de map."]}),"\n",(0,d.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-js",children:"import { VlMapLoadingIndicator } from '@domg-lib/map';\n"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-html",children:"<vl-map-loading-indicator></vl-map-loading-indicator>\n"})}),"\n",(0,d.jsx)(m.Xz,{of:v})]})}let b={title:"map/loading-indicator",tags:["autodocs"],args:n._O,argTypes:(0,n.Wp)(),parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,p.ah)(),e.components);return t?(0,d.jsx)(t,Object.assign({},e,{children:(0,d.jsx)(u,e)})):u(e)}},controls:{hideNoControlsWarning:!0}}},g=async e=>{let t=document.querySelector("vl-map");t.map.dispatchEvent(new o.Z("loadstart",t.map)),await new Promise(t=>setTimeout(t,e)),t.map.dispatchEvent(new o.Z("loadend",t.map))},v=(0,n.yg)({},()=>(0,r.dy)`
        <div style="margin-bottom:10px">
            <button
                data-cy="short-wait"
                is="vl-button"
                @click="${()=>{g(500)}}"
            >
                Fake kort wachten
            </button>
            <button
                data-cy="long-wait"
                is="vl-button"
                @click="${()=>{g(1e4)}}"
            >
                Fake lang wachten
            </button>
        </div>
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-loading-indicator></vl-map-loading-indicator>
        </vl-map>
    `);v.storyName="vl-map-loading-indicator - default",v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'story({}, () => html`\n        <div style="margin-bottom:10px">\n            <button\n                data-cy="short-wait"\n                is="vl-button"\n                @click="${() => {\n  fakeLoadMap(500);\n}}"\n            >\n                Fake kort wachten\n            </button>\n            <button\n                data-cy="long-wait"\n                is="vl-button"\n                @click="${() => {\n  fakeLoadMap(10000);\n}}"\n            >\n                Fake lang wachten\n            </button>\n        </div>\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-loading-indicator></vl-map-loading-indicator>\n        </vl-map>\n    `)',...v.parameters?.docs?.source}}};let h=["MapLoadingIndicatorDefault"]},"./node_modules/lit/decorators.js":(e,t,a)=>{a.d(t,{Mo:()=>n,Cb:()=>c});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n=e=>(t,a)=>{void 0!==a?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},r=a("./node_modules/lit/node_modules/@lit/reactive-element/reactive-element.js");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach(function(t){!function(e,t,a){(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s={attribute:!0,type:String,converter:r.Ts,reflect:!1,hasChanged:r.Qu},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,{kind:n,metadata:r}=a,o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(a.name,e),"accessor"===n){var{name:i}=a;return{set(a){var n=t.get.call(this);t.set.call(this,a),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.C(i,void 0,e),t}}}if("setter"===n){var{name:l}=a;return function(a){var n=this[l];t.call(this,a),this.requestUpdate(l,n,e)}}throw Error("Unsupported decorator location: "+n)};function c(e){return(t,a)=>"object"==typeof a?l(e,t,a):((e,t,a)=>{var n=t.hasOwnProperty(a);return t.constructor.createProperty(a,n?i(i({},e),{},{wrapped:!0}):e),n?Object.getOwnPropertyDescriptor(t,a):void 0})(e,t,a)}},"./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts":(e,t,a)=>{var n=a("./libs/common/utilities/src/index.ts"),r=a("./libs/map/src/components/baselayer/vl-map-base-layer.ts");class o extends r.m{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk_grijs",this.title="GRB basis laag grijs"}}o=function(e,t,a,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(t,a,i):r(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i}([(0,n.a6)("vl-map-baselayer-grb-gray")],o)}}]);