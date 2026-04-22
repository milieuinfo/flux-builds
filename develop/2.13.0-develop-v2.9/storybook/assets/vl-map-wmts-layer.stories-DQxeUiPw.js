import{Y as l,Z as t,u as c,j as a,C as x,bb as h,s as d,x as u}from"./iframe-aAtdr__L.js";import"./vl-map-base-layer--WplTurS.js";import"./vl-map-base-layer-grb-gray-Cc4JenHq.js";import"./vl-map-wmts-layer-DXvuuXye.js";import{m as v,a as w}from"./vl-map-layer.stories-arg-CzvsUNwA.js";import"./preload-helper-D9Z9MdNV.js";const s={...w,layer:"",url:"",matrixSet:"BPL2008VL",matrixPrefix:!1,fromCapabilities:!1},T={...v,layer:{name:"layer",description:"De layer van de WMTS.<br>Dit attribuut is niet reactief.",type:{name:t.STRING,required:!0},table:{type:{summary:t.STRING},category:l.ATTRIBUTES,defaultValue:{summary:s.layer}}},url:{name:"url",description:"De WMTS url.<br>Dit attribuut is niet reactief.",type:{name:t.STRING,required:!0},table:{type:{summary:t.STRING},category:l.ATTRIBUTES,defaultValue:{summary:s.url}}},matrixSet:{name:"matrix-set",description:"De matrix set van de WMTS.<br>Dit attribuut is niet reactief.",type:{name:t.STRING,required:!1},table:{type:{summary:t.STRING},category:l.ATTRIBUTES,defaultValue:{summary:s.matrixSet}}},matrixPrefix:{name:"matrix-prefix",description:"Definieert of de matrix moet geprefixt worden met de matrix set.<br/>Dit attribuut is niet reactief.",table:{type:{summary:t.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(s.matrixPrefix)}}},fromCapabilities:{name:"from-capabilities",description:"Haalt de TileMatrix configuratie op uit de WMTS GetCapabilities response.<br>Dit attribuut is niet reactief.",table:{type:{summary:t.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:"false"}}}};function y(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...r.components},{FluxComponentMetaData:m}=e;return m||S("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map-wmts-layer",children:"Map WMTS Layer"}),`
`,a.jsx(m,{id:"map-components-layer-wmts-layer"}),`
`,a.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,a.jsxs(e.p,{children:["Gebruik de ",a.jsx(e.code,{children:"map-wmts-layer"})," component om een WMTS kaartlaag af te beelden.",a.jsx("br",{}),`
Deze component erft over van de `,a.jsx(e.code,{children:"VlMapLayer"})," klasse."]}),`
`,a.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`import { VlMapWmtsLayer } from '@domg-wc/map';
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map-wmts-layer></vl-map-wmts-layer>
`})}),`
`,a.jsx(x,{of:n}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(h,{of:n}),`
`,a.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,a.jsx(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-wmts-layer--default",rel:"nofollow",children:"Legacy Storybook - Map Wmts Layer"})}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapWmtsLayer.html",rel:"nofollow",children:"Legacy Documentatie - Map Wmts Layer"})})]})}function j(r={}){const{wrapper:e}={...c(),...r.components};return e?a.jsx(e,{...r,children:a.jsx(y,{...r})}):y(r)}function S(r,e){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const C={id:"map-layer-wmts-layer",title:"map/layer/wmts-layer",tags:["autodocs"],args:s,argTypes:T,parameters:{docs:{page:j}}},n=d(s,({hidden:r,layer:e,maxResolution:m,minResolution:o,name:p,opacity:g,url:b,fromCapabilities:f})=>u`
            <vl-map lambert2008>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-wmts-layer
                    ?hidden=${r}
                    layer=${e}
                    max-resolution=${m}
                    min-resolution=${o}
                    name=${p}
                    opacity=${g}
                    url=${b}
                    ?from-capabilities=${f}
                >
                </vl-map-wmts-layer>
            </vl-map>
        `);n.storyName="vl-map-wmts-layer - default";n.args={name:"GRB Wegenkaart",layer:"grb_sel",url:"https://geo.api.vlaanderen.be/GRB/wmts"};const i=d(s,({hidden:r,maxResolution:e,minResolution:m,name:o,opacity:p})=>u`
            <vl-map>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-wmts-layer
                    ?hidden=${r}
                    layer="klimaat_doorgrondkaart"
                    max-resolution=${e}
                    min-resolution=${m}
                    name=${o}
                    opacity=${p}
                    url="https://www.dov.vlaanderen.be/geoserver/klimaat/gwc/service/wmts"
                    from-capabilities
                >
                </vl-map-wmts-layer>
            </vl-map>
        `);i.storyName="vl-map-wmts-layer - from-capabilities";i.args={name:"DOV Klimaat Doorgrondkaart"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(mapWmtsLayerArgs, ({
  hidden,
  layer,
  maxResolution,
  minResolution,
  name,
  opacity,
  url,
  fromCapabilities
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
                    ?from-capabilities=\${fromCapabilities}
                >
                </vl-map-wmts-layer>
            </vl-map>
        \`)`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(mapWmtsLayerArgs, ({
  hidden,
  maxResolution,
  minResolution,
  name,
  opacity
}) => html\`
            <vl-map>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-wmts-layer
                    ?hidden=\${hidden}
                    layer="klimaat_doorgrondkaart"
                    max-resolution=\${maxResolution}
                    min-resolution=\${minResolution}
                    name=\${name}
                    opacity=\${opacity}
                    url="https://www.dov.vlaanderen.be/geoserver/klimaat/gwc/service/wmts"
                    from-capabilities
                >
                </vl-map-wmts-layer>
            </vl-map>
        \`)`,...i.parameters?.docs?.source}}};const A=["MapWmtsLayerDefault","MapWmtsLayerFromCapabilities"];export{n as MapWmtsLayerDefault,i as MapWmtsLayerFromCapabilities,A as __namedExportsOrder,C as default};
