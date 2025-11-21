"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[57],{"./docs/f_ontwerp/form/4_form-data/form-data.stories.ts":(e,t,n)=>{n.r(t),n.d(t,{FormData:()=>S,__namedExportsOrder:()=>z,default:()=>E});var o=n("../../node_modules/lit-html/lit-html.js");n("../../node_modules/react/index.js");var r=n("../../node_modules/react/jsx-runtime.js"),l=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),a=n("../../node_modules/@storybook/blocks/dist/index.mjs");function s(e){let t=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",code:"code",h2:"h2",ul:"ul",li:"li",pre:"pre",h3:"h3"},(0,l.RP)(),e.components),{Markdown:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Markdown",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"form---data",children:"Form - Data"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",(0,r.jsx)(t.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Om de form data te verzamelen, kan je de ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",target:"_blank",rel:"nofollow noopener noreferrer",children:"FormData"})," API gebruiken."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Echter, deze API is niet altijd even handig in gebruik. Als je ",(0,r.jsx)(t.code,{children:"FormData.entries()"})," gebruikt, dan krijg je een iterator van de waardes.\nDit is voldoende voor inputs met 1 waarde, maar voor inputs met meerdere waardes krijg je enkel de laatst gekozen waarde terug.\nWanneer je ",(0,r.jsx)(t.code,{children:"FormData.getAll()"})," gebruikt, krijg je dan weer altijd een array van waardes terug, ook voor inputs die maar 1 waarde kunnen bevatten."]}),"\n",(0,r.jsx)(t.p,{children:"Het gebruik is niet intuïtief en kan leiden tot verwarring, vooral wanneer je werkt met form controls die meerdere\nwaardes kunnen bevatten, zoals een multiselect."}),"\n",(0,r.jsx)(t.h2,{id:"formaat",children:"formaat"}),"\n",(0,r.jsx)(t.p,{children:"Daarom leek het ons aangewezen dat je altijd met een consistent object werkt voor de form data:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"voor form controls met 1 waarde, krijg je altijd een enkele waarde"}),"\n",(0,r.jsx)(t.li,{children:"voor form controls met meerdere waardes (bv. multiselect), krijg je altijd een array van waardes"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Dan kun je op een vereenvoudigde manier de form data verwerken,\nzonder dat je rekening moet houden met het type van de form control."}),"\n",(0,r.jsx)(t.p,{children:"bv."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'{\n          "naam": "Dehbi",\n          "startDate": "2025-07-11"\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"parseformdataformelement",children:"parseFormData(formElement)"}),"\n",(0,r.jsxs)(t.p,{children:["We hebben een helper functie voorzien om de data uit de form te parsen naar een object met de waardes van de velden,\nin het voorgestelde formaat zoals hierboven beschreven. Intern gebruikt deze functie\nde ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",target:"_blank",rel:"nofollow noopener noreferrer",children:"FormData"})," API en werkt die ook met native form controls."]}),"\n",(0,r.jsx)(t.p,{children:"Deze functie aanvaard 2 parameters:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"formElement: Form"}),": het Form element waarvan je de data wil parsen"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"multiFormControlNames?: string[]"}),": (optioneel) een array van form control namen die meerdere waardes kunnen bevatten.\nAls deze parameter niet wordt meegegeven, dan zoekt de functie zelf naar form controls die meerdere waardes kunnen\nbevatten (bv. vl-select-rich met ",(0,r.jsx)(t.code,{children:"multiple"})," attribuut...). Deze parameter is in de meeste gevallen niet nodig."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"gebruik",children:"Gebruik"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import { parseFormData } from "@domg-wc/form/utils";\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<form @submit=${this.onSubmit}>\n  ...\n</form>\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"onSubmit(event: Event): void {\n    // voorkomt het standaardgedrag van het formulier,\n    // zodat we de formulierinzending zelf kunnen afhandelen.\n    event.preventDefault();\n\n    // parse de form data\n    const data = parseFormData(event.target as HTMLFormElement);\n    // print de form data in de console\n    console.log(data);\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"voorbeeld-resultaat",children:"Voorbeeld resultaat"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'{\n          "naam": "Dehbi",\n          "startDate": "2025-07-11"\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"setformdataformelement-data",children:"setFormData(formElement, data)"}),"\n",(0,r.jsx)(t.p,{children:"We hebben een helper functie voorzien om de data in te stellen op een form element, zodat je op een eenvoudiger manier\nde waardes van de form controls kan aanpassen. Deze functie is compatibel met al onze vl-form componenten maar ook met\nnative HTML form controls."}),"\n",(0,r.jsx)(t.p,{children:"Deze functie aanvaard 2 parameters:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"formElement: Form"}),": het Form element waarvan je de data wil zetten"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"data: { [p: string]: FormDataEntryValue[] | File | string }"}),": een object met de waardes van de velden"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"gebruik-1",children:"Gebruik"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import { setFormData } from "@domg-wc/form/utils";\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<form id="example-form">\n    <input type="text" name="naam" />\n    <select name="hobbies" multiple>\n        <option value="value1">Value 1</option>\n        <option value="value2">Value 2</option>\n        <option value="value3">Value 3</option>\n    </select>\n    <input type="checkbox" name="waarheidsgetrouw" value="spreekt-de-waarheid">\n</form>\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"const formElement = document.getElementById('example-form') as HTMLFormElement;\n// stel de form data in\nsetFormData(formElement, {\n    naam: 'Dehbi',\n    hobbies: ['Drummen', 'Zwemmen']\n    });\n"})}),"\n",(0,r.jsx)("vl-alert",{type:"info",title:"Ter info",icon:"info-circle",size:"small","custom-css":".vl-alert{margin-bottom: 3rem;}",children:(0,r.jsx)(n,{options:{forceInline:!0},style:{fontSize:"14px"},children:`
 De parameter om form data in te stellen bij setFormData() is hetzelfde formaat als de data die parseFormData()
  functie retourneert.
 `})}),"\n",(0,r.jsx)(t.h3,{id:"checkbox",children:"Checkbox"}),"\n",(0,r.jsxs)(t.p,{children:["De checkbox werkt op een andere manier dan de andere form controls.\nDe value die meegegeven wordt gaat het ",(0,r.jsx)(t.code,{children:"checked"})," attribuut van de checkbox bepalen maar gaat nooit de ",(0,r.jsx)(t.code,{children:"value"})," van de checkbox wijzigen."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Om een checkbox aan te vinken, dien je de value mee te geven die op de checkbox ingesteld staat. Als je de verkeerde string meegeeft wordt niets veranderd."}),"\n",(0,r.jsxs)(t.li,{children:["Om een checkbox uit te vinken kan je de value ",(0,r.jsx)(t.code,{children:"null"})," of ",(0,r.jsx)(t.code,{children:"undefined"})," meegeven."]}),"\n",(0,r.jsxs)(t.li,{children:["Je kan tevens ook ofwel een boolean meegeven, waarbij ",(0,r.jsx)(t.code,{children:"true"})," de checkbox aanvinkt en ",(0,r.jsx)(t.code,{children:"false"})," de checkbox uitvinkt."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Meer info vind je bij de ",(0,r.jsx)(t.a,{href:"?path=/docs/components-form-checkbox--documentatie#formdata",children:"Checkbox Documentatie - FormData"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,r.jsxs)(t.p,{children:["Dit component toont een formulier met verschillende types van form controls. Het formulier kan worden ingevuld met\n",(0,r.jsx)(t.a,{href:"#setformdataformelement-data",children:"setFormData()"})," en de data kan worden opgehaald met\n",(0,r.jsx)(t.a,{href:"#parseformdataformelement",children:"parseFormData()"})," (die wordt dan onderaan de form geprint)."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["De data kan worden ingesteld met de ",(0,r.jsx)(t.code,{children:"Stel in"})," knop. (",(0,r.jsx)(t.a,{href:"#setformdataformelement-data",children:"setFormData()"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["De data kan worden opgehaald met de ",(0,r.jsx)(t.code,{children:"Verstuur"})," knop. (",(0,r.jsx)(t.a,{href:"#parseformdataformelement",children:"parseFormData()"}),")"]}),"\n"]}),"\n",(0,r.jsx)(a.Hl,{of:S,sourceState:"none"})]})}var i=n("../../libs/common/utilities/src/index.ts"),d=n("../../node_modules/lit/index.js"),c=n("../../libs/components/src/next/button/index.ts"),m=n("../../libs/elements/src/index.ts"),h=n("../../libs/form/src/next/error-message/index.ts"),u=n("../../libs/form/src/next/form-label/index.ts"),x=n("../../libs/form/src/next/input-field/index.ts"),v=n("../../libs/form/src/next/select-rich/index.ts"),b=n("../../libs/form/src/utils/index.ts"),p=n("../../libs/form/src/next/select/index.ts"),f=n("../../libs/form/src/next/input-field-masked/index.ts"),g=n("../../libs/form/src/next/textarea-rich/vl-textarea-rich.component.ts"),j=n("../../libs/components/src/next/title/index.ts"),k=n("../../libs/form/src/next/checkbox/index.ts"),y=n("../../libs/form/src/next/datepicker/index.ts"),w=n("../../libs/form/src/next/upload/index.ts"),D=n("../../libs/form/src/next/radio-group/index.ts"),F=n("../../libs/common/utilities/src/css/index.ts");class _ extends i.jW{static{(0,i.gy)([u.E,h.X,k.v,D.I,x.Y,p.Y,v.A,h.X,c.Y,f.j,y.M,g.I,j.I,w.f])}static get properties(){return{parsedFormData:{type:Object,state:!0}}}static get styles(){return[m.hF,F.B2,(0,d.AH)`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }

                .form-buttons {
                    vl-button-next:not(:last-child) {
                        margin-right: 1.4rem;
                    }
                }

                pre {
                    font-size: 1rem;
                }
            `]}render(){return(0,d.qy)`
            <form id="form" class="vl-form" @submit=${this.onSubmit} @reset=${this.onReset} autocomplete="off">
                <div class="vl-grid-next">
                    <div class="vl-column-next vl-column-next--4">
                        <vl-form-label-next for="naam" label="Naam *" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8">
                        <vl-input-field-next id="naam" name="naam" block></vl-input-field-next>
                    </div>
                    <div class="vl-column-next vl-column-next--4">
                        <vl-form-label-next for="geboorteplaats" label="Geboorteplaats" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8">
                        <vl-select-next
                            id="geboorteplaats"
                            name="geboorteplaats"
                            .options=${this.geboorteplaatsen}
                            placeholder="Selecteer geboorteplaats"
                        >
                        </vl-select-next>
                    </div>
                    <div class="vl-column-next vl-column-next--4">
                        <vl-form-label-next for="hobbies" label="Hobbies" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8">
                        <vl-select-rich-next
                            id="hobbies"
                            name="hobbies"
                            multiple
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

                    <div class="vl-column-next vl-column-next--4">
                        <vl-form-label-next for="betrokkenheid" label="Betrokkenheid" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column--start-5">
                        <vl-checkbox-next
                            id="betrokkenheid-plannende-overheid"
                            name="betrokkenheid"
                            value="plannende-overheid"
                            multiple
                        >
                            <span>Plannende overheid</span>
                        </vl-checkbox-next>
                        <vl-checkbox-next
                            id="betrokkenheid-adviesverlener"
                            name="betrokkenheid"
                            value="adviesverlener"
                            multiple
                        >
                            <span>Adviesverlener</span>
                        </vl-checkbox-next>
                        <vl-checkbox-next
                            id="betrokkenheid-hogere-overheid"
                            name="betrokkenheid"
                            value="hogere-overheid"
                            multiple
                        >
                            <span>Hogere overheid</span>
                        </vl-checkbox-next>
                    </div>
                    <div class="vl-column-next vl-column-next--4">
                        <vl-form-label-next for="vervoer" label="Vervoer" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8">
                        <vl-radio-group-next name="vervoer">
                            <vl-radio-next value="land">Land</vl-radio-next>
                            <vl-radio-next value="zee">Zee</vl-radio-next>
                            <vl-radio-next value="lucht">Lucht</vl-radio-next>
                        </vl-radio-group-next>
                    </div>
                    <div class="vl-column-next vl-column-next--4">
                        <vl-form-label-next for="startDate" label="Aanvangsdatum" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8">
                        <vl-datepicker-next static name="startDate"> </vl-datepicker-next>
                    </div>
                    <div class="vl-column-next vl-column-next--4">
                        <vl-form-label-next for="file" label="Bestand" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8">
                        <vl-upload-next url="test" name="file" max-files="2"> </vl-upload-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--start-5">
                        <div class="form-buttons">
                            <vl-button-next type="button" title="setFormData()" @click=${this.onSetFormData}
                                >Stel in
                            </vl-button-next>
                            <vl-button-next type="submit" title="parseFormData()">Verstuur</vl-button-next>
                            <vl-button-next type="reset" secondary>Reset</vl-button-next>
                        </div>
                    </div>
                    ${this.parsedFormData?(0,d.qy)`
                              <div class="vl-column-next vl-column-next--4">
                                  <vl-form-label-next>Formulier data</vl-form-label-next>
                              </div>
                              <div class="vl-column-next vl-column-next--8">
                                  <pre>${JSON.stringify(this.parsedFormData,null,10)}</pre>
                              </div>
                          `:""}
                </div>
            </form>
        `}get formData(){let e=this.shadowRoot?.querySelector("form");return console.log("[formData] form",e),e?(0,b.S)(e):null}onSubmit(e){e.preventDefault();let t=(0,b.S)(e.target);this.parsedFormData=t,console.log(t)}onReset(){this.parsedFormData=null;let e=this.shadowRoot?.querySelector("form");e?.reset()}onSetFormData(){let e=this.shadowRoot?.querySelector("form"),t={naam:"Dehbi",geboorteplaats:"knokke-heist",hobbies:["drummen","dans"],betrokkenheid:["plannende-overheid","hogere-overheid"],vervoer:"zee",startDate:"today",file:[new File(["Hallo, world!"],"dossier.txt",{type:"text/plain",lastModified:new Date().getMilliseconds()}),new File(["Konichua, world!"],"aanbeveling.txt",{type:"text/plain",lastModified:new Date().getMilliseconds()})]};(0,b.p)(e,t)}constructor(...e){super(...e),this.hobbies=[{label:"Padel",value:"padel"},{label:"Dans",value:"dans"},{label:"Drummen",value:"drummen"},{label:"Zwemmen",value:"zwemmen"},{label:"Boardgames",value:"boardgames"},{label:"Fietsen",value:"fietsen"},{label:"Cocktails",value:"cocktails"}],this.geboorteplaatsen=[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"}],this.parsedFormData=null}}_=function(e,t,n,o){var r,l=arguments.length,a=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(l<3?r(a):l>3?r(t,n,a):r(t,n))||a);return l>3&&a&&Object.defineProperty(t,n,a),a}([(0,i.M1)("vl-form-data")],_),(0,i.gy)([_]);let E={title:"Ontwerp/Form/Form Data",tags:["autodocs"],parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,l.RP)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}}}},S=()=>(0,o.qy)`<vl-form-data></vl-form-data>`;S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"() => html`<vl-form-data></vl-form-data>`",...S.parameters?.docs?.source}}};let z=["FormData"]},"../../libs/components/src/next/title/index.ts":(e,t,n)=>{n.d(t,{I:()=>o.I});var o=n("../../libs/components/src/next/title/vl-title.component.ts")},"../../libs/components/src/next/title/vl-title.component.ts":(e,t,n)=>{n.d(t,{I:()=>d});var o=n("../../libs/common/utilities/src/index.ts");n("../../node_modules/@lit/reactive-element/reactive-element.js");var r=n("../../node_modules/lit-html/lit-html.js");n("../../node_modules/lit-element/lit-element.js");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l=(e,t,n)=>{for(var o of t)if(o[0]===e)return(0,o[1])();return null==n?void 0:n()},a=n("../../node_modules/lit/directives/class-map.js"),s=n("../../libs/components/src/next/title/vl-title.css.ts"),i=n("../../libs/components/src/next/title/vl-title.defaults.ts");class d extends o.jW{static get styles(){return[s.Z]}static get properties(){return{type:{type:String},underline:{type:Boolean},noSpaceBottom:{type:Boolean,attribute:"no-space-bottom"},alt:{type:Boolean}}}render(){let e={underline:this.underline,"no-space-bottom":this.noSpaceBottom,alt:this.alt};return(0,r.qy)`
            ${l(this.type,[["h1",()=>(0,r.qy)` <h1 class=${(0,a.H)(e)} part="h1">
                            <slot></slot>
                        </h1>`],["h2",()=>(0,r.qy)` <h2 class=${(0,a.H)(e)} part="h2">
                            <slot></slot>
                        </h2>`],["h3",()=>(0,r.qy)` <h3 class=${(0,a.H)(e)} part="h3">
                            <slot></slot>
                        </h3>`],["h4",()=>(0,r.qy)` <h4 class=${(0,a.H)(e)} part="h4">
                            <slot></slot>
                        </h4>`],["h5",()=>(0,r.qy)` <h5 class=${(0,a.H)(e)} part="h5">
                            <slot></slot>
                        </h5>`],["h6",()=>(0,r.qy)` <h6 class=${(0,a.H)(e)} part="h6">
                            <slot></slot>
                        </h6>`]],()=>(0,r.qy)` <h1 class=${(0,a.H)(e)} part="h1">
                    <slot></slot>
                </h1>`)}
        `}constructor(...e){super(...e),this.type=i.D.type,this.underline=i.D.underline,this.noSpaceBottom=i.D.noSpaceBottom,this.alt=i.D.alt}}d=function(e,t,n,o){var r,l=arguments.length,a=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(l<3?r(a):l>3?r(t,n,a):r(t,n))||a);return l>3&&a&&Object.defineProperty(t,n,a),a}([(0,o.M1)("vl-title-next")],d)},"../../libs/components/src/next/title/vl-title.defaults.ts":(e,t,n)=>{n.d(t,{D:()=>o});let o={type:"h1",underline:!1,alt:!1,noSpaceBottom:!1}},"../../libs/form/src/next/textarea-rich/vl-textarea-rich.component.ts":(e,t,n)=>{n.d(t,{I:()=>c});var o=n("../../libs/common/utilities/src/index.ts"),r=n("../../node_modules/tinymce-next/tinymce.js"),l=n.n(r),a=n("../../libs/form/src/next/textarea/vl-textarea.component.ts"),s=n("../../node_modules/lit/index.js");let i=(0,s.AH)`
    .tox-tinymce {
        border-radius: 0.3rem;
        border: 0.1rem solid #8695a8;
    }

    .tox .tox-toolbar__primary {
        border-bottom: 0.1rem solid #8695a8;
        background: none;
    }

    .tox:not(.tox-tinymce-inline) .tox-editor-header {
        box-shadow: none;
        padding: 0;
    }

    .tox .tox-statusbar {
        border-top: 0.1rem solid #8695a8;
    }

    .tox:not([dir='rtl']) .tox-toolbar__group:not(:last-of-type) {
        border-right: 1px solid #8695a8;
    }

    .tox .tox-toolbar__group {
        padding: 0 4px 0 4px;
    }

    .tox .tox-tbtn {
        margin: 4px 0;
        height: 32px;
    }

    .tox .tox-tbtn:hover {
        background: #dee0e2;
    }

    .tox .tox-tbtn--enabled,
    .tox .tox-tbtn--enabled:hover {
        background: #c8cbcf;
    }

    .tox .tox-editor-header.hidden {
        display: none;
    }

    /* Link plugin modal styles */
    .tox .tox-dialog {
        box-shadow: 0 0 2.1rem 0 rgba(0, 0, 0, 0.3);
        font-family: 'Flanders Art Sans', sans-serif;
        border-radius: 0;
        padding: 3rem;

        .tox-dialog__header,
        .tox-dialog__body-content,
        .tox-dialog__footer {
            padding: 0;
        }

        .tox-dialog__header {
            margin-bottom: 1.5rem;

            .tox-button.tox-button--icon {
                display: none;
            }

            .tox-dialog__title {
                font-family: 'Flanders Art Sans', sans-serif;
                font-weight: 500;
            }
        }

        .tox-form__group {
            margin-bottom: 1.5rem;
        }

        .tox-label {
            color: #4d4d4b;
            font-size: 1.6rem;
            font-weight: 500;
            margin-bottom: 0.6rem;
        }

        .tox-dialog__body-content {
            overflow: visible;
        }

        .tox-textfield {
            font-family: 'Flanders Art Sans', sans-serif;
            height: 3.5rem;
            line-height: 3.5rem;
            border-radius: 0.3rem;
            border: 0.1rem solid #687483;
            padding: 0 1rem;

            &:focus {
                border: 0.1rem solid #687483;
                box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
            }
        }

        .tox-dialog__footer {
            margin-top: 1rem;
            justify-content: flex-start;

            .tox-button {
                margin-right: 1.5rem;
                margin-left: 0;
                order: 1;
                border: 0;
                padding: 0;
                font-size: 1.6rem;
                font-family: 'Flanders Art Sans', sans-serif;
                font-weight: 500;
                line-height: 3.5rem;
                padding: 0 2rem;
                background-color: #05c;
                text-decoration: none;
                border-radius: 0.3rem;
                color: #fff;
                cursor: default;

                &:hover {
                    background-color: #003bb0;
                }

                &.tox-button--secondary {
                    order: 2;
                    background-color: transparent;
                    cursor: pointer;
                    color: #05c;
                    font-weight: 400;
                    text-decoration: underline;
                    padding: 0;
                }
            }
        }
    }
`;var d=n("../../libs/form/src/next/textarea-rich/vl-textarea-rich.defaults.ts");class c extends a.m{static get styles(){return[...a.m.styles,i]}static get properties(){return{toolbar:{type:String},plugins:{type:String},preview:{type:Boolean},customConfig:{type:Object}}}constructor(){super(),this.toolbar=d.x.toolbar,this.plugins=d.x.plugins,this.preview=d.x.preview,this.customConfig=d.x.customConfig,this.editor=null,this.id||(this.id=l().DOM.uniqueId())}firstUpdated(e){super.firstUpdated(e),this.initTinyMCE().then(()=>{this.removeAttribute("aria-hidden")})}updated(e){super.updated(e),e.has("success")&&this.setEditorSuccess(),e.has("error")&&this.setEditorError(),e.has("readonly")&&this.setEditorReadonly(),e.has("disabled")&&this.setEditorDisabled(),e.has("preview")&&this.setEditorPreview(),e.has("value")&&this.editor?.getContent()!==this.value&&this.editor?.setContent(this.value),e.has("isInvalid")&&this.editor?.getBody()?.classList?.toggle("error",this.isInvalid||this.error)}disconnectedCallback(){super.disconnectedCallback(),this.editor?.mode?.set("readonly"),this.editor?.destroy()}resetFormControl(){super.resetFormControl(),this.editor?.setContent(this.initialValue)}focus(){this.editor?.focus()}async initTinyMCE(){await l().init({target:this.validationTarget,suffix:".min",language:"nl_BE",base_url:"https://cdn.omgeving.vlaanderen.be/domg/tinymce/6.8.3",toolbar:this.toolbar,menubar:!1,elementpath:!1,branding:!1,content_css:"https://cdn.omgeving.vlaanderen.be/domg/govflanders-style/14.1.0/custom/tinymce.css",verify_html:!1,body_class:"vl-typography",plugins:this.plugins,formats:{bold:{inline:"b"},italic:{inline:"i"},underline:{inline:"u"},strikethrough:{inline:"s"}},link_title:!1,link_target_list:!1,link_default_target:"_blank",...this.customConfig}),this.editor=l().get(this.id),this.editor?.on("input change redo undo",()=>{this.value=this.editor?.getContent()||""}),this.editor?.on("ExecCommand",e=>{"mceLink"===e.command&&setTimeout(()=>{let e=this.shadowRoot?.querySelector(".tox-dialog input.tox-textfield");e?.focus()},0)}),this.setEditorSuccess(),this.setEditorError(),this.setEditorReadonly(),this.setEditorDisabled(),this.setEditorPreview()}setEditorSuccess(){this.editor?.getBody()?.classList?.toggle("success",this.success)}setEditorError(){this.editor?.getBody()?.classList?.toggle("error",this.error)}setEditorReadonly(){let e=this.shouldDisableEditor();this.editor?.mode?.set(e?"readonly":"design")}setEditorDisabled(){let e=this.shouldDisableEditor();this.editor?.mode?.set(e?"readonly":"design"),this.editor?.getBody()?.classList?.toggle("vl-textarea--disabled",this.disabled)}setEditorPreview(){let e=this.shouldDisableEditor();this.editor?.mode.set(e?"readonly":"design"),this.editor?.getContainer()?.querySelector(".tox-editor-header")?.classList.toggle("hidden",this.preview)}shouldDisableEditor(){return this.readonly||this.disabled||this.preview}}c=function(e,t,n,o){var r,l=arguments.length,a=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(l<3?r(a):l>3?r(t,n,a):r(t,n))||a);return l>3&&a&&Object.defineProperty(t,n,a),a}([(0,o.M1)("vl-textarea-rich-next")],c)},"../../libs/form/src/next/textarea-rich/vl-textarea-rich.defaults.ts":(e,t,n)=>{n.d(t,{x:()=>o});let o={...n("../../libs/form/src/next/textarea/vl-textarea.defaults.ts").r,toolbar:"undo redo | bold italic underline strikethrough",plugins:"",preview:!1,customConfig:null}}}]);