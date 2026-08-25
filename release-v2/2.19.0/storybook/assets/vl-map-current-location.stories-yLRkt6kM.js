import{Z as i,_ as l,a1 as p,W as m,X as d,u as c,j as e,C as u,b8 as g,s as h,x}from"./iframe-CY-ZM549.js";import"./vl-map-base-layer-BdyzNi5-.js";import"./vl-map-base-layer-grb-gray-D0d8kmNt.js";import{D as y,a as f}from"./vl-map-current-location-eclXaESl.js";import"./preload-helper-D9Z9MdNV.js";const r={...d,tooltip:y,zoom:f},v={...m,tooltip:{name:"tooltip",description:"Bepaalt de tekst van de tooltip van de huidige locatie knop.",table:{type:{summary:l.STRING},category:i.ATTRIBUTES,defaultValue:{summary:r.tooltip}}},zoom:{name:"zoom",description:"Bepaalt hoever er ingezoomd wordt bij het klikken op de huidige locatie knop.",control:{type:p.RANGE,min:1,max:13,step:1},table:{type:{summary:l.NUMBER},category:i.ATTRIBUTES,defaultValue:{summary:String(r.zoom)}}}};function s(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...t.components},{FluxComponentMetaData:n}=o;return n||j("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"map-current-location",children:"Map Current Location"}),`
`,e.jsx(n,{id:"map-components-current-location"}),`
`,e.jsx(o.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(o.p,{children:["Gebruik het ",e.jsx(o.code,{children:"map-current-location"})," component om een huidige locatie knop af te beelden op de map.",e.jsx("br",{}),`
Na het drukken op de knop wordt de huidige locatie van de gebruiker centraal afgebeeld.`]}),`
`,e.jsx(o.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`import { VlMapCurrentLocation } from '@domg-wc/map';
`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<vl-map-current-location></vl-map-current-location>
`})}),`
`,e.jsx(u,{of:a}),`
`,e.jsx(o.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(g,{of:a})]})}function b(t={}){const{wrapper:o}={...c(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s(t)}function j(t,o){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const L={id:"map-current-location",title:"map/current-location",tags:["autodocs"],args:r,argTypes:v,parameters:{docs:{page:b}}},a=h(r,({tooltip:t,zoom:o})=>x`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-current-location tooltip=${t} zoom=${o}></vl-map-current-location>
        </vl-map>
    `);a.storyName="vl-map-current-location - default";a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(mapCurrentLocationArgs, ({
  tooltip,
  zoom
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-current-location tooltip=\${tooltip} zoom=\${zoom}></vl-map-current-location>
        </vl-map>
    \`)`,...a.parameters?.docs?.source}}};const A=["MapCurrentLocationDefault"];export{a as MapCurrentLocationDefault,A as __namedExportsOrder,L as default};
