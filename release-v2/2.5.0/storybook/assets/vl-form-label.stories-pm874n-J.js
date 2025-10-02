import{J as t,K as n,c2 as c,H as f,G as u,u as d,j as e,C as b,bd as h,s as p,x as g,r as v,b as x}from"./iframe-CflcmDUD.js";import"./preload-helper-D9Z9MdNV.js";const l={...f,...c,defaultSlot:""},y={...u,for:{name:"for",description:"Het id van de form control waarvoor het label bedoeld is.",table:{category:t.ATTRIBUTES,type:{summary:n.STRING},defaultValue:{summary:l.for}}},label:{name:"label",description:"De tekst van het label. Overschrijft de waarde van het default slot.",table:{category:t.ATTRIBUTES,type:{summary:n.STRING},defaultValue:{summary:l.label}}},block:{name:"block",description:"Duidt aan of het label de volledige breedte van de parent moet innemen.",table:{category:t.ATTRIBUTES,type:{summary:n.BOOLEAN},defaultValue:{summary:String(l.block)}}},light:{name:"light",description:"Duidt aan of het label in light mode moet weergegeven worden.",table:{category:t.ATTRIBUTES,type:{summary:n.BOOLEAN},defaultValue:{summary:String(l.light)}}},defaultSlot:{name:"[default]",description:"De content van het label. Wordt overschreven door de waarde van het label attribuut.",table:{type:{summary:n.HTML},category:t.SLOTS,defaultValue:{summary:l.defaultSlot}}}};function m(o){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components},{FluxMetaData:s}=a;return s||T("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"form-label",children:"Form Label"}),`
`,e.jsx(s,{id:"components-form-form-label"}),`
`,e.jsxs(a.p,{children:["Gebruik de ",e.jsx(a.code,{children:"form-label"})," component om een form label af te beelden.",e.jsx("br",{}),`
Zie het `,e.jsx(a.a,{href:"/docs/ontwerp-form-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlFormLabelComponent } from '@domg-wc/components/form';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-form-label></vl-form-label>
`})}),`
`,e.jsx(b,{of:r}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(a.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(a.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-form-message",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Form Message"})})]})}function j(o={}){const{wrapper:a}={...d(),...o.components};return a?e.jsx(a,{...o,children:e.jsx(m,{...o})}):m(o)}function T(o,a){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}v([x]);const L={id:"components-form-form-label",title:"Components - Form/form-label",tags:["autodocs"],args:l,argTypes:y,parameters:{docs:{page:j}}},r=p(l,({for:o,label:a,block:s,light:i})=>g` <vl-form-label for=${o} label=${a} ?block=${s} ?light=${i}></vl-form-label> `);r.storyName="vl-form-label - default";r.args={label:"Naam"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(formLabelArgs, ({
  for: forValue,
  label,
  block,
  light
}) => {
  return html\` <vl-form-label for=\${forValue} label=\${label} ?block=\${block} ?light=\${light}></vl-form-label> \`;
})`,...r.parameters?.docs?.source}}};const A=["FormLabelDefault"];export{r as FormLabelDefault,A as __namedExportsOrder,L as default};
