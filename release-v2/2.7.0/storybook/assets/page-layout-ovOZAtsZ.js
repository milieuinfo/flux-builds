import{u as n,j as e,M as a,S as l}from"./iframe-BRJWU34U.js";import{p as r}from"./page-layout.stories-_jrT9lAx.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-accessibility.component-rbYJhn8X.js";import"./vl-cookie-consent.component-B54Jwkx2.js";import"./vl-checkbox.component-hEBJWAHV.js";import"./vl-datepicker.component-BaFRo2zZ.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-input-field-masked.component-BxETAt31.js";import"./vl-radio.component-OOpp9DdI.js";import"./vl-radio-group.component-B-OVdapL.js";import"./vl-select.component-CH2R68DQ.js";import"./vl-select-rich.component-BMxQbxL4.js";import"./vl-textarea.component-s96ZCi9E.js";import"./vl-textarea-rich.component-DNWjl1dl.js";import"./vl-upload.component-DzlL03XT.js";import"./vl-cookie-statement.component-CsZnr74Q.js";import"./vl-footer.component-LyWdS3TS.js";import"./vl-header.component-xJ8fwFb4.js";import"./vl-footer.component-CELNyacN.js";import"./vl-header.component-oHaUpVMu.js";import"./vl-privacy.component-D_hJI57W.js";function i(o){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
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
      `})]})]})}function V(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{V as default};
