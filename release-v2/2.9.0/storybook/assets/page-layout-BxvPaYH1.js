import{u as i,j as e,M as a,S as n}from"./iframe-CYuKbPIU.js";import{p as r}from"./page-layout.stories-C59S1jiM.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-accessibility.component-CKgWnh5n.js";import"./vl-cookie-consent.component-RfngptTP.js";import"./vl-checkbox.component-C49Iumfs.js";import"./vl-datepicker.component-BP40-iVe.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-BT-o0TdA.js";import"./vl-input-field-masked.component-BveMZxzc.js";import"./vl-radio.component-hwfXcKxP.js";import"./vl-radio-group.component-C8gC7BmN.js";import"./vl-select.component-6g5kFKgt.js";import"./vl-select-rich.component-DtV_8s-w.js";import"./vl-textarea.component-DuSmPQH1.js";import"./vl-textarea-rich.component-JN7e0g4F.js";import"./vl-upload.component-Dwvrbdbs.js";import"./vl-upload-progress.component-DVCZ4MKQ.js";import"./vl-cookie-statement.component-D-jmg47s.js";import"./vl-footer.component-GhvOaDI1.js";import"./vl-header.component-ixWRI0bL.js";import"./vl-privacy.component-CtYngfAP.js";function l(o){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
`,e.jsx(t.h1,{id:"pagina-layout",children:"Pagina layout"}),`
`,e.jsx(t.h2,{id:"standaard-layout",children:"Standaard layout"}),`
`,e.jsx(t.p,{children:'Dit is de standaard layout voor applicaties. Gebruik de alternatieve "Volledige breedte" variant enkel indien deze layout te smal is om alle content duidelijk te visualiseren.'}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(n,{language:"html",dark:!0,format:!0,code:`
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
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(n,{language:"html",dark:!0,format:!0,code:`
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
      `})]})]})}function V(o={}){const{wrapper:t}={...i(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(l,{...o})}):l(o)}export{V as default};
