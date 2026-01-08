import{K as o,L as d,H as c,I as p,u as l,j as e,C as m,bd as h,s as u,x as w}from"./iframe-C7eocPW2.js";import"./preload-helper-D9Z9MdNV.js";const t={...p,isActive:!1,name:""},z={...c,isActive:{name:"isActive",description:"Bepaalt of de pane actief is.",table:{type:{summary:d.STRING},category:o.ATTRIBUTES,defaultValue:{summary:String(t.isActive)}}},name:{name:"name",description:"Stelt de naam van de pane in. De naam is zichtbaar in de tooltip van de stap.",table:{type:{summary:d.STRING},category:o.ATTRIBUTES,defaultValue:{summary:t.name}}}};function s(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...a.components},{FluxComponentMetaData:i}=n;return i||x("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"wizard-pane",children:"Wizard Pane"}),`
`,e.jsx(i,{id:"components-block-wizard-wizard-pane"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"wizard-pane"}),` component om een stap in de wizard af te beelden.
Te gebruiken in combinatie met de `,e.jsx(n.a,{href:"/docs/components-block-wizard-wizard--documentatie",children:"wizard"})," component"]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlWizardPane } from '@domg-wc/components/block';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-wizard>
    <vl-wizard-pane name="Step 1"><p>Pane content</p></vl-wizard-pane>
</vl-wizard>
`})}),`
`,e.jsx(m,{of:r}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/js-components/vl-ui-wizard",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Wizard"})}),`
`,e.jsx(n.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-wizard-vl-wizard-pane--default",rel:"nofollow",children:"Legacy Storybook - Wizard Pane"})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlWizardPane.html",rel:"nofollow",children:"Legacy Documentatie - Wizard Pane"})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-wizard.html",rel:"nofollow",children:"Legacy Demo - Wizard"})})]})}function v(a={}){const{wrapper:n}={...l(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(s,{...a})}):s(a)}function x(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const j={id:"components-block-wizard-wizard-pane",title:"Components - Block/wizard/wizard-pane",tags:["autodocs"],args:t,argTypes:z,parameters:{docs:{page:v}}},r=u(t,({name:a})=>w`
        <div style="max-width: 780px">
            <vl-wizard>
                <vl-wizard-pane name=${a}><p>Pane content</p></vl-wizard-pane>
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
