import{s as g}from"./stories.helper-DYHi_5m6.js";import{u as o,j as e,C as u,b4 as h,b as x}from"./iframe-Cv28D2NX.js";import"./vl-map-base-layer-CmFLB2kf.js";import"./vl-map-base-layer-grb-gray-B3yI26-B.js";import{m as v,a as l}from"./vl-map-wms-layer.stories-arg-CcRIDaRX.js";import"./vl-map-image-wms-layer-D7zT7t5q.js";import"./preload-helper-PPVm8Dsz.js";import"./vl-map-layer.stories-arg-DWa_vUkC.js";import"./vl-map-wms-layer-CVjCwDx7.js";function m(r){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...r.components},{FluxComponentMetaData:s}=a;return s||w("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-image-wms-layer",children:"Map Image WMS Layer"}),`
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
`,e.jsx(u,{of:n}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(h,{of:n})]})}function b(r={}){const{wrapper:a}={...o(),...r.components};return a?e.jsx(a,{...r,children:e.jsx(m,{...r})}):m(r)}function w(r,a){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const k={id:"map-layer-wms-layer-image-wms-layer",title:"map/layer/wms-layer/image-wms-layer",tags:["autodocs"],args:l,argTypes:v,parameters:{docs:{page:b}}},n=g(l,({hidden:r,layers:a,maxResolution:s,minResolution:t,name:i,opacity:p,styles:d,url:c,version:y})=>x`
            <vl-map lambert2008>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-image-wms-layer
                    ?hidden=${r}
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
        `);n.storyName="vl-map-image-wms-layer - default";n.args={name:"Beschermingszones",layers:"grondwater:beschermingszones_2014",url:"https://www.dov.vlaanderen.be/geoserver/wms"};const R=["MapImageWmsLayerDefault"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(mapWmsLayerArgs, ({
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
        \`)`,...n.parameters?.docs?.source}}};export{n as MapImageWmsLayerDefault,R as __namedExportsOrder,k as default};
