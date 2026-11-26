import{s}from"./stories.helper-DYHi_5m6.js";import{u as m,j as a,C as p,b4 as g,b as c}from"./iframe-Cv28D2NX.js";import"./vl-map-base-layer-CmFLB2kf.js";import"./vl-map-base-layer-grb-gray-B3yI26-B.js";import"./vl-map-features-layer-CEF7bfWd.js";import"./vl-map-wfs-layer-ZncIm8XG.js";import{m as y,a as l}from"./vl-map-draw-action.stories-arg-Bv7v-Qsd.js";import"./vl-map-draw-polygon-action-DdgA_1zp.js";import"./preload-helper-PPVm8Dsz.js";import"./vl-map-vector-layer-CQXQ1CFV.js";import"./vl-map-action.stories-arg-DzgNvcNu.js";import"./vl-map-draw-action-enDB39H3.js";import"./vl-map-layer-action-BuSnoCGf.js";import"./composite-vector-layer-CSSpqbq6.js";function i(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...n.components},{FluxComponentMetaData:t}=e;return t||u("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map-draw-polygon-action",children:"Map Draw Polygon Action"}),`
`,a.jsx(t,{id:"map-components-action-draw-polygon-action"}),`
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
`,a.jsx(p,{of:o})]})}function v(n={}){const{wrapper:e}={...m(),...n.components};return e?a.jsx(e,{...n,children:a.jsx(i,{...n})}):i(n)}function u(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const _={id:"map-action-draw-action-draw-polygon-action",title:"map/action/draw-action/draw-polygon-action",tags:["autodocs"],args:l,argTypes:y,parameters:{docs:{page:v}}},r=s(l,({active:n,defaultActive:e})=>c`
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
    `);r.storyName="vl-map-draw-polygon-action - default";r.args={active:!0};const o=s(l,({active:n,defaultActive:e,snapping:t,snappingPixelTolerance:d})=>c`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action
                    .active=${n}
                    ?default-active=${e}
                    ?snapping=${t}
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
    `);o.storyName="vl-map-draw-polygon-action - snapping";o.args={active:!0,snapping:!0,snappingPixelTolerance:1e3};const S=["MapDrawPolygonActionDefault","MapDrawPolygonActionSnapping"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(mapDrawActionArgs, ({
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
    \`)`,...o.parameters?.docs?.source}}};export{r as MapDrawPolygonActionDefault,o as MapDrawPolygonActionSnapping,S as __namedExportsOrder,_ as default};
