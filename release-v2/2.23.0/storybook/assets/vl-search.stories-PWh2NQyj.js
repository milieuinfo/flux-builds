import{d as i,a as l,s as p}from"./stories.helper-DYHi_5m6.js";import{u as d,j as e,C as h,b4 as m,b as u}from"./iframe-Cv28D2NX.js";import"./preload-helper-PPVm8Dsz.js";function a(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",...d(),...n.components},{FluxAlert:r,FluxComponentMetaData:s}=o;return r||c("FluxAlert"),s||c("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"search",children:"Search"}),`
`,e.jsx(s,{id:"components-block-search"}),`
`,e.jsx(r,{type:"warning",title:"Deprecated",children:`
Deze component is <strong>deprecated</strong> en wordt verwijderd in <strong>v3</strong>. Bouw voortaan een
zoekformulier met een <code>input-group</code> (<code>vl-input-field</code> + <code>vl-button</code> met
<code>loading</code>) zoals beschreven onder het [zoek-patroon](/docs/patronen-zoeken-loading-state--documentatie).
`}),`
`,e.jsx(o.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(o.p,{children:["De ",e.jsx(o.code,{children:"search"})," component toont een zoekveld met een zoekknop."]}),`
`,e.jsx(o.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(h,{of:t}),`
`,e.jsx(o.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(m,{of:t})]})}function x(n={}){const{wrapper:o}={...d(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(a,{...n})}):a(n)}function c(n,o){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const v={id:"components-block-search",title:"Components - Block/search",tags:["autodocs"],args:l,argTypes:i,parameters:{docs:{page:x}}},t=p({},()=>u` <vl-search id="search-inline" inline="" data-cy="search"></vl-search> `);t.storyName="vl-search - default";const y=["searchDefault"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:'story({}, () => html` <vl-search id="search-inline" inline="" data-cy="search"></vl-search> `)',...t.parameters?.docs?.source}}};export{y as __namedExportsOrder,v as default,t as searchDefault};
