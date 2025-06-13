"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[1241],{"./node_modules/lit/decorators.js":(e,t,o)=>{var r;o.d(t,{Mo:()=>n,Cb:()=>l});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{let{kind:o,elements:r}=t;return{kind:o,elements:r,finisher(t){customElements.define(e,t)}}})(e,t),a=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}}:{...t,finisher(o){o.createProperty(t.key,e)}},i=(e,t,o)=>{t.constructor.createProperty(o,e)};function l(e){return(t,o)=>void 0!==o?i(e,t,o):a(e,t)}null!=(null===(r=window.HTMLSlotElement)||void 0===r?void 0:r.prototype.assignedElements)||((e,t)=>e.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE))},"./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts":(e,t,o)=>{var r=o("./libs/common/utilities/src/index.ts"),n=o("./libs/map/src/components/baselayer/vl-map-base-layer.ts");let a=class extends n.m{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk_grijs",this.title="GRB basis laag grijs"}};a=function(e,t,o,r){var n,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(a<3?n(i):a>3?n(t,o,i):n(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i}([(0,r.a6)("vl-map-baselayer-grb-gray")],a)},"./libs/map/src/components/current-location/stories/vl-map-current-location.stories.ts":(e,t,o)=>{o.r(t),o.d(t,{MapCurrentLocationDefault:()=>x,default:()=>j});var r=o("./node_modules/lit-html/lit-html.js");o("./libs/map/src/vl-map.ts"),o("./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts");var n=o("./libs/elements/src/index.ts"),a=o("./libs/common/utilities/src/index.ts"),i=o("./node_modules/lit/index.js"),l=o("./node_modules/lit/decorators.js"),s=o("./node_modules/proj4/lib/index.js");let c=(0,i.iv)`
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
`,d=[c,...n.CX],p="Huidige locatie",m=class extends a.fS{static{(0,a.YV)([n.Gi])}static get styles(){return[(0,i.iv)`
                ${(0,i.$m)(d)}}
            `]}static get properties(){return{zoom:{type:Number,attribute:"data-vl-zoom",reflect:!0},tooltip:{type:String,attribute:"data-vl-tooltip",reflect:!0}}}constructor(){super(),this.zoom=10,this.tooltip=p}connectedCallback(){super.connectedCallback(),this._mapElement=this.closest("vl-map")}_currentLocation(){navigator.geolocation.getCurrentPosition(e=>{let t=new s.Z.Proj("EPSG:4326"),o=new s.Z.Proj(this._mapElement.map.projection.getCode()),r=new s.Z.Point(e.coords.longitude,e.coords.latitude),n=s.Z.transform(t,o,r);this._mapElement.map.getView().setCenter([n.x,n.y]),this._mapElement.map.getView().setZoom(this.zoom)})}render(){return(0,i.dy)` <div class="uig-map-current-location">
            <button @click=${()=>this._currentLocation()} type="button" title="${this.tooltip}">
                <span is="vl-icon" data-vl-icon="location-gps"></span>
            </button>
        </div>`}};m=function(e,t,o,r){var n,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(a<3?n(i):a>3?n(t,o,i):n(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i}([(0,l.Mo)("vl-map-current-location")],m);var u=o("./libs/common/storybook/src/index.ts");let g={tooltip:p,zoom:10},b={tooltip:{name:"data-vl-tooltip",description:"Bepaalt de tekst van de tooltip van de huidige locatie knop.",table:{type:{summary:u.vK.STRING},category:u.aA.ATTRIBUTES,defaultValue:{summary:g.tooltip}}},zoom:{name:"data-vl-zoom",description:"Bepaalt hoever er ingezoomd wordt bij het klikken op de huidige locatie knop.",control:{type:"range",min:1,max:13,step:1},table:{type:{summary:u.vK.NUMBER},category:u.aA.ATTRIBUTES,defaultValue:{summary:g.zoom}}}};o("./node_modules/react/index.js");var h=o("./node_modules/react/jsx-runtime.js"),y=o("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),v=o("./node_modules/@storybook/blocks/dist/index.mjs");function f(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,y.ah)(),e.components);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t.h1,{id:"map-current-location",children:"Map Current Location"}),"\n",(0,h.jsxs)(t.p,{children:["Gebruik het ",(0,h.jsx)(t.code,{children:"map-current-location"})," component om een huidige locatie knop af te beelden op de map.",(0,h.jsx)("br",{}),"\nNa het drukken op de knop wordt de huidige locatie van de gebruiker centraal afgebeeld."]}),"\n",(0,h.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-js",children:"import { VlMapCurrentLocation } from '@domg-wc/map';\n"})}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-html",children:"<vl-map-current-location></vl-map-current-location>\n"})}),"\n",(0,h.jsx)(v.Xz,{of:x}),"\n",(0,h.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,h.jsx)(v.Ed,{of:x}),"\n",(0,h.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,h.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,h.jsx)(t.p,{children:(0,h.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-current-location--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map Current Location"})})]})}let j={title:"map/current-location",tags:["autodocs"],args:(0,u.T8)(g),argTypes:(0,u.xj)(b),parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,y.ah)(),e.components);return t?(0,h.jsx)(t,Object.assign({},e,{children:(0,h.jsx)(f,e)})):f(e)}}}},x=(0,u.yg)(g,({tooltip:e,zoom:t})=>(0,r.dy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-current-location data-vl-tooltip=${e} data-vl-zoom=${t}></vl-map-current-location>
        </vl-map>
    `);x.storyName="vl-map-current-location - default",x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"story(mapCurrentLocationArgs, ({\n  tooltip,\n  zoom\n}) => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-current-location data-vl-tooltip=${tooltip} data-vl-zoom=${zoom}></vl-map-current-location>\n        </vl-map>\n    `)",...x.parameters?.docs?.source}}}}}]);