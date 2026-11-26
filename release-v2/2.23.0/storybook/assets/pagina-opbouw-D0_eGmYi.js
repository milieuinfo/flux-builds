import{u as a,j as e,M as r,C as i,S as o}from"./iframe-Cv28D2NX.js";import{p as l,P as s,a as c,b as h,c as u,d as p,e as m}from"./pagina-opbouw.stories-Cy4wVt66.js";import"./preload-helper-PPVm8Dsz.js";import"./vl-accordion.component-MApwQbFM.js";import"./vl-info-tile.component-CXnTjId5.js";import"./vl-modal.component-Di4jiGh5.js";import"./vl-side-navigation.component-Bh_rK5ph.js";import"./vl-side-navigation-layout.component--szSopxK.js";import"./vl-tabs.component-DK-cBMq7.js";import"./vl-checkbox.component-Cl-C3bHb.js";import"./vl-datepicker.component-gIhsylI-.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-DAfAyWPV.js";import"./vl-input-field-masked.component-DrIBY--W.js";import"./vl-radio.component-BMGk1PbP.js";import"./vl-radio-group.component-BVQMwWW-.js";import"./vl-select.component-DAztbrd3.js";import"./vl-select-rich.component-Bt8ZFZBv.js";import"./vl-textarea.component-1SQHWSt5.js";import"./vl-textarea-rich.component-jUqK0iT2.js";import"./vl-upload.component-RSddKL9f.js";import"./vl-upload-progress.component-DOm2qrBt.js";import"./vl-footer.component-DGF6e9dv.js";import"./vl-header.component-DA4f0IBZ.js";import"./vl-dashboard.component-BqwbFm2H.js";import"./vl-dashboard-header.component-DA3ig2qd.js";import"./vl-nav-link.component-Du0OL3Ck.js";import"./vl-nav-sub.component-Bf6IxpIc.js";import"./vl-page.component-D3Ny8MRz.js";import"./stories.helper-DYHi_5m6.js";import"./unsafe-html-7Tp0Sqh9.js";function d(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(n.h1,{id:"pagina-opbouw",children:"Pagina Opbouw"}),`
`,e.jsxs(n.p,{children:["Bouw een pagina op met ",e.jsx(n.a,{href:"/docs/structures-page--documentatie",children:e.jsx(n.code,{children:"vl-page"})})," uit het artifact ",e.jsx(n.code,{children:"@domg-wc/structures"}),`, met
`,e.jsx(n.code,{children:"vl-header-next"})," en ",e.jsx(n.code,{children:"vl-footer-next"})," in de slots ",e.jsx(n.code,{children:"header"})," en ",e.jsx(n.code,{children:"footer"}),". ",e.jsx(n.code,{children:"vl-page"})," zet de main content zelf in een ",e.jsx(n.code,{children:"main"}),`
landmark; voeg er dus geen eigen `,e.jsx(n.code,{children:"<main>"})," rond toe."]}),`
`,e.jsxs(n.p,{children:["De main content begint met een ",e.jsx(n.code,{children:"vl-functional-header"}),". Daaronder komt elke sectie in een ",e.jsx(n.code,{children:".vl-section"}),` met daarin een
`,e.jsx(n.code,{children:".vl-content-block"}),". De verticale ruimte tussen de elementen van een sectie komt van ",e.jsx(n.code,{children:".vl-stacked"}),` op de container;
geef een `,e.jsx(n.code,{children:"vl-title"})," daarin het attribuut ",e.jsx(n.code,{children:"no-space-bottom"}),"."]}),`
`,e.jsxs(n.p,{children:["Vervang in de voorbeelden de ",e.jsx(n.code,{children:"identifier"})," van ",e.jsx(n.code,{children:"vl-header-next"})," en ",e.jsx(n.code,{children:"vl-footer-next"}),` door die van je eigen applicatie.
Het attribuut `,e.jsx(n.code,{children:"development"}),` laat de header en de footer van de ontwikkel-servers van Digitaal Vlaanderen komen; laat
het weg in productie.`]}),`
`,e.jsx(n.h2,{id:"componenten",children:"Componenten"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/structures-page--documentatie",children:"vl-page"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-block-functional-header--documentatie",children:"vl-functional-header"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-block-next-side-navigation-layout--documentatie",children:"vl-side-navigation-layout-next"})}),`
`]}),`
`,e.jsx(n.h2,{id:"standaard-layout",children:"Standaard layout"}),`
`,e.jsx(n.p,{children:'Dit is de standaard layout voor applicaties. Gebruik de alternatieve "Volledige breedte" variant enkel indien deze layout te smal is om alle content duidelijk te visualiseren.'}),`
`,e.jsx(i,{of:s,sourceState:"none"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(o,{code:c,language:"html",dark:!0,format:!0})]}),`
`,e.jsxs(n.p,{children:["De skip link van ",e.jsx(n.code,{children:"vl-header-next"})," verwijst naar de titel van de functional header: ",e.jsx(n.code,{children:"title"}),` is de id van die titel
binnen `,e.jsx(n.code,{children:"vl-functional-header"}),", ook met een eigen kop in het ",e.jsx(n.code,{children:"heading"}),`-slot. De skip link van de functional header
verwijst naar de titel van de pagina.`]}),`
`,e.jsxs(n.p,{children:["De naam van de applicatie staat hier in een ",e.jsx(n.code,{children:'<a slot="heading">'})," in plaats van in het ",e.jsx(n.code,{children:"title-label"}),`-attribuut: de
standaardtitel is een `,e.jsx(n.code,{children:"<h1>"}),`, en die rol is voorbehouden voor de paginatitel in de content. Zo heeft de pagina
exact één h1.`]}),`
`,e.jsx(n.h2,{id:"volledige-breedte",children:"Volledige breedte"}),`
`,e.jsx(n.p,{children:"Dit is een layout voor applicaties die de volledige schermbreedte nodig hebben. Gebruik dit enkel wanneer de standaard layout niet mogelijk is, bijvoorbeeld in het geval van uitgebreide data tabellen."}),`
`,e.jsx(n.p,{children:"Voeg hiervoor het volgende toe:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["het attribuut ",e.jsx(n.code,{children:"full-width"})," op het ",e.jsx(n.code,{children:"<vl-functional-header>"})," component"]}),`
`,e.jsxs(n.li,{children:["de class ",e.jsx(n.code,{children:"vl-content-block--full-width"})," op alle content blokken"]}),`
`]}),`
`,e.jsx(i,{of:h,sourceState:"none"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(o,{code:u,language:"html",dark:!0,format:!0})]}),`
`,e.jsx(n.h2,{id:"met-side-navigation",children:"Met side navigation"}),`
`,e.jsxs(n.p,{children:["Gebruik deze layout voor een lange pagina met meerdere onderdelen. ",e.jsx(n.code,{children:"vl-side-navigation-layout-next"}),` komt binnen het
content blok en bouwt de side navigation op uit de headings met een `,e.jsx(n.code,{children:"id"})," in het slot ",e.jsx(n.code,{children:"content"}),"."]}),`
`,e.jsx(i,{of:p,sourceState:"none"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(o,{code:m,language:"html",dark:!0,format:!0})]})]})}function I(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}export{I as default};
