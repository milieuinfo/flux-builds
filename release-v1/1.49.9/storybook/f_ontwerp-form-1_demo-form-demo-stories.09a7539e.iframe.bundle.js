"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[729],{"./docs/f_ontwerp/form/1_demo/form-demo.stories.ts":(e,n,l)=>{l.r(n),l.d(n,{Demo:()=>V,__namedExportsOrder:()=>D,default:()=>y});var t=l("../../node_modules/lit-html/lit-html.js"),o=l("../../libs/common/utilities/src/index.ts"),r=l("../../libs/common/utilities/src/css/index.ts"),s=l("../../libs/components/src/next/button/index.ts"),a=l("../../libs/components/src/next/text/index.ts"),i=l("../../libs/elements/src/index.ts"),m=l("../../libs/form/src/next/checkbox/index.ts"),v=l("../../libs/form/src/next/datepicker/index.ts"),d=l("../../libs/form/src/next/error-message/index.ts"),c=l("../../libs/form/src/next/form-label/index.ts"),x=l("../../libs/form/src/next/input-field/index.ts"),u=l("../../libs/form/src/next/input-field-masked/index.ts"),b=l("../../libs/form/src/next/radio-group/index.ts"),f=l("../../libs/form/src/next/select/index.ts"),g=l("../../libs/form/src/next/select-rich/index.ts"),p=l("../../libs/form/src/next/textarea/vl-textarea.component.ts"),h=l("../../libs/form/src/next/upload/index.ts"),k=l("../../libs/form/src/utils/index.ts"),j=l("../../node_modules/lit/index.js");class w extends j.WF{static{(0,o.gy)([c.E,x.Y,u.j,p.m,v.M,g.Al,f.Y,b.I,b.Z,h.f,m.v,d.X,s.Y,a.T])}static get styles(){return[i.hF,r.B2,r.Ei,(0,j.AH)`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }

                .form-buttons {
                    vl-button-next:not(:last-child) {
                        margin-right: 1.4rem;
                    }
                }
            `]}render(){return(0,j.qy)`
            <form id="form" class="vl-form" @submit=${this.onSubmit}>
                <div class="vl-grid-next vl-stacked-next-small">
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next for="naam" label="Naam *"></vl-form-label-next>
                        <vl-text-next annotation small>(enkel achternaam)</vl-text-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
                        <vl-input-field-next
                            id="naam"
                            name="naam"
                            autocomplete="given-name"
                            block
                            required
                            pattern="^[a-zA-Z ]*$"
                            min-length=${2}
                            max-length=${20}
                            placeholder="bv. Jo"
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
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next for="rrn" label="Rijksregisternummer *" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
                        <vl-input-field-masked-next
                            id="rrn"
                            name="rrn"
                            block
                            required
                            mask="rrn"
                            placeholder="bv. 86-12-31-123-45"
                        ></vl-input-field-masked-next>
                        <vl-error-message-next for="rrn" state="valueMissing"
                            >Gelieve een rijksregisternummer in te vullen.
                        </vl-error-message-next>
                        <vl-error-message-next for="rrn" state="patternMismatch"
                            >Gelieve een geldig rijksregisternummer in te vullen.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next for="geboortedatum" label="Geboortedatum *" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
                        <vl-datepicker-next
                            id="geboortedatum"
                            name="geboortedatum"
                            autocomplete="bday"
                            placeholder="bv. 31.12.1992"
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
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next for="geboorteplaats" label="Geboorteplaats *" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
                        <vl-select-rich-next
                            id="geboorteplaats"
                            name="geboorteplaats"
                            required
                            search
                            .options=${this.geboorteplaatsen}
                            result-limit="2"
                            placeholder="bv. Smeerebbe-Vloerzegem"
                            no-results-text="Geen geboorteplaatsen gevonden"
                            search-placeholder="Zoek geboorteplaats"
                        >
                        </vl-select-rich-next>
                        <vl-error-message-next for="geboorteplaats" state="valueMissing"
                            >Gelieve een geboorteplaats te selecteren.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next for="hobbies" label="Hobbies *" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
                        <vl-select-rich-next
                            id="hobbies"
                            name="hobbies"
                            required
                            multiple
                            .options=${this.hobbies}
                            placeholder="bv. Boardgames"
                            no-results-text="Geen hobbies gevonden"
                            no-choices-text="Geen resterende hobbies gevonden"
                        >
                        </vl-select-rich-next>
                        <vl-error-message-next for="hobbies" state="valueMissing"
                            >Gelieve een hobby te selecteren.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next for="kinderen" label="Aantal kinderen *" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
                        <vl-select-next
                            id="kinderen"
                            name="kinderen"
                            block
                            placeholder="bv. 1"
                            required
                            .options=${this.kinderenOpties}
                        ></vl-select-next>
                        <vl-error-message-next for="kinderen" state="valueMissing"
                            >Gelieve een aantal kinderen te kiezen.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next for="interesses" label="Interesses *" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
                        <vl-textarea-next
                            id="interesses"
                            name="interesses"
                            block
                            required
                            min-length=${5}
                            max-length=${100}
                            rows=${10}
                            placeholder="bv. Ik ben geïnteresseerd in..."
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
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next for="leeftijd" label="Leeftijd *" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
                        <vl-input-field-next
                            id="leeftijd"
                            name="leeftijd"
                            type="number"
                            block
                            required
                            placeholder="bv. 35"
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
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next for="contactmethode" label="Contactmethode *" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
                        <vl-radio-group-next id="contactmethode" name="contactmethode" required>
                            <vl-radio-next value="e-mail">e-mail</vl-radio-next>
                            <vl-radio-next value="telefoon">telefoon</vl-radio-next>
                            <vl-radio-next value="post">post</vl-radio-next>
                        </vl-radio-group-next>
                        <vl-error-message-next for="contactmethode" state="valueMissing">
                            Gelieve een contactmethode te selecteren.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next for="foto" label="Pasfoto *" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
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
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next
                            for="waarheidsgetrouw"
                            label="Waarheidsgetrouw *"
                            block
                        ></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
                        <vl-checkbox-next id="waarheidsgetrouw" name="waarheidsgetrouw" block required>
                            Naar waarheid ingevuld
                        </vl-checkbox-next>
                        <vl-error-message-next for="waarheidsgetrouw" state="valueMissing">
                            Gelieve te bevestigen dat bovenstaande gegevens naar waarheid zijn ingevuld.
                        </vl-error-message-next>
                    </div>
                    <div
                        class="vl-column-next vl-column-next--8 vl-column-next--s-12 vl-column-next--start-5 vl-column-next--s-start-1"
                    >
                        <div class="form-buttons">
                            <vl-button-next type="submit">Verstuur</vl-button-next>
                            <vl-button-next type="reset" secondary>Reset</vl-button-next>
                        </div>
                    </div>
                </div>
            </form>
        `}onSubmit(e){e.preventDefault(),console.log((0,k.S)(e.target))}constructor(...e){super(...e),this.geboorteplaatsen=[{label:"België",value:"",choices:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"}]},{label:"Puerto Rico",value:"",choices:[{label:"Rio Piedras",value:"rio piedras"}]}],this.hobbies=[{label:"Padel",value:"padel"},{label:"Dans",value:"dans"},{label:"Drummen",value:"drummen"},{label:"Zwemmen",value:"zwemmen"},{label:"Boardgames",value:"boardgames"},{label:"Fietsen",value:"fietsen"}],this.kinderenOpties=[{label:"0",value:"0"},{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"5 of meer",value:"5 of meer"}]}}w=function(e,n,l,t){var o,r=arguments.length,s=r<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,l):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,l,t);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(n,l,s):o(n,l))||s);return r>3&&s&&Object.defineProperty(n,l,s),s}([(0,o.M1)("vl-form-demo")],w),l("../../node_modules/react/index.js");var G=l("../../node_modules/react/jsx-runtime.js"),C=l("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),M=l("../../node_modules/@storybook/blocks/dist/index.mjs");function S(e){let n=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code"},(0,C.RP)(),e.components),{VluxAlert:l}=n;return l||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxAlert",!0),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(n.h1,{id:"form---demo",children:"Form - Demo"}),"\n",(0,G.jsxs)(n.blockquote,{children:["\n",(0,G.jsxs)(n.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",(0,G.jsx)(n.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),"\n"]}),"\n",(0,G.jsxs)(n.blockquote,{children:["\n",(0,G.jsxs)(n.p,{children:["Uitgebreid voorbeeld hoe je form data eenvoudiger kan parsen en instellen vind je op de ",(0,G.jsx)(n.a,{href:"/docs/ontwerp-form-form-data--documentatie",children:"Form Data pagina"}),"."]}),"\n"]}),"\n",(0,G.jsxs)(n.p,{children:["Dit is een voorbeeld van hoe de form componenten in een form gebruikt kunnen worden.",(0,G.jsx)("br",{}),"\nDe submitted waarden worden in deze demo in de console gelogd."]}),"\n",(0,G.jsx)(n.h2,{id:"componenten",children:"Componenten"}),"\n",(0,G.jsxs)(n.ul,{children:["\n",(0,G.jsx)(n.li,{children:(0,G.jsx)(n.a,{href:"/docs/form-next-input-field--documentatie",children:"vl-input-field-next"})}),"\n",(0,G.jsx)(n.li,{children:(0,G.jsx)(n.a,{href:"/docs/form-next-input-field-masked--documentatie",children:"vl-input-field-masked-next"})}),"\n",(0,G.jsx)(n.li,{children:(0,G.jsx)(n.a,{href:"/docs/form-next-textarea--documentatie",children:"vl-textarea-next"})}),"\n",(0,G.jsx)(n.li,{children:(0,G.jsx)(n.a,{href:"/docs/form-next-datepicker--documentatie",children:"vl-datepicker-next"})}),"\n",(0,G.jsx)(n.li,{children:(0,G.jsx)(n.a,{href:"/docs/form-next-select-rich--documentatie",children:"vl-select-rich-next"})}),"\n",(0,G.jsx)(n.li,{children:(0,G.jsx)(n.a,{href:"/docs/form-next-select--documentatie",children:"vl-select-next"})}),"\n",(0,G.jsx)(n.li,{children:(0,G.jsx)(n.a,{href:"/docs/form-next-radio-group--documentatie",children:"vl-radio-group-next"})}),"\n",(0,G.jsx)(n.li,{children:(0,G.jsx)(n.a,{href:"/docs/form-next-upload--documentatie",children:"vl-upload-next"})}),"\n",(0,G.jsx)(n.li,{children:(0,G.jsx)(n.a,{href:"/docs/form-next-checkbox--documentatie",children:"vl-checkbox-next"})}),"\n",(0,G.jsx)(n.li,{children:(0,G.jsx)(n.a,{href:"/docs/form-next-error-message--documentatie",children:"vl-error-message-next"})}),"\n",(0,G.jsx)(n.li,{children:(0,G.jsx)(n.a,{href:"/docs/form-next-form-label--documentatie",children:"vl-form-label-next"})}),"\n"]}),"\n",(0,G.jsx)(n.h2,{id:"native-elementen",children:"Native elementen"}),"\n",(0,G.jsx)(n.p,{children:"Gebruik voor de volgende elementen native HtmlElements met css classes:"}),"\n",(0,G.jsxs)(n.ul,{children:["\n",(0,G.jsxs)(n.li,{children:["Form: native HTMLFormElement met class ",(0,G.jsx)(n.code,{children:"vl-form"})," - ",(0,G.jsx)(n.code,{children:'<form class="vl-form">'})]}),"\n",(0,G.jsxs)(n.li,{children:["Action Group: native HtmlDivElement met class ",(0,G.jsx)(n.code,{children:"vl-action-group"})," - ",(0,G.jsx)(n.code,{children:'<div class="vl-action-group">'})]}),"\n",(0,G.jsxs)(n.li,{children:["Button: ",(0,G.jsx)(n.code,{children:"vl-button-next"})," component - ",(0,G.jsx)(n.a,{href:"/docs/components-next-button--documentatie",children:"documentatie"})]}),"\n"]}),"\n",(0,G.jsx)(n.h2,{id:"grid",children:"Grid"}),"\n",(0,G.jsxs)(n.p,{children:["Maak voor het opbouwen van de grid structuur gebruik van de ",(0,G.jsx)(n.a,{href:"/docs/styles-next-layout-afnemers-grid--documentatie",children:"vl-grid-next classes"}),".",(0,G.jsx)("br",{}),"\nPlaats deze op native HtmlDivElements."]}),"\n",(0,G.jsx)(n.h2,{id:"form-data",children:"Form data"}),"\n",(0,G.jsxs)(n.p,{children:["Gebruik de ",(0,G.jsx)(n.a,{href:"/docs/ontwerp-form-form-data--documentatie",children:"parseFormData"})," helper functie om de form data te verzamelen.",(0,G.jsx)("br",{}),"\nIndien je meer controle nodig hebt kan je zelf de ",(0,G.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",target:"_blank",rel:"nofollow noopener noreferrer",children:"FormData"})," API gebruiken."]}),"\n",(0,G.jsx)(l,{type:"warning",children:`
    Indien je een form control wrapped in een custom component, zorg er voor dat dit custom component geen Shadow DOM
    heeft.<br/>
    Als dit custom component een Shadow DOM heeft, zal het native HtmlFormElement de form control niet meer vinden.
