import{u as i,j as e,M as s}from"./iframe-BRJWU34U.js";import"./preload-helper-D9Z9MdNV.js";const t=""+new URL("git-branching-strategie-flux-DCHxgztR.png",import.meta.url).href;function a(r){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Beheren/Git Release Branching"}),`
`,e.jsx(n.h1,{id:"git-release-branching",children:"Git Release Branching"}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#beschrijving",children:"Beschrijving"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#diagram",children:"Diagram"})}),`
`]}),`
`,e.jsx(n.h2,{id:"beschrijving",children:"Beschrijving"}),`
`,e.jsxs(n.p,{children:[`Onderstaand diagram geeft een overzicht van hoe commit's - door ze naar verschillende branches te brengen - tot
(pre-)releases leiden. De blauwe boxen geven tags aan die gelegd worden in GitHub. Voor elke tag zal er een
artifact geproduceerd worden met de tag als suffix. De release- en pre-release-artifacts zijn beschikbaar via
`,e.jsx(n.a,{href:"https://repo.omgeving.vlaanderen.be/ui/packages",rel:"nofollow",children:"artifactory"}),"."]}),`
`,e.jsx(n.p,{children:"Via de pre-release branches worden er beta-releases gebouwd, via de release-branches finale releases."}),`
`,e.jsxs(n.p,{children:[`Na een commit op eender welke branch loopt de build en alle testen, zie
`,e.jsx(n.a,{href:"/docs/beheren-ci-cd--documentatie",children:"Beheren/CI - CD"})," voor uitgebreidere informatie."]}),`
`,e.jsx(n.h2,{id:"diagram",children:"Diagram"}),`
`,e.jsx("img",{src:t,alt:"Flux Branching Strategie"})]})}function h(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{h as default};
