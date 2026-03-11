import{Y as i,Z as d,c2 as v,W as k,U as S,u as p,j as e,C as f,bk as y,s as j,x as T,r as L,c3 as $}from"./iframe-BWsn3Pr7.js";import{o as m}from"./unsafe-html-B89ecE4O.js";import"./preload-helper-D9Z9MdNV.js";const a={...k,...v,linkLabel:"",valueSlot:"",textSlot:""},I={...S,badge:{name:"badge",description:"Beeldt de infotext af in een badge.",table:{type:{summary:d.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(a.badge)}}},href:{name:"href",description:"De url waar de infotext naar verwijst.",table:{type:{summary:d.STRING},category:i.ATTRIBUTES,defaultValue:{summary:a.href}}},linkLabel:{name:"link-label",description:'Aria-label voor de link. Aanbevolen voor toegankelijkheid. Let op: `aria-label` vervangt de volledige linktekst, bv. "Bezoekers per dag - opent in nieuw venster" bij external links.',table:{type:{summary:d.STRING},category:i.ATTRIBUTES,defaultValue:{summary:a.linkLabel}}},external:{name:"external",description:"Opent de link in een nieuw tabblad.<br/>Te gebruiken in combinatie met het href attribuut.",table:{type:{summary:d.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(a.external)}}},valueSlot:{name:"value",description:"De waarde van de infotext.<br/>De font-size wordt automatisch aangepast naargelang de lengte van de value.<br/>Indien er een nummer meegegeven wordt zal de value automatisch geformatteerd worden.",table:{type:{summary:d.HTML},category:i.SLOTS,defaultValue:{summary:a.valueSlot}}},textSlot:{name:"text",description:"De tekst van de infotext.",table:{type:{summary:d.HTML},category:i.SLOTS,defaultValue:{summary:a.textSlot}}}};function c(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...p(),...n.components},{FluxComponentMetaData:x}=t;return x||A("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"infotext",children:"Infotext"}),`
`,e.jsx(x,{id:"components-block-infotext"}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(t.p,{children:["Gebruik de ",e.jsx(t.code,{children:"infotext"})," component om belangrijke nummers duidelijk weer te gevem.",e.jsx("br",{})]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlInfotextComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-infotext></vl-infotext>
`})}),`
`,e.jsx(f,{of:o}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(y,{of:o}),`
`,e.jsx(t.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(t.h3,{id:"badge",children:"Badge"}),`
`,e.jsx(f,{of:l}),`
`,e.jsx(t.h3,{id:"link",children:"Link"}),`
`,e.jsx(f,{of:r}),`
`,e.jsx(t.h3,{id:"externe-link-met-aria-label",children:"Externe link met aria-label"}),`
`,e.jsx(f,{of:s}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-infotext",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Infotext"})})]})}function w(n={}){const{wrapper:t}={...p(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(c,{...n})}):c(n)}function A(n,t){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}L([$]);const E={id:"components-block-infotext",title:"Components - Block/infotext",tags:["autodocs"],args:a,argTypes:I,parameters:{docs:{page:w}}},u=j(a,({badge:n,href:t,linkLabel:x,external:g,valueSlot:b,textSlot:h})=>T`
            <vl-infotext ?badge=${n} href=${t} link-label=${x} ?external=${g}>
                <span slot="value">${m(b)}</span>
                <span slot="text">${m(h)}</span>
            </vl-infotext>
        `),o=u.bind({});o.storyName="vl-infotext - default";o.args={valueSlot:"3200",textSlot:"Bezoekers per dag"};const l=u.bind({});l.storyName="vl-infotext - badge";l.args={valueSlot:"3200",textSlot:"Bezoekers per dag",badge:!0};const r=u.bind({});r.storyName="vl-infotext - link";r.args={valueSlot:"3200",textSlot:"Bezoekers per dag",href:"https://www.vlaanderen.be"};const s=u.bind({});s.storyName="vl-infotext - external link";s.args={...r.args,external:!0,linkLabel:"Bezoekers per dag - opent in nieuw venster"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(infotextArgs, ({
  badge,
  href,
  linkLabel,
  external,
  valueSlot,
  textSlot
}) => html\`
            <vl-infotext ?badge=\${badge} href=\${href} link-label=\${linkLabel} ?external=\${external}>
                <span slot="value">\${unsafeHTML(valueSlot)}</span>
                <span slot="text">\${unsafeHTML(textSlot)}</span>
            </vl-infotext>
        \`)`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(infotextArgs, ({
  badge,
  href,
  linkLabel,
  external,
  valueSlot,
  textSlot
}) => html\`
            <vl-infotext ?badge=\${badge} href=\${href} link-label=\${linkLabel} ?external=\${external}>
                <span slot="value">\${unsafeHTML(valueSlot)}</span>
                <span slot="text">\${unsafeHTML(textSlot)}</span>
            </vl-infotext>
        \`)`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(infotextArgs, ({
  badge,
  href,
  linkLabel,
  external,
  valueSlot,
  textSlot
}) => html\`
            <vl-infotext ?badge=\${badge} href=\${href} link-label=\${linkLabel} ?external=\${external}>
                <span slot="value">\${unsafeHTML(valueSlot)}</span>
                <span slot="text">\${unsafeHTML(textSlot)}</span>
            </vl-infotext>
        \`)`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(infotextArgs, ({
  badge,
  href,
  linkLabel,
  external,
  valueSlot,
  textSlot
}) => html\`
            <vl-infotext ?badge=\${badge} href=\${href} link-label=\${linkLabel} ?external=\${external}>
                <span slot="value">\${unsafeHTML(valueSlot)}</span>
                <span slot="text">\${unsafeHTML(textSlot)}</span>
            </vl-infotext>
        \`)`,...s.parameters?.docs?.source}}};const C=["InfotextDefault","InfotextBadge","InfotextLink","InfotextExternalLink"];export{l as InfotextBadge,o as InfotextDefault,s as InfotextExternalLink,r as InfotextLink,C as __namedExportsOrder,E as default};
