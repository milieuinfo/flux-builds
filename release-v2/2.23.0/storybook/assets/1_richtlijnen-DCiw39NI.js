import{u as t,j as e,M as r}from"./iframe-Cv28D2NX.js";import"./preload-helper-PPVm8Dsz.js";function i(l){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Richtlijnen/Toegankelijkheid - Praktijk/Richtlijnen"}),`
`,e.jsx(n.h1,{id:"richtlijnen",children:"Richtlijnen"}),`
`,e.jsx(n.h2,{id:"form",children:"Form"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`Geef elke form control een zichtbaar label met een
`,e.jsxs(n.a,{href:"/docs/components-form-form-label--documentatie",children:[e.jsx(n.code,{children:"<vl-form-label>"})," component"]}),` gelinkt aan de form control met het
`,e.jsx(n.code,{children:"for"}),` attribuut. Dat is een vereiste van
`,e.jsx(n.a,{href:"/docs/richtlijnen-toegankelijkheid-aanpak-3-begrijpelijk-3-3-assistentie-bij-invoer--documentatie",children:"3.3.2 Labels of instructies"}),".",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"vl-form-label"})," geeft zijn labeltekst door aan de form control, waar ze de ",e.jsx(n.code,{children:"aria-label"}),` van het onderliggende
veld wordt. Dat is de waarde van het `,e.jsx(n.code,{children:"label"}),` attribuut, of anders de tekst uit de default slot. Van HTML in de
slot gaat enkel de tekst mee, zonder opmaak.`]}),`
`,e.jsxs(n.li,{children:["Uitzonderlijk heeft een veld geen ",e.jsx(n.code,{children:"vl-form-label"}),". Dan vul je het ",e.jsx(n.code,{children:"label"}),` attribuut van de form control zelf in.
Dat vult enkel het `,e.jsx(n.code,{children:"aria-label"}),` van het onderliggende veld in en toont niets op het scherm. Gebruik het alleen
als er al een zichtbaar label of een zichtbare instructie bij het veld staat, bijvoorbeeld een kolomtitel boven
een veld in een tabel of de knop "Zoeken" naast een zoekveld.`]}),`
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
`,e.jsxs(n.li,{children:["Stel het ",e.jsx(n.code,{children:"autocomplete"})," attribuut correct in, zie ",e.jsx(n.a,{href:"#autocomplete-bij-persoonlijke-gegevens",children:"Autocomplete bij persoonlijke gegevens"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"verplichte-en-optionele-velden",children:"Verplichte en optionele velden"}),`
`,e.jsxs(n.p,{children:["Markeer ",e.jsx(n.strong,{children:"enkel de optionele velden"}),", met de tekst ",e.jsx(n.code,{children:"(optioneel)"}),` achter het label. Een veld zonder markering is
verplicht. Dit volgt de richtlijn
`,e.jsx("a",{href:"https://www.vlaanderen.be/vlaanderen-design-system/richtlijnen/formulieren/verplichte-versus-optionele-velden",target:"_blank",rel:"noopener noreferrer nofollow",children:"Verplichte versus optionele velden van het Vlaanderen Design System (opent in nieuw venster)"}),"."]}),`
`,e.jsxs(n.p,{children:["Gebruik ",e.jsx(n.strong,{children:"geen"})," ",e.jsx(n.code,{children:"*"}),` om een verplicht veld te markeren. Een sterretje heeft geen betekenis voor wie het symbool niet
kent. In de labeltekst wordt het bovendien deel van de `,e.jsx(n.code,{children:"aria-label"}),`, en afhankelijk van de screenreader en de
instellingen voor leestekens klinkt het label dan als "Naam ster", "Naam sterretje" of gewoon "Naam".`]}),`
`,e.jsxs(n.p,{children:["Zet de markering in het ",e.jsx(n.code,{children:"annotation"}),` attribuut van
`,e.jsx(n.a,{href:"/docs/components-form-form-label--documentatie",children:e.jsx(n.code,{children:"<vl-form-label>"})}),`, nooit in de labeltekst. De annotatie staat
visueel achter het label, maar `,e.jsx(n.code,{children:"vl-form-label"}),` geeft enkel zijn labeltekst door aan de form control, niet zijn
annotatie. De toegankelijke naam van het veld is dus de labeltekst, en spraakbesturing vindt het veld met de woorden
van het label
(`,e.jsx(n.a,{href:"/docs/richtlijnen-toegankelijkheid-aanpak-2-bedienbaar-2-5-input-modaliteiten--documentatie",children:"2.5.3 Label in naam"}),`).
Een screenreader haalt verplicht of optioneel niet uit de annotatie, maar uit `,e.jsx(n.code,{children:"required"}),". Zet ",e.jsx(n.code,{children:"required"}),` dus op elke
verplichte form control.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form class="vl-form vl-stacked vl-stacked-small">
    <vl-form-message variant="annotation">Alle velden zijn verplicht, tenzij anders vermeld.</vl-form-message>

    <div>
        <vl-form-label for="naam" label="Naam" block></vl-form-label>
        <vl-input-field id="naam" name="naam" autocomplete="name" required></vl-input-field>
    </div>

    <div>
        <vl-form-label for="telefoon" label="Telefoonnummer" annotation="(optioneel)" block></vl-form-label>
        <vl-input-field id="telefoon" name="telefoon" type="tel" autocomplete="tel"></vl-input-field>
    </div>
</form>
`})}),`
`,e.jsxs(n.p,{children:["Zijn ",e.jsx(n.strong,{children:"alle"})," velden verplicht, dan markeer je niets per veld en volstaat de helptekst ",e.jsx(n.code,{children:"Alle velden zijn verplicht."}),`
Zijn de meeste velden optioneel, dan draai je de regel om en markeer je de verplichte velden met `,e.jsx(n.code,{children:"(verplicht)"}),"."]}),`
`,e.jsxs(n.p,{children:["De helptekst moet vóór het eerste veld in de ",e.jsx(n.strong,{children:"DOM"}),` staan, niet enkel visueel bovenaan. Staat ze erna, dan komt een
screenreadergebruiker ze pas tegen wanneer de velden al ingevuld zijn
(`,e.jsx(n.a,{href:"/docs/richtlijnen-toegankelijkheid-aanpak-3-begrijpelijk-3-3-assistentie-bij-invoer--documentatie",children:"3.3.2 Labels of instructies"}),")."]}),`
`,e.jsxs(n.p,{children:["Laat in alle gevallen het ",e.jsx(n.code,{children:"required"})," attribuut op de form control staan. Dat blijft de bron van de ",e.jsx(n.code,{children:"valueMissing"}),`
validatie en van de aankondiging "verplicht" door een screenreader; de markering is enkel toelichting en
vervangt `,e.jsx(n.code,{children:"required"}),` niet. Is een veld maar in
bepaalde gevallen verplicht, bind dan beide aan diezelfde voorwaarde, zodat de markering en de validatie niet uiteen
kunnen lopen:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`<vl-form-label
    for="verduidelijking"
    label="Verduidelijking"
    annotation=\${this.isVerplicht ? nothing : '(optioneel)'}
    block
></vl-form-label>
<vl-input-field id="verduidelijking" name="verduidelijking" ?required=\${this.isVerplicht}></vl-input-field>
`})}),`
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form class="vl-form vl-stacked vl-stacked-small">
    <vl-form-message variant="annotation">Alle velden zijn verplicht.</vl-form-message>

    <div>
        <vl-form-label for="voornaam" label="Voornaam" block></vl-form-label>
        <vl-input-field id="voornaam" name="voornaam" autocomplete="given-name" required></vl-input-field>
    </div>

    <div>
        <vl-form-label for="email" label="E-mailadres" block></vl-form-label>
        <vl-input-field id="email" name="email" type="email" autocomplete="email" required></vl-input-field>
    </div>

    <div>
        <vl-form-label for="geboortedatum" label="Geboortedatum" block></vl-form-label>
        <vl-datepicker id="geboortedatum" name="geboortedatum" autocomplete="bday" required></vl-datepicker>
    </div>
</form>
`})}),`
`,e.jsxs(n.p,{children:["Gaat een veld niet over de gebruiker en zijn er geen relevante suggesties, zet dan ",e.jsx(n.code,{children:'autocomplete="off"'}),"."]}),`
`,e.jsxs(n.p,{children:[`Alle tokens vind je in
`,e.jsx("a",{href:"https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill",target:"_blank",rel:"noopener noreferrer nofollow",children:"Autofill in de HTML-specificatie (opent in nieuw venster)"}),"."]})]})}function o(l={}){const{wrapper:n}={...t(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(i,{...l})}):i(l)}export{o as default};
