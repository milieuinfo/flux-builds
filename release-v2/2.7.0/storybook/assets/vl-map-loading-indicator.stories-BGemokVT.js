import{u as l,j as n,C as s,H as c,I as p,s as m,x as g,r as u,h as v}from"./iframe-BRJWU34U.js";import{R as r}from"./vl-map-base-layer-mxB9Jgb1.js";import"./vl-map-base-layer-grb-gray-Di19ej0R.js";import"./vl-map-loading-indicator-DIz3UnAJ.js";import"./preload-helper-D9Z9MdNV.js";function i(o){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...l(),...o.components},{FluxMetaData:e}=a;return e||b("FluxMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(a.h1,{id:"map-loading-indicator",children:"Map Loading Indicator"}),`
`,n.jsx(e,{id:"map-loading-indicator"}),`
`,n.jsxs(a.p,{children:["Gebruik de ",n.jsx(a.code,{children:"map-loading-indicator"})," component om op te vangen wanneer de ",n.jsx(a.a,{href:"/docs/map-map--map-default",children:"vl-map"}),` aan het
laden is.`,n.jsx("br",{}),`
Toont een 'loading' bar bovenaan de map.`]}),`
`,n.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-js",children:`import { VlMapLoadingIndicator } from '@domg-wc/map';
`})}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-html",children:`<vl-map-loading-indicator></vl-map-loading-indicator>
`})}),`
`,n.jsx(s,{of:t})]})}function h(o={}){const{wrapper:a}={...l(),...o.components};return a?n.jsx(a,{...o,children:n.jsx(i,{...o})}):i(o)}function b(o,a){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}u([v]);const M={id:"map-loading-indicator",title:"map/loading-indicator",tags:["autodocs"],args:p,argTypes:c,parameters:{docs:{page:h},controls:{hideNoControlsWarning:!0}}},d=async o=>{const a=document.querySelector("vl-map");a.map.dispatchEvent(new r("loadstart",a.map)),await new Promise(e=>setTimeout(e,o)),a.map.dispatchEvent(new r("loadend",a.map))},t=m({},()=>g`
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
    `);t.storyName="vl-map-loading-indicator - default";t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story({}, () => html\`
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
    \`)`,...t.parameters?.docs?.source}}};const k=["MapLoadingIndicatorDefault"];export{t as MapLoadingIndicatorDefault,k as __namedExportsOrder,M as default};
