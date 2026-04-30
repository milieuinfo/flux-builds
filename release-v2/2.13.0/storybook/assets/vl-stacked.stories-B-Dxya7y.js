import{u as o,j as e,M as v,C as a,x as t}from"./iframe-69xRVzLO.js";import"./preload-helper-D9Z9MdNV.js";function r(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...o(),...n.components},{FluxComponentMetaData:c}=s;return c||u("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(v,{title:"Styles/Layout (afnemers)/stacked"}),`
`,e.jsx(s.h1,{id:"stacked",children:"Stacked"}),`
`,e.jsx(c,{id:"styles-layout-stacked"}),`
`,e.jsx(s.h2,{id:"doel",children:"Doel"}),`
`,e.jsx(s.p,{children:"De 'stacked' style-classes beïnvloeden de ruimte tussen kind items binnen Flexbox of Grid containers"}),`
`,e.jsx(s.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsxs(s.p,{children:["Op de omsluitende parent de class ",e.jsx(s.code,{children:"vl-stacked-large"}),", ",e.jsx(s.code,{children:"vl-stacked-medium"})," of ",e.jsx(s.code,{children:"vl-stacked-small"}),` zetten,
voegt witruimte toe tussen de kinderen. Indien je niet in een Grid of Flexbox container zit, dien je
`,e.jsx(s.code,{children:"vl-stacked"})," toe te voegen, deze voorziet een Flexbox in kolom layout."]}),`
`,e.jsx(s.h3,{id:"vl-stacked-large",children:"vl-stacked-large"}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(s.h3,{id:"vl-stacked-medium",children:"vl-stacked-medium"}),`
`,e.jsx(a,{of:i}),`
`,e.jsx(s.h3,{id:"vl-stacked-small",children:"vl-stacked-small"}),`
`,e.jsx(a,{of:l})]})}function m(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}function u(n,s){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const g={id:"styles-layout-stacked",title:"Styles/Layout (afnemers)/stacked",tags:["autodocs"],parameters:{docs:{page:m}}},d=({})=>t`
    <style>
        .sb-line {
            background-color: mediumspringgreen;
            border: lightseagreen 2px solid;
        }
    </style>
    <div class="vl-stacked vl-stacked-large">
        <div class="sb-line"></div>
        <div class="sb-line"></div>
        <div class="sb-line"></div>
        <div class="sb-line"></div>
    </div>
`;d.storyName="vl-stacked - large";const i=({})=>t`
    <style>
        .sb-line {
            background-color: mediumspringgreen;
            border: lightseagreen 2px solid;
        }
    </style>
    <div class="vl-stacked vl-stacked-medium">
        <div class="sb-line"></div>
        <div class="sb-line"></div>
        <div class="sb-line"></div>
        <div class="sb-line"></div>
    </div>
`;i.storyName="vl-stacked - medium";const l=({})=>t`
    <style>
        .sb-line {
            background-color: mediumspringgreen;
            border: lightseagreen 2px solid;
        }
    </style>
    <div class="vl-stacked vl-stacked-small">
        <div class="sb-line"></div>
        <div class="sb-line"></div>
        <div class="sb-line"></div>
        <div class="sb-line"></div>
    </div>
`;l.storyName="vl-stacked - small";d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        .sb-line {
            background-color: mediumspringgreen;
            border: lightseagreen 2px solid;
        }
    </style>
    <div class="vl-stacked vl-stacked-large">
        <div class="sb-line"></div>
        <div class="sb-line"></div>
        <div class="sb-line"></div>
        <div class="sb-line"></div>
    </div>
\``,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        .sb-line {
            background-color: mediumspringgreen;
            border: lightseagreen 2px solid;
        }
    </style>
    <div class="vl-stacked vl-stacked-medium">
        <div class="sb-line"></div>
        <div class="sb-line"></div>
        <div class="sb-line"></div>
        <div class="sb-line"></div>
    </div>
\``,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        .sb-line {
            background-color: mediumspringgreen;
            border: lightseagreen 2px solid;
        }
    </style>
    <div class="vl-stacked vl-stacked-small">
        <div class="sb-line"></div>
        <div class="sb-line"></div>
        <div class="sb-line"></div>
        <div class="sb-line"></div>
    </div>
\``,...l.parameters?.docs?.source}}};const p=["StackedLarge","StackedMedium","StackedSmall"];export{d as StackedLarge,i as StackedMedium,l as StackedSmall,p as __namedExportsOrder,g as default};
