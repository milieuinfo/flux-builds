import{u as m,j as a,C as l,s as p,x as y}from"./iframe-CY-ZM549.js";import"./vl-map-base-layer-BdyzNi5-.js";import{m as c,a as d}from"./vl-map-baselayer.stories-arg-a4ln6AMQ.js";import"./vl-map-base-layer-grb-gray-D0d8kmNt.js";import"./preload-helper-D9Z9MdNV.js";function t(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...r.components},{FluxComponentMetaData:o}=e;return o||i("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map-baselayer-grb-gray",children:"Map Baselayer GRB Gray"}),`
`,a.jsx(o,{id:"map-components-baselayer-base-layer-grb-gray"}),`
`,a.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,a.jsxs(e.p,{children:["Gebruik de ",a.jsx(e.code,{children:"map-baselayer-grb-gray"})," component om een basis GRB kaartlaag met grijstinten af te beelden.",a.jsx("br",{}),`
Deze component erft over van de `,a.jsx(e.a,{href:"/docs/map-baselayer--map-baselayer-default",children:"map-baselayer"})," component."]}),`
`,a.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`import { VlMapBaseLayerGRBGray } from '@domg-wc/map';
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
`})}),`
`,a.jsx(l,{of:s}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(e.p,{children:"Deze component heeft geen configuratie."}),`
`,a.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,a.jsx(e.h3,{id:"background-layer",children:"Background Layer"}),`
`,a.jsx(l,{of:n})]})}function g(r={}){const{wrapper:e}={...m(),...r.components};return e?a.jsx(e,{...r,children:a.jsx(t,{...r})}):t(r)}function i(r,e){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const j={id:"map-baselayer-baselayer-grb-gray",title:"map/baselayer/baselayer-grb-gray",tags:["autodocs"],args:d,argTypes:c,parameters:{docs:{page:g},controls:{hideNoControlsWarning:!0}}},s=p({},()=>y`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
    `);s.storyName="vl-map-baselayer-grb-gray - default";const n=p({},()=>y`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray background-layer></vl-map-baselayer-grb-gray>
        </vl-map>
    `);n.storyName="vl-map-baselayer-grb-gray - background layer";s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story({}, () => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
    \`)`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story({}, () => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray background-layer></vl-map-baselayer-grb-gray>
        </vl-map>
    \`)`,...n.parameters?.docs?.source}}};const f=["MapBaselayerGrbGrayDefault","MapBaselayerGrbGrayBackgroundLayer"];export{n as MapBaselayerGrbGrayBackgroundLayer,s as MapBaselayerGrbGrayDefault,f as __namedExportsOrder,j as default};
