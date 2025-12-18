"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6421],{"../../libs/form/src/next/checkbox/index.ts":(e,t,s)=>{s.d(t,{v:()=>l.v});var l=s("../../libs/form/src/next/checkbox/vl-checkbox.component.ts")},"../../libs/form/src/next/checkbox/vl-checkbox.component.ts":(e,t,s)=>{s.d(t,{v:()=>u});var l=s("../../libs/common/utilities/src/index.ts"),i=s("../../libs/elements/src/index.ts"),r=s("../../node_modules/@domg/govflanders-style/common/index.js"),o=s("../../node_modules/@domg/govflanders-style/component/index.js"),a=s("../../node_modules/lit/index.js"),n=s("../../node_modules/lit/directives/class-map.js"),c=s("../../libs/form/src/next/form-control/form-control.ts");let d=(0,a.AH)`
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
`;var h=s("../../libs/form/src/next/checkbox/vl-checkbox.defaults.ts");class u extends c.M{static get styles(){return[r.h8,r.BI,i.hF,o.Bc,d]}static get properties(){return{block:{type:Boolean},value:{type:String},checked:{type:Boolean,reflect:!0},isSwitch:{type:Boolean,attribute:"switch"}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value,this.initialCheckedValue=this.checked)}updated(e){if(super.updated(e),e.has("checked")||e.has("value")){let e=this.checked?this.value||"on":null,t={checked:this.checked,currentTarget:this};this.checked&&(t.value=e),this.setValue(e),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:t})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:t})),this.dispatchInput=!1),this.dispatchEventIfValid(t)}}render(){return(0,a.qy)` ${this.isSwitch?this.renderCheckboxSwitch():this.renderCheckboxDefault()} `}renderCheckboxDefault(){let e={"vl-checkbox":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return(0,a.qy)`
            <label class=${(0,n.H)(e)}>
                <input
                    id=${this.id||a.s6}
                    name=${this.name||a.s6}
                    class="vl-checkbox__toggle"
                    type="checkbox"
                    aria-invalid=${this.isInvalid||a.s6}
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
        `}renderCheckboxSwitch(){let e={"vl-checkbox--switch__wrapper":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return(0,a.qy)`
            <div class=${(0,n.H)(e)}>
                <input
                    id=${this.id||a.s6}
                    name=${this.name||a.s6}
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
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.checked=this.initialCheckedValue,this.value=this.initialValue}toggle(){this.checked=!this.checked,this.dispatchInput=!0}constructor(...e){super(...e),this.block=h.o.block,this.value=h.o.value,this.checked=h.o.checked,this.isSwitch=h.o.isSwitch,this.initialValue=null,this.initialCheckedValue=!1,this.dispatchInput=!1}}u=function(e,t,s,l){var i,r=arguments.length,o=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,s):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,l);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,s,o):i(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,l.M1)("vl-checkbox-next")],u)},"../../libs/form/src/next/checkbox/vl-checkbox.defaults.ts":(e,t,s)=>{s.d(t,{o:()=>l});let l={...s("../../libs/form/src/next/form-control/form-control.defaults.ts").i,block:!1,value:null,checked:!1,isSwitch:!1}},"../../libs/form/src/next/datepicker/index.ts":(e,t,s)=>{s.d(t,{M:()=>l.M});var l=s("../../libs/form/src/next/datepicker/vl-datepicker.component.ts")},"../../libs/form/src/next/error-message/index.ts":(e,t,s)=>{s.d(t,{X:()=>l.X});var l=s("../../libs/form/src/next/error-message/vl-error-message.component.ts")},"../../libs/form/src/next/input-field-masked/index.ts":(e,t,s)=>{s.d(t,{j:()=>l.j});var l=s("../../libs/form/src/next/input-field-masked/vl-input-field-masked.component.ts")},"../../libs/form/src/next/input-field-masked/masks.ts":(e,t,s)=>{s.d(t,{S:()=>l});let l={iban:{blocks:[4,4,4,4],prefix:"BE",numericOnly:!0,numeralPositiveOnly:!0,regex:/^[A-Z]{2}[0-9]{14}$/},rrn:{blocks:[2,2,2,3,2],delimiters:[".",".","-","."],numericOnly:!0,numeralPositiveOnly:!0,regex:/^[0-9]{11}$/},uuid:{blocks:[8,4,4,4,12],delimiter:"-",regex:/^[0-9a-fA-F]{32}$/,customTransformFn:e=>e.replace(/[^0-9a-fA-F-]/g,"")},date:{date:!0,datePattern:["d","m","Y"],delimiter:".",regex:/^[0-9]{8}$/},numerical:{numeral:!0,numeralDecimalMark:",",delimiter:".",regex:/^[0-9]+(.[0-9]+)?$/},price:{numeral:!0,prefix:"€",rawValueTrimPrefix:!0,numeralDecimalMark:",",delimiter:".",regex:/^[0-9]+(.[0-9]+)?$/},phone:{blocks:[3,2,2,2,2],prefix:"+32",numericOnly:!0,numeralPositiveOnly:!0,delimiter:" ",regex:/^\+[0-9]{10}$/},phoneinternational:{blocks:[99],numericOnly:!0,numeralPositiveOnly:!0,regex:/^[0-9]*$/},mobile:{blocks:[3,3,2,2,2],prefix:"+32",numericOnly:!0,numeralPositiveOnly:!0,delimiter:" ",regex:/^\+[0-9]{11}$/}}},"../../libs/form/src/next/input-field-masked/vl-input-field-masked.component.ts":(e,t,s)=>{s.d(t,{j:()=>h});var l=s("../../libs/common/utilities/src/index.ts"),i=s("../../node_modules/cleave.js/dist/cleave-esm.js"),r=s("../../libs/form/src/next/input-field/vl-input-field.component.ts"),o=s("../../libs/form/src/next/input-field-masked/masks.ts");let a={key:"patternMismatch",message:"Value does not meet the given mask pattern.",isValid(e,t){let{disableMaskValidation:s,cleaveInstance:l}=e,i=e.regex||e.maskOptions?.regex;if(!t||s||!i||!l)return!0;let r=l.getRawValue();return new RegExp(i).test(r)}},n={attribute:"min",key:"rangeUnderflow",message:e=>e.minExclusive?`Value must be greater than ${e.min}.`:`Value must be greater than or equal to ${e.min}.`,isValid(e,t){let{min:s,minExclusive:l,cleaveInstance:i}=e;if(!t||!s&&0!==s||!i)return!0;let r=i.getRawValue();return!(parseFloat(r)<s)&&(!l||parseFloat(r)!==s)}},c={attribute:"max",key:"rangeOverflow",message:e=>e.maxExclusive?`Value must be lesser than ${e.max}.`:`Value must be lesser than or equal to ${e.max}.`,isValid(e,t){let{max:s,maxExclusive:l,cleaveInstance:i}=e;if(!t||!s&&0!==s||!i)return!0;let r=i.getRawValue();return!(parseFloat(r)>s)&&(!l||parseFloat(r)!==s)}};var d=s("../../libs/form/src/next/input-field-masked/vl-input-field-masked.defaults.ts");class h extends r.Y{static{this.formControlValidators=[...r.Y.formControlValidators,a,n,c]}static get properties(){return{mask:{type:String},maskPrefix:{type:String,attribute:"mask-prefix"},rawValue:{type:Boolean,attribute:"raw-value"},disableMaskValidation:{type:Boolean,attribute:"disable-mask-validation"}}}connectedCallback(){super.connectedCallback(),this.maskOptions={...o.S[this.mask],onValueChanged:e=>{this.handleValueChanged(e?.target?.value)}},this.maskOptions&&(this.maskOptions.numericOnly?this.inputMode="numeric":"date"===this.mask?this.inputMode="decimal":this.inputMode="text",this.maskPrefix&&(this.maskOptions.prefix=this.maskPrefix),this.value.startsWith(this.maskOptions.prefix||"")||(this.value=this.maskOptions.prefix+this.value))}firstUpdated(e){super.firstUpdated(e),this.maskOptions&&(this.cleaveInstance=new i.A(this.validationTarget,this.maskOptions))}resetFormControl(){super.resetFormControl(),this.initialValue.startsWith(this.maskOptions?.prefix||"")?this.value=this.initialValue:this.value=this.maskOptions?.prefix+this.initialValue}getRawValue(){return this.cleaveInstance?.getRawValue()}onInput(){this.dispatchInput=!0}onUpdated(e){if(e.has("value")||e.has("rawValue")){let e=this.rawValue?this.getRawValue()||"":this.value;(this.value===this.maskOptions?.prefix||this.getRawValue()===this.maskOptions?.prefix)&&(e="");let t={value:e};this.setValue(e),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:t})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:t})),this.dispatchInput=!1),this.dispatchEventIfValid(t)}}handleValueChanged(e){let t=this.maskOptions?.customTransformFn,s=t?t(e):e;this.value=s}constructor(...e){super(...e),this.mask=d.e.mask,this.maskPrefix=d.e.maskPrefix,this.rawValue=d.e.rawValue,this.disableMaskValidation=d.e.disableMaskValidation,this.maskOptions=null,this.cleaveInstance=null}}h=function(e,t,s,l){var i,r=arguments.length,o=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,s):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,l);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,s,o):i(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,l.M1)("vl-input-field-masked-next")],h)},"../../libs/form/src/next/input-field-masked/vl-input-field-masked.defaults.ts":(e,t,s)=>{s.d(t,{e:()=>l});let l={...s("../../libs/form/src/next/input-field/vl-input-field.defaults.ts").f,mask:"",maskPrefix:"",rawValue:!1,disableMaskValidation:!1}},"../../libs/form/src/next/radio-group/index.ts":(e,t,s)=>{s.d(t,{I:()=>i.I,Z:()=>l.Z});var l=s("../../libs/form/src/next/radio-group/vl-radio.component.ts"),i=s("../../libs/form/src/next/radio-group/vl-radio-group.component.ts")},"../../libs/form/src/next/radio-group/vl-radio-group.component.ts":(e,t,s)=>{s.d(t,{I:()=>h});var l=s("../../libs/common/utilities/src/index.ts"),i=s("../../libs/elements/src/index.ts"),r=s("../../node_modules/@domg/govflanders-style/common/index.js"),o=s("../../node_modules/@domg/govflanders-style/component/index.js"),a=s("../../node_modules/lit/index.js"),n=s("../../libs/form/src/next/form-control/form-control.ts"),c=s("../../libs/form/src/next/radio-group/vl-radio-group.defaults.ts"),d=s("../../libs/form/src/next/radio-group/vl-radio.component.uig-css.ts");class h extends n.M{static get styles(){return[r.h8,r.BI,i.hF,o.T9,d.A]}static get properties(){return{readonly:{type:Boolean},value:{type:String,reflect:!0},block:{type:Boolean}}}connectedCallback(){super.connectedCallback(),this.addEventListener("vl-change",this.updateGroupAfterCheck),this.addEventListener("keydown",this.handleKeyDown)}firstUpdated(e){super.firstUpdated(e),this.initialValue||(this.initialValue=this.value)}updated(e){super.updated(e),e.has("value")&&(this.setValue(this.value),this.checkRadioForValue(this.value)),e.has("name")&&this.updateRadiosForAttribute("name"),e.has("block")&&this.updateRadiosForAttribute("block"),e.has("readonly")&&(this.updateRadiosForAttribute("readonly"),this.preventDefaultEventOnAllInputsOfAllRadio(this.readonly)),e.has("disabled")&&this.updateRadiosForAttribute("disabled"),e.has("error")&&this.updateRadiosForAttribute("error"),e.has("isInvalid")&&this.getRadios()?.forEach(e=>{this.isInvalid?(e.setAttribute("error",""),e?.validationTarget?.setAttribute("aria-invalid","true")):(e.removeAttribute("error"),e?.validationTarget?.removeAttribute("aria-invalid"))}),e.has("success")&&this.updateRadiosForAttribute("success")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("vl-change",this.updateGroupAfterCheck)}render(){return(0,a.qy)`
            <fieldset>
                <legend class="vl-u-visually-hidden">${this.label}</legend>
                <slot></slot>
            </fieldset>
        `}resetFormControl(){super.resetFormControl(),this.resetAllRadios(),this.resetToInitialValue()}get validationTarget(){let e=this.getRadios()[0];return e?e.validationTarget:null}resetToInitialValue(){this.setValue(this.initialValue),this.checkRadioForValue(this.initialValue),this.value=this.initialValue}checkRadioForValue(e){this.getRadios()?.forEach(t=>{e&&t.getAttribute("value")===e?t.setAttribute("checked",""):t.removeAttribute("checked")})}resetAllRadios(){this.getRadios()?.forEach(e=>{e.removeAttribute("checked")})}preventDefaultEventOnAllInputsOfAllRadio(e){this.getRadios()?.forEach(t=>{e?t.addEventListener("click",this.preventDefaultAndFocus):t.removeEventListener("click",this.preventDefaultAndFocus)})}updateRadiosForAttribute(e){this.getRadios()?.forEach(t=>this[e]?t.setAttribute(e,""):t.removeAttribute(e))}getRadios(){return Array.from(this.querySelectorAll("vl-radio-next"))}checkSelectedRadio(e){this.getRadios()?.forEach(t=>{let s=t.getAttribute("value");t!==e?t.removeAttribute("checked"):(t.hasAttribute("checked")||t.setAttribute("checked",""),this.value=s,this.setValue(s))})}navigateRadioButtons(e){let t;let s=this.getRadios(),l=s.findIndex(e=>e.hasAttribute("checked"));"ArrowLeft"===e||"ArrowUp"===e?(t=l-1)<0&&(t=s.length-1):("ArrowRight"===e||"ArrowDown"===e)&&(t=l+1)>=s.length&&(t=0),this.checkSelectedRadio(s[t]),s[t].focus()}updateGroupAfterCheck(e){let t=e.target;this.checkSelectedRadio(t)}constructor(...e){super(...e),this.readonly=c.P.readonly,this.value=c.P.value,this.initialValue=null,this.preventDefaultAndFocus=e=>{let t=e.target;t?.validationTarget?.focus(),e.preventDefault()},this.handleKeyDown=e=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)&&(e.preventDefault(),this.navigateRadioButtons(e.code)),"Space"===e.code){let e=this.getRadios()?.find(e=>e===document.activeElement);e&&!e.hasAttribute("checked")&&this.checkSelectedRadio(e)}}}}h=function(e,t,s,l){var i,r=arguments.length,o=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,s):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,l);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,s,o):i(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,l.M1)("vl-radio-group-next")],h)},"../../libs/form/src/next/radio-group/vl-radio-group.defaults.ts":(e,t,s)=>{s.d(t,{P:()=>l});let l={...s("../../libs/form/src/next/form-control/form-control.defaults.ts").i,readonly:!1,value:null}},"../../libs/form/src/next/radio-group/vl-radio.component.ts":(e,t,s)=>{s.d(t,{Z:()=>u});var l=s("../../libs/common/utilities/src/index.ts"),i=s("../../libs/elements/src/index.ts"),r=s("../../node_modules/@domg/govflanders-style/common/index.js"),o=s("../../node_modules/@domg/govflanders-style/component/index.js"),a=s("../../node_modules/lit/index.js"),n=s("../../node_modules/lit/directives/class-map.js"),c=s("../../node_modules/lit/directives/live.js"),d=s("../../libs/form/src/next/radio-group/vl-radio.component.uig-css.ts"),h=s("../../libs/form/src/next/radio-group/vl-radio.defaults.ts");class u extends l.jW{static{this.shadowRootOptions={...a.WF.shadowRootOptions,delegatesFocus:!0}}static get styles(){return[r.h8,r.BI,i.hF,o.T9,d.A]}static get properties(){return{id:{type:String},name:{type:String},value:{type:String},label:{type:String},disabled:{type:Boolean},readonly:{type:Boolean},error:{type:Boolean},success:{type:Boolean},block:{type:Boolean},checked:{type:Boolean,reflect:!0}}}updated(e){if(super.updated(e),(e.has("checked")||e.has("value"))&&this.checked){let e={checked:!0,value:this.value};this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:e})),this.dispatchInput=!1),this.dispatchEvent(new CustomEvent("vl-valid",{composed:!0,bubbles:!0,detail:e}))}}render(){let e={"vl-radio":!0,"vl-radio--block":this.block,"vl-radio--disabled":this.disabled,"vl-radio--error":this.error,"vl-radio--success":this.success};return(0,a.qy)`
            <label id="radio-label" class=${(0,n.H)(e)} for=${this.id}>
                <input
                    id=${this.id||a.s6}
                    name=${this.name||a.s6}
                    class="vl-radio__toggle"
                    type="radio"
                    aria-label=${this.label||a.s6}
                    .value=${(0,c.V)(this.value)}
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
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}onChange(){this.checked=!this.checked}onInput(){this.dispatchInput=!0}constructor(...e){super(...e),this.id=h.Q.id,this.name=h.Q.name,this.value=h.Q.value,this.label=h.Q.label,this.block=h.Q.block,this.readonly=h.Q.readonly,this.disabled=h.Q.disabled,this.error=h.Q.error,this.success=h.Q.success,this.checked=h.Q.checked,this.dispatchInput=!1}}u=function(e,t,s,l){var i,r=arguments.length,o=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,s):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,l);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,s,o):i(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,l.M1)("vl-radio-next")],u)},"../../libs/form/src/next/radio-group/vl-radio.component.uig-css.ts":(e,t,s)=>{s.d(t,{A:()=>i});var l=s("../../node_modules/lit/index.js");let i=(0,l.AH)`
    .vl-radio--disabled .vl-radio__toggle:checked + .vl-radio__label::before {
        background-color: #fff;
    }
    .vl-radio__toggle:read-only + .vl-radio__label::before {
        pointer-events: none !important;
    }
`},"../../libs/form/src/next/radio-group/vl-radio.defaults.ts":(e,t,s)=>{s.d(t,{Q:()=>l});let l={id:"radio",name:"",value:null,label:"",block:!1,readonly:!1,disabled:!1,error:!1,success:!1,checked:!1}},"../../libs/form/src/next/select-rich/index.ts":(e,t,s)=>{s.d(t,{A:()=>l.A});var l=s("../../libs/form/src/next/select-rich/vl-select-rich.component.ts");s("../../libs/form/src/next/select-rich/vl-select-rich.model.ts")},"../../libs/form/src/next/select/index.ts":(e,t,s)=>{s.d(t,{Y:()=>l.Y});var l=s("../../libs/form/src/next/select/vl-select.component.ts")},"../../libs/form/src/next/select/vl-select.component.ts":(e,t,s)=>{s.d(t,{Y:()=>p});var l=s("../../libs/common/utilities/src/index.ts"),i=s("../../node_modules/@domg/govflanders-style/common/index.js"),r=s("../../node_modules/@domg/govflanders-style/component/index.js"),o=s("../../node_modules/lit/index.js"),a=s("../../node_modules/lit/directives/class-map.js"),n=s("../../node_modules/lit/directives/live.js"),c=s("../../libs/form/src/next/form-control/form-control.ts");let d=(0,o.AH)`
    .vl-select {
        background-color: #fff;
        appearance: none;
        display: inline-block;
        position: relative;
        padding: 0 4rem 0 1.5rem;
        max-width: 100%;
        height: 3.5rem;
        line-height: calc(3.5rem - 0.2rem);
        border: 1px solid #8695a8;
        border-radius: 0.3rem;
        text-decoration: none;
        color: #333332;
        font-family: 'Flanders Art Sans', sans-serif;
        font-size: 1.6rem;
        -webkit-appearance: none;
    }
    .vl-select:focus::-ms-value {
        background: inherit;
        color: inherit;
    }
    .vl-select::-ms-expand {
        display: none;
    }
    .vl-select:hover:not([disabled]) {
        border: 0.2rem solid rgba(0, 85, 204, 0.65);
        padding: 0 3.9rem 0 1.4rem;
        line-height: 3.2rem;
        background-position: calc(100% - 1.4rem) 50%;
    }
    .vl-select:hover:not([disabled]).vl-select--error {
        border-color: #d2373c;
    }
    .vl-select:hover:not([disabled]).vl-select--success {
        border-color: #009e47;
    }
    .vl-select:focus {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
    }
    @supports (outline-offset: 2px) {
        .vl-select:focus {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }
    .vl-select[disabled],
    .vl-select--disabled {
        border-color: #8695a8;
        background-color: #f3f5f6;
        color: var(--vl-theme-fg-color-70);
    }
    .vl-select--error {
        border-color: #d2373c;
        background-color: #fbebec;
    }
    .vl-select--success {
        border-color: #009e47;
        background-color: #e6f5ed;
    }
    .vl-select--block {
        display: block;
        width: 100%;
    }
    @media screen and (max-width: 767px) {
        .vl-select {
            height: 3.5rem;
            line-height: 3.5rem;
            font-size: 1.6rem;
        }
    }

    @media all and (min-width: 0\\0) and (min-resolution: 0.001dpcm) {
        .vl-select {
            padding-right: 0;
            background-image: none;
        }
    }
`,h=(0,o.AH)`
    .vl-select {
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .vl-select__container {
        position: relative;
        display: inline-block;
    }

    .vl-select__container.vl-select__container--block {
        display: block;
    }

    .vl-select:has(option.vl-select__placeholder[selected]) {
        color: #687483 !important;
    }

    .vl-select.vl-select--disabled ~ .vl-select__button {
        display: none;
    }

    .vl-select ~ .vl-select__button {
        color: #05c;
        position: absolute;
        width: 2.4rem;
        height: 2.4rem;
        top: 0.6rem;
        right: 3.6rem;
        font-size: 1.4rem;
        border-radius: 0.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;

        span.vl-icon:before {
            margin-top: -0.2rem;
        }

        &:hover,
        &:focus {
            border: #05c 0.1rem solid;
            background-color: #e6eefa;
            color: #003bb0;
            outline: none;
        }
    }

    .vl-select:not(.vl-select--disabled) {
        &:has(~ .vl-select__button) {
            padding-right: 6rem;
            &:hover {
                padding-right: 5.9rem;
                &:focus {
                    padding-right: 6rem;
                }
            }
        }

        &:focus:hover {
            border-width: 0.1rem;
            padding-right: 4rem;
            padding-left: 1.5rem;
        }
    }

    .vl-vi.vl-vi-nav-down:before {
        color: #6e7985;
        position: absolute;
        right: 1.3rem;
        font-size: 1.3rem;
        top: 0.8rem;
        pointer-events: none;
    }

    .slot-container {
        display: none;
    }
`;var u=s("../../libs/form/src/next/select/vl-select.defaults.ts");class p extends c.M{static get styles(){return[i.h8,i.BI,d,r.py,h]}static get properties(){return{options:{type:Array,attribute:!1},initialOptions:{type:Array,attribute:"initial-options"},block:{type:Boolean},readonly:{type:Boolean},placeholder:{type:String},autocomplete:{type:String},notDeletable:{type:Boolean,attribute:"not-deletable"},value:{type:String}}}get validationTarget(){return this.shadowRoot?.querySelector("select")}connectedCallback(){super.connectedCallback(),this.parseSlottedOptions();let e=this.getSelectedOption();this.value=e?.value||"",this.initialOptions=structuredClone(this.getAllOptions()),this.setupSlotObserver()}disconnectedCallback(){super.disconnectedCallback(),this.slotObserver?.disconnect()}updated(e){if(super.updated(e),e.has("options")){let e=this.getSelectedOption();this.value=e?.value||""}if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}}render(){let e={"vl-select__container":!0,"vl-select__container--block":this.block},t={"vl-select":!0,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success,"vl-select--block":this.block},s=!!this.value,l=this.getAllOptions().some(e=>e.group);return(0,o.qy)`
            <div class=${(0,a.H)(e)}>
                <select
                    id=${this.id||o.s6}
                    name=${this.name||o.s6}
                    class=${(0,a.H)(t)}
                    aria-label=${this.label||o.s6}
                    aria-invalid=${this.isInvalid||o.s6}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?aria-disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${(0,n.V)(this.value)}
                    autocomplete=${this.autocomplete||o.s6}
                    @change=${this.onChange}
                    @input=${this.onSelect}
                >
                    ${this.placeholder?this.renderPlaceholder(s):o.s6}
                    ${l?this.renderGroupedOptions():this.renderSelectOptions(this.getAllOptions())}
                </select>
                ${s&&!this.notDeletable?this.renderClearButton():o.s6}
                <span class="vl-icon vl-vi vl-vi-nav-down" aria-hidden="true"></span>
            </div>
            <div class="slot-container">
                <slot @slotchange=${this.onSlotChange}></slot>
            </div>
        `}renderPlaceholder(e){return(0,o.qy)` <option class="vl-select__placeholder" value="" ?selected=${!e} disabled>
            ${this.placeholder}
        </option>`}renderClearButton(){return(0,o.qy)`
            <button
                type="button"
                class="vl-select__button"
                aria-label=${`Verwijder ${this.label} keuze ${this.getSelectedOption()?.label||this.value||""}`}
                @click=${this.clearValue}
            >
                <span class="vl-icon vl-vi vl-vi-close" aria-hidden="true"></span>
            </button>
        `}renderGroupedOptions(){return Object.entries(this.getGroupedOptions()).map(([e,t])=>(0,o.qy)` <optgroup label=${e}>${this.renderSelectOptions(t)}</optgroup>`)}renderSelectOptions(e){return e.map(e=>(0,o.qy)` <option
                value=${e.value}
                ?selected=${this.value===e.value}
                ?disabled=${e.disabled}
            >
                ${e.label||e.value}
            </option>`)}resetFormControl(){super.resetFormControl(),this.options.length>0?this.options=structuredClone(this.initialOptions):this.parseSlottedOptions();let e=this.getSelectedOption();this.value=e?.value||""}onChange(e){this.value=e?.target?.value}onSelect(){this.dispatchInput=!0}clearValue(){this.dispatchInput=!0,this.value=""}onSlotChange(){this.parseSlottedOptions(),this.requestUpdate()}getSelectedOption(){return[...this.getAllOptions()].reverse().find(e=>e.selected)}getGroupedOptions(){return this.getAllOptions().reduce((e,t)=>{let s=t.group||this.DEFAULT_GROUP_LABEL;return e[s]?e[s].push(t):e[s]=[t],e},{})}setupSlotObserver(){this.slotObserver=new MutationObserver(()=>{this.parseSlottedOptions(),this.requestUpdate()}),this.slotObserver.observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value","label","selected","disabled"]})}parseSlottedOptions(){let e=Array.from(this.children);this.parsedOptions=e.reduce((e,t)=>{if("option"===t.tagName.toLowerCase())e.push(this.parseOptionElement(t));else if("optgroup"===t.tagName.toLowerCase()){let s=t.label||this.DEFAULT_GROUP_LABEL,l=Array.from(t.querySelectorAll("option")).map(e=>{let t=this.parseOptionElement(e);return t.group=s,t});e.push(...l)}return e},[])}parseOptionElement(e){return{value:e.value||e.textContent?.trim()||"",label:e.textContent?.trim()||e.value||"",selected:e.selected,disabled:e.disabled}}getAllOptions(){return this.options.length>0?this.options:this.parsedOptions}constructor(...e){super(...e),this.options=u.p.options,this.initialOptions=u.p.initialOptions,this.value="",this.block=u.p.block,this.placeholder=u.p.placeholder,this.autocomplete=u.p.autocomplete,this.notDeletable=u.p.notDeletable,this.DEFAULT_GROUP_LABEL="Overig",this.dispatchInput=!1,this.parsedOptions=[]}}p=function(e,t,s,l){var i,r=arguments.length,o=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,s):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,l);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,s,o):i(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,l.M1)("vl-select-next")],p)},"../../libs/form/src/next/select/vl-select.defaults.ts":(e,t,s)=>{s.d(t,{p:()=>l});let l={...s("../../libs/form/src/next/form-control/form-control.defaults.ts").i,options:[],initialOptions:[],block:!1,placeholder:"",autocomplete:"",notDeletable:!1}},"../../libs/form/src/next/textarea/vl-textarea.component.ts":(e,t,s)=>{s.d(t,{m:()=>u});var l=s("../../libs/common/utilities/src/index.ts"),i=s("../../node_modules/@domg/govflanders-style/common/index.js"),r=s("../../node_modules/@domg/govflanders-style/component/index.js"),o=s("../../node_modules/@open-wc/form-control/src/validators.js"),a=s("../../node_modules/lit/index.js"),n=s("../../node_modules/lit/directives/class-map.js"),c=s("../../node_modules/lit/directives/live.js"),d=s("../../libs/form/src/next/form-control/form-control.ts"),h=s("../../libs/form/src/next/textarea/vl-textarea.defaults.ts");class u extends d.M{static{this.formControlValidators=[...d.M.formControlValidators,o.bO,o.jD]}static get styles(){return[i.h8,i.BI,r.ag]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},value:{type:String,reflect:!0},placeholder:{type:String},autocomplete:{type:String},minLength:{type:Number,attribute:"min-length"},maxLength:{type:Number,attribute:"max-length"},rows:{type:Number},cols:{type:Number}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value)}updated(e){if(super.updated(e),e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}}render(){let e={"vl-textarea":!0,"vl-textarea--disabled":this.disabled,"vl-textarea--error":this.isInvalid||this.error,"vl-textarea--success":this.success,"vl-textarea--block":this.block};return(0,a.qy)`
            <textarea
                id=${this.id||a.s6}
                name=${this.name||a.s6}
                class=${(0,n.H)(e)}
                aria-label=${this.label||a.s6}
                aria-invalid=${this.isInvalid||a.s6}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?readonly=${this.readonly}
                .value=${(0,c.V)(this.value)}
                placeholder=${this.placeholder||a.s6}
                autocomplete=${this.autocomplete||a.s6}
                minlength=${this.minLength??a.s6}
                maxlength=${this.maxLength??a.s6}
                rows=${this.rows??a.s6}
                cols=${this.cols??a.s6}
                @input=${this.onInput}
            />
        `}get validationTarget(){return this.shadowRoot?.querySelector("textarea")}resetFormControl(){super.resetFormControl(),this.value=this.initialValue}onKeydown(e){"Enter"===e.key&&(e.bubbles=!1),super.onKeydown(e)}onInput(e){this.dispatchInput=!0,this.value=e?.target?.value}constructor(...e){super(...e),this.block=h.r.block,this.readonly=h.r.readonly,this.value=h.r.value,this.placeholder=h.r.placeholder,this.autocomplete=h.r.autocomplete,this.minLength=h.r.minLength,this.maxLength=h.r.maxLength,this.rows=h.r.rows,this.cols=h.r.cols,this.initialValue="",this.dispatchInput=!1}}u=function(e,t,s,l){var i,r=arguments.length,o=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,s):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,l);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,s,o):i(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}([(0,l.M1)("vl-textarea-next")],u)},"../../libs/form/src/next/textarea/vl-textarea.defaults.ts":(e,t,s)=>{s.d(t,{r:()=>l});let l={...s("../../libs/form/src/next/form-control/form-control.defaults.ts").i,block:!1,readonly:!1,value:"",placeholder:"",autocomplete:"",minLength:null,maxLength:null,rows:null,cols:null}},"../../libs/form/src/next/upload/index.ts":(e,t,s)=>{s.d(t,{f:()=>l.f});var l=s("../../libs/form/src/next/upload/vl-upload.component.ts")},"../../libs/form/src/utils/index.ts":(e,t,s)=>{s.d(t,{S:()=>l,p:()=>o});let l=(e,t)=>{if(!e)return null;let s=new FormData(e),l=Array.from(e.elements).filter(e=>!(e instanceof HTMLInputElement&&"radio"===e.type)&&e.hasAttribute("name")).map(e=>e.getAttribute("name")).filter((e,t,s)=>s.indexOf(e)!==t),i=Array.from(e.elements).filter(e=>e.hasAttribute("multiple")).map(e=>e.getAttribute("name")),r=t||Array.from(new Set([...l,...i]));return Array.from(s.keys()).reduce((e,t)=>({...e,[t]:r.includes(t)?s.getAll(t):s.get(t)}),{})};var i=s("../../libs/form/src/next/select-rich/index.ts"),r=s("../../libs/form/src/next/form-control/form-control.ts");let o=(e,t)=>{e&&Object.entries(t).forEach(([t,s])=>{let l=e.elements.namedItem(t);l&&(l instanceof HTMLInputElement&&"checkbox"===l.type?u(l,s):l instanceof HTMLInputElement&&"file"===l.type?n(l,s):l instanceof HTMLTextAreaElement?l.value=s:l instanceof HTMLSelectElement?l.value=s:l instanceof RadioNodeList?c(l,s):l instanceof HTMLInputElement?l.value=s:l instanceof r.M&&a(l,s))})},a=(e,t)=>{e.validationTarget instanceof HTMLSelectElement?d(e,t):e.validationTarget instanceof HTMLInputElement&&"checkbox"===e.validationTarget.type?u(e,t):e.validationTarget instanceof HTMLInputElement&&"file"===e.validationTarget.type?(e.removeAllFiles(),Array.isArray(t)?t.forEach(t=>t instanceof File&&e.addFile(t)):t instanceof File&&e.addFile(t)):e.setAttribute("value",t)},n=(e,t)=>{let s=new DataTransfer;Array.isArray(t)?(t.forEach(e=>{s.items.add(e)}),e.files=s.files):t instanceof File&&(s.items.add(t),e.files=s.files)},c=(e,t)=>{Array.from(e).forEach(e=>{if(e instanceof HTMLInputElement){let s=Array.isArray(t)?t.includes(e.value):e.value===t;"radio"===e.type&&s?e.checked=!0:"checkbox"===e.type&&((Array.isArray(t)?t.includes(e.value):e.value===t)?e.setAttribute("checked",""):e.removeAttribute("checked"))}else e instanceof r.M&&e.validationTarget instanceof HTMLInputElement&&("radio"===e.validationTarget.type?e.getAttribute("value")===t&&e.setAttribute("checked",""):"checkbox"===e.validationTarget.type&&Array.isArray(t)&&e.validationTarget&&(t.some(t=>h(e,t))?e.setAttribute("checked",""):e.removeAttribute("checked")))})},d=(e,t)=>{e instanceof i.A?e.setSelectedValues(t):e.setAttribute("value",t)},h=(e,t)=>"string"==typeof t&&t&&t===(e.getAttribute("value")||"on"),u=(e,t)=>{Array.isArray(t)?t.some(t=>h(e,t))?e.setAttribute("checked",""):e.removeAttribute("checked"):h(e,t)||"boolean"==typeof t&&t?e.setAttribute("checked",""):"boolean"!=typeof t||t||e.removeAttribute("checked")}}}]);