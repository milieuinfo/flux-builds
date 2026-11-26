import{s as u}from"./stories.helper-DYHi_5m6.js";import{u as l,j as e,C as x,b4 as h,b as v}from"./iframe-Cv28D2NX.js";import"./vl-map-base-layer-CmFLB2kf.js";import"./vl-map-base-layer-grb-gray-B3yI26-B.js";import{m as g,a as t}from"./vl-map-wms-layer.stories-arg-CcRIDaRX.js";import"./vl-map-tiled-wms-layer-Cd1jgyYt.js";import"./preload-helper-PPVm8Dsz.js";import"./vl-map-layer.stories-arg-DWa_vUkC.js";import"./vl-map-wms-layer-CVjCwDx7.js";function o(n){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...l(),...n.components},{FluxComponentMetaData:s}=a;return s||f("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-tiled-wms-layer",children:"Map Tiled WMS Layer"}),`
`,e.jsx(s,{id:"map-components-layer-wms-tiled-wms-layer"}),`
`,e.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(a.p,{children:["Gebruik de ",e.jsx(a.code,{children:"map-tiled-wms-layer"})," component om een WMS kaartlaag af te beelden.",e.jsx("br",{}),`
Deze component erft over van de `,e.jsx(a.code,{children:"VlMapWmsLayer"})," klasse, die op zijn beurt overerft van de ",e.jsx(a.code,{children:"VlMapLayer"})," klasse."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlMapTiledWmsLayer } from '@domg-wc/map';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-map-tiled-wms-layer></vl-map-tiled-wms-layer>
`})}),`
`,e.jsx(x,{of:r}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(h,{of:r})]})}function j(n={}){const{wrapper:a}={...l(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(o,{...n})}):o(n)}function f(n,a){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const T={id:"map-layer-wms-layer-tiled-wms-layer",title:"map/layer/wms-layer/tiled-wms-layer",tags:["autodocs"],args:t,argTypes:g,parameters:{docs:{page:j}}},r=u(t,({hidden:n,layers:a,maxResolution:s,minResolution:m,name:i,opacity:d,styles:p,url:c,version:y})=>v`
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
        `);r.storyName="vl-map-tiled-wms-layer - default";r.args={layers:"GEM_GRENS",name:"Gemeentegrenzen",url:"https://geo.api.vlaanderen.be/GRB/wms"};const _=["MapTiledWmsLayerDefault"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(mapWmsLayerArgs, ({
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
        \`)`,...r.parameters?.docs?.source}}};export{r as MapTiledWmsLayerDefault,_ as __namedExportsOrder,T as default};
