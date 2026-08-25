import{u as l,j as o,C as c,W as i,X as p,s as m,x as s}from"./iframe-CY-ZM549.js";import"./vl-map-base-layer-BdyzNi5-.js";import"./vl-map-draw-polygon-action-Damrt1fi.js";import"./vl-map-delete-action-Cl08sItc.js";import"./vl-map-modify-action-BbQ_O8xJ.js";import"./vl-map-base-layer-grb-gray-D0d8kmNt.js";import"./vl-map-features-layer-Bw14ba3R.js";import"./vl-map-action-controls-BHDa8nI8.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-draw-action-Bzh_ambS.js";import"./vl-map-layer-action-q8mfqCFR.js";import"./composite-vector-layer-fFVJWLGh.js";import"./vl-map-vector-layer-C3_HId6n.js";import"./select-action-C0qTuwez.js";function r(n){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...l(),...n.components},{FluxComponentMetaData:e}=a;return e||v("FluxComponentMetaData"),o.jsxs(o.Fragment,{children:[o.jsx(a.h1,{id:"map-action-controls",children:"Map Action Controls"}),`
`,o.jsx(e,{id:"map-components-controls-action-controls"}),`
`,o.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,o.jsxs(a.p,{children:["Gebruik de ",o.jsx(a.code,{children:"map-action-controls"}),` component als wrapper rond
`,o.jsx(a.a,{href:"/docs/map-controls-action-control--map-action-control-default",children:"map-action-control"})," componenten.",o.jsx("br",{}),`
De `,o.jsx(a.code,{children:"map-action-controls"})," zorgt ervoor dat de map-acties in de rechterbovenhoek van de ",o.jsx(a.code,{children:"map"})," afgebeeld worden.",o.jsx("br",{}),`
Verder zorgt deze ervoor dat er altijd maar 1 actieve `,o.jsx(a.code,{children:"map-action-control"})," is."]}),`
`,o.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,o.jsx(a.pre,{children:o.jsx(a.code,{className:"language-js",children:`import { VlMapActionControls } from '@domg-wc/map';
`})}),`
`,o.jsx(a.pre,{children:o.jsx(a.code,{className:"language-html",children:`<vl-map-action-controls></vl-map-action-controls>
`})}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,o.jsx(a.p,{children:"Deze component heeft geen configuratie."})]})}function d(n={}){const{wrapper:a}={...l(),...n.components};return a?o.jsx(a,{...n,children:o.jsx(r,{...n})}):r(n)}function v(n,a){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const _={id:"map-controls-action-controls",title:"map/controls/action-controls",tags:["autodocs"],args:p,argTypes:i,parameters:{docs:{page:d},controls:{hideNoControlsWarning:!0}}},t=m({},()=>s`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action id="draw-action"></vl-map-draw-polygon-action>
                <vl-map-modify-action id="modify-action"></vl-map-modify-action>
                <vl-map-delete-action id="delete-action"></vl-map-delete-action>
            </vl-map-features-layer>
            <vl-map-action-controls>
                <vl-map-action-control action-id="draw-action" label="Teken"></vl-map-action-control>
                <vl-map-action-control action-id="modify-action" label="Editeer"></vl-map-action-control>
                <vl-map-action-control action-id="delete-action" label="Verwijder"></vl-map-action-control>
            </vl-map-action-controls>
        </vl-map>
    `);t.storyName="vl-map-action-controls - default";t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story({}, () => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action id="draw-action"></vl-map-draw-polygon-action>
                <vl-map-modify-action id="modify-action"></vl-map-modify-action>
                <vl-map-delete-action id="delete-action"></vl-map-delete-action>
            </vl-map-features-layer>
            <vl-map-action-controls>
                <vl-map-action-control action-id="draw-action" label="Teken"></vl-map-action-control>
                <vl-map-action-control action-id="modify-action" label="Editeer"></vl-map-action-control>
                <vl-map-action-control action-id="delete-action" label="Verwijder"></vl-map-action-control>
            </vl-map-action-controls>
        </vl-map>
    \`)`,...t.parameters?.docs?.source}}};const k=["MapActionControlsDefault"];export{t as MapActionControlsDefault,k as __namedExportsOrder,_ as default};
