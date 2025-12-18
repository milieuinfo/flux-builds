import{u as n,j as e,M as a,S as l}from"./iframe-BQb9mjVp.js";import{p as r}from"./page-layout.stories-Cy2-aZPv.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-accessibility.component-Cx9GsvK4.js";import"./vl-cookie-consent.component-qpN0nzBk.js";import"./vl-checkbox.component-DXi6WwO0.js";import"./vl-datepicker.component-CVLjVc3J.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-input-field-masked.component-qycCnsrx.js";import"./vl-radio.component-HF0vGzer.js";import"./vl-radio-group.component-D0wYPqVJ.js";import"./vl-select.component-BypI6XzH.js";import"./vl-select-rich.component-Cx8fXtGT.js";import"./vl-textarea.component-DzPq4Vrh.js";import"./vl-textarea-rich.component-D2wM1BUa.js";import"./vl-upload.component-CiF30Vri.js";import"./vl-upload-progress.component-DYyNM58H.js";import"./vl-cookie-statement.component-BIGECnJ6.js";import"./vl-footer.component-CM9_4OV4.js";import"./vl-header.component-C1zYW6P9.js";import"./vl-footer.component-qc390aF2.js";import"./vl-header.component-sv9or2G7.js";import"./vl-privacy.component-DQFaFkOF.js";function i(o){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
`,e.jsx(t.h1,{id:"pagina-layout",children:"Pagina layout"}),`
`,e.jsx(t.h2,{id:"standaard-layout",children:"Standaard layout"}),`
`,e.jsx(t.p,{children:'Dit is de standaard layout voor applicaties. Gebruik de alternatieve "Volledige breedte" variant enkel indien deze layout te smal is om alle content duidelijk te visualiseren.'}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(l,{language:"html",dark:!0,format:!0,code:`
<html>
  <body>
      <main>
          <vl-template>
              <vl-header slot="header"></vl-header>
              <div slot="main">
                  <vl-functional-header title="Page Layout">...</vl-functional-header>
                  <section class="vl-section">
                      <div class="vl-content-block">...</div>
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
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(l,{language:"html",dark:!0,format:!0,code:`
<html>
  <body>
      <main>
          <vl-template>
              <vl-header slot="header"></vl-header>
              <div slot="main">
                  <vl-functional-header title="Page Layout" full-width>...</vl-functional-header>
                  <section class="vl-section">
                      <div class="vl-content-block vl-content-block--full-width">...</div>
                  </section>
              </div>
              <vl-footer slot="footer"></vl-footer>
          </vl-template>
      </main>
  </body>
</html>
      `})]})]})}function X(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{X as default};
