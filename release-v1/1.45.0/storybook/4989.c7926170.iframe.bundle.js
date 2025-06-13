"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4989],{"../../node_modules/lit/directives/live.js":(e,t,l)=>{l.d(t,{V:()=>i});var o=l("../../node_modules/lit-html/lit-html.js"),s=l("../../node_modules/lit-html/directive.js"),r=l("../../node_modules/lit-html/directive-helpers.js"),i=(0,s.u$)(class extends s.WL{constructor(e){if(super(e),e.type!==s.OA.PROPERTY&&e.type!==s.OA.ATTRIBUTE&&e.type!==s.OA.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,r.Rt)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,t){var[l]=t;if(l===o.c0||l===o.s6)return l;var i=e.element,n=e.name;if(e.type===s.OA.PROPERTY){if(l===i[n])return o.c0}else if(e.type===s.OA.BOOLEAN_ATTRIBUTE){if(!!l===i.hasAttribute(n))return o.c0}else if(e.type===s.OA.ATTRIBUTE&&i.getAttribute(n)===l+"")return o.c0;return(0,r.mY)(e),l}})},"../../libs/components/src/next/title/index.ts":(e,t,l)=>{l.d(t,{I:()=>o.I});var o=l("../../libs/components/src/next/title/vl-title.component.ts")},"../../libs/components/src/next/title/vl-title.component.ts":(e,t,l)=>{l.d(t,{I:()=>p});var o=l("../../libs/common/utilities/src/index.ts");l("../../node_modules/@lit/reactive-element/reactive-element.js");var s=l("../../node_modules/lit-html/lit-html.js");l("../../node_modules/lit-element/lit-element.js");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var r=(e,t,l)=>{for(var o of t)if(o[0]===e)return(0,o[1])();return null==l?void 0:l()},i=l("../../node_modules/lit/directives/class-map.js"),n=l("../../libs/common/utilities/src/css/index.ts"),a=l("../../node_modules/lit/index.js");let c=[(0,a.AH)`
        h1 {
            ${n.Cv}
        }

        h2 {
            ${n.J9}
        }

        h3 {
            ${n.QL}
        }

        h4 {
            ${n.JU}
        }

        h5 {
            ${n.Qw}
        }

        h6 {
            ${n.Jd}
        }
    `,...[1,2,3,4,5,6].map(e=>(0,a.AH)`
                h${e} {
                    display: flex;
                    align-items: center;
                }

                h${e}.alt {
                    text-transform: uppercase;
                    font-weight: 500;
                    border-bottom: 3px solid rgb(232, 235, 238);
                    padding: 1.3rem 0 0.7rem;
                    margin: 0 0 2rem;
                }

                h${e}.underline {
                    border-bottom: 1px solid #cbd2da;
                    margin-bottom: 1.5rem;
                }

                h${e}.no-space-bottom {
                    margin-bottom: 0;
                }

                @media screen and (max-width: ${n.gT}px) {
                    h${e}.underline {
                        margin-bottom: 1rem;
                    }
                }
            `)];var d=l("../../libs/components/src/next/title/vl-title.defaults.ts");class p extends o.jW{static get styles(){return[c]}static get properties(){return{type:{type:String},underline:{type:Boolean},noSpaceBottom:{type:Boolean,attribute:"no-space-bottom"},alt:{type:Boolean}}}render(){let e={underline:this.underline,"no-space-bottom":this.noSpaceBottom,alt:this.alt};return(0,s.qy)`
            ${r(this.type,[["h1",()=>(0,s.qy)` <h1 class=${(0,i.H)(e)} part="h1">
                            <slot></slot>
                        </h1>`],["h2",()=>(0,s.qy)` <h2 class=${(0,i.H)(e)} part="h2">
                            <slot></slot>
                        </h2>`],["h3",()=>(0,s.qy)` <h3 class=${(0,i.H)(e)} part="h3">
                            <slot></slot>
                        </h3>`],["h4",()=>(0,s.qy)` <h4 class=${(0,i.H)(e)} part="h4">
                            <slot></slot>
                        </h4>`],["h5",()=>(0,s.qy)` <h5 class=${(0,i.H)(e)} part="h5">
                            <slot></slot>
                        </h5>`],["h6",()=>(0,s.qy)` <h6 class=${(0,i.H)(e)} part="h6">
                            <slot></slot>
                        </h6>`]],()=>(0,s.qy)` <h1 class=${(0,i.H)(e)} part="h1">
                    <slot></slot>
                </h1>`)}
        `}constructor(...e){super(...e),this.type=d.D.type,this.underline=d.D.underline,this.noSpaceBottom=d.D.noSpaceBottom,this.alt=d.D.alt}}p=function(e,t,l,o){var s,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,l):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,l,o);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(i=(r<3?s(i):r>3?s(t,l,i):s(t,l))||i);return r>3&&i&&Object.defineProperty(t,l,i),i}([(0,o.M1)("vl-title-next")],p)},"../../libs/components/src/next/title/vl-title.defaults.ts":(e,t,l)=>{l.d(t,{D:()=>o});let o={type:"h1",underline:!1,alt:!1,noSpaceBottom:!1}},"../../libs/form/src/next/form-label/index.ts":(e,t,l)=>{l.d(t,{E:()=>o.E});var o=l("../../libs/form/src/next/form-label/vl-form-label.component.ts")},"../../libs/form/src/next/form-label/vl-form-label.component.ts":(e,t,l)=>{l.d(t,{E:()=>c});var o=l("../../libs/common/utilities/src/index.ts"),s=l("../../node_modules/@domg/govflanders-style/common/index.js"),r=l("../../node_modules/lit/index.js"),i=l("../../node_modules/lit/directives/class-map.js");let n=(0,r.AH)`
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
`;var a=l("../../libs/form/src/next/form-label/vl-form-label.defaults.ts");class c extends o.jW{static get styles(){return[s.h8,n]}static get properties(){return{for:{type:String},label:{type:String},block:{type:Boolean},light:{type:Boolean}}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.focusFormControl)}updated(e){super.updated(e);let t=this.getFormControl();t?.setAttribute("label",this.label)}disconnectedCallback(){super.disconnectedCallback();let e=this.getFormControl();e?.removeAttribute("label"),this.removeEventListener("click",this.focusFormControl)}render(){let e={"vl-form__label":!0,"vl-form__label--block":this.block,"vl-form__label--light":this.light};return(0,r.qy)` <label for=${this.for} class=${(0,i.H)(e)} part="label"> ${this.label} </label> `}getFormControl(){let e=this.closest("form");return e?.querySelector(`[id="${this.for}"]`)}focusFormControl(){let e=this.getFormControl();e?.focus()}constructor(...e){super(...e),this.for=a.x.for,this.label=a.x.label,this.block=a.x.block,this.light=a.x.light}}c=function(e,t,l,o){var s,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,l):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,l,o);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(i=(r<3?s(i):r>3?s(t,l,i):s(t,l))||i);return r>3&&i&&Object.defineProperty(t,l,i),i}([(0,o.M1)("vl-form-label-next")],c)},"../../libs/form/src/next/form-label/vl-form-label.defaults.ts":(e,t,l)=>{l.d(t,{x:()=>o});let o={for:"",label:"",block:!1,light:!1}},"../../libs/form/src/next/input-field/index.ts":(e,t,l)=>{l.d(t,{Y:()=>o.Y});var o=l("../../libs/form/src/next/input-field/vl-input-field.component.ts")},"../../libs/form/src/next/select/index.ts":(e,t,l)=>{l.d(t,{Y:()=>o.Y});var o=l("../../libs/form/src/next/select/vl-select.component.ts")},"../../libs/form/src/next/select/vl-select.component.ts":(e,t,l)=>{l.d(t,{Y:()=>u});var o=l("../../libs/common/utilities/src/index.ts"),s=l("../../node_modules/@domg/govflanders-style/common/index.js"),r=l("../../node_modules/@domg/govflanders-style/component/index.js"),i=l("../../node_modules/lit/index.js"),n=l("../../node_modules/lit/directives/class-map.js"),a=l("../../node_modules/lit/directives/live.js"),c=l("../../libs/form/src/next/form-control/form-control.ts");let d=(0,i.AH)`
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
`,p=(0,i.AH)`
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
        }
    }

    .vl-select:not(.vl-select--disabled):has(~ .vl-select__button) {
        padding-right: 6rem;
    }

    .vl-vi.vl-vi-nav-down:before {
        color: #6e7985;
        position: absolute;
        right: 1.3rem;
        font-size: 1.3rem;
        top: 0.8rem;
        pointer-events: none;
    }
