import{Z as s,_ as i,c9 as g,X as p,W as v,u as f,j as n,C as c,bc as x,s as h,x as u,r as j,b as y}from"./iframe-CsDE-vVI.js";import"./preload-helper-D9Z9MdNV.js";const o={...p,...g,defaultSlot:""},T={...v,for:{name:"for",description:"Het id van de form control waarvoor het label bedoeld is.",table:{category:s.ATTRIBUTES,type:{summary:i.STRING},defaultValue:{summary:o.for}}},label:{name:"label",description:"De tekst van het label. Overschrijft de waarde van het default slot.",table:{category:s.ATTRIBUTES,type:{summary:i.STRING},defaultValue:{summary:o.label}}},annotation:{name:"annotation",description:"De annotatie tekst die naast het label getoond wordt (bv. een voorbeeld of extra uitleg).",table:{category:s.ATTRIBUTES,type:{summary:i.STRING},defaultValue:{summary:o.annotation}}},block:{name:"block",description:"Duidt aan of het label de volledige breedte van de parent moet innemen.",table:{category:s.ATTRIBUTES,type:{summary:i.BOOLEAN},defaultValue:{summary:String(o.block)}}},light:{name:"light",description:"Duidt aan of het label in light mode moet weergegeven worden.",table:{category:s.ATTRIBUTES,type:{summary:i.BOOLEAN},defaultValue:{summary:String(o.light)}}},defaultSlot:{name:"[default]",description:"De content van het label. Wordt overschreven door de waarde van het label attribuut.",table:{type:{summary:i.HTML},category:s.SLOTS,defaultValue:{summary:o.defaultSlot}}}};function b(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...f(),...a.components},{FluxComponentMetaData:r}=e;return r||w("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"form-label",children:"Form Label"}),`
`,n.jsx(r,{id:"components-form-form-label"}),`
`,n.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,n.jsxs(e.p,{children:["Gebruik de ",n.jsx(e.code,{children:"form-label"})," component om een form label af te beelden.",n.jsx("br",{}),`
Zie het `,n.jsx(e.a,{href:"/docs/patronen-formulier-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),`
`,n.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { VlFormLabelComponent } from '@domg-wc/components/form';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-form-label></vl-form-label>
`})}),`
`,n.jsx(c,{of:t}),`
`,n.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,n.jsx(x,{of:t}),`
`,n.jsx(e.h2,{id:"annotatie",children:"Annotatie"}),`
`,n.jsxs(e.p,{children:["Gebruik het ",n.jsx(e.code,{children:"annotation"}),` attribuut om extra uitleg of een voorbeeld inline naast de label tekst weer te geven.
De annotatie wordt kleiner en in een subtielere kleur weergegeven.`]}),`
`,n.jsx(c,{of:l}),`
`,n.jsx(e.h2,{id:"witruimte-naast-annotatie-corrigeren",children:"Witruimte naast annotatie corrigeren"}),`
`,n.jsxs(e.p,{children:["Wanneer een ",n.jsx(e.code,{children:"vl-form-label"})," met een ",n.jsx(e.code,{children:"annotation"})," onmiddellijk gevolgd wordt door een ",n.jsx(e.code,{children:"vl-text[annotation]"}),`-sibling in de light DOM,
kan er een ongewenste witruimte verschijnen tussen de twee elementen.
Dit is een light-DOM compositieprobleem: de marge van het label kan niet via de shadow DOM worden aangepast op basis van een sibling-relatie.`]}),`
`,n.jsx(e.p,{children:"Voeg deze CSS-regel toe in de styles van de host component:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`vl-form-label:has(+ vl-text[annotation])::part(label) {
    margin-right: 0;
}
`})}),`
`,n.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,n.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/form-message",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Form Message"})})]})}function k(a={}){const{wrapper:e}={...f(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(b,{...a})}):b(a)}function w(a,e){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}j([y]);const $={id:"components-form-form-label",title:"Components - Form/form-label",tags:["autodocs"],args:o,argTypes:T,parameters:{docs:{page:k}}},t=h(o,({for:a,label:e,annotation:r,block:m,light:d})=>u`
        <vl-form-label
            for=${a}
            label=${e}
            annotation=${r}
            ?block=${m}
            ?light=${d}
        ></vl-form-label>
    `);t.storyName="vl-form-label - default";t.args={label:"Naam"};const l=h(o,({for:a,label:e,annotation:r,block:m,light:d})=>u`
        <vl-form-label
            for=${a}
            label=${e}
            annotation=${r}
            ?block=${m}
            ?light=${d}
        ></vl-form-label>
    `);l.storyName="vl-form-label - annotation";l.args={label:"Naam",annotation:"(enkel achternaam)"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(formLabelArgs, ({
  for: forValue,
  label,
  annotation,
  block,
  light
}) => html\`
        <vl-form-label
            for=\${forValue}
            label=\${label}
            annotation=\${annotation}
            ?block=\${block}
            ?light=\${light}
        ></vl-form-label>
    \`)`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(formLabelArgs, ({
  for: forValue,
  label,
  annotation,
  block,
  light
}) => html\`
        <vl-form-label
            for=\${forValue}
            label=\${label}
            annotation=\${annotation}
            ?block=\${block}
            ?light=\${light}
        ></vl-form-label>
    \`)`,...l.parameters?.docs?.source}}};const A=["FormLabelDefault","FormLabelWithAnnotation"];export{t as FormLabelDefault,l as FormLabelWithAnnotation,A as __namedExportsOrder,$ as default};
