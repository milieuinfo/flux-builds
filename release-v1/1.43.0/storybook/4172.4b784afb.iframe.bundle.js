"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4172],{"../../libs/form/src/next/error-message/vl-error-message.component.ts":(e,t,r)=>{r.d(t,{O:()=>d,X:()=>c});var o=r("../../libs/common/utilities/src/index.ts"),i=r("../../node_modules/@domg/govflanders-style/common/index.js"),l=r("../../node_modules/@domg/govflanders-style/component/index.js"),s=r("../../node_modules/lit/index.js"),n=r("../../libs/form/src/next/error-message/vl-error-message.defaults.ts");let a=(0,s.AH)`
    .vl-form__error {
        margin-top: 0.2rem;
    }
`,d="vl-error-message-next";class c extends o.jW{static get styles(){return[i.h8,l.xV,a]}static get properties(){return{show:{type:Boolean,reflect:!0},for:{type:String},state:{type:String},validationMessage:{type:String,attribute:"validation-message"}}}render(){return(0,s.qy)`
            <p class="vl-form__error" ?hidden=${!this.show}>
                <slot>${this.validationMessage}</slot>
            </p>
        `}constructor(...e){super(...e),this.show=n.M.show,this.for=n.M.for,this.state=n.M.state,this.validationMessage=""}}c=function(e,t,r,o){var i,l=arguments.length,s=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(l<3?i(s):l>3?i(t,r,s):i(t,r))||s);return l>3&&s&&Object.defineProperty(t,r,s),s}([(0,o.M1)(d)],c)},"../../libs/form/src/next/error-message/vl-error-message.defaults.ts":(e,t,r)=>{r.d(t,{M:()=>o});let o={show:!1,for:null,state:null}},"../../libs/form/src/next/form-control/form-control.defaults.ts":(e,t,r)=>{r.d(t,{i:()=>o});let o={id:"",name:"",label:"",required:!1,disabled:!1,error:!1,success:!1}},"../../libs/form/src/next/form-control/form-control.ts":(e,t,r)=>{r.d(t,{M:()=>c});var o=r("../../libs/form/src/next/form-control/form-control.defaults.ts"),i=r("../../node_modules/@open-wc/form-control/src/FormControlMixin.js"),l=r("../../node_modules/@open-wc/form-control/src/validators.js"),s=r("../../node_modules/lit/index.js"),n=r("../../node_modules/@open-wc/form-helpers/src/index.js"),a=r("../../libs/form/src/next/error-message/vl-error-message.component.ts"),d=r("../../libs/common/utilities/src/index.ts");r("../../node_modules/reflect-metadata/Reflect.js");class c extends(0,i.F)(d.jW){static{this.formControlValidators=[l.yt,l.Bt]}static{this.shadowRootOptions={...s.WF.shadowRootOptions,delegatesFocus:!0}}static get properties(){return{id:{type:String},name:{type:String},label:{type:String},required:{type:Boolean},disabled:{type:Boolean},error:{type:Boolean},success:{type:Boolean},isInvalid:{type:Boolean,state:!0}}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onKeydown),this.addEventListener("invalid",this.onInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydown),this.removeEventListener("invalid",this.onInvalid)}updated(e){super.updated(e),e.has("isInvalid")||(this.isInvalid=!1,this.hideErrorMessages())}resetFormControl(){this.isInvalid=!1,this.hideErrorMessages(),this.dispatchEvent(new Event("vl-reset",{bubbles:!0,composed:!0}))}dispatchEventIfValid(e){this.validity.valid&&this.dispatchEvent(new CustomEvent("vl-valid",{composed:!0,bubbles:!0,detail:e}))}onKeydown(e){"Enter"===e.code&&this.form&&this.submitFormOnEnter&&(0,n.tA)(this.form)}onInvalid(e){e.preventDefault(),this.isInvalid=!0,this.focusFirstInvalidInput(),this.showErrorMessage()}focusFirstInvalidInput(){let e=this.form?.querySelector(":invalid");this===e&&(e?.focus(),e?.scrollIntoView({behavior:"smooth",block:"center"}))}showErrorMessage(){let e="";for(let t in this.validity)if(this.validity[t]){e=t;break}let t=this.form?.querySelector(`${a.O}[for="${this.id}"][state="${e}"]`);t||(t=this.form?.querySelector(`${a.O}[for="${this.id}"]:not([state])`)),t?.setAttribute("validation-message",this.validationMessage),t?.setAttribute("show","")}hideErrorMessages(){let e=this.form?.querySelectorAll(`${a.O}[for="${this.id}"]`);e?.forEach(e=>{e.removeAttribute("show")})}constructor(...e){super(...e),this.id=o.i.id,this.name=o.i.name,this.label=o.i.label,this.required=o.i.required,this.disabled=o.i.disabled,this.error=o.i.error,this.success=o.i.success,this.isInvalid=!1,this.submitFormOnEnter=!0}}},"../../libs/form/src/next/form-label/index.ts":(e,t,r)=>{r.d(t,{E:()=>o.E});var o=r("../../libs/form/src/next/form-label/vl-form-label.component.ts")},"../../libs/form/src/next/form-label/vl-form-label.component.ts":(e,t,r)=>{r.d(t,{E:()=>d});var o=r("../../libs/common/utilities/src/index.ts"),i=r("../../node_modules/@domg/govflanders-style/common/index.js"),l=r("../../node_modules/lit/index.js"),s=r("../../node_modules/lit/directives/class-map.js");let n=(0,l.AH)`
    .vl-form__label {
        font-size: 1.6rem;
        font-weight: 500;
        color: #4d4d4b;
        display: inline-block;
        line-height: 1;
        margin-right: 0.5rem;
        margin-bottom: 0.7rem;
    }

    .vl-form__label--block {
        display: block;
        margin-right: 0;
        margin-bottom: 0.7rem;
    }

    .vl-form__label--light {
        color: #687483;
    }
