import{u as o,j as e,M as d,C as r}from"./iframe-ylVHDfb1.js";import{f as l,F as a,a as s}from"./formulier-blur-validatie.stories-DN9eVNia.js";import"./preload-helper-PPVm8Dsz.js";import"./vl-checkbox.component-JIaDIK8d.js";import"./vl-datepicker.component-bkPzXCz5.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-gnnClTNg.js";import"./vl-input-field-masked.component-CjwXFy6D.js";import"./vl-radio.component-bG225eeY.js";import"./vl-radio-group.component-Bg2Yqg1x.js";import"./vl-select.component-HC-RNt77.js";import"./vl-select-rich.component-Bv02-TZn.js";import"./vl-textarea.component-Plygnhn2.js";import"./vl-textarea-rich.component-B4o79-OP.js";import"./vl-upload.component-VXUupjXw.js";import"./vl-upload-progress.component-C-7N_DLZ.js";function t(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
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
`,e.jsx(n.li,{children:`Na de eerste foutmelding verdwijnt die weer zodra de waarde geldig wordt, terwijl de gebruiker nog aan het
typen is. Er hoeft niet opnieuw weggeklikt te worden.`}),`
`,e.jsx(n.li,{children:`Submit blijft de definitieve check: bij submit wordt nog steeds alles gevalideerd en springt de focus naar het
eerste ongeldige veld.`}),`
`]}),`
`,e.jsxs(n.p,{children:[`De foutmeldingen lopen via hetzelfde mechanisme als de standaard validatie
(`,e.jsx(n.a,{href:"/docs/components-form-form-message--documentatie",children:e.jsx(n.code,{children:"vl-form-message"})})," + ",e.jsx(n.code,{children:"ValidityState"}),")."]}),`
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
`,e.jsxs(n.p,{children:["Een veld met een eigen ",e.jsx(n.code,{children:"blur-validation"}),` attribuut blijft daarnaast los werken. Staat het attribuut op de form,
dan kan een veld daar niet individueel van afwijken.`]}),`
`,e.jsx(n.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"blur-validation"})," is bewust opt-in. Validatie pas op ",e.jsx(n.code,{children:"focusout"}),` (en niet op elke toetsaanslag) beperkt
ruis voor screenreaders tijdens het invullen.`]}),`
`,e.jsxs(n.p,{children:["De foutmelding staat in een ",e.jsx(n.code,{children:'aria-live="polite"'})," regio met ",e.jsx(n.code,{children:'role="status"'})," (via ",e.jsx(n.code,{children:"vl-form-message"}),`), zodat
screenreaders ze voorlezen zodra ze verschijnt of wijzigt. `,e.jsx(n.code,{children:'aria-atomic="true"'}),` zorgt dat telkens de
volledige boodschap wordt voorgelezen. De control krijgt `,e.jsx(n.code,{children:'aria-invalid="true"'}),` zodat de ongeldige toestand
ook los van de melding kenbaar is. Eén uitzondering: bij `,e.jsx(n.code,{children:"vl-upload"}),` haalt dat attribuut de accessibility
tree niet, zie `,e.jsx(n.a,{href:"/docs/richtlijnen-toegankelijkheid-praktijk-gekende-beperkingen-wip--documentatie",children:"Gekende Beperkingen"}),"."]}),`
`,e.jsx(n.p,{children:`Blur-validatie verplaatst de focus niet: het veld toont enkel zijn melding. Alleen bij submit springt de
focus naar het eerste ongeldige veld.`}),`
`,e.jsx(n.h2,{id:"ondersteunde-componenten",children:"Ondersteunde componenten"}),`
`,e.jsx(n.p,{children:"Het attribuut werkt op alle form controls:"}),`
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
`]})]})}function D(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{D as default};
