"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[1241],{"./libs/map/src/components/current-location/stories/vl-map-current-location.stories.ts":(e,t,o)=>{o.r(t),o.d(t,{MapCurrentLocationDefault:()=>j,__namedExportsOrder:()=>x,default:()=>f});var r=o("./libs/common/storybook/src/index.ts"),a=o("./node_modules/lit-html/lit-html.js");o("./libs/map/src/vl-map.ts"),o("./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts");var n=o("./libs/elements/src/index.ts"),i=o("./libs/common/utilities/src/index.ts"),l=o("./node_modules/lit/index.js"),s=o("./node_modules/lit/decorators.js"),c=o("./node_modules/proj4/lib/index.js");let d=[(0,l.iv)`
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
`,...n.CX],p="Huidige locatie";class m extends i.fS{static{(0,i.YV)([n.Gi])}static get styles(){return[(0,l.iv)`
                ${(0,l.$m)(d)}}
            `]}static get properties(){return{zoom:{type:Number,attribute:"data-vl-zoom",reflect:!0},tooltip:{type:String,attribute:"data-vl-tooltip",reflect:!0}}}constructor(){super(),this.zoom=10,this.tooltip=p}connectedCallback(){super.connectedCallback(),this._mapElement=this.closest("vl-map")}_currentLocation(){navigator.geolocation.getCurrentPosition(e=>{let t=new c.Z.Proj("EPSG:4326"),o=new c.Z.Proj(this._mapElement.map.projection.getCode()),r=new c.Z.Point(e.coords.longitude,e.coords.latitude),a=c.Z.transform(t,o,r);this._mapElement.map.getView().setCenter([a.x,a.y]),this._mapElement.map.getView().setZoom(this.zoom)})}render(){return(0,l.dy)` <div class="uig-map-current-location">
            <button @click=${()=>this._currentLocation()} type="button" title="${this.tooltip}">
                <span is="vl-icon" data-vl-icon="location-gps"></span>
            </button>
        </div>`}}m=function(e,t,o,r){var a,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(n<3?a(i):n>3?a(t,o,i):a(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i}([(0,s.Mo)("vl-map-current-location")],m);let u={...r._O,tooltip:p,zoom:10},g={...(0,r.Wp)(),tooltip:{name:"data-vl-tooltip",description:"Bepaalt de tekst van de tooltip van de huidige locatie knop.",table:{type:{summary:r.vK.STRING},category:r.aA.ATTRIBUTES,defaultValue:{summary:u.tooltip}}},zoom:{name:"data-vl-zoom",description:"Bepaalt hoever er ingezoomd wordt bij het klikken op de huidige locatie knop.",control:{type:r.Hy.RANGE,min:1,max:13,step:1},table:{type:{summary:r.vK.NUMBER},category:r.aA.ATTRIBUTES,defaultValue:{summary:u.zoom}}}};o("./node_modules/react/index.js");var b=o("./node_modules/react/jsx-runtime.js"),h=o("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),v=o("./node_modules/@storybook/blocks/dist/index.mjs");function y(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,h.ah)(),e.components);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(t.h1,{id:"map-current-location",children:"Map Current Location"}),"\n",(0,b.jsxs)(t.p,{children:["Gebruik het ",(0,b.jsx)(t.code,{children:"map-current-location"})," component om een huidige locatie knop af te beelden op de map.",(0,b.jsx)("br",{}),"\nNa het drukken op de knop wordt de huidige locatie van de gebruiker centraal afgebeeld."]}),"\n",(0,b.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:"language-js",children:"import { VlMapCurrentLocation } from '@domg-wc/map';\n"})}),"\n",(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:"language-html",children:"<vl-map-current-location></vl-map-current-location>\n"})}),"\n",(0,b.jsx)(v.Xz,{of:j}),"\n",(0,b.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,b.jsx)(v.Ed,{of:j}),"\n",(0,b.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,b.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,b.jsx)(t.p,{children:(0,b.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-current-location--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map Current Location"})})]})}let f={title:"map/current-location",tags:["autodocs"],args:u,argTypes:g,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,h.ah)(),e.components);return t?(0,b.jsx)(t,Object.assign({},e,{children:(0,b.jsx)(y,e)})):y(e)}}}},j=(0,r.yg)(u,({tooltip:e,zoom:t})=>(0,a.dy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-current-location data-vl-tooltip=${e} data-vl-zoom=${t}></vl-map-current-location>
        </vl-map>
    `);j.storyName="vl-map-current-location - default",j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"story(mapCurrentLocationArgs, ({\n  tooltip,\n  zoom\n}) => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-current-location data-vl-tooltip=${tooltip} data-vl-zoom=${zoom}></vl-map-current-location>\n        </vl-map>\n    `)",...j.parameters?.docs?.source}}};let x=["MapCurrentLocationDefault"]},"./node_modules/lit/decorators.js":(e,t,o)=>{o.d(t,{Mo:()=>r,Cb:()=>l});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let r=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};var a=o("./node_modules/@lit/reactive-element/reactive-element.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n={attribute:!0,type:String,converter:a.Ts,reflect:!1,hasChanged:a.Qu},i=(e=n,t,o)=>{let{kind:r,metadata:a}=o,i=globalThis.litPropertyMetadata.get(a);if(void 0===i&&globalThis.litPropertyMetadata.set(a,i=new Map),i.set(o.name,e),"accessor"===r){let{name:r}=o;return{set(o){let a=t.get.call(this);t.set.call(this,o),this.requestUpdate(r,a,e)},init(t){return void 0!==t&&this.C(r,void 0,e),t}}}if("setter"===r){let{name:r}=o;return function(o){let a=this[r];t.call(this,o),this.requestUpdate(r,a,e)}}throw Error("Unsupported decorator location: "+r)};function l(e){return(t,o)=>"object"==typeof o?i(e,t,o):((e,t,o)=>{let r=t.hasOwnProperty(o);return t.constructor.createProperty(o,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}},"./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts":(e,t,o)=>{var r=o("./libs/common/utilities/src/index.ts"),a=o("./libs/map/src/components/baselayer/vl-map-base-layer.ts");class n extends a.m{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk_grijs",this.title="GRB basis laag grijs"}}n=function(e,t,o,r){var a,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(n<3?a(i):n>3?a(t,o,i):a(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i}([(0,r.a6)("vl-map-baselayer-grb-gray")],n)}}]);