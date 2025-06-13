"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4997],{"../../libs/map/src/components/loading-indicator/stories/vl-map-loading-indicator.stories.ts":(e,a,t)=>{t.r(a),t.d(a,{MapLoadingIndicatorDefault:()=>b,__namedExportsOrder:()=>u,default:()=>m});var n=t("../../libs/common/storybook/src/index.ts"),o=t("../../libs/common/utilities/src/index.ts"),s=t("../../libs/components/src/next/button/index.ts"),i=t("../../node_modules/lit/index.js"),r=t("../../node_modules/ol/MapEvent.js");t("../../libs/map/src/vl-map.ts"),t("../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts"),t("../../libs/map/src/components/loading-indicator/vl-map-loading-indicator.ts"),t("../../node_modules/react/index.js");var l=t("../../node_modules/react/jsx-runtime.js"),d=t("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),c=t("../../node_modules/@storybook/blocks/dist/index.mjs");function p(e){let a=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre"},(0,d.RP)(),e.components),{VluxMetaData:t}=a;return t||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h1,{id:"map-loading-indicator",children:"Map Loading Indicator"}),"\n",(0,l.jsx)(t,{id:"map-loading-indicator"}),"\n",(0,l.jsxs)(a.p,{children:["Gebruik de ",(0,l.jsx)(a.code,{children:"map-loading-indicator"})," component om op te vangen wanneer de ",(0,l.jsx)(a.a,{href:"/docs/map-map--map-default",children:"vl-map"})," aan het\nladen is.",(0,l.jsx)("br",{}),"\nToont een 'loading' bar bovenaan de map."]}),"\n",(0,l.jsx)(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-js",children:"import { VlMapLoadingIndicator } from '@domg-lib/map';\n"})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-html",children:"<vl-map-loading-indicator></vl-map-loading-indicator>\n"})}),"\n",(0,l.jsx)(c.Hl,{of:b})]})}(0,o.gy)([s.Y]);let m={id:"map-loading-indicator",title:"map/loading-indicator",tags:["autodocs"],args:n.D8,argTypes:(0,n.RN)(),parameters:{docs:{page:function(e={}){let{wrapper:a}=Object.assign({},(0,d.RP)(),e.components);return a?(0,l.jsx)(a,Object.assign({},e,{children:(0,l.jsx)(p,e)})):p(e)}},controls:{hideNoControlsWarning:!0}}},g=async e=>{let a=document.querySelector("vl-map");a.map.dispatchEvent(new r.A("loadstart",a.map)),await new Promise(a=>setTimeout(a,e)),a.map.dispatchEvent(new r.A("loadend",a.map))},b=(0,n._7)({},()=>(0,i.qy)`
        <div style="margin-bottom:10px">
            <vl-button-next
                data-cy="short-wait"
                @click="${()=>{g(500)}}"
            >
                Fake kort wachten
            </vl-button-next>
            <vl-button-next
                data-cy="long-wait"
                @click="${()=>{g(1e4)}}"
            >
                Fake lang wachten
            </vl-button-next>
        </div>
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-loading-indicator></vl-map-loading-indicator>
        </vl-map>
    `);b.storyName="vl-map-loading-indicator - default",b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'story({}, () => html`\n        <div style="margin-bottom:10px">\n            <vl-button-next\n                data-cy="short-wait"\n                @click="${() => {\n  fakeLoadMap(500);\n}}"\n            >\n                Fake kort wachten\n            </vl-button-next>\n            <vl-button-next\n                data-cy="long-wait"\n                @click="${() => {\n  fakeLoadMap(10000);\n}}"\n            >\n                Fake lang wachten\n            </vl-button-next>\n        </div>\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-loading-indicator></vl-map-loading-indicator>\n        </vl-map>\n    `)',...b.parameters?.docs?.source}}};let u=["MapLoadingIndicatorDefault"]},"../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts":(e,a,t)=>{t.d(a,{L:()=>s});var n=t("../../libs/common/utilities/src/index.ts"),o=t("../../libs/map/src/components/baselayer/vl-map-base-layer.ts");class s extends o.j{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk_grijs",this.title="GRB basis laag grijs"}}s=function(e,a,t,n){var o,s=arguments.length,i=s<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,a,t,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(i=(s<3?o(i):s>3?o(a,t,i):o(a,t))||i);return s>3&&i&&Object.defineProperty(a,t,i),i}([(0,n.M1)("vl-map-baselayer-grb-gray")],s)},"../../libs/map/src/components/loading-indicator/vl-map-loading-indicator.ts":(e,a,t)=>{var n=t("../../libs/common/utilities/src/index.ts"),o=t("../../node_modules/lit/index.js"),s=t("../../node_modules/lit/decorators.js"),i=t("../../node_modules/ol/Observable.js");class r extends n.jW{static{this.styles=(0,o.AH)`
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
    `}connectedCallback(){super.connectedCallback(),this.eventKeyLoadStart=this.map.on("loadstart",()=>{this.toggleLoadingClass(!0)}),this.eventKeyLoadEnd=this.map.on("loadend",()=>{this.toggleLoadingClass(!1)})}disconnectedCallback(){super.disconnectedCallback(),(0,i.e)(this.eventKeyLoadStart),(0,i.e)(this.eventKeyLoadEnd)}toggleLoadingClass(e){e?this.classList.add("loading"):this.classList.remove("loading")}get map(){return this.closest("vl-map")}}r=function(e,a,t,n){var o,s=arguments.length,i=s<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,a,t,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(i=(s<3?o(i):s>3?o(a,t,i):o(a,t))||i);return s>3&&i&&Object.defineProperty(a,t,i),i}([(0,s.EM)("vl-map-loading-indicator")],r)}}]);