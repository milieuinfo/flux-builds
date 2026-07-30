import{u as l,j as e,C as u,b8 as x,s as h,x as v}from"./iframe-DynOw9qF.js";import"./vl-map-base-layer-C-Ui_DPh.js";import"./vl-map-base-layer-grb-gray-C5sP2Bls.js";import{m as g,a as t}from"./vl-map-wms-layer.stories-arg-D-iKot0x.js";import"./vl-map-tiled-wms-layer-BVz_TOwI.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-layer.stories-arg-w__RtMQM.js";import"./vl-map-wms-layer-DzZ35q4y.js";function o(n){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...l(),...n.components},{FluxComponentMetaData:s}=a;return s||f("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-tiled-wms-layer",children:"Map Tiled WMS Layer"}),`
`,e.jsx(s,{id:"map-components-layer-wms-tiled-wms-layer"}),`
`,e.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(a.p,{children:["Gebruik de ",e.jsx(a.code,{children:"map-tiled-wms-layer"})," component om een WMS kaartlaag af te beelden.",e.jsx("br",{}),`
Deze component erft over van de `,e.jsx(a.code,{children:"VlMapWmsLayer"})," klasse, die op zijn beurt overerft van de ",e.jsx(a.code,{children:"VlMapLayer"})," klasse."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlMapTiledWmsLayer } from '@domg-wc/map';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-map-tiled-wms-layer></vl-map-tiled-wms-layer>
`})}),`
`,e.jsx(u,{of:r}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(x,{of:r})]})}function j(n={}){const{wrapper:a}={...l(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(o,{...n})}):o(n)}function f(n,a){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const R={id:"map-layer-wms-layer-tiled-wms-layer",title:"map/layer/wms-layer/tiled-wms-layer",tags:["autodocs"],args:t,argTypes:g,parameters:{docs:{page:j}}},r=h(t,({hidden:n,layers:a,maxResolution:s,minResolution:m,name:i,opacity:d,styles:p,url:c,version:y})=>v`
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
        \`)`,...r.parameters?.docs?.source}}};const T=["MapTiledWmsLayerDefault"];export{r as MapTiledWmsLayerDefault,T as __namedExportsOrder,R as default};
