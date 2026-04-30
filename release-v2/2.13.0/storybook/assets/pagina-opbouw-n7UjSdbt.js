import{u as l,j as e,M as a,S as i}from"./iframe-69xRVzLO.js";import{p as r}from"./pagina-opbouw.stories-BfrrgwRF.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-side-navigation.component-BikInihD.js";import"./property-DzMVtqAE.js";import"./vl-side-navigation-layout.component-CAo-KB7k.js";import"./vl-tabs.component-FYRwrnHz.js";import"./vl-checkbox.component-YUF2NAyE.js";import"./vl-datepicker.component-CJk5oTe3.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-BsRFYb5y.js";import"./vl-input-field-masked.component-Chk_8RDS.js";import"./vl-radio.component-BHdI6r1o.js";import"./vl-radio-group.component-CXE1VlBD.js";import"./vl-select.component-DjcSeoM9.js";import"./vl-select-rich.component-pbaJxKAT.js";import"./vl-textarea.component-3N-QACUu.js";import"./vl-textarea-rich.component-GzVVXRfn.js";import"./vl-upload.component-Bx3un35T.js";import"./vl-upload-progress.component-gTUoCtJA.js";import"./vl-accessibility.component-T4cuKCoF.js";import"./vl-cookie-consent.component-CR5JyBr2.js";import"./vl-cookie-statement.component-BGY828lA.js";import"./vl-footer.component-BJjd4hHG.js";import"./vl-header.component-DZvoVHH6.js";import"./vl-privacy.component-CjsaTrle.js";function n(o){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
`,e.jsx(t.h1,{id:"pagina-opbouw",children:"Pagina Opbouw"}),`
`,e.jsx(t.h2,{id:"standaard-layout",children:"Standaard layout"}),`
`,e.jsx(t.p,{children:'Dit is de standaard layout voor applicaties. Gebruik de alternatieve "Volledige breedte" variant enkel indien deze layout te smal is om alle content duidelijk te visualiseren.'}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(i,{language:"html",dark:!0,format:!0,code:`
<html>
  <body>
      <main>
          <vl-template>
              <vl-header slot="header"></vl-header>
              <div slot="main">
                  <vl-functional-header title="Page Layout" skip-to-content-id="#main-content">...</vl-functional-header>
                  <section class="vl-section">
                      <div class="vl-content-block">
                          <vl-title type="h1" id="main-content">Content</vl-title>
                      </div>
                  </section>
              </div>
              <vl-footer slot="footer"></vl-footer>
          </vl-template>
      </main>
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
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(i,{language:"html",dark:!0,format:!0,code:`
<html>
  <body>
      <main>
          <vl-template>
              <vl-header slot="header"></vl-header>
              <div slot="main">
                  <vl-functional-header title="Page Layout" full-width skip-to-content-id="#main-content">...</vl-functional-header>
                  <section class="vl-section">
                      <div class="vl-content-block vl-content-block--full-width">
                          <vl-title type="h1" id="main-content">Content</vl-title>
                      </div>
                  </section>
              </div>
              <vl-footer slot="footer"></vl-footer>
          </vl-template>
      </main>
  </body>
</html>
      `})]})]})}function z(o={}){const{wrapper:t}={...l(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{z as default};
