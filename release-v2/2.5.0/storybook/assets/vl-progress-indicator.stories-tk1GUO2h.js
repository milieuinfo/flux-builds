import{J as i,K as c,O as g,G as S,H as y,u,j as e,C as l,bd as j,s as x,x as C}from"./iframe-CflcmDUD.js";import"./preload-helper-D9Z9MdNV.js";const{action:k}=__STORYBOOK_MODULE_ACTIONS__,t={...y,activeStep:0,showLabels:!1,focusOnChange:!1,numeric:!1,steps:[""],onClickStep:k("vl-click-step")},O={...S,activeStep:{name:"active-step",description:"Markeert een stap als de actieve.",control:{type:g.RANGE,min:1,max:3,step:1},table:{type:{summary:c.NUMBER},category:i.ATTRIBUTES,defaultValue:{summary:String(t.activeStep)}}},showLabels:{name:"show-labels",description:"Bepaalt of de labels van de stappen altijd zichtbaar zijn.",table:{type:{summary:c.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(t.showLabels)}}},focusOnChange:{name:"focus-on-change",description:"Bepaalt of een stap de focus krijgt na een wijziging.",table:{type:{summary:c.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(t.focusOnChange)}}},numeric:{name:"numeric",description:"Voorziet numerieke indicatoren bij de stappen.",table:{type:{summary:c.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(t.numeric)}}},steps:{description:"Lijst met omschrijvingen per stap.",control:{type:g.OBJECT,required:!0},table:{type:{summary:c.ARRAY},category:i.PROPERTIES,defaultValue:{summary:String(t.steps)}}},onClickStep:{name:"vl-click-step",description:"Afgevuurd na het klikken op een stap.<br>Het event bevat de omschrijving en het nummer van de stap.",table:{type:{summary:"{ step: string, number: number }"},category:i.EVENTS}}};function m(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...u(),...s.components},{FluxMetaData:p}=n;return p||E("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"progress-indicator",children:"Progress Indicator"}),`
`,e.jsx(p,{id:"components-block-progress-indicator"}),`
`,e.jsxs(n.p,{children:["Gebruik een ",e.jsx(n.code,{children:"progress-indicator"})," om de vooruitgang te tonen van een proces dat uit verschillende stappen bestaat."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlProgressIndicatorComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-progress-indicator></vl-progress-indicator>
`})}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(j,{of:r}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"numerieke-indicators",children:"Numerieke indicators"}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(n.h3,{id:"focus-op-de-actieve-stap",children:"Focus op de actieve stap"}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-progress-bar",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Progress Bar"})}),`
`,e.jsx(n.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-progress-indicator--default",rel:"nofollow",children:"Legacy Storybook - Progress Bar"})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlProgressBar.html",rel:"nofollow",children:"Legacy Documentatie - Progress Bar"})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-progress-indicator.html",rel:"nofollow",children:"Legacy Demo - Progress Bar"})})]})}function w(s={}){const{wrapper:n}={...u(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(m,{...s})}):m(s)}function E(s,n){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}const $={id:"components-block-progress-indicator",title:"Components - Block/progress-indicator",tags:["autodocs"],args:t,argTypes:O,parameters:{docs:{page:w}}},d=x(t,({activeStep:s,showLabels:n,focusOnChange:p,numeric:h,steps:v,onClickStep:f})=>C`
        <vl-progress-indicator
            active-step=${s}
            ?show-labels=${n}
            ?focus-on-change=${p}
            ?numeric=${h}
            .steps=${v}
            @vl-click-step=${b=>f(b.detail)}
        >
        </vl-progress-indicator>
    `),r=d.bind({});r.storyName="vl-progress-indicator - default";r.args={steps:["Stap 1/3: Aanvraag","Stap 2/3: Gegevens","Stap 3/3: Bevestigen"],activeStep:1};const a=d.bind({});a.storyName="vl-progress-indicator - numeric";a.args={steps:["Stap 1/3: Aanvraag","Stap 2/3: Gegevens","Stap 3/3: Bevestigen"],activeStep:1,numeric:!0};const o=d.bind({});o.storyName="vl-progress-indicator - focused";o.args={steps:["Stap 1/3: Aanvraag","Stap 2/3: Gegevens","Stap 3/3: Bevestigen"],activeStep:1,focusOnChange:!0};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(progressIndicatorArgs, ({
  activeStep,
  showLabels,
  focusOnChange,
  numeric,
  steps,
  onClickStep
}) => html\`
        <vl-progress-indicator
            active-step=\${activeStep}
            ?show-labels=\${showLabels}
            ?focus-on-change=\${focusOnChange}
            ?numeric=\${numeric}
            .steps=\${steps}
            @vl-click-step=\${(event: CustomEvent) => onClickStep(event.detail)}
        >
        </vl-progress-indicator>
    \`)`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(progressIndicatorArgs, ({
  activeStep,
  showLabels,
  focusOnChange,
  numeric,
  steps,
  onClickStep
}) => html\`
        <vl-progress-indicator
            active-step=\${activeStep}
            ?show-labels=\${showLabels}
            ?focus-on-change=\${focusOnChange}
            ?numeric=\${numeric}
            .steps=\${steps}
            @vl-click-step=\${(event: CustomEvent) => onClickStep(event.detail)}
        >
        </vl-progress-indicator>
    \`)`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(progressIndicatorArgs, ({
  activeStep,
  showLabels,
  focusOnChange,
  numeric,
  steps,
  onClickStep
}) => html\`
        <vl-progress-indicator
            active-step=\${activeStep}
            ?show-labels=\${showLabels}
            ?focus-on-change=\${focusOnChange}
            ?numeric=\${numeric}
            .steps=\${steps}
            @vl-click-step=\${(event: CustomEvent) => onClickStep(event.detail)}
        >
        </vl-progress-indicator>
    \`)`,...o.parameters?.docs?.source}}};const B=["ProgressIndicatorDefault","ProgressIndicatorNumeric","ProgressIndicatorFocused"];export{r as ProgressIndicatorDefault,o as ProgressIndicatorFocused,a as ProgressIndicatorNumeric,B as __namedExportsOrder,$ as default};
