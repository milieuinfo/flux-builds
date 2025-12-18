import{u as h,j as e,M as u,C as l,x as c,z as b,b6 as p}from"./iframe-BQb9mjVp.js";import"./preload-helper-D9Z9MdNV.js";const x=""+new URL("margin-en-padding-DsqQ6Ycd.png",import.meta.url).href;function v(d){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...h(),...d.components},{FluxComponentMetaData:m}=n;return m||j("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Styles/Layout (afnemers)/padding"}),`
`,e.jsx(n.h1,{id:"padding",children:"Padding"}),`
`,e.jsx(m,{id:"styles-layout-padding"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:[`Met deze style-classes kan de padding beïnvloed worden. De implementatie en gebruik van padding en margin zijn
gelijklopend. Op `,e.jsx(n.a,{href:"https://web.dev",rel:"nofollow",children:"web.dev"}),` vind je meer informatie
`,e.jsx(n.a,{href:"https://web.dev/learn/css/spacing#padding",rel:"nofollow",children:"over padding"}),"."]}),`
`,e.jsx("img",{src:x,alt:"margin en padding",style:{maxWidth:"300px"}}),`
`,e.jsx(n.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsx(n.p,{children:`De mogelijkheden zijn bewust beperkt gehouden. Afnemers moeten er naar streven zich te beperken tot de
hieronder besproken (voorziene) style-classes. Echter, zoals steeds: het is niet verboden om eigen styling
(en dus een afwijking) te voorzien als dat de layout en bladspiegel ten goede komt.`}),`
`,e.jsx(n.p,{children:`In onderstaande voorbeelden wordt bij het 'default voorbeeld' de margin expliciet op 15px gezet, de overige voorbeelden
tonen de impact op het 'default voorbeeld'.`}),`
`,e.jsx(n.h3,{id:"vl-padding---default",children:"vl-padding - default"}),`
`,e.jsxs(n.p,{children:[`De default padding wordt beïnvloed door de container, typisch wat er voor die resolutie bepaald is door
`,e.jsx(n.a,{href:"/docs/styles-layout-section--documentatie",children:"vl-section"}),"."]}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(n.h3,{id:"vl-padding--small",children:"vl-padding--small"}),`
`,e.jsxs(n.p,{children:["De padding onderaan en bovenaan wordt op de variabele ",e.jsx(n.code,{children:"--vl-spacing--small"}),` (1.5rem) gezet, links en rechts is er geen
padding (0), voor kleine schermen (<767px) wordt de `,e.jsx(n.code,{children:"--vl-spacing--normal"})," (2rem) gebruikt (boven- en onderaan)."]}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(n.h3,{id:"vl-padding--medium",children:"vl-padding--medium"}),`
`,e.jsxs(n.p,{children:["De padding onderaan en bovenaan wordt op de variabele ",e.jsx(n.code,{children:"--vl-spacing--medium"}),` (3rem) gezet, links en rechts is er geen
padding (0), voor kleine schermen (<767px) wordt de `,e.jsx(n.code,{children:"--vl-spacing--normal"})," (2rem) gebruikt (boven- en onderaan)."]}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.h3,{id:"vl-padding--no",children:"vl-padding--no"}),`
`,e.jsx(n.p,{children:"Nergens padding: alle padding rondom staat op 0."}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(n.h3,{id:"vl-padding--no-bottom",children:"vl-padding--no-bottom"}),`
`,e.jsx(n.p,{children:"Onderaan geen padding: deze wordt op 0 gezet."}),`
`,e.jsx(l,{of:t}),`
`,e.jsx(n.h3,{id:"vl-padding--no-top",children:"vl-padding--no-top"}),`
`,e.jsx(n.p,{children:"Bovenaan geen padding: deze wordt op 0 gezet."}),`
`,e.jsx(l,{of:r})]})}function y(d={}){const{wrapper:n}={...h(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(v,{...d})}):v(d)}function j(d,n){throw new Error("Expected component `"+d+"` to be defined: you likely forgot to import, pass, or provide it.")}const k={id:"styles-layout-padding",title:"Styles/Layout (afnemers)/padding",tags:["autodocs"],parameters:{docs:{page:y}}},g=b`
    .sb-container {
        width: 300px;
        height: 100px;
        background-color: lightblue;
        border: rgb(152, 191, 34) 5px solid;
        padding: 15px; /* normaal specifieert de container (bvb. de vl-section) dit */
    }

    .sb-content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        background-color: white;
        border: black 1px dashed;
    }
`,s=({})=>c`
    <style>
        ${g}
    </style>
    <div class="sb-container">
        <div class="sb-content">default</div>
    </div>
`;s.storyName="vl-padding - default";s.parameters=p;const a=({})=>c`
    <style>
        ${g}
    </style>
    <div class="sb-container vl-padding--small">
        <div class="sb-content">vl-padding--small</div>
    </div>
`;a.storyName="vl-padding - small";a.parameters=p;const o=({})=>c`
    <style>
        ${g}
    </style>
    <div class="sb-container vl-padding--medium">
        <div class="sb-content">vl-padding--medium</div>
    </div>
`;o.storyName="vl-padding - medium";o.parameters=p;const i=({})=>c`
    <style>
        ${g}
    </style>
    <div class="sb-container vl-padding--no">
        <div class="sb-content">vl-padding--no</div>
    </div>
`;i.storyName="vl-padding - no";i.parameters=p;const t=({})=>c`
    <style>
        ${g}
    </style>
    <div class="sb-container vl-padding--no-bottom">
        <div class="sb-content">vl-padding--no-bottom</div>
    </div>
`;t.storyName="vl-padding - no bottom";t.parameters=p;const r=({})=>c`
    <style>
        ${g}
    </style>
    <div class="sb-container vl-padding--no-top">
        <div class="sb-content">vl-padding--no-top</div>
    </div>
`;r.storyName="vl-padding - no top";r.parameters=p;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${paddingCss}
    </style>
    <div class="sb-container">
        <div class="sb-content">default</div>
    </div>
\``,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${paddingCss}
    </style>
    <div class="sb-container vl-padding--small">
        <div class="sb-content">vl-padding--small</div>
    </div>
\``,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${paddingCss}
    </style>
    <div class="sb-container vl-padding--medium">
        <div class="sb-content">vl-padding--medium</div>
    </div>
\``,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${paddingCss}
    </style>
    <div class="sb-container vl-padding--no">
        <div class="sb-content">vl-padding--no</div>
    </div>
\``,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${paddingCss}
    </style>
    <div class="sb-container vl-padding--no-bottom">
        <div class="sb-content">vl-padding--no-bottom</div>
    </div>
\``,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${paddingCss}
    </style>
    <div class="sb-container vl-padding--no-top">
        <div class="sb-content">vl-padding--no-top</div>
    </div>
\``,...r.parameters?.docs?.source}}};const z=["PaddingDefault","PaddingSmall","PaddingMedium","PaddingNo","PaddingNoBottom","PaddingNoTop"];export{s as PaddingDefault,o as PaddingMedium,i as PaddingNo,t as PaddingNoBottom,r as PaddingNoTop,a as PaddingSmall,z as __namedExportsOrder,k as default};