`;var a=r("../../libs/form/src/next/form-label/vl-form-label.defaults.ts");class d extends o.jW{static get styles(){return[i.h8,n]}static get properties(){return{for:{type:String},label:{type:String},block:{type:Boolean},light:{type:Boolean}}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.focusFormControl)}updated(e){super.updated(e);let t=this.getFormControl();t?.setAttribute("label",this.label)}disconnectedCallback(){super.disconnectedCallback();let e=this.getFormControl();e?.removeAttribute("label"),this.removeEventListener("click",this.focusFormControl)}render(){let e={"vl-form__label":!0,"vl-form__label--block":this.block,"vl-form__label--light":this.light};return(0,l.qy)` <label for=${this.for} class=${(0,s.H)(e)} part="label"> ${this.label} </label> `}getFormControl(){let e=this.closest("form");return e?.querySelector(`[id="${this.for}"]`)}focusFormControl(){let e=this.getFormControl();e?.focus()}constructor(...e){super(...e),this.for=a.x.for,this.label=a.x.label,this.block=a.x.block,this.light=a.x.light}}d=function(e,t,r,o){var i,l=arguments.length,s=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(l<3?i(s):l>3?i(t,r,s):i(t,r))||s);return l>3&&s&&Object.defineProperty(t,r,s),s}([(0,o.M1)("vl-form-label-next")],d)},"../../libs/form/src/next/form-label/vl-form-label.defaults.ts":(e,t,r)=>{r.d(t,{x:()=>o});let o={for:"",label:"",block:!1,light:!1}},"../../libs/form/src/next/input-field/vl-input-field.component.ts":(e,t,r)=>{r.d(t,{Y:()=>p});var o=r("../../libs/common/utilities/src/index.ts"),i=r("../../node_modules/@open-wc/form-control/src/validators.js"),l=r("../../node_modules/lit/index.js"),s=r("../../node_modules/lit/directives/class-map.js"),n=r("../../node_modules/lit/directives/live.js"),a=r("../../libs/form/src/next/form-control/form-control.ts");let d={attribute:"min",key:"rangeUnderflow",message:e=>e.minExclusive?`Value must be greater than ${e.min}.`:`Value must be greater than or equal to ${e.min}.`,isValid:(e,t)=>!t||!e.min&&0!==e.min||!(parseFloat(t)<e.min)&&(!e.minExclusive||parseFloat(t)!==e.min)},c={attribute:"max",key:"rangeOverflow",message:e=>e.maxExclusive?`Value must be lesser than ${e.max}.`:`Value must be lesser than or equal to ${e.max}.`,isValid:(e,t)=>!t||!e.max&&0!==e.max||!(parseFloat(t)>e.max)&&(!e.maxExclusive||parseFloat(t)!==e.max)},u={attribute:"pattern",key:"patternMismatch",message:"Please match the requested format",isValid:(e,t)=>!t||!e.pattern&&!e.regex||new RegExp(e.pattern||e.regex).test(t)},m=(0,l.AH)`
    :host([block]) {
        display: block;
        width: 100%;
    }

    * {
        box-sizing: border-box;
    }

    *::before, *::after {
        box-sizing: inherit;
    }

    .vl-input-field {
        display: inline-block;
        background: var(--vl-white);
        font-family: var(--vl-font);
        font-size: var(--vl-font-size--small);
        color: var(--vl-text-color);
        max-width: 100%;
        height: 3.5rem;
        line-height: 3.5rem;
        border-radius: 0.3rem;
        border: 0.1rem solid var(--vl-alt-border-color);
        padding: 0 1rem;
        transition: background-color 0.2s;

        &:hover,
        &.vl-input-field--input-group-left:hover,
        &.vl-input-field--input-group-right:hover {
            border: 0.2rem solid var(--vl-focus-color);
            padding: 0 0.9rem;
            border-right-width: 1px;
        }

        &:hover.vl-input-field--error {
            border-color: var(--vl-error-color);
        }

        &:hover.vl-input-field--success {
            border-color: var(--vl-color--success);
        }

        &:focus {
            box-shadow: none;
            outline: 3px solid var(--vl-focus-color);
            outline-offset: 2px;
            border: 0.1rem solid var(--vl-light-text-color);
            padding: 0 1rem;
        }

        &:focus.vl-input-field--error {
            border-color: var(--vl-error-color);
        }

        &:focus.vl-input-field--success {
            border-color: var(--vl-color--success);
        }

        &:focus:hover {
            padding: 0 1rem;
        }

        &.vl-input-field--block {
            display: block;
            width: 100%;
        }

        &.vl-input-field--error {
            border-color: var(--vl-error-color);
            background-color: var(--vl-error-color--background);
            display: inline;
        }

        &.vl-input-field--success {
            border-color: var(--vl-color--success);
            background-color: var(--vl-color--success-bg);
            display: inline;
        }

        &.vl-input-field--disabled {
            border-color: var(--vl-alt-border-color);
            background-color: var(--vl-alt-border-color--background);
        }

        &.vl-input-field--disabled:hover {
            border-width: 0.1rem;
            padding: 0 1rem;
        }

        &.vl-input-field--input-group-left,
        &.vl-input-field--input-group-left.vl-input-field--disabled:hover {
            border-radius: 0.3rem 0px 0px 0.3rem;
            border-right-width: 0px;
        }

        &.vl-input-field--input-group-right,
        &.vl-input-field--input-group-right.vl-input-field--disabled:hover {
            border-radius: 0px 0.3rem 0.3rem 0px;
            border-left-width: 0px;
        }
    }
