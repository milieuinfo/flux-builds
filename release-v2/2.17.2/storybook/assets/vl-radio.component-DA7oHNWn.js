import{bx as v,i as n,aR as b,B as h,bs as u,F as _,T as t,ch as g,x as p,w as f}from"./iframe-BAEsER5t.js";const k=`:host {
    /* Font sizing (62.5% = 10px base for rem calculations) */
    font-size: 62.5%;

    /* Circle */
    --vl-radio--circle-size: 1.8rem;

    /* Dot */
    --vl-radio--dot-size: 0.6rem;

    /* Label */
    --vl-radio--label-padding-left: 2.4rem;
}
`,m=n`
    ${v(k)}

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* ===================================================================
       Visually Hidden Input
       =================================================================== */

    .vl-radio__toggle {
        position: absolute;
        overflow: hidden;
        clip: rect(0 0 0 0);
        width: 0.1rem;
        height: 0.1rem;
        padding: 0;
        margin: -0.1rem;
    }

    /* ===================================================================
       Radio Base Styles
       =================================================================== */

    .vl-radio {
        position: relative;
        display: inline-block;
        margin-top: 0.2rem;
        margin-right: 5rem;
    }

    .vl-radio:not(.vl-radio--block):not(:last-of-type) {
        margin-right: 1.5rem;
    }

    /* ===================================================================
       Radio Label & Pseudo-Elements
       =================================================================== */

    .vl-radio__label {
        position: relative;
        padding: 0 0 0 var(--vl-radio--label-padding-left);
        line-height: 2.8rem;
        font-size: var(--vl-font-size--small);
    }

    .vl-radio__label::before,
    .vl-radio__label::after {
        position: absolute;
        display: block;
        content: '';
        cursor: pointer;
        border-radius: 100%;
    }

    /* Inner dot */

    .vl-radio__label::before {
        background-color: var(--vl-color--white);
        width: var(--vl-radio--dot-size);
        height: var(--vl-radio--dot-size);
        top: 1rem;
        left: 0.6rem;
        transform: scale(0);
        transition: border-color var(--vl-transition);
        z-index: 2;
    }

    /* Outer circle */

    .vl-radio__label::after {
        background-color: var(--vl-color--white);
        width: var(--vl-radio--circle-size);
        height: var(--vl-radio--circle-size);
        top: 0.4rem;
        left: 0;
        border: var(--vl-border--width) solid var(--vl-color--border-alt);
        text-indent: 100%;
        overflow: hidden;
        white-space: nowrap;
        transition: border-color var(--vl-transition), box-shadow var(--vl-transition--fast);
        z-index: 1;
    }

    /* ===================================================================
       Radio States (Focus, Checked, Readonly)
       =================================================================== */

    /* Focus state */

    .vl-radio__toggle:focus + .vl-radio__label::after {
        box-shadow: var(--vl-focus--shadow);
        outline: transparent solid 0.2rem;
    }

    @supports (outline-offset: 2px) {
        .vl-radio__toggle:focus + .vl-radio__label::after {
            box-shadow: none;
            outline: var(--vl-focus--outline);
            outline-offset: var(--vl-focus--outline-offset);
        }
    }

    /* Checked state */

    .vl-radio__toggle:checked + .vl-radio__label::before {
        transform: scale(1);
        background-color: var(--vl-color--white);
    }

    .vl-radio__toggle:checked + .vl-radio__label::after {
        background: var(--vl-color--action);
        border: 0;
    }

    /* Readonly state */

    .vl-radio__toggle:read-only + .vl-radio__label::before {
        pointer-events: none !important;
    }

    /* ===================================================================
       Radio Variants (Block, Disabled)
       =================================================================== */

    /* Block variant */

    .vl-radio--block {
        display: block;
        margin: 0;
    }

    /* Disabled variant */

    .vl-radio--disabled .vl-radio__label {
        color: var(--vl-color--text-alt);
    }

    .vl-radio--disabled .vl-radio__label::after {
        background-color: var(--vl-color--border-alt);
        border-color: var(--vl-color--border-alt);
    }

    .vl-radio--disabled .vl-radio__toggle:checked + .vl-radio__label::before {
        background-color: var(--vl-color--white);
    }

    .vl-radio--disabled .vl-radio__toggle:checked + .vl-radio__label::after {
        background: var(--vl-color--border-alt);
        border: var(--vl-border--width) var(--vl-color--border-alt) solid;
    }

    /* ===================================================================
       Radio Validation States (Error, Success)
       =================================================================== */

    /* Error state */

    .vl-radio--error .vl-radio__label::after,
    .vl-radio.invalid.validated .vl-radio__label::after {
        background-color: var(--vl-color--white);
        border-color: var(--vl-color--error);
    }

    .vl-radio--error .vl-radio__toggle:checked + .vl-radio__label::before,
    .vl-radio.invalid.validated .vl-radio__toggle:checked + .vl-radio__label::before {
        background-color: var(--vl-color--error);
    }

    .vl-radio--error .vl-radio__toggle:checked + .vl-radio__label::after,
    .vl-radio.invalid.validated .vl-radio__toggle:checked + .vl-radio__label::after {
        background-color: var(--vl-color--white);
        border: var(--vl-border--width) var(--vl-color--error) solid;
    }

    /* Success state */

    .vl-radio--success .vl-radio__label::after,
    .vl-radio.valid.validated .vl-radio__label::after {
        background-color: var(--vl-color--white);
        border-color: var(--vl-color--success);
    }

    .vl-radio--success .vl-radio__toggle:checked + .vl-radio__label::before,
    .vl-radio.valid.validated .vl-radio__toggle:checked + .vl-radio__label::before {
        background-color: var(--vl-color--success);
    }

    .vl-radio--success .vl-radio__toggle:checked + .vl-radio__label::after,
    .vl-radio.valid.validated .vl-radio__toggle:checked + .vl-radio__label::after {
        background-color: var(--vl-color--white);
        border: var(--vl-border--width) var(--vl-color--success) solid;
    }
`,e={id:"radio",name:"",value:null,label:"",block:!1,readonly:!1,disabled:!1,error:!1,success:!1,checked:!1};var w=Object.getOwnPropertyDescriptor,y=(o,l,c,d)=>{for(var r=d>1?void 0:d?w(l,c):l,a=o.length-1,s;a>=0;a--)(s=o[a])&&(r=s(r)||r);return r};let i=class extends h{constructor(){super(...arguments),this.id=e.id,this.name=e.name,this.value=e.value,this.label=e.label,this.block=e.block,this.readonly=e.readonly,this.disabled=e.disabled,this.error=e.error,this.success=e.success,this.checked=e.checked,this.dispatchInput=!1}static get styles(){return[u,m]}static get properties(){return{id:{type:String},name:{type:String},value:{type:String},label:{type:String},disabled:{type:Boolean},readonly:{type:Boolean},error:{type:Boolean},success:{type:Boolean},block:{type:Boolean},checked:{type:Boolean,reflect:!0}}}updated(o){if(super.updated(o),(o.has("checked")||o.has("value"))&&this.checked){const l={checked:!0,value:this.value};this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:l})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:l})),this.dispatchInput=!1),this.dispatchEvent(new CustomEvent("vl-valid",{composed:!0,bubbles:!0,detail:l}))}}render(){const o={"vl-radio":!0,"vl-radio--block":this.block,"vl-radio--disabled":this.disabled,"vl-radio--error":this.error,"vl-radio--success":this.success};return p`
            <label id="radio-label" class=${_(o)} for=${this.id}>
                <input
                    id=${this.id||t}
                    name=${this.name||t}
                    class="vl-radio__toggle"
                    type="radio"
                    aria-label=${this.label||t}
                    .value=${g(this.value)}
                    .checked=${this.checked}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    @change=${this.onChange}
                    @input=${this.onInput}
                />
                <div class="vl-radio__label">
                    <span id="label-text">
                        <slot></slot>
                    </span>
                </div>
            </label>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}onChange(){this.checked=!this.checked}onInput(){this.dispatchInput=!0}};i.shadowRootOptions={...b.shadowRootOptions,delegatesFocus:!0};i=y([f("vl-radio")],i);export{i as V,e as r};
