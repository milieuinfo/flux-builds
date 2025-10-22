import{K as l,L as i,bX as h,I as v,H as b,u as m,j as e,C as x,bd as S,s as y,x as j,r as T,bY as $}from"./iframe-Ds54rb_7.js";import{o as u}from"./unsafe-html-CgayEJ4y.js";import"./preload-helper-D9Z9MdNV.js";const o={...v,...h,valueSlot:"",textSlot:""},k={...b,badge:{name:"badge",description:"Beeldt de infotext af in een badge.",table:{type:{summary:i.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(o.badge)}}},href:{name:"href",description:"De url waar de infotext naar verwijst.",table:{type:{summary:i.STRING},category:l.ATTRIBUTES,defaultValue:{summary:o.href}}},external:{name:"external",description:"Opent de link in een nieuw tabblad.<br/>Te gebruiken in combinatie met het href attribuut.",table:{type:{summary:i.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(o.external)}}},valueSlot:{name:"value",description:"De waarde van de infotext.<br/>De font-size wordt automatisch aangepast naargelang de lengte van de value.<br/>Indien er een nummer meegegeven wordt zal de value automatisch geformatteerd worden.",table:{type:{summary:i.HTML},category:l.SLOTS,defaultValue:{summary:o.valueSlot}}},textSlot:{name:"text",description:"De tekst van de infotext.",table:{type:{summary:i.HTML},category:l.SLOTS,defaultValue:{summary:o.textSlot}}}};function c(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...n.components},{FluxMetaData:d}=t;return d||w("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"infotext",children:"Infotext"}),`
`,e.jsx(d,{id:"components-block-infotext"}),`
`,e.jsxs(t.p,{children:["Gebruik de ",e.jsx(t.code,{children:"infotext"})," component om belangrijke nummers duidelijk weer te gevem.",e.jsx("br",{})]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlInfotextComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-infotext></vl-infotext>
`})}),`
`,e.jsx(x,{of:a}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(S,{of:a}),`
`,e.jsx(t.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(t.h3,{id:"badge",children:"Badge"}),`
`,e.jsx(x,{of:r}),`
`,e.jsx(t.h3,{id:"link",children:"Link"}),`
`,e.jsx(x,{of:s}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-infotext",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Infotext"})})]})}function I(n={}){const{wrapper:t}={...m(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(c,{...n})}):c(n)}function w(n,t){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}T([$]);const A={id:"components-block-infotext",title:"Components - Block/infotext",tags:["autodocs"],args:o,argTypes:k,parameters:{docs:{page:I}}},f=y(o,({badge:n,href:t,external:d,valueSlot:p,textSlot:g})=>j`
            <vl-infotext ?badge=${n} href=${t} ?external=${d}>
                <span slot="value">${u(p)}</span>
                <span slot="text">${u(g)}</span>
            </vl-infotext>
        `),a=f.bind({});a.storyName="vl-infotext - default";a.args={valueSlot:"3200",textSlot:"Bezoekers per dag"};const r=f.bind({});r.storyName="vl-infotext - badge";r.args={valueSlot:"3200",textSlot:"Bezoekers per dag",badge:!0};const s=f.bind({});s.storyName="vl-infotext - link";s.args={valueSlot:"3200",textSlot:"Bezoekers per dag",href:"https://www.vlaanderen.be"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(infotextArgs, ({
  badge,
  href,
  external,
  valueSlot,
  textSlot
}) => html\`
            <vl-infotext ?badge=\${badge} href=\${href} ?external=\${external}>
                <span slot="value">\${unsafeHTML(valueSlot)}</span>
                <span slot="text">\${unsafeHTML(textSlot)}</span>
            </vl-infotext>
        \`)`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(infotextArgs, ({
  badge,
  href,
  external,
  valueSlot,
  textSlot
}) => html\`
            <vl-infotext ?badge=\${badge} href=\${href} ?external=\${external}>
                <span slot="value">\${unsafeHTML(valueSlot)}</span>
                <span slot="text">\${unsafeHTML(textSlot)}</span>
            </vl-infotext>
        \`)`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(infotextArgs, ({
  badge,
  href,
  external,
  valueSlot,
  textSlot
}) => html\`
            <vl-infotext ?badge=\${badge} href=\${href} ?external=\${external}>
                <span slot="value">\${unsafeHTML(valueSlot)}</span>
                <span slot="text">\${unsafeHTML(textSlot)}</span>
            </vl-infotext>
        \`)`,...s.parameters?.docs?.source}}};const B=["InfotextDefault","InfotextBadge","InfotextLink"];export{r as InfotextBadge,a as InfotextDefault,s as InfotextLink,B as __namedExportsOrder,A as default};
