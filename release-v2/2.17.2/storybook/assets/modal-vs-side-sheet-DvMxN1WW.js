import{u as a,j as e,M as d}from"./iframe-BAEsER5t.js";import"./preload-helper-D9Z9MdNV.js";function r(i){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Patronen/Overlays/Modal vs Side sheet"}),`
`,e.jsx(n.h1,{id:"modal-vs-side-sheet",children:"Modal vs Side sheet"}),`
`,e.jsxs(n.p,{children:["Wanneer kies je een ",e.jsx(n.a,{href:"/docs/components-block-modal--documentatie",children:"modal"}),` en wanneer een
`,e.jsx(n.a,{href:"/docs/components-block-side-sheet--documentatie",children:"side-sheet"}),`? Beide tonen inhoud over de pagina heen, maar ze
dienen een ander doel. De vuistregel:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Modal"})," voor een ",e.jsx(n.strong,{children:"geïsoleerde taak"})," die de volledige aandacht vraagt en de pagina-context tijdelijk afschermt."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Side-sheet"})," wanneer de ",e.jsx(n.strong,{children:"pagina-context zichtbaar en bruikbaar"})," moet blijven naast de taak."]}),`
`]}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-wat",children:"Wanneer gebruik je wat"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Scenario"}),e.jsx("th",{scope:"col",children:"Component"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Een geïsoleerde taak waarbij de gebruiker zich volledig op die taak moet richten"}),e.jsx("td",{children:"Gecentreerde modal"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Verwijderen of een andere onomkeerbare bevestiging"}),e.jsx("td",{children:"Altijd een modal"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Een formulier of taak waarbij de pagina-context zichtbaar en bruikbaar moet blijven"}),e.jsx("td",{children:"Side-sheet"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Een zeer uitgebreide taak die geen pagina-context nodig heeft"}),e.jsx("td",{children:"Full-screen modal of een nieuwe pagina"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Een taak die visueel aan een rand van de pagina hoort, maar de pagina afschermt"}),e.jsx("td",{children:"Links of rechts uitgelijnde modal"})]})]})]}),`
`,e.jsx(n.h3,{id:"modal",children:"Modal"}),`
`,e.jsxs(n.p,{children:["Gebruik een ",e.jsx(n.strong,{children:"modal"}),` wanneer de gebruiker een geïsoleerde taak moet afwerken en de onderliggende pagina daarbij
niet nodig of zelfs afleidend is. De modal schermt de pagina af met een overlay; de gebruiker moet de taak
afronden of annuleren voor hij verder kan.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Gecentreerde modal"})," - de standaard voor korte, op zichzelf staande taken en bevestigingen."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Verwijderen"})," - gebruik ",e.jsx(n.strong,{children:"altijd"}),` een modal. Een onomkeerbare actie vraagt een expliciete, afgeschermde
bevestiging.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Full-screen modal"}),` - voor een zeer uitgebreide taak die alle ruimte vraagt maar geen pagina-context nodig
heeft. Weeg af of een `,e.jsx(n.strong,{children:"nieuwe pagina"}),` hier niet gepaster is: bij diepe, navigeerbare flows - die ook een eigen
URL, terug-navigatie of deelbaarheid nodig hebben - is een eigen pagina vaak duidelijker dan een overlay.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Links of rechts uitgelijnde modal"}),` - visueel aan een rand verankerd, maar nog steeds een overlay: de pagina
eronder is afgeschermd en niet bruikbaar.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"side-sheet",children:"Side-sheet"}),`
`,e.jsxs(n.p,{children:["Gebruik een ",e.jsx(n.strong,{children:"side-sheet"}),` wanneer de gebruiker een taak uitvoert terwijl de pagina-context zichtbaar en bruikbaar
moet blijven - bijvoorbeeld een formulier waarbij hij gegevens op de achterliggende pagina blijft raadplegen of
aanpassen. De side-sheet schuift in vanaf een rand zonder de pagina af te schermen.`]}),`
`,e.jsx(n.h2,{id:"linksrechts-uitgelijnde-modal-vs-side-sheet",children:"Links/rechts uitgelijnde modal vs side-sheet"}),`
`,e.jsx(n.p,{children:`Een links of rechts uitgelijnde modal lijkt visueel op een side-sheet - beide hangen aan een schermrand - maar
gedraagt zich fundamenteel anders:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["De ",e.jsx(n.strong,{children:"uitgelijnde modal"}),` legt een overlay over de pagina. De achterliggende inhoud is afgeschermd en niet
bruikbaar zolang de modal open is.`]}),`
`,e.jsxs(n.li,{children:["De ",e.jsx(n.strong,{children:"side-sheet"}),` laat de pagina bruikbaar: de gebruiker kan blijven scrollen, lezen en interageren met de
context terwijl de side-sheet open is.`]}),`
`]}),`
`,e.jsx(n.p,{children:"Kies dus op basis van 'of de pagina-context bruikbaar moet blijven', niet op basis van de positie op het scherm."}),`
`,e.jsx(n.h2,{id:"overlays-stapelen",children:"Overlays stapelen"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Side-sheet → modal openen"}),` kan. Het is niet ideaal - je stapelt twee niveaus van onderbreking - maar soms
onvermijdbaar, bijvoorbeeld een verwijder-bevestiging die vanuit een formulier in de side-sheet vertrekt.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Modal → modal openen"}),` is altijd te vermijden. Een tweede modal bovenop een eerste maakt onduidelijk waar de
gebruiker zit en hoe hij terugkeert. Herstructureer de taak zodat één modal volstaat, of gebruik een
full-screen modal of een nieuwe pagina.`]}),`
`]})]})}function l(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{l as default};
