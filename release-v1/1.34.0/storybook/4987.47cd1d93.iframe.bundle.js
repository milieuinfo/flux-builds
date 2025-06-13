"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[4987],{"./libs/components/src/next/button/index.ts":(e,t,o)=>{o.d(t,{Z:()=>r.Z});var r=o("./libs/components/src/next/button/vl-button.component.ts")},"./libs/components/src/next/button/vl-button.component.ts":(e,t,o)=>{let r;o.d(t,{Z:()=>g,O:()=>b});var l=o("./node_modules/lit/index.js"),i=o("./libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts"),s=o("./libs/common/utilities/src/css/mixin/outline.mixin.css.ts");let n="0.2rem",a="0.1rem",c=`calc(${n} - ${a})`,d="waving-light",m=(0,l.iv)`
    /* Importeer loading animation, moet op dit niveau geïmporteerd worden. */
    ${(r="var(--vl-action-color--disabled)",(0,l.iv)`
    @keyframes ${(0,l.$m)(d)} {
        0% {
            box-shadow: 10px -0px ${(0,l.$m)(r)}, 20px -0px ${(0,l.$m)(r)}, 30px 0px ${(0,l.$m)(r)};
        }

        10% {
            box-shadow: 10px -3px ${(0,l.$m)(r)}, 20px -0px ${(0,l.$m)(r)}, 30px -0px ${(0,l.$m)(r)};
        }

        20% {
            box-shadow: 10px -6px ${(0,l.$m)(r)}, 20px -3px ${(0,l.$m)(r)}, 30px -0px ${(0,l.$m)(r)};
        }

        30% {
            box-shadow: 10px -3px ${(0,l.$m)(r)}, 20px -6px ${(0,l.$m)(r)}, 30px -3px ${(0,l.$m)(r)};
        }

        40% {
            box-shadow: 10px -0px ${(0,l.$m)(r)}, 20px -3px ${(0,l.$m)(r)}, 30px -6px ${(0,l.$m)(r)};
        }

        50% {
            box-shadow: 10px -0px ${(0,l.$m)(r)}, 20px -0px ${(0,l.$m)(r)}, 30px -3px ${(0,l.$m)(r)};
        }

        60% {
            box-shadow: 10px -0px ${(0,l.$m)(r)}, 20px -0px ${(0,l.$m)(r)}, 30px -0px ${(0,l.$m)(r)};
        }

        100% {
            box-shadow: 10px -0px ${(0,l.$m)(r)}, 20px -0px ${(0,l.$m)(r)}, 30px -0px ${(0,l.$m)(r)};
        }
    }
`)}

    button {
        /* Reset styles - gebaseerd op DV mixin > _buttons.scss */
        border-radius: 0;
        appearance: none;
        -webkit-appearance: none; // doesn't work without prefix on Safari iOS11
        border: 0;
        background-color: transparent;
        padding: 0;

        /* Button styles - gebaseerd op DV _button.scss */
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 3.5rem;
        font-family: inherit;
        font-size: var(--vl-font-size--small);
        font-weight: 500;
        padding: var(--vl-spacing--xxsmall) var(--vl-spacing--normal);
        background-color: var(--vl-action-color);
        border: ${(0,l.$m)(n)} solid var(--vl-action-color);
        border-radius: var(--vl-border-radius);
        color: var(--vl-white);
        max-width: 100%;

        ${(0,i.R)((0,l.iv)`
                padding: var(--vl-spacing--xsmall);
            `)}

        &:focus {
            ${(0,s.B)()}
        }

        &:hover {
            border-color: var(--vl-action-color--hover);
            background-color: var(--vl-action-color--hover);
        }

        &:active {
            border-color: var(--vl-action-color--active);
            background-color: var(--vl-action-color--active);
        }

        &.secondary {
            color: var(--vl-action-color);
            background-color: transparent;
            border: ${(0,l.$m)(n)} solid currentColor;
            transition: color 0.2s, border-color 0.2s;

            &:focus {
                color: var(--vl-action-color--active);
            }

            &:hover,
            &:active {
                color: var(--vl-action-color--hover);
            }
        }

        &.tertiary {
            color: var(--vl-action-color);
            background-color: transparent;
            border: ${(0,l.$m)(a)} var(--vl-action-tertiary-border-color) solid;
            transition: background-color 0.2s;
            padding: 0 calc(var(--vl-spacing--normal) + ${(0,l.$m)(c)});

            &:focus {
                color: var(--vl-action-tertiary-color--hover);
                border-color: var(--vl-action-tertiary-border-color);
            }

            &:hover,
            &:active {
                color: var(--vl-action-tertiary-color--hover);
                border-color: var(--vl-action-tertiary-border-color--hover);
                border-width: ${(0,l.$m)(n)};
                padding: 0 var(--vl-spacing--normal);
            }

            ${(0,i.R)((0,l.iv)`
                    padding: calc(
                        var(--vl-spacing--xsmall) + ${(0,l.$m)(c)}
                    );

                    &:hover,
                    &:active {
                        padding: var(--vl-spacing--xsmall);
                    }
                `)}
        }

        &.error {
            background-color: var(--vl-error-color);
            border-color: var(--vl-error-color);

            &:hover,
            &:active {
                background-color: var(--vl-error-color--hover);
                border-color: var(--vl-error-color--hover);
            }

            &.secondary {
                color: var(--vl-error-color);
                background-color: transparent;

                &:hover,
                &:active {
                    color: var(--vl-error-color--hover);
                }
            }

            &.tertiary {
                color: var(--vl-error-color);
                border-color: var(--vl-error-color);
                background-color: transparent;

                &:hover,
                &:active {
                    color: var(--vl-error-color--hover);
                    border-color: var(--vl-error-color--hover);
                }
            }
        }

        &.block {
            display: flex;
            width: 100%;
        }

        &.large {
            padding-top: var(--vl-spacing--small);
            padding-bottom: var(--vl-spacing--small);
            font-size: var(--vl-font-size);

            &.tertiary {
                padding-top: calc(
                    var(--vl-spacing--small) + ${(0,l.$m)(c)}
                );
                padding-bottom: calc(
                    var(--vl-spacing--small) + ${(0,l.$m)(c)}
                );

                &:hover,
                &:active {
                    padding-top: var(--vl-spacing--small);
                    padding-bottom: var(--vl-spacing--small);
                }
            }
        }

        &.wide {
            padding-left: 6rem;
            padding-right: 6rem;

            &.tertiary {
                padding-left: calc(6rem + ${(0,l.$m)(c)});
                padding-right: calc(6rem + ${(0,l.$m)(c)});

                &:hover,
                &:active {
                    padding-left: 6rem;
                    padding-right: 6rem;
                }
            }
        }

        &.narrow {
            padding-left: var(--vl-spacing--xsmall);
            padding-right: var(--vl-spacing--xsmall);

            &.tertiary {
                padding: 0 calc(var(--vl-spacing--xsmall) + ${(0,l.$m)(c)});

                &:hover,
                &:active {
                    padding: 0 var(--vl-spacing--xsmall);
                }

                ${(0,i.R)((0,l.iv)`
                        padding: calc(
                            var(--vl-spacing--xsmall) + ${(0,l.$m)(c)}
                        );

                        &:hover,
                        &:active {
                            padding: var(--vl-spacing--xsmall);
                        }
                    `)}
            }
        }

        &.disabled {
            color: var(--vl-action-color--disabled);
            background-color: var(--vl-action-background-color--disabled);
            border-color: var(--vl-action-background-color--disabled);
            cursor: not-allowed;

            &:focus,
            &:hover,
            &:active {
                color: var(--vl-action-color--disabled);
                background-color: var(--vl-action-background-color--disabled);
                border-color: var(--vl-action-background-color--disabled);
            }
        }

        &.loading {
            color: var(--vl-white);
            background-color: var(--vl-action-background-color--disabled);
            border-color: var(--vl-action-background-color--disabled);
            padding: var(--vl-spacing--xsmall) 8rem var(--vl-spacing--xsmall) 4rem;
            position: relative;

            &::after {
                animation: ${(0,l.$m)(d)} infinite 1s linear;
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                right: 4rem;
                margin-top: -0.2rem;
                margin-right: 3.2rem;
                width: 0.4rem;
                height: 0.4rem;
                background-color: var(--vl-action-background-color--disabled);
                border-radius: 50%;
                box-shadow: 1rem 0 var(--vl-background-color), 2rem 0 var(--vl-background-color),
                    3rem 0 var(--vl-background-color);
            }

            &:focus,
            &:hover,
            &:active {
                color: var(--vl-white);
            }

            &.disabled {
                cursor: not-allowed;
            }
        }

        /* In map styles */
        &.button-in-map {
            &.tertiary {
                background-color: var(--vl-map-background-color);
            }
        }

        /* Icon styles */
        &.icon-only {
            width: 3.5rem;
            padding: 0;
        }
    }
