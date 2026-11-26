import{C as o,T as s,d as p,a as l,s as m}from"./stories.helper-DYHi_5m6.js";import{u as c,j as e,C as u,b4 as w,b as z}from"./iframe-Cv28D2NX.js";import"./preload-helper-PPVm8Dsz.js";const t={...l,isActive:!1,name:""},x={...p,isActive:{name:"isActive",description:"Bepaalt of de pane actief is.",table:{type:{summary:s.STRING},category:o.ATTRIBUTES,defaultValue:{summary:String(t.isActive)}}},name:{name:"name",description:"Stelt de naam van de pane in. De naam is zichtbaar in de tooltip van de stap.",table:{type:{summary:s.STRING},category:o.ATTRIBUTES,defaultValue:{summary:t.name}}}};function d(n){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...n.components},{FluxComponentMetaData:i}=a;return i||f("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"wizard-pane",children:"Wizard Pane"}),`
`,e.jsx(i,{id:"components-block-wizard-wizard-pane"}),`
`,e.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(a.p,{children:["Gebruik de ",e.jsx(a.code,{children:"wizard-pane"}),` component om een stap in de wizard af te beelden.
Te gebruiken in combinatie met de `,e.jsx(a.a,{href:"/docs/components-block-wizard-wizard--documentatie",children:"wizard"})," component"]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlWizardPane } from '@domg-wc/components/block';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-wizard>
    <vl-wizard-pane name="Step 1"><p>Pane content</p></vl-wizard-pane>
</vl-wizard>
`})}),`
`,e.jsx(u,{of:r}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(w,{of:r})]})}function h(n={}){const{wrapper:a}={...c(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(d,{...n})}):d(n)}function f(n,a){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const y={id:"components-block-wizard-wizard-pane",title:"Components - Block/wizard/wizard-pane",tags:["autodocs"],args:t,argTypes:x,parameters:{docs:{page:h}}},r=m(t,({name:n})=>z`
        <div style="max-width: 780px">
            <vl-wizard>
                <vl-wizard-pane name=${n}><p>Pane content</p></vl-wizard-pane>
            </vl-wizard>
        </div>
    `);r.storyName="vl-wizard-pane - default";r.args={name:"Stap 1"};const b=["WizardPaneDefault"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(wizardPaneArgs, ({
  name
}) => html\`
        <div style="max-width: 780px">
            <vl-wizard>
                <vl-wizard-pane name=\${name}><p>Pane content</p></vl-wizard-pane>
            </vl-wizard>
        </div>
    \`)`,...r.parameters?.docs?.source}}};export{r as WizardPaneDefault,b as __namedExportsOrder,y as default};
