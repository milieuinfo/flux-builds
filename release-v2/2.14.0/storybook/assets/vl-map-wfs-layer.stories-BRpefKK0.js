import{Z as l,_ as t,u as m,j as e,C as u,bc as f,s as g,x as j}from"./iframe-D9dm7PbY.js";import"./vl-map-base-layer-DdS66t0g.js";import"./vl-map-base-layer-grb-gray-DlB85uo0.js";import"./vl-map-wfs-layer-QEPpHWcr.js";import{m as v,a as x}from"./vl-map-layer.stories-arg-gjXx8Eut.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-D9Lz4fnH.js";const o={...x,layers:"",projectionCode:"",url:""},b={...v,layers:{name:"layers",description:"De layers van de WFS.<br>Dit attribuut is niet reactief.",type:{name:t.STRING,required:!0},table:{type:{summary:t.STRING},category:l.ATTRIBUTES,defaultValue:{summary:o.layers}}},projectionCode:{name:"projection-code",description:"Indien je Lambert 72 coördinaten gebruikt op een Lambert 2008 kaart, moet je de projectie code EPSG:31370 meegeven als projection-code. Geef je dit niet mee, dan zal de kaartlaag de projectie code van de kaart overnemen.<br>Dit attribuut is niet reactief.",table:{type:{summary:t.STRING},category:l.ATTRIBUTES,defaultValue:{summary:o.projectionCode}}},url:{name:"url",description:"De WFS url.<br>Dit attribuut is niet reactief.",type:{name:t.STRING,required:!0},table:{type:{summary:t.STRING},category:l.ATTRIBUTES,defaultValue:{summary:o.url}}}};function i(r){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...r.components},{FluxComponentMetaData:s}=a;return s||T("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-wfs-layer",children:"Map WFS Layer"}),`
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
`,e.jsx(f,{of:n})]})}function h(r={}){const{wrapper:a}={...m(),...r.components};return a?e.jsx(a,{...r,children:e.jsx(i,{...r})}):i(r)}function T(r,a){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const E={id:"map-layer-vector-layer-wfs-layer",title:"map/layer/vector-layer/wfs-layer",tags:["autodocs"],args:o,argTypes:b,parameters:{docs:{page:h}}},n=g(o,({hidden:r,layers:a,maxResolution:s,minResolution:p,name:c,opacity:d,url:y})=>j`
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
        \`)`,...n.parameters?.docs?.source}}};const C=["MapWfsLayerDefault"];export{n as MapWfsLayerDefault,C as __namedExportsOrder,E as default};
