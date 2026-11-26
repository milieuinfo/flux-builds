import{C as i,T as l,b as p,d as m,a as d,s as u}from"./stories.helper-DYHi_5m6.js";import{u as c,j as e,C as g,b4 as h,b as x}from"./iframe-Cv28D2NX.js";import"./vl-map-base-layer-CmFLB2kf.js";import"./vl-map-base-layer-grb-gray-B3yI26-B.js";import{D as y,a as f}from"./vl-map-current-location-Cl0kDltj.js";import"./preload-helper-PPVm8Dsz.js";const r={...d,tooltip:y,zoom:f},b={...m,tooltip:{name:"tooltip",description:"Bepaalt de tekst van de tooltip van de huidige locatie knop.",table:{type:{summary:l.STRING},category:i.ATTRIBUTES,defaultValue:{summary:r.tooltip}}},zoom:{name:"zoom",description:"Bepaalt hoever er ingezoomd wordt bij het klikken op de huidige locatie knop.",control:{type:p.RANGE,min:1,max:13,step:1},table:{type:{summary:l.NUMBER},category:i.ATTRIBUTES,defaultValue:{summary:String(r.zoom)}}}};function s(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...t.components},{FluxComponentMetaData:n}=o;return n||j("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"map-current-location",children:"Map Current Location"}),`
`,e.jsx(n,{id:"map-components-current-location"}),`
`,e.jsx(o.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(o.p,{children:["Gebruik het ",e.jsx(o.code,{children:"map-current-location"})," component om een huidige locatie knop af te beelden op de map.",e.jsx("br",{}),`
Na het drukken op de knop wordt de huidige locatie van de gebruiker centraal afgebeeld.`]}),`
`,e.jsx(o.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`import { VlMapCurrentLocation } from '@domg-wc/map';
`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<vl-map-current-location></vl-map-current-location>
`})}),`
`,e.jsx(g,{of:a}),`
`,e.jsx(o.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(h,{of:a})]})}function v(t={}){const{wrapper:o}={...c(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s(t)}function j(t,o){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const A={id:"map-current-location",title:"map/current-location",tags:["autodocs"],args:r,argTypes:b,parameters:{docs:{page:v}}},a=u(r,({tooltip:t,zoom:o})=>x`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-current-location tooltip=${t} zoom=${o}></vl-map-current-location>
        </vl-map>
    `);a.storyName="vl-map-current-location - default";const D=["MapCurrentLocationDefault"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(mapCurrentLocationArgs, ({
  tooltip,
  zoom
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-current-location tooltip=\${tooltip} zoom=\${zoom}></vl-map-current-location>
        </vl-map>
    \`)`,...a.parameters?.docs?.source}}};export{a as MapCurrentLocationDefault,D as __namedExportsOrder,A as default};
