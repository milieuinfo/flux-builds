import{u as d,j as e,M as r}from"./iframe-CsVpDM3d.js";import"./preload-helper-PPVm8Dsz.js";function i(t){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Richtlijnen/Figma/Figma Code Connect"}),`
`,e.jsx(n.h1,{id:"figma-code-connect",children:"Figma Code Connect"}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#wat-is-het",children:"Wat is het"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#wat-je-nodig-hebt",children:"Wat je nodig hebt"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#een-snippet-opvragen",children:"Een snippet opvragen"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#wat-het-snippet-bevat",children:"Wat het snippet bevat"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#wat-het-snippet-niet-bevat",children:"Wat het snippet niet bevat"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#dingen-die-kunnen-opvallen",children:"Dingen die kunnen opvallen"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#dekking-en-versies",children:"Dekking en versies"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#een-fout-melden",children:"Een fout melden"})}),`
`]}),`
`,e.jsx(n.h2,{id:"wat-is-het",children:"Wat is het"}),`
`,e.jsxs(n.p,{children:["Code Connect koppelt de componenten uit de Figma-bibliotheek ",e.jsx(n.strong,{children:"FLUX Web Componenten"}),` aan de web-componenten uit
deze bibliotheek. In Dev Mode toont Figma daardoor geen gegenereerde CSS, maar de HTML van het echte component,
met de varianten van de geselecteerde instance al ingevuld:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-button secondary large icon="add" icon-placement="after">Bewaren</vl-button>
`})}),`
`,e.jsx(n.p,{children:"Een ontwerper kiest in Figma een variant; jij ziet meteen welk attribuut daarbij hoort."}),`
`,e.jsx(n.h2,{id:"wat-je-nodig-hebt",children:"Wat je nodig hebt"}),`
`,e.jsx(n.p,{children:`Toegang tot de Figma-bibliotheek en tot Dev Mode. Aan jouw kant hoef je niets te installeren of te configureren:
de koppeling is gepubliceerd bij Figma en geldt voor iedereen die het bestand kan openen.`}),`
`,e.jsx(n.h2,{id:"een-snippet-opvragen",children:"Een snippet opvragen"}),`
`,e.jsxs(n.p,{children:["Zet Dev Mode aan en selecteer een ",e.jsx(n.strong,{children:"instance"})," van een component in een design. Het codepaneel toont het snippet."]}),`
`,e.jsxs(n.p,{children:[`Selecteer je het component op een componentenpagina van de bibliotheek zelf, dan meldt Figma
`,e.jsx(n.em,{children:"Code Connect — Not started"}),`. Dat betekent niet dat de koppeling ontbreekt: ze verschijnt op het gebruik van een
component, niet op de definitie ervan.`]}),`
`,e.jsx(n.h2,{id:"wat-het-snippet-bevat",children:"Wat het snippet bevat"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"de attributen die horen bij de gekozen varianten"}),`
`,e.jsx(n.li,{children:"de tekst uit de tekstlagen van de instance"}),`
`,e.jsx(n.li,{children:"de naam van een gekozen icoon"}),`
`,e.jsxs(n.li,{children:["geneste componenten via hun eigen snippet, bijvoorbeeld een ",e.jsx(n.code,{children:"vl-properties"})," binnen een ",e.jsx(n.code,{children:"vl-contact-card"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"wat-het-snippet-niet-bevat",children:"Wat het snippet niet bevat"}),`
`,e.jsx(n.p,{children:`Alles wat in Figma niet bestaat. Event handlers, data binding, id's en attributen die in code wel bestaan maar geen
Figma-tegenhanger hebben, staan er niet in. Omgekeerd geldt hetzelfde: een Figma-variant zonder code-equivalent
wordt niet uitgeschreven.`}),`
`,e.jsx(n.p,{children:"Het snippet is dus een correct startpunt, geen volledige implementatie."}),`
`,e.jsx(n.h2,{id:"dingen-die-kunnen-opvallen",children:"Dingen die kunnen opvallen"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Wat je ziet"}),e.jsx("th",{scope:"col",children:"Wat het betekent"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:'label="..."'})}),e.jsxs("td",{children:["Een placeholder. Een knop met alleen een icoon krijgt zijn toegankelijke naam uit de property ",e.jsx("code",{children:"label"})," in Figma. Staat die nog op de default, dan vul je de naam zelf in: in code is hij verplicht."]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:'href="#"'}),", ",e.jsx("code",{children:'src=""'})]}),e.jsx("td",{children:"Ook een placeholder: Figma kent de bestemming of de afbeelding niet."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:'for=""'})," bij ",e.jsx("code",{children:"vl-tooltip"})]}),e.jsx("td",{children:"Het id van het trigger-element is verplicht in code, maar bestaat niet in Figma."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"&amp;"}),", ",e.jsx("code",{children:"&lt;"}),", ",e.jsx("code",{children:"&quot;"})," in tekst"]}),e.jsxs("td",{children:["Tekst uit Figma wordt geëscapet zodat het snippet geldige HTML blijft. De browser toont gewoon ",e.jsx("code",{children:"&"}),", ",e.jsx("code",{children:"<"})," en ",e.jsx("code",{children:'"'}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Een attribuut met enkele quotes"}),e.jsxs("td",{children:["Bevat de tekst zelf een dubbele quote, dan herschrijft Dev Mode het attribuut naar ",e.jsx("code",{children:"'…'"}),". Even geldig."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:'icon=""'})}),e.jsx("td",{children:"Het gekozen icoon komt uit een bibliotheek zonder mapping. Vul de icoonnaam zelf in."})]})]})]}),`
`,e.jsx(n.h2,{id:"dekking-en-versies",children:"Dekking en versies"}),`
`,e.jsxs(n.p,{children:[`Alle gepubliceerde FLUX-componenten met een code-equivalent zijn gekoppeld, samen met de iconen uit
`,e.jsx(n.strong,{children:"[VL] Icons (team D)"}),"."]}),`
`,e.jsx(n.p,{children:`Van de snippets bestaat altijd maar één versie: die van de laatst gepubliceerde release. Wijzigt een component,
dan volgt de koppeling bij de eerstvolgende release. Dat geldt overal tegelijk:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["ook in een ",e.jsx(n.strong,{children:"oudere versie"})," van het Figma-bestand, via de versiegeschiedenis"]}),`
`,e.jsxs(n.li,{children:["ook in een design file die de ",e.jsx(n.strong,{children:"updates van de bibliotheek nog niet overnam"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Figma bewaart per component één koppeling en zoekt die live op; ze reist niet mee met de versie van het bestand."}),`
`,e.jsxs(n.p,{children:["Werkt je toepassing met een oudere versie van ",e.jsx(n.code,{children:"@domg-wc"}),`, dan kan een snippet attributen bevatten die in jouw
versie nog niet bestaan. Controleer ze dan tegen de Storybook van jouw versie:
`,e.jsx(n.code,{children:"https://flux.omgeving.vlaanderen.be/release-v2/<versie>/storybook"}),"."]}),`
`,e.jsx(n.p,{children:`Omgekeerd kan een design file geen oudere versie van de Figma-bibliotheek gebruiken. Je kan op een oudere versie
van een component blijven door een update niet over te nemen, maar niet teruggaan naar een vorige versie.`}),`
`,e.jsx(n.h2,{id:"een-fout-melden",children:"Een fout melden"}),`
`,e.jsxs(n.p,{children:[`Klopt een snippet niet met het component, of ontbreekt er een attribuut? Meld het aan het Flux-team. De koppeling
staat als `,e.jsx(n.code,{children:"vl-<component>.figma.ts"})," naast het component in de repository, dus zo'n correctie is doorgaans klein."]})]})}function a(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{a as default};
