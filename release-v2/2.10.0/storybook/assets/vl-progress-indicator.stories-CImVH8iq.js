import{R as a,U as o,Y as h,O as $,P as C,u as b,j as e,C as u,bh as w,s as O,x as E}from"./iframe-FlvNZLqI.js";import"./preload-helper-D9Z9MdNV.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,n={...C,activeStep:0,showLabels:!1,focusOnChange:!1,numeric:!1,steps:[""],onClickStep:L("vl-click-step"),staticSteps:!1,enableFutureSteps:!1},A={...$,activeStep:{name:"active-step",description:"Markeert een stap als de actieve.",control:{type:h.RANGE,min:1,max:3,step:1},table:{type:{summary:o.NUMBER},category:a.ATTRIBUTES,defaultValue:{summary:String(n.activeStep)}}},showLabels:{name:"show-labels",description:"Bepaalt of de labels van de stappen altijd zichtbaar zijn.",table:{type:{summary:o.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(n.showLabels)}}},focusOnChange:{name:"focus-on-change",description:"Bepaalt of een stap de focus krijgt na een wijziging.",table:{type:{summary:o.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(n.focusOnChange)}}},numeric:{name:"numeric",description:"Voorziet numerieke indicatoren bij de stappen.",table:{type:{summary:o.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(n.numeric)}}},staticSteps:{name:"static-steps",description:"Gebruik het `static-steps` attribuut indien de stappen niet aanklikbaar zijn. Deze worden dan als `div` ipv als `button` gerenderd.",table:{type:{summary:o.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(n.staticSteps)}}},enableFutureSteps:{name:"enable-future-steps",description:"Voorkomt het disablen van stappen na de huidige stap.",table:{type:{summary:o.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(n.enableFutureSteps)}}},steps:{description:"Lijst met omschrijvingen per stap.",control:{type:h.OBJECT,required:!0},table:{type:{summary:o.ARRAY},category:a.PROPERTIES,defaultValue:{summary:String(n.steps)}}},onClickStep:{name:"vl-click-step",description:"Afgevuurd na het klikken op een stap.<br>Het event bevat de omschrijving en het nummer van de stap.",table:{type:{summary:"{ step: string, number: number }"},category:a.EVENTS}}};function v(t){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...b(),...t.components},{FluxComponentMetaData:m}=s;return m||T("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"progress-indicator",children:"Progress Indicator"}),`
`,e.jsx(m,{id:"components-block-progress-indicator"}),`
`,e.jsx(s.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(s.p,{children:["Gebruik een ",e.jsx(s.code,{children:"progress-indicator"})," om de vooruitgang te tonen van een proces dat uit verschillende stappen bestaat."]}),`
`,e.jsx(s.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`import { VlProgressIndicatorComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<vl-progress-indicator></vl-progress-indicator>
`})}),`
`,e.jsx(u,{of:r}),`
`,e.jsx(s.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(w,{of:r}),`
`,e.jsx(s.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(s.h3,{id:"numerieke-indicators",children:"Numerieke indicators"}),`
`,e.jsx(u,{of:i}),`
`,e.jsx(s.h3,{id:"met-labels",children:"Met labels"}),`
`,e.jsxs(s.p,{children:[`Labels hebben een maximum breedte en krijgen een ellipsis indien ze langer zijn. De volledige tekst is dan beschikbaar
via de default `,e.jsx(s.code,{children:"title"})," tooltip."]}),`
`,e.jsx(s.p,{children:`De laatste stap neemt de beschikbare breedte in, naar gelang de breedte van het
label.`}),`
`,e.jsx(s.p,{children:"De labels worden verborgen op resoluties kleiner dan 768 pixels."}),`
`,e.jsxs(s.p,{children:["Kies je voor ",e.jsx(s.code,{children:"showLabels: false"})," dan worden de labels vervangen door een tooltip."]}),`
`,e.jsx(u,{of:p}),`
`,e.jsx(s.h3,{id:"statische-stappen",children:"Statische stappen"}),`
`,e.jsxs(s.p,{children:[`In sommige gevallen zijn de stappen louter indicatief en mogen ze niet aanklikbaar zijn. Gebruik in dat geval
het attribuut `,e.jsx(s.code,{children:"static-steps"}),". Er zullen dan geen ",e.jsx(s.code,{children:"<nav>"})," en ",e.jsx(s.code,{children:"<button>"})," elementen gebruikt worden."]}),`
`,e.jsx(u,{of:l}),`
`,e.jsx(s.h3,{id:"focus-op-de-actieve-stap",children:"Focus op de actieve stap"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"focus-on-change"})," zorgt ervoor dat een stap focus krijgt bij het laden van deze stap."]}),`
`,e.jsx(u,{of:c}),`
`,e.jsx(s.h3,{id:"toekomstige-stappen-aanklikbaar-houden",children:"Toekomstige stappen aanklikbaar houden"}),`
`,e.jsxs(s.p,{children:[`Doorgaans zijn de stappen na de huidige stap niet aanklikbaar omdat eerst de voorgaande stappen afgewerkt moeten worden.
Indien dit niet gewenst is kan je dit uitschakelen met `,e.jsx(s.code,{children:"enable-future-steps"}),"."]}),`
`,e.jsx(u,{of:d}),`
`,e.jsx(s.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(s.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-progress-bar",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Progress Bar"})}),`
`,e.jsx(s.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-progress-indicator--default",rel:"nofollow",children:"Legacy Storybook - Progress Bar"})}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlProgressBar.html",rel:"nofollow",children:"Legacy Documentatie - Progress Bar"})}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-progress-indicator.html",rel:"nofollow",children:"Legacy Demo - Progress Bar"})})]})}function I(t={}){const{wrapper:s}={...b(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(v,{...t})}):v(t)}function T(t,s){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const P={id:"components-block-progress-indicator",title:"Components - Block/progress-indicator",tags:["autodocs"],args:n,argTypes:A,parameters:{docs:{page:I}}},g=O(n,({activeStep:t,showLabels:s,focusOnChange:m,numeric:S,steps:f,onClickStep:j,staticSteps:k,enableFutureSteps:x})=>E`
        <vl-progress-indicator
            active-step=${t}
            ?show-labels=${s}
            ?focus-on-change=${m}
            ?numeric=${S}
            ?static-steps=${k}
            ?enable-future-steps=${x}
            .steps=${f}
            @vl-click-step=${y=>j(y.detail)}
        >
        </vl-progress-indicator>
    `),r=g.bind({});r.storyName="vl-progress-indicator - default";r.args={steps:["Stap 1/3: Aanvraag","Stap 2/3: Gegevens","Stap 3/3: Bevestigen"],activeStep:1};const i=g.bind({});i.storyName="vl-progress-indicator - numeric";i.args={steps:["Stap 1/3: Aanvraag","Stap 2/3: Gegevens","Stap 3/3: Bevestigen"],activeStep:1,numeric:!0};const c=g.bind({});c.storyName="vl-progress-indicator - focused";c.args={steps:["Stap 1/3: Aanvraag","Stap 2/3: Gegevens","Stap 3/3: Bevestigen"],activeStep:1,focusOnChange:!0};const p=g.bind({});p.storyName="vl-progress-indicator - labels";p.args={steps:["Stap 1/3: Aanvraag","Stap 2/3: Gegevens","Stap 3/3: Bevestigen"],activeStep:1,focusOnChange:!0,numeric:!0,showLabels:!0};const l=g.bind({});l.storyName="vl-progress-indicator - statische stappen";l.args={steps:["Stap 1/3: Aanvraag","Stap 2/3: Gegevens","Stap 3/3: Bevestigen"],activeStep:1,numeric:!0,showLabels:!0,staticSteps:!0};const d=g.bind({});d.storyName="vl-progress-indicator - toekomstige stappen aanklikbaar houden";d.args={steps:["Stap 1/3: Aanvraag","Stap 2/3: Gegevens","Stap 3/3: Bevestigen"],activeStep:1,numeric:!0,showLabels:!0,enableFutureSteps:!0};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(progressIndicatorArgs, ({
  activeStep,
  showLabels,
  focusOnChange,
  numeric,
  steps,
  onClickStep,
  staticSteps,
  enableFutureSteps
}) => html\`
        <vl-progress-indicator
            active-step=\${activeStep}
            ?show-labels=\${showLabels}
            ?focus-on-change=\${focusOnChange}
            ?numeric=\${numeric}
            ?static-steps=\${staticSteps}
            ?enable-future-steps=\${enableFutureSteps}
            .steps=\${steps}
            @vl-click-step=\${(event: CustomEvent) => onClickStep(event.detail)}
        >
        </vl-progress-indicator>
    \`)`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(progressIndicatorArgs, ({
  activeStep,
  showLabels,
  focusOnChange,
  numeric,
  steps,
  onClickStep,
  staticSteps,
  enableFutureSteps
}) => html\`
        <vl-progress-indicator
            active-step=\${activeStep}
            ?show-labels=\${showLabels}
            ?focus-on-change=\${focusOnChange}
            ?numeric=\${numeric}
            ?static-steps=\${staticSteps}
            ?enable-future-steps=\${enableFutureSteps}
            .steps=\${steps}
            @vl-click-step=\${(event: CustomEvent) => onClickStep(event.detail)}
        >
        </vl-progress-indicator>
    \`)`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(progressIndicatorArgs, ({
  activeStep,
  showLabels,
  focusOnChange,
  numeric,
  steps,
  onClickStep,
  staticSteps,
  enableFutureSteps
}) => html\`
        <vl-progress-indicator
            active-step=\${activeStep}
            ?show-labels=\${showLabels}
            ?focus-on-change=\${focusOnChange}
            ?numeric=\${numeric}
            ?static-steps=\${staticSteps}
            ?enable-future-steps=\${enableFutureSteps}
            .steps=\${steps}
            @vl-click-step=\${(event: CustomEvent) => onClickStep(event.detail)}
        >
        </vl-progress-indicator>
    \`)`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(progressIndicatorArgs, ({
  activeStep,
  showLabels,
  focusOnChange,
  numeric,
  steps,
  onClickStep,
  staticSteps,
  enableFutureSteps
}) => html\`
        <vl-progress-indicator
            active-step=\${activeStep}
            ?show-labels=\${showLabels}
            ?focus-on-change=\${focusOnChange}
            ?numeric=\${numeric}
            ?static-steps=\${staticSteps}
            ?enable-future-steps=\${enableFutureSteps}
            .steps=\${steps}
            @vl-click-step=\${(event: CustomEvent) => onClickStep(event.detail)}
        >
        </vl-progress-indicator>
    \`)`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(progressIndicatorArgs, ({
  activeStep,
  showLabels,
  focusOnChange,
  numeric,
  steps,
  onClickStep,
  staticSteps,
  enableFutureSteps
}) => html\`
        <vl-progress-indicator
            active-step=\${activeStep}
            ?show-labels=\${showLabels}
            ?focus-on-change=\${focusOnChange}
            ?numeric=\${numeric}
            ?static-steps=\${staticSteps}
            ?enable-future-steps=\${enableFutureSteps}
            .steps=\${steps}
            @vl-click-step=\${(event: CustomEvent) => onClickStep(event.detail)}
        >
        </vl-progress-indicator>
    \`)`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(progressIndicatorArgs, ({
  activeStep,
  showLabels,
  focusOnChange,
  numeric,
  steps,
  onClickStep,
  staticSteps,
  enableFutureSteps
}) => html\`
        <vl-progress-indicator
            active-step=\${activeStep}
            ?show-labels=\${showLabels}
            ?focus-on-change=\${focusOnChange}
            ?numeric=\${numeric}
            ?static-steps=\${staticSteps}
            ?enable-future-steps=\${enableFutureSteps}
            .steps=\${steps}
            @vl-click-step=\${(event: CustomEvent) => onClickStep(event.detail)}
        >
        </vl-progress-indicator>
    \`)`,...d.parameters?.docs?.source}}};const N=["ProgressIndicatorDefault","ProgressIndicatorNumeric","ProgressIndicatorFocused","ProgressIndicatorLabels","ProgressIndicatorStaticSteps","ProgressIndicatorEnableFutureSteps"];export{r as ProgressIndicatorDefault,d as ProgressIndicatorEnableFutureSteps,c as ProgressIndicatorFocused,p as ProgressIndicatorLabels,i as ProgressIndicatorNumeric,l as ProgressIndicatorStaticSteps,N as __namedExportsOrder,P as default};
