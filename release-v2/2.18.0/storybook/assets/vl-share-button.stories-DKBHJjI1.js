import{Z as i,_ as h,a2 as l,a1 as m,W as p,c7 as s,X as b,u,j as e,C as f,b8 as x,x as g}from"./iframe-COmpMQdF.js";import"./preload-helper-D9Z9MdNV.js";const j={...b,href:"#",medium:s.FACEBOOK},v={...p,medium:{name:"medium",control:{type:m.SELECT},options:Object.values(s),description:"This attribute is used to pass the medium.",table:{type:{summary:l(Object.values(s))},category:i.ATTRIBUTES}},href:{name:"href",description:"The href attribute specifies the link's destination.",table:{type:{summary:h.STRING},category:i.ATTRIBUTES}}};function c(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",...u(),...n.components},{FluxAlert:r,FluxComponentMetaData:a}=t;return r||d("FluxAlert"),a||d("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"share-button",children:"Share Button"}),`
`,e.jsx(a,{id:"components-block-share-buttons-share-button"}),`
`,e.jsx(r,{type:"warning",title:"Deprecated",children:`
Deze component is <strong>deprecated</strong> en wordt verwijderd in <strong>v3</strong>. Gebruik in plaats daarvan
een <code>vl-button</code> met <code>cta-link</code> en <code>icon</code> in de standaard action-stijl. Zie de
<a href="/docs/components-block-share-buttons-share-buttons--documentatie#ontwerp">Share Buttons documentatie</a>
voor het alternatief.
`}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(t.p,{children:["De ",e.jsx(t.code,{children:"share-button"})," component is één enkele deelknop binnen een ",e.jsx(t.code,{children:"share-buttons"})," rij."]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(f,{of:o}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(x,{of:o})]})}function y(n={}){const{wrapper:t}={...u(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(c,{...n})}):c(n)}function d(n,t){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const A={id:"components-block-share-buttons-share-button",title:"Components - Block/share-buttons/share-button",tags:["autodocs"],args:j,argTypes:v,parameters:{docs:{page:y}}},o=({href:n,medium:t})=>g` <vl-share-buttons>
        <vl-share-button href=${n} medium=${t}></vl-share-button>
    </vl-share-buttons>`;o.storyName="vl-share-button - default";o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  href,
  medium
}: typeof shareButtonArgs) => html\` <vl-share-buttons>
        <vl-share-button href=\${href} medium=\${medium}></vl-share-button>
    </vl-share-buttons>\``,...o.parameters?.docs?.source}}};const E=["shareButtonDefault"];export{E as __namedExportsOrder,A as default,o as shareButtonDefault};
