import{u as t,j as e,M as r}from"./iframe-ylVHDfb1.js";import"./preload-helper-PPVm8Dsz.js";function i(l){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Richtlijnen/Toegankelijkheid - Praktijk/Richtlijnen [WIP]"}),`
`,e.jsx(n.h1,{id:"richtlijnen-wip",children:"Richtlijnen [WIP]"}),`
`,e.jsx(n.h2,{id:"form",children:"Form"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`Geef elke form control een zichtbaar label met een
`,e.jsxs(n.a,{href:"/docs/components-form-form-label--documentatie",children:[e.jsx(n.code,{children:"<vl-form-label>"})," component"]}),` gelinkt aan de form control met het
`,e.jsx(n.code,{children:"for"}),` attribuut. Dat is een vereiste van
`,e.jsx(n.a,{href:"/docs/richtlijnen-toegankelijkheid-aanpak-3-begrijpelijk-3-3-assistentie-bij-invoer--documentatie",children:"3.3.2 Labels of instructies"}),".",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Het ",e.jsx(n.code,{children:"label"})," attribuut van de form control vult enkel het ",e.jsx(n.code,{children:"aria-label"}),` van het onderliggende veld in en toont
niets op het scherm. Gebruik het alleen als er al een zichtbaar label of een zichtbare instructie bij het veld
staat, bijvoorbeeld een kolomtitel boven een veld in een tabel of de knop "Zoeken" naast een zoekveld.`]}),`
`,e.jsxs(n.li,{children:["Laat het ",e.jsx(n.code,{children:"label"}),` attribuut dan de zichtbare tekst bevatten, zodat spraakbesturing het veld vindt met de woorden
die de gebruiker ziet
(`,e.jsx(n.a,{href:"/docs/richtlijnen-toegankelijkheid-aanpak-2-bedienbaar-2-5-input-modaliteiten--documentatie",children:"2.5.3 Label in naam"}),")."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Geef duidelijke, specifieke instructies hoe een validatie fout kan opgelost worden in de foutboodschap.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"NIET"}),': "E-mail adres is niet juist."']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"WEL"}),': "Vul een geldig e-mailadres in. Bijvoorbeeld: omgeving@vlaanderen.be"']}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Stel het ",e.jsx(n.code,{children:"placeholder"})," attribuut correct in. Gebruik het ",e.jsx(n.code,{children:"placeholder"}),` attribuut enkel als het een voorbeeldwaarde
is. Gebruik het niet als label.`]}),`
`,e.jsxs(n.li,{children:["Stel het ",e.jsx(n.code,{children:"autocomplete"})," attribuut correct in. Gebruik waarde ",e.jsx(n.code,{children:"off"}),` als er geen relevante autocomplete suggesties
zijn. Meer info op `,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete",rel:"nofollow",children:"MDN"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"autocomplete-bij-persoonlijke-gegevens",children:"Autocomplete bij persoonlijke gegevens"}),`
`,e.jsxs(n.p,{children:[`Vraagt een veld een gegeven over de gebruiker zelf, dan moet het het bijhorende autocomplete-token dragen. Dat is
niet enkel comfort: het laat de browser en hulptechnologie toe het veld automatisch in te vullen of van een
herkenbaar icoon te voorzien, en het is een vereiste van
`,e.jsx(n.a,{href:"/docs/richtlijnen-toegankelijkheid-aanpak-1-waarneembaar-1-3-aanpasbaar--documentatie",children:"1.3.5 Identificeer het doel van de input"}),"."]}),`
`,e.jsx(n.p,{children:"De meest voorkomende tokens:"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Token"}),e.jsx("th",{scope:"col",children:"Veld"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"name"})}),e.jsx("td",{children:"Volledige naam in één veld"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"given-name"})}),e.jsx("td",{children:"Voornaam"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"family-name"})}),e.jsx("td",{children:"Familienaam"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"email"})}),e.jsx("td",{children:"E-mailadres"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"tel"})}),e.jsx("td",{children:"Telefoonnummer in één veld"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"street-address"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["Straat, huisnummer en bus, zonder postcode of gemeente. Hoort in een meerregelig veld zoals"," ",`
`,e.jsx("code",{children:"vl-textarea"}),". In een éénregelig ",e.jsx("code",{children:"vl-input-field"})," gebruik je"," ",`
`,e.jsx("code",{children:"address-line1"})," (en eventueel ",e.jsx("code",{children:"address-line2"}),")"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"postal-code"})}),e.jsx("td",{children:"Postcode"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"address-level2"})}),e.jsx("td",{children:"Gemeente of stad"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"country-name"})}),e.jsx("td",{children:"Land"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"bday"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["Geboortedatum in één veld; gesplitst gebruik je ",e.jsx("code",{children:"bday-day"}),", ",e.jsx("code",{children:"bday-month"}),` en
`,e.jsx("code",{children:"bday-year"})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"organization"})}),e.jsx("td",{children:"Naam van de organisatie"})]})]})]}),`
`,e.jsx(n.p,{children:`In Flux zet je het token rechtstreeks als attribuut op de form control. Deze componenten geven het door aan het
onderliggende veld:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-form-input-field--documentatie",children:e.jsx(n.code,{children:"vl-input-field"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-form-textarea--documentatie",children:e.jsx(n.code,{children:"vl-textarea"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-form-select--documentatie",children:e.jsx(n.code,{children:"vl-select"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-form-datepicker--documentatie",children:e.jsx(n.code,{children:"vl-datepicker"})})}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form>
    <vl-form-label for="voornaam" label="Voornaam" block></vl-form-label>
    <vl-input-field id="voornaam" name="voornaam" autocomplete="given-name"></vl-input-field>

    <vl-form-label for="email" label="E-mailadres" block></vl-form-label>
    <vl-input-field id="email" name="email" type="email" autocomplete="email"></vl-input-field>

    <vl-form-label for="geboortedatum" label="Geboortedatum" block></vl-form-label>
    <vl-datepicker id="geboortedatum" name="geboortedatum" autocomplete="bday"></vl-datepicker>
</form>
`})}),`
`,e.jsxs(n.p,{children:[`De volledige lijst tokens staat in de
`,e.jsx(n.a,{href:"https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill",rel:"nofollow",children:"HTML-specificatie"}),"."]})]})}function s(l={}){const{wrapper:n}={...t(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(i,{...l})}):i(l)}export{s as default};
