"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[5125],{"./node_modules/lit/decorators.js":(e,a,t)=>{var n;t.d(a,{Mo:()=>o,Cb:()=>r});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let o=e=>a=>"function"==typeof a?((e,a)=>(customElements.define(e,a),a))(e,a):((e,a)=>{let{kind:t,elements:n}=a;return{kind:t,elements:n,finisher(a){customElements.define(e,a)}}})(e,a),s=(e,a)=>"method"!==a.kind||!a.descriptor||"value"in a.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:a.key,initializer(){"function"==typeof a.initializer&&(this[a.key]=a.initializer.call(this))},finisher(t){t.createProperty(a.key,e)}}:{...a,finisher(t){t.createProperty(a.key,e)}},i=(e,a,t)=>{a.constructor.createProperty(t,e)};function r(e){return(a,t)=>void 0!==t?i(e,a,t):s(e,a)}null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)||((e,a)=>e.assignedNodes(a).filter(e=>e.nodeType===Node.ELEMENT_NODE))},"./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts":(e,a,t)=>{var n=t("./libs/common/utilities/src/index.ts"),o=t("./libs/map/src/components/baselayer/vl-map-base-layer.ts");let s=class extends o.m{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk_grijs",this.title="GRB basis laag grijs"}};s=function(e,a,t,n){var o,s=arguments.length,i=s<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,a,t,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(i=(s<3?o(i):s>3?o(a,t,i):o(a,t))||i);return s>3&&i&&Object.defineProperty(a,t,i),i}([(0,n.a6)("vl-map-baselayer-grb-gray")],s)},"./libs/map/src/components/loading-indicator/stories/vl-map-loading-indicator.stories.ts":(e,a,t)=>{t.r(a),t.d(a,{MapLoadingIndicatorDefault:()=>h,default:()=>b});var n=t("./node_modules/lit/index.js");t("./libs/map/src/vl-map.ts"),t("./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts");var o=t("./libs/common/utilities/src/index.ts"),s=t("./node_modules/lit/decorators.js"),i=t("./node_modules/ol/Observable.js");let r=class extends o.fS{static{this.styles=(0,n.iv)`
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
    `}connectedCallback(){super.connectedCallback(),this.eventKeyLoadStart=this.map.on("loadstart",()=>{this.toggleLoadingClass(!0)}),this.eventKeyLoadEnd=this.map.on("loadend",()=>{this.toggleLoadingClass(!1)})}disconnectedCallback(){super.disconnectedCallback(),(0,i.B)(this.eventKeyLoadStart),(0,i.B)(this.eventKeyLoadEnd)}toggleLoadingClass(e){e?this.classList.add("loading"):this.classList.remove("loading")}get map(){return this.closest("vl-map")}};r=function(e,a,t,n){var o,s=arguments.length,i=s<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,a,t,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(i=(s<3?o(i):s>3?o(a,t,i):o(a,t))||i);return s>3&&i&&Object.defineProperty(a,t,i),i}([(0,s.Mo)("vl-map-loading-indicator")],r),t("./node_modules/react/index.js");var l=t("./node_modules/react/jsx-runtime.js"),d=t("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),c=t("./node_modules/@storybook/blocks/dist/index.mjs");function p(e){let a=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre"},(0,d.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h1,{id:"map-loading-indicator",children:"Map Loading Indicator"}),"\n",(0,l.jsxs)(a.p,{children:["Gebruik de ",(0,l.jsx)(a.code,{children:"map-loading-indicator"})," component om op te vangen wanneer de ",(0,l.jsx)(a.a,{href:"/docs/map-map--map-default",children:"vl-map"})," aan het\nladen is.",(0,l.jsx)("br",{}),"\nToont een 'loading' bar bovenaan de map."]}),"\n",(0,l.jsx)(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-js",children:"import { VlMapLoadingIndicator } from '@domg-lib/map';\n"})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-html",children:"<vl-map-loading-indicator></vl-map-loading-indicator>\n"})}),"\n",(0,l.jsx)(c.Xz,{of:h})]})}var m=t("./node_modules/ol/MapEvent.js"),g=t("./libs/common/storybook/src/index.ts");let b={title:"map/loading-indicator",tags:["autodocs"],args:(0,g.T8)({}),argTypes:(0,g.xj)({}),parameters:{docs:{page:function(e={}){let{wrapper:a}=Object.assign({},(0,d.ah)(),e.components);return a?(0,l.jsx)(a,Object.assign({},e,{children:(0,l.jsx)(p,e)})):p(e)}},controls:{hideNoControlsWarning:!0}}},u=async e=>{let a=document.querySelector("vl-map");a.map.dispatchEvent(new m.Z("loadstart",a.map)),await new Promise(a=>setTimeout(a,e)),a.map.dispatchEvent(new m.Z("loadend",a.map))},h=(0,g.yg)({},()=>(0,n.dy)`
        <div style="margin-bottom:10px">
            <button
                data-cy="short-wait"
                is="vl-button"
                @click="${()=>{u(500)}}"
            >
                Fake kort wachten
            </button>
            <button
                data-cy="long-wait"
                is="vl-button"
                @click="${()=>{u(1e4)}}"
            >
                Fake lang wachten
            </button>
        </div>
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-loading-indicator></vl-map-loading-indicator>
        </vl-map>
    `);h.storyName="vl-map-loading-indicator - default",h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'story({}, () => html`\n        <div style="margin-bottom:10px">\n            <button\n                data-cy="short-wait"\n                is="vl-button"\n                @click="${() => {\n  fakeLoadMap(500);\n}}"\n            >\n                Fake kort wachten\n            </button>\n            <button\n                data-cy="long-wait"\n                is="vl-button"\n                @click="${() => {\n  fakeLoadMap(10000);\n}}"\n            >\n                Fake lang wachten\n            </button>\n        </div>\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-loading-indicator></vl-map-loading-indicator>\n        </vl-map>\n    `)',...h.parameters?.docs?.source}}}}}]);