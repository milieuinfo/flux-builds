import{u as y,j as a,C as p,b8 as g,s as k,x as h}from"./iframe-CY-ZM549.js";import"./vl-map-base-layer-BdyzNi5-.js";import{m as x,a as d}from"./vl-map-baselayer.stories-arg-a4ln6AMQ.js";import"./preload-helper-D9Z9MdNV.js";function c(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...y(),...r.components},{FluxComponentMetaData:o}=e;return o||$("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map-baselayer",children:"Map Baselayer"}),`
`,a.jsx(o,{id:"map-components-baselayer-base-layer"}),`
`,a.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,a.jsxs(e.p,{children:["Gebruik het ",a.jsx(e.code,{children:"map-baselayer"})," component om een basis kaartlaag af te beelden."]}),`
`,a.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`import { VlMapBaseLayer } from '@domg-wc/map';
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map-baselayer></vl-map-baselayer>
`})}),`
`,a.jsx(p,{of:n}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(g,{of:n}),`
`,a.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,a.jsx(e.h3,{id:"background-layer",children:"Background Layer"}),`
`,a.jsx(p,{of:t})]})}function v(r={}){const{wrapper:e}={...y(),...r.components};return e?a.jsx(e,{...r,children:a.jsx(c,{...r})}):c(r)}function $(r,e){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const L={id:"map-baselayer",title:"map/baselayer",tags:["autodocs"],args:d,argTypes:x,parameters:{docs:{page:v}}},l=k(d,({backgroundLayer:r,backgroundType:e,backgroundOptions:o,layer:i,title:m,type:u,url:b})=>h`
        <vl-map lambert2008>
            <vl-map-baselayer
                ?background-layer=${r}
                background-type=${e}
                background-options=${o}
                layer=${i}
                title=${m}
                type=${u}
                url=${b}
            ></vl-map-baselayer>
        </vl-map>
    `),n=l.bind({});n.storyName="vl-map-baselayer - default";n.args={layer:"grb_bsk",title:"GRB basis laag",type:"wmts",url:"https://geo.api.vlaanderen.be/GRB/wmts"};const t=l.bind({});t.storyName="vl-map-baselayer - background layer";t.args={backgroundLayer:!0,layer:"grb_bsk",title:"GRB basis laag",type:"wmts",url:"https://geo.api.vlaanderen.be/GRB/wmts"};const s=l.bind({});s.storyName="vl-map-baselayer - custom background layer";s.args={backgroundLayer:!0,backgroundType:"xyz",backgroundOptions:JSON.stringify({url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",attributions:"Tiles © OpenStreetMap contributors"}),layer:"grb_bsk",title:"GRB basis laag",type:"wmts",url:"https://geo.api.vlaanderen.be/GRB/wmts"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(mapBaselayerArgs, ({
  backgroundLayer,
  backgroundType,
  backgroundOptions,
  layer,
  title,
  type,
  url
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer
                ?background-layer=\${backgroundLayer}
                background-type=\${backgroundType}
                background-options=\${backgroundOptions}
                layer=\${layer}
                title=\${title}
                type=\${type}
                url=\${url}
            ></vl-map-baselayer>
        </vl-map>
    \`)`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(mapBaselayerArgs, ({
  backgroundLayer,
  backgroundType,
  backgroundOptions,
  layer,
  title,
  type,
  url
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer
                ?background-layer=\${backgroundLayer}
                background-type=\${backgroundType}
                background-options=\${backgroundOptions}
                layer=\${layer}
                title=\${title}
                type=\${type}
                url=\${url}
            ></vl-map-baselayer>
        </vl-map>
    \`)`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(mapBaselayerArgs, ({
  backgroundLayer,
  backgroundType,
  backgroundOptions,
  layer,
  title,
  type,
  url
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer
                ?background-layer=\${backgroundLayer}
                background-type=\${backgroundType}
                background-options=\${backgroundOptions}
                layer=\${layer}
                title=\${title}
                type=\${type}
                url=\${url}
            ></vl-map-baselayer>
        </vl-map>
    \`)`,...s.parameters?.docs?.source}}};const T=["MapBaselayerDefault","MapBaselayerBackgroundLayer","MapBaselayerCustomBackgroundLayer"];export{t as MapBaselayerBackgroundLayer,s as MapBaselayerCustomBackgroundLayer,n as MapBaselayerDefault,T as __namedExportsOrder,L as default};
