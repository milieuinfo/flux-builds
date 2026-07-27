import{u as t,j as e,M as d,C as r}from"./iframe-BgD7f6Cn.js";import{f as l,F as a,a as s}from"./formulier-blur-validatie.stories-DGDmYZlO.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-checkbox.component-BI-8WbFC.js";import"./vl-datepicker.component-BH6hFvSl.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-D3CXkpKa.js";import"./vl-input-field-masked.component-D5ECsW97.js";import"./vl-radio.component-DxXjedGG.js";import"./vl-radio-group.component-CSjbPTDR.js";import"./vl-select.component-DD168V7z.js";import"./vl-select-rich.component-Bxf89huo.js";import"./vl-textarea.component-gjn4lrXx.js";import"./vl-textarea-rich.component-Cr5hLJgB.js";import"./vl-upload.component-ZyZbl5Gk.js";import"./vl-upload-progress.component-Btk497js.js";function o(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
`,e.jsx(n.h1,{id:"formulier---blur-validatie",children:"Formulier - Blur-validatie"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`Voor de basis van formuliervalidatie, zie
`,e.jsx(n.a,{href:"/docs/patronen-formulier-validatie--documentatie",children:"Formulier - Validatie"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Standaard valideren de formulier componenten pas wanneer de form gesubmit wordt. Met het optionele
`,e.jsx(n.code,{children:"blur-validation"}),` attribuut kan je validatie al tijdens het invullen tonen, zonder dat je hier zelf
code voor moet schrijven.`]}),`
`,e.jsx(n.h2,{id:"gedrag",children:"Gedrag"}),`
`,e.jsxs(n.p,{children:["Wanneer ",e.jsx(n.code,{children:"blur-validation"})," aanstaat:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Het veld valideert zodra het focus kreeg en weer verlaten wordt (",e.jsx(n.code,{children:"focusout"}),`), ongeacht of de gebruiker de
waarde gewijzigd heeft.`]}),`
`,e.jsxs(n.li,{children:["Na de eerste foutmelding schakelt het veld over op ",e.jsx(n.strong,{children:"live re-validatie tijdens typen"}),`: de foutmelding verdwijnt
op het moment dat de waarde geldig wordt, zonder dat de gebruiker opnieuw moet wegklikken.`]}),`
`,e.jsx(n.li,{children:`Submit blijft de definitieve check: bij submit wordt nog steeds alles gevalideerd en springt de focus naar het
eerste ongeldige veld.`}),`
`]}),`
`,e.jsxs(n.p,{children:[`De foutmeldingen lopen via hetzelfde mechanisme als de standaard validatie
(`,e.jsx(n.a,{href:"/docs/components-form-form-message--documentatie",children:e.jsx(n.code,{children:"vl-form-message"})})," + ",e.jsx(n.code,{children:"ValidityState"}),`). Je hoeft enkel
het attribuut toe te voegen.`]}),`
`,e.jsx(n.h2,{id:"per-veld",children:"Per veld"}),`
`,e.jsxs(n.p,{children:["Zet ",e.jsx(n.code,{children:"blur-validation"})," op een individuele form control."]}),`
`,e.jsxs(n.p,{children:["In onderstaand voorbeeld: tab in het veld en terug eruit zonder te typen om de ",e.jsx(n.code,{children:"valueMissing"}),` fout te zien, of typ
een ongeldige waarde (bv. een cijfer of één letter) en verlaat het veld. Corrigeer daarna en zie de fout live
verdwijnen.`]}),`
`,e.jsx(r,{of:a,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"op-de-form-cascade",children:"Op de form (cascade)"}),`
`,e.jsxs(n.p,{children:["Zet ",e.jsx(n.code,{children:"blur-validation"})," (of ",e.jsx(n.code,{children:"data-blur-validation"}),") op het ",e.jsx(n.code,{children:"<form>"}),` element om het gedrag in één keer in te schakelen
voor `,e.jsx(n.strong,{children:"alle"})," form controls eronder. De velden zelf hebben dan geen attribuut nodig."]}),`
`,e.jsx(r,{of:s,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:["Een veld met een eigen ",e.jsx(n.code,{children:"blur-validation"}),` attribuut blijft daarnaast los werken. Form-niveau en veld-niveau zijn
beide manieren om hetzelfde gedrag aan te zetten (OR-logica, er is geen per-veld opt-out).`]}),`
`,e.jsx(n.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"blur-validation"})," is bewust opt-in. Validatie pas op ",e.jsx(n.code,{children:"focusout"}),` (en niet op elke toetsaanslag) beperkt
ruis voor screenreaders tijdens het invullen.`]}),`
`,e.jsxs(n.p,{children:["De foutmelding wordt gerenderd in een ",e.jsx(n.code,{children:'aria-live="polite"'})," regio (via ",e.jsx(n.code,{children:"vl-form-message"}),`), zodat screen
readers ze voorlezen zodra ze verschijnt of wijzigt. `,e.jsx(n.code,{children:'aria-atomic="true"'}),` zorgt dat telkens de volledige
boodschap wordt voorgelezen. De control zelf krijgt `,e.jsx(n.code,{children:'aria-invalid="true"'}),` zodat de ongeldige toestand
ook los van de melding kenbaar is.`]}),`
`,e.jsxs(n.h2,{id:"lijst-componenten-met-blur-validation",children:["Lijst componenten met ",e.jsx(n.code,{children:"blur-validation"})]}),`
`,e.jsxs(n.p,{children:["Het attribuut zit op de gedeelde ",e.jsx(n.code,{children:"FormControl"})," base class en werkt dus op alle form controls:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-form-input-field--documentatie",children:"vl-input-field"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-form-input-field-masked--documentatie",children:"vl-input-field-masked"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-form-textarea--documentatie",children:"vl-textarea"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-form-textarea-rich--documentatie",children:"vl-textarea-rich"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-form-datepicker--documentatie",children:"vl-datepicker"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-form-select-rich--documentatie",children:"vl-select-rich"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-form-select--documentatie",children:"vl-select"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-form-radio-group--documentatie",children:"vl-radio-group"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-form-upload--documentatie",children:"vl-upload"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-form-checkbox--documentatie",children:"vl-checkbox"})}),`
`]})]})}function V(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{V as default};
