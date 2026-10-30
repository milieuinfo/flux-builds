import{u as r,j as e,M as l,C as i,S as o}from"./iframe-ylVHDfb1.js";import{p as c,P as s,a as h,b as u,c as p,d as m,e as x}from"./pagina-opbouw.stories-B-567u_6.js";import"./preload-helper-PPVm8Dsz.js";import"./vl-accordion.component-Da6SByGD.js";import"./vl-info-tile.component-D9Hz2vrm.js";import"./vl-modal.component-GiDb0Bob.js";import"./vl-side-navigation.component-Do9gmewd.js";import"./vl-side-navigation-layout.component-nRGd575H.js";import"./vl-tabs.component-BfgJv0ll.js";import"./vl-checkbox.component-JIaDIK8d.js";import"./vl-datepicker.component-bkPzXCz5.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-gnnClTNg.js";import"./vl-input-field-masked.component-CjwXFy6D.js";import"./vl-radio.component-bG225eeY.js";import"./vl-radio-group.component-Bg2Yqg1x.js";import"./vl-select.component-HC-RNt77.js";import"./vl-select-rich.component-Bv02-TZn.js";import"./vl-textarea.component-Plygnhn2.js";import"./vl-textarea-rich.component-B4o79-OP.js";import"./vl-upload.component-VXUupjXw.js";import"./vl-upload-progress.component-C-7N_DLZ.js";import"./vl-footer.component-DygZL_pE.js";import"./vl-header.component-BscuUqhg.js";import"./vl-dashboard.component-Ttvi9lNX.js";import"./vl-dashboard-header.component-B0zuaYxQ.js";import"./vl-nav-link.component-HqPoI3Jx.js";import"./vl-nav-sub.component-R-nFNQB3.js";import"./vl-page.component-b8IK5Ik0.js";import"./unsafe-html--mv6C7rg.js";function a(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...t.components},{FluxAlert:d}=n;return d||j("FluxAlert"),e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
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
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(o,{code:h,language:"html",dark:!0,format:!0})]}),`
`,e.jsxs(n.p,{children:["De skip link van ",e.jsx(n.code,{children:"vl-header-next"})," verwijst naar de titel van de functional header: ",e.jsx(n.code,{children:"title"}),` is de id van die titel
binnen `,e.jsx(n.code,{children:"vl-functional-header"}),". De skip link van de functional header verwijst naar de titel van de pagina."]}),`
`,e.jsx(d,{type:"warning",children:`
  De skip link gaat naar het eerste element met de id <code>title</code> op de pagina. Componenten zoals
  <code>vl-alert</code> en <code>vl-content-header</code> gebruiken die id ook voor hun eigen titel. Staat zo'n
  component boven de functional header, dan landt de skip link van <code>vl-header-next</code> daar.
`}),`
`,e.jsx(n.h2,{id:"volledige-breedte",children:"Volledige breedte"}),`
`,e.jsx(n.p,{children:"Dit is een layout voor applicaties die de volledige schermbreedte nodig hebben. Gebruik dit enkel wanneer de standaard layout niet mogelijk is, bijvoorbeeld in het geval van uitgebreide data tabellen."}),`
`,e.jsx(n.p,{children:"Voeg hiervoor het volgende toe:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["het attribuut ",e.jsx(n.code,{children:"full-width"})," op het ",e.jsx(n.code,{children:"<vl-functional-header>"})," component"]}),`
`,e.jsxs(n.li,{children:["de class ",e.jsx(n.code,{children:"vl-content-block--full-width"})," op alle content blokken"]}),`
`]}),`
`,e.jsx(i,{of:u,sourceState:"none"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(o,{code:p,language:"html",dark:!0,format:!0})]}),`
`,e.jsx(n.h2,{id:"met-side-navigation",children:"Met side navigation"}),`
`,e.jsxs(n.p,{children:["Gebruik deze layout voor een lange pagina met meerdere onderdelen. ",e.jsx(n.code,{children:"vl-side-navigation-layout-next"}),` komt binnen het
content blok en bouwt de side navigation op uit de headings met een `,e.jsx(n.code,{children:"id"})," in het slot ",e.jsx(n.code,{children:"content"}),"."]}),`
`,e.jsx(i,{of:m,sourceState:"none"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(o,{code:x,language:"html",dark:!0,format:!0})]})]})}function K(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}function j(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{K as default};
