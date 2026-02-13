import{R as l,U as o,u as m,j as e,C as u,bh as f,s as h,x as g}from"./iframe-FlvNZLqI.js";import"./vl-map-base-layer-CnkWBJRC.js";import"./vl-map-base-layer-grb-gray-CrvS-DXx.js";import"./vl-map-wfs-layer-Gl0Cfku4.js";import{m as j,a as v}from"./vl-map-layer.stories-arg-BnUaCMzX.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-B_tYA0Mo.js";const t={...v,layers:"",projectionCode:"",url:""},x={...j,layers:{name:"layers",description:"De layers van de WFS.<br>Dit attribuut is niet reactief.",type:{name:o.STRING,required:!0},table:{type:{summary:o.STRING},category:l.ATTRIBUTES,defaultValue:{summary:t.layers}}},projectionCode:{name:"projection-code",description:"Indien je Lambert 72 coördinaten gebruikt op een Lambert 2008 kaart, moet je de projectie code EPSG:31370 meegeven als projection-code. Geef je dit niet mee, dan zal de kaartlaag de projectie code van de kaart overnemen.<br>Dit attribuut is niet reactief.",table:{type:{summary:o.STRING},category:l.ATTRIBUTES,defaultValue:{summary:t.projectionCode}}},url:{name:"url",description:"De WFS url.<br>Dit attribuut is niet reactief.",type:{name:o.STRING,required:!0},table:{type:{summary:o.STRING},category:l.ATTRIBUTES,defaultValue:{summary:t.url}}}};function i(r){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...r.components},{FluxComponentMetaData:s}=a;return s||w("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-wfs-layer",children:"Map WFS Layer"}),`
`,e.jsx(s,{id:"map-components-layer-vector-wfs-layer"}),`
`,e.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(a.p,{children:["Gebruik de ",e.jsx(a.code,{children:"map-wfs-layer"})," component om een WFS kaartlaag af te beelden.",e.jsx("br",{}),`
Deze component erft over van de `,e.jsx(a.code,{children:"VlMapVectorLayer"})," klasse, die op zijn beurt overerft van de ",e.jsx(a.code,{children:"VlMapLayer"})," klasse."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlMapWfsLayer } from '@domg-wc/map';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-map-wfs-layer></vl-map-wfs-layer>
`})}),`
`,e.jsx(u,{of:n}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(f,{of:n}),`
`,e.jsx(a.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(a.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-wfs-layer--default",rel:"nofollow",children:"Legacy Storybook - Map Wfs Layer"})}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapWfsLayer.html",rel:"nofollow",children:"Legacy Documentatie - Map Wfs Layer"})})]})}function b(r={}){const{wrapper:a}={...m(),...r.components};return a?e.jsx(a,{...r,children:e.jsx(i,{...r})}):i(r)}function w(r,a){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const $={id:"map-layer-vector-layer-wfs-layer",title:"map/layer/vector-layer/wfs-layer",tags:["autodocs"],args:t,argTypes:x,parameters:{docs:{page:b}}},n=h(t,({hidden:r,layers:a,maxResolution:s,minResolution:p,name:c,opacity:d,url:y})=>g`
            <vl-map lambert2008>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-wfs-layer
                    ?hidden=${r}
                    layers=${a}
                    max-resolution=${s}
                    min-resolution=${p}
                    name=${c}
                    opacity=${d}
                    url=${y}
                    projection-code="EPSG:31370"
                >
                </vl-map-wfs-layer>
            </vl-map>
        `);n.storyName="vl-map-wfs-layer - default";n.args={layers:"owl_l",name:"Oppervlaktewaterlichamen",url:"https://geoserver.vmm.be/geoserver/vmm/wfs"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(mapWfsLayerArgs, ({
  hidden,
  layers,
  maxResolution,
  minResolution,
  name,
  opacity,
  url
}) => html\`
            <vl-map lambert2008>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-wfs-layer
                    ?hidden=\${hidden}
                    layers=\${layers}
                    max-resolution=\${maxResolution}
                    min-resolution=\${minResolution}
                    name=\${name}
                    opacity=\${opacity}
                    url=\${url}
                    projection-code="EPSG:31370"
                >
                </vl-map-wfs-layer>
            </vl-map>
        \`)`,...n.parameters?.docs?.source}}};const E=["MapWfsLayerDefault"];export{n as MapWfsLayerDefault,E as __namedExportsOrder,$ as default};
