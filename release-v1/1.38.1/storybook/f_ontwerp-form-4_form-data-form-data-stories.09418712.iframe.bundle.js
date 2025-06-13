"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[57],{"./docs/f_ontwerp/form/4_form-data/form-data.stories.ts":(e,r,t)=>{t.r(r),t.d(r,{FormData:()=>j,__namedExportsOrder:()=>g,default:()=>x});var n=t("../../node_modules/lit-html/lit-html.js");t("../../node_modules/react/index.js");var l=t("../../node_modules/react/jsx-runtime.js"),o=t("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),s=t("../../node_modules/@storybook/blocks/dist/index.mjs");function a(e){let r=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",code:"code",ul:"ul",li:"li",h2:"h2",h3:"h3",pre:"pre"},(0,o.RP)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.h1,{id:"form---data",children:"Form - Data"}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsxs)(r.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",(0,l.jsx)(r.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),"\n"]}),"\n",(0,l.jsxs)(r.p,{children:["Om de form data te verzamelen, kan je de ",(0,l.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",target:"_blank",rel:"nofollow noopener noreferrer",children:"FormData"})," API gebruiken."]}),"\n",(0,l.jsxs)(r.p,{children:["Echter, deze API is niet altijd even handig in gebruik. Als je ",(0,l.jsx)(r.code,{children:"FormData.entries()"})," gebruikt, dan krijg je een iterator van de waardes.\nDit is voldoende voor inputs met 1 waarde, maar voor inputs met meerdere waardes krijg je enkel de laatst gekozen waarde terug."]}),"\n",(0,l.jsx)(r.p,{children:"Daarom leek het ons aangewezen dat je altijd met een consistent object kan werken:"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"voor inputs met 1 waarde, krijg je altijd een enkele waarde"}),"\n",(0,l.jsx)(r.li,{children:"voor inputs met meerdere waardes (bv. multiselect), krijg je altijd een array van waardes"}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"parseformdataformelement-form-multiformcontrolnames-string",children:"parseFormData(formElement: Form, multiFormControlNames?: string[])"}),"\n",(0,l.jsx)(r.p,{children:"We hebben een helper functie voorzien om de form data te parsen naar een object met de waardes van de velden."}),"\n",(0,l.jsx)(r.p,{children:"Deze functie aanvaard 2 parameters:"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"formElement: Form"}),": het Form element waarvan je de data wil parsen"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"multiFormControlNames?: string[]"}),": een array van form control namen die meerdere waardes kunnen hebben.\nAls deze parameter niet wordt meegegeven, dan wordt er gezocht naar alle form controls die meerdere waardes kunnen hebben aan de hand van het ",(0,l.jsx)(r.code,{children:"multiple"})," attribuut."]}),"\n"]}),"\n",(0,l.jsx)(r.h3,{id:"gebruik",children:"Gebruik"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-js",children:'import { parseFormData } from "@domg-wc/form/utils";\n'})}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-html",children:"<form @submit=${this.onSubmit}>\n  ...\n</form>\n"})}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-typescript",children:"onSubmit(event: Event): void {\n    // voorkomt het standaardgedrag van het formulier,\n    // zodat we de formulierinzending zelf kunnen afhandelen.\n    event.preventDefault();\n\n    // parse de form data\n    const data = parseFormData(event.target as HTMLFormElement);\n    // print de form data in de console\n    console.log(data);\n}\n"})}),"\n",(0,l.jsx)(r.h3,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,l.jsx)(s.Hl,{of:j,sourceState:"none"})]})}var i=t("../../libs/common/utilities/src/index.ts"),d=t("../../node_modules/lit/index.js"),m=t("../../libs/form/src/next/error-message/index.ts"),c=t("../../libs/elements/src/index.ts"),u=t("../../libs/form/src/next/input-field/index.ts"),f=t("../../libs/form/src/next/select-rich/index.ts"),b=t("../../libs/form/src/utils/index.ts"),h=t("../../libs/form/src/next/form-label/index.ts"),v=t("../../libs/components/src/next/button/index.ts");class p extends d.WF{static{(0,i.gy)([h.E,u.Y,f.A,m.X,v.Y])}static get properties(){return{parsedFormData:{type:Object,state:!0}}}static get styles(){return[c.hF,(0,d.AH)`
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
        `}onSubmit(e){e.preventDefault();let r=(0,b.S)(e.target);this.parsedFormData=r,console.log(r)}onReset(){this.parsedFormData=null}constructor(...e){super(...e),this.hobbies=[{label:"Padel",value:"padel"},{label:"Dans",value:"dans"},{label:"Drummen",value:"drummen"},{label:"Zwemmen",value:"zwemmen"},{label:"Boardgames",value:"boardgames"},{label:"Fietsen",value:"fietsen"},{label:"Cocktails",value:"cocktails"}],this.parsedFormData=null}}p=function(e,r,t,n){var l,o=arguments.length,s=o<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,r,t,n);else for(var a=e.length-1;a>=0;a--)(l=e[a])&&(s=(o<3?l(s):o>3?l(r,t,s):l(r,t))||s);return o>3&&s&&Object.defineProperty(r,t,s),s}([(0,i.M1)("vl-form-data")],p),(0,i.gy)([p]);let x={title:"Ontwerp/Form/Form Data",tags:["autodocs"],parameters:{docs:{page:function(e={}){let{wrapper:r}=Object.assign({},(0,o.RP)(),e.components);return r?(0,l.jsx)(r,Object.assign({},e,{children:(0,l.jsx)(a,e)})):a(e)}}}},j=()=>(0,n.qy)`<vl-form-data></vl-form-data>`;j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"() => html`<vl-form-data></vl-form-data>`",...j.parameters?.docs?.source}}};let g=["FormData"]},"../../node_modules/lit/directives/live.js":(e,r,t)=>{t.d(r,{V:()=>s});var n=t("../../node_modules/lit-html/lit-html.js"),l=t("../../node_modules/lit-html/directive.js"),o=t("../../node_modules/lit-html/directive-helpers.js"),s=(0,l.u$)(class extends l.WL{constructor(e){if(super(e),e.type!==l.OA.PROPERTY&&e.type!==l.OA.ATTRIBUTE&&e.type!==l.OA.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,o.Rt)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,r){var[t]=r;if(t===n.c0||t===n.s6)return t;var s=e.element,a=e.name;if(e.type===l.OA.PROPERTY){if(t===s[a])return n.c0}else if(e.type===l.OA.BOOLEAN_ATTRIBUTE){if(!!t===s.hasAttribute(a))return n.c0}else if(e.type===l.OA.ATTRIBUTE&&s.getAttribute(a)===t+"")return n.c0;return(0,o.mY)(e),t}})},"../../libs/form/src/next/select-rich/index.ts":(e,r,t)=>{t.d(r,{A:()=>n.Al});var n=t("../../libs/form/src/next/select-rich/vl-select-rich.component.ts");t("../../libs/form/src/next/select-rich/vl-select-rich.model.ts")},"../../libs/form/src/utils/index.ts":(e,r,t)=>{t.d(r,{S:()=>l});var n=t("../../libs/form/src/next/form-control/form-control.ts");let l=(e,r)=>{if(!e)return;let t=new FormData(e),l=e=>e instanceof n.M||e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement,o=Array.from(t.keys()).filter(e=>t.getAll(e).length>1),s=Array.from(e.querySelectorAll("*")).filter(e=>l(e)&&e.hasAttribute("multiple")).map(e=>e.getAttribute("name")),a=r||Array.from(new Set([...o,...s]));return Array.from(t.keys()).reduce((e,r)=>({...e,[r]:a.includes(r)?t.getAll(r):t.get(r)}),{})}}}]);