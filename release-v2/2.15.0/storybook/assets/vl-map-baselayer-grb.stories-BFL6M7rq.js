import{u as m,j as e,C as l,s as p,x as c}from"./iframe-CsDE-vVI.js";import"./vl-map-base-layer-CgI99i60.js";import{m as d,a as i}from"./vl-map-baselayer.stories-arg-BdqLIGZR.js";import"./vl-map-base-layer-grb-wEYCmMuY.js";import"./preload-helper-D9Z9MdNV.js";function t(r){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...r.components},{FluxComponentMetaData:o}=a;return o||y("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-baselayer-grb",children:"Map Baselayer GRB"}),`
`,e.jsx(o,{id:"map-components-baselayer-base-layer-grb"}),`
`,e.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(a.p,{children:["Gebruik het ",e.jsx(a.code,{children:"map-baselayer-grb"})," component om een basis GRB kaartlaag af te beelden.",e.jsx("br",{}),`
Dit component erft over van het `,e.jsx(a.a,{href:"/docs/map-baselayer--map-baselayer-default",children:"map-baselayer"})," component."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlMapBaseLayerGRB } from '@domg-wc/map';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-map-baselayer-grb></vl-map-baselayer-grb>
`})}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(a.p,{children:"Deze component heeft geen configuratie."}),`
`,e.jsx(a.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(a.h3,{id:"background-layer",children:"Background Layer"}),`
`,e.jsx(l,{of:s})]})}function b(r={}){const{wrapper:a}={...m(),...r.components};return a?e.jsx(a,{...r,children:e.jsx(t,{...r})}):t(r)}function y(r,a){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const f={id:"map-baselayer-baselayer-grb",title:"map/baselayer/baselayer-grb",tags:["autodocs"],args:i,argTypes:d,parameters:{docs:{page:b},controls:{hideNoControlsWarning:!0}}},n=p({},()=>c`
        <vl-map lambert2008>
            <vl-map-baselayer-grb></vl-map-baselayer-grb>
        </vl-map>
    `);n.storyName="vl-map-baselayer-grb - default";const s=p({},()=>c`
        <vl-map lambert2008>
            <vl-map-baselayer-grb background-layer></vl-map-baselayer-grb>
        </vl-map>
    `);s.storyName="vl-map-baselayer-grb - background layer";n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story({}, () => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb></vl-map-baselayer-grb>
        </vl-map>
    \`)`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story({}, () => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb background-layer></vl-map-baselayer-grb>
        </vl-map>
    \`)`,...s.parameters?.docs?.source}}};const j=["MapBaselayerGrbDefault","MapBaselayerGrbBackgroundLayer"];export{s as MapBaselayerGrbBackgroundLayer,n as MapBaselayerGrbDefault,j as __namedExportsOrder,f as default};
