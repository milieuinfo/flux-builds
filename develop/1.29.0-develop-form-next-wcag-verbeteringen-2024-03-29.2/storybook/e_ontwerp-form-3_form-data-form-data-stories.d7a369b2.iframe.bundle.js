"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[1394],{"./apps/storybook/docs/e_ontwerp/form/3_form-data/form-data.stories.ts":(e,r,t)=>{t.r(r),t.d(r,{FormData:()=>j,__namedExportsOrder:()=>g,default:()=>x});var s=t("./node_modules/lit-html/lit-html.js");t("./node_modules/react/index.js");var n=t("./node_modules/react/jsx-runtime.js"),l=t("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");t("./node_modules/@storybook/addon-docs/dist/index.mjs");var o=t("./node_modules/@storybook/blocks/dist/index.mjs");function a(e){let r=Object.assign({h1:"h1",p:"p",a:"a",code:"code",ul:"ul",li:"li",h2:"h2",h3:"h3",pre:"pre"},(0,l.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"form---data",children:"Form - Data"}),"\n",(0,n.jsxs)(r.p,{children:["Om de form data te verzamelen, kan je de ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",target:"_blank",rel:"nofollow noopener noreferrer",children:"FormData"})," API gebruiken."]}),"\n",(0,n.jsxs)(r.p,{children:["Echter, deze API is niet altijd even handig in gebruik. Als je ",(0,n.jsx)(r.code,{children:"FormData.entries()"})," gebruikt, dan krijg je een iterator van de waardes.\nDit is voldoende voor inputs met 1 waarde, maar voor inputs met meerdere waardes krijg je enkel de laatst gekozen waarde terug."]}),"\n",(0,n.jsx)(r.p,{children:"Daarom leek het ons aangewezen dat je altijd met een consistent object kan werken:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"voor inputs met 1 waarde, krijg je altijd een enkele waarde"}),"\n",(0,n.jsx)(r.li,{children:"voor inputs met meerdere waardes (bv. multiselect), krijg je altijd een array van waardes"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"parseformdataformelement-form-multiformcontrolnames-string",children:"parseFormData(formElement: Form, multiFormControlNames?: string[])"}),"\n",(0,n.jsx)(r.p,{children:"We hebben een helper functie voorzien om de form data te parsen naar een object met de waardes van de velden."}),"\n",(0,n.jsx)(r.p,{children:"Deze functie aanvaard 2 parameters:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"formElement: Form"}),": het Form element waarvan je de data wil parsen"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"multiFormControlNames?: string[]"}),": een array van form control namen die meerdere waardes kunnen hebben. Als deze parameter niet wordt meegegeven, dan wordt er gezocht naar alle form controls die meerdere waardes kunnen hebben."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"gebruik",children:"Gebruik"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"import { parseFormData } from \"@domg-wc/form/utils\";\n\nconst form = document.querySelector('form');\nconst data = parseFormData(form);\n"})}),"\n",(0,n.jsx)(r.h3,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,n.jsx)(o.Xz,{of:j,sourceState:"none"})]})}var i=t("./libs/common/utilities/src/index.ts"),d=t("./node_modules/tslib/tslib.es6.mjs"),m=t("./node_modules/lit/index.js"),c=t("./libs/form/src/next/error-message/index.ts"),u=t("./libs/elements/src/index.ts"),b=t("./libs/form/src/next/input-field/index.ts"),v=t("./libs/form/src/next/select/index.ts"),p=t("./libs/form/src/utils/index.ts"),f=t("./libs/form/src/next/form-label/index.ts");class h extends m.oi{static{(0,i.YV)([f.i,b.z,v.k,c.m])}static get properties(){return{parsedFormData:{type:Object,state:!0}}}static get styles(){return[u.CX,(0,m.iv)`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }
            `]}render(){return(0,m.dy)`
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
                    ${this.parsedFormData?(0,m.dy)`
                              <div class="vl-form-col--4-12">
                                  <label class="vl-form__label">Formulier data</label>
                              </div>
                              <div class="vl-form-col--8-12">
                                  <pre>${JSON.stringify(this.parsedFormData,null,10)}</pre>
                              </div>
                          `:""}
                </div>
            </form>
        `}onSubmit(e){e.preventDefault();let r=(0,p.u)(e.target);this.parsedFormData=r,console.log(r)}onReset(){this.parsedFormData=null}constructor(...e){super(...e),this.hobbies=[{label:"Padel",value:"padel"},{label:"Dans",value:"dans"},{label:"Drummen",value:"drummen"},{label:"Zwemmen",value:"zwemmen"},{label:"Boardgames",value:"boardgames"},{label:"Fietsen",value:"fietsen"},{label:"Cocktails",value:"cocktails"}],this.parsedFormData=null}}h=(0,d.gn)([(0,i.a6)("vl-form-data")],h),(0,i.YV)([h]);let x={title:"Ontwerp/Form/Form Data",tags:["autodocs"],parameters:{docs:{page:function(e={}){let{wrapper:r}=Object.assign({},(0,l.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}}}},j=()=>(0,s.dy)`<vl-form-data></vl-form-data>`;j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"() => html`<vl-form-data></vl-form-data>`",...j.parameters?.docs?.source}}};let g=["FormData"]},"./node_modules/lit/directives/live.js":(e,r,t)=>{t.d(r,{a:()=>o});var s=t("./node_modules/lit-html/lit-html.js"),n=t("./node_modules/lit-html/directive.js"),l=t("./node_modules/lit-html/directive-helpers.js"),o=(0,n.XM)(class extends n.Xe{constructor(e){if(super(e),e.type!==n.pX.PROPERTY&&e.type!==n.pX.ATTRIBUTE&&e.type!==n.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,l.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,r){var[t]=r;if(t===s.Jb||t===s.Ld)return t;var o=e.element,a=e.name;if(e.type===n.pX.PROPERTY){if(t===o[a])return s.Jb}else if(e.type===n.pX.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(a))return s.Jb}else if(e.type===n.pX.ATTRIBUTE&&o.getAttribute(a)===t+"")return s.Jb;return(0,l.hl)(e),t}})},"./libs/form/src/next/select/index.ts":(e,r,t)=>{t.d(r,{k:()=>s.kI});var s=t("./libs/form/src/next/select/vl-select.component.ts")},"./libs/form/src/utils/index.ts":(e,r,t)=>{t.d(r,{u:()=>n});var s=t("./libs/form/src/next/form-control/form-control.ts");let n=(e,r)=>{if(!e)return;let t=new FormData(e),n=r||Array.from(e.querySelectorAll("*")).filter(e=>e instanceof s.N&&e.hasAttribute("multiple")).map(e=>e.getAttribute("name"));return Array.from(t.keys()).reduce((e,r)=>{if(!n.includes(r))return{...e,[r]:t.get(r)};{let s=t.getAll(r);return 1===s.length&&""===s[0]?{...e,[r]:[]}:{...e,[r]:s}}},{})}}}]);