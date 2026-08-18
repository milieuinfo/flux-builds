import{bx as u,ci as h,i as x,$ as b,br as d,cj as p,ck as m,bs as g,T as t,F as f,ch as C,x as v,w as y}from"./iframe-COmpMQdF.js";const w=`:host {
    /* Font sizing (62.5% = 10px base for rem calculations) */
    font-size: 62.5%;

    /* Padding */
    --vl-textarea--padding: 1rem;

    /* Margin */
    --vl-textarea--margin: 0.5rem 0;

    /* Character counter */
    --vl-textarea--counter-color: var(--vl-color--text-alt);
}
`,$=x`
    ${u(w)}

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

    /* ===================================================================
       Textarea Character Counter
       =================================================================== */

    .vl-textarea__counter {
        font-family: var(--vl-font);
        font-size: var(--vl-font-size--small);
        color: var(--vl-textarea--counter-color);
    }

    .vl-textarea__counter-status {
        ${h()};
    }
`,r={...b,block:!1,readonly:!1,characterCount:!1,value:"",placeholder:"",autocomplete:"",minLength:null,maxLength:null,rows:null,cols:null};var k=Object.getOwnPropertyDescriptor,V=(e,a,o,n)=>{for(var l=n>1?void 0:n?k(a,o):a,s=e.length-1,c;s>=0;s--)(c=e[s])&&(l=c(l)||l);return l};const L=10;let i=class extends d{constructor(){super(...arguments),this.block=r.block,this.readonly=r.readonly,this.characterCount=r.characterCount,this.value=r.value,this.placeholder=r.placeholder,this.autocomplete=r.autocomplete,this.minLength=r.minLength,this.maxLength=r.maxLength,this.rows=r.rows,this.cols=r.cols,this.submitFormOnEnter=!1,this.initialValue="",this.dispatchInput=!1}static get styles(){return[g,$]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},characterCount:{type:Boolean,attribute:"character-count"},value:{type:String,reflect:!0},placeholder:{type:String},autocomplete:{type:String},minLength:{type:Number,attribute:"min-length"},maxLength:{type:Number,attribute:"max-length"},rows:{type:Number},cols:{type:Number}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value)}updated(e){if(super.updated(e),e.has("value")){const a={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:a})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:a})),this.dispatchInput=!1),this.dispatchEventIfValid(a)}}render(){const e={"vl-textarea":!0,"vl-textarea--disabled":this.disabled,"vl-textarea--error":this.isInvalid||this.error,"vl-textarea--success":this.success,"vl-textarea--block":this.block};return v`
            <textarea
                id=${this.id||t}
                name=${this.name||t}
                class=${f(e)}
                aria-label=${this.label||t}
                aria-invalid=${this.isInvalid||t}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?readonly=${this.readonly}
                .value=${C(this.value)}
                placeholder=${this.placeholder||t}
                autocomplete=${this.autocomplete||t}
                minlength=${this.minLength??t}
                maxlength=${this.maxLength??t}
                rows=${this.rows??t}
                cols=${this.cols??t}
                @input=${this.onInput}
            ></textarea>
            ${this.characterCount&&this.maxLength!=null?this.renderCharacterCount(this.maxLength):t}
        `}renderCharacterCount(e){const a=e-this.value.length,o=a<=L?`Nog ${a} ${a===1?"teken":"tekens"} beschikbaar`:"";return v`
            <div class="vl-textarea__counter" aria-hidden="true">${this.value.length}/${e}</div>
            <div class="vl-textarea__counter-status" aria-live="polite" aria-atomic="true">${o}</div>
        `}get validationTarget(){return this.shadowRoot?.querySelector("textarea")}resetFormControl(){super.resetFormControl(),this.value=this.initialValue}onInput(e){this.dispatchInput=!0,this.value=e?.target?.value}};i.formControlValidators=[...d.formControlValidators,p,m];i=V([y("vl-textarea")],i);export{i as V,r as t};
