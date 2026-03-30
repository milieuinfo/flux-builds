import{u as i,j as a,C as s,bb as y,s as p,x as m}from"./iframe-B6HStWZE.js";import"./vl-map-base-layer-DGZE_dim.js";import"./vl-map-base-layer-grb-gray-BRjzCKoS.js";import"./vl-map-layer-circle-style-Coqe8fXI.js";import"./vl-map-features-layer-DH5hL79O.js";import{m as v,a as o}from"./vl-map-action.stories-arg-2Q_ZIQT2.js";import"./vl-map-delete-action-Bwytkdlg.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-D_RMfCzv.js";import"./select-action-DbemDLv9.js";import"./vl-map-layer-action-CT76jI4l.js";function c(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components},{FluxComponentMetaData:n}=e;return n||f("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map-delete-action",children:"Map Delete Action"}),`
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
`,a.jsx(s,{of:l}),`
`,a.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,a.jsx(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-delete-action--default",rel:"nofollow",children:"Legacy Storybook - Map Delete Action"})}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapDeleteAction.html",rel:"nofollow",children:"Legacy Documentatie - Map Delete Action"})}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-delete-action.html",rel:"nofollow",children:"Legacy Demo - Map Delete Action"})})]})}function u(t={}){const{wrapper:e}={...i(),...t.components};return e?a.jsx(e,{...t,children:a.jsx(c,{...t})}):c(t)}function f(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const z={id:"map-action-layer-action-delete-action",title:"map/action/layer-action/delete-action",tags:["autodocs"],args:o,argTypes:v,parameters:{docs:{page:u}}},d={type:"FeatureCollection",features:[{type:"Feature",id:1,geometry:{type:"Point",coordinates:[21e4,19e4]}},{type:"Feature",id:2,geometry:{type:"LineString",coordinates:[[17e4,17e4],[15e4,206e3]]}},{type:"Feature",id:3,geometry:{type:"Polygon",coordinates:[[[44e3,171e3],[1e5,171e3],[1e5,205e3],[44e3,205e3],[44e3,171e3]]]}}]},r=p(o,({active:t,defaultActive:e})=>m`
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
    \`)`,...l.parameters?.docs?.source}}};const S=["MapDeleteActionDefault","MapDeleteActionCustomStyle"];export{l as MapDeleteActionCustomStyle,r as MapDeleteActionDefault,S as __namedExportsOrder,z as default};
