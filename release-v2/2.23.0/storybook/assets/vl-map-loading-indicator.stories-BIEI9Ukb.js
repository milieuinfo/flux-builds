import{d as s,a as c,s as p}from"./stories.helper-DYHi_5m6.js";import{u as l,j as n,C as m,r as g,e as u,b as v}from"./iframe-Cv28D2NX.js";import{Z as r}from"./vl-map-base-layer-CmFLB2kf.js";import"./vl-map-base-layer-grb-gray-B3yI26-B.js";import"./vl-map-loading-indicator-BWok-pNf.js";import"./preload-helper-PPVm8Dsz.js";function i(o){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...l(),...o.components},{FluxComponentMetaData:t}=a;return t||b("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(a.h1,{id:"map-loading-indicator",children:"Map Loading Indicator"}),`
`,n.jsx(t,{id:"map-components-loading-indicator"}),`
`,n.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,n.jsxs(a.p,{children:["Gebruik de ",n.jsx(a.code,{children:"map-loading-indicator"})," component om op te vangen wanneer de ",n.jsx(a.a,{href:"/docs/map-map--map-default",children:"vl-map"}),` aan het
laden is.`,n.jsx("br",{}),`
Toont een 'loading' bar bovenaan de map.`]}),`
`,n.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-js",children:`import { VlMapLoadingIndicator } from '@domg-wc/map';
`})}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-html",children:`<vl-map-loading-indicator></vl-map-loading-indicator>
`})}),`
`,n.jsx(m,{of:e})]})}function h(o={}){const{wrapper:a}={...l(),...o.components};return a?n.jsx(a,{...o,children:n.jsx(i,{...o})}):i(o)}function b(o,a){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}g([u]);const k={id:"map-loading-indicator",title:"map/loading-indicator",tags:["autodocs"],args:c,argTypes:s,parameters:{docs:{page:h},controls:{hideNoControlsWarning:!0}}},d=async o=>{const a=document.querySelector("vl-map");a.map.dispatchEvent(new r("loadstart",a.map)),await new Promise(t=>setTimeout(t,o)),a.map.dispatchEvent(new r("loadend",a.map))},e=p({},()=>v`
        <div style="margin-bottom:10px">
            <vl-button
                data-cy="short-wait"
                @click="${()=>{d(500)}}"
            >
                Fake kort wachten
            </vl-button>
            <vl-button
                data-cy="long-wait"
                @click="${()=>{d(1e4)}}"
            >
                Fake lang wachten
            </vl-button>
        </div>
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-loading-indicator></vl-map-loading-indicator>
        </vl-map>
    `);e.storyName="vl-map-loading-indicator - default";const C=["MapLoadingIndicatorDefault"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`story({}, () => html\`
        <div style="margin-bottom:10px">
            <vl-button
                data-cy="short-wait"
                @click="\${() => {
  fakeLoadMap(500);
}}"
            >
                Fake kort wachten
            </vl-button>
            <vl-button
                data-cy="long-wait"
                @click="\${() => {
  fakeLoadMap(10000);
}}"
            >
                Fake lang wachten
            </vl-button>
        </div>
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-loading-indicator></vl-map-loading-indicator>
        </vl-map>
    \`)`,...e.parameters?.docs?.source}}};export{e as MapLoadingIndicatorDefault,C as __namedExportsOrder,k as default};
