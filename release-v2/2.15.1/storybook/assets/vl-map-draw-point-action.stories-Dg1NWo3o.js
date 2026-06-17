import{u as s,j as e,C as l,bc as v,s as c,x as m}from"./iframe-nqJ0ju39.js";import"./vl-map-base-layer-BtxNVW9G.js";import"./vl-map-base-layer-grb-gray-BXTId9yW.js";import"./vl-map-layer-circle-style-hvMbLfoC.js";import"./vl-map-features-layer-CD-FR9qL.js";import"./vl-map-wfs-layer-B8YU49wa.js";import{m as y,a as i}from"./vl-map-draw-action.stories-arg-BbgDMDki.js";import"./vl-map-draw-point-action-DCQviMBT.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-Djhd7vsB.js";import"./vl-map-action.stories-arg-sExbbFdu.js";import"./vl-map-draw-action-BWq5sEze.js";import"./vl-map-layer-action-CnxJeK5J.js";import"./composite-vector-layer-CKczwVYM.js";function p(r){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...r.components},{FluxComponentMetaData:o}=a;return o||u("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-draw-point-action",children:"Map Draw Point Action"}),`
`,e.jsx(o,{id:"map-components-action-draw-point-action"}),`
`,e.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(a.p,{children:["Gebruik het ",e.jsx(a.code,{children:"map-draw-point-action"}),` component om een punt te tekenen op een
`,e.jsx(a.a,{href:"/docs/map-layer-vector-layer-features-layer--map-features-layer-default",children:"map-features-layer"}),".",e.jsx("br",{}),`
Dit component erft over van de `,e.jsx(a.code,{children:"VlMapDrawAction"})," klasse, die op zijn beurt overerft van de ",e.jsx(a.code,{children:"VlMapLayerAction"}),` klasse,
die op zijn beurt overerft van de `,e.jsx(a.code,{children:"VlMapAction"})," klasse."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlMapDrawPointAction } from '@domg-wc/map';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-map-draw-point-action></vl-map-draw-point-action>
`})}),`
`,e.jsx(l,{of:n}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(v,{of:n}),`
`,e.jsx(a.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(a.h3,{id:"snapping",children:"Snapping"}),`
`,e.jsx(l,{of:t})]})}function g(r={}){const{wrapper:a}={...s(),...r.components};return a?e.jsx(a,{...r,children:e.jsx(p,{...r})}):p(r)}function u(r,a){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const k={id:"map-action-draw-action-draw-point-action",title:"map/action/draw-action/draw-point-action",tags:["autodocs"],args:i,argTypes:y,parameters:{docs:{page:g}}},n=c(i,({active:r,defaultActive:a})=>m`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-point-action .active=${r} default-active=${a}></vl-map-draw-point-action>
                <vl-map-layer-circle-style border-size="2"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `);n.storyName="vl-map-draw-point-action - default";n.args={active:!0};const t=c(i,({active:r,defaultActive:a,snapping:o,snappingPixelTolerance:d})=>m`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-point-action
                    .active=${r}
                    ?default-active=${a}
                    ?snapping=${o}
                    snapping-pixel-tolerance=${d}
                >
                    <vl-map-wfs-layer
                        name="Stromend waterlichamen"
                        url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                        layers="owl_l"
                        max-resolution="4"
                    >
                    </vl-map-wfs-layer>
                </vl-map-draw-point-action>
                <vl-map-layer-circle-style border-size="2"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `);t.storyName="vl-map-draw-point-action - snapping";t.args={active:!0,snapping:!0,snappingPixelTolerance:1e3};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(mapDrawActionArgs, ({
  active,
  defaultActive
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-point-action .active=\${active} default-active=\${defaultActive}></vl-map-draw-point-action>
                <vl-map-layer-circle-style border-size="2"></vl-map-layer-circle-style>
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
                <vl-map-draw-point-action
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
                </vl-map-draw-point-action>
                <vl-map-layer-circle-style border-size="2"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    \`)`,...t.parameters?.docs?.source}}};const z=["MapDrawPointActionDefault","MapDrawPointActionSnapping"];export{n as MapDrawPointActionDefault,t as MapDrawPointActionSnapping,z as __namedExportsOrder,k as default};
