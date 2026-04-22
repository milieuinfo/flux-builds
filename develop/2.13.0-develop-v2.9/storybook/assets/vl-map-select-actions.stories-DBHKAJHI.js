import{x as i,u,j as e,C as s,S as n,bb as d,s as y}from"./iframe-aAtdr__L.js";import"./vl-map-base-layer--WplTurS.js";import"./vl-map-base-layer-grb-gray-Cc4JenHq.js";import"./vl-map-layer-circle-style-CEaiCq5i.js";import"./vl-map-features-layer-DjO3748L.js";import"./vl-map-select-actions-Bo66RDXi.js";import{m as f,a as c}from"./vl-map-select-actions.stories-arg-xa69q4Yg.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-42vI7yNd.js";import"./select-action-Ba9tMqGL.js";import"./vl-map-layer-action-Dcswm32r.js";import"./vl-map-select-action-B4CYIJmE.js";import"./vl-map-select-action.stories-arg-DqHLi3pB.js";import"./vl-map-action.stories-arg-t96oUb5n.js";const v={type:"FeatureCollection",features:[{type:"Feature",id:1,geometry:{type:"Point",coordinates:[146055,196908]}}]},g={type:"FeatureCollection",features:[{type:"Feature",id:2,geometry:{type:"Point",coordinates:[149055,199908]}},{type:"Feature",id:3,geometry:{type:"Point",coordinates:[152055,202908]}}]},b=["layer-1","layer-2"],j=(a,t)=>i`
    <vl-map lambert2008>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${v} name="layer-1" projection-code="EPSG:31370">
            <vl-map-layer-circle-style border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer
            .features=${g}
            name="layer-2"
            cluster
            cluster-distance="100"
            projection-code="EPSG:31370"
        >
            <vl-map-layer-circle-style
                color="rgba(255, 230, 21, 1)"
                border-color="#000000"
                text-color="#000000"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-select-actions .active=${a} .layers=${b} ?default-active=${t} cluster>
            <vl-map-layer-circle-style
                color="#0099ff"
                text-color="#ffffff"
                border-color="#ffffff"
            ></vl-map-layer-circle-style>
        </vl-map-select-actions>
    </vl-map>
`,x={type:"FeatureCollection",features:[{type:"Feature",id:1,geometry:{type:"Point",coordinates:[146055,196908]}}]},h={type:"FeatureCollection",features:[{type:"Feature",id:2,geometry:{type:"Point",coordinates:[149055,199908]}},{type:"Feature",id:3,geometry:{type:"Point",coordinates:[152055,202908]}}]},S=["layer-1","layer-2"],$=(a,t)=>i`
    <vl-map lambert2008>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${x} name="layer-1" projection-code="EPSG:31370">
            <vl-map-layer-circle-style border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${h} name="layer-2" projection-code="EPSG:31370">
            <vl-map-layer-circle-style color="rgba(255, 230, 21, 1)" border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-select-actions .active=${a} .layers=${S} ?default-active=${t}>
            <vl-map-layer-circle-style color="#ff0000" border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-select-actions>
    </vl-map>
`,F={type:"FeatureCollection",features:[{type:"Feature",id:1,geometry:{type:"Point",coordinates:[146055,196908]}}]},A={type:"FeatureCollection",features:[{type:"Feature",id:2,geometry:{type:"Point",coordinates:[149055,199908]}},{type:"Feature",id:3,geometry:{type:"Point",coordinates:[152055,202908]}}]},P=["layer-1","layer-2"],C=(a,t)=>i`
    <vl-map lambert2008>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${F} name="layer-1" projection-code="EPSG:31370">
            <vl-map-layer-circle-style border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${A} name="layer-2" projection-code="EPSG:31370">
            <vl-map-layer-circle-style color="rgba(255, 230, 21, 1)" border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-select-actions .active=${a} .layers=${P} ?default-active=${t}>
        </vl-map-select-actions>
    </vl-map>
`,L=`import { html } from 'lit';

const featuresLayer1 = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            id: 1,
            geometry: {
                type: 'Point',
                coordinates: [146055.0, 196908.0],
            },
        },
    ],
};

const featuresLayer2 = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            id: 2,
            geometry: {
                type: 'Point',
                coordinates: [149055.0, 199908.0],
            },
        },
        {
            type: 'Feature',
            id: 3,
            geometry: {
                type: 'Point',
                coordinates: [152055.0, 202908.0],
            },
        },
    ],
};

const layers = ['layer-1', 'layer-2'];

export const component = (active: boolean, defaultActive: boolean) => html\`
    <vl-map lambert2008>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=\${featuresLayer1} name="layer-1" projection-code="EPSG:31370">
            <vl-map-layer-circle-style border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=\${featuresLayer2} name="layer-2" projection-code="EPSG:31370">
            <vl-map-layer-circle-style color="rgba(255, 230, 21, 1)" border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-select-actions .active=\${active} .layers=\${layers} ?default-active=\${defaultActive}>
        </vl-map-select-actions>
    </vl-map>
\`;
`,E=`import { html } from 'lit';

const featuresLayer1 = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            id: 1,
            geometry: {
                type: 'Point',
                coordinates: [146055.0, 196908.0],
            },
        },
    ],
};

const featuresLayer2 = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            id: 2,
            geometry: {
                type: 'Point',
                coordinates: [149055.0, 199908.0],
            },
        },
        {
            type: 'Feature',
            id: 3,
            geometry: {
                type: 'Point',
                coordinates: [152055.0, 202908.0],
            },
        },
    ],
};

const layers = ['layer-1', 'layer-2'];

export const component = (active: boolean, defaultActive: boolean) => html\`
    <vl-map lambert2008>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=\${featuresLayer1} name="layer-1" projection-code="EPSG:31370">
            <vl-map-layer-circle-style border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=\${featuresLayer2} name="layer-2" projection-code="EPSG:31370">
            <vl-map-layer-circle-style color="rgba(255, 230, 21, 1)" border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-select-actions .active=\${active} .layers=\${layers} ?default-active=\${defaultActive}>
            <vl-map-layer-circle-style color="#ff0000" border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-select-actions>
    </vl-map>
\`;
`,M=`import { html } from 'lit';

const featuresLayer1 = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            id: 1,
            geometry: {
                type: 'Point',
                coordinates: [146055.0, 196908.0],
            },
        },
    ],
};

const featuresLayer2 = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            id: 2,
            geometry: {
                type: 'Point',
                coordinates: [149055.0, 199908.0],
            },
        },
        {
            type: 'Feature',
            id: 3,
            geometry: {
                type: 'Point',
                coordinates: [152055.0, 202908.0],
            },
        },
    ],
};

const layers = ['layer-1', 'layer-2'];

export const component = (active: boolean, defaultActive: boolean) => html\`
    <vl-map lambert2008>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=\${featuresLayer1} name="layer-1" projection-code="EPSG:31370">
            <vl-map-layer-circle-style border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer
            .features=\${featuresLayer2}
            name="layer-2"
            cluster
            cluster-distance="100"
            projection-code="EPSG:31370"
        >
            <vl-map-layer-circle-style
                color="rgba(255, 230, 21, 1)"
                border-color="#000000"
                text-color="#000000"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-select-actions .active=\${active} .layers=\${layers} ?default-active=\${defaultActive} cluster>
            <vl-map-layer-circle-style
                color="#0099ff"
                text-color="#ffffff"
                border-color="#ffffff"
            ></vl-map-layer-circle-style>
        </vl-map-select-actions>
    </vl-map>
\`;
`;function m(a){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...u(),...a.components},{FluxComponentMetaData:p}=t;return p||D("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"map-select-actions",children:"Map Select Actions"}),`
`,e.jsx(p,{id:"map-components-action-layer-select-actions"}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(t.p,{children:["Gebruik het ",e.jsx(t.code,{children:"map-select-actions"}),` component om features op meerdere
`,e.jsx(t.a,{href:"/docs/map-layer-vector-layer-features-layer--map-features-layer-default",children:"map-features-layers"})," te selecteren.",e.jsx("br",{}),`
Deze component erft over van de
`,e.jsx(t.a,{href:"/docs/map-action-layer-action-select-action--map-select-action-default",children:"map-select-action"})," component."]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlMapSelectActions } from '@domg-wc/map';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-map-select-actions></vl-map-select-actions>
`})}),`
`,e.jsx(s,{of:r}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Toon code"}),e.jsx(n,{code:L,language:"ts",dark:!0})]}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(d,{of:r}),`
`,e.jsx(t.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(t.h3,{id:"custom-style",children:"Custom Style"}),`
`,e.jsx(s,{of:l}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Toon code"}),e.jsx(n,{code:E,language:"ts",dark:!0})]}),`
`,e.jsx(t.h3,{id:"clustering",children:"Clustering"}),`
`,e.jsxs(t.p,{children:["Bij clustering kan best een ",e.jsx(t.a,{href:"/docs/map-layer-style-layer-circle-style--map-layer-circle-style-default",children:"map-layer-circle-style"})," component gebruikt worden binnen de ",e.jsx(t.code,{children:"vl-map-select-actions"})," tag.",e.jsx("br",{}),`
Dit zorgt ervoor dat de grootte van de select-actie zich aanpast aan het aantal geclusterde features, en dat de stijl-tekst getoond wordt.`]}),`
`,e.jsx(s,{of:o}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Toon code"}),e.jsx(n,{code:M,language:"ts",dark:!0})]})]})}function G(a={}){const{wrapper:t}={...u(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(m,{...a})}):m(a)}function D(a,t){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const J={id:"map-action-layer-action-select-action-select-actions",title:"map/action/layer-action/select-action/select-actions",tags:["autodocs"],args:c,argTypes:f,parameters:{docs:{page:G}}},r=y(c,({active:a,defaultActive:t})=>C(a,t));r.storyName="vl-map-select-actions - default";r.args={active:!0};const l=y(c,({active:a,defaultActive:t})=>$(a,t));l.storyName="vl-map-select-actions - custom style";l.args={active:!0};const o=y(c,({active:a,defaultActive:t})=>j(a,t));o.storyName="vl-map-select-actions - clustering";o.args={active:!0};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(mapSelectActionsArgs, ({
  active,
  defaultActive
}) => {
  return defaultComponent(active, defaultActive);
})`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(mapSelectActionsArgs, ({
  active,
  defaultActive
}) => {
  return customStyleComponent(active, defaultActive);
})`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(mapSelectActionsArgs, ({
  active,
  defaultActive
}) => {
  return clusteringComponent(active, defaultActive);
})`,...o.parameters?.docs?.source}}};const K=["MapSelectActionsDefault","MapSelectActionsCustomStyle","MapSelectActionsClustering"];export{o as MapSelectActionsClustering,l as MapSelectActionsCustomStyle,r as MapSelectActionsDefault,K as __namedExportsOrder,J as default};
