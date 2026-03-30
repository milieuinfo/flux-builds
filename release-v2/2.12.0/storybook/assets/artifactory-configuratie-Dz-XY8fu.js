import{u as o,j as e,M as a}from"./iframe-BJy2lIHs.js";import"./preload-helper-D9Z9MdNV.js";function t(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Recepten/Artifactory Configuratie"}),`
`,e.jsx(n.h1,{id:"artifactory-configuratie",children:"Artifactory Configuratie"}),`
`,e.jsxs(n.p,{children:["Alle artifacts zijn beschikbaar via de ",e.jsx(n.a,{href:"https://repo.omgeving.vlaanderen.be/ui/packages",rel:"nofollow",children:"JFrog Artifactory"}),` van
Departement Omgeving. Om ze af te nemen dien je je `,e.jsx(n.code,{children:"~/.npmrc"})," als volgt te configureren:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`registry=https://repo.omgeving.vlaanderen.be/artifactory/api/npm/acd-npm/
//repo.omgeving.vlaanderen.be/artifactory/api/npm/acd-npm/:_authToken=xXxyYyzZz
`})}),`
`,e.jsxs(n.p,{children:["Je persoonlijk authToken kan je vinden door naar ",e.jsx(n.a,{href:"https://repo.omgeving.vlaanderen.be/ui/packages",rel:"nofollow",children:"JFrog Artifactory"}),`
te gaan, dan rechtsboven een `,e.jsx(n.code,{children:"Log in"})," doen, links via ",e.jsx(n.code,{children:"Artifacts"})," de repo ",e.jsx(n.code,{children:"acd-npm"})," selecteren en dan via ",e.jsx(n.code,{children:"Set Me Up"}),`
kan je een `,e.jsx(n.strong,{children:"token"})," genereren."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Opmerking"}),": als je (tijdelijk) wil wisselen naar de 'default' npm repository kan je in je ",e.jsx(n.code,{children:"~/.npmrc"}),` bestand de
registry lijn in commentaar zetten en vervangen door `,e.jsx(n.code,{children:"registry=https://registry.npmjs.org/"})]}),`
`]})]})}function c(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{c as default};
