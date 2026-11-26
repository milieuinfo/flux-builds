import{s as m}from"./stories.helper-DYHi_5m6.js";import{u as p,j as e,C as n,b as c}from"./iframe-Cv28D2NX.js";import"./vl-map-base-layer-CmFLB2kf.js";import{m as d,a as b}from"./vl-map-baselayer.stories-arg-Cubroaiz.js";import"./vl-map-base-layer-grb-ortho-Bi6K5MjX.js";import"./preload-helper-PPVm8Dsz.js";function l(r){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...p(),...r.components},{FluxComponentMetaData:t}=a;return t||h("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-baselayer-grb-ortho",children:"Map Baselayer GRB Ortho"}),`
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
`,e.jsx(n,{of:s})]})}function i(r={}){const{wrapper:a}={...p(),...r.components};return a?e.jsx(a,{...r,children:e.jsx(l,{...r})}):l(r)}function h(r,a){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const j={id:"map-baselayer-baselayer-grb-ortho",title:"map/baselayer/baselayer-grb-ortho",tags:["autodocs"],args:b,argTypes:d,parameters:{docs:{page:i},controls:{hideNoControlsWarning:!0}}},o=m({},()=>c`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
        </vl-map>
    `);o.storyName="vl-map-baselayer-grb-ortho - default";const s=m({},()=>c`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-ortho background-layer></vl-map-baselayer-grb-ortho>
        </vl-map>
    `);s.storyName="vl-map-baselayer-grb-ortho - background layer";const B=["MapBaselayerGrbOrthoDefault","MapBaselayerGrbOrthoBackgroundLayer"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story({}, () => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
        </vl-map>
    \`)`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story({}, () => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-ortho background-layer></vl-map-baselayer-grb-ortho>
        </vl-map>
    \`)`,...s.parameters?.docs?.source}}};export{s as MapBaselayerGrbOrthoBackgroundLayer,o as MapBaselayerGrbOrthoDefault,B as __namedExportsOrder,j as default};
