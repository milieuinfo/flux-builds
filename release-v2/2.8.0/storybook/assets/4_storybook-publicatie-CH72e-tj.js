import{u as s,j as e,M as i}from"./iframe-BQb9mjVp.js";import"./preload-helper-D9Z9MdNV.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Beheren/Storybook Publicatie"}),`
`,e.jsx(n.h1,{id:"storybook-publicatie",children:"Storybook Publicatie"}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#beschrijving",children:"Beschrijving"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#structuur",children:"Structuur"})}),`
`]}),`
`,e.jsx(n.h2,{id:"beschrijving",children:"Beschrijving"}),`
`,e.jsxs(n.p,{children:[`Documentatie wordt geversioneerd gepubliceerd op https://flux.omgeving.vlaanderen.be, de structuur van die
`,e.jsx(n.a,{href:"https://github.com/milieuinfo/flux-builds",rel:"nofollow",children:"repo"})," staat hier beschreven."]}),`
`,e.jsx(n.h2,{id:"structuur",children:"Structuur"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`flux-builds/
├─ develop/
│  ├─ 2.0.0-beta.2/ [beta versies worden enkel op aanvraag toegevoegd]
│  │  ├─ artifacts/ [beta artifacts]
│  │  │  ├─ domg-wc-common-2.0.0.beta.2.tgz
│  │  │  ├─ domg-wc-components-2.0.0.beta.2.tgz
│  │  │  ...
│  │  ├─ storybook/ [beta storybook]
│  ├─ latest/
│  │  ├─ storybook/
│  │  │  ├─ index.html [redirects naar de recentste beta storybook]
│  ├─ index.html [landingspagina met links naar de verschillende develop versies]
├─ release-v1/ [een sub-folder per ge-releasde versie]
│  ├─ 1.0.0/
│  │  ├─ storybook/
│  │  ...
│  ├─ 1.9.0/
│  │  ├─ storybook/
│  ├─ latest/
│  │  ├─ storybook/
│  │  │  ├─ index.html [redirects naar de recentste storybook]
│  ├─ index.html [landingspagina met links naar de verschillende release versies]
├─ index.html [landingspagina met links naar develop en release]
`})})]})}function l(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{l as default};
