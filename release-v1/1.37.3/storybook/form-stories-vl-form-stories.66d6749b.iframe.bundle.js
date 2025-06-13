(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[363],{"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,a,n)=>{"use strict";n.d(a,{BN:()=>i,RP:()=>o,gz:()=>r,xA:()=>d});var l=n("../../node_modules/react/index.js");let i=l.createContext({});function r(e){return function(a){let n=o(a.components);return l.createElement(e,{...a,allComponents:n})}}function o(e){let a=l.useContext(i);return l.useMemo(()=>"function"==typeof e?e(a):{...a,...e},[a,e])}let t={};function d({components:e,children:a,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||t:o(e),l.createElement(i.Provider,{value:r},a)}},"../../libs/elements/src/form/stories/vl-form.stories.ts":(e,a,n)=>{"use strict";n.r(a),n.d(a,{FormDefault:()=>c,FormGroupDefault:()=>f,FormValidationDefault:()=>p,FormValidationEscapeFieldNames:()=>b,FormValidationOptional:()=>u,FormValidationWithoutSubmit:()=>h,__namedExportsOrder:()=>g,default:()=>m});var l=n("../../libs/common/storybook/src/index.ts"),i=n("../../node_modules/lit-html/lit-html.js");n("../../libs/elements/src/button/vl-button.element.ts"),n("../../libs/elements/src/form-grid/vl-form-grid.element.ts"),n("../../libs/elements/src/form-message/vl-form-annotation.element.ts"),n("../../libs/elements/src/form-message/vl-form-validation-message.element.ts"),n("../../libs/elements/src/form/vl-form.element.ts"),n("../../node_modules/react/index.js");var r=n("../../node_modules/react/jsx-runtime.js"),o=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),t=n("../../node_modules/@storybook/blocks/dist/index.mjs");function d(e){let a=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre",blockquote:"blockquote",h3:"h3"},(0,o.RP)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"form-validatie",children:"Form Validatie"}),"\n",(0,r.jsxs)(a.p,{children:["❗DEPRECATED: In v2.0.0 verdwijnt deze component. Meer info over validatie binnen onze form componenten vind je hier: ",(0,r.jsx)(a.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),"\n",(0,r.jsxs)(a.p,{children:["Een ",(0,r.jsx)(a.code,{children:'<form is="vl-form">'})," met formuliervalidatie zorgt ervoor dat gebruikersinvoer in formulieren gevalideerd wordt."]}),"\n",(0,r.jsx)(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"import { VlFormValidation, VlFormElement } from '@domg-wc/elements';\n"})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-html",children:'<form is="vl-form"></form>\n'})}),"\n",(0,r.jsx)(t.Hl,{of:c}),"\n",(0,r.jsx)(a.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,r.jsx)(t.ov,{of:c}),"\n",(0,r.jsx)(a.h2,{id:"info",children:"Info"}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"vl-form-validation"})," element gebruikt achterliggend ",(0,r.jsx)(a.code,{children:"validate.js"})," 0.12 (",(0,r.jsx)(a.a,{href:"http://validatejs.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"http://validatejs.org/"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["Het attribuut ",(0,r.jsx)(a.code,{children:"[data-validate-form]"})," is vereist voor het formulierelement."]}),"\n",(0,r.jsx)(t.Hl,{of:p}),"\n",(0,r.jsx)(a.h3,{id:"native-validation",children:"Native validation"}),"\n",(0,r.jsxs)(a.p,{children:["Standaard zal de HTML5-validatie van de browser gedeactiveerd worden en word ",(0,r.jsx)(a.code,{children:"novalidate"})," attribuut toegevoegd.\n",(0,r.jsx)(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#novalidate",target:"_blank",rel:"nofollow noopener noreferrer",children:"Zie hier voor meer info op MDN."})]}),"\n",(0,r.jsxs)(a.p,{children:["Als je toch native HTML validation wil toelaten, moet je het attribuut ",(0,r.jsx)(a.code,{children:"data-vl-native-validation"})," toevoegen."]}),"\n",(0,r.jsx)(a.h3,{id:"reset",children:"Reset"}),"\n",(0,r.jsxs)(a.p,{children:["Als je een formulier opnieuw instelt, worden validatiefouten automatisch gereset. Als je de validaties uitdrukkelijk\nopnieuw wilt instellen (bijvoorbeeld na het verzenden aan de clientzijde), kan je ",(0,r.jsx)(a.code,{children:"vl.formValidation.reset(formEl)"}),"\naanroepen"]}),"\n",(0,r.jsx)(a.h3,{id:"reset-individueel-form-element",children:"Reset individueel form element"}),"\n",(0,r.jsxs)(a.p,{children:["Om een form element manueel te resetten, kan je tevens ook ",(0,r.jsx)(a.code,{children:"resetValidity()"})," aanroepen op form elementen die overerven\nvan ",(0,r.jsx)(a.code,{children:"vlFormValidationElement"}),"; ",(0,r.jsx)(a.code,{children:"vl-datepicker"}),", ",(0,r.jsx)(a.code,{children:"vl-textarea"}),", ",(0,r.jsx)(a.code,{children:"vl-upload"}),", ",(0,r.jsx)(a.code,{children:"vl-input-field"})," en ",(0,r.jsx)(a.code,{children:"vl-select"}),"."]}),"\n",(0,r.jsx)(a.h3,{id:"required",children:"Required"}),"\n",(0,r.jsxs)(a.p,{children:["Om de ",(0,r.jsx)(a.code,{children:"form-validation"})," te laten werken voor een control moet je uitdrukkelijk ",(0,r.jsx)(a.code,{children:"data-vl-required"})," op het te valideren\nelement zetten. Anders wordt het element als een optioneel invoerveld gezien."]}),"\n",(0,r.jsx)(a.p,{children:"Je vindt een voorbeeld hieronder; naam is verplicht en voornaam is niet verplicht."}),"\n",(0,r.jsx)(t.Hl,{of:u}),"\n",(0,r.jsx)(a.h3,{id:"escape-naam-attributen",children:"Escape naam attributen"}),"\n",(0,r.jsxs)(a.p,{children:["Indien er een ",(0,r.jsx)(a.code,{children:"."})," in het naam attribuut van een input veld staat en de validatie niet correct werkt moet dit naam\nattribuut ge-escaped worden.",(0,r.jsx)("br",{}),"\nZet hiervoor het attribuut ",(0,r.jsx)(a.code,{children:"data-vl-escape-field-names"})," op true op het form element."]}),"\n",(0,r.jsx)(t.Hl,{of:p}),"\n",(0,r.jsx)(a.h3,{id:"group",children:"Group"}),"\n",(0,r.jsxs)(a.p,{children:["Met ",(0,r.jsx)(a.code,{children:"vl-form-group"})," wordt styling toegevoegd om makkelijker te onderscheiden tussen verschillende form controls."]}),"\n",(0,r.jsx)(a.p,{children:"Zie voorbeeld hieronder:"}),"\n",(0,r.jsx)(t.Hl,{of:f}),"\n",(0,r.jsx)(a.h3,{id:"valideren-zonder-submit",children:"Valideren zonder submit"}),"\n",(0,r.jsxs)(a.p,{children:["Voor validatie in de context van een single page application, willen we typisch ook geen submit uitvoeren maar enkel\nde inputs van de form valideren. Om dit te doen kan je de functie ",(0,r.jsx)(a.code,{children:"requestValidation()"})," aanroepen op de\n",(0,r.jsx)(a.code,{children:"vl-form"}),"-instantie."]}),"\n",(0,r.jsxs)(a.p,{children:["Dit zal de achterliggende ",(0,r.jsx)(a.code,{children:"validate.js"}),"-validatie uitvoeren zonder de form te submitten."]}),"\n",(0,r.jsx)(a.p,{children:"Hieronder zie je een voorbeeld hoe je dit zou kunnen gebruiken:"}),"\n",(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{children:"voorbeeld code"}),(0,r.jsx)(t.kL,{language:"js",format:!0,dark:!0,code:`
    // form instantie ophalen
    const vlForm = document.querySelector('form[is="vl-form"]#eerste-form');
    // valideren zonder submit
    vlForm.requestValidation();
    // native "checkValidity()" methode geeft validiteit de form terug
    console.log('vlForm.checkValidity', vlForm.checkValidity());`})]}),"\n",(0,r.jsx)(a.h2,{id:"referenties",children:"Referenties"}),"\n",(0,r.jsx)(a.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-form-validation",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Form Validation"})}),"\n",(0,r.jsx)(a.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/native-elements-vl-form--with-validation",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Form Validation"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlForm.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Form Validation"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-form.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Form Validation"})})]})}let s={escapeFieldNames:!1,nativeValidation:!1,validate:!1},v={escapeFieldNames:{name:"data-vl-escape-field-names",description:"Geeft aan dat het name attribuut van de input velden ge-escaped moet worden.<br/>Kan gebruikt worden als er een '.' in het name attribuut staat en de validatie niet correct werkt.",table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:s.escapeFieldNames}}},nativeValidation:{name:"data-vl-native-validation",description:"Stelt native validation in.",table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:s.validate}}},validate:{name:"data-vl-validate",description:"Validatie van invoervelden inschakelen.",table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:s.validate}}}},m={title:"Elements/form",tags:["autodocs"],args:s,argTypes:v,parameters:{docs:{page:function(e={}){let{wrapper:a}=Object.assign({},(0,o.RP)(),e.components);return a?(0,r.jsx)(a,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}},c=(0,l._7)(s,({validate:e,nativeValidation:a,escapeFieldNames:n})=>(0,i.qy)`
        <div style="max-width: 800px">
            <form
                is="vl-form"
                ?data-vl-validate=${e}
                ?data-vl-native-validation=${a}
                ?data-vl-escape-field-names=${n}
            >
                <div is="vl-form-grid" data-vl-is-stacked>
                    <div is="vl-form-column" data-vl-size="3">
                        <label is="vl-form-label" for="name" data-vl-block> Naam </label>
                    </div>
                    <div is="vl-form-column" data-vl-size="9">
                        <input id="name" name="name" autocomplete="name" is="vl-input-field" data-vl-block />
                    </div>

                    <div is="vl-form-column" data-vl-size="3">
                        <label is="vl-form-label" for="firstname" data-vl-block> Voornaam </label>
                    </div>
                    <div is="vl-form-column" data-vl-size="9">
                        <input
                            id="firstname"
                            name="firstname"
                            autocomplete="given-name"
                            is="vl-input-field"
                            data-vl-block
                        />
                    </div>

                    <div is="vl-form-column" data-vl-size="9" data-vl-push="3">
                        <div is="vl-action-group">
                            <button is="vl-button" type="submit">Versturen</button>
                            <a is="vl-link" href="#">
                                <span is="vl-icon" data-vl-icon="cross" data-vl-before></span>
                                Annuleren
                            </a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    `);c.storyName="vl-form - default",c.args={validate:!1};let f=(0,l._7)(s,({validate:e,nativeValidation:a,escapeFieldNames:n})=>(0,i.qy)`
        <div style="max-width: 800px">
            <form
                is="vl-form"
                ?data-vl-validate=${e}
                ?data-vl-native-validation=${a}
                ?data-vl-escape-field-names=${n}
            >
                <div is="vl-form-group" data-cy="form-group">
                    <div is="vl-form-grid" data-vl-is-stacked>
                        <div is="vl-form-column" data-vl-size="3">
                            <label is="vl-form-label" for="name" data-vl-block>
                                Naam
                                <span is="vl-form-annotation-span">(verplicht)</span>
                            </label>
                        </div>
                        <div is="vl-form-column" data-vl-size="9">
                            <input
                                id="name"
                                name="name"
                                autocomplete="name"
                                is="vl-input-field"
                                data-vl-block
                                data-vl-required
                                data-vl-error-message="Geef een naam in."
                                data-vl-error-placeholder="name-error"
                            />
                            <p is="vl-form-validation-message" data-vl-error data-vl-error-id="name-error"></p>
                        </div>

                        <div is="vl-form-column" data-vl-size="3">
                            <label is="vl-form-label" for="firstname" data-vl-block>
                                Voornaam
                                <span is="vl-form-annotation-span">(verplicht)</span>
                            </label>
                        </div>
                        <div is="vl-form-column" data-vl-size="9">
                            <input
                                id="firstname"
                                name="firstname"
                                autocomplete="given-name"
                                is="vl-input-field"
                                data-vl-block
                                data-vl-required
                                data-vl-error-message="Geef een voornaam in."
                                data-vl-error-placeholder="firstname-error"
                            />
                            <p is="vl-form-validation-message" data-vl-error data-vl-error-id="firstname-error"></p>
                        </div>
                    </div>
                </div>
                <div is="vl-form-group" data-cy="form-group">
                    <div is="vl-form-grid" data-vl-is-stacked>
                        <div is="vl-form-column" data-vl-size="3">
                            <label is="vl-form-label" for="street" data-vl-block>
                                Straat
                                <span is="vl-form-annotation-span">(verplicht)</span>
                            </label>
                        </div>
                        <div is="vl-form-column" data-vl-size="9">
                            <input
                                id="street"
                                name="street"
                                autocomplete="address-line1"
                                is="vl-input-field"
                                data-vl-block
                                data-vl-required
                                data-vl-error-message="Geef een straat in."
                                data-vl-error-placeholder="street-error"
                            />
                            <p is="vl-form-validation-message" data-vl-error data-vl-error-id="street-error"></p>
                        </div>

                        <div is="vl-form-column" data-vl-size="3">
                            <label is="vl-form-label" for="city" data-vl-block>
                                Stad
                                <span is="vl-form-annotation-span">(verplicht)</span>
                            </label>
                        </div>
                        <div is="vl-form-column" data-vl-size="9">
                            <input
                                id="city"
                                name="city"
                                autocomplete="address-level2"
                                is="vl-input-field"
                                data-vl-block
                                data-vl-required
                                data-vl-error-message="Geef een stad in."
                                data-vl-error-placeholder="city-error"
                            />
                            <p is="vl-form-validation-message" data-vl-error data-vl-error-id="city-error"></p>
                        </div>

                        <div is="vl-form-column" data-vl-size="9" data-vl-push="3">
                            <div is="vl-action-group">
                                <button is="vl-button" type="submit">Versturen</button>
                                <a is="vl-link" href="#">
                                    <span is="vl-icon" data-vl-icon="cross" data-vl-before></span>
                                    Annuleren
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    `);f.storyName="vl-form - group",f.args={validate:!0};let p=(0,l._7)(s,({validate:e,nativeValidation:a,escapeFieldNames:n})=>(0,i.qy)`
        <div style="max-width: 800px">
            <form
                is="vl-form"
                ?data-vl-validate=${e}
                ?data-vl-native-validation=${a}
                ?data-vl-escape-field-names=${n}
            >
                <div is="vl-form-grid" data-vl-is-stacked>
                    <div is="vl-form-column" data-vl-size="3">
                        <label is="vl-form-label" for="name" data-vl-block>
                            Naam
                            <span is="vl-form-annotation-span">(verplicht)</span>
                        </label>
                    </div>
                    <div is="vl-form-column" data-vl-size="9">
                        <input
                            id="name"
                            name="name"
                            autocomplete="name"
                            is="vl-input-field"
                            data-vl-block
                            data-vl-required
                            data-vl-error-message="Geef een naam in."
                            data-vl-error-placeholder="name-error"
                        />
                        <p is="vl-form-validation-message" data-vl-error data-vl-error-id="name-error"></p>
                    </div>

                    <div is="vl-form-column" data-vl-size="3">
                        <label is="vl-form-label" for="firstname" data-vl-block>
                            Voornaam
                            <span is="vl-form-annotation-span">(verplicht)</span>
                        </label>
                    </div>
                    <div is="vl-form-column" data-vl-size="9">
                        <input
                            id="firstname"
                            name="firstname"
                            autocomplete="given-name"
                            is="vl-input-field"
                            data-vl-block
                            data-vl-required
                            data-vl-error-message="Geef een voornaam in."
                            data-vl-error-placeholder="firstname-error"
                        />
                        <p is="vl-form-validation-message" data-vl-error data-vl-error-id="firstname-error"></p>
                    </div>

                    <div is="vl-form-column" data-vl-size="9" data-vl-push="3">
                        <div is="vl-action-group">
                            <button is="vl-button" type="submit">Versturen</button>
                            <a is="vl-link" href="#">
                                <span is="vl-icon" data-vl-icon="cross" data-vl-before></span>
                                Annuleren
                            </a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    `);p.storyName="vl-form - validation",p.args={validate:!0};let u=(0,l._7)(s,({validate:e,nativeValidation:a,escapeFieldNames:n})=>(0,i.qy)`
        <div style="max-width: 800px">
            <form
                is="vl-form"
                ?data-vl-validate=${e}
                ?data-vl-native-validation=${a}
                ?data-vl-escape-field-names=${n}
            >
                <div is="vl-form-grid" data-vl-is-stacked>
                    <div is="vl-form-column" data-vl-size="3">
                        <label is="vl-form-label" for="name" data-vl-block>
                            Naam
                            <span is="vl-form-annotation-span">(verplicht)</span>
                        </label>
                    </div>
                    <div is="vl-form-column" data-vl-size="9">
                        <input
                            id="name"
                            name="name"
                            autocomplete="name"
                            is="vl-input-field"
                            data-vl-block
                            data-vl-required
                            data-vl-error-message="Geef een naam in."
                            data-vl-error-placeholder="name-error"
                        />
                        <p is="vl-form-validation-message" data-vl-error data-vl-error-id="name-error"></p>
                    </div>

                    <div is="vl-form-column" data-vl-size="3">
                        <label is="vl-form-label" for="firstname" data-vl-block> Voornaam </label>
                    </div>
                    <div is="vl-form-column" data-vl-size="9">
                        <input
                            id="firstname"
                            name="firstname"
                            autocomplete="given-name"
                            is="vl-input-field"
                            data-vl-block
                            data-vl-error-message="Geef een voornaam in."
                            data-vl-error-placeholder="firstname-error"
                        />
                        <p is="vl-form-validation-message" data-vl-error data-vl-error-id="firstname-error"></p>
                    </div>

                    <div is="vl-form-column" data-vl-size="9" data-vl-push="3">
                        <div is="vl-action-group">
                            <button is="vl-button" type="submit">Versturen</button>
                            <a is="vl-link" href="#">
                                <span is="vl-icon" data-vl-icon="cross" data-vl-before></span>
                                Annuleren
                            </a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    `);u.storyName="vl-form - validation optional",u.args={validate:!0};let b=(0,l._7)(s,({validate:e,nativeValidation:a,escapeFieldNames:n})=>(0,i.qy)`
        <div style="max-width: 800px">
            <form
                is="vl-form"
                ?data-vl-validate=${e}
                ?data-vl-native-validation=${a}
                ?data-vl-escape-field-names=${n}
            >
                <div is="vl-form-grid" data-vl-is-stacked>
                    <div is="vl-form-column" data-vl-size="3">
                        <label is="vl-form-label" for="foo.bar" data-vl-block>
                            Naam
                            <span is="vl-form-annotation-span">(verplicht)</span>
                        </label>
                    </div>
                    <div is="vl-form-column" data-vl-size="9">
                        <input
                            id="foo.bar"
                            name="foo.bar"
                            autocomplete="name"
                            is="vl-input-field"
                            data-vl-block
                            data-vl-required
                            data-vl-error-message="Geef een naam in."
                            data-vl-error-placeholder="foo.bar-error"
                        />
                        <p is="vl-form-validation-message" data-vl-error data-vl-error-id="foo.bar-error"></p>
                    </div>

                    <div is="vl-form-column" data-vl-size="3">
                        <label is="vl-form-label" for="foo.bar.baz" data-vl-block>
                            Voornaam
                            <span is="vl-form-annotation-span">(verplicht)</span>
                        </label>
                    </div>
                    <div is="vl-form-column" data-vl-size="9">
                        <input
                            id="foo.bar.baz"
                            name="foo.bar.baz"
                            autocomplete="given-name"
                            is="vl-input-field"
                            data-vl-block
                            data-vl-required
                            data-vl-error-message="Geef een voornaam in."
                            data-vl-error-placeholder="foo.bar.baz-error"
                        />
                        <p is="vl-form-validation-message" data-vl-error data-vl-error-id="foo.bar.baz-error"></p>
                    </div>

                    <div is="vl-form-column" data-vl-size="9" data-vl-push="3">
                        <div is="vl-action-group">
                            <button is="vl-button" type="submit">Versturen</button>
                            <a is="vl-link" href="#">
                                <span is="vl-icon" data-vl-icon="cross" data-vl-before></span>
                                Annuleren
                            </a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    `);b.storyName="vl-form - validation escape field names",b.args={validate:!0,escapeFieldNames:!0};let h=(0,l._7)(s,({validate:e,nativeValidation:a,escapeFieldNames:n})=>{let l;return customElements.whenDefined("vl-form").then(()=>{l=document.querySelector('form[is="vl-form"]')}),(0,i.qy)`
        <div style="max-width: 800px">
            <form
                is="vl-form"
                ?data-vl-validate=${e}
                ?data-vl-native-validation=${a}
                ?data-vl-escape-field-names=${n}
            >
                <div is="vl-form-grid" data-vl-is-stacked>
                    <div is="vl-form-column" data-vl-size="3">
                        <label is="vl-form-label" for="name" data-vl-block>
                            Naam
                            <span is="vl-form-annotation-span">(verplicht)</span>
                        </label>
                    </div>
                    <div is="vl-form-column" data-vl-size="9">
                        <input
                            id="name"
                            name="name"
                            autocomplete="name"
                            is="vl-input-field"
                            data-vl-block
                            data-vl-required
                            data-vl-error-message="Geef een naam in."
                            data-vl-error-placeholder="name-error"
                        />
                        <p is="vl-form-validation-message" data-vl-error data-vl-error-id="name-error"></p>
                    </div>

                    <div is="vl-form-column" data-vl-size="3">
                        <label is="vl-form-label" for="firstname" data-vl-block> Voornaam </label>
                    </div>
                    <div is="vl-form-column" data-vl-size="9">
                        <input
                            id="firstname"
                            name="firstname"
                            autocomplete="given-name"
                            is="vl-input-field"
                            data-vl-block
                            data-vl-required
                            data-vl-error-message="Geef een voornaam in."
                            data-vl-error-placeholder="firstname-error"
                        />
                        <p is="vl-form-validation-message" data-vl-error data-vl-error-id="firstname-error"></p>
                    </div>

                    <div is="vl-form-column" data-vl-size="9" data-vl-push="3">
                        <div is="vl-action-group">
                            <button
                                id="validate-without-submit"
                                is="vl-button"
                                type="button"
                                data-vl-tertiary
                                @click=${()=>{l?.requestValidation(),console.log("vlForm.checkValidity",l?.checkValidity())}}
                            >
                                Valideer zonder submit
                            </button>
                            <a is="vl-link" href="#">
                                <span is="vl-icon" data-vl-icon="cross" data-vl-before></span>
                                Annuleren
                            </a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    `});h.storyName="vl-form - validation optional",h.args={validate:!0},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'story(formArgs, ({\n  validate,\n  nativeValidation,\n  escapeFieldNames\n}) => html`\n        <div style="max-width: 800px">\n            <form\n                is="vl-form"\n                ?data-vl-validate=${validate}\n                ?data-vl-native-validation=${nativeValidation}\n                ?data-vl-escape-field-names=${escapeFieldNames}\n            >\n                <div is="vl-form-grid" data-vl-is-stacked>\n                    <div is="vl-form-column" data-vl-size="3">\n                        <label is="vl-form-label" for="name" data-vl-block> Naam </label>\n                    </div>\n                    <div is="vl-form-column" data-vl-size="9">\n                        <input id="name" name="name" autocomplete="name" is="vl-input-field" data-vl-block />\n                    </div>\n\n                    <div is="vl-form-column" data-vl-size="3">\n                        <label is="vl-form-label" for="firstname" data-vl-block> Voornaam </label>\n                    </div>\n                    <div is="vl-form-column" data-vl-size="9">\n                        <input\n                            id="firstname"\n                            name="firstname"\n                            autocomplete="given-name"\n                            is="vl-input-field"\n                            data-vl-block\n                        />\n                    </div>\n\n                    <div is="vl-form-column" data-vl-size="9" data-vl-push="3">\n                        <div is="vl-action-group">\n                            <button is="vl-button" type="submit">Versturen</button>\n                            <a is="vl-link" href="#">\n                                <span is="vl-icon" data-vl-icon="cross" data-vl-before></span>\n                                Annuleren\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    `)',...c.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:'story(formArgs, ({\n  validate,\n  nativeValidation,\n  escapeFieldNames\n}) => html`\n        <div style="max-width: 800px">\n            <form\n                is="vl-form"\n                ?data-vl-validate=${validate}\n                ?data-vl-native-validation=${nativeValidation}\n                ?data-vl-escape-field-names=${escapeFieldNames}\n            >\n                <div is="vl-form-group" data-cy="form-group">\n                    <div is="vl-form-grid" data-vl-is-stacked>\n                        <div is="vl-form-column" data-vl-size="3">\n                            <label is="vl-form-label" for="name" data-vl-block>\n                                Naam\n                                <span is="vl-form-annotation-span">(verplicht)</span>\n                            </label>\n                        </div>\n                        <div is="vl-form-column" data-vl-size="9">\n                            <input\n                                id="name"\n                                name="name"\n                                autocomplete="name"\n                                is="vl-input-field"\n                                data-vl-block\n                                data-vl-required\n                                data-vl-error-message="Geef een naam in."\n                                data-vl-error-placeholder="name-error"\n                            />\n                            <p is="vl-form-validation-message" data-vl-error data-vl-error-id="name-error"></p>\n                        </div>\n\n                        <div is="vl-form-column" data-vl-size="3">\n                            <label is="vl-form-label" for="firstname" data-vl-block>\n                                Voornaam\n                                <span is="vl-form-annotation-span">(verplicht)</span>\n                            </label>\n                        </div>\n                        <div is="vl-form-column" data-vl-size="9">\n                            <input\n                                id="firstname"\n                                name="firstname"\n                                autocomplete="given-name"\n                                is="vl-input-field"\n                                data-vl-block\n                                data-vl-required\n                                data-vl-error-message="Geef een voornaam in."\n                                data-vl-error-placeholder="firstname-error"\n                            />\n                            <p is="vl-form-validation-message" data-vl-error data-vl-error-id="firstname-error"></p>\n                        </div>\n                    </div>\n                </div>\n                <div is="vl-form-group" data-cy="form-group">\n                    <div is="vl-form-grid" data-vl-is-stacked>\n                        <div is="vl-form-column" data-vl-size="3">\n                            <label is="vl-form-label" for="street" data-vl-block>\n                                Straat\n                                <span is="vl-form-annotation-span">(verplicht)</span>\n                            </label>\n                        </div>\n                        <div is="vl-form-column" data-vl-size="9">\n                            <input\n                                id="street"\n                                name="street"\n                                autocomplete="address-line1"\n                                is="vl-input-field"\n                                data-vl-block\n                                data-vl-required\n                                data-vl-error-message="Geef een straat in."\n                                data-vl-error-placeholder="street-error"\n                            />\n                            <p is="vl-form-validation-message" data-vl-error data-vl-error-id="street-error"></p>\n                        </div>\n\n                        <div is="vl-form-column" data-vl-size="3">\n                            <label is="vl-form-label" for="city" data-vl-block>\n                                Stad\n                                <span is="vl-form-annotation-span">(verplicht)</span>\n                            </label>\n                        </div>\n                        <div is="vl-form-column" data-vl-size="9">\n                            <input\n                                id="city"\n                                name="city"\n                                autocomplete="address-level2"\n                                is="vl-input-field"\n                                data-vl-block\n                                data-vl-required\n                                data-vl-error-message="Geef een stad in."\n                                data-vl-error-placeholder="city-error"\n                            />\n                            <p is="vl-form-validation-message" data-vl-error data-vl-error-id="city-error"></p>\n                        </div>\n\n                        <div is="vl-form-column" data-vl-size="9" data-vl-push="3">\n                            <div is="vl-action-group">\n                                <button is="vl-button" type="submit">Versturen</button>\n                                <a is="vl-link" href="#">\n                                    <span is="vl-icon" data-vl-icon="cross" data-vl-before></span>\n                                    Annuleren\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    `)',...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'story(formArgs, ({\n  validate,\n  nativeValidation,\n  escapeFieldNames\n}) => html`\n        <div style="max-width: 800px">\n            <form\n                is="vl-form"\n                ?data-vl-validate=${validate}\n                ?data-vl-native-validation=${nativeValidation}\n                ?data-vl-escape-field-names=${escapeFieldNames}\n            >\n                <div is="vl-form-grid" data-vl-is-stacked>\n                    <div is="vl-form-column" data-vl-size="3">\n                        <label is="vl-form-label" for="name" data-vl-block>\n                            Naam\n                            <span is="vl-form-annotation-span">(verplicht)</span>\n                        </label>\n                    </div>\n                    <div is="vl-form-column" data-vl-size="9">\n                        <input\n                            id="name"\n                            name="name"\n                            autocomplete="name"\n                            is="vl-input-field"\n                            data-vl-block\n                            data-vl-required\n                            data-vl-error-message="Geef een naam in."\n                            data-vl-error-placeholder="name-error"\n                        />\n                        <p is="vl-form-validation-message" data-vl-error data-vl-error-id="name-error"></p>\n                    </div>\n\n                    <div is="vl-form-column" data-vl-size="3">\n                        <label is="vl-form-label" for="firstname" data-vl-block>\n                            Voornaam\n                            <span is="vl-form-annotation-span">(verplicht)</span>\n                        </label>\n                    </div>\n                    <div is="vl-form-column" data-vl-size="9">\n                        <input\n                            id="firstname"\n                            name="firstname"\n                            autocomplete="given-name"\n                            is="vl-input-field"\n                            data-vl-block\n                            data-vl-required\n                            data-vl-error-message="Geef een voornaam in."\n                            data-vl-error-placeholder="firstname-error"\n                        />\n                        <p is="vl-form-validation-message" data-vl-error data-vl-error-id="firstname-error"></p>\n                    </div>\n\n                    <div is="vl-form-column" data-vl-size="9" data-vl-push="3">\n                        <div is="vl-action-group">\n                            <button is="vl-button" type="submit">Versturen</button>\n                            <a is="vl-link" href="#">\n                                <span is="vl-icon" data-vl-icon="cross" data-vl-before></span>\n                                Annuleren\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    `)',...p.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'story(formArgs, ({\n  validate,\n  nativeValidation,\n  escapeFieldNames\n}) => html`\n        <div style="max-width: 800px">\n            <form\n                is="vl-form"\n                ?data-vl-validate=${validate}\n                ?data-vl-native-validation=${nativeValidation}\n                ?data-vl-escape-field-names=${escapeFieldNames}\n            >\n                <div is="vl-form-grid" data-vl-is-stacked>\n                    <div is="vl-form-column" data-vl-size="3">\n                        <label is="vl-form-label" for="name" data-vl-block>\n                            Naam\n                            <span is="vl-form-annotation-span">(verplicht)</span>\n                        </label>\n                    </div>\n                    <div is="vl-form-column" data-vl-size="9">\n                        <input\n                            id="name"\n                            name="name"\n                            autocomplete="name"\n                            is="vl-input-field"\n                            data-vl-block\n                            data-vl-required\n                            data-vl-error-message="Geef een naam in."\n                            data-vl-error-placeholder="name-error"\n                        />\n                        <p is="vl-form-validation-message" data-vl-error data-vl-error-id="name-error"></p>\n                    </div>\n\n                    <div is="vl-form-column" data-vl-size="3">\n                        <label is="vl-form-label" for="firstname" data-vl-block> Voornaam </label>\n                    </div>\n                    <div is="vl-form-column" data-vl-size="9">\n                        <input\n                            id="firstname"\n                            name="firstname"\n                            autocomplete="given-name"\n                            is="vl-input-field"\n                            data-vl-block\n                            data-vl-error-message="Geef een voornaam in."\n                            data-vl-error-placeholder="firstname-error"\n                        />\n                        <p is="vl-form-validation-message" data-vl-error data-vl-error-id="firstname-error"></p>\n                    </div>\n\n                    <div is="vl-form-column" data-vl-size="9" data-vl-push="3">\n                        <div is="vl-action-group">\n                            <button is="vl-button" type="submit">Versturen</button>\n                            <a is="vl-link" href="#">\n                                <span is="vl-icon" data-vl-icon="cross" data-vl-before></span>\n                                Annuleren\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    `)',...u.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'story(formArgs, ({\n  validate,\n  nativeValidation,\n  escapeFieldNames\n}) => html`\n        <div style="max-width: 800px">\n            <form\n                is="vl-form"\n                ?data-vl-validate=${validate}\n                ?data-vl-native-validation=${nativeValidation}\n                ?data-vl-escape-field-names=${escapeFieldNames}\n            >\n                <div is="vl-form-grid" data-vl-is-stacked>\n                    <div is="vl-form-column" data-vl-size="3">\n                        <label is="vl-form-label" for="foo.bar" data-vl-block>\n                            Naam\n                            <span is="vl-form-annotation-span">(verplicht)</span>\n                        </label>\n                    </div>\n                    <div is="vl-form-column" data-vl-size="9">\n                        <input\n                            id="foo.bar"\n                            name="foo.bar"\n                            autocomplete="name"\n                            is="vl-input-field"\n                            data-vl-block\n                            data-vl-required\n                            data-vl-error-message="Geef een naam in."\n                            data-vl-error-placeholder="foo.bar-error"\n                        />\n                        <p is="vl-form-validation-message" data-vl-error data-vl-error-id="foo.bar-error"></p>\n                    </div>\n\n                    <div is="vl-form-column" data-vl-size="3">\n                        <label is="vl-form-label" for="foo.bar.baz" data-vl-block>\n                            Voornaam\n                            <span is="vl-form-annotation-span">(verplicht)</span>\n                        </label>\n                    </div>\n                    <div is="vl-form-column" data-vl-size="9">\n                        <input\n                            id="foo.bar.baz"\n                            name="foo.bar.baz"\n                            autocomplete="given-name"\n                            is="vl-input-field"\n                            data-vl-block\n                            data-vl-required\n                            data-vl-error-message="Geef een voornaam in."\n                            data-vl-error-placeholder="foo.bar.baz-error"\n                        />\n                        <p is="vl-form-validation-message" data-vl-error data-vl-error-id="foo.bar.baz-error"></p>\n                    </div>\n\n                    <div is="vl-form-column" data-vl-size="9" data-vl-push="3">\n                        <div is="vl-action-group">\n                            <button is="vl-button" type="submit">Versturen</button>\n                            <a is="vl-link" href="#">\n                                <span is="vl-icon" data-vl-icon="cross" data-vl-before></span>\n                                Annuleren\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    `)',...b.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'story(formArgs, ({\n  validate,\n  nativeValidation,\n  escapeFieldNames\n}) => {\n  let vlForm: HTMLFormElement & VlFormElement;\n  customElements.whenDefined(\'vl-form\').then(() => {\n    vlForm = (document.querySelector(\'form[is="vl-form"]\') as HTMLFormElement & VlFormElement);\n  });\n  return html`\n        <div style="max-width: 800px">\n            <form\n                is="vl-form"\n                ?data-vl-validate=${validate}\n                ?data-vl-native-validation=${nativeValidation}\n                ?data-vl-escape-field-names=${escapeFieldNames}\n            >\n                <div is="vl-form-grid" data-vl-is-stacked>\n                    <div is="vl-form-column" data-vl-size="3">\n                        <label is="vl-form-label" for="name" data-vl-block>\n                            Naam\n                            <span is="vl-form-annotation-span">(verplicht)</span>\n                        </label>\n                    </div>\n                    <div is="vl-form-column" data-vl-size="9">\n                        <input\n                            id="name"\n                            name="name"\n                            autocomplete="name"\n                            is="vl-input-field"\n                            data-vl-block\n                            data-vl-required\n                            data-vl-error-message="Geef een naam in."\n                            data-vl-error-placeholder="name-error"\n                        />\n                        <p is="vl-form-validation-message" data-vl-error data-vl-error-id="name-error"></p>\n                    </div>\n\n                    <div is="vl-form-column" data-vl-size="3">\n                        <label is="vl-form-label" for="firstname" data-vl-block> Voornaam </label>\n                    </div>\n                    <div is="vl-form-column" data-vl-size="9">\n                        <input\n                            id="firstname"\n                            name="firstname"\n                            autocomplete="given-name"\n                            is="vl-input-field"\n                            data-vl-block\n                            data-vl-required\n                            data-vl-error-message="Geef een voornaam in."\n                            data-vl-error-placeholder="firstname-error"\n                        />\n                        <p is="vl-form-validation-message" data-vl-error data-vl-error-id="firstname-error"></p>\n                    </div>\n\n                    <div is="vl-form-column" data-vl-size="9" data-vl-push="3">\n                        <div is="vl-action-group">\n                            <button\n                                id="validate-without-submit"\n                                is="vl-button"\n                                type="button"\n                                data-vl-tertiary\n                                @click=${() => {\n    vlForm?.requestValidation();\n    console.log(\'vlForm.checkValidity\', vlForm?.checkValidity());\n  }}\n                            >\n                                Valideer zonder submit\n                            </button>\n                            <a is="vl-link" href="#">\n                                <span is="vl-icon" data-vl-icon="cross" data-vl-before></span>\n                                Annuleren\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    `;\n})',...h.parameters?.docs?.source}}};let g=["FormDefault","FormGroupDefault","FormValidationDefault","FormValidationOptional","FormValidationEscapeFieldNames","FormValidationWithoutSubmit"]},"../../node_modules/memoizerific sync recursive":e=>{function a(e){var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}a.keys=()=>[],a.resolve=a,a.id="../../node_modules/memoizerific sync recursive",e.exports=a},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,a,n)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=n("../../node_modules/react/index.js"),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,t=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function s(e,a,n){var l,r={},s=null,v=null;for(l in void 0!==n&&(s=""+n),void 0!==a.key&&(s=""+a.key),void 0!==a.ref&&(v=a.ref),a)o.call(a,l)&&!d.hasOwnProperty(l)&&(r[l]=a[l]);if(e&&e.defaultProps)for(l in a=e.defaultProps)void 0===r[l]&&(r[l]=a[l]);return{$$typeof:i,type:e,key:s,ref:v,props:r,_owner:t.current}}a.Fragment=r,a.jsx=s,a.jsxs=s},"../../node_modules/react/jsx-runtime.js":(e,a,n)=>{"use strict";e.exports=n("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);