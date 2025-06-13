"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[7374],{"./apps/storybook/docs/d_applicatief/d_voorbeelden/form/form-demo/form-demo.stories.ts":(e,t,l)=>{l.r(t),l.d(t,{Demo:()=>y,__namedExportsOrder:()=>_,default:()=>k});var r=l("./node_modules/lit-html/lit-html.js"),s=l("./apps/storybook/docs/d_applicatief/d_voorbeelden/form/form-demo/form-demo.stories-doc.mdx"),o=l("./libs/common/utilities/src/index.ts"),i=l("./node_modules/lit/decorators.js"),n=l("./node_modules/lit/index.js"),a=l("./libs/form/src/next/error-message/index.ts"),d=l("./libs/elements/src/index.ts"),c=l("./libs/form/src/next/input-field/index.ts"),m=l("./libs/form/src/next/input-field-masked/vl-input-field-masked.component.ts"),u=l("./libs/form/src/next/textarea/vl-textarea.component.ts"),h=l("./libs/form/src/next/select/vl-select.component.ts"),v=l("./libs/form/src/next/checkbox/vl-checkbox.component.ts"),p=l("./libs/form/src/next/radio-group/vl-radio.component.ts"),b=l("./libs/form/src/next/radio-group/vl-radio-group.component.ts"),f=l("./libs/form/src/next/datepicker/vl-datepicker.component.ts"),g=l("./libs/form/src/next/upload/vl-upload.component.ts");class x extends n.oi{static{(0,o.YV)([c.z,m.X,u.n,f.Z,h.kI,b.X,p.P,g.F,v.E,a.m])}static get styles(){return[d.CX,(0,n.iv)`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }
            `]}render(){return(0,n.dy)`
            <form id="form" class="vl-form" @submit=${this.onSubmit}>
                <div class="vl-form-grid vl-form-grid--is-stacked">
                    <div class="vl-form-col--4-12">
                        <label class="vl-form__label" for="naam">Naam *</label>
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
                        <label class="vl-form__label" for="rrn">Rijksregisternummer *</label>
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
                        <label class="vl-form__label" for="geboortedatum">Geboortedatum *</label>
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
                        <label class="vl-form__label" for="geboorteplaats">Geboorteplaats *</label>
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
                        <label class="vl-form__label" for="hobbies">Hobbies *</label>
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
                        <label class="vl-form__label" for="interesses">Interesses *</label>
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
                        <label class="vl-form__label" for="leeftijd">Leeftijd *</label>
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
                        <label class="vl-form__label" for="contactmethode">Contactmethode *</label>
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
                        <label class="vl-form__label" for="foto">Pasfoto *</label>
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
                        <label class="vl-form__label" for="waarheidsgetrouw">Waarheidsgetrouw *</label>
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
        `}onSubmit(e){e.preventDefault(),console.log(Object.fromEntries(new FormData(e.target)))}constructor(...e){super(...e),this.geboorteplaatsen=[{label:"België",value:"",choices:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"}]},{label:"Puerto Rico",value:"",choices:[{label:"Rio Piedras",value:"rio piedras"}]}],this.hobbies=[{label:"Padel",value:"padel"},{label:"Dans",value:"dans"},{label:"Drummen",value:"drummen"},{label:"Zwemmen",value:"zwemmen"},{label:"Boardgames",value:"boardgames"},{label:"Fietsen",value:"fietsen"}]}}x=function(e,t,l,r){var s,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,l,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(i=(o<3?s(i):o>3?s(t,l,i):s(t,l))||i);return o>3&&i&&Object.defineProperty(t,l,i),i}([(0,i.Mo)("vl-form-demo")],x),(0,o.YV)([x]);let k={title:"Applicatief/Voorbeelden/Form/Demo",component:"form demo",parameters:{docs:{page:s.default}}},y=()=>(0,r.dy)`<vl-form-demo></vl-form-demo>`;y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"() => html`<vl-form-demo></vl-form-demo>`",...y.parameters?.docs?.source}}};let _=["Demo"]},"./apps/storybook/docs/d_applicatief/d_voorbeelden/form/form-demo/form-demo.stories-doc.mdx":(e,t,l)=>{l.r(t),l.d(t,{default:()=>d}),l("./node_modules/react/index.js");var r=l("./node_modules/react/jsx-runtime.js"),s=l("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),o=l("./node_modules/@storybook/addon-docs/dist/index.mjs"),i=l("./node_modules/@storybook/blocks/dist/index.mjs"),n=l("./apps/storybook/docs/d_applicatief/d_voorbeelden/form/form-demo/form-demo.stories.ts");function a(e){let t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",code:"code"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h_,{of:n}),"\n",(0,r.jsx)(t.h1,{id:"form-demo",children:"Form Demo"}),"\n",(0,r.jsxs)(t.p,{children:["Dit is een voorbeeld van hoe de form componenten in een form gebruikt kunnen worden.",(0,r.jsx)("br",{}),"\nDe submitted waarden worden in deze demo in de console gelogd."]}),"\n",(0,r.jsx)(t.h2,{id:"componenten",children:"Componenten"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/form-next-input-field--documentatie",children:"vl-input-field-next"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/form-next-input-field-masked--documentatie",children:"vl-input-field-masked-next"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/form-next-textarea--documentatie",children:"vl-textarea-next"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/form-next-datepicker--documentatie",children:"vl-datepicker-next"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/form-next-select--documentatie",children:"vl-select-next"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/form-next-radio-group--documentatie",children:"vl-radio-group-next"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/form-next-upload--documentatie",children:"vl-upload-next"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/form-next-checkbox--documentatie",children:"vl-checkbox-next"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/form-next-error-message--documentatie",children:"vl-error-message-next"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"native-elementen",children:"Native elementen"}),"\n",(0,r.jsx)(t.p,{children:"Gebruik voor de volgende elementen native HtmlElements met css classes:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Form: native HTMLFormElement met class ",(0,r.jsx)(t.code,{children:"vl-form"})]}),"\n",(0,r.jsxs)(t.li,{children:["Label: native HtmlLabelElement met class ",(0,r.jsx)(t.code,{children:"vl-form__label"})]}),"\n",(0,r.jsxs)(t.li,{children:["Button: native HtmlButtonElement met class ",(0,r.jsx)(t.code,{children:"vl-button"})]}),"\n",(0,r.jsxs)(t.li,{children:["Action Group: native HtmlDivElement met class ",(0,r.jsx)(t.code,{children:"vl-action-group"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"grid",children:"Grid"}),"\n",(0,r.jsxs)(t.p,{children:["Maak voor het opbouwen van de grid structuur gebruik van de ",(0,r.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/form-grid",target:"_blank",rel:"nofollow noopener noreferrer",children:"vl-form-grid classes"})," van Digitaal Vlaanderen.",(0,r.jsx)("br",{}),"\nPlaats deze op native HtmlDivElements."]}),"\n",(0,r.jsx)(t.h2,{id:"formdata",children:"FormData"}),"\n",(0,r.jsxs)(t.p,{children:["Gebruik de ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",target:"_blank",rel:"nofollow noopener noreferrer",children:"FormData"})," API om de form data te verzamelen.\nVoor velden die meerdere waardes per naam kunnen hebben, zoals bv. de ",(0,r.jsx)(t.code,{children:"vl-upload-next"}),", kan je de ",(0,r.jsx)(t.code,{children:"FormData.getAll()"})," methode gebruiken."]}),"\n",(0,r.jsx)(t.h2,{id:"let-op",children:"❗Let op"}),"\n",(0,r.jsxs)(t.p,{children:["Indien je een form control wrapped in een custom component, zorg er voor dat dit custom component geen Shadow DOM heeft.",(0,r.jsx)("br",{}),"\nAls dit custom component een Shadow DOM heeft, zal het native HtmlFormElement de form control niet meer vinden."]}),"\n",(0,r.jsx)(i.Xz,{of:n.Demo,sourceState:"none"}),"\n",(0,r.jsxs)("details",{open:!0,children:[(0,r.jsx)("summary",{children:"Code"}),(0,r.jsx)(i.Hw,{code:'import { customElement } from \'lit/decorators.js\';\nimport { CSSResult, LitElement, css, html } from \'lit\';\nimport { registerWebComponents } from \'@domg-wc/common-utilities\';\nimport { VlErrorMessageComponent } from \'@domg-wc/form/next/error-message\';\nimport { vlElementsStyle } from \'@domg-wc/elements\';\nimport { VlInputFieldComponent } from \'@domg-wc/form/next/input-field\';\nimport { VlInputFieldMaskedComponent } from \'@domg-wc/form/next/input-field-masked\';\nimport { VlTextareaComponent } from \'@domg-wc/form/next/textarea\';\nimport { SelectOption, VlSelectComponent } from \'@domg-wc/form/next/select\';\nimport { VlCheckboxComponent } from \'@domg-wc/form/next/checkbox\';\nimport { VlRadioComponent, VlRadioGroupComponent } from \'@domg-wc/form/next/radio-group\';\nimport { VlDatepickerComponent } from \'@domg-wc/form/next/datepicker\';\nimport { VlUploadComponent } from \'@domg-wc/form/next/upload\';\n\n@customElement(\'vl-form-demo\')\nexport class FormDemoComponent extends LitElement {\n    private geboorteplaatsen: SelectOption[] = [\n        {\n            label: \'België\',\n            value: \'\',\n            choices: [\n                { label: \'Hasselt\', value: \'hasselt\' },\n                { label: \'Turnhout\', value: \'turnhout\' },\n                { label: \'Knokke-Heist\', value: \'knokke-heist\' },\n                { label: \'Waregem\', value: \'waregem\' },\n                { label: \'Lier\', value: \'lier\' },\n            ],\n        },\n        {\n            label: \'Puerto Rico\',\n            value: \'\',\n            choices: [{ label: \'Rio Piedras\', value: \'rio piedras\' }],\n        },\n    ];\n\n    private hobbies: SelectOption[] = [\n        { label: \'Padel\', value: \'padel\' },\n        { label: \'Dans\', value: \'dans\' },\n        { label: \'Drummen\', value: \'drummen\' },\n        { label: \'Zwemmen\', value: \'zwemmen\' },\n        { label: \'Boardgames\', value: \'boardgames\' },\n        { label: \'Fietsen\', value: \'fietsen\' },\n    ];\n\n    static {\n        registerWebComponents([\n            VlInputFieldComponent,\n            VlInputFieldMaskedComponent,\n            VlTextareaComponent,\n            VlDatepickerComponent,\n            VlSelectComponent,\n            VlRadioGroupComponent,\n            VlRadioComponent,\n            VlUploadComponent,\n            VlCheckboxComponent,\n            VlErrorMessageComponent,\n        ]);\n    }\n\n    static get styles(): (CSSResult | CSSResult[])[] {\n        return [\n            vlElementsStyle,\n            css`\n                form {\n                    margin-top: 1rem;\n                    max-width: 800px;\n                }\n            `,\n        ];\n    }\n\n    render() {\n        return html`\n            <form id="form" class="vl-form" @submit=${this.onSubmit}>\n                <div class="vl-form-grid vl-form-grid--is-stacked">\n                    <div class="vl-form-col--4-12">\n                        <label class="vl-form__label" for="naam">Naam *</label>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-input-field-next\n                            id="naam"\n                            name="naam"\n                            block\n                            required\n                            pattern="^[a-zA-Z ]*$"\n                            min-length=${2}\n                            max-length=${20}\n                        ></vl-input-field-next>\n                        <vl-error-message-next for="naam" state="valueMissing"\n                            >Gelieve een naam in te vullen.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="naam" state="tooShort"\n                            >Gelieve minimum 2 karakters te gebruiken.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="naam" state="tooLong"\n                            >Gelieve maximum 20 karakters te gebruiken.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="naam" state="patternMismatch"\n                            >Gelieve geen nummers of speciale tekens in te vullen.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <label class="vl-form__label" for="rrn">Rijksregisternummer *</label>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-input-field-masked-next\n                            id="rrn"\n                            name="rrn"\n                            block\n                            required\n                            mask="rrn"\n                        ></vl-input-field-masked-next>\n                        <vl-error-message-next for="rrn" state="valueMissing"\n                            >Gelieve een rijksregisternummer in te vullen.</vl-error-message-next\n                        >\n                        <vl-error-message-next for="rrn" state="patternMismatch"\n                            >Gelieve een geldig rijksregisternummer in te vullen.</vl-error-message-next\n                        >\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <label class="vl-form__label" for="geboortedatum">Geboortedatum *</label>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-datepicker-next\n                            id="geboortedatum"\n                            name="geboortedatum"\n                            pattern="^(0?[1-9]|[12][0-9]|3[01])\\\\.(0?[1-9]|1[012])\\\\.([0-9]{4})$"\n                            block\n                            required\n                        >\n                        </vl-datepicker-next>\n                        <vl-error-message-next for="geboortedatum" state="valueMissing">\n                            Gelieve een geboortedatum in te vullen.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="geboortedatum" state="patternMismatch">\n                            Gelieve het volgende datum formaat te gebruiken: "dd.mm.YYYY", bv. 01.12.1976 of 1.2.1993\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <label class="vl-form__label" for="geboorteplaats">Geboorteplaats *</label>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-select-next\n                            id="geboorteplaats"\n                            name="geboorteplaats"\n                            required\n                            search\n                            deletable\n                            .options=${this.geboorteplaatsen}\n                            result-limit="2"\n                            placeholder="Selecteer je geboorteplaats"\n                            no-results-text="Geen geboorteplaatsen gevonden"\n                            search-placeholder="Zoek geboorteplaats"\n                        >\n                        </vl-select-next>\n                        <vl-error-message-next for="geboorteplaats" state="valueMissing"\n                            >Gelieve een geboorteplaats te selecteren.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <label class="vl-form__label" for="hobbies">Hobbies *</label>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-select-next\n                            id="hobbies"\n                            name="hobbies"\n                            required\n                            multiple\n                            deletable\n                            .options=${this.hobbies}\n                            placeholder="Selecteer je hobbies"\n                            no-results-text="Geen hobbies gevonden"\n                            no-choices-text="Geen resterende hobbies gevonden"\n                        >\n                        </vl-select-next>\n                        <vl-error-message-next for="hobbies" state="valueMissing"\n                            >Gelieve een hobby te selecteren.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <label class="vl-form__label" for="interesses">Interesses *</label>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-textarea-next\n                            id="interesses"\n                            name="interesses"\n                            block\n                            required\n                            min-length=${5}\n                            max-length=${100}\n                            rows=${10}\n                        ></vl-textarea-next>\n                        <vl-error-message-next for="interesses" state="valueMissing"\n                            >Gelieve je interesses in te vullen.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="interesses" state="tooShort"\n                            >Gelieve minimum 5 karakters te gebruiken.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="interesses" state="tooLong"\n                            >Gelieve maximum 100 karakters te gebruiken.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <label class="vl-form__label" for="leeftijd">Leeftijd *</label>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-input-field-next\n                            id="leeftijd"\n                            name="leeftijd"\n                            type="number"\n                            block\n                            required\n                            min=${0}\n                            max=${99}\n                        ></vl-input-field-next>\n                        <vl-error-message-next for="leeftijd" state="valueMissing"\n                            >Gelieve een leeftijd in te vullen.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="leeftijd" state="rangeUnderflow"\n                            >De minimum leeftijd is 0 jaar.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="leeftijd" state="rangeOverflow"\n                            >De maximum leeftijd is 99 jaar.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <label class="vl-form__label" for="contactmethode">Contactmethode *</label>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-radio-group-next id="contactmethode" name="contactmethode" required>\n                            <vl-radio-next value="e-mail">e-mail</vl-radio-next>\n                            <vl-radio-next value="telefoon">telefoon</vl-radio-next>\n                            <vl-radio-next value="post">post</vl-radio-next>\n                        </vl-radio-group-next>\n                        <vl-error-message-next for="contactmethode" state="valueMissing">\n                            Gelieve een contactmethode te selecteren.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <label class="vl-form__label" for="foto">Pasfoto *</label>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-upload-next\n                            id="foto"\n                            name="foto"\n                            accepted-files="image/*"\n                            required\n                            url="http://httpbin.org/post"\n                        ></vl-upload-next>\n                        <vl-error-message-next for="foto" state="valueMissing">\n                            Gelieve een foto te selecteren.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--4-12">\n                        <label class="vl-form__label" for="waarheidsgetrouw">Waarheidsgetrouw *</label>\n                    </div>\n                    <div class="vl-form-col--8-12">\n                        <vl-checkbox-next id="waarheidsgetrouw" name="waarheidsgetrouw" block required>\n                            Naar waarheid ingevuld\n                        </vl-checkbox-next>\n                        <vl-error-message-next for="waarheidsgetrouw" state="valueMissing">\n                            Gelieve te bevestigen dat bovenstaande gegevens naar waarheid zijn ingevuld.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-form-col--6-12 vl-push--4-12">\n                        <div class="vl-action-group">\n                            <button class="vl-button" type="submit">Verstuur</button>\n                            <button class="vl-button" type="reset">Reset</button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        `;\n    }\n\n    private onSubmit(event: Event): void {\n        event.preventDefault();\n\n        const data = new FormData(event.target as HTMLFormElement);\n        console.log(Object.fromEntries(data));\n    }\n}\n\ndeclare global {\n    interface HTMLElementTagNameMap {\n        \'vl-form-demo\': FormDemoComponent;\n    }\n}\n',language:"ts",dark:!0})]})]})}let d=function(e={}){let{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},"./libs/form/src/next/checkbox/vl-checkbox.component.ts":(e,t,l)=>{l.d(t,{E:()=>u,l:()=>m});var r=l("./node_modules/lit/index.js"),s=l("./node_modules/lit/decorators.js"),o=l("./node_modules/lit/directives/class-map.js"),i=l("./node_modules/@domg/govflanders-style/component/index.js"),n=l("./node_modules/@domg/govflanders-style/common/index.js"),a=l("./libs/elements/src/index.ts");let d=(0,r.iv)`
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
`;var c=l("./libs/form/src/next/form-control/form-control.ts");let m={...c.E,block:!1,value:"",checked:!1,isSwitch:!1};class u extends c.N{static get styles(){return[n.YN,n.Oh,a.CX,i.k3,d]}static get properties(){return{block:{type:Boolean},value:{type:String},checked:{type:Boolean,reflect:!0},isSwitch:{type:Boolean,attribute:"switch"}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value,this.initialCheckedValue=this.checked)}updated(e){if(super.updated(e),e.has("checked")||e.has("value")){let e=this.checked?this.value||"on":"",t={checked:this.checked};this.checked&&(t.value=e),this.setValue(e),this.dispatchEvent(new CustomEvent("vl-checked",{bubbles:!0,composed:!0,detail:t})),this.dispatchEventIfValid(t)}}render(){return(0,r.dy)` ${this.isSwitch?this.renderCheckboxSwitch():this.renderCheckboxDefault()} `}renderCheckboxDefault(){let e={"vl-checkbox":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return(0,r.dy)`
            <label class=${(0,o.$)(e)}>
                <input
                    id=${this.id}
                    name=${this.name||this.id}
                    type="checkbox"
                    class="vl-checkbox__toggle"
                    aria-label=${this.label||r.Ld}
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
                    id=${this.id}
                    name=${this.name}
                    type="checkbox"
                    class="vl-checkbox--switch"
                    aria-label=${this.label||r.Ld}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${this.value}
                    .checked=${this.checked}
                />
                <label class="vl-checkbox__label" @click=${this.toggle}>
                    <span class="vl-checkbox--switch__label">
                        <span aria-hidden="true"></span>
                    </span>
                    <span>
                        <slot></slot>
                    </span>
                </label>
            </div>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.checked=this.initialCheckedValue,this.value=this.initialValue}toggle(){this.checked=!this.checked}constructor(...e){super(...e),this.block=m.block,this.value=m.value,this.checked=m.checked,this.isSwitch=m.isSwitch,this.initialValue="",this.initialCheckedValue=!1}}u=function(e,t,l,r){var s,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,l,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(i=(o<3?s(i):o>3?s(t,l,i):s(t,l))||i);return o>3&&i&&Object.defineProperty(t,l,i),i}([(0,s.Mo)("vl-checkbox-next")],u)},"./libs/form/src/next/datepicker/vl-datepicker.component.ts":(e,t,l)=>{l.d(t,{Z:()=>g,_:()=>f});var r=l("./node_modules/@domg/govflanders-style/common/index.js"),s=l("./node_modules/@domg/govflanders-style/component/index.js"),o=l("./node_modules/@open-wc/form-control/src/validators.js"),i=l("./node_modules/lit/index.js");let n=(0,i.iv)`
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
`;var a=l("./node_modules/lit/decorators.js"),d=l("./node_modules/flatpickr/dist/esm/index.js"),c=l("./node_modules/flatpickr/dist/l10n/nl.js"),m=l.n(c),u=l("./node_modules/lit/directives/class-map.js"),h=l("./libs/common/utilities/src/index.ts"),v=l("./libs/elements/src/index.ts"),p=l("./node_modules/lit/directives/live.js"),b=l("./libs/form/src/next/form-control/form-control.ts");let f={...b.E,block:!1,readonly:!1,value:"",placeholder:"",autocomplete:"",type:"",format:"d.m.Y",amPm:!1,minDate:"",maxDate:"",minTime:"",maxTime:"",pattern:""};class g extends b.N{static{(0,h.YV)([v.q_,v.Gi])}static{this.formControlValidators=[...b.N.formControlValidators,o.FW]}static get styles(){return[r.YN,r.Oh,s.oQ,s.K$,s.CZ,s.gU,s.ap,s.nt,n]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},value:{type:String,reflect:!0},placeholder:{type:String},autocomplete:{type:String},type:{type:String},format:{type:String},amPm:{type:Boolean,attribute:"am-pm"},minDate:{type:String,attribute:"min-date"},maxDate:{type:String,attribute:"max-date"},minTime:{type:String,attribute:"min-time"},maxTime:{type:String,attribute:"max-time"},pattern:{type:String}}}connectedCallback(){super.connectedCallback(),m()?.nl&&(m().nl.rangeSeparator=" tot en met ",d.Z.l10ns.default.rangeSeparator=" tot en met "),this.initialValue||(this.initialValue=this.value)}firstUpdated(e){super.firstUpdated(e),this.initializeComponent()}updated(e){super.updated(e);let t=this.getDynamicOptions();this.updateOptionsForInstance(t),e.has("value")&&this.updateValue(this.value),e.has("block")&&(this.block?this.getFlatpickrWrapper()?.classList.add("flatpickr-wrapper--block"):this.getFlatpickrWrapper()?.classList.remove("flatpickr-wrapper--block"))}disconnectedCallback(){super.disconnectedCallback(),this.instance?.destroy()}render(){let e={"vl-input-field":!0,"js-vl-datepicker-toggle":!0,"vl-input-field--error":this.error||this.isInvalid,"vl-input-field--success":this.success,"vl-input-field--block":this.block,"vl-input-field--disabled":this.disabled},t={"vl-input-addon":!0,"js-vl-datepicker-toggle":!0,"vl-input-addon--error":this.error||this.isInvalid,"vl-input-addon--success":this.success,"vl-input-addon--disabled":this.disabled};return(0,i.dy)`
            <div class="vl-input-group" id="datepicker-wrapper">
                <input
                    id=${this.id}
                    name=${this.name||this.id}
                    type="text"
                    aria-label=${this.label||i.Ld}
                    class=${(0,u.$)(e)}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    ?readonly=${this.readonly}
                    .value=${(0,p.a)(this.value)}
                    placeholder=${this.placeholder||i.Ld}
                    autocomplete=${this.autocomplete||i.Ld}
                    pattern=${this.pattern||i.Ld}
                    @input=${this.onInput}
                />
                <button
                    id="toggle-calendar"
                    type="button"
                    class=${(0,u.$)(t)}
                    ?disabled=${this.disabled}
                    aria-label="toggle calendar"
                    @click=${this.toggleCalendar}
                >
                    <span class="vl-icon vl-icon--small vl-vi vl-vi-calendar" aria-hidden="true"></span>
                </button>
            </div>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.instance?.clear(),this.value=this.initialValue,this.initialValue&&this.instance?.setDate(this.initialValue,!0,this.format)}parseDate(e){return"today"===e?(e=>d.Z.formatDate(e,this.format))(new Date):e}getDynamicOptions(){let e,t;this.minTime?(e=Number(this.minTime.split(":")[0]),t=Number(this.minTime.split(":")[1])):this.maxTime&&(e=Number(this.maxTime.split(":")[0]),t=Number(this.maxTime.split(":")[1]));let l=this.parseDate(this.initialValue);return{allowInput:!(this.disabled||this.readonly),dateFormat:this.format,defaultHour:e,defaultMinute:t,maxDate:this.maxDate,minDate:this.minDate,defaultDate:l,enableTime:"time"===this.type||"date-time"===this.type,noCalendar:"time"===this.type,time_24hr:!this.amPm,minTime:this.minTime,maxTime:this.maxTime,mode:"range"!==this.type?"single":"range"}}getOptions(){let e=this.shadowRoot?.querySelector("button"),t=this.shadowRoot?.querySelector("#datepicker-wrapper"),l={autoFillDefaultTime:!0,locale:m().nl,clickOpens:!1,onChange:this.handleDateChange,positionElement:e,static:!0,appendTo:t,...this.getDynamicOptions()};return Object.keys(l).forEach(e=>{void 0===l[e]&&delete l[e]}),l}getDatePicker(){return this.shadowRoot?.querySelector("#datepicker-wrapper")}getFlatpickrWrapper(){return this.shadowRoot?.querySelector(".flatpickr-wrapper")}updateOptionsForInstance(e){Object.keys(e).map(e=>e).forEach(t=>{this.instance?.set(t,e[t])})}initializeComponent(){this.getDatePicker()&&!this.instance&&(this.instance=(0,d.Z)(this.getDatePicker(),this.getOptions()),this.getDatePicker()?.classList.add("static"))}constructor(...e){super(...e),this.block=f.block,this.readonly=f.readonly,this.value=f.value,this.placeholder=f.placeholder,this.autocomplete=f.autocomplete,this.type=f.type,this.format=f.format,this.amPm=f.amPm,this.minDate=f.minDate,this.maxDate=f.maxDate,this.minTime=f.minTime,this.maxTime=f.maxTime,this.pattern=f.pattern,this.instance=null,this.initialValue="",this.toggleCalendar=()=>{this.instance?.toggle()},this.onInput=e=>{let t;let l=e.target.value;if(this.pattern&&!l.match(this.pattern)){this.value=l;return}try{t=d.Z.parseDate(l,this.format)}finally{this.value=l,t instanceof Date&&!isNaN(t)&&this.instance?.setDate(l,!1,this.format)}},this.handleDateChange=e=>{let t=e=>d.Z.formatDate(new Date(e),this.format);2!==e.length?this.value=t(e[0]):this.value=`${t(e[0])}${m()?.nl?.rangeSeparator}${t(e[1])}`},this.updateValue=e=>{let t={value:this.value};this.setValue(e),this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:t})),this.dispatchEventIfValid(t)}}}g=function(e,t,l,r){var s,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,l,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(i=(o<3?s(i):o>3?s(t,l,i):s(t,l))||i);return o>3&&i&&Object.defineProperty(t,l,i),i}([(0,a.Mo)("vl-datepicker-next")],g)},"./libs/form/src/next/error-message/index.ts":(e,t,l)=>{l.d(t,{m:()=>r.ml});var r=l("./libs/form/src/next/error-message/vl-error-message.component.ts")},"./libs/form/src/next/input-field-masked/masks.ts":(e,t,l)=>{l.d(t,{T:()=>r});let r={iban:{blocks:[4,4,4,4],prefix:"BE",numericOnly:!0,numeralPositiveOnly:!0,stripLeadingZeroes:!1,validationRegex:/^[A-Z]{2}[0-9]{14}$/},rrn:{blocks:[2,2,2,3,2],delimiters:[".",".","-","."],numericOnly:!0,numeralPositiveOnly:!0,stripLeadingZeroes:!1,validationRegex:/^[0-9]{11}$/},uuid:{blocks:[8,4,4,4,12],delimiter:"-",stripLeadingZeroes:!1,validationRegex:/^[0-9a-fA-F]{32}$/,customTransformFn:e=>e.replace(/[^0-9a-fA-F-]/g,"")},date:{date:!0,datePattern:["d","m","Y"],delimiter:".",validationRegex:/^[0-9]{8}$/},numerical:{numeral:!0,numeralDecimalMark:",",delimiter:".",validationRegex:/^[0-9]+(.[0-9]+)?$/},price:{numeral:!0,prefix:"€",rawValueTrimPrefix:!0,numeralDecimalMark:",",delimiter:".",validationRegex:/^[0-9]+(.[0-9]+)?$/},phone:{blocks:[3,2,2,2,2],prefix:"+32",numericOnly:!0,numeralPositiveOnly:!0,delimiter:" ",validationRegex:/^\+[0-9]{10}$/},mobile:{blocks:[3,3,2,2,2],prefix:"+32",numericOnly:!0,numeralPositiveOnly:!0,delimiter:" ",validationRegex:/^\+[0-9]{11}$/}}},"./libs/form/src/next/input-field-masked/vl-input-field-masked.component.ts":(e,t,l)=>{l.d(t,{R:()=>a,X:()=>d});var r=l("./node_modules/lit/decorators.js"),s=l("./node_modules/cleave.js/dist/cleave-esm.js"),o=l("./libs/form/src/next/input-field-masked/masks.ts"),i=l("./libs/form/src/next/input-field/vl-input-field.component.ts");let n={key:"patternMismatch",message:()=>"Value does not meet the given mask pattern.",isValid(e,t){let{disableValidation:l}=e,r=e.validationRegex||e.maskOptions?.validationRegex,s=e.cleaveInstance;if(l||!t||!r||!s)return!0;let o=s.getRawValue();return!!new RegExp(r).exec(o)}},a={...i.E,mask:"",maskPrefix:"",rawValue:!1,disableValidation:!1,validationRegex:null};class d extends i.z{static{this.formControlValidators=[...i.z.formControlValidators,n]}static get properties(){return{mask:{type:String},maskPrefix:{type:String,attribute:"mask-prefix"},rawValue:{type:Boolean,attribute:"raw-value"},disableValidation:{type:Boolean,attribute:"disable-validation"},validationRegex:{type:Object}}}connectedCallback(){super.connectedCallback(),this.maskOptions={...o.T[this.mask]},this.maskOptions&&(this.maskPrefix&&(this.maskOptions.prefix=this.maskPrefix),this.value.startsWith(this.maskOptions.prefix||"")||(this.value=this.maskOptions.prefix+this.value))}firstUpdated(e){super.firstUpdated(e),this.maskOptions&&(this.cleaveInstance=new s.Z(this.validationTarget,this.maskOptions))}resetFormControl(){super.resetFormControl(),this.initialValue.startsWith(this.maskOptions?.prefix||"")?this.value=this.initialValue:this.value=this.maskOptions?.prefix+this.initialValue}getRawValue(){return this.cleaveInstance?.getRawValue()}onInput(){setTimeout(()=>{let e=this.validationTarget.value,t=this.maskOptions?.customTransformFn,l=t?t(e):e;if(this.value===l){this.requestUpdate();return}this.value=l},0)}onUpdated(e){if(e.has("value")||e.has("rawValue")){let e=this.rawValue?this.getRawValue()||"":this.value;(this.value===this.maskOptions?.prefix||this.getRawValue()===this.maskOptions?.prefix)&&(e="");let t={value:e};this.setValue(e),this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:t})),this.dispatchEventIfValid(t)}}constructor(...e){super(...e),this.mask=a.mask,this.maskPrefix=a.maskPrefix,this.rawValue=a.rawValue,this.disableValidation=a.disableValidation,this.validationRegex=a.validationRegex,this.maskOptions=null,this.cleaveInstance=null}}d=function(e,t,l,r){var s,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,l,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(i=(o<3?s(i):o>3?s(t,l,i):s(t,l))||i);return o>3&&i&&Object.defineProperty(t,l,i),i}([(0,r.Mo)("vl-input-field-masked-next")],d)},"./libs/form/src/next/input-field/index.ts":(e,t,l)=>{l.d(t,{z:()=>r.z});var r=l("./libs/form/src/next/input-field/vl-input-field.component.ts")},"./libs/form/src/next/input-field/vl-input-field.component.ts":(e,t,l)=>{l.d(t,{z:()=>v,E:()=>h});var r=l("./node_modules/lit/index.js"),s=l("./node_modules/lit/decorators.js"),o=l("./node_modules/@domg/govflanders-style/component/index.js"),i=l("./node_modules/lit/directives/live.js"),n=l("./node_modules/lit/directives/class-map.js"),a=l("./node_modules/@domg/govflanders-style/common/index.js");let d={attribute:"min",key:"rangeUnderflow",message:e=>`Value must be greater than or equal to ${e.min}.`,isValid:(e,t)=>!e.min&&0!==e.min||!(t&&e.min>parseInt(t))},c={attribute:"max",key:"rangeOverflow",message:e=>`Value must be lesser than or equal to ${e.max}.`,isValid:(e,t)=>!e.max&&0!==e.max||!(t&&e.max<parseInt(t))};var m=l("./node_modules/@open-wc/form-control/src/validators.js"),u=l("./libs/form/src/next/form-control/form-control.ts");let h={...u.E,block:!1,readonly:!1,type:"text",value:"",placeholder:"",autocomplete:"",minLength:null,maxLength:null,min:null,max:null,pattern:""};class v extends u.N{static{this.formControlValidators=[...u.N.formControlValidators,d,c,m.FW]}static get styles(){return[a.YN,a.Oh,o.K$]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},type:{type:String},value:{type:String,reflect:!0},placeholder:{type:String},autocomplete:{type:String},minLength:{type:Number,attribute:"min-length"},maxLength:{type:Number,attribute:"max-length"},min:{type:Number},max:{type:Number},pattern:{type:String}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value)}updated(e){super.updated(e),this.onUpdated(e)}render(){let e={"vl-input-field":!0,"vl-input-field--disabled":this.disabled,"vl-input-field--error":this.isInvalid||this.error,"vl-input-field--success":this.success,"vl-input-field--block":this.block};return(0,r.dy)`
            <input
                id=${this.id}
                name=${this.name||this.id}
                class=${(0,n.$)(e)}
                aria-label=${this.label||r.Ld}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?readonly=${this.readonly}
                type=${this.type}
                .value=${(0,i.a)(this.value)}
                placeholder=${this.placeholder||r.Ld}
                autocomplete=${this.autocomplete||r.Ld}
                minlength=${this.minLength??r.Ld}
                maxlength=${this.maxLength??r.Ld}
                min=${this.min??r.Ld}
                max=${this.max??r.Ld}
                pattern=${this.pattern||r.Ld}
                @input=${this.onInput}
            />
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.value=this.initialValue}onInput(e){this.value=e?.target?.value}onUpdated(e){if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:e})),this.dispatchEventIfValid(e)}}constructor(...e){super(...e),this.block=h.block,this.readonly=h.readonly,this.type=h.type,this.value=h.value,this.placeholder=h.placeholder,this.autocomplete=h.autocomplete,this.minLength=h.minLength,this.maxLength=h.maxLength,this.min=h.min,this.max=h.max,this.pattern=h.pattern,this.initialValue=""}}v=function(e,t,l,r){var s,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,l,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(i=(o<3?s(i):o>3?s(t,l,i):s(t,l))||i);return o>3&&i&&Object.defineProperty(t,l,i),i}([(0,s.Mo)("vl-input-field-next")],v)},"./libs/form/src/next/radio-group/vl-radio-group.component.ts":(e,t,l)=>{l.d(t,{S:()=>c,X:()=>m});var r=l("./node_modules/lit/index.js"),s=l("./node_modules/lit/decorators.js"),o=l("./node_modules/@domg/govflanders-style/component/index.js"),i=l("./node_modules/@domg/govflanders-style/common/index.js"),n=l("./libs/elements/src/index.ts"),a=l("./libs/form/src/next/radio-group/vl-radio.component.uig-css.ts"),d=l("./libs/form/src/next/form-control/form-control.ts");let c={...d.E,readonly:!1,value:""};class m extends d.N{static get styles(){return[i.YN,i.Oh,n.CX,o.SC,a.Z]}static get properties(){return{value:{type:String,reflect:!0},required:{type:Boolean},block:{type:Boolean},readonly:{type:Boolean}}}connectedCallback(){super.connectedCallback(),this.addEventListener("vl-checked",this.updateGroupAfterCheck),this.addEventListener("keydown",this.handleKeyDown)}firstUpdated(e){super.firstUpdated(e),this.initialValue||(this.initialValue=this.value)}updated(e){super.updated(e),e.has("value")&&(this.setValue(this.value),this.checkRadioForValue(this.value)),e.has("name")&&this.updateRadiosForAttribute("name"),e.has("block")&&this.updateRadiosForAttribute("block"),e.has("readonly")&&(this.updateRadiosForAttribute("readonly"),this.preventDefaultEventOnAllInputsOfAllRadio(this.readonly)),e.has("disabled")&&this.updateRadiosForAttribute("disabled"),e.has("error")&&this.updateRadiosForAttribute("error"),e.has("isInvalid")&&this.getRadios()?.forEach(e=>this.isInvalid?e.setAttribute("error",""):e.removeAttribute("error")),e.has("success")&&this.updateRadiosForAttribute("success")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("vl-checked",this.updateGroupAfterCheck)}render(){return(0,r.dy)` <slot></slot> `}resetFormControl(){super.resetFormControl(),this.resetAllRadios(),this.resetToInitialValue()}get validationTarget(){let e=this.getRadios()[0];return e?e.validationTarget:null}resetToInitialValue(){this.setValue(this.initialValue),this.checkRadioForValue(this.initialValue),this.value=this.initialValue}checkRadioForValue(e){this.getRadios()?.forEach(t=>{e&&t.getAttribute("value")===e?t.setAttribute("checked",""):t.removeAttribute("checked")})}resetAllRadios(){this.getRadios()?.forEach(e=>{e.removeAttribute("checked")})}preventDefaultEventOnAllInputsOfAllRadio(e){this.getRadios()?.forEach(t=>{e?t.addEventListener("click",this.preventDefaultAndFocus):t.removeEventListener("click",this.preventDefaultAndFocus)})}updateRadiosForAttribute(e){this.getRadios()?.forEach(t=>this[e]?t.setAttribute(e,""):t.removeAttribute(e))}getRadios(){return Array.from(this.querySelectorAll("vl-radio-next"))}checkSelectedRadio(e){this.getRadios()?.forEach(t=>{let l=t.getAttribute("value");t!==e?t.removeAttribute("checked"):(t.hasAttribute("checked")||t.setAttribute("checked",""),this.value=l||"",this.setValue(l))})}navigateRadioButtons(e){let t;let l=this.getRadios(),r=l.findIndex(e=>e.hasAttribute("checked"));"ArrowLeft"===e||"ArrowUp"===e?(t=r-1)<0&&(t=l.length-1):("ArrowRight"===e||"ArrowDown"===e)&&(t=r+1)>=l.length&&(t=0),this.checkSelectedRadio(l[t]),l[t].focus()}updateGroupAfterCheck(e){let t=e.target;this.checkSelectedRadio(t)}constructor(...e){super(...e),this.readonly=c.readonly,this.value=c.value,this.initialValue="",this.preventDefaultAndFocus=e=>{let t=e.target;t?.validationTarget?.focus(),e.preventDefault()},this.handleKeyDown=e=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)&&(e.preventDefault(),this.navigateRadioButtons(e.code)),"Space"===e.code){let e=this.getRadios()?.find(e=>e===document.activeElement);e&&!e.hasAttribute("checked")&&this.checkSelectedRadio(e)}}}}m=function(e,t,l,r){var s,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,l,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(i=(o<3?s(i):o>3?s(t,l,i):s(t,l))||i);return o>3&&i&&Object.defineProperty(t,l,i),i}([(0,s.Mo)("vl-radio-group-next")],m)},"./libs/form/src/next/radio-group/vl-radio.component.ts":(e,t,l)=>{l.d(t,{P:()=>h,Y:()=>u});var r=l("./node_modules/lit/index.js"),s=l("./node_modules/lit/decorators.js"),o=l("./node_modules/lit/directives/live.js"),i=l("./node_modules/lit/directives/class-map.js"),n=l("./node_modules/@domg/govflanders-style/component/index.js"),a=l("./node_modules/@domg/govflanders-style/common/index.js"),d=l("./libs/elements/src/index.ts"),c=l("./libs/form/src/next/radio-group/vl-radio.component.uig-css.ts"),m=l("./libs/common/utilities/src/index.ts");let u={id:"radio",name:"",value:"",label:"",block:!1,readonly:!1,disabled:!1,error:!1,success:!1,checked:!1};class h extends m.fS{static{this.shadowRootOptions={...r.oi.shadowRootOptions,delegatesFocus:!0}}static get styles(){return[a.YN,a.Oh,d.CX,n.SC,c.Z]}static get properties(){return{id:{type:String},name:{type:String},value:{type:String},label:{type:String},disabled:{type:Boolean},readonly:{type:Boolean},error:{type:Boolean},success:{type:Boolean},block:{type:Boolean},checked:{type:Boolean,reflect:!0}}}updated(e){if(super.updated(e),(e.has("checked")||e.has("value"))&&this.checked){let e={checked:!0,value:this.value};this.dispatchEvent(new CustomEvent("vl-checked",{bubbles:!0,composed:!0,detail:e})),this.dispatchEvent(new CustomEvent("vl-valid",{composed:!0,bubbles:!0,detail:e}))}}render(){let e={"vl-radio":!0,"vl-radio--block":this.block,"vl-radio--disabled":this.disabled,"vl-radio--error":this.error,"vl-radio--success":this.success};return(0,r.dy)`
            <label id="radio-label" class=${(0,i.$)(e)} for=${this.id}>
                <input
                    id=${this.id}
                    name=${this.name||this.id}
                    class="vl-radio__toggle"
                    aria-label=${this.label||r.Ld}
                    type="radio"
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
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}onChange(){this.checked=!this.checked}constructor(...e){super(...e),this.id=u.id,this.name=u.name,this.value=u.value,this.label=u.label,this.block=u.block,this.readonly=u.readonly,this.disabled=u.disabled,this.error=u.error,this.success=u.success,this.checked=u.checked}}h=function(e,t,l,r){var s,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,l,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(i=(o<3?s(i):o>3?s(t,l,i):s(t,l))||i);return o>3&&i&&Object.defineProperty(t,l,i),i}([(0,s.Mo)("vl-radio-next")],h)},"./libs/form/src/next/radio-group/vl-radio.component.uig-css.ts":(e,t,l)=>{l.d(t,{Z:()=>s});var r=l("./node_modules/lit/index.js");let s=(0,r.iv)`
    .vl-radio--disabled .vl-radio__toggle:checked + .vl-radio__label::before {
        background-color: #fff;
    }
    .vl-radio__toggle:read-only + .vl-radio__label::before {
        pointer-events: none !important;
    }
`},"./libs/form/src/next/textarea/vl-textarea.component.ts":(e,t,l)=>{l.d(t,{n:()=>m,q:()=>c});var r=l("./node_modules/lit/index.js"),s=l("./node_modules/lit/decorators.js"),o=l("./node_modules/@domg/govflanders-style/component/index.js"),i=l("./node_modules/lit/directives/live.js"),n=l("./node_modules/lit/directives/class-map.js"),a=l("./node_modules/@domg/govflanders-style/common/index.js"),d=l("./libs/form/src/next/form-control/form-control.ts");let c={...d.E,block:!1,readonly:!1,value:"",placeholder:"",autocomplete:"",minLength:null,maxLength:null,rows:null,cols:null};class m extends d.N{static get styles(){return[a.YN,a.Oh,o.Qu]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},value:{type:String,reflect:!0},placeholder:{type:String},autocomplete:{type:String},minLength:{type:Number,attribute:"min-length"},maxLength:{type:Number,attribute:"max-length"},rows:{type:Number},cols:{type:Number}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value)}updated(e){if(super.updated(e),e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:e})),this.dispatchEventIfValid(e)}}render(){let e={"vl-textarea":!0,"vl-textarea--disabled":this.disabled,"vl-textarea--error":this.isInvalid||this.error,"vl-textarea--success":this.success,"vl-textarea--block":this.block};return(0,r.dy)`
            <textarea
                id=${this.id}
                name=${this.name||this.id}
                class=${(0,n.$)(e)}
                aria-label=${this.label||r.Ld}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?readonly=${this.readonly}
                .value=${(0,i.a)(this.value)}
                placeholder=${this.placeholder||r.Ld}
                autocomplete=${this.autocomplete||r.Ld}
                minlength=${this.minLength??r.Ld}
                maxlength=${this.maxLength??r.Ld}
                rows=${this.rows??r.Ld}
                cols=${this.cols??r.Ld}
                @input=${this.onInput}
            />
        `}get validationTarget(){return this.shadowRoot?.querySelector("textarea")}resetFormControl(){super.resetFormControl(),this.value=this.initialValue}onInput(e){this.value=e?.target?.value}constructor(...e){super(...e),this.block=c.block,this.readonly=c.readonly,this.value=c.value,this.placeholder=c.placeholder,this.autocomplete=c.autocomplete,this.minLength=c.minLength,this.maxLength=c.maxLength,this.rows=c.rows,this.cols=c.cols,this.initialValue=""}}m=function(e,t,l,r){var s,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,l):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,l,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(i=(o<3?s(i):o>3?s(t,l,i):s(t,l))||i);return o>3&&i&&Object.defineProperty(t,l,i),i}([(0,s.Mo)("vl-textarea-next")],m)}}]);