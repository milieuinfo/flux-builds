import{R as o,U as n,u as i,j as e,C as u,bh as x,s as g,x as h}from"./iframe-iHJvAyUB.js";import"./vl-map-base-layer-Ds3vxb_U.js";import"./vl-map-base-layer-grb-gray-CGABEvMh.js";import"./vl-map-wmts-layer-DG76LaH8.js";import{m as f,a as b}from"./vl-map-layer.stories-arg-D3wnP_1b.js";import"./preload-helper-D9Z9MdNV.js";const s={...b,layer:"",url:"",matrixSet:"BPL2008VL",matrixPrefix:!1},v={...f,layer:{name:"layer",description:"De layer van de WMTS.<br>Dit attribuut is niet reactief.",type:{name:n.STRING,required:!0},table:{type:{summary:n.STRING},category:o.ATTRIBUTES,defaultValue:{summary:s.layer}}},url:{name:"url",description:"De WMTS url.<br>Dit attribuut is niet reactief.",type:{name:n.STRING,required:!0},table:{type:{summary:n.STRING},category:o.ATTRIBUTES,defaultValue:{summary:s.url}}},matrixSet:{name:"matrix-set",description:"De matrix set van de WMTS.<br>Dit attribuut is niet reactief.",type:{name:n.STRING,required:!1},table:{type:{summary:n.STRING},category:o.ATTRIBUTES,defaultValue:{summary:s.matrixSet}}},matrixPrefix:{name:"matrix-prefix",description:"Definieert of de matrix moet geprefixt worden met de matrix set.<br/>Dit attribuut is niet reactief.",table:{type:{summary:n.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(s.matrixPrefix)}}}};function l(r){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...r.components},{FluxComponentMetaData:m}=a;return m||j("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-wmts-layer",children:"Map WMTS Layer"}),`
`,e.jsx(m,{id:"map-components-layer-wmts-layer"}),`
`,e.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(a.p,{children:["Gebruik de ",e.jsx(a.code,{children:"map-wmts-layer"})," component om een WMTS kaartlaag af te beelden.",e.jsx("br",{}),`
Deze component erft over van de `,e.jsx(a.code,{children:"VlMapLayer"})," klasse."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlMapWmtsLayer } from '@domg-wc/map';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-map-wmts-layer></vl-map-wmts-layer>
`})}),`
`,e.jsx(u,{of:t}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(x,{of:t}),`
`,e.jsx(a.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(a.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-wmts-layer--default",rel:"nofollow",children:"Legacy Storybook - Map Wmts Layer"})}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapWmtsLayer.html",rel:"nofollow",children:"Legacy Documentatie - Map Wmts Layer"})})]})}function T(r={}){const{wrapper:a}={...i(),...r.components};return a?e.jsx(a,{...r,children:e.jsx(l,{...r})}):l(r)}function j(r,a){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const W={id:"map-layer-wmts-layer",title:"map/layer/wmts-layer",tags:["autodocs"],args:s,argTypes:v,parameters:{docs:{page:T}}},t=g(s,({hidden:r,layer:a,maxResolution:m,minResolution:p,name:y,opacity:c,url:d})=>h`
            <vl-map lambert2008>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-wmts-layer
                    ?hidden=${r}
                    layer=${a}
                    max-resolution=${m}
                    min-resolution=${p}
                    name=${y}
                    opacity=${c}
                    url=${d}
                >
                </vl-map-wmts-layer>
            </vl-map>
        `);t.storyName="vl-map-wmts-layer - default";t.args={name:"GRB Wegenkaart",layer:"grb_sel",url:"https://geo.api.vlaanderen.be/GRB/wmts"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(mapWmtsLayerArgs, ({
  hidden,
  layer,
  maxResolution,
  minResolution,
  name,
  opacity,
  url
}) => html\`
            <vl-map lambert2008>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-wmts-layer
                    ?hidden=\${hidden}
                    layer=\${layer}
                    max-resolution=\${maxResolution}
                    min-resolution=\${minResolution}
                    name=\${name}
                    opacity=\${opacity}
                    url=\${url}
                >
                </vl-map-wmts-layer>
            </vl-map>
        \`)`,...t.parameters?.docs?.source}}};const $=["MapWmtsLayerDefault"];export{t as MapWmtsLayerDefault,$ as __namedExportsOrder,W as default};
