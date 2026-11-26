import{s as p}from"./stories.helper-DYHi_5m6.js";import{u as m,j as a,C as o,b4 as v,b as c}from"./iframe-Cv28D2NX.js";import"./vl-map-base-layer-CmFLB2kf.js";import"./vl-map-base-layer-grb-gray-B3yI26-B.js";import"./vl-map-features-layer-CEF7bfWd.js";import"./vl-map-wfs-layer-ZncIm8XG.js";import{m as y,a as i}from"./vl-map-draw-action.stories-arg-Bv7v-Qsd.js";import"./vl-map-draw-line-action-u_czBKY-.js";import"./preload-helper-PPVm8Dsz.js";import"./vl-map-vector-layer-CQXQ1CFV.js";import"./vl-map-action.stories-arg-DzgNvcNu.js";import"./vl-map-draw-action-enDB39H3.js";import"./vl-map-layer-action-BuSnoCGf.js";import"./composite-vector-layer-CSSpqbq6.js";function s(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...r.components},{FluxComponentMetaData:l}=e;return l||u("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map-draw-line-action",children:"Map Draw Line Action"}),`
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
`,a.jsx(o,{of:t})]})}function g(r={}){const{wrapper:e}={...m(),...r.components};return e?a.jsx(e,{...r,children:a.jsx(s,{...r})}):s(r)}function u(r,e){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const S={id:"map-action-draw-action-draw-line-action",title:"map/action/draw-action/draw-line-action",tags:["autodocs"],args:i,argTypes:y,parameters:{docs:{page:g}}},n=p(i,({active:r,defaultActive:e})=>c`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-line-action .active=${r} ?default-active=${e}> </vl-map-draw-line-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    `);n.storyName="vl-map-draw-line-action - default";n.args={active:!0};const t=p(i,({active:r,defaultActive:e,snapping:l,snappingPixelTolerance:d})=>c`
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
    `);t.storyName="vl-map-draw-line-action - snapping";t.args={active:!0,snapping:!0,snappingPixelTolerance:1e3};const k=["MapDrawLineActionDefault","MapDrawLineActionSnapping"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(mapDrawActionArgs, ({
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
    \`)`,...t.parameters?.docs?.source}}};export{n as MapDrawLineActionDefault,t as MapDrawLineActionSnapping,k as __namedExportsOrder,S as default};
