import{u as o,j as e,C as g,bd as h,s as u,x}from"./iframe-69xRVzLO.js";import"./vl-map-base-layer-klRzOZNV.js";import"./vl-map-base-layer-grb-gray-DlkCF-Sm.js";import{m as v,a as l}from"./vl-map-wms-layer.stories-arg-Di1nLWBF.js";import"./vl-map-image-wms-layer-DDQe_msE.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-layer.stories-arg-DcAtpVTq.js";import"./vl-map-wms-layer-DEFtimel.js";function m(n){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...n.components},{FluxComponentMetaData:s}=a;return s||j("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-image-wms-layer",children:"Map Image WMS Layer"}),`
`,e.jsx(s,{id:"map-components-layer-wms-image-wms-layer"}),`
`,e.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(a.p,{children:["Gebruik de ",e.jsx(a.code,{children:"map-image-wms-layer"}),` component om een WMS kaartlaag af te beelden waarbij de bevraging telkens met één
afbeelding gebeurt.`,e.jsx("br",{}),`
Deze component erft over van de `,e.jsx(a.code,{children:"VlMapWmsLayer"})," klasse, die op zijn beurt overerft van de ",e.jsx(a.code,{children:"VlMapLayer"})," klasse."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlMapImageWmsLayer } from '@domg-wc/map';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-map-image-wms-layer></vl-map-image-wms-layer>
`})}),`
`,e.jsx(g,{of:r}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(a.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(a.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-image-wms-layer--default",rel:"nofollow",children:"Legacy Storybook - Map Image Wms Layer"})}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapImageWmsLayer.html",rel:"nofollow",children:"Legacy Documentatie - Map Image Wms Layer"})})]})}function b(n={}){const{wrapper:a}={...o(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(m,{...n})}):m(n)}function j(n,a){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const C={id:"map-layer-wms-layer-image-wms-layer",title:"map/layer/wms-layer/image-wms-layer",tags:["autodocs"],args:l,argTypes:v,parameters:{docs:{page:b}}},r=u(l,({hidden:n,layers:a,maxResolution:s,minResolution:t,name:i,opacity:p,styles:d,url:c,version:y})=>x`
            <vl-map lambert2008>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-image-wms-layer
                    ?hidden=${n}
                    layers=${a}
                    max-resolution=${s}
                    min-resolution=${t}
                    name=${i}
                    opacity=${p}
                    styles=${d}
                    url=${c}
                    version=${y}
                >
                </vl-map-image-wms-layer>
            </vl-map>
        `);r.storyName="vl-map-image-wms-layer - default";r.args={name:"Beschermingszones",layers:"grondwater:beschermingszones_2014",url:"https://www.dov.vlaanderen.be/geoserver/wms"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(mapWmsLayerArgs, ({
  hidden,
  layers,
  maxResolution,
  minResolution,
  name,
  opacity,
  styles,
  url,
  version
}) => html\`
            <vl-map lambert2008>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-image-wms-layer
                    ?hidden=\${hidden}
                    layers=\${layers}
                    max-resolution=\${maxResolution}
                    min-resolution=\${minResolution}
                    name=\${name}
                    opacity=\${opacity}
                    styles=\${styles}
                    url=\${url}
                    version=\${version}
                >
                </vl-map-image-wms-layer>
            </vl-map>
        \`)`,...r.parameters?.docs?.source}}};const I=["MapImageWmsLayerDefault"];export{r as MapImageWmsLayerDefault,I as __namedExportsOrder,C as default};
