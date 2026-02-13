import{u as n,j as e,M as a,C as i,S as l}from"./iframe-FlvNZLqI.js";import{f as s,C as m}from"./form-custom-validation.stories-D709FlmA.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-form-data.component-BYrvHNE3.js";import"./vl-checkbox.component-O-6c3-uw.js";import"./vl-datepicker.component-DI-MKEnX.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-DeeFbOFG.js";import"./vl-input-field-masked.component-D8PAcClr.js";import"./vl-radio.component-BnTiVhkS.js";import"./vl-radio-group.component-DtZQv1s3.js";import"./vl-select.component-BzFfrDA1.js";import"./vl-select-rich.component-C8ulU5S-.js";import"./vl-textarea.component-CyGK04gO.js";import"./vl-textarea-rich.component-DleGgzbo.js";import"./vl-upload.component-BjH8U9s-.js";import"./vl-upload-progress.component-Cito6jKU.js";const d=`import { registerWebComponents, webComponent } from '@domg-wc/common';
import { vlGridStyles, vlLegacyStyles } from '@domg-wc/styles';
import { VlButtonComponent } from '@domg-wc/components/atom';
import { VlFormMessageComponent, VlFormLabelComponent, VlInputFieldComponent } from '@domg-wc/components/form';
import { Validator } from '@open-wc/form-control';
import { css, CSSResult, html, LitElement, PropertyDeclarations } from 'lit';

const fooValidator: Validator = {
    key: 'customError',
    message: \`Value does not equal 'foo'\`,
    isValid(_instance: HTMLElement, value: string): boolean {
        if (!value) {
            return true;
        }

        if (value !== 'foo') {
            return false;
        }

        return true;
    },
};

@webComponent('vl-input-field-with-foo-validator')
export class VlInputFieldWithFooValidatorComponent extends VlInputFieldComponent {
    static override formControlValidators = [...VlInputFieldComponent.formControlValidators, fooValidator];
}

@webComponent('vl-form-custom-validation')
export class VlFormCustomValidationComponent extends LitElement {
    private success = false;

    static {
        registerWebComponents([
            VlInputFieldWithFooValidatorComponent,
            VlFormLabelComponent,
            VlFormMessageComponent,
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
            success: { type: Boolean, state: true },
        };
    }

    override render() {
        return html\`
            <form class="vl-form" @submit=\${this.onSubmit} @reset=\${this.onReset}>
                <div class="vl-grid">
                    <div class="vl-column vl-column--4">
                        <vl-form-label for="waarde" label="Waarde *" block></vl-form-label>
                    </div>
                    <div class="vl-column vl-column--8">
                        <vl-input-field-with-foo-validator
                            id="waarde"
                            name="waarde"
                            block
                            required
                            ?success=\${this.success}
                            @invalid=\${() => {
                                this.success = false;
                            }}
                        ></vl-input-field-with-foo-validator>
                        <vl-form-message for="waarde" state="valueMissing"
                            >Gelieve een waarde in te vullen.</vl-form-message
                        >
                        <vl-form-message for="waarde" state="customError"
                            >Gelieve 'foo' als waarde in te vullen.</vl-form-message
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
        this.success = true;
    }

    private onReset() {
        this.success = false;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-input-field-with-foo-validator': VlInputFieldWithFooValidatorComponent;
        'vl-form-custom-validation': VlFormCustomValidationComponent;
    }
}
`;function r(t){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:s}),`
`,e.jsx(o.h1,{id:"form---custom-validatie",children:"Form - Custom Validatie"}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",e.jsx(o.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),`
`]}),`
`,e.jsxs(o.p,{children:["Om gebruik te maken van custom validatie moet je een nieuwe component maken dat overerft van één van onze form controls.",e.jsx("br",{}),`
Aan dit component kan je je custom validator toevoegen. Via de `,e.jsx(o.code,{children:"customError"})," ValidityState key kan je een error message linken aan je custom validator."]}),`
`,e.jsx(o.h2,{id:"extra-informatie",children:"Extra informatie"}),`
`,e.jsxs(o.p,{children:["Het is nodig om een custom component te maken voor elke custom validator die je wil toevoegen:",e.jsx("br",{})]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["De validators worden toegevoegd op de form controls d.m.v. een statische array. Dit betekent dat als je een custom validator toevoegt aan een form control, deze validator zal toegevoegd worden aan alle form controls van dit type.",e.jsx("br",{})]}),`
`,e.jsxs(o.li,{children:["De form controls maken gebruik van de ",e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ValidityState",rel:"nofollow",children:"ValidityState interface"})," waardoor er maximum 1 custom validator toegevoegd kan worden aan een form control.",e.jsx("br",{}),`
Bij het toevoegen van een 2de custom validator zal de eerste custom validator overschreven worden.`,e.jsx("br",{})]}),`
`]}),`
`,e.jsx(o.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(i,{of:m,sourceState:"none"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(l,{code:d,language:"ts",dark:!0})]})]})}function M(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(r,{...t})}):r(t)}export{M as default};
