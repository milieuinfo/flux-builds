"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4997],{"../../libs/map/src/components/loading-indicator/stories/vl-map-loading-indicator.stories.ts":(e,a,t)=>{t.r(a),t.d(a,{MapLoadingIndicatorDefault:()=>h,__namedExportsOrder:()=>y,default:()=>u});var n=t("../../libs/common/storybook/src/index.ts"),o=t("../../libs/common/utilities/src/index.ts"),s=t("../../libs/components/src/next/button/index.ts"),r=t("../../node_modules/lit/index.js"),l=t("../../node_modules/ol/MapEvent.js");t("../../libs/map/src/vl-map.ts"),t("../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts");var i=t("../../node_modules/lit/decorators.js"),d=t("../../node_modules/ol/Observable.js");class c extends o.jW{static{this.styles=(0,r.AH)`
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
    `}connectedCallback(){super.connectedCallback(),this.eventKeyLoadStart=this.map.on("loadstart",()=>{this.toggleLoadingClass(!0)}),this.eventKeyLoadEnd=this.map.on("loadend",()=>{this.toggleLoadingClass(!1)})}disconnectedCallback(){super.disconnectedCallback(),(0,d.e)(this.eventKeyLoadStart),(0,d.e)(this.eventKeyLoadEnd)}toggleLoadingClass(e){e?this.classList.add("loading"):this.classList.remove("loading")}get map(){return this.closest("vl-map")}}c=function(e,a,t,n){var o,s=arguments.length,r=s<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,a,t,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(a,t,r):o(a,t))||r);return s>3&&r&&Object.defineProperty(a,t,r),r}([(0,i.EM)("vl-map-loading-indicator")],c),t("../../node_modules/react/index.js");var p=t("../../node_modules/react/jsx-runtime.js"),m=t("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),g=t("../../node_modules/@storybook/blocks/dist/index.mjs");function b(e){let a=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre"},(0,m.RP)(),e.components),{VluxMetaData:t}=a;return t||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a.h1,{id:"map-loading-indicator",children:"Map Loading Indicator"}),"\n",(0,p.jsx)(t,{id:"map-loading-indicator"}),"\n",(0,p.jsxs)(a.p,{children:["Gebruik de ",(0,p.jsx)(a.code,{children:"map-loading-indicator"})," component om op te vangen wanneer de ",(0,p.jsx)(a.a,{href:"/docs/map-map--map-default",children:"vl-map"})," aan het\nladen is.",(0,p.jsx)("br",{}),"\nToont een 'loading' bar bovenaan de map."]}),"\n",(0,p.jsx)(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,p.jsx)(a.pre,{children:(0,p.jsx)(a.code,{className:"language-js",children:"import { VlMapLoadingIndicator } from '@domg-lib/map';\n"})}),"\n",(0,p.jsx)(a.pre,{children:(0,p.jsx)(a.code,{className:"language-html",children:"<vl-map-loading-indicator></vl-map-loading-indicator>\n"})}),"\n",(0,p.jsx)(g.Hl,{of:h})]})}(0,o.gy)([s.Y]);let u={id:"map-loading-indicator",title:"map/loading-indicator",tags:["autodocs"],args:n.D8,argTypes:(0,n.RN)(),parameters:{docs:{page:function(e={}){let{wrapper:a}=Object.assign({},(0,m.RP)(),e.components);return a?(0,p.jsx)(a,Object.assign({},e,{children:(0,p.jsx)(b,e)})):b(e)}},controls:{hideNoControlsWarning:!0}}},v=async e=>{let a=document.querySelector("vl-map");a.map.dispatchEvent(new l.A("loadstart",a.map)),await new Promise(a=>setTimeout(a,e)),a.map.dispatchEvent(new l.A("loadend",a.map))},h=(0,n._7)({},()=>(0,r.qy)`
        <div style="margin-bottom:10px">
            <vl-button-next
                data-cy="short-wait"
                @click="${()=>{v(500)}}"
            >
                Fake kort wachten
            </vl-button-next>
            <vl-button-next
                data-cy="long-wait"
                @click="${()=>{v(1e4)}}"
            >
                Fake lang wachten
            </vl-button-next>
        </div>
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-loading-indicator></vl-map-loading-indicator>
        </vl-map>
    `);h.storyName="vl-map-loading-indicator - default",h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'story({}, () => html`\n        <div style="margin-bottom:10px">\n            <vl-button-next\n                data-cy="short-wait"\n                @click="${() => {\n  fakeLoadMap(500);\n}}"\n            >\n                Fake kort wachten\n            </vl-button-next>\n            <vl-button-next\n                data-cy="long-wait"\n                @click="${() => {\n  fakeLoadMap(10000);\n}}"\n            >\n                Fake lang wachten\n            </vl-button-next>\n        </div>\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-loading-indicator></vl-map-loading-indicator>\n        </vl-map>\n    `)',...h.parameters?.docs?.source}}};let y=["MapLoadingIndicatorDefault"]},"../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts":(e,a,t)=>{var n=t("../../libs/common/utilities/src/index.ts"),o=t("../../libs/map/src/components/baselayer/vl-map-base-layer.ts");class s extends o.j{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk_grijs",this.title="GRB basis laag grijs"}}s=function(e,a,t,n){var o,s=arguments.length,r=s<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,a,t,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(a,t,r):o(a,t))||r);return s>3&&r&&Object.defineProperty(a,t,r),r}([(0,n.M1)("vl-map-baselayer-grb-gray")],s)}}]);