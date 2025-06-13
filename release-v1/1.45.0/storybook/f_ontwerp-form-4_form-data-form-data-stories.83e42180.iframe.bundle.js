"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[57],{"./docs/f_ontwerp/form/4_form-data/form-data.stories.ts":(e,t,r)=>{r.r(t),r.d(t,{FormData:()=>g,__namedExportsOrder:()=>j,default:()=>x});var l=r("../../node_modules/lit-html/lit-html.js");r("../../node_modules/react/index.js");var o=r("../../node_modules/react/jsx-runtime.js"),n=r("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),s=r("../../node_modules/@storybook/blocks/dist/index.mjs");function a(e){let t=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",code:"code",ul:"ul",li:"li",h2:"h2",h3:"h3",pre:"pre"},(0,n.RP)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"form---data",children:"Form - Data"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",(0,o.jsx)(t.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Om de form data te verzamelen, kan je de ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",target:"_blank",rel:"nofollow noopener noreferrer",children:"FormData"})," API gebruiken."]}),"\n",(0,o.jsxs)(t.p,{children:["Echter, deze API is niet altijd even handig in gebruik. Als je ",(0,o.jsx)(t.code,{children:"FormData.entries()"})," gebruikt, dan krijg je een iterator van de waardes.\nDit is voldoende voor inputs met 1 waarde, maar voor inputs met meerdere waardes krijg je enkel de laatst gekozen waarde terug."]}),"\n",(0,o.jsx)(t.p,{children:"Daarom leek het ons aangewezen dat je altijd met een consistent object kan werken:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"voor inputs met 1 waarde, krijg je altijd een enkele waarde"}),"\n",(0,o.jsx)(t.li,{children:"voor inputs met meerdere waardes (bv. multiselect), krijg je altijd een array van waardes"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"parseformdataformelement-form-multiformcontrolnames-string",children:"parseFormData(formElement: Form, multiFormControlNames?: string[])"}),"\n",(0,o.jsx)(t.p,{children:"We hebben een helper functie voorzien om de form data te parsen naar een object met de waardes van de velden."}),"\n",(0,o.jsx)(t.p,{children:"Deze functie aanvaard 2 parameters:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"formElement: Form"}),": het Form element waarvan je de data wil parsen"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"multiFormControlNames?: string[]"}),": een array van form control namen die meerdere waardes kunnen hebben.\nAls deze parameter niet wordt meegegeven, dan wordt er gezocht naar alle form controls die meerdere waardes kunnen hebben aan de hand van het ",(0,o.jsx)(t.code,{children:"multiple"})," attribuut."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"gebruik",children:"Gebruik"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'import { parseFormData } from "@domg-wc/form/utils";\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:"<form @submit=${this.onSubmit}>\n  ...\n</form>\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"onSubmit(event: Event): void {\n    // voorkomt het standaardgedrag van het formulier,\n    // zodat we de formulierinzending zelf kunnen afhandelen.\n    event.preventDefault();\n\n    // parse de form data\n    const data = parseFormData(event.target as HTMLFormElement);\n    // print de form data in de console\n    console.log(data);\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,o.jsx)(s.Hl,{of:g,sourceState:"none"})]})}var i=r("../../libs/common/utilities/src/index.ts"),d=r("../../node_modules/lit/index.js"),m=r("../../libs/form/src/next/error-message/index.ts"),c=r("../../libs/elements/src/index.ts"),b=r("../../libs/form/src/next/input-field/index.ts"),f=r("../../libs/form/src/next/select-rich/index.ts"),u=r("../../libs/form/src/utils/index.ts"),h=r("../../libs/form/src/next/form-label/index.ts"),v=r("../../libs/components/src/next/button/index.ts");class p extends d.WF{static{(0,i.gy)([h.E,b.Y,f.A,m.X,v.Y])}static get properties(){return{parsedFormData:{type:Object,state:!0}}}static get styles(){return[c.hF,(0,d.AH)`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }

                .form-buttons {
                    vl-button-next:not(:last-child) {
                        margin-right: 1.4rem;
                    }
                }
            `]}render(){return(0,d.qy)`
            <form id="form" class="vl-form" @submit=${this.onSubmit} @reset=${this.onReset}>
                <div class="vl-form-grid vl-form-grid--is-stacked">
                    <div class="vl-form-col--4-12">
                        <vl-form-label-next for="naam" label="Naam *" block></vl-form-label-next>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-input-field-next id="naam" name="naam" block></vl-input-field-next>
                    </div>
                    <div class="vl-form-col--4-12">
                        <vl-form-label-next for="hobbies" label="Hobbies *" block></vl-form-label-next>
                    </div>
                    <div class="vl-form-col--8-12">
                        <vl-select-rich-next
                            id="hobbies"
                            name="hobbies"
                            multiple
                            deletable
                            .options=${this.hobbies}
                            placeholder="Selecteer je hobbies"
                            no-results-text="Geen hobbies gevonden"
                            no-choices-text="Geen resterende hobbies gevonden"
                        >
                        </vl-select-rich-next>
                        <vl-error-message-next for="hobbies" state="valueMissing"
                            >Gelieve een hobby te selecteren.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-form-col--6-12 vl-push--4-12">
                        <div class="form-buttons">
                            <vl-button-next type="submit">Verstuur</vl-button-next>
                            <vl-button-next type="reset" secondary>Reset</vl-button-next>
                        </div>
                    </div>
                    ${this.parsedFormData?(0,d.qy)`
                              <div class="vl-form-col--4-12">
                                  <label class="vl-form__label">Formulier data</label>
                              </div>
                              <div class="vl-form-col--8-12">
                                  <pre>${JSON.stringify(this.parsedFormData,null,10)}</pre>
                              </div>
                          `:""}
                </div>
            </form>
        `}onSubmit(e){e.preventDefault();let t=(0,u.S)(e.target);this.parsedFormData=t,console.log(t)}onReset(){this.parsedFormData=null}constructor(...e){super(...e),this.hobbies=[{label:"Padel",value:"padel"},{label:"Dans",value:"dans"},{label:"Drummen",value:"drummen"},{label:"Zwemmen",value:"zwemmen"},{label:"Boardgames",value:"boardgames"},{label:"Fietsen",value:"fietsen"},{label:"Cocktails",value:"cocktails"}],this.parsedFormData=null}}p=function(e,t,r,l){var o,n=arguments.length,s=n<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,r):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,l);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s}([(0,i.M1)("vl-form-data")],p),(0,i.gy)([p]);let x={title:"Ontwerp/Form/Form Data",tags:["autodocs"],parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,n.RP)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}}}},g=()=>(0,l.qy)`<vl-form-data></vl-form-data>`;g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"() => html`<vl-form-data></vl-form-data>`",...g.parameters?.docs?.source}}};let j=["FormData"]},"../../node_modules/lit/directives/live.js":(e,t,r)=>{r.d(t,{V:()=>s});var l=r("../../node_modules/lit-html/lit-html.js"),o=r("../../node_modules/lit-html/directive.js"),n=r("../../node_modules/lit-html/directive-helpers.js"),s=(0,o.u$)(class extends o.WL{constructor(e){if(super(e),e.type!==o.OA.PROPERTY&&e.type!==o.OA.ATTRIBUTE&&e.type!==o.OA.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,n.Rt)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,t){var[r]=t;if(r===l.c0||r===l.s6)return r;var s=e.element,a=e.name;if(e.type===o.OA.PROPERTY){if(r===s[a])return l.c0}else if(e.type===o.OA.BOOLEAN_ATTRIBUTE){if(!!r===s.hasAttribute(a))return l.c0}else if(e.type===o.OA.ATTRIBUTE&&s.getAttribute(a)===r+"")return l.c0;return(0,n.mY)(e),r}})},"../../libs/form/src/next/error-message/index.ts":(e,t,r)=>{r.d(t,{X:()=>l.X});var l=r("../../libs/form/src/next/error-message/vl-error-message.component.ts")},"../../libs/form/src/next/form-label/index.ts":(e,t,r)=>{r.d(t,{E:()=>l.E});var l=r("../../libs/form/src/next/form-label/vl-form-label.component.ts")},"../../libs/form/src/next/form-label/vl-form-label.component.ts":(e,t,r)=>{r.d(t,{E:()=>d});var l=r("../../libs/common/utilities/src/index.ts"),o=r("../../node_modules/@domg/govflanders-style/common/index.js"),n=r("../../node_modules/lit/index.js"),s=r("../../node_modules/lit/directives/class-map.js");let a=(0,n.AH)`
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
`;var i=r("../../libs/form/src/next/form-label/vl-form-label.defaults.ts");class d extends l.jW{static get styles(){return[o.h8,a]}static get properties(){return{for:{type:String},label:{type:String},block:{type:Boolean},light:{type:Boolean}}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.focusFormControl)}updated(e){super.updated(e);let t=this.getFormControl();t?.setAttribute("label",this.label)}disconnectedCallback(){super.disconnectedCallback();let e=this.getFormControl();e?.removeAttribute("label"),this.removeEventListener("click",this.focusFormControl)}render(){let e={"vl-form__label":!0,"vl-form__label--block":this.block,"vl-form__label--light":this.light};return(0,n.qy)` <label for=${this.for} class=${(0,s.H)(e)} part="label"> ${this.label} </label> `}getFormControl(){let e=this.closest("form");return e?.querySelector(`[id="${this.for}"]`)}focusFormControl(){let e=this.getFormControl();e?.focus()}constructor(...e){super(...e),this.for=i.x.for,this.label=i.x.label,this.block=i.x.block,this.light=i.x.light}}d=function(e,t,r,l){var o,n=arguments.length,s=n<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,r):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,l);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s}([(0,l.M1)("vl-form-label-next")],d)},"../../libs/form/src/next/form-label/vl-form-label.defaults.ts":(e,t,r)=>{r.d(t,{x:()=>l});let l={for:"",label:"",block:!1,light:!1}},"../../libs/form/src/next/input-field/index.ts":(e,t,r)=>{r.d(t,{Y:()=>l.Y});var l=r("../../libs/form/src/next/input-field/vl-input-field.component.ts")},"../../libs/form/src/next/select-rich/index.ts":(e,t,r)=>{r.d(t,{A:()=>l.Al});var l=r("../../libs/form/src/next/select-rich/vl-select-rich.component.ts");r("../../libs/form/src/next/select-rich/vl-select-rich.model.ts")},"../../libs/form/src/utils/index.ts":(e,t,r)=>{r.d(t,{S:()=>o});var l=r("../../libs/form/src/next/form-control/form-control.ts");let o=(e,t)=>{if(!e)return;let r=new FormData(e),o=e=>e instanceof l.M||e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement,n=Array.from(r.keys()).filter(e=>r.getAll(e).length>1),s=Array.from(e.querySelectorAll("*")).filter(e=>o(e)&&e.hasAttribute("multiple")).map(e=>e.getAttribute("name")),a=t||Array.from(new Set([...n,...s]));return Array.from(r.keys()).reduce((e,t)=>({...e,[t]:a.includes(t)?r.getAll(t):r.get(t)}),{})}}}]);