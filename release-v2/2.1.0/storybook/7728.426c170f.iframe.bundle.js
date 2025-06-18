"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7728],{"../../libs/components/src/form/checkbox/vl-checkbox.component.ts":(e,t,s)=>{s.d(t,{v:()=>u});var o=s("../../libs/common/src/index.ts"),i=s("../../libs/styles/src/index.ts"),r=s("../../node_modules/@domg/govflanders-style/common/index.js"),l=s("../../node_modules/@domg/govflanders-style/component/index.js"),a=s("../../node_modules/lit/index.js"),n=s("../../node_modules/lit/directives/class-map.js"),c=s("../../libs/components/src/form/form-control/index.ts");let d=(0,a.AH)`
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
`;var h=s("../../libs/components/src/form/checkbox/vl-checkbox.defaults.ts");class u extends c.M{static get styles(){return[r.h8,r.BI,i.oi,l.Bc,d]}static get properties(){return{block:{type:Boolean},value:{type:String},checked:{type:Boolean,reflect:!0},isSwitch:{type:Boolean,attribute:"switch"}}}get validationTarget(){return this.shadowRoot?.querySelector("input")}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value,this.initialCheckedValue=this.checked)}updated(e){if(super.updated(e),e.has("checked")||e.has("value")){let e=this.checked?this.value||"on":null,t={checked:this.checked};this.checked&&(t.value=e),this.setValue(e),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:t})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:t})),this.dispatchInput=!1),this.dispatchEventIfValid(t)}}render(){return(0,a.qy)` ${this.isSwitch?this.renderCheckboxSwitch():this.renderCheckboxDefault()} `}resetFormControl(){super.resetFormControl(),this.checked=this.initialCheckedValue,this.value=this.initialValue}renderCheckboxDefault(){let e={"vl-checkbox":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return(0,a.qy)`
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
        `}toggle(){this.checked=!this.checked,this.dispatchInput=!0}constructor(...e){super(...e),this.block=h.o.block,this.value=h.o.value,this.checked=h.o.checked,this.isSwitch=h.o.isSwitch,this.initialValue=null,this.initialCheckedValue=!1,this.dispatchInput=!1}}u=function(e,t,s,o){var i,r=arguments.length,l=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(l=(r<3?i(l):r>3?i(t,s,l):i(t,s))||l);return r>3&&l&&Object.defineProperty(t,s,l),l}([(0,o.M1)("vl-checkbox")],u)},"../../libs/components/src/form/checkbox/vl-checkbox.defaults.ts":(e,t,s)=>{s.d(t,{o:()=>o});let o={...s("../../libs/components/src/form/form-control/form-control.defaults.ts").i,block:!1,value:null,checked:!1,isSwitch:!1}},"../../libs/components/src/form/datepicker/index.ts":(e,t,s)=>{s.d(t,{M:()=>o.M});var o=s("../../libs/components/src/form/datepicker/vl-datepicker.component.ts")},"../../libs/components/src/form/index.ts":(e,t,s)=>{s.d(t,{u:()=>p.u,v7:()=>r.v,Mz:()=>l.M,Ex:()=>o.E,Fp:()=>a.F,Ys:()=>i.Y,jd:()=>n.j,ZC:()=>c.Z,Ib:()=>d.I,YA:()=>h.Y,Al:()=>u.Al,me:()=>m.m,f9:()=>b.f,BG:()=>o.B,Sl:()=>f});var o=s("../../libs/components/src/form/form-label/index.ts"),i=s("../../libs/components/src/form/input-field/index.ts"),r=s("../../libs/components/src/form/checkbox/vl-checkbox.component.ts"),l=s("../../libs/components/src/form/datepicker/index.ts"),a=s("../../libs/components/src/form/form-message/vl-form-message.component.ts"),n=s("../../libs/components/src/form/input-field-masked/vl-input-field-masked.component.ts"),c=s("../../libs/components/src/form/radio-group/vl-radio.component.ts"),d=s("../../libs/components/src/form/radio-group/vl-radio-group.component.ts"),h=s("../../libs/components/src/form/select/index.ts"),u=s("../../libs/components/src/form/select-rich/vl-select-rich.component.ts"),p=s("../../libs/components/src/form/select-rich/vl-select-rich.model.ts"),m=s("../../libs/components/src/form/textarea/vl-textarea.component.ts");s("../../libs/components/src/form/textarea-rich/vl-textarea-rich.component.ts");var b=s("../../libs/components/src/form/upload/vl-upload.component.ts"),v=s("../../libs/components/src/form/form-control/index.ts");let f=(e,t)=>{if(!e)return;let s=new FormData(e),o=e=>e instanceof v.M||e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement,i=Array.from(s.keys()).filter(e=>s.getAll(e).length>1),r=Array.from(e.querySelectorAll("*")).filter(e=>o(e)&&e.hasAttribute("multiple")).map(e=>e.getAttribute("name")),l=t||Array.from(new Set([...i,...r]));return Array.from(s.keys()).reduce((e,t)=>({...e,[t]:l.includes(t)?s.getAll(t):s.get(t)}),{})}},"../../libs/components/src/form/input-field-masked/masks.ts":(e,t,s)=>{s.d(t,{S:()=>o});let o={iban:{blocks:[4,4,4,4],prefix:"BE",numericOnly:!0,numeralPositiveOnly:!0,regex:/^[A-Z]{2}[0-9]{14}$/},rrn:{blocks:[2,2,2,3,2],delimiters:[".",".","-","."],numericOnly:!0,numeralPositiveOnly:!0,regex:/^[0-9]{11}$/},uuid:{blocks:[8,4,4,4,12],delimiter:"-",regex:/^[0-9a-fA-F]{32}$/,customTransformFn:e=>e.replace(/[^0-9a-fA-F-]/g,"")},date:{date:!0,datePattern:["d","m","Y"],delimiter:".",regex:/^[0-9]{8}$/},numerical:{numeral:!0,numeralDecimalMark:",",delimiter:".",regex:/^[0-9]+(.[0-9]+)?$/},price:{numeral:!0,prefix:"€",rawValueTrimPrefix:!0,numeralDecimalMark:",",delimiter:".",regex:/^[0-9]+(.[0-9]+)?$/},phone:{blocks:[3,2,2,2,2],prefix:"+32",numericOnly:!0,numeralPositiveOnly:!0,delimiter:" ",regex:/^\+[0-9]{10}$/},phoneinternational:{blocks:[99],numericOnly:!0,numeralPositiveOnly:!0,regex:/^[0-9]*$/},mobile:{blocks:[3,3,2,2,2],prefix:"+32",numericOnly:!0,numeralPositiveOnly:!0,delimiter:" ",regex:/^\+[0-9]{11}$/}}},"../../libs/components/src/form/input-field-masked/vl-input-field-masked.component.ts":(e,t,s)=>{s.d(t,{j:()=>h});var o=s("../../libs/common/src/index.ts"),i=s("../../node_modules/cleave.js/dist/cleave-esm.js"),r=s("../../libs/components/src/form/input-field/index.ts"),l=s("../../libs/components/src/form/input-field-masked/masks.ts");let a={key:"patternMismatch",message:"Value does not meet the given mask pattern.",isValid(e,t){let{disableMaskValidation:s,cleaveInstance:o}=e,i=e.regex||e.maskOptions?.regex;if(!t||s||!i||!o)return!0;let r=o.getRawValue();return new RegExp(i).test(r)}},n={attribute:"min",key:"rangeUnderflow",message:e=>e.minExclusive?`Value must be greater than ${e.min}.`:`Value must be greater than or equal to ${e.min}.`,isValid(e,t){let{min:s,minExclusive:o,cleaveInstance:i}=e;if(!t||!s&&0!==s||!i)return!0;let r=i.getRawValue();return!(parseFloat(r)<s)&&(!o||parseFloat(r)!==s)}},c={attribute:"max",key:"rangeOverflow",message:e=>e.maxExclusive?`Value must be lesser than ${e.max}.`:`Value must be lesser than or equal to ${e.max}.`,isValid(e,t){let{max:s,maxExclusive:o,cleaveInstance:i}=e;if(!t||!s&&0!==s||!i)return!0;let r=i.getRawValue();return!(parseFloat(r)>s)&&(!o||parseFloat(r)!==s)}};var d=s("../../libs/components/src/form/input-field-masked/vl-input-field-masked.defaults.ts");class h extends r.Y{static{this.formControlValidators=[...r.Y.formControlValidators,a,n,c]}static get properties(){return{mask:{type:String},maskPrefix:{type:String,attribute:"mask-prefix"},rawValue:{type:Boolean,attribute:"raw-value"},disableMaskValidation:{type:Boolean,attribute:"disable-mask-validation"}}}connectedCallback(){super.connectedCallback(),this.maskOptions={...l.S[this.mask],onValueChanged:e=>{this.handleValueChanged(e?.target?.value)}},this.maskOptions&&(this.maskOptions.numericOnly?this.inputMode="numeric":"date"===this.mask?this.inputMode="decimal":this.inputMode="text",this.maskPrefix&&(this.maskOptions.prefix=this.maskPrefix),this.value.startsWith(this.maskOptions.prefix||"")||(this.value=this.maskOptions.prefix+this.value))}firstUpdated(e){super.firstUpdated(e),this.maskOptions&&(this.cleaveInstance=new i.A(this.validationTarget,this.maskOptions))}resetFormControl(){super.resetFormControl(),this.initialValue.startsWith(this.maskOptions?.prefix||"")?this.value=this.initialValue:this.value=this.maskOptions?.prefix+this.initialValue}getRawValue(){return this.cleaveInstance?.getRawValue()}onInput(){this.dispatchInput=!0}onUpdated(e){if(e.has("value")||e.has("rawValue")){let e=this.rawValue?this.getRawValue()||"":this.value;(this.value===this.maskOptions?.prefix||this.getRawValue()===this.maskOptions?.prefix)&&(e="");let t={value:e};this.setValue(e),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:t})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:t})),this.dispatchInput=!1),this.dispatchEventIfValid(t)}}handleValueChanged(e){let t=this.maskOptions?.customTransformFn,s=t?t(e):e;this.value=s}constructor(...e){super(...e),this.mask=d.e.mask,this.maskPrefix=d.e.maskPrefix,this.rawValue=d.e.rawValue,this.disableMaskValidation=d.e.disableMaskValidation,this.maskOptions=null,this.cleaveInstance=null}}h=function(e,t,s,o){var i,r=arguments.length,l=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(l=(r<3?i(l):r>3?i(t,s,l):i(t,s))||l);return r>3&&l&&Object.defineProperty(t,s,l),l}([(0,o.M1)("vl-input-field-masked")],h)},"../../libs/components/src/form/input-field-masked/vl-input-field-masked.defaults.ts":(e,t,s)=>{s.d(t,{e:()=>o});let o={...s("../../libs/components/src/form/input-field/vl-input-field.defaults.ts").f,mask:"",maskPrefix:"",rawValue:!1,disableMaskValidation:!1}},"../../libs/components/src/form/radio-group/vl-radio-group.component.ts":(e,t,s)=>{s.d(t,{I:()=>h});var o=s("../../libs/common/src/index.ts"),i=s("../../libs/styles/src/index.ts"),r=s("../../node_modules/@domg/govflanders-style/common/index.js"),l=s("../../node_modules/@domg/govflanders-style/component/index.js"),a=s("../../node_modules/lit/index.js"),n=s("../../libs/components/src/form/form-control/form-control.ts"),c=s("../../libs/components/src/form/radio-group/vl-radio-group.defaults.ts"),d=s("../../libs/components/src/form/radio-group/vl-radio.component.flux-css.ts");class h extends n.M{static get styles(){return[i.qO,r.BI,...i.oi,l.T9,d.a]}static get properties(){return{readonly:{type:Boolean},value:{type:String,reflect:!0},block:{type:Boolean}}}get validationTarget(){let e=this.getRadios()[0];return e?e.validationTarget:null}connectedCallback(){super.connectedCallback(),this.addEventListener("vl-change",this.updateGroupAfterCheck),this.addEventListener("keydown",this.handleKeyDown)}updated(e){super.updated(e),e.has("value")&&(this.setValue(this.value),this.checkRadioForValue(this.value)),e.has("name")&&this.updateRadiosForAttribute("name"),e.has("block")&&this.updateRadiosForAttribute("block"),e.has("readonly")&&(this.updateRadiosForAttribute("readonly"),this.preventDefaultEventOnAllInputsOfAllRadio(this.readonly)),e.has("disabled")&&this.updateRadiosForAttribute("disabled"),e.has("error")&&this.updateRadiosForAttribute("error"),e.has("isInvalid")&&this.getRadios()?.forEach(e=>{this.isInvalid?(e.setAttribute("error",""),e?.validationTarget?.setAttribute("aria-invalid","true")):(e.removeAttribute("error"),e?.validationTarget?.removeAttribute("aria-invalid"))}),e.has("success")&&this.updateRadiosForAttribute("success")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("vl-change",this.updateGroupAfterCheck)}render(){return(0,a.qy)`
            <fieldset>
                <legend class="vl-u-visually-hidden">${this.label}</legend>
                <slot></slot>
            </fieldset>
        `}resetFormControl(){super.resetFormControl(),this.resetAllRadios(),this.resetToInitialValue()}firstUpdated(e){super.firstUpdated(e),this.initialValue||(this.initialValue=this.value)}resetToInitialValue(){this.setValue(this.initialValue),this.checkRadioForValue(this.initialValue),this.value=this.initialValue}checkRadioForValue(e){this.getRadios()?.forEach(t=>{e&&t.getAttribute("value")===e?t.setAttribute("checked",""):t.removeAttribute("checked")})}resetAllRadios(){this.getRadios()?.forEach(e=>{e.removeAttribute("checked")})}preventDefaultEventOnAllInputsOfAllRadio(e){this.getRadios()?.forEach(t=>{e?t.addEventListener("click",this.preventDefaultAndFocus):t.removeEventListener("click",this.preventDefaultAndFocus)})}updateRadiosForAttribute(e){this.getRadios()?.forEach(t=>this[e]?t.setAttribute(e,""):t.removeAttribute(e))}getRadios(){return Array.from(this.querySelectorAll("vl-radio"))}checkSelectedRadio(e){this.getRadios()?.forEach(t=>{let s=t.getAttribute("value");t!==e?t.removeAttribute("checked"):(t.hasAttribute("checked")||t.setAttribute("checked",""),this.value=s,this.setValue(s))})}navigateRadioButtons(e){let t;let s=this.getRadios(),o=s.findIndex(e=>e.hasAttribute("checked"));"ArrowLeft"===e||"ArrowUp"===e?(t=o-1)<0&&(t=s.length-1):("ArrowRight"===e||"ArrowDown"===e)&&(t=o+1)>=s.length&&(t=0),this.checkSelectedRadio(s[t]),s[t].focus()}updateGroupAfterCheck(e){let t=e.target;this.checkSelectedRadio(t)}constructor(...e){super(...e),this.readonly=c.P.readonly,this.value=c.P.value,this.initialValue=null,this.preventDefaultAndFocus=e=>{let t=e.target;t?.validationTarget?.focus(),e.preventDefault()},this.handleKeyDown=e=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)&&(e.preventDefault(),this.navigateRadioButtons(e.code)),"Space"===e.code){let e=this.getRadios()?.find(e=>e===document.activeElement);e&&!e.hasAttribute("checked")&&this.checkSelectedRadio(e)}}}}h=function(e,t,s,o){var i,r=arguments.length,l=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(l=(r<3?i(l):r>3?i(t,s,l):i(t,s))||l);return r>3&&l&&Object.defineProperty(t,s,l),l}([(0,o.M1)("vl-radio-group")],h)},"../../libs/components/src/form/radio-group/vl-radio-group.defaults.ts":(e,t,s)=>{s.d(t,{P:()=>o});let o={...s("../../libs/components/src/form/form-control/form-control.defaults.ts").i,readonly:!1,value:null}},"../../libs/components/src/form/radio-group/vl-radio.component.flux-css.ts":(e,t,s)=>{s.d(t,{a:()=>i});var o=s("../../node_modules/lit/index.js");let i=(0,o.AH)`
    .vl-radio--disabled .vl-radio__toggle:checked + .vl-radio__label::before {
        background-color: #fff;
    }
    .vl-radio__toggle:read-only + .vl-radio__label::before {
        pointer-events: none !important;
    }
