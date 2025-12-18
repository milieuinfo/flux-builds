import{u as v,j as l,M as i,C as d,x as t}from"./iframe-BQb9mjVp.js";import"./preload-helper-D9Z9MdNV.js";function r(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...v(),...e.components},{FluxComponentMetaData:a}=s;return a||u("FluxComponentMetaData"),l.jsxs(l.Fragment,{children:[l.jsx(i,{title:"Styles/Layout (afnemers)/stacked"}),`
`,l.jsx(s.h1,{id:"stacked",children:"Stacked"}),`
`,l.jsx(a,{id:"styles-layout-stacked"}),`
`,l.jsx(s.h2,{id:"doel",children:"Doel"}),`
`,l.jsx(s.p,{children:"De 'stacked' style-classes beïnvloeden de ruimte tussen kind items binnen Flexbox of Grid containers"}),`
`,l.jsx(s.h2,{id:"gebruik",children:"Gebruik"}),`
`,l.jsxs(s.p,{children:["Op de omsluitende parent de class ",l.jsx(s.code,{children:"vl-stacked-large"}),", ",l.jsx(s.code,{children:"vl-stacked-medium"})," of ",l.jsx(s.code,{children:"vl-stacked-small"}),` zetten,
voegt witruimte toe tussen de kinderen.`]}),`
`,l.jsx(s.h3,{id:"vl-stacked-large",children:"vl-stacked-large"}),`
`,l.jsx(d,{of:n}),`
`,l.jsx(s.h3,{id:"vl-stacked-medium",children:"vl-stacked-medium"}),`
`,l.jsx(d,{of:c}),`
`,l.jsx(s.h3,{id:"vl-stacked-small",children:"vl-stacked-small"}),`
`,l.jsx(d,{of:o})]})}function m(e={}){const{wrapper:s}={...v(),...e.components};return s?l.jsx(s,{...e,children:l.jsx(r,{...e})}):r(e)}function u(e,s){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const k={id:"styles-layout-stacked",title:"Styles/Layout (afnemers)/stacked",tags:["autodocs"],parameters:{docs:{page:m}}},n=({})=>t`
    <style>
        .vl-grid .vl-column {
            background-color: mediumspringgreen;
            border: lightseagreen 2px solid;
        }
    </style>
    <div class="vl-grid vl-stacked-large">
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
    </div>
`;n.storyName="vl-stacked - large";const c=({})=>t`
    <style>
        .vl-grid .vl-column {
            background-color: mediumspringgreen;
            border: lightseagreen 2px solid;
        }
    </style>
    <div class="vl-grid vl-stacked-medium">
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
    </div>
`;c.storyName="vl-stacked - medium";const o=({})=>t`
    <style>
        .vl-grid .vl-column {
            background-color: mediumspringgreen;
            border: lightseagreen 2px solid;
        }
    </style>
    <div class="vl-grid vl-stacked-small">
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
    </div>
`;o.storyName="vl-stacked - small";n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        .vl-grid .vl-column {
            background-color: mediumspringgreen;
            border: lightseagreen 2px solid;
        }
    </style>
    <div class="vl-grid vl-stacked-large">
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
    </div>
\``,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        .vl-grid .vl-column {
            background-color: mediumspringgreen;
            border: lightseagreen 2px solid;
        }
    </style>
    <div class="vl-grid vl-stacked-medium">
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
    </div>
\``,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        .vl-grid .vl-column {
            background-color: mediumspringgreen;
            border: lightseagreen 2px solid;
        }
    </style>
    <div class="vl-grid vl-stacked-small">
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
        <div class="vl-column vl-column--8 vl-column--start-3"></div>
    </div>
\``,...o.parameters?.docs?.source}}};const x=["StackedLarge","StackedMedium","StackedSmall"];export{n as StackedLarge,c as StackedMedium,o as StackedSmall,x as __namedExportsOrder,k as default};
