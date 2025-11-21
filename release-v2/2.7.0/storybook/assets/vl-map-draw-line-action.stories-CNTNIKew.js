import{u as p,j as a,C as o,bd as v,s as c,x as m}from"./iframe-BRJWU34U.js";import"./vl-map-base-layer-mxB9Jgb1.js";import"./vl-map-base-layer-grb-gray-Di19ej0R.js";import"./vl-map-features-layer-B_ClZkbk.js";import"./vl-map-wfs-layer-DkWiFLJM.js";import{m as y,a as i}from"./vl-map-draw-action.stories-arg-C721WnLP.js";import"./vl-map-draw-line-action-CcYIuiN2.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-BFohRpWd.js";import"./vl-map-action.stories-arg-CeHGMlwy.js";import"./vl-map-draw-action-DKMqKN8Y.js";import"./vl-map-layer-action-2JAAiOGD.js";import"./composite-vector-layer-BuQYujkN.js";function s(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...p(),...n.components},{FluxMetaData:l}=e;return l||u("FluxMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map-draw-line-action",children:"Map Draw Line Action"}),`
`,a.jsx(l,{id:"map-action-draw-action-draw-line-action"}),`
`,a.jsxs(e.p,{children:["Gebruik de ",a.jsx(e.code,{children:"map-draw-line-action"}),` component om een lijn te tekenen op een
`,a.jsx(e.a,{href:"/docs/map-layer-vector-layer-features-layer--map-features-layer-default",children:"map-features-layer"}),".",a.jsx("br",{}),`
Deze component erft over van de `,a.jsx(e.code,{children:"VlMapDrawAction"})," klasse, die op zijn beurt overerft van de ",a.jsx(e.code,{children:"VlMapLayerAction"}),` klasse,
die op zijn beurt overerft van de `,a.jsx(e.code,{children:"VlMapAction"})," klasse."]}),`
`,a.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`import { VlMapDrawLineAction } from '@domg-wc/map';
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map-draw-line-action></vl-map-draw-line-action>
`})}),`
`,a.jsx(o,{of:r}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(v,{of:r}),`
`,a.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,a.jsx(e.h3,{id:"snapping",children:"Snapping"}),`
`,a.jsx(o,{of:t}),`
`,a.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,a.jsx(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-draw-line-action--default",rel:"nofollow",children:"Legacy Storybook - Map Draw Line Action"})}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapDrawLineAction.html",rel:"nofollow",children:"Legacy Documentatie - Map Draw Line Action"})}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-draw-actions.html",rel:"nofollow",children:"Legacy Demo - Map Draw Line Action"})})]})}function g(n={}){const{wrapper:e}={...p(),...n.components};return e?a.jsx(e,{...n,children:a.jsx(s,{...n})}):s(n)}function u(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const _={id:"map-action-draw-action-draw-line-action",title:"map/action/draw-action/draw-line-action",tags:["autodocs"],args:i,argTypes:y,parameters:{docs:{page:g}}},r=c(i,({active:n,defaultActive:e})=>m`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-line-action .active=${n} ?default-active=${e}> </vl-map-draw-line-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    `);r.storyName="vl-map-draw-line-action - default";r.args={active:!0};const t=c(i,({active:n,defaultActive:e,snapping:l,snappingPixelTolerance:d})=>m`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-line-action
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
                </vl-map-draw-line-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    `);t.storyName="vl-map-draw-line-action - snapping";t.args={active:!0,snapping:!0,snappingPixelTolerance:1e3};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(mapDrawActionArgs, ({
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
    \`)`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(mapDrawActionArgs, ({
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
    \`)`,...t.parameters?.docs?.source}}};const z=["MapDrawLineActionDefault","MapDrawLineActionSnapping"];export{r as MapDrawLineActionDefault,t as MapDrawLineActionSnapping,z as __namedExportsOrder,_ as default};
