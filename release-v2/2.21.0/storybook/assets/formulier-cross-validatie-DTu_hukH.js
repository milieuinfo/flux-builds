import{u as l,j as e,M as a,C as o,S as r}from"./iframe-CsVpDM3d.js";import{f as s,F as d,a as m,b as c}from"./formulier-cross-validatie.stories-D60sR-9Z.js";import"./preload-helper-PPVm8Dsz.js";import"./vl-form-data.component-Dc2rBR0V.js";import"./vl-checkbox.component-dwTM-Wy8.js";import"./vl-datepicker.component-C2EPt_Iw.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-D3SniA08.js";import"./vl-input-field-masked.component-Bp81wQF6.js";import"./vl-radio.component-Dq4icxGt.js";import"./vl-radio-group.component-zNwhQE1k.js";import"./vl-select.component-13WHQuOs.js";import"./vl-select-rich.component-CEJRQQv1.js";import"./vl-textarea.component-DW_fGO92.js";import"./vl-textarea-rich.component-CXyX5T1n.js";import"./vl-upload.component-CJwCXL7V.js";import"./vl-upload-progress.component-cmZSzeBu.js";const v=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
} from '@domg-wc/components/form';
import { css, CSSResult, html, LitElement, PropertyDeclarations } from 'lit';

@webComponent('vl-form-cross-validation-conditional')
export class VlFormCrossValidationConditionalComponent extends LitElement {
    private reden = '';

