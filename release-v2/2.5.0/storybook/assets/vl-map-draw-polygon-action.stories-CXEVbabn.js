import{u as i,j as e,C as p,bd as y,s as c,x as m}from"./iframe-CflcmDUD.js";import"./vl-map-base-layer-BvMalALX.js";import"./vl-map-base-layer-grb-gray-Cuxf_f6a.js";import"./vl-map-features-layer-D9owGkac.js";import"./vl-map-wfs-layer-Bprmt369.js";import{m as g,a as t}from"./vl-map-draw-action.stories-arg-B1R9PlGO.js";import"./vl-map-draw-polygon-action-BvyEdN-L.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-flPUvAVN.js";import"./vl-map-action.stories-arg-Bh_3DQ4z.js";import"./vl-map-draw-action-2_7SBsl1.js";import"./vl-map-layer-action-C8bXaFii.js";import"./composite-vector-layer-CvVvypp2.js";function s(n){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...n.components},{FluxMetaData:l}=a;return l||u("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-draw-polygon-action",children:"Map Draw Polygon Action"}),`
`,e.jsx(l,{id:"map-action-draw-action-draw-polygon-action"}),`
`,e.jsxs(a.p,{children:["Gebruik het ",e.jsx(a.code,{children:"map-draw-polygon-action"}),` component om een polygon te tekenen op een
`,e.jsx(a.a,{href:"/docs/map-layer-vector-layer-features-layer--map-features-layer-default",children:"map-features-layer"}),".",e.jsx("br",{}),`
Dit component erft over van de `,e.jsx(a.code,{children:"VlMapDrawAction"})," klasse, die op zijn beurt overerft van de ",e.jsx(a.code,{children:"VlMapLayerAction"}),` klasse,
die op zijn beurt overerft van de `,e.jsx(a.code,{children:"VlMapAction"})," klasse."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlMapDrawPolygonAction } from '@domg-wc/map';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-map-draw-polygon-action></vl-map-draw-polygon-action>
`})}),`
`,e.jsx(p,{of:r}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(y,{of:r}),`
`,e.jsx(a.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(a.h3,{id:"snapping",children:"Snapping"}),`
`,e.jsx(p,{of:o}),`
`,e.jsx(a.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(a.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-draw-polygon-action--default",rel:"nofollow",children:"Legacy Storybook - Map Draw Polygon Action"})}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapDrawPolygonAction.html",rel:"nofollow",children:"Legacy Documentatie - Map Draw Polygon Action"})}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-draw-actions.html",rel:"nofollow",children:"Legacy Demo - Map Draw Polygon Action"})})]})}function v(n={}){const{wrapper:a}={...i(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(s,{...n})}):s(n)}function u(n,a){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const _={id:"map-action-draw-action-draw-polygon-action",title:"map/action/draw-action/draw-polygon-action",tags:["autodocs"],args:t,argTypes:g,parameters:{docs:{page:v}}},r=c(t,({active:n,defaultActive:a})=>m`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action
                    .active=${n}
                    default-active=${a}
                ></vl-map-draw-polygon-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    `);r.storyName="vl-map-draw-polygon-action - default";r.args={active:!0};const o=c(t,({active:n,defaultActive:a,snapping:l,snappingPixelTolerance:d})=>m`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action
                    .active=${n}
                    ?default-active=${a}
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
                </vl-map-draw-polygon-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    `);o.storyName="vl-map-draw-polygon-action - snapping";o.args={active:!0,snapping:!0,snappingPixelTolerance:1e3};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(mapDrawActionArgs, ({
  active,
  defaultActive
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action
                    .active=\${active}
                    default-active=\${defaultActive}
                ></vl-map-draw-polygon-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    \`)`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(mapDrawActionArgs, ({
  active,
  defaultActive,
  snapping,
  snappingPixelTolerance
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action
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
                </vl-map-draw-polygon-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    \`)`,...o.parameters?.docs?.source}}};const V=["MapDrawPolygonActionDefault","MapDrawPolygonActionSnapping"];export{r as MapDrawPolygonActionDefault,o as MapDrawPolygonActionSnapping,V as __namedExportsOrder,_ as default};
