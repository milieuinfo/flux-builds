import{u as v,j as a,C as m,b8 as d,s as p,x as i}from"./iframe-CY-ZM549.js";import"./vl-map-base-layer-BdyzNi5-.js";import"./vl-map-base-layer-grb-gray-D0d8kmNt.js";import"./vl-map-measure-control-1B_P7rr7.js";import"./vl-map-action-controls-BHDa8nI8.js";import"./vl-map-features-layer-Bw14ba3R.js";import"./vl-map-wfs-layer-FaBKjmvQ.js";import{m as y,a as o}from"./vl-map-draw-action.stories-arg-b38BnNNa.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-draw-action-Bzh_ambS.js";import"./vl-map-layer-action-q8mfqCFR.js";import"./composite-vector-layer-fFVJWLGh.js";import"./vl-map-vector-layer-C3_HId6n.js";import"./vl-map-control.mixin-aGd0eWF0.js";import"./vl-map-action.stories-arg-CzbT4Jt7.js";function c(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...v(),...r.components},{FluxComponentMetaData:s}=e;return s||f("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map-measure-action",children:"Map Measure Action"}),`
`,a.jsx(s,{id:"map-components-action-draw-measure-action"}),`
`,a.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,a.jsxs(e.p,{children:["Gebruik het ",a.jsx(e.code,{children:"map-measure-action"}),` component om de afstand tussen 2 punten te meten op een
`,a.jsx(e.a,{href:"/docs/map-layer-vector-layer-features-layer--map-features-layer-default",children:"map-features-layer"}),".",a.jsx("br",{}),`
Dit component erft over van de `,a.jsx(e.code,{children:"VlMapDrawAction"})," klasse, die op zijn beurt overerft van de ",a.jsx(e.code,{children:"VlMapLayerAction"}),` klasse,
die op zijn beurt overerft van de `,a.jsx(e.code,{children:"VlMapAction"})," klasse."]}),`
`,a.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`import { VlMapMeasureAction } from '@domg-wc/map';
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map-measure-action></vl-map-measure-action>
`})}),`
`,a.jsx(m,{of:n}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(d,{of:n}),`
`,a.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,a.jsx(e.h3,{id:"snapping",children:"Snapping"}),`
`,a.jsx(m,{of:t}),`
`,a.jsx(e.h3,{id:"control",children:"Control"}),`
`,a.jsx(m,{of:l})]})}function g(r={}){const{wrapper:e}={...v(),...r.components};return e?a.jsx(e,{...r,children:a.jsx(c,{...r})}):c(r)}function f(r,e){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const k={id:"map-action-draw-action-measure-action",title:"map/action/draw-action/measure-action",tags:["autodocs"],args:o,argTypes:y,parameters:{docs:{page:g}}},n=p(o,({active:r,defaultActive:e})=>i`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-measure-action .active=${r} default-active=${e}></vl-map-measure-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    `);n.storyName="vl-map-measure-action - default";n.args={active:!0};const t=p(o,({active:r,defaultActive:e,snapping:s,snappingPixelTolerance:u})=>i`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-measure-action
                    .active=${r}
                    ?default-active=${e}
                    ?snapping=${s}
                    snapping-pixel-tolerance=${u}
                >
                    <vl-map-wfs-layer
                        name="Stromend waterlichamen"
                        url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                        layers="owl_l"
                        max-resolution="4"
                    >
                    </vl-map-wfs-layer>
                </vl-map-measure-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    `);t.storyName="vl-map-measure-action - snapping";t.args={active:!0,snapping:!0,snappingPixelTolerance:1e3};const l=p(o,({active:r,defaultActive:e})=>i`
            <vl-map lambert2008>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-action-controls>
                    <vl-map-measure-control></vl-map-measure-control>
                </vl-map-action-controls>
                <vl-map-features-layer>
                    <vl-map-measure-action .active=${r} default-active=${e}></vl-map-measure-action>
                    <vl-map-layer-style border-size="2"></vl-map-layer-style>
                </vl-map-features-layer>
            </vl-map>
        `);l.storyName="vl-map-measure-action - control";l.args={active:!0};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(mapDrawActionArgs, ({
  active,
  defaultActive
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-measure-action .active=\${active} default-active=\${defaultActive}></vl-map-measure-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    \`)`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(mapDrawActionArgs, ({
  active,
  defaultActive,
  snapping,
  snappingPixelTolerance
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-measure-action
                    .active=\${active}
                    ?default-active=\${defaultActive}
                    ?snapping=\${snapping}
                    snapping-pixel-tolerance=\${snappingPixelTolerance}
                >
                    <vl-map-wfs-layer
                        name="Stromend waterlichamen"
                        url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                        layers="owl_l"
                        max-resolution="4"
                    >
                    </vl-map-wfs-layer>
                </vl-map-measure-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    \`)`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(mapDrawActionArgs, ({
  active,
  defaultActive
}) => html\`
            <vl-map lambert2008>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-action-controls>
                    <vl-map-measure-control></vl-map-measure-control>
                </vl-map-action-controls>
                <vl-map-features-layer>
                    <vl-map-measure-action .active=\${active} default-active=\${defaultActive}></vl-map-measure-action>
                    <vl-map-layer-style border-size="2"></vl-map-layer-style>
                </vl-map-features-layer>
            </vl-map>
        \`)`,...l.parameters?.docs?.source}}};const N=["MapMeasureActionDefault","MapMeasureActionSnapping","MapMeasureActionControl"];export{l as MapMeasureActionControl,n as MapMeasureActionDefault,t as MapMeasureActionSnapping,N as __namedExportsOrder,k as default};
