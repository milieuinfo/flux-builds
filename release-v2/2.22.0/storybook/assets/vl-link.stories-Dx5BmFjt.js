import{Z as t,_ as r,bP as O,X as B,a1 as j,W as I,a2 as R,bO as x,u as $,j as e,C as a,b4 as P,s as D,b as M,r as H,bv as U}from"./iframe-ylVHDfb1.js";import{o as G}from"./unsafe-html--mv6C7rg.js";import"./preload-helper-PPVm8Dsz.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,l={...B,...O,defaultSlot:"",onVlClick:_("vl-click")},W={...I,href:{name:"href",description:"De url waar de link naar verwijst.<br/>Werkt niet in combinatie met `button-as-link`-attribuut.",table:{type:{summary:r.STRING},category:t.ATTRIBUTES,defaultValue:{summary:l.href}}},label:{name:"label",description:'Vult het aria-label attribuut van de link in en vervangt zo de volledige voorgelezen linktekst. Gebruik het enkel als de zichtbare tekst niet volstaat of als er geen zichtbare tekst is, bv. bij een link met enkel een icoon.<br/>Het label moet de zichtbare tekst bevatten, bij voorkeur vooraan (WCAG 2.5.3 Label in Name), bv. "Lees meer over toegankelijkheid" bij de zichtbare tekst "Lees meer".<br/>Bij een externe link wordt de automatische melding "(opent in een nieuw venster)" dan niet toegevoegd; neem die vermelding zelf op in het label.',table:{type:{summary:r.STRING},category:t.ATTRIBUTES,defaultValue:{summary:l.label}}},bold:{name:"bold",description:"Beeldt de tekst van de link vet af.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.bold)}}},small:{name:"small",description:"Beeldt de tekst van de link klein af.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.small)}}},large:{name:"large",description:"Beeldt de tekst van de link groot af.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.large)}}},error:{name:"error",description:"Beeldt de link af in een error state.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.error)}}},download:{name:"download",description:"Duidt aan dat de link een download is in plaats van een navigatie.<br>Optioneel kan een bestandsnaam als waarde meegegeven worden, zonder waarde kiest de browser de bestandsnaam.<br>Werkt enkel voor same-origin URLs (browser-beperking).<br>Werkt niet in combinatie met `button-as-link`-attribuut.",table:{type:{summary:r.STRING},category:t.ATTRIBUTES,defaultValue:{summary:String(l.download)}}},external:{name:"external",description:'Opent de link in een nieuw tabblad.<br/>Voegt voor schermlezers automatisch de visueel verborgen tekst "(opent in een nieuw venster)" toe, tenzij het `label`-attribuut gezet is.<br/>Werkt niet in combinatie met `button-as-link`-attribuut.',table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.external)}}},icon:{name:"icon",description:"Beeldt een icoon af in de link.<br/>Standaard wordt dit icoon voor de tekst afgebeeld.",table:{type:{summary:r.STRING},category:t.ATTRIBUTES,defaultValue:{summary:l.icon}}},iconPlacement:{name:"icon-placement",description:"De positie van het icoon ten opzichte van de tekst.<br>Voegt margin toe tussen het icoon en de tekst.",control:{type:j.SELECT},options:["",...Object.values(x)],table:{type:{summary:R(Object.values(x))},category:t.ATTRIBUTES,defaultArgs:{summary:l.iconPlacement}}},buttonAsLink:{name:"button-as-link",description:"Maakt van de link een button maar behoudt de link-stijl.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(l.buttonAsLink)}}},type:{name:"type",description:"Het type van de button.<br/>Werkt enkel in combinatie met het `button-as-link`-attribuut.",control:{type:j.SELECT},options:["button","submit","reset"],table:{type:{summary:`${r.STRING}: 'button' | 'submit' | 'reset'`},category:t.ATTRIBUTES,defaultValue:{summary:l.type}}},defaultSlot:{name:"[default]",description:"De content van de link.",table:{type:{summary:r.HTML},category:t.SLOTS,defaultValue:{summary:l.defaultSlot}}},onVlClick:{name:"vl-click",description:"Event dat afgevuurd wordt bij het klikken op de link.",table:{category:t.EVENTS}}};function f(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...$(),...o.components},{FluxComponentMetaData:v}=n;return v||X("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"link",children:"Link"}),`
`,e.jsx(v,{id:"components-atom-link"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"link"})," component om een link af te beelden op een pagina.",e.jsx("br",{})]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlLinkComponent } from '@domg-wc/components/atom';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-link></vl-link>
`})}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(P,{of:d}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"bold",children:"Bold"}),`
`,e.jsx(a,{of:s}),`
`,e.jsx(n.h3,{id:"small",children:"Small"}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(n.h3,{id:"large",children:"Large"}),`
`,e.jsx(a,{of:k}),`
`,e.jsx(n.h3,{id:"error",children:"Error"}),`
`,e.jsx(a,{of:u}),`
`,e.jsx(n.h3,{id:"external",children:"External"}),`
`,e.jsx(n.p,{children:"Een externe link opent in een nieuw tabblad en toont automatisch het external icoon na de linktekst."}),`
`,e.jsxs(n.p,{children:[`Voor schermlezers voegt de component automatisch de visueel verborgen tekst "(opent in een nieuw venster)" toe na de
linktekst. Je hoeft dit dus niet zelf te voorzien. Het external icoon zelf is decoratief (`,e.jsx(n.code,{children:"aria-hidden"}),`) en wordt niet
voorgelezen.`]}),`
`,e.jsxs(n.p,{children:["Gebruik je het ",e.jsx(n.code,{children:"label"}),` attribuut, dan vervangt dat de volledige voorgelezen linktekst en wordt de automatische melding
niet toegevoegd. Neem in dat geval zelf de vermelding op, na de zichtbare linktekst, bv.
`,e.jsx(n.code,{children:'label="Lees meer over toegankelijkheid (opent in een nieuw venster)"'}),' bij de zichtbare tekst "Lees meer".']}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(n.h3,{id:"icon",children:"Icon"}),`
`,e.jsx(a,{of:b}),`
`,e.jsx(n.h3,{id:"enkel-icoon",children:"Enkel icoon"}),`
`,e.jsxs(n.p,{children:["Een link met enkel een icoon heeft geen zichtbare tekst. Het ",e.jsx(n.code,{children:"label"}),` attribuut is hier verplicht: het is de enige naam
die schermlezers en spraakbesturing van de link kennen.`]}),`
`,e.jsxs(n.p,{children:[`Gebruik een link met enkel een icoon enkel om te navigeren. Voert het icoon een actie uit, zoals bewerken of
verwijderen, gebruik dan een `,e.jsx(n.a,{href:"/docs/components-atom-button--documentatie",children:"vl-button"}),` met enkel een icoon en het
`,e.jsx(n.code,{children:"ghost"})," attribuut, ook met een ",e.jsx(n.code,{children:"label"}),"."]}),`
`,e.jsx(a,{of:h}),`
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
`,e.jsx(a,{of:p}),`
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
`,e.jsx(a,{of:g}),`
`,e.jsx(n.h2,{id:"events",children:"Events"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"vl-link"})," dispatcht bij elke klik een custom ",e.jsx(n.code,{children:"vl-click"})," event (",e.jsx(n.code,{children:"bubbles: true, composed: true"}),`), zodat het event de
Shadow DOM boundary overschrijdt en door parent-elementen kan worden opgevangen.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-link href="#">Lees meer over dit onderwerp</vl-link>
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
`,e.jsxs(n.p,{children:["Bij externe links (het ",e.jsx(n.code,{children:"external"}),` attribuut) meldt de component zelf aan schermlezers dat de link in een nieuw venster
opent: na de linktekst wordt de visueel verborgen tekst "(opent in een nieuw venster)" voorgelezen. Je hoeft dit dus
niet zelf te voorzien in de linktekst of via het `,e.jsx(n.code,{children:"label"})," attribuut."]}),`
`,e.jsxs(n.p,{children:["Indien ",e.jsx(n.code,{children:"label"}),` gebruikt wordt, is dit de enige linktekst die door schermlezers wordt voorgelezen; de automatische
melding wordt dan niet toegevoegd. Neem in dat geval zowel de zichtbare linktekst als de vermelding "(opent in een
nieuw venster)" op in het label.`]}),`
`,e.jsxs(n.p,{children:["Gebruik ",e.jsx(n.code,{children:"label"}),` enkel als de zichtbare tekst niet volstaat of als er geen zichtbare tekst is. Heeft de link zichtbare
tekst, dan moet het label die tekst bevatten, bij voorkeur vooraan (WCAG 2.5.3 Label in Name). Gebruikers van
spraakbesturing activeren een link met de tekst die ze zien; ontbreekt die tekst in het label, dan vinden ze de link
niet.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Goed: ",e.jsx(n.code,{children:'<vl-link label="Lees meer over toegankelijkheid">Lees meer</vl-link>'}),", het label begint met de zichtbare tekst"]}),`
`,e.jsxs(n.li,{children:["Te vermijden: ",e.jsx(n.code,{children:'<vl-link label="Over toegankelijkheid: lees meer">Lees meer</vl-link>'}),`, de zichtbare tekst staat niet
vooraan`]}),`
`,e.jsxs(n.li,{children:["Fout: ",e.jsx(n.code,{children:'<vl-link label="Toegankelijkheidsverklaring">Lees meer</vl-link>'}),", de zichtbare tekst ontbreekt"]}),`
`,e.jsxs(n.li,{children:["Fout: ",e.jsx(n.code,{children:'<vl-link button-as-link label="Annuleer inschrijving">Annuleren</vl-link>'}),", de zichtbare tekst ontbreekt"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Indien de link enkel een icoon bevat, is het verplicht om het ",e.jsx(n.code,{children:"label"}),` attribuut te gebruiken zodat een beschrijvende
`,e.jsx(n.code,{children:"aria-label"})," wordt toegevoegd aan de link."]}),`
`,e.jsxs(n.p,{children:["Indien de link een dropdown menu of dialog opent, gebruik dan het ",e.jsx(n.code,{children:"aria-haspopup"}),` attribuut met de juiste waarde
(`,e.jsx(n.code,{children:"true"}),", ",e.jsx(n.code,{children:"menu"}),", ",e.jsx(n.code,{children:"listbox"}),", ",e.jsx(n.code,{children:"tree"}),", ",e.jsx(n.code,{children:"grid"}),", ",e.jsx(n.code,{children:"dialog"}),`) om aan te geven dat er een popup aanwezig is. Dit helpt
schermlezers om de gebruiker correct te informeren over de aanwezigheid van een popup. `,e.jsx(n.code,{children:"aria-haspopup"}),` wordt doorgegeven
aan de onderliggende link.`]}),`
`,e.jsxs(n.p,{children:[`Indien de link naar de huidige pagina of locatie verwijst, bijvoorbeeld in een navigatie of inhoudstafel, gebruik dan
het `,e.jsx(n.code,{children:"aria-current"})," attribuut met de juiste waarde (",e.jsx(n.code,{children:"page"}),", ",e.jsx(n.code,{children:"step"}),", ",e.jsx(n.code,{children:"location"}),", ",e.jsx(n.code,{children:"date"}),", ",e.jsx(n.code,{children:"time"}),", ",e.jsx(n.code,{children:"true"}),`). Zo meldt een
schermlezer welke link de huidige is. `,e.jsx(n.code,{children:"aria-current"}),` wordt doorgegeven aan de onderliggende link, ook als je het
attribuut na de eerste render zet, wijzigt of verwijdert. Een lege waarde wordt niet doorgegeven. In combinatie met
`,e.jsx(n.code,{children:"button-as-link"})," wordt ",e.jsx(n.code,{children:"aria-current"}),` doorgegeven aan de onderliggende button, maar het attribuut is vooral bedoeld
voor echte links.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-link href="/codes" aria-current="page">Codes</vl-link>
`})}),`
`,e.jsxs(n.p,{children:["Roep je ",e.jsx(n.code,{children:"focus()"})," aan op ",e.jsx(n.code,{children:"vl-link"}),", dan krijgt de onderliggende link (of de button bij ",e.jsx(n.code,{children:"button-as-link"}),`) de focus. Zo
kan je bv. de focus terugzetten op de link die een dialog opende, nadat die dialog gesloten is. Roep `,e.jsx(n.code,{children:"focus()"}),` pas aan
na de eerste render van de component (bv. na `,e.jsx(n.code,{children:"await link.updateComplete"}),"). ",e.jsx(n.code,{children:"document.activeElement"}),` is daarna de
`,e.jsx(n.code,{children:"vl-link"})," zelf, het onderliggende element vind je via ",e.jsx(n.code,{children:"shadowRoot.activeElement"}),"."]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/link",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Link"})})]})}function F(o={}){const{wrapper:n}={...$(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(f,{...o})}):f(o)}function X(o,n){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}H([U]);const K={id:"components-atom-link",title:"Components - Atom/link",tags:["autodocs"],args:l,argTypes:W,parameters:{docs:{page:F}}},i=D(l,({href:o,bold:n,small:v,large:w,error:y,external:L,download:S,buttonAsLink:A,type:T,icon:z,iconPlacement:E,defaultSlot:V,label:C,onVlClick:N})=>M`
        <vl-link
            href=${o}
            ?bold=${n}
            ?small=${v}
            ?large=${w}
            ?error=${y}
            ?external=${L}
            download=${S}
            ?button-as-link=${A}
            type=${T}
            icon=${z}
            icon-placement=${E}
            label=${C}
            @vl-click=${N}
            >${G(V)}</vl-link
        >
    `),d=i.bind({});d.storyName="vl-link - default";d.args={href:"#",defaultSlot:"Lees meer over dit onderwerp"};const s=i.bind({});s.storyName="vl-link - bold";s.args={href:"#",defaultSlot:"Lees meer over dit onderwerp",bold:!0};const c=i.bind({});c.storyName="vl-link - small";c.args={href:"#",defaultSlot:"Lees meer over dit onderwerp",small:!0};const k=i.bind({});k.storyName="vl-link - large";k.args={href:"#",defaultSlot:"Lees meer over dit onderwerp",large:!0};const u=i.bind({});u.storyName="vl-link - error";u.args={href:"#",defaultSlot:"Lees meer over dit onderwerp",error:!0};const m=i.bind({});m.storyName="vl-link - external";m.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen.be",external:!0};const b=i.bind({});b.storyName="vl-link - icon";b.args={href:"#",defaultSlot:"Lees meer over dit onderwerp",icon:"arrow-right-fat",iconPlacement:"before"};const h=i.bind({});h.storyName="vl-link - icon only";h.args={href:"#",icon:"arrow-right-fat",label:"Lees meer over dit onderwerp"};const p=i.bind({});p.storyName="vl-link - download";p.args={href:"data:text/plain;charset=utf-8,FLUX-710 link download demo",defaultSlot:"Download het verslag",download:"verslag.txt",icon:"file-download",iconPlacement:"before"};const g=i.bind({});g.storyName="vl-link - button as link";g.args={defaultSlot:"Annuleren",buttonAsLink:!0};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(linkArgs, ({
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
    \`)`,...c.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`story(linkArgs, ({
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
    \`)`,...k.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(linkArgs, ({
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
    \`)`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(linkArgs, ({
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
    \`)`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(linkArgs, ({
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
    \`)`,...g.parameters?.docs?.source}}};const Y=["LinkDefault","LinkBold","LinkSmall","LinkLarge","LinkError","LinkExternal","LinkIcon","LinkIconOnly","LinkDownload","ButtonStyledAsLink"];export{g as ButtonStyledAsLink,s as LinkBold,d as LinkDefault,p as LinkDownload,u as LinkError,m as LinkExternal,b as LinkIcon,h as LinkIconOnly,k as LinkLarge,c as LinkSmall,Y as __namedExportsOrder,K as default};
