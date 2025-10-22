import{u as r,j as e,M as a,C as o,x as d}from"./iframe-Ds54rb_7.js";import"./preload-helper-D9Z9MdNV.js";function l(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...i.components},{FluxMetaData:t}=n;return t||h("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Styles/Layout (afnemers)/accessibility"}),`
`,e.jsx(n.h1,{id:"accessibility-styles",children:"Accessibility styles"}),`
`,e.jsx(t,{id:"styles-layout-afnemers-accessibility"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#doel",children:"Doel"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#visually-hidden",children:"Visually hidden"})}),`
`]}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsx(n.p,{children:`Onder accessibility styles groeperen we stijlen die de layout beïnvloeden om de toegankelijkheid van een applicatie
te verbeteren.`}),`
`,e.jsx(n.h2,{id:"visually-hidden",children:"Visually hidden"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".vl-visually-hidden"}),` verbergt content visueel, maar houdt ze toegankelijk voor screenreaders.
Ze wordt gebruikt wanneer informatie niet zichtbaar hoeft te zijn voor ziende gebruikers, maar wel nog betekenisvol
is voor assistieve technologie.`]}),`
`,e.jsx(n.p,{children:"Het helpt extra context of labels beschikbaar te maken voor screenreader-gebruikers en wordt typisch toegepast op:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Beschrijvende teksten die visueel overbodig zijn"}),`
`,e.jsx(n.li,{children:"Formulierlabels of instructies die enkel auditief nodig zijn"}),`
`,e.jsx(n.li,{children:"Skip-links of navigatiehulpmiddelen"}),`
`]}),`
`,e.jsx(o,{of:s})]})}function c(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}function h(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const x={id:"styles-layout-afnemers-accessibility",title:"Styles/Layout (afnemers)/accessibility",tags:["autodocs"],parameters:{docs:{page:c}}},s=()=>d`
    <div>Deze content is zichtbaar voor de gebruiker. 
        Maar deze content ...<span class="vl-visually-hidden">... is enkel toegankelijk voor screenreaders.</span>
    </div>
`;s.storyName="vl-visually-hidden - default";s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => html\`
    <div>Deze content is zichtbaar voor de gebruiker. 
        Maar deze content ...<span class="vl-visually-hidden">... is enkel toegankelijk voor screenreaders.</span>
    </div>
\``,...s.parameters?.docs?.source}}};const y=["VisuallyHiddenDefault"];export{s as VisuallyHiddenDefault,y as __namedExportsOrder,x as default};
