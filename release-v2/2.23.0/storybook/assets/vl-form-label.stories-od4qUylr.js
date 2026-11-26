import{C as i,T as s,a as u,d as p,s as b}from"./stories.helper-DYHi_5m6.js";import{cv as v,u as h,j as n,C as c,b4 as j,b as g,r as x,c as k}from"./iframe-Cv28D2NX.js";import"./preload-helper-PPVm8Dsz.js";const o={...u,...v,defaultSlot:""},y={...p,for:{name:"for",description:"Het id van de form control waarvoor het label bedoeld is.",table:{category:i.ATTRIBUTES,type:{summary:s.STRING},defaultValue:{summary:o.for}}},label:{name:"label",description:"De tekst van het label. Overschrijft de waarde van het default slot. Wordt doorgegeven aan de form control als toegankelijke naam.",table:{category:i.ATTRIBUTES,type:{summary:s.STRING},defaultValue:{summary:o.label}}},annotation:{name:"annotation",description:"De annotatie tekst die naast het label getoond wordt (bv. een voorbeeld of extra uitleg).",table:{category:i.ATTRIBUTES,type:{summary:s.STRING},defaultValue:{summary:o.annotation}}},block:{name:"block",description:"Duidt aan of het label de volledige breedte van de parent moet innemen.",table:{category:i.ATTRIBUTES,type:{summary:s.BOOLEAN},defaultValue:{summary:String(o.block)}}},light:{name:"light",description:"Duidt aan of het label in light mode moet weergegeven worden.",table:{category:i.ATTRIBUTES,type:{summary:s.BOOLEAN},defaultValue:{summary:String(o.light)}}},defaultSlot:{name:"[default]",description:"De content van het label. Wordt overschreven door de waarde van het label attribuut. Enkel de tekst, zonder HTML, wordt doorgegeven aan de form control als toegankelijke naam.",table:{type:{summary:s.HTML},category:i.SLOTS,defaultValue:{summary:o.defaultSlot}}}};function f(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...a.components},{FluxComponentMetaData:r}=e;return r||w("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"form-label",children:"Form Label"}),`
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
`,n.jsx(j,{of:t}),`
`,n.jsx(e.h2,{id:"koppeling-met-de-form-control",children:"Koppeling met de form control"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"vl-form-label"})," geeft zijn labeltekst door aan de form control met hetzelfde ",n.jsx(e.code,{children:"id"})," als het ",n.jsx(e.code,{children:"for"}),` attribuut. Die tekst
wordt de toegankelijke naam van het onderliggende veld. Dat is de waarde van het `,n.jsx(e.code,{children:"label"}),` attribuut, of anders de tekst
uit de default slot. Van HTML in de slot gaat enkel de tekst mee, zonder opmaak. Tekst binnen een element met
`,n.jsx(e.code,{children:'aria-hidden="true"'})," of ",n.jsx(e.code,{children:"hidden"})," gaat niet mee, net als de tekst van een ",n.jsx(e.code,{children:"vl-tooltip"}),`, zodat bv. een decoratief teken
of een uitleg buiten de toegankelijke naam blijft.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-form-label for="naam">Naam <strong>van de aanvrager</strong></vl-form-label>
<vl-input-field id="naam" name="naam"></vl-input-field>
<!-- toegankelijke naam van het veld: "Naam van de aanvrager" -->
`})}),`
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
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/form-message",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Form Message"})})]})}function T(a={}){const{wrapper:e}={...h(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(f,{...a})}):f(a)}function w(a,e){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}x([k]);const $={id:"components-form-form-label",title:"Components - Form/form-label",tags:["autodocs"],args:o,argTypes:y,parameters:{docs:{page:T}}},t=b(o,({for:a,label:e,annotation:r,block:d,light:m})=>g`
        <vl-form-label
            for=${a}
            label=${e}
            annotation=${r}
            ?block=${d}
            ?light=${m}
        ></vl-form-label>
    `);t.storyName="vl-form-label - default";t.args={label:"Naam"};const l=b(o,({for:a,label:e,annotation:r,block:d,light:m})=>g`
        <vl-form-label
            for=${a}
            label=${e}
            annotation=${r}
            ?block=${d}
            ?light=${m}
        ></vl-form-label>
    `);l.storyName="vl-form-label - annotation";l.args={label:"Naam",annotation:"(enkel achternaam)"};const A=["FormLabelDefault","FormLabelWithAnnotation"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(formLabelArgs, ({
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
    \`)`,...l.parameters?.docs?.source}}};export{t as FormLabelDefault,l as FormLabelWithAnnotation,A as __namedExportsOrder,$ as default};
