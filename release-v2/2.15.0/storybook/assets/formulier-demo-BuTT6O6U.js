import{u as r,j as e,M as s,C as a,S as m}from"./iframe-CsDE-vVI.js";import{f as i,F as d}from"./formulier-demo.stories-C0mzg7sJ.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-form-data.component-BOqnlftT.js";import"./vl-checkbox.component-DNAaIDfV.js";import"./vl-datepicker.component-B8xEwRRZ.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-BQ--xd-F.js";import"./vl-input-field-masked.component-DWeWO-SS.js";import"./vl-radio.component-C8K4TTrz.js";import"./vl-radio-group.component-ssmdRgtT.js";import"./vl-select.component-Cs0d-V9w.js";import"./vl-select-rich.component-Dmhm0e3m.js";import"./vl-textarea.component-Cf6kOsHf.js";import"./vl-textarea-rich.component-DmnbcJ0u.js";import"./vl-upload.component-CFNkhe3E.js";import"./vl-upload-progress.component-BIDd-DNQ.js";const v=`import { registerWebComponents, webComponent } from '@domg-wc/common';
import { VlButtonComponent, VlTextComponent } from '@domg-wc/components/atom';
import {
    parseFormData,
    SelectOption,
    SelectRichOption,
    VlCheckboxComponent,
    VlDatepickerComponent,
    VlFormLabelComponent,
    VlFormMessageComponent,
    VlInputFieldComponent,
    VlInputFieldMaskedComponent,
    VlRadioComponent,
    VlRadioGroupComponent,
    VlSelectComponent,
    VlSelectRichComponent,
    VlTextareaComponent,
    VlUploadComponent,
} from '@domg-wc/components/form';
import { vlLayoutStyles, vlLegacyStyles } from '@domg-wc/styles';
import { css, CSSResult, html, LitElement } from 'lit';

@webComponent('vl-form-demo')
export class VlFormDemoComponent extends LitElement {
    private geboorteplaatsen: SelectRichOption[] = [
        {
            label: 'België',
            value: '',
            choices: [
                { label: 'Hasselt', value: 'hasselt' },
                { label: 'Turnhout', value: 'turnhout' },
                { label: 'Knokke-Heist', value: 'knokke-heist' },
                { label: 'Waregem', value: 'waregem' },
                { label: 'Lier', value: 'lier' },
            ],
        },
        {
            label: 'Puerto Rico',
            value: '',
            choices: [{ label: 'Rio Piedras', value: 'rio piedras' }],
        },
    ];

    private hobbies: SelectRichOption[] = [
        { label: 'Padel', value: 'padel' },
        { label: 'Dans', value: 'dans' },
        { label: 'Drummen', value: 'drummen' },
        { label: 'Zwemmen', value: 'zwemmen' },
        { label: 'Boardgames', value: 'boardgames' },
        { label: 'Fietsen', value: 'fietsen' },
    ];

    private kinderenOpties: SelectOption[] = [
        { label: '0', value: '0' },
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5 of meer', value: '5 of meer' },
    ];

    static {
        registerWebComponents([
            VlFormLabelComponent,
            VlInputFieldComponent,
            VlInputFieldMaskedComponent,
            VlTextareaComponent,
            VlDatepickerComponent,
            VlSelectRichComponent,
            VlSelectComponent,
            VlRadioGroupComponent,
            VlRadioComponent,
            VlUploadComponent,
            VlCheckboxComponent,
            VlFormMessageComponent,
            VlButtonComponent,
            VlTextComponent,
        ]);
    }

    static override get styles(): (CSSResult | CSSResult[])[] {
        return [
            vlLegacyStyles,
            vlLayoutStyles,
            css\`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }

                .form-buttons {
                    vl-button:not(:last-child) {
                        margin-right: 1.4rem;
                    }
                }
            \`,
        ];
    }

    override render() {
        return html\`
            <form id="form" class="vl-form" @submit=\${this.onSubmit}>
                <div class="vl-grid vl-stacked-small">
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="naam" label="Naam *"></vl-form-label>
                        <vl-text annotation small>(enkel achternaam)</vl-text>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-input-field
                            id="naam"
                            name="naam"
                            autocomplete="given-name"
                            block
                            required
                            pattern="^[a-zA-Z ]*$"
                            min-length=\${2}
                            max-length=\${20}
                            placeholder="bv. Jo"
                        ></vl-input-field>
                        <vl-form-message for="naam" state="valueMissing"
                            >Gelieve een naam in te vullen.
                        </vl-form-message>
                        <vl-form-message for="naam" state="valid"> Deze naam is geldig. </vl-form-message>
                        <vl-form-message for="naam" state="tooShort"
                            >Gelieve minimum 2 karakters te gebruiken.
                        </vl-form-message>
                        <vl-form-message for="naam" state="tooLong"
                            >Gelieve maximum 20 karakters te gebruiken.
                        </vl-form-message>
                        <vl-form-message for="naam" state="patternMismatch"
                            >Gelieve geen nummers of speciale tekens in te vullen.
                        </vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="rrn" label="Rijksregisternummer *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-input-field-masked
                            id="rrn"
                            name="rrn"
                            block
                            required
                            mask="rrn"
                            placeholder="bv. 86-12-31-123-45"
                        ></vl-input-field-masked>
                        <vl-form-message for="rrn" variant="annotation">
                            Een rijksregisternummer heeft het formaat yy-dd-mm-xyz-cn
                        </vl-form-message>
                        <vl-form-message for="rrn" state="valueMissing"
                            >Gelieve een rijksregisternummer in te vullen.</vl-form-message
                        >
                        <vl-form-message for="rrn" state="patternMismatch"
                            >Gelieve een geldig rijksregisternummer in te vullen.</vl-form-message
                        >
                        <vl-form-message for="rrn" state="valid">Dit rijksregisternummer is geldig. </vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="geboortedatum" label="Geboortedatum *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-datepicker
                            id="geboortedatum"
                            name="geboortedatum"
                            autocomplete="bday"
                            placeholder="bv. 31.12.1992"
                            block
                            required
                        >
                        </vl-datepicker>
                        <vl-form-message for="geboortedatum" state="valueMissing">
                            Gelieve een geboortedatum in te vullen.
                        </vl-form-message>
                        <vl-form-message for="geboortedatum" state="valid">
                            Deze geboortedatum is geldig.
                        </vl-form-message>
                        <vl-form-message for="geboortedatum" state="patternMismatch">
                            Gelieve het volgende datum formaat te gebruiken: "dd.mm.YYYY", bv. 01.12.1976 of 1.2.1993
                        </vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="geboorteplaats" label="Geboorteplaats *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-select-rich
                            id="geboorteplaats"
                            name="geboorteplaats"
                            required
                            search
                            .options=\${this.geboorteplaatsen}
                            result-limit="2"
                            placeholder="bv. Smeerebbe-Vloerzegem"
                            no-results-text="Geen geboorteplaatsen gevonden"
                            search-placeholder="Zoek geboorteplaats"
                        >
                        </vl-select-rich>
                        <vl-form-message for="geboorteplaats" state="valueMissing"
                            >Gelieve een geboorteplaats te selecteren.
                        </vl-form-message>
                        <vl-form-message for="geboorteplaats" state="valid"
                            >Deze geboorteplaats is geldig.
                        </vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="hobbies" label="Hobbies *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-select-rich
                            id="hobbies"
                            name="hobbies"
                            required
                            multiple
                            .options=\${this.hobbies}
                            placeholder="bv. Boardgames"
                            no-results-text="Geen hobbies gevonden"
                            no-choices-text="Geen resterende hobbies gevonden"
                        >
                        </vl-select-rich>
                        <vl-form-message for="hobbies" state="valueMissing"
                            >Gelieve een hobby te selecteren.
                        </vl-form-message>
                        <vl-form-message for="hobbies" state="valid">Deze hobbyselectie is geldig. </vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="kinderen" label="Aantal kinderen *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-select
                            id="kinderen"
                            name="kinderen"
                            block
                            placeholder="bv. 1"
                            required
                            .options=\${this.kinderenOpties}
                        ></vl-select>
                        <vl-form-message for="kinderen" state="valueMissing"
                            >Gelieve een aantal kinderen te kiezen.
                        </vl-form-message>
                        <vl-form-message for="kinderen" state="valid">Dit aantal kinderen is geldig. </vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="interesses" label="Interesses *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-textarea
                            id="interesses"
                            name="interesses"
                            block
                            required
                            min-length=\${5}
                            max-length=\${100}
                            rows=\${10}
                            placeholder="bv. Ik ben geïnteresseerd in..."
                        ></vl-textarea>
                        <vl-form-message for="interesses" state="valueMissing"
                            >Gelieve je interesses in te vullen.
                        </vl-form-message>
                        <vl-form-message for="interesses" state="valid">Deze interesses zijn geldig. </vl-form-message>
                        <vl-form-message for="interesses" state="tooShort"
                            >Gelieve minimum 5 karakters te gebruiken.
                        </vl-form-message>
                        <vl-form-message for="interesses" state="tooLong"
                            >Gelieve maximum 100 karakters te gebruiken.
                        </vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="leeftijd" label="Leeftijd *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-input-field
                            id="leeftijd"
                            name="leeftijd"
                            type="number"
                            block
                            required
                            placeholder="bv. 35"
                            min=\${0}
                            max=\${99}
                        ></vl-input-field>
                        <vl-form-message for="leeftijd" state="valueMissing"
                            >Gelieve een leeftijd in te vullen.
                        </vl-form-message>
                        <vl-form-message for="leeftijd" state="valid">Deze leeftijd is geldig. </vl-form-message>
                        <vl-form-message for="leeftijd" state="rangeUnderflow"
                            >De minimum leeftijd is 0 jaar.
                        </vl-form-message>
                        <vl-form-message for="leeftijd" state="rangeOverflow"
                            >De maximum leeftijd is 99 jaar.
                        </vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="contactmethode" label="Contactmethode *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-radio-group id="contactmethode" name="contactmethode" required>
                            <vl-radio value="e-mail">e-mail</vl-radio>
                            <vl-radio value="telefoon">telefoon</vl-radio>
                            <vl-radio value="post">post</vl-radio>
                        </vl-radio-group>
                        <vl-form-message for="contactmethode" state="valueMissing">
                            Gelieve een contactmethode te selecteren.
                        </vl-form-message>
                        <vl-form-message for="contactmethode" state="valid">
                            Deze contactmethode is geldig.
                        </vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="foto" label="Pasfoto *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-upload
                            id="foto"
                            name="foto"
                            accepted-files="image/*"
                            required
                            url="http://httpbin.org/post"
                        ></vl-upload>
                        <vl-form-message for="foto" state="valueMissing">
                            Gelieve een foto te selecteren.
                        </vl-form-message>
                        <vl-form-message for="foto" state="valid"> Deze foto is geldig. </vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4 vl-column--s-12">
                        <vl-form-label for="waarheidsgetrouw" label="Waarheidsgetrouw *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8 vl-column--s-12">
                        <vl-checkbox id="waarheidsgetrouw" name="waarheidsgetrouw" block required>
                            Naar waarheid ingevuld
                        </vl-checkbox>
                        <vl-form-message for="waarheidsgetrouw" state="valueMissing">
                            Gelieve te bevestigen dat bovenstaande gegevens naar waarheid zijn ingevuld.
                        </vl-form-message>
                        <vl-form-message for="waarheidsgetrouw" state="valid">
                            Bedankt voor het bevestigen.
                        </vl-form-message>
                    </div>
                    <vl-fieldset horizontal class="vl-column vl-column--12">
                        <span slot="legend">Gerelateerde velden *</span>
                        <div class="vl-column vl-column--8 vl-column--s-12">
                            <div class="vl-group vl-group--collapse-xs">
                                <vl-input-field
                                    id="gerelateerd-1"
                                    name="gerelateerd-1"
                                    label="Gerelateerd veld 1 *"
                                    placeholder="Voorbeeld eerste veld"
                                    required
                                ></vl-input-field>
                                <vl-input-field
                                    id="gerelateerd-2"
                                    name="gerelateerd-2"
                                    label="Gerelateerd veld 2 *"
                                    placeholder="Voorbeeld tweede veld"
                                    required
                                ></vl-input-field>
                            </div>
                            <vl-form-message for="gerelateerd-1" state="valueMissing"
                                >Gelieve een waarde in te vullen voor "Gerelateerd veld 1".
                            </vl-form-message>
                            <vl-form-message for="gerelateerd-1" state="valid"
                                >"Gerelateerd veld 1" is geldig.
                            </vl-form-message>
                            <vl-form-message for="gerelateerd-2" state="valueMissing"
                                >Gelieve een waarde in te vullen voor "Gerelateerd veld 2".
                            </vl-form-message>
                            <vl-form-message for="gerelateerd-2" state="valid"
                                >"Gerelateerd veld 2" is geldig.
                            </vl-form-message>
                        </div>
                    </vl-fieldset>
                    <div class="vl-column vl-column--8 vl-column--s-12 vl-column--start-5 vl-column--s-start-1">
                        <div class="form-buttons">
                            <vl-button type="submit">Verstuur</vl-button>
                            <vl-button type="reset" secondary>Reset</vl-button>
                        </div>
                    </div>
                </div>
            </form>
        \`;
    }

    private onSubmit(event: Event): void {
        event.preventDefault();

        const data = parseFormData(event.target as HTMLFormElement);
        console.log(data);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-form-demo': VlFormDemoComponent;
    }
}
`;function n(o){const l={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components},{FluxAlert:t}=l;return t||c("FluxAlert"),e.jsxs(e.Fragment,{children:[e.jsx(s,{of:i}),`
`,e.jsx(l.h1,{id:"formulier---demo",children:"Formulier - Demo"}),`
`,e.jsxs(l.blockquote,{children:[`
`,e.jsxs(l.p,{children:[`Meer informatie over validatie binnen de formulier componenten vind je op
`,e.jsx(l.a,{href:"/docs/patronen-formulier-validatie--documentatie",children:"Formulier - Validatie"}),"."]}),`
`]}),`
`,e.jsxs(l.blockquote,{children:[`
`,e.jsxs(l.p,{children:[`Een uitgebreid voorbeeld over hoe je form data eenvoudiger kan parsen en gebruiken vind je
op `,e.jsx(l.a,{href:"/docs/patronen-formulier-form-data--documentatie",children:"Formulier - Form Data"}),"."]}),`
`]}),`
`,e.jsxs(l.p,{children:["Dit is een voorbeeld van hoe de form componenten in een form gebruikt kunnen worden.",e.jsx("br",{}),`
De submitted waarden worden in deze demo in de console gelogd.`]}),`
`,e.jsx(l.h2,{id:"componenten",children:"Componenten"}),`
`,e.jsxs(l.ul,{children:[`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"/docs/components-form-input-field--documentatie",children:"vl-input-field"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"/docs/components-form-input-field-masked--documentatie",children:"vl-input-field-masked"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"/docs/components-form-textarea--documentatie",children:"vl-textarea"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"/docs/components-form-datepicker--documentatie",children:"vl-datepicker"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"/docs/components-form-select-rich--documentatie",children:"vl-select-rich"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"/docs/components-form-select--documentatie",children:"vl-select"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"/docs/components-form-radio-group--documentatie",children:"vl-radio-group"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"/docs/components-form-upload--documentatie",children:"vl-upload"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"/docs/components-form-checkbox--documentatie",children:"vl-checkbox"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"/docs/components-form-form-message--documentatie",children:"vl-form-message"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"/docs/components-form-form-label--documentatie",children:"vl-form-label"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"/docs/components-form-fieldset--documentatie",children:"vl-fieldset"})}),`
`]}),`
`,e.jsx(l.h2,{id:"native-elementen",children:"Native elementen"}),`
`,e.jsx(l.p,{children:"Gebruik voor de volgende elementen native HtmlElements met css classes:"}),`
`,e.jsxs(l.ul,{children:[`
`,e.jsxs(l.li,{children:["Form: native HTMLFormElement met class ",e.jsx(l.code,{children:"vl-form"})," - ",e.jsx(l.code,{children:'<form class="vl-form">'})]}),`
`,e.jsxs(l.li,{children:["Action Group: native HtmlDivElement met class ",e.jsx(l.code,{children:"vl-action-group"})," - ",e.jsx(l.code,{children:'<div class="vl-action-group">'})]}),`
`,e.jsxs(l.li,{children:["Button: ",e.jsx(l.code,{children:"vl-button"})," component - ",e.jsx(l.a,{href:"/docs/components-atom-button--documentatie",children:"documentatie"})]}),`
`]}),`
`,e.jsx(l.h2,{id:"grid",children:"Grid"}),`
`,e.jsxs(l.p,{children:["Maak voor het opbouwen van de grid structuur gebruik van de ",e.jsx(l.a,{href:"/docs/styles-layout-grid--documentatie",children:"vl-grid classes"}),".",e.jsx("br",{}),`
Plaats deze op native HtmlDivElements.`]}),`
`,e.jsx(l.h2,{id:"form-data",children:"Form data"}),`
`,e.jsxs(l.p,{children:["Gebruik de ",e.jsx(l.a,{href:"/docs/patronen-formulier-form-data--documentatie",children:"parseFormData"})," helper functie om de form data te verzamelen.",e.jsx("br",{}),`
Indien je meer controle nodig hebt kan je zelf de `,e.jsx(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",rel:"nofollow",children:"FormData"})," API gebruiken."]}),`
`,e.jsx(t,{type:"warning",children:`
  Indien je een form control wrapped in een custom component, zorg er voor dat dit custom component geen shadow DOM
  heeft.<br/>
  Als dit custom component een shadow DOM heeft, zal het native HtmlFormElement de form control niet meer vinden.
`}),`
`,e.jsx(a,{of:d,sourceState:"none"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(m,{code:v,language:"ts",dark:!0})]})]})}function y(o={}){const{wrapper:l}={...r(),...o.components};return l?e.jsx(l,{...o,children:e.jsx(n,{...o})}):n(o)}function c(o,l){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{y as default};
