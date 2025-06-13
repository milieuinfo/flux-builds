"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7459],{"../../libs/components/src/next/button/index.ts":(e,t,o)=>{o.d(t,{Y:()=>r.Y});var r=o("../../libs/components/src/next/button/vl-button.component.ts")},"../../libs/components/src/next/button/vl-button.component.ts":(e,t,o)=>{o.d(t,{Y:()=>b});var r=o("../../libs/common/utilities/src/index.ts"),l=o("../../libs/common/utilities/src/css/global-styles-decorator.ts"),i=o("../../libs/common/utilities/src/css/icon/icon.css.ts"),a=o("../../node_modules/lit/index.js"),n=o("../../node_modules/lit/directives/class-map.js"),s=o("../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts"),c=o("../../libs/common/utilities/src/css/mixin/outline.mixin.css.ts");let d="0.2rem",p="0.1rem",v=`calc(${d} - ${p})`,m="waving-light",u=(0,a.AH)`
    /* Importeer loading animation, moet op dit niveau geïmporteerd worden. */
    ${((e,t)=>(0,a.AH)`
    @keyframes ${(0,a.iz)(e)} {
        0% {
            box-shadow: 10px -0px ${(0,a.iz)(t)}, 20px -0px ${(0,a.iz)(t)}, 30px 0px ${(0,a.iz)(t)};
        }

        10% {
            box-shadow: 10px -3px ${(0,a.iz)(t)}, 20px -0px ${(0,a.iz)(t)}, 30px -0px ${(0,a.iz)(t)};
        }

        20% {
            box-shadow: 10px -6px ${(0,a.iz)(t)}, 20px -3px ${(0,a.iz)(t)}, 30px -0px ${(0,a.iz)(t)};
        }

        30% {
            box-shadow: 10px -3px ${(0,a.iz)(t)}, 20px -6px ${(0,a.iz)(t)}, 30px -3px ${(0,a.iz)(t)};
        }

        40% {
            box-shadow: 10px -0px ${(0,a.iz)(t)}, 20px -3px ${(0,a.iz)(t)}, 30px -6px ${(0,a.iz)(t)};
        }

        50% {
            box-shadow: 10px -0px ${(0,a.iz)(t)}, 20px -0px ${(0,a.iz)(t)}, 30px -3px ${(0,a.iz)(t)};
        }

        60% {
            box-shadow: 10px -0px ${(0,a.iz)(t)}, 20px -0px ${(0,a.iz)(t)}, 30px -0px ${(0,a.iz)(t)};
        }

        100% {
            box-shadow: 10px -0px ${(0,a.iz)(t)}, 20px -0px ${(0,a.iz)(t)}, 30px -0px ${(0,a.iz)(t)};
        }
    }
`)(m,"var(--vl-action-color--disabled)")}

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
        border: ${(0,a.iz)(d)} solid var(--vl-action-color);
        border-radius: var(--vl-border-radius);
        color: var(--vl-white);
        max-width: 100%;

        ${(0,s.i)((0,a.AH)`
                padding: var(--vl-spacing--xsmall);
            `)}

        &:focus {
            ${(0,c.H)()}
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
            border: ${(0,a.iz)(d)} solid currentColor;
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
            border: ${(0,a.iz)(p)} var(--vl-action-tertiary-border-color) solid;
            transition: background-color 0.2s;
            padding: 0 calc(var(--vl-spacing--normal) + ${(0,a.iz)(v)});

            &:focus {
                color: var(--vl-action-tertiary-color--hover);
                border-color: var(--vl-action-tertiary-border-color);
            }

            &:hover,
            &:active {
                color: var(--vl-action-tertiary-color--hover);
                border-color: var(--vl-action-tertiary-border-color--hover);
                border-width: ${(0,a.iz)(d)};
                padding: 0 var(--vl-spacing--normal);
            }

            ${(0,s.i)((0,a.AH)`
                    padding: calc(
                        var(--vl-spacing--xsmall) + ${(0,a.iz)(v)}
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
                    var(--vl-spacing--small) + ${(0,a.iz)(v)}
                );
                padding-bottom: calc(
                    var(--vl-spacing--small) + ${(0,a.iz)(v)}
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
                padding-left: calc(6rem + ${(0,a.iz)(v)});
                padding-right: calc(6rem + ${(0,a.iz)(v)});

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
                padding: 0 calc(var(--vl-spacing--xsmall) + ${(0,a.iz)(v)});

                &:hover,
                &:active {
                    padding: 0 var(--vl-spacing--xsmall);
                }

                ${(0,s.i)((0,a.AH)`
                        padding: calc(
                            var(--vl-spacing--xsmall) + ${(0,a.iz)(v)}
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
                animation: ${(0,a.iz)(m)} infinite 1s linear;
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
`;var h=o("../../libs/components/src/next/button/vl-button.defaults.ts");class b extends r.jW{static get styles(){return[u,i.A]}static get properties(){return{type:{type:String},disabled:{type:Boolean},error:{type:Boolean},block:{type:Boolean},large:{type:Boolean},wide:{type:Boolean},narrow:{type:Boolean},secondary:{type:Boolean},tertiary:{type:Boolean},loading:{type:Boolean},icon:{type:String},iconPlacement:{type:String,attribute:"icon-placement",reflect:!0},iconOnly:{type:Boolean,attribute:"icon-only"},toggle:{type:Boolean},on:{type:Boolean,reflect:!0,hasChanged:(e,t)=>void 0!==t},controlled:{type:Boolean}}}updated(e){super.updated(e),e.has("on")&&this.toggle&&this.dispatchEvent(new CustomEvent("vl-toggle",{detail:{on:this.on},bubbles:!0,composed:!0})),e.has("iconPlacement")&&!this.iconPlacement&&(this.iconPlacement=h.j.iconPlacement)}render(){let e=null!==this.closest("vl-map"),t=this.tertiary||this.toggle&&!this.on,o={disabled:this.disabled,error:this.error,block:this.block,large:this.large,wide:this.wide,narrow:this.narrow,secondary:this.secondary,tertiary:t,loading:this.loading,"icon-only":this.icon&&this.iconOnly,"button-in-map":e};return(0,a.qy)` <button
            class=${(0,n.H)(o)}
            type=${this.type}
            ?disabled=${this.disabled}
            @click=${this.handleClick}
        >
            ${this.renderIcon(r.aK.BEFORE)}
            <slot></slot>
            ${this.renderIcon(r.aK.AFTER)}
        </button>`}renderIcon(e){if(!this.icon||e!==this.iconPlacement)return a.s6;let t={"vl-icon":!0,[`vl-icon--${this.icon}`]:!0,"vl-icon--right-margin":!this.iconOnly&&"before"===this.iconPlacement,"vl-icon--left-margin":!this.iconOnly&&"after"===this.iconPlacement};return(0,a.qy)`<span class=${(0,n.H)(t)}></span>`}handleClick(e){e.preventDefault(),e.stopPropagation(),this.toggle&&!this.controlled&&(this.on=!this.on),"submit"===this.type&&this.closest("form")?.requestSubmit(),"reset"===this.type&&this.closest("form")?.reset(),this.dispatchEvent(new CustomEvent("vl-click",{bubbles:!0,composed:!0}))}constructor(...e){super(...e),this.type=h.j.type,this.disabled=h.j.disabled,this.error=h.j.error,this.block=h.j.block,this.large=h.j.large,this.wide=h.j.wide,this.narrow=h.j.narrow,this.secondary=h.j.secondary,this.tertiary=h.j.tertiary,this.loading=h.j.loading,this.icon=h.j.icon,this.iconPlacement=h.j.iconPlacement,this.iconOnly=h.j.iconOnly,this.toggle=h.j.toggle,this.on=h.j.on,this.controlled=h.j.controlled}}b=function(e,t,o,r){var l,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(a=(i<3?l(a):i>3?l(t,o,a):l(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a}([(0,l.n)(),(0,r.M1)("vl-button-next")],b)},"../../libs/components/src/next/button/vl-button.defaults.ts":(e,t,o)=>{o.d(t,{j:()=>r});let r={type:"button",disabled:!1,error:!1,block:!1,large:!1,wide:!1,narrow:!1,secondary:!1,tertiary:!1,loading:!1,icon:"",iconPlacement:"before",iconOnly:!1,toggle:!1,on:!1,controlled:!1}},"../../libs/form/src/next/error-message/index.ts":(e,t,o)=>{o.d(t,{X:()=>r.X});var r=o("../../libs/form/src/next/error-message/vl-error-message.component.ts")},"../../libs/form/src/next/form-label/index.ts":(e,t,o)=>{o.d(t,{E:()=>r.E});var r=o("../../libs/form/src/next/form-label/vl-form-label.component.ts")},"../../libs/form/src/next/form-label/vl-form-label.component.ts":(e,t,o)=>{o.d(t,{E:()=>c});var r=o("../../libs/common/utilities/src/index.ts"),l=o("../../node_modules/@domg/govflanders-style/common/index.js"),i=o("../../node_modules/@domg/govflanders-style/component/index.js"),a=o("../../node_modules/lit/index.js"),n=o("../../node_modules/lit/directives/class-map.js"),s=o("../../libs/form/src/next/form-label/vl-form-label.defaults.ts");class c extends r.jW{static get styles(){return[l.h8,i.xV]}static get properties(){return{for:{type:String},label:{type:String},block:{type:Boolean},light:{type:Boolean}}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.focusFormControl)}updated(e){super.updated(e);let t=this.getFormControl();t?.setAttribute("label",this.label)}disconnectedCallback(){super.disconnectedCallback();let e=this.getFormControl();e?.removeAttribute("label"),this.removeEventListener("click",this.focusFormControl)}render(){let e={"vl-form__label":!0,"vl-form__label--block":this.block,"vl-form__label--light":this.light};return(0,a.qy)`<label for=${this.for} class=${(0,n.H)(e)}>${this.label}</label>`}getFormControl(){let e=this.closest("form");return e?.querySelector(`[id="${this.for}"]`)}focusFormControl(){let e=this.getFormControl();e?.focus()}constructor(...e){super(...e),this.for=s.x.for,this.label=s.x.label,this.block=s.x.block,this.light=s.x.light}}c=function(e,t,o,r){var l,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(a=(i<3?l(a):i>3?l(t,o,a):l(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a}([(0,r.M1)("vl-form-label-next")],c)},"../../libs/form/src/next/form-label/vl-form-label.defaults.ts":(e,t,o)=>{o.d(t,{x:()=>r});let r={for:"",label:"",block:!1,light:!1}},"../../libs/form/src/next/input-field/index.ts":(e,t,o)=>{o.d(t,{Y:()=>r.Y});var r=o("../../libs/form/src/next/input-field/vl-input-field.component.ts")},"../../libs/form/src/next/input-field/vl-input-field.component.ts":(e,t,o)=>{o.d(t,{Y:()=>h});var r=o("../../libs/common/utilities/src/index.ts"),l=o("../../node_modules/@domg/govflanders-style/common/index.js"),i=o("../../node_modules/@domg/govflanders-style/component/index.js"),a=o("../../node_modules/@open-wc/form-control/src/validators.js"),n=o("../../node_modules/lit/index.js"),s=o("../../node_modules/lit/directives/class-map.js"),c=o("../../node_modules/lit/directives/live.js"),d=o("../../libs/form/src/next/form-control/form-control.ts");let p={attribute:"min",key:"rangeUnderflow",message:e=>e.minExclusive?`Value must be greater than ${e.min}.`:`Value must be greater than or equal to ${e.min}.`,isValid:(e,t)=>!t||!e.min&&0!==e.min||!(parseFloat(t)<e.min)&&(!e.minExclusive||parseFloat(t)!==e.min)},v={attribute:"max",key:"rangeOverflow",message:e=>e.maxExclusive?`Value must be lesser than ${e.max}.`:`Value must be lesser than or equal to ${e.max}.`,isValid:(e,t)=>!t||!e.max&&0!==e.max||!(parseFloat(t)>e.max)&&(!e.maxExclusive||parseFloat(t)!==e.max)},m={attribute:"pattern",key:"patternMismatch",message:"Please match the requested format",isValid:(e,t)=>!t||!e.pattern&&!e.regex||new RegExp(e.pattern||e.regex).test(t)};var u=o("../../libs/form/src/next/input-field/vl-input-field.defaults.ts");class h extends d.M{static{this.formControlValidators=[...d.M.formControlValidators,a.bO,a.jD,p,v,m]}static get styles(){return[l.h8,l.BI,i._T]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},type:{type:String},value:{type:String,reflect:!0},placeholder:{type:String},autocomplete:{type:String},minLength:{type:Number,attribute:"min-length"},maxLength:{type:Number,attribute:"max-length"},min:{type:Number},max:{type:Number},minExclusive:{type:Boolean,attribute:"min-exclusive"},maxExclusive:{type:Boolean,attribute:"max-exclusive"},pattern:{type:String},regex:{type:Object}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value)}updated(e){super.updated(e),this.onUpdated(e)}render(){let e={"vl-input-field":!0,"vl-input-field--disabled":this.disabled,"vl-input-field--error":this.isInvalid||this.error,"vl-input-field--success":this.success,"vl-input-field--block":this.block};return(0,n.qy)`
            <input
                id=${this.id||n.s6}
                name=${this.name||n.s6}
                class=${(0,s.H)(e)}
                type=${this.type}
                aria-label=${this.label||n.s6}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?readonly=${this.readonly}
                .value=${(0,c.V)(this.value)}
                placeholder=${this.placeholder||n.s6}
                autocomplete=${this.autocomplete||n.s6}
                minlength=${this.minLength??n.s6}
                maxlength=${this.maxLength??n.s6}
                min=${this.min??n.s6}
                max=${this.max??n.s6}
                pattern=${this.pattern}
                @input=${this.onInput}
            />
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.value=this.initialValue}onInput(e){this.value=e?.target?.value}onUpdated(e){if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:e})),this.dispatchEventIfValid(e)}}constructor(...e){super(...e),this.regex=u.f.regex,this.block=u.f.block,this.readonly=u.f.readonly,this.type=u.f.type,this.value=u.f.value,this.placeholder=u.f.placeholder,this.autocomplete=u.f.autocomplete,this.minLength=u.f.minLength,this.maxLength=u.f.maxLength,this.min=u.f.min,this.max=u.f.max,this.minExclusive=u.f.minExclusive,this.maxExclusive=u.f.maxExclusive,this.pattern=u.f.pattern,this.initialValue=""}}h=function(e,t,o,r){var l,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(a=(i<3?l(a):i>3?l(t,o,a):l(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a}([(0,r.M1)("vl-input-field-next")],h)},"../../libs/form/src/next/input-field/vl-input-field.defaults.ts":(e,t,o)=>{o.d(t,{f:()=>r});let r={...o("../../libs/form/src/next/form-control/form-control.defaults.ts").i,block:!1,readonly:!1,type:"text",value:"",placeholder:"",autocomplete:"",minLength:null,maxLength:null,min:null,max:null,minExclusive:!1,maxExclusive:!1,pattern:"",regex:null}}}]);