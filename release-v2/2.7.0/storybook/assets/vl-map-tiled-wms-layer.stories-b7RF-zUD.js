import{u as o,j as e,C as h,bd as u,s as x,x as g}from"./iframe-BRJWU34U.js";import"./vl-map-base-layer-mxB9Jgb1.js";import"./vl-map-base-layer-grb-gray-Di19ej0R.js";import{m as v,a as t}from"./vl-map-wms-layer.stories-arg-DgYEZ-DK.js";import"./vl-map-tiled-wms-layer-DwBMivdU.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-layer.stories-arg-hSUa_3cJ.js";import"./vl-map-wms-layer-D-8YWlSQ.js";function l(n){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...n.components},{FluxMetaData:s}=a;return s||j("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-tiled-wms-layer",children:"Map Tiled WMS Layer"}),`
`,e.jsx(s,{id:"map-layer-wms-layer-tiled-wms-layer"}),`
`,e.jsxs(a.p,{children:["Gebruik de ",e.jsx(a.code,{children:"map-tiled-wms-layer"})," component om een WMS kaartlaag af te beelden.",e.jsx("br",{}),`
Deze component erft over van de `,e.jsx(a.code,{children:"VlMapWmsLayer"})," klasse, die op zijn beurt overerft van de ",e.jsx(a.code,{children:"VlMapLayer"})," klasse."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlMapTiledWmsLayer } from '@domg-wc/map';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-map-tiled-wms-layer></vl-map-tiled-wms-layer>
`})}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(u,{of:r}),`
`,e.jsx(a.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(a.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-tiled-wms-layer--default",rel:"nofollow",children:"Legacy Storybook - Map Tiled Wms Layer"})}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapTiledWmsLayer.html",rel:"nofollow",children:"Legacy Documentatie - Map Tiled Wms Layer"})})]})}function f(n={}){const{wrapper:a}={...o(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(l,{...n})}):l(n)}function j(n,a){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const R={id:"map-layer-wms-layer-tiled-wms-layer",title:"map/layer/wms-layer/tiled-wms-layer",tags:["autodocs"],args:t,argTypes:v,parameters:{docs:{page:f}}},r=x(t,({hidden:n,layers:a,maxResolution:s,minResolution:m,name:i,opacity:d,styles:p,url:c,version:y})=>g`
            <vl-map lambert2008>
                <vl-map-tiled-wms-layer
                    ?hidden=${n}
                    layers=${a}
                    max-resolution=${s}
                    min-resolution=${m}
                    name=${i}
                    opacity=${d}
                    styles=${p}
                    url=${c}
                    version=${y}
                >
                </vl-map-tiled-wms-layer>
            </vl-map>
        `);r.storyName="vl-map-tiled-wms-layer - default";r.args={layers:"GEM_GRENS",name:"Gemeentegrenzen",url:"https://geo.api.vlaanderen.be/GRB/wms"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(mapWmsLayerArgs, ({
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
                <vl-map-tiled-wms-layer
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
                </vl-map-tiled-wms-layer>
            </vl-map>
        \`)`,...r.parameters?.docs?.source}}};const k=["MapTiledWmsLayerDefault"];export{r as MapTiledWmsLayerDefault,k as __namedExportsOrder,R as default};
