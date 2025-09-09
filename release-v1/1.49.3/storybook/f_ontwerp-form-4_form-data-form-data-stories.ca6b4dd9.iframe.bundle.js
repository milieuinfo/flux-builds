"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[57],{"./docs/f_ontwerp/form/4_form-data/form-data.stories.ts":(e,t,r)=>{r.r(t),r.d(t,{FormData:()=>j,__namedExportsOrder:()=>k,default:()=>g});var n=r("../../node_modules/lit-html/lit-html.js");r("../../node_modules/react/index.js");var l=r("../../node_modules/react/jsx-runtime.js"),s=r("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),o=r("../../node_modules/@storybook/blocks/dist/index.mjs");function a(e){let t=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",code:"code",ul:"ul",li:"li",h2:"h2",h3:"h3",pre:"pre"},(0,s.RP)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"form---data",children:"Form - Data"}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",(0,l.jsx)(t.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["Om de form data te verzamelen, kan je de ",(0,l.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",target:"_blank",rel:"nofollow noopener noreferrer",children:"FormData"})," API gebruiken."]}),"\n",(0,l.jsxs)(t.p,{children:["Echter, deze API is niet altijd even handig in gebruik. Als je ",(0,l.jsx)(t.code,{children:"FormData.entries()"})," gebruikt, dan krijg je een iterator van de waardes.\nDit is voldoende voor inputs met 1 waarde, maar voor inputs met meerdere waardes krijg je enkel de laatst gekozen waarde terug."]}),"\n",(0,l.jsx)(t.p,{children:"Daarom leek het ons aangewezen dat je altijd met een consistent object kan werken:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"voor inputs met 1 waarde, krijg je altijd een enkele waarde"}),"\n",(0,l.jsx)(t.li,{children:"voor inputs met meerdere waardes (bv. multiselect), krijg je altijd een array van waardes"}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"parseformdataformelement-form-multiformcontrolnames-string",children:"parseFormData(formElement: Form, multiFormControlNames?: string[])"}),"\n",(0,l.jsx)(t.p,{children:"We hebben een helper functie voorzien om de form data te parsen naar een object met de waardes van de velden."}),"\n",(0,l.jsx)(t.p,{children:"Deze functie aanvaard 2 parameters:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"formElement: Form"}),": het Form element waarvan je de data wil parsen"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"multiFormControlNames?: string[]"}),": een array van form control namen die meerdere waardes kunnen hebben.\nAls deze parameter niet wordt meegegeven, dan wordt er gezocht naar alle form controls die meerdere waardes kunnen hebben aan de hand van het ",(0,l.jsx)(t.code,{children:"multiple"})," attribuut."]}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"gebruik",children:"Gebruik"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:'import { parseFormData } from "@domg-wc/form/utils";\n'})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-html",children:"<form @submit=${this.onSubmit}>\n  ...\n</form>\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-typescript",children:"onSubmit(event: Event): void {\n    // voorkomt het standaardgedrag van het formulier,\n    // zodat we de formulierinzending zelf kunnen afhandelen.\n    event.preventDefault();\n\n    // parse de form data\n    const data = parseFormData(event.target as HTMLFormElement);\n    // print de form data in de console\n    console.log(data);\n}\n"})}),"\n",(0,l.jsx)(t.h3,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,l.jsx)(o.Hl,{of:j,sourceState:"none"})]})}var i=r("../../libs/common/utilities/src/index.ts"),d=r("../../libs/common/utilities/src/css/index.ts"),m=r("../../libs/components/src/next/button/index.ts"),c=r("../../libs/elements/src/index.ts"),u=r("../../libs/form/src/next/error-message/index.ts"),b=r("../../libs/form/src/next/form-label/index.ts"),v=r("../../libs/form/src/next/input-field/index.ts"),h=r("../../libs/form/src/next/select-rich/index.ts"),f=r("../../libs/form/src/utils/index.ts"),x=r("../../node_modules/lit/index.js");class p extends x.WF{static{(0,i.gy)([b.E,v.Y,h.A,u.X,m.Y])}static get properties(){return{parsedFormData:{type:Object,state:!0}}}static get styles(){return[c.hF,d.B2,(0,x.AH)`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }

                .form-buttons {
                    vl-button-next:not(:last-child) {
                        margin-right: 1.4rem;
                    }
                }
            `]}render(){return(0,x.qy)`
            <form id="form" class="vl-form" @submit=${this.onSubmit} @reset=${this.onReset}>
                <div class="vl-grid-next">
                    <div class="vl-column-next vl-column-next--4">
                        <vl-form-label-next for="naam" label="Naam *" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8">
                        <vl-input-field-next id="naam" name="naam" block></vl-input-field-next>
                    </div>
                    <div class="vl-column-next vl-column-next--4">
                        <vl-form-label-next for="hobbies" label="Hobbies *" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8">
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
                    <div class="vl-column-next vl-column-next--8 vl-column-next--start-5">
                        <div class="form-buttons">
                            <vl-button-next type="submit">Verstuur</vl-button-next>
                            <vl-button-next type="reset" secondary>Reset</vl-button-next>
                        </div>
                    </div>
                    ${this.parsedFormData?(0,x.qy)`
                              <div class="vl-column-next vl-column-next--4">
                                  <label class="vl-form__label">Formulier data</label>
                              </div>
                              <div class="vl-column-next vl-column-next--8">
                                  <pre>${JSON.stringify(this.parsedFormData,null,10)}</pre>
                              </div>
                          `:""}
                </div>
            </form>
        `}onSubmit(e){e.preventDefault();let t=(0,f.S)(e.target);this.parsedFormData=t,console.log(t)}onReset(){this.parsedFormData=null}constructor(...e){super(...e),this.hobbies=[{label:"Padel",value:"padel"},{label:"Dans",value:"dans"},{label:"Drummen",value:"drummen"},{label:"Zwemmen",value:"zwemmen"},{label:"Boardgames",value:"boardgames"},{label:"Fietsen",value:"fietsen"},{label:"Cocktails",value:"cocktails"}],this.parsedFormData=null}}p=function(e,t,r,n){var l,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(l=e[a])&&(o=(s<3?l(o):s>3?l(t,r,o):l(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([(0,i.M1)("vl-form-data")],p),(0,i.gy)([p]);let g={title:"Ontwerp/Form/Form Data",tags:["autodocs"],parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,s.RP)(),e.components);return t?(0,l.jsx)(t,Object.assign({},e,{children:(0,l.jsx)(a,e)})):a(e)}}}},j=()=>(0,n.qy)`<vl-form-data></vl-form-data>`;j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"() => html`<vl-form-data></vl-form-data>`",...j.parameters?.docs?.source}}};let k=["FormData"]},"../../libs/form/src/next/error-message/index.ts":(e,t,r)=>{r.d(t,{X:()=>n.X});var n=r("../../libs/form/src/next/error-message/vl-error-message.component.ts")},"../../libs/form/src/next/select-rich/index.ts":(e,t,r)=>{r.d(t,{A:()=>n.Al});var n=r("../../libs/form/src/next/select-rich/vl-select-rich.component.ts");r("../../libs/form/src/next/select-rich/vl-select-rich.model.ts")},"../../libs/form/src/utils/index.ts":(e,t,r)=>{r.d(t,{S:()=>l});var n=r("../../libs/form/src/next/form-control/form-control.ts");let l=(e,t)=>{if(!e)return;let r=new FormData(e),l=e=>e instanceof n.M||e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement,s=Array.from(r.keys()).filter(e=>r.getAll(e).length>1),o=Array.from(e.querySelectorAll("*")).filter(e=>l(e)&&e.hasAttribute("multiple")).map(e=>e.getAttribute("name")),a=t||Array.from(new Set([...s,...o]));return Array.from(r.keys()).reduce((e,t)=>({...e,[t]:a.includes(t)?r.getAll(t):r.get(t)}),{})}}}]);