`;var p=o("./libs/common/utilities/src/css/icon/icon.css.ts"),v=o("./libs/common/utilities/src/index.ts"),h=o("./node_modules/lit/directives/class-map.js"),u=o("./libs/common/utilities/src/css/global-styles-decorator.ts");let b={type:"button",disabled:!1,error:!1,block:!1,large:!1,wide:!1,narrow:!1,secondary:!1,tertiary:!1,loading:!1,icon:"",iconPlacement:"before",iconOnly:!1,toggle:!1,on:!1,controlled:!1};class g extends v.fS{static get styles(){return[m,p.Z]}static get properties(){return{type:{type:String},disabled:{type:Boolean},error:{type:Boolean},block:{type:Boolean},large:{type:Boolean},wide:{type:Boolean},narrow:{type:Boolean},secondary:{type:Boolean},tertiary:{type:Boolean},loading:{type:Boolean},icon:{type:String},iconPlacement:{type:String,attribute:"icon-placement",reflect:!0},iconOnly:{type:Boolean,attribute:"icon-only"},toggle:{type:Boolean},on:{type:Boolean,reflect:!0,hasChanged:(e,t)=>void 0!==t},controlled:{type:Boolean}}}updated(e){super.updated(e),e.has("on")&&this.toggle&&this.dispatchEvent(new CustomEvent("vl-toggle",{detail:{on:this.on},bubbles:!0,composed:!0})),e.has("iconPlacement")&&!this.iconPlacement&&(this.iconPlacement=b.iconPlacement)}render(){let e=null!==this.closest("vl-map"),t=this.tertiary||this.toggle&&!this.on,o={disabled:this.disabled,error:this.error,block:this.block,large:this.large,wide:this.wide,narrow:this.narrow,secondary:this.secondary,tertiary:t,loading:this.loading,"icon-only":this.icon&&this.iconOnly,"button-in-map":e};return(0,l.dy)` <button
            class=${(0,h.$)(o)}
            type=${this.type}
            ?disabled=${this.disabled}
            @click=${this.handleClick}
        >
            ${this.renderIcon(v.T1.BEFORE)}
            <slot></slot>
            ${this.renderIcon(v.T1.AFTER)}
        </button>`}renderIcon(e){if(!this.icon||e!==this.iconPlacement)return l.Ld;let t={"vl-icon":!0,[`vl-icon--${this.icon}`]:!0,"vl-icon--right-margin":!this.iconOnly&&"before"===this.iconPlacement,"vl-icon--left-margin":!this.iconOnly&&"after"===this.iconPlacement};return(0,l.dy)`<span class=${(0,h.$)(t)}></span>`}handleClick(e){e.preventDefault(),e.stopPropagation(),this.toggle&&!this.controlled&&(this.on=!this.on),"submit"===this.type&&this.closest("form")?.requestSubmit(),"reset"===this.type&&this.closest("form")?.reset(),this.dispatchEvent(new CustomEvent("vl-click",{bubbles:!0,composed:!0}))}constructor(...e){super(...e),this.type=b.type,this.disabled=b.disabled,this.error=b.error,this.block=b.block,this.large=b.large,this.wide=b.wide,this.narrow=b.narrow,this.secondary=b.secondary,this.tertiary=b.tertiary,this.loading=b.loading,this.icon=b.icon,this.iconPlacement=b.iconPlacement,this.iconOnly=b.iconOnly,this.toggle=b.toggle,this.on=b.on,this.controlled=b.controlled}}g=function(e,t,o,r){var l,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(s=(i<3?l(s):i>3?l(t,o,s):l(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s}([(0,u.Q)(),(0,v.a6)("vl-button-next")],g)},"./libs/form/src/next/error-message/index.ts":(e,t,o)=>{o.d(t,{m:()=>r.ml});var r=o("./libs/form/src/next/error-message/vl-error-message.component.ts")},"./libs/form/src/next/error-message/vl-error-message.component.ts":(e,t,o)=>{o.d(t,{WU:()=>a,ml:()=>d,JZ:()=>c});var r=o("./libs/common/utilities/src/index.ts"),l=o("./node_modules/lit/index.js"),i=o("./node_modules/@domg/govflanders-style/component/index.js"),s=o("./node_modules/@domg/govflanders-style/common/index.js");let n=(0,l.iv)`
    .vl-form__error {
        margin-top: 0.2rem;
    }
