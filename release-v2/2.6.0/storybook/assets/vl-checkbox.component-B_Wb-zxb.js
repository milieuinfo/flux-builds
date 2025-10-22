import{z as v,N as d,aG as n,aM as u,aI as x,E as _,bt as p,x as r,aO as b,T as l,y as w}from"./iframe-Ds54rb_7.js";const f=v`
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
`,o={...d,block:!1,value:null,checked:!1,isSwitch:!1};var g=Object.getOwnPropertyDescriptor,$=(e,s,c,i)=>{for(var t=i>1?void 0:i?g(s,c):s,h=e.length-1,a;h>=0;h--)(a=e[h])&&(t=a(t)||t);return t};let k=class extends n{constructor(){super(...arguments),this.block=o.block,this.value=o.value,this.checked=o.checked,this.isSwitch=o.isSwitch,this.initialValue=null,this.initialCheckedValue=!1,this.dispatchInput=!1}static get styles(){return[u,x,_,p,f]}static get properties(){return{block:{type:Boolean},value:{type:String},checked:{type:Boolean,reflect:!0},isSwitch:{type:Boolean,attribute:"switch"}}}get validationTarget(){return this.shadowRoot?.querySelector("input")}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value,this.initialCheckedValue=this.checked)}updated(e){if(super.updated(e),e.has("checked")||e.has("value")){const s=this.checked?this.value||"on":null,c={checked:this.checked};this.checked&&(c.value=s),this.setValue(s),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:c})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:c})),this.dispatchInput=!1),this.dispatchEventIfValid(c)}}render(){return r` ${this.isSwitch?this.renderCheckboxSwitch():this.renderCheckboxDefault()} `}resetFormControl(){super.resetFormControl(),this.checked=this.initialCheckedValue,this.value=this.initialValue}renderCheckboxDefault(){const e={"vl-checkbox":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return r`
            <label class=${b(e)}>
                <input
                    id=${this.id||l}
                    name=${this.name||l}
                    class="vl-checkbox__toggle"
                    type="checkbox"
                    aria-invalid=${this.isInvalid||l}
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
        `}renderCheckboxSwitch(){const e={"vl-checkbox--switch__wrapper":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return r`
            <div class=${b(e)}>
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
        `}toggle(){this.checked=!this.checked,this.dispatchInput=!0}};k=$([w("vl-checkbox")],k);export{k as V,o as c};
