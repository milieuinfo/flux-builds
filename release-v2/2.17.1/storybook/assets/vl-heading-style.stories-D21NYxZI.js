import{u as t,j as e,M as o,C as r,b0 as l,b1 as g,b2 as c,b3 as h,b4 as v,b5 as m,x as b,b6 as p}from"./iframe-DynOw9qF.js";import"./preload-helper-D9Z9MdNV.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...i.components},{FluxComponentMetaData:a}=n;return a||x("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components - Atom/heading-style"}),`
`,e.jsx(n.h1,{id:"heading-style",children:"Heading Style"}),`
`,e.jsx(a,{id:"components-atom-heading-style"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Heading"})," voorziet styling voor de 6 h-waardes. Deze wordt o.a. gebruikt in ",e.jsx(n.code,{children:"<vl-doormat>"})," en ",e.jsx(n.code,{children:"<vl-title>"}),"."]}),`
`,e.jsx(n.h2,{id:"implementatie",children:"Implementatie"}),`
`,e.jsx(n.p,{children:`Per h-waarde is er een constante voorzien met de desbetreffende styling. Het doel is deze implementatie te embedden
in de css van concrete componenten. Het is een bouwblok, niet bedoeld voor rechtstreeks gebruik!`}),`
`,e.jsxs(n.p,{children:["Hieronder zie je (zonder details) hoe ",e.jsx(n.code,{children:"vlHeading2"})," geïmplementeerd is."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export const vlHeading2 = css\`
    \${headingBase};

    font-size: 3.2rem;
    margin-bottom: 2rem;
    line-height: 1.24;

    @media screen and (max-width: \${vlMediaScreenSmall}px) {
        font-size: 2.6rem;
        margin-bottom: 1.5rem;
    }
\`;
`})}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.p,{children:"In dit voorbeeld zie je de verschillende headings, ze worden hier specifiek ge-wrapped in een custom style-class."}),`
`,e.jsx(r,{of:d})]})}function H(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}function x(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const y={id:"components-atom-heading-style",title:"Components - Atom/heading-style (intern)",tags:["autodocs"],parameters:{docs:{page:H}}},d=({})=>b`
    <style>
        .sb-heading-1 {
            ${l}
        }

        .sb-heading-2 {
            ${g}
        }

        .sb-heading-3 {
            ${c}
        }

        .sb-heading-4 {
            ${h}
        }

        .sb-heading-5 {
            ${v}
        }

        .sb-heading-6 {
            ${m}
        }
    </style>
    <div class="sb-heading-1">Heading van grootte 1</div>
    <div class="sb-heading-2">Heading van grootte 2</div>
    <div class="sb-heading-3">Heading van grootte 3</div>
    <div class="sb-heading-4">Heading van grootte 4</div>
    <div class="sb-heading-5">Heading van grootte 5</div>
    <div class="sb-heading-6">Heading van grootte 6</div>
`;d.storyName="heading-style - default";d.parameters=p;d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        .sb-heading-1 {
            \${vlHeading1}
        }

        .sb-heading-2 {
            \${vlHeading2}
        }

        .sb-heading-3 {
            \${vlHeading3}
        }

        .sb-heading-4 {
            \${vlHeading4}
        }

        .sb-heading-5 {
            \${vlHeading5}
        }

        .sb-heading-6 {
            \${vlHeading6}
        }
    </style>
    <div class="sb-heading-1">Heading van grootte 1</div>
    <div class="sb-heading-2">Heading van grootte 2</div>
    <div class="sb-heading-3">Heading van grootte 3</div>
    <div class="sb-heading-4">Heading van grootte 4</div>
    <div class="sb-heading-5">Heading van grootte 5</div>
    <div class="sb-heading-6">Heading van grootte 6</div>
\``,...d.parameters?.docs?.source}}};const f=["HeadingStyleDefault"];export{d as HeadingStyleDefault,f as __namedExportsOrder,y as default};
