import{u as t,j as e,M as o,C as r,aY as l,aZ as g,a_ as c,a$ as h,b0 as v,b1 as m,b as p,b2 as b}from"./iframe-ylVHDfb1.js";import"./preload-helper-PPVm8Dsz.js";function s(a){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...a.components},{FluxComponentMetaData:d}=n;return d||x("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components - Atom/heading-style"}),`
`,e.jsx(n.h1,{id:"heading-style",children:"Heading Style"}),`
`,e.jsx(d,{id:"components-atom-heading-style"}),`
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
`,e.jsx(r,{of:i})]})}function H(a={}){const{wrapper:n}={...t(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(s,{...a})}):s(a)}function x(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const y={id:"components-atom-heading-style",title:"Components - Atom/heading-style (intern)",tags:["autodocs"],parameters:{docs:{page:H}}},i=({})=>p`
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
`;i.storyName="heading-style - default";i.parameters=b;i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({}) => html\`
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
\``,...i.parameters?.docs?.source}}};const f=["HeadingStyleDefault"];export{i as HeadingStyleDefault,f as __namedExportsOrder,y as default};