`},"../../libs/components/src/form/radio-group/vl-radio.component.ts":(e,t,s)=>{s.d(t,{Z:()=>u});var o=s("../../libs/common/src/index.ts"),i=s("../../libs/styles/src/index.ts"),r=s("../../node_modules/@domg/govflanders-style/common/index.js"),l=s("../../node_modules/@domg/govflanders-style/component/index.js"),a=s("../../node_modules/lit/index.js"),n=s("../../node_modules/lit/directives/class-map.js"),c=s("../../node_modules/lit/directives/live.js"),d=s("../../libs/components/src/form/radio-group/vl-radio.component.flux-css.ts"),h=s("../../libs/components/src/form/radio-group/vl-radio.defaults.ts");class u extends o.jW{static{this.shadowRootOptions={...a.WF.shadowRootOptions,delegatesFocus:!0}}static get styles(){return[r.h8,r.BI,i.oi,l.T9,d.a]}static get properties(){return{id:{type:String},name:{type:String},value:{type:String},label:{type:String},disabled:{type:Boolean},readonly:{type:Boolean},error:{type:Boolean},success:{type:Boolean},block:{type:Boolean},checked:{type:Boolean,reflect:!0}}}updated(e){if(super.updated(e),(e.has("checked")||e.has("value"))&&this.checked){let e={checked:!0,value:this.value};this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:e})),this.dispatchInput=!1),this.dispatchEvent(new CustomEvent("vl-valid",{composed:!0,bubbles:!0,detail:e}))}}render(){let e={"vl-radio":!0,"vl-radio--block":this.block,"vl-radio--disabled":this.disabled,"vl-radio--error":this.error,"vl-radio--success":this.success};return(0,a.qy)`
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
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}onChange(){this.checked=!this.checked}onInput(){this.dispatchInput=!0}constructor(...e){super(...e),this.id=h.Q.id,this.name=h.Q.name,this.value=h.Q.value,this.label=h.Q.label,this.block=h.Q.block,this.readonly=h.Q.readonly,this.disabled=h.Q.disabled,this.error=h.Q.error,this.success=h.Q.success,this.checked=h.Q.checked,this.dispatchInput=!1}}u=function(e,t,s,o){var i,r=arguments.length,l=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(l=(r<3?i(l):r>3?i(t,s,l):i(t,s))||l);return r>3&&l&&Object.defineProperty(t,s,l),l}([(0,o.M1)("vl-radio")],u)},"../../libs/components/src/form/radio-group/vl-radio.defaults.ts":(e,t,s)=>{s.d(t,{Q:()=>o});let o={id:"radio",name:"",value:null,label:"",block:!1,readonly:!1,disabled:!1,error:!1,success:!1,checked:!1}},"../../libs/components/src/form/select/index.ts":(e,t,s)=>{s.d(t,{Y:()=>o.Y});var o=s("../../libs/components/src/form/select/vl-select.component.ts")},"../../libs/components/src/form/select/vl-select.component.ts":(e,t,s)=>{s.d(t,{Y:()=>p});var o=s("../../libs/common/src/index.ts"),i=s("../../node_modules/@domg/govflanders-style/common/index.js"),r=s("../../node_modules/@domg/govflanders-style/component/index.js"),l=s("../../node_modules/lit/index.js"),a=s("../../node_modules/lit/directives/class-map.js"),n=s("../../node_modules/lit/directives/live.js"),c=s("../../libs/components/src/form/form-control/index.ts");let d=(0,l.AH)`
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
`,h=(0,l.AH)`
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
`;var u=s("../../libs/components/src/form/select/vl-select.defaults.ts");class p extends c.M{static get styles(){return[i.h8,i.BI,d,r.py,h]}static get properties(){return{options:{type:Array},block:{type:Boolean},readonly:{type:Boolean},placeholder:{type:String},autocomplete:{type:String},notDeletable:{type:Boolean,attribute:"not-deletable"},value:{type:String,state:!0}}}get validationTarget(){return this.shadowRoot?.querySelector("select")}connectedCallback(){super.connectedCallback();let e=this.getSelectedOption();this.value=e?.value||"",this.initialOptions=JSON.parse(JSON.stringify(this.options))}updated(e){if(super.updated(e),e.has("options")){let e=this.getSelectedOption();this.value=e?.value||""}if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}}render(){let e={"vl-select__container":!0,"vl-select__container--block":this.block},t={"vl-select":!0,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success,"vl-select--block":this.block},s=!!this.value,o=this.options.some(e=>e.group);return(0,l.qy)`
            <div class=${(0,a.H)(e)}>
                <select
                    id=${this.id||l.s6}
                    name=${this.name||l.s6}
                    class=${(0,a.H)(t)}
                    aria-label=${this.label||l.s6}
                    aria-invalid=${this.isInvalid||l.s6}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?aria-disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${(0,n.V)(this.value)}
                    autocomplete=${this.autocomplete||l.s6}
                    @change=${this.onChange}
                    @input=${this.onSelect}
                >
                    ${this.placeholder?this.renderPlaceholder(s):l.s6}
                    ${o?this.renderGroupedOptions():this.renderSelectOptions(this.options)}
                </select>
                ${s&&!this.notDeletable?this.renderClearButton():l.s6}
                <span class="vl-icon vl-vi vl-vi-nav-down" aria-hidden="true"></span>
            </div>
        `}renderPlaceholder(e){return(0,l.qy)` <option class="vl-select__placeholder" value="" ?selected=${!e} disabled>
            ${this.placeholder}
        </option>`}renderClearButton(){return(0,l.qy)`
            <button
                type="button"
                class="vl-select__button"
                aria-label=${`Verwijder ${this.label} keuze ${this.getSelectedOption()?.label||this.value||""}`}
                @click=${this.clearValue}
            >
                <span class="vl-icon vl-vi vl-vi-close" aria-hidden="true"></span>
            </button>
        `}renderGroupedOptions(){return Object.entries(this.getGroupedOptions()).map(([e,t])=>(0,l.qy)` <optgroup label=${e}>${this.renderSelectOptions(t)}</optgroup>`)}renderSelectOptions(e){return e.map(e=>(0,l.qy)` <option
                value=${e.value}
                ?selected=${this.value===e.value}
                ?disabled=${e.disabled}
            >
                ${e.label||e.value}
            </option>`)}resetFormControl(){for(super.resetFormControl();this.options.length;)this.options.pop();this.initialOptions.forEach(e=>this.options.push({...e})),this.value&&this.requestUpdate("options")}onChange(e){this.value=e?.target?.value}onSelect(){this.dispatchInput=!0}clearValue(){this.dispatchInput=!0,this.value=""}getSelectedOption(){return[...this.options].reverse().find(e=>e.selected)}getGroupedOptions(){return this.options.reduce((e,t)=>{let s=t.group||this.DEFAULT_GROUP_LABEL;return e[s]?e[s].push(t):e[s]=[t],e},{})}constructor(...e){super(...e),this.options=u.p.options,this.value="",this.block=u.p.block,this.placeholder=u.p.placeholder,this.autocomplete=u.p.autocomplete,this.notDeletable=u.p.notDeletable,this.initialOptions=[],this.DEFAULT_GROUP_LABEL="Overig",this.dispatchInput=!1}}p=function(e,t,s,o){var i,r=arguments.length,l=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(l=(r<3?i(l):r>3?i(t,s,l):i(t,s))||l);return r>3&&l&&Object.defineProperty(t,s,l),l}([(0,o.M1)("vl-select")],p)},"../../libs/components/src/form/select/vl-select.defaults.ts":(e,t,s)=>{s.d(t,{p:()=>o});let o={...s("../../libs/components/src/form/form-control/form-control.defaults.ts").i,options:[],block:!1,placeholder:"",autocomplete:"",notDeletable:!1}},"../../libs/components/src/form/textarea-rich/vl-textarea-rich.component.ts":(e,t,s)=>{s.d(t,{I:()=>d});var o=s("../../libs/common/src/index.ts"),i=s("../../node_modules/tinymce/tinymce.js"),r=s.n(i),l=s("../../libs/components/src/form/textarea/vl-textarea.component.ts"),a=s("../../node_modules/lit/index.js");let n=(0,a.AH)`
    .tox-tinymce {
        border-radius: 0.3rem;
        border: 0.1rem solid #8695a8;
    }

    .tox .tox-toolbar__primary {
        border-bottom: 0.1rem solid #8695a8;
        background: none;
    }

    .tox:not(.tox-tinymce-inline) .tox-editor-header {
        box-shadow: none;
        padding: 0;
    }

    .tox .tox-statusbar {
        border-top: 0.1rem solid #8695a8;
    }

    .tox:not([dir='rtl']) .tox-toolbar__group:not(:last-of-type) {
        border-right: 1px solid #8695a8;
    }

    .tox .tox-toolbar__group {
        padding: 0 4px 0 4px;
    }

    .tox .tox-tbtn {
        margin: 4px 0;
        height: 32px;
    }

    .tox .tox-tbtn:hover {
        background: #dee0e2;
    }

    .tox .tox-tbtn--enabled,
    .tox .tox-tbtn--enabled:hover {
        background: #c8cbcf;
    }

    .tox .tox-editor-header.hidden {
        display: none;
    }

    /* Link plugin modal styles */
    .tox .tox-dialog {
        box-shadow: 0 0 2.1rem 0 rgba(0, 0, 0, 0.3);
        font-family: 'Flanders Art Sans', sans-serif;
        border-radius: 0;
        padding: 3rem;

        .tox-dialog__header,
        .tox-dialog__body-content,
        .tox-dialog__footer {
            padding: 0;
        }

        .tox-dialog__header {
            margin-bottom: 1.5rem;

            .tox-button.tox-button--icon {
                display: none;
            }

            .tox-dialog__title {
                font-family: 'Flanders Art Sans', sans-serif;
                font-weight: 500;
            }
        }

        .tox-form__group {
            margin-bottom: 1.5rem;
        }

        .tox-label {
            color: #4d4d4b;
            font-size: 1.6rem;
            font-weight: 500;
            margin-bottom: 0.6rem;
        }

        .tox-dialog__body-content {
            overflow: visible;
        }

        .tox-textfield {
            font-family: 'Flanders Art Sans', sans-serif;
            height: 3.5rem;
            line-height: 3.5rem;
            border-radius: 0.3rem;
            border: 0.1rem solid #687483;
            padding: 0 1rem;

            &:focus {
                border: 0.1rem solid #687483;
                box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
            }
        }

        .tox-dialog__footer {
            margin-top: 1rem;
            justify-content: flex-start;

            .tox-button {
                margin-right: 1.5rem;
                margin-left: 0;
                order: 1;
                border: 0;
                padding: 0;
                font-size: 1.6rem;
                font-family: 'Flanders Art Sans', sans-serif;
                font-weight: 500;
                line-height: 3.5rem;
                padding: 0 2rem;
                background-color: #05c;
                text-decoration: none;
                border-radius: 0.3rem;
                color: #fff;
                cursor: default;

                &:hover {
                    background-color: #003bb0;
                }

                &.tox-button--secondary {
                    order: 2;
                    background-color: transparent;
                    cursor: pointer;
                    color: #05c;
                    font-weight: 400;
                    text-decoration: underline;
                    padding: 0;
                }
            }
        }
    }
`;var c=s("../../libs/components/src/form/textarea-rich/vl-textarea-rich.defaults.ts");class d extends l.m{constructor(){super(),this.toolbar=c.x.toolbar,this.plugins=c.x.plugins,this.preview=c.x.preview,this.customConfig=c.x.customConfig,this.editor=null,this.id||(this.id=r().DOM.uniqueId())}static get styles(){return[...l.m.styles,n]}static get properties(){return{toolbar:{type:String},plugins:{type:String},preview:{type:Boolean},customConfig:{type:Object}}}firstUpdated(e){super.firstUpdated(e),this.initTinyMCE().then(()=>{this.removeAttribute("aria-hidden")})}updated(e){super.updated(e),e.has("success")&&this.setEditorSuccess(),e.has("error")&&this.setEditorError(),e.has("readonly")&&this.setEditorReadonly(),e.has("disabled")&&this.setEditorDisabled(),e.has("preview")&&this.setEditorPreview(),e.has("value")&&this.editor?.getContent()!==this.value&&this.editor?.setContent(this.value),e.has("isInvalid")&&this.editor?.getBody()?.classList?.toggle("error",this.isInvalid||this.error)}disconnectedCallback(){super.disconnectedCallback(),this.editor?.mode?.set("readonly"),this.editor?.destroy()}resetFormControl(){super.resetFormControl(),this.editor?.setContent(this.initialValue)}focus(){this.editor?.focus()}async initTinyMCE(){await r().init({target:this.validationTarget,suffix:".min",language:"nl_BE",base_url:"https://cdn.omgeving.vlaanderen.be/domg/tinymce/6.8.3",toolbar:this.toolbar,menubar:!1,elementpath:!1,branding:!1,content_css:"https://cdn.omgeving.vlaanderen.be/domg/govflanders-style/14.1.0/custom/tinymce.css",verify_html:!1,body_class:"vl-typography",plugins:this.plugins,formats:{bold:{inline:"b"},italic:{inline:"i"},underline:{inline:"u"},strikethrough:{inline:"s"}},link_title:!1,link_target_list:!1,link_default_target:"_blank",...this.customConfig}),this.editor=r().get(this.id),this.editor?.on("input change redo undo",()=>{this.value=this.editor?.getContent()||""}),this.editor?.on("ExecCommand",e=>{"mceLink"===e.command&&setTimeout(()=>{let e=this.shadowRoot?.querySelector(".tox-dialog input.tox-textfield");e?.focus()},0)}),this.setEditorSuccess(),this.setEditorError(),this.setEditorReadonly(),this.setEditorDisabled(),this.setEditorPreview()}setEditorSuccess(){this.editor?.getBody()?.classList?.toggle("success",this.success)}setEditorError(){this.editor?.getBody()?.classList?.toggle("error",this.error)}setEditorReadonly(){let e=this.shouldDisableEditor();this.editor?.mode?.set(e?"readonly":"design")}setEditorDisabled(){let e=this.shouldDisableEditor();this.editor?.mode?.set(e?"readonly":"design"),this.editor?.getBody()?.classList?.toggle("vl-textarea--disabled",this.disabled)}setEditorPreview(){let e=this.shouldDisableEditor();this.editor?.mode.set(e?"readonly":"design"),this.editor?.getContainer()?.querySelector(".tox-editor-header")?.classList.toggle("hidden",this.preview)}shouldDisableEditor(){return this.readonly||this.disabled||this.preview}}d=function(e,t,s,o){var i,r=arguments.length,l=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(l=(r<3?i(l):r>3?i(t,s,l):i(t,s))||l);return r>3&&l&&Object.defineProperty(t,s,l),l}([(0,o.M1)("vl-textarea-rich")],d)},"../../libs/components/src/form/textarea-rich/vl-textarea-rich.defaults.ts":(e,t,s)=>{s.d(t,{x:()=>o});let o={...s("../../libs/components/src/form/textarea/vl-textarea.defaults.ts").r,toolbar:"undo redo | bold italic underline strikethrough",plugins:"",preview:!1,customConfig:null}},"../../libs/components/src/form/textarea/vl-textarea.component.ts":(e,t,s)=>{s.d(t,{m:()=>u});var o=s("../../libs/common/src/index.ts"),i=s("../../node_modules/@domg/govflanders-style/common/index.js"),r=s("../../node_modules/@domg/govflanders-style/component/index.js"),l=s("../../node_modules/@open-wc/form-control/src/validators.js"),a=s("../../node_modules/lit/index.js"),n=s("../../node_modules/lit/directives/class-map.js"),c=s("../../node_modules/lit/directives/live.js"),d=s("../../libs/components/src/form/form-control/form-control.ts"),h=s("../../libs/components/src/form/textarea/vl-textarea.defaults.ts");class u extends d.M{static{this.formControlValidators=[...d.M.formControlValidators,l.bO,l.jD]}static get styles(){return[i.h8,i.BI,r.ag]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},value:{type:String,reflect:!0},placeholder:{type:String},autocomplete:{type:String},minLength:{type:Number,attribute:"min-length"},maxLength:{type:Number,attribute:"max-length"},rows:{type:Number},cols:{type:Number}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value)}updated(e){if(super.updated(e),e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}}render(){let e={"vl-textarea":!0,"vl-textarea--disabled":this.disabled,"vl-textarea--error":this.isInvalid||this.error,"vl-textarea--success":this.success,"vl-textarea--block":this.block};return(0,a.qy)`
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
        `}get validationTarget(){return this.shadowRoot?.querySelector("textarea")}resetFormControl(){super.resetFormControl(),this.value=this.initialValue}onKeydown(e){"Enter"===e.key&&(e.bubbles=!1),super.onKeydown(e)}onInput(e){this.dispatchInput=!0,this.value=e?.target?.value}constructor(...e){super(...e),this.block=h.r.block,this.readonly=h.r.readonly,this.value=h.r.value,this.placeholder=h.r.placeholder,this.autocomplete=h.r.autocomplete,this.minLength=h.r.minLength,this.maxLength=h.r.maxLength,this.rows=h.r.rows,this.cols=h.r.cols,this.initialValue="",this.dispatchInput=!1}}u=function(e,t,s,o){var i,r=arguments.length,l=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(l=(r<3?i(l):r>3?i(t,s,l):i(t,s))||l);return r>3&&l&&Object.defineProperty(t,s,l),l}([(0,o.M1)("vl-textarea")],u)},"../../libs/components/src/form/textarea/vl-textarea.defaults.ts":(e,t,s)=>{s.d(t,{r:()=>o});let o={...s("../../libs/components/src/form/form-control/form-control.defaults.ts").i,block:!1,readonly:!1,value:"",placeholder:"",autocomplete:"",minLength:null,maxLength:null,rows:null,cols:null}}}]);