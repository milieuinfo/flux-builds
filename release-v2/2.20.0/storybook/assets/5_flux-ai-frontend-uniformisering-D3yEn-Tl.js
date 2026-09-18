import{u as r,j as e,M as a}from"./iframe-BoAZAq4i.js";import"./preload-helper-PPVm8Dsz.js";const s=""+new URL("flux-ai-doel-oSwPLiRg.png",import.meta.url).href,o=""+new URL("flux-ai-concept-cbCN0Hi5.png",import.meta.url).href,d=""+new URL("flux-ai-technisch-fundament-BXPaeB8u.png",import.meta.url).href,l=""+new URL("flux-ai-uniforme-toepassing-DwddQ1eU.png",import.meta.url).href,g=""+new URL("flux-ai-ux-uniformisering-Ce6gKpT1.png",import.meta.url).href;function t(i){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Planning/Flux-AI - Frontend Uniformisering"}),`
`,e.jsx(n.h1,{id:"flux-ai---frontend-uniformisering-via-ai",children:"Flux-AI - Frontend Uniformisering via AI"}),`
`,e.jsx(n.h2,{id:"0-inhoudstafel",children:"0. Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#1-doel",children:"1. Doel"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#2-concept",children:"2. Concept"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#3-kennislaag",children:"3. Kennislaag"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#4-ontsluiting-2-mcp-servers-en-een-agent",children:"4. Ontsluiting: 2 MCP-servers en een Agent"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#5-ai-workflows",children:"5. AI-Workflows"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#6-de-terugkoppellus",children:"6. De Terugkoppellus"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#7-eisen-aan-een-toepassing",children:"7. Eisen aan een Toepassing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#a-technisch-fundament",children:"A. Technisch Fundament"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#b-uniforme-uiux",children:"B. Uniforme UI/UX"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#c-uniformisering---van-a-naar-b",children:"C. Uniformisering - van A. naar B."})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#8-fasering",children:"8. Fasering"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#9-randvoorwaarden-en-risicos",children:"9. Randvoorwaarden en Risico's"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#10-conclusie",children:"10. Conclusie"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#11-faq",children:"11. FAQ"})}),`
`]}),`
`,e.jsx(n.h2,{id:"1-doel",children:"1. Doel"}),`
`,e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:s,alt:"Flux-AI - niet-uniforme toepassingen",width:"650"})}),`
`,e.jsx(n.h2,{id:"2-concept",children:"2. Concept"}),`
`,e.jsxs(n.p,{children:[`Flux heeft als doel frontend-ontwikkeling te ondersteunen en te vergemakkelijken via de web-componenten-bibliotheek. AI
kan die ondersteuning `,e.jsx(n.strong,{children:`fel verbeteren, de ontwikkeling versnellen, routinetaken automatiseren en de kwaliteit
verhogen`}),". Om dit door te voeren moeten we de kennis over de bibliotheek ",e.jsx(n.strong,{children:`centraal, machineleesbaar, betrouwbaar en
consistent`})," beschikbaar stellen."]}),`
`,e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:o,alt:"Flux-AI - de kennislaag voedt via 2 MCP-servers en de Flux-Agent de AI-workflows; validatie koppelt terug naar de kennislaag",width:"900"})}),`
`,e.jsx(n.p,{children:"Het schema leest van boven naar onder, met rechts een lus terug naar boven:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Kennislaag"}),` (sectie 3): 4 geversioneerde bronnen - Figma, web-types, '.llm.md'-bestanden en release notes. AI is
de motor, de kennislaag is de brandstof: verbeteringen in die laag renderen in alle workflows.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ontsluiting"})," (sectie 4): 2 MCP-servers ontsluiten de kennis. De ",e.jsx(n.strong,{children:"Flux-Agent"}),` orkestreert er de workflows mee en
grijpt via Jira en Git in op de bestaande ontwikkelketen.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"AI-workflows"}),` (sectie 5): 6 workflows werken inhoudelijk aan een toepassing, 2 procesworkflows - Jira-ticket en
PR - omkaderen die: het werk start in een ticket en eindigt in een PR, nooit in een losse AI-output.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Terugkoppellus"}),` (sectie 6): een toepassing wordt gevalideerd tegen de norm (die in de kennislaag zit), de
afwijkingen werken terug op de kennislaag. De norm staat niet vast, ze groeit mee met wat de praktijk oplevert.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["Het principe is: ",e.jsx(n.strong,{children:"alle AI-workflows putten uit dezelfde kennislaag"}),`, toepassingen zelf geven die kennislaag mee
vorm (via de validatie).`]}),`
`,e.jsx(n.h2,{id:"3-kennislaag",children:"3. Kennislaag"}),`
`,e.jsx(n.p,{children:`4 bronnen vormen samen de kennislaag. Elke bron is geversioneerd: bij een versie van de bibliotheek hoort 1 eenduidige
set.`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Figma - componenten en patronen:"}),` ontwerpen, redesigns en uitbreidingen ontstaan in Figma. Het is de bron voor 'het
ontwerp zoals het bedoeld is': niet enkel de componenten, ook de UI/UX-patronen (paginastructuur, formulieren,
foutafhandeling, ...). Voor AI-verwerking is het belangrijk dat de Figma-bibliotheek gestructureerd is: componenten in
Figma corresponderen 1-op-1 met componenten in de bibliotheek (`,e.jsx(n.code,{children:"vl"}),`-prefix), met consistente naamgeving en waardes die
overeenkomen met component-attributen. Hoe kwalitatiever die mapping, hoe beter design-naar-code werkt.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Web-types per versie:"}),` dit is de single source of truth voor de API van elke component: attributen, properties,
events, slots, CSS custom properties. Doordat deze per versie beschikbaar zijn, kan AI exact weten wat een component in
versie X kan - en wat er in versie Y veranderd is. Ze zijn al machineleesbaar en worden automatisch gegenereerd. Op
termijn wordt dit een Custom Elements Manifest (zie 11.6).`]}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:".llm.md"})," per versie:"]}),` een machineleesbare beschrijving per versie, specifiek gericht op AI-gebruik. Waar de
web-types het 'wat' van de API beschrijven, beschrijft de `,e.jsx(n.code,{children:".llm.md"}),` het 'hoe': best practices, aanbevolen combinaties
van componenten, patronen met voorbeeldcode, valkuilen. Dit is de bron waaruit de workflows 'nieuwe toepassing' en
'toepassing uitbreiden' hun conventies halen, en tegelijk het document waarin de terugkoppellus (sectie 6)
verbeteringen uit de praktijk vastlegt.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Release notes - evolutie:"}),` waar de web-types het 'wat' per versie beschrijven, beschrijven de release notes het
'waarom' en het 'hoe' van veranderingen: breaking changes, deprecations, migratie-instructies, ... Voor AI-gestuurde
versiemigratie zijn gestructureerde release notes cruciaal. Naast de menselijke release notes gaan we per versie
een machineleesbaar migratiebestand genereren (bv. per (breaking) change: component, oud patroon, nieuw patroon,
code-modificatiehints, ...).`]}),`
`,e.jsx(n.p,{children:`De bronnen zijn niet inwisselbaar: Figma voedt uitsluitend de Figma-MCP, de 3 andere voeden samen de Flux-MCP
(sectie 4). De toepassingen zelf staan niet in de kennislaag: zij zijn het onderwerp van de workflows, niet de bron
(zie 11.9).`}),`
`,e.jsx(n.h2,{id:"4-ontsluiting-2-mcp-servers-en-een-agent",children:"4. Ontsluiting: 2 MCP-servers en een Agent"}),`
`,e.jsx(n.p,{children:"De kennislaag wordt niet via 1 generieke MCP-server ontsloten, maar via 3 componenten met een duidelijke rolverdeling:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Figma-MCP (Code Connect)."}),` Ontsluit het design: welke Figma-component en -variant komt overeen met welke
`,e.jsx(n.code,{children:"vl"}),`-component en welke attributen. Dit is geen eigen ontwikkeling maar bestaande Figma-tooling die we inzetten - in
het schema staat ze daarom lichter weergegeven. Onze inspanning zit in de Code Connect-mapping en in de
Figma-governance (sectie 9).`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Flux-MCP (componentkennis per versie)."})," Eigen bouwwerk. Ontsluit web-types, ",e.jsx(n.code,{children:".llm.md"}),` en release notes per versie.
Typische bevragingen: componentinformatie per versie opvragen, de delta tussen 2 versies berekenen,
migratie-instructies per versie leveren, best practices en patronen aanreiken. Hiermee werkt dezelfde componentkennis
in elke AI-context zonder dat ze per tool gedupliceerd wordt.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Flux-Agent (orkestreert de AI-workflows)."}),` De agent is de client: hij initieert de bevragingen aan beide
MCP-servers, de servers antwoorden - vandaar de dubbele pijlen in het schema. Daarnaast staat de agent in verbinding
met:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Jira-MCP"})," - tickets lezen, aanmaken en opvolgen;"]}),`
`,e.jsxs(n.li,{children:["de ",e.jsx(n.strong,{children:"Git repository"})," - code lezen, branches en PR's aanmaken;"]}),`
`,e.jsxs(n.li,{children:["de ",e.jsx(n.strong,{children:"Claude SDK"})," - het model dat het redeneer- en generatiewerk doet, met per workflow een passend model (zie 11.4)."]}),`
`]}),`
`,e.jsx(n.p,{children:`Dat maakt zichtbaar dat de agent niet enkel kennis raadpleegt, maar ook in de bestaande ontwikkelketen ingrijpt: elk
inhoudelijk werk start vanuit een ticket en eindigt in een PR (zie 5.4).`}),`
`,e.jsx("vl-alert",{icon:"alert-circle",title:"Belangrijk",type:"warning",size:"small",children:e.jsx(n.p,{children:`De MCP-servers voeren geen workflows uit. Ze ontsluiten kennis: de Figma-MCP het design, de Flux-MCP de
componentkennis per versie. De workflows uit sectie 5 worden door de Flux-Agent uitgevoerd. Wordt de Flux-MCP los
van de agent gebruikt (bv. rechtstreeks in Claude Code), dan levert hij enkel kennis, geen gegarandeerde workflow
(zie 11.1).`})}),`
`,e.jsx(n.h2,{id:"5-ai-workflows",children:"5. AI-Workflows"}),`
`,e.jsxs(n.p,{children:[`De Flux-Agent stuurt 8 workflows aan. In het schema staan ze in 2 rijen van 4. De kolommen suggereren een verband, en
dat is er ook, maar het is geen 1-op-1-koppeling. De echte indeling is een andere: `,e.jsx(n.strong,{children:"6 inhoudelijke workflows"}),` die aan
een toepassing werken, en `,e.jsx(n.strong,{children:"2 procesworkflows"})," - Jira-ticket en PR - die elke inhoudelijke workflow omkaderen."]}),`
`,e.jsxs("table",{style:{width:"100%"},children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Groep"}),e.jsx("th",{children:"Workflows"}),e.jsx("th",{children:"Verband"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Bouwen (5.1)"}),e.jsx("td",{children:"Design naar code · Nieuwe toepassing · Toepassing uitbreiden"}),e.jsx("td",{children:"Hetzelfde recept vanuit design en best practices. Design naar code is de bouwsteen van de andere 2."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Onderhouden (5.2)"}),e.jsx("td",{children:"Versiemigratie"}),e.jsx("td",{children:"Staat op zichzelf: geen design, geen functionele wijziging, getriggerd door de release-cadans."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Terugkoppellus (5.3)"}),e.jsx("td",{children:"Toepassing valideren → Toepassing verbeteren"}),e.jsx("td",{children:"Een strikte sequentie: eerst opsporen, dan - na afstemming - wegwerken."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Proces (5.4)"}),e.jsx("td",{children:"Jira-ticket · PR"}),e.jsx("td",{children:"Dwarsdoorsnijdend: elk inhoudelijk werk start in een ticket en eindigt in een PR."})]})]}),`
`,e.jsx(n.p,{children:`Een typische doorloop is dus: ticket → analyse → inhoudelijke workflow → PR → review. Enkel 'toepassing valideren' wijkt
af: dat levert een rapport en tickets op, geen PR. Zo is er nooit losse AI-output: alles landt in de bestaande
ontwikkelketen.`}),`
`,e.jsx(n.h3,{id:"51-bouwen-design-naar-code-nieuwe-toepassing-toepassing-uitbreiden",children:"5.1 Bouwen: design naar code, nieuwe toepassing, toepassing uitbreiden"}),`
`,e.jsxs(n.p,{children:["Drie workflows met hetzelfde recept: de ",e.jsx(n.code,{children:".llm.md"}),` levert de conventies (structuur, patronen, teststrategie), de
web-types de component-API, Figma de vormgeving. Ze verschillen in het vertrekpunt.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Design naar code (basisimplementatie)."}),` Een ontwerper levert een Figma-design op; de agent zet dit om naar een
basisimplementatie met de web-componenten.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Input: het Figma-bestand via de Figma-MCP (Code Connect), plus de web-types en ",e.jsx(n.code,{children:".llm.md"}),` van de doelversie via de
Flux-MCP.`]}),`
`,e.jsxs(n.li,{children:["De agent mapt Figma-componenten op ",e.jsx(n.code,{children:"vl"}),"-componenten en Figma-variants op attributen."]}),`
`,e.jsx(n.li,{children:`Output: een werkende basisimplementatie - bewust "basis": layout, componentkeuze en attributen kloppen; businesslogica
en data-aansluiting zijn een vervolgstap.`}),`
`,e.jsx(n.li,{children:`Randvoorwaarde: design tokens en componentnamen in Figma en in de bibliotheek moeten gealigneerd zijn. Dit is vooral
een inspanning aan de Figma-kant.`}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Nieuwe toepassing (best practices)."}),` Een toepassing van nul opzetten volgens de norm: projectstructuur, routing,
formulier- en foutafhandelingspatronen, teststrategie - inclusief het technisch fundament uit 7.A. Voor de schermen
roept de agent 'design naar code' aan. Hier komen alle bronnen samen; daarom staat deze workflow bewust laat in de
fasering.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Toepassing uitbreiden (aanpassingen)."}),` Hetzelfde recept op een bestaande toepassing: een nieuw scherm, een extra
formulier, een aangepaste flow. Ook hier geldt: eerst in Figma, dan via de agent in de code (zie 7.C.). Zo groeit een
bestaande toepassing bij elke uitbreiding naar de norm toe in plaats van ervan weg.`]}),`
`,e.jsx(n.h3,{id:"52-onderhouden-versiemigratie",children:"5.2 Onderhouden: versiemigratie"}),`
`,e.jsx(n.p,{children:`Toepassingen die op een oudere versie van de bibliotheek zitten, worden met AI naar een hogere versie gebracht. Deze
workflow staat op zichzelf: er is geen design nodig, er is geen functionele wijziging, en de trigger is de
release-cadans van de bibliotheek, niet een vraag van een team.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Input: de codebase (Git), de web-types van bron- en doelversie en de release notes / migratiebestanden van alle
tussenliggende versies (Flux-MCP).`}),`
`,e.jsx(n.li,{children:`De agent berekent de delta tussen de 2 versies (verwijderde attributen, hernoemde events, gewijzigde slots) en past
de code systematisch aan.`}),`
`,e.jsx(n.li,{children:`Verificatie: de bestaande testen van de toepassing bevestigen dat het gedrag ongewijzigd is. Zonder testen is migratie
giswerk; met testen is het een gesloten lus (zie 7.A.).`}),`
`,e.jsx(n.li,{children:`Best in kleine, verifieerbare cycli: analyse en verificatie per versiestap, het effectieve bouwen in 1 beweging
(zie 11.4).`}),`
`]}),`
`,e.jsx(n.h3,{id:"53-terugkoppellus-toepassing-valideren-en-verbeteren",children:"5.3 Terugkoppellus: toepassing valideren en verbeteren"}),`
`,e.jsx(n.p,{children:`Dit paar hoort wél strikt samen: valideren komt eerst, verbeteren volgt - met een menselijke beslissing tussenin
(sectie 6).`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Toepassing valideren (afwijkingen opsporen)."}),` De agent legt een toepassing naast de norm uit de kennislaag - de
patronen in Figma, de best practices in `,e.jsx(n.code,{children:".llm.md"}),`, de component-API in de web-types - en rapporteert waar ze afwijkt:
lokale varianten van componenten, eigen formulier- of foutafhandelingspatronen, verouderd componentgebruik,
toegankelijkheidsproblemen. Output: een gestructureerd afwijkingenrapport, nog geen aanpassing. De afwijkingen die de
toepassing moet volgen, worden Jira-tickets (5.4).`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Toepassing verbeteren (afwijkingen wegwerken)."}),` Na afstemming (zie 7.B.) werkt de agent de afwijkingen weg die de
toepassing moet volgen. Raakt een afwijking het design, dan loopt dit via Figma en 'design naar code' (5.1). De
e2e-testen bewijzen welk gedrag ongewijzigd blijft en welk gedrag bewust verandert. Ook dit mondt uit in een PR.`]}),`
`,e.jsx(n.p,{children:`Niet elke afwijking is een fout: sommige blijken beter dan de norm. Die gaan niet naar 'verbeteren' maar naar de
kennislaag - dat is de andere helft van de lus.`}),`
`,e.jsx(n.h3,{id:"54-proces-jira-ticket-en-pr",children:"5.4 Proces: Jira-ticket en PR"}),`
`,e.jsx(n.p,{children:`De 2 overige workflows werken niet aan een toepassing, maar regelen hoe de agent in de ontwikkelketen zit. Ze horen bij
álle inhoudelijke workflows, niet bij 1 kolom uit het schema.`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Jira-ticket (analyse / ontwikkeling)."}),` Het startpunt. De agent leest een ticket en maakt eerst de analyse: wat wordt
er gevraagd, welke schermen en componenten zijn betrokken, welke inhoudelijke workflow(s) zijn nodig, welke vragen
staan open. Die analyse landt als commentaar op het ticket, zodat mens en agent elkaar daar treffen. Na akkoord volgt
de ontwikkeling: de agent voert de betrokken workflow uit in een branch die aan het ticket gelinkt is. Omgekeerd maakt
de agent ook zelf tickets aan, bv. 1 per afwijking uit een validatie (5.3).`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR (aanmaken / review)."}),` Het eindpunt. Elke codewijziging - een basisimplementatie, een migratie, een uitbreiding,
een verbetering - mondt uit in een PR die de agent aanmaakt, met de analyse als beschrijving en de testresultaten als
bewijs. Niets gaat rechtstreeks naar de hoofdbranch. Review is de 2e helft: de agent reviewt PR's - van mensen of van
zichzelf - tegen de norm uit de kennislaag, als voorbereiding op de menselijke review die de poort blijft (sectie 9).`]}),`
`,e.jsx(n.h2,{id:"6-de-terugkoppellus",children:"6. De Terugkoppellus"}),`
`,e.jsxs(n.p,{children:["Rechtsboven in het schema staat de ",e.jsx(n.strong,{children:"toepassing met haar afwijkingen"}),`: het resultaat zoals het in werkelijkheid is,
niet zoals de norm het voorschrijft. 2 bewegingen verbinden dat met de rest:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Validatie"})," - de workflow 'Toepassing valideren' (5.3) bepaalt waar een toepassing afwijkt van de norm."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Beïnvloeden"})," - die vaststellingen werken terug op Figma, web-types en ",e.jsx(n.code,{children:".llm.md"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Dat is de kern van de strategie: ",e.jsx(n.strong,{children:"de norm staat niet vast, maar groeit mee met wat de praktijk oplevert"}),`. Wat in een
toepassing beter blijkt, wordt opgenomen in de kennisbronnen en is daarmee het vertrekpunt voor de volgende toepassing.`]}),`
`,e.jsx(n.p,{children:"Per afwijking zijn er dus 2 uitkomsten:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"De toepassing volgt de norm"})," - de afwijking wordt weggewerkt ('Toepassing verbeteren', 5.3)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"De norm volgt de toepassing"}),` - het patroon uit de toepassing is beter of vult een gat: het wordt in Figma als
patroon opgenomen, in de `,e.jsx(n.code,{children:".llm.md"}),` als best practice beschreven en, waar het de component-API raakt, in de
bibliotheek (en dus in de web-types) doorgevoerd.`]}),`
`]}),`
`,e.jsx(n.p,{children:`Die keuze is geen AI-beslissing. De agent stelt vast en stelt voor; team, ontwerper en bibliotheekbeheer beslissen
(zie 9, 'governance van de norm'). Maar eens beslist, is het doorvoeren wél AI-werk - in de toepassing (5.3) of in de
kennislaag.`}),`
`,e.jsx(n.p,{children:`De lus vervangt wat in de eerste versie van dit document 'modeltoepassingen' heette (zie 11.9): niet een aparte
voorbeeldtoepassing is de bron van verbetering, maar elke echte toepassing, telkens ze gevalideerd wordt. Het vliegwiel
blijft: elke gevalideerde toepassing maakt de kennislaag - en dus elke volgende workflow - beter.`}),`
`,e.jsx(n.h2,{id:"7-eisen-aan-een-toepassing",children:"7. Eisen aan een Toepassing"}),`
`,e.jsxs(n.p,{children:["De workflows werken op echte toepassingen. Om dat te kunnen moet een toepassing aan eisen op ",e.jsx(n.strong,{children:"2 niveaus"})," voldoen:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"A. Technisch fundament"})," (4 eisen) - dit maakt de toepassing bruikbaar als ",e.jsx(n.em,{children:"werkomgeving"}),` voor de Flux-Agent. Deze
eisen zitten volledig binnen de codebase: ze veranderen niets aan wat de eindgebruiker ziet of doet.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"B. Uniforme UI/UX"}),` (5e eis) - de toepassing volgt de norm uit de kennislaag. Dit is het eigenlijke doel uit
sectie 1.`]}),`
`]}),`
`,e.jsx(n.p,{children:`Het onderscheid is bewust. A. kan gewoon doorgevoerd worden: er is geen zichtbare impact, er is dus geen afstemming
nodig. B. heeft per definitie visuele en mogelijks functionele impact op een bestaande toepassing - dit vraagt overleg
met team en business. Door beide apart op te nemen brengt A. ons al een flink stuk in de juiste richting: een
toepassing op niveau A. kan gemigreerd, gevalideerd en uitgebreid worden. B. is nadien de stap die het einddoel
effectief bereikt. Onder C. wordt verduidelijkt hoe we van A. naar B. gaan.`}),`
`,e.jsx(n.h3,{id:"a-technisch-fundament",children:"A. Technisch Fundament"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"4 eisen. Elke eis heeft naast een menselijke ook een expliciete AI-rationale:"})}),`
`,e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:d,alt:"Flux-AI - technisch fundament: 4 eisen maken een toepassing een werkomgeving voor AI",width:"770"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Specifieke versie van de web-componenten."}),` De applicatie pint 1 versie. Dat maakt eenduidig tegen welke web-types en
`,e.jsx(n.code,{children:".llm.md"}),` de agent werkt ("zo werkt het in v2.17") en het is de voorwaarde voor de migratie-workflow: van 1 gekende
versie naar 1 gekende versie, met de release notes ertussen.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Frontend standalone opstartbaar."})," 1 commando (",e.jsx(n.code,{children:"pnpm install && pnpm start"}),`) en de app draait. Voor een AI-agent is
dit essentieel: de agent moet de app zelfstandig kunnen starten, bekijken en testen zonder toegang tot interne
infrastructuur, VPN's of credentials.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Backend uitgemockt, puur Node."}),` Geen Java-runtime, geen databank, geen externe afhankelijkheden. Mocks (bv. MSW of
een lichte Node-mockserver) maken het gedrag deterministisch: dezelfde input geeft altijd dezelfde output. Dat is de
voorwaarde voor betrouwbare, herhaalbare verificatie - en het houdt de drempel laag voor zowel ontwikkelaars als
agents.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Uitgebreide e2e-testen."}),` De e2e-suite is het gedragscontract van de toepassing. Voor AI-werk is dit de belangrijkste
eis van de 4: het is de feedbackloop die AI-output verifieerbaar maakt. Na een migratie, een uitbreiding of een
verbetering geldt: testen groen = gedrag behouden. Zonder deze lus blijft elke AI-wijziging een manuele review-last;
met deze lus kan een agent zelfstandig itereren tot het resultaat klopt.`]}),`
`,e.jsx("vl-alert",{icon:"info-circle",title:"Samengevat",type:"success",size:"small",children:e.jsxs(n.p,{children:["Deze 4 eisen zijn geen documentatie-eisen maar ",e.jsx(n.strong,{children:"agent-enablement-eisen"}),`. Ze maken van een toepassing een omgeving
waarin de Flux-Agent autonoom en veilig kan werken.`]})}),`
`,e.jsx(n.h3,{id:"b-uniforme-uiux",children:"B. Uniforme UI/UX"}),`
`,e.jsxs(n.p,{children:["Waar A. bepaalt ",e.jsx(n.strong,{children:"of"})," een agent aan een toepassing kan werken, bepaalt B. ",e.jsx(n.strong,{children:"waarnaar"}),` de toepassing zich richt: de
norm uit de kennislaag. Een toepassing die aan A. voldoet maar eigen navigatie, eigen formulier-patronen en eigen
foutafhandeling heeft, is een uitstekende werkomgeving voor een agent - maar precies de versnippering uit sectie 1.`]}),`
`,e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:l,alt:"Flux-AI - uniforme toepassing: voldoet aan de 4 technische eisen en aan de uniforme UI/UX",width:"770"})}),`
`,e.jsx(n.p,{children:"Concreet betekent uniforme UI/UX:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Uniforme paginastructuur en navigatie"})," - dezelfde layout, dezelfde plaats voor titel, acties, filters en inhoud."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Uniforme interactiepatronen"}),` - formulieren, validatie en foutmeldingen, laad- en lege toestanden, bevestigingen,
tabellen en paginering volgen 1 patroon.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Componenten uit de bibliotheek in plaats van lokale varianten"}),` - geen eigen knop, eigen modal of eigen datumveld
naast de `,e.jsx(n.code,{children:"vl"}),"-component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Consistente terminologie en 'tone-of-voice'"})," in labels, meldingen en hulpteksten."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Toegankelijkheid (minimaal WCAG 2.2 AA, zie 11.8)"}),` als onderdeel van het patroon, niet als losse controle
achteraf.`]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Waar de norm staat."}),` De norm is geen apart document maar zit in de kennislaag: de patronen in Figma tonen hoe het
eruitziet, de `,e.jsx(n.code,{children:".llm.md"}),` beschrijft hoe je het bouwt, de web-types zeggen welke componenten en attributen daarbij horen.
De workflow 'Toepassing valideren' (5.3) toetst een toepassing daar automatisch tegen af.`]}),`
`,e.jsxs(n.p,{children:[`AI-rationale: few-shot voorbeelden werken enkel als de voorbeelden onderling consistent zijn (zie 11.5). Toepassingen
met 5 verschillende formulier-patronen leren een agent geen patroon aan maar ruis; 1 patroon in Figma en `,e.jsx(n.code,{children:".llm.md"}),`,
overal toegepast, maakt van dat patroon de vanzelfsprekende output. B. is dus niet enkel een UX-doel, het is wat de
workflows 'nieuwe toepassing' en 'toepassing uitbreiden' (5.1) waardevol maakt.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Waarom dit apart gepland wordt."}),` Een bestaande toepassing aligneren op de norm wijzigt schermen die mensen dagelijks
gebruiken - soms ook de manier waarop een taak verloopt. Dat is geen puur technische beslissing. De aanpak is daarom
gefaseerd:`]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Norm vastleggen"})," - welke layout en welke patronen gelden als de standaard, in Figma en ",e.jsx(n.code,{children:".llm.md"}),`. Dit is 1
beslissing op bibliotheek-niveau, niet per toepassing.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Valideren per toepassing"}),` - waar wijkt de toepassing af van de norm (workflow 5.3). Hier is AI goed in:
afwijkingen detecteren en het aanpassingsvoorstel opstellen.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Afstemmen met team en business"}),` - per afwijking: volgt de toepassing de norm, of volgt de norm de toepassing
(sectie 6)? Plus impact, prioriteit en timing.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Doorvoeren na akkoord"}),` - in de toepassing ('Toepassing verbeteren') en/of in de kennislaag. De e2e-suite uit A.
bewijst daarbij welk gedrag ongewijzigd blijft en welk gedrag bewust verandert. A. maakt B. dus behapbaar.`]}),`
`]}),`
`,e.jsx("vl-alert",{icon:"alert-circle",title:"Aandachtspunt",type:"warning",size:"small",children:e.jsx(n.p,{children:`A. zonder B. levert een uitstekend platform voor AI-agents op, maar nog geen uniforme toepassingen. B. zonder A. is
niet verifieerbaar en dus niet veilig door te voeren. De volgorde is A. eerst, B. daarna - op voorwaarde dat B. niet
uit beeld verdwijnt, daar zit het doel.`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"c-uniformisering---van-a-naar-b",children:"C. Uniformisering - van A. naar B."}),`
`,e.jsxs(n.p,{children:[`Bestaande toepassingen worden op een uniforme manier naar niveau A. gebracht. Dit is deels handwerk, deels
AI-ondersteund (backend uitmocken, testen genereren, structuur aligneren op de best practices uit `,e.jsx(n.code,{children:".llm.md"}),")."]}),`
`,e.jsxs(n.p,{children:[`Om (initieel) een uniform design te krijgen - met de Vlaamse huisstijl als basis - volgen we onderstaande opzet. We
zorgen telkens dat het design in Figma up-to-date is: van de toepassing wordt (met AI) een as-is design getrokken, over
verschillende toepassingen heen wordt dat in Figma afgestemd tot 1 uniform design, en dat wordt nadien via de agent
doorgevoerd in de toepassing. Zo staan alle designs op 1 plaats (Figma), wat uniformisering veel behapbaarder maakt.
Dit is de terugkoppellus (sectie 6) in de praktijk: de validatie levert de afwijkingen, Figma is de plek waar norm en
toepassing samenkomen, 'Toepassing verbeteren' voert het door.`,e.jsx("br",{}),`
Dezelfde aanpak wordt gevolgd bij aanpassingen of uitbreidingen aan de frontends: eerst in Figma, dan in de
toepassing.`]}),`
`,e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:g,alt:"Flux-AI - uniformisering: van technisch fundament via Figma naar uniforme toepassing",width:"800"})}),`
`,e.jsx(n.h2,{id:"8-fasering",children:"8. Fasering"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Fase 1 - Fundament."})," De Flux-MCP bouwen en voeden: web-types per versie, een ",e.jsx(n.code,{children:".llm.md"}),` per versie en een
machineleesbaar migratiebestand naast de menselijke release notes. De Figma-MCP met Code Connect activeren op de
Figma-bibliotheek. De Flux-Agent opzetten met zijn koppelingen (Jira-MCP, Git, Claude SDK) en een eerste workflow. Het
technisch fundament (7.A.) formeel vastleggen als contract (template-repo met de 4 eisen ingebouwd). Parallel en
zonder afhankelijkheid: de UI/UX-norm (7.B.) beschrijven in Figma en `,e.jsx(n.code,{children:".llm.md"}),", zodat er iets is om tegen te valideren."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Fase 2 - Eerste bewijzen."}),` Een bestaande toepassing naar niveau 7.A. brengen. Daarop de versiemigratie-workflow
activeren (vN → vN+1, PR met e2e-verificatie) en een eerste validatie draaien (afwijkingenrapport tegenover de norm).
Parallel: Figma-bibliotheek aligneren op de componentbibliotheek en een eerste design-naar-code-experiment draaien op
1 scherm, vanuit een Jira-ticket.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Fase 3 - Opschalen."}),` Meer toepassingen op niveau 7.A.; migratie-workflow uitrollen naar teams die op oudere versies
zitten; design-naar-code opnemen in het standaard ontwerpproces. Vanaf hier draait de terugkoppellus: validatie per
toepassing, afstemming met team en business en - na akkoord - 'Toepassing verbeteren' of de norm bijstellen. Hier
start 7.B. effectief.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Fase 4 - Genereren."})," Nieuwe toepassingen en uitbreidingen opzetten op basis van ",e.jsx(n.code,{children:".llm.md"}),` + design + web-types. Deze
fase komt bewust laatst: ze heeft een norm nodig die door de lus al enkele keren bijgesteld en dus gerijpt is.`]}),`
`,e.jsx(n.h2,{id:"9-randvoorwaarden-en-risicos",children:"9. Randvoorwaarden en Risico's"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Kwaliteit van de kennislaag is bepalend."})," Onvolledige web-types, een gedateerde ",e.jsx(n.code,{children:".llm.md"}),` of vage release notes
vertalen zich direct in slechte AI-output. Documentatie-discipline wordt een productie-eis: elke release levert ook
zijn `,e.jsx(n.code,{children:".llm.md"})," en migratiebestand op."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Figma-governance."}),` Design-naar-code staat of valt met een strak beheerde Figma-bibliotheek en een onderhouden
Code Connect-mapping. Zonder 1-op-1 mapping tussen Figma-componenten en `,e.jsx(n.code,{children:"vl"}),`-componenten levert AI generieke HTML in
plaats van componentgebruik.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Governance van de norm."}),` De terugkoppellus maakt de norm beweeglijk. Dat is de bedoeling, maar zonder eigenaar
wordt het drift: elke afwijking die 'ook wel goed' is, sluipt de norm in. Er is 1 plek nodig waar beslist wordt of de
toepassing de norm volgt of omgekeerd, met ontwerper en bibliotheekbeheer aan tafel.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Rechten en reikwijdte van de agent."}),` De Flux-Agent schrijft in Jira en Git. Dat vraagt duidelijke afspraken: welke
acties mag hij autonoom zetten (analyse, branch, PR) en welke niet (mergen, tickets sluiten). De PR-review is de
poort.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Review blijft nodig."}),` AI-output gaat door dezelfde review- en kwaliteitspoorten als menselijke code. De e2e-testen
verlagen de review-last, maar vervangen hem niet - zeker niet voor toegankelijkheid (WCAG 2.2 AA), waar automatische
verificatie tekortschiet.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Versnippering vermijden."}),` Alle AI-workflows via de Flux-Agent en dezelfde MCP-ontsluiting laten lopen voorkomt dat
elke tool zijn eigen (verouderende) kopie van de componentkennis meesleept.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Toegang tot het model."}),` Er is vandaag geen business-account voor Claude (zie 11.1). Zolang dat zo is, kan de
Flux-Agent geen gedeelde service zijn.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Draagvlak voor UI/UX-wijzigingen (7.B.)."}),` Dit is het enige deel met zichtbare impact op de eindgebruiker. Het
risico is niet technisch maar organisatorisch: wordt 7.B. niet doorgevoerd, dan stopt het traject op een uitstekend
agent-platform met nog steeds niet-uniforme toepassingen - het probleem uit sectie 1.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"10-conclusie",children:"10. Conclusie"}),`
`,e.jsxs(n.p,{children:[`De 8 workflows - van design naar code tot valideren en verbeteren - zijn geen losse experimenten maar 1 systeem met een
gedeelde kern: 1 kennislaag, ontsloten via 2 MCP-servers, aangestuurd door 1 agent. De volgorde van aanpak volgt
daaruit vanzelf: eerst de kennislaag (web-types, `,e.jsx(n.code,{children:".llm.md"}),`, release notes, Figma), dan de ontsluiting (Flux-MCP,
Figma-MCP, Flux-Agent), dan de workflows in oplopende volgorde. De terugkoppellus is het vliegwiel: elke toepassing
die gevalideerd wordt, scherpt de norm aan en maakt de AI-ondersteuning voor de volgende beter.`]}),`
`,e.jsx(n.p,{children:`Het onderscheid tussen 7.A. en 7.B. bepaalt het tempo. 7.A. - het technisch fundament - kan meteen starten; het levert
op zichzelf al een grote sprong: verifieerbare, migreerbare, agent-vriendelijke toepassingen. 7.B. - de uniforme
UI/UX - is het eigenlijke doel uit sectie 1 en vraagt afstemming met team en business, per toepassing en per
afwijking. Het is dus een aparte beslissing en geen automatisch gevolg van 7.A. Het traject is pas geslaagd wanneer
beide zijn doorgevoerd.`}),`
`,e.jsx(n.h2,{id:"11-faq",children:"11. FAQ"}),`
`,e.jsx(n.p,{children:"Deze sectie bundelt de vragen / antwoorden die bij reviews van dit document gesteld werden."}),`
`,e.jsx(n.h3,{id:"111-is-de-afnemer-het-stuur",children:"11.1 Is de afnemer het stuur?"}),`
`,e.jsxs(n.p,{children:['Nee. "AI is de motor, de kennislaag is de brandstof" klopt, maar de afnemer stuurt niet: het doel is de uitkomst ',e.jsx(n.strong,{children:`zo
deterministisch als mogelijk`})," te maken. De use-case bepaalt het resultaat, niet wie hem uitvoert:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"bij een migratie van v2.19 naar v2.33 mag het niet uitmaken wie die migratie doet"}),`
`,e.jsx(n.li,{children:`bij de andere use-cases zijn er een design en een functionele analyse, die moeten de uitkomst bepalen - opnieuw
niet wie ze uitvoert`}),`
`]}),`
`,e.jsxs(n.p,{children:["Om dat te bereiken bieden we bewust ",e.jsx(n.strong,{children:"geen MCP-server aan de afnemer"}),` aan. De MCP-servers ontsluiten de kennislaag naar
de Flux-Agent (sectie 4), ze zijn geen vrij te bedienen product. De Flux-Agent is de service waar je acties initieert:
vooraf bepaalde workflows, met de juiste integraties en een specifiek model per use-case, maar zonder vrije input
(prompting).`]}),`
`,e.jsx("vl-alert",{icon:"alert-circle",title:"Randvoorwaarde",type:"warning",size:"small",children:e.jsx(n.p,{children:`Er is vandaag geen business-account voor Claude. Zolang dat zo is, moet iemand zijn persoonlijk account achter de
agent steken - dat staat een gedeelde service in de weg.`})}),`
`,e.jsx(n.p,{children:`De eerste opzet van de Flux-Agent lost dat op door een Electron-app met een TUI aan te bieden. Daarin kan je de vooraf
bepaalde workflows uitvoeren, met daarnaast redelijk uitgebreide configuratiemogelijkheden (model, effort, ...) - maar
je gebruikt je eigen account. De afnemer is daar dus wel de initiator, maar heeft geen vrije input (prompting)
mogelijkheden.`}),`
`,e.jsx(n.h3,{id:"112-evolueren-ook-de-uiux-patronen-niet",children:"11.2 Evolueren ook de UI/UX-patronen niet?"}),`
`,e.jsxs(n.p,{children:[`UI/UX-conventies zullen inderdaad wijzigen met verloop van tijd. Dat is precies waarvoor de terugkoppellus (sectie 6)
dient: de validatie brengt aan het licht waar de praktijk van de norm afwijkt, en waar de praktijk beter is, wordt de
norm bijgesteld. Merk op dat Storybook nergens in de kennislaag (sectie 3) staat: dat is bewust. Alle UI/UX-kennis komt
uit Figma en de `,e.jsx(n.code,{children:".llm.md"}),`. Bij een versie van onze bibliotheek hoort dus ook een eenduidig Figma-bestand met de
designpatronen en een `,e.jsx(n.code,{children:".llm.md"})," met de best practices."]}),`
`,e.jsxs(n.p,{children:["Het gevolg is belangrijk: het stroomlijnen van UI/UX gebeurt ",e.jsx(n.strong,{children:"niet in de toepassing"}),` maar in Figma. Van een toepassing
op niveau 7.A. wordt (met AI) een as-is Figma-design getrokken, en over verschillende toepassingen heen wordt in Figma
een consistent to-be design gemaakt. Eens dat afgestemd is - ook met de menselijke stakeholders - voeren we het via de
agent door, en volgt het dus gewoon de workflows 'Design naar code' (5.1) en 'Toepassing verbeteren' (5.3). Het schema
in 7.C. toont die lus.`]}),`
`,e.jsx(n.p,{children:`Leidt een 2e toepassing door een nieuwe use-case tot een andere beslissing, dan gebeurt die discussie dus in Figma, op
het niveau van het patroon. De eerder aangepakte toepassing volgt daarna langs dezelfde weg (Figma → code), niet via
een aparte manuele correctieronde.`}),`
`,e.jsx(n.h3,{id:"113-met-welke-toepassingen-starten-we",children:"11.3 Met welke toepassingen starten we?"}),`
`,e.jsx(n.p,{children:`In het begin zijn er nog geen patronen gedistilleerd: die ontstaan pas nadat we de oefening over verschillende
toepassingen heen gemaakt hebben. Het plan van aanpak is:`}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Idealiter nemen we van elk team 1 toepassing uit ",e.jsx(n.strong,{children:"categorie B"}),` (te verbeteren, maar geen tijd of budget). Net door
die categorie hebben we marge in tijd: er werkt niemand aan, dus er is geen drift.`]}),`
`,e.jsx(n.li,{children:`Praktisch: 1 toepassing van 3 verschillende teams = 3 toepassingen. Die brengen we naar niveau 7.A. Dat afgestemd
krijgen met 3 teams zal al lastig zijn, maar moet wel lukken.`}),`
`,e.jsxs(n.li,{children:[`Nadien die 3 toepassingen valideren en in Figma steken, ze daar stroomlijnen tot een uniform design, en dat
doorvoeren in de toepassingen (niveau 7.B.). De patronen die daaruit komen, vormen de eerste echte norm in Figma en
`,e.jsx(n.code,{children:".llm.md"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:"Nadien betrekken we andere teams en andere projecten en itereren we verder via de terugkoppellus."}),`
`,e.jsx(n.h3,{id:"114-updaten-we-onze-documentatie-bij-elke-migratie",children:"11.4 Updaten we onze documentatie bij elke migratie?"}),`
`,e.jsx(n.p,{children:`Bij elke release krijgen we een eerder technisch, AI-gegenereerd document op basis van de commits en de release notes,
met het verschil tussen 2 opeenvolgende versies: hoe ga je van v2.20 naar v2.21, van v2.21 naar v2.22, van v2.22 naar
v2.23, ... .`}),`
`,e.jsx(n.p,{children:"We kunnen dat telkens omzetten naar een menselijker leesbaar document in Storybook, maar:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"het is niet de bedoeling zo een migratie dan nog menselijk te doen"}),`
`,e.jsx(n.li,{children:"het zou bij elke release een extra migratiedocument opleveren"}),`
`]}),`
`,e.jsx(n.p,{children:`AI-gewijs is de bedoeling anders. Fable maakt bv. een analyse van hoe te migreren van v2.20 naar v2.27 voor een concrete
toepassing. Fable houdt daarbij rekening met alle vX → vX+1 informatie, maar schrijft 1 migratiedocument. De feitelijke
migratie laat je dan bv. door Opus doen.`}),`
`,e.jsx(n.p,{children:`Expliciet al die tussenliggende versies laten bouwen duurt langer, is duurder en heeft quasi geen meerwaarde. Enkel bij
een grote sprong - bv. van v2.7 naar v3.2 - doen we 1 of 2 tussenstappen (met AI), om de overstap van v2 naar v3 beter
te kunnen controleren. Dit verfijnt het item "best in kleine, verifieerbare cycli" uit 5.2: klein slaat op de analyse-
en verificatie-cycli, niet op het effectief bouwen van elke tussenversie.`}),`
`,e.jsx(n.h3,{id:"115-wat-zijn-few-shot-voorbeelden",children:"11.5 Wat zijn few-shot voorbeelden?"}),`
`,e.jsxs(n.p,{children:[`Few-shot betekent letterlijk "met een paar voorbeelden": meer dan 1 voorbeeld, in tegenstelling tot one-shot waar het
model 1 voorbeeld krijgt. Concreet: bv. 3 codevoorbeelden in de `,e.jsx(n.code,{children:".llm.md"}),` die hetzelfde formulier-patroon tonen, of 3
toepassingen die het volgen. Dat verklaart meteen het belang van eis B. (uniforme UI/UX): bij few-shot 'afwijkende
voorbeelden' leert een agent geen patroon aan, maar ruis.`]}),`
`,e.jsx(n.h3,{id:"116-migreren-we-naar-custom-elements-manifest",children:"11.6 Migreren we naar Custom Elements Manifest?"}),`
`,e.jsx(n.p,{children:`Ja, dat zal moeten. Vandaag genereren wij web-types, terwijl DV een CEM levert. Zodra we hun componenten beginnen te
integreren, moeten we kiezen - en CEM is dan de logische keuze. De Flux-MCP vangt dat op: de workflows bevragen
'componentkennis per versie', niet een bestandsformaat. Dus: momenteel is het web-types, op termijn CEM, zonder impact
op de workflows.`}),`
`,e.jsx(n.h3,{id:"117-is-er-vendor-lock-in",children:"11.7 Is er vendor lock-in?"}),`
`,e.jsxs(n.p,{children:["De 2 vendor-afhankelijkheden zijn ",e.jsx(n.strong,{children:"Anthropic (Claude) en Figma"}),". Beide zijn een bewuste keuze, beide zijn vervangbaar."]}),`
`,e.jsx(n.p,{children:`Op zich is een MCP-server AI-tool-agnostisch: de Flux-MCP kan door elke MCP-client bevraagd worden. De Flux-Agent
gebruikt de Claude SDK en om het niet te moeilijk te maken zullen we keuzes maken specifiek voor die tooling. Met
beperkte aanpassingen kunnen we de agent echter op een ander model laten draaien.`}),`
`,e.jsxs(n.p,{children:[`Figma is de plaats waar onze designs samenkomen en waar nieuwe of aangepaste designs ontstaan. Een volwaardig
alternatief is er momenteel niet. Ook hier maken we specifieke keuzes die initieel enkel binnen Figma zullen werken
(Figma-MCP, Code Connect). Figma wordt - voor designs - onze source-of-truth. Eens er voldoende uniforme toepassingen
zijn, kunnen we - op basis van al het geproduceerde - via AI die design-basis opnieuw produceren in een andere
tool.`,e.jsx("br",{}),`
In het begin, voordat er voldoende kwaliteit werd opgebouwd, is er inderdaad wel een Figma lock-in.`]}),`
`,e.jsx(n.h3,{id:"118-wcag-21-of-wcag-22",children:"11.8 WCAG 2.1 of WCAG 2.2?"}),`
`,e.jsxs(n.p,{children:["Wettelijk is WCAG 2.1 AA het minimum. Praktisch hanteren we minimaal ",e.jsx(n.strong,{children:"WCAG 2.2 AA"}),"."]}),`
`,e.jsx(n.h3,{id:"119-waarom-spreken-we-niet-meer-over-modeltoepassingen",children:"11.9 Waarom spreken we niet meer over modeltoepassingen?"}),`
`,e.jsx(n.p,{children:`De eerste versie van dit document had 'modeltoepassingen' als centraal begrip: aparte voorbeeldtoepassingen die als 4e
bron in de kennislaag zaten en waaruit de workflow 'nieuwe toepassing' zijn voorbeelden haalde. Dat begrip is
vervallen.`}),`
`,e.jsxs(n.p,{children:[`De rol is overgenomen door de terugkoppellus (sectie 6): niet een aparte voorbeeldtoepassing is de bron van
verbetering, maar elke echte toepassing, telkens ze gevalideerd wordt. Wat er goed in blijkt, gaat naar Figma en
`,e.jsx(n.code,{children:".llm.md"}),` - dáár zitten nu de voorbeelden en best practices, geversioneerd en voor alle workflows tegelijk
beschikbaar. Wat er afwijkt, wordt weggewerkt.`]}),`
`,e.jsx(n.p,{children:`Wat overblijft van het begrip, zijn de eisen (sectie 7): het technisch fundament (A.) is nodig om een toepassing door de
agent te laten bewerken, de uniforme UI/UX (B.) is het doel. Een toepassing die aan beide voldoet, is gewoon een
uniforme toepassing - geen model voor de andere. De norm staat in de kennislaag, niet in een toepassing.`})]})}function p(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{p as default};
