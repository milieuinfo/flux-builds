import{u as a,j as e,M as r,C as i}from"./iframe-COmpMQdF.js";import{z as l,Z as s}from"./zoeken-loading-state.stories-B0AuLtog.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-checkbox.component-EJPFA4bC.js";import"./vl-datepicker.component-DmfscCVL.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-NffaKHwy.js";import"./vl-input-field-masked.component-BFws6Fm5.js";import"./vl-radio.component-D4p3hrpQ.js";import"./vl-radio-group.component-B6hXQMjs.js";import"./vl-select.component-CthavkMC.js";import"./vl-select-rich.component-C2BLc7Ky.js";import"./vl-textarea.component-UkWwb0Sl.js";import"./vl-textarea-rich.component-BbPr5WyQ.js";import"./vl-upload.component-BEPyxouF.js";import"./vl-upload-progress.component-QcCuM0ah.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(n.h1,{id:"zoeken---loading-state",children:"Zoeken - loading state"}),`
`,e.jsxs(n.p,{children:["Een zoekformulier wordt opgebouwd met de ",e.jsx(n.a,{href:"/docs/components-form-input-group--documentatie",children:"Input Group"}),`:
een `,e.jsx(n.a,{href:"/docs/components-form-input-field--documentatie",children:"vl-input-field"}),` en een
`,e.jsx(n.a,{href:"/docs/components-atom-button--documentatie",children:"vl-button"}),` in de juiste toestand, gewrapt in een
`,e.jsx(n.code,{children:"<form>"}),". Zo is er geen aparte zoek-component nodig."]}),`
`,e.jsxs(n.p,{children:[`Bij trage backends (bv. een MAGDA-call) is het belangrijk om aan te geven dat de zoekopdracht loopt,
zodat gebruikers niet meermaals klikken. De `,e.jsx(n.code,{children:"loading"}),"-toestand van ",e.jsx(n.code,{children:"vl-button"}),` blokkeert het klikken
en zet `,e.jsx(n.code,{children:"aria-busy"}),"; zodra het resultaat binnen is zet je ",e.jsx(n.code,{children:"loading"})," terug op ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsx(i,{of:s,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"opbouw",children:"Opbouw"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form role="search" aria-label="Zoeken op deze site">
    <div class="vl-group vl-group--input-group">
        <vl-input-field input-group block type="search" name="zoekterm" label="Zoekterm"></vl-input-field>
        <vl-button input-group icon="search" type="submit" label="Zoeken" tertiary></vl-button>
    </div>
    <p role="status" aria-live="polite"></p>
</form>
`})}),`
`,e.jsxs(n.p,{children:["De loading-state stuur je aan op de ",e.jsx(n.code,{children:"vl-button"}),": zet ",e.jsx(n.code,{children:"loading"}),` zodra je de zoekopdracht start en
haal het er weer af zodra het resultaat binnen is.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`button.toggleAttribute('loading', true); // zoekopdracht gestart: knop geblokkeerd, aria-busy actief
// ... resultaat binnen ...
button.toggleAttribute('loading', false); // terug naar de normale toestand
status.textContent = '8 resultaten geladen.'; // aankondiging via aria-live
`})}),`
`,e.jsx(n.h2,{id:"toegankelijkheid-wcag-22-aa",children:"Toegankelijkheid (WCAG 2.2 AA)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:'role="search"'})," landmark"]}),` - gebruik dit enkel voor de globale site-search, zodat hulptechnologie
het zoekblok als landmark herkent. Staan er meerdere zoekvelden op één pagina (bv. een filter binnen
een lijst), geef dan elke `,e.jsx(n.code,{children:'role="search"'})," een eigen ",e.jsx(n.code,{children:"aria-label"}),`, of laat de role weg voor secundaire
zoekvelden.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"aria-busy"})," tijdens het zoeken"]})," - ",e.jsx(n.code,{children:"vl-button"})," zet ",e.jsx(n.code,{children:'aria-busy="true"'})," en ",e.jsx(n.code,{children:'aria-disabled="true"'}),`
zolang `,e.jsx(n.code,{children:"loading"}),` aanstaat en blokkeert herhaald klikken. Dat is voldoende om de knop-toestand te
communiceren, maar niet om het resultaat aan te kondigen.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Resultaten aankondigen via ",e.jsx(n.code,{children:"aria-live"})]})," - ",e.jsx(n.code,{children:"aria-busy"}),` alleen meldt een screenreader niet dat de
zoekopdracht klaar is. Voorzie een `,e.jsx(n.code,{children:'aria-live="polite"'}),"-regio (",e.jsx(n.code,{children:'role="status"'}),`) en vul die met een
korte samenvatting zodra het resultaat binnen is (bv. "8 resultaten geladen"). Zo voldoe je aan
`,e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html",rel:"nofollow",children:"WCAG 4.1.3 Status Messages"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Label"})," - het ",e.jsx(n.code,{children:"label"}),"-attribuut op ",e.jsx(n.code,{children:"vl-input-field"}),` is verplicht voor een toegankelijke naam; de
`,e.jsx(n.code,{children:"vl-button"}),' ontleent zijn naam aan het label "Zoeken" en is visueel gelabeld door het "search" icoon.']}),`
`]})]})}function y(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{y as default};
