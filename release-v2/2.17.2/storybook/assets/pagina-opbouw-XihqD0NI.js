import{u as l,j as e,M as a,S as i}from"./iframe-BAEsER5t.js";import{p as r}from"./pagina-opbouw.stories-MraK8bPR.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-side-navigation.component-B8uDKs5j.js";import"./vl-side-navigation-layout.component-D_UJCs9N.js";import"./vl-tabs.component-B3crPNxf.js";import"./vl-checkbox.component-37MCbxxg.js";import"./vl-datepicker.component-UC8l26UU.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-BtKmawMQ.js";import"./vl-input-field-masked.component-B-8jjNyv.js";import"./vl-radio.component-DA7oHNWn.js";import"./vl-radio-group.component-iutw-yHu.js";import"./vl-select.component-C03IO6jd.js";import"./vl-select-rich.component-C7ZJIU_b.js";import"./vl-textarea.component-Ccg7Zw3E.js";import"./vl-textarea-rich.component-DjoW2JKC.js";import"./vl-upload.component-DeTYF_Sd.js";import"./vl-upload-progress.component-_iALaYaK.js";import"./vl-accessibility.component-BB-f0YVV.js";import"./vl-cookie-consent.component-rfligPXF.js";import"./vl-cookie-statement.component-Csmju_6o.js";import"./vl-footer.component-wfOnZlCB.js";import"./vl-header.component-BR3Tpzoq.js";import"./vl-privacy.component-XRjK3koD.js";function n(o){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
