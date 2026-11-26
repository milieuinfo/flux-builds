import{C as m,T as $,a as x,b as y,d as T,s as v}from"./stories.helper-DYHi_5m6.js";import{c2 as S,u as b,j as n,C as g,b4 as k,b as j}from"./iframe-Cv28D2NX.js";import{o as r}from"./unsafe-html-7Tp0Sqh9.js";import"./preload-helper-PPVm8Dsz.js";const h={...x,...S,defaultSlot:""},A={...T,type:{name:"type",description:"Het type van de titel.",control:{type:y.INLINE_RADIO},options:["h1","h2","h3","h4","h5","h6"],table:{type:{summary:$.STRING},category:m.ATTRIBUTES,defaultValue:{summary:h.type}}},underline:{name:"underline",description:"Voegt een subtiele lijn toe onder de titel.",table:{type:{summary:$.BOOLEAN},category:m.ATTRIBUTES,defaultValue:{summary:String(h.underline)}}},alt:{name:"alt",description:"Zet alle letters om in uppercase en zal altijd een lijn toevoegen onder de titel.",table:{type:{summary:$.BOOLEAN},category:m.ATTRIBUTES,defaultValue:{summary:String(h.alt)}}},noSpaceBottom:{name:"no-space-bottom",description:"Vermindert ruimte onder de titel.",table:{type:{summary:$.BOOLEAN},category:m.ATTRIBUTES,defaultValue:{summary:String(h.noSpaceBottom)}}},appearance:{name:"appearance",description:"Bepaalt de visuele stijl van de titel, onafhankelijk van het semantische type. Handig voor het behouden van semantiek terwijl je een andere stijl wilt toepassen.",control:{type:y.INLINE_RADIO},options:["(none)","h1","h2","h3","h4","h5","h6"],table:{type:{summary:$.STRING},category:m.ATTRIBUTES,defaultValue:{summary:h.appearance||"''"}}},defaultSlot:{name:"[default]",table:{type:{summary:$.HTML},category:m.SLOTS}}};function f(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...b(),...t.components},{FluxComponentMetaData:a}=e;return a||B("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"title",children:"Title"}),`
`,n.jsx(a,{id:"components-atom-title"}),`
`,n.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,n.jsxs(e.p,{children:["Gebruik de ",n.jsx(e.code,{children:"title"})," component om een title af te beelden.",n.jsx("br",{})]}),`
`,n.jsxs(e.p,{children:["Deze component geniet de voorkeur boven het oude ",n.jsx(e.a,{href:"/docs/elements-title-h1--documentatie",children:"vl-title"})," element."]}),`
`,n.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { VlTitleComponent } from '@domg-wc/components/atom';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-title></vl-title>
`})}),`
`,n.jsx(g,{of:s}),`
`,n.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,n.jsx(k,{of:s}),`
`,n.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,n.jsx(e.h3,{id:"underline",children:"Underline"}),`
`,n.jsx(g,{of:c}),`
`,n.jsx(e.h3,{id:"no-space-bottom",children:"No space bottom"}),`
`,n.jsx(g,{of:u}),`
`,n.jsx(e.h3,{id:"alt",children:"Alt"}),`
`,n.jsx(g,{of:p}),`
`,n.jsx(e.h3,{id:"appearance",children:"Appearance"}),`
`,n.jsxs(e.p,{children:["Gebruik ",n.jsx(e.code,{children:"appearance"})," alleen wanneer visuele hiërarchie afwijkt van semantische hiërarchie."]}),`
`,n.jsx(e.p,{children:"De heading‑rangorde moet altijd logisch blijven voor screenreaders en SEO."}),`
`,n.jsx(g,{of:d}),`
`,n.jsx(e.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,n.jsx(e.h3,{id:"richtlijnen",children:"Richtlijnen:"}),`
`,n.jsx(e.p,{children:"Gebruik opeenvolgende rangorde om de titel te bepalen en sla geen rangorde over."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"WEL"})," bv. ",n.jsx(e.code,{children:"h1"})," voor de hoofdtitel, ",n.jsx(e.code,{children:"h2"})," voor de subtitel, ",n.jsx(e.code,{children:"h3"})," voor de subsubtitel"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"NIET"})," bv. ",n.jsx(e.code,{children:"h2"})," voor de hoofdtitel, ",n.jsx(e.code,{children:"h4"})," voor de subtitel."]}),`
`,n.jsx(e.h3,{id:"gedrag",children:"Gedrag"}),`
`,n.jsxs(e.p,{children:["Op een klein scherm loopt een titel nooit over de rand (WCAG 1.4.10). Heeft de pagina een taal (",n.jsx(e.code,{children:"lang"}),`, bv.
`,n.jsx(e.code,{children:'<html lang="nl">'}),`) en kent de browser die, dan kan een lang woord aan het einde van een regel met een koppelteken
afgebroken worden, bv. "Toegankelijkheids-verklaring". In Chrome, Edge en Firefox komen daarvoor enkel woorden van
minstens 12 letters in aanmerking, zodat gewone woorden heel blijven; Safari ondersteunt die grens (nog) niet en
gebruikt zijn eigen. Een woord dat nergens op een regel past, breekt altijd af, desnoods zonder koppelteken.`]}),`
`,n.jsxs(e.p,{children:[`Op grotere schermen blijft een gewoon woord heel. Enkel een woord dat op geen enkele regel past, zoals een lange code of
bestandsnaam zonder spaties, breekt af zonder koppelteken. Staat de titel zelf in een flex-rij, bv. naast een knop, dan
blijft hij minstens zo breed als zijn langste woord. Mag de titel in die rij toch krimpen en een te lang woord afbreken,
zet dan `,n.jsx(e.code,{children:"min-width: 0"})," op ",n.jsx(e.code,{children:"vl-title"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`vl-title {
    min-width: 0;
}
`})}),`
`,n.jsxs(e.p,{children:[`Zet je naast de tekst nog een element in de titel, zoals een icoon, een pill of een link, dan staat het mee in de
tekstregel, zoals in een gewone zin. Een spatie tussen de tekst en het element blijft dus zichtbaar, en een icoon lijnt
uit op het midden van de kleine letters, wat enkele pixels lager is dan het midden van de regel. Wil je een icoon los
van de tekstregel uitlijnen, zet het dan niet in de titel maar ernaast, samen met de titel in een `,n.jsx(e.code,{children:"vl-group"}),`. Met de
modifiers van `,n.jsx(e.code,{children:"vl-group"})," kies je de witruimte en de uitlijning, bv. ",n.jsx(e.code,{children:"vl-group--baseline"}),` om het icoon op de eerste regel
van de titel te zetten. Het icoon neemt dan niet meer de tekstgrootte van de titel over, maar die van zijn omgeving. De
titel staat in die `,n.jsx(e.code,{children:"vl-group"})," in een flex-rij: zet er ook hier ",n.jsx(e.code,{children:"min-width: 0"}),` op, zodat een woord zonder spaties
afbreekt.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="vl-group vl-group--baseline">
    <vl-icon icon="calendar"></vl-icon>
    <vl-title type="h2">Dossier</vl-title>
</div>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`vl-title {
    min-width: 0;
}
`})}),`
`,n.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,n.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/titles",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Title"})})]})}function w(t={}){const{wrapper:e}={...b(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(f,{...t})}):f(t)}function B(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const M={id:"components-atom-title",title:"Components - Atom/title",tags:["autodocs"],args:h,argTypes:A,parameters:{docs:{page:w}}},s=v(h,({type:t,underline:e,noSpaceBottom:a,alt:o,defaultSlot:i,appearance:l})=>j`
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h1"} underline=${e} no-space-bottom=${a} alt=${o} appearance=${l}>
            ${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h1"} - ${r(i)}
        </vl-title>
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h2"} underline=${e} no-space-bottom=${a} alt=${o} appearance=${l}>
            ${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h2"} - ${r(i)}
        </vl-title>
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h3"} underline=${e} no-space-bottom=${a} alt=${o} appearance=${l}>
            ${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h3"} - ${r(i)}
        </vl-title>
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h4"} underline=${e} no-space-bottom=${a} alt=${o} appearance=${l}>
            ${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h4"} - ${r(i)}
        </vl-title>
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h5"} underline=${e} no-space-bottom=${a} alt=${o} appearance=${l}>
            ${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h5"} - ${r(i)}
        </vl-title>
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h6"} underline=${e} no-space-bottom=${a} alt=${o} appearance=${l}>
            ${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h6"} - ${r(i)}
        </vl-title>
    `);s.storyName="vl-title - default";s.args={defaultSlot:"Ik ben een titel"};const d=v(h,({type:t,underline:e,noSpaceBottom:a,alt:o,defaultSlot:i,appearance:l})=>j`
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h2"} appearance=${["h1","h2","h3","h4","h5","h6"].includes(l)?l:"h3"} underline="${e}" no-space-bottom="${a}" alt="${o}"
            >${r(i)} - ${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h2"} met ${["h1","h2","h3","h4","h5","h6"].includes(l)?l:"h3"}-stijl</vl-title
        >
        <vl-title type=${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h3"} appearance=${["h1","h2","h3","h4","h5","h6"].includes(l)?l:"h4"} underline="${e}" no-space-bottom="${a}" alt="${o}"
            >${r(i)} - ${["h1","h2","h3","h4","h5","h6"].includes(t)?t:"h3"} met ${["h1","h2","h3","h4","h5","h6"].includes(l)?l:"h4"}-stijl</vl-title
        >
    `);d.storyName="vl-title - appearance";d.args={defaultSlot:"Ik ben een titel"};const c=v(h,({type:t,underline:e,noSpaceBottom:a,alt:o,defaultSlot:i,appearance:l})=>j`
        <vl-title
            type="${t}"
            underline=${e}
            no-space-bottom=${a}
            alt=${o}
            appearance=${l}
            >${r(i)} - ${t} met underline</vl-title
        >
    `);c.storyName="vl-title - underline";c.args={...s.args,underline:!0,type:"h2"};const p=v(h,({type:t,underline:e,noSpaceBottom:a,alt:o,defaultSlot:i,appearance:l})=>j`
        <vl-title
            type="${t}"
            underline=${e}
            no-space-bottom=${a}
            alt=${o}
            appearance=${l}
            >${r(i)} - ${t} met alt</vl-title
        >
    `);p.storyName="vl-title - alt";p.args={...s.args,alt:!0,type:"h2"};const u=v(h,({type:t,underline:e,noSpaceBottom:a,alt:o,defaultSlot:i,appearance:l})=>j`
        <vl-title
            type="${t}"
            underline=${e}
            no-space-bottom=${a}
            alt=${o}
            appearance=${l}
            >${r(i)} - ${t} met no-space-bottom</vl-title
        >
    `);u.storyName="vl-title - no-space-bottom";u.args={...s.args,noSpaceBottom:!0,type:"h2"};const D=["TitleDefault","TitleAppearance","TitleUnderline","TitleAlt","TitleNoSpaceBottom"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"story<TitleArgs>(titleArgs, ({\n  type,\n  underline,\n  noSpaceBottom,\n  alt,\n  defaultSlot,\n  appearance\n}) => html`\n        <vl-title type=${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h1'} underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt} appearance=${appearance}>\n            ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h1'} - ${unsafeHTML(defaultSlot)}\n        </vl-title>\n        <vl-title type=${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h2'} underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt} appearance=${appearance}>\n            ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h2'} - ${unsafeHTML(defaultSlot)}\n        </vl-title>\n        <vl-title type=${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h3'} underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt} appearance=${appearance}>\n            ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h3'} - ${unsafeHTML(defaultSlot)}\n        </vl-title>\n        <vl-title type=${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h4'} underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt} appearance=${appearance}>\n            ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h4'} - ${unsafeHTML(defaultSlot)}\n        </vl-title>\n        <vl-title type=${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h5'} underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt} appearance=${appearance}>\n            ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h5'} - ${unsafeHTML(defaultSlot)}\n        </vl-title>\n        <vl-title type=${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h6'} underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt} appearance=${appearance}>\n            ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type) ? type : 'h6'} - ${unsafeHTML(defaultSlot)}\n        </vl-title>\n    `)",...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story<TitleArgs>(titleArgs, ({
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
    \`)`,...u.parameters?.docs?.source}}};export{p as TitleAlt,d as TitleAppearance,s as TitleDefault,u as TitleNoSpaceBottom,c as TitleUnderline,D as __namedExportsOrder,M as default};
