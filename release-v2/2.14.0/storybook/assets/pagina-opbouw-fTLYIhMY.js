import{u as l,j as e,M as a,S as i}from"./iframe-D9dm7PbY.js";import{p as r}from"./pagina-opbouw.stories--qgldCZV.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-side-navigation.component-BNg8c-SM.js";import"./vl-side-navigation-layout.component-CNnakMfJ.js";import"./vl-tabs.component-B13AjMd4.js";import"./vl-checkbox.component-CTssVSja.js";import"./vl-datepicker.component-BdyOMgdW.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-BtuuUfav.js";import"./vl-input-field-masked.component-B41Wbgbh.js";import"./vl-radio.component-BJRVPCas.js";import"./vl-radio-group.component-BOLoNZwp.js";import"./vl-select.component-CVn7Sb7E.js";import"./vl-select-rich.component-BEDJuxRx.js";import"./vl-textarea.component-DoL2u81l.js";import"./vl-textarea-rich.component-CiD6zwd0.js";import"./vl-upload.component-anH3-fcY.js";import"./vl-upload-progress.component-BSxlhh7Y.js";import"./vl-accessibility.component-NP4lmCPS.js";import"./vl-cookie-consent.component-CpyKasSs.js";import"./vl-cookie-statement.component-EOIhz_8N.js";import"./vl-footer.component-CBUvyGQO.js";import"./vl-header.component-C-e621ME.js";import"./vl-privacy.component-BWGiBnw3.js";function n(o){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
