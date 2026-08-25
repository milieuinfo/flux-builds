import{u as l,j as e,M as a,S as i}from"./iframe-CY-ZM549.js";import{p as r}from"./pagina-opbouw.stories-B11HLdVW.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-side-navigation.component-CQhFDauE.js";import"./vl-side-navigation-layout.component-Z8BZQFas.js";import"./vl-tabs.component-DR6Ie2dc.js";import"./vl-checkbox.component-BDn7ePcW.js";import"./vl-datepicker.component-YU9BW_0B.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-Bc3AJnIk.js";import"./vl-input-field-masked.component-CpP3801C.js";import"./vl-radio.component-D19T2Xu3.js";import"./vl-radio-group.component-DrOqLcWw.js";import"./vl-select.component-BFzkdhOR.js";import"./vl-select-rich.component-Ce4rMkaH.js";import"./vl-textarea.component-C2i5Nva7.js";import"./vl-textarea-rich.component-C1bved6Z.js";import"./vl-upload.component-CRjn2qhr.js";import"./vl-upload-progress.component-DXqNp2pu.js";import"./vl-accessibility.component-BwS1668a.js";import"./vl-cookie-consent.component-BeLrcrBM.js";import"./vl-cookie-statement.component-BkIa-Djs.js";import"./vl-footer.component-C1x91sm3.js";import"./vl-header.component-CpL6Dy50.js";import"./vl-privacy.component-DtF1k_a1.js";function n(o){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
      `})]})]})}function _(o={}){const{wrapper:t}={...l(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{_ as default};
