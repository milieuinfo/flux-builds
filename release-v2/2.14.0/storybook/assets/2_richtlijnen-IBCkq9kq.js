import{u as r,j as e,M as o}from"./iframe-D9dm7PbY.js";import"./preload-helper-D9Z9MdNV.js";function t(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Bijdragen/Richtlijnen"}),`
`,e.jsx(n.h1,{id:"richtlijnen",children:"Richtlijnen"}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#code-formattering",children:"Code Formattering"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#codeer-richtlijnen",children:"Codeer Richtlijnen"})}),`
`]}),`
`,e.jsx(n.h2,{id:"code-formattering",children:"Code Formattering"}),`
`,e.jsxs(n.p,{children:["Code formattering gebeurt m.b.v. Prettier, de configuratie bevindt zich op root niveau in het ",e.jsx(n.code,{children:".prettierrc"})," bestand."]}),`
`,e.jsxs(n.p,{children:["In ",e.jsx("ins",{children:"IntelliJ"})," kan je Prettier configureren onder ",e.jsx(n.code,{children:"Preferences > Languages & Frameworks > Prettier"})," ",e.jsx("br",{}),`
  -> zorg dat `,e.jsx(n.code,{children:"Prettier package"})," verwijst naar de juiste ",e.jsx(n.code,{children:"node_modules/prettier"})," folder ",e.jsx("br",{}),`
  -> vink beide vinkjes aan zodat Prettier wordt toegepast zowel bij expliciet formatteren als bij bewaren `,e.jsx("br",{}),`
  -> 'Run for files' kan je configureren als `,e.jsx(n.code,{children:"{**/*,*}.{js,mjs,ts,jsx,tsx}"})]}),`
`,e.jsx(n.h2,{id:"codeer-richtlijnen",children:"Codeer Richtlijnen"}),`
`,e.jsx(n.h3,{id:"backwards-compatibiliteit",children:"Backwards Compatibiliteit"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Belangrijk: het gaat hier om een componenten bibliotheek, er zijn verschillende versies van in omloop! Het is niet
zoals een toepassing waar een nieuwe release de vorige versie volledig vervangt!`}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["afnemers moeten (relatief) makkelijk kunnen upgraden",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`het streefdoel is backwards compatibel te blijven, je kan dus niet zomaar bestaande naamgeving
(component, methode, attribuut) wijzigen`}),`
`,e.jsx(n.li,{children:"code in afnemende toepassingen kan extenden van onze code, er is geen volledig overzicht van alle afhankelijkheden"}),`
`,e.jsx(n.li,{children:`'dode' code kan best gebruikt worden in een eindtoepassing, het wil gewoon zeggen dat er geen testen of andere
referenties zijn in 'onze' codebase`}),`
`,e.jsx(n.li,{children:`'levende' code in onze codebase kan mogelijks nergens gebruikt worden in een eindtoepassing (en feitelijk dood
zijn)`}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:`op termijn zullen er backwards incompatibele wijzigingen gebeuren, dat zal via major releases gebeuren die duidelijk
gecommuniceerd en gedocumenteerd worden`}),`
`,e.jsx(n.li,{children:`major releases worden gestuurd door ontwikkeling van het Flux-team, andere teams die bijdragen moeten steeds backwards
compatibele code schrijven - refactorings in bestaande code zijn niet toegestaan voor hen`}),`
`,e.jsx(n.li,{children:"toevoegingen zijn minder strikt, maar behoud de geest van de bestaande code (typisch het bestand in kwestie)"}),`
`,e.jsx(n.li,{children:"een hoofddoel is consistentie te verkrijgen, een nieuwe aanpak introduceren kan enkel na overleg"}),`
`]}),`
`,e.jsx(n.h3,{id:"web-componenten",children:"Web-Componenten"}),`
`,e.jsx(n.p,{children:`Voor de feitelijke code van de web-componenten zijn richtlijnen en conventies, deze zijn echter niet in steen
gebeiteld! Momenteel zijn er 2 basis klasses: BaseElement en BaseLitElement. Op termijn zal alles extenden van
BaseLitElement, BaseElement wordt weggewerkt.`}),`
`,e.jsxs(n.p,{children:["De best practices zijn gedocumenteerd onder ",e.jsx(n.a,{href:"/docs/afnemen-artifacts--documentatie",children:"Afnemen / Artifacts"}),`, nieuwe
componenten moeten ineens als BaseLitElement geïmplementeerd worden.`]}),`
`,e.jsx(n.h3,{id:"typescript",children:"Typescript"}),`
`,e.jsx(n.p,{children:`De componenten bibliotheek wordt zo goed als mogelijk getypeerd om bugs te vermijden en met meer vertrouwen
refactorings te kunnen doorvoeren. De huidige typering is beperkt, het is vaak JavaScript met minimale typing
toevoegingen. Dit wordt stelselmatig verbeterd - extra typing toevoegen mag dus!`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Opgelet 1: typing toevoeging is letterlijk de JavaScript code laten zoals ze is en enkel typing toevoegen, dus
geen code wijzigingen doorvoeren om te kunnen typen!`}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Opgelet 2: aanpassingen of verbeteringen dienen steeds te gebeuren met backwards-compatibiliteit in het achterhoofd
bvb. iets dat niet geïnitialiseerd was nu ineens initialiseren is een risico (falsy-rules in combinatie met
onduidelijkheid over hoe afnemers onze code gebruiken)`}),`
`]}),`
`,e.jsx(n.h3,{id:"icons",children:"Icons"}),`
`,e.jsxs(n.p,{children:[`Doorheen verschillende componenten worden icons - voorzien door Digitaal Vlaanderen - gebruikt, op de DV
website vind je het overzicht van alle `,e.jsx(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-icon/",rel:"nofollow",children:"beschikbare iconen"}),"."]}),`
`,e.jsx(n.h3,{id:"cypress",children:"Cypress"}),`
`,e.jsxs(n.p,{children:["Richtlijnen m.b.t. Storybook vind je terug onder ",e.jsx(n.a,{href:"/docs/bijdragen-cypress--documentatie",children:"Bijdragen / Cypress"}),"."]}),`
`,e.jsx(n.h3,{id:"storybook",children:"Storybook"}),`
`,e.jsxs(n.p,{children:["Richtlijnen m.b.t. Storybook vind je terug onder ",e.jsx(n.a,{href:"/docs/bijdragen-storybook--documentatie",children:"Bijdragen / Storybook"}),"."]})]})}function a(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{a as default};
