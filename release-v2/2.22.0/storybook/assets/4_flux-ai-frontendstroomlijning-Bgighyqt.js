import{u as r,j as e,M as a}from"./iframe-ylVHDfb1.js";import"./preload-helper-PPVm8Dsz.js";const s=""+new URL("flux-ai-doel-bAKgYfB9.png",import.meta.url).href,o=""+new URL("flux-ai-concept-BhkDYOox.png",import.meta.url).href,l=""+new URL("flux-ai-technisch-fundament-C2yU0Mlk.png",import.meta.url).href;function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Afnemen/Flux-AI - Frontendstroomlijning"}),`
`,e.jsx(n.h1,{id:"flux-ai---frontendstroomlijning-met-ai",children:"Flux-AI - Frontendstroomlijning met AI"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:`Flux-AI helpt teams in hun dagdagelijkse werking, bij alles wat met frontend-ontwikkeling te maken heeft. Elk
team behoudt daarbij zijn eigenheid.`})}),`
`,e.jsx(n.h2,{id:"0-inhoudstafel",children:"0. Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#1-doel",children:"1. Doel"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#2-concept",children:"2. Concept"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#3-kennislaag",children:"3. Kennislaag"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#4-ontsluiting-2-mcp-servers",children:"4. Ontsluiting: 2 MCP-servers"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#5-recepten",children:"5. Recepten"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#6-de-terugkoppellus",children:"6. De Terugkoppellus"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#7-wat-de-ai-werking-versterkt",children:"7. Wat de AI-werking versterkt"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#8-randvoorwaarden-en-risicos",children:"8. Randvoorwaarden en Risico's"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#9-conclusie",children:"9. Conclusie"})}),`
`]}),`
`,e.jsx(n.h2,{id:"1-doel",children:"1. Doel"}),`
`,e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:s,alt:"Frontendstroomlijning met Flux-AI: elke toepassing behoudt haar eigen frontend, REST-api en backend, en de frontends worden gestroomlijnd met Flux-AI",width:"650"})}),`
`,e.jsx(n.h2,{id:"2-concept",children:"2. Concept"}),`
`,e.jsxs(n.p,{children:[`Flux ondersteunt frontend-ontwikkeling met een bibliotheek van web-componenten. Flux-AI voegt daar AI aan toe, voor
al het frontendwerk van een team: bouwen, uitbreiden, upgraden, reviewen en verbeteren, sneller en met minder
routinewerk. Daarvoor moet de kennis over Flux `,e.jsx(n.strong,{children:"centraal, machineleesbaar en betrouwbaar"}),` beschikbaar zijn. Dat doet
`,e.jsx(n.strong,{children:"Flux-MCP"}),": de kennis per versie van Flux, en recepten die ze inzetten, aanbieden aan de AI-client van elk project."]}),`
`,e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:o,alt:"Flux-AI - de kennislaag voedt via 2 MCP-servers de AI-client van het project, die de recepten uitvoert; op basis van het rapport van frontend-valideren wordt de toepassing of Flux-AI aangepast",width:"900"})}),`
`,e.jsx(n.p,{children:"Het schema leest van boven naar onder, met rechts een lus terug naar boven:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Kennislaag"})," (sectie 3): Figma voor het ontwerp, en per Flux-release een ",e.jsx(n.strong,{children:"catalogus"}),` met de API (web-types), de
documentatie uit Storybook en de changelog. De catalogus wordt na elke release automatisch opgebouwd.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ontsluiting"})," (sectie 4): de ",e.jsx(n.strong,{children:"Flux-MCP"}),` stelt die kennis per versie beschikbaar: zoeken in de documentatie, een
component of richtlijn opvragen, de wijzigingen tussen 2 versies bekijken en markup controleren. Daarnaast biedt hij
de `,e.jsx(n.strong,{children:"recepten"})," aan. De ",e.jsx(n.strong,{children:"Figma-MCP"})," ontsluit het ontwerp, met Code Connect naar de Flux-componenten."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Uitvoering"})," (sectie 4): de ",e.jsx(n.strong,{children:"AI-client van het project"}),` - Claude Code, Codex, VS Code met Copilot of Cursor -
maakt rechtstreeks verbinding met de Flux-MCP en met de Figma-MCP. De ontwikkelaar start een recept en de AI-client
voert het uit, met het AI-model van het team, in de code van het project en met de eigen koppelingen met Jira en Git.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Recepten"}),` (sectie 5): de workflows. Een deel brengt een ontwerp stap voor stap naar een nieuwe frontend, de rest
werkt op een bestaande frontend: uitbreiden, upgraden, reviewen, valideren en verbeteren. Elk recept vraagt
bevestiging voor er code wijzigt, verifieert het resultaat en eindigt in een rapport, en wat code wijzigt in een
voorstel voor een PR of MR.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Terugkoppellus"})," (sectie 6): ",e.jsx(n.code,{children:"frontend-valideren"}),` legt een frontend naast de richtlijnen en de API van Flux en
levert een rapport van de afwijkingen. Het rapport stelt vast, het oordeelt niet. Op basis daarvan kan:`,`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["het team de toepassing aanpassen, met ",e.jsx(n.code,{children:"frontend-verbeteren"}),";"]}),`
`,e.jsxs(n.li,{children:["Flux-AI aangepast worden: het team meldt dat het Flux-AI gebruikte, Team Flux beslist op basis van de ",e.jsx(n.code,{children:".flux"}),`-map
van het project;`]}),`
`,e.jsx(n.li,{children:"alles blijven zoals het is: de afwijkingen staan in het rapport, daar stopt het."}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["Het principe: ",e.jsx(n.strong,{children:"alle recepten putten uit dezelfde kennis, via dezelfde server"}),`, en elk team voert ze uit in zijn eigen
project, met zijn eigen AI-client. Via de rapporten geven toepassingen Flux-AI mee vorm.`]}),`
`,e.jsx(n.h2,{id:"3-kennislaag",children:"3. Kennislaag"}),`
`,e.jsx(n.p,{children:`De kennislaag bestaat uit Figma en een catalogus per Flux-release. Bij elke versie van Flux-MCP hoort 1 eenduidige
set kennis.`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Figma - componenten en patronen."}),` Het ontwerp zoals het bedoeld is: de componenten en de UI/UX-patronen
(paginastructuur, formulieren, foutafhandeling, ...). Componenten in Figma komen 1-op-1 overeen met de
`,e.jsx(n.code,{children:"vl"}),`-componenten, met dezelfde namen en met varianten die overeenkomen met attributen. Hoe beter die mapping, hoe
beter een ontwerp naar code gaat.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Catalogus per Flux-release."})," Scripts bouwen hem na elke release. Hij bevat:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Web-types"}),` - de API van elke component in die versie: attributen, properties, events, slots en CSS custom
properties. Een ander formaat, zoals een Custom Elements Manifest, heeft geen impact op de recepten.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Documentatie uit Storybook"}),` - de richtlijnen, patronen en voorbeelden per component. Een LLM vult ze aan met
voorbeelden, een samenvatting en zoektermen.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Changelog per ticket"}),` - wat er in elke versie veranderde. Een LLM vult elk ticket aan met de impact, de nodige
actie en een voorbeeld. Een apart migratiebestand is daardoor niet nodig.`]}),`
`]}),`
`,e.jsx(n.p,{children:`Figma voedt de Figma-MCP, de catalogus de Flux-MCP (sectie 4). De toepassingen zelf staan niet in de kennislaag: ze
zijn het onderwerp van de recepten, niet de bron.`}),`
`,e.jsx(n.h2,{id:"4-ontsluiting-2-mcp-servers",children:"4. Ontsluiting: 2 MCP-servers"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Flux-MCP."}),` Eigen ontwikkeling. Hij ontsluit de catalogus met tools en resources: zoeken in de documentatie, een
component of richtlijn opvragen, de wijzigingen tussen 2 versies opvragen en markup controleren tegen de API van een
versie (`,e.jsx(n.code,{children:"flux_check_markup"}),`). Elke vraag noemt de versie van het project, elk antwoord de versie van de catalogus en
zijn bronnen. Daarnaast biedt hij de recepten aan als MCP-prompts (sectie 5). De Flux-MCP draait als dienst op het
containerplatform, achter een gateway waar je na aanmelding een persoonlijk token aanvraagt.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Figma-MCP (Code Connect)."}),` Bestaande Figma-tooling die we inzetten. Hij ontsluit het ontwerp: welke Figma-component
en -variant overeenkomt met welke `,e.jsx(n.code,{children:"vl"}),`-component en welke attributen. Flux-MCP verrijkt de Figma-bibliotheek daarvoor
met Code Connect, beschrijvingen per component en links naar de documentatie.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"AI-client van het project."}),` Claude Code, Codex, VS Code met Copilot, Cursor of een andere AI-client met
MCP-ondersteuning maakt rechtstreeks verbinding met de Flux-MCP en met de Figma-MCP. De ontwikkelaar start een recept
en de AI-client voert het uit, met het AI-model van het team, in de code van het project en met de eigen koppelingen
met Jira en Git.`]}),`
`,e.jsx("vl-alert",{icon:"alert-circle",title:"Belangrijk",type:"warning",size:"small",children:e.jsx(n.p,{children:`De MCP-servers voeren zelf niets uit: ze roepen geen model aan en lezen of wijzigen geen code. Ze leveren kennis en
recepten, de AI-client van het project voert ze uit.`})}),`
`,e.jsx(n.h2,{id:"5-recepten",children:"5. Recepten"}),`
`,e.jsx(n.p,{children:`Een recept is een workflow als MCP-prompt: vaste stappen, uitgevoerd door de AI-client van het project. Elk recept volgt
hetzelfde stramien:`}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Checkpoint"})," - de ontwikkelaar bevestigt het plan voor er code wijzigt."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Verificatie"})," - ",e.jsx(n.code,{children:"flux_check_markup"}),", de build en de e2e-testen."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Rapport"})," - wat er gebeurde en wat er nog openstaat."]}),`
`]}),`
`,e.jsx(n.p,{children:`Wat code wijzigt, eindigt in een voorstel voor een branch en een PR of MR, nooit in een losse AI-output. Voor Jira en
Git gebruikt de AI-client de eigen koppelingen van het team. Elk recept raadt een model en een effort aan.`}),`
`,e.jsx(n.h3,{id:"51-van-ontwerp-naar-frontend",children:"5.1 Van ontwerp naar frontend"}),`
`,e.jsx(n.p,{children:"Deze recepten brengen een ontwerp uit Figma stap voor stap naar een nieuwe frontend:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"frontend-aanmaken"})," - zet de frontend op vanuit de flux-starter-app."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"frontend-analyseren"})," - analyseert het ontwerp: de schermen, het menu en de navigatie."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"frontend-structuur-bouwen"})," - bouwt de opbouw, het menu en lege schermen."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"scherm-analyseren"})," - analyseert 1 scherm uit zijn ontwerp in Figma."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"scherm-bouwen"})," - bouwt het scherm volgens zijn analyse."]}),`
`]}),`
`,e.jsx(n.p,{children:"Een analyse wijzigt geen code: ze wordt eerst in een PR nagekeken, de volgende stap bouwt erop verder."}),`
`,e.jsx(n.h3,{id:"52-op-een-bestaande-frontend",children:"5.2 Op een bestaande frontend"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"frontend-uitbreiden"})," - een uitbreiding vanuit een Jira-ticket of een ontwerp."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"frontend-upgraden"}),` - naar een nieuwere versie van Flux, op basis van de changelog van alle tussenliggende versies.
De e2e-testen bevestigen dat het gedrag ongewijzigd blijft.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"frontend-wijzigingen-reviewen"}),` - de diff van een branch naast de richtlijnen en de API van Flux, ter voorbereiding
van de PR of MR. De menselijke review blijft de poort.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"frontend-valideren"}),` - de hele frontend naast de richtlijnen en de API van Flux, met een rapport van de afwijkingen
(sectie 6).`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"frontend-verbeteren"})," - de toepassing aanpassen op basis van dat rapport, voor de afwijkingen die het team kiest."]}),`
`]}),`
`,e.jsx(n.h2,{id:"6-de-terugkoppellus",children:"6. De Terugkoppellus"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"frontend-valideren"}),` legt een frontend naast de richtlijnen en de API van zijn Flux-versie en levert een rapport van de
afwijkingen. Het rapport stelt vast, het oordeelt niet: een toepassing is niet goed of slecht, ze is wat ze is.`]}),`
`,e.jsx(n.p,{children:"De richtlijnen beschrijven hoe Flux een frontend opbouwt:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"paginastructuur en navigatie;"}),`
`,e.jsx(n.li,{children:`interactiepatronen: formulieren, validatie en foutmeldingen, laad- en lege toestanden, bevestigingen, tabellen en
paginering;`}),`
`,e.jsx(n.li,{children:"componenten uit de bibliotheek in plaats van lokale varianten;"}),`
`,e.jsx(n.li,{children:"terminologie en 'tone-of-voice' in labels, meldingen en hulpteksten;"}),`
`,e.jsx(n.li,{children:"toegankelijkheid: richtlijn WCAG 2.2 AA, wettelijk minimum WCAG 2.1 AA."}),`
`]}),`
`,e.jsx(n.p,{children:`Ze staan in de kennislaag: de patronen in Figma, de richtlijnen en voorbeelden in de documentatie uit Storybook, de
componenten en hun API in de web-types.`}),`
`,e.jsx(n.p,{children:"Op basis van het rapport zijn er 3 mogelijkheden:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"De toepassing aanpassen"})," - het team past zijn toepassing aan, met ",e.jsx(n.code,{children:"frontend-verbeteren"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flux-AI aanpassen"}),` - de toepassing is ok, maar Flux-AI kan verbeterd worden: aanvullen, schrappen of iets
fundamentelers. Het team meldt Team Flux dat het Flux-AI gebruikte. Team Flux bekijkt zelf de informatie in de
`,e.jsx(n.code,{children:".flux"}),`-map van het project en beslist welke acties volgen. De aanpassing landt in de richtlijnen in Storybook, in
Figma, in de componenten of in de recepten.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Niets aanpassen"})," - de afwijkingen staan in het rapport, daar stopt het."]}),`
`]}),`
`,e.jsx(n.p,{children:`Die keuze is geen AI-beslissing: het recept stelt vast, het team beslist over zijn toepassing en Team Flux over
Flux-AI. Eens beslist, kan het doorvoeren wel met AI. Toegankelijkheid is de uitzondering: het wettelijk minimum
geldt voor elke toepassing.`}),`
`,e.jsx(n.p,{children:"Zo groeit Flux-AI mee met wat teams in de praktijk tegenkomen, zonder dat elke toepassing hetzelfde moet worden."}),`
`,e.jsx(n.h2,{id:"7-wat-de-ai-werking-versterkt",children:"7. Wat de AI-werking versterkt"}),`
`,e.jsx(n.p,{children:`Flux-AI werkt op elke toepassing. Deze punten maken de AI-werking sterker en efficiënter. Ze zitten volledig in de
codebase en veranderen niets aan wat de eindgebruiker ziet of doet. Een team kan elk punt zelf aanpakken.`}),`
`,e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:l,alt:"Flux-AI - wat de AI-werking versterkt: vaste versie, standalone opstartbaar, backend uitgemockt en uitgebreide e2e-testen maken een toepassing een sterkere en efficiëntere werkomgeving voor AI",width:"770"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Vaste versie van Flux."}),` De toepassing pint 1 versie. Zo is eenduidig welke catalogus geldt, en gaat
`,e.jsx(n.code,{children:"frontend-upgraden"})," van 1 gekende versie naar 1 gekende versie, met de changelog ertussen."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Standalone opstartbaar."})," 1 commando (",e.jsx(n.code,{children:"pnpm install && pnpm start"}),`) en de app draait, zonder toegang tot interne
infrastructuur, VPN's of credentials. Zo kan de AI-client de app zelf starten, bekijken en testen.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Backend uitgemockt, puur Node."}),` Mocks (bv. MSW of een lichte Node-mockserver) in plaats van een Java-runtime, een
databank of externe afhankelijkheden. Zo is het gedrag deterministisch: dezelfde input geeft altijd dezelfde output.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Uitgebreide e2e-testen."}),` De e2e-suite is het gedragscontract van de toepassing en versterkt de AI-werking het meest:
ze maakt AI-wijzigingen verifieerbaar. Na een upgrade, een uitbreiding of een aanpassing geldt: testen groen = gedrag
behouden. Zo kan de AI-client zelf itereren tot het resultaat klopt.`]}),`
`,e.jsx(n.h2,{id:"8-randvoorwaarden-en-risicos",children:"8. Randvoorwaarden en Risico's"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Kwaliteit van de kennislaag is bepalend."}),` Onvolledige web-types, gedateerde documentatie of een vage changelog
vertalen zich direct in slechte AI-output. Documentatie-discipline wordt een productie-eis: elke release levert een
volledige catalogus op.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Figma-governance."}),` Van ontwerp naar code staat of valt met een strak beheerde Figma-bibliotheek en een onderhouden
Code Connect-mapping. Zonder 1-op-1 mapping levert AI generieke HTML in plaats van `,e.jsx(n.code,{children:"vl"}),"-componenten."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Governance van Flux-AI."})," Wat er aan Flux-AI verbeterd kan worden, haalt Team Flux zelf uit de ",e.jsx(n.code,{children:".flux"}),`-map van de
projecten die melden dat ze Flux-AI gebruikten. Zonder eigenaar wordt dat drift: Team Flux beslist en houdt de
richtlijnen, de componenten en de recepten samenhangend.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Rechten en reikwijdte."}),` De AI-client werkt met de rechten van de ontwikkelaar, in Jira en Git. Dat vraagt
afspraken over wat een recept zelf mag doen (analyse, branch, PR of MR) en wat niet (bv. mergen, tickets sluiten).`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Review blijft nodig."}),` AI-output gaat door dezelfde review- en kwaliteitspoorten als menselijke code. De
e2e-testen verlagen de review-last, maar vervangen hem niet, zeker niet voor toegankelijkheid, waar automatische
verificatie tekortschiet.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Versnippering vermijden."}),` Alle recepten halen hun kennis via dezelfde server. Zo sleept geen enkele tool een
eigen, verouderende kopie van de kennis over Flux mee.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Toegang tot een AI-model."}),` Flux-AI levert geen model: elk team heeft een AI-client met toegang tot een model
nodig, en een persoonlijk token voor de Flux-MCP.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"9-conclusie",children:"9. Conclusie"}),`
`,e.jsx(n.p,{children:`De recepten zijn geen losse experimenten maar 1 systeem met een gedeelde kern: 1 kennislaag, ontsloten via 2
MCP-servers, uitgevoerd in de AI-client van elk team. De terugkoppellus houdt Flux-AI in beweging: op basis van een
rapport kan een toepassing of Flux-AI zelf veranderen.`}),`
`,e.jsx(n.p,{children:`Wat de AI-werking versterkt (sectie 7), kan elk team meteen zelf aanpakken. Wat een team met een rapport doet, beslist
het team zelf: Flux-AI helpt, elk team behoudt zijn eigenheid.`})]})}function h(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{h as default};
