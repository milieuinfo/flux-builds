import{u as i,j as e,M as s}from"./iframe-CflcmDUD.js";import"./preload-helper-D9Z9MdNV.js";function r(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Afnemen/Starter App"}),`
`,e.jsx(n.h1,{id:"starter-app",children:"Starter App"}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#doel",children:"Doel"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#bibliotheken",children:"Bibliotheken"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#concept",children:"Concept"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#praktisch",children:"Praktisch"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#opzet",children:"Opzet"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#scripts",children:"Scripts"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tooling",children:"Tooling"})}),`
`]}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Onder ",e.jsx(n.a,{href:"https://git.omgeving.vlaanderen.be/git/flux/flux-starter-app",rel:"nofollow",children:"https://git.omgeving.vlaanderen.be/git/flux/flux-starter-app"}),`
vind je een voorbeeld 'starter' project met een basis setup. Het is een WIP, gelieve via MR's wijzigingen of
uitbreidingen aan te vragen.`]}),`
`,e.jsx(n.h2,{id:"bibliotheken",children:"Bibliotheken"}),`
`,e.jsx(n.p,{children:`Hieronder is een overzicht van welke bibliotheken gebruikt worden in de flux-starter-app, de concrete versies
vind je terug in de package.json.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://nodejs.org/en",rel:"nofollow",children:"Node"})," - een recentelijke LTS versie"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://volta.sh/",rel:"nofollow",children:"Volta"})," - installeer de laatste versie"]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://webpack.js.org/",rel:"nofollow",children:"Webpack"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.typescriptlang.org/",rel:"nofollow",children:"TypeScript"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://lit.dev/",rel:"nofollow",children:"Lit"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://prettier.io/",rel:"nofollow",children:"Prettier"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://eslint.org/",rel:"nofollow",children:"ESLint"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://jestjs.io/",rel:"nofollow",children:"Jest"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.cypress.io/",rel:"nofollow",children:"Cypress"})}),`
`]}),`
`,e.jsx(n.h2,{id:"concept",children:"Concept"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`Binnen Departement Omgeving streven we naar een Framework agnostische aanpak. Er wordt bewust niet ingezet op een
concreet framework, dus geen React, Angular, Vue, ... . Het doel is toepassingen te bouwen op een native manier:
met Html, Javascript en Css - gebruikmakend van web-standaarden - waarbij het bouwen van
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_components",rel:"nofollow",children:"Web Components"})," de basis vormt."]}),`
`]}),`
`,e.jsx(n.h2,{id:"praktisch",children:"Praktisch"}),`
`,e.jsx(n.p,{children:`Niettegenstaande de framework-agnostische aanpak willen we wel op een moderne manier aan frontend ontwikkeling doen -
en vermijden het warm water uit te vinden. Een toepassing wordt gebouwd op het Node-platform en gebundeld met
Webpack. Het is aanbevolen een linter te gebruiken en optioneel (maar aanbevolen) kan code in TypeScript geschreven
worden. Om kwalitatieve code te behouden is het de bedoeling 3 types van testen te schrijven: unit testen (met Jest) en
component- en e2e-testen (met Cypress).`}),`
`,e.jsx(n.p,{children:`In het verleden werden web-componenten van 'scratch' geschreven, hierdoor ontstond een basis-klasse die resulteerde
in een mini-custom-framework. Om dat te vermijden is er Lit geïntroduceerd: een (minimale) open-source bibliotheek
met Web Components als basis.`}),`
`,e.jsx(n.h2,{id:"opzet",children:"Opzet"}),`
`,e.jsx(n.p,{children:`Om te starten met een nieuwe toepassing vertrek je van een fork van de starter-app. Deze maakt gebruik van Volta,
die tool zorgt ervoor dat er een expliciete Node versie gespecifieerd, geïnstalleerd en gebruikt wordt. Bij
ontwikkeling voor meerdere toepassingen zal je daardoor telkens met de juiste Node versie werken.`}),`
`,e.jsx(n.p,{children:"Je kan de nieuwste versie van Volta eenmalig als volgt installeren:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`# install Volta
curl https://get.volta.sh | bash

# install Node
volta install node

# start using Node
node
`})}),`
`,e.jsx(n.h2,{id:"scripts",children:"Scripts"}),`
`,e.jsxs(n.p,{children:["In de package.json onder ",e.jsx(n.code,{children:"scripts"})," staan verschillende shortcuts die je kan uitvoeren met ",e.jsx(n.code,{children:"npm run {script}"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"build"}),": build een bundel, je vind hem in de ",e.jsx(n.code,{children:"dist"})," folder"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ct"}),": start lokaal de Cypress console om component testen uit te voeren"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ct-ci"}),": voert alle Cypress component testen uit"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"e2e"}),": start lokaal de Cypress console om end-to-end testen uit te voeren"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"e2e-ci"}),": voert alle Cypress end-to-end testen uit"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"dev"}),": start lokaal een 'live' ontwikkel server"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"lint"}),": voert de linter uit"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"serve"}),": start een http-server waarmee de gebuilde bundel getest kan worden"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"test"}),": voert alle Jest testen uit"]}),`
`]}),`
`,e.jsx(n.h2,{id:"tooling",children:"Tooling"}),`
`,e.jsx(n.h3,{id:"ide--git",children:"IDE & Git"}),`
`,e.jsxs(n.p,{children:["De IDE die bij Departement Omgeving de voorkeur heeft is ",e.jsx(n.a,{href:"https://www.jetbrains.com/idea/",rel:"nofollow",children:"IntelliJ"}),`, versionering
gebeurt met `,e.jsx(n.a,{href:"https://git-scm.com/",rel:"nofollow",children:"Git"}),"."]}),`
`,e.jsx(n.h3,{id:"webpack",children:"Webpack"}),`
`,e.jsxs(n.p,{children:[`Alhoewel er alternatieven zijn is er - via de TAW - een consensus om
`,e.jsx(n.a,{href:"https://webpack.js.org/guides/getting-started/",rel:"nofollow",children:"Webpack"})," als bundler te gebruiken."]}),`
`,e.jsxs(n.p,{children:[`Javascript hoeft niet ge-compiled te worden, TypeScript echter wel. Hiervoor is in de Webpack configuratie - i.p.v.
Babel en tsc - `,e.jsx(n.a,{href:"https://swc.rs/",rel:"nofollow",children:"SWC"}),` geconfigureerd. Babel is complex (er zijn verschillende plugins nodig), om de
verschillende tools correct te configureren. SWC heeft 1 eenduidig configuratie bestand. Voornamelijk om van Lit
`,e.jsx(n.a,{href:"https://lit.dev/docs/components/decorators/",rel:"nofollow",children:"decorators"}),` gebruik te kunnen maken werkt SWC out-of-the-box, terwijl
Babel configuratie problemen geeft.`]}),`
`,e.jsx(n.h3,{id:"typescript",children:"TypeScript"}),`
`,e.jsxs(n.p,{children:["Om de codekwaliteit te verhogen, raden we aan om ",e.jsx(n.a,{href:"https://www.typescriptlang.org/",rel:"nofollow",children:"TypeScript"})," te gebruiken."]}),`
`,e.jsx(n.h3,{id:"lit",children:"Lit"}),`
`,e.jsxs(n.p,{children:["Er wordt bewust voor ",e.jsx(n.a,{href:"https://lit.dev/docs/",rel:"nofollow",children:"Lit"}),` gekozen omdat het geen 'framework' is, het is een bibliotheek
om web-componenten te schrijven. Die componenten hebben de
`,e.jsx(n.a,{href:"https://lit.dev/docs/components/lifecycle/",rel:"nofollow",children:"standard custom element lifecycle"}),` en de mogelijkheid een
`,e.jsx(n.a,{href:"https://lit.dev/docs/components/shadow-dom/",rel:"nofollow",children:"shadow-dom"}),` te voorzien. Shadow-dom's, die voor encapsulatie zorgen,
zijn een goed concept maar geven net door die encapsulatie ook problemen. Eén van de grote problemen zit vaak in
het stylen, een best practice is om dit op lossen is m.b.v. css-in-js (of css-in-ts) en
`,e.jsx(n.a,{href:"https://lit.dev/docs/components/styles/#sharing-styles",rel:"nofollow",children:"shared-styles"}),`. Op die manier kan je makkelijk de css
injecteren op die plaatsen waar hij nodig is zonder nodeloze duplicatie.`]}),`
`,e.jsx(n.h3,{id:"prettier",children:"Prettier"}),`
`,e.jsxs(n.p,{children:["Door ",e.jsx(n.a,{href:"https://prettier.io/",rel:"nofollow",children:"prettier"}),` te gebruiken krijg je via minimale configuratie eenduidige code formattering
over projecten heen.`]}),`
`,e.jsx(n.h3,{id:"eslint",children:"ESLint"}),`
`,e.jsxs(n.p,{children:[`JavaScript code wordt geïnterpreteerd. Om, voordat het uitgevoerd wordt, toch een vorm van kwaliteit validatie te
hebben wordt een linter, `,e.jsx(n.a,{href:"https://eslint.org/",rel:"nofollow",children:"ESLint"})," in ons geval, gebruikt."]}),`
`,e.jsx(n.h3,{id:"jest",children:"Jest"}),`
`,e.jsxs(n.p,{children:[`Er is geen gebrek aan test tools in de JavaScript wereld. Voor het testen van pure JavaScript code is er voor
`,e.jsx(n.a,{href:"https://jestjs.io/",rel:"nofollow",children:"Jest"})," gekozen."]}),`
`,e.jsx(n.h3,{id:"cypress",children:"Cypress"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://www.cypress.io/",rel:"nofollow",children:"Cypress"}),` maakt het schrijven van frontend testen makkelijk. Het voorziet een manier
om e2e testen te schrijven, requests uit te mocken, a.d.h.v. fixtures componenten in isolatie te testen, ... .
Het kan makkelijk om met de shadow-dom, je kan eigen commando's voorzien en Cypress gaat transparant om met reactieve
html.`]})]})}function d(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{d as default};
