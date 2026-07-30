import{u as a,j as e,M as d,C as l,x as p,r as g,d as v,V as h}from"./iframe-DynOw9qF.js";import"./preload-helper-D9Z9MdNV.js";function c(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...t.components},{FluxComponentMetaData:s}=n;return s||b("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Form/input-group"}),`
`,e.jsx(n.h1,{id:"input-group",children:"Input Group"}),`
`,e.jsx(s,{id:"components-form-input-group"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"Input Group"})," combineert een ",e.jsx(n.code,{children:"Input Field"})," met een ",e.jsx(n.code,{children:"Button"}),`. Deze combinatie kan eender waar
gebruikt worden, het moet niet persé in een formulier! `,e.jsx(n.code,{children:"Input Group"}),` is geen aparte component:
`,e.jsx(n.a,{href:"/docs/styles-layout-group--documentatie",children:"Group"}),", ",e.jsx(n.a,{href:"/docs/components-atom-button--documentatie",children:"Button"}),`
en `,e.jsx(n.a,{href:"/docs/components-form-input-field--documentatie",children:"Input Field"}),` kunnen in de juiste toestand gebracht worden om
deze functionaliteit te ondersteunen.`]}),`
`,e.jsx(n.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsx(n.p,{children:"Om de componenten in de juiste stijl te zetten dien je het volgende te doen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["een overkoepelende ",e.jsx(n.code,{children:"div"})," voorzien met classes ",e.jsx(n.code,{children:"vl-group"})," en ",e.jsx(n.code,{children:"vl-group--input-group"})," (conform de BEM conventie)"]}),`
`,e.jsxs(n.li,{children:["een 'button' kind ",e.jsx(n.code,{children:"vl-button"})," met attribuut ",e.jsx(n.code,{children:"input-group"})]}),`
`,e.jsxs(n.li,{children:["een 'input field' kind ",e.jsx(n.code,{children:"vl-input-field"})," met attribuut ",e.jsx(n.code,{children:"input-group"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="vl-group vl-group--input-group">
    <vl-button input-group>Locatie kiezen</vl-button>
    <vl-input-field input-group></vl-input-field>
</div>
`})}),`
`,e.jsxs(n.p,{children:[`Naar keuze kan de knop links of rechts gezet worden, afhankelijk van de volgorde wordt automatisch de juiste style
toegepast. De stijl van de knop kan naar keuze aangepast worden (conform de button mogelijkheden), bvb. bij een icoon
kan er voor de `,e.jsx(n.code,{children:"tertiary"})," stijl gekozen worden."]}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"input-group---button-left",children:"input-group - button left"}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.h3,{id:"input-group---button-right",children:"input-group - button right"}),`
`,e.jsxs(n.p,{children:["Om de volledige breedte te benutten krijgt het input-field hier het ",e.jsx(n.code,{children:"block"})," attribuut."]}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(n.h3,{id:"input-group---icon-left",children:"input-group - icon left"}),`
`,e.jsxs(n.p,{children:["Om de volledige breedte te benutten krijgt het input-field hier het ",e.jsx(n.code,{children:"block"})," attribuut."]}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(n.h3,{id:"input-group---icon-right-tertiary-style",children:"input-group - icon right (tertiary style)"}),`
`,e.jsx(l,{of:u})]})}function m(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(c,{...t})}):c(t)}function b(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}g([v,h]);const x={id:"components-form-input-group",title:"Components - Form/input-group",tags:["autodocs"],parameters:{docs:{page:m}}},o=()=>p`
    <div class="vl-group vl-group--input-group">
        <vl-button input-group label="locatie kiezen">Locatie kiezen</vl-button>
        <vl-input-field input-group label="locatie ingave"></vl-input-field>
    </div>
`;o.storyName="input-group - button left";const i=()=>p`
    <div class="vl-group vl-group--input-group">
        <vl-input-field input-group block label="locatie ingave"></vl-input-field>
        <vl-button input-group label="locatie kiezen">Locatie kiezen</vl-button>
    </div>
`;i.storyName="input-group - button right";const r=()=>p`
    <div class="vl-group vl-group--input-group">
        <vl-button input-group icon="location" label="locatie kiezen"></vl-button>
        <vl-input-field input-group block label="locatie ingave"></vl-input-field>
    </div>
`;r.storyName="input-group - icon left";const u=()=>p`
    <div class="vl-group vl-group--input-group">
        <vl-input-field input-group label="locatie ingave"></vl-input-field>
        <vl-button input-group icon="location" tertiary label="locatie kiezen"></vl-button>
    </div>
`;u.storyName="input-group - icon right";o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => html\`
    <div class="vl-group vl-group--input-group">
        <vl-button input-group label="locatie kiezen">Locatie kiezen</vl-button>
        <vl-input-field input-group label="locatie ingave"></vl-input-field>
    </div>
\``,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => html\`
    <div class="vl-group vl-group--input-group">
        <vl-input-field input-group block label="locatie ingave"></vl-input-field>
        <vl-button input-group label="locatie kiezen">Locatie kiezen</vl-button>
    </div>
\``,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => html\`
    <div class="vl-group vl-group--input-group">
        <vl-button input-group icon="location" label="locatie kiezen"></vl-button>
        <vl-input-field input-group block label="locatie ingave"></vl-input-field>
    </div>
\``,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => html\`
    <div class="vl-group vl-group--input-group">
        <vl-input-field input-group label="locatie ingave"></vl-input-field>
        <vl-button input-group icon="location" tertiary label="locatie kiezen"></vl-button>
    </div>
\``,...u.parameters?.docs?.source}}};const k=["InputGroupButtonLeft","InputGroupButtonRight","InputGroupIconLeft","InputGroupIconRight"];export{o as InputGroupButtonLeft,i as InputGroupButtonRight,r as InputGroupIconLeft,u as InputGroupIconRight,k as __namedExportsOrder,x as default};
