import{u as i,j as e,M as a,C as o,S as r}from"./iframe-CY-ZM549.js";import{f as s,F as d,a as m,b as c}from"./formulier-cross-validatie.stories-CR2EaLT7.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-form-data.component-DWD-9cxK.js";import"./vl-checkbox.component-BDn7ePcW.js";import"./vl-datepicker.component-YU9BW_0B.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-Bc3AJnIk.js";import"./vl-input-field-masked.component-CpP3801C.js";import"./vl-radio.component-D19T2Xu3.js";import"./vl-radio-group.component-DrOqLcWw.js";import"./vl-select.component-BFzkdhOR.js";import"./vl-select-rich.component-Ce4rMkaH.js";import"./vl-textarea.component-C2i5Nva7.js";import"./vl-textarea-rich.component-C1bved6Z.js";import"./vl-upload.component-CRjn2qhr.js";import"./vl-upload-progress.component-DXqNp2pu.js";const v=`import { registerWebComponents, webComponent } from '@domg-wc/common';
import { vlGridStyles, vlLegacyStyles } from '@domg-wc/styles';
import { VlButtonComponent } from '@domg-wc/components/atom';
import {
    parseFormData,
    VlFormMessageComponent,
    VlFormLabelComponent,
    VlInputFieldComponent,
    VlSelectComponent,
    type SelectOption,
    CrossValidationMixin,
    type ValidatorWithDeps,
} from '@domg-wc/components/form';
import { css, CSSResult, html, LitElement, PropertyDeclarations } from 'lit';

@webComponent('vl-input-field-with-cross-validator')
export class VlInputFieldWithCrossValidatorComponent extends CrossValidationMixin(VlInputFieldComponent) {
    static override formControlValidators: ValidatorWithDeps[] = [
        ...VlInputFieldComponent.formControlValidators,
        {
            key: 'customError',
            message: \`Bij de strikte procedure moet de code 'ABC-123' zijn.\`,
            dependencySelectors: ['#procedure'],
            isValid(instance: HTMLElement, value: string): boolean {
                if (!value) return true;

                const form = (instance as HTMLElement & { form: HTMLFormElement | null }).form;
                if (!form) return true;

                const procedure = form.querySelector<HTMLElement & { value: string }>('#procedure')?.value;
                return procedure !== 'strikt' || value === 'ABC-123';
            },
        },
    ];
}

@webComponent('vl-form-cross-validation')
export class VlFormCrossValidationComponent extends LitElement {
    private formData: { [key: string]: FormDataEntryValue[] | File | string } | null = null;

    static {
        registerWebComponents([
            VlInputFieldWithCrossValidatorComponent,
            VlFormLabelComponent,
            VlFormMessageComponent,
            VlSelectComponent,
            VlButtonComponent,
        ]);
    }

    static override get styles(): (CSSResult | CSSResult[])[] {
        return [
            vlLegacyStyles,
            vlGridStyles,
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

                pre {
                    margin-top: 1rem;
                    padding: 0.75rem;
                    background: #f5f5f5;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 0.875rem;
                }
            \`,
        ];
    }

    static override get properties(): PropertyDeclarations {
        return {
            formData: { state: true },
        };
    }

    private procedureOpties: SelectOption[] = [
        { label: 'Standaard', value: 'standaard' },
        { label: 'Strikt (vereist code "ABC-123")', value: 'strikt' },
    ];

    override render() {
        return html\`
            <form class="vl-form" @submit=\${this.onSubmit} @reset=\${this.onReset}>
                <div class="vl-grid">
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="procedure" label="Procedure *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-select
                            id="procedure"
                            name="procedure"
                            block
                            required
                            placeholder="Kies een procedure"
                            .options=\${this.procedureOpties}
                        ></vl-select>
                        <vl-form-message for="procedure" state="valueMissing"
                            >Gelieve een procedure te kiezen.</vl-form-message
                        >
                    </div>
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="code" label="Code *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-input-field-with-cross-validator
                            id="code"
                            name="code"
                            block
                            required
                        ></vl-input-field-with-cross-validator>
                        <vl-form-message for="code" state="valueMissing"
                            >Gelieve een code in te vullen.</vl-form-message
                        >
                        <vl-form-message for="code" state="customError"
                            >Bij de strikte procedure moet de code 'ABC-123' zijn.</vl-form-message
                        >
                    </div>
                    <div class="vl-column vl-column--8 vl-column--start-5">
                        <div class="form-buttons">
                            <vl-button type="submit">Verstuur</vl-button>
                            <vl-button type="reset" secondary>Reset</vl-button>
                        </div>
                    </div>
                </div>
            </form>
            \${this.formData ? html\`<pre>\${JSON.stringify(this.formData, null, 2)}</pre>\` : ''}
        \`;
    }

    private onSubmit(e: Event) {
        e.preventDefault();
        this.formData = parseFormData(e.target as HTMLFormElement);
    }

    private onReset() {
        this.formData = null;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-input-field-with-cross-validator': VlInputFieldWithCrossValidatorComponent;
        'vl-form-cross-validation': VlFormCrossValidationComponent;
    }
}
`,u=`import { registerWebComponents, webComponent } from '@domg-wc/common';
import { vlGridStyles, vlLegacyStyles } from '@domg-wc/styles';
import { VlButtonComponent } from '@domg-wc/components/atom';
import {
    VlFormMessageComponent,
    VlFormLabelComponent,
    VlInputFieldComponent,
    CrossValidationMixin,
    type ValidatorWithDeps,
} from '@domg-wc/components/form';
import { css, CSSResult, html, LitElement } from 'lit';

@webComponent('vl-input-field-with-match-validator')
export class VlInputFieldWithMatchValidatorComponent extends CrossValidationMixin(VlInputFieldComponent) {
    static override formControlValidators: ValidatorWithDeps[] = [
        ...VlInputFieldComponent.formControlValidators,
        {
            key: 'customError',
            message: 'De e-mailadressen komen niet overeen.',
            dependencySelectors: ['#email'],
            isValid(instance: HTMLElement, value: string): boolean {
                if (!value) return true;

                const form = (instance as HTMLElement & { form: HTMLFormElement | null }).form;
                if (!form) return true;

                const email = form.querySelector<HTMLElement & { value: string }>('#email')?.value;
                return value === email;
            },
        },
    ];
}

@webComponent('vl-form-cross-validation-match')
export class VlFormCrossValidationMatchComponent extends LitElement {
    static {
        registerWebComponents([
            VlInputFieldWithMatchValidatorComponent,
            VlFormLabelComponent,
            VlFormMessageComponent,
            VlInputFieldComponent,
            VlButtonComponent,
        ]);
    }

    static override get styles(): (CSSResult | CSSResult[])[] {
        return [
            vlLegacyStyles,
            vlGridStyles,
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
            <form class="vl-form" @submit=\${this.onSubmit}>
                <div class="vl-grid">
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="email" label="E-mailadres *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-input-field id="email" name="email" block required></vl-input-field>
                        <vl-form-message for="email" state="valueMissing"
                            >Gelieve een e-mailadres in te vullen.</vl-form-message
                        >
                    </div>
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="bevestig-email" label="Bevestig e-mailadres *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-input-field-with-match-validator
                            id="bevestig-email"
                            name="bevestigEmail"
                            block
                            required
                        ></vl-input-field-with-match-validator>
                        <vl-form-message for="bevestig-email" state="valueMissing"
                            >Gelieve het e-mailadres te bevestigen.</vl-form-message
                        >
                        <vl-form-message for="bevestig-email" state="customError"
                            >De e-mailadressen komen niet overeen.</vl-form-message
                        >
                    </div>
                    <div class="vl-column vl-column--8 vl-column--start-5">
                        <div class="form-buttons">
                            <vl-button type="submit">Verstuur</vl-button>
                            <vl-button type="reset" secondary>Reset</vl-button>
                        </div>
                    </div>
                </div>
            </form>
        \`;
    }

    private onSubmit(e: Event) {
        e.preventDefault();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-input-field-with-match-validator': VlInputFieldWithMatchValidatorComponent;
        'vl-form-cross-validation-match': VlFormCrossValidationMatchComponent;
    }
}
`,p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
import { vlGridStyles, vlLegacyStyles } from '@domg-wc/styles';
import { VlButtonComponent } from '@domg-wc/components/atom';
import {
    VlFormMessageComponent,
    VlFormLabelComponent,
    VlInputFieldComponent,
    VlSelectComponent,
    type SelectOption,
    CrossValidationMixin,
    type ValidatorWithDeps,
} from '@domg-wc/components/form';
import { css, CSSResult, html, LitElement, PropertyDeclarations } from 'lit';

