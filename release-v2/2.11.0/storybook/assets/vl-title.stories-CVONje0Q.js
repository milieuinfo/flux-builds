import{Y as s,Z as d,bO as m,W as p,a0 as u,U as v,u as h,j as t,C as $,bk as g,s as y,x as f}from"./iframe-BWsn3Pr7.js";import{o as a}from"./unsafe-html-B89ecE4O.js";import"./preload-helper-D9Z9MdNV.js";const r={...p,...m,defaultSlot:""},j={...v,type:{name:"type",description:"Het type van de titel.",control:{type:u.INLINE_RADIO},options:["h1","h2","h3","h4","h5","h6"],table:{type:{summary:d.STRING},category:s.ATTRIBUTES,defaultValue:{summary:r.type}}},underline:{name:"underline",description:"Voegt een subtiele lijn toe onder de titel.",table:{type:{summary:d.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:String(r.underline)}}},alt:{name:"alt",description:"Zet alle letters om in uppercase en zal altijd een lijn toevoegen onder de titel.",table:{type:{summary:d.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:String(r.alt)}}},noSpaceBottom:{name:"no-space-bottom",description:"Vermindert ruimte onder de titel.",table:{type:{summary:d.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:String(r.noSpaceBottom)}}},defaultSlot:{name:"[default]",table:{type:{summary:d.HTML},category:s.SLOTS}}};function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...h(),...n.components},{FluxComponentMetaData:l}=e;return l||b("FluxComponentMetaData"),t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"title",children:"Title"}),`
`,t.jsx(l,{id:"components-atom-title"}),`
`,t.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,t.jsxs(e.p,{children:["Gebruik de ",t.jsx(e.code,{children:"title"})," component om een title af te beelden.",t.jsx("br",{})]}),`
`,t.jsxs(e.p,{children:["Deze component geniet de voorkeur boven het oude ",t.jsx(e.a,{href:"/docs/elements-title-h1--documentatie",children:"vl-title"})," element."]}),`
`,t.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { VlTitleComponent } from '@domg-wc/components/atom';
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<vl-title></vl-title>
`})}),`
`,t.jsx($,{of:o}),`
`,t.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,t.jsx(g,{of:o}),`
`,t.jsx(e.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,t.jsx(e.h3,{id:"richtlijnen",children:"Richtlijnen:"}),`
`,t.jsx(e.p,{children:"Gebruik opeenvolgende rangorde om de titel te bepalen en sla geen rangorde over."}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"WEL"})," bv. ",t.jsx(e.code,{children:"h1"})," voor de hoofdtitel, ",t.jsx(e.code,{children:"h2"})," voor de subtitel, ",t.jsx(e.code,{children:"h3"})," voor de subsubtitel"]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"NIET"})," bv. ",t.jsx(e.code,{children:"h2"})," voor de hoofdtitel, ",t.jsx(e.code,{children:"h4"})," voor de subtitel."]}),`
`,t.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,t.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-titles",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Title"})})]})}function x(n={}){const{wrapper:e}={...h(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(c,{...n})}):c(n)}function b(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const E={id:"components-atom-title",title:"Components - Atom/title",tags:["autodocs"],args:r,argTypes:j,parameters:{docs:{page:x}}},o=y(r,({underline:n,noSpaceBottom:e,alt:l,defaultSlot:i})=>f`
            <vl-title type="h1" underline=${n} no-space-bottom=${e} alt=${l}>
                h1 - ${a(i)}
            </vl-title>
            <vl-title type="h2" underline=${n} no-space-bottom=${e} alt=${l}>
                h2 - ${a(i)}
            </vl-title>
            <vl-title type="h3" underline=${n} no-space-bottom=${e} alt=${l}>
                h3 - ${a(i)}
            </vl-title>
            <vl-title type="h4" underline=${n} no-space-bottom=${e} alt=${l}>
                h4 - ${a(i)}
            </vl-title>
            <vl-title type="h5" underline=${n} no-space-bottom=${e} alt=${l}>
                h5 - ${a(i)}
            </vl-title>
            <vl-title type="h6" underline=${n} no-space-bottom=${e} alt=${l}>
                h6 - ${a(i)}
            </vl-title>
        `);o.storyName="vl-title - default";o.args={defaultSlot:"Ik ben een titel"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'story<TitleArgs>(titleArgs, ({\n  underline,\n  noSpaceBottom,\n  alt,\n  defaultSlot\n}) => html`\n            <vl-title type="h1" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h1 - ${unsafeHTML(defaultSlot)}\n            </vl-title>\n            <vl-title type="h2" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h2 - ${unsafeHTML(defaultSlot)}\n            </vl-title>\n            <vl-title type="h3" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h3 - ${unsafeHTML(defaultSlot)}\n            </vl-title>\n            <vl-title type="h4" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h4 - ${unsafeHTML(defaultSlot)}\n            </vl-title>\n            <vl-title type="h5" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h5 - ${unsafeHTML(defaultSlot)}\n            </vl-title>\n            <vl-title type="h6" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h6 - ${unsafeHTML(defaultSlot)}\n            </vl-title>\n        `)',...o.parameters?.docs?.source}}};const L=["TitleDefault"];export{o as TitleDefault,L as __namedExportsOrder,E as default};
