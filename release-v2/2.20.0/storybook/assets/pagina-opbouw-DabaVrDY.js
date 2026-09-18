import{u as l,j as e,M as a,S as i}from"./iframe-BoAZAq4i.js";import{p as r}from"./pagina-opbouw.stories-Cdab_O_3.js";import"./preload-helper-PPVm8Dsz.js";import"./vl-side-navigation.component-DGJup3FE.js";import"./vl-side-navigation-layout.component-B4-7okbd.js";import"./vl-tabs.component-C-p6v0hm.js";import"./vl-checkbox.component-BOXqtNWb.js";import"./vl-datepicker.component-DjlXFHEl.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-ChHjnN1i.js";import"./vl-input-field-masked.component-xgAwa1Uf.js";import"./vl-radio.component-DGlLMB-h.js";import"./vl-radio-group.component-D2h4yERQ.js";import"./vl-select.component-DubDIdHF.js";import"./vl-select-rich.component-B-ryN6LK.js";import"./vl-textarea.component-Cv_HVWwa.js";import"./vl-textarea-rich.component-Bw6R3_t6.js";import"./vl-upload.component-DPyi8C5w.js";import"./vl-upload-progress.component-CNG0YwiU.js";import"./vl-accessibility.component-x8XPNWkq.js";import"./vl-cookie-consent.component-ToYMDRec.js";import"./vl-cookie-statement.component-CkqsrgwR.js";import"./vl-footer.component-D3_KZUlq.js";import"./vl-header.component-DmZ6FoQ3.js";import"./vl-privacy.component-DTxSwRLP.js";function n(o){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
