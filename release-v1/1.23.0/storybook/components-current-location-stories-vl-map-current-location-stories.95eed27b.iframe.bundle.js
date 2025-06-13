"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[1241],{"./libs/map/src/components/current-location/stories/vl-map-current-location.stories.ts":(e,t,r)=>{r.r(t),r.d(t,{MapCurrentLocationDefault:()=>j,__namedExportsOrder:()=>x,default:()=>y});var o=r("./libs/common/storybook/src/index.ts"),n=r("./node_modules/lit-html/lit-html.js");r("./libs/map/src/vl-map.ts"),r("./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts");var a=r("./libs/elements/src/index.ts"),i=r("./libs/common/utilities/src/index.ts"),l=r("./node_modules/lit/index.js"),s=r("./node_modules/lit/decorators.js"),c=r("./node_modules/proj4/lib/index.js");let d=[(0,l.iv)`
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
`,...a.CX],p="Huidige locatie";class m extends i.fS{static{(0,i.YV)([a.Gi])}static get styles(){return[(0,l.iv)`
                ${(0,l.$m)(d)}}
            `]}static get properties(){return{zoom:{type:Number,attribute:"data-vl-zoom",reflect:!0},tooltip:{type:String,attribute:"data-vl-tooltip",reflect:!0}}}constructor(){super(),this.zoom=10,this.tooltip=p}connectedCallback(){super.connectedCallback(),this._mapElement=this.closest("vl-map")}_currentLocation(){navigator.geolocation.getCurrentPosition(e=>{let t=new c.Z.Proj("EPSG:4326"),r=new c.Z.Proj(this._mapElement.map.projection.getCode()),o=new c.Z.Point(e.coords.longitude,e.coords.latitude),n=c.Z.transform(t,r,o);this._mapElement.map.getView().setCenter([n.x,n.y]),this._mapElement.map.getView().setZoom(this.zoom)})}render(){return(0,l.dy)` <div class="uig-map-current-location">
            <button @click=${()=>this._currentLocation()} type="button" title="${this.tooltip}">
                <span is="vl-icon" data-vl-icon="location-gps"></span>
            </button>
        </div>`}}m=function(e,t,r,o){var n,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(a<3?n(i):a>3?n(t,r,i):n(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i}([(0,s.Mo)("vl-map-current-location")],m);let u={...o._O,tooltip:p,zoom:10},b={...(0,o.Wp)(),tooltip:{name:"data-vl-tooltip",description:"Bepaalt de tekst van de tooltip van de huidige locatie knop.",table:{type:{summary:o.vK.STRING},category:o.aA.ATTRIBUTES,defaultValue:{summary:u.tooltip}}},zoom:{name:"data-vl-zoom",description:"Bepaalt hoever er ingezoomd wordt bij het klikken op de huidige locatie knop.",control:{type:"range",min:1,max:13,step:1},table:{type:{summary:o.vK.NUMBER},category:o.aA.ATTRIBUTES,defaultValue:{summary:u.zoom}}}};r("./node_modules/react/index.js");var g=r("./node_modules/react/jsx-runtime.js"),v=r("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),h=r("./node_modules/@storybook/blocks/dist/index.mjs");function f(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,v.ah)(),e.components);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t.h1,{id:"map-current-location",children:"Map Current Location"}),"\n",(0,g.jsxs)(t.p,{children:["Gebruik het ",(0,g.jsx)(t.code,{children:"map-current-location"})," component om een huidige locatie knop af te beelden op de map.",(0,g.jsx)("br",{}),"\nNa het drukken op de knop wordt de huidige locatie van de gebruiker centraal afgebeeld."]}),"\n",(0,g.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:"language-js",children:"import { VlMapCurrentLocation } from '@domg-wc/map';\n"})}),"\n",(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:"language-html",children:"<vl-map-current-location></vl-map-current-location>\n"})}),"\n",(0,g.jsx)(h.Xz,{of:j}),"\n",(0,g.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,g.jsx)(h.Ed,{of:j}),"\n",(0,g.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,g.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,g.jsx)(t.p,{children:(0,g.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-current-location--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map Current Location"})})]})}let y={title:"map/current-location",tags:["autodocs"],args:u,argTypes:b,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,v.ah)(),e.components);return t?(0,g.jsx)(t,Object.assign({},e,{children:(0,g.jsx)(f,e)})):f(e)}}}},j=(0,o.yg)(u,({tooltip:e,zoom:t})=>(0,n.dy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-current-location data-vl-tooltip=${e} data-vl-zoom=${t}></vl-map-current-location>
        </vl-map>
    `);j.storyName="vl-map-current-location - default",j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"story(mapCurrentLocationArgs, ({\n  tooltip,\n  zoom\n}) => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-current-location data-vl-tooltip=${tooltip} data-vl-zoom=${zoom}></vl-map-current-location>\n        </vl-map>\n    `)",...j.parameters?.docs?.source}}};let x=["MapCurrentLocationDefault"]},"./node_modules/lit/decorators.js":(e,t,r)=>{r.d(t,{Mo:()=>o,Cb:()=>c});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var o=e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},n=r("./node_modules/lit/node_modules/@lit/reactive-element/reactive-element.js");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){!function(e,t,r){(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l={attribute:!0,type:String,converter:n.Ts,reflect:!1,hasChanged:n.Qu},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,{kind:o,metadata:n}=r,a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),a.set(r.name,e),"accessor"===o){var{name:i}=r;return{set(r){var o=t.get.call(this);t.set.call(this,r),this.requestUpdate(i,o,e)},init(t){return void 0!==t&&this.C(i,void 0,e),t}}}if("setter"===o){var{name:s}=r;return function(r){var o=this[s];t.call(this,r),this.requestUpdate(s,o,e)}}throw Error("Unsupported decorator location: "+o)};function c(e){return(t,r)=>"object"==typeof r?s(e,t,r):((e,t,r)=>{var o=t.hasOwnProperty(r);return t.constructor.createProperty(r,o?i(i({},e),{},{wrapped:!0}):e),o?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}},"./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts":(e,t,r)=>{var o=r("./libs/common/utilities/src/index.ts"),n=r("./libs/map/src/components/baselayer/vl-map-base-layer.ts");class a extends n.m{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk_grijs",this.title="GRB basis laag grijs"}}a=function(e,t,r,o){var n,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(a<3?n(i):a>3?n(t,r,i):n(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i}([(0,o.a6)("vl-map-baselayer-grb-gray")],a)}}]);