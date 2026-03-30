import{Y as a,Z as r,bC as B,W as I,a0 as f,a1 as O,U as N,bB as x,u as y,j as e,C as i,bb as P,s as D,x as C,r as R,bD as M}from"./iframe-BJy2lIHs.js";import{o as G}from"./unsafe-html-CtiZpSxA.js";import"./preload-helper-D9Z9MdNV.js";const l={...I,...B,defaultSlot:""},z={...N,href:{name:"href",description:"De url waar de link naar verwijst.<br/>Werkt niet in combinatie met `button-as-link`-attribuut.",table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:l.href}}},label:{name:"label",description:'Vult het aria-label attribuut van de link in. Geef een duidelijke omschrijving mee van waar de link naartoe leidt. bv "Ga naar Vlaanderen.be (opent in een nieuw venster)',table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:l.label}}},bold:{name:"bold",description:"Beeldt de tekst van de link vet af.",table:{type:{summary:r.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(l.bold)}}},small:{name:"small",description:"Beeldt de tekst van de link klein af.",table:{type:{summary:r.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(l.small)}}},large:{name:"large",description:"Beeldt de tekst van de link groot af.",table:{type:{summary:r.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(l.large)}}},error:{name:"error",description:"Beeldt de link af in een error state.",table:{type:{summary:r.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(l.error)}}},external:{name:"external",description:"Opent de link in een nieuw tabblad.<br/>Werkt niet in combinatie met `button-as-link`-attribuut.",table:{type:{summary:r.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(l.external)}}},icon:{name:"icon",description:"Beeldt een icoon af in de link.<br/>Standaard wordt dit icoon voor de tekst afgebeeld.",table:{type:{summary:r.STRING},category:a.ATTRIBUTES,defaultValue:{summary:l.icon}}},iconPlacement:{name:"icon-placement",description:"De positie van het icoon ten opzichte van de tekst.<br>Voegt margin toe tussen het icoon en de tekst.",control:{type:f.SELECT},options:["",...Object.values(x)],table:{type:{summary:O(Object.values(x))},category:a.ATTRIBUTES,defaultArgs:{summary:l.iconPlacement}}},buttonAsLink:{name:"button-as-link",description:"Maakt van de link een button maar behoudt de link-stijl.",table:{type:{summary:r.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(l.buttonAsLink)}}},type:{name:"type",description:"Het type van de button.<br/>Werkt enkel in combinatie met het `button-as-link`-attribuut.",control:{type:f.SELECT},options:["button","submit","reset"],table:{type:{summary:`${r.STRING}: 'button' | 'submit' | 'reset'`},category:a.ATTRIBUTES,defaultValue:{summary:l.type}}},defaultSlot:{name:"[default]",description:"De content van de link.",table:{type:{summary:r.HTML},category:a.SLOTS,defaultValue:{summary:l.defaultSlot}}}};function $(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...y(),...t.components},{FluxComponentMetaData:g}=n;return g||H("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"link",children:"Link"}),`
`,e.jsx(g,{id:"components-atom-link"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"link"})," component om een link af te beelden op een pagina.",e.jsx("br",{})]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlLinkComponent } from '@domg-wc/components/atom';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-link></vl-link>
`})}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(P,{of:s}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"bold",children:"Bold"}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h3,{id:"small",children:"Small"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"large",children:"Large"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h3,{id:"error",children:"Error"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"external",children:"External"}),`
`,e.jsxs(n.p,{children:["Vul steeds het ",e.jsx(n.code,{children:"label"})," attribuut in om duidelijk te maken dat de link in een nieuw venster opent."]}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(n.h3,{id:"icon",children:"Icon"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"button-als-link",children:"Button als link"}),`
`,e.jsxs(n.p,{children:["Soms wil je een button stylen als een link. Een specifieke use-case is bvb. om van ",e.jsx(n.code,{children:"Annuleren"}),` een link te maken
zodat die visueel minder prominent is dan de knop `,e.jsx(n.code,{children:"Opslaan"}),"."]}),`
`,e.jsx(n.p,{children:"Als richtlijn geldt:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["gebruik een ",e.jsx(n.code,{children:"<button>"}),`-element wanneer het een actie is die op dezelfde pagina blijft
bvb. het sluiten van een modal, het gaan naar een volgende stap, het openklappen van een accordion, enzovoort.`]}),`
`,e.jsxs(n.li,{children:["gebruik een ",e.jsx(n.code,{children:"<a>"}),"-element om te navigeren naar een andere pagina."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Via het ",e.jsx(n.code,{children:"type"}),"-attribuut kan je het type van de onderliggende ",e.jsx(n.code,{children:"<button>"})," instellen. De standaardwaarde is ",e.jsx(n.code,{children:"button"}),"."]}),`
`,e.jsx(i,{of:k}),`
`,e.jsx(n.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsx(n.p,{children:"Zorg er steeds voor dat de link een duidelijke en beknopte tekstuele beschrijving heeft van de actie die uitgevoerd wordt bij het klikken op de link. Dit is belangrijk voor alle gebruikers, maar vooral voor gebruikers die schermlezers gebruiken."}),`
`,e.jsxs(n.p,{children:["Zorg er bij externe links voor dat gebruikers weten dat de link in een nieuw venster opent. Dit kan je doen adhv het ",e.jsx(n.code,{children:"external"})," attribuut en door dit expliciet te vermelden in de linktekst of door het ",e.jsx(n.code,{children:"label"})," attribuut te gebruiken om een beschrijvende ",e.jsx(n.code,{children:"aria-label"})," toe te voegen aan de link. Indien ",e.jsx(n.code,{children:"label"})," gebruikt wordt, is dit de enige linktekst die door schermlezers wordt voorgelezen. Dus neem ook de zichtbare linktekst hierin op."]}),`
`,e.jsxs(n.p,{children:["Indien de link enkel een icoon bevat, is het verplicht om het ",e.jsx(n.code,{children:"label"})," attribuut te gebruiken zodat een beschrijvende ",e.jsx(n.code,{children:"aria-label"})," wordt toegevoegd aan de link."]}),`
`,e.jsxs(n.p,{children:["Indien de link een dropdown menu of dialog opent, gebruik dan het ",e.jsx(n.code,{children:"aria-haspopup"})," attribuut met de juiste waarde (",e.jsx(n.code,{children:"true"}),", ",e.jsx(n.code,{children:"menu"}),", ",e.jsx(n.code,{children:"listbox"}),", ",e.jsx(n.code,{children:"tree"}),", ",e.jsx(n.code,{children:"grid"}),", ",e.jsx(n.code,{children:"dialog"}),") om aan te geven dat er een popup aanwezig is. Dit helpt schermlezers om de gebruiker correct te informeren over de aanwezigheid van een popup. ",e.jsx(n.code,{children:"aria-haspopup"})," wordt doorgegeven aan de onderliggende link."]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-link",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Link"})})]})}function U(t={}){const{wrapper:n}={...y(),...t.components};return n?e.jsx(n,{...t,children:e.jsx($,{...t})}):$(t)}function H(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}R([M]);const X={id:"components-atom-link",title:"Components - Atom/link",tags:["autodocs"],args:l,argTypes:z,parameters:{docs:{page:U}}},o=D(l,({href:t,bold:n,small:g,large:v,error:j,external:S,buttonAsLink:L,type:A,icon:T,iconPlacement:w,defaultSlot:E,label:V})=>C`
            <vl-link
                href=${t}
                ?bold=${n}
                ?small=${g}
                ?large=${v}
                ?error=${j}
                ?external=${S}
                ?button-as-link=${L}
                type=${A}
                icon=${T}
                icon-placement=${w}
                label=${V}
                >${G(E)}</vl-link
            >
        `),s=o.bind({});s.storyName="vl-link - default";s.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",label:"Ga naar Vlaanderen.be"};const d=o.bind({});d.storyName="vl-link - bold";d.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",bold:!0,label:"Ga naar Vlaanderen.be"};const c=o.bind({});c.storyName="vl-link - small";c.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",small:!0,label:"Ga naar Vlaanderen.be"};const u=o.bind({});u.storyName="vl-link - large";u.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",large:!0,label:"Ga naar Vlaanderen.be"};const m=o.bind({});m.storyName="vl-link - error";m.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",error:!0,label:"Ga naar Vlaanderen.be"};const b=o.bind({});b.storyName="vl-link - external";b.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",external:!0,label:"Ga naar Vlaanderen.be (opent in een nieuw venster)"};const p=o.bind({});p.storyName="vl-link - icon";p.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",icon:"arrow-right-fat",iconPlacement:"before",label:"Ga naar Vlaanderen.be"};const h=o.bind({});h.storyName="vl-link - icon only";h.args={href:"https://www.vlaanderen.be",icon:"arrow-right-fat",label:"Ga naar Vlaanderen.be"};const k=o.bind({});k.storyName="vl-link - button as link";k.args={defaultSlot:"Annuleren",buttonAsLink:!0,label:"Annuleer inschrijving"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  buttonAsLink,
  type,
  icon,
  iconPlacement,
  defaultSlot,
  label
}) => html\`
            <vl-link
                href=\${href}
                ?bold=\${bold}
                ?small=\${small}
                ?large=\${large}
                ?error=\${error}
                ?external=\${external}
                ?button-as-link=\${buttonAsLink}
                type=\${type}
                icon=\${icon}
                icon-placement=\${iconPlacement}
                label=\${label}
                >\${unsafeHTML(defaultSlot)}</vl-link
            >
        \`)`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  buttonAsLink,
  type,
  icon,
  iconPlacement,
  defaultSlot,
  label
}) => html\`
            <vl-link
                href=\${href}
                ?bold=\${bold}
                ?small=\${small}
                ?large=\${large}
                ?error=\${error}
                ?external=\${external}
                ?button-as-link=\${buttonAsLink}
                type=\${type}
                icon=\${icon}
                icon-placement=\${iconPlacement}
                label=\${label}
                >\${unsafeHTML(defaultSlot)}</vl-link
            >
        \`)`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  buttonAsLink,
  type,
  icon,
  iconPlacement,
  defaultSlot,
  label
}) => html\`
            <vl-link
                href=\${href}
                ?bold=\${bold}
                ?small=\${small}
                ?large=\${large}
                ?error=\${error}
                ?external=\${external}
                ?button-as-link=\${buttonAsLink}
                type=\${type}
                icon=\${icon}
                icon-placement=\${iconPlacement}
                label=\${label}
                >\${unsafeHTML(defaultSlot)}</vl-link
            >
        \`)`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  buttonAsLink,
  type,
  icon,
  iconPlacement,
  defaultSlot,
  label
}) => html\`
            <vl-link
                href=\${href}
                ?bold=\${bold}
                ?small=\${small}
                ?large=\${large}
                ?error=\${error}
                ?external=\${external}
                ?button-as-link=\${buttonAsLink}
                type=\${type}
                icon=\${icon}
                icon-placement=\${iconPlacement}
                label=\${label}
                >\${unsafeHTML(defaultSlot)}</vl-link
            >
        \`)`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  buttonAsLink,
  type,
  icon,
  iconPlacement,
  defaultSlot,
  label
}) => html\`
            <vl-link
                href=\${href}
                ?bold=\${bold}
                ?small=\${small}
                ?large=\${large}
                ?error=\${error}
                ?external=\${external}
                ?button-as-link=\${buttonAsLink}
                type=\${type}
                icon=\${icon}
                icon-placement=\${iconPlacement}
                label=\${label}
                >\${unsafeHTML(defaultSlot)}</vl-link
            >
        \`)`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  buttonAsLink,
  type,
  icon,
  iconPlacement,
  defaultSlot,
  label
}) => html\`
            <vl-link
                href=\${href}
                ?bold=\${bold}
                ?small=\${small}
                ?large=\${large}
                ?error=\${error}
                ?external=\${external}
                ?button-as-link=\${buttonAsLink}
                type=\${type}
                icon=\${icon}
                icon-placement=\${iconPlacement}
                label=\${label}
                >\${unsafeHTML(defaultSlot)}</vl-link
            >
        \`)`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  buttonAsLink,
  type,
  icon,
  iconPlacement,
  defaultSlot,
  label
}) => html\`
            <vl-link
                href=\${href}
                ?bold=\${bold}
                ?small=\${small}
                ?large=\${large}
                ?error=\${error}
                ?external=\${external}
                ?button-as-link=\${buttonAsLink}
                type=\${type}
                icon=\${icon}
                icon-placement=\${iconPlacement}
                label=\${label}
                >\${unsafeHTML(defaultSlot)}</vl-link
            >
        \`)`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  buttonAsLink,
  type,
  icon,
  iconPlacement,
  defaultSlot,
  label
}) => html\`
            <vl-link
                href=\${href}
                ?bold=\${bold}
                ?small=\${small}
                ?large=\${large}
                ?error=\${error}
                ?external=\${external}
                ?button-as-link=\${buttonAsLink}
                type=\${type}
                icon=\${icon}
                icon-placement=\${iconPlacement}
                label=\${label}
                >\${unsafeHTML(defaultSlot)}</vl-link
            >
        \`)`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  buttonAsLink,
  type,
  icon,
  iconPlacement,
  defaultSlot,
  label
}) => html\`
            <vl-link
                href=\${href}
                ?bold=\${bold}
                ?small=\${small}
                ?large=\${large}
                ?error=\${error}
                ?external=\${external}
                ?button-as-link=\${buttonAsLink}
                type=\${type}
                icon=\${icon}
                icon-placement=\${iconPlacement}
                label=\${label}
                >\${unsafeHTML(defaultSlot)}</vl-link
            >
        \`)`,...k.parameters?.docs?.source}}};const Z=["LinkDefault","LinkBold","LinkSmall","LinkLarge","LinkError","LinkExternal","LinkIcon","LinkIconOnly","ButtonStyledAsLink"];export{k as ButtonStyledAsLink,d as LinkBold,s as LinkDefault,m as LinkError,b as LinkExternal,p as LinkIcon,h as LinkIconOnly,u as LinkLarge,c as LinkSmall,Z as __namedExportsOrder,X as default};
