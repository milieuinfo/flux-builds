import{u as h,j as e,M as u,C as d,x as m,i as b,b6 as c}from"./iframe-BAEsER5t.js";import"./preload-helper-D9Z9MdNV.js";const x=""+new URL("margin-en-padding-DsqQ6Ycd.png",import.meta.url).href;function p(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...h(),...r.components},{FluxComponentMetaData:v}=n;return v||j("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Styles/Layout (afnemers)/margin"}),`
`,e.jsx(n.h1,{id:"margin",children:"Margin"}),`
`,e.jsx(v,{id:"styles-layout-margin"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:[`Met deze style-classes kan de margin beïnvloed worden. De implementatie en gebruik van margin en padding zijn
gelijklopend. Op `,e.jsx(n.a,{href:"https://web.dev",rel:"nofollow",children:"web.dev"}),` vind je meer informatie
`,e.jsx(n.a,{href:"https://web.dev/learn/css/spacing#margin",rel:"nofollow",children:"over margin"}),"."]}),`
`,e.jsx("img",{src:x,alt:"margin en padding",style:{maxWidth:"300px"}}),`
`,e.jsx(n.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsx(n.p,{children:`De mogelijkheden zijn bewust beperkt gehouden. Afnemers moeten er naar streven zich te beperken tot de
hieronder besproken (voorziene) style-classes. Echter, zoals steeds: het is niet verboden om eigen styling
(en dus een afwijking) te voorzien als dat de layout en bladspiegel ten goede komt.`}),`
`,e.jsx(n.p,{children:`In onderstaande voorbeelden wordt bij het 'default voorbeeld' de margin expliciet op 15px gezet, de overige voorbeelden
tonen de impact op het 'default voorbeeld'.`}),`
`,e.jsx(n.h3,{id:"vl-margin---default",children:"vl-margin - default"}),`
`,e.jsxs(n.p,{children:[`De default marge wordt beïnvloed door de container, typisch wat er voor die resolutie bepaald is door
`,e.jsx(n.a,{href:"/docs/styles-layout-section--documentatie",children:"vl-section"}),"."]}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(n.h3,{id:"vl-margin--small",children:"vl-margin--small"}),`
`,e.jsxs(n.p,{children:["De margin onderaan en bovenaan wordt op de variabele ",e.jsx(n.code,{children:"--vl-spacing--small"}),` (1.5rem) gezet, links en rechts is er geen
margin (0), voor kleine schermen (<767px) wordt de `,e.jsx(n.code,{children:"--vl-spacing--normal"})," (2rem) gebruikt (boven- en onderaan)."]}),`
`,e.jsx(d,{of:a}),`
`,e.jsx(n.h3,{id:"vl-margin--medium",children:"vl-margin--medium"}),`
`,e.jsxs(n.p,{children:["De margin onderaan en bovenaan wordt op de variabele ",e.jsx(n.code,{children:"--vl-spacing--medium"}),` (3rem) gezet, links en rechts is er geen
margin (0), voor kleine schermen (<767px) wordt de `,e.jsx(n.code,{children:"--vl-spacing--normal"})," (2rem) gebruikt (boven- en onderaan)."]}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(n.h3,{id:"vl-margin--no",children:"vl-margin--no"}),`
`,e.jsx(n.p,{children:"Nergens margin: alle margin rondom staat op 0."}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(n.h3,{id:"vl-margin--no-bottom",children:"vl-margin--no-bottom"}),`
`,e.jsx(n.p,{children:"Onderaan geen margin: deze wordt op 0 gezet."}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(n.h3,{id:"vl-margin--no-top",children:"vl-margin--no-top"}),`
`,e.jsx(n.p,{children:"Bovenaan geen margin: deze wordt op 0 gezet."}),`
`,e.jsx(d,{of:l})]})}function y(r={}){const{wrapper:n}={...h(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(p,{...r})}):p(r)}function j(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const w={id:"styles-layout-margin",title:"Styles/Layout (afnemers)/margin",tags:["autodocs"],parameters:{docs:{page:y}}},g=b`
    .sb-container {
        width: 300px;
        background-color: lightblue;
        border: black 1px dashed;
    }

    .sb-content {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        margin: 15px; /* normaal specifieert de container (bvb. de vl-section) dit */
        height: 50px;
        background-color: white;
        border: rgb(152, 191, 34) 5px solid;
    }
`,s=({})=>m`
    <style>
        ${g}
    </style>
    <div class="sb-container">
        <div class="sb-content">default</div>
    </div>
`;s.storyName="vl-margin - default";s.parameters=c;const a=({})=>m`
    <style>
        ${g}
    </style>
    <div class="sb-container">
        <div class="sb-content vl-margin--small">vl-margin--small</div>
    </div>
`;a.storyName="vl-margin - small";a.parameters=c;const o=({})=>m`
    <style>
        ${g}
    </style>
    <div class="sb-container">
        <div class="sb-content vl-margin--medium">vl-margin--medium</div>
    </div>
`;o.storyName="vl-margin - medium";o.parameters=c;const i=({})=>m`
    <style>
        ${g}
    </style>
    <div class="sb-container">
        <div class="sb-content vl-margin--no">vl-margin--no</div>
    </div>
`;i.storyName="vl-margin - no";i.parameters=c;const t=({})=>m`
    <style>
        ${g}
    </style>
    <div class="sb-container">
        <div class="sb-content vl-margin--no-bottom">vl-margin--no-bottom</div>
    </div>
`;t.storyName="vl-margin - no bottom";t.parameters=c;const l=({})=>m`
    <style>
        ${g}
    </style>
    <div class="sb-container">
        <div class="sb-content vl-margin--no-top">vl-margin--no-top</div>
    </div>
`;l.storyName="vl-margin - no top";l.parameters=c;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${marginCss}
    </style>
    <div class="sb-container">
        <div class="sb-content">default</div>
    </div>
\``,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${marginCss}
    </style>
    <div class="sb-container">
        <div class="sb-content vl-margin--small">vl-margin--small</div>
    </div>
\``,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${marginCss}
    </style>
    <div class="sb-container">
        <div class="sb-content vl-margin--medium">vl-margin--medium</div>
    </div>
\``,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${marginCss}
    </style>
    <div class="sb-container">
        <div class="sb-content vl-margin--no">vl-margin--no</div>
    </div>
\``,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${marginCss}
    </style>
    <div class="sb-container">
        <div class="sb-content vl-margin--no-bottom">vl-margin--no-bottom</div>
    </div>
\``,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${marginCss}
    </style>
    <div class="sb-container">
        <div class="sb-content vl-margin--no-top">vl-margin--no-top</div>
    </div>
\``,...l.parameters?.docs?.source}}};const k=["MarginDefault","MarginSmall","MarginMedium","MarginNo","MarginNoBottom","MarginNoTop"];export{s as MarginDefault,o as MarginMedium,i as MarginNo,t as MarginNoBottom,l as MarginNoTop,a as MarginSmall,k as __namedExportsOrder,w as default};
