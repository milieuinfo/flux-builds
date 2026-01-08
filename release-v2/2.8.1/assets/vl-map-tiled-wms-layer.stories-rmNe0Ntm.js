import{u as l,j as e,C as h,bd as u,s as x,x as g}from"./iframe-C7eocPW2.js";import"./vl-map-base-layer-cTWRwMZ1.js";import"./vl-map-base-layer-grb-gray-FUd93zzz.js";import{m as v,a as t}from"./vl-map-wms-layer.stories-arg-CvUDbD7h.js";import"./vl-map-tiled-wms-layer-_roAeVZ-.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-layer.stories-arg-Cv92WQnO.js";import"./vl-map-wms-layer-CAGkqb3e.js";function o(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...a.components},{FluxComponentMetaData:s}=n;return s||f("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"map-tiled-wms-layer",children:"Map Tiled WMS Layer"}),`
`,e.jsx(s,{id:"map-components-layer-wms-tiled-wms-layer"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"map-tiled-wms-layer"})," component om een WMS kaartlaag af te beelden.",e.jsx("br",{}),`
Deze component erft over van de `,e.jsx(n.code,{children:"VlMapWmsLayer"})," klasse, die op zijn beurt overerft van de ",e.jsx(n.code,{children:"VlMapLayer"})," klasse."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlMapTiledWmsLayer } from '@domg-wc/map';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-map-tiled-wms-layer></vl-map-tiled-wms-layer>
`})}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(u,{of:r}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-tiled-wms-layer--default",rel:"nofollow",children:"Legacy Storybook - Map Tiled Wms Layer"})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapTiledWmsLayer.html",rel:"nofollow",children:"Legacy Documentatie - Map Tiled Wms Layer"})})]})}function j(a={}){const{wrapper:n}={...l(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(o,{...a})}):o(a)}function f(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const R={id:"map-layer-wms-layer-tiled-wms-layer",title:"map/layer/wms-layer/tiled-wms-layer",tags:["autodocs"],args:t,argTypes:v,parameters:{docs:{page:j}}},r=x(t,({hidden:a,layers:n,maxResolution:s,minResolution:m,name:i,opacity:d,styles:p,url:c,version:y})=>g`
            <vl-map lambert2008>
                <vl-map-tiled-wms-layer
                    ?hidden=${a}
                    layers=${n}
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
        \`)`,...r.parameters?.docs?.source}}};const C=["MapTiledWmsLayerDefault"];export{r as MapTiledWmsLayerDefault,C as __namedExportsOrder,R as default};
