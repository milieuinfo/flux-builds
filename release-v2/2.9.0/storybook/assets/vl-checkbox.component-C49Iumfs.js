import{z as v,N as _,aG as x,aM as d,aI as n,E as u,bs as g,x as b,aO as i,T as l,y as f}from"./iframe-CYuKbPIU.js";const p=v`
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

    .vl-checkbox--error .vl-checkbox__toggle:checked + .vl-checkbox__label .vl-checkbox__box::before,
    .vl-checkbox.invalid.validated .vl-checkbox__toggle:checked + .vl-checkbox__label .vl-checkbox__box::before,
    .vl-checkbox--error .vl-checkbox__toggle:indeterminate + .vl-checkbox__label .vl-checkbox__box::before,
    .vl-checkbox.invalid.validated .vl-checkbox__toggle:indeterminate + .vl-checkbox__label .vl-checkbox__box::before {
        color: #d2373c;
    }

    .vl-checkbox--error .vl-checkbox__toggle:checked + .vl-checkbox__label .vl-checkbox__box::after,
    .vl-checkbox.invalid.validated .vl-checkbox__toggle:checked + .vl-checkbox__label .vl-checkbox__box::after,
    .vl-checkbox--error .vl-checkbox__toggle:indeterminate + .vl-checkbox__label .vl-checkbox__box::after,
    .vl-checkbox.invalid.validated .vl-checkbox__toggle:indeterminate + .vl-checkbox__label .vl-checkbox__box::after {
        background-color: #fff;
        border: 0.1rem #d2373c solid;
    }

    .vl-checkbox--disabled .vl-checkbox__toggle:checked + .vl-checkbox__label .vl-checkbox__box::after,
    .vl-checkbox--disabled .vl-checkbox__toggle:indeterminate + .vl-checkbox__label .vl-checkbox__box::after {
        background: #8695a8;
        border: 0.1rem #8695a8 solid;
    }

    .vl-checkbox--success .vl-checkbox__toggle:checked + .vl-checkbox__label .vl-checkbox__box::before,
    .vl-checkbox.valid.validated .vl-checkbox__toggle:checked + .vl-checkbox__label .vl-checkbox__box::before,
    .vl-checkbox--success .vl-checkbox__toggle:indeterminate + .vl-checkbox__label .vl-checkbox__box::before,
    .vl-checkbox.valid.validated .vl-checkbox__toggle:indeterminate + .vl-checkbox__label .vl-checkbox__box::before {
        color: #009e47;
    }

    .vl-checkbox--success .vl-checkbox__toggle:checked + .vl-checkbox__label .vl-checkbox__box::after,
    .vl-checkbox.valid.validated .vl-checkbox__toggle:checked + .vl-checkbox__label .vl-checkbox__box::after,
    .vl-checkbox--success .vl-checkbox__toggle:indeterminate + .vl-checkbox__label .vl-checkbox__box::after,
    .vl-checkbox.valid.validated .vl-checkbox__toggle:indeterminate + .vl-checkbox__label .vl-checkbox__box::after {
        background-color: #fff;
        border: 0.1rem #009e47 solid;
    }
`,t={..._,block:!1,value:null,checked:!1,isSwitch:!1,indeterminate:!1};var w=Object.getOwnPropertyDescriptor,m=(e,o,c,r)=>{for(var h=r>1?void 0:r?w(o,c):o,s=e.length-1,a;s>=0;s--)(a=e[s])&&(h=a(h)||h);return h};let k=class extends x{constructor(){super(...arguments),this.block=t.block,this.value=t.value,this.checked=t.checked,this.isSwitch=t.isSwitch,this.indeterminate=t.indeterminate,this.initialValue=null,this.initialCheckedValue=!1,this.dispatchInput=!1}static get styles(){return[d,n,u,g,p]}static get properties(){return{block:{type:Boolean},value:{type:String},checked:{type:Boolean,reflect:!0},indeterminate:{type:Boolean,reflect:!0},isSwitch:{type:Boolean,attribute:"switch"}}}get validationTarget(){return this.shadowRoot?.querySelector("input")}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value,this.initialCheckedValue=this.checked)}updated(e){if(super.updated(e),e.has("checked")||e.has("value")){const o=this.checked?this.value||"on":null,c={checked:this.checked,currentTarget:this};this.checked&&(c.value=o),this.setValue(o),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:c})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:c})),this.dispatchInput=!1),this.dispatchEventIfValid(c)}}render(){return b` ${this.isSwitch?this.renderCheckboxSwitch():this.renderCheckboxDefault()} `}resetFormControl(){super.resetFormControl(),this.checked=this.initialCheckedValue,this.value=this.initialValue}renderCheckboxDefault(){const e={"vl-checkbox":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return b`
            <label class=${i(e)}>
                <input
                    id=${this.id||l}
                    name=${this.name||l}
                    class="vl-checkbox__toggle"
                    type="checkbox"
                    aria-label=${this.label||l}
                    aria-invalid=${this.isInvalid||l}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${this.value}
                    .checked=${this.checked}
                    .indeterminate=${this.indeterminate&&!this.checked}
                    @click=${this.toggle}
                />
                <div class="vl-checkbox__label">
                    <i class="vl-checkbox__box" aria-hidden="true"></i>
                    <span>
                        <slot></slot>
                    </span>
                </div>
            </label>
        `}renderCheckboxSwitch(){const e={"vl-checkbox--switch__wrapper":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return b`
            <div class=${i(e)}>
                <input
                    id=${this.id||l}
                    name=${this.name||l}
                    type="checkbox"
                    class="vl-checkbox--switch"
                    role="switch"
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${this.value}
                    .checked=${this.checked}
                    @click=${this.toggle}
                />
                <label for=${this.id} class="vl-checkbox__label">
                    <span class="vl-checkbox--switch__label">
                        <span aria-hidden="true"></span>
                    </span>
                    <span>
                        <slot></slot>
                    </span>
                </label>
            </div>
        `}toggle(){this.checked=!this.checked,this.dispatchInput=!0}};k=m([f("vl-checkbox")],k);export{k as V,t as c};
