import{C as r,T as l,b as p,d as u,a as g,g as f,s as y}from"./stories.helper-DYHi_5m6.js";import{u as m,j as t,C as h,b4 as x,b as j}from"./iframe-Cv28D2NX.js";import"./preload-helper-PPVm8Dsz.js";const o={...g,href:"#",target:"_self",type:"",title:"",metadata:""},b={...u,href:{name:"href",description:"Bepaalt de download link.",table:{type:{summary:l.STRING},category:r.ATTRIBUTES,defaultValue:{summary:o.href}}},target:{name:"target",control:{type:p.SELECT},options:["_blank","_self","_parent","_top","timeline","question"],description:"Bepaalt waar de link geopend wordt. Mogelijke waarden zijn `_blank`, `_self`, `_parent` en `_top`.",table:{type:{summary:f(["_blank","_self","_parent","_top","timeline","question"])},category:r.ATTRIBUTES,defaultValue:{summary:o.target}}},type:{name:"type",table:{type:{summary:l.HTML},category:r.SLOTS,defaultValue:{summary:o.type}}},title:{name:"title",table:{type:{summary:l.HTML},category:r.SLOTS,defaultValue:{summary:o.title}}},metadata:{name:"metadata",table:{type:{summary:l.HTML},category:r.SLOTS,defaultValue:{summary:o.metadata}}}};function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...n.components},{FluxComponentMetaData:s}=e;return s||k("FluxComponentMetaData"),t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"document",children:"Document"}),`
`,t.jsx(s,{id:"components-block-document"}),`
`,t.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,t.jsxs(e.p,{children:["Gebruik de ",t.jsx(e.code,{children:"document"}),` component om een link naar een bestand toe te voegen dat de gebruiker in de browser kan bekijken
of downloaden.`]}),`
`,t.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { VlDocumentComponent } from '@domg-wc/components/block';
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<vl-document></vl-document>
`})}),`
`,t.jsx(h,{of:a}),`
`,t.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,t.jsx(x,{of:a}),`
`,t.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,t.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/document",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Document"})})]})}function T(n={}){const{wrapper:e}={...m(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(d,{...n})}):d(n)}function k(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const C={id:"components-block-document",title:"Components - Block/document",tags:["autodocs"],args:o,argTypes:b,parameters:{docs:{page:T}}},a=y(o,({href:n,target:e,type:s,title:c,metadata:i})=>j`
        <vl-document href=${n} target=${e}>
            <span slot="type">${s}</span>
            <span slot="title">${c}</span>
            <span slot="metadata">${i}</span>
        </vl-document>
    `);a.storyName="vl-document - default";a.args={type:"PDF",title:"Hubert en Jan van Eyck, Vlaamse Primitieven",metadata:"PDF - 580 kB"};const S=["DocumentDefault"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(documentArgs, ({
  href,
  target,
  type,
  title,
  metadata
}) => html\`
        <vl-document href=\${href} target=\${target}>
            <span slot="type">\${type}</span>
            <span slot="title">\${title}</span>
            <span slot="metadata">\${metadata}</span>
        </vl-document>
    \`)`,...a.parameters?.docs?.source}}};export{a as DocumentDefault,S as __namedExportsOrder,C as default};