`;var h=r("../../libs/form/src/next/input-field/vl-input-field.defaults.ts");class p extends a.M{static{this.formControlValidators=[...a.M.formControlValidators,i.bO,i.jD,d,c,u]}static get styles(){return[m]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},type:{type:String},value:{type:String,reflect:!0},placeholder:{type:String},autocomplete:{type:String},minLength:{type:Number,attribute:"min-length"},maxLength:{type:Number,attribute:"max-length"},min:{type:Number},max:{type:Number},minExclusive:{type:Boolean,attribute:"min-exclusive"},maxExclusive:{type:Boolean,attribute:"max-exclusive"},pattern:{type:String},inputGroup:{type:Boolean,attribute:"input-group"},regex:{type:Object}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value)}updated(e){super.updated(e),this.onUpdated(e)}render(){let e={"vl-input-field":!0,"vl-input-field--disabled":this.disabled,"vl-input-field--error":this.isInvalid||this.error,"vl-input-field--success":this.success,"vl-input-field--block":this.block,"vl-input-field--input-group-left":this.inputGroup&&this.isInputGroupPosition("first"),"vl-input-field--input-group-right":this.inputGroup&&this.isInputGroupPosition("last")};return(0,l.qy)`
            <input
                id=${this.id||l.s6}
                name=${this.name||l.s6}
                class=${(0,s.H)(e)}
                type=${this.type}
                aria-label=${this.label||l.s6}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?readonly=${this.readonly}
                .value=${(0,n.V)(this.value)}
                placeholder=${this.placeholder||l.s6}
                autocomplete=${this.autocomplete||l.s6}
                minlength=${this.minLength??l.s6}
                maxlength=${this.maxLength??l.s6}
                min=${this.min??l.s6}
                max=${this.max??l.s6}
                pattern=${this.pattern}
                @input=${this.onInput}
            />
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.value=this.initialValue}onInput(e){this.dispatchInput=!0,this.value=e?.target?.value}onUpdated(e){if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}}constructor(...e){super(...e),this.regex=h.f.regex,this.block=h.f.block,this.readonly=h.f.readonly,this.type=h.f.type,this.value=h.f.value,this.placeholder=h.f.placeholder,this.autocomplete=h.f.autocomplete,this.minLength=h.f.minLength,this.maxLength=h.f.maxLength,this.min=h.f.min,this.max=h.f.max,this.minExclusive=h.f.minExclusive,this.maxExclusive=h.f.maxExclusive,this.pattern=h.f.pattern,this.inputGroup=h.f.inputGroup,this.initialValue="",this.dispatchInput=!1,this.isInputGroupPosition=e=>{switch(e){case"first":return this.parentElement?.firstElementChild===this;case"last":return this.parentElement?.lastElementChild===this;default:return!1}}}}p=function(e,t,r,o){var i,l=arguments.length,s=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(l<3?i(s):l>3?i(t,r,s):i(t,r))||s);return l>3&&s&&Object.defineProperty(t,r,s),s}([(0,o.M1)("vl-input-field-next")],p)},"../../libs/form/src/next/input-field/vl-input-field.defaults.ts":(e,t,r)=>{r.d(t,{f:()=>o});let o={...r("../../libs/form/src/next/form-control/form-control.defaults.ts").i,block:!1,readonly:!1,type:"text",value:"",placeholder:"",autocomplete:"",minLength:null,maxLength:null,min:null,max:null,minExclusive:!1,maxExclusive:!1,pattern:"",inputGroup:!1,regex:null}}}]);