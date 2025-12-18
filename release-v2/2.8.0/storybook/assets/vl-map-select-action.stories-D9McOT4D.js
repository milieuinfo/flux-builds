import{u as y,j as a,C as s,bd as v,s as i,x as p}from"./iframe-BQb9mjVp.js";import"./vl-map-base-layer-BdAzFV8b.js";import"./vl-map-base-layer-grb-gray-DZZs_CZf.js";import"./vl-map-layer-circle-style-CR8UDc62.js";import"./vl-map-features-layer-naQh5VhU.js";import"./vl-map-select-action-DXLaA25z.js";import{m as u,a as n}from"./vl-map-select-action.stories-arg-BG2I0uWB.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-CoXyZKmI.js";import"./select-action-CX2hfnzI.js";import"./vl-map-layer-action-BSO4v7MM.js";import"./vl-map-action.stories-arg-DzPaOZq_.js";function d(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...y(),...t.components},{FluxComponentMetaData:o}=e;return o||g("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map-select-action",children:"Map Select Action"}),`
`,a.jsx(o,{id:"map-components-action-layer-select-action"}),`
`,a.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,a.jsxs(e.p,{children:["Gebruik het ",a.jsx(e.code,{children:"map-select-action"})," component om een feature op een ",a.jsx(e.a,{href:"/docs/map-layer-vector-layer-features-layer--map-features-layer-default",children:"map-features-layer"})," te selecteren.",a.jsx("br",{}),`
Dit component erft over van de `,a.jsx(e.code,{children:"VlMapLayerAction"})," klasse, die op zijn beurt overerft van de ",a.jsx(e.code,{children:"VlMapAction"})," klasse."]}),`
`,a.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`import { VlMapSelectAction } from '@domg-wc/map';
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map-select-action></vl-map-select-action>
`})}),`
`,a.jsx(s,{of:r}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(v,{of:r}),`
`,a.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,a.jsx(e.h3,{id:"custom-style",children:"Custom Style"}),`
`,a.jsx(s,{of:l}),`
`,a.jsx(e.h3,{id:"clustering",children:"Clustering"}),`
`,a.jsxs(e.p,{children:["Bij clustering kan best een ",a.jsx(e.a,{href:"/docs/map-layer-style-layer-circle-style--map-layer-circle-style-default",children:"map-layer-circle-style"}),`
component gebruikt worden binnen de `,a.jsx(e.code,{children:"vl-map-select-action"})," tag.",a.jsx("br",{})]}),`
`,a.jsx(e.p,{children:"Dit zorgt ervoor dat de grootte van de select-actie zich aanpast aan het aantal geclusterde features, en dat de stijl-tekst getoond wordt."}),`
`,a.jsx(s,{of:c}),`
`,a.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,a.jsx(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,a.jsxs(e.p,{children:[a.jsx(e.strong,{children:"Legacy Storybook:"})," https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-select-action--default"]}),`
`,a.jsxs(e.p,{children:[a.jsx(e.strong,{children:"Legacy Documentatie:"})," https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapSelectAction.html"]}),`
`,a.jsxs(e.p,{children:[a.jsx(e.strong,{children:"Legacy Demo:"})," https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-select-action.html"]})]})}function f(t={}){const{wrapper:e}={...y(),...t.components};return e?a.jsx(e,{...t,children:a.jsx(d,{...t})}):d(t)}function g(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const w={id:"map-action-layer-action-select-action",title:"map/action/layer-action/select-action",tags:["autodocs"],args:n,argTypes:u,parameters:{docs:{page:f}}},m={type:"FeatureCollection",features:[{type:"Feature",id:1,geometry:{type:"Point",coordinates:[146055,196908]}},{type:"Feature",id:2,geometry:{type:"Point",coordinates:[149055,199908]}},{type:"Feature",id:3,geometry:{type:"Point",coordinates:[152055,202908]}}]},r=i(n,({active:t,defaultActive:e})=>p`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${m} projection-code="EPSG:31370">
                <vl-map-select-action .active=${t} default-active=${e}></vl-map-select-action>
                <vl-map-layer-circle-style border-color="#000000"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `);r.storyName="vl-map-select-action - default";r.args={active:!0};const l=i(n,({active:t,defaultActive:e})=>p`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${m} projection-code="EPSG:31370">
                <vl-map-select-action .active=${t} default-active=${e}>
                    <vl-map-layer-circle-style color="#ff0000" border-color="#000000"></vl-map-layer-circle-style>
                </vl-map-select-action>
                <vl-map-layer-circle-style border-color="#000000"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `);l.storyName="vl-map-select-action - custom style";l.args={active:!0};const c=i(n,({active:t,defaultActive:e,cluster:o})=>p`
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
    \`)`,...c.parameters?.docs?.source}}};const P=["MapSelectActionDefault","MapSelectActionCustomStyle","MapSelectActionClustering"];export{c as MapSelectActionClustering,l as MapSelectActionCustomStyle,r as MapSelectActionDefault,P as __namedExportsOrder,w as default};