`,a="vl-error-message-next",c={show:!1,for:null,state:null};class d extends r.fS{static get styles(){return[s.YN,i.J8,n]}static get properties(){return{show:{type:Boolean,reflect:!0},for:{type:String},state:{type:String}}}render(){return(0,l.dy)` <p class="vl-form__error" ?hidden=${!this.show}><slot></slot></p> `}constructor(...e){super(...e),this.show=c.show,this.for=c.for,this.state=c.state}}d=function(e,t,o,r){var l,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(s=(i<3?l(s):i>3?l(t,o,s):l(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s}([(0,r.a6)(a)],d)},"./libs/form/src/next/form-control/form-control.ts":(e,t,o)=>{o.d(t,{E:()=>c,N:()=>d});var r=o("./node_modules/@open-wc/form-control/src/FormControlMixin.js"),l=o("./node_modules/@open-wc/form-control/src/validators.js"),i=o("./node_modules/lit/index.js"),s=o("./node_modules/@open-wc/form-helpers/src/index.js"),n=o("./libs/form/src/next/error-message/vl-error-message.component.ts"),a=o("./libs/common/utilities/src/index.ts");o("./node_modules/reflect-metadata/Reflect.js");let c={id:"",name:"",label:"",required:!1,disabled:!1,error:!1,success:!1};class d extends(0,r.N)(a.fS){static{this.formControlValidators=[l.np,l.Hg]}static{this.shadowRootOptions={...i.oi.shadowRootOptions,delegatesFocus:!0}}static get properties(){return{id:{type:String},name:{type:String},label:{type:String},required:{type:Boolean},disabled:{type:Boolean},error:{type:Boolean},success:{type:Boolean},isInvalid:{type:Boolean,state:!0}}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onKeydown),this.addEventListener("invalid",this.onInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydown),this.removeEventListener("invalid",this.onInvalid)}updated(e){super.updated(e),e.has("isInvalid")||(this.isInvalid=!1,this.hideErrorMessages())}resetFormControl(){this.isInvalid=!1,this.hideErrorMessages(),this.dispatchEvent(new Event("vl-reset",{bubbles:!0,composed:!0}))}dispatchEventIfValid(e){this.validity.valid&&this.dispatchEvent(new CustomEvent("vl-valid",{composed:!0,bubbles:!0,detail:e}))}onKeydown(e){"Enter"===e.code&&this.form&&this.submitFormOnEnter&&(0,s.Ps)(this.form)}onInvalid(e){e.preventDefault(),this.isInvalid=!0,this.focusFirstInvalidInput(),this.showErrorMessage()}focusFirstInvalidInput(){let e=this.form?.querySelector(":invalid");this===e&&(e?.focus(),e?.scrollIntoView({behavior:"smooth",block:"center"}))}showErrorMessage(){let e="";for(let t in this.validity)if(this.validity[t]){e=t;break}let t=this.form?.querySelector(`${n.WU}[for="${this.id}"][state="${e}"]`);t||(t=this.form?.querySelector(`${n.WU}[for="${this.id}"]:not([state])`)),t?.setAttribute("show","")}hideErrorMessages(){let e=this.form?.querySelectorAll(`${n.WU}[for="${this.id}"]`);e?.forEach(e=>{e.removeAttribute("show")})}constructor(...e){super(...e),this.id=c.id,this.name=c.name,this.label=c.label,this.required=c.required,this.disabled=c.disabled,this.error=c.error,this.success=c.success,this.isInvalid=!1,this.submitFormOnEnter=!0}}},"./libs/form/src/next/form-label/index.ts":(e,t,o)=>{o.d(t,{i:()=>r.i});var r=o("./libs/form/src/next/form-label/vl-form-label.component.ts")},"./libs/form/src/next/form-label/vl-form-label.component.ts":(e,t,o)=>{o.d(t,{i:()=>c,n:()=>a});var r=o("./libs/common/utilities/src/index.ts"),l=o("./node_modules/@domg/govflanders-style/common/index.js"),i=o("./node_modules/@domg/govflanders-style/component/index.js"),s=o("./node_modules/lit/index.js"),n=o("./node_modules/lit/directives/class-map.js");let a={for:"",label:"",block:!1,light:!1};class c extends r.fS{static get styles(){return[l.YN,i.J8]}static get properties(){return{for:{type:String},label:{type:String},block:{type:Boolean},light:{type:Boolean}}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.focusFormControl)}updated(e){super.updated(e);let t=this.getFormControl();t?.setAttribute("label",this.label)}disconnectedCallback(){super.disconnectedCallback();let e=this.getFormControl();e?.removeAttribute("label"),this.removeEventListener("click",this.focusFormControl)}render(){let e={"vl-form__label":!0,"vl-form__label--block":this.block,"vl-form__label--light":this.light};return(0,s.dy)`<label for=${this.for} class=${(0,n.$)(e)}>${this.label}</label>`}getFormControl(){let e=this.closest("form");return e?.querySelector(`[id="${this.for}"]`)}focusFormControl(){let e=this.getFormControl();e?.focus()}constructor(...e){super(...e),this.for=a.for,this.label=a.label,this.block=a.block,this.light=a.light}}c=function(e,t,o,r){var l,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(s=(i<3?l(s):i>3?l(t,o,s):l(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s}([(0,r.a6)("vl-form-label-next")],c)},"./libs/form/src/next/input-field/index.ts":(e,t,o)=>{o.d(t,{z:()=>r.z});var r=o("./libs/form/src/next/input-field/vl-input-field.component.ts")},"./libs/form/src/next/input-field/vl-input-field.component.ts":(e,t,o)=>{o.d(t,{z:()=>u,E:()=>h});var r=o("./node_modules/lit/index.js"),l=o("./node_modules/@domg/govflanders-style/component/index.js"),i=o("./node_modules/lit/directives/live.js"),s=o("./node_modules/lit/directives/class-map.js"),n=o("./node_modules/@domg/govflanders-style/common/index.js");let a={attribute:"min",key:"rangeUnderflow",message:e=>e.minExclusive?`Value must be greater than ${e.min}.`:`Value must be greater than or equal to ${e.min}.`,isValid:(e,t)=>!t||!e.min&&0!==e.min||!(parseFloat(t)<e.min)&&(!e.minExclusive||parseFloat(t)!==e.min)},c={attribute:"max",key:"rangeOverflow",message:e=>e.maxExclusive?`Value must be lesser than ${e.max}.`:`Value must be lesser than or equal to ${e.max}.`,isValid:(e,t)=>!t||!e.max&&0!==e.max||!(parseFloat(t)>e.max)&&(!e.maxExclusive||parseFloat(t)!==e.max)},d={attribute:"pattern",key:"patternMismatch",message:"Please match the requested format",isValid:(e,t)=>!t||!e.pattern&&!e.regex||new RegExp(e.pattern||e.regex).test(t)};var m=o("./libs/form/src/next/form-control/form-control.ts"),p=o("./libs/common/utilities/src/index.ts"),v=o("./node_modules/@open-wc/form-control/src/validators.js");let h={...m.E,block:!1,readonly:!1,type:"text",value:"",placeholder:"",autocomplete:"",minLength:null,maxLength:null,min:null,max:null,minExclusive:!1,maxExclusive:!1,pattern:"",regex:null};class u extends m.N{static{this.formControlValidators=[...m.N.formControlValidators,v.OP,v.dH,a,c,d]}static get styles(){return[n.YN,n.Oh,l.K$]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},type:{type:String},value:{type:String,reflect:!0},placeholder:{type:String},autocomplete:{type:String},minLength:{type:Number,attribute:"min-length"},maxLength:{type:Number,attribute:"max-length"},min:{type:Number},max:{type:Number},minExclusive:{type:Boolean,attribute:"min-exclusive"},maxExclusive:{type:Boolean,attribute:"max-exclusive"},pattern:{type:String},regex:{type:Object}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value)}updated(e){super.updated(e),this.onUpdated(e)}render(){let e={"vl-input-field":!0,"vl-input-field--disabled":this.disabled,"vl-input-field--error":this.isInvalid||this.error,"vl-input-field--success":this.success,"vl-input-field--block":this.block};return(0,r.dy)`
            <input
                id=${this.id||r.Ld}
                name=${this.name||r.Ld}
                class=${(0,s.$)(e)}
                type=${this.type}
                aria-label=${this.label||r.Ld}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?readonly=${this.readonly}
                .value=${(0,i.a)(this.value)}
                placeholder=${this.placeholder||r.Ld}
                autocomplete=${this.autocomplete||r.Ld}
                minlength=${this.minLength??r.Ld}
                maxlength=${this.maxLength??r.Ld}
                min=${this.min??r.Ld}
                max=${this.max??r.Ld}
                pattern=${this.pattern}
                @input=${this.onInput}
            />
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.value=this.initialValue}onInput(e){this.value=e?.target?.value}onUpdated(e){if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:e})),this.dispatchEventIfValid(e)}}constructor(...e){super(...e),this.regex=h.regex,this.block=h.block,this.readonly=h.readonly,this.type=h.type,this.value=h.value,this.placeholder=h.placeholder,this.autocomplete=h.autocomplete,this.minLength=h.minLength,this.maxLength=h.maxLength,this.min=h.min,this.max=h.max,this.minExclusive=h.minExclusive,this.maxExclusive=h.maxExclusive,this.pattern=h.pattern,this.initialValue=""}}u=function(e,t,o,r){var l,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(s=(i<3?l(s):i>3?l(t,o,s):l(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s}([(0,p.a6)("vl-input-field-next")],u)},"./node_modules/tslib/tslib.es6.mjs":(e,t,o)=>{function r(e,t,o,r){var l,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(s=(i<3?l(s):i>3?l(t,o,s):l(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s}o.d(t,{gn:()=>r}),Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);