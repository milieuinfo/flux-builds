"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[1394],{"./apps/storybook/docs/e_ontwerp/form/3_form-data/form-data.stories.ts":(e,t,r)=>{r.r(t),r.d(t,{FormDataStory:()=>y,__namedExportsOrder:()=>j,default:()=>g});var s={};r.r(s),r.d(s,{FormDataStory:()=>y,__namedExportsOrder:()=>j,default:()=>g});var l=r("./node_modules/lit-html/lit-html.js");r("./node_modules/react/index.js");var n=r("./node_modules/react/jsx-runtime.js"),a=r("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),o=r("./node_modules/@storybook/addon-docs/dist/index.mjs"),i=r("./node_modules/@storybook/blocks/dist/index.mjs");function d(e){let t=Object.assign({h1:"h1",p:"p",a:"a",code:"code",ul:"ul",li:"li",h2:"h2",h3:"h3",pre:"pre"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h_,{of:s}),"\n",(0,n.jsx)(t.h1,{id:"formdata",children:"FormData"}),"\n",(0,n.jsxs)(t.p,{children:["Om de FormData te verzamelen, kan je de ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",target:"_blank",rel:"nofollow noopener noreferrer",children:"FormData"})," API gebruiken."]}),"\n",(0,n.jsxs)(t.p,{children:["Echter, deze API is niet altijd even handig in gebruik. Als je ",(0,n.jsx)(t.code,{children:"FormData.entries()"})," gebruikt, dan krijg je een iterator van de waardes. Dit is voldoende voor enkelvoudige waardes, maar voor inputs met meervoudige waardes krijg je enkel de laatst gekozen waarde."]}),"\n",(0,n.jsx)(t.p,{children:"Daarom leek het ons aangewezen dat je altijd met een consistent object kan werken:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"voor inputs met 1 waarde (zoals een input), krijg je altijd een enkele waarde"}),"\n",(0,n.jsx)(t.li,{children:"voor inputs met meerdere waardes (zoals een multiselect), krijg je altijd een array van waardes"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"parseformdataformelement-form-multiformcontrolnames-string",children:"parseFormData(formElement: Form, multiFormControlNames?: string[])"}),"\n",(0,n.jsx)(t.p,{children:"We hebben een helper functie voorzien om de FormData te parsen naar een object met de waardes van de velden."}),"\n",(0,n.jsx)(t.p,{children:"Deze functie aanvaard 2 parameters:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"formElement: Form"}),": het Form element waarvan je de FormData wil parsen"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"multiFormControlNames: string[]"}),": een array van form control namen die meerdere waarden kunnen hebben. Optioneel, als deze parameter niet wordt meegegeven, dan wordt er gezocht naar alle form controls die meerdere waarden kunnen hebben."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"gebruik",children:"Gebruik:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { parseFormData } from \"@domg-wc/form/utils\";\n\nconst form = document.querySelector('form');\nconsole.log(parseFormData(form));\n"})}),"\n",(0,n.jsx)(t.h3,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,n.jsx)(i.Xz,{of:y,sourceState:"none"})]})}var m=r("./libs/common/utilities/src/index.ts"),c=r("./node_modules/lit/decorators.js"),u=r("./node_modules/lit/index.js"),p=r("./libs/form/src/next/error-message/index.ts"),h=r("./libs/elements/src/index.ts"),v=r("./libs/form/src/next/input-field/index.ts"),b=r("./libs/form/src/next/select/index.ts"),f=r("./libs/form/src/utils.ts");class x extends u.oi{static{(0,m.YV)([v.z,b.k,p.m])}static get properties(){return{parsedFormData:{type:Object,state:!0}}}static get styles(){return[h.CX,(0,u.iv)`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }
            `]}render(){return(0,u.dy)`
            <form id="form" class="vl-form" @submit=${this.onSubmit} @reset=${this.onReset}>
                <div class="vl-form-grid vl-form-grid--is-stacked">
                    <div class="vl-form-col--4-12">
                        <label class="vl-form__label" for="naam">Naam *</label>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-input-field-next id="naam" name="naam" block></vl-input-field-next>
                    </div>
                    <div class="vl-form-col--4-12">
                        <label class="vl-form__label" for="hobbies">Hobbies *</label>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-select-next
                            id="hobbies"
                            name="hobbies"
                            multiple
                            deletable
                            .options=${this.hobbies}
                            placeholder="Selecteer je hobbies"
                            no-results-text="Geen hobbies gevonden"
                            no-choices-text="Geen resterende hobbies gevonden"
                        >
                        </vl-select-next>
                        <vl-error-message-next for="hobbies" state="valueMissing"
                            >Gelieve een hobby te selecteren.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--6-12 vl-push--4-12">
                        <div class="vl-action-group">
                            <button class="vl-button" type="submit">Verstuur</button>
                            <button class="vl-button" type="reset">Reset</button>
                        </div>
                    </div>
                    ${this.parsedFormData?(0,u.dy)`
                              <div class="vl-form-col--4-12">
                                  <label class="vl-form__label">Formulier data</label>
                              </div>
                              <div class="vl-form-col--8-12">
                                  <pre>${JSON.stringify(this.parsedFormData,null,10)}</pre>
                              </div>
                          `:""}
                </div>
            </form>
        `}onSubmit(e){e.preventDefault();let t=(0,f.u)(e.target);this.parsedFormData=t,console.log(t)}onReset(){this.parsedFormData=void 0}constructor(...e){super(...e),this.hobbies=[{label:"Padel",value:"padel"},{label:"Dans",value:"dans"},{label:"Drummen",value:"drummen"},{label:"Zwemmen",value:"zwemmen"},{label:"Boardgames",value:"boardgames"},{label:"Fietsen",value:"fietsen"},{label:"Cocktails",value:"cocktails"}]}}x=function(e,t,r,s){var l,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,s);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(a=(n<3?l(a):n>3?l(t,r,a):l(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,c.Mo)("vl-form-data")],x),(0,m.YV)([x]);let g={title:"Ontwerp/Form/FormData",tags:["autodocs"],component:"form data",parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}}}},y=()=>(0,l.dy)`<vl-form-data></vl-form-data>`;y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"() => html`<vl-form-data></vl-form-data>`",...y.parameters?.docs?.source}}};let j=["FormDataStory"]},"./node_modules/lit/decorators.js":(e,t,r)=>{r.d(t,{Mo:()=>s,Cb:()=>o});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s=e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};var l=r("./node_modules/@lit/reactive-element/reactive-element.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n={attribute:!0,type:String,converter:l.Ts,reflect:!1,hasChanged:l.Qu},a=(e=n,t,r)=>{let{kind:s,metadata:l}=r,a=globalThis.litPropertyMetadata.get(l);if(void 0===a&&globalThis.litPropertyMetadata.set(l,a=new Map),a.set(r.name,e),"accessor"===s){let{name:s}=r;return{set(r){let l=t.get.call(this);t.set.call(this,r),this.requestUpdate(s,l,e)},init(t){return void 0!==t&&this.C(s,void 0,e),t}}}if("setter"===s){let{name:s}=r;return function(r){let l=this[s];t.call(this,r),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+s)};function o(e){return(t,r)=>"object"==typeof r?a(e,t,r):((e,t,r)=>{let s=t.hasOwnProperty(r);return t.constructor.createProperty(r,s?{...e,wrapped:!0}:e),s?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}},"./node_modules/lit/directives/live.js":(e,t,r)=>{r.d(t,{a:()=>a});var s=r("./node_modules/lit-html/lit-html.js"),l=r("./node_modules/lit-html/directive.js"),n=r("./node_modules/lit-html/directive-helpers.js"),a=(0,l.XM)(class extends l.Xe{constructor(e){if(super(e),e.type!==l.pX.PROPERTY&&e.type!==l.pX.ATTRIBUTE&&e.type!==l.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,n.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,t){var[r]=t;if(r===s.Jb||r===s.Ld)return r;var a=e.element,o=e.name;if(e.type===l.pX.PROPERTY){if(r===a[o])return s.Jb}else if(e.type===l.pX.BOOLEAN_ATTRIBUTE){if(!!r===a.hasAttribute(o))return s.Jb}else if(e.type===l.pX.ATTRIBUTE&&a.getAttribute(o)===r+"")return s.Jb;return(0,n.hl)(e),r}})},"./libs/form/src/next/error-message/index.ts":(e,t,r)=>{r.d(t,{m:()=>s.ml});var s=r("./libs/form/src/next/error-message/vl-error-message.component.ts")},"./libs/form/src/next/input-field/index.ts":(e,t,r)=>{r.d(t,{z:()=>s.z});var s=r("./libs/form/src/next/input-field/vl-input-field.component.ts")},"./libs/form/src/next/input-field/vl-input-field.component.ts":(e,t,r)=>{r.d(t,{z:()=>h,E:()=>p});var s=r("./node_modules/lit/index.js"),l=r("./node_modules/@domg/govflanders-style/component/index.js"),n=r("./node_modules/lit/directives/live.js"),a=r("./node_modules/lit/directives/class-map.js"),o=r("./node_modules/@domg/govflanders-style/common/index.js");let i={attribute:"min",key:"rangeUnderflow",message:e=>e.minExclusive?`Value must be greater than ${e.min}.`:`Value must be greater than or equal to ${e.min}.`,isValid:(e,t)=>!t||!e.min&&0!==e.min||!(parseFloat(t)<e.min)&&(!e.minExclusive||parseFloat(t)!==e.min)},d={attribute:"max",key:"rangeOverflow",message:e=>e.maxExclusive?`Value must be lesser than ${e.max}.`:`Value must be lesser than or equal to ${e.max}.`,isValid:(e,t)=>!t||!e.max&&0!==e.max||!(parseFloat(t)>e.max)&&(!e.maxExclusive||parseFloat(t)!==e.max)},m={attribute:"pattern",key:"patternMismatch",message:"Please match the requested format",isValid:(e,t)=>!t||!e.pattern&&!e.regex||new RegExp(e.pattern||e.regex).test(t)};var c=r("./libs/form/src/next/form-control/form-control.ts"),u=r("./libs/common/utilities/src/index.ts");let p={...c.E,block:!1,readonly:!1,type:"text",value:"",placeholder:"",autocomplete:"",minLength:null,maxLength:null,min:null,max:null,minExclusive:!1,maxExclusive:!1,pattern:"",regex:null};class h extends c.N{static{this.formControlValidators=[...c.N.formControlValidators,i,d,m]}static get styles(){return[o.YN,o.Oh,l.K$]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},type:{type:String},value:{type:String,reflect:!0},placeholder:{type:String},autocomplete:{type:String},minLength:{type:Number,attribute:"min-length"},maxLength:{type:Number,attribute:"max-length"},min:{type:Number},max:{type:Number},minExclusive:{type:Boolean,attribute:"min-exclusive"},maxExclusive:{type:Boolean,attribute:"max-exclusive"},pattern:{type:String},regex:{type:Object}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value)}updated(e){super.updated(e),this.onUpdated(e)}render(){let e={"vl-input-field":!0,"vl-input-field--disabled":this.disabled,"vl-input-field--error":this.isInvalid||this.error,"vl-input-field--success":this.success,"vl-input-field--block":this.block};return(0,s.dy)`
            <input
                id=${this.id||s.Ld}
                name=${this.name||s.Ld}
                class=${(0,a.$)(e)}
                type=${this.type}
                aria-label=${this.label||s.Ld}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?readonly=${this.readonly}
                .value=${(0,n.a)(this.value)}
                placeholder=${this.placeholder||s.Ld}
                autocomplete=${this.autocomplete||s.Ld}
                minlength=${this.minLength??s.Ld}
                maxlength=${this.maxLength??s.Ld}
                min=${this.min??s.Ld}
                max=${this.max??s.Ld}
                pattern=${this.pattern}
                @input=${this.onInput}
            />
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.value=this.initialValue}onInput(e){this.value=e?.target?.value}onUpdated(e){if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:e})),this.dispatchEventIfValid(e)}}constructor(...e){super(...e),this.regex=p.regex,this.block=p.block,this.readonly=p.readonly,this.type=p.type,this.value=p.value,this.placeholder=p.placeholder,this.autocomplete=p.autocomplete,this.minLength=p.minLength,this.maxLength=p.maxLength,this.min=p.min,this.max=p.max,this.minExclusive=p.minExclusive,this.maxExclusive=p.maxExclusive,this.pattern=p.pattern,this.initialValue=""}}h=function(e,t,r,s){var l,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,s);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(a=(n<3?l(a):n>3?l(t,r,a):l(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,u.a6)("vl-input-field-next")],h)},"./libs/form/src/next/select/index.ts":(e,t,r)=>{r.d(t,{k:()=>s.kI});var s=r("./libs/form/src/next/select/vl-select.component.ts")},"./libs/form/src/next/upload/index.ts":(e,t,r)=>{r.d(t,{F:()=>s.F});var s=r("./libs/form/src/next/upload/vl-upload.component.ts")},"./libs/form/src/utils.ts":(e,t,r)=>{r.d(t,{u:()=>n});var s=r("./libs/form/src/next/form-control/form-control.ts"),l=r("./libs/form/src/next/upload/index.ts");let n=(e,t)=>{if(!e)return;let r=new FormData(e),n=t||Array.from(e.querySelectorAll("*")).filter(e=>e instanceof s.N&&e.hasAttribute("multiple")||e instanceof l.F).map(e=>e.getAttribute("name"));return Array.from(r.keys()).reduce((e,t)=>{if(!n.includes(t))return{...e,[t]:r.get(t)};{let s=r.getAll(t);return 1===s.length&&""===s[0]?{...e,[t]:[]}:{...e,[t]:s}}},{})}}}]);