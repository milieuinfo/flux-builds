import{u as l,j as o,C as c,U as i,W as s,s as m,x as p}from"./iframe-BJy2lIHs.js";import"./vl-map-base-layer-Bhd069p5.js";import"./vl-map-draw-polygon-action-D5yr5cgd.js";import"./vl-map-delete-action-BXJcwC0G.js";import"./vl-map-modify-action-BwUs5Sds.js";import"./vl-map-base-layer-grb-gray-CiePMeON.js";import"./vl-map-features-layer-D_GVez3n.js";import"./vl-map-action-controls-C6RUcD32.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-draw-action-DDKtBkq5.js";import"./vl-map-layer-action-JwobYCBa.js";import"./composite-vector-layer-BF7SVfkA.js";import"./vl-map-vector-layer-BlWh4n98.js";import"./select-action-DB4ru2wt.js";function r(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...a.components},{FluxComponentMetaData:t}=n;return t||v("FluxComponentMetaData"),o.jsxs(o.Fragment,{children:[o.jsx(n.h1,{id:"map-action-controls",children:"Map Action Controls"}),`
`,o.jsx(t,{id:"map-components-controls-action-controls"}),`
`,o.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,o.jsxs(n.p,{children:["Gebruik de ",o.jsx(n.code,{children:"map-action-controls"}),` component als wrapper rond
`,o.jsx(n.a,{href:"/docs/map-controls-action-control--map-action-control-default",children:"map-action-control"})," componenten.",o.jsx("br",{}),`
De `,o.jsx(n.code,{children:"map-action-controls"})," zorgt ervoor dat de map-acties in de rechterbovenhoek van de ",o.jsx(n.code,{children:"map"})," afgebeeld worden.",o.jsx("br",{}),`
Verder zorgt deze ervoor dat er altijd maar 1 actieve `,o.jsx(n.code,{children:"map-action-control"})," is."]}),`
`,o.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-js",children:`import { VlMapActionControls } from '@domg-wc/map';
`})}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-html",children:`<vl-map-action-controls></vl-map-action-controls>
`})}),`
`,o.jsx(c,{of:e}),`
`,o.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,o.jsx(n.p,{children:"Deze component heeft geen configuratie."}),`
`,o.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,o.jsx(n.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,o.jsx(n.p,{children:o.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-action-controls--default",rel:"nofollow",children:"Legacy Storybook - Map Action Controls"})})]})}function d(a={}){const{wrapper:n}={...l(),...a.components};return n?o.jsx(n,{...a,children:o.jsx(r,{...a})}):r(a)}function v(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const E={id:"map-controls-action-controls",title:"map/controls/action-controls",tags:["autodocs"],args:s,argTypes:i,parameters:{docs:{page:d},controls:{hideNoControlsWarning:!0}}},e=m({},()=>p`
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
