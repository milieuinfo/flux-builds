import{u as m,j as e,C as s,s as p,x as c}from"./iframe-Ds54rb_7.js";import"./vl-map-base-layer-CUICGl8E.js";import{m as h,a as d}from"./vl-map-baselayer.stories-arg-BmeRF-4u.js";import"./vl-map-base-layer-grb-ortho-DwEFo3lQ.js";import"./preload-helper-D9Z9MdNV.js";function l(r){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...r.components},{FluxMetaData:n}=a;return n||b("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-baselayer-grb-ortho",children:"Map Baselayer GRB Ortho"}),`
`,e.jsx(n,{id:"map-baselayer-baselayer-grb-ortho"}),`
`,e.jsxs(a.p,{children:["Gebruik de ",e.jsx(a.code,{children:"map-baselayer-grb-ortho"})," component om een basis GRB ortho kaartlaag af te beelden.",e.jsx("br",{}),`
Deze component erft over van de `,e.jsx(a.a,{href:"/docs/map-baselayer--map-baselayer-default",children:"map-baselayer"})," component."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlMapBaseLayerGRBOrtho } from '@domg-wc/map';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
`})}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(a.p,{children:"Deze component heeft geen configuratie."}),`
`,e.jsx(a.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(a.h3,{id:"background-layer",children:"Background Layer"}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(a.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(a.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-baselayer-grb-ortho--default",rel:"nofollow",children:"Legacy Storybook - Map Base Layer Grb Ortho"})}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapBaseLayerGRBOrtho.html",rel:"nofollow",children:"Legacy Documentatie - Map Base Layer Grb Ortho"})})]})}function i(r={}){const{wrapper:a}={...m(),...r.components};return a?e.jsx(a,{...r,children:e.jsx(l,{...r})}):l(r)}function b(r,a){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const f={id:"map-baselayer-baselayer-grb-ortho",title:"map/baselayer/baselayer-grb-ortho",tags:["autodocs"],args:d,argTypes:h,parameters:{docs:{page:i},controls:{hideNoControlsWarning:!0}}},o=p({},()=>c`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
        </vl-map>
    `);o.storyName="vl-map-baselayer-grb-ortho - default";const t=p({},()=>c`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-ortho background-layer></vl-map-baselayer-grb-ortho>
        </vl-map>
    `);t.storyName="vl-map-baselayer-grb-ortho - background layer";o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story({}, () => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
        </vl-map>
    \`)`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story({}, () => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-ortho background-layer></vl-map-baselayer-grb-ortho>
        </vl-map>
    \`)`,...t.parameters?.docs?.source}}};const j=["MapBaselayerGrbOrthoDefault","MapBaselayerGrbOrthoBackgroundLayer"];export{t as MapBaselayerGrbOrthoBackgroundLayer,o as MapBaselayerGrbOrthoDefault,j as __namedExportsOrder,f as default};
