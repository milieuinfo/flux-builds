import{u as i,j as a,C as s,bc as y,s as p,x as m}from"./iframe-nqJ0ju39.js";import"./vl-map-base-layer-BtxNVW9G.js";import"./vl-map-base-layer-grb-gray-BXTId9yW.js";import"./vl-map-layer-circle-style-hvMbLfoC.js";import"./vl-map-features-layer-CD-FR9qL.js";import{m as v,a as o}from"./vl-map-action.stories-arg-sExbbFdu.js";import"./vl-map-delete-action-CnJdOHdP.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-Djhd7vsB.js";import"./select-action-CetabMsG.js";import"./vl-map-layer-action-CnxJeK5J.js";function c(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components},{FluxComponentMetaData:n}=e;return n||f("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map-delete-action",children:"Map Delete Action"}),`
`,a.jsx(n,{id:"map-components-action-layer-delete-action"}),`
`,a.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,a.jsxs(e.p,{children:["Gebruik het ",a.jsx(e.code,{children:"map-delete-action"}),` component om een feature op een
`,a.jsx(e.a,{href:"/docs/map-layer-vector-layer-features-layer--map-features-layer-default",children:"map-features-layer"})," te verwijderen.",a.jsx("br",{}),`
Dit component erft over van de `,a.jsx(e.code,{children:"VlMapLayerAction"})," klasse, die op zijn beurt overerft van de ",a.jsx(e.code,{children:"VlMapAction"})," klasse."]}),`
`,a.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`import { VlMapDeleteAction } from '@domg-wc/map';
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map-delete-action></vl-map-delete-action>
`})}),`
`,a.jsx(s,{of:r}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(y,{of:r}),`
`,a.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,a.jsx(e.h3,{id:"custom-style",children:"Custom style"}),`
`,a.jsx(s,{of:l})]})}function u(t={}){const{wrapper:e}={...i(),...t.components};return e?a.jsx(e,{...t,children:a.jsx(c,{...t})}):c(t)}function f(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const S={id:"map-action-layer-action-delete-action",title:"map/action/layer-action/delete-action",tags:["autodocs"],args:o,argTypes:v,parameters:{docs:{page:u}}},d={type:"FeatureCollection",features:[{type:"Feature",id:1,geometry:{type:"Point",coordinates:[21e4,19e4]}},{type:"Feature",id:2,geometry:{type:"LineString",coordinates:[[17e4,17e4],[15e4,206e3]]}},{type:"Feature",id:3,geometry:{type:"Polygon",coordinates:[[[44e3,171e3],[1e5,171e3],[1e5,205e3],[44e3,205e3],[44e3,171e3]]]}}]},r=p(o,({active:t,defaultActive:e})=>m`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${d} projection-code="EPSG:31370">
                <vl-map-delete-action .active=${t} ?default-active=${e}></vl-map-delete-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
                <vl-map-layer-circle-style border-size="2"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `);r.storyName="vl-map-delete-action - default";r.args={active:!0};const l=p(o,({active:t,defaultActive:e})=>m`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${d} projection-code="EPSG:31370">
                <vl-map-delete-action .active=${t} ?default-active=${e}>
                    <vl-map-layer-style
                        text-color="#000"
                        color="rgba(255, 230, 21, 0.2)"
                        border-color="rgba(255, 230, 21, 1)"
                        border-size="2"
                    ></vl-map-layer-style>
                </vl-map-delete-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
                <vl-map-layer-circle-style border-size="2"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `);l.storyName="vl-map-delete-action - custom style";l.args={active:!0};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(mapActionArgs, ({
  active,
  defaultActive
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=\${features} projection-code="EPSG:31370">
                <vl-map-delete-action .active=\${active} ?default-active=\${defaultActive}></vl-map-delete-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
                <vl-map-layer-circle-style border-size="2"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    \`)`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(mapActionArgs, ({
  active,
  defaultActive
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=\${features} projection-code="EPSG:31370">
                <vl-map-delete-action .active=\${active} ?default-active=\${defaultActive}>
                    <vl-map-layer-style
                        text-color="#000"
                        color="rgba(255, 230, 21, 0.2)"
                        border-color="rgba(255, 230, 21, 1)"
                        border-size="2"
                    ></vl-map-layer-style>
                </vl-map-delete-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
                <vl-map-layer-circle-style border-size="2"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    \`)`,...l.parameters?.docs?.source}}};const E=["MapDeleteActionDefault","MapDeleteActionCustomStyle"];export{l as MapDeleteActionCustomStyle,r as MapDeleteActionDefault,E as __namedExportsOrder,S as default};
