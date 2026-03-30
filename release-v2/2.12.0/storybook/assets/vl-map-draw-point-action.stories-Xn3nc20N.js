import{u as s,j as a,C as l,bb as v,s as c,x as m}from"./iframe-BJy2lIHs.js";import"./vl-map-base-layer-Bhd069p5.js";import"./vl-map-base-layer-grb-gray-CiePMeON.js";import"./vl-map-layer-circle-style-DwQxOcyQ.js";import"./vl-map-features-layer-D_GVez3n.js";import"./vl-map-wfs-layer-D9f5f8q0.js";import{m as y,a as i}from"./vl-map-draw-action.stories-arg-BZW29VzA.js";import"./vl-map-draw-point-action-BFZov_sj.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-BlWh4n98.js";import"./vl-map-action.stories-arg-BEK4tzJo.js";import"./vl-map-draw-action-DDKtBkq5.js";import"./vl-map-layer-action-JwobYCBa.js";import"./composite-vector-layer-BF7SVfkA.js";function p(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...n.components},{FluxComponentMetaData:o}=e;return o||u("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map-draw-point-action",children:"Map Draw Point Action"}),`
`,a.jsx(o,{id:"map-components-action-draw-point-action"}),`
`,a.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,a.jsxs(e.p,{children:["Gebruik het ",a.jsx(e.code,{children:"map-draw-point-action"}),` component om een punt te tekenen op een
`,a.jsx(e.a,{href:"/docs/map-layer-vector-layer-features-layer--map-features-layer-default",children:"map-features-layer"}),".",a.jsx("br",{}),`
Dit component erft over van de `,a.jsx(e.code,{children:"VlMapDrawAction"})," klasse, die op zijn beurt overerft van de ",a.jsx(e.code,{children:"VlMapLayerAction"}),` klasse,
die op zijn beurt overerft van de `,a.jsx(e.code,{children:"VlMapAction"})," klasse."]}),`
`,a.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`import { VlMapDrawPointAction } from '@domg-wc/map';
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map-draw-point-action></vl-map-draw-point-action>
`})}),`
`,a.jsx(l,{of:r}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(v,{of:r}),`
`,a.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,a.jsx(e.h3,{id:"snapping",children:"Snapping"}),`
`,a.jsx(l,{of:t}),`
`,a.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,a.jsx(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-draw-point-action--default",rel:"nofollow",children:"Legacy Storybook - Map Draw Point Action"})}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapDrawPointAction.html",rel:"nofollow",children:"Legacy Documentatie - Map Draw Point Action"})}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-draw-actions.html",rel:"nofollow",children:"Legacy Demo - Map Draw Point Action"})})]})}function g(n={}){const{wrapper:e}={...s(),...n.components};return e?a.jsx(e,{...n,children:a.jsx(p,{...n})}):p(n)}function u(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const _={id:"map-action-draw-action-draw-point-action",title:"map/action/draw-action/draw-point-action",tags:["autodocs"],args:i,argTypes:y,parameters:{docs:{page:g}}},r=c(i,({active:n,defaultActive:e})=>m`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-point-action .active=${n} default-active=${e}></vl-map-draw-point-action>
                <vl-map-layer-circle-style border-size="2"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `);r.storyName="vl-map-draw-point-action - default";r.args={active:!0};const t=c(i,({active:n,defaultActive:e,snapping:o,snappingPixelTolerance:d})=>m`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-point-action
                    .active=${n}
                    ?default-active=${e}
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
    `);t.storyName="vl-map-draw-point-action - snapping";t.args={active:!0,snapping:!0,snappingPixelTolerance:1e3};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(mapDrawActionArgs, ({
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
    \`)`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(mapDrawActionArgs, ({
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
    \`)`,...t.parameters?.docs?.source}}};const V=["MapDrawPointActionDefault","MapDrawPointActionSnapping"];export{r as MapDrawPointActionDefault,t as MapDrawPointActionSnapping,V as __namedExportsOrder,_ as default};
