(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4495],{"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,o)=>{"use strict";o.d(t,{BN:()=>n,RP:()=>i,gz:()=>a,xA:()=>l});var r=o("../../node_modules/react/index.js");let n=r.createContext({});function a(e){return function(t){let o=i(t.components);return r.createElement(e,{...t,allComponents:o})}}function i(e){let t=r.useContext(n);return r.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let s={};function l({components:e,children:t,disableParentContext:o}){let a;return a=o?"function"==typeof e?e({}):e||s:i(e),r.createElement(n.Provider,{value:a},t)}},"../../libs/map/src/components/current-location/stories/vl-map-current-location.stories.ts":(e,t,o)=>{"use strict";o.r(t),o.d(t,{MapCurrentLocationDefault:()=>j,__namedExportsOrder:()=>x,default:()=>v});var r=o("../../libs/common/storybook/src/index.ts"),n=o("../../node_modules/lit-html/lit-html.js");o("../../libs/map/src/vl-map.ts"),o("../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts");var a=o("../../libs/common/utilities/src/index.ts"),i=o("../../libs/elements/src/index.ts"),s=o("../../node_modules/lit/index.js"),l=o("../../node_modules/lit/decorators.js"),c=o("../../node_modules/proj4/lib/index.js");let d="Huidige locatie",p=[(0,s.AH)`
    div.uig-map-current-location {
        position: absolute;
        z-index: 1;
        padding: 0;
        margin: 0;
        border: 1px #cbd2da solid;
        border-radius: 0;
        background: #fff;
        top: initial;
        left: initial;
        bottom: 90px;
        right: 10px;
    }

    div.uig-map-current-location button {
        color: #333332;
        background: #fff;
        margin: 0;
        border-radius: 0;
        height: 3.5rem;
        width: 3.5rem;
        display: block;
        padding: 0;
        font-weight: bold;
        text-decoration: none;
        font-size: inherit;
        text-align: center;
        border: none;
        cursor: pointer;
    }

    div.uig-map-current-location .vl-icon {
        padding: 0 0.9rem;
        line-height: 3.5rem;
    }
`,...i.hF];class m extends a.jW{static{(0,a.gy)([i.yF])}static get styles(){return[(0,s.AH)`
                ${(0,s.iz)(p)}
            }
            `]}static get properties(){return{zoom:{type:Number,attribute:"data-vl-zoom",reflect:!0},tooltip:{type:String,attribute:"data-vl-tooltip",reflect:!0}}}constructor(){super(),this.zoom=10,this.tooltip=d}connectedCallback(){super.connectedCallback(),this._mapElement=this.closest("vl-map")}_currentLocation(){navigator.geolocation.getCurrentPosition(e=>{let t=new c.A.Proj("EPSG:4326"),o=new c.A.Proj(this._mapElement.map.projection.getCode()),r=new c.A.Point(e.coords.longitude,e.coords.latitude),n=c.A.transform(t,o,r);this._mapElement.map.getView().setCenter([n.x,n.y]),this._mapElement.map.getView().setZoom(this.zoom)})}render(){return(0,s.qy)` <div class="uig-map-current-location">
            <button @click=${()=>this._currentLocation()} type="button" title="${this.tooltip}">
                <span is="vl-icon" data-vl-icon="location-gps"></span>
            </button>
        </div>`}}m=function(e,t,o,r){var n,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(a<3?n(i):a>3?n(t,o,i):n(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i}([(0,l.EM)("vl-map-current-location")],m);let u={...r.D8,tooltip:d,zoom:10},g={...(0,r.RN)(),tooltip:{name:"data-vl-tooltip",description:"Bepaalt de tekst van de tooltip van de huidige locatie knop.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:u.tooltip}}},zoom:{name:"data-vl-zoom",description:"Bepaalt hoever er ingezoomd wordt bij het klikken op de huidige locatie knop.",control:{type:r.VH.RANGE,min:1,max:13,step:1},table:{type:{summary:r.QE.NUMBER},category:r.R6.ATTRIBUTES,defaultValue:{summary:u.zoom}}}};o("../../node_modules/react/index.js");var b=o("../../node_modules/react/jsx-runtime.js"),f=o("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),h=o("../../node_modules/@storybook/blocks/dist/index.mjs");function y(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,f.RP)(),e.components);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(t.h1,{id:"map-current-location",children:"Map Current Location"}),"\n",(0,b.jsxs)(t.p,{children:["Gebruik het ",(0,b.jsx)(t.code,{children:"map-current-location"})," component om een huidige locatie knop af te beelden op de map.",(0,b.jsx)("br",{}),"\nNa het drukken op de knop wordt de huidige locatie van de gebruiker centraal afgebeeld."]}),"\n",(0,b.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:"language-js",children:"import { VlMapCurrentLocation } from '@domg-wc/map';\n"})}),"\n",(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:"language-html",children:"<vl-map-current-location></vl-map-current-location>\n"})}),"\n",(0,b.jsx)(h.Hl,{of:j}),"\n",(0,b.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,b.jsx)(h.ov,{of:j}),"\n",(0,b.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,b.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,b.jsx)(t.p,{children:(0,b.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-current-location--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map Current Location"})})]})}let v={title:"map/current-location",tags:["autodocs"],args:u,argTypes:g,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,f.RP)(),e.components);return t?(0,b.jsx)(t,Object.assign({},e,{children:(0,b.jsx)(y,e)})):y(e)}}}},j=(0,r._7)(u,({tooltip:e,zoom:t})=>(0,n.qy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-current-location data-vl-tooltip=${e} data-vl-zoom=${t}></vl-map-current-location>
        </vl-map>
    `);j.storyName="vl-map-current-location - default",j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"story(mapCurrentLocationArgs, ({\n  tooltip,\n  zoom\n}) => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-current-location data-vl-tooltip=${tooltip} data-vl-zoom=${zoom}></vl-map-current-location>\n        </vl-map>\n    `)",...j.parameters?.docs?.source}}};let x=["MapCurrentLocationDefault"]},"../../node_modules/lit/decorators.js":(e,t,o)=>{"use strict";o.d(t,{EM:()=>r,MZ:()=>s});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let r=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};var n=o("../../node_modules/@lit/reactive-element/reactive-element.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let a={attribute:!0,type:String,converter:n.W3,reflect:!1,hasChanged:n.Ec},i=(e=a,t,o)=>{let{kind:r,metadata:n}=o,i=globalThis.litPropertyMetadata.get(n);if(void 0===i&&globalThis.litPropertyMetadata.set(n,i=new Map),i.set(o.name,e),"accessor"===r){let{name:r}=o;return{set(o){let n=t.get.call(this);t.set.call(this,o),this.requestUpdate(r,n,e)},init(t){return void 0!==t&&this.C(r,void 0,e),t}}}if("setter"===r){let{name:r}=o;return function(o){let n=this[r];t.call(this,o),this.requestUpdate(r,n,e)}}throw Error("Unsupported decorator location: "+r)};function s(e){return(t,o)=>"object"==typeof o?i(e,t,o):((e,t,o)=>{let r=t.hasOwnProperty(o);return t.constructor.createProperty(o,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}},"../../node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="../../node_modules/memoizerific sync recursive",e.exports=t},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,o)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=o("../../node_modules/react/index.js"),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var r,a={},c=null,d=null;for(r in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:n,type:e,key:c,ref:d,props:a,_owner:s.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},"../../node_modules/react/jsx-runtime.js":(e,t,o)=>{"use strict";e.exports=o("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts":(e,t,o)=>{"use strict";var r=o("../../libs/common/utilities/src/index.ts"),n=o("../../libs/map/src/components/baselayer/vl-map-base-layer.ts");class a extends n.j{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk_grijs",this.title="GRB basis laag grijs"}}a=function(e,t,o,r){var n,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(a<3?n(i):a>3?n(t,o,i):n(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i}([(0,r.M1)("vl-map-baselayer-grb-gray")],a)}}]);