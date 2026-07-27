import{W as i,X as h,u as d,j as e,C as u,b8 as c,x as b}from"./iframe-BgD7f6Cn.js";import"./preload-helper-D9Z9MdNV.js";const m={...h,alt:!1},p={...i,alt:{name:"alt",description:"Removes the gray border top.",table:{category:"Attributes",type:{summary:"Boolean"},defaultValue:{summary:"false"}}}};function s(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...n.components},{FluxAlert:a,FluxComponentMetaData:r}=t;return a||l("FluxAlert"),r||l("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"share-buttons",children:"Share Buttons"}),`
`,e.jsx(r,{id:"components-block-share-buttons-share-buttons"}),`
`,e.jsx(a,{type:"warning",title:"Deprecated",children:`
Deze component is <strong>deprecated</strong> en wordt verwijderd in <strong>v3</strong>. Gebruik in plaats daarvan
een <code>vl-button</code> met <code>cta-link</code> en <code>icon</code> in de standaard action-stijl (zie
<a href="#ontwerp">Ontwerp</a>).
`}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(t.p,{children:["De ",e.jsx(t.code,{children:"share-buttons"})," component toont een rij knoppen om een pagina te delen op sociale media."]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(u,{of:o}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(c,{of:o}),`
`,e.jsx(t.h2,{id:"ontwerp",children:"Ontwerp"}),`
`,e.jsxs(t.p,{children:["Vervang elke share-knop door een gewone ",e.jsx(t.a,{href:"/docs/components-atom-button--documentatie",children:e.jsx(t.code,{children:"vl-button"})})," in de standaard action-stijl met ",e.jsx(t.code,{children:"cta-link"}),", ",e.jsx(t.code,{children:"icon"}),` en een
verplicht `,e.jsx(t.code,{children:"label"})," voor toegankelijkheid (WCAG 2.1 AA). Geef per kanaal een eigen knop met de bijhorende share-URL:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-button cta-link="https://www.facebook.com/sharer/sharer.php?u=…" icon="facebook" label="Delen op Facebook"></vl-button>
<vl-button cta-link="https://www.linkedin.com/sharing/share-offsite/?url=…" icon="linkedin" label="Delen op LinkedIn"></vl-button>
`})})]})}function f(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}function l(n,t){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const x={id:"components-block-share-buttons-share-buttons",title:"Components - Block/share-buttons/share-buttons",tags:["autodocs"],args:m,argTypes:p,parameters:{docs:{page:f}}},o=({alt:n})=>b` <vl-share-buttons
    ?alt=${n}
    data-cy="share-buttons"
>
    <vl-share-button href="#" medium="facebook" data-cy="share-button-1"></vl-share-button>
    <vl-share-button href="#" medium="twitter" data-cy="share-button-2"></vl-share-button>
    <vl-share-button href="#" medium="linkedin" data-cy="share-button-3"></vl-share-button>
    <vl-share-button href="#" medium="googleplus" data-cy="share-button-4"></vl-share-button>
    <vl-share-button href="#" medium="mail" data-cy="share-button-5"></vl-share-button>
</vl-share-buttons>`;o.storyName="vl-share-buttons - default";o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  alt
}: typeof shareButtonsArgs) => html\` <vl-share-buttons
    ?alt=\${alt}
    data-cy="share-buttons"
>
    <vl-share-button href="#" medium="facebook" data-cy="share-button-1"></vl-share-button>
    <vl-share-button href="#" medium="twitter" data-cy="share-button-2"></vl-share-button>
    <vl-share-button href="#" medium="linkedin" data-cy="share-button-3"></vl-share-button>
    <vl-share-button href="#" medium="googleplus" data-cy="share-button-4"></vl-share-button>
    <vl-share-button href="#" medium="mail" data-cy="share-button-5"></vl-share-button>
</vl-share-buttons>\``,...o.parameters?.docs?.source}}};const j=["shareButtonsDefault"];export{j as __namedExportsOrder,x as default,o as shareButtonsDefault};