    static {
        registerWebComponents([
            VlInputFieldComponent,
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
                        <vl-input-field
                            id="verduidelijking"
                            name="verduidelijking"
                            block
                            ?required=\${this.verduidelijkingVerplicht}
                        ></vl-input-field>
                        <vl-form-message for="verduidelijking" state="valueMissing"
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
        'vl-form-cross-validation-conditional': VlFormCrossValidationConditionalComponent;
    }
}
`;function i(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:s}),`
`,e.jsx(n.h1,{id:"formulier---cross-validatie",children:"Formulier - Cross-Validatie"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Bouwt verder op ",e.jsx(n.a,{href:"/docs/patronen-formulier-validatie--documentatie",children:"Formulier - Validatie"}),` en
`,e.jsx(n.a,{href:"/docs/patronen-formulier-aangepaste-validatie--documentatie",children:"Formulier - Aangepaste Validatie"}),`. Hoe je een custom
validator schrijft en een `,e.jsx(n.code,{children:"vl-form-message"}),` koppelt staat daar beschreven; hier komt enkel de afhankelijkheid van een
`,e.jsx(n.strong,{children:"ander veld"})," aan bod."]}),`
`]}),`
`,e.jsx(n.p,{children:`Soms hangt de geldigheid van een veld af van de waarde van een ander veld in hetzelfde formulier: een code die enkel
bij een bepaalde procedure geldt, een bevestigingsveld dat moet overeenkomen.`}),`
`,e.jsxs(n.p,{children:[`Vormen de velden samen één waarde, zoals een coördinaat of een getal met eenheid? Dan is
`,e.jsx(n.a,{href:"/docs/patronen-formulier-samengesteld-veld--documentatie",children:"Formulier - Samengesteld veld"}),` het patroon dat je
zoekt: daar heeft de groep één geldigheid en één melding.`]}),`
`,e.jsxs(n.p,{children:[`Wordt een veld enkel verplicht door de keuze in een ander veld? Dan heb je deze mixin niet nodig: bind het native
`,e.jsx(n.code,{children:"required"})," attribuut aan die keuze. Het voorbeeld onderaan toont hoe."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"CrossValidationMixin"})," is een mixin ",e.jsx(n.strong,{children:"uit de bibliotheek"})," (",e.jsx(n.code,{children:"@domg-wc/components/form"}),`): hij luistert naar wijzigingen
op de velden waarvan je validator afhangt, en hervalideert je veld zodra een daarvan verandert.`]}),`
`,e.jsx(n.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { CrossValidationMixin, type ValidatorWithDeps } from '@domg-wc/components/form';
`})}),`
`,e.jsxs(n.p,{children:["Je schrijft een validator met ",e.jsx(n.code,{children:"dependencySelectors"}),`, en wrapt de form control waarop je hem toepast in de mixin. Het
`,e.jsx(n.code,{children:"instance"})," argument in de validator is het host element van die control: via ",e.jsx(n.code,{children:"instance.form"}),` bereik je het native
`,e.jsx(n.code,{children:"HTMLFormElement"}),", en dus elk ander veld via ",e.jsx(n.code,{children:"querySelector"}),"."]}),`
`,e.jsxs(n.p,{children:["Als voorbeeld een code-veld dat exact ",e.jsx(n.code,{children:"ABC-123"})," moet zijn, maar enkel wanneer de procedure ",e.jsx(n.strong,{children:"Strikt"})," is."]}),`
`,e.jsx(n.h3,{id:"1-de-validator",children:"1. De validator"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const crossFieldValidator: ValidatorWithDeps = {
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
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ValidatorWithDeps"})," is de gewone ",e.jsx(n.code,{children:"Validator"})," van ",e.jsx(n.code,{children:"@open-wc/form-control"}),", uitgebreid met ",e.jsx(n.code,{children:"dependencySelectors"}),`. Typeer
er zowel je validator als de `,e.jsx(n.code,{children:"formControlValidators"}),` array mee. Laat je de annotatie weg, dan leidt TypeScript het
letterlijke object-type af in plaats van `,e.jsx(n.code,{children:"Validator"}),`, en faalt de override van de statische array met
`,e.jsx(n.code,{children:"TS2417: Class static side incorrectly extends base class static side"}),"."]}),`
`,e.jsx(n.h3,{id:"2-het-component",children:"2. Het component"}),`
`,e.jsxs(n.p,{children:["Net als bij ",e.jsx(n.a,{href:"/docs/patronen-formulier-aangepaste-validatie--documentatie",children:"aangepaste validatie"}),` maak je per validator
een nieuw component. Wrap de form control daarbij in de `,e.jsx(n.code,{children:"CrossValidationMixin"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { webComponent } from '@domg-wc/common';
import { CrossValidationMixin, VlInputFieldComponent, type ValidatorWithDeps } from '@domg-wc/components/form';

@webComponent('vl-input-field-with-cross-validator')
export class VlInputFieldWithCrossValidatorComponent extends CrossValidationMixin(VlInputFieldComponent) {
    static override formControlValidators: ValidatorWithDeps[] = [
        ...VlInputFieldComponent.formControlValidators,
        crossFieldValidator,
    ];
}
`})}),`
`,e.jsx(n.h3,{id:"3-de-foutmelding",children:"3. De foutmelding"}),`
`,e.jsxs(n.p,{children:["Gebruik het nieuwe component in plaats van ",e.jsx(n.code,{children:"vl-input-field"}),", met de foutmelding in een ",e.jsx(n.code,{children:"vl-form-message"}),` met
`,e.jsx(n.code,{children:'state="customError"'}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-select id="procedure" name="procedure" ...></vl-select>

<vl-input-field-with-cross-validator id="code" name="code" block required></vl-input-field-with-cross-validator>
<vl-form-message for="code" state="customError">
    Bij de strikte procedure moet de code 'ABC-123' zijn.
</vl-form-message>
`})}),`
`,e.jsx(n.h2,{id:"aandachtspunten",children:"Aandachtspunten"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Combineer met een gewone custom validatie in één ",e.jsx(n.code,{children:"isValid"}),"."]})," Er is maar één ",e.jsx(n.code,{children:"customError"}),` per form control
beschikbaar, dus twee losse validators op hetzelfde veld gaan niet. Zie
`,e.jsx(n.a,{href:"/docs/patronen-formulier-aangepaste-validatie--documentatie",children:"Formulier - Aangepaste Validatie"})," voor de reden."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Submit-validatie."}),` De foutmelding verschijnt bij het verzenden en verdwijnt zodra het veld terug geldig wordt, ook
wanneer dat door een wijziging in een afhankelijk veld komt. Er wordt bewust geen valid-boodschap getoond. Wil je
validatie al tijdens het invullen tonen, combineer dit dan met het `,e.jsx(n.code,{children:"blur-validation"}),` attribuut, zie
`,e.jsx(n.a,{href:"/docs/patronen-formulier-blur-validatie--documentatie",children:"Formulier - Blur-validatie"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.p,{children:"De componenten hieronder zijn geen bibliotheekcode: het zijn patronen die je overneemt in je eigen project."}),`
`,e.jsxs(n.p,{children:["Kies ",e.jsx(n.strong,{children:"Strikt"})," en verzend een willekeurige code: je krijgt een foutmelding. Wissel daarna naar ",e.jsx(n.strong,{children:"Standaard"}),` en ze
verdwijnt meteen, zonder opnieuw te verzenden. De ingediende form data wordt onderaan geprint via de
`,e.jsx(n.a,{href:"/docs/patronen-formulier-form-data--documentatie",children:"parseFormData"})," helper."]}),`
`,e.jsx(o,{of:d,sourceState:"none"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Volledige demo-component"}),e.jsx(r,{code:v,language:"ts",dark:!0})]}),`
`,e.jsx(n.h3,{id:"twee-velden-die-moeten-overeenkomen",children:"Twee velden die moeten overeenkomen"}),`
`,e.jsxs(n.p,{children:["Een bevestigingsveld dat gelijk moet zijn aan het eerste veld, via ",e.jsx(n.code,{children:"dependencySelectors: ['#email']"}),"."]}),`
`,e.jsx(o,{of:m,sourceState:"none"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Volledige demo-component"}),e.jsx(r,{code:u,language:"ts",dark:!0})]}),`
`,e.jsx(n.h3,{id:"conditioneel-verplicht-veld",children:"Conditioneel verplicht veld"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Verduidelijking"})," is enkel verplicht wanneer de reden ",e.jsx(n.strong,{children:"Andere"}),` is. Dit voorbeeld staat hier als tegenvoorbeeld: het
heeft `,e.jsx(n.code,{children:"CrossValidationMixin"})," niet nodig. Het veld bindt het native ",e.jsx(n.code,{children:"required"})," attribuut aan de keuze in het reden-veld."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`<vl-input-field
    id="verduidelijking"
    name="verduidelijking"
    block
    ?required=\${this.verduidelijkingVerplicht}
></vl-input-field>
<vl-form-message for="verduidelijking" state="valueMissing">Gelieve de reden te verduidelijken.</vl-form-message>
`})}),`
`,e.jsxs(n.p,{children:["Wijzigt ",e.jsx(n.code,{children:"reden"}),`, dan rendert de parent opnieuw en wijzigt het attribuut. De form control hervalideert daarop vanzelf,
want `,e.jsx(n.code,{children:"required"})," hoort bij de ingebouwde ",e.jsx(n.code,{children:"valueMissing"})," validatie, en daar hangt ook de melding aan. Bij ",e.jsx(n.strong,{children:"Andere"}),`
markeert het label het veld als verplicht en kondigt de screenreader het als verplicht aan, omdat het native attribuut
er dan staat.`]}),`
`,e.jsx(o,{of:c,sourceState:"none"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Volledige demo-component"}),e.jsx(r,{code:p,language:"ts",dark:!0})]})]})}function z(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{z as default};
