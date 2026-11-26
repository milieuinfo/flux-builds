import{b_ as O,bZ as f,u as w,j as e,C as o,b4 as R,b as D,r as P,b$ as M}from"./iframe-Cv28D2NX.js";import{C as r,T as a,b as j,a as U,d as G,g as x,s as _}from"./stories.helper-DYHi_5m6.js";import{o as W}from"./unsafe-html-7Tp0Sqh9.js";import"./preload-helper-PPVm8Dsz.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,t={...U,...O,ariaCurrent:"",ariaHaspopup:"",defaultSlot:"",onVlClick:F("vl-click")},Z={...G,href:{name:"href",description:"De url waar de link naar verwijst.<br/>Werkt niet in combinatie met `button-as-link`-attribuut.",table:{type:{summary:a.STRING},category:r.ATTRIBUTES,defaultValue:{summary:t.href}}},label:{name:"label",description:'Vult het aria-label attribuut van de link in en vervangt zo de volledige voorgelezen linktekst. Gebruik het enkel als de zichtbare tekst niet volstaat of als er geen zichtbare tekst is, bv. bij een link met enkel een icoon.<br/>Het label moet de zichtbare tekst bevatten, bij voorkeur vooraan (WCAG 2.5.3 Label in Name), bv. "Lees meer over toegankelijkheid" bij de zichtbare tekst "Lees meer".<br/>Bij een externe link wordt de automatische melding "(opent in een nieuw venster)" dan niet toegevoegd; neem die vermelding zelf op in het label.',table:{type:{summary:a.STRING},category:r.ATTRIBUTES,defaultValue:{summary:t.label}}},bold:{name:"bold",description:"Beeldt de tekst van de link vet af.",table:{type:{summary:a.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(t.bold)}}},small:{name:"small",description:"Beeldt de tekst van de link klein af.",table:{type:{summary:a.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(t.small)}}},large:{name:"large",description:"Beeldt de tekst van de link groot af.",table:{type:{summary:a.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(t.large)}}},error:{name:"error",description:"Beeldt de link af in een error state.",table:{type:{summary:a.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(t.error)}}},download:{name:"download",description:"Duidt aan dat de link een download is in plaats van een navigatie.<br>Optioneel kan een bestandsnaam als waarde meegegeven worden, zonder waarde kiest de browser de bestandsnaam.<br>Werkt enkel voor same-origin URLs (browser-beperking).<br>Werkt niet in combinatie met `button-as-link`-attribuut.",table:{type:{summary:a.STRING},category:r.ATTRIBUTES,defaultValue:{summary:String(t.download)}}},external:{name:"external",description:'Opent de link in een nieuw tabblad.<br/>Voegt voor schermlezers automatisch de visueel verborgen tekst "(opent in een nieuw venster)" toe, tenzij het `label`-attribuut gezet is.<br/>Werkt niet in combinatie met `button-as-link`-attribuut.',table:{type:{summary:a.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(t.external)}}},icon:{name:"icon",description:"Beeldt een icoon af in de link.<br/>Standaard wordt dit icoon voor de tekst afgebeeld.",table:{type:{summary:a.STRING},category:r.ATTRIBUTES,defaultValue:{summary:t.icon}}},iconPlacement:{name:"icon-placement",description:"De positie van het icoon ten opzichte van de tekst.<br>Voegt margin toe tussen het icoon en de tekst.",control:{type:j.SELECT},options:["",...Object.values(f)],table:{type:{summary:x(Object.values(f))},category:r.ATTRIBUTES,defaultArgs:{summary:t.iconPlacement}}},buttonAsLink:{name:"button-as-link",description:"Maakt van de link een button maar behoudt de link-stijl.",table:{type:{summary:a.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(t.buttonAsLink)}}},type:{name:"type",description:"Het type van de button.<br/>Werkt enkel in combinatie met het `button-as-link`-attribuut.",control:{type:j.SELECT},options:["button","submit","reset"],table:{type:{summary:`${a.STRING}: 'button' | 'submit' | 'reset'`},category:r.ATTRIBUTES,defaultValue:{summary:t.type}}},ariaCurrent:{name:"aria-current",description:"Wordt doorgegeven aan de onderliggende link (of button bij `button-as-link`) en duidt de huidige link binnen een reeks aan, bv. de huidige pagina.",control:{type:j.SELECT},options:["","page","step","location","date","time","true","false"],table:{type:{summary:x(["page","step","location","date","time","true","false"])},category:r.ATTRIBUTES,defaultValue:{summary:t.ariaCurrent}}},ariaHaspopup:{name:"aria-haspopup",description:"Wordt doorgegeven aan de onderliggende link (of button bij `button-as-link`) en duidt aan dat de link een popup opent, bv. een menu of dialog.<br>Dit attribuut is niet reactief.",control:{type:j.SELECT},options:["","false","true","menu","listbox","tree","grid","dialog"],table:{type:{summary:x(["false","true","menu","listbox","tree","grid","dialog"])},category:r.ATTRIBUTES,defaultValue:{summary:t.ariaHaspopup}}},defaultSlot:{name:"[default]",description:"De content van de link.",table:{type:{summary:a.HTML},category:r.SLOTS,defaultValue:{summary:t.defaultSlot}}},onVlClick:{name:"vl-click",description:"Event dat afgevuurd wordt bij het klikken op de link.",table:{category:r.EVENTS}}};function $(l){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...w(),...l.components},{FluxComponentMetaData:v}=n;return v||X("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"link",children:"Link"}),`
`,e.jsx(v,{id:"components-atom-link"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"link"})," component om een link af te beelden op een pagina.",e.jsx("br",{})]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlLinkComponent } from '@domg-wc/components/atom';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-link></vl-link>
`})}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(R,{of:d}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"bold",children:"Bold"}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(n.h3,{id:"small",children:"Small"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h3,{id:"large",children:"Large"}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h3,{id:"error",children:"Error"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"external",children:"External"}),`
`,e.jsx(n.p,{children:"Een externe link opent in een nieuw tabblad en toont automatisch het external icoon na de linktekst."}),`
`,e.jsxs(n.p,{children:[`Voor schermlezers voegt de component automatisch de visueel verborgen tekst "(opent in een nieuw venster)" toe na de
linktekst. Je hoeft dit dus niet zelf te voorzien. Het external icoon zelf is decoratief (`,e.jsx(n.code,{children:"aria-hidden"}),`) en wordt niet
voorgelezen.`]}),`
`,e.jsxs(n.p,{children:["Gebruik je het ",e.jsx(n.code,{children:"label"}),` attribuut, dan vervangt dat de volledige voorgelezen linktekst en wordt de automatische melding
niet toegevoegd. Neem in dat geval zelf de vermelding op, na de zichtbare linktekst, bv.
`,e.jsx(n.code,{children:'label="Lees meer over toegankelijkheid (opent in een nieuw venster)"'}),' bij de zichtbare tekst "Lees meer".']}),`
`,e.jsx(o,{of:k}),`
`,e.jsx(n.h3,{id:"icon",children:"Icon"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"enkel-icoon",children:"Enkel icoon"}),`
`,e.jsxs(n.p,{children:["Een link met enkel een icoon heeft geen zichtbare tekst. Het ",e.jsx(n.code,{children:"label"}),` attribuut is hier verplicht: het is de enige naam
die schermlezers en spraakbesturing van de link kennen.`]}),`
`,e.jsxs(n.p,{children:[`Gebruik een link met enkel een icoon enkel om te navigeren. Voert het icoon een actie uit, zoals bewerken of
verwijderen, gebruik dan een `,e.jsx(n.a,{href:"/docs/components-atom-button--documentatie",children:"vl-button"}),` met enkel een icoon en het
`,e.jsx(n.code,{children:"ghost"})," attribuut, ook met een ",e.jsx(n.code,{children:"label"}),"."]}),`
`,e.jsx(o,{of:h}),`
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
`,e.jsx(o,{of:b}),`
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
`,e.jsx(o,{of:g}),`
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
`,e.jsxs(n.p,{children:['Indien de link inhoud in- of uitklapt, bijvoorbeeld een "Lees meer"-knop, gebruik dan ',e.jsx(n.code,{children:"button-as-link"}),` en zet het
`,e.jsx(n.code,{children:"aria-expanded"})," attribuut op ",e.jsx(n.code,{children:"false"})," (ingeklapt) of ",e.jsx(n.code,{children:"true"}),` (uitgeklapt). Zo meldt een schermlezer de toestand van de
inhoud. `,e.jsx(n.code,{children:"aria-expanded"})," wordt doorgegeven aan de onderliggende button (of link zonder ",e.jsx(n.code,{children:"button-as-link"}),`), ook als je het
attribuut na de eerste render zet, wijzigt of verwijdert. Zonder het attribuut krijgt het onderliggende element geen
`,e.jsx(n.code,{children:"aria-expanded"}),". De component wisselt de waarde niet zelf: zet ze bij elke klik (",e.jsx(n.code,{children:"vl-click"}),") op de nieuwe toestand."]}),`
`,e.jsxs(n.p,{children:["Met ",e.jsx(n.code,{children:"aria-controls"}),` verwijs je naar het id van de inhoud die in- of uitklapt. Een id-verwijzing werkt niet over de
grens van een shadow root, daarom kopieert `,e.jsx(n.code,{children:"vl-link"}),` het attribuut niet naar de onderliggende button of link. De
component zoekt het element met dat id op in de omgeving van de `,e.jsx(n.code,{children:"vl-link"}),` zelf (hetzelfde document of dezelfde shadow
root) en koppelt het via
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaControlsElements",rel:"nofollow",children:"ARIA element reflection"}),`
(`,e.jsx(n.code,{children:"ariaControlsElements"}),") aan de onderliggende button of link. Meerdere ids scheid je met een spatie."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Het element wordt opnieuw opgezocht bij elke update van de ",e.jsx(n.code,{children:"vl-link"}),", bv. wanneer ",e.jsx(n.code,{children:"aria-expanded"}),` wijzigt. Inhoud
die je pas bij het uitklappen rendert, wordt dus gevonden zodra je `,e.jsx(n.code,{children:"aria-expanded"})," op ",e.jsx(n.code,{children:"true"})," zet."]}),`
`,e.jsxs(n.li,{children:["In browsers zonder ",e.jsx(n.code,{children:"ariaControlsElements"}),` (ouder dan Chrome en Edge 135, Firefox 136 of Safari 16.4) wordt
`,e.jsx(n.code,{children:"aria-controls"})," niet doorgegeven. ",e.jsx(n.code,{children:"aria-expanded"})," werkt daar wel."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-link button-as-link aria-expanded="false" aria-controls="opmerking-tekst">Lees meer</vl-link>
<div id="opmerking-tekst">...</div>
`})}),`
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
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/link",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Link"})})]})}function q(l={}){const{wrapper:n}={...w(),...l.components};return n?e.jsx(n,{...l,children:e.jsx($,{...l})}):$(l)}function X(l,n){throw new Error("Expected component `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}P([M]);const ee={id:"components-atom-link",title:"Components - Atom/link",tags:["autodocs"],args:t,argTypes:Z,parameters:{docs:{page:q}}},i=_(t,({href:l,bold:n,small:v,large:y,error:L,external:S,download:z,buttonAsLink:T,type:A,icon:C,iconPlacement:E,defaultSlot:V,label:H,ariaCurrent:I,ariaHaspopup:B,onVlClick:N})=>D`
        <vl-link
            href=${l}
            ?bold=${n}
            ?small=${v}
            ?large=${y}
            ?error=${L}
            ?external=${S}
            download=${z}
            ?button-as-link=${T}
            type=${A}
            icon=${C}
            icon-placement=${E}
            label=${H}
            aria-current=${I}
            aria-haspopup=${B}
            @vl-click=${N}
            >${W(V)}</vl-link
        >
    `),d=i.bind({});d.storyName="vl-link - default";d.args={href:"#",defaultSlot:"Lees meer over dit onderwerp"};const s=i.bind({});s.storyName="vl-link - bold";s.args={href:"#",defaultSlot:"Lees meer over dit onderwerp",bold:!0};const c=i.bind({});c.storyName="vl-link - small";c.args={href:"#",defaultSlot:"Lees meer over dit onderwerp",small:!0};const u=i.bind({});u.storyName="vl-link - large";u.args={href:"#",defaultSlot:"Lees meer over dit onderwerp",large:!0};const p=i.bind({});p.storyName="vl-link - error";p.args={href:"#",defaultSlot:"Lees meer over dit onderwerp",error:!0};const k=i.bind({});k.storyName="vl-link - external";k.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen.be",external:!0};const m=i.bind({});m.storyName="vl-link - icon";m.args={href:"#",defaultSlot:"Lees meer over dit onderwerp",icon:"arrow-right-fat",iconPlacement:"before"};const h=i.bind({});h.storyName="vl-link - icon only";h.args={href:"#",icon:"arrow-right-fat",label:"Lees meer over dit onderwerp"};const b=i.bind({});b.storyName="vl-link - download";b.args={href:"data:text/plain;charset=utf-8,FLUX-710 link download demo",defaultSlot:"Download het verslag",download:"verslag.txt",icon:"file-download",iconPlacement:"before"};const g=i.bind({});g.storyName="vl-link - button as link";g.args={defaultSlot:"Annuleren",buttonAsLink:!0};const ne=["LinkDefault","LinkBold","LinkSmall","LinkLarge","LinkError","LinkExternal","LinkIcon","LinkIconOnly","LinkDownload","ButtonStyledAsLink"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(linkArgs, ({
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
  ariaCurrent,
  ariaHaspopup,
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
            aria-current=\${ariaCurrent}
            aria-haspopup=\${ariaHaspopup}
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
  ariaCurrent,
  ariaHaspopup,
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
            aria-current=\${ariaCurrent}
            aria-haspopup=\${ariaHaspopup}
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
  ariaCurrent,
  ariaHaspopup,
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
            aria-current=\${ariaCurrent}
            aria-haspopup=\${ariaHaspopup}
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
  ariaCurrent,
  ariaHaspopup,
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
            aria-current=\${ariaCurrent}
            aria-haspopup=\${ariaHaspopup}
            @vl-click=\${onVlClick}
            >\${unsafeHTML(defaultSlot)}</vl-link
        >
    \`)`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(linkArgs, ({
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
  ariaCurrent,
  ariaHaspopup,
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
            aria-current=\${ariaCurrent}
            aria-haspopup=\${ariaHaspopup}
            @vl-click=\${onVlClick}
            >\${unsafeHTML(defaultSlot)}</vl-link
        >
    \`)`,...p.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`story(linkArgs, ({
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
  ariaCurrent,
  ariaHaspopup,
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
            aria-current=\${ariaCurrent}
            aria-haspopup=\${ariaHaspopup}
            @vl-click=\${onVlClick}
            >\${unsafeHTML(defaultSlot)}</vl-link
        >
    \`)`,...k.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(linkArgs, ({
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
  ariaCurrent,
  ariaHaspopup,
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
            aria-current=\${ariaCurrent}
            aria-haspopup=\${ariaHaspopup}
            @vl-click=\${onVlClick}
            >\${unsafeHTML(defaultSlot)}</vl-link
        >
    \`)`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(linkArgs, ({
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
  ariaCurrent,
  ariaHaspopup,
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
            aria-current=\${ariaCurrent}
            aria-haspopup=\${ariaHaspopup}
            @vl-click=\${onVlClick}
            >\${unsafeHTML(defaultSlot)}</vl-link
        >
    \`)`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story(linkArgs, ({
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
  ariaCurrent,
  ariaHaspopup,
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
            aria-current=\${ariaCurrent}
            aria-haspopup=\${ariaHaspopup}
            @vl-click=\${onVlClick}
            >\${unsafeHTML(defaultSlot)}</vl-link
        >
    \`)`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(linkArgs, ({
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
  ariaCurrent,
  ariaHaspopup,
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
            aria-current=\${ariaCurrent}
            aria-haspopup=\${ariaHaspopup}
            @vl-click=\${onVlClick}
            >\${unsafeHTML(defaultSlot)}</vl-link
        >
    \`)`,...g.parameters?.docs?.source}}};export{g as ButtonStyledAsLink,s as LinkBold,d as LinkDefault,b as LinkDownload,p as LinkError,k as LinkExternal,m as LinkIcon,h as LinkIconOnly,u as LinkLarge,c as LinkSmall,ne as __namedExportsOrder,ee as default};
