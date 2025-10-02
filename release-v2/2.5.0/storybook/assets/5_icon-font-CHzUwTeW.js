import{u as o,j as e,M as r}from"./iframe-CflcmDUD.js";import"./preload-helper-D9Z9MdNV.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Beheren/Icon Font"}),`
`,e.jsx(n.h1,{id:"icon-font",children:"Icon Font"}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#beschrijving",children:"Beschrijving"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#oude-opzet",children:"Legacy opzet"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#v2-opzet",children:"V2 opzet"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#het-font-updaten",children:"Het font updaten"})}),`
`]}),`
`,e.jsx(n.h2,{id:"beschrijving",children:"Beschrijving"}),`
`,e.jsxs(n.p,{children:[`Het icon-font is deel van de flux-assets repository en wordt geversioneerd gepubliceerd op de CDN van Departement
Omgeving.`,e.jsx("br",{}),`
De flux-web-components refereren intern naar dit font via CSS-classes die een mapping voorzien tussen de icoon-naam
en de unicode waarde van het icoon in het font.`]}),`
`,e.jsx(n.h2,{id:"legacy-opzet",children:"Legacy opzet"}),`
`,e.jsx(n.p,{children:`In de oude opzet bevatten alle componenten die een icoon nodig hebben de icon-mapping CSS-classes. Dit zorgt voor
veel duplicatie van CSS code.`}),`
`,e.jsx(n.h2,{id:"v2-opzet",children:"v2 opzet"}),`
`,e.jsxs(n.p,{children:[`Er is een centrale plaats in de flux-web-components repository waar de icon-mapping CSS-classes gedefinieerd worden
als CSS-in-JS. Elk component dat een icoon nodig heeft importeert dit icon-mapping bestand. Er is geen duplicatie
van CSS omdat overal dezelfde instantie van het CSS-in-JS object gebruikt wordt. Dit icon-mapping bestand wordt
gegenereerd m.b.v. het script `,e.jsx(n.code,{children:"resources/generate-icons/generate-icon-files.ts"}),"."]}),`
`,e.jsx(n.h2,{id:"het-font-updaten",children:"Het font updaten"}),`
`,e.jsx(n.p,{children:"Volg de volgende stappen om het icon-font te updaten:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"plaats de nieuwe versie van het font in de flux-assets repository"}),`
`,e.jsx(n.li,{children:"deploy de nieuwe versie van het font geversioneerd op de CDN van Departement Omgeving"}),`
`,e.jsx(n.li,{children:"refereer in de flux-web-components repository naar de nieuwe versie van het font"}),`
`,e.jsxs(n.li,{children:["voer het ",e.jsx(n.code,{children:"generate-icon-files.ts"})," script uit in de flux-web-components repository (",e.jsx(n.code,{children:"npm run libs:icons:generate"}),")"]}),`
`,e.jsxs(n.li,{children:[`verifieer dat de icon-mapping correct is gegenereerd met behulp van de
`,e.jsx(n.a,{href:"/story/components-icon--all-icons",children:"icon pagina"})]}),`
`]})]})}function c(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{c as default};
