import{u as d,j as a,C as n,bc as v,s as i,x as p}from"./iframe-CsDE-vVI.js";import"./vl-map-base-layer-CgI99i60.js";import"./vl-map-base-layer-grb-gray-BEd-NMxn.js";import"./vl-map-layer-circle-style-B2Z5dFH3.js";import"./vl-map-features-layer-C-OVASUA.js";import"./vl-map-select-action-D7KtcGNE.js";import{m as u,a as s}from"./vl-map-select-action.stories-arg-1qbpZlxW.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-BeqmNVfV.js";import"./select-action-BrZAiYIv.js";import"./vl-map-layer-action-OgcuTYDR.js";import"./vl-map-action.stories-arg-CJgSZzLL.js";function y(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...t.components},{FluxComponentMetaData:o}=e;return o||g("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map-select-action",children:"Map Select Action"}),`
`,a.jsx(o,{id:"map-components-action-layer-select-action"}),`
`,a.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,a.jsxs(e.p,{children:["Gebruik het ",a.jsx(e.code,{children:"map-select-action"})," component om een feature op een ",a.jsx(e.a,{href:"/docs/map-layer-vector-layer-features-layer--map-features-layer-default",children:"map-features-layer"})," te selecteren.",a.jsx("br",{}),`
Dit component erft over van de `,a.jsx(e.code,{children:"VlMapLayerAction"})," klasse, die op zijn beurt overerft van de ",a.jsx(e.code,{children:"VlMapAction"})," klasse."]}),`
`,a.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`import { VlMapSelectAction } from '@domg-wc/map';
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map-select-action></vl-map-select-action>
`})}),`
`,a.jsx(n,{of:r}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(v,{of:r}),`
`,a.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,a.jsx(e.h3,{id:"custom-style",children:"Custom Style"}),`
`,a.jsx(n,{of:l}),`
`,a.jsx(e.h3,{id:"clustering",children:"Clustering"}),`
`,a.jsxs(e.p,{children:["Bij clustering kan best een ",a.jsx(e.a,{href:"/docs/map-layer-style-layer-circle-style--map-layer-circle-style-default",children:"map-layer-circle-style"}),`
component gebruikt worden binnen de `,a.jsx(e.code,{children:"vl-map-select-action"})," tag.",a.jsx("br",{})]}),`
`,a.jsx(e.p,{children:"Dit zorgt ervoor dat de grootte van de select-actie zich aanpast aan het aantal geclusterde features, en dat de stijl-tekst getoond wordt."}),`
`,a.jsx(n,{of:c})]})}function f(t={}){const{wrapper:e}={...d(),...t.components};return e?a.jsx(e,{...t,children:a.jsx(y,{...t})}):y(t)}function g(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const k={id:"map-action-layer-action-select-action",title:"map/action/layer-action/select-action",tags:["autodocs"],args:s,argTypes:u,parameters:{docs:{page:f}}},m={type:"FeatureCollection",features:[{type:"Feature",id:1,geometry:{type:"Point",coordinates:[146055,196908]}},{type:"Feature",id:2,geometry:{type:"Point",coordinates:[149055,199908]}},{type:"Feature",id:3,geometry:{type:"Point",coordinates:[152055,202908]}}]},r=i(s,({active:t,defaultActive:e})=>p`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${m} projection-code="EPSG:31370">
                <vl-map-select-action .active=${t} default-active=${e}></vl-map-select-action>
                <vl-map-layer-circle-style border-color="#000000"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `);r.storyName="vl-map-select-action - default";r.args={active:!0};const l=i(s,({active:t,defaultActive:e})=>p`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${m} projection-code="EPSG:31370">
                <vl-map-select-action .active=${t} default-active=${e}>
                    <vl-map-layer-circle-style color="#ff0000" border-color="#000000"></vl-map-layer-circle-style>
                </vl-map-select-action>
                <vl-map-layer-circle-style border-color="#000000"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `);l.storyName="vl-map-select-action - custom style";l.args={active:!0};const c=i(s,({active:t,defaultActive:e,cluster:o})=>p`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${m} cluster cluster-distance="100" projection-code="EPSG:31370">
                <vl-map-select-action .active=${t} default-active=${e} ?cluster=${o}>
                    <vl-map-layer-circle-style
                        color="#0099ff"
                        text-color="#ffffff"
                        border-color="#ffffff"
                    ></vl-map-layer-circle-style>
                </vl-map-select-action>
                <vl-map-layer-circle-style border-color="#000000"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `);c.storyName="vl-map-select-action - clustering";c.args={active:!0,cluster:!0};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(mapSelectActionArgs, ({
  active,
  defaultActive
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=\${features} projection-code="EPSG:31370">
                <vl-map-select-action .active=\${active} default-active=\${defaultActive}></vl-map-select-action>
                <vl-map-layer-circle-style border-color="#000000"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    \`)`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(mapSelectActionArgs, ({
  active,
  defaultActive
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=\${features} projection-code="EPSG:31370">
                <vl-map-select-action .active=\${active} default-active=\${defaultActive}>
                    <vl-map-layer-circle-style color="#ff0000" border-color="#000000"></vl-map-layer-circle-style>
                </vl-map-select-action>
                <vl-map-layer-circle-style border-color="#000000"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    \`)`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(mapSelectActionArgs, ({
  active,
  defaultActive,
  cluster
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=\${features} cluster cluster-distance="100" projection-code="EPSG:31370">
                <vl-map-select-action .active=\${active} default-active=\${defaultActive} ?cluster=\${cluster}>
                    <vl-map-layer-circle-style
                        color="#0099ff"
                        text-color="#ffffff"
                        border-color="#ffffff"
                    ></vl-map-layer-circle-style>
                </vl-map-select-action>
                <vl-map-layer-circle-style border-color="#000000"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    \`)`,...c.parameters?.docs?.source}}};const F=["MapSelectActionDefault","MapSelectActionCustomStyle","MapSelectActionClustering"];export{c as MapSelectActionClustering,l as MapSelectActionCustomStyle,r as MapSelectActionDefault,F as __namedExportsOrder,k as default};
