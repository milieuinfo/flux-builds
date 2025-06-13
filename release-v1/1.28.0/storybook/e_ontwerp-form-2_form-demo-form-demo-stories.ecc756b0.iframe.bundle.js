"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[1782],{"./apps/storybook/docs/e_ontwerp/form/2_form-demo/form-demo.stories.ts":(e,t,l)=>{l.r(t),l.d(t,{Demo:()=>R,__namedExportsOrder:()=>O,default:()=>V});var r={};l.r(r),l.d(r,{Demo:()=>R,__namedExportsOrder:()=>O,default:()=>V});var o=l("./node_modules/lit-html/lit-html.js");l("./node_modules/react/index.js");var s=l("./node_modules/react/jsx-runtime.js"),n=l("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),i=l("./node_modules/@storybook/addon-docs/dist/index.mjs"),a=l("./node_modules/@storybook/blocks/dist/index.mjs");function c(e){let t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",code:"code"},(0,n.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h_,{of:r}),"\n",(0,s.jsx)(t.h1,{id:"form-demo",children:"Form Demo"}),"\n",(0,s.jsxs)(t.p,{children:["Dit is een voorbeeld van hoe de form componenten in een form gebruikt kunnen worden.",(0,s.jsx)("br",{}),"\nDe submitted waarden worden in deze demo in de console gelogd."]}),"\n",(0,s.jsx)(t.h2,{id:"componenten",children:"Componenten"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/form-next-input-field--documentatie",children:"vl-input-field-next"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/form-next-input-field-masked--documentatie",children:"vl-input-field-masked-next"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/form-next-textarea--documentatie",children:"vl-textarea-next"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/form-next-datepicker--documentatie",children:"vl-datepicker-next"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/form-next-select--documentatie",children:"vl-select-next"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/form-next-radio-group--documentatie",children:"vl-radio-group-next"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/form-next-upload--documentatie",children:"vl-upload-next"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/form-next-checkbox--documentatie",children:"vl-checkbox-next"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/form-next-error-message--documentatie",children:"vl-error-message-next"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/form-next-form-label--documentatie",children:"vl-form-label-next"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"native-elementen",children:"Native elementen"}),"\n",(0,s.jsx)(t.p,{children:"Gebruik voor de volgende elementen native HtmlElements met css classes:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Form: native HTMLFormElement met class ",(0,s.jsx)(t.code,{children:"vl-form"})]}),"\n",(0,s.jsxs)(t.li,{children:["Button: native HtmlButtonElement met class ",(0,s.jsx)(t.code,{children:"vl-button"})]}),"\n",(0,s.jsxs)(t.li,{children:["Action Group: native HtmlDivElement met class ",(0,s.jsx)(t.code,{children:"vl-action-group"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"grid",children:"Grid"}),"\n",(0,s.jsxs)(t.p,{children:["Maak voor het opbouwen van de grid structuur gebruik van de ",(0,s.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/form-grid",target:"_blank",rel:"nofollow noopener noreferrer",children:"vl-form-grid classes"})," van Digitaal Vlaanderen.",(0,s.jsx)("br",{}),"\nPlaats deze op native HtmlDivElements."]}),"\n",(0,s.jsx)(t.h2,{id:"formdata",children:"FormData"}),"\n",(0,s.jsxs)(t.p,{children:["Gebruik de ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",target:"_blank",rel:"nofollow noopener noreferrer",children:"FormData"})," API om de form data te verzamelen.\nVoor velden die meerdere waardes per naam kunnen hebben, zoals bv. de ",(0,s.jsx)(t.code,{children:"vl-upload-next"}),", kan je de ",(0,s.jsx)(t.code,{children:"FormData.getAll()"})," methode gebruiken."]}),"\n",(0,s.jsx)(t.h2,{id:"let-op",children:"❗Let op"}),"\n",(0,s.jsxs)(t.p,{children:["Indien je een form control wrapped in een custom component, zorg er voor dat dit custom component geen Shadow DOM heeft.",(0,s.jsx)("br",{}),"\nAls dit custom component een Shadow DOM heeft, zal het native HtmlFormElement de form control niet meer vinden."]}),"\n",(0,s.jsx)(a.Xz,{of:R,sourceState:"none"}),"\n",(0,s.jsxs)("details",{open:!0,children:[(0,s.jsx)("summary",{children:"Code"}),(0,s.jsx)(a.Hw,{code:'import { customElement } from \'lit/decorators.js\';\nimport { CSSResult, LitElement, css, html } from \'lit\';\nimport { registerWebComponents } from \'@domg-wc/common-utilities\';\nimport { VlFormLabelComponent } from \'@domg-wc/form/next/form-label\';\nimport { VlErrorMessageComponent } from \'@domg-wc/form/next/error-message\';\nimport { vlElementsStyle } from \'@domg-wc/elements\';\nimport { VlInputFieldComponent } from \'@domg-wc/form/next/input-field\';\nimport { VlInputFieldMaskedComponent } from \'@domg-wc/form/next/input-field-masked\';\nimport { VlTextareaComponent } from \'@domg-wc/form/next/textarea\';\nimport { SelectOption, VlSelectComponent } from \'@domg-wc/form/next/select\';\nimport { VlCheckboxComponent } from \'@domg-wc/form/next/checkbox\';\nimport { VlRadioComponent, VlRadioGroupComponent } from \'@domg-wc/form/next/radio-group\';\nimport { VlDatepickerComponent } from \'@domg-wc/form/next/datepicker\';\nimport { VlUploadComponent } from \'@domg-wc/form/next/upload\';\nimport { parseFormData } from \'@domg-wc/form/utils\';\n\n@customElement(\'vl-form-demo\')\nexport class FormDemoComponent extends LitElement {\n    private geboorteplaatsen: SelectOption[] = [\n        {\n            label: \'België\',\n            value: \'\',\n            choices: [\n                { label: \'Hasselt\', value: \'hasselt\' },\n                { label: \'Turnhout\', value: \'turnhout\' },\n                { label: \'Knokke-Heist\', value: \'knokke-heist\' },\n                { label: \'Waregem\', value: \'waregem\' },\n                { label: \'Lier\', value: \'lier\' },\n            ],\n        },\n        {\n            label: \'Puerto Rico\',\n            value: \'\',\n            choices: [{ label: \'Rio Piedras\', value: \'rio piedras\' }],\n        },\n    ];\n\n    private hobbies: SelectOption[] = [\n        { label: \'Padel\', value: \'padel\' },\n        { label: \'Dans\', value: \'dans\' },\n        { label: \'Drummen\', value: \'drummen\' },\n        { label: \'Zwemmen\', value: \'zwemmen\' },\n        { label: \'Boardgames\', value: \'boardgames\' },\n        { label: \'Fietsen\', value: \'fietsen\' },\n    ];\n\n    static {\n        registerWebComponents([\n            VlFormLabelComponent,\n            VlInputFieldComponent,\n            VlInputFieldMaskedComponent,\n            VlTextareaComponent,\n            VlDatepickerComponent,\n            VlSelectComponent,\n            VlRadioGroupComponent,\n            VlRadioComponent,\n            VlUploadComponent,\n            VlCheckboxComponent,\n            VlErrorMessageComponent,\n        ]);\n    }\n\n    static get styles(): (CSSResult | CSSResult[])[] {\n        return [\n            vlElementsStyle,\n            css`\n                form {\n                    margin-top: 1rem;\n                    max-width: 800px;\n                }\n            `,\n        ];\n    }\n\n    render() {\n        return html`\n            <form id="form" class="vl-form" @submit=${this.onSubmit}>\n                <div class="vl-form-grid vl-form-grid--is-stacked">\n                    <div class="vl-form-col--4-12">\n                        <vl-form-label-next for="naam" label="Naam *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-input-field-next\n                            id="naam"\n                            name="naam"\n                            block\n                            required\n                            pattern="^[a-zA-Z ]*$"\n                            min-length=${2}\n                            max-length=${20}\n                        ></vl-input-field-next>\n                        <vl-error-message-next for="naam" state="valueMissing"\n                            >Gelieve een naam in te vullen.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="naam" state="tooShort"\n                            >Gelieve minimum 2 karakters te gebruiken.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="naam" state="tooLong"\n                            >Gelieve maximum 20 karakters te gebruiken.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="naam" state="patternMismatch"\n                            >Gelieve geen nummers of speciale tekens in te vullen.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <vl-form-label-next for="rrn" label="Rijksregisternummer *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-input-field-masked-next\n                            id="rrn"\n                            name="rrn"\n                            block\n                            required\n                            mask="rrn"\n                        ></vl-input-field-masked-next>\n                        <vl-error-message-next for="rrn" state="valueMissing"\n                            >Gelieve een rijksregisternummer in te vullen.</vl-error-message-next\n                        >\n                        <vl-error-message-next for="rrn" state="patternMismatch"\n                            >Gelieve een geldig rijksregisternummer in te vullen.</vl-error-message-next\n                        >\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <vl-form-label-next for="geboortedatum" label="Geboortedatum *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-datepicker-next\n                            id="geboortedatum"\n                            name="geboortedatum"\n                            pattern="^(0?[1-9]|[12][0-9]|3[01])\\\\.(0?[1-9]|1[012])\\\\.([0-9]{4})$"\n                            block\n                            required\n                        >\n                        </vl-datepicker-next>\n                        <vl-error-message-next for="geboortedatum" state="valueMissing">\n                            Gelieve een geboortedatum in te vullen.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="geboortedatum" state="patternMismatch">\n                            Gelieve het volgende datum formaat te gebruiken: "dd.mm.YYYY", bv. 01.12.1976 of 1.2.1993\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <vl-form-label-next for="geboorteplaats" label="Geboorteplaats *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-select-next\n                            id="geboorteplaats"\n                            name="geboorteplaats"\n                            required\n                            search\n                            deletable\n                            .options=${this.geboorteplaatsen}\n                            result-limit="2"\n                            placeholder="Selecteer je geboorteplaats"\n                            no-results-text="Geen geboorteplaatsen gevonden"\n                            search-placeholder="Zoek geboorteplaats"\n                        >\n                        </vl-select-next>\n                        <vl-error-message-next for="geboorteplaats" state="valueMissing"\n                            >Gelieve een geboorteplaats te selecteren.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <vl-form-label-next for="hobbies" label="Hobbies *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-select-next\n                            id="hobbies"\n                            name="hobbies"\n                            required\n                            multiple\n                            deletable\n                            .options=${this.hobbies}\n                            placeholder="Selecteer je hobbies"\n                            no-results-text="Geen hobbies gevonden"\n                            no-choices-text="Geen resterende hobbies gevonden"\n                        >\n                        </vl-select-next>\n                        <vl-error-message-next for="hobbies" state="valueMissing"\n                            >Gelieve een hobby te selecteren.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <vl-form-label-next for="interesses" label="Interesses *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-textarea-next\n                            id="interesses"\n                            name="interesses"\n                            block\n                            required\n                            min-length=${5}\n                            max-length=${100}\n                            rows=${10}\n                        ></vl-textarea-next>\n                        <vl-error-message-next for="interesses" state="valueMissing"\n                            >Gelieve je interesses in te vullen.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="interesses" state="tooShort"\n                            >Gelieve minimum 5 karakters te gebruiken.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="interesses" state="tooLong"\n                            >Gelieve maximum 100 karakters te gebruiken.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <vl-form-label-next for="leeftijd" label="Leeftijd *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-input-field-next\n                            id="leeftijd"\n                            name="leeftijd"\n                            type="number"\n                            block\n                            required\n                            min=${0}\n                            max=${99}\n                        ></vl-input-field-next>\n                        <vl-error-message-next for="leeftijd" state="valueMissing"\n                            >Gelieve een leeftijd in te vullen.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="leeftijd" state="rangeUnderflow"\n                            >De minimum leeftijd is 0 jaar.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="leeftijd" state="rangeOverflow"\n                            >De maximum leeftijd is 99 jaar.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <vl-form-label-next for="contactmethode" label="Contactmethode *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-radio-group-next id="contactmethode" name="contactmethode" required>\n                            <vl-radio-next value="e-mail">e-mail</vl-radio-next>\n                            <vl-radio-next value="telefoon">telefoon</vl-radio-next>\n                            <vl-radio-next value="post">post</vl-radio-next>\n                        </vl-radio-group-next>\n                        <vl-error-message-next for="contactmethode" state="valueMissing">\n                            Gelieve een contactmethode te selecteren.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <vl-form-label-next for="foto" label="Pasfoto *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-upload-next\n                            id="foto"\n                            name="foto"\n                            accepted-files="image/*"\n                            required\n                            url="http://httpbin.org/post"\n                        ></vl-upload-next>\n                        <vl-error-message-next for="foto" state="valueMissing">\n                            Gelieve een foto te selecteren.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <vl-form-label-next\n                            for="waarheidsgetrouw"\n                            label="Waarheidsgetrouw *"\n                            block\n                        ></vl-form-label-next>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-checkbox-next id="waarheidsgetrouw" name="waarheidsgetrouw" block required>\n                            Naar waarheid ingevuld\n                        </vl-checkbox-next>\n                        <vl-error-message-next for="waarheidsgetrouw" state="valueMissing">\n                            Gelieve te bevestigen dat bovenstaande gegevens naar waarheid zijn ingevuld.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--6-12 vl-push--4-12">\n                        <div class="vl-action-group">\n                            <button class="vl-button" type="submit">Verstuur</button>\n                            <button class="vl-button" type="reset">Reset</button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        `;\n    }\n\n    private onSubmit(event: Event): void {\n        event.preventDefault();\n\n        const data = parseFormData(event.target as HTMLFormElement);\n        console.log(data);\n    }\n}\n\ndeclare global {\n    interface HTMLElementTagNameMap {\n        \'vl-form-demo\': FormDemoComponent;\n    }\n}\n',language:"ts",dark:!0})]})]})}var d=l("./libs/common/utilities/src/index.ts"),m=l("./node_modules/lit/decorators.js"),u=l("./node_modules/lit/index.js"),h=l("./libs/form/src/next/form-label/index.ts"),v=l("./libs/form/src/next/error-message/index.ts"),p=l("./libs/elements/src/index.ts"),b=l("./libs/form/src/next/input-field/index.ts"),f=l("./libs/form/src/next/input-field-masked/vl-input-field-masked.component.ts"),x=l("./libs/form/src/next/textarea/vl-textarea.component.ts"),g=l("./libs/form/src/next/select/index.ts"),k=l("./libs/form/src/next/checkbox/vl-checkbox.component.ts"),y=l("./libs/form/src/next/radio-group/vl-radio.component.ts"),w=l("./libs/form/src/next/radio-group/vl-radio-group.component.ts"),j=l("./libs/form/src/next/datepicker/vl-datepicker.component.ts"),_=l("./libs/form/src/next/upload/index.ts"),$=l("./libs/form/src/utils.ts");class C extends u.oi{static{(0,d.YV)([h.i,b.z,f.X,x.n,j.Z1,g.k,w.X,y.P,_.F,k.E,v.m])}static get styles(){return[p.CX,(0,u.iv)`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }
            `]}render(){return(0,u.dy)`
            <form id="form" class="vl-form" @submit=${this.onSubmit}>
                <div class="vl-form-grid vl-form-grid--is-stacked">
                    <div class="vl-form-col--4-12">
                        <vl-form-label-next for="naam" label="Naam *" block></vl-form-label-next>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-input-field-next
                            id="naam"
                            name="naam"
                            block
                            required
                            pattern="^[a-zA-Z ]*$"
                            min-length=${2}
                            max-length=${20}
                        ></vl-input-field-next>
                        <vl-error-message-next for="naam" state="valueMissing"
                            >Gelieve een naam in te vullen.
                        </vl-error-message-next>
                        <vl-error-message-next for="naam" state="tooShort"
                            >Gelieve minimum 2 karakters te gebruiken.
                        </vl-error-message-next>
                        <vl-error-message-next for="naam" state="tooLong"
                            >Gelieve maximum 20 karakters te gebruiken.
                        </vl-error-message-next>
                        <vl-error-message-next for="naam" state="patternMismatch"
                            >Gelieve geen nummers of speciale tekens in te vullen.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--4-12">
                        <vl-form-label-next for="rrn" label="Rijksregisternummer *" block></vl-form-label-next>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-input-field-masked-next
                            id="rrn"
                            name="rrn"
                            block
                            required
                            mask="rrn"
                        ></vl-input-field-masked-next>
                        <vl-error-message-next for="rrn" state="valueMissing"
                            >Gelieve een rijksregisternummer in te vullen.</vl-error-message-next
                        >
                        <vl-error-message-next for="rrn" state="patternMismatch"
                            >Gelieve een geldig rijksregisternummer in te vullen.</vl-error-message-next
                        >
                    </div>
                    <div class="vl-form-col--4-12">
                        <vl-form-label-next for="geboortedatum" label="Geboortedatum *" block></vl-form-label-next>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-datepicker-next
                            id="geboortedatum"
                            name="geboortedatum"
                            pattern="^(0?[1-9]|[12][0-9]|3[01])\\.(0?[1-9]|1[012])\\.([0-9]{4})$"
                            block
                            required
                        >
                        </vl-datepicker-next>
                        <vl-error-message-next for="geboortedatum" state="valueMissing">
                            Gelieve een geboortedatum in te vullen.
                        </vl-error-message-next>
                        <vl-error-message-next for="geboortedatum" state="patternMismatch">
                            Gelieve het volgende datum formaat te gebruiken: "dd.mm.YYYY", bv. 01.12.1976 of 1.2.1993
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--4-12">
                        <vl-form-label-next for="geboorteplaats" label="Geboorteplaats *" block></vl-form-label-next>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-select-next
                            id="geboorteplaats"
                            name="geboorteplaats"
                            required
                            search
                            deletable
                            .options=${this.geboorteplaatsen}
                            result-limit="2"
                            placeholder="Selecteer je geboorteplaats"
                            no-results-text="Geen geboorteplaatsen gevonden"
                            search-placeholder="Zoek geboorteplaats"
                        >
                        </vl-select-next>
                        <vl-error-message-next for="geboorteplaats" state="valueMissing"
                            >Gelieve een geboorteplaats te selecteren.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--4-12">
                        <vl-form-label-next for="hobbies" label="Hobbies *" block></vl-form-label-next>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-select-next
                            id="hobbies"
                            name="hobbies"
                            required
                            multiple
                            deletable
                            .options=${this.hobbies}
                            placeholder="Selecteer je hobbies"
                            no-results-text="Geen hobbies gevonden"
                            no-choices-text="Geen resterende hobbies gevonden"
                        >
                        </vl-select-next>
                        <vl-error-message-next for="hobbies" state="valueMissing"
                            >Gelieve een hobby te selecteren.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--4-12">
                        <vl-form-label-next for="interesses" label="Interesses *" block></vl-form-label-next>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-textarea-next
                            id="interesses"
                            name="interesses"
                            block
                            required
                            min-length=${5}
                            max-length=${100}
                            rows=${10}
                        ></vl-textarea-next>
                        <vl-error-message-next for="interesses" state="valueMissing"
                            >Gelieve je interesses in te vullen.
                        </vl-error-message-next>
                        <vl-error-message-next for="interesses" state="tooShort"
                            >Gelieve minimum 5 karakters te gebruiken.
                        </vl-error-message-next>
                        <vl-error-message-next for="interesses" state="tooLong"
                            >Gelieve maximum 100 karakters te gebruiken.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--4-12">
                        <vl-form-label-next for="leeftijd" label="Leeftijd *" block></vl-form-label-next>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-input-field-next
                            id="leeftijd"
                            name="leeftijd"
                            type="number"
                            block
                            required
                            min=${0}
                            max=${99}
                        ></vl-input-field-next>
                        <vl-error-message-next for="leeftijd" state="valueMissing"
                            >Gelieve een leeftijd in te vullen.
                        </vl-error-message-next>
                        <vl-error-message-next for="leeftijd" state="rangeUnderflow"
                            >De minimum leeftijd is 0 jaar.
                        </vl-error-message-next>
                        <vl-error-message-next for="leeftijd" state="rangeOverflow"
                            >De maximum leeftijd is 99 jaar.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--4-12">
                        <vl-form-label-next for="contactmethode" label="Contactmethode *" block></vl-form-label-next>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-radio-group-next id="contactmethode" name="contactmethode" required>
                            <vl-radio-next value="e-mail">e-mail</vl-radio-next>
                            <vl-radio-next value="telefoon">telefoon</vl-radio-next>
                            <vl-radio-next value="post">post</vl-radio-next>
                        </vl-radio-group-next>
                        <vl-error-message-next for="contactmethode" state="valueMissing">
                            Gelieve een contactmethode te selecteren.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--4-12">
                        <vl-form-label-next for="foto" label="Pasfoto *" block></vl-form-label-next>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-upload-next
                            id="foto"
                            name="foto"
                            accepted-files="image/*"
                            required
                            url="http://httpbin.org/post"
                        ></vl-upload-next>
                        <vl-error-message-next for="foto" state="valueMissing">
                            Gelieve een foto te selecteren.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--4-12">
                        <vl-form-label-next
                            for="waarheidsgetrouw"
                            label="Waarheidsgetrouw *"
                            block
                        ></vl-form-label-next>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-checkbox-next id="waarheidsgetrouw" name="waarheidsgetrouw" block required>
                            Naar waarheid ingevuld
                        </vl-checkbox-next>
                        <vl-error-message-next for="waarheidsgetrouw" state="valueMissing">
                            Gelieve te bevestigen dat bovenstaande gegevens naar waarheid zijn ingevuld.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--6-12 vl-push--4-12">
                        <div class="vl-action-group">
                            <button class="vl-button" type="submit">Verstuur</button>
                            <button class="vl-button" type="reset">Reset</button>
                        </div>
                    </div>
                </div>
            </form>
        `}onSubmit(e){e.preventDefault(),console.log((0,$.u)(e.target))}constructor(...e){super(...e),this.geboorteplaatsen=[{label:"België",value:"",choices:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"}]},{label:"Puerto Rico",value:"",choices:[{label:"Rio Piedras",value:"rio piedras"}]}],this.hobbies=[{label:"Padel",value:"padel"},{label:"Dans",value:"dans"},{label:"Drummen",value:"drummen"},{label:"Zwemmen",value:"zwemmen"},{label:"Boardgames",value:"boardgames"},{label:"Fietsen",value:"fietsen"}]}}C=function(e,t,l,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(s<3?o(n):s>3?o(t,l,n):o(t,l))||n);return s>3&&n&&Object.defineProperty(t,l,n),n}([(0,m.Mo)("vl-form-demo")],C),(0,d.YV)([C]);let V={title:"Ontwerp/Form/Demo",tags:["autodocs"],component:"form demo",parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}}},R=()=>(0,o.dy)`<vl-form-demo></vl-form-demo>`;R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:"() => html`<vl-form-demo></vl-form-demo>`",...R.parameters?.docs?.source}}};let O=["Demo"]},"./node_modules/lit/decorators.js":(e,t,l)=>{l.d(t,{Mo:()=>r,Cb:()=>i});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let r=e=>(t,l)=>{void 0!==l?l.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};var o=l("./node_modules/@lit/reactive-element/reactive-element.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s={attribute:!0,type:String,converter:o.Ts,reflect:!1,hasChanged:o.Qu},n=(e=s,t,l)=>{let{kind:r,metadata:o}=l,n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(l.name,e),"accessor"===r){let{name:r}=l;return{set(l){let o=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,o,e)},init(t){return void 0!==t&&this.C(r,void 0,e),t}}}if("setter"===r){let{name:r}=l;return function(l){let o=this[r];t.call(this,l),this.requestUpdate(r,o,e)}}throw Error("Unsupported decorator location: "+r)};function i(e){return(t,l)=>"object"==typeof l?n(e,t,l):((e,t,l)=>{let r=t.hasOwnProperty(l);return t.constructor.createProperty(l,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,l):void 0})(e,t,l)}},"./libs/form/src/next/checkbox/vl-checkbox.component.ts":(e,t,l)=>{l.d(t,{E:()=>u,l:()=>m});var r=l("./node_modules/lit/index.js"),o=l("./node_modules/lit/directives/class-map.js"),s=l("./node_modules/@domg/govflanders-style/component/index.js"),n=l("./node_modules/@domg/govflanders-style/common/index.js"),i=l("./libs/elements/src/index.ts");let a=(0,r.iv)`
    :host {
        --vl-checkbox--switch__error-color: #d2373c;
        --vl-checkbox--switch__error-background-color: #fbebec;
        --vl-checkbox--switch__success-color: #009e47;
        --vl-checkbox--switch__success-background-color: #e6f5ed;
    }

    .vl-checkbox--error .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label::after {
        border-color: var(--vl-checkbox--switch__error-color) !important;
    }

    .vl-checkbox--error .vl-checkbox--switch:not(:checked) + .vl-checkbox__label .vl-checkbox--switch__label::after {
        background: #fff;
    }
    .vl-checkbox--error .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label {
        background: #fff;
        color: var(--vl-checkbox--switch__error-color);
        border-color: var(--vl-checkbox--switch__error-color);
    }

    .vl-checkbox--error .vl-checkbox--switch:checked + .vl-checkbox__label .vl-checkbox--switch__label {
        background: var(--vl-checkbox--switch__error-background-color);
        border-color: var(--vl-checkbox--switch__error-color);
    }

    .vl-checkbox--success .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label::after {
        border-color: var(--vl-checkbox--switch__success-color) !important;
    }

    .vl-checkbox--success .vl-checkbox--switch:not(:checked) + .vl-checkbox__label .vl-checkbox--switch__label::after {
        background: #fff;
    }
    .vl-checkbox--success .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label {
        background: #fff;
        color: var(--vl-checkbox--switch__success-color);
        border-color: var(--vl-checkbox--switch__success-color);
    }

    .vl-checkbox--success .vl-checkbox--switch:checked + .vl-checkbox__label .vl-checkbox--switch__label {
        background: var(--vl-checkbox--switch__success-background-color);
        border-color: var(--vl-checkbox--switch__success-color);
    }
`;var c=l("./libs/form/src/next/form-control/form-control.ts"),d=l("./libs/common/utilities/src/index.ts");let m={...c.E,block:!1,value:"",checked:!1,isSwitch:!1};class u extends c.N{static get styles(){return[n.YN,n.Oh,i.CX,s.k3,a]}static get properties(){return{block:{type:Boolean},value:{type:String},checked:{type:Boolean,reflect:!0},isSwitch:{type:Boolean,attribute:"switch"}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value,this.initialCheckedValue=this.checked)}updated(e){if(super.updated(e),e.has("checked")||e.has("value")){let e=this.checked?this.value||"on":"",t={checked:this.checked};this.checked&&(t.value=e),this.setValue(e),this.dispatchEvent(new CustomEvent("vl-checked",{bubbles:!0,composed:!0,detail:t})),this.dispatchEventIfValid(t)}}render(){return(0,r.dy)` ${this.isSwitch?this.renderCheckboxSwitch():this.renderCheckboxDefault()} `}renderCheckboxDefault(){let e={"vl-checkbox":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return(0,r.dy)`
            <label class=${(0,o.$)(e)}>
                <input
                    id=${this.id||r.Ld}
                    name=${this.name||r.Ld}
                    class="vl-checkbox__toggle"
                    type="checkbox"
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${this.value}
                    .checked=${this.checked}
                    @click=${this.toggle}
                />
                <div class="vl-checkbox__label">
                    <i class="vl-checkbox__box" aria-hidden="true"></i>
                    <span>
                        <slot></slot>
                    </span>
                </div>
            </label>
        `}renderCheckboxSwitch(){let e={"vl-checkbox--switch__wrapper":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return(0,r.dy)`
            <div class=${(0,o.$)(e)}>
                <input
                    id=${this.id||r.Ld}
                    name=${this.name||r.Ld}
                    type="checkbox"
                    class="vl-checkbox--switch"
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${this.value}
                    .checked=${this.checked}
                />
                <label for=${this.id} class="vl-checkbox__label" @click=${this.toggle}>
                    <span class="vl-checkbox--switch__label">
                        <span aria-hidden="true"></span>
                    </span>
                    <span>
                        <slot></slot>
                    </span>
                </label>
            </div>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.checked=this.initialCheckedValue,this.value=this.initialValue}toggle(){this.checked=!this.checked}constructor(...e){super(...e),this.block=m.block,this.value=m.value,this.checked=m.checked,this.isSwitch=m.isSwitch,this.initialValue="",this.initialCheckedValue=!1}}u=function(e,t,l,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(s<3?o(n):s>3?o(t,l,n):o(t,l))||n);return s>3&&n&&Object.defineProperty(t,l,n),n}([(0,d.a6)("vl-checkbox-next")],u)},"./libs/form/src/next/datepicker/vl-datepicker.component.ts":(e,t,l)=>{l.d(t,{yE:()=>b,Z1:()=>x,_R:()=>f});var r=l("./node_modules/@domg/govflanders-style/common/index.js"),o=l("./node_modules/@domg/govflanders-style/component/index.js"),s=l("./node_modules/@open-wc/form-control/src/validators.js"),n=l("./node_modules/lit/index.js");let i=(0,n.iv)`
    :host {
        --vl-error-color: rgb(210, 55, 60);
        --vl-success-color: rgb(0, 158, 71);
    }
    button {
        cursor: pointer;
    }
    .vl-input-field {
        border-radius: 0.3rem 0 0 0.3rem;
        border-right-width: 0;
    }
    .vl-input-addon--success {
        border-color: var(--vl-success-color);
    }
    .vl-input-addon--success .vl-vi {
        color: var(--vl-success-color) !important;
    }
    .vl-input-addon--error {
        border-color: var(--vl-error-color);
    }
    .vl-input-addon--error .vl-vi {
        color: var(--vl-error-color) !important;
    }

    .flatpickr-calendar {
        z-index: 1000 !important;
    }

    .flatpickr-wrapper--block {
        width: 100%;
    }
`;var a=l("./node_modules/flatpickr/dist/esm/index.js"),c=l("./node_modules/flatpickr/dist/l10n/nl.js"),d=l.n(c),m=l("./node_modules/lit/directives/class-map.js"),u=l("./libs/common/utilities/src/index.ts"),h=l("./libs/elements/src/index.ts"),v=l("./node_modules/lit/directives/live.js"),p=l("./libs/form/src/next/form-control/form-control.ts");let b=["date","range","time","date-time"],f={...p.E,block:!1,readonly:!1,value:"",placeholder:"",autocomplete:"",type:"date",format:"d.m.Y",amPm:!1,minDate:"",maxDate:"",minTime:"",maxTime:"",pattern:""};class x extends p.N{static{(0,u.YV)([h.q_,h.Gi])}static{this.formControlValidators=[...p.N.formControlValidators,s.FW]}static get styles(){return[r.YN,r.Oh,o.oQ,o.K$,o.CZ,o.gU,o.ap,o.nt,i]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},value:{type:String,reflect:!0},placeholder:{type:String},autocomplete:{type:String},type:{type:String},format:{type:String},amPm:{type:Boolean,attribute:"am-pm"},minDate:{type:String,attribute:"min-date"},maxDate:{type:String,attribute:"max-date"},minTime:{type:String,attribute:"min-time"},maxTime:{type:String,attribute:"max-time"},pattern:{type:String}}}connectedCallback(){super.connectedCallback(),d()?.nl&&(d().nl.rangeSeparator=" tot en met ",a.Z.l10ns.default.rangeSeparator=" tot en met "),this.initialValue||(this.initialValue=this.value)}firstUpdated(e){super.firstUpdated(e),this.initializeComponent()}updated(e){super.updated(e);let t=this.getDynamicOptions();this.updateOptionsForInstance(t),e.has("value")&&this.updateValue(this.value),e.has("block")&&(this.block?this.getFlatpickrWrapper()?.classList.add("flatpickr-wrapper--block"):this.getFlatpickrWrapper()?.classList.remove("flatpickr-wrapper--block"))}disconnectedCallback(){super.disconnectedCallback(),this.instance?.destroy()}render(){let e={"vl-input-field":!0,"js-vl-datepicker-toggle":!0,"vl-input-field--error":this.error||this.isInvalid,"vl-input-field--success":this.success,"vl-input-field--block":this.block,"vl-input-field--disabled":this.disabled},t={"vl-input-addon":!0,"js-vl-datepicker-toggle":!0,"vl-input-addon--error":this.error||this.isInvalid,"vl-input-addon--success":this.success,"vl-input-addon--disabled":this.disabled};return(0,n.dy)`
            <div class="vl-input-group" id="datepicker-wrapper">
                <input
                    id=${this.id||n.Ld}
                    name=${this.name||n.Ld}
                    class=${(0,m.$)(e)}
                    type="text"
                    aria-label=${this.label||n.Ld}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    ?readonly=${this.readonly}
                    .value=${(0,v.a)(this.value)}
                    placeholder=${this.placeholder||n.Ld}
                    autocomplete=${this.autocomplete||n.Ld}
                    pattern=${this.pattern||n.Ld}
                    @input=${this.onInput}
                />
                <button
                    id="toggle-calendar"
                    type="button"
                    class=${(0,m.$)(t)}
                    ?disabled=${this.disabled}
                    aria-label="toggle calendar"
                    @click=${this.toggleCalendar}
                >
                    <span class="vl-icon vl-icon--small vl-vi vl-vi-calendar" aria-hidden="true"></span>
                </button>
            </div>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.instance?.clear(),this.value=this.initialValue,this.initialValue&&this.instance?.setDate(this.initialValue,!0,this.format)}parseDate(e){if("today"!==e)return e;{let e;return e=new Date,a.Z.formatDate(e,this.format)}}getDynamicOptions(){let e,t;this.minTime?(e=Number(this.minTime.split(":")[0]),t=Number(this.minTime.split(":")[1])):this.maxTime&&(e=Number(this.maxTime.split(":")[0]),t=Number(this.maxTime.split(":")[1]));let l=this.parseDate(this.initialValue);return{allowInput:!(this.disabled||this.readonly),dateFormat:this.format,defaultHour:e,defaultMinute:t,maxDate:this.maxDate,minDate:this.minDate,defaultDate:l,enableTime:"time"===this.type||"date-time"===this.type,noCalendar:"time"===this.type,time_24hr:!this.amPm,minTime:this.minTime,maxTime:this.maxTime,mode:"range"!==this.type?"single":"range"}}getOptions(){let e=this.shadowRoot?.querySelector("button"),t=this.shadowRoot?.querySelector("#datepicker-wrapper"),l={autoFillDefaultTime:!0,locale:d().nl,clickOpens:!1,onChange:this.handleDateChange,positionElement:e,static:!0,appendTo:t,...this.getDynamicOptions()};return Object.keys(l).forEach(e=>{void 0===l[e]&&delete l[e]}),l}getDatePicker(){return this.shadowRoot?.querySelector("#datepicker-wrapper")}getFlatpickrWrapper(){return this.shadowRoot?.querySelector(".flatpickr-wrapper")}updateOptionsForInstance(e){Object.keys(e).map(e=>e).forEach(t=>{this.instance?.set(t,e[t])})}initializeComponent(){this.getDatePicker()&&!this.instance&&(this.instance=(0,a.Z)(this.getDatePicker(),this.getOptions()),this.getDatePicker()?.classList.add("static"))}constructor(...e){super(...e),this.block=f.block,this.readonly=f.readonly,this.value=f.value,this.placeholder=f.placeholder,this.autocomplete=f.autocomplete,this.type=f.type,this.format=f.format,this.amPm=f.amPm,this.minDate=f.minDate,this.maxDate=f.maxDate,this.minTime=f.minTime,this.maxTime=f.maxTime,this.pattern=f.pattern,this.instance=null,this.initialValue="",this.toggleCalendar=()=>{this.instance?.toggle()},this.onInput=e=>{let t;let l=e.target.value;if(this.pattern&&!l.match(this.pattern)){this.value=l;return}try{t=a.Z.parseDate(l,this.format)}finally{this.value=l,t instanceof Date&&!isNaN(t)&&this.instance?.setDate(l,!1,this.format)}},this.handleDateChange=e=>{let t=e=>a.Z.formatDate(new Date(e),this.format);2!==e.length?this.value=t(e[0]):this.value=`${t(e[0])}${d()?.nl?.rangeSeparator}${t(e[1])}`},this.updateValue=e=>{let t={value:this.value};this.setValue(e),this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:t})),this.dispatchEventIfValid(t)}}}x=function(e,t,l,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(s<3?o(n):s>3?o(t,l,n):o(t,l))||n);return s>3&&n&&Object.defineProperty(t,l,n),n}([(0,u.a6)("vl-datepicker-next")],x)},"./libs/form/src/next/error-message/index.ts":(e,t,l)=>{l.d(t,{m:()=>r.ml});var r=l("./libs/form/src/next/error-message/vl-error-message.component.ts")},"./libs/form/src/next/form-label/index.ts":(e,t,l)=>{l.d(t,{i:()=>r.i});var r=l("./libs/form/src/next/form-label/vl-form-label.component.ts")},"./libs/form/src/next/form-label/vl-form-label.component.ts":(e,t,l)=>{l.d(t,{i:()=>c,n:()=>a});var r=l("./libs/common/utilities/src/index.ts"),o=l("./node_modules/@domg/govflanders-style/common/index.js"),s=l("./node_modules/@domg/govflanders-style/component/index.js"),n=l("./node_modules/lit/index.js"),i=l("./node_modules/lit/directives/class-map.js");let a={for:"",label:"",block:!1,light:!1};class c extends r.fS{static get styles(){return[o.YN,s.J8]}static get properties(){return{for:{type:String},label:{type:String},block:{type:Boolean},light:{type:Boolean}}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.focusFormControl)}updated(e){super.updated(e);let t=this.getFormControl();t?.setAttribute("label",this.label)}disconnectedCallback(){super.disconnectedCallback();let e=this.getFormControl();e?.removeAttribute("label"),this.removeEventListener("click",this.focusFormControl)}render(){let e={"vl-form__label":!0,"vl-form__label--block":this.block,"vl-form__label--light":this.light};return(0,n.dy)`<label for=${this.for} class=${(0,i.$)(e)}>${this.label}</label>`}getFormControl(){let e=this.closest("form");return e?.querySelector(`[id="${this.for}"]`)}focusFormControl(){let e=this.getFormControl();e?.focus()}constructor(...e){super(...e),this.for=a.for,this.label=a.label,this.block=a.block,this.light=a.light}}c=function(e,t,l,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(s<3?o(n):s>3?o(t,l,n):o(t,l))||n);return s>3&&n&&Object.defineProperty(t,l,n),n}([(0,r.a6)("vl-form-label-next")],c)},"./libs/form/src/next/input-field-masked/masks.ts":(e,t,l)=>{l.d(t,{T:()=>r});let r={iban:{blocks:[4,4,4,4],prefix:"BE",numericOnly:!0,numeralPositiveOnly:!0,regex:/^[A-Z]{2}[0-9]{14}$/},rrn:{blocks:[2,2,2,3,2],delimiters:[".",".","-","."],numericOnly:!0,numeralPositiveOnly:!0,regex:/^[0-9]{11}$/},uuid:{blocks:[8,4,4,4,12],delimiter:"-",regex:/^[0-9a-fA-F]{32}$/,customTransformFn:e=>e.replace(/[^0-9a-fA-F-]/g,"")},date:{date:!0,datePattern:["d","m","Y"],delimiter:".",regex:/^[0-9]{8}$/},numerical:{numeral:!0,numeralDecimalMark:",",delimiter:".",regex:/^[0-9]+(.[0-9]+)?$/},price:{numeral:!0,prefix:"€",rawValueTrimPrefix:!0,numeralDecimalMark:",",delimiter:".",regex:/^[0-9]+(.[0-9]+)?$/},phone:{blocks:[3,2,2,2,2],prefix:"+32",numericOnly:!0,numeralPositiveOnly:!0,delimiter:" ",regex:/^\+[0-9]{10}$/},phoneinternational:{blocks:[99],numericOnly:!0,numeralPositiveOnly:!0,regex:/^[0-9]*$/},mobile:{blocks:[3,3,2,2,2],prefix:"+32",numericOnly:!0,numeralPositiveOnly:!0,delimiter:" ",regex:/^\+[0-9]{11}$/}}},"./libs/form/src/next/input-field-masked/vl-input-field-masked.component.ts":(e,t,l)=>{l.d(t,{X:()=>m,R:()=>d});var r=l("./node_modules/cleave.js/dist/cleave-esm.js"),o=l("./libs/form/src/next/input-field-masked/masks.ts"),s=l("./libs/form/src/next/input-field/vl-input-field.component.ts"),n=l("./libs/common/utilities/src/index.ts");let i={key:"patternMismatch",message:"Value does not meet the given mask pattern.",isValid(e,t){let{disableMaskValidation:l,cleaveInstance:r}=e,o=e.regex||e.maskOptions?.regex;if(!t||l||!o||!r)return!0;let s=r.getRawValue();return new RegExp(o).test(s)}},a={attribute:"min",key:"rangeUnderflow",message:e=>e.minExclusive?`Value must be greater than ${e.min}.`:`Value must be greater than or equal to ${e.min}.`,isValid(e,t){let{min:l,minExclusive:r,cleaveInstance:o}=e;if(!t||!l&&0!==l||!o)return!0;let s=o.getRawValue();return!(parseFloat(s)<l)&&(!r||parseFloat(s)!==l)}},c={attribute:"max",key:"rangeOverflow",message:e=>e.maxExclusive?`Value must be lesser than ${e.max}.`:`Value must be lesser than or equal to ${e.max}.`,isValid(e,t){let{max:l,maxExclusive:r,cleaveInstance:o}=e;if(!t||!l&&0!==l||!o)return!0;let s=o.getRawValue();return!(parseFloat(s)>l)&&(!r||parseFloat(s)!==l)}},d={...s.E,mask:"",maskPrefix:"",rawValue:!1,disableMaskValidation:!1};class m extends s.z{static{this.formControlValidators=[...s.z.formControlValidators,i,a,c]}static get properties(){return{mask:{type:String},maskPrefix:{type:String,attribute:"mask-prefix"},rawValue:{type:Boolean,attribute:"raw-value"},disableMaskValidation:{type:Boolean,attribute:"disable-mask-validation"}}}connectedCallback(){super.connectedCallback(),this.maskOptions={...o.T[this.mask]},this.maskOptions&&(this.maskPrefix&&(this.maskOptions.prefix=this.maskPrefix),this.value.startsWith(this.maskOptions.prefix||"")||(this.value=this.maskOptions.prefix+this.value))}firstUpdated(e){super.firstUpdated(e),this.maskOptions&&(this.cleaveInstance=new r.Z(this.validationTarget,this.maskOptions))}resetFormControl(){super.resetFormControl(),this.initialValue.startsWith(this.maskOptions?.prefix||"")?this.value=this.initialValue:this.value=this.maskOptions?.prefix+this.initialValue}getRawValue(){return this.cleaveInstance?.getRawValue()}onInput(){setTimeout(()=>{let e=this.validationTarget.value,t=this.maskOptions?.customTransformFn,l=t?t(e):e;if(this.value===l){this.requestUpdate();return}this.value=l},0)}onUpdated(e){if(e.has("value")||e.has("rawValue")){let e=this.rawValue?this.getRawValue()||"":this.value;(this.value===this.maskOptions?.prefix||this.getRawValue()===this.maskOptions?.prefix)&&(e="");let t={value:e};this.setValue(e),this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:t})),this.dispatchEventIfValid(t)}}constructor(...e){super(...e),this.mask=d.mask,this.maskPrefix=d.maskPrefix,this.rawValue=d.rawValue,this.disableMaskValidation=d.disableMaskValidation,this.maskOptions=null,this.cleaveInstance=null}}m=function(e,t,l,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(s<3?o(n):s>3?o(t,l,n):o(t,l))||n);return s>3&&n&&Object.defineProperty(t,l,n),n}([(0,n.a6)("vl-input-field-masked-next")],m)},"./libs/form/src/next/input-field/index.ts":(e,t,l)=>{l.d(t,{z:()=>r.z});var r=l("./libs/form/src/next/input-field/vl-input-field.component.ts")},"./libs/form/src/next/input-field/vl-input-field.component.ts":(e,t,l)=>{l.d(t,{z:()=>v,E:()=>h});var r=l("./node_modules/lit/index.js"),o=l("./node_modules/@domg/govflanders-style/component/index.js"),s=l("./node_modules/lit/directives/live.js"),n=l("./node_modules/lit/directives/class-map.js"),i=l("./node_modules/@domg/govflanders-style/common/index.js");let a={attribute:"min",key:"rangeUnderflow",message:e=>e.minExclusive?`Value must be greater than ${e.min}.`:`Value must be greater than or equal to ${e.min}.`,isValid:(e,t)=>!t||!e.min&&0!==e.min||!(parseFloat(t)<e.min)&&(!e.minExclusive||parseFloat(t)!==e.min)},c={attribute:"max",key:"rangeOverflow",message:e=>e.maxExclusive?`Value must be lesser than ${e.max}.`:`Value must be lesser than or equal to ${e.max}.`,isValid:(e,t)=>!t||!e.max&&0!==e.max||!(parseFloat(t)>e.max)&&(!e.maxExclusive||parseFloat(t)!==e.max)},d={attribute:"pattern",key:"patternMismatch",message:"Please match the requested format",isValid:(e,t)=>!t||!e.pattern&&!e.regex||new RegExp(e.pattern||e.regex).test(t)};var m=l("./libs/form/src/next/form-control/form-control.ts"),u=l("./libs/common/utilities/src/index.ts");let h={...m.E,block:!1,readonly:!1,type:"text",value:"",placeholder:"",autocomplete:"",minLength:null,maxLength:null,min:null,max:null,minExclusive:!1,maxExclusive:!1,pattern:"",regex:null};class v extends m.N{static{this.formControlValidators=[...m.N.formControlValidators,a,c,d]}static get styles(){return[i.YN,i.Oh,o.K$]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},type:{type:String},value:{type:String,reflect:!0},placeholder:{type:String},autocomplete:{type:String},minLength:{type:Number,attribute:"min-length"},maxLength:{type:Number,attribute:"max-length"},min:{type:Number},max:{type:Number},minExclusive:{type:Boolean,attribute:"min-exclusive"},maxExclusive:{type:Boolean,attribute:"max-exclusive"},pattern:{type:String},regex:{type:Object}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value)}updated(e){super.updated(e),this.onUpdated(e)}render(){let e={"vl-input-field":!0,"vl-input-field--disabled":this.disabled,"vl-input-field--error":this.isInvalid||this.error,"vl-input-field--success":this.success,"vl-input-field--block":this.block};return(0,r.dy)`
            <input
                id=${this.id||r.Ld}
                name=${this.name||r.Ld}
                class=${(0,n.$)(e)}
                type=${this.type}
                aria-label=${this.label||r.Ld}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?readonly=${this.readonly}
                .value=${(0,s.a)(this.value)}
                placeholder=${this.placeholder||r.Ld}
                autocomplete=${this.autocomplete||r.Ld}
                minlength=${this.minLength??r.Ld}
                maxlength=${this.maxLength??r.Ld}
                min=${this.min??r.Ld}
                max=${this.max??r.Ld}
                pattern=${this.pattern}
                @input=${this.onInput}
            />
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.value=this.initialValue}onInput(e){this.value=e?.target?.value}onUpdated(e){if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:e})),this.dispatchEventIfValid(e)}}constructor(...e){super(...e),this.regex=h.regex,this.block=h.block,this.readonly=h.readonly,this.type=h.type,this.value=h.value,this.placeholder=h.placeholder,this.autocomplete=h.autocomplete,this.minLength=h.minLength,this.maxLength=h.maxLength,this.min=h.min,this.max=h.max,this.minExclusive=h.minExclusive,this.maxExclusive=h.maxExclusive,this.pattern=h.pattern,this.initialValue=""}}v=function(e,t,l,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(s<3?o(n):s>3?o(t,l,n):o(t,l))||n);return s>3&&n&&Object.defineProperty(t,l,n),n}([(0,u.a6)("vl-input-field-next")],v)},"./libs/form/src/next/radio-group/vl-radio-group.component.ts":(e,t,l)=>{l.d(t,{S:()=>d,X:()=>m});var r=l("./node_modules/lit/index.js"),o=l("./node_modules/@domg/govflanders-style/component/index.js"),s=l("./node_modules/@domg/govflanders-style/common/index.js"),n=l("./libs/elements/src/index.ts"),i=l("./libs/form/src/next/radio-group/vl-radio.component.uig-css.ts"),a=l("./libs/form/src/next/form-control/form-control.ts"),c=l("./libs/common/utilities/src/index.ts");let d={...a.E,readonly:!1,value:""};class m extends a.N{static get styles(){return[s.YN,s.Oh,n.CX,o.SC,i.Z]}static get properties(){return{readonly:{type:Boolean},value:{type:String,reflect:!0},block:{type:Boolean}}}connectedCallback(){super.connectedCallback(),this.addEventListener("vl-checked",this.updateGroupAfterCheck),this.addEventListener("keydown",this.handleKeyDown)}firstUpdated(e){super.firstUpdated(e),this.initialValue||(this.initialValue=this.value)}updated(e){super.updated(e),e.has("value")&&(this.setValue(this.value),this.checkRadioForValue(this.value)),e.has("name")&&this.updateRadiosForAttribute("name"),e.has("block")&&this.updateRadiosForAttribute("block"),e.has("readonly")&&(this.updateRadiosForAttribute("readonly"),this.preventDefaultEventOnAllInputsOfAllRadio(this.readonly)),e.has("disabled")&&this.updateRadiosForAttribute("disabled"),e.has("error")&&this.updateRadiosForAttribute("error"),e.has("isInvalid")&&this.getRadios()?.forEach(e=>this.isInvalid?e.setAttribute("error",""):e.removeAttribute("error")),e.has("success")&&this.updateRadiosForAttribute("success")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("vl-checked",this.updateGroupAfterCheck)}render(){return(0,r.dy)` <slot></slot> `}resetFormControl(){super.resetFormControl(),this.resetAllRadios(),this.resetToInitialValue()}get validationTarget(){let e=this.getRadios()[0];return e?e.validationTarget:null}resetToInitialValue(){this.setValue(this.initialValue),this.checkRadioForValue(this.initialValue),this.value=this.initialValue}checkRadioForValue(e){this.getRadios()?.forEach(t=>{e&&t.getAttribute("value")===e?t.setAttribute("checked",""):t.removeAttribute("checked")})}resetAllRadios(){this.getRadios()?.forEach(e=>{e.removeAttribute("checked")})}preventDefaultEventOnAllInputsOfAllRadio(e){this.getRadios()?.forEach(t=>{e?t.addEventListener("click",this.preventDefaultAndFocus):t.removeEventListener("click",this.preventDefaultAndFocus)})}updateRadiosForAttribute(e){this.getRadios()?.forEach(t=>this[e]?t.setAttribute(e,""):t.removeAttribute(e))}getRadios(){return Array.from(this.querySelectorAll("vl-radio-next"))}checkSelectedRadio(e){this.getRadios()?.forEach(t=>{let l=t.getAttribute("value");t!==e?t.removeAttribute("checked"):(t.hasAttribute("checked")||t.setAttribute("checked",""),this.value=l||"",this.setValue(l))})}navigateRadioButtons(e){let t;let l=this.getRadios(),r=l.findIndex(e=>e.hasAttribute("checked"));"ArrowLeft"===e||"ArrowUp"===e?(t=r-1)<0&&(t=l.length-1):("ArrowRight"===e||"ArrowDown"===e)&&(t=r+1)>=l.length&&(t=0),this.checkSelectedRadio(l[t]),l[t].focus()}updateGroupAfterCheck(e){let t=e.target;this.checkSelectedRadio(t)}constructor(...e){super(...e),this.readonly=d.readonly,this.value=d.value,this.initialValue="",this.preventDefaultAndFocus=e=>{let t=e.target;t?.validationTarget?.focus(),e.preventDefault()},this.handleKeyDown=e=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)&&(e.preventDefault(),this.navigateRadioButtons(e.code)),"Space"===e.code){let e=this.getRadios()?.find(e=>e===document.activeElement);e&&!e.hasAttribute("checked")&&this.checkSelectedRadio(e)}}}}m=function(e,t,l,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(s<3?o(n):s>3?o(t,l,n):o(t,l))||n);return s>3&&n&&Object.defineProperty(t,l,n),n}([(0,c.a6)("vl-radio-group-next")],m)},"./libs/form/src/next/radio-group/vl-radio.component.ts":(e,t,l)=>{l.d(t,{P:()=>u,Y:()=>m});var r=l("./node_modules/lit/index.js"),o=l("./node_modules/lit/directives/live.js"),s=l("./node_modules/lit/directives/class-map.js"),n=l("./node_modules/@domg/govflanders-style/component/index.js"),i=l("./node_modules/@domg/govflanders-style/common/index.js"),a=l("./libs/elements/src/index.ts"),c=l("./libs/form/src/next/radio-group/vl-radio.component.uig-css.ts"),d=l("./libs/common/utilities/src/index.ts");let m={id:"radio",name:"",value:"",label:"",block:!1,readonly:!1,disabled:!1,error:!1,success:!1,checked:!1};class u extends d.fS{static{this.shadowRootOptions={...r.oi.shadowRootOptions,delegatesFocus:!0}}static get styles(){return[i.YN,i.Oh,a.CX,n.SC,c.Z]}static get properties(){return{id:{type:String},name:{type:String},value:{type:String},label:{type:String},disabled:{type:Boolean},readonly:{type:Boolean},error:{type:Boolean},success:{type:Boolean},block:{type:Boolean},checked:{type:Boolean,reflect:!0}}}updated(e){if(super.updated(e),(e.has("checked")||e.has("value"))&&this.checked){let e={checked:!0,value:this.value};this.dispatchEvent(new CustomEvent("vl-checked",{bubbles:!0,composed:!0,detail:e})),this.dispatchEvent(new CustomEvent("vl-valid",{composed:!0,bubbles:!0,detail:e}))}}render(){let e={"vl-radio":!0,"vl-radio--block":this.block,"vl-radio--disabled":this.disabled,"vl-radio--error":this.error,"vl-radio--success":this.success};return(0,r.dy)`
            <label id="radio-label" class=${(0,s.$)(e)} for=${this.id}>
                <input
                    id=${this.id||r.Ld}
                    name=${this.name||r.Ld}
                    class="vl-radio__toggle"
                    type="radio"
                    aria-label=${this.label||r.Ld}
                    .value=${(0,o.a)(this.value)}
                    .checked=${this.checked}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    @change=${this.onChange}
                />
                <div class="vl-radio__label">
                    <span id="label-text">
                        <slot></slot>
                    </span>
                </div>
            </label>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}onChange(){this.checked=!this.checked}constructor(...e){super(...e),this.id=m.id,this.name=m.name,this.value=m.value,this.label=m.label,this.block=m.block,this.readonly=m.readonly,this.disabled=m.disabled,this.error=m.error,this.success=m.success,this.checked=m.checked}}u=function(e,t,l,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(s<3?o(n):s>3?o(t,l,n):o(t,l))||n);return s>3&&n&&Object.defineProperty(t,l,n),n}([(0,d.a6)("vl-radio-next")],u)},"./libs/form/src/next/radio-group/vl-radio.component.uig-css.ts":(e,t,l)=>{l.d(t,{Z:()=>o});var r=l("./node_modules/lit/index.js");let o=(0,r.iv)`
    .vl-radio--disabled .vl-radio__toggle:checked + .vl-radio__label::before {
        background-color: #fff;
    }
    .vl-radio__toggle:read-only + .vl-radio__label::before {
        pointer-events: none !important;
    }
`},"./libs/form/src/next/select/index.ts":(e,t,l)=>{l.d(t,{k:()=>r.kI});var r=l("./libs/form/src/next/select/vl-select.component.ts")},"./libs/form/src/next/textarea/vl-textarea.component.ts":(e,t,l)=>{l.d(t,{n:()=>m,q:()=>d});var r=l("./node_modules/lit/index.js"),o=l("./node_modules/@domg/govflanders-style/component/index.js"),s=l("./node_modules/lit/directives/live.js"),n=l("./node_modules/lit/directives/class-map.js"),i=l("./node_modules/@domg/govflanders-style/common/index.js"),a=l("./libs/form/src/next/form-control/form-control.ts"),c=l("./libs/common/utilities/src/index.ts");let d={...a.E,block:!1,readonly:!1,value:"",placeholder:"",autocomplete:"",minLength:null,maxLength:null,rows:null,cols:null};class m extends a.N{static get styles(){return[i.YN,i.Oh,o.Qu]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},value:{type:String,reflect:!0},placeholder:{type:String},autocomplete:{type:String},minLength:{type:Number,attribute:"min-length"},maxLength:{type:Number,attribute:"max-length"},rows:{type:Number},cols:{type:Number}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value)}updated(e){if(super.updated(e),e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:e})),this.dispatchEventIfValid(e)}}render(){let e={"vl-textarea":!0,"vl-textarea--disabled":this.disabled,"vl-textarea--error":this.isInvalid||this.error,"vl-textarea--success":this.success,"vl-textarea--block":this.block};return(0,r.dy)`
            <textarea
                id=${this.id||r.Ld}
                name=${this.name||r.Ld}
                class=${(0,n.$)(e)}
                aria-label=${this.label||r.Ld}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?readonly=${this.readonly}
                .value=${(0,s.a)(this.value)}
                placeholder=${this.placeholder||r.Ld}
                autocomplete=${this.autocomplete||r.Ld}
                minlength=${this.minLength??r.Ld}
                maxlength=${this.maxLength??r.Ld}
                rows=${this.rows??r.Ld}
                cols=${this.cols??r.Ld}
                @input=${this.onInput}
            />
        `}get validationTarget(){return this.shadowRoot?.querySelector("textarea")}resetFormControl(){super.resetFormControl(),this.value=this.initialValue}onInput(e){this.value=e?.target?.value}constructor(...e){super(...e),this.block=d.block,this.readonly=d.readonly,this.value=d.value,this.placeholder=d.placeholder,this.autocomplete=d.autocomplete,this.minLength=d.minLength,this.maxLength=d.maxLength,this.rows=d.rows,this.cols=d.cols,this.initialValue=""}}m=function(e,t,l,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(s<3?o(n):s>3?o(t,l,n):o(t,l))||n);return s>3&&n&&Object.defineProperty(t,l,n),n}([(0,c.a6)("vl-textarea-next")],m)},"./libs/form/src/next/upload/index.ts":(e,t,l)=>{l.d(t,{F:()=>r.F});var r=l("./libs/form/src/next/upload/vl-upload.component.ts")},"./libs/form/src/utils.ts":(e,t,l)=>{l.d(t,{u:()=>s});var r=l("./libs/form/src/next/form-control/form-control.ts"),o=l("./libs/form/src/next/upload/index.ts");let s=(e,t)=>{if(!e)return;let l=new FormData(e),s=t||Array.from(e.querySelectorAll("*")).filter(e=>e instanceof r.N&&e.hasAttribute("multiple")||e instanceof o.F).map(e=>e.getAttribute("name"));return Array.from(l.keys()).reduce((e,t)=>{if(!s.includes(t))return{...e,[t]:l.get(t)};{let r=l.getAll(t);return 1===r.length&&""===r[0]?{...e,[t]:[]}:{...e,[t]:r}}},{})}}}]);