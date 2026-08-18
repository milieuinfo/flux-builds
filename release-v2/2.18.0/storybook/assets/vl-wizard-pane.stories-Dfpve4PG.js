import{Z as o,_ as s,W as p,X as l,u as c,j as e,C as m,b8 as u,s as w,x as z}from"./iframe-COmpMQdF.js";import"./preload-helper-D9Z9MdNV.js";const t={...l,isActive:!1,name:""},x={...p,isActive:{name:"isActive",description:"Bepaalt of de pane actief is.",table:{type:{summary:s.STRING},category:o.ATTRIBUTES,defaultValue:{summary:String(t.isActive)}}},name:{name:"name",description:"Stelt de naam van de pane in. De naam is zichtbaar in de tooltip van de stap.",table:{type:{summary:s.STRING},category:o.ATTRIBUTES,defaultValue:{summary:t.name}}}};function d(n){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...n.components},{FluxComponentMetaData:i}=a;return i||v("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"wizard-pane",children:"Wizard Pane"}),`
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
`,e.jsx(m,{of:r}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(u,{of:r})]})}function h(n={}){const{wrapper:a}={...c(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(d,{...n})}):d(n)}function v(n,a){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const j={id:"components-block-wizard-wizard-pane",title:"Components - Block/wizard/wizard-pane",tags:["autodocs"],args:t,argTypes:x,parameters:{docs:{page:h}}},r=w(t,({name:n})=>z`
        <div style="max-width: 780px">
            <vl-wizard>
                <vl-wizard-pane name=${n}><p>Pane content</p></vl-wizard-pane>
            </vl-wizard>
        </div>
    `);r.storyName="vl-wizard-pane - default";r.args={name:"Stap 1"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(wizardPaneArgs, ({
  name
}) => html\`
        <div style="max-width: 780px">
            <vl-wizard>
                <vl-wizard-pane name=\${name}><p>Pane content</p></vl-wizard-pane>
            </vl-wizard>
        </div>
    \`)`,...r.parameters?.docs?.source}}};const y=["WizardPaneDefault"];export{r as WizardPaneDefault,y as __namedExportsOrder,j as default};
