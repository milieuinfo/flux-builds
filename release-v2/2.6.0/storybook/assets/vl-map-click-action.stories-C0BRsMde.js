import{K as l,H as p,bM as s,I as m,u as r,j as e,C as d,s as k,x as g}from"./iframe-Ds54rb_7.js";import"./vl-map-base-layer-CUICGl8E.js";import"./vl-map-base-layer-grb-gray-DTa8N6xA.js";import"./vl-map-features-layer-fk9fuqbW.js";import"./vl-map-click-action-ZOfwqeh5.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-9AlT0Pv4.js";const i={...m,onMapClicked:s("vl-map-clicked")},u={...p,onMapClicked:{name:"vl-map-clicked",description:"Afgevuurd wanneer er op de map geklikt wordt.<br>Het event bevat de locatie informatie, zie de console logs van Storybook voor het volledige event.",table:{type:{summary:"{ coordinate: Coordinate, resolution: number, projection: ProjectionLike }"},category:l.EVENTS}}};function n(o){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...o.components},{FluxMetaData:t}=a;return t||h("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-click-action",children:"Map Click Action"}),`
`,e.jsx(t,{id:"map-action-click-action"}),`
`,e.jsxs(a.p,{children:["Gebruik het ",e.jsx(a.code,{children:"map-click-action"})," component om een klikactie op de ",e.jsx(a.a,{href:"/docs/map-map--map-default",children:"map"})," op te vangen.",e.jsx("br",{}),`
Bij het klikken op de `,e.jsx(a.a,{href:"/docs/map-map--map-default",children:"map"})," wordt er een ",e.jsx(a.code,{children:"vl-map-click-action-pindrop"})," op de kaart geplaatst."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlMapClickAction } from '@domg-wc/map';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-map-click-action></vl-map-click-action>
`})}),`
`,e.jsx(d,{of:c})]})}function v(o={}){const{wrapper:a}={...r(),...o.components};return a?e.jsx(a,{...o,children:e.jsx(n,{...o})}):n(o)}function h(o,a){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}const A={id:"map-action-click-action",title:"map/action/click-action",tags:["autodocs"],args:i,argTypes:u,parameters:{controls:{hideNoControlsWarning:!0},docs:{page:v}}},c=k(i,({onMapClicked:o})=>g`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-click-action @vl-map-clicked=${o}></vl-map-click-action>
        </vl-map>
    `);c.storyName="vl-map-click-action - default";c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(mapClickActionArg, ({
  onMapClicked
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-click-action @vl-map-clicked=\${onMapClicked}></vl-map-click-action>
        </vl-map>
    \`)`,...c.parameters?.docs?.source}}};const E=["MapClickActionDefault"];export{c as MapClickActionDefault,E as __namedExportsOrder,A as default};