`;var h=l("../../libs/form/src/next/select/vl-select.defaults.ts");class u extends c.M{static get styles(){return[s.h8,s.BI,d,r.py,p]}static get properties(){return{options:{type:Array},block:{type:Boolean},readonly:{type:Boolean},placeholder:{type:String},autocomplete:{type:String},notDeletable:{type:Boolean,attribute:"not-deletable"},value:{type:String,state:!0}}}connectedCallback(){super.connectedCallback();let e=this.getSelectedOption();this.value=e?.value??null,this.initialOptions=JSON.parse(JSON.stringify(this.options))}updated(e){if(super.updated(e),e.has("options")){let e=this.getSelectedOption();this.value=e?.value??null}if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}}render(){let e={"vl-select__container":!0,"vl-select__container--block":this.block},t={"vl-select":!0,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success,"vl-select--block":this.block},l=null!==this.value,o=this.options.some(e=>e.group);return(0,i.qy)`
            <div class=${(0,n.H)(e)}>
                <select
                    id=${this.id||i.s6}
                    name=${this.name||i.s6}
                    class=${(0,n.H)(t)}
                    aria-label=${this.label||i.s6}
                    aria-invalid=${this.isInvalid||i.s6}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?aria-disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${(0,a.V)(this.value)}
                    autocomplete=${this.autocomplete||i.s6}
                    @change=${this.onChange}
                    @input=${this.onSelect}
                >
                    ${this.placeholder?this.renderPlaceholder(l):i.s6}
                    ${o?this.renderGroupedOptions():this.renderSelectOptions(this.options)}
                </select>
                ${l&&!this.notDeletable?this.renderClearButton():i.s6}
                <span class="vl-icon vl-vi vl-vi-nav-down" aria-hidden="true"></span>
            </div>
        `}renderPlaceholder(e){return(0,i.qy)` <option class="vl-select__placeholder" value="" ?selected=${!e} disabled>
            ${this.placeholder}
        </option>`}renderClearButton(){return(0,i.qy)`
            <button
                type="button"
                class="vl-select__button"
                aria-label=${`Verwijder ${this.label} keuze ${this.getSelectedOption()?.label||this.value||""}`}
                @click=${this.clearValue}
            >
                <span class="vl-icon vl-vi vl-vi-close" aria-hidden="true"></span>
            </button>
        `}renderGroupedOptions(){return Object.entries(this.getGroupedOptions()).map(([e,t])=>(0,i.qy)` <optgroup label=${e}>${this.renderSelectOptions(t)}</optgroup>`)}renderSelectOptions(e){return e.map(e=>(0,i.qy)` <option
                value=${e.value}
                ?selected=${this.value===e.value}
                ?disabled=${e.disabled}
            >
                ${e.label||e.value}
            </option>`)}get validationTarget(){return this.shadowRoot?.querySelector("select")}resetFormControl(){for(super.resetFormControl();this.options.length;)this.options.pop();this.initialOptions.forEach(e=>this.options.push({...e})),this.value&&this.requestUpdate("options")}onChange(e){this.value=e?.target?.value}onSelect(){this.dispatchInput=!0}clearValue(){this.dispatchInput=!0,this.value=null}getSelectedOption(){return[...this.options].reverse().find(e=>e.selected)}getGroupedOptions(){return this.options.reduce((e,t)=>{let l=t.group||this.DEFAULT_GROUP_LABEL;return e[l]?e[l].push(t):e[l]=[t],e},{})}constructor(...e){super(...e),this.options=h.p.options,this.block=h.p.block,this.placeholder=h.p.placeholder,this.autocomplete=h.p.autocomplete,this.notDeletable=h.p.notDeletable,this.value=null,this.initialOptions=[],this.DEFAULT_GROUP_LABEL="Overig",this.dispatchInput=!1}}u=function(e,t,l,o){var s,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,l):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,l,o);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(i=(r<3?s(i):r>3?s(t,l,i):s(t,l))||i);return r>3&&i&&Object.defineProperty(t,l,i),i}([(0,o.M1)("vl-select-next")],u)},"../../libs/form/src/next/select/vl-select.defaults.ts":(e,t,l)=>{l.d(t,{p:()=>o});let o={...l("../../libs/form/src/next/form-control/form-control.defaults.ts").i,options:[],block:!1,placeholder:"",autocomplete:"",notDeletable:!1}}}]);