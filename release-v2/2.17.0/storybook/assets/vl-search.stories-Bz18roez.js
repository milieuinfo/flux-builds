import{u as d,j as e,C as i,b8 as l,W as h,X as p,s as m,x as u}from"./iframe-BgD7f6Cn.js";import"./preload-helper-D9Z9MdNV.js";function a(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",...d(),...n.components},{FluxAlert:r,FluxComponentMetaData:s}=o;return r||c("FluxAlert"),s||c("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"search",children:"Search"}),`
`,e.jsx(s,{id:"components-block-search"}),`
`,e.jsx(r,{type:"warning",title:"Deprecated",children:`
Deze component is <strong>deprecated</strong> en wordt verwijderd in <strong>v3</strong>. Bouw voortaan een
zoekformulier met een <code>input-group</code> (<code>vl-input-field</code> + <code>vl-button</code> met
<code>loading</code>) zoals beschreven onder het [zoek-patroon](/docs/patronen-zoeken-loading-state--documentatie).
`}),`
`,e.jsx(o.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(o.p,{children:["De ",e.jsx(o.code,{children:"search"})," component toont een zoekveld met een zoekknop."]}),`
`,e.jsx(o.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(i,{of:t}),`
`,e.jsx(o.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(l,{of:t})]})}function x(n={}){const{wrapper:o}={...d(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(a,{...n})}):a(n)}function c(n,o){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const j={id:"components-block-search",title:"Components - Block/search",tags:["autodocs"],args:p,argTypes:h,parameters:{docs:{page:x}}},t=m({},()=>u` <vl-search id="search-inline" inline="" data-cy="search"></vl-search> `);t.storyName="vl-search - default";t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:'story({}, () => html` <vl-search id="search-inline" inline="" data-cy="search"></vl-search> `)',...t.parameters?.docs?.source}}};const v=["searchDefault"];export{v as __namedExportsOrder,j as default,t as searchDefault};
