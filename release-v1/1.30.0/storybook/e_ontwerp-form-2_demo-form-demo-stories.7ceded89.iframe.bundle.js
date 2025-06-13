"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[1314],{"./apps/storybook/docs/e_ontwerp/form/2_demo/form-demo.stories.ts":(e,t,l)=>{l.r(t),l.d(t,{Demo:()=>C,__namedExportsOrder:()=>O,default:()=>$});var r=l("./node_modules/lit-html/lit-html.js"),o=l("./libs/common/utilities/src/index.ts"),s=l("./node_modules/tslib/tslib.es6.mjs"),n=l("./node_modules/lit/index.js"),i=l("./libs/form/src/next/form-label/index.ts"),a=l("./libs/form/src/next/error-message/index.ts"),c=l("./libs/elements/src/index.ts"),d=l("./libs/form/src/next/input-field/index.ts"),m=l("./libs/form/src/next/input-field-masked/vl-input-field-masked.component.ts"),u=l("./libs/form/src/next/textarea/vl-textarea.component.ts"),h=l("./libs/form/src/next/select-rich/index.ts"),v=l("./libs/form/src/next/select/vl-select.component.ts"),p=l("./libs/form/src/next/checkbox/vl-checkbox.component.ts"),b=l("./libs/form/src/next/radio-group/vl-radio.component.ts"),f=l("./libs/form/src/next/radio-group/vl-radio-group.component.ts"),g=l("./libs/form/src/next/datepicker/vl-datepicker.component.ts"),x=l("./libs/form/src/next/upload/index.ts"),k=l("./libs/form/src/utils/index.ts");class y extends n.oi{static{(0,o.YV)([i.i,d.z,m.X,u.n,g.Z1,h.n,v.k,f.X,b.P,x.F,p.E,a.m])}static get styles(){return[c.CX,(0,n.iv)`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }
            `]}render(){return(0,n.dy)`
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
                            placeholder="Vul je naam in"
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
                            placeholder="Vul je rijksregisternummer in"
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
                            block
                            required
                            placeholder="Vul je geboortedatum in"
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
                        <vl-select-rich-next
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
                        </vl-select-rich-next>
                        <vl-error-message-next for="geboorteplaats" state="valueMissing"
                            >Gelieve een geboorteplaats te selecteren.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--4-12">
                        <vl-form-label-next for="hobbies" label="Hobbies *" block></vl-form-label-next>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-select-rich-next
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
                        </vl-select-rich-next>
                        <vl-error-message-next for="hobbies" state="valueMissing"
                            >Gelieve een hobby te selecteren.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-col--4-12">
                        <vl-form-label-next for="kinderen" label="Aantal kinderen *" block></vl-form-label-next>
                    </div>
                    <div class="vl-col--8-12">
                        <vl-select-next
                            id="kinderen"
                            name="kinderen"
                            block
                            deletable
                            placeholder="Selecteer je aantal kinderen"
                            required
                            .options=${this.kinderenOpties}
                        ></vl-select-next>
                        <vl-error-message-next for="kinderen" state="valueMissing"
                            >Gelieve een aantal kinderen te kiezen.
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
                            placeholder="Vul je interesses in"
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
                            placeholder="Vul je leeftijd in"
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
        `}onSubmit(e){e.preventDefault(),console.log((0,k.u)(e.target))}constructor(...e){super(...e),this.geboorteplaatsen=[{label:"België",value:"",choices:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"}]},{label:"Puerto Rico",value:"",choices:[{label:"Rio Piedras",value:"rio piedras"}]}],this.hobbies=[{label:"Padel",value:"padel"},{label:"Dans",value:"dans"},{label:"Drummen",value:"drummen"},{label:"Zwemmen",value:"zwemmen"},{label:"Boardgames",value:"boardgames"},{label:"Fietsen",value:"fietsen"}],this.kinderenOpties=[{label:"0",value:"0"},{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"5 of meer",value:"5 of meer"}]}}y=(0,s.gn)([(0,o.a6)("vl-form-demo")],y),l("./node_modules/react/index.js");var w=l("./node_modules/react/jsx-runtime.js"),j=l("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");l("./node_modules/@storybook/addon-docs/dist/index.mjs");var _=l("./node_modules/@storybook/blocks/dist/index.mjs");function V(e){let t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",code:"code"},(0,j.ah)(),e.components);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(t.h1,{id:"form---demo",children:"Form - Demo"}),"\n",(0,w.jsxs)(t.p,{children:["Dit is een voorbeeld van hoe de form componenten in een form gebruikt kunnen worden.",(0,w.jsx)("br",{}),"\nDe submitted waarden worden in deze demo in de console gelogd."]}),"\n",(0,w.jsx)(t.h2,{id:"componenten",children:"Componenten"}),"\n",(0,w.jsxs)(t.ul,{children:["\n",(0,w.jsx)(t.li,{children:(0,w.jsx)(t.a,{href:"/docs/form-next-input-field--documentatie",children:"vl-input-field-next"})}),"\n",(0,w.jsx)(t.li,{children:(0,w.jsx)(t.a,{href:"/docs/form-next-input-field-masked--documentatie",children:"vl-input-field-masked-next"})}),"\n",(0,w.jsx)(t.li,{children:(0,w.jsx)(t.a,{href:"/docs/form-next-textarea--documentatie",children:"vl-textarea-next"})}),"\n",(0,w.jsx)(t.li,{children:(0,w.jsx)(t.a,{href:"/docs/form-next-datepicker--documentatie",children:"vl-datepicker-next"})}),"\n",(0,w.jsx)(t.li,{children:(0,w.jsx)(t.a,{href:"/docs/form-next-select-rich--documentatie",children:"vl-select-rich-next"})}),"\n",(0,w.jsx)(t.li,{children:(0,w.jsx)(t.a,{href:"/docs/form-next-select--documentatie",children:"vl-select-next"})}),"\n",(0,w.jsx)(t.li,{children:(0,w.jsx)(t.a,{href:"/docs/form-next-radio-group--documentatie",children:"vl-radio-group-next"})}),"\n",(0,w.jsx)(t.li,{children:(0,w.jsx)(t.a,{href:"/docs/form-next-upload--documentatie",children:"vl-upload-next"})}),"\n",(0,w.jsx)(t.li,{children:(0,w.jsx)(t.a,{href:"/docs/form-next-checkbox--documentatie",children:"vl-checkbox-next"})}),"\n",(0,w.jsx)(t.li,{children:(0,w.jsx)(t.a,{href:"/docs/form-next-error-message--documentatie",children:"vl-error-message-next"})}),"\n",(0,w.jsx)(t.li,{children:(0,w.jsx)(t.a,{href:"/docs/form-next-form-label--documentatie",children:"vl-form-label-next"})}),"\n"]}),"\n",(0,w.jsx)(t.h2,{id:"native-elementen",children:"Native elementen"}),"\n",(0,w.jsx)(t.p,{children:"Gebruik voor de volgende elementen native HtmlElements met css classes:"}),"\n",(0,w.jsxs)(t.ul,{children:["\n",(0,w.jsxs)(t.li,{children:["Form: native HTMLFormElement met class ",(0,w.jsx)(t.code,{children:"vl-form"})]}),"\n",(0,w.jsxs)(t.li,{children:["Button: native HtmlButtonElement met class ",(0,w.jsx)(t.code,{children:"vl-button"})]}),"\n",(0,w.jsxs)(t.li,{children:["Action Group: native HtmlDivElement met class ",(0,w.jsx)(t.code,{children:"vl-action-group"})]}),"\n"]}),"\n",(0,w.jsx)(t.h2,{id:"grid",children:"Grid"}),"\n",(0,w.jsxs)(t.p,{children:["Maak voor het opbouwen van de grid structuur gebruik van de ",(0,w.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/form-grid",target:"_blank",rel:"nofollow noopener noreferrer",children:"vl-form-grid classes"})," van Digitaal Vlaanderen.",(0,w.jsx)("br",{}),"\nPlaats deze op native HtmlDivElements."]}),"\n",(0,w.jsx)(t.h2,{id:"form-data",children:"Form data"}),"\n",(0,w.jsxs)(t.p,{children:["Gebruik de ",(0,w.jsx)(t.a,{href:"/docs/ontwerp-form-form-data--documentatie",children:"parseFormData"})," helper functie om de form data te verzamelen.",(0,w.jsx)("br",{}),"\nIndien je meer controle nodig hebt kan je zelf de ",(0,w.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",target:"_blank",rel:"nofollow noopener noreferrer",children:"FormData"})," API gebruiken."]}),"\n",(0,w.jsx)(t.h2,{id:"let-op",children:"❗Let op"}),"\n",(0,w.jsxs)(t.p,{children:["Indien je een form control wrapped in een custom component, zorg er voor dat dit custom component geen Shadow DOM heeft.",(0,w.jsx)("br",{}),"\nAls dit custom component een Shadow DOM heeft, zal het native HtmlFormElement de form control niet meer vinden."]}),"\n",(0,w.jsx)(_.Xz,{of:C,sourceState:"none"}),"\n",(0,w.jsxs)("details",{open:!0,children:[(0,w.jsx)("summary",{children:"Code"}),(0,w.jsx)(_.Hw,{code:'import { CSSResult, LitElement, css, html } from \'lit\';\nimport { registerWebComponents, webComponent } from \'@domg-wc/common-utilities\';\nimport { VlFormLabelComponent } from \'@domg-wc/form/next/form-label\';\nimport { VlErrorMessageComponent } from \'@domg-wc/form/next/error-message\';\nimport { vlElementsStyle } from \'@domg-wc/elements\';\nimport { VlInputFieldComponent } from \'@domg-wc/form/next/input-field\';\nimport { VlInputFieldMaskedComponent } from \'@domg-wc/form/next/input-field-masked\';\nimport { VlTextareaComponent } from \'@domg-wc/form/next/textarea\';\nimport { SelectRichOption, VlSelectRichComponent } from \'@domg-wc/form/next/select-rich\';\nimport { SelectOption, VlSelectComponent } from \'@domg-wc/form/next/select\';\nimport { VlCheckboxComponent } from \'@domg-wc/form/next/checkbox\';\nimport { VlRadioComponent, VlRadioGroupComponent } from \'@domg-wc/form/next/radio-group\';\nimport { VlDatepickerComponent } from \'@domg-wc/form/next/datepicker\';\nimport { VlUploadComponent } from \'@domg-wc/form/next/upload\';\nimport { parseFormData } from \'@domg-wc/form/utils\';\n\n@webComponent(\'vl-form-demo\')\nexport class VlFormDemoComponent extends LitElement {\n    private geboorteplaatsen: SelectRichOption[] = [\n        {\n            label: \'België\',\n            value: \'\',\n            choices: [\n                { label: \'Hasselt\', value: \'hasselt\' },\n                { label: \'Turnhout\', value: \'turnhout\' },\n                { label: \'Knokke-Heist\', value: \'knokke-heist\' },\n                { label: \'Waregem\', value: \'waregem\' },\n                { label: \'Lier\', value: \'lier\' },\n            ],\n        },\n        {\n            label: \'Puerto Rico\',\n            value: \'\',\n            choices: [{ label: \'Rio Piedras\', value: \'rio piedras\' }],\n        },\n    ];\n\n    private hobbies: SelectRichOption[] = [\n        { label: \'Padel\', value: \'padel\' },\n        { label: \'Dans\', value: \'dans\' },\n        { label: \'Drummen\', value: \'drummen\' },\n        { label: \'Zwemmen\', value: \'zwemmen\' },\n        { label: \'Boardgames\', value: \'boardgames\' },\n        { label: \'Fietsen\', value: \'fietsen\' },\n    ];\n\n    private kinderenOpties: SelectOption[] = [\n        { label: \'0\', value: \'0\' },\n        { label: \'1\', value: \'1\' },\n        { label: \'2\', value: \'2\' },\n        { label: \'3\', value: \'3\' },\n        { label: \'4\', value: \'4\' },\n        { label: \'5 of meer\', value: \'5 of meer\' },\n    ];\n\n    static {\n        registerWebComponents([\n            VlFormLabelComponent,\n            VlInputFieldComponent,\n            VlInputFieldMaskedComponent,\n            VlTextareaComponent,\n            VlDatepickerComponent,\n            VlSelectRichComponent,\n            VlSelectComponent,\n            VlRadioGroupComponent,\n            VlRadioComponent,\n            VlUploadComponent,\n            VlCheckboxComponent,\n            VlErrorMessageComponent,\n        ]);\n    }\n\n    static override get styles(): (CSSResult | CSSResult[])[] {\n        return [\n            vlElementsStyle,\n            css`\n                form {\n                    margin-top: 1rem;\n                    max-width: 800px;\n                }\n            `,\n        ];\n    }\n\n    override render() {\n        return html`\n            <form id="form" class="vl-form" @submit=${this.onSubmit}>\n                <div class="vl-form-grid vl-form-grid--is-stacked">\n                    <div class="vl-form-col--4-12">\n                        <vl-form-label-next for="naam" label="Naam *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-input-field-next\n                            id="naam"\n                            name="naam"\n                            block\n                            required\n                            pattern="^[a-zA-Z ]*$"\n                            min-length=${2}\n                            max-length=${20}\n                            placeholder="Vul je naam in"\n                        ></vl-input-field-next>\n                        <vl-error-message-next for="naam" state="valueMissing"\n                            >Gelieve een naam in te vullen.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="naam" state="tooShort"\n                            >Gelieve minimum 2 karakters te gebruiken.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="naam" state="tooLong"\n                            >Gelieve maximum 20 karakters te gebruiken.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="naam" state="patternMismatch"\n                            >Gelieve geen nummers of speciale tekens in te vullen.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <vl-form-label-next for="rrn" label="Rijksregisternummer *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-input-field-masked-next\n                            id="rrn"\n                            name="rrn"\n                            block\n                            required\n                            mask="rrn"\n                            placeholder="Vul je rijksregisternummer in"\n                        ></vl-input-field-masked-next>\n                        <vl-error-message-next for="rrn" state="valueMissing"\n                            >Gelieve een rijksregisternummer in te vullen.</vl-error-message-next\n                        >\n                        <vl-error-message-next for="rrn" state="patternMismatch"\n                            >Gelieve een geldig rijksregisternummer in te vullen.</vl-error-message-next\n                        >\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <vl-form-label-next for="geboortedatum" label="Geboortedatum *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-datepicker-next\n                            id="geboortedatum"\n                            name="geboortedatum"\n                            block\n                            required\n                            placeholder="Vul je geboortedatum in"\n                        >\n                        </vl-datepicker-next>\n                        <vl-error-message-next for="geboortedatum" state="valueMissing">\n                            Gelieve een geboortedatum in te vullen.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="geboortedatum" state="patternMismatch">\n                            Gelieve het volgende datum formaat te gebruiken: "dd.mm.YYYY", bv. 01.12.1976 of 1.2.1993\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <vl-form-label-next for="geboorteplaats" label="Geboorteplaats *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-select-rich-next\n                            id="geboorteplaats"\n                            name="geboorteplaats"\n                            required\n                            search\n                            deletable\n                            .options=${this.geboorteplaatsen}\n                            result-limit="2"\n                            placeholder="Selecteer je geboorteplaats"\n                            no-results-text="Geen geboorteplaatsen gevonden"\n                            search-placeholder="Zoek geboorteplaats"\n                        >\n                        </vl-select-rich-next>\n                        <vl-error-message-next for="geboorteplaats" state="valueMissing"\n                            >Gelieve een geboorteplaats te selecteren.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <vl-form-label-next for="hobbies" label="Hobbies *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-select-rich-next\n                            id="hobbies"\n                            name="hobbies"\n                            required\n                            multiple\n                            deletable\n                            .options=${this.hobbies}\n                            placeholder="Selecteer je hobbies"\n                            no-results-text="Geen hobbies gevonden"\n                            no-choices-text="Geen resterende hobbies gevonden"\n                        >\n                        </vl-select-rich-next>\n                        <vl-error-message-next for="hobbies" state="valueMissing"\n                            >Gelieve een hobby te selecteren.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-col--4-12">\n                        <vl-form-label-next for="kinderen" label="Aantal kinderen *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-col--8-12">\n                        <vl-select-next\n                            id="kinderen"\n                            name="kinderen"\n                            block\n                            deletable\n                            placeholder="Selecteer je aantal kinderen"\n                            required\n                            .options=${this.kinderenOpties}\n                        ></vl-select-next>\n                        <vl-error-message-next for="kinderen" state="valueMissing"\n                            >Gelieve een aantal kinderen te kiezen.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <vl-form-label-next for="interesses" label="Interesses *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-textarea-next\n                            id="interesses"\n                            name="interesses"\n                            block\n                            required\n                            min-length=${5}\n                            max-length=${100}\n                            rows=${10}\n                            placeholder="Vul je interesses in"\n                        ></vl-textarea-next>\n                        <vl-error-message-next for="interesses" state="valueMissing"\n                            >Gelieve je interesses in te vullen.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="interesses" state="tooShort"\n                            >Gelieve minimum 5 karakters te gebruiken.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="interesses" state="tooLong"\n                            >Gelieve maximum 100 karakters te gebruiken.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <vl-form-label-next for="leeftijd" label="Leeftijd *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-input-field-next\n                            id="leeftijd"\n                            name="leeftijd"\n                            type="number"\n                            block\n                            required\n                            placeholder="Vul je leeftijd in"\n                            min=${0}\n                            max=${99}\n                        ></vl-input-field-next>\n                        <vl-error-message-next for="leeftijd" state="valueMissing"\n                            >Gelieve een leeftijd in te vullen.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="leeftijd" state="rangeUnderflow"\n                            >De minimum leeftijd is 0 jaar.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="leeftijd" state="rangeOverflow"\n                            >De maximum leeftijd is 99 jaar.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <vl-form-label-next for="contactmethode" label="Contactmethode *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-radio-group-next id="contactmethode" name="contactmethode" required>\n                            <vl-radio-next value="e-mail">e-mail</vl-radio-next>\n                            <vl-radio-next value="telefoon">telefoon</vl-radio-next>\n                            <vl-radio-next value="post">post</vl-radio-next>\n                        </vl-radio-group-next>\n                        <vl-error-message-next for="contactmethode" state="valueMissing">\n                            Gelieve een contactmethode te selecteren.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <vl-form-label-next for="foto" label="Pasfoto *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-upload-next\n                            id="foto"\n                            name="foto"\n                            accepted-files="image/*"\n                            required\n                            url="http://httpbin.org/post"\n                        ></vl-upload-next>\n                        <vl-error-message-next for="foto" state="valueMissing">\n                            Gelieve een foto te selecteren.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <vl-form-label-next\n                            for="waarheidsgetrouw"\n                            label="Waarheidsgetrouw *"\n                            block\n                        ></vl-form-label-next>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-checkbox-next id="waarheidsgetrouw" name="waarheidsgetrouw" block required>\n                            Naar waarheid ingevuld\n                        </vl-checkbox-next>\n                        <vl-error-message-next for="waarheidsgetrouw" state="valueMissing">\n                            Gelieve te bevestigen dat bovenstaande gegevens naar waarheid zijn ingevuld.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--6-12 vl-push--4-12">\n                        <div class="vl-action-group">\n                            <button class="vl-button" type="submit">Verstuur</button>\n                            <button class="vl-button" type="reset">Reset</button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        `;\n    }\n\n    private onSubmit(event: Event): void {\n        event.preventDefault();\n\n        const data = parseFormData(event.target as HTMLFormElement);\n        console.log(data);\n    }\n}\n\ndeclare global {\n    interface HTMLElementTagNameMap {\n        \'vl-form-demo\': VlFormDemoComponent;\n    }\n}\n',language:"ts",dark:!0})]})]})}(0,o.YV)([y]);let $={title:"Ontwerp/Form/Demo",tags:["autodocs"],parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,j.ah)(),e.components);return t?(0,w.jsx)(t,Object.assign({},e,{children:(0,w.jsx)(V,e)})):V(e)}}}},C=()=>(0,r.dy)`<vl-form-demo></vl-form-demo>`;C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"() => html`<vl-form-demo></vl-form-demo>`",...C.parameters?.docs?.source}}};let O=["Demo"]},"./libs/form/src/next/checkbox/vl-checkbox.component.ts":(e,t,l)=>{l.d(t,{E:()=>u,l:()=>m});var r=l("./node_modules/lit/index.js"),o=l("./node_modules/lit/directives/class-map.js"),s=l("./node_modules/@domg/govflanders-style/component/index.js"),n=l("./node_modules/@domg/govflanders-style/common/index.js"),i=l("./libs/elements/src/index.ts");let a=(0,r.iv)`
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
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.checked=this.initialCheckedValue,this.value=this.initialValue}toggle(){this.checked=!this.checked}constructor(...e){super(...e),this.block=m.block,this.value=m.value,this.checked=m.checked,this.isSwitch=m.isSwitch,this.initialValue="",this.initialCheckedValue=!1}}u=function(e,t,l,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(s<3?o(n):s>3?o(t,l,n):o(t,l))||n);return s>3&&n&&Object.defineProperty(t,l,n),n}([(0,d.a6)("vl-checkbox-next")],u)},"./libs/form/src/next/datepicker/vl-datepicker.component.ts":(e,t,l)=>{l.d(t,{yE:()=>x,Z1:()=>w,_R:()=>k});var r=l("./node_modules/@domg/govflanders-style/common/index.js"),o=l("./node_modules/@domg/govflanders-style/component/index.js"),s=l("./node_modules/lit/index.js");let n=(0,s.iv)`
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
`;var i=l("./node_modules/flatpickr/dist/esm/index.js"),a=l("./node_modules/flatpickr/dist/l10n/nl.js"),c=l.n(a),d=l("./node_modules/lit/directives/class-map.js"),m=l("./libs/common/utilities/src/index.ts"),u=l("./libs/elements/src/index.ts"),h=l("./node_modules/lit/directives/live.js"),v=l("./libs/form/src/next/form-control/form-control.ts");let p={key:"patternMismatch",message:"Value does not meet the given pattern.",isValid(e,t){let{disableMaskValidation:l,cleaveInstance:r}=e,o=e.regex||e.pattern;if(!t||!o&&(!r||l))return!0;if(!(r&&!l&&e.maskOptions?.regex))return new RegExp(o).test(t);{let t=r.getRawValue();return new RegExp(e.maskOptions.regex).test(t)}}};var b=l("./node_modules/cleave.js/dist/cleave-esm.js");let f=(e,t,l)=>{if(!e)return null;let r=null,o=e.split(/[dmyY]/).filter(e=>e),s=e.split(/[.*+-/_:]/);if(s.filter(e=>!["d","m","Y","y"].includes(e)).length)return null;let n=s.reduce((e,t)=>"Y"===t?e+4:e+2,0);if(r={date:!0,datePattern:s,delimiters:o,regex:RegExp(`^[0-9]{${n}}$`)},t){let l=i.Z?.parseDate(t,e);r={...r,dateMin:l?i.Z?.formatDate(l,"Y-M-D"):void 0}}if(l){let t=i.Z?.parseDate(l,e);r={...r,dateMax:t?i.Z?.formatDate(t,"Y-M-D"):void 0}}return r},g=e=>{if(!e)return null;let t=e.split(/[HhiS]/).filter(e=>e),l=!0,r=e.split(/[.*+-/_:]/).map(e=>{switch(e){case"H":return"h";case"h":return l=!1,"h";case"i":return"m";case"S":return"s";default:return e}});return r.filter(e=>!["h","m","s"].includes(e)).length?null:{time:!0,timePattern:r,timeFormat:l?"24":"12",delimiters:t,regex:RegExp(`^[0-9]{${2*r.length}}$`)}},x=["date","range","time","date-time"],k={...v.E,block:!1,readonly:!1,value:"",placeholder:"",autocomplete:"",type:"date",format:"",amPm:!1,minDate:"",maxDate:"",minTime:"",maxTime:"",disableMaskValidation:!1,pattern:"",regex:null},y=" tot en met ";class w extends v.N{static{(0,m.YV)([u.q_,u.Gi])}static{this.formControlValidators=[...v.N.formControlValidators,p]}static get styles(){return[r.YN,r.Oh,o.oQ,o.K$,o.CZ,o.gU,o.ap,o.nt,n]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},value:{type:String,reflect:!0},placeholder:{type:String},autocomplete:{type:String},type:{type:String},format:{type:String},amPm:{type:Boolean,attribute:"am-pm"},minDate:{type:String,attribute:"min-date"},maxDate:{type:String,attribute:"max-date"},minTime:{type:String,attribute:"min-time"},maxTime:{type:String,attribute:"max-time"},rawValue:{type:Boolean,attribute:"raw-value"},pattern:{type:String},disableMaskValidation:{type:Boolean,attribute:"disable-mask-validation"}}}connectedCallback(){super.connectedCallback(),c()?.nl&&(c().nl.rangeSeparator=y,i.Z.l10ns.default.rangeSeparator=y),this.initialValue||(this.initialValue=this.value)}firstUpdated(e){if(super.firstUpdated(e),e.has("type")&&!this.format){let e="d.m.Y";switch(this.type){case"date":default:this.format=e;break;case"time":this.format="H:i";break;case"date-time":this.format=`${e} H:i`}}this.maskOptions=this.composeMaskForFormat(this.format,this.type),this.maskOptions&&!this.disableMaskValidation&&(this.cleaveInstance=new b.Z(this.validationTarget,this.maskOptions)),this.initializeComponent()}updated(e){super.updated(e);let t=this.getDynamicOptions();["disabled","readonly","minDate","maxDate","minTime","maxTime"].some(t=>e.has(t))&&this.updateOptionsForInstance(t),e.has("value")&&this.updateValue(this.value),e.has("block")&&(this.block?this.getFlatpickrWrapper()?.classList.add("flatpickr-wrapper--block"):this.getFlatpickrWrapper()?.classList.remove("flatpickr-wrapper--block"))}disconnectedCallback(){super.disconnectedCallback(),this.flatpickrInstance?.destroy()}render(){let e={"vl-input-field":!0,"js-vl-datepicker-toggle":!0,"vl-input-field--error":this.error||this.isInvalid,"vl-input-field--success":this.success,"vl-input-field--block":this.block,"vl-input-field--disabled":this.disabled},t={"vl-input-addon":!0,"js-vl-datepicker-toggle":!0,"vl-input-addon--error":this.error||this.isInvalid,"vl-input-addon--success":this.success,"vl-input-addon--disabled":this.disabled};return(0,s.dy)`
            <div class="vl-input-group" id="datepicker-wrapper">
                <input
                    id=${this.id||s.Ld}
                    name=${this.name||s.Ld}
                    class=${(0,d.$)(e)}
                    type="text"
                    aria-label=${this.label||s.Ld}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    ?readonly=${this.readonly}
                    .value=${(0,h.a)(this.value)}
                    placeholder=${this.placeholder||s.Ld}
                    autocomplete=${this.autocomplete||s.Ld}
                    pattern=${this.pattern||s.Ld}
                    @input=${this.cleaveInstance?s.Ld:this.onInput}
                />
                <button
                    id="toggle-calendar"
                    type="button"
                    class=${(0,d.$)(t)}
                    ?disabled=${this.disabled}
                    aria-label="toggle calendar"
                    @click=${this.toggleCalendar}
                >
                    <span class="vl-icon vl-icon--small vl-vi vl-vi-calendar" aria-hidden="true"></span>
                </button>
            </div>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.flatpickrInstance?.clear(),this.value=this.initialValue,this.initialValue&&this.flatpickrInstance?.setDate(this.initialValue,!0,this.format)}getRawValue(){return this.cleaveInstance?.getRawValue()}parseTodayDate(e){if("today"!==e)return e;{let e;return e=new Date,i.Z.formatDate(e,this.format)}}getDynamicOptions(){let e=i.Z.parseDate(this.minTime,this.format);return{allowInput:!(this.disabled||this.readonly),maxDate:this.maxDate,minDate:this.minDate,minTime:this.minTime,maxTime:this.maxTime,defaultHour:e?.getHours()??12,defaultMinute:e?.getMinutes()??0}}getOptions(){let e=this.shadowRoot?.querySelector("button"),t=this.shadowRoot?.querySelector("#datepicker-wrapper"),l=this.parseTodayDate(this.initialValue),r={dateFormat:this.format,locale:c().nl,clickOpens:!1,onChange:this.handleDateChange,positionElement:e,static:!0,appendTo:t,defaultDate:l,enableTime:"time"===this.type||"date-time"===this.type,noCalendar:"time"===this.type,time_24hr:!this.amPm,mode:"range"!==this.type?"single":"range",...this.getDynamicOptions()};return Object.keys(r).forEach(e=>{void 0===r[e]&&delete r[e]}),r}getDatePicker(){return this.shadowRoot?.querySelector("#datepicker-wrapper")}getFlatpickrWrapper(){return this.shadowRoot?.querySelector(".flatpickr-wrapper")}updateOptionsForInstance(e){Object.keys(e).map(e=>e).forEach(t=>{this.flatpickrInstance?.set(t,e[t])})}initializeComponent(){this.getDatePicker()&&!this.flatpickrInstance&&(this.flatpickrInstance=(0,i.Z)(this.getDatePicker(),this.getOptions()),this.getDatePicker()?.classList.add("static"))}handleValueChanged(e){let t;try{t=i.Z.parseDate(e,this.format)}finally{this.value=e,t instanceof Date&&!isNaN(t)&&this.flatpickrInstance?.setDate(e,!1,this.format)}}composeMaskForFormat(e,t){if(!e)return null;let l=null;switch(t){case"date":l=f(e,this.minDate,this.maxDate);break;case"time":l=g(e)}return l?{...l,onValueChanged:({target:{value:e}})=>{this.handleValueChanged(e??"")}}:null}constructor(...e){super(...e),this.block=k.block,this.readonly=k.readonly,this.value=k.value,this.placeholder=k.placeholder,this.autocomplete=k.autocomplete,this.type=k.type,this.format=k.format,this.amPm=k.amPm,this.minDate=k.minDate,this.maxDate=k.maxDate,this.minTime=k.minTime,this.maxTime=k.maxTime,this.disableMaskValidation=k.disableMaskValidation,this.pattern=k.pattern,this.initialValue="",this.flatpickrInstance=null,this.maskOptions=null,this.cleaveInstance=null,this.toggleCalendar=()=>{this.flatpickrInstance?.toggle()},this.onInput=e=>{this.handleValueChanged(e.target?.value??"")},this.handleDateChange=e=>{let t=e=>i.Z.formatDate(new Date(e),this.format);2!==e.length?this.value=t(e[0]):this.value=`${t(e[0])}${c()?.nl?.rangeSeparator}${t(e[1])}`},this.updateValue=e=>{let t={value:this.value};this.value!==this.flatpickrInstance?.input.value&&this.flatpickrInstance?.setDate(this.value,!1,this.format),this.setValue(e),this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:t})),this.dispatchEventIfValid(t)}}}w=function(e,t,l,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(s<3?o(n):s>3?o(t,l,n):o(t,l))||n);return s>3&&n&&Object.defineProperty(t,l,n),n}([(0,m.a6)("vl-datepicker-next")],w)},"./libs/form/src/next/input-field-masked/masks.ts":(e,t,l)=>{l.d(t,{T:()=>r});let r={iban:{blocks:[4,4,4,4],prefix:"BE",numericOnly:!0,numeralPositiveOnly:!0,regex:/^[A-Z]{2}[0-9]{14}$/},rrn:{blocks:[2,2,2,3,2],delimiters:[".",".","-","."],numericOnly:!0,numeralPositiveOnly:!0,regex:/^[0-9]{11}$/},uuid:{blocks:[8,4,4,4,12],delimiter:"-",regex:/^[0-9a-fA-F]{32}$/,customTransformFn:e=>e.replace(/[^0-9a-fA-F-]/g,"")},date:{date:!0,datePattern:["d","m","Y"],delimiter:".",regex:/^[0-9]{8}$/},numerical:{numeral:!0,numeralDecimalMark:",",delimiter:".",regex:/^[0-9]+(.[0-9]+)?$/},price:{numeral:!0,prefix:"€",rawValueTrimPrefix:!0,numeralDecimalMark:",",delimiter:".",regex:/^[0-9]+(.[0-9]+)?$/},phone:{blocks:[3,2,2,2,2],prefix:"+32",numericOnly:!0,numeralPositiveOnly:!0,delimiter:" ",regex:/^\+[0-9]{10}$/},phoneinternational:{blocks:[99],numericOnly:!0,numeralPositiveOnly:!0,regex:/^[0-9]*$/},mobile:{blocks:[3,3,2,2,2],prefix:"+32",numericOnly:!0,numeralPositiveOnly:!0,delimiter:" ",regex:/^\+[0-9]{11}$/}}},"./libs/form/src/next/input-field-masked/vl-input-field-masked.component.ts":(e,t,l)=>{l.d(t,{X:()=>m,R:()=>d});var r=l("./node_modules/cleave.js/dist/cleave-esm.js"),o=l("./libs/form/src/next/input-field-masked/masks.ts"),s=l("./libs/form/src/next/input-field/vl-input-field.component.ts"),n=l("./libs/common/utilities/src/index.ts");let i={key:"patternMismatch",message:"Value does not meet the given mask pattern.",isValid(e,t){let{disableMaskValidation:l,cleaveInstance:r}=e,o=e.regex||e.maskOptions?.regex;if(!t||l||!o||!r)return!0;let s=r.getRawValue();return new RegExp(o).test(s)}},a={attribute:"min",key:"rangeUnderflow",message:e=>e.minExclusive?`Value must be greater than ${e.min}.`:`Value must be greater than or equal to ${e.min}.`,isValid(e,t){let{min:l,minExclusive:r,cleaveInstance:o}=e;if(!t||!l&&0!==l||!o)return!0;let s=o.getRawValue();return!(parseFloat(s)<l)&&(!r||parseFloat(s)!==l)}},c={attribute:"max",key:"rangeOverflow",message:e=>e.maxExclusive?`Value must be lesser than ${e.max}.`:`Value must be lesser than or equal to ${e.max}.`,isValid(e,t){let{max:l,maxExclusive:r,cleaveInstance:o}=e;if(!t||!l&&0!==l||!o)return!0;let s=o.getRawValue();return!(parseFloat(s)>l)&&(!r||parseFloat(s)!==l)}},d={...s.E,mask:"",maskPrefix:"",rawValue:!1,disableMaskValidation:!1};class m extends s.z{static{this.formControlValidators=[...s.z.formControlValidators,i,a,c]}static get properties(){return{mask:{type:String},maskPrefix:{type:String,attribute:"mask-prefix"},rawValue:{type:Boolean,attribute:"raw-value"},disableMaskValidation:{type:Boolean,attribute:"disable-mask-validation"}}}connectedCallback(){super.connectedCallback(),this.maskOptions={...o.T[this.mask],onValueChanged:e=>{this.handleValueChanged(e?.target?.value)}},this.maskOptions&&(this.maskPrefix&&(this.maskOptions.prefix=this.maskPrefix),this.value.startsWith(this.maskOptions.prefix||"")||(this.value=this.maskOptions.prefix+this.value))}firstUpdated(e){super.firstUpdated(e),this.maskOptions&&(this.cleaveInstance=new r.Z(this.validationTarget,this.maskOptions))}resetFormControl(){super.resetFormControl(),this.initialValue.startsWith(this.maskOptions?.prefix||"")?this.value=this.initialValue:this.value=this.maskOptions?.prefix+this.initialValue}getRawValue(){return this.cleaveInstance?.getRawValue()}onInput(){}onUpdated(e){if(e.has("value")||e.has("rawValue")){let e=this.rawValue?this.getRawValue()||"":this.value;(this.value===this.maskOptions?.prefix||this.getRawValue()===this.maskOptions?.prefix)&&(e="");let t={value:e};this.setValue(e),this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:t})),this.dispatchEventIfValid(t)}}handleValueChanged(e){let t=this.maskOptions?.customTransformFn,l=t?t(e):e;this.value=l}constructor(...e){super(...e),this.mask=d.mask,this.maskPrefix=d.maskPrefix,this.rawValue=d.rawValue,this.disableMaskValidation=d.disableMaskValidation,this.maskOptions=null,this.cleaveInstance=null}}m=function(e,t,l,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(s<3?o(n):s>3?o(t,l,n):o(t,l))||n);return s>3&&n&&Object.defineProperty(t,l,n),n}([(0,n.a6)("vl-input-field-masked-next")],m)},"./libs/form/src/next/radio-group/vl-radio-group.component.ts":(e,t,l)=>{l.d(t,{S:()=>d,X:()=>m});var r=l("./node_modules/lit/index.js"),o=l("./node_modules/@domg/govflanders-style/component/index.js"),s=l("./node_modules/@domg/govflanders-style/common/index.js"),n=l("./libs/elements/src/index.ts"),i=l("./libs/form/src/next/radio-group/vl-radio.component.uig-css.ts"),a=l("./libs/form/src/next/form-control/form-control.ts"),c=l("./libs/common/utilities/src/index.ts");let d={...a.E,readonly:!1,value:""};class m extends a.N{static get styles(){return[s.YN,s.Oh,n.CX,o.SC,i.Z]}static get properties(){return{readonly:{type:Boolean},value:{type:String,reflect:!0},block:{type:Boolean}}}connectedCallback(){super.connectedCallback(),this.addEventListener("vl-checked",this.updateGroupAfterCheck),this.addEventListener("keydown",this.handleKeyDown)}firstUpdated(e){super.firstUpdated(e),this.initialValue||(this.initialValue=this.value)}updated(e){super.updated(e),e.has("value")&&(this.setValue(this.value),this.checkRadioForValue(this.value)),e.has("name")&&this.updateRadiosForAttribute("name"),e.has("block")&&this.updateRadiosForAttribute("block"),e.has("readonly")&&(this.updateRadiosForAttribute("readonly"),this.preventDefaultEventOnAllInputsOfAllRadio(this.readonly)),e.has("disabled")&&this.updateRadiosForAttribute("disabled"),e.has("error")&&this.updateRadiosForAttribute("error"),e.has("isInvalid")&&this.getRadios()?.forEach(e=>this.isInvalid?e.setAttribute("error",""):e.removeAttribute("error")),e.has("success")&&this.updateRadiosForAttribute("success")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("vl-checked",this.updateGroupAfterCheck)}render(){return(0,r.dy)` <slot></slot> `}resetFormControl(){super.resetFormControl(),this.resetAllRadios(),this.resetToInitialValue()}get validationTarget(){let e=this.getRadios()[0];return e?e.validationTarget:null}resetToInitialValue(){this.setValue(this.initialValue),this.checkRadioForValue(this.initialValue),this.value=this.initialValue}checkRadioForValue(e){this.getRadios()?.forEach(t=>{e&&t.getAttribute("value")===e?t.setAttribute("checked",""):t.removeAttribute("checked")})}resetAllRadios(){this.getRadios()?.forEach(e=>{e.removeAttribute("checked")})}preventDefaultEventOnAllInputsOfAllRadio(e){this.getRadios()?.forEach(t=>{e?t.addEventListener("click",this.preventDefaultAndFocus):t.removeEventListener("click",this.preventDefaultAndFocus)})}updateRadiosForAttribute(e){this.getRadios()?.forEach(t=>this[e]?t.setAttribute(e,""):t.removeAttribute(e))}getRadios(){return Array.from(this.querySelectorAll("vl-radio-next"))}checkSelectedRadio(e){this.getRadios()?.forEach(t=>{let l=t.getAttribute("value");t!==e?t.removeAttribute("checked"):(t.hasAttribute("checked")||t.setAttribute("checked",""),this.value=l||"",this.setValue(l))})}navigateRadioButtons(e){let t;let l=this.getRadios(),r=l.findIndex(e=>e.hasAttribute("checked"));"ArrowLeft"===e||"ArrowUp"===e?(t=r-1)<0&&(t=l.length-1):("ArrowRight"===e||"ArrowDown"===e)&&(t=r+1)>=l.length&&(t=0),this.checkSelectedRadio(l[t]),l[t].focus()}updateGroupAfterCheck(e){let t=e.target;this.checkSelectedRadio(t)}constructor(...e){super(...e),this.readonly=d.readonly,this.value=d.value,this.initialValue="",this.preventDefaultAndFocus=e=>{let t=e.target;t?.validationTarget?.focus(),e.preventDefault()},this.handleKeyDown=e=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)&&(e.preventDefault(),this.navigateRadioButtons(e.code)),"Space"===e.code){let e=this.getRadios()?.find(e=>e===document.activeElement);e&&!e.hasAttribute("checked")&&this.checkSelectedRadio(e)}}}}m=function(e,t,l,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(s<3?o(n):s>3?o(t,l,n):o(t,l))||n);return s>3&&n&&Object.defineProperty(t,l,n),n}([(0,c.a6)("vl-radio-group-next")],m)},"./libs/form/src/next/radio-group/vl-radio.component.ts":(e,t,l)=>{l.d(t,{P:()=>u,Y:()=>m});var r=l("./node_modules/lit/index.js"),o=l("./node_modules/lit/directives/live.js"),s=l("./node_modules/lit/directives/class-map.js"),n=l("./node_modules/@domg/govflanders-style/component/index.js"),i=l("./node_modules/@domg/govflanders-style/common/index.js"),a=l("./libs/elements/src/index.ts"),c=l("./libs/form/src/next/radio-group/vl-radio.component.uig-css.ts"),d=l("./libs/common/utilities/src/index.ts");let m={id:"radio",name:"",value:"",label:"",block:!1,readonly:!1,disabled:!1,error:!1,success:!1,checked:!1};class u extends d.fS{static{this.shadowRootOptions={...r.oi.shadowRootOptions,delegatesFocus:!0}}static get styles(){return[i.YN,i.Oh,a.CX,n.SC,c.Z]}static get properties(){return{id:{type:String},name:{type:String},value:{type:String},label:{type:String},disabled:{type:Boolean},readonly:{type:Boolean},error:{type:Boolean},success:{type:Boolean},block:{type:Boolean},checked:{type:Boolean,reflect:!0}}}updated(e){if(super.updated(e),(e.has("checked")||e.has("value"))&&this.checked){let e={checked:!0,value:this.value};this.dispatchEvent(new CustomEvent("vl-checked",{bubbles:!0,composed:!0,detail:e})),this.dispatchEvent(new CustomEvent("vl-valid",{composed:!0,bubbles:!0,detail:e}))}}render(){let e={"vl-radio":!0,"vl-radio--block":this.block,"vl-radio--disabled":this.disabled,"vl-radio--error":this.error,"vl-radio--success":this.success};return(0,r.dy)`
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
`},"./libs/form/src/next/select-rich/index.ts":(e,t,l)=>{l.d(t,{n:()=>r.WG});var r=l("./libs/form/src/next/select-rich/vl-select-rich.component.ts")},"./libs/form/src/next/select/vl-select.component.ts":(e,t,l)=>{l.d(t,{k:()=>h,Q:()=>u});var r=l("./node_modules/lit/index.js"),o=l("./node_modules/lit/directives/live.js"),s=l("./node_modules/lit/directives/class-map.js"),n=l("./node_modules/@domg/govflanders-style/common/index.js"),i=l("./libs/form/src/next/form-control/form-control.ts"),a=l("./libs/common/utilities/src/index.ts");let c=(0,r.iv)`
    .vl-select {
        background-color: #fff;
        appearance: none;
        display: inline-block;
        position: relative;
        padding: 0 4rem 0 1.5rem;
        max-width: 100%;
        height: 3.5rem;
        line-height: calc(3.5rem - 0.2rem);
        border: 1px solid #8695a8;
        border-radius: 0.3rem;
        text-decoration: none;
        color: #333332;
        font-family: 'Flanders Art Sans', sans-serif;
        font-size: 1.6rem;
        -webkit-appearance: none;
    }
    .vl-select:focus::-ms-value {
        background: inherit;
        color: inherit;
    }
    .vl-select::-ms-expand {
        display: none;
    }
    .vl-select:hover:not([disabled]) {
        border: 0.2rem solid rgba(0, 85, 204, 0.65);
        padding: 0 3.9rem 0 1.4rem;
        line-height: 3.2rem;
        background-position: calc(100% - 1.4rem) 50%;
    }
    .vl-select:hover:not([disabled]).vl-select--error {
        border-color: #d2373c;
    }
    .vl-select:hover:not([disabled]).vl-select--success {
        border-color: #009e47;
    }
    .vl-select:focus {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
    }
    @supports (outline-offset: 2px) {
        .vl-select:focus {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }
    .vl-select[disabled],
    .vl-select--disabled {
        border-color: #8695a8;
        background-color: #f3f5f6;
        color: var(--vl-theme-fg-color-70);
    }
    .vl-select--error {
        border-color: #d2373c;
        background-color: #fbebec;
    }
    .vl-select--success {
        border-color: #009e47;
        background-color: #e6f5ed;
    }
    .vl-select--block {
        display: block;
        width: 100%;
    }
    @media screen and (max-width: 767px) {
        .vl-select {
            height: 3.5rem;
            line-height: 3.5rem;
            font-size: 1.6rem;
        }
    }

    @media all and (min-width: 0\\0) and (min-resolution: 0.001dpcm) {
        .vl-select {
            padding-right: 0;
            background-image: none;
        }
    }
`,d=(0,r.iv)`
    .vl-select__container {
        position: relative;
        display: inline-block;
    }

    .vl-select__container.vl-select__container--block {
        display: block;
    }

    .vl-select:has(option.vl-select__placeholder[selected]) {
        color: #687483 !important;
    }

    .vl-select.vl-select--disabled ~ .vl-select__button {
        display: none;
    }

    .vl-select ~ .vl-select__button {
        color: #05c;
        position: absolute;
        width: 2.4rem;
        height: 2.4rem;
        top: 0.6rem;
        right: 3.6rem;
        font-size: 1.4rem;
        border-radius: 0.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;

        span.vl-icon:before {
            margin-top: -0.2rem;
        }

        &:hover {
            border: #05c 0.1rem solid;
            background-color: #e6eefa;
            color: #003bb0;
        }
    }

    .vl-vi.vl-vi-nav-down:before {
        color: #6e7985;
        position: absolute;
        right: 1.3rem;
        font-size: 1.3rem;
        top: 0.8rem;
        pointer-events: none;
    }
`;var m=l("./node_modules/@domg/govflanders-style/component/index.js");let u={...i.E,options:[],block:!1,placeholder:"",autocomplete:"",deletable:!1};class h extends i.N{static get styles(){return[n.YN,n.Oh,c,m.oQ,d]}static get properties(){return{options:{type:Array},block:{type:Boolean},readonly:{type:Boolean},placeholder:{type:String},autocomplete:{type:String},deletable:{type:Boolean},value:{type:String,state:!0}}}connectedCallback(){super.connectedCallback();let e=this.getSelectedOption();this.value=e?.value||"",this.initialOptions=JSON.parse(JSON.stringify(this.options))}updated(e){if(super.updated(e),e.has("options")){let e=this.getSelectedOption();this.value=e?.value||""}if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-select",{composed:!0,bubbles:!0,detail:e})),this.dispatchEventIfValid(e)}}render(){let e={"vl-select__container":!0,"vl-select__container--block":this.block},t={"vl-select":!0,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success,"vl-select--block":this.block},l=""!==this.value,n=this.options.some(e=>e.group);return(0,r.dy)`
            <div class=${(0,s.$)(e)}>
                <select
                    id=${this.id||r.Ld}
                    name=${this.name||r.Ld}
                    class=${(0,s.$)(t)}
                    aria-label=${this.label||r.Ld}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${(0,o.a)(this.value)}
                    autocomplete=${this.autocomplete||r.Ld}
                    @change=${this.onChange}
                >
                    ${this.placeholder?this.renderPlaceholder(l):r.Ld}
                    ${n?this.renderGroupedOptions():this.renderSelectOptions(this.options)}
                </select>
                ${l&&this.deletable?this.renderClearButton():r.Ld}
                <span class="vl-icon vl-vi vl-vi-nav-down"></span>
            </div>
        `}renderPlaceholder(e){return(0,r.dy)`<option class="vl-select__placeholder" value="" ?selected=${!e} disabled>
            ${this.placeholder}
        </option>`}renderClearButton(){return(0,r.dy)`<button class="vl-select__button" aria-label="Verwijder keuze" @click=${this.clearValue}>
            <span class="vl-icon vl-vi vl-vi-close"></span>
        </button>`}renderGroupedOptions(){return Object.entries(this.getGroupedOptions()).map(([e,t])=>(0,r.dy)`<optgroup label=${e}>${this.renderSelectOptions(t)}</optgroup>`)}renderSelectOptions(e){return e.map(e=>(0,r.dy)`<option
                value=${e.value}
                ?selected=${this.value===e.value}
                ?disabled=${e.disabled}
            >
                ${e.label||e.value}
            </option>`)}get validationTarget(){return this.shadowRoot?.querySelector("select")}resetFormControl(){for(super.resetFormControl();this.options.length;)this.options.pop();this.initialOptions.forEach(e=>this.options.push({...e})),this.requestUpdate("options")}onChange(e){this.value=e?.target?.value}clearValue(){this.value=""}getSelectedOption(){return[...this.options].reverse().find(e=>e.selected)}getGroupedOptions(){return this.options.reduce((e,t)=>{let l=t.group||this.DEFAULT_GROUP_LABEL;return e[l]?e[l].push(t):e[l]=[t],e},{})}constructor(...e){super(...e),this.options=u.options,this.block=u.block,this.placeholder=u.placeholder,this.autocomplete=u.autocomplete,this.deletable=u.deletable,this.value="",this.initialOptions=[],this.DEFAULT_GROUP_LABEL="Overig"}}h=function(e,t,l,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(s<3?o(n):s>3?o(t,l,n):o(t,l))||n);return s>3&&n&&Object.defineProperty(t,l,n),n}([(0,a.a6)("vl-select-next")],h)},"./libs/form/src/next/textarea/vl-textarea.component.ts":(e,t,l)=>{l.d(t,{n:()=>u,q:()=>m});var r=l("./node_modules/lit/index.js"),o=l("./node_modules/@domg/govflanders-style/component/index.js"),s=l("./node_modules/lit/directives/live.js"),n=l("./node_modules/lit/directives/class-map.js"),i=l("./node_modules/@domg/govflanders-style/common/index.js"),a=l("./libs/form/src/next/form-control/form-control.ts"),c=l("./libs/common/utilities/src/index.ts"),d=l("./node_modules/@open-wc/form-control/src/validators.js");let m={...a.E,block:!1,readonly:!1,value:"",placeholder:"",autocomplete:"",minLength:null,maxLength:null,rows:null,cols:null};class u extends a.N{static{this.formControlValidators=[...a.N.formControlValidators,d.OP,d.dH]}static get styles(){return[i.YN,i.Oh,o.Qu]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},value:{type:String,reflect:!0},placeholder:{type:String},autocomplete:{type:String},minLength:{type:Number,attribute:"min-length"},maxLength:{type:Number,attribute:"max-length"},rows:{type:Number},cols:{type:Number}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value)}updated(e){if(super.updated(e),e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:e})),this.dispatchEventIfValid(e)}}render(){let e={"vl-textarea":!0,"vl-textarea--disabled":this.disabled,"vl-textarea--error":this.isInvalid||this.error,"vl-textarea--success":this.success,"vl-textarea--block":this.block};return(0,r.dy)`
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
        `}get validationTarget(){return this.shadowRoot?.querySelector("textarea")}resetFormControl(){super.resetFormControl(),this.value=this.initialValue}onInput(e){this.value=e?.target?.value}constructor(...e){super(...e),this.block=m.block,this.readonly=m.readonly,this.value=m.value,this.placeholder=m.placeholder,this.autocomplete=m.autocomplete,this.minLength=m.minLength,this.maxLength=m.maxLength,this.rows=m.rows,this.cols=m.cols,this.initialValue=""}}u=function(e,t,l,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(n=(s<3?o(n):s>3?o(t,l,n):o(t,l))||n);return s>3&&n&&Object.defineProperty(t,l,n),n}([(0,c.a6)("vl-textarea-next")],u)},"./libs/form/src/next/upload/index.ts":(e,t,l)=>{l.d(t,{F:()=>r.F});var r=l("./libs/form/src/next/upload/vl-upload.component.ts")},"./libs/form/src/utils/index.ts":(e,t,l)=>{l.d(t,{u:()=>s});var r=l("./libs/form/src/next/form-control/form-control.ts"),o=l("./libs/form/src/next/upload/index.ts");let s=(e,t)=>{if(!e)return;let l=new FormData(e),s=t||Array.from(e.querySelectorAll("*")).filter(e=>e instanceof r.N&&e.hasAttribute("multiple")||e instanceof o.F).map(e=>e.getAttribute("name"));return Array.from(l.keys()).reduce((e,t)=>{if(!s.includes(t))return{...e,[t]:l.get(t)};{let r=l.getAll(t);return 1===r.length&&""===r[0]?{...e,[t]:[]}:{...e,[t]:r}}},{})}}}]);