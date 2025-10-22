import{u as o,j as e,C as g,bd as h,s as u,x}from"./iframe-Ds54rb_7.js";import"./vl-map-base-layer-CUICGl8E.js";import"./vl-map-base-layer-grb-gray-DTa8N6xA.js";import{m as v,a as l}from"./vl-map-wms-layer.stories-arg-BiSENZaR.js";import"./vl-map-image-wms-layer-DbgnFc3a.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-layer.stories-arg-KPxB0o9s.js";import"./vl-map-wms-layer-DtzeUj1c.js";function m(r){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...r.components},{FluxMetaData:s}=a;return s||w("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-image-wms-layer",children:"Map Image WMS Layer"}),`
`,e.jsx(s,{id:"map-layer-wms-layer-image-wms-layer"}),`
`,e.jsxs(a.p,{children:["Gebruik de ",e.jsx(a.code,{children:"map-image-wms-layer"}),` component om een WMS kaartlaag af te beelden waarbij de bevraging telkens met één
afbeelding gebeurt.`,e.jsx("br",{}),`
Deze component erft over van de `,e.jsx(a.code,{children:"VlMapWmsLayer"})," klasse, die op zijn beurt overerft van de ",e.jsx(a.code,{children:"VlMapLayer"})," klasse."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlMapImageWmsLayer } from '@domg-wc/map';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-map-image-wms-layer></vl-map-image-wms-layer>
`})}),`
`,e.jsx(g,{of:n}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(h,{of:n}),`
`,e.jsx(a.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(a.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-image-wms-layer--default",rel:"nofollow",children:"Legacy Storybook - Map Image Wms Layer"})}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapImageWmsLayer.html",rel:"nofollow",children:"Legacy Documentatie - Map Image Wms Layer"})})]})}function b(r={}){const{wrapper:a}={...o(),...r.components};return a?e.jsx(a,{...r,children:e.jsx(m,{...r})}):m(r)}function w(r,a){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const I={id:"map-layer-wms-layer-image-wms-layer",title:"map/layer/wms-layer/image-wms-layer",tags:["autodocs"],args:l,argTypes:v,parameters:{docs:{page:b}}},n=u(l,({hidden:r,layers:a,maxResolution:s,minResolution:t,name:i,opacity:p,styles:d,url:c,version:y})=>x`
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
        `);n.storyName="vl-map-image-wms-layer - default";n.args={name:"Beschermingszones",layers:"grondwater:beschermingszones_2014",url:"https://www.dov.vlaanderen.be/geoserver/wms"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(mapWmsLayerArgs, ({
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
        \`)`,...n.parameters?.docs?.source}}};const R=["MapImageWmsLayerDefault"];export{n as MapImageWmsLayerDefault,R as __namedExportsOrder,I as default};
