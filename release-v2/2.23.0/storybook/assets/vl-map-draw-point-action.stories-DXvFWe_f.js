import{s}from"./stories.helper-DYHi_5m6.js";import{u as c,j as e,C as l,b4 as v,b as m}from"./iframe-Cv28D2NX.js";import"./vl-map-base-layer-CmFLB2kf.js";import"./vl-map-base-layer-grb-gray-B3yI26-B.js";import"./vl-map-layer-circle-style-BBoDWqcR.js";import"./vl-map-features-layer-CEF7bfWd.js";import"./vl-map-wfs-layer-ZncIm8XG.js";import{m as y,a as i}from"./vl-map-draw-action.stories-arg-Bv7v-Qsd.js";import"./vl-map-draw-point-action-BnpkuV-b.js";import"./preload-helper-PPVm8Dsz.js";import"./vl-map-vector-layer-CQXQ1CFV.js";import"./vl-map-action.stories-arg-DzgNvcNu.js";import"./vl-map-draw-action-enDB39H3.js";import"./vl-map-layer-action-BuSnoCGf.js";import"./composite-vector-layer-CSSpqbq6.js";function p(r){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...r.components},{FluxComponentMetaData:o}=a;return o||u("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-draw-point-action",children:"Map Draw Point Action"}),`
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
`,e.jsx(l,{of:t})]})}function g(r={}){const{wrapper:a}={...c(),...r.components};return a?e.jsx(a,{...r,children:e.jsx(p,{...r})}):p(r)}function u(r,a){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const z={id:"map-action-draw-action-draw-point-action",title:"map/action/draw-action/draw-point-action",tags:["autodocs"],args:i,argTypes:y,parameters:{docs:{page:g}}},n=s(i,({active:r,defaultActive:a})=>m`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-point-action .active=${r} default-active=${a}></vl-map-draw-point-action>
                <vl-map-layer-circle-style border-size="2"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `);n.storyName="vl-map-draw-point-action - default";n.args={active:!0};const t=s(i,({active:r,defaultActive:a,snapping:o,snappingPixelTolerance:d})=>m`
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
    `);t.storyName="vl-map-draw-point-action - snapping";t.args={active:!0,snapping:!0,snappingPixelTolerance:1e3};const T=["MapDrawPointActionDefault","MapDrawPointActionSnapping"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(mapDrawActionArgs, ({
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
    \`)`,...t.parameters?.docs?.source}}};export{n as MapDrawPointActionDefault,t as MapDrawPointActionSnapping,T as __namedExportsOrder,z as default};
