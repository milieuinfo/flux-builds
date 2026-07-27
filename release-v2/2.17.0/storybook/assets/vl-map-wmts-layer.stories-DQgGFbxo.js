import{Z as l,_ as t,u as d,j as a,C as f,b8 as v,s as c,x as u}from"./iframe-BgD7f6Cn.js";import"./vl-map-base-layer-CJ9Hplnc.js";import"./vl-map-base-layer-grb-gray--tROFEyH.js";import"./vl-map-wmts-layer-DA694tzU.js";import{m as h,a as T}from"./vl-map-layer.stories-arg-DZDLQwQt.js";import"./preload-helper-D9Z9MdNV.js";const m={...T,layer:"",url:"",matrixSet:"BPL2008VL",matrixPrefix:!1,fromCapabilities:!1},w={...h,layer:{name:"layer",description:"De layer van de WMTS.<br>Dit attribuut is niet reactief.",type:{name:t.STRING,required:!0},table:{type:{summary:t.STRING},category:l.ATTRIBUTES,defaultValue:{summary:m.layer}}},url:{name:"url",description:"De WMTS url.<br>Dit attribuut is niet reactief.",type:{name:t.STRING,required:!0},table:{type:{summary:t.STRING},category:l.ATTRIBUTES,defaultValue:{summary:m.url}}},matrixSet:{name:"matrix-set",description:"De matrix set van de WMTS.<br>Dit attribuut is niet reactief.",type:{name:t.STRING,required:!1},table:{type:{summary:t.STRING},category:l.ATTRIBUTES,defaultValue:{summary:m.matrixSet}}},matrixPrefix:{name:"matrix-prefix",description:"Definieert of de matrix moet geprefixt worden met de matrix set.<br/>Dit attribuut is niet reactief.",table:{type:{summary:t.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(m.matrixPrefix)}}},fromCapabilities:{name:"from-capabilities",description:"Haalt de TileMatrix configuratie op uit de WMTS GetCapabilities response.<br>Dit attribuut is niet reactief.",table:{type:{summary:t.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:"false"}}}};function y(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...r.components},{FluxComponentMetaData:s}=e;return s||S("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map-wmts-layer",children:"Map WMTS Layer"}),`
`,a.jsx(s,{id:"map-components-layer-wmts-layer"}),`
`,a.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,a.jsxs(e.p,{children:["Gebruik de ",a.jsx(e.code,{children:"map-wmts-layer"})," component om een WMTS kaartlaag af te beelden.",a.jsx("br",{}),`
Deze component erft over van de `,a.jsx(e.code,{children:"VlMapLayer"})," klasse."]}),`
`,a.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`import { VlMapWmtsLayer } from '@domg-wc/map';
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map-wmts-layer></vl-map-wmts-layer>
`})}),`
`,a.jsx(f,{of:n}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(v,{of:n})]})}function $(r={}){const{wrapper:e}={...d(),...r.components};return e?a.jsx(e,{...r,children:a.jsx(y,{...r})}):y(r)}function S(r,e){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const C={id:"map-layer-wmts-layer",title:"map/layer/wmts-layer",tags:["autodocs"],args:m,argTypes:w,parameters:{docs:{page:$}}},n=c(m,({hidden:r,layer:e,maxResolution:s,minResolution:o,name:p,opacity:g,url:b,fromCapabilities:x})=>u`
            <vl-map lambert2008>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-wmts-layer
                    ?hidden=${r}
                    layer=${e}
                    max-resolution=${s}
                    min-resolution=${o}
                    name=${p}
                    opacity=${g}
                    url=${b}
                    ?from-capabilities=${x}
                >
                </vl-map-wmts-layer>
            </vl-map>
        `);n.storyName="vl-map-wmts-layer - default";n.args={name:"GRB Wegenkaart",layer:"grb_sel",url:"https://geo.api.vlaanderen.be/GRB/wmts"};const i=c(m,({hidden:r,maxResolution:e,minResolution:s,name:o,opacity:p})=>u`
            <vl-map>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-wmts-layer
                    ?hidden=${r}
                    layer="klimaat_doorgrondkaart"
                    max-resolution=${e}
                    min-resolution=${s}
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
