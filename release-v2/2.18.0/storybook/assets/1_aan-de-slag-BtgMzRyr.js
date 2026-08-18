import{u as r,j as e,M as t}from"./iframe-COmpMQdF.js";import"./preload-helper-D9Z9MdNV.js";function i(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Afnemen/Aan De Slag"}),`
`,e.jsx(n.h1,{id:"aan-de-slag",children:"Aan De Slag"}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#node-en-npm",children:"Node en NPM"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#dependencies---packagejson",children:"Dependencies - package.json"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#registratie-van-een-web-component",children:"Registratie van een web-component"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#styling",children:"Styling"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#documentatie",children:"Documentatie"})}),`
`]}),`
`,e.jsx(n.h2,{id:"node-en-npm",children:"Node en NPM"}),`
`,e.jsxs(n.p,{children:[`De basis van hedendaagse JavaScript ontwikkeling - zowel voor deze componenten bibliotheek als voor eindtoepassingen -
is `,e.jsx(n.a,{href:"https://nodejs.org/en",rel:"nofollow",children:"Node.js"})," gebruik makend van ",e.jsx(n.a,{href:"https://www.npmjs.com/",rel:"nofollow",children:"npm"}),` (of bvb.
`,e.jsx(n.a,{href:"https://yarnpkg.com/",rel:"nofollow",children:"Yarn"}),")."]}),`
`,e.jsx(n.h2,{id:"dependencies---packagejson",children:"Dependencies - package.json"}),`
`,e.jsxs(n.p,{children:["Er worden ",e.jsx(n.a,{href:"/docs/afnemen-artifacts--documentatie",children:"verschillende bibliotheken"}),` aangeboden, je dient ze - zie hieronder
bij "dependencies" - op te nemen in je `,e.jsx(n.code,{children:"package.json"}),`. De packages kunnen enkel afgenomen worden als je toegang hebt
tot de artifactory van Departement Omgeving! Om node versie problemen te vermijden is het aanbevolen
`,e.jsx(n.a,{href:"https://volta.sh/",rel:"nofollow",children:"Volta"})," te gebruiken."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`{
    "name": "web-app",
    "version": "1.2.0",
    "license": "MIT",
    "scripts": {
        "build": "nx build",
    },
    "private": true,
    "devDependencies": {
        "cypress": "13.6.6",
        "eslint": "8.57.0",
        "jest": "29.7.0",
        "nx": "18.0.8",
        "prettier": "2.8.8",
        "typescript": "5.4.2"
    },
    "dependencies": {
        "@domg-wc/components": "2.0.0",
        "@domg-wc/map": "2.0.0"
    },
    "volta": {
        "node": "20.11.0"
    }
}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["De minimaal op te nemen package is: ",e.jsx(n.strong,{children:"'@domg-wc/components'"}),", de package ",e.jsx(n.strong,{children:"'@domg-wc/map'"}),` bevat de kaart
functionaliteit en is optioneel.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"webpack-build",children:"Webpack build"}),`
`,e.jsxs(n.p,{children:[`Om met native css properties te werken - en de IDE daar correct mee om te laten gaan - zitten deze (in de packages)
apart in bestanden conform `,e.jsx(n.code,{children:"vl-color.raw.css"}),`. Bij gebruik van Webpack 5 dienen daarvoor de 'module rules' uitgebreid
te worden met:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`{
    test: /\\.css$/i,
    resourceQuery: /raw/, // matcht ?raw
    type: 'asset/source', // geeft de file-inhoud als string
},
`})}),`
`,e.jsx(n.h2,{id:"registratie-van-een-web-component",children:"Registratie van een web-component"}),`
`,e.jsx(n.p,{children:`Om een web-component te gebruiken in je html dient hij geregistreerd te worden in de browser. Er zijn 2
manieren om dat te doen:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import '@domg-wc/components/block/accordion';
`})}),`
`,e.jsx(n.p,{children:"of"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import { registerWebComponents } from '@domg-wc/common';
import { VlAccordionComponent } from '@domg-wc/components/block';

registerWebComponents([VlAccordionComponent]);
`})}),`
`,e.jsxs(n.p,{children:["Nadien kent je browser de tag ",e.jsx(n.code,{children:"<vl-accordion></vl-accordion>"}),`, de details van een component (attributen, events, ...)
kan je terugvinden onder de desbetreffende docs pagina, `,e.jsx(n.a,{href:"/docs/components-block-accordion--documentatie",children:"vl-accordion - documentatie"}),`
in dit geval.`]}),`
`,e.jsx(n.h2,{id:"styling",children:"Styling"}),`
`,e.jsx(n.p,{children:`Als afnemer dien je niets te doen m.b.t. styling. Componenten met een shadow DOM injecteren hun eigen styling in de
shadow DOM. Daarnaast wordt er globale styling geïnjecteerd: algemene (font, body, ...) en layout (grid, group, ...)
styling.`}),`
`,e.jsxs(n.p,{children:[`Bij eigen ontwikkelde componenten (met een shadow DOM) is er in de shadow DOM geen specifieke flux-css (de globale css
voor componenten zonder shadow DOM), je dient die dan zelf (indien nodig voor kind componenten) te injecteren.
Meer info hierover vind je onder `,e.jsx(n.a,{href:"/docs/recepten-css-styling--documentatie#eigen-componenten-met-shadow-dom",children:"eigen componenten met shadow DOM"}),"."]}),`
`,e.jsx(n.h2,{id:"documentatie",children:"Documentatie"}),`
`,e.jsxs(n.p,{children:[`Technische documentatie is te vinden in deze Storybook waarvan de nieuwste versie terug te vinden is onder
`,e.jsx(n.a,{href:"https://flux.omgeving.vlaanderen.be/release-v2/latest/storybook",rel:"nofollow",children:"flux-builds"})]}),`
`,e.jsx(n.p,{children:`De Storybook documentatie wordt bij elke release verbeterd en aangevuld. Per component vind je onder de
'documentatie'-node detail informatie, daaronder wordt typisch het volgende vermeld:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"de beschrijving van de component"}),`
`,e.jsx(n.li,{children:"een 'default' voorbeeld, inclusief hoe je de component importeert en integreert"}),`
`,e.jsx(n.li,{children:"configuratie details van de attributen, slots, events en properties"}),`
`,e.jsx(n.li,{children:"specifieke varianten"}),`
`,e.jsx(n.li,{children:`referenties met eventueel links naar legacy versies en indien relevant naar de Digitaal Vlaanderen component (waar op
verder gebouwd wordt)`}),`
`]})]})}function a(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{a as default};
