"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4495],{"../../libs/map/src/components/current-location/stories/vl-map-current-location.stories.ts":(e,t,o)=>{o.r(t),o.d(t,{MapCurrentLocationDefault:()=>u,__namedExportsOrder:()=>b,default:()=>d});var r=o("../../resources/utils-storybook/index.ts"),n=o("../../node_modules/lit-html/lit-html.js");o("../../libs/map/src/vl-map.ts"),o("../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts"),o("../../libs/map/src/components/current-location/vl-map-current-location.ts");var a=o("../../libs/map/src/components/current-location/vl-map-current-location.defaults.ts");let l={...r.D8,tooltip:a.K,zoom:a.a},i={...r.RN,tooltip:{name:"tooltip",description:"Bepaalt de tekst van de tooltip van de huidige locatie knop.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:l.tooltip}}},zoom:{name:"zoom",description:"Bepaalt hoever er ingezoomd wordt bij het klikken op de huidige locatie knop.",control:{type:r.VH.RANGE,min:1,max:13,step:1},table:{type:{summary:r.QE.NUMBER},category:r.R6.ATTRIBUTES,defaultValue:{summary:l.zoom}}}};o("../../node_modules/react/index.js");var s=o("../../node_modules/react/jsx-runtime.js"),c=o("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),p=o("../../node_modules/@storybook/blocks/dist/index.mjs");function m(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,c.RP)(),e.components),{FluxMetaData:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("FluxMetaData",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"map-current-location",children:"Map Current Location"}),"\n",(0,s.jsx)(o,{id:"map-current-location"}),"\n",(0,s.jsxs)(t.p,{children:["Gebruik het ",(0,s.jsx)(t.code,{children:"map-current-location"})," component om een huidige locatie knop af te beelden op de map.",(0,s.jsx)("br",{}),"\nNa het drukken op de knop wordt de huidige locatie van de gebruiker centraal afgebeeld."]}),"\n",(0,s.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { VlMapCurrentLocation } from '@domg-wc/map';\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<vl-map-current-location></vl-map-current-location>\n"})}),"\n",(0,s.jsx)(p.Hl,{of:u}),"\n",(0,s.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,s.jsx)(p.ov,{of:u}),"\n",(0,s.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,s.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-current-location--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map Current Location"})})]})}let d={id:"map-current-location",title:"map/current-location",tags:["autodocs"],args:l,argTypes:i,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,c.RP)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(m,e)})):m(e)}}}},u=(0,r._7)(l,({tooltip:e,zoom:t})=>(0,n.qy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-current-location tooltip=${e} zoom=${t}></vl-map-current-location>
        </vl-map>
    `);u.storyName="vl-map-current-location - default",u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"story(mapCurrentLocationArgs, ({\n  tooltip,\n  zoom\n}) => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-current-location tooltip=${tooltip} zoom=${zoom}></vl-map-current-location>\n        </vl-map>\n    `)",...u.parameters?.docs?.source}}};let b=["MapCurrentLocationDefault"]},"../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts":(e,t,o)=>{o.d(t,{L:()=>a});var r=o("../../libs/common/src/index.ts"),n=o("../../libs/map/src/components/baselayer/vl-map-base-layer.ts");class a extends n.j{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk_grijs",this.title="GRB basis laag grijs"}}a=function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l}([(0,r.M1)("vl-map-baselayer-grb-gray")],a)},"../../libs/map/src/components/current-location/vl-map-current-location.defaults.ts":(e,t,o)=>{o.d(t,{K:()=>n,a:()=>r});let r=10,n="Huidige locatie"},"../../libs/map/src/components/current-location/vl-map-current-location.ts":(e,t,o)=>{var r=o("../../libs/common/src/index.ts"),n=o("../../libs/components/src/atom/index.ts"),a=o("../../node_modules/lit/index.js"),l=o("../../node_modules/lit/decorators.js"),i=o("../../node_modules/proj4/lib/index.js"),s=o("../../libs/map/src/components/current-location/vl-map-current-location.defaults.ts"),c=o("../../libs/styles/src/index.ts");let p=[(0,a.AH)`
    div.flux-map-current-location {
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

    div.flux-map-current-location button {
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

    div.flux-map-current-location .vl-icon {
        padding: 0 0.9rem;
        line-height: 3.5rem;
    }
`,...c.oi];class m extends r.jW{constructor(){super(),this.zoom=s.a,this.tooltip=s.K}static get styles(){return[(0,a.AH)`
                ${(0,a.iz)(p)}
            `,n.mU]}static get properties(){return{zoom:{type:Number,attribute:"zoom",reflect:!0},tooltip:{type:String,attribute:"tooltip",reflect:!0}}}connectedCallback(){super.connectedCallback(),this._mapElement=this.closest("vl-map")}_currentLocation(){navigator.geolocation.getCurrentPosition(e=>{let t=i.A.Proj("EPSG:4326"),o=i.A.Proj(this._mapElement.map.projection.getCode()),r=i.A.Point(e.coords.longitude,e.coords.latitude),n=i.A.transform(t,o,r);this._mapElement.map.getView().setCenter([n.x,n.y]),this._mapElement.map.getView().setZoom(this.zoom)})}render(){return(0,a.qy)` <div class="flux-map-current-location">
            <button @click=${()=>this._currentLocation()} type="button" title="${this.tooltip}">
                <span class="vl-icon vl-icon--location-gps"></span>
            </button>
        </div>`}}m=function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l}([(0,l.EM)("vl-map-current-location")],m)}}]);