`}),"\n",(0,G.jsx)(M.Hl,{of:V,sourceState:"none"}),"\n",(0,G.jsxs)("details",{open:!0,children:[(0,G.jsx)("summary",{children:"Code"}),(0,G.jsx)(M.kL,{code:'import { registerWebComponents, webComponent } from \'@domg-wc/common-utilities\';\nimport { vlGridStyles, vlStackedStyles } from \'@domg-wc/common-utilities/css\';\nimport { VlButtonComponent } from \'@domg-wc/components/next/button\';\nimport { VlTextComponent } from \'@domg-wc/components/next/text\';\nimport { vlElementsStyle } from \'@domg-wc/elements\';\nimport { VlCheckboxComponent } from \'@domg-wc/form/next/checkbox\';\nimport { VlDatepickerComponent } from \'@domg-wc/form/next/datepicker\';\nimport { VlErrorMessageComponent } from \'@domg-wc/form/next/error-message\';\nimport { VlFormLabelComponent } from \'@domg-wc/form/next/form-label\';\nimport { VlInputFieldComponent } from \'@domg-wc/form/next/input-field\';\nimport { VlInputFieldMaskedComponent } from \'@domg-wc/form/next/input-field-masked\';\nimport { VlRadioComponent, VlRadioGroupComponent } from \'@domg-wc/form/next/radio-group\';\nimport { SelectOption, VlSelectComponent } from \'@domg-wc/form/next/select\';\nimport { SelectRichOption, VlSelectRichComponent } from \'@domg-wc/form/next/select-rich\';\nimport { VlTextareaComponent } from \'@domg-wc/form/next/textarea\';\nimport { VlUploadComponent } from \'@domg-wc/form/next/upload\';\nimport { parseFormData } from \'@domg-wc/form/utils\';\nimport { css, CSSResult, html, LitElement } from \'lit\';\n\n@webComponent(\'vl-form-demo\')\nexport class VlFormDemoComponent extends LitElement {\n    private geboorteplaatsen: SelectRichOption[] = [\n        {\n            label: \'België\',\n            value: \'\',\n            choices: [\n                { label: \'Hasselt\', value: \'hasselt\' },\n                { label: \'Turnhout\', value: \'turnhout\' },\n                { label: \'Knokke-Heist\', value: \'knokke-heist\' },\n                { label: \'Waregem\', value: \'waregem\' },\n                { label: \'Lier\', value: \'lier\' },\n            ],\n        },\n        {\n            label: \'Puerto Rico\',\n            value: \'\',\n            choices: [{ label: \'Rio Piedras\', value: \'rio piedras\' }],\n        },\n    ];\n\n    private hobbies: SelectRichOption[] = [\n        { label: \'Padel\', value: \'padel\' },\n        { label: \'Dans\', value: \'dans\' },\n        { label: \'Drummen\', value: \'drummen\' },\n        { label: \'Zwemmen\', value: \'zwemmen\' },\n        { label: \'Boardgames\', value: \'boardgames\' },\n        { label: \'Fietsen\', value: \'fietsen\' },\n    ];\n\n    private kinderenOpties: SelectOption[] = [\n        { label: \'0\', value: \'0\' },\n        { label: \'1\', value: \'1\' },\n        { label: \'2\', value: \'2\' },\n        { label: \'3\', value: \'3\' },\n        { label: \'4\', value: \'4\' },\n        { label: \'5 of meer\', value: \'5 of meer\' },\n    ];\n\n    static {\n        registerWebComponents([\n            VlFormLabelComponent,\n            VlInputFieldComponent,\n            VlInputFieldMaskedComponent,\n            VlTextareaComponent,\n            VlDatepickerComponent,\n            VlSelectRichComponent,\n            VlSelectComponent,\n            VlRadioGroupComponent,\n            VlRadioComponent,\n            VlUploadComponent,\n            VlCheckboxComponent,\n            VlErrorMessageComponent,\n            VlButtonComponent,\n            VlTextComponent,\n        ]);\n    }\n\n    static override get styles(): (CSSResult | CSSResult[])[] {\n        return [\n            vlElementsStyle,\n            vlGridStyles,\n            vlStackedStyles,\n            css`\n                form {\n                    margin-top: 1rem;\n                    max-width: 800px;\n                }\n\n                .form-buttons {\n                    vl-button-next:not(:last-child) {\n                        margin-right: 1.4rem;\n                    }\n                }\n            `,\n        ];\n    }\n\n    override render() {\n        return html`\n            <form id="form" class="vl-form" @submit=${this.onSubmit}>\n                <div class="vl-grid-next vl-stacked-next-small">\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next for="naam" label="Naam *"></vl-form-label-next>\n                        <vl-text-next annotation small>(enkel achternaam)</vl-text-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-input-field-next\n                            id="naam"\n                            name="naam"\n                            autocomplete="given-name"\n                            block\n                            required\n                            pattern="^[a-zA-Z ]*$"\n                            min-length=${2}\n                            max-length=${20}\n                            placeholder="bv. Jo"\n                        ></vl-input-field-next>\n                        <vl-error-message-next for="naam" state="valueMissing"\n                            >Gelieve een naam in te vullen.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="naam" state="tooShort"\n                            >Gelieve minimum 2 karakters te gebruiken.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="naam" state="tooLong"\n                            >Gelieve maximum 20 karakters te gebruiken.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="naam" state="patternMismatch"\n                            >Gelieve geen nummers of speciale tekens in te vullen.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next for="rrn" label="Rijksregisternummer *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-input-field-masked-next\n                            id="rrn"\n                            name="rrn"\n                            block\n                            required\n                            mask="rrn"\n                            placeholder="bv. 86-12-31-123-45"\n                        ></vl-input-field-masked-next>\n                        <vl-error-message-next for="rrn" state="valueMissing"\n                            >Gelieve een rijksregisternummer in te vullen.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="rrn" state="patternMismatch"\n                            >Gelieve een geldig rijksregisternummer in te vullen.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next for="geboortedatum" label="Geboortedatum *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-datepicker-next\n                            id="geboortedatum"\n                            name="geboortedatum"\n                            autocomplete="bday"\n                            placeholder="bv. 31.12.1992"\n                            block\n                            required\n                        >\n                        </vl-datepicker-next>\n                        <vl-error-message-next for="geboortedatum" state="valueMissing">\n                            Gelieve een geboortedatum in te vullen.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="geboortedatum" state="patternMismatch">\n                            Gelieve het volgende datum formaat te gebruiken: "dd.mm.YYYY", bv. 01.12.1976 of 1.2.1993\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next for="geboorteplaats" label="Geboorteplaats *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-select-rich-next\n                            id="geboorteplaats"\n                            name="geboorteplaats"\n                            required\n                            search\n                            .options=${this.geboorteplaatsen}\n                            result-limit="2"\n                            placeholder="bv. Smeerebbe-Vloerzegem"\n                            no-results-text="Geen geboorteplaatsen gevonden"\n                            search-placeholder="Zoek geboorteplaats"\n                        >\n                        </vl-select-rich-next>\n                        <vl-error-message-next for="geboorteplaats" state="valueMissing"\n                            >Gelieve een geboorteplaats te selecteren.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next for="hobbies" label="Hobbies *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-select-rich-next\n                            id="hobbies"\n                            name="hobbies"\n                            required\n                            multiple\n                            .options=${this.hobbies}\n                            placeholder="bv. Boardgames"\n                            no-results-text="Geen hobbies gevonden"\n                            no-choices-text="Geen resterende hobbies gevonden"\n                        >\n                        </vl-select-rich-next>\n                        <vl-error-message-next for="hobbies" state="valueMissing"\n                            >Gelieve een hobby te selecteren.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next for="kinderen" label="Aantal kinderen *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-select-next\n                            id="kinderen"\n                            name="kinderen"\n                            block\n                            placeholder="bv. 1"\n                            required\n                            .options=${this.kinderenOpties}\n                        ></vl-select-next>\n                        <vl-error-message-next for="kinderen" state="valueMissing"\n                            >Gelieve een aantal kinderen te kiezen.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next for="interesses" label="Interesses *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-textarea-next\n                            id="interesses"\n                            name="interesses"\n                            block\n                            required\n                            min-length=${5}\n                            max-length=${100}\n                            rows=${10}\n                            placeholder="bv. Ik ben geïnteresseerd in..."\n                        ></vl-textarea-next>\n                        <vl-error-message-next for="interesses" state="valueMissing"\n                            >Gelieve je interesses in te vullen.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="interesses" state="tooShort"\n                            >Gelieve minimum 5 karakters te gebruiken.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="interesses" state="tooLong"\n                            >Gelieve maximum 100 karakters te gebruiken.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next for="leeftijd" label="Leeftijd *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-input-field-next\n                            id="leeftijd"\n                            name="leeftijd"\n                            type="number"\n                            block\n                            required\n                            placeholder="bv. 35"\n                            min=${0}\n                            max=${99}\n                        ></vl-input-field-next>\n                        <vl-error-message-next for="leeftijd" state="valueMissing"\n                            >Gelieve een leeftijd in te vullen.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="leeftijd" state="rangeUnderflow"\n                            >De minimum leeftijd is 0 jaar.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="leeftijd" state="rangeOverflow"\n                            >De maximum leeftijd is 99 jaar.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next for="contactmethode" label="Contactmethode *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-radio-group-next id="contactmethode" name="contactmethode" required>\n                            <vl-radio-next value="e-mail">e-mail</vl-radio-next>\n                            <vl-radio-next value="telefoon">telefoon</vl-radio-next>\n                            <vl-radio-next value="post">post</vl-radio-next>\n                        </vl-radio-group-next>\n                        <vl-error-message-next for="contactmethode" state="valueMissing">\n                            Gelieve een contactmethode te selecteren.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next for="foto" label="Pasfoto *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-upload-next\n                            id="foto"\n                            name="foto"\n                            accepted-files="image/*"\n                            required\n                            url="http://httpbin.org/post"\n                        ></vl-upload-next>\n                        <vl-error-message-next for="foto" state="valueMissing">\n                            Gelieve een foto te selecteren.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next\n                            for="waarheidsgetrouw"\n                            label="Waarheidsgetrouw *"\n                            block\n                        ></vl-form-label-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-checkbox-next id="waarheidsgetrouw" name="waarheidsgetrouw" block required>\n                            Naar waarheid ingevuld\n                        </vl-checkbox-next>\n                        <vl-error-message-next for="waarheidsgetrouw" state="valueMissing">\n                            Gelieve te bevestigen dat bovenstaande gegevens naar waarheid zijn ingevuld.\n                        </vl-error-message-next>\n                    </div>\n                    <div\n                        class="vl-column-next vl-column-next--8 vl-column-next--s-12 vl-column-next--start-5 vl-column-next--s-start-1"\n                    >\n                        <div class="form-buttons">\n                            <vl-button-next type="submit">Verstuur</vl-button-next>\n                            <vl-button-next type="reset" secondary>Reset</vl-button-next>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        `;\n    }\n\n    private onSubmit(event: Event): void {\n        event.preventDefault();\n\n        const data = parseFormData(event.target as HTMLFormElement);\n        console.log(data);\n    }\n}\n\ndeclare global {\n    interface HTMLElementTagNameMap {\n        \'vl-form-demo\': VlFormDemoComponent;\n    }\n}\n',language:"ts",dark:!0})]})]})}(0,o.gy)([w]);let y={title:"Ontwerp/Form/Demo",tags:["autodocs"],parameters:{docs:{page:function(e={}){let{wrapper:n}=Object.assign({},(0,C.RP)(),e.components);return n?(0,G.jsx)(n,Object.assign({},e,{children:(0,G.jsx)(S,e)})):S(e)}}}},V=()=>(0,t.qy)`<vl-form-demo></vl-form-demo>`;V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:"() => html`<vl-form-demo></vl-form-demo>`",...V.parameters?.docs?.source}}};let D=["Demo"]}}]);