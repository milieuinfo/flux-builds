import{u as d,j as e,C as p,bd as g,s as k,x as h}from"./iframe-BQb9mjVp.js";import"./vl-map-base-layer-BdAzFV8b.js";import{m as x,a as y}from"./vl-map-baselayer.stories-arg-I7TFYIVb.js";import"./preload-helper-D9Z9MdNV.js";function c(r){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...r.components},{FluxComponentMetaData:o}=a;return o||$("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-baselayer",children:"Map Baselayer"}),`
`,e.jsx(o,{id:"map-components-baselayer-base-layer"}),`
`,e.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(a.p,{children:["Gebruik het ",e.jsx(a.code,{children:"map-baselayer"})," component om een basis kaartlaag af te beelden."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlMapBaseLayer } from '@domg-wc/map';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-map-baselayer></vl-map-baselayer>
`})}),`
`,e.jsx(p,{of:n}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(g,{of:n}),`
`,e.jsx(a.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(a.h3,{id:"background-layer",children:"Background Layer"}),`
`,e.jsx(p,{of:t}),`
`,e.jsx(a.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(a.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapBaseLayer.html",rel:"nofollow",children:"Legacy Documentatie - Map Base Layer"})})]})}function v(r={}){const{wrapper:a}={...d(),...r.components};return a?e.jsx(a,{...r,children:e.jsx(c,{...r})}):c(r)}function $(r,a){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const M={id:"map-baselayer",title:"map/baselayer",tags:["autodocs"],args:y,argTypes:x,parameters:{docs:{page:v}}},l=k(y,({backgroundLayer:r,backgroundType:a,backgroundOptions:o,layer:i,title:m,type:u,url:b})=>h`
        <vl-map lambert2008>
            <vl-map-baselayer
                ?background-layer=${r}
                background-type=${a}
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
    \`)`,...s.parameters?.docs?.source}}};const w=["MapBaselayerDefault","MapBaselayerBackgroundLayer","MapBaselayerCustomBackgroundLayer"];export{t as MapBaselayerBackgroundLayer,s as MapBaselayerCustomBackgroundLayer,n as MapBaselayerDefault,w as __namedExportsOrder,M as default};
