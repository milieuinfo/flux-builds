import{u as t,j as e,M as r}from"./iframe-DynOw9qF.js";import"./preload-helper-D9Z9MdNV.js";const o=""+new URL("flux-ai-doel-1JSb8qar.png",import.meta.url).href,a=""+new URL("flux-ai-concept-DTYrXuIR.png",import.meta.url).href,d=""+new URL("flux-ai-modeltoepassing-C4ejuOPu.png",import.meta.url).href;function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Planning/Flux-AI - Frontend Uniformisering"}),`
`,e.jsx(n.h1,{id:"flux-ai---frontend-uniformisering-via-ai",children:"Flux-AI - Frontend Uniformisering via AI"}),`
`,e.jsx(n.h2,{id:"0-inhoudstafel",children:"0. Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#1-doel",children:"1. Doel"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#2-concept",children:"2. Concept"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#3-kennislaag",children:"3. Kennislaag"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#4-ai-workflows",children:"4. AI-Workflows"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#5-modeltoepassingen-als-voorbeeld",children:"5. Modeltoepassingen als Voorbeeld"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#6-ontsluiting-mcp-als-toegangspoort",children:"6. Ontsluiting: MCP als Toegangspoort"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#7-fasering",children:"7. Fasering"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#8-randvoorwaarden-en-risicos",children:"8. Randvoorwaarden en Risico's"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#9-conclusie",children:"9. Conclusie"})}),`
`]}),`
`,e.jsx(n.h2,{id:"1-doel",children:"1. Doel"}),`
`,e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:o,alt:"Flux-AI - niet-uniforme toepassingen",width:"700"})}),`
`,e.jsx(n.h2,{id:"2-concept",children:"2. Concept"}),`
`,e.jsxs(n.p,{children:[`Flux heeft als doel frontend-ontwikkeling te ondersteunen en te vergemakkelijken via de web-componenten-bibliotheek. AI
kan die ondersteuning `,e.jsx(n.strong,{children:`fel verbeteren, de ontwikkeling versnellen, routine taken automatiseren en de kwaliteit
verhogen`}),". Om dit door te voeren moeten we de kennis over de bibliotheek ",e.jsx(n.strong,{children:`centraal, machineleesbaar, betrouwbaar en
consistent`})," beschikbaar stellen."]}),`
`,e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:a,alt:"Flux-AI - de kennislaag voedt via de MCP-server de AI-workflows",width:"750"})}),`
`,e.jsxs(n.p,{children:["De toekomstige strategie steunt daarom op het principe: ",e.jsx(n.strong,{children:"alle AI-workflows putten uit dezelfde kennislaag"}),` - Figma
designs,  web-types / Custom Elements Manifest per versie, release notes, en een set uniforme modeltoepassingen. AI is
de motor, de kennislaag is de brandstof. Verbeteringen in die laag rendeert in elke workflow tegelijk.`]}),`
`,e.jsx(n.p,{children:`De kennislaag voedt via de MCP-ontsluiting de AI-workflows. De opmerking onderaan het schema toont het vliegwiel:
toepassingen die uit de workflows voortkomen, worden na uniformisering zelf nieuwe modeltoepassingen en versterken zo
de kennislaag.`}),`
`,e.jsx(n.h2,{id:"3-kennislaag",children:"3. Kennislaag"}),`
`,e.jsx(n.p,{children:"4 bronnen vormen samen de kennislaag:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Figma designs."}),` Ontwerpen, redesigns en uitbreidingen ontstaan in Figma. Voor AI-verwerking is het belangrijk dat de
Figma-bibliotheek gestructureerd is: componenten in Figma corresponderen 1-op-1 met componenten in de bibliotheek
(`,e.jsx(n.code,{children:"vl"}),`-prefix), met consistente naamgeving en waardes die overeenkomen met component-attributen. Hoe kwalitatiever die
mapping, hoe beter design-naar-code werkt.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Web-types / CEM per versie:"}),` dit is de single source of truth voor de API van elke component: attributen, properties,
events, slots, CSS custom properties. Doordat deze per versie beschikbaar is, kan AI exact weten wat een component in
versie X kan - en wat er in versie Y veranderd is. Dit is de meest waardevolle bron van de hele strategie: hij is al
machineleesbaar en wordt automatisch gegenereerd.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Release notes."}),` Waar de CEM het 'wat' per versie beschrijft, beschrijven de release notes het 'waarom' en het 'hoe'
van veranderingen: breaking changes, deprecaties, migratie-instructies. Voor AI-gestuurde versie-migratie zijn
gestructureerde release notes cruciaal. Naast de menselijke release notes gaan we per versie (vertrekkend van v2.0.0)
een machineleesbaar migratiebestand genereren (bv. per (breaking) change: component, oud patroon, nieuw patroon, code
modificatie hints, ...).`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Modeltoepassingen."}),` Documentatie beschrijft componenten in isolatie; modeltoepassingen tonen hoe ze samen een echte
toepassing vormen: projectstructuur, state management, routing, formulierpatronen, foutafhandeling. Voor AI zijn dit
few-shot-voorbeelden: "bouw het zoals dit". Zie ook sectie 5.`]}),`
`,e.jsx(n.h2,{id:"4-ai-workflows",children:"4. AI-Workflows"}),`
`,e.jsx(n.h3,{id:"41-design-naar-basisimplementatie-figma--code",children:"4.1 Design naar basisimplementatie (Figma → code)"}),`
`,e.jsx(n.p,{children:"Een ontwerper levert een Figma-design op; AI zet dit om naar een basisimplementatie met de web-componenten."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Input: het Figma-bestand (via de Figma API of MCP), plus de CEM van de doelversie."}),`
`,e.jsxs(n.li,{children:["De AI mapt Figma-componenten op ",e.jsx(n.code,{children:"vl"}),"-componenten en Figma-variants op attributen."]}),`
`,e.jsx(n.li,{children:`Output: een werkende basisimplementatie - bewust "basis": layout, componentkeuze en attributen kloppen; businesslogica
en data-aansluiting blijven mensenwerk.`}),`
`,e.jsx(n.li,{children:`Randvoorwaarde: design tokens en componentnamen in Figma en in de bibliotheek moeten gealigneerd zijn. Dit is vooral
een inspanning aan de Figma-kant.`}),`
`]}),`
`,e.jsx(n.h3,{id:"42-versiemigratie-vn--vn1",children:"4.2 Versiemigratie (vN → vN+1)"}),`
`,e.jsx(n.p,{children:"Toepassingen die op een oudere versie van de bibliotheek zitten, worden met AI naar een hogere versie gebracht."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Input: de codebase, de web-types/CEM van bron- en doel-versie, en de release notes van alle tussenliggende versies."}),`
`,e.jsx(n.li,{children:`De AI berekent de delta tussen de 2 manifests (verwijderde attributen, hernoemde events, gewijzigde slots) en past
de code systematisch aan.`}),`
`,e.jsx(n.li,{children:`Verificatie: de bestaande testen van de toepassing - en bij modeltoepassingen de e2e-suite - bevestigen dat het
gedrag ongewijzigd is. Zonder testen is migratie giswerk; met testen is het een gesloten lus.`}),`
`,e.jsx(n.li,{children:`Best in kleine stappen: per minor/major versie migreren en verifiëren, niet in 1 sprong over 4 versies. Korte,
verifieerbare cycli zijn precies waar AI-agents vandaag betrouwbaar in zijn.`}),`
`]}),`
`,e.jsx(n.h3,{id:"43-bestaande-toepassingen-uniformiseren-tot-modeltoepassingen-deels-handwerk",children:"4.3 Bestaande toepassingen uniformiseren tot modeltoepassingen (deels handwerk)"}),`
`,e.jsx(n.p,{children:`Bestaande toepassingen worden op een uniforme manier omgezet naar modeltoepassingen. Dit is deels handwerk, deels
AI-ondersteund (backend uit-mocken, testen genereren, structuur aligneren op de conventies van de modeltoepassingen).
Elke omgezette toepassing vergroot de voorbeelden set.`}),`
`,e.jsx(n.h3,{id:"44-nieuwe-toepassingen-bouwen-op-basis-van-modeltoepassingen",children:"4.4 Nieuwe toepassingen bouwen op basis van modeltoepassingen"}),`
`,e.jsx(n.p,{children:`Met een groeiende set modeltoepassingen kan AI nieuwe toepassingen opzetten naar het evenbeeld van bestaande: "bouw een
toepassing zoals modeltoepassing X, maar voor domein Y". De modeltoepassing levert de conventies (structuur, patronen,
teststrategie), de CEM levert de component-API, en het design (workflow 4.1) levert de vormgeving. Hier komen alle
bronnen samen - daarom staat deze workflow bewust als laatste in de fasering.`}),`
`,e.jsx(n.h2,{id:"5-modeltoepassingen-als-voorbeeld",children:"5. Modeltoepassingen als Voorbeeld"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Een modeltoepassing voldoet aan 4 eisen. Elke eis heeft naast een menselijke ook een expliciete AI-rationale:"})}),`
`,e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:d,alt:"Flux-AI - modeltoepassing kwaliteitseisen",width:"770"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Specifieke versie van de web-componenten."}),` De applicatie pint 1 versie. Dit maakt hem eenduidig als voorbeeld ("zo
werkt het in v3.2") en bruikbaar voor de migratie-workflow: migreer de modeltoepassing, draai de e2e-testen, en je hebt
een gevalideerd migratiepad dat als voorbeeld dient voor andere toepassingen op dezelfde versie.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Frontend standalone opstartbaar."})," 1 commando (",e.jsx(n.code,{children:"npm install && npm start"}),`) en de app draait. Voor een AI-agent is
dit essentieel: de agent moet de app zelfstandig kunnen starten, bekijken en testen zonder toegang tot interne
infrastructuur, VPN's of credentials.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Backend uitgemockt, puur Node."}),` Geen Java-runtime, geen databank, geen externe afhankelijkheden. Mocks (bv. MSW of
een lichte Node-mockserver) maken het gedrag deterministisch: dezelfde input geeft altijd dezelfde output. Dat is de
voorwaarde voor betrouwbare, herhaalbare verificatie - en het houdt de drempel laag voor zowel ontwikkelaars als
agents.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Uitgebreide e2e-testen."}),` De e2e-suite is het gedragscontract van de toepassing. Voor AI-werk is dit de belangrijkste
eis van de 4: het is de feedbackloop die AI-output verifieerbaar maakt. Na een migratie of een generatiestap geldt:
testen groen = gedrag behouden. Zonder deze lus blijft elke AI-wijziging een manuele review-last; met deze lus kan een
agent zelfstandig itereren tot het resultaat klopt.`]}),`
`,e.jsx("vl-alert",{icon:"info-circle",title:"Samengevat",type:"success",size:"small",children:e.jsxs(n.p,{children:["De 4 eisen zijn geen documentatie eisen maar ",e.jsx(n.strong,{children:"agent-enablement-eisen"}),`. Ze maken van elke
modeltoepassing een omgeving waarin een AI-agent autonoom en veilig kan werken.`]})}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Opmerking"}),": de term ",e.jsx(n.code,{children:"modeltoepassing"})," is iets anders dan 'de referentie-app': ",e.jsx(n.code,{children:"Een modeltoepassing is elke echte toepassing die aan alle vereisten voldoet voor hoe toekomstige toepassingen gebouwd worden."})]}),`
`,e.jsx(n.h2,{id:"6-ontsluiting-mcp-als-toegangspoort",children:"6. Ontsluiting: MCP als toegangspoort"}),`
`,e.jsx(n.p,{children:`De kennislaag wordt aan AI-tooling ontsloten via een MCP-server bovenop de CEM/web-types. Typische tools:
componentinformatie opvragen per versie, de delta tussen 2 versies berekenen, migratie-instructies per versie
leveren, en fragmenten uit modeltoepassingen aanreiken als voorbeeld. Hiermee werkt dezelfde kennislaag in elke
AI-omgeving (Claude Code, IDE-integraties, agents) zonder dat kennis per tool gedupliceerd wordt.`}),`
`,e.jsx(n.h2,{id:"7-fasering",children:"7. Fasering"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Fase 1 - Fundament."}),` CEM/web-types per versie publiceren en ontsluiten via de MCP-server. Release notes structureren
(machineleesbaar migratiebestand naast de menselijke notes). Het modeltoepassing-contract formeel vastleggen
(template-repo met de 4 eisen ingebouwd).`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Fase 2 - Eerste bewijzen."}),` Een bestaande toepassing omzetten naar modeltoepassing. Daarop de versie-migratie-workflow
activeren (vN → vN+1 met e2e-verificatie). Parallel: Figma-bibliotheek aligneren op de componentbibliotheek en een
eerste design-naar-code-experiment draaien op 1 scherm.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Fase 3 - Opschalen."}),` Meer toepassingen uniformiseren; migratie-workflow uitrollen naar teams die op oudere versies
zitten; design-naar-code opnemen in het standaard ontwerpproces.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Fase 4 - Genereren."}),` Nieuwe toepassingen opzetten op basis van modeltoepassingen + design + CEM. Deze fase komt
bewust laatst: ze heeft de output van alle vorige fasen nodig.`]}),`
`,e.jsx(n.h2,{id:"8-randvoorwaarden-en-risicos",children:"8. Randvoorwaarden en Risico's"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Kwaliteit van de kennislaag is bepalend."}),` Onvolledige CEM-documentatie of vage release notes vertalen zich direct
in slechte AI-output. Documentatie discipline wordt een productie-eis, niet een nice-to-have.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Figma-governance."}),` Design-naar-code staat of valt met een strak beheerde Figma-bibliotheek. Zonder 1-op-1 mapping
tussen Figma-componenten en `,e.jsx(n.code,{children:"vl"}),"-componenten levert AI generieke HTML in plaats van componentgebruik."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Onderhoud van modeltoepassingen."}),` Elke modeltoepassing is een asset die mee moet evolueren. De migratie-workflow
zelf is hiervoor het antwoord: modeltoepassingen zijn de eerste kandidaten voor elke versie-migratie, wat het
onderhoud grotendeels automatiseert.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Review blijft nodig."}),` AI-output (zeker gegenereerde toepassingen) gaat door dezelfde review- en kwaliteitspoorten
als menselijke code. De e2e-testen verlagen de review last, maar vervangen hem niet - zeker niet voor
toegankelijkheid (WCAG 2.1 AA), waar automatische verificatie tekortschiet.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Versnippering vermijden."}),` Alle AI-workflows via dezelfde MCP-ontsluiting laten lopen voorkomt dat elke tool zijn
eigen (verouderende) kopie van de componentkennis meesleept.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"9-conclusie",children:"9. Conclusie"}),`
`,e.jsx(n.p,{children:`De 4 ideeën - design-naar-code, versie-migratie, uniformisering en voorbeeld gedreven generatie - zijn geen losse
experimenten maar 1 systeem met een gedeelde kern. De volgorde van investeren volgt daaruit vanzelf: eerst de
kennislaag (CEM, release notes, modeltoepassing-contract), dan de ontsluiting (MCP), dan de workflows in oplopende
volgorde. De modeltoepassingen vormen daarbij het vliegwiel: elke toepassing die uniform wordt opgeleverd, maakt de
AI-ondersteuning voor de volgende beter.`})]})}function c(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{c as default};
