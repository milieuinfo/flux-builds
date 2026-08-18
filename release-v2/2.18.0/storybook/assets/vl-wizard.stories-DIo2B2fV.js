import{Z as i,_ as o,a1 as c,W as g,X as k,u as p,j as l,C as f,b8 as h,s as y,x as S,r as w,Q as z,b as x,V as j,bH as C}from"./iframe-COmpMQdF.js";import"./preload-helper-D9Z9MdNV.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,a={...k,activeStep:0,hideLabels:!1,numeric:!1,title:"",header:"",onClickStep:E("vl-click-step")},T={...g,activeStep:{name:"active-step",description:"Zet de actieve stap.",control:{type:c.RANGE,min:1,max:2,step:1},table:{type:{summary:o.NUMBER},category:i.ATTRIBUTES,defaultValue:{summary:String(a.activeStep)}}},hideLabels:{name:"hide-labels",description:"Bepaalt of de labels van de stappen verborgen moeten worden.",control:{type:c.BOOLEAN},table:{type:{summary:o.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(a.hideLabels)}}},numeric:{name:"numeric",description:"Voorziet numerieke indicatoren bij de stappen.",table:{type:{summary:o.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(a.numeric)}}},title:{description:"Slot voor de titel.",table:{category:i.SLOTS,defaultValue:{summary:a.title}}},header:{description:"Slot voor de header.",table:{category:i.SLOTS,defaultValue:{summary:a.header}}},onClickStep:{name:"vl-click-step",description:"Afgevuurd wanneer er op een stap geklikt wordt. In het event wordt het nummer en de naam vermeld.",table:{category:i.EVENTS,defaultValue:{summary:String(a.onClickStep())}}}};function v(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...t.components},{FluxComponentMetaData:r}=e;return r||V("FluxComponentMetaData"),l.jsxs(l.Fragment,{children:[l.jsx(e.h1,{id:"wizard",children:"Wizard"}),`
`,l.jsx(r,{id:"components-block-wizard-wizard"}),`
`,l.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,l.jsxs(e.p,{children:["Gebruik een ",l.jsx(e.code,{children:"wizard"}),` om een gebruiker door een meerstapsproces te begeleiden. Een wizard maakt het mogelijk om een
ingewikkeld proces op te delen in overzichtelijke, kleine stappen. Een wizard biedt ook de mogelijkheid opties in een
bepaalde stap aan te passen op basis van keuzes die de gebruiker in een voorgaande stap heeft gemaakt.`]}),`
`,l.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,l.jsx(e.pre,{children:l.jsx(e.code,{className:"language-js",children:`import { VlWizard } from '@domg-wc/components/block';
`})}),`
`,l.jsx(e.pre,{children:l.jsx(e.code,{className:"language-html",children:`<vl-wizard>
    <vl-wizard-pane name="Step 1"><p>Pane content 1</p></vl-wizard-pane>
    <vl-wizard-pane name="Step 2"><p>Pane content 2</p></vl-wizard-pane>
</vl-wizard>
`})}),`
`,l.jsx(f,{of:n}),`
`,l.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,l.jsx(h,{of:n})]})}function A(t={}){const{wrapper:e}={...p(),...t.components};return e?l.jsx(e,{...t,children:l.jsx(v,{...t})}):v(t)}function V(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const O=t=>{const[e]=[...document.querySelectorAll(t)].slice(-1);return e},d=()=>O("vl-wizard");w([z,x,j,C]);const N={id:"components-block-wizard-wizard",title:"Components - Block/wizard/wizard",tags:["autodocs"],args:a,argTypes:T,parameters:{docs:{page:A}}},n=y(a,({activeStep:t,hideLabels:e,title:r,header:m,onClickStep:u,numeric:b})=>S` <div
        style="max-width: 780px;"
    >
        <vl-wizard
            active-step=${t}
            ?hide-labels=${e}
            ?numeric=${b}
            @vl-click-step=${s=>{u(s.detail),d().activeStep=s.detail.number}}
        >
            <vl-title slot="title" type="h2">${r}</vl-title>
            <p slot="header">${m}</p>
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
                        <vl-button @click=${()=>d().activeStep+=1} type="button"> Volgende</vl-button>
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
                            @click=${()=>d().activeStep-=1}
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
    </div>`);n.storyName="vl-wizard - default";n.args={activeStep:1,title:"Wizard title",header:"You're a wizard Harry"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(wizardArgs, ({
  activeStep,
  hideLabels,
  title,
  header,
  onClickStep,
  numeric
}: typeof wizardArgs) => html\` <div
        style="max-width: 780px;"
    >
        <vl-wizard
            active-step=\${activeStep}
            ?hide-labels=\${hideLabels}
            ?numeric=\${numeric}
            @vl-click-step=\${(event: VlClickStepEvent) => {
  onClickStep(event.detail);
  getWizard().activeStep = event.detail.number;
}}
        >
            <vl-title slot="title" type="h2">\${title}</vl-title>
            <p slot="header">\${header}</p>
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
                        <vl-button @click=\${() => getWizard().activeStep += 1} type="button"> Volgende</vl-button>
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
                            @click=\${() => getWizard().activeStep -= 1}
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
    </div>\`)`,...n.parameters?.docs?.source}}};const _=["WizardDefault"];export{n as WizardDefault,_ as __namedExportsOrder,N as default};
