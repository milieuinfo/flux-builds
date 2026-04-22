import{u as r,j as e,M as d,C as o}from"./iframe-aAtdr__L.js";import{f as a,F as l,a as s}from"./formulier-validatie.stories-DPLjF-rp.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-checkbox.component-DIOV2u4x.js";import"./vl-datepicker.component-DroSrUTc.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-CBJ3Dwav.js";import"./vl-input-field-masked.component-Chq9N1ul.js";import"./vl-radio.component-Bio8-SwX.js";import"./vl-radio-group.component-B8TpxYt_.js";import"./vl-select.component-CPY3amz9.js";import"./vl-select-rich.component-DUfvf59G.js";import"./vl-textarea.component-BMidRRhi.js";import"./vl-textarea-rich.component-CIG315zy.js";import"./vl-upload.component-DUjTvZh5.js";import"./vl-upload-progress.component-DCbMC6_6.js";function t(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a}),`
`,e.jsx(n.h1,{id:"formulier---validatie",children:"Formulier - Validatie"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`Een uitgebreid voorbeeld van validatie met de formulier componenten vind je op
`,e.jsx(n.a,{href:"/docs/patronen-formulier-demo--documentatie",children:"Formulier - Demo"}),"."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`Een voorbeeld om custom validatie te schrijven vind je op
`,e.jsx(n.a,{href:"/docs/patronen-formulier-aangepaste-validatie--documentatie",children:"Formulier - Aangepaste Validatie"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["De formulier componenten maken gebruik van open-wc's ",e.jsx(n.a,{href:"https://github.com/open-wc/form-participation",rel:"nofollow",children:"form participation"}),` om form validatie te bekomen met web
components die gebruik maken van native HTML form elements.`]}),`
`,e.jsxs(n.p,{children:["Deze library is gebaseerd op ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation",rel:"nofollow",children:"native HTML form validatie"})," en ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation",rel:"nofollow",children:"Constraint Validation API"}),` en blijft zo dicht
mogelijk bij de native HTML form validatie.`]}),`
`,e.jsxs(n.p,{children:["Daarnaast voorzien we ook de ",e.jsxs(n.a,{href:"/docs/patronen-formulier-form-data--documentatie#parseformdataformelement-form-multiformcontrolnames-string",children:[e.jsx(n.code,{children:"parseFormData()"})," helper functie"]})," om met de ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",rel:"nofollow",children:"FormData API"})," om te gaan."]}),`
`,e.jsx(n.h2,{id:"validitystate-in-formuliervalidatie",children:"ValidityState in Formuliervalidatie"}),`
`,e.jsxs(n.p,{children:["Een essentieel onderdeel van de validatie is de ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ValidityState",rel:"nofollow",children:"ValidityState interface"}),`, onderdeel van de native Validation API.
Dit object geeft de huidige validatiestatus van een form control weer en kan worden gebruikt om een gedetailleerde
foutmelding te verkrijgen.`]}),`
`,e.jsxs(n.p,{children:["Die foutmeldingen worden getoond door de ",e.jsxs(n.a,{href:"/docs/components-form-form-message--documentatie",children:[e.jsx(n.code,{children:"vl-form-message"})," component"]})," die de ",e.jsx(n.code,{children:"ValidityState"}),` van de form control
controleert.`]}),`
`,e.jsx(n.h2,{id:"attributen-van-validitystate",children:"Attributen van ValidityState"}),`
`,e.jsxs(n.p,{children:["Hieronder een overzicht van de gebruikte attributen van ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ValidityState#instance_properties",rel:"nofollow",children:"ValidityState"}),` met hun betekenis en bijhorende
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation#validation-related_attributes",rel:"nofollow",children:"validation attributen"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"customError"}),": als je custom validatie instelt, ",e.jsx(n.a,{href:"/docs/patronen-formulier-aangepaste-validatie--documentatie",children:"zie hier"})," hoe je zelf een custom validator schrijft."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"patternMismatch"}),": als de waarde niet overeenkomt met het patroon dat is ingesteld door het ",e.jsx(n.code,{children:"pattern"})," attribuut."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rangeOverflow"}),": als de waarde hoger is dan de waarde die is gespecifieerd door het ",e.jsx(n.code,{children:"max"})," attribuut."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rangeUnderflow"}),": als de waarde lager is dan de waarde die is gespecifieerd door het ",e.jsx(n.code,{children:"min"})," attribuut."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"tooLong"}),": als de waarde langer is dan de maximale lengte die is gespecifieerd door het ",e.jsx(n.code,{children:"maxlength"})," attribuut."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"tooShort"}),": als de waarde korter is dan de minimale lengte die is gespecifieerd door het ",e.jsx(n.code,{children:"minlength"})," attribuut."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"valueMissing"}),": als er een waarde is vereist, maar het invoerveld leeg is. Gespecificeerd door het ",e.jsx(n.code,{children:"required"}),`
attribuut.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"valid"}),": als de waarde geldig is en geen van de bovenstaande fouten heeft."]}),`
`]}),`
`,e.jsx(n.h2,{id:"gebruik-van-validitystate-in-onze-componenten",children:"Gebruik van ValidityState in Onze Componenten"}),`
`,e.jsx(n.p,{children:"Om de validatiestatus van een form control te controleren, moet je:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["een ",e.jsx(n.code,{children:"id"})," attribuut toevoegen aan de form control"]}),`
`,e.jsxs(n.li,{children:[`een constraint attribuut toevoegen aan de form control. Dit attribuut moet overeenkomen met de naam van de eigenschap
van de `,e.jsx(n.code,{children:"ValidityState"})," die je wil controleren, bv. ",e.jsx(n.code,{children:"required"}),"-attribuut voor ",e.jsx(n.code,{children:"valueMissing"})," of ",e.jsx(n.code,{children:"pattern"}),`-attribuut
voor `,e.jsx(n.code,{children:"patternMismatch"}),"."]}),`
`,e.jsxs(n.li,{children:["een ",e.jsx(n.code,{children:"for"})," attribuut toevoegen aan de ",e.jsx(n.code,{children:"vl-form-message"})," component. Dit attribuut moet overeenkomen met de ",e.jsx(n.code,{children:"id"}),` van de
form control.`]}),`
`,e.jsxs(n.li,{children:["het attribuut ",e.jsx(n.code,{children:"state"})," instellen op de ",e.jsx(n.code,{children:"vl-form-message"}),` component. Dit attribuut moet overeenkomen met de naam van de
eigenschap van de `,e.jsx(n.code,{children:"ValidityState"})," die je wil controleren."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Vervolgens zal de ",e.jsx(n.code,{children:"vl-form-message"})," component de foutmelding tonen die is ingesteld voor de ",e.jsx(n.code,{children:"ValidityState"}),` van de form
control wanneer gevalideerd wordt.
Standaard gebeurt dit wanneer de form gesubmit wordt door bv.:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"op de submit knop te klikken"}),`
`,e.jsx(n.li,{children:"de enter toets in te drukken terwijl een form control focus heeft"}),`
`]}),`
`,e.jsxs(n.p,{children:["Je kan ook de ",e.jsxs(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity",rel:"nofollow",children:[e.jsx(n.code,{children:"checkValidity"})," methode"]}),` van de form control aanroepen om de validatiestatus van de form control te
controleren.`]}),`
`,e.jsx(n.h2,{id:"enkele-voorbeelden-van-validitystate",children:"Enkele voorbeelden van ValidityState:"}),`
`,e.jsx(n.h3,{id:"ontbrekende-waarde",children:"Ontbrekende waarde"}),`
`,e.jsxs(n.p,{children:["Op het moment dat een veld verplicht is en geen waarde heeft, zal de ",e.jsx(n.code,{children:"valueMissing"})," eigenschap van de ",e.jsx(n.code,{children:"ValidityState"}),`
van de form control `,e.jsx(n.code,{children:"true"}),` zijn. Een veld met een ontbrekende waarde zal een foutmelding tonen die is ingesteld met
de `,e.jsx(n.code,{children:"vl-form-message"})," component waarvan de ",e.jsx(n.code,{children:"for"})," eigenschap overeenkomt met de ",e.jsx(n.code,{children:"id"}),` van de form control. De form control
moet ook het `,e.jsx(n.code,{children:"required"})," attribuut hebben."]}),`
`,e.jsxs(n.p,{children:["In onderstaande voorbeeld: druk op ",e.jsx(n.code,{children:"enter"})," zonder iets in te vullen om de foutmelding te zien."]}),`
`,e.jsx(o,{of:l,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"patroon-komt-niet-overeen",children:"Patroon komt niet overeen"}),`
`,e.jsxs(n.p,{children:["Als een veld een patroon heeft (attribuut ",e.jsx(n.code,{children:"pattern"}),`) en de waarde van het veld komt niet overeen met het patroon,
zal de `,e.jsx(n.code,{children:"patternMismatch"})," eigenschap van de ",e.jsx(n.code,{children:"ValidityState"})," van de form control ",e.jsx(n.code,{children:"true"}),` zijn en wordt ook de foutmelding
getoond.`]}),`
`,e.jsxs(n.p,{children:["In onderstaande voorbeeld: vul een cijfer of speciaal teken in en druk op ",e.jsx(n.code,{children:"enter"})," om de foutmelding te zien."]}),`
`,e.jsx(o,{of:s,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"aanbevelingen-voor-validatie",children:"Aanbevelingen voor Validatie"}),`
`,e.jsx(n.p,{children:`Vóór ingave, informeer de gebruiker over de validatiecriteria van een veld door een hint te tonen in de buurt van het
veld.`}),`
`,e.jsx(n.p,{children:`Na validatie, vermeld altijd duidelijk waarom een veld niet geldig is en geef de gebruiker een duidelijke hint over hoe
het probleem kan worden opgelost.`}),`
`,e.jsx(n.h2,{id:"lijst-componenten-met-onze-validitystate-implementatie",children:"Lijst componenten met onze ValidityState implementatie"}),`
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
`]})]})}function y(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{y as default};
