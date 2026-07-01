import{u as m,j as e,C as n,s as p,x as c}from"./iframe-B0laZkYe.js";import"./vl-map-base-layer-BcyU3_Yv.js";import{m as d,a as b}from"./vl-map-baselayer.stories-arg-BpUMHA-L.js";import"./vl-map-base-layer-grb-ortho-CimBmPLp.js";import"./preload-helper-D9Z9MdNV.js";function l(r){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...r.components},{FluxComponentMetaData:t}=a;return t||i("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-baselayer-grb-ortho",children:"Map Baselayer GRB Ortho"}),`
`,e.jsx(t,{id:"map-components-baselayer-base-layer-grb-ortho"}),`
`,e.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(a.p,{children:["Gebruik de ",e.jsx(a.code,{children:"map-baselayer-grb-ortho"})," component om een basis GRB ortho kaartlaag af te beelden.",e.jsx("br",{}),`
Deze component erft over van de `,e.jsx(a.a,{href:"/docs/map-baselayer--map-baselayer-default",children:"map-baselayer"})," component."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlMapBaseLayerGRBOrtho } from '@domg-wc/map';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
`})}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(a.p,{children:"Deze component heeft geen configuratie."}),`
`,e.jsx(a.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(a.h3,{id:"background-layer",children:"Background Layer"}),`
`,e.jsx(n,{of:s})]})}function h(r={}){const{wrapper:a}={...m(),...r.components};return a?e.jsx(a,{...r,children:e.jsx(l,{...r})}):l(r)}function i(r,a){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const f={id:"map-baselayer-baselayer-grb-ortho",title:"map/baselayer/baselayer-grb-ortho",tags:["autodocs"],args:b,argTypes:d,parameters:{docs:{page:h},controls:{hideNoControlsWarning:!0}}},o=p({},()=>c`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
        </vl-map>
    `);o.storyName="vl-map-baselayer-grb-ortho - default";const s=p({},()=>c`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-ortho background-layer></vl-map-baselayer-grb-ortho>
        </vl-map>
    `);s.storyName="vl-map-baselayer-grb-ortho - background layer";o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story({}, () => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
        </vl-map>
    \`)`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story({}, () => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-ortho background-layer></vl-map-baselayer-grb-ortho>
        </vl-map>
    \`)`,...s.parameters?.docs?.source}}};const j=["MapBaselayerGrbOrthoDefault","MapBaselayerGrbOrthoBackgroundLayer"];export{s as MapBaselayerGrbOrthoBackgroundLayer,o as MapBaselayerGrbOrthoDefault,j as __namedExportsOrder,f as default};
