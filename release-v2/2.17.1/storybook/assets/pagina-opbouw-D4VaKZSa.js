import{u as l,j as e,M as a,S as i}from"./iframe-DynOw9qF.js";import{p as r}from"./pagina-opbouw.stories-B1ETV6t9.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-side-navigation.component-6l8ruqor.js";import"./vl-side-navigation-layout.component-CJpjOdQr.js";import"./vl-tabs.component-D3aQJZFU.js";import"./vl-checkbox.component-BFWyhwF-.js";import"./vl-datepicker.component-CDbT1ywF.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-Cn1m5Esg.js";import"./vl-input-field-masked.component-DdXfAdAC.js";import"./vl-radio.component-V9fz9CTI.js";import"./vl-radio-group.component-CiIaRUE-.js";import"./vl-select.component-DladKYQf.js";import"./vl-select-rich.component-CaoTbphr.js";import"./vl-textarea.component-DgY8k7Uy.js";import"./vl-textarea-rich.component-CdstHoUA.js";import"./vl-upload.component-CxW_ou6b.js";import"./vl-upload-progress.component--K8eu_mT.js";import"./vl-accessibility.component-CYV40dBW.js";import"./vl-cookie-consent.component-Uu7IX6tH.js";import"./vl-cookie-statement.component-Brtr6p0B.js";import"./vl-footer.component-tz9iR7tk.js";import"./vl-header.component-CwUwLMO2.js";import"./vl-privacy.component-H_6IC2p-.js";function n(o){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
