import{u as o,j as e,M as a}from"./iframe-Cv28D2NX.js";import"./preload-helper-PPVm8Dsz.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Richtlijnen/Figma/Figma-bibliotheek"}),`
`,e.jsx(n.h1,{id:"figma-bibliotheek",children:"Figma-bibliotheek"}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#welke-bibliotheek",children:"Welke bibliotheek"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#in-sync-met-de-codebase",children:"In sync met de codebase"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#code-connect-in-dev-mode",children:"Code Connect in Dev Mode"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#de-figma-mcp-server",children:"De Figma MCP-server"})}),`
`]}),`
`,e.jsx(n.h2,{id:"welke-bibliotheek",children:"Welke bibliotheek"}),`
`,e.jsxs(n.p,{children:[`Ontwerpen voor een Flux-toepassing maak je met de
`,e.jsx("a",{href:"https://www.figma.com/design/XgxaEcbNFkGbWW5FkCnEQo/FLUX-Web-Componenten",target:"_blank",rel:"noopener noreferrer",children:"Figma-bibliotheek: FLUX Web Componenten (opent in een nieuw venster)"}),`. Dat is de enige
Figma-bibliotheek die aan de web-componenten van Flux gekoppeld is.`]}),`
`,e.jsxs(n.p,{children:["Bij een nieuw Figma-bestand in de Departement Omgeving organisatie is ",e.jsx(n.strong,{children:"FLUX Web Componenten"}),` standaard geïmporteerd.
Staat ze er niet, dan zet je ze zelf aan via het paneel `,e.jsx(n.strong,{children:"Assets"})," in Figma."]}),`
`,e.jsx(n.h2,{id:"in-sync-met-de-codebase",children:"In sync met de codebase"}),`
`,e.jsx(n.p,{children:`Alle componenten in de bibliotheek worden in sync gehouden met de codebase. De code is daarbij het uitgangspunt:
varianten, properties en hun defaults volgen wat het web-component doet. Wijkt Figma daarvan af, dan is dat een fout
in de bibliotheek - meld ze aan het Flux-team.`}),`
`,e.jsxs(n.p,{children:["De bibliotheek volgt de releases van ",e.jsx(n.code,{children:"@domg-wc"}),`: wijzigt een component, dan volgt de bibliotheek bij de eerstvolgende
release. Wat dat betekent als je toepassing met een oudere versie werkt, staat bij
`,e.jsx(n.a,{href:"?path=/docs/richtlijnen-figma-figma-code-connect--documentatie#dekking-en-versies",children:"Dekking en versies"}),"."]}),`
`,e.jsx(n.h2,{id:"code-connect-in-dev-mode",children:"Code Connect in Dev Mode"}),`
`,e.jsxs(n.p,{children:[`Elk component met een code-equivalent is via Code Connect aan zijn web-component gekoppeld. In Dev Mode toont Figma
daardoor de HTML van het echte component in plaats van gegenereerde CSS. Hoe je dat gebruikt, wat een snippet bevat en
waar je op moet letten, staat op `,e.jsx(n.a,{href:"?path=/docs/richtlijnen-figma-figma-code-connect--documentatie",children:"Figma Code Connect"}),"."]}),`
`,e.jsx(n.h2,{id:"de-figma-mcp-server",children:"De Figma MCP-server"}),`
`,e.jsxs(n.p,{children:[`Figma biedt een eigen MCP-server aan. Die ontsluit het ontwerp voor een AI-client zoals Claude Code, Codex, Copilot of
Cursor: welke Figma-component en -variant overeenkomt met welke `,e.jsx(n.code,{children:"vl"}),`-component, en welke attributen daarbij horen.
Omdat de bibliotheek verrijkt is met Code Connect, met een beschrijving per component en met links naar deze
documentatie, werkt die AI-client met de echte FLUX-API in plaats van met een gok.
Drie use-cases:`]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Van ontwerp naar code"}),` - een scherm uit Figma omzetten naar FLUX-markup. De AI-client haalt per instance de
tagname en de attributen op, zodat de markup met componenten uit de bibliotheek vertrekt.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Van prompt naar ontwerp"}),` - vanuit een beschrijving een ontwerp bouwen in Figma, met instances uit de
bibliotheek in plaats van losse frames.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Van code naar ontwerp"}),` - een bestaand scherm uit code terug in Figma zetten, bijvoorbeeld om een toepassing die
zonder ontwerp gegroeid is te documenteren. Deze use-case is in onderzoek.`]}),`
`]}),`
`,e.jsx("vl-alert",{icon:"alert-circle",title:"Belangrijk",type:"warning",size:"small",children:e.jsx(n.p,{children:`Geen van de drie levert een eindresultaat. Wat een AI-client oplevert is een voorstel: het vertrekt van de juiste
componenten, maar keuzes rond semantiek, toegankelijkheid, gedrag en data blijven menselijk werk. Lees
elke gegenereerde wijziging kritisch na voor je ze overneemt.`})}),`
`,e.jsxs(n.p,{children:[`Het volledige verhaal over Flux en AI, met de 2 MCP-servers en de recepten die erop draaien, staat op
`,e.jsx(n.a,{href:"?path=/docs/afnemen-flux-ai-frontendstroomlijning--documentatie",children:"Flux-AI - Frontendstroomlijning"}),"."]})]})}function s(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{s as default};
