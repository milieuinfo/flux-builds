import{Z as m,_ as $,bK as T,X as x,a1 as j,W as S,u as b,j as n,C as y,b8 as A,s as v,x as g}from"./iframe-COmpMQdF.js";import{o as r}from"./unsafe-html-DkF6qbYn.js";import"./preload-helper-D9Z9MdNV.js";const i={...x,...T,defaultSlot:""},B={...S,type:{name:"type",description:"Het type van de titel.",control:{type:j.INLINE_RADIO},options:["h1","h2","h3","h4","h5","h6"],table:{type:{summary:$.STRING},category:m.ATTRIBUTES,defaultValue:{summary:i.type}}},underline:{name:"underline",description:"Voegt een subtiele lijn toe onder de titel.",table:{type:{summary:$.BOOLEAN},category:m.ATTRIBUTES,defaultValue:{summary:String(i.underline)}}},alt:{name:"alt",description:"Zet alle letters om in uppercase en zal altijd een lijn toevoegen onder de titel.",table:{type:{summary:$.BOOLEAN},category:m.ATTRIBUTES,defaultValue:{summary:String(i.alt)}}},noSpaceBottom:{name:"no-space-bottom",description:"Vermindert ruimte onder de titel.",table:{type:{summary:$.BOOLEAN},category:m.ATTRIBUTES,defaultValue:{summary:String(i.noSpaceBottom)}}},appearance:{name:"appearance",description:"Bepaalt de visuele stijl van de titel, onafhankelijk van het semantische type. Handig voor het behouden van semantiek terwijl je een andere stijl wilt toepassen.",control:{type:j.INLINE_RADIO},options:["(none)","h1","h2","h3","h4","h5","h6"],table:{type:{summary:$.STRING},category:m.ATTRIBUTES,defaultValue:{summary:i.appearance||"''"}}},defaultSlot:{name:"[default]",table:{type:{summary:$.HTML},category:m.SLOTS}}};function f(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...b(),...t.components},{FluxComponentMetaData:a}=e;return a||N("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"title",children:"Title"}),`
`,n.jsx(a,{id:"components-atom-title"}),`
`,n.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,n.jsxs(e.p,{children:["Gebruik de ",n.jsx(e.code,{children:"title"})," component om een title af te beelden.",n.jsx("br",{})]}),`
`,n.jsxs(e.p,{children:["Deze component geniet de voorkeur boven het oude ",n.jsx(e.a,{href:"/docs/elements-title-h1--documentatie",children:"vl-title"})," element."]}),`
`,n.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { VlTitleComponent } from '@domg-wc/components/atom';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-title></vl-title>
`})}),`
`,n.jsx(y,{of:s}),`
`,n.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,n.jsx(A,{of:s}),`
`,n.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,n.jsx(e.h3,{id:"underline",children:"Underline"}),`
`,n.jsx(y,{of:p}),`
`,n.jsx(e.h3,{id:"no-space-bottom",children:"No space bottom"}),`
`,n.jsx(y,{of:u}),`
`,n.jsx(e.h3,{id:"alt",children:"Alt"}),`
`,n.jsx(y,{of:d}),`
`,n.jsx(e.h3,{id:"appearance",children:"Appearance"}),`
`,n.jsxs(e.p,{children:["Gebruik ",n.jsx(e.code,{children:"appearance"})," alleen wanneer visuele hiërarchie afwijkt van semantische hiërarchie."]}),`
`,n.jsx(e.p,{children:"De heading‑rangorde moet altijd logisch blijven voor screenreaders en SEO."}),`
`,n.jsx(y,{of:c}),`
`,n.jsx(e.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,n.jsx(e.h3,{id:"richtlijnen",children:"Richtlijnen:"}),`
`,n.jsx(e.p,{children:"Gebruik opeenvolgende rangorde om de titel te bepalen en sla geen rangorde over."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"WEL"})," bv. ",n.jsx(e.code,{children:"h1"})," voor de hoofdtitel, ",n.jsx(e.code,{children:"h2"})," voor de subtitel, ",n.jsx(e.code,{children:"h3"})," voor de subsubtitel"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"NIET"})," bv. ",n.jsx(e.code,{children:"h2"})," voor de hoofdtitel, ",n.jsx(e.code,{children:"h4"})," voor de subtitel."]}),`
`,n.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,n.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/titles",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Title"})})]})}function L(t={}){const{wrapper:e}={...b(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(f,{...t})}):f(t)}function N(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const D={id:"components-atom-title",title:"Components - Atom/title",tags:["autodocs"],args:i,argTypes:B,parameters:{docs:{page:L}}},s=v(i,({type:t,underline:e,noSpaceBottom:a,alt:h,defaultSlot:o,appearance:l})=>g`
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h1"} underline=${e} no-space-bottom=${a} alt=${h} appearance=${l}>
            ${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h1"} - ${r(o)}
        </vl-title>
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h2"} underline=${e} no-space-bottom=${a} alt=${h} appearance=${l}>
            ${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h2"} - ${r(o)}
        </vl-title>
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h3"} underline=${e} no-space-bottom=${a} alt=${h} appearance=${l}>
            ${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h3"} - ${r(o)}
        </vl-title>
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h4"} underline=${e} no-space-bottom=${a} alt=${h} appearance=${l}>
            ${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h4"} - ${r(o)}
        </vl-title>
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h5"} underline=${e} no-space-bottom=${a} alt=${h} appearance=${l}>
            ${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h5"} - ${r(o)}
        </vl-title>
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h6"} underline=${e} no-space-bottom=${a} alt=${h} appearance=${l}>
            ${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h6"} - ${r(o)}
        </vl-title>
    `);s.storyName="vl-title - default";s.args={defaultSlot:"Ik ben een titel"};const c=v(i,({type:t,underline:e,noSpaceBottom:a,alt:h,defaultSlot:o,appearance:l})=>g`
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h2"} appearance=${["h1","h2","h3","h4","h5","h6"].includes(l)?l:"h3"} underline="${e}" no-space-bottom="${a}" alt="${h}"
            >${r(o)} - ${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h2"} met ${["h1","h2","h3","h4","h5","h6"].includes(l)?l:"h3"}-stijl</vl-title
        >
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h3"} appearance=${["h1","h2","h3","h4","h5","h6"].includes(l)?l:"h4"} underline="${e}" no-space-bottom="${a}" alt="${h}"
            >${r(o)} - ${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h3"} met ${["h1","h2","h3","h4","h5","h6"].includes(l)?l:"h4"}-stijl</vl-title
        >
    `);c.storyName="vl-title - appearance";c.args={defaultSlot:"Ik ben een titel"};const p=v(i,({type:t,underline:e,noSpaceBottom:a,alt:h,defaultSlot:o,appearance:l})=>g`
        <vl-title
            type="${t}"
            underline=${e}
            no-space-bottom=${a}
            alt=${h}
            appearance=${l}
            >${r(o)} - ${t} met underline</vl-title
        >
    `);p.storyName="vl-title - underline";p.args={...s.args,underline:!0,type:"h2"};const d=v(i,({type:t,underline:e,noSpaceBottom:a,alt:h,defaultSlot:o,appearance:l})=>g`
        <vl-title
            type="${t}"
            underline=${e}
            no-space-bottom=${a}
            alt=${h}
            appearance=${l}
            >${r(o)} - ${t} met alt</vl-title
        >
    `);d.storyName="vl-title - alt";d.args={...s.args,alt:!0,type:"h2"};const u=v(i,({type:t,underline:e,noSpaceBottom:a,alt:h,defaultSlot:o,appearance:l})=>g`
        <vl-title
            type="${t}"
            underline=${e}
            no-space-bottom=${a}
            alt=${h}
            appearance=${l}
            >${r(o)} - ${t} met no-space-bottom</vl-title
        >
    `);u.storyName="vl-title - no-space-bottom";u.args={...s.args,noSpaceBottom:!0,type:"h2"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"story<TitleArgs>(titleArgs, ({\n  type,\n  underline,\n  noSpaceBottom,\n  alt,\n  defaultSlot,\n  appearance\n}) => html`\n        <vl-title type=${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h1'} underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt} appearance=${appearance}>\n            ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h1'} - ${unsafeHTML(defaultSlot)}\n        </vl-title>\n        <vl-title type=${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h2'} underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt} appearance=${appearance}>\n            ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h2'} - ${unsafeHTML(defaultSlot)}\n        </vl-title>\n        <vl-title type=${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h3'} underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt} appearance=${appearance}>\n            ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h3'} - ${unsafeHTML(defaultSlot)}\n        </vl-title>\n        <vl-title type=${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h4'} underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt} appearance=${appearance}>\n            ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h4'} - ${unsafeHTML(defaultSlot)}\n        </vl-title>\n        <vl-title type=${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h5'} underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt} appearance=${appearance}>\n            ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h5'} - ${unsafeHTML(defaultSlot)}\n        </vl-title>\n        <vl-title type=${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h6'} underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt} appearance=${appearance}>\n            ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h6'} - ${unsafeHTML(defaultSlot)}\n        </vl-title>\n    `)",...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story<TitleArgs>(titleArgs, ({
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
            >\${unsafeHTML(defaultSlot)} - \${type} met underline</vl-title
        >
    \`)`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story<TitleArgs>(titleArgs, ({
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
    \`)`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story<TitleArgs>(titleArgs, ({
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
    \`)`,...u.parameters?.docs?.source}}};const k=["TitleDefault","TitleAppearance","TitleUnderline","TitleAlt","TitleNoSpaceBottom"];export{d as TitleAlt,c as TitleAppearance,s as TitleDefault,u as TitleNoSpaceBottom,p as TitleUnderline,k as __namedExportsOrder,D as default};
