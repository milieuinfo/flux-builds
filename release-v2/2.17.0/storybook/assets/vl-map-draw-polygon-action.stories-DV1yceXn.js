import{u as s,j as a,C as p,b8 as g,s as m,x as c}from"./iframe-BgD7f6Cn.js";import"./vl-map-base-layer-CJ9Hplnc.js";import"./vl-map-base-layer-grb-gray--tROFEyH.js";import"./vl-map-features-layer-DuBfgdcT.js";import"./vl-map-wfs-layer-DHaXO9Ho.js";import{m as y,a as t}from"./vl-map-draw-action.stories-arg-B8YVZyDE.js";import"./vl-map-draw-polygon-action-DAd6MDmo.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-8pTtAovA.js";import"./vl-map-action.stories-arg-BZqnRudh.js";import"./vl-map-draw-action-RmDkONxU.js";import"./vl-map-layer-action-BX3Ddssc.js";import"./composite-vector-layer-DxtYikiH.js";function i(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...n.components},{FluxComponentMetaData:l}=e;return l||u("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map-draw-polygon-action",children:"Map Draw Polygon Action"}),`
`,a.jsx(l,{id:"map-components-action-draw-polygon-action"}),`
`,a.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,a.jsxs(e.p,{children:["Gebruik het ",a.jsx(e.code,{children:"map-draw-polygon-action"}),` component om een polygon te tekenen op een
`,a.jsx(e.a,{href:"/docs/map-layer-vector-layer-features-layer--map-features-layer-default",children:"map-features-layer"}),".",a.jsx("br",{}),`
Dit component erft over van de `,a.jsx(e.code,{children:"VlMapDrawAction"})," klasse, die op zijn beurt overerft van de ",a.jsx(e.code,{children:"VlMapLayerAction"}),` klasse,
die op zijn beurt overerft van de `,a.jsx(e.code,{children:"VlMapAction"})," klasse."]}),`
`,a.jsx(e.h2,{id:"ongeldige-polygonen",children:"Ongeldige polygonen"}),`
`,a.jsxs(e.p,{children:[`Wanneer je op de kaart een ongeldige polygon tekent, bijvoorbeeld één die zichzelf kruist, dan krijgt deze standaard
een rode "invalid" stijl.
`,a.jsx(e.a,{href:"/docs/map-map--documentatie#ongeldige-geometrie%C3%ABn",children:"Zie de vl-map documentatie voor meer informatie"}),"."]}),`
`,a.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`import { VlMapDrawPolygonAction } from '@domg-wc/map';
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map-draw-polygon-action></vl-map-draw-polygon-action>
`})}),`
`,a.jsx(p,{of:r}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(g,{of:r}),`
`,a.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,a.jsx(e.h3,{id:"snapping",children:"Snapping"}),`
`,a.jsx(p,{of:o})]})}function v(n={}){const{wrapper:e}={...s(),...n.components};return e?a.jsx(e,{...n,children:a.jsx(i,{...n})}):i(n)}function u(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const C={id:"map-action-draw-action-draw-polygon-action",title:"map/action/draw-action/draw-polygon-action",tags:["autodocs"],args:t,argTypes:y,parameters:{docs:{page:v}}},r=m(t,({active:n,defaultActive:e})=>c`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action
                    .active=${n}
                    default-active=${e}
                ></vl-map-draw-polygon-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    `);r.storyName="vl-map-draw-polygon-action - default";r.args={active:!0};const o=m(t,({active:n,defaultActive:e,snapping:l,snappingPixelTolerance:d})=>c`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action
                    .active=${n}
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
    \`)`,...o.parameters?.docs?.source}}};const _=["MapDrawPolygonActionDefault","MapDrawPolygonActionSnapping"];export{r as MapDrawPolygonActionDefault,o as MapDrawPolygonActionSnapping,_ as __namedExportsOrder,C as default};