@webComponent('vl-input-field-with-conditional-validator')
export class VlInputFieldWithConditionalValidatorComponent extends CrossValidationMixin(VlInputFieldComponent) {
    static override formControlValidators: ValidatorWithDeps[] = [
        ...VlInputFieldComponent.formControlValidators,
        {
            key: 'customError',
            message: 'Gelieve de reden te verduidelijken.',
            dependencySelectors: ['#reden'],
            isValid(instance: HTMLElement, value: string): boolean {
                const form = (instance as HTMLElement & { form: HTMLFormElement | null }).form;
                if (!form) return true;

                const reden = form.querySelector<HTMLElement & { value: string }>('#reden')?.value;
                if (reden !== 'andere') return true;

                return !!value;
            },
        },
    ];
}

@webComponent('vl-form-cross-validation-conditional')
export class VlFormCrossValidationConditionalComponent extends LitElement {
    private reden = '';

    static {
        registerWebComponents([
            VlInputFieldWithConditionalValidatorComponent,
            VlFormLabelComponent,
            VlFormMessageComponent,
            VlSelectComponent,
            VlButtonComponent,
        ]);
    }

    static override get styles(): (CSSResult | CSSResult[])[] {
        return [
            vlLegacyStyles,
            vlGridStyles,
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

    static override get properties(): PropertyDeclarations {
        return {
            reden: { type: String, state: true },
        };
    }

    private redenOpties: SelectOption[] = [
        { label: 'Verlenging', value: 'verlenging' },
        { label: 'Andere', value: 'andere' },
    ];

    private get verduidelijkingVerplicht(): boolean {
        return this.reden === 'andere';
    }

    override render() {
        return html\`
            <form class="vl-form" @submit=\${this.onSubmit} @reset=\${this.onReset} @vl-change=\${this.onChange}>
                <div class="vl-grid">
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="reden" label="Reden aanvraag *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-select
                            id="reden"
                            name="reden"
                            block
                            required
                            placeholder="Kies een reden"
                            .options=\${this.redenOpties}
                        ></vl-select>
                        <vl-form-message for="reden" state="valueMissing">Gelieve een reden te kiezen.</vl-form-message>
                    </div>
                    <div class="vl-column vl-column--4">
                        <vl-form-label
                            for="verduidelijking"
                            label=\${this.verduidelijkingVerplicht ? 'Verduidelijking *' : 'Verduidelijking'}
                            block
                        ></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-input-field-with-conditional-validator
                            id="verduidelijking"
                            name="verduidelijking"
                            block
                        ></vl-input-field-with-conditional-validator>
                        <vl-form-message for="verduidelijking" state="customError"
                            >Gelieve de reden te verduidelijken.</vl-form-message
                        >
                    </div>
                    <div class="vl-column vl-column--8 vl-column--start-5">
                        <div class="form-buttons">
                            <vl-button type="submit">Verstuur</vl-button>
                            <vl-button type="reset" secondary>Reset</vl-button>
                        </div>
                    </div>
                </div>
            </form>
        \`;
    }

    private onSubmit(e: Event) {
        e.preventDefault();
    }

    private onReset() {
        this.reden = '';
    }

    private onChange() {
        this.reden = this.shadowRoot?.querySelector<HTMLElement & { value: string }>('#reden')?.value ?? '';
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-input-field-with-conditional-validator': VlInputFieldWithConditionalValidatorComponent;
        'vl-form-cross-validation-conditional': VlFormCrossValidationConditionalComponent;
    }
}
`;function l(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:s}),`
`,e.jsx(t.h1,{id:"formulier---cross-validatie",children:"Formulier - Cross-Validatie"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["Bouwt verder op ",e.jsx(t.a,{href:"/docs/patronen-formulier-validatie--documentatie",children:"Formulier - Validatie"}),` en
`,e.jsx(t.a,{href:"/docs/patronen-formulier-aangepaste-validatie--documentatie",children:"Formulier - Aangepaste Validatie"}),`. Hoe je een custom
validator schrijft en een `,e.jsx(t.code,{children:"vl-form-message"}),` koppelt staat daar beschreven; hier komt enkel de afhankelijkheid van een
`,e.jsx(t.strong,{children:"ander veld"})," aan bod."]}),`
`]}),`
`,e.jsx(t.p,{children:`Soms hangt de geldigheid van een veld af van de waarde van een ander veld in hetzelfde formulier: een code die enkel
bij een bepaalde procedure geldt, een bevestigingsveld dat moet overeenkomen, een veld dat enkel verplicht is bij een
bepaalde keuze.`}),`
`,e.jsxs(t.p,{children:[`Vormen de velden samen één waarde, zoals een coördinaat of een getal met eenheid? Dan is
`,e.jsx(t.a,{href:"/docs/patronen-formulier-samengesteld-veld--documentatie",children:"Formulier - Samengesteld veld"}),` het patroon dat je
zoekt: daar heeft de groep één geldigheid en één melding.`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"CrossValidationMixin"})," is een mixin ",e.jsx(t.strong,{children:"uit de bibliotheek"})," (",e.jsx(t.code,{children:"@domg-wc/components/form"}),`): hij luistert naar wijzigingen
op de velden waarvan je validator afhangt, en hervalideert je veld zodra een daarvan verandert.`]}),`
`,e.jsx(t.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`import { CrossValidationMixin, type ValidatorWithDeps } from '@domg-wc/components/form';
`})}),`
`,e.jsxs(t.p,{children:["Je schrijft een validator met ",e.jsx(t.code,{children:"dependencySelectors"}),`, en wrapt de form control waarop je hem toepast in de mixin. Het
`,e.jsx(t.code,{children:"instance"})," argument in de validator is het host element van die control: via ",e.jsx(t.code,{children:"instance.form"}),` bereik je het native
`,e.jsx(t.code,{children:"HTMLFormElement"}),", en dus elk ander veld via ",e.jsx(t.code,{children:"querySelector"}),"."]}),`
`,e.jsxs(t.p,{children:["Als voorbeeld een code-veld dat exact ",e.jsx(t.code,{children:"ABC-123"})," moet zijn, maar enkel wanneer de procedure ",e.jsx(t.strong,{children:"Strikt"})," is."]}),`
`,e.jsx(t.h3,{id:"1-de-validator",children:"1. De validator"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`const crossFieldValidator: ValidatorWithDeps = {
    key: 'customError',
    message: \`Bij de strikte procedure moet de code 'ABC-123' zijn.\`,
    dependencySelectors: ['#procedure'],
    isValid(instance: HTMLElement, value: string): boolean {
        if (!value) return true;

        const form = (instance as HTMLElement & { form: HTMLFormElement | null }).form;
        if (!form) return true;

        const procedure = form.querySelector<HTMLElement & { value: string }>('#procedure')?.value;
        return procedure !== 'strikt' || value === 'ABC-123';
    },
};
`})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"ValidatorWithDeps"})," is de gewone ",e.jsx(t.code,{children:"Validator"})," van ",e.jsx(t.code,{children:"@open-wc/form-control"}),", uitgebreid met ",e.jsx(t.code,{children:"dependencySelectors"}),`. Typeer
er zowel je validator als de `,e.jsx(t.code,{children:"formControlValidators"}),` array mee. Laat je de annotatie weg, dan leidt TypeScript het
letterlijke object-type af in plaats van `,e.jsx(t.code,{children:"Validator"}),`, en faalt de override van de statische array met
`,e.jsx(t.code,{children:"TS2417: Class static side incorrectly extends base class static side"}),"."]}),`
`,e.jsx(t.h3,{id:"2-het-component",children:"2. Het component"}),`
`,e.jsxs(t.p,{children:["Net als bij ",e.jsx(t.a,{href:"/docs/patronen-formulier-aangepaste-validatie--documentatie",children:"aangepaste validatie"}),` maak je per validator
een nieuw component. Wrap de form control daarbij in de `,e.jsx(t.code,{children:"CrossValidationMixin"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`import { webComponent } from '@domg-wc/common';
import { CrossValidationMixin, VlInputFieldComponent, type ValidatorWithDeps } from '@domg-wc/components/form';

@webComponent('vl-input-field-with-cross-validator')
export class VlInputFieldWithCrossValidatorComponent extends CrossValidationMixin(VlInputFieldComponent) {
    static override formControlValidators: ValidatorWithDeps[] = [
        ...VlInputFieldComponent.formControlValidators,
        crossFieldValidator,
    ];
}
`})}),`
`,e.jsx(t.h3,{id:"3-de-foutmelding",children:"3. De foutmelding"}),`
`,e.jsxs(t.p,{children:["Gebruik het nieuwe component in plaats van ",e.jsx(t.code,{children:"vl-input-field"}),", met de foutmelding in een ",e.jsx(t.code,{children:"vl-form-message"}),` met
`,e.jsx(t.code,{children:'state="customError"'}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-select id="procedure" name="procedure" ...></vl-select>

<vl-input-field-with-cross-validator id="code" name="code" block required></vl-input-field-with-cross-validator>
<vl-form-message for="code" state="customError">
    Bij de strikte procedure moet de code 'ABC-123' zijn.
</vl-form-message>
`})}),`
`,e.jsx(t.h2,{id:"aandachtspunten",children:"Aandachtspunten"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsxs(t.strong,{children:["Combineer met een gewone custom validatie in één ",e.jsx(t.code,{children:"isValid"}),"."]})," Er is maar één ",e.jsx(t.code,{children:"customError"}),` per form control
beschikbaar, dus twee losse validators op hetzelfde veld gaan niet. Zie
`,e.jsx(t.a,{href:"/docs/patronen-formulier-aangepaste-validatie--documentatie",children:"Formulier - Aangepaste Validatie"})," voor de reden."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Submit-validatie."}),` De foutmelding verschijnt bij het verzenden en verdwijnt zodra het veld terug geldig wordt, ook
wanneer dat door een wijziging in een afhankelijk veld komt. Er wordt bewust geen valid-boodschap getoond. Wil je
validatie al tijdens het invullen tonen, combineer dit dan met het `,e.jsx(t.code,{children:"blur-validation"}),` attribuut, zie
`,e.jsx(t.a,{href:"/docs/patronen-formulier-blur-validatie--documentatie",children:"Formulier - Blur-validatie"}),"."]}),`
`]}),`
`,e.jsx(t.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(t.p,{children:"De componenten hieronder zijn geen bibliotheekcode: het zijn patronen die je overneemt in je eigen project."}),`
`,e.jsxs(t.p,{children:["Kies ",e.jsx(t.strong,{children:"Strikt"})," en verzend een willekeurige code: je krijgt een foutmelding. Wissel daarna naar ",e.jsx(t.strong,{children:"Standaard"}),` en ze
verdwijnt meteen, zonder opnieuw te verzenden. De ingediende form data wordt onderaan geprint via de
`,e.jsx(t.a,{href:"/docs/patronen-formulier-form-data--documentatie",children:"parseFormData"})," helper."]}),`
`,e.jsx(o,{of:d,sourceState:"none"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Volledige demo-component"}),e.jsx(r,{code:v,language:"ts",dark:!0})]}),`
`,e.jsx(t.h3,{id:"twee-velden-die-moeten-overeenkomen",children:"Twee velden die moeten overeenkomen"}),`
`,e.jsxs(t.p,{children:["Een bevestigingsveld dat gelijk moet zijn aan het eerste veld, via ",e.jsx(t.code,{children:"dependencySelectors: ['#email']"}),"."]}),`
`,e.jsx(o,{of:m,sourceState:"none"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Volledige demo-component"}),e.jsx(r,{code:u,language:"ts",dark:!0})]}),`
`,e.jsx(t.h3,{id:"conditioneel-verplicht-veld",children:"Conditioneel verplicht veld"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Verduidelijking"})," is enkel verplicht wanneer de reden ",e.jsx(t.strong,{children:"Andere"})," is. Het veld heeft zelf geen ",e.jsx(t.code,{children:"required"}),` attribuut: de
validator beslist op basis van het reden-veld en hervalideert via `,e.jsx(t.code,{children:"dependencySelectors: ['#reden']"}),". Bij ",e.jsx(t.strong,{children:"Andere"}),`
markeert het label het veld als verplicht.`]}),`
`,e.jsx(o,{of:c,sourceState:"none"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Volledige demo-component"}),e.jsx(r,{code:p,language:"ts",dark:!0})]})]})}function W(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{W as default};
