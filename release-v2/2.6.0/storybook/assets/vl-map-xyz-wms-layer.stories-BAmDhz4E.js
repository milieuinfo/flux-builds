import{u as t,j as e,C as c,bd as x,s as u,x as h}from"./iframe-Ds54rb_7.js";import"./vl-map-base-layer-CUICGl8E.js";import"./vl-map-base-layer-grb-gray-DTa8N6xA.js";import{m as g,a as m}from"./vl-map-wms-layer.stories-arg-BiSENZaR.js";import"./vl-map-xyz-wms-layer-Df0lVG4K.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-layer.stories-arg-KPxB0o9s.js";import"./vl-map-wms-layer-DtzeUj1c.js";function o(r){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...r.components},{FluxMetaData:s}=a;return s||j("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-xyz-wms-layer",children:"Map XYZ WMS Layer"}),`
`,e.jsx(s,{id:"map-layer-wms-layer-xyz-wms-layer"}),`
`,e.jsxs(a.p,{children:["Gebruik de ",e.jsx(a.code,{children:"map-xyz-wms-layer"})," component om een WMS kaartlaag af te beelden.",e.jsx("br",{}),`
Deze component erft over van de `,e.jsx(a.code,{children:"VlMapWmsLayer"})," klasse, die op zijn beurt overerft van de ",e.jsx(a.code,{children:"VlMapLayer"})," klasse."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlMapXYZWmsLayer } from '@domg-wc/map';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-map-xyz-wms-layer></vl-map-xyz-wms-layer>
`})}),`
`,e.jsx(c,{of:n}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(x,{of:n})]})}function v(r={}){const{wrapper:a}={...t(),...r.components};return a?e.jsx(a,{...r,children:e.jsx(o,{...r})}):o(r)}function j(r,a){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const D={id:"map-layer-wms-layer-xyz-wms-layer",title:"map/layer/wms-layer/xyz-wms-layer",tags:["autodocs"],args:m,argTypes:g,parameters:{docs:{page:v}}},n=u(m,({hidden:r,maxResolution:a,minResolution:s,name:l,opacity:i,styles:p,url:y,version:d})=>h`
            <vl-map lambert2008>
                <vl-map-xyz-wms-layer
                    ?hidden=${r}
                    max-resolution=${a}
                    min-resolution=${s}
                    name=${l}
                    opacity=${i}
                    styles=${p}
                    url=${y}
                    version=${d}
                >
                </vl-map-xyz-wms-layer>
            </vl-map>
        `);n.storyName="vl-map-xyz-wms-layer - default";n.args={name:"Openstreetmap",url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(mapWmsLayerArgs, ({
  hidden,
  maxResolution,
  minResolution,
  name,
  opacity,
  styles,
  url,
  version
}) => html\`
            <vl-map lambert2008>
                <vl-map-xyz-wms-layer
                    ?hidden=\${hidden}
                    max-resolution=\${maxResolution}
                    min-resolution=\${minResolution}
                    name=\${name}
                    opacity=\${opacity}
                    styles=\${styles}
                    url=\${url}
                    version=\${version}
                >
                </vl-map-xyz-wms-layer>
            </vl-map>
        \`)`,...n.parameters?.docs?.source}}};const X=["MapXYZWmsLayerDefault"];export{n as MapXYZWmsLayerDefault,X as __namedExportsOrder,D as default};
