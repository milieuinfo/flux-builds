import{u as t,j as e,C as y,bc as x,s as u,x as h}from"./iframe-CsDE-vVI.js";import"./vl-map-base-layer-CgI99i60.js";import"./vl-map-base-layer-grb-gray-BEd-NMxn.js";import{m as g,a as m}from"./vl-map-wms-layer.stories-arg-BOw07PYe.js";import"./vl-map-xyz-wms-layer-DkvfICkF.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-layer.stories-arg-CnCPjYNi.js";import"./vl-map-wms-layer-1f6tt5Ai.js";function o(n){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...n.components},{FluxComponentMetaData:s}=a;return s||v("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-xyz-wms-layer",children:"Map XYZ WMS Layer"}),`
`,e.jsx(s,{id:"map-components-layer-wms-xyz-wms-layer"}),`
`,e.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(a.p,{children:["Gebruik de ",e.jsx(a.code,{children:"map-xyz-wms-layer"})," component om een WMS kaartlaag af te beelden.",e.jsx("br",{}),`
Deze component erft over van de `,e.jsx(a.code,{children:"VlMapWmsLayer"})," klasse, die op zijn beurt overerft van de ",e.jsx(a.code,{children:"VlMapLayer"})," klasse."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlMapXYZWmsLayer } from '@domg-wc/map';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-map-xyz-wms-layer></vl-map-xyz-wms-layer>
`})}),`
`,e.jsx(y,{of:r}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(x,{of:r})]})}function j(n={}){const{wrapper:a}={...t(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(o,{...n})}):o(n)}function v(n,a){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const D={id:"map-layer-wms-layer-xyz-wms-layer",title:"map/layer/wms-layer/xyz-wms-layer",tags:["autodocs"],args:m,argTypes:g,parameters:{docs:{page:j}}},r=u(m,({hidden:n,maxResolution:a,minResolution:s,name:l,opacity:i,styles:p,url:d,version:c})=>h`
            <vl-map lambert2008>
                <vl-map-xyz-wms-layer
                    ?hidden=${n}
                    max-resolution=${a}
                    min-resolution=${s}
                    name=${l}
                    opacity=${i}
                    styles=${p}
                    url=${d}
                    version=${c}
                >
                </vl-map-xyz-wms-layer>
            </vl-map>
        `);r.storyName="vl-map-xyz-wms-layer - default";r.args={name:"Openstreetmap",url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(mapWmsLayerArgs, ({
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
        \`)`,...r.parameters?.docs?.source}}};const C=["MapXYZWmsLayerDefault"];export{r as MapXYZWmsLayerDefault,C as __namedExportsOrder,D as default};
