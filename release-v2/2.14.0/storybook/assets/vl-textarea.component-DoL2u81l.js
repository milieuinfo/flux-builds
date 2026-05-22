import{by as c,i as u,$ as h,bs as v,ch as x,ci as b,bt as p,T as e,F as m,cg as g,x as f,w}from"./iframe-D9dm7PbY.js";const y=`:host {
    /* Font sizing (62.5% = 10px base for rem calculations) */
    font-size: 62.5%;

    /* Padding */
    --vl-textarea--padding: 1rem;

    /* Margin */
    --vl-textarea--margin: 0.5rem 0;
}
`,k=u`
    ${c(y)}

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* ===================================================================
       Textarea Base Styles
       =================================================================== */

    .vl-textarea {
        display: inline-block;
        background: var(--vl-color--white);
        font-family: var(--vl-font);
        font-size: var(--vl-font-size--small);
        color: var(--vl-color--text);
        max-width: 100%;
        height: auto;
        line-height: normal;
        border-radius: var(--vl-border--radius);
        border: var(--vl-border--width) solid var(--vl-color--border-alt);
        -webkit-appearance: none;
        padding: var(--vl-textarea--padding);
        transition: background-color var(--vl-transition);
        margin: var(--vl-textarea--margin);
    }

    /* ===================================================================
       Textarea States (Hover, Focus, Placeholder)
       =================================================================== */

    /* Hover state */

    .vl-textarea:hover {
        border: 0.2rem solid var(--vl-color--focus);
        padding: 0.9rem;
    }

    .vl-textarea:hover.vl-textarea--error,
    .vl-textarea:hover.invalid.validated {
        border-color: var(--vl-color--error);
    }

    .vl-textarea:hover.vl-textarea--success,
    .vl-textarea:hover.valid.validated {
        border-color: var(--vl-color--success);
    }

    /* Focus state */

    .vl-textarea:focus,
    .vl-textarea--focus {
        box-shadow: var(--vl-focus--shadow);
        outline: transparent solid 0.2rem;
        border: var(--vl-border--width) solid var(--vl-color--text-alt);
        padding: var(--vl-textarea--padding);
    }

    @supports (outline-offset: 2px) {
        .vl-textarea:focus,
        .vl-textarea--focus {
            box-shadow: none;
            outline: var(--vl-focus--outline);
            outline-offset: var(--vl-focus--outline-offset);
        }
    }

    .vl-textarea:focus.vl-textarea--error,
    .vl-textarea:focus.invalid.validated,
    .vl-textarea--focus.vl-textarea--error,
    .vl-textarea--focus.invalid.validated {
        border-color: var(--vl-color--error);
    }

    .vl-textarea:focus.vl-textarea--success,
    .vl-textarea:focus.valid.validated,
    .vl-textarea--focus.vl-textarea--success,
    .vl-textarea--focus.valid.validated {
        border-color: var(--vl-color--success);
    }

    /* Placeholder */

    .vl-textarea::placeholder {
        color: var(--vl-color--text-alt);
    }

    /* ===================================================================
       Textarea Variants (Block)
       =================================================================== */

    .vl-textarea--block {
        display: block;
        width: 100%;
        box-sizing: border-box;
    }

    /* ===================================================================
       Textarea Validation States (Error, Success)
       =================================================================== */

    /* Error state */

    .vl-textarea--error,
    .vl-textarea.invalid.validated {
        border-color: var(--vl-color--error);
        background-color: var(--vl-color--error-background);
    }

    .vl-textarea--error:focus,
    .vl-textarea.invalid.validated:focus {
        background-color: var(--vl-color--white);
    }

    /* Success state */

    .vl-textarea--success,
    .vl-textarea.valid.validated {
        border-color: var(--vl-color--success);
        background-color: var(--vl-color--success-bg);
        display: inline;
    }

    /* ===================================================================
       Textarea Disabled State
       =================================================================== */

    .vl-textarea--disabled,
    .vl-textarea[disabled] {
        background-color: var(--vl-color--border-alt--background);
        border-color: var(--vl-color--border-alt);
        color: var(--vl-color--text-alt);
    }

    .vl-textarea--disabled:hover,
    .vl-textarea[disabled]:hover {
        border-width: var(--vl-border--width);
        padding: var(--vl-textarea--padding);
    }
`,a={...h,block:!1,readonly:!1,value:"",placeholder:"",autocomplete:"",minLength:null,maxLength:null,rows:null,cols:null};var $=Object.getOwnPropertyDescriptor,C=(t,r,d,i)=>{for(var l=i>1?void 0:i?$(r,d):r,o=t.length-1,n;o>=0;o--)(n=t[o])&&(l=n(l)||l);return l};let s=class extends v{constructor(){super(...arguments),this.block=a.block,this.readonly=a.readonly,this.value=a.value,this.placeholder=a.placeholder,this.autocomplete=a.autocomplete,this.minLength=a.minLength,this.maxLength=a.maxLength,this.rows=a.rows,this.cols=a.cols,this.submitFormOnEnter=!1,this.initialValue="",this.dispatchInput=!1}static get styles(){return[p,k]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},value:{type:String,reflect:!0},placeholder:{type:String},autocomplete:{type:String},minLength:{type:Number,attribute:"min-length"},maxLength:{type:Number,attribute:"max-length"},rows:{type:Number},cols:{type:Number}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value)}updated(t){if(super.updated(t),t.has("value")){const r={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:r})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:r})),this.dispatchInput=!1),this.dispatchEventIfValid(r)}}render(){const t={"vl-textarea":!0,"vl-textarea--disabled":this.disabled,"vl-textarea--error":this.isInvalid||this.error,"vl-textarea--success":this.success,"vl-textarea--block":this.block};return f`
            <textarea
                id=${this.id||e}
                name=${this.name||e}
                class=${m(t)}
                aria-label=${this.label||e}
                aria-invalid=${this.isInvalid||e}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?readonly=${this.readonly}
                .value=${g(this.value)}
                placeholder=${this.placeholder||e}
                autocomplete=${this.autocomplete||e}
                minlength=${this.minLength??e}
                maxlength=${this.maxLength??e}
                rows=${this.rows??e}
                cols=${this.cols??e}
                @input=${this.onInput}
            />
        `}get validationTarget(){return this.shadowRoot?.querySelector("textarea")}resetFormControl(){super.resetFormControl(),this.value=this.initialValue}onInput(t){this.dispatchInput=!0,this.value=t?.target?.value}};s.formControlValidators=[...v.formControlValidators,x,b];s=C([w("vl-textarea")],s);export{s as V,a as t};
