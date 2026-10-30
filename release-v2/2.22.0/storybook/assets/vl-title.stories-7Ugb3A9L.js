import{Z as m,_ as $,bS as x,X as T,a1 as j,W as S,u as b,j as t,C as g,b4 as A,s as v,b as y}from"./iframe-ylVHDfb1.js";import{o as r}from"./unsafe-html--mv6C7rg.js";import"./preload-helper-PPVm8Dsz.js";const i={...T,...x,defaultSlot:""},k={...S,type:{name:"type",description:"Het type van de titel.",control:{type:j.INLINE_RADIO},options:["h1","h2","h3","h4","h5","h6"],table:{type:{summary:$.STRING},category:m.ATTRIBUTES,defaultValue:{summary:i.type}}},underline:{name:"underline",description:"Voegt een subtiele lijn toe onder de titel.",table:{type:{summary:$.BOOLEAN},category:m.ATTRIBUTES,defaultValue:{summary:String(i.underline)}}},alt:{name:"alt",description:"Zet alle letters om in uppercase en zal altijd een lijn toevoegen onder de titel.",table:{type:{summary:$.BOOLEAN},category:m.ATTRIBUTES,defaultValue:{summary:String(i.alt)}}},noSpaceBottom:{name:"no-space-bottom",description:"Vermindert ruimte onder de titel.",table:{type:{summary:$.BOOLEAN},category:m.ATTRIBUTES,defaultValue:{summary:String(i.noSpaceBottom)}}},appearance:{name:"appearance",description:"Bepaalt de visuele stijl van de titel, onafhankelijk van het semantische type. Handig voor het behouden van semantiek terwijl je een andere stijl wilt toepassen.",control:{type:j.INLINE_RADIO},options:["(none)","h1","h2","h3","h4","h5","h6"],table:{type:{summary:$.STRING},category:m.ATTRIBUTES,defaultValue:{summary:i.appearance||"''"}}},defaultSlot:{name:"[default]",table:{type:{summary:$.HTML},category:m.SLOTS}}};function f(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...b(),...n.components},{FluxComponentMetaData:l}=e;return l||E("FluxComponentMetaData"),t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"title",children:"Title"}),`
`,t.jsx(l,{id:"components-atom-title"}),`
`,t.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,t.jsxs(e.p,{children:["Gebruik de ",t.jsx(e.code,{children:"title"})," component om een title af te beelden.",t.jsx("br",{})]}),`
`,t.jsxs(e.p,{children:["Deze component geniet de voorkeur boven het oude ",t.jsx(e.a,{href:"/docs/elements-title-h1--documentatie",children:"vl-title"})," element."]}),`
`,t.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { VlTitleComponent } from '@domg-wc/components/atom';
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<vl-title></vl-title>
`})}),`
`,t.jsx(g,{of:s}),`
`,t.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,t.jsx(A,{of:s}),`
`,t.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,t.jsx(e.h3,{id:"underline",children:"Underline"}),`
`,t.jsx(g,{of:c}),`
`,t.jsx(e.h3,{id:"no-space-bottom",children:"No space bottom"}),`
`,t.jsx(g,{of:u}),`
`,t.jsx(e.h3,{id:"alt",children:"Alt"}),`
`,t.jsx(g,{of:p}),`
`,t.jsx(e.h3,{id:"appearance",children:"Appearance"}),`
`,t.jsxs(e.p,{children:["Gebruik ",t.jsx(e.code,{children:"appearance"})," alleen wanneer visuele hiërarchie afwijkt van semantische hiërarchie."]}),`
`,t.jsx(e.p,{children:"De heading‑rangorde moet altijd logisch blijven voor screenreaders en SEO."}),`
`,t.jsx(g,{of:d}),`
`,t.jsx(e.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,t.jsx(e.h3,{id:"richtlijnen",children:"Richtlijnen:"}),`
`,t.jsx(e.p,{children:"Gebruik opeenvolgende rangorde om de titel te bepalen en sla geen rangorde over."}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"WEL"})," bv. ",t.jsx(e.code,{children:"h1"})," voor de hoofdtitel, ",t.jsx(e.code,{children:"h2"})," voor de subtitel, ",t.jsx(e.code,{children:"h3"})," voor de subsubtitel"]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"NIET"})," bv. ",t.jsx(e.code,{children:"h2"})," voor de hoofdtitel, ",t.jsx(e.code,{children:"h4"})," voor de subtitel."]}),`
`,t.jsx(e.h3,{id:"gedrag",children:"Gedrag"}),`
`,t.jsxs(e.p,{children:["Op een klein scherm loopt een titel nooit over de rand (WCAG 1.4.10). Heeft de pagina een taal (",t.jsx(e.code,{children:"lang"}),`, bv.
`,t.jsx(e.code,{children:'<html lang="nl">'}),`) en kent de browser die, dan kan een lang woord aan het einde van een regel met een koppelteken
afgebroken worden, bv. "Toegankelijkheids-verklaring". In Chrome, Edge en Firefox komen daarvoor enkel woorden van
minstens 12 letters in aanmerking, zodat gewone woorden heel blijven; Safari ondersteunt die grens (nog) niet en
gebruikt zijn eigen. Een woord dat nergens op een regel past, breekt altijd af, desnoods zonder koppelteken. Op
grotere schermen blijft een woord heel.`]}),`
`,t.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,t.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/titles",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Title"})})]})}function B(n={}){const{wrapper:e}={...b(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(f,{...n})}):f(n)}function E(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const M={id:"components-atom-title",title:"Components - Atom/title",tags:["autodocs"],args:i,argTypes:k,parameters:{docs:{page:B}}},s=v(i,({type:n,underline:e,noSpaceBottom:l,alt:o,defaultSlot:h,appearance:a})=>y`
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(n)?n:"h1"} underline=${e} no-space-bottom=${l} alt=${o} appearance=${a}>
            ${["h1","h2","h3","h4","h5","h6"].includes(n)?n:"h1"} - ${r(h)}
        </vl-title>
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(n)?n:"h2"} underline=${e} no-space-bottom=${l} alt=${o} appearance=${a}>
            ${["h1","h2","h3","h4","h5","h6"].includes(n)?n:"h2"} - ${r(h)}
        </vl-title>
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(n)?n:"h3"} underline=${e} no-space-bottom=${l} alt=${o} appearance=${a}>
            ${["h1","h2","h3","h4","h5","h6"].includes(n)?n:"h3"} - ${r(h)}
        </vl-title>
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(n)?n:"h4"} underline=${e} no-space-bottom=${l} alt=${o} appearance=${a}>
            ${["h1","h2","h3","h4","h5","h6"].includes(n)?n:"h4"} - ${r(h)}
        </vl-title>
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(n)?n:"h5"} underline=${e} no-space-bottom=${l} alt=${o} appearance=${a}>
            ${["h1","h2","h3","h4","h5","h6"].includes(n)?n:"h5"} - ${r(h)}
        </vl-title>
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(n)?n:"h6"} underline=${e} no-space-bottom=${l} alt=${o} appearance=${a}>
            ${["h1","h2","h3","h4","h5","h6"].includes(n)?n:"h6"} - ${r(h)}
        </vl-title>
    `);s.storyName="vl-title - default";s.args={defaultSlot:"Ik ben een titel"};const d=v(i,({type:n,underline:e,noSpaceBottom:l,alt:o,defaultSlot:h,appearance:a})=>y`
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(n)?n:"h2"} appearance=${["h1","h2","h3","h4","h5","h6"].includes(a)?a:"h3"} underline="${e}" no-space-bottom="${l}" alt="${o}"
            >${r(h)} - ${["h1","h2","h3","h4","h5","h6"].includes(n)?n:"h2"} met ${["h1","h2","h3","h4","h5","h6"].includes(a)?a:"h3"}-stijl</vl-title
        >
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(n)?n:"h3"} appearance=${["h1","h2","h3","h4","h5","h6"].includes(a)?a:"h4"} underline="${e}" no-space-bottom="${l}" alt="${o}"
            >${r(h)} - ${["h1","h2","h3","h4","h5","h6"].includes(n)?n:"h3"} met ${["h1","h2","h3","h4","h5","h6"].includes(a)?a:"h4"}-stijl</vl-title
        >
    `);d.storyName="vl-title - appearance";d.args={defaultSlot:"Ik ben een titel"};const c=v(i,({type:n,underline:e,noSpaceBottom:l,alt:o,defaultSlot:h,appearance:a})=>y`
        <vl-title
            type="${n}"
            underline=${e}
            no-space-bottom=${l}
            alt=${o}
            appearance=${a}
            >${r(h)} - ${n} met underline</vl-title
        >
    `);c.storyName="vl-title - underline";c.args={...s.args,underline:!0,type:"h2"};const p=v(i,({type:n,underline:e,noSpaceBottom:l,alt:o,defaultSlot:h,appearance:a})=>y`
        <vl-title
            type="${n}"
            underline=${e}
            no-space-bottom=${l}
            alt=${o}
            appearance=${a}
            >${r(h)} - ${n} met alt</vl-title
        >
    `);p.storyName="vl-title - alt";p.args={...s.args,alt:!0,type:"h2"};const u=v(i,({type:n,underline:e,noSpaceBottom:l,alt:o,defaultSlot:h,appearance:a})=>y`
        <vl-title
            type="${n}"
            underline=${e}
            no-space-bottom=${l}
            alt=${o}
            appearance=${a}
            >${r(h)} - ${n} met no-space-bottom</vl-title
        >
    `);u.storyName="vl-title - no-space-bottom";u.args={...s.args,noSpaceBottom:!0,type:"h2"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"story<TitleArgs>(titleArgs, ({\n  type,\n  underline,\n  noSpaceBottom,\n  alt,\n  defaultSlot,\n  appearance\n}) => html`\n        <vl-title type=${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h1'} underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt} appearance=${appearance}>\n            ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h1'} - ${unsafeHTML(defaultSlot)}\n        </vl-title>\n        <vl-title type=${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h2'} underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt} appearance=${appearance}>\n            ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h2'} - ${unsafeHTML(defaultSlot)}\n        </vl-title>\n        <vl-title type=${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h3'} underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt} appearance=${appearance}>\n            ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h3'} - ${unsafeHTML(defaultSlot)}\n        </vl-title>\n        <vl-title type=${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h4'} underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt} appearance=${appearance}>\n            ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h4'} - ${unsafeHTML(defaultSlot)}\n        </vl-title>\n        <vl-title type=${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h5'} underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt} appearance=${appearance}>\n            ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h5'} - ${unsafeHTML(defaultSlot)}\n        </vl-title>\n        <vl-title type=${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h6'} underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt} appearance=${appearance}>\n            ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h6'} - ${unsafeHTML(defaultSlot)}\n        </vl-title>\n    `)",...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story<TitleArgs>(titleArgs, ({
  type,
  underline,
  noSpaceBottom,
  alt,
  defaultSlot,
  appearance
}) => html\`
        <vl-title type=\${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h2'} appearance=\${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(appearance) ? appearance : 'h3'} underline="\${underline}" no-space-bottom="\${noSpaceBottom}" alt="\${alt}"
            >\${unsafeHTML(defaultSlot)} - \${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h2'} met \${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(appearance) ? appearance : 'h3'}-stijl</vl-title
        >
        <vl-title type=\${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h3'} appearance=\${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(appearance) ? appearance : 'h4'} underline="\${underline}" no-space-bottom="\${noSpaceBottom}" alt="\${alt}"
            >\${unsafeHTML(defaultSlot)} - \${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h3'} met \${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(appearance) ? appearance : 'h4'}-stijl</vl-title
        >
    \`)`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story<TitleArgs>(titleArgs, ({
  type,
  underline,
  noSpaceBottom,
  alt,
  defaultSlot,
  appearance
}) => html\`
        <vl-title
            type="\${type}"
            underline=\${underline}
            no-space-bottom=\${noSpaceBottom}
            alt=\${alt}
            appearance=\${appearance}
            >\${unsafeHTML(defaultSlot)} - \${type} met underline</vl-title
        >
    \`)`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story<TitleArgs>(titleArgs, ({
  type,
  underline,
  noSpaceBottom,
  alt,
  defaultSlot,
  appearance
}) => html\`
        <vl-title
            type="\${type}"
            underline=\${underline}
            no-space-bottom=\${noSpaceBottom}
            alt=\${alt}
            appearance=\${appearance}
            >\${unsafeHTML(defaultSlot)} - \${type} met alt</vl-title
        >
    \`)`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story<TitleArgs>(titleArgs, ({
  type,
  underline,
  noSpaceBottom,
  alt,
  defaultSlot,
  appearance
}) => html\`
        <vl-title
            type="\${type}"
            underline=\${underline}
            no-space-bottom=\${noSpaceBottom}
            alt=\${alt}
            appearance=\${appearance}
            >\${unsafeHTML(defaultSlot)} - \${type} met no-space-bottom</vl-title
        >
    \`)`,...u.parameters?.docs?.source}}};const I=["TitleDefault","TitleAppearance","TitleUnderline","TitleAlt","TitleNoSpaceBottom"];export{p as TitleAlt,d as TitleAppearance,s as TitleDefault,u as TitleNoSpaceBottom,c as TitleUnderline,I as __namedExportsOrder,M as default};
