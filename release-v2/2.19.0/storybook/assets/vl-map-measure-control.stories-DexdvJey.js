import{u as s,j as e,C as l,W as m,X as c,s as p,x as i}from"./iframe-CY-ZM549.js";import"./vl-map-base-layer-BdyzNi5-.js";import"./vl-map-measure-control-1B_P7rr7.js";import"./vl-map-base-layer-grb-gray-D0d8kmNt.js";import"./vl-map-features-layer-Bw14ba3R.js";import"./vl-map-action-controls-BHDa8nI8.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-draw-action-Bzh_ambS.js";import"./vl-map-layer-action-q8mfqCFR.js";import"./composite-vector-layer-fFVJWLGh.js";import"./vl-map-vector-layer-C3_HId6n.js";import"./vl-map-control.mixin-aGd0eWF0.js";function n(a){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...a.components},{FluxComponentMetaData:t}=o;return t||d("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"map-measure-control",children:"Map Measure Control"}),`
`,e.jsx(t,{id:"map-components-controls-measure-control"}),`
`,e.jsx(o.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(o.p,{children:["Gebruik de ",e.jsx(o.code,{children:"map-measure-control"}),` component om de meet-actie aan of uit te zetten met behulp van een
`,e.jsx(o.a,{href:"/docs/components-atom-button--documentatie#toggle",children:"button met toggle"}),"."]}),`
`,e.jsx(o.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`import { VlMapMeasureControl } from '@domg-wc/map';
`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<vl-map-measure-control></vl-map-measure-control>
`})}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(o.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(o.p,{children:"Deze component heeft geen configuratie."})]})}function u(a={}){const{wrapper:o}={...s(),...a.components};return o?e.jsx(o,{...a,children:e.jsx(n,{...a})}):n(a)}function d(a,o){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const w={id:"map-controls-measure-control",title:"map/controls/measure-control",tags:["autodocs"],args:c,argTypes:m,parameters:{docs:{page:u},controls:{hideNoControlsWarning:!0}}},r=p({},()=>i`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>
            <vl-map-features-layer>
                <vl-map-measure-action></vl-map-measure-action>
            </vl-map-features-layer>
        </vl-map>
    `);r.storyName="vl-map-measure-control - default";r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story({}, () => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>
            <vl-map-features-layer>
                <vl-map-measure-action></vl-map-measure-action>
            </vl-map-features-layer>
        </vl-map>
    \`)`,...r.parameters?.docs?.source}}};const E=["MapMeasureControlDefault"];export{r as MapMeasureControlDefault,E as __namedExportsOrder,w as default};
