import{_ as i,$ as l,a2 as p,X as m,Y as d,u as s,j as e,C as u,bd as g,s as h,x}from"./iframe-69xRVzLO.js";import"./vl-map-base-layer-klRzOZNV.js";import"./vl-map-base-layer-grb-gray-DlkCF-Sm.js";import{D as y,a as f}from"./vl-map-current-location-CB9Y0_gX.js";import"./preload-helper-D9Z9MdNV.js";const n={...d,tooltip:y,zoom:f},v={...m,tooltip:{name:"tooltip",description:"Bepaalt de tekst van de tooltip van de huidige locatie knop.",table:{type:{summary:l.STRING},category:i.ATTRIBUTES,defaultValue:{summary:n.tooltip}}},zoom:{name:"zoom",description:"Bepaalt hoever er ingezoomd wordt bij het klikken op de huidige locatie knop.",control:{type:p.RANGE,min:1,max:13,step:1},table:{type:{summary:l.NUMBER},category:i.ATTRIBUTES,defaultValue:{summary:String(n.zoom)}}}};function c(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components},{FluxComponentMetaData:r}=o;return r||j("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"map-current-location",children:"Map Current Location"}),`
`,e.jsx(r,{id:"map-components-current-location"}),`
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
`,e.jsx(g,{of:a}),`
`,e.jsx(o.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(o.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-current-location--default",rel:"nofollow",children:"Legacy Storybook - Map Current Location"})})]})}function b(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(c,{...t})}):c(t)}function j(t,o){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const E={id:"map-current-location",title:"map/current-location",tags:["autodocs"],args:n,argTypes:v,parameters:{docs:{page:b}}},a=h(n,({tooltip:t,zoom:o})=>x`
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
    \`)`,...a.parameters?.docs?.source}}};const A=["MapCurrentLocationDefault"];export{a as MapCurrentLocationDefault,A as __namedExportsOrder,E as default};
