import{Z as a,_ as t,bG as D,X as I,a1 as x,a2 as N,W as P,bF as v,u as j,j as e,C as i,b8 as R,s as M,x as z,r as G,bH as U}from"./iframe-DynOw9qF.js";import{o as H}from"./unsafe-html-CPadS5Zd.js";import"./preload-helper-D9Z9MdNV.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,l={...I,...D,defaultSlot:"",onVlClick:_("vl-click")},W={...P,href:{name:"href",description:"De url waar de link naar verwijst.<br/>Werkt niet in combinatie met `button-as-link`-attribuut.",table:{type:{summary:t.STRING},category:a.ATTRIBUTES,defaultValue:{summary:l.href}}},label:{name:"label",description:'Vult het aria-label attribuut van de link in. Geef een duidelijke omschrijving mee van waar de link naartoe leidt. bv "Ga naar Vlaanderen.be (opent in een nieuw venster)',table:{type:{summary:t.STRING},category:a.ATTRIBUTES,defaultValue:{summary:l.label}}},bold:{name:"bold",description:"Beeldt de tekst van de link vet af.",table:{type:{summary:t.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(l.bold)}}},small:{name:"small",description:"Beeldt de tekst van de link klein af.",table:{type:{summary:t.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(l.small)}}},large:{name:"large",description:"Beeldt de tekst van de link groot af.",table:{type:{summary:t.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(l.large)}}},error:{name:"error",description:"Beeldt de link af in een error state.",table:{type:{summary:t.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(l.error)}}},download:{name:"download",description:"Duidt aan dat de link een download is in plaats van een navigatie.<br>Optioneel kan een bestandsnaam als waarde meegegeven worden, zonder waarde kiest de browser de bestandsnaam.<br>Werkt enkel voor same-origin URLs (browser-beperking).<br>Werkt niet in combinatie met `button-as-link`-attribuut.",table:{type:{summary:t.STRING},category:a.ATTRIBUTES,defaultValue:{summary:String(l.download)}}},external:{name:"external",description:"Opent de link in een nieuw tabblad.<br/>Werkt niet in combinatie met `button-as-link`-attribuut.",table:{type:{summary:t.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(l.external)}}},icon:{name:"icon",description:"Beeldt een icoon af in de link.<br/>Standaard wordt dit icoon voor de tekst afgebeeld.",table:{type:{summary:t.STRING},category:a.ATTRIBUTES,defaultValue:{summary:l.icon}}},iconPlacement:{name:"icon-placement",description:"De positie van het icoon ten opzichte van de tekst.<br>Voegt margin toe tussen het icoon en de tekst.",control:{type:x.SELECT},options:["",...Object.values(v)],table:{type:{summary:N(Object.values(v))},category:a.ATTRIBUTES,defaultArgs:{summary:l.iconPlacement}}},buttonAsLink:{name:"button-as-link",description:"Maakt van de link een button maar behoudt de link-stijl.",table:{type:{summary:t.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(l.buttonAsLink)}}},type:{name:"type",description:"Het type van de button.<br/>Werkt enkel in combinatie met het `button-as-link`-attribuut.",control:{type:x.SELECT},options:["button","submit","reset"],table:{type:{summary:`${t.STRING}: 'button' | 'submit' | 'reset'`},category:a.ATTRIBUTES,defaultValue:{summary:l.type}}},defaultSlot:{name:"[default]",description:"De content van de link.",table:{type:{summary:t.HTML},category:a.SLOTS,defaultValue:{summary:l.defaultSlot}}},onVlClick:{name:"vl-click",description:"Event dat afgevuurd wordt bij het klikken op de link.",table:{category:a.EVENTS}}};function $(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...j(),...r.components},{FluxComponentMetaData:f}=n;return f||X("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"link",children:"Link"}),`
`,e.jsx(f,{id:"components-atom-link"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"link"})," component om een link af te beelden op een pagina.",e.jsx("br",{})]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlLinkComponent } from '@domg-wc/components/atom';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-link></vl-link>
`})}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(R,{of:d}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"bold",children:"Bold"}),`
`,e.jsx(i,{of:s}),`
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
`,e.jsx(i,{of:k}),`
`,e.jsx(n.h3,{id:"download",children:"Download"}),`
`,e.jsxs(n.p,{children:["Wijst de link naar een bestand, gebruik dan het ",e.jsx(n.code,{children:"download"}),` attribuut om aan te geven dat de browser het bestand
moet downloaden in plaats van ernaar te navigeren. Geef je een waarde mee, dan wordt die gebruikt als suggestie voor de
bestandsnaam; zonder waarde kiest de browser zelf een bestandsnaam.`]}),`
`,e.jsx(n.p,{children:"Beperkingen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["het ",e.jsx(n.code,{children:"download"})," attribuut werkt enkel voor same-origin URLs (en ",e.jsx(n.code,{children:"data:"})," of ",e.jsx(n.code,{children:"blob:"}),` URLs), dit is een
browser-beperking van het `,e.jsxs(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/download",rel:"nofollow",children:["native anchor ",e.jsx(n.code,{children:"download"})," attribuut"]})]}),`
`,e.jsxs(n.li,{children:["het attribuut werkt niet in combinatie met ",e.jsx(n.code,{children:"button-as-link"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Tip: maak in de zichtbare tekst of het ",e.jsx(n.code,{children:"label"}),` attribuut duidelijk dat het om een download gaat, zodat ook
screen-reader gebruikers dit weten (bv. "Download verslag.pdf" i.p.v. "Verslag"). Een anchor met het `,e.jsx(n.code,{children:"download"}),`
attribuut wordt nog steeds aangekondigd als een gewone link.`]}),`
`,e.jsx(i,{of:h}),`
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
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"events",children:"Events"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"vl-link"})," dispatcht bij elke klik een custom ",e.jsx(n.code,{children:"vl-click"})," event (",e.jsx(n.code,{children:"bubbles: true, composed: true"}),`), zodat het event de
Shadow DOM boundary overschrijdt en door parent-elementen kan worden opgevangen.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-link href="https://www.vlaanderen.be">Vlaanderen</vl-link>
<script>
  document.querySelector('vl-link').addEventListener('vl-click', () => {
    console.log('link geklikt');
  });
<\/script>
`})}),`
`,e.jsxs(n.p,{children:["Het native ",e.jsx(n.code,{children:"click"}),` event blijft ook werken — beide zijn geldig. Kies één van beide en gebruik ze niet gelijktijdig op
hetzelfde element om dubbele callbacks te vermijden.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Relatie met ",e.jsx(n.code,{children:"vl-button"}),":"]})," ",e.jsx(n.code,{children:"vl-button"})," dispatcht ",e.jsx(n.code,{children:"vl-click"}),` alleen als de knop niet disabled of in laadstatus is.
`,e.jsx(n.code,{children:"vl-link"})," heeft (nog) geen disabled-state, dus ",e.jsx(n.code,{children:"vl-click"}),` wordt altijd gedispatcht. De conventie is consistent: alle
interactieve flux-atoms dispatchen `,e.jsx(n.code,{children:"vl-<actie>"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsx(n.p,{children:`Zorg er steeds voor dat de link een duidelijke en beknopte tekstuele beschrijving heeft van de actie die uitgevoerd
wordt bij het klikken op de link. Dit is belangrijk voor alle gebruikers, maar vooral voor gebruikers die schermlezers
gebruiken.`}),`
`,e.jsxs(n.p,{children:[`Zorg er bij externe links voor dat gebruikers weten dat de link in een nieuw venster opent. Dit kan je doen adhv het
`,e.jsx(n.code,{children:"external"})," attribuut en door dit expliciet te vermelden in de linktekst of door het ",e.jsx(n.code,{children:"label"}),` attribuut te gebruiken om
een beschrijvende `,e.jsx(n.code,{children:"aria-label"})," toe te voegen aan de link. Indien ",e.jsx(n.code,{children:"label"}),` gebruikt wordt, is dit de enige linktekst die
door schermlezers wordt voorgelezen. Dus neem ook de zichtbare linktekst hierin op.`]}),`
`,e.jsxs(n.p,{children:["Indien de link enkel een icoon bevat, is het verplicht om het ",e.jsx(n.code,{children:"label"}),` attribuut te gebruiken zodat een beschrijvende
`,e.jsx(n.code,{children:"aria-label"})," wordt toegevoegd aan de link."]}),`
`,e.jsxs(n.p,{children:["Indien de link een dropdown menu of dialog opent, gebruik dan het ",e.jsx(n.code,{children:"aria-haspopup"}),` attribuut met de juiste waarde
(`,e.jsx(n.code,{children:"true"}),", ",e.jsx(n.code,{children:"menu"}),", ",e.jsx(n.code,{children:"listbox"}),", ",e.jsx(n.code,{children:"tree"}),", ",e.jsx(n.code,{children:"grid"}),", ",e.jsx(n.code,{children:"dialog"}),`) om aan te geven dat er een popup aanwezig is. Dit helpt
schermlezers om de gebruiker correct te informeren over de aanwezigheid van een popup. `,e.jsx(n.code,{children:"aria-haspopup"}),` wordt doorgegeven
aan de onderliggende link.`]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/link",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Link"})})]})}function F(r={}){const{wrapper:n}={...j(),...r.components};return n?e.jsx(n,{...r,children:e.jsx($,{...r})}):$(r)}function X(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}G([U]);const Y={id:"components-atom-link",title:"Components - Atom/link",tags:["autodocs"],args:l,argTypes:W,parameters:{docs:{page:F}}},o=M(l,({href:r,bold:n,small:f,large:w,error:y,external:S,download:L,buttonAsLink:T,type:A,icon:V,iconPlacement:E,defaultSlot:C,label:O,onVlClick:B})=>z`
        <vl-link
            href=${r}
            ?bold=${n}
            ?small=${f}
            ?large=${w}
            ?error=${y}
            ?external=${S}
            download=${L}
            ?button-as-link=${T}
            type=${A}
            icon=${V}
            icon-placement=${E}
            label=${O}
            @vl-click=${B}
            >${H(C)}</vl-link
        >
    `),d=o.bind({});d.storyName="vl-link - default";d.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",label:"Ga naar Vlaanderen.be"};const s=o.bind({});s.storyName="vl-link - bold";s.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",bold:!0,label:"Ga naar Vlaanderen.be"};const c=o.bind({});c.storyName="vl-link - small";c.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",small:!0,label:"Ga naar Vlaanderen.be"};const u=o.bind({});u.storyName="vl-link - large";u.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",large:!0,label:"Ga naar Vlaanderen.be"};const m=o.bind({});m.storyName="vl-link - error";m.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",error:!0,label:"Ga naar Vlaanderen.be"};const b=o.bind({});b.storyName="vl-link - external";b.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",external:!0,label:"Ga naar Vlaanderen.be (opent in een nieuw venster)"};const k=o.bind({});k.storyName="vl-link - icon";k.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",icon:"arrow-right-fat",iconPlacement:"before",label:"Ga naar Vlaanderen.be"};const g=o.bind({});g.storyName="vl-link - icon only";g.args={href:"https://www.vlaanderen.be",icon:"arrow-right-fat",label:"Ga naar Vlaanderen.be"};const h=o.bind({});h.storyName="vl-link - download";h.args={href:"data:text/plain;charset=utf-8,FLUX-710 link download demo",defaultSlot:"Download het verslag",download:"verslag.txt",icon:"file-download",iconPlacement:"before",label:"Download verslag.txt"};const p=o.bind({});p.storyName="vl-link - button as link";p.args={defaultSlot:"Annuleren",buttonAsLink:!0,label:"Annuleer inschrijving"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  download,
  buttonAsLink,
  type,
  icon,
  iconPlacement,
  defaultSlot,
  label,
  onVlClick
}) => html\`
        <vl-link
            href=\${href}
            ?bold=\${bold}
            ?small=\${small}
            ?large=\${large}
            ?error=\${error}
            ?external=\${external}
            download=\${download}
            ?button-as-link=\${buttonAsLink}
            type=\${type}
            icon=\${icon}
            icon-placement=\${iconPlacement}
            label=\${label}
            @vl-click=\${onVlClick}
            >\${unsafeHTML(defaultSlot)}</vl-link
        >
    \`)`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  download,
  buttonAsLink,
  type,
  icon,
  iconPlacement,
  defaultSlot,
  label,
  onVlClick
}) => html\`
        <vl-link
            href=\${href}
            ?bold=\${bold}
            ?small=\${small}
            ?large=\${large}
            ?error=\${error}
            ?external=\${external}
            download=\${download}
            ?button-as-link=\${buttonAsLink}
            type=\${type}
            icon=\${icon}
            icon-placement=\${iconPlacement}
            label=\${label}
            @vl-click=\${onVlClick}
            >\${unsafeHTML(defaultSlot)}</vl-link
        >
    \`)`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  download,
  buttonAsLink,
  type,
  icon,
  iconPlacement,
  defaultSlot,
  label,
  onVlClick
}) => html\`
        <vl-link
            href=\${href}
            ?bold=\${bold}
            ?small=\${small}
            ?large=\${large}
            ?error=\${error}
            ?external=\${external}
            download=\${download}
            ?button-as-link=\${buttonAsLink}
            type=\${type}
            icon=\${icon}
            icon-placement=\${iconPlacement}
            label=\${label}
            @vl-click=\${onVlClick}
            >\${unsafeHTML(defaultSlot)}</vl-link
        >
    \`)`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  download,
  buttonAsLink,
  type,
  icon,
  iconPlacement,
  defaultSlot,
  label,
  onVlClick
}) => html\`
        <vl-link
            href=\${href}
            ?bold=\${bold}
            ?small=\${small}
            ?large=\${large}
            ?error=\${error}
            ?external=\${external}
            download=\${download}
            ?button-as-link=\${buttonAsLink}
            type=\${type}
            icon=\${icon}
            icon-placement=\${iconPlacement}
            label=\${label}
            @vl-click=\${onVlClick}
            >\${unsafeHTML(defaultSlot)}</vl-link
        >
    \`)`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  download,
  buttonAsLink,
  type,
  icon,
  iconPlacement,
  defaultSlot,
  label,
  onVlClick
}) => html\`
        <vl-link
            href=\${href}
            ?bold=\${bold}
            ?small=\${small}
            ?large=\${large}
            ?error=\${error}
            ?external=\${external}
            download=\${download}
            ?button-as-link=\${buttonAsLink}
            type=\${type}
            icon=\${icon}
            icon-placement=\${iconPlacement}
            label=\${label}
            @vl-click=\${onVlClick}
            >\${unsafeHTML(defaultSlot)}</vl-link
        >
    \`)`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  download,
  buttonAsLink,
  type,
  icon,
  iconPlacement,
  defaultSlot,
  label,
  onVlClick
}) => html\`
        <vl-link
            href=\${href}
            ?bold=\${bold}
            ?small=\${small}
            ?large=\${large}
            ?error=\${error}
            ?external=\${external}
            download=\${download}
            ?button-as-link=\${buttonAsLink}
            type=\${type}
            icon=\${icon}
            icon-placement=\${iconPlacement}
            label=\${label}
            @vl-click=\${onVlClick}
            >\${unsafeHTML(defaultSlot)}</vl-link
        >
    \`)`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  download,
  buttonAsLink,
  type,
  icon,
  iconPlacement,
  defaultSlot,
  label,
  onVlClick
}) => html\`
        <vl-link
            href=\${href}
            ?bold=\${bold}
            ?small=\${small}
            ?large=\${large}
            ?error=\${error}
            ?external=\${external}
            download=\${download}
            ?button-as-link=\${buttonAsLink}
            type=\${type}
            icon=\${icon}
            icon-placement=\${iconPlacement}
            label=\${label}
            @vl-click=\${onVlClick}
            >\${unsafeHTML(defaultSlot)}</vl-link
        >
    \`)`,...k.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  download,
  buttonAsLink,
  type,
  icon,
  iconPlacement,
  defaultSlot,
  label,
  onVlClick
}) => html\`
        <vl-link
            href=\${href}
            ?bold=\${bold}
            ?small=\${small}
            ?large=\${large}
            ?error=\${error}
            ?external=\${external}
            download=\${download}
            ?button-as-link=\${buttonAsLink}
            type=\${type}
            icon=\${icon}
            icon-placement=\${iconPlacement}
            label=\${label}
            @vl-click=\${onVlClick}
            >\${unsafeHTML(defaultSlot)}</vl-link
        >
    \`)`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  download,
  buttonAsLink,
  type,
  icon,
  iconPlacement,
  defaultSlot,
  label,
  onVlClick
}) => html\`
        <vl-link
            href=\${href}
            ?bold=\${bold}
            ?small=\${small}
            ?large=\${large}
            ?error=\${error}
            ?external=\${external}
            download=\${download}
            ?button-as-link=\${buttonAsLink}
            type=\${type}
            icon=\${icon}
            icon-placement=\${iconPlacement}
            label=\${label}
            @vl-click=\${onVlClick}
            >\${unsafeHTML(defaultSlot)}</vl-link
        >
    \`)`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(linkArgs, ({
  href,
  bold,
  small,
  large,
  error,
  external,
  download,
  buttonAsLink,
  type,
  icon,
  iconPlacement,
  defaultSlot,
  label,
  onVlClick
}) => html\`
        <vl-link
            href=\${href}
            ?bold=\${bold}
            ?small=\${small}
            ?large=\${large}
            ?error=\${error}
            ?external=\${external}
            download=\${download}
            ?button-as-link=\${buttonAsLink}
            type=\${type}
            icon=\${icon}
            icon-placement=\${iconPlacement}
            label=\${label}
            @vl-click=\${onVlClick}
            >\${unsafeHTML(defaultSlot)}</vl-link
        >
    \`)`,...p.parameters?.docs?.source}}};const J=["LinkDefault","LinkBold","LinkSmall","LinkLarge","LinkError","LinkExternal","LinkIcon","LinkIconOnly","LinkDownload","ButtonStyledAsLink"];export{p as ButtonStyledAsLink,s as LinkBold,d as LinkDefault,h as LinkDownload,m as LinkError,b as LinkExternal,k as LinkIcon,g as LinkIconOnly,u as LinkLarge,c as LinkSmall,J as __namedExportsOrder,Y as default};
