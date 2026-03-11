import{u as l,j as n,C as s,U as c,W as p,s as m,x as g,r as u,d as v}from"./iframe-BWsn3Pr7.js";import{Y as r}from"./vl-map-base-layer-GzsTO7HG.js";import"./vl-map-base-layer-grb-gray-DkR4pSJA.js";import"./vl-map-loading-indicator-B1WNAVBi.js";import"./preload-helper-D9Z9MdNV.js";function i(o){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...l(),...o.components},{FluxComponentMetaData:t}=a;return t||b("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(a.h1,{id:"map-loading-indicator",children:"Map Loading Indicator"}),`
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
`,n.jsx(s,{of:e})]})}function h(o={}){const{wrapper:a}={...l(),...o.components};return a?n.jsx(a,{...o,children:n.jsx(i,{...o})}):i(o)}function b(o,a){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}u([v]);const M={id:"map-loading-indicator",title:"map/loading-indicator",tags:["autodocs"],args:p,argTypes:c,parameters:{docs:{page:h},controls:{hideNoControlsWarning:!0}}},d=async o=>{const a=document.querySelector("vl-map");a.map.dispatchEvent(new r("loadstart",a.map)),await new Promise(t=>setTimeout(t,o)),a.map.dispatchEvent(new r("loadend",a.map))},e=m({},()=>g`
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
    `);e.storyName="vl-map-loading-indicator - default";e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`story({}, () => html\`
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
    \`)`,...e.parameters?.docs?.source}}};const k=["MapLoadingIndicatorDefault"];export{e as MapLoadingIndicatorDefault,k as __namedExportsOrder,M as default};
