import{u as l,j as o,C as c,H as i,I as s,s as m,x as p}from"./iframe-BRJWU34U.js";import"./vl-map-base-layer-mxB9Jgb1.js";import"./vl-map-draw-polygon-action-uHPrsMc9.js";import"./vl-map-delete-action-CzPS5WCd.js";import"./vl-map-modify-action-ZHcO0FOc.js";import"./vl-map-base-layer-grb-gray-Di19ej0R.js";import"./vl-map-features-layer-B_ClZkbk.js";import"./vl-map-action-controls-MTkIn2Lt.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-draw-action-DKMqKN8Y.js";import"./vl-map-layer-action-2JAAiOGD.js";import"./composite-vector-layer-BuQYujkN.js";import"./vl-map-vector-layer-BFohRpWd.js";import"./select-action-BvgTSUoJ.js";function r(n){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...n.components},{FluxMetaData:t}=a;return t||v("FluxMetaData"),o.jsxs(o.Fragment,{children:[o.jsx(a.h1,{id:"map-action-controls",children:"Map Action Controls"}),`
`,o.jsx(t,{id:"map-controls-action-controls"}),`
`,o.jsxs(a.p,{children:["Gebruik de ",o.jsx(a.code,{children:"map-action-controls"}),` component als wrapper rond
`,o.jsx(a.a,{href:"/docs/map-controls-action-control--map-action-control-default",children:"map-action-control"})," componenten.",o.jsx("br",{}),`
De `,o.jsx(a.code,{children:"map-action-controls"})," zorgt ervoor dat de map-acties in de rechterbovenhoek van de ",o.jsx(a.code,{children:"map"})," afgebeeld worden.",o.jsx("br",{}),`
Verder zorgt deze ervoor dat er altijd maar 1 actieve `,o.jsx(a.code,{children:"map-action-control"})," is."]}),`
`,o.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,o.jsx(a.pre,{children:o.jsx(a.code,{className:"language-js",children:`import { VlMapActionControls } from '@domg-wc/map';
`})}),`
`,o.jsx(a.pre,{children:o.jsx(a.code,{className:"language-html",children:`<vl-map-action-controls></vl-map-action-controls>
`})}),`
`,o.jsx(c,{of:e}),`
`,o.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,o.jsx(a.p,{children:"Deze component heeft geen configuratie."}),`
`,o.jsx(a.h2,{id:"referenties",children:"Referenties"}),`
`,o.jsx(a.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,o.jsx(a.p,{children:o.jsx(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-action-controls--default",rel:"nofollow",children:"Legacy Storybook - Map Action Controls"})})]})}function d(n={}){const{wrapper:a}={...l(),...n.components};return a?o.jsx(a,{...n,children:o.jsx(r,{...n})}):r(n)}function v(n,a){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const E={id:"map-controls-action-controls",title:"map/controls/action-controls",tags:["autodocs"],args:s,argTypes:i,parameters:{docs:{page:d},controls:{hideNoControlsWarning:!0}}},e=m({},()=>p`
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
    `);e.storyName="vl-map-action-controls - default";e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`story({}, () => html\`
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
    \`)`,...e.parameters?.docs?.source}}};const _=["MapActionControlsDefault"];export{e as MapActionControlsDefault,_ as __namedExportsOrder,E as default};
