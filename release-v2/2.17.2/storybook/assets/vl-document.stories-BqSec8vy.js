import{Z as s,_ as l,a2 as p,a1 as u,W as g,X as y,u as m,j as t,C as f,b8 as h,s as x,x as j}from"./iframe-BAEsER5t.js";import"./preload-helper-D9Z9MdNV.js";const o={...y,href:"#",target:"_self",type:"",title:"",metadata:""},b={...g,href:{name:"href",description:"Bepaalt de download link.",table:{type:{summary:l.STRING},category:s.ATTRIBUTES,defaultValue:{summary:o.href}}},target:{name:"target",control:{type:u.SELECT},options:["_blank","_self","_parent","_top","timeline","question"],description:"Bepaalt waar de link geopend wordt. Mogelijke waarden zijn `_blank`, `_self`, `_parent` en `_top`.",table:{type:{summary:p(["_blank","_self","_parent","_top","timeline","question"])},category:s.ATTRIBUTES,defaultValue:{summary:o.target}}},type:{name:"type",table:{type:{summary:l.HTML},category:s.SLOTS,defaultValue:{summary:o.type}}},title:{name:"title",table:{type:{summary:l.HTML},category:s.SLOTS,defaultValue:{summary:o.title}}},metadata:{name:"metadata",table:{type:{summary:l.HTML},category:s.SLOTS,defaultValue:{summary:o.metadata}}}};function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...n.components},{FluxComponentMetaData:r}=e;return r||_("FluxComponentMetaData"),t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"document",children:"Document"}),`
`,t.jsx(r,{id:"components-block-document"}),`
`,t.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,t.jsxs(e.p,{children:["Gebruik de ",t.jsx(e.code,{children:"document"}),` component om een link naar een bestand toe te voegen dat de gebruiker in de browser kan bekijken
of downloaden.`]}),`
`,t.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { VlDocumentComponent } from '@domg-wc/components/block';
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<vl-document></vl-document>
`})}),`
`,t.jsx(f,{of:a}),`
`,t.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,t.jsx(h,{of:a}),`
`,t.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,t.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/document",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Document"})})]})}function T(n={}){const{wrapper:e}={...m(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(d,{...n})}):d(n)}function _(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const v={id:"components-block-document",title:"Components - Block/document",tags:["autodocs"],args:o,argTypes:b,parameters:{docs:{page:T}}},a=x(o,({href:n,target:e,type:r,title:c,metadata:i})=>j`
        <vl-document href=${n} target=${e}>
            <span slot="type">${r}</span>
            <span slot="title">${c}</span>
            <span slot="metadata">${i}</span>
        </vl-document>
    `);a.storyName="vl-document - default";a.args={type:"PDF",title:"Hubert en Jan van Eyck, Vlaamse Primitieven",metadata:"PDF - 580 kB"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(documentArgs, ({
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
    \`)`,...a.parameters?.docs?.source}}};const S=["DocumentDefault"];export{a as DocumentDefault,S as __namedExportsOrder,v as default};
