import{Y as r,Z as l,a1 as p,a0 as u,U as h,W as g,u as d,j as t,C as f,bb as y,s as x,x as j}from"./iframe-aAtdr__L.js";import"./preload-helper-D9Z9MdNV.js";const o={...g,href:"#",target:"_self",type:"",title:"",metadata:""},b={...h,href:{name:"href",description:"Bepaalt de download link.",table:{type:{summary:l.STRING},category:r.ATTRIBUTES,defaultValue:{summary:o.href}}},target:{name:"target",control:{type:u.SELECT},options:["_blank","_self","_parent","_top","timeline","question"],description:"Bepaalt waar de link geopend wordt. Mogelijke waarden zijn `_blank`, `_self`, `_parent` en `_top`.",table:{type:{summary:p(["_blank","_self","_parent","_top","timeline","question"])},category:r.ATTRIBUTES,defaultValue:{summary:o.target}}},type:{name:"type",table:{type:{summary:l.HTML},category:r.SLOTS,defaultValue:{summary:o.type}}},title:{name:"title",table:{type:{summary:l.HTML},category:r.SLOTS,defaultValue:{summary:o.title}}},metadata:{name:"metadata",table:{type:{summary:l.HTML},category:r.SLOTS,defaultValue:{summary:o.metadata}}}};function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...n.components},{FluxComponentMetaData:s}=e;return s||D("FluxComponentMetaData"),t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"document",children:"Document"}),`
`,t.jsx(s,{id:"components-block-document"}),`
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
`,t.jsx(y,{of:a}),`
`,t.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,t.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-document",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Document"})}),`
`,t.jsx(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-document--default",rel:"nofollow",children:"Legacy Storybook - Document"})}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlDocument.html",rel:"nofollow",children:"Legacy Documentatie - Document"})}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-document.html",rel:"nofollow",children:"Legacy Documentatie - Document"})})]})}function v(n={}){const{wrapper:e}={...d(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(c,{...n})}):c(n)}function D(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const _={id:"components-block-document",title:"Components - Block/document",tags:["autodocs"],args:o,argTypes:b,parameters:{docs:{page:v}}},a=x(o,({href:n,target:e,type:s,title:m,metadata:i})=>j`
        <vl-document href=${n} target=${e}>
            <span slot="type">${s}</span>
            <span slot="title">${m}</span>
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
    \`)`,...a.parameters?.docs?.source}}};const w=["DocumentDefault"];export{a as DocumentDefault,w as __namedExportsOrder,_ as default};
