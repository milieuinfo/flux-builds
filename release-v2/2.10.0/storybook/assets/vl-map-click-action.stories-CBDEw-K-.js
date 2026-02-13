import{R as l,O as p,bQ as s,P as m,u as i,j as e,C as d,s as k,x as g}from"./iframe-FlvNZLqI.js";import"./vl-map-base-layer-CnkWBJRC.js";import"./vl-map-base-layer-grb-gray-CrvS-DXx.js";import"./vl-map-features-layer-D0V-0ESd.js";import"./vl-map-click-action-Dtllzxf4.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-B_tYA0Mo.js";const r={...m,onMapClicked:s("vl-map-clicked")},u={...p,onMapClicked:{name:"vl-map-clicked",description:"Afgevuurd wanneer er op de map geklikt wordt.<br>Het event bevat de locatie informatie, zie de console logs van Storybook voor het volledige event.",table:{type:{summary:"{ coordinate: Coordinate, resolution: number, projection: ProjectionLike }"},category:l.EVENTS}}};function c(o){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components},{FluxComponentMetaData:t}=a;return t||h("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-click-action",children:"Map Click Action"}),`
`,e.jsx(t,{id:"map-components-action-click-action"}),`
`,e.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(a.p,{children:["Gebruik het ",e.jsx(a.code,{children:"map-click-action"})," component om een klikactie op de ",e.jsx(a.a,{href:"/docs/map-map--map-default",children:"map"})," op te vangen.",e.jsx("br",{}),`
Bij het klikken op de `,e.jsx(a.a,{href:"/docs/map-map--map-default",children:"map"})," wordt er een ",e.jsx(a.code,{children:"vl-map-click-action-pindrop"})," op de kaart geplaatst."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlMapClickAction } from '@domg-wc/map';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-map-click-action></vl-map-click-action>
`})}),`
`,e.jsx(d,{of:n})]})}function v(o={}){const{wrapper:a}={...i(),...o.components};return a?e.jsx(a,{...o,children:e.jsx(c,{...o})}):c(o)}function h(o,a){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}const A={id:"map-action-click-action",title:"map/action/click-action",tags:["autodocs"],args:r,argTypes:u,parameters:{controls:{hideNoControlsWarning:!0},docs:{page:v}}},n=k(r,({onMapClicked:o})=>g`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-click-action @vl-map-clicked=${o}></vl-map-click-action>
        </vl-map>
    `);n.storyName="vl-map-click-action - default";n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(mapClickActionArg, ({
  onMapClicked
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-click-action @vl-map-clicked=\${onMapClicked}></vl-map-click-action>
        </vl-map>
    \`)`,...n.parameters?.docs?.source}}};const E=["MapClickActionDefault"];export{n as MapClickActionDefault,E as __namedExportsOrder,A as default};
