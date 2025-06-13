"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3007],{"../../libs/components/src/wizard/stories/vl-wizard.stories.ts":(e,t,n)=>{n.r(t),n.d(t,{WizardDefault:()=>g,__namedExportsOrder:()=>k,default:()=>y});var l=n("../../libs/common/storybook/src/index.ts"),a=n("../../libs/common/utilities/src/index.ts"),i=n("../../libs/components/src/next/link/index.ts"),o=n("../../libs/components/src/next/title/index.ts"),r=n("../../libs/form/src/next/form-label/index.ts"),s=n("../../libs/form/src/next/input-field/index.ts"),d=n("../../node_modules/lit-html/lit-html.js");n("../../libs/components/src/wizard/vl-wizard-pane.component.ts"),n("../../libs/components/src/wizard/vl-wizard.component.ts");var c=n("../../node_modules/@storybook/addon-actions/dist/index.mjs");let v={...l.D8,activeStep:0,hideLabels:!1,numeric:!1,title:"",header:"",onClickStep:(0,c.XI)("vl-click-step")},p={...(0,l.RN)(),activeStep:{name:"data-vl-active-step",description:"Zet de actieve stap.",control:{type:l.VH.RANGE,min:1,max:2,step:1},table:{type:{summary:l.QE.NUMBER},category:l.R6.ATTRIBUTES,defaultValue:{summary:v.activeStep}}},hideLabels:{name:"data-vl-hide-labels",description:"Bepaalt of de labels van de stappen verborgen moeten worden.",control:{type:l.VH.BOOLEAN},table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:v.hideLabels}}},numeric:{name:"data-vl-numeric",description:"Voorziet numerieke indicatoren bij de stappen.",table:{type:{summary:l.QE.BOOLEAN},category:l.R6.ATTRIBUTES,defaultValue:{summary:v.numeric}}},title:{description:"Slot voor de titel.",table:{category:l.R6.SLOTS,defaultValue:{summary:v.title}}},header:{description:"Slot voor de header.",table:{category:l.R6.SLOTS,defaultValue:{summary:v.header}}},onClickStep:{name:"vl-click-step",description:"Afgevuurd wanneer er op een stap geklikt wordt. In het event wordt het nummer en de naam vermeld.",table:{category:l.R6.EVENTS,defaultValue:{summary:v.onClickStep()}}}};n("../../node_modules/react/index.js");var m=n("../../node_modules/react/jsx-runtime.js"),u=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),x=n("../../node_modules/@storybook/blocks/dist/index.mjs");function h(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,u.RP)(),e.components),{VluxMetaData:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.h1,{id:"wizard",children:"Wizard"}),"\n",(0,m.jsx)(n,{id:"components-wizard-wizard"}),"\n",(0,m.jsxs)(t.p,{children:["Gebruik een ",(0,m.jsx)(t.code,{children:"wizard"})," om een gebruiker door een meerstapsproces te begeleiden. Een wizard maakt het mogelijk om een\ningewikkeld proces op te delen in overzichtelijke, kleine stappen. Een wizard biedt ook de mogelijkheid opties in een\nbepaalde stap aan te passen op basis van keuzes die de gebruiker in een voorgaande stap heeft gemaakt."]}),"\n",(0,m.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:"language-js",children:"import { VlWizard } from '@domg-wc/components';\n"})}),"\n",(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:"language-html",children:'<vl-wizard>\n    <vl-wizard-pane data-vl-name="Step 1"><p>Pane content 1</p></vl-wizard-pane>\n    <vl-wizard-pane data-vl-name="Step 2"><p>Pane content 2</p></vl-wizard-pane>\n</vl-wizard>\n'})}),"\n",(0,m.jsx)(x.Hl,{of:g}),"\n",(0,m.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,m.jsx)(x.ov,{of:g}),"\n",(0,m.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,m.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,m.jsx)(t.p,{children:(0,m.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/js-components/vl-ui-wizard",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Wizard"})}),"\n",(0,m.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,m.jsx)(t.p,{children:(0,m.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-wizard--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Wizard"})}),"\n",(0,m.jsx)(t.p,{children:(0,m.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlWizard.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Wizard Pane"})}),"\n",(0,m.jsx)(t.p,{children:(0,m.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-wizard.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Wizard"})})]})}let b=e=>{let[t]=[...document.querySelectorAll(e)].slice(-1);return t},f=()=>b("vl-wizard");(0,a.gy)([o.I,r.E,s.Y,i.m]);let y={id:"components-wizard-wizard",title:"Components/wizard/wizard",tags:["autodocs"],args:v,argTypes:p,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,u.RP)(),e.components);return t?(0,m.jsx)(t,Object.assign({},e,{children:(0,m.jsx)(h,e)})):h(e)}}}},g=(0,l._7)(v,({activeStep:e,hideLabels:t,title:n,header:l,onClickStep:a,numeric:i})=>(0,d.qy)` <div
        style="max-width: 780px;"
    >
        <vl-wizard
            data-vl-active-step=${e}
            ?data-vl-hide-labels=${t}
            ?data-vl-numeric=${i}
            @vl-click-step=${e=>{a(e.detail),f().activeStep=e.detail.number}}
        >
            <vl-title-next slot="title" type="h2">${n}</vl-title-next>
            <p slot="header">${l}</p>
            <vl-wizard-pane data-vl-name="Stap 1">
                <vl-title-next type="h3">Stap 1</vl-title-next>
                <div class="vl-grid-next vl-stacked-next-small">
                    <div class="vl-column-next vl-column-next--12">
                        <div class="vl-grid-next vl-stacked-next-small">
                            <div class="vl-column-next vl-column-next--12">
                                <vl-form-label-next for="naam" block> Naam </vl-form-label-next>
                                <vl-input-field-next id="naam" block></vl-input-field-next>
                            </div>
                        </div>
                    </div>
                    <div class="vl-column-next">
                        <vl-button-next @click=${()=>f().activeStep+=1} type="button">
                            Volgende
                        </vl-button-next>
                    </div>
                </div>
            </vl-wizard-pane>
            <vl-wizard-pane data-vl-name="Stap 2">
                <vl-title-next type="h3">Stap 2</vl-title-next>
                <div class="vl-grid-next vl-stacked-next-small">
                    <div class="vl-column-next vl-column-next--12">
                        <div class="vl-grid-next vl-stacked-next-small">
                            <div class="vl-column-next vl-column-next--12">
                                <vl-form-label-next for="years" block> Aantal jaren dienst </vl-form-label-next>
                                <vl-input-field-next id="years" block></vl-input-field-next>
                            </div>
                        </div>
                    </div>
                    <div class="vl-column-next vl-column-next--12">
                        <vl-link-next
                            @click=${()=>f().activeStep-=1}
                            button-as-link
                            label="vorige"
                            type="button"
                            icon="arrow-left-fat"
                            icon-placement="before"
                        >
                            Vorige
                        </vl-link-next>
                    </div>
                </div>
            </vl-wizard-pane>
        </vl-wizard>
    </div>`);g.storyName="vl-wizard - default",g.args={activeStep:1,title:"Wizard title",header:"You're a wizard Harry"},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:'story(wizardArgs, ({\n  activeStep,\n  hideLabels,\n  title,\n  header,\n  onClickStep,\n  numeric\n}: typeof wizardArgs) => html` <div\n        style="max-width: 780px;"\n    >\n        <vl-wizard\n            data-vl-active-step=${activeStep}\n            ?data-vl-hide-labels=${hideLabels}\n            ?data-vl-numeric=${numeric}\n            @vl-click-step=${(event: VlClickStepEvent) => {\n  onClickStep(event.detail);\n  getWizard().activeStep = event.detail.number;\n}}\n        >\n            <vl-title-next slot="title" type="h2">${title}</vl-title-next>\n            <p slot="header">${header}</p>\n            <vl-wizard-pane data-vl-name="Stap 1">\n                <vl-title-next type="h3">Stap 1</vl-title-next>\n                <div class="vl-grid-next vl-stacked-next-small">\n                    <div class="vl-column-next vl-column-next--12">\n                        <div class="vl-grid-next vl-stacked-next-small">\n                            <div class="vl-column-next vl-column-next--12">\n                                <vl-form-label-next for="naam" block> Naam </vl-form-label-next>\n                                <vl-input-field-next id="naam" block></vl-input-field-next>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="vl-column-next">\n                        <vl-button-next @click=${() => getWizard().activeStep += 1} type="button">\n                            Volgende\n                        </vl-button-next>\n                    </div>\n                </div>\n            </vl-wizard-pane>\n            <vl-wizard-pane data-vl-name="Stap 2">\n                <vl-title-next type="h3">Stap 2</vl-title-next>\n                <div class="vl-grid-next vl-stacked-next-small">\n                    <div class="vl-column-next vl-column-next--12">\n                        <div class="vl-grid-next vl-stacked-next-small">\n                            <div class="vl-column-next vl-column-next--12">\n                                <vl-form-label-next for="years" block> Aantal jaren dienst </vl-form-label-next>\n                                <vl-input-field-next id="years" block></vl-input-field-next>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="vl-column-next vl-column-next--12">\n                        <vl-link-next\n                            @click=${() => getWizard().activeStep -= 1}\n                            button-as-link\n                            label="vorige"\n                            type="button"\n                            icon="arrow-left-fat"\n                            icon-placement="before"\n                        >\n                            Vorige\n                        </vl-link-next>\n                    </div>\n                </div>\n            </vl-wizard-pane>\n        </vl-wizard>\n    </div>`)',...g.parameters?.docs?.source}}};let k=["WizardDefault"]},"../../libs/components/src/next/title/index.ts":(e,t,n)=>{n.d(t,{I:()=>l.I});var l=n("../../libs/components/src/next/title/vl-title.component.ts")},"../../libs/components/src/next/title/vl-title.component.ts":(e,t,n)=>{n.d(t,{I:()=>d});var l=n("../../libs/common/utilities/src/index.ts");n("../../node_modules/@lit/reactive-element/reactive-element.js");var a=n("../../node_modules/lit-html/lit-html.js");n("../../node_modules/lit-element/lit-element.js");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var i=(e,t,n)=>{for(var l of t)if(l[0]===e)return(0,l[1])();return null==n?void 0:n()},o=n("../../node_modules/lit/directives/class-map.js"),r=n("../../libs/components/src/next/title/vl-title.css.ts"),s=n("../../libs/components/src/next/title/vl-title.defaults.ts");class d extends l.jW{static get styles(){return[r.Z]}static get properties(){return{type:{type:String},underline:{type:Boolean},noSpaceBottom:{type:Boolean,attribute:"no-space-bottom"},alt:{type:Boolean}}}render(){let e={underline:this.underline,"no-space-bottom":this.noSpaceBottom,alt:this.alt};return(0,a.qy)`
            ${i(this.type,[["h1",()=>(0,a.qy)` <h1 class=${(0,o.H)(e)} part="h1">
                            <slot></slot>
                        </h1>`],["h2",()=>(0,a.qy)` <h2 class=${(0,o.H)(e)} part="h2">
                            <slot></slot>
                        </h2>`],["h3",()=>(0,a.qy)` <h3 class=${(0,o.H)(e)} part="h3">
                            <slot></slot>
                        </h3>`],["h4",()=>(0,a.qy)` <h4 class=${(0,o.H)(e)} part="h4">
                            <slot></slot>
                        </h4>`],["h5",()=>(0,a.qy)` <h5 class=${(0,o.H)(e)} part="h5">
                            <slot></slot>
                        </h5>`],["h6",()=>(0,a.qy)` <h6 class=${(0,o.H)(e)} part="h6">
                            <slot></slot>
                        </h6>`]],()=>(0,a.qy)` <h1 class=${(0,o.H)(e)} part="h1">
                    <slot></slot>
                </h1>`)}
        `}constructor(...e){super(...e),this.type=s.D.type,this.underline=s.D.underline,this.noSpaceBottom=s.D.noSpaceBottom,this.alt=s.D.alt}}d=function(e,t,n,l){var a,i=arguments.length,o=i<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,n):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,l);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(o=(i<3?a(o):i>3?a(t,n,o):a(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o}([(0,l.M1)("vl-title-next")],d)},"../../libs/components/src/next/title/vl-title.defaults.ts":(e,t,n)=>{n.d(t,{D:()=>l});let l={type:"h1",underline:!1,alt:!1,noSpaceBottom:!1}}}]);