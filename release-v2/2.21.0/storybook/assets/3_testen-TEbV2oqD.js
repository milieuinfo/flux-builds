import{u as s,j as e,M as t}from"./iframe-CsVpDM3d.js";import"./preload-helper-PPVm8Dsz.js";function i(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Richtlijnen/Toegankelijkheid - Praktijk/Testen"}),`
`,e.jsx(n.h1,{id:"testen",children:"Testen"}),`
`,e.jsx(n.p,{children:`Toegankelijkheid test je in twee lagen: geautomatiseerde checks vangen af wat een machine kan zien, manuele
checks vangen de rest. Die tweede laag is niet optioneel.`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Een groene score bewijst geen conformiteit."}),` Tools als Lighthouse en axe controleren enkel machinaal
verifieerbare regels - een deel van de WCAG-succescriteria. Alles wat context vraagt (is dit tekstalternatief
zinvol? klopt de voorleesvolgorde? is deze foutmelding bruikbaar?) moet je zelf nakijken.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#automatisch-testen",children:"Automatisch testen"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#keyboard-only",children:"Keyboard-only"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#voiceover",children:"VoiceOver"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#browser-extensies",children:"Browser-extensies"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#kleurenblindheid-emuleren",children:"Kleurenblindheid emuleren"})}),`
`]}),`
`,e.jsx(n.h2,{id:"automatisch-testen",children:"Automatisch testen"}),`
`,e.jsx(n.h3,{id:"lighthouse",children:"Lighthouse"}),`
`,e.jsxs(n.p,{children:["Chrome DevTools, tab ",e.jsx(n.strong,{children:"Lighthouse"}),", categorie ",e.jsx(n.strong,{children:"Accessibility"})," aanvinken en ",e.jsx(n.strong,{children:"Analyze page load"}),`. Achterliggend
draait axe-core. Dit is de snelste manier om een volledige pagina in de context van je eigen applicatie te
controleren - dus ook de samenstelling van componenten, wat een component-test niet doet.`]}),`
`,e.jsx(n.p,{children:`Lighthouse herlaadt de pagina, dus toestanden die pas na interactie ontstaan (een open modal, validatiefouten,
een uitgeklapte accordion) vang je er niet mee. Gebruik daarvoor de axe DevTools-extensie of een Cypress-test.`}),`
`,e.jsx(n.h3,{id:"storybook-accessibility-paneel",children:"Storybook Accessibility-paneel"}),`
`,e.jsxs(n.p,{children:["Elke story heeft onderaan een ",e.jsx(n.strong,{children:"Accessibility"}),"-paneel, geleverd door ",e.jsx(n.code,{children:"@storybook/addon-a11y"}),`. Het draait axe-core
op de gerenderde story en groepeert de resultaten in Violations, Passes en Incomplete.`]}),`
`,e.jsx(n.p,{children:`Gebruik dit tijdens het ontwikkelen van een component: je ziet per variant meteen het effect van een wijziging,
zonder de component eerst in een applicatie te moeten inbouwen.`}),`
`,e.jsx(n.h3,{id:"cypress-met-axe",children:"Cypress met axe"}),`
`,e.jsxs(n.p,{children:["In je Cypress-testen verifieer je toegankelijkheid met ",e.jsx(n.a,{href:"https://github.com/component-driven/cypress-axe",rel:"nofollow",children:"cypress-axe"}),`,
dat achterliggend `,e.jsx(n.a,{href:"https://github.com/dequelabs/axe-core",rel:"nofollow",children:"axe-core"})," gebruikt. Installeer ",e.jsx(n.code,{children:"cypress-axe"})," en ",e.jsx(n.code,{children:"axe-core"}),`
als devDependency en importeer `,e.jsx(n.code,{children:"cypress-axe"})," in je Cypress support-bestand."]}),`
`,e.jsxs(n.p,{children:["Na het laden van de pagina injecteer je axe met ",e.jsx(n.code,{children:"injectAxe()"})," en verifieer je met ",e.jsx(n.code,{children:"checkA11y()"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`it('should be accessible', () => {
    cy.visit('/aanvraag');
    cy.injectAxe();

    cy.checkA11y();
});
`})}),`
`,e.jsxs(n.p,{children:["Zonder argument scant ",e.jsx(n.code,{children:"checkA11y()"})," de hele pagina; met een selector, bv. ",e.jsx(n.code,{children:"cy.checkA11y('vl-side-sheet')"}),`, beperk je
de controle tot één onderdeel. Roep `,e.jsx(n.code,{children:"checkA11y()"})," opnieuw aan na een interactie om ook die toestand te controleren."]}),`
`,e.jsx(n.h2,{id:"keyboard-only",children:"Keyboard-only"}),`
`,e.jsx(n.p,{children:"Leg de muis weg en doorloop de volledige flow met enkel het toetsenbord."}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Toets"}),e.jsx("th",{scope:"col",children:"Actie"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"tab"})," / ",e.jsx("code",{children:"shift"}),"+",e.jsx("code",{children:"tab"})]}),e.jsx("td",{children:"Naar het volgende / vorige focusbare element"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"enter"})}),e.jsx("td",{children:"Links en knoppen activeren, een formulier verzenden"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"space"})}),e.jsx("td",{children:"Knoppen activeren, checkboxen aan- en uitzetten, een select openen"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"pijltjestoetsen"}),e.jsx("td",{children:"Navigeren binnen een samengestelde widget: radio-groep, tabs, select-opties, datepicker"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"esc"})}),e.jsx("td",{children:"Een overlay sluiten: modal, side-sheet, popover"})]})]})]}),`
`,e.jsx(n.p,{children:"Waar je op let:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Is elk interactief element bereikbaar, en volgt de tab-volgorde de visuele volgorde?"}),`
`,e.jsxs(n.li,{children:["Is de focus ",e.jsx(n.strong,{children:"altijd zichtbaar"}),", ook boven een sticky header of binnen een scrollbaar paneel?"]}),`
`,e.jsxs(n.li,{children:[`Raak je nergens vast? Uit elk onderdeel moet je ook weer weg kunnen - zie
`,e.jsx(n.a,{href:"/docs/richtlijnen-toegankelijkheid-aanpak-2-bedienbaar-2-1-toetsenbordtoegankelijk--documentatie",children:"2.1 Toetsenbordtoegankelijk"}),"."]}),`
`,e.jsx(n.li,{children:`Verspringt de focus bij het openen van een overlay mee naar die overlay, en komt hij bij het sluiten terug op
het element dat ze opende?`}),`
`,e.jsx(n.li,{children:"Kan je met het toetsenbord bij alles wat enkel op hover verschijnt?"}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`Op Safari kan je met de standaardinstellingen geen focus leggen op niet-tekstuele inputs zoals knoppen,
checkboxen en radio's. Zie
`,e.jsx(n.a,{href:"/docs/richtlijnen-toegankelijkheid-praktijk-gekende-beperkingen-wip--documentatie#focus-op-niet-tekstuele-inputs",children:"Gekende Beperkingen"}),`
voor de workaround, zodat je dit niet als een fout in je applicatie interpreteert.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"voiceover",children:"VoiceOver"}),`
`,e.jsxs(n.p,{children:["VoiceOver is de screenreader die standaard op macOS aanwezig is - je hebt niets te installeren. De ",e.jsx(n.strong,{children:"VO-toets"}),` is
de combinatie `,e.jsx(n.code,{children:"ctrl"}),"+",e.jsx(n.code,{children:"option"}),"; die hou je ingedrukt samen met de toets uit de tabel hieronder."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Actie"}),e.jsx("th",{scope:"col",children:"Toetsen"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"VoiceOver starten en stoppen"}),e.jsxs("td",{children:[e.jsx("code",{children:"cmd"}),"+",e.jsx("code",{children:"F5"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Naar het volgende / vorige element"}),e.jsxs("td",{children:[e.jsx("code",{children:"VO"}),"+",e.jsx("code",{children:"→"})," / ",e.jsx("code",{children:"VO"}),"+",e.jsx("code",{children:"←"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Een groep binnengaan"}),e.jsxs("td",{children:[e.jsx("code",{children:"VO"}),"+",e.jsx("code",{children:"shift"}),"+",e.jsx("code",{children:"↓"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Een groep verlaten"}),e.jsxs("td",{children:[e.jsx("code",{children:"VO"}),"+",e.jsx("code",{children:"shift"}),"+",e.jsx("code",{children:"↑"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Het element onder de VoiceOver-cursor activeren"}),e.jsxs("td",{children:[e.jsx("code",{children:"VO"}),"+",e.jsx("code",{children:"space"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Voorlezen vanaf de huidige positie"}),e.jsxs("td",{children:[e.jsx("code",{children:"VO"}),"+",e.jsx("code",{children:"A"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Het voorlezen pauzeren en hervatten"}),e.jsx("td",{children:e.jsx("code",{children:"ctrl"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"De Rotor openen en sluiten"}),e.jsxs("td",{children:[e.jsx("code",{children:"VO"}),"+",e.jsx("code",{children:"U"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"In de Rotor van lijst wisselen"}),e.jsxs("td",{children:[e.jsx("code",{children:"←"})," / ",e.jsx("code",{children:"→"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"In de Rotor een item kiezen"}),e.jsxs("td",{children:[e.jsx("code",{children:"↑"})," / ",e.jsx("code",{children:"↓"}),", daarna ",e.jsx("code",{children:"enter"})]})]})]})]}),`
`,e.jsx(n.h3,{id:"de-rotor",children:"De Rotor"}),`
`,e.jsxs(n.p,{children:["De Rotor (",e.jsx(n.code,{children:"VO"}),"+",e.jsx(n.code,{children:"U"}),") toont de pagina als een reeks lijsten: onder meer ",e.jsx(n.strong,{children:"Kopteksten"}),", ",e.jsx(n.strong,{children:"Links"}),`,
`,e.jsx(n.strong,{children:"Formulierregelaars"}),", ",e.jsx(n.strong,{children:"Kaders"})," en ",e.jsx(n.strong,{children:"Oriëntatiepunten"}),`. Het is de snelste manier om te controleren of de
structuur van je pagina klopt, want die lijsten zijn precies waarmee een screenreader-gebruiker navigeert:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Kopteksten"}),` - lees je hier een logische inhoudsopgave van de pagina? Zo niet, dan kloppen je heading-niveaus
niet of staan er koppen puur voor de opmaak.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Links"}),` - zeggen de linkteksten ook iets los van hun context? "Lees meer" komt hier terecht als een rij
identieke, betekenisloze items.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Formulierregelaars"})," - draagt elke control een herkenbaar label?"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Oriëntatiepunten"}),` - heeft de pagina een banner, navigatie, main en footer, zodat de gebruiker in één sprong
naar de inhoud kan?`]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`De shortcuts hierboven zijn opgesteld op macOS 26. VoiceOver-shortcuts wijzigen zelden, maar de benamingen en
de samenstelling van de Rotor-lijsten verschillen licht per macOS-versie.`}),`
`]}),`
`,e.jsx(n.h2,{id:"browser-extensies",children:"Browser-extensies"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Tool"}),e.jsx("th",{scope:"col",children:"Waarvoor"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("a",{href:"https://www.deque.com/axe/devtools/",children:"axe DevTools"})," (Deque)"]}),e.jsx("td",{children:e.jsx(n.p,{children:`axe-core als DevTools-paneel. Scant de pagina in haar huidige toestand, dus ook na interactie -
het aanvullende alternatief voor Lighthouse bij modals, panelen en validatiefouten.`})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("a",{href:"https://wave.webaim.org/extension/",children:"WAVE"})," (WebAIM)"]}),e.jsx("td",{children:e.jsxs(n.p,{children:["Legt de bevindingen als iconen bovenop de pagina zelf, wat snel toont ",e.jsx("em",{children:"waar"}),` een probleem
zit.`]})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("a",{href:"https://www.tpgi.com/color-contrast-checker/",children:"Colour Contrast Analyser"})," (TPGi)"]}),e.jsx("td",{children:e.jsx(n.p,{children:`Desktop-app met een pipet: meet contrast op eender welke pixel, ook op afbeeldingen, kaarten en
canvas - waar een DOM-gebaseerde tool niets kan meten.`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("a",{href:"https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi",children:e.jsx(n.p,{children:"HeadingsMap"})})}),e.jsx("td",{children:"Toont de koppenstructuur als boom, zodat overgeslagen niveaus meteen opvallen."})]})]})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Let op met Shadow DOM."}),` Flux-componenten renderen hun inhoud in een shadow root. axe-core doorloopt die -
Lighthouse, het Storybook-paneel, axe DevTools en de Cypress-commando's zien de component dus volledig. Tools
die de pagina-HTML rechtstreeks parsen, zoals de outline- en koppen-extensies, zien die inhoud vaak niet. Een
lege koppenboom betekent daarom niet noodzakelijk dat er koppen ontbreken; verifieer dat met de
VoiceOver-Rotor of met de element-inspector van DevTools.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"kleurenblindheid-emuleren",children:"Kleurenblindheid emuleren"}),`
`,e.jsxs(n.p,{children:["In Chrome DevTools: het menu ",e.jsx(n.strong,{children:"⋮"})," rechtsboven in DevTools, dan ",e.jsx(n.strong,{children:"More tools > Rendering"}),", en daar ",e.jsx(n.strong,{children:`Emulate
vision deficiencies`}),`. Je kiest tussen protanopie, deuteranopie, tritanopie, achromatopsie, wazig zicht en
verminderd contrast.`]}),`
`,e.jsxs(n.p,{children:["Waar je op let: draag je ergens informatie ",e.jsx(n.strong,{children:"enkel"}),` met kleur over? Denk aan statuskleuren, een grafieklegende,
gekleurde labels of een rode rand rond een ongeldig veld. In de emulatie moet elk van die signalen nog steeds
leesbaar zijn dankzij een tweede kenmerk: tekst, een icoon, een patroon of een vorm.`]}),`
`,e.jsxs(n.p,{children:[`Meer hierover staat bij
`,e.jsx(n.a,{href:"/docs/richtlijnen-toegankelijkheid-aanpak-1-waarneembaar-1-4-onderscheidbaar--documentatie",children:"1.4 Onderscheidbaar"}),`
en bij `,e.jsx(n.a,{href:"/docs/styles-kleurenpalet--documentatie#kleurgebruik-in-grafieken",children:"Kleurgebruik in grafieken"}),"."]})]})}function l(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{l as default};
