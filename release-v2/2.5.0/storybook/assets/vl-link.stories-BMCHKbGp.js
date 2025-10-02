import{J as l,K as t,bC as w,H as E,P as B,O,G as V,bD as g,u as x,j as n,C as i,bd as P,s as N,x as I,r as M,b8 as R}from"./iframe-CflcmDUD.js";import{o as C}from"./unsafe-html-Bzfy4gdb.js";import"./preload-helper-D9Z9MdNV.js";const r={...E,...w,defaultSlot:""},D={...V,href:{name:"href",description:"De url waar de link naar verwijst.<br/>Werkt niet in combinatie met `button-as-link`-attribuut.",table:{type:{summary:t.STRING},category:l.ATTRIBUTES,defaultValue:{summary:r.href}}},label:{name:"label",description:"Vult het aria-label attribuut van de link in.",table:{type:{summary:t.STRING},category:l.ATTRIBUTES,defaultValue:{summary:r.label}}},bold:{name:"bold",description:"Beeldt de tekst van de link vet af.",table:{type:{summary:t.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(r.bold)}}},small:{name:"small",description:"Beeldt de tekst van de link klein af.",table:{type:{summary:t.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(r.small)}}},large:{name:"large",description:"Beeldt de tekst van de link groot af.",table:{type:{summary:t.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(r.large)}}},error:{name:"error",description:"Beeldt de link af in een error state.",table:{type:{summary:t.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(r.error)}}},external:{name:"external",description:"Opent de link in een nieuw tabblad.<br/>Werkt niet in combinatie met `button-as-link`-attribuut.",table:{type:{summary:t.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(r.external)}}},icon:{name:"icon",description:"Beeldt een icoon af in de link.<br/>Standaard wordt dit icoon voor de tekst afgebeeld.",table:{type:{summary:t.STRING},category:l.ATTRIBUTES,defaultValue:{summary:r.icon}}},iconPlacement:{name:"icon-placement",description:"De positie van het icoon ten opzichte van de tekst.<br>Voegt margin toe tussen het icoon en de tekst.",control:{type:O.SELECT},options:["",...Object.values(g)],table:{type:{summary:B(Object.values(g))},category:l.ATTRIBUTES,defaultArgs:{summary:r.iconPlacement}}},buttonAsLink:{name:"button-as-link",description:"Maakt van de link een button maar behoudt de link-stijl.",table:{type:{summary:t.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(r.buttonAsLink)}}},defaultSlot:{name:"[default]",description:"De content van de link.",table:{type:{summary:t.HTML},category:l.SLOTS,defaultValue:{summary:r.defaultSlot}}}};function $(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...x(),...a.components},{FluxMetaData:h}=e;return h||U("FluxMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"link",children:"Link"}),`
`,n.jsx(h,{id:"components-atom-link"}),`
`,n.jsxs(e.p,{children:["Gebruik de ",n.jsx(e.code,{children:"link"})," component om een link af te beelden op een pagina.",n.jsx("br",{})]}),`
`,n.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { VlLinkComponent } from '@domg-wc/components/atom';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-link></vl-link>
`})}),`
`,n.jsx(i,{of:s}),`
`,n.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,n.jsx(P,{of:s}),`
`,n.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,n.jsx(e.h3,{id:"bold",children:"Bold"}),`
`,n.jsx(i,{of:c}),`
`,n.jsx(e.h3,{id:"small",children:"Small"}),`
`,n.jsx(i,{of:d}),`
`,n.jsx(e.h3,{id:"large",children:"Large"}),`
`,n.jsx(i,{of:m}),`
`,n.jsx(e.h3,{id:"error",children:"Error"}),`
`,n.jsx(i,{of:u}),`
`,n.jsx(e.h3,{id:"external",children:"External"}),`
`,n.jsx(i,{of:b}),`
`,n.jsx(e.h3,{id:"icon",children:"Icon"}),`
`,n.jsx(i,{of:k}),`
`,n.jsx(e.h3,{id:"button-als-link",children:"Button als link"}),`
`,n.jsxs(e.p,{children:["Soms wil je een button stylen als een link. Een specifieke use-case is bvb. om van ",n.jsx(e.code,{children:"Annuleren"}),` een link te maken
zodat die visueel minder prominent is dan de knop `,n.jsx(e.code,{children:"Opslaan"}),"."]}),`
`,n.jsx(e.p,{children:"Als richtlijn geldt:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["gebruik een ",n.jsx(e.code,{children:"<button>"}),`-element wanneer het een actie is die op dezelfde pagina blijft
bvb. het sluiten van een modal, het gaan naar een volgende stap, het openklappen van een accordion, enzovoort.`]}),`
`,n.jsxs(e.li,{children:["gebruik een ",n.jsx(e.code,{children:"<a>"}),"-element om te navigeren naar een andere pagina."]}),`
`]}),`
`,n.jsx(i,{of:p}),`
`,n.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,n.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-link",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Link"})})]})}function H(a={}){const{wrapper:e}={...x(),...a.components};return e?n.jsx(e,{...a,children:n.jsx($,{...a})}):$(a)}function U(a,e){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}M([R]);const F={id:"components-atom-link",title:"Components - Atom/link",tags:["autodocs"],args:r,argTypes:D,parameters:{docs:{page:H}}},o=N(r,({href:a,bold:e,small:h,large:y,error:v,external:S,buttonAsLink:L,icon:A,iconPlacement:j,defaultSlot:T})=>I`
            <vl-link
                href=${a}
                ?bold=${e}
                ?small=${h}
                ?large=${y}
                ?error=${v}
                ?external=${S}
                ?button-as-link=${L}
                icon=${A}
                icon-placement=${j}
                >${C(T)}</vl-link
            >
        `),s=o.bind({});s.storyName="vl-link - default";s.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen"};const c=o.bind({});c.storyName="vl-link - bold";c.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",bold:!0};const d=o.bind({});d.storyName="vl-link - small";d.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",small:!0};const m=o.bind({});m.storyName="vl-link - large";m.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",large:!0};const u=o.bind({});u.storyName="vl-link - error";u.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",error:!0};const b=o.bind({});b.storyName="vl-link - external";b.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",external:!0};const k=o.bind({});k.storyName="vl-link - icon";k.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",icon:"arrow-right-fat",iconPlacement:"before"};const f=o.bind({});f.storyName="vl-link - icon only";f.args={href:"https://www.vlaanderen.be",icon:"arrow-right-fat"};const p=o.bind({});p.storyName="vl-link - button as link";p.args={defaultSlot:"Annuleren",buttonAsLink:!0,label:"annuleer inschrijving"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  buttonAsLink,
  icon,
  iconPlacement,
  defaultSlot
}) => html\`
            <vl-link
                href=\${href}
                ?bold=\${bold}
                ?small=\${small}
                ?large=\${large}
                ?error=\${error}
                ?external=\${external}
                ?button-as-link=\${buttonAsLink}
                icon=\${icon}
                icon-placement=\${iconPlacement}
                >\${unsafeHTML(defaultSlot)}</vl-link
            >
        \`)`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  buttonAsLink,
  icon,
  iconPlacement,
  defaultSlot
}) => html\`
            <vl-link
                href=\${href}
                ?bold=\${bold}
                ?small=\${small}
                ?large=\${large}
                ?error=\${error}
                ?external=\${external}
                ?button-as-link=\${buttonAsLink}
                icon=\${icon}
                icon-placement=\${iconPlacement}
                >\${unsafeHTML(defaultSlot)}</vl-link
            >
        \`)`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  buttonAsLink,
  icon,
  iconPlacement,
  defaultSlot
}) => html\`
            <vl-link
                href=\${href}
                ?bold=\${bold}
                ?small=\${small}
                ?large=\${large}
                ?error=\${error}
                ?external=\${external}
                ?button-as-link=\${buttonAsLink}
                icon=\${icon}
                icon-placement=\${iconPlacement}
                >\${unsafeHTML(defaultSlot)}</vl-link
            >
        \`)`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  buttonAsLink,
  icon,
  iconPlacement,
  defaultSlot
}) => html\`
            <vl-link
                href=\${href}
                ?bold=\${bold}
                ?small=\${small}
                ?large=\${large}
                ?error=\${error}
                ?external=\${external}
                ?button-as-link=\${buttonAsLink}
                icon=\${icon}
                icon-placement=\${iconPlacement}
                >\${unsafeHTML(defaultSlot)}</vl-link
            >
        \`)`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  buttonAsLink,
  icon,
  iconPlacement,
  defaultSlot
}) => html\`
            <vl-link
                href=\${href}
                ?bold=\${bold}
                ?small=\${small}
                ?large=\${large}
                ?error=\${error}
                ?external=\${external}
                ?button-as-link=\${buttonAsLink}
                icon=\${icon}
                icon-placement=\${iconPlacement}
                >\${unsafeHTML(defaultSlot)}</vl-link
            >
        \`)`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  buttonAsLink,
  icon,
  iconPlacement,
  defaultSlot
}) => html\`
            <vl-link
                href=\${href}
                ?bold=\${bold}
                ?small=\${small}
                ?large=\${large}
                ?error=\${error}
                ?external=\${external}
                ?button-as-link=\${buttonAsLink}
                icon=\${icon}
                icon-placement=\${iconPlacement}
                >\${unsafeHTML(defaultSlot)}</vl-link
            >
        \`)`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  buttonAsLink,
  icon,
  iconPlacement,
  defaultSlot
}) => html\`
            <vl-link
                href=\${href}
                ?bold=\${bold}
                ?small=\${small}
                ?large=\${large}
                ?error=\${error}
                ?external=\${external}
                ?button-as-link=\${buttonAsLink}
                icon=\${icon}
                icon-placement=\${iconPlacement}
                >\${unsafeHTML(defaultSlot)}</vl-link
            >
        \`)`,...k.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  buttonAsLink,
  icon,
  iconPlacement,
  defaultSlot
}) => html\`
            <vl-link
                href=\${href}
                ?bold=\${bold}
                ?small=\${small}
                ?large=\${large}
                ?error=\${error}
                ?external=\${external}
                ?button-as-link=\${buttonAsLink}
                icon=\${icon}
                icon-placement=\${iconPlacement}
                >\${unsafeHTML(defaultSlot)}</vl-link
            >
        \`)`,...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  buttonAsLink,
  icon,
  iconPlacement,
  defaultSlot
}) => html\`
            <vl-link
                href=\${href}
                ?bold=\${bold}
                ?small=\${small}
                ?large=\${large}
                ?error=\${error}
                ?external=\${external}
                ?button-as-link=\${buttonAsLink}
                icon=\${icon}
                icon-placement=\${iconPlacement}
                >\${unsafeHTML(defaultSlot)}</vl-link
            >
        \`)`,...p.parameters?.docs?.source}}};const W=["LinkDefault","LinkBold","LinkSmall","LinkLarge","LinkError","LinkExternal","LinkIcon","LinkIconOnly","ButtonStyledAsLink"];export{p as ButtonStyledAsLink,c as LinkBold,s as LinkDefault,u as LinkError,b as LinkExternal,k as LinkIcon,f as LinkIconOnly,m as LinkLarge,d as LinkSmall,W as __namedExportsOrder,F as default};
