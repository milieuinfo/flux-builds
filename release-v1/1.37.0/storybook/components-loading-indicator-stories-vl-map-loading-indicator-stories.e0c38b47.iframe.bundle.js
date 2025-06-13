(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4997],{"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,a)=>{"use strict";a.d(t,{BN:()=>n,RP:()=>s,gz:()=>r,xA:()=>l});var o=a("../../node_modules/react/index.js");let n=o.createContext({});function r(e){return function(t){let a=s(t.components);return o.createElement(e,{...t,allComponents:a})}}function s(e){let t=o.useContext(n);return o.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let i={};function l({components:e,children:t,disableParentContext:a}){let r;return r=a?"function"==typeof e?e({}):e||i:s(e),o.createElement(n.Provider,{value:r},t)}},"../../libs/map/src/components/loading-indicator/stories/vl-map-loading-indicator.stories.ts":(e,t,a)=>{"use strict";a.r(t),a.d(t,{MapLoadingIndicatorDefault:()=>v,__namedExportsOrder:()=>y,default:()=>g});var o=a("../../libs/common/storybook/src/index.ts"),n=a("../../node_modules/lit/index.js"),r=a("../../node_modules/ol/MapEvent.js");a("../../libs/map/src/vl-map.ts"),a("../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts");var s=a("../../libs/common/utilities/src/index.ts"),i=a("../../node_modules/lit/decorators.js"),l=a("../../node_modules/ol/Observable.js");class d extends s.jW{static{this.styles=(0,n.AH)`
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
    `}connectedCallback(){super.connectedCallback(),this.eventKeyLoadStart=this.map.on("loadstart",()=>{this.toggleLoadingClass(!0)}),this.eventKeyLoadEnd=this.map.on("loadend",()=>{this.toggleLoadingClass(!1)})}disconnectedCallback(){super.disconnectedCallback(),(0,l.e)(this.eventKeyLoadStart),(0,l.e)(this.eventKeyLoadEnd)}toggleLoadingClass(e){e?this.classList.add("loading"):this.classList.remove("loading")}get map(){return this.closest("vl-map")}}d=function(e,t,a,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,a):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,o);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(s=(r<3?n(s):r>3?n(t,a,s):n(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s}([(0,i.EM)("vl-map-loading-indicator")],d),a("../../node_modules/react/index.js");var c=a("../../node_modules/react/jsx-runtime.js"),m=a("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),p=a("../../node_modules/@storybook/blocks/dist/index.mjs");function u(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre"},(0,m.RP)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"map-loading-indicator",children:"Map Loading Indicator"}),"\n",(0,c.jsxs)(t.p,{children:["Gebruik de ",(0,c.jsx)(t.code,{children:"map-loading-indicator"})," component om op te vangen wanneer de ",(0,c.jsx)(t.a,{href:"/docs/map-map--map-default",children:"vl-map"})," aan het\nladen is.",(0,c.jsx)("br",{}),"\nToont een 'loading' bar bovenaan de map."]}),"\n",(0,c.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",children:"import { VlMapLoadingIndicator } from '@domg-lib/map';\n"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-html",children:"<vl-map-loading-indicator></vl-map-loading-indicator>\n"})}),"\n",(0,c.jsx)(p.Hl,{of:v})]})}let g={title:"map/loading-indicator",tags:["autodocs"],args:o.D8,argTypes:(0,o.RN)(),parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,m.RP)(),e.components);return t?(0,c.jsx)(t,Object.assign({},e,{children:(0,c.jsx)(u,e)})):u(e)}},controls:{hideNoControlsWarning:!0}}},b=async e=>{let t=document.querySelector("vl-map");t.map.dispatchEvent(new r.A("loadstart",t.map)),await new Promise(t=>setTimeout(t,e)),t.map.dispatchEvent(new r.A("loadend",t.map))},v=(0,o._7)({},()=>(0,n.qy)`
        <div style="margin-bottom:10px">
            <button
                data-cy="short-wait"
                is="vl-button"
                @click="${()=>{b(500)}}"
            >
                Fake kort wachten
            </button>
            <button
                data-cy="long-wait"
                is="vl-button"
                @click="${()=>{b(1e4)}}"
            >
                Fake lang wachten
            </button>
        </div>
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-loading-indicator></vl-map-loading-indicator>
        </vl-map>
    `);v.storyName="vl-map-loading-indicator - default",v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'story({}, () => html`\n        <div style="margin-bottom:10px">\n            <button\n                data-cy="short-wait"\n                is="vl-button"\n                @click="${() => {\n  fakeLoadMap(500);\n}}"\n            >\n                Fake kort wachten\n            </button>\n            <button\n                data-cy="long-wait"\n                is="vl-button"\n                @click="${() => {\n  fakeLoadMap(10000);\n}}"\n            >\n                Fake lang wachten\n            </button>\n        </div>\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-loading-indicator></vl-map-loading-indicator>\n        </vl-map>\n    `)',...v.parameters?.docs?.source}}};let y=["MapLoadingIndicatorDefault"]},"../../node_modules/lit/decorators.js":(e,t,a)=>{"use strict";a.d(t,{EM:()=>o,MZ:()=>i});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let o=e=>(t,a)=>{void 0!==a?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};var n=a("../../node_modules/@lit/reactive-element/reactive-element.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let r={attribute:!0,type:String,converter:n.W3,reflect:!1,hasChanged:n.Ec},s=(e=r,t,a)=>{let{kind:o,metadata:n}=a,s=globalThis.litPropertyMetadata.get(n);if(void 0===s&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(a.name,e),"accessor"===o){let{name:o}=a;return{set(a){let n=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,n,e)},init(t){return void 0!==t&&this.C(o,void 0,e),t}}}if("setter"===o){let{name:o}=a;return function(a){let n=this[o];t.call(this,a),this.requestUpdate(o,n,e)}}throw Error("Unsupported decorator location: "+o)};function i(e){return(t,a)=>"object"==typeof a?s(e,t,a):((e,t,a)=>{let o=t.hasOwnProperty(a);return t.constructor.createProperty(a,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,a):void 0})(e,t,a)}},"../../node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="../../node_modules/memoizerific sync recursive",e.exports=t},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,a)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=a("../../node_modules/react/index.js"),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,a){var o,r={},d=null,c=null;for(o in void 0!==a&&(d=""+a),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,o)&&!l.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:n,type:e,key:d,ref:c,props:r,_owner:i.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},"../../node_modules/react/jsx-runtime.js":(e,t,a)=>{"use strict";e.exports=a("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts":(e,t,a)=>{"use strict";var o=a("../../libs/common/utilities/src/index.ts"),n=a("../../libs/map/src/components/baselayer/vl-map-base-layer.ts");class r extends n.j{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk_grijs",this.title="GRB basis laag grijs"}}r=function(e,t,a,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,a):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,o);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(s=(r<3?n(s):r>3?n(t,a,s):n(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s}([(0,o.M1)("vl-map-baselayer-grb-gray")],r)}}]);