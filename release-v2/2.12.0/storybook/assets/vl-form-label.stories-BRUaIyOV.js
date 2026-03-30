import{Y as t,Z as n,c6 as c,W as f,U as u,u as d,j as e,C as b,bb as h,s as p,x as g,r as x,b as v}from"./iframe-BJy2lIHs.js";import"./preload-helper-D9Z9MdNV.js";const l={...f,...c,defaultSlot:""},y={...u,for:{name:"for",description:"Het id van de form control waarvoor het label bedoeld is.",table:{category:t.ATTRIBUTES,type:{summary:n.STRING},defaultValue:{summary:l.for}}},label:{name:"label",description:"De tekst van het label. Overschrijft de waarde van het default slot.",table:{category:t.ATTRIBUTES,type:{summary:n.STRING},defaultValue:{summary:l.label}}},block:{name:"block",description:"Duidt aan of het label de volledige breedte van de parent moet innemen.",table:{category:t.ATTRIBUTES,type:{summary:n.BOOLEAN},defaultValue:{summary:String(l.block)}}},light:{name:"light",description:"Duidt aan of het label in light mode moet weergegeven worden.",table:{category:t.ATTRIBUTES,type:{summary:n.BOOLEAN},defaultValue:{summary:String(l.light)}}},defaultSlot:{name:"[default]",description:"De content van het label. Wordt overschreven door de waarde van het label attribuut.",table:{type:{summary:n.HTML},category:t.SLOTS,defaultValue:{summary:l.defaultSlot}}}};function m(a){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...a.components},{FluxComponentMetaData:s}=o;return s||T("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"form-label",children:"Form Label"}),`
`,e.jsx(s,{id:"components-form-form-label"}),`
`,e.jsx(o.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(o.p,{children:["Gebruik de ",e.jsx(o.code,{children:"form-label"})," component om een form label af te beelden.",e.jsx("br",{}),`
Zie het `,e.jsx(o.a,{href:"/docs/patronen-formulier-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,e.jsx(o.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`import { VlFormLabelComponent } from '@domg-wc/components/form';
`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<vl-form-label></vl-form-label>
`})}),`
`,e.jsx(b,{of:r}),`
`,e.jsx(o.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(o.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(o.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-form-message",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Form Message"})})]})}function j(a={}){const{wrapper:o}={...d(),...a.components};return o?e.jsx(o,{...a,children:e.jsx(m,{...a})}):m(a)}function T(a,o){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}x([v]);const L={id:"components-form-form-label",title:"Components - Form/form-label",tags:["autodocs"],args:l,argTypes:y,parameters:{docs:{page:j}}},r=p(l,({for:a,label:o,block:s,light:i})=>g` <vl-form-label for=${a} label=${o} ?block=${s} ?light=${i}></vl-form-label> `);r.storyName="vl-form-label - default";r.args={label:"Naam"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(formLabelArgs, ({
  for: forValue,
  label,
  block,
  light
}) => {
  return html\` <vl-form-label for=\${forValue} label=\${label} ?block=\${block} ?light=\${light}></vl-form-label> \`;
})`,...r.parameters?.docs?.source}}};const A=["FormLabelDefault"];export{r as FormLabelDefault,A as __namedExportsOrder,L as default};
