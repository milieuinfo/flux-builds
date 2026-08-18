import{u as p,j as a,C as o,b8 as v,s as m,x as c}from"./iframe-COmpMQdF.js";import"./vl-map-base-layer-0uYY7Sp1.js";import"./vl-map-base-layer-grb-gray-BrRL2nbW.js";import"./vl-map-features-layer-FSFqeN_s.js";import"./vl-map-wfs-layer-C324PLya.js";import{m as y,a as i}from"./vl-map-draw-action.stories-arg-Ceg4GRug.js";import"./vl-map-draw-line-action-Be3vLESN.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-CcIOv0_Q.js";import"./vl-map-action.stories-arg-D0o5lm54.js";import"./vl-map-draw-action-DGjwjylW.js";import"./vl-map-layer-action-Dmzzxu-A.js";import"./composite-vector-layer-DUXzj8Pl.js";function s(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...p(),...r.components},{FluxComponentMetaData:l}=e;return l||u("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map-draw-line-action",children:"Map Draw Line Action"}),`
`,a.jsx(l,{id:"map-components-action-draw-line-action"}),`
`,a.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,a.jsxs(e.p,{children:["Gebruik de ",a.jsx(e.code,{children:"map-draw-line-action"}),` component om een lijn te tekenen op een
`,a.jsx(e.a,{href:"/docs/map-layer-vector-layer-features-layer--map-features-layer-default",children:"map-features-layer"}),".",a.jsx("br",{}),`
Deze component erft over van de `,a.jsx(e.code,{children:"VlMapDrawAction"})," klasse, die op zijn beurt overerft van de ",a.jsx(e.code,{children:"VlMapLayerAction"}),` klasse,
die op zijn beurt overerft van de `,a.jsx(e.code,{children:"VlMapAction"})," klasse."]}),`
`,a.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`import { VlMapDrawLineAction } from '@domg-wc/map';
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map-draw-line-action></vl-map-draw-line-action>
`})}),`
`,a.jsx(o,{of:n}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(v,{of:n}),`
`,a.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,a.jsx(e.h3,{id:"snapping",children:"Snapping"}),`
`,a.jsx(o,{of:t})]})}function g(r={}){const{wrapper:e}={...p(),...r.components};return e?a.jsx(e,{...r,children:a.jsx(s,{...r})}):s(r)}function u(r,e){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const z={id:"map-action-draw-action-draw-line-action",title:"map/action/draw-action/draw-line-action",tags:["autodocs"],args:i,argTypes:y,parameters:{docs:{page:g}}},n=m(i,({active:r,defaultActive:e})=>c`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-line-action .active=${r} ?default-active=${e}> </vl-map-draw-line-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    `);n.storyName="vl-map-draw-line-action - default";n.args={active:!0};const t=m(i,({active:r,defaultActive:e,snapping:l,snappingPixelTolerance:d})=>c`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-line-action
                    .active=${r}
                    ?default-active=${e}
                    ?snapping=${l}
                    snapping-pixel-tolerance=${d}
                >
                    <vl-map-wfs-layer
                        name="Stromend waterlichamen"
                        url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                        layers="owl_l"
                        max-resolution="4"
                    >
                    </vl-map-wfs-layer>
                </vl-map-draw-line-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    `);t.storyName="vl-map-draw-line-action - snapping";t.args={active:!0,snapping:!0,snappingPixelTolerance:1e3};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(mapDrawActionArgs, ({
  active,
  defaultActive
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-line-action .active=\${active} ?default-active=\${defaultActive}> </vl-map-draw-line-action>
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
                <vl-map-draw-line-action
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
                </vl-map-draw-line-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    \`)`,...t.parameters?.docs?.source}}};const S=["MapDrawLineActionDefault","MapDrawLineActionSnapping"];export{n as MapDrawLineActionDefault,t as MapDrawLineActionSnapping,S as __namedExportsOrder,z as default};
