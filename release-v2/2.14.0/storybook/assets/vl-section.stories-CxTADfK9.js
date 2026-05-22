import{u as v,j as e,M as p,C as b,S as m,x as c,i as u,b6 as i}from"./iframe-D9dm7PbY.js";import"./preload-helper-D9Z9MdNV.js";const h=""+new URL("section-overlap-BFjLB5_G.png",import.meta.url).href;function a(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...v(),...n.components},{FluxComponentMetaData:d}=s;return d||x("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Styles/Layout (afnemers)/section"}),`
`,e.jsx(s.h1,{id:"section",children:"Section"}),`
`,e.jsx(d,{id:"styles-layout-section"}),`
`,e.jsx(s.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(s.p,{children:["De ",e.jsx(s.code,{children:"vl-section"})," verdeeld de toepassing in delen en zorgt voor consistente witruimte."]}),`
`,e.jsx(s.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsx(s.h3,{id:"default-secties",children:"Default Secties"}),`
`,e.jsxs(s.p,{children:["Er is de standaard ",e.jsx(s.code,{children:"vl-section"})," en de ",e.jsx(s.code,{children:"vl-section--alt"}),` waarbij de laatste een lichtgrijze achtergrond
krijgt krijgt. Om minder (dan de standaard) witruimte te krijgen zijn er de optionele classes `,e.jsx(s.code,{children:"vl-section--small"}),`
en `,e.jsx(s.code,{children:"vl-section--medium"}),". Scheidingslijnen worden verkregen door ",e.jsx(s.code,{children:"vl-section--bordered"})," te gebruiken."]}),`
`,e.jsx(s.p,{children:`In onderstaand voorbeeld wordt dit alles toegepast, als ook kleur variabelen overschreven (om de kleuren prominenter
te maken).`}),`
`,e.jsx(b,{of:t}),`
`,e.jsx(s.h3,{id:"overlappende-sectie",children:"Overlappende Sectie"}),`
`,e.jsx(s.p,{children:"Voor specifieke gevallen kan er een overlappende sectie voorzien worden."}),`
`,e.jsx("img",{src:h,alt:"section overlap",style:{border:"lightgray 1px solid"}}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"section overlap - code"}),e.jsx(m,{code:o.toString(),language:"html",dark:!0,format:!0})]})]})}function g(n={}){const{wrapper:s}={...v(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}function x(n,s){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const f={id:"styles-layout-section",title:"Styles/Layout (afnemers)/section",tags:["autodocs"],parameters:{docs:{page:g}}},r=u`
    .vl-section {
        p {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
        }
    }
`,l=({})=>c`
    <style>
        ${r}
    </style>
    <section class="vl-section vl-section--alt">
        <p>vl-section vl-section--alt</p>
    </section>
    <section class="vl-section vl-section--bordered">
        <p>vl-section vl-section--bordered</p>
    </section>
    <section class="vl-section vl-section--bordered vl-section--small">
        <p>vl-section vl-section--bordered vl-section--small</p>
    </section>
    <section class="vl-section vl-section--bordered">
        <p>vl-section vl-section--bordered</p>
    </section>
`;l.storyName="vl-section - default";l.parameters=i;const t=({})=>c`
    <style>
        ${r} .sb-light-blue {
            &.vl-section {
                --vl-section--alt-bg: lightblue;
                --vl-section--border: lightblue;
            }
        }
    </style>
    <section class="sb-light-blue vl-section vl-section--alt">
        <p>vl-section vl-section--alt</p>
    </section>
    <section class="sb-light-blue vl-section vl-section--bordered">
        <p>vl-section vl-section--bordered</p>
    </section>
    <section class="sb-light-blue vl-section vl-section--bordered vl-section--small">
        <p>vl-section vl-section--bordered vl-section--small</p>
    </section>
    <section class="sb-light-blue vl-section vl-section--bordered">
        <p>vl-section vl-section--bordered</p>
    </section>
`;t.storyName="vl-section - light blue";t.parameters=i;const o=({})=>c`
    <style>
        ${r}
    </style>
    <section class="vl-section vl-section--overlap">
        <p class="vl-content-block">vl-content-block</p>
        <p>vl-section vl-section--overlap</p>
    </section>
    <section class="vl-section vl-section--bordered">
        <p>vl-section vl-section--bordered</p>
    </section>
    <section class="vl-section vl-section--bordered">
        <p>vl-section vl-section--bordered</p>
    </section>
    <section class="vl-section vl-section--bordered">
        <p>vl-section vl-section--bordered</p>
    </section>
`;o.storyName="vl-section - overlap";o.parameters=i;l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${sectionCss}
    </style>
    <section class="vl-section vl-section--alt">
        <p>vl-section vl-section--alt</p>
    </section>
    <section class="vl-section vl-section--bordered">
        <p>vl-section vl-section--bordered</p>
    </section>
    <section class="vl-section vl-section--bordered vl-section--small">
        <p>vl-section vl-section--bordered vl-section--small</p>
    </section>
    <section class="vl-section vl-section--bordered">
        <p>vl-section vl-section--bordered</p>
    </section>
\``,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${sectionCss} .sb-light-blue {
            &.vl-section {
                --vl-section--alt-bg: lightblue;
                --vl-section--border: lightblue;
            }
        }
    </style>
    <section class="sb-light-blue vl-section vl-section--alt">
        <p>vl-section vl-section--alt</p>
    </section>
    <section class="sb-light-blue vl-section vl-section--bordered">
        <p>vl-section vl-section--bordered</p>
    </section>
    <section class="sb-light-blue vl-section vl-section--bordered vl-section--small">
        <p>vl-section vl-section--bordered vl-section--small</p>
    </section>
    <section class="sb-light-blue vl-section vl-section--bordered">
        <p>vl-section vl-section--bordered</p>
    </section>
\``,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${sectionCss}
    </style>
    <section class="vl-section vl-section--overlap">
        <p class="vl-content-block">vl-content-block</p>
        <p>vl-section vl-section--overlap</p>
    </section>
    <section class="vl-section vl-section--bordered">
        <p>vl-section vl-section--bordered</p>
    </section>
    <section class="vl-section vl-section--bordered">
        <p>vl-section vl-section--bordered</p>
    </section>
    <section class="vl-section vl-section--bordered">
        <p>vl-section vl-section--bordered</p>
    </section>
\``,...o.parameters?.docs?.source}}};const S=["SectionDefault","SectionLightBlue","SectionOverlap"];export{l as SectionDefault,t as SectionLightBlue,o as SectionOverlap,S as __namedExportsOrder,f as default};
