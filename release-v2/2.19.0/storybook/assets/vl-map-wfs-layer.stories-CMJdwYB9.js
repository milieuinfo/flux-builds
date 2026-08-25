import{Z as i,_ as t,u as v,j as r,C as g,b8 as h,s as b,x}from"./iframe-CY-ZM549.js";import"./vl-map-base-layer-BdyzNi5-.js";import"./vl-map-base-layer-grb-gray-D0d8kmNt.js";import"./vl-map-wfs-layer-FaBKjmvQ.js";import{m as j,a as w}from"./vl-map-layer.stories-arg-hwAfVFR7.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-C3_HId6n.js";const n={...w,cqlFilter:"",geometryName:"",layers:"",projectionCode:"",url:""},q={...j,cqlFilter:{name:"cql-filter",description:"Een CQL-expressie waarmee de features van de WFS-laag server-side gefilterd worden. De waarde wordt als <code>cql_filter</code> query parameter naar de server gestuurd, gecombineerd met een <code>BBOX</code>-clausule op de geometry-property: <code>cql_filter=BBOX(geometry,extent) AND (filter)</code> in plaats van een <code>bbox</code> parameter. <br><strong>Let op:</strong> <code>cql_filter</code> is een GeoServer-specifieke extensie en wordt niet door elke WFS-implementatie ondersteund.<br>Dit attribuut is reactief.",type:{name:t.STRING,required:!1},table:{type:{summary:t.STRING},category:i.ATTRIBUTES,defaultValue:{summary:n.cqlFilter}}},geometryName:{name:"geometry-name",description:"De naam van de geometry-property die in de CQL <code>BBOX(...)</code>-clausule gebruikt wordt. Enkel relevant samen met <code>cql-filter</code>. Indien niet meegegeven wordt de geometry-property best-effort gedetecteerd via een <code>DescribeFeatureType</code> call; geef dit attribuut expliciet mee wanneer die auto-detectie faalt.<br>Dit attribuut is niet reactief.",type:{name:t.STRING,required:!1},table:{type:{summary:t.STRING},category:i.ATTRIBUTES,defaultValue:{summary:n.geometryName}}},layers:{name:"layers",description:"De layers van de WFS.<br>Dit attribuut is niet reactief.",type:{name:t.STRING,required:!0},table:{type:{summary:t.STRING},category:i.ATTRIBUTES,defaultValue:{summary:n.layers}}},projectionCode:{name:"projection-code",description:"Indien je Lambert 72 coördinaten gebruikt op een Lambert 2008 kaart, moet je de projectie code EPSG:31370 meegeven als projection-code. Geef je dit niet mee, dan zal de kaartlaag de projectie code van de kaart overnemen.<br>Dit attribuut is niet reactief.",table:{type:{summary:t.STRING},category:i.ATTRIBUTES,defaultValue:{summary:n.projectionCode}}},url:{name:"url",description:"De WFS url.<br>Dit attribuut is niet reactief.",type:{name:t.STRING,required:!0},table:{type:{summary:t.STRING},category:i.ATTRIBUTES,defaultValue:{summary:n.url}}}};function f(a){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...v(),...a.components},{FluxComponentMetaData:s}=e;return s||S("FluxComponentMetaData"),r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"map-wfs-layer",children:"Map WFS Layer"}),`
`,r.jsx(s,{id:"map-components-layer-vector-wfs-layer"}),`
`,r.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,r.jsxs(e.p,{children:["Gebruik de ",r.jsx(e.code,{children:"map-wfs-layer"})," component om een WFS kaartlaag af te beelden.",r.jsx("br",{}),`
Deze component erft over van de `,r.jsx(e.code,{children:"VlMapVectorLayer"})," klasse, die op zijn beurt overerft van de ",r.jsx(e.code,{children:"VlMapLayer"})," klasse."]}),`
`,r.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-js",children:`import { VlMapWfsLayer } from '@domg-wc/map';
`})}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-html",children:`<vl-map-wfs-layer></vl-map-wfs-layer>
`})}),`
`,r.jsx(g,{of:o}),`
`,r.jsx(e.h2,{id:"filteren-met-de-cql-filter",children:"Filteren met de cql-filter"}),`
`,r.jsxs(e.p,{children:["Met het ",r.jsx(e.code,{children:"cql-filter"})," attribuut filter je de features van de laag server-side. De waarde wordt als ",r.jsx(e.code,{children:"cql_filter"}),` query
parameter naar de WFS server gestuurd, gecombineerd met een ruimtelijke `,r.jsx(e.code,{children:"BBOX"}),`-clausule:
`,r.jsx(e.code,{children:"cql_filter=BBOX(geometry,extent) AND (filter)"}),". Zonder ",r.jsx(e.code,{children:"cql-filter"}),` blijft het gedrag ongewijzigd (een gewone
`,r.jsx(e.code,{children:"bbox"}),"-parameter)."]}),`
`,r.jsxs(e.p,{children:["De ",r.jsx(e.code,{children:"BBOX"}),"-clausule heeft de naam van de geometry-property nodig. Geef die expliciet mee via ",r.jsx(e.code,{children:"geometry-name"}),`, of laat ze
weg: dan wordt ze best-effort gedetecteerd via een `,r.jsx(e.code,{children:"DescribeFeatureType"}),` call. Faalt die detectie (bv. een
niet-standaard WFS-server), dan valt de laag veilig terug op een gewone `,r.jsx(e.code,{children:"bbox"}),`-request en verschijnt er een
`,r.jsx(e.code,{children:"console.warn"})," - geef in dat geval ",r.jsx(e.code,{children:"geometry-name"})," expliciet mee."]}),`
`,r.jsxs(e.blockquote,{children:[`
`,r.jsxs(e.p,{children:[r.jsx(e.strong,{children:"Let op:"})," ",r.jsx(e.code,{children:"cql_filter"})," is een GeoServer-specifieke extensie en wordt niet door elke WFS-implementatie ondersteund."]}),`
`]}),`
`,r.jsx(g,{of:l}),`
`,r.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,r.jsx(h,{of:o})]})}function $(a={}){const{wrapper:e}={...v(),...a.components};return e?r.jsx(e,{...a,children:r.jsx(f,{...a})}):f(a)}function S(a,e){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const G={id:"map-layer-vector-layer-wfs-layer",title:"map/layer/vector-layer/wfs-layer",tags:["autodocs"],args:n,argTypes:q,parameters:{docs:{page:$}}},o=b(n,({cqlFilter:a,geometryName:e,hidden:s,layers:m,maxResolution:d,minResolution:c,name:p,opacity:y,url:u})=>x`
            <vl-map lambert2008>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-wfs-layer
                    cql-filter=${a}
                    geometry-name=${e}
                    ?hidden=${s}
                    layers=${m}
                    max-resolution=${d}
                    min-resolution=${c}
                    name=${p}
                    opacity=${y}
                    url=${u}
                    projection-code="EPSG:31370"
                >
                </vl-map-wfs-layer>
            </vl-map>
        `);o.storyName="vl-map-wfs-layer - default";o.args={layers:"owl_l",name:"Oppervlaktewaterlichamen",url:"https://geoserver.vmm.be/geoserver/vmm/wfs"};const l=b(n,({cqlFilter:a,geometryName:e,hidden:s,layers:m,maxResolution:d,minResolution:c,name:p,opacity:y,url:u})=>x`
            <vl-map lambert2008>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-wfs-layer
                    cql-filter=${a}
                    geometry-name=${e}
                    ?hidden=${s}
                    layers=${m}
                    max-resolution=${d}
                    min-resolution=${c}
                    name=${p}
                    opacity=${y}
                    url=${u}
                    projection-code="EPSG:31370"
                >
                </vl-map-wfs-layer>
            </vl-map>
        `);l.storyName="vl-map-wfs-layer - cql-filter";l.args={cqlFilter:"bekken_naa = 'IJzerbekken'",geometryName:"geom",layers:"owl_l",name:"Oppervlaktewaterlichamen (gefilterd)",url:"https://geoserver.vmm.be/geoserver/vmm/wfs"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(mapWfsLayerArgs, ({
  cqlFilter,
  geometryName,
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
                    cql-filter=\${cqlFilter}
                    geometry-name=\${geometryName}
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
        \`)`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(mapWfsLayerArgs, ({
  cqlFilter,
  geometryName,
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
                    cql-filter=\${cqlFilter}
                    geometry-name=\${geometryName}
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
        \`)`,...l.parameters?.docs?.source}}};const E=["MapWfsLayerDefault","MapWfsLayerCqlFilter"];export{l as MapWfsLayerCqlFilter,o as MapWfsLayerDefault,E as __namedExportsOrder,G as default};
