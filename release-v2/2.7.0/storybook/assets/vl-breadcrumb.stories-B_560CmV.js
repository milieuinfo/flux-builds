import{K as d,L as s,H as b,I as l,u as m,j as e,C as i,bd as u,s as h,x as p}from"./iframe-BRJWU34U.js";import"./preload-helper-D9Z9MdNV.js";const t={...l,href:""},f={...b,href:{name:"href",description:"Url voor breadcrumb-item.",table:{type:{summary:s.URL},category:d.ATTRIBUTES,defaultValue:{summary:t.href}}}};function c(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...n.components},{FluxMetaData:o}=r;return o||v("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"breadcrumb",children:"Breadcrumb"}),`
`,e.jsx(o,{id:"components-block-breadcrumb"}),`
`,e.jsxs(r.p,{children:["Gebruik de ",e.jsx(r.code,{children:"breadcrumb"})," component om de locatie van de huidige pagina af te beelden binnen een navigeerbare hiërarchie."]}),`
`,e.jsx(r.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { VlBreadcrumbComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<vl-breadcrumb></vl-breadcrumb>
`})}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(r.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(u,{of:a}),`
`,e.jsx(r.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(r.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-breadcrumb--breadcrumb-default",rel:"nofollow",children:"Legacy Storybook - Breadcrumb"})}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlBreadcrumb.html",rel:"nofollow",children:"Legacy Documentatie - Breadcrumb"})}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-breadcrumb.html",rel:"nofollow",children:"Legacy Demo - Breadcrumb"})})]})}function g(n={}){const{wrapper:r}={...m(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(c,{...n})}):c(n)}function v(n,r){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const y={id:"components-block-breadcrumb",title:"Components - Block/breadcrumb",tags:["autodocs"],args:t,argTypes:f,parameters:{docs:{page:g}}},a=h(t,({href:n})=>p`
        <vl-breadcrumb>
            <vl-breadcrumb-item href=${n}>Vlaanderen Intern</vl-breadcrumb-item>
            <vl-breadcrumb-item href=${n}>Regelgeving</vl-breadcrumb-item>
            <vl-breadcrumb-item href=${n}>Webuniversum</vl-breadcrumb-item>
            <vl-breadcrumb-item href=${n}>Componenten</vl-breadcrumb-item>
        </vl-breadcrumb>
    `);a.storyName="vl-breadcrumb - default";a.args={href:"#"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(breadcrumbItemArgs, ({
  href
}) => html\`
        <vl-breadcrumb>
            <vl-breadcrumb-item href=\${href}>Vlaanderen Intern</vl-breadcrumb-item>
            <vl-breadcrumb-item href=\${href}>Regelgeving</vl-breadcrumb-item>
            <vl-breadcrumb-item href=\${href}>Webuniversum</vl-breadcrumb-item>
            <vl-breadcrumb-item href=\${href}>Componenten</vl-breadcrumb-item>
        </vl-breadcrumb>
    \`)`,...a.parameters?.docs?.source}}};const B=["BreadcrumbDefault"];export{a as BreadcrumbDefault,B as __namedExportsOrder,y as default};
