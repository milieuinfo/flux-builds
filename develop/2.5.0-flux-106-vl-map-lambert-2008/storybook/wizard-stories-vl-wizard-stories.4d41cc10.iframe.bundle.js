"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3007],{"../../libs/components/src/block/wizard/stories/vl-wizard.stories.ts":(e,l,n)=>{n.r(l),n.d(l,{WizardDefault:()=>w,__namedExportsOrder:()=>y,default:()=>f});var t=n("../../libs/common/src/index.ts"),a=n("../../resources/utils-storybook/index.ts"),i=n("../../node_modules/lit-html/lit-html.js");n("../../libs/components/src/block/wizard/vl-wizard-pane.component.ts"),n("../../libs/components/src/block/wizard/vl-wizard.component.ts");var r=n("../../libs/components/src/atom/link/index.ts"),o=n("../../libs/components/src/atom/title/index.ts"),d=n("../../node_modules/@storybook/addon-actions/dist/index.mjs");let s={...a.D8,activeStep:0,hideLabels:!1,numeric:!1,title:"",header:"",onClickStep:(0,d.XI)("vl-click-step")},c={...a.RN,activeStep:{name:"active-step",description:"Zet de actieve stap.",control:{type:a.VH.RANGE,min:1,max:2,step:1},table:{type:{summary:a.QE.NUMBER},category:a.R6.ATTRIBUTES,defaultValue:{summary:s.activeStep}}},hideLabels:{name:"hide-labels",description:"Bepaalt of de labels van de stappen verborgen moeten worden.",control:{type:a.VH.BOOLEAN},table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:s.hideLabels}}},numeric:{name:"numeric",description:"Voorziet numerieke indicatoren bij de stappen.",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:s.numeric}}},title:{description:"Slot voor de titel.",table:{category:a.R6.SLOTS,defaultValue:{summary:s.title}}},header:{description:"Slot voor de header.",table:{category:a.R6.SLOTS,defaultValue:{summary:s.header}}},onClickStep:{name:"vl-click-step",description:"Afgevuurd wanneer er op een stap geklikt wordt. In het event wordt het nummer en de naam vermeld.",table:{category:a.R6.EVENTS,defaultValue:{summary:s.onClickStep()}}}};n("../../node_modules/react/index.js");var v=n("../../node_modules/react/jsx-runtime.js"),m=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),p=n("../../node_modules/@storybook/blocks/dist/index.mjs");function u(e){let l=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,m.RP)(),e.components),{FluxMetaData:n}=l;return n||function(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("FluxMetaData",!0),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l.h1,{id:"wizard",children:"Wizard"}),"\n",(0,v.jsx)(n,{id:"components-block-wizard-wizard"}),"\n",(0,v.jsxs)(l.p,{children:["Gebruik een ",(0,v.jsx)(l.code,{children:"wizard"})," om een gebruiker door een meerstapsproces te begeleiden. Een wizard maakt het mogelijk om een\ningewikkeld proces op te delen in overzichtelijke, kleine stappen. Een wizard biedt ook de mogelijkheid opties in een\nbepaalde stap aan te passen op basis van keuzes die de gebruiker in een voorgaande stap heeft gemaakt."]}),"\n",(0,v.jsx)(l.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,v.jsx)(l.pre,{children:(0,v.jsx)(l.code,{className:"language-js",children:"import { VlWizard } from '@domg-wc/components/block';\n"})}),"\n",(0,v.jsx)(l.pre,{children:(0,v.jsx)(l.code,{className:"language-html",children:'<vl-wizard>\n    <vl-wizard-pane name="Step 1"><p>Pane content 1</p></vl-wizard-pane>\n    <vl-wizard-pane name="Step 2"><p>Pane content 2</p></vl-wizard-pane>\n</vl-wizard>\n'})}),"\n",(0,v.jsx)(p.Hl,{of:w}),"\n",(0,v.jsx)(l.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,v.jsx)(p.ov,{of:w}),"\n",(0,v.jsx)(l.h2,{id:"referenties",children:"Referenties"}),"\n",(0,v.jsx)(l.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,v.jsx)(l.p,{children:(0,v.jsx)(l.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/js-components/vl-ui-wizard",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Wizard"})}),"\n",(0,v.jsx)(l.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,v.jsx)(l.p,{children:(0,v.jsx)(l.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-wizard--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Wizard"})}),"\n",(0,v.jsx)(l.p,{children:(0,v.jsx)(l.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlWizard.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Wizard Pane"})}),"\n",(0,v.jsx)(l.p,{children:(0,v.jsx)(l.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-wizard.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Wizard"})})]})}let b=e=>{let[l]=[...document.querySelectorAll(e)].slice(-1);return l},h=()=>b("vl-wizard");var k=n("../../libs/components/src/form/form-label/index.ts"),g=n("../../libs/components/src/form/input-field/index.ts");(0,t.gy)([o.I,k.E,g.Y,r.m]);let f={id:"components-block-wizard-wizard",title:"Components - Block/wizard/wizard",tags:["autodocs"],args:s,argTypes:c,parameters:{docs:{page:function(e={}){let{wrapper:l}=Object.assign({},(0,m.RP)(),e.components);return l?(0,v.jsx)(l,Object.assign({},e,{children:(0,v.jsx)(u,e)})):u(e)}}}},w=(0,a._7)(s,({activeStep:e,hideLabels:l,title:n,header:t,onClickStep:a,numeric:r})=>(0,i.qy)` <div
        style="max-width: 780px;"
    >
        <vl-wizard
            active-step=${e}
            ?hide-labels=${l}
            ?numeric=${r}
            @vl-click-step=${e=>{a(e.detail),h().activeStep=e.detail.number}}
        >
            <vl-title slot="title" type="h2">${n}</vl-title>
            <p slot="header">${t}</p>
            <vl-wizard-pane name="Stap 1">
                <vl-title type="h3">Stap 1</vl-title>
                <div class="vl-grid vl-stacked-small">
                    <div class="vl-column vl-column--12">
                        <div class="vl-grid vl-stacked-small">
                            <div class="vl-column vl-column--12">
                                <vl-form-label for="naam" block> Naam</vl-form-label>
                                <vl-input-field id="naam" block></vl-input-field>
                            </div>
                        </div>
                    </div>
                    <div class="vl-column">
                        <vl-button @click=${()=>h().activeStep+=1} type="button"> Volgende</vl-button>
                    </div>
                </div>
            </vl-wizard-pane>
            <vl-wizard-pane name="Stap 2">
                <vl-title type="h3">Stap 2</vl-title>
                <div class="vl-grid vl-stacked-small">
                    <div class="vl-column vl-column--12">
                        <div class="vl-grid vl-stacked-small">
                            <div class="vl-column vl-column--12">
                                <vl-form-label for="years" block> Aantal jaren dienst</vl-form-label>
                                <vl-input-field id="years" block></vl-input-field>
                            </div>
                        </div>
                    </div>
                    <div class="vl-column vl-column--12">
                        <vl-link
                            @click=${()=>h().activeStep-=1}
                            button-as-link
                            label="vorige"
                            type="button"
                            icon="arrow-left-fat"
                            icon-placement="before"
                        >
                            Vorige
                        </vl-link>
                    </div>
                </div>
            </vl-wizard-pane>
        </vl-wizard>
    </div>`);w.storyName="vl-wizard - default",w.args={activeStep:1,title:"Wizard title",header:"You're a wizard Harry"},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:'story(wizardArgs, ({\n  activeStep,\n  hideLabels,\n  title,\n  header,\n  onClickStep,\n  numeric\n}: typeof wizardArgs) => html` <div\n        style="max-width: 780px;"\n    >\n        <vl-wizard\n            active-step=${activeStep}\n            ?hide-labels=${hideLabels}\n            ?numeric=${numeric}\n            @vl-click-step=${(event: VlClickStepEvent) => {\n  onClickStep(event.detail);\n  getWizard().activeStep = event.detail.number;\n}}\n        >\n            <vl-title slot="title" type="h2">${title}</vl-title>\n            <p slot="header">${header}</p>\n            <vl-wizard-pane name="Stap 1">\n                <vl-title type="h3">Stap 1</vl-title>\n                <div class="vl-grid vl-stacked-small">\n                    <div class="vl-column vl-column--12">\n                        <div class="vl-grid vl-stacked-small">\n                            <div class="vl-column vl-column--12">\n                                <vl-form-label for="naam" block> Naam</vl-form-label>\n                                <vl-input-field id="naam" block></vl-input-field>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="vl-column">\n                        <vl-button @click=${() => getWizard().activeStep += 1} type="button"> Volgende</vl-button>\n                    </div>\n                </div>\n            </vl-wizard-pane>\n            <vl-wizard-pane name="Stap 2">\n                <vl-title type="h3">Stap 2</vl-title>\n                <div class="vl-grid vl-stacked-small">\n                    <div class="vl-column vl-column--12">\n                        <div class="vl-grid vl-stacked-small">\n                            <div class="vl-column vl-column--12">\n                                <vl-form-label for="years" block> Aantal jaren dienst</vl-form-label>\n                                <vl-input-field id="years" block></vl-input-field>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="vl-column vl-column--12">\n                        <vl-link\n                            @click=${() => getWizard().activeStep -= 1}\n                            button-as-link\n                            label="vorige"\n                            type="button"\n                            icon="arrow-left-fat"\n                            icon-placement="before"\n                        >\n                            Vorige\n                        </vl-link>\n                    </div>\n                </div>\n            </vl-wizard-pane>\n        </vl-wizard>\n    </div>`)',...w.parameters?.docs?.source}}};let y=["WizardDefault"]}}]);