import{u as t,j as e,M as o}from"./iframe-CY-ZM549.js";import"./preload-helper-D9Z9MdNV.js";const a=""+new URL("planning-2023-CfbEMcHr.png",import.meta.url).href,s=""+new URL("planning-2024-CtrzggdT.png",import.meta.url).href,d=""+new URL("planning-2025-BsHn5IId.png",import.meta.url).href;function i(r){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Planning/Historiek & Toekomst"}),`
`,e.jsx(n.h1,{id:"historiek--toekomst",children:"Historiek & Toekomst"}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#aanpak",children:"Aanpak"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#planning-2024",children:"Planning 2025"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#verleden",children:"Verleden"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#historisch",children:"Historisch"})}),`
`]}),`
`,e.jsx(n.h2,{id:"aanpak",children:"Aanpak"}),`
`,e.jsxs(n.p,{children:[`Het Flux-team (vroegere UIG-team) heeft altijd als doel gehad de drempel tot frontend ontwikkeling te verlagen.
Enerzijds gebeurt softwareontwikkeling bij Departement Omgeving typisch door fullstack-ontwikkelaars die praktisch meer
affiniteit hebben met backend- dan met frontend-ontwikkeling. Anderzijds is het de bedoeling dat designs de
`,e.jsx(n.a,{href:"https://www.vlaanderen.be/vlaanderen-intern-communicatie/huisstijl-en-merkbeleid",rel:"nofollow",children:"huisstijl"})," - voorzien door ",e.jsx(n.a,{href:"https://www.vlaanderen.be/digitaal-vlaanderen",rel:"nofollow",children:`Digitaal
Vlaanderen`}),` - gebruiken. Deze huisstijl-voor-websites wordt praktisch
gecapteerd door het Webuniversum in de vorm van
componenten. Dit zijn echter geen `,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_components",rel:"nofollow",children:"web-componenten"}),`
die in de browser geregistreerd kunnen worden. DV noemt het wel 'webcomponents', maar het is hoofdzakelijk css styling
(technisch scss), met beperkt Javascript die gedocumenteerd worden a.d.h.v. voorbeelden.`]}),`
`,e.jsx(n.p,{children:`Van in het begin (2020) was het doel - en de aanpak - van Flux om de componenten van het Webuniversum aan te bieden als
volwaardige web-componenten. Eens er een ruime set van web-componenten beschikbaar was verschoof de bulk van het werk
naar onderhoud: bugs kwamen boven en uitbreidingen werden gevraagd.`}),`
`,e.jsx(n.p,{children:`Sinds 2023 wordt er geregeld een planning opgesteld. Hierin zit een 'ongoing' deel, wat het weerkerend werk omvat en
een 'focus' deel waarin we thematisch te werk gaan. Beknopt wordt er ook aangehaald wat er in de toekomst op de
planning komt.`}),`
`,e.jsx(n.h2,{id:"planning-2025",children:"Planning 2025"}),`
`,e.jsx(n.p,{children:`Met vertraging is begin juni 2025 v2 gereleased, dit geeft een opkuis van 3 jaar evolutie. Nog niet alles is
consistent maar het is een grote stap in de juiste richting.`}),`
`,e.jsx(n.p,{children:"Op de planning van 2025 staat voor de rest verdere evolutie en verbeteringen waaronder:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"een CSP POC die de praktische CSP knelpunten aanpakt: de vl-header, tinyMCE, de map, ..."}),`
`,e.jsx(n.li,{children:`de map verbeteren om Lambert-2008 te ondersteunen en een aanzet geven tot een grondige herwerking, de map is
historisch gegroeid en wordt veel gebruikt maar is niet meer consistent met de rest van de codebase`}),`
`,e.jsx(n.li,{children:"de legacy 'BaseElementOfType' basis klasse wegwerken, hiervoor zijn er nog componenten om te zetten naar Lit"}),`
`,e.jsx(n.li,{children:`de code kwaliteit nog verhogen door de volledige monorepo in 'strict' mode te zetten en door linting regels te
voorzien die we in de build verifiëren`}),`
`,e.jsx(n.li,{children:`de afgesplitste DV styling (in @domg/govflanders-style) wegwerken, we willen enkel css-in-js overhouden die
bij in de monorepo zit`}),`
`,e.jsx(n.li,{children:"de WCAG compliancy, daar waar het kan, verbeteren"}),`
`,e.jsx(n.li,{children:"een aantal componenten herschrijven: waaronder vl-table, vl-side-navigation en vl-tabs"}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx("img",{src:d,alt:"planning-2025"}),`
`,e.jsx(n.h2,{id:"verleden",children:"Verleden"}),`
`,e.jsx(n.h3,{id:"q2-2024-tem-q1-2025",children:"Q2 2024 tem Q1 2025"}),`
`,e.jsx(n.p,{children:"De focus lag op:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"het volledig wegwerken van de 'elementen', wat in een v2 release resulteerde"}),`
`,e.jsxs(n.li,{children:["de introductie van ",e.jsx(n.a,{href:"https://github.com/JetBrains/web-types",rel:"nofollow",children:"web-types"}),` zodat afnemers code completion en documentatie
in hun IDE hebben`]}),`
`,e.jsx(n.li,{children:"de monorepo versimpelen - Nx gaf flexibiliteit, maar is nu eerder een nadeel nu de monorepo stabiel is"}),`
`,e.jsx(n.li,{children:`de OpenWC testen van de map vervangen door Cypress component-testen, ter voorbereiding van de grondige map
herwerking in 2025`}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx("img",{src:s,alt:"planning-2024"}),`
`,e.jsx(n.h3,{id:"q4-2023-en-q1-2024",children:"Q4 2023 en Q1 2024"}),`
`,e.jsx(n.p,{children:"De backlog was opgekuist en werd stelselmatig weggewerkt. De focus lag hier op:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"een aanzet geven tot het CSP compliant maken van componenten"}),`
`,e.jsx(n.li,{children:"een aanzet geven tot introductie van design patronen"}),`
`,e.jsx(n.li,{children:"het verder uitwerken van de nieuwe formulier aanpak met nieuwe form-components"}),`
`,e.jsx(n.li,{children:"starten met het wegwerken van de 'elementen'"}),`
`,e.jsx(n.li,{children:"de introductie van Cypress component-tests, naast en deels ter vervanging van de Cypress e2e-testen"}),`
`]}),`
`,e.jsx(n.p,{children:"In het kader van het 'ongoing' werk werden er onder andere (voor het eerst) Cypress testen rond WCAG voorzien."}),`
`,e.jsx("br",{}),`
`,e.jsx("img",{src:a,alt:"planning-2023"}),`
`,e.jsx(n.h2,{id:"historisch",children:"Historisch"}),`
`,e.jsx(n.h3,{id:"012023---092023",children:"01/2023 - 09/2023"}),`
`,e.jsx(n.p,{children:`Het team werd versterkt met een 3e ontwikkelaar. De focus lag op het wegwerken van de backlog, het verbeteren van
de monorepo en het upgraden naar v21 van het Webuniversum. Om functionaliteit zinvol (conform afnemers) te kunnen
testen werden er 3 technisch specifieke Playground toepassingen geïntroduceerd: playground-lit, playground-native
en playground-react.`}),`
`,e.jsx(n.h3,{id:"072022---122022",children:"07/2022 - 12/2022"}),`
`,e.jsxs(n.p,{children:[`Midden 2022 werd het team vervangen door 2 nieuwe ontwikkelaars. Het werk van de voorgangers werd verder gezet,
de monorepo (die werd omgezet naar `,e.jsx(n.a,{href:"https://nx.dev/",rel:"nofollow",children:"Nx"}),"), Lit en Storybook bleven behouden. Het uitgangspunt was van in het begin:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"evolutie, geen revolutie"}),`
`,e.jsx(n.li,{children:"features, verbeteringen en herwerkingen naast elkaar laten gebeuren"}),`
`,e.jsx(n.li,{children:"2-wekelijkse releases met voelbare impact / verbeteringen"}),`
`,e.jsx(n.li,{children:"het wegwerken van de backlog"}),`
`,e.jsx(n.li,{children:"de code kwaliteit te verhogen door het gebruik van Typescript"}),`
`,e.jsx(n.li,{children:"Cypress als tool voor e2e-testen"}),`
`]}),`
`,e.jsx(n.h3,{id:"072021---062022",children:"07/2021 - 06/2022"}),`
`,e.jsxs(n.p,{children:[`De oorspronkelijke ontwikkelaar werd vervangen door een team van 3 personen. Zij voerden een feature-stop in om een
grondige herwerking te doen van alle code die er was. Omdat het werken in tientallen repo's niet handig was om
te refactoren en te stroomlijnen bundelden ze alle componenten in een `,e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Monorepo",rel:"nofollow",children:"monorepo"}),`.
Ze kozen er ook voor om gebruik te maken van `,e.jsx(n.a,{href:"https://lit.dev/",rel:"nofollow",children:"Lit"}),` ter vervanging van de custom basis klasse.
Voor documentatie werd de custom-website vervangen door `,e.jsx(n.a,{href:"https://storybook.js.org/",rel:"nofollow",children:"Storybook"}),`.
De herwerking liep echter moeizaam en de feature-stop werd niet in dank afgenomen door de andere teams, de backlog
groeide.`]}),`
`,e.jsx(n.h3,{id:"012020---062021",children:"01/2020 - 06/2021"}),`
`,e.jsx(n.p,{children:`Het UIG-team bestond uit 1 persoon, componenten werden eerder door een ontwikkelteam (vaak Decibel) geschreven
(omdat ze nodig waren voor een nieuwe toepassing) en dan overgedragen aan het UIG-team. Elke component zat in een eigen
GitHub-repo en werd via een custom-website-opzet gedocumenteerd. Componenten erfden over van een eigen geschreven
abstracte klasse (de BaseElementOfType) die basis functionaliteit voorzag.`}),`
`,e.jsx(n.h3,{id:"---2019",children:"... - 2019"}),`
`,e.jsxs(n.p,{children:[`In deze periode was er nog geen UIG-team, toepassingen werden geschreven in verschillende frontend technologieën:
Struts, GWT, Wicket, ... . Om te vermijden dat elke nieuwe frontend gebouwd bleef worden door het
framework-van-het-moment is er in 2020 beslist om nieuwe toepassingen met web-standaarden te bouwen. Concreet hield dit
in om zo native als mogelijk te werken, gebruik makend van html, css en javascript en dit praktisch uit te werken met
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_components",rel:"nofollow",children:"web componenten"})]})]})}function c(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{c as default};
