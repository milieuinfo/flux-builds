"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1030],{"../../libs/form/src/next/error-message/vl-error-message.component.ts":(e,t,r)=>{r.d(t,{O:()=>u,X:()=>c});var i=r("../../libs/common/utilities/src/index.ts"),s=r("../../node_modules/@domg/govflanders-style/common/index.js"),o=r("../../node_modules/@domg/govflanders-style/component/index.js"),l=r("../../node_modules/lit/index.js"),n=r("../../node_modules/lit/directives/class-map.js"),a=r("../../libs/form/src/next/error-message/vl-error-message.defaults.ts");let d=(0,l.AH)`
    .vl-form__error {
        margin-top: 0.2rem;
    }

    .vl-pre-line {
        white-space: pre-line;
    }
`,u="vl-error-message-next";class c extends i.jW{static get styles(){return[s.h8,o.xV,d]}static get properties(){return{show:{type:Boolean,reflect:!0},preLine:{type:Boolean,attribute:"pre-line"},for:{type:String},state:{type:String},validationMessage:{type:String,attribute:"validation-message"}}}render(){let e={"vl-form__error":!0,"vl-pre-line":this.preLine};return(0,l.qy)`
            <p class=${(0,n.H)(e)} part="text" ?hidden=${!this.show}><slot>${this.validationMessage}</slot></p>
        `}constructor(...e){super(...e),this.show=a.M.show,this.preLine=a.M.preLine,this.for=a.M.for,this.state=a.M.state,this.validationMessage=""}}c=function(e,t,r,i){var s,o=arguments.length,l=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(l=(o<3?s(l):o>3?s(t,r,l):s(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l}([(0,i.M1)(u)],c)},"../../libs/form/src/next/error-message/vl-error-message.defaults.ts":(e,t,r)=>{r.d(t,{M:()=>i});let i={show:!1,preLine:!1,for:null,state:null}},"../../libs/form/src/next/form-control/form-control.defaults.ts":(e,t,r)=>{r.d(t,{i:()=>i});let i={id:"",name:"",label:"",required:!1,disabled:!1,error:!1,success:!1}},"../../libs/form/src/next/form-control/form-control.ts":(e,t,r)=>{r.d(t,{M:()=>u});var i=r("../../libs/form/src/next/form-control/form-control.defaults.ts"),s=r("../../node_modules/@open-wc/form-control/src/FormControlMixin.js"),o=r("../../node_modules/@open-wc/form-control/src/validators.js"),l=r("../../node_modules/lit/index.js"),n=r("../../node_modules/@open-wc/form-helpers/src/index.js"),a=r("../../libs/form/src/next/error-message/vl-error-message.component.ts"),d=r("../../libs/common/utilities/src/index.ts");r("../../node_modules/reflect-metadata/Reflect.js");class u extends(0,s.F)(d.jW){static{this.formControlValidators=[o.yt,o.Bt]}static{this.shadowRootOptions={...l.WF.shadowRootOptions,delegatesFocus:!0}}static get properties(){return{id:{type:String},name:{type:String},label:{type:String},required:{type:Boolean},disabled:{type:Boolean},error:{type:Boolean},success:{type:Boolean},isInvalid:{type:Boolean,state:!0}}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onKeydown),this.addEventListener("invalid",this.onInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydown),this.removeEventListener("invalid",this.onInvalid)}updated(e){super.updated(e),e.has("isInvalid")||(this.isInvalid=!1,this.hideErrorMessages())}resetFormControl(){this.isInvalid=!1,this.hideErrorMessages(),this.dispatchEvent(new Event("vl-reset",{bubbles:!0,composed:!0}))}dispatchEventIfValid(e){this.validity.valid&&this.dispatchEvent(new CustomEvent("vl-valid",{composed:!0,bubbles:!0,detail:e}))}onKeydown(e){"Enter"===e.code&&this.form&&this.submitFormOnEnter&&(0,n.tA)(this.form)}onInvalid(e){e.preventDefault(),this.isInvalid=!0,this.focusFirstInvalidInput(),this.showErrorMessage()}focusFirstInvalidInput(){let e=this.form?.querySelector(":invalid");this===e&&(e?.focus(),e?.scrollIntoView({behavior:"smooth",block:"center"}))}showErrorMessage(){let e="";for(let t in this.validity)if(this.validity[t]){e=t;break}let t=this.form?.querySelector(`${a.O}[for="${this.id}"][state="${e}"]`);t||(t=this.form?.querySelector(`${a.O}[for="${this.id}"]:not([state])`)),this.errorMessageText=t?.textContent,this.errorMessageText?this.validationTarget?.setAttribute("aria-description",this.errorMessageText):this.validationTarget?.removeAttribute("aria-description"),t?.setAttribute("validation-message",this.validationMessage),t?.setAttribute("show","")}hideErrorMessages(){let e=this.form?.querySelectorAll(`${a.O}[for="${this.id}"]`);this.errorMessageText=null,e?.forEach(e=>{e.removeAttribute("show")})}constructor(...e){super(...e),this.id=i.i.id,this.name=i.i.name,this.label=i.i.label,this.required=i.i.required,this.disabled=i.i.disabled,this.error=i.i.error,this.success=i.i.success,this.isInvalid=!1,this.submitFormOnEnter=!0}}},"../../libs/form/src/next/input-field/vl-input-field.component.ts":(e,t,r)=>{r.d(t,{Y:()=>m});var i=r("../../libs/common/utilities/src/index.ts"),s=r("../../node_modules/@open-wc/form-control/src/validators.js"),o=r("../../node_modules/lit/index.js"),l=r("../../node_modules/lit/directives/class-map.js"),n=r("../../node_modules/lit/directives/live.js"),a=r("../../libs/form/src/next/form-control/form-control.ts");let d={attribute:"min",key:"rangeUnderflow",message:e=>e.minExclusive?`Value must be greater than ${e.min}.`:`Value must be greater than or equal to ${e.min}.`,isValid:(e,t)=>!t||!e.min&&0!==e.min||!(parseFloat(t)<e.min)&&(!e.minExclusive||parseFloat(t)!==e.min)},u={attribute:"max",key:"rangeOverflow",message:e=>e.maxExclusive?`Value must be lesser than ${e.max}.`:`Value must be lesser than or equal to ${e.max}.`,isValid:(e,t)=>!t||!e.max&&0!==e.max||!(parseFloat(t)>e.max)&&(!e.maxExclusive||parseFloat(t)!==e.max)},c={attribute:"pattern",key:"patternMismatch",message:"Please match the requested format",isValid:(e,t)=>!t||!e.pattern&&!e.regex||new RegExp(e.pattern||e.regex).test(t)},p=(0,o.AH)`
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
        background: var(--vl-color--white);
        font-family: var(--vl-font);
        font-size: var(--vl-font-size--small);
        color: var(--vl-color--text);
        max-width: 100%;
        height: 3.5rem;
        line-height: 3.5rem;
        border-radius: 0.3rem;
        border: 0.1rem solid var(--vl-color--border-alt);
        padding: 0 1rem;
        transition: background-color 0.2s;

        &:hover,
        &.vl-input-field--input-group-left:hover,
        &.vl-input-field--input-group-right:hover {
            border: 0.2rem solid var(--vl-color--focus);
            padding: 0 0.9rem;
            border-right-width: 1px;
        }

        &:hover.vl-input-field--error {
            border-color: var(--vl-color--error);
        }

        &:hover.vl-input-field--success {
            border-color: var(--vl-color--success);
        }

        &:focus {
            box-shadow: none;
            outline: 3px solid var(--vl-color--focus);
            outline-offset: 2px;
            border: 0.1rem solid var(--vl-color--text-light);
            padding: 0 1rem;
        }

        &:focus.vl-input-field--error {
            border-color: var(--vl-color--error);
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
            border-color: var(--vl-color--error);
            background-color: var(--vl-color--error-background);
            display: inline;
        }

        &.vl-input-field--success {
            border-color: var(--vl-color--success);
            background-color: var(--vl-color--success-bg);
            display: inline;
        }

        &.vl-input-field--disabled {
            border-color: var(--vl-color--border-alt);
            background-color: var(--vl-color--border-alt--background);
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
`;var h=r("../../libs/form/src/next/input-field/vl-input-field.defaults.ts");class m extends a.M{static{this.formControlValidators=[...a.M.formControlValidators,s.bO,s.jD,d,u,c]}static get styles(){return[p]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},type:{type:String},value:{type:String,reflect:!0},placeholder:{type:String},autocomplete:{type:String},minLength:{type:Number,attribute:"min-length"},maxLength:{type:Number,attribute:"max-length"},min:{type:Number},max:{type:Number},minExclusive:{type:Boolean,attribute:"min-exclusive"},maxExclusive:{type:Boolean,attribute:"max-exclusive"},inputMode:{type:String,state:!0},pattern:{type:String},inputGroup:{type:Boolean,attribute:"input-group"},regex:{type:Object}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value)}updated(e){super.updated(e),this.onUpdated(e)}render(){let e={"vl-input-field":!0,"vl-input-field--disabled":this.disabled,"vl-input-field--error":this.isInvalid||this.error,"vl-input-field--success":this.success,"vl-input-field--block":this.block,"vl-input-field--input-group-left":this.inputGroup&&this.isInputGroupPosition("first"),"vl-input-field--input-group-right":this.inputGroup&&this.isInputGroupPosition("last")};return(0,o.qy)`
            <input
                id=${this.id||o.s6}
                name=${this.name||o.s6}
                class=${(0,l.H)(e)}
                type=${this.type}
                aria-label=${this.label||o.s6}
                aria-invalid=${this.isInvalid||o.s6}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?readonly=${this.readonly}
                .value=${(0,n.V)(this.value)}
                placeholder=${this.placeholder||o.s6}
                autocomplete=${this.autocomplete||o.s6}
                minlength=${this.minLength??o.s6}
                maxlength=${this.maxLength??o.s6}
                min=${this.min??o.s6}
                max=${this.max??o.s6}
                pattern=${this.pattern}
                inputmode=${this.inputMode}
                @input=${this.onInput}
            />
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.value=this.initialValue}onInput(e){this.dispatchInput=!0,this.value=e?.target?.value}onUpdated(e){if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}}constructor(...e){super(...e),this.regex=h.f.regex,this.block=h.f.block,this.readonly=h.f.readonly,this.type=h.f.type,this.value=h.f.value,this.placeholder=h.f.placeholder,this.autocomplete=h.f.autocomplete,this.minLength=h.f.minLength,this.maxLength=h.f.maxLength,this.min=h.f.min,this.max=h.f.max,this.minExclusive=h.f.minExclusive,this.maxExclusive=h.f.maxExclusive,this.pattern=h.f.pattern,this.inputGroup=h.f.inputGroup,this.initialValue="",this.dispatchInput=!1,this.isInputGroupPosition=e=>{switch(e){case"first":return this.parentElement?.firstElementChild===this;case"last":return this.parentElement?.lastElementChild===this;default:return!1}}}}m=function(e,t,r,i){var s,o=arguments.length,l=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(l=(o<3?s(l):o>3?s(t,r,l):s(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l}([(0,i.M1)("vl-input-field-next")],m)},"../../libs/form/src/next/input-field/vl-input-field.defaults.ts":(e,t,r)=>{r.d(t,{f:()=>i});let i={...r("../../libs/form/src/next/form-control/form-control.defaults.ts").i,block:!1,readonly:!1,type:"text",value:"",placeholder:"",autocomplete:"",minLength:null,maxLength:null,min:null,max:null,minExclusive:!1,maxExclusive:!1,pattern:"",inputGroup:!1,regex:null}}}]);