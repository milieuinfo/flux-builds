import{u as l,j as e,M as d,S as o}from"./iframe-CsVpDM3d.js";import{p as r}from"./pagina-opbouw.stories-OCnel7MT.js";import"./preload-helper-PPVm8Dsz.js";import"./vl-side-navigation.component-CE3RMcnV.js";import"./vl-side-navigation-layout.component-wclLZXrs.js";import"./vl-tabs.component-DBtHHzBn.js";import"./vl-checkbox.component-dwTM-Wy8.js";import"./vl-datepicker.component-C2EPt_Iw.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-D3SniA08.js";import"./vl-input-field-masked.component-Bp81wQF6.js";import"./vl-radio.component-Dq4icxGt.js";import"./vl-radio-group.component-zNwhQE1k.js";import"./vl-select.component-13WHQuOs.js";import"./vl-select-rich.component-CEJRQQv1.js";import"./vl-textarea.component-DW_fGO92.js";import"./vl-textarea-rich.component-CXyX5T1n.js";import"./vl-upload.component-CJwCXL7V.js";import"./vl-upload-progress.component-cmZSzeBu.js";import"./vl-footer.component-DjhW-Bcr.js";import"./vl-header.component-B55BVfZ0.js";import"./vl-page.component-DSwNfqbT.js";function i(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r}),`
`,e.jsx(t.h1,{id:"pagina-opbouw",children:"Pagina Opbouw"}),`
`,e.jsxs(t.p,{children:["Bouw een pagina op met ",e.jsx(t.a,{href:"/docs/structures-page--documentatie",children:e.jsx(t.code,{children:"vl-page"})})," uit het artifact ",e.jsx(t.code,{children:"@domg-wc/structures"}),`, met
`,e.jsx(t.code,{children:"vl-header-next"})," en ",e.jsx(t.code,{children:"vl-footer-next"})," in de slots ",e.jsx(t.code,{children:"header"})," en ",e.jsx(t.code,{children:"footer"}),". ",e.jsx(t.code,{children:"vl-page"})," zet de main content zelf in een ",e.jsx(t.code,{children:"main"}),`
landmark; voeg er dus geen eigen `,e.jsx(t.code,{children:"<main>"})," rond toe."]}),`
`,e.jsx(t.h2,{id:"standaard-layout",children:"Standaard layout"}),`
`,e.jsx(t.p,{children:'Dit is de standaard layout voor applicaties. Gebruik de alternatieve "Volledige breedte" variant enkel indien deze layout te smal is om alle content duidelijk te visualiseren.'}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(o,{language:"html",dark:!0,format:!0,code:`
<html>
  <body>
      <vl-page>
          <vl-header-next slot="header" skip-to-content-id="main-content"></vl-header-next>
          <div slot="main">
              <vl-functional-header title="Page Layout" skip-to-content-id="#main-content">...</vl-functional-header>
              <section class="vl-section">
                  <div class="vl-content-block">
                      <vl-title type="h1" id="main-content">Content</vl-title>
                  </div>
              </section>
          </div>
          <vl-footer-next slot="footer"></vl-footer-next>
      </vl-page>
  </body>
</html>
      `})]}),`
`,e.jsx(t.h2,{id:"volledige-breedte",children:"Volledige breedte"}),`
`,e.jsx(t.p,{children:"Dit is een layout voor applicaties die de volledige schermbreedte nodig hebben. Gebruik dit enkel wanneer de standaard layout niet mogelijk is, bijvoorbeeld in het geval van uitgebreide data tabellen."}),`
`,e.jsx(t.p,{children:"Voeg hiervoor de volgende attributen toe:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"full-width"})," op het ",e.jsx(t.code,{children:"<vl-functional-header>"})," component"]}),`
`,e.jsxs(t.li,{children:["de class ",e.jsx(t.code,{children:"vl-content-block--full-width"})," op alle content blokken"]}),`
`]}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(o,{language:"html",dark:!0,format:!0,code:`
<html>
  <body>
      <vl-page>
          <vl-header-next slot="header" skip-to-content-id="main-content"></vl-header-next>
          <div slot="main">
              <vl-functional-header title="Page Layout" full-width skip-to-content-id="#main-content">...</vl-functional-header>
              <section class="vl-section">
                  <div class="vl-content-block vl-content-block--full-width">
                      <vl-title type="h1" id="main-content">Content</vl-title>
                  </div>
              </section>
          </div>
          <vl-footer-next slot="footer"></vl-footer-next>
      </vl-page>
  </body>
</html>
      `})]})]})}function P(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{P as default};
