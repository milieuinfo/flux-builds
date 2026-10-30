import{Z as t,_ as r,bN as J,X as Q,bO as V,a1 as nn,W as en,a2 as tn,u as E,j as n,C as a,b4 as on,s as rn,b as ln,r as an,f as dn}from"./iframe-ylVHDfb1.js";import{o as sn}from"./unsafe-html--mv6C7rg.js";import"./preload-helper-PPVm8Dsz.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,o={...Q,...J,defaultSlot:"",onVlClick:B("vl-click"),onVlToggle:B("vl-toggle")},cn={...en,type:{name:"type",description:"Het type van de button.",table:{type:{summary:r.STRING},category:t.ATTRIBUTES,defaultValue:{summary:o.type}}},disabled:{name:"disabled",description:"Duidt aan dat de button uitgeschakeld is.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.disabled)}}},error:{name:"error",description:"Beeldt de button af als een error button.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.error)}}},block:{name:"block",description:"Duidt aan dat de button de volledige breedte van zijn parent mag innemen.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.block)}}},large:{name:"large",description:"Beeldt de button groot af.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.large)}}},wide:{name:"wide",description:"Beeldt de button breed af.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.wide)}}},narrow:{name:"narrow",description:"Beeldt de button smal af.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.narrow)}}},secondary:{name:"secondary",description:"Beeldt de button af als een secondary button.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.secondary)}}},tertiary:{name:"tertiary",description:"Beeldt de button af als een tertiary button.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.tertiary)}}},ghost:{name:"ghost",description:"Beeldt de button af als een ghost button.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.ghost)}}},loading:{name:"loading",description:"Beeldt de button af als een loading button.<br/>We raden aan dit enkel te gebruiken voor primary buttons.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.loading)}}},icon:{name:"icon",description:"Beeldt een icoon af in de button.<br/>Standaard wordt dit icoon voor de tekst afgebeeld.",table:{type:{summary:r.STRING},category:t.ATTRIBUTES,defaultValue:{summary:o.icon}}},iconPlacement:{name:"icon-placement",description:"De positie van het icoon ten opzichte van de tekst.<br>Voegt margin toe tussen het icoon en de tekst.",control:{type:nn.SELECT},options:["",...Object.values(V)],table:{type:{summary:tn(Object.values(V))},category:t.ATTRIBUTES,defaultArgs:{summary:o.iconPlacement},defaultValue:{summary:V.BEFORE}}},toggle:{name:"toggle",description:"Beeldt de button af als een toggle button.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.toggle)}}},on:{name:"on",description:"Duidt aan dat de toggle button aan staat.<br>Te gebruiken in combinatie met het `toggle` attribuut.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.on)}}},controlled:{name:"controlled",description:"Duidt aan dat de state van de toggle button gecontroleerd wordt door een parent component.<br>De button zal zijn eigen `on` attribuut niet veranderen.<br>Te gebruiken in combinatie met het `toggle` attribuut.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.controlled)}}},ctaLink:{name:"cta-link",description:"Specifieert de cta-link (call to action link), zorgt ervoor dat de component een link (`<a>`) wordt met button-styling.",table:{type:{summary:r.STRING},category:t.ATTRIBUTES,defaultValue:{summary:o.ctaLink}}},download:{name:"download",description:"Duidt aan dat de cta-link een download is in plaats van een navigatie.<br>Optioneel kan een bestandsnaam als waarde meegegeven worden, zonder waarde kiest de browser de bestandsnaam.<br>Werkt enkel voor same-origin URLs (browser-beperking).<br>Dit attribuut wordt enkel gebruikt als de `cta-link` is ingesteld.",table:{type:{summary:r.STRING},category:t.ATTRIBUTES,defaultValue:{summary:String(o.download)}}},external:{name:"external",description:"Opent de link in een nieuw tabblad. Dit attribuut wordt enkel gebruikt als de `cta-link` is ingesteld.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.external)}}},inputGroup:{name:"input-group",description:"Duidt aan dat de component deel is van een input-group.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.inputGroup)}}},label:{name:"label",description:'Stelt het aria-label attribuut van de button in en vervangt zo de volledige voorgelezen tekst. Gebruik het enkel als de zichtbare tekst niet volstaat of als er geen zichtbare tekst is, bv. bij een button met enkel een icoon.<br/>Het label moet de zichtbare tekst bevatten, bij voorkeur vooraan (WCAG 2.5.3 Label in Name). Gebruik je een `cta-link` met `external`, voeg dan de vermelding toe na de zichtbare tekst, bv. "Vlaanderen.be (opent in een nieuw venster)" bij de zichtbare tekst "Vlaanderen.be".',table:{type:{summary:r.STRING},category:t.ATTRIBUTES,defaultValue:{summary:o.label}}},defaultSlot:{name:"[default]",description:"De content van de button.",table:{type:{summary:r.HTML},category:t.SLOTS,defaultValue:{summary:o.defaultSlot}}},onVlClick:{name:"vl-click",description:"Event dat afgevuurd wordt bij het klikken op de button.",table:{category:t.EVENTS}},onVlToggle:{name:"vl-toggle",description:"Event dat afgevuurd wordt als het `on` attribuut van de button verandert.",table:{type:{summary:"{ on: boolean }"},category:t.EVENTS}}};function G(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...E(),...i.components},{FluxComponentMetaData:S}=e;return S||gn("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"button",children:"Button"}),`
`,n.jsx(S,{id:"components-atom-button"}),`
`,n.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,n.jsxs(e.p,{children:["Gebruik de ",n.jsx(e.code,{children:"button"})," component om een button af te beelden op een pagina."]}),`
`,n.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { VlButtonComponent } from '@domg-wc/components/atom';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-button></vl-button>
`})}),`
`,n.jsx(a,{of:d}),`
`,n.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,n.jsx(on,{of:d}),`
`,n.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,n.jsx(e.h3,{id:"secondary",children:"Secondary"}),`
`,n.jsx(e.p,{children:"Gebruik een secondary button om een 1 of meerdere buttons af te beelden in combinatie met een primary button."}),`
`,n.jsx(a,{of:s}),`
`,n.jsx(e.h3,{id:"tertiary",children:"Tertiary"}),`
`,n.jsxs(e.p,{children:["Gebruik een tertiary button om een 1 of meerdere buttons af te beelden in combinatie met een primary button.",n.jsx("br",{}),`
Een tertiary button is subtieler dan een secondary button.`]}),`
`,n.jsx(a,{of:c}),`
`,n.jsx(e.h3,{id:"ghost",children:"Ghost"}),`
`,n.jsx(e.p,{children:`Gebruik een ghost button om enkel de knop tekst of icoon af te beelden, zonder opmaak (border, background).
Een ghost button neemt de andere variaties over van de tertiary button (hover, focus, disabled, error, ...).`}),`
`,n.jsx(a,{of:u}),`
`,n.jsx(e.h3,{id:"disabled",children:"Disabled"}),`
`,n.jsx(e.p,{children:"Gebruik een disabled button om aan te tonen dat een actie niet uitgevoerd kan worden."}),`
`,n.jsx(a,{of:g}),`
`,n.jsx(e.h3,{id:"error",children:"Error"}),`
`,n.jsx(e.p,{children:"Gebruik een error button om de belangrijkheid van een actie aan te tonen."}),`
`,n.jsx(a,{of:b}),`
`,n.jsx(e.h3,{id:"block",children:"Block"}),`
`,n.jsx(a,{of:p}),`
`,n.jsx(e.h3,{id:"large",children:"Large"}),`
`,n.jsx(a,{of:$}),`
`,n.jsx(e.h3,{id:"wide",children:"Wide"}),`
`,n.jsx(a,{of:m}),`
`,n.jsx(e.h3,{id:"narrow",children:"Narrow"}),`
`,n.jsx(a,{of:k}),`
`,n.jsx(e.h3,{id:"loading",children:"Loading"}),`
`,n.jsxs(e.p,{children:["Gebruik een loading button om aan te tonen dat een actie enige tijd in beslag neemt.",n.jsx("br",{}),`
Gedurende het uitvoeren van de actie kan je de button als een loading button afbeelden.`,n.jsx("br",{}),`
We raden aan een loading button enkel te gebruiken voor primary buttons.`,n.jsx("br",{}),`
Indien je wil dat de loading button ook disabled is, kan je het `,n.jsx(e.code,{children:"disabled"})," attribuut in combinatie met het ",n.jsx(e.code,{children:"loading"}),`
attribuut gebruiken.`]}),`
`,n.jsx(a,{of:y}),`
`,n.jsx(e.h3,{id:"icoon",children:"Icoon"}),`
`,n.jsx(a,{of:h}),`
`,n.jsx(e.h3,{id:"enkel-icoon",children:"Enkel icoon"}),`
`,n.jsxs(e.p,{children:[`Om een icon-only button weer te geven kan je onderstaande code gebruiken.
Het invullen van het `,n.jsx(e.code,{children:"label"})," attribuut is hierbij verplicht (",n.jsx(e.a,{href:"https://www.w3.org/TR/WCAG22/#name-role-value",rel:"nofollow",children:"WCAG richtlijn"}),")."]}),`
`,n.jsx(a,{of:w}),`
`,n.jsxs(e.p,{children:["Voor een variant zonder opmaak (border, background), kan je het ",n.jsx(e.code,{children:"ghost"})," attribuut gebruiken."]}),`
`,n.jsx(a,{of:f}),`
`,n.jsx(e.h3,{id:"toggle",children:"Toggle"}),`
`,n.jsxs(e.p,{children:["Gebruik een toggle button om aan te duiden dat een actie aan of uit staat.",n.jsx("br",{}),`
De button wordt aan- of uitgezet door er op te klikken.`,n.jsx("br",{}),`
Gebruik het `,n.jsx(e.code,{children:"on"})," attribuut om de button programmatorisch aan- of uit te zetten.",n.jsx("br",{}),`
Gebruik het `,n.jsx(e.code,{children:"controlled"})," attribuut als je wil dat de button zich niet zelf aan- of uitzet, gebruik dan het ",n.jsx(e.code,{children:"on"}),`
attribuut om de button aan- of uit te zetten.`]}),`
`,n.jsx(a,{of:v}),`
`,n.jsx(e.h3,{id:"cta-link",children:"CTA link"}),`
`,n.jsxs(e.p,{children:["In specifieke gevallen kan het nodig zijn een link af te beelden als een button. Daarvoor kan je dan de ",n.jsx(e.code,{children:"cta-link"}),`
(call to action link) specifiëren, de button wordt dan technisch een link met een href, visueel blijft het een
button. Bij voorkeur wordt de `,n.jsx(e.code,{children:"vl-button"})," gebruikt om een actie uit te voeren en de ",n.jsx(e.code,{children:"vl-link"}),` om
naar een andere pagina te navigeren.`]}),`
`,n.jsx(e.p,{children:"Aanbevelingen:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["probeer ",n.jsx(e.code,{children:"cta-link"}),` enkel te gebruiken als het echt nodig is, zoals om de aandacht te vestigen op een link
voor het uitvoeren van een belangrijke actie, bv.:`]}),`
`,n.jsx(e.li,{children:"een link, die in een overzicht van objecten, wijst naar een formulier om een nieuw object aan te maken"}),`
`,n.jsx(e.li,{children:'de "Begin hier" link in een onboarding flow'}),`
`,n.jsx(e.li,{children:'bij "Registreer" of "Maak een account aan"'}),`
`,n.jsx(e.li,{children:"zorg ervoor dat de stijl verschillend is t.o.v. een standaard button (gebruik bv. een icoon)"}),`
`]}),`
`,n.jsx(e.p,{children:"Beperkingen:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["bij gebruik van ",n.jsx(e.code,{children:"cta-link"})," wordt de ",n.jsx(e.code,{children:"<button>"})," tag vervangen door een ",n.jsx(e.code,{children:"<a>"}),` tag, hierdoor kan dit niet binnen een
form gebruikt worden`]}),`
`,n.jsxs(e.li,{children:["het type attribuut heeft geen effect bij gebruik van ",n.jsx(e.code,{children:"cta-link"})]}),`
`,n.jsxs(e.li,{children:["een link heeft geen disabled state, gebruik ",n.jsx(e.code,{children:"disabled"})," daarom niet samen met ",n.jsx(e.code,{children:"cta-link"}),`. Toon de link pas als de
bestemming beschikbaar is, of gebruik een gewone button als het om een actie gaat. Zet je `,n.jsx(e.code,{children:"disabled"}),` toch, dan heeft de
link geen `,n.jsx(e.code,{children:"href"}),", staat hij niet in de tabvolgorde en melden schermlezers hem als een niet-beschikbare link"]}),`
`]}),`
`,n.jsxs(e.p,{children:[`Meer context over wanneer een button of een link te gebruiken kan je vinden in de blogpost
`,n.jsx(e.a,{href:"https://adamsilver.io/blog/but-sometimes-buttons-look-like-links/",rel:"nofollow",children:"'but sometimes buttons look like links'"}),"."]}),`
`,n.jsx(a,{of:x}),`
`,n.jsx(e.h3,{id:"cta-link-als-download",children:"CTA link als download"}),`
`,n.jsxs(e.p,{children:["Wijst de ",n.jsx(e.code,{children:"cta-link"})," naar een bestand, gebruik dan het ",n.jsx(e.code,{children:"download"}),` attribuut om aan te geven dat de browser het bestand
moet downloaden in plaats van ernaar te navigeren. Geef je een waarde mee, dan wordt die gebruikt als suggestie voor de
bestandsnaam; zonder waarde kiest de browser zelf een bestandsnaam.`]}),`
`,n.jsx(e.p,{children:"Beperkingen:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["het ",n.jsx(e.code,{children:"download"})," attribuut werkt enkel voor same-origin URLs (en ",n.jsx(e.code,{children:"data:"})," of ",n.jsx(e.code,{children:"blob:"}),` URLs), dit is een
browser-beperking van het `,n.jsxs(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/download",rel:"nofollow",children:["native anchor ",n.jsx(e.code,{children:"download"})," attribuut"]})]}),`
`,n.jsxs(e.li,{children:["het attribuut wordt enkel gebruikt als de ",n.jsx(e.code,{children:"cta-link"})," is ingesteld"]}),`
`]}),`
`,n.jsxs(e.p,{children:["Tip: maak in de zichtbare tekst of het ",n.jsx(e.code,{children:"label"}),` attribuut duidelijk dat het om een download gaat, zodat ook
screen-reader gebruikers dit weten (bv. "Download verslag.pdf" i.p.v. "Verslag"). Een anchor met het `,n.jsx(e.code,{children:"download"}),`
attribuut wordt nog steeds aangekondigd als een gewone link.`]}),`
`,n.jsx(a,{of:j}),`
`,n.jsx(e.h3,{id:"input-group",children:"Input Group"}),`
`,n.jsxs(e.p,{children:["Het ",n.jsx(e.code,{children:"input-group"}),` attribuut is er om de knop een specifieke stijl te geven in combinatie met een input-field. Het
attribuut doet enkel iets in die combinatie. Zie `,n.jsx(e.a,{href:"/docs/components-form-input-group--documentatie",children:"Input Group [next]"}),`
voor meer informatie en voorbeelden.`]}),`
`,n.jsx(e.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,n.jsx(e.p,{children:"Zorg er steeds voor dat de button een duidelijke en beknopte tekstuele beschrijving heeft van de actie die uitgevoerd wordt bij het klikken op de button. Dit is belangrijk voor alle gebruikers, maar vooral voor gebruikers die schermlezers gebruiken."}),`
`,n.jsxs(e.p,{children:["Indien de button enkel een icoon bevat, is het verplicht om het ",n.jsx(e.code,{children:"label"})," attribuut te gebruiken zodat een beschrijvende ",n.jsx(e.code,{children:"aria-label"})," wordt toegevoegd aan de button."]}),`
`,n.jsxs(e.p,{children:["Het ",n.jsx(e.code,{children:"label"}),` attribuut vervangt de volledige voorgelezen tekst. Gebruik het enkel als de zichtbare tekst niet volstaat
of als er geen zichtbare tekst is. Heeft de button zichtbare tekst, dan moet het label die tekst bevatten, bij voorkeur
vooraan (WCAG 2.5.3 Label in Name). Gebruikers van spraakbesturing activeren een button met de tekst die ze zien;
ontbreekt die tekst in het label, dan vinden ze de button niet.`]}),`
`,n.jsxs(e.p,{children:["Een ",n.jsx(e.code,{children:"cta-link"})," met ",n.jsx(e.code,{children:"external"}),` meldt niet zelf dat de link in een nieuw venster opent. Neem die vermelding op in het
label, na de zichtbare tekst.`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Goed: ",n.jsx(e.code,{children:'<vl-button cta-link="https://www.vlaanderen.be" external label="Vlaanderen.be (opent in een nieuw venster)">Vlaanderen.be</vl-button>'})]}),`
`,n.jsxs(e.li,{children:["Fout: ",n.jsx(e.code,{children:'<vl-button label="Annuleer inschrijving">Annuleren</vl-button>'}),", de zichtbare tekst ontbreekt"]}),`
`]}),`
`,n.jsxs(e.p,{children:["Indien de button een dropdown menu of dialog opent, gebruik dan het ",n.jsx(e.code,{children:"aria-haspopup"})," attribuut met de juiste waarde (",n.jsx(e.code,{children:"true"}),", ",n.jsx(e.code,{children:"menu"}),", ",n.jsx(e.code,{children:"listbox"}),", ",n.jsx(e.code,{children:"tree"}),", ",n.jsx(e.code,{children:"grid"}),", ",n.jsx(e.code,{children:"dialog"}),") om aan te geven dat er een popup aanwezig is. Dit helpt schermlezers om de gebruiker correct te informeren over de aanwezigheid van een popup. ",n.jsx(e.code,{children:"aria-haspopup"})," wordt doorgegeven aan de onderliggende button."]}),`
`,n.jsxs(e.p,{children:["Roep je ",n.jsx(e.code,{children:"focus()"})," aan op ",n.jsx(e.code,{children:"vl-button"}),", dan krijgt de onderliggende button (of de link bij ",n.jsx(e.code,{children:"cta-link"}),") de focus. Zo kan je bv. de focus terugzetten op de knop die een dialog opende, nadat die dialog gesloten is. Een disabled button krijgt geen focus. Roep ",n.jsx(e.code,{children:"focus()"})," pas aan na de eerste render van de component (bv. na ",n.jsx(e.code,{children:"await button.updateComplete"}),"). ",n.jsx(e.code,{children:"document.activeElement"})," is daarna de ",n.jsx(e.code,{children:"vl-button"})," zelf, het onderliggende element vind je via ",n.jsx(e.code,{children:"shadowRoot.activeElement"}),"."]}),`
`,n.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,n.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/button",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Button"})})]})}function un(i={}){const{wrapper:e}={...E(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(G,{...i})}):G(i)}function gn(i,e){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}an([dn]);const mn={id:"components-atom-button",title:"Components - Atom/button",tags:["autodocs"],args:o,argTypes:cn,parameters:{docs:{page:un}}},l=rn(o,({type:i,disabled:e,error:S,block:A,large:C,wide:N,narrow:O,secondary:z,tertiary:I,ghost:P,loading:R,icon:D,ctaLink:M,download:H,iconPlacement:U,toggle:K,on:W,controlled:_,external:F,inputGroup:X,label:Z,defaultSlot:L,onVlClick:Y,onVlToggle:q})=>ln`
            <vl-button
                type=${i}
                ?disabled=${e}
                ?error=${S}
                ?block=${A}
                ?large=${C}
                ?wide=${N}
                ?narrow=${O}
                ?secondary=${z}
                ?tertiary=${I}
                ?ghost=${P}
                ?loading=${R}
                label=${Z}
                icon=${D}
                cta-link=${M}
                download=${H}
                icon-placement=${U}
                ?toggle=${K}
                ?on=${W}
                ?controlled=${_}
                ?external=${F}
                ?inputGroup=${X}
                @vl-click=${Y}
                @vl-toggle=${q}
            >
                ${sn(typeof L=="string"?`
                            ${S===!0?"Error: ":""}
                            ${L}
                            ${e===!0?" (disabled)":""}
                        `:"")}
            </vl-button>
        `),d=l.bind({});d.storyName="vl-button - primary";d.args={defaultSlot:"Klik op mij"};const s=l.bind({});s.storyName="vl-button - secondary";s.args={defaultSlot:"Klik op mij",secondary:!0};const c=l.bind({});c.storyName="vl-button - tertiary";c.args={defaultSlot:"Klik op mij",tertiary:!0};const u=l.bind({});u.storyName="vl-button - ghost";u.args={defaultSlot:"Klik op mij",ghost:!0};const g=l.bind({});g.storyName="vl-button - disabled";g.args={defaultSlot:"Klik op mij",disabled:!0};const b=l.bind({});b.storyName="vl-button - error";b.args={defaultSlot:"Klik op mij",error:!0};const p=l.bind({});p.storyName="vl-button - block";p.args={defaultSlot:"Klik op mij",block:!0};const $=l.bind({});$.storyName="vl-button - large";$.args={defaultSlot:"Klik op mij",large:!0};const m=l.bind({});m.storyName="vl-button - wide";m.args={defaultSlot:"Klik op mij",wide:!0};const k=l.bind({});k.storyName="vl-button - narrow";k.args={defaultSlot:"Klik op mij",narrow:!0};const y=l.bind({});y.storyName="vl-button - loading";y.args={defaultSlot:"Klik op mij",loading:!0};const h=l.bind({});h.storyName="vl-button - icon";h.args={defaultSlot:"Klik op mij",icon:"location",iconPlacement:"before"};const w=l.bind({});w.storyName="vl-button - icon only";w.args={icon:"location",label:"Locatie"};const f=l.bind({});f.storyName="vl-button - icon only - ghost";f.args={icon:"trash",label:"Verwijder",ghost:!0};const v=l.bind({});v.storyName="vl-button - toggle";v.args={defaultSlot:"Klik op mij",toggle:!0};const x=l.bind({});x.storyName="vl-button - cta-link";x.args={icon:"add",defaultSlot:"Voeg nieuw object toe.",ctaLink:"https://www.vlaanderen.be"};const j=l.bind({});j.storyName="vl-button - cta-link - download";j.args={icon:"file-download",defaultSlot:"Download het verslag",ctaLink:"data:text/plain;charset=utf-8,Verslag FLUX-710",download:"verslag.txt"};const T=l.bind({});T.storyName="vl-button - input-group";T.args={defaultSlot:"Klik op mij",inputGroup:!0};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
  type,
  disabled,
  error,
  block,
  large,
  wide,
  narrow,
  secondary,
  tertiary,
  ghost,
  loading,
  icon,
  ctaLink,
  download,
  iconPlacement,
  toggle,
  on,
  controlled,
  external,
  inputGroup,
  label,
  defaultSlot,
  onVlClick,
  onVlToggle
}) => html\`
            <vl-button
                type=\${type}
                ?disabled=\${disabled}
                ?error=\${error}
                ?block=\${block}
                ?large=\${large}
                ?wide=\${wide}
                ?narrow=\${narrow}
                ?secondary=\${secondary}
                ?tertiary=\${tertiary}
                ?ghost=\${ghost}
                ?loading=\${loading}
                label=\${label}
                icon=\${icon}
                cta-link=\${ctaLink}
                download=\${download}
                icon-placement=\${iconPlacement}
                ?toggle=\${toggle}
                ?on=\${on}
                ?controlled=\${controlled}
                ?external=\${external}
                ?inputGroup=\${inputGroup}
                @vl-click=\${onVlClick}
                @vl-toggle=\${onVlToggle}
            >
                \${unsafeHTML(typeof defaultSlot === 'string' ? \`
                            \${error === true ? 'Error: ' : ''}
                            \${defaultSlot}
                            \${disabled === true ? ' (disabled)' : ''}
                        \` : '')}
            </vl-button>
        \`)`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
  type,
  disabled,
  error,
  block,
  large,
  wide,
  narrow,
  secondary,
  tertiary,
  ghost,
  loading,
  icon,
  ctaLink,
  download,
  iconPlacement,
  toggle,
  on,
  controlled,
  external,
  inputGroup,
  label,
  defaultSlot,
  onVlClick,
  onVlToggle
}) => html\`
            <vl-button
                type=\${type}
                ?disabled=\${disabled}
                ?error=\${error}
                ?block=\${block}
                ?large=\${large}
                ?wide=\${wide}
                ?narrow=\${narrow}
                ?secondary=\${secondary}
                ?tertiary=\${tertiary}
                ?ghost=\${ghost}
                ?loading=\${loading}
                label=\${label}
                icon=\${icon}
                cta-link=\${ctaLink}
                download=\${download}
                icon-placement=\${iconPlacement}
                ?toggle=\${toggle}
                ?on=\${on}
                ?controlled=\${controlled}
                ?external=\${external}
                ?inputGroup=\${inputGroup}
                @vl-click=\${onVlClick}
                @vl-toggle=\${onVlToggle}
            >
                \${unsafeHTML(typeof defaultSlot === 'string' ? \`
                            \${error === true ? 'Error: ' : ''}
                            \${defaultSlot}
                            \${disabled === true ? ' (disabled)' : ''}
                        \` : '')}
            </vl-button>
        \`)`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
  type,
  disabled,
  error,
  block,
  large,
  wide,
  narrow,
  secondary,
  tertiary,
  ghost,
  loading,
  icon,
  ctaLink,
  download,
  iconPlacement,
  toggle,
  on,
  controlled,
  external,
  inputGroup,
  label,
  defaultSlot,
  onVlClick,
  onVlToggle
}) => html\`
            <vl-button
                type=\${type}
                ?disabled=\${disabled}
                ?error=\${error}
                ?block=\${block}
                ?large=\${large}
                ?wide=\${wide}
                ?narrow=\${narrow}
                ?secondary=\${secondary}
                ?tertiary=\${tertiary}
                ?ghost=\${ghost}
                ?loading=\${loading}
                label=\${label}
                icon=\${icon}
                cta-link=\${ctaLink}
                download=\${download}
                icon-placement=\${iconPlacement}
                ?toggle=\${toggle}
                ?on=\${on}
                ?controlled=\${controlled}
                ?external=\${external}
                ?inputGroup=\${inputGroup}
                @vl-click=\${onVlClick}
                @vl-toggle=\${onVlToggle}
            >
                \${unsafeHTML(typeof defaultSlot === 'string' ? \`
                            \${error === true ? 'Error: ' : ''}
                            \${defaultSlot}
                            \${disabled === true ? ' (disabled)' : ''}
                        \` : '')}
            </vl-button>
        \`)`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
  type,
  disabled,
  error,
  block,
  large,
  wide,
  narrow,
  secondary,
  tertiary,
  ghost,
  loading,
  icon,
  ctaLink,
  download,
  iconPlacement,
  toggle,
  on,
  controlled,
  external,
  inputGroup,
  label,
  defaultSlot,
  onVlClick,
  onVlToggle
}) => html\`
            <vl-button
                type=\${type}
                ?disabled=\${disabled}
                ?error=\${error}
                ?block=\${block}
                ?large=\${large}
                ?wide=\${wide}
                ?narrow=\${narrow}
                ?secondary=\${secondary}
                ?tertiary=\${tertiary}
                ?ghost=\${ghost}
                ?loading=\${loading}
                label=\${label}
                icon=\${icon}
                cta-link=\${ctaLink}
                download=\${download}
                icon-placement=\${iconPlacement}
                ?toggle=\${toggle}
                ?on=\${on}
                ?controlled=\${controlled}
                ?external=\${external}
                ?inputGroup=\${inputGroup}
                @vl-click=\${onVlClick}
                @vl-toggle=\${onVlToggle}
            >
                \${unsafeHTML(typeof defaultSlot === 'string' ? \`
                            \${error === true ? 'Error: ' : ''}
                            \${defaultSlot}
                            \${disabled === true ? ' (disabled)' : ''}
                        \` : '')}
            </vl-button>
        \`)`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
  type,
  disabled,
  error,
  block,
  large,
  wide,
  narrow,
  secondary,
  tertiary,
  ghost,
  loading,
  icon,
  ctaLink,
  download,
  iconPlacement,
  toggle,
  on,
  controlled,
  external,
  inputGroup,
  label,
  defaultSlot,
  onVlClick,
  onVlToggle
}) => html\`
            <vl-button
                type=\${type}
                ?disabled=\${disabled}
                ?error=\${error}
                ?block=\${block}
                ?large=\${large}
                ?wide=\${wide}
                ?narrow=\${narrow}
                ?secondary=\${secondary}
                ?tertiary=\${tertiary}
                ?ghost=\${ghost}
                ?loading=\${loading}
                label=\${label}
                icon=\${icon}
                cta-link=\${ctaLink}
                download=\${download}
                icon-placement=\${iconPlacement}
                ?toggle=\${toggle}
                ?on=\${on}
                ?controlled=\${controlled}
                ?external=\${external}
                ?inputGroup=\${inputGroup}
                @vl-click=\${onVlClick}
                @vl-toggle=\${onVlToggle}
            >
                \${unsafeHTML(typeof defaultSlot === 'string' ? \`
                            \${error === true ? 'Error: ' : ''}
                            \${defaultSlot}
                            \${disabled === true ? ' (disabled)' : ''}
                        \` : '')}
            </vl-button>
        \`)`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
  type,
  disabled,
  error,
  block,
  large,
  wide,
  narrow,
  secondary,
  tertiary,
  ghost,
  loading,
  icon,
  ctaLink,
  download,
  iconPlacement,
  toggle,
  on,
  controlled,
  external,
  inputGroup,
  label,
  defaultSlot,
  onVlClick,
  onVlToggle
}) => html\`
            <vl-button
                type=\${type}
                ?disabled=\${disabled}
                ?error=\${error}
                ?block=\${block}
                ?large=\${large}
                ?wide=\${wide}
                ?narrow=\${narrow}
                ?secondary=\${secondary}
                ?tertiary=\${tertiary}
                ?ghost=\${ghost}
                ?loading=\${loading}
                label=\${label}
                icon=\${icon}
                cta-link=\${ctaLink}
                download=\${download}
                icon-placement=\${iconPlacement}
                ?toggle=\${toggle}
                ?on=\${on}
                ?controlled=\${controlled}
                ?external=\${external}
                ?inputGroup=\${inputGroup}
                @vl-click=\${onVlClick}
                @vl-toggle=\${onVlToggle}
            >
                \${unsafeHTML(typeof defaultSlot === 'string' ? \`
                            \${error === true ? 'Error: ' : ''}
                            \${defaultSlot}
                            \${disabled === true ? ' (disabled)' : ''}
                        \` : '')}
            </vl-button>
        \`)`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
  type,
  disabled,
  error,
  block,
  large,
  wide,
  narrow,
  secondary,
  tertiary,
  ghost,
  loading,
  icon,
  ctaLink,
  download,
  iconPlacement,
  toggle,
  on,
  controlled,
  external,
  inputGroup,
  label,
  defaultSlot,
  onVlClick,
  onVlToggle
}) => html\`
            <vl-button
                type=\${type}
                ?disabled=\${disabled}
                ?error=\${error}
                ?block=\${block}
                ?large=\${large}
                ?wide=\${wide}
                ?narrow=\${narrow}
                ?secondary=\${secondary}
                ?tertiary=\${tertiary}
                ?ghost=\${ghost}
                ?loading=\${loading}
                label=\${label}
                icon=\${icon}
                cta-link=\${ctaLink}
                download=\${download}
                icon-placement=\${iconPlacement}
                ?toggle=\${toggle}
                ?on=\${on}
                ?controlled=\${controlled}
                ?external=\${external}
                ?inputGroup=\${inputGroup}
                @vl-click=\${onVlClick}
                @vl-toggle=\${onVlToggle}
            >
                \${unsafeHTML(typeof defaultSlot === 'string' ? \`
                            \${error === true ? 'Error: ' : ''}
                            \${defaultSlot}
                            \${disabled === true ? ' (disabled)' : ''}
                        \` : '')}
            </vl-button>
        \`)`,...p.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
  type,
  disabled,
  error,
  block,
  large,
  wide,
  narrow,
  secondary,
  tertiary,
  ghost,
  loading,
  icon,
  ctaLink,
  download,
  iconPlacement,
  toggle,
  on,
  controlled,
  external,
  inputGroup,
  label,
  defaultSlot,
  onVlClick,
  onVlToggle
}) => html\`
            <vl-button
                type=\${type}
                ?disabled=\${disabled}
                ?error=\${error}
                ?block=\${block}
                ?large=\${large}
                ?wide=\${wide}
                ?narrow=\${narrow}
                ?secondary=\${secondary}
                ?tertiary=\${tertiary}
                ?ghost=\${ghost}
                ?loading=\${loading}
                label=\${label}
                icon=\${icon}
                cta-link=\${ctaLink}
                download=\${download}
                icon-placement=\${iconPlacement}
                ?toggle=\${toggle}
                ?on=\${on}
                ?controlled=\${controlled}
                ?external=\${external}
                ?inputGroup=\${inputGroup}
                @vl-click=\${onVlClick}
                @vl-toggle=\${onVlToggle}
            >
                \${unsafeHTML(typeof defaultSlot === 'string' ? \`
                            \${error === true ? 'Error: ' : ''}
                            \${defaultSlot}
                            \${disabled === true ? ' (disabled)' : ''}
                        \` : '')}
            </vl-button>
        \`)`,...$.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
  type,
  disabled,
  error,
  block,
  large,
  wide,
  narrow,
  secondary,
  tertiary,
  ghost,
  loading,
  icon,
  ctaLink,
  download,
  iconPlacement,
  toggle,
  on,
  controlled,
  external,
  inputGroup,
  label,
  defaultSlot,
  onVlClick,
  onVlToggle
}) => html\`
            <vl-button
                type=\${type}
                ?disabled=\${disabled}
                ?error=\${error}
                ?block=\${block}
                ?large=\${large}
                ?wide=\${wide}
                ?narrow=\${narrow}
                ?secondary=\${secondary}
                ?tertiary=\${tertiary}
                ?ghost=\${ghost}
                ?loading=\${loading}
                label=\${label}
                icon=\${icon}
                cta-link=\${ctaLink}
                download=\${download}
                icon-placement=\${iconPlacement}
                ?toggle=\${toggle}
                ?on=\${on}
                ?controlled=\${controlled}
                ?external=\${external}
                ?inputGroup=\${inputGroup}
                @vl-click=\${onVlClick}
                @vl-toggle=\${onVlToggle}
            >
                \${unsafeHTML(typeof defaultSlot === 'string' ? \`
                            \${error === true ? 'Error: ' : ''}
                            \${defaultSlot}
                            \${disabled === true ? ' (disabled)' : ''}
                        \` : '')}
            </vl-button>
        \`)`,...m.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
  type,
  disabled,
  error,
  block,
  large,
  wide,
  narrow,
  secondary,
  tertiary,
  ghost,
  loading,
  icon,
  ctaLink,
  download,
  iconPlacement,
  toggle,
  on,
  controlled,
  external,
  inputGroup,
  label,
  defaultSlot,
  onVlClick,
  onVlToggle
}) => html\`
            <vl-button
                type=\${type}
                ?disabled=\${disabled}
                ?error=\${error}
                ?block=\${block}
                ?large=\${large}
                ?wide=\${wide}
                ?narrow=\${narrow}
                ?secondary=\${secondary}
                ?tertiary=\${tertiary}
                ?ghost=\${ghost}
                ?loading=\${loading}
                label=\${label}
                icon=\${icon}
                cta-link=\${ctaLink}
                download=\${download}
                icon-placement=\${iconPlacement}
                ?toggle=\${toggle}
                ?on=\${on}
                ?controlled=\${controlled}
                ?external=\${external}
                ?inputGroup=\${inputGroup}
                @vl-click=\${onVlClick}
                @vl-toggle=\${onVlToggle}
            >
                \${unsafeHTML(typeof defaultSlot === 'string' ? \`
                            \${error === true ? 'Error: ' : ''}
                            \${defaultSlot}
                            \${disabled === true ? ' (disabled)' : ''}
                        \` : '')}
            </vl-button>
        \`)`,...k.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
  type,
  disabled,
  error,
  block,
  large,
  wide,
  narrow,
  secondary,
  tertiary,
  ghost,
  loading,
  icon,
  ctaLink,
  download,
  iconPlacement,
  toggle,
  on,
  controlled,
  external,
  inputGroup,
  label,
  defaultSlot,
  onVlClick,
  onVlToggle
}) => html\`
            <vl-button
                type=\${type}
                ?disabled=\${disabled}
                ?error=\${error}
                ?block=\${block}
                ?large=\${large}
                ?wide=\${wide}
                ?narrow=\${narrow}
                ?secondary=\${secondary}
                ?tertiary=\${tertiary}
                ?ghost=\${ghost}
                ?loading=\${loading}
                label=\${label}
                icon=\${icon}
                cta-link=\${ctaLink}
                download=\${download}
                icon-placement=\${iconPlacement}
                ?toggle=\${toggle}
                ?on=\${on}
                ?controlled=\${controlled}
                ?external=\${external}
                ?inputGroup=\${inputGroup}
                @vl-click=\${onVlClick}
                @vl-toggle=\${onVlToggle}
            >
                \${unsafeHTML(typeof defaultSlot === 'string' ? \`
                            \${error === true ? 'Error: ' : ''}
                            \${defaultSlot}
                            \${disabled === true ? ' (disabled)' : ''}
                        \` : '')}
            </vl-button>
        \`)`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
  type,
  disabled,
  error,
  block,
  large,
  wide,
  narrow,
  secondary,
  tertiary,
  ghost,
  loading,
  icon,
  ctaLink,
  download,
  iconPlacement,
  toggle,
  on,
  controlled,
  external,
  inputGroup,
  label,
  defaultSlot,
  onVlClick,
  onVlToggle
}) => html\`
            <vl-button
                type=\${type}
                ?disabled=\${disabled}
                ?error=\${error}
                ?block=\${block}
                ?large=\${large}
                ?wide=\${wide}
                ?narrow=\${narrow}
                ?secondary=\${secondary}
                ?tertiary=\${tertiary}
                ?ghost=\${ghost}
                ?loading=\${loading}
                label=\${label}
                icon=\${icon}
                cta-link=\${ctaLink}
                download=\${download}
                icon-placement=\${iconPlacement}
                ?toggle=\${toggle}
                ?on=\${on}
                ?controlled=\${controlled}
                ?external=\${external}
                ?inputGroup=\${inputGroup}
                @vl-click=\${onVlClick}
                @vl-toggle=\${onVlToggle}
            >
                \${unsafeHTML(typeof defaultSlot === 'string' ? \`
                            \${error === true ? 'Error: ' : ''}
                            \${defaultSlot}
                            \${disabled === true ? ' (disabled)' : ''}
                        \` : '')}
            </vl-button>
        \`)`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
  type,
  disabled,
  error,
  block,
  large,
  wide,
  narrow,
  secondary,
  tertiary,
  ghost,
  loading,
  icon,
  ctaLink,
  download,
  iconPlacement,
  toggle,
  on,
  controlled,
  external,
  inputGroup,
  label,
  defaultSlot,
  onVlClick,
  onVlToggle
}) => html\`
            <vl-button
                type=\${type}
                ?disabled=\${disabled}
                ?error=\${error}
                ?block=\${block}
                ?large=\${large}
                ?wide=\${wide}
                ?narrow=\${narrow}
                ?secondary=\${secondary}
                ?tertiary=\${tertiary}
                ?ghost=\${ghost}
                ?loading=\${loading}
                label=\${label}
                icon=\${icon}
                cta-link=\${ctaLink}
                download=\${download}
                icon-placement=\${iconPlacement}
                ?toggle=\${toggle}
                ?on=\${on}
                ?controlled=\${controlled}
                ?external=\${external}
                ?inputGroup=\${inputGroup}
                @vl-click=\${onVlClick}
                @vl-toggle=\${onVlToggle}
            >
                \${unsafeHTML(typeof defaultSlot === 'string' ? \`
                            \${error === true ? 'Error: ' : ''}
                            \${defaultSlot}
                            \${disabled === true ? ' (disabled)' : ''}
                        \` : '')}
            </vl-button>
        \`)`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
  type,
  disabled,
  error,
  block,
  large,
  wide,
  narrow,
  secondary,
  tertiary,
  ghost,
  loading,
  icon,
  ctaLink,
  download,
  iconPlacement,
  toggle,
  on,
  controlled,
  external,
  inputGroup,
  label,
  defaultSlot,
  onVlClick,
  onVlToggle
}) => html\`
            <vl-button
                type=\${type}
                ?disabled=\${disabled}
                ?error=\${error}
                ?block=\${block}
                ?large=\${large}
                ?wide=\${wide}
                ?narrow=\${narrow}
                ?secondary=\${secondary}
                ?tertiary=\${tertiary}
                ?ghost=\${ghost}
                ?loading=\${loading}
                label=\${label}
                icon=\${icon}
                cta-link=\${ctaLink}
                download=\${download}
                icon-placement=\${iconPlacement}
                ?toggle=\${toggle}
                ?on=\${on}
                ?controlled=\${controlled}
                ?external=\${external}
                ?inputGroup=\${inputGroup}
                @vl-click=\${onVlClick}
                @vl-toggle=\${onVlToggle}
            >
                \${unsafeHTML(typeof defaultSlot === 'string' ? \`
                            \${error === true ? 'Error: ' : ''}
                            \${defaultSlot}
                            \${disabled === true ? ' (disabled)' : ''}
                        \` : '')}
            </vl-button>
        \`)`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
  type,
  disabled,
  error,
  block,
  large,
  wide,
  narrow,
  secondary,
  tertiary,
  ghost,
  loading,
  icon,
  ctaLink,
  download,
  iconPlacement,
  toggle,
  on,
  controlled,
  external,
  inputGroup,
  label,
  defaultSlot,
  onVlClick,
  onVlToggle
}) => html\`
            <vl-button
                type=\${type}
                ?disabled=\${disabled}
                ?error=\${error}
                ?block=\${block}
                ?large=\${large}
                ?wide=\${wide}
                ?narrow=\${narrow}
                ?secondary=\${secondary}
                ?tertiary=\${tertiary}
                ?ghost=\${ghost}
                ?loading=\${loading}
                label=\${label}
                icon=\${icon}
                cta-link=\${ctaLink}
                download=\${download}
                icon-placement=\${iconPlacement}
                ?toggle=\${toggle}
                ?on=\${on}
                ?controlled=\${controlled}
                ?external=\${external}
                ?inputGroup=\${inputGroup}
                @vl-click=\${onVlClick}
                @vl-toggle=\${onVlToggle}
            >
                \${unsafeHTML(typeof defaultSlot === 'string' ? \`
                            \${error === true ? 'Error: ' : ''}
                            \${defaultSlot}
                            \${disabled === true ? ' (disabled)' : ''}
                        \` : '')}
            </vl-button>
        \`)`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
  type,
  disabled,
  error,
  block,
  large,
  wide,
  narrow,
  secondary,
  tertiary,
  ghost,
  loading,
  icon,
  ctaLink,
  download,
  iconPlacement,
  toggle,
  on,
  controlled,
  external,
  inputGroup,
  label,
  defaultSlot,
  onVlClick,
  onVlToggle
}) => html\`
            <vl-button
                type=\${type}
                ?disabled=\${disabled}
                ?error=\${error}
                ?block=\${block}
                ?large=\${large}
                ?wide=\${wide}
                ?narrow=\${narrow}
                ?secondary=\${secondary}
                ?tertiary=\${tertiary}
                ?ghost=\${ghost}
                ?loading=\${loading}
                label=\${label}
                icon=\${icon}
                cta-link=\${ctaLink}
                download=\${download}
                icon-placement=\${iconPlacement}
                ?toggle=\${toggle}
                ?on=\${on}
                ?controlled=\${controlled}
                ?external=\${external}
                ?inputGroup=\${inputGroup}
                @vl-click=\${onVlClick}
                @vl-toggle=\${onVlToggle}
            >
                \${unsafeHTML(typeof defaultSlot === 'string' ? \`
                            \${error === true ? 'Error: ' : ''}
                            \${defaultSlot}
                            \${disabled === true ? ' (disabled)' : ''}
                        \` : '')}
            </vl-button>
        \`)`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
  type,
  disabled,
  error,
  block,
  large,
  wide,
  narrow,
  secondary,
  tertiary,
  ghost,
  loading,
  icon,
  ctaLink,
  download,
  iconPlacement,
  toggle,
  on,
  controlled,
  external,
  inputGroup,
  label,
  defaultSlot,
  onVlClick,
  onVlToggle
}) => html\`
            <vl-button
                type=\${type}
                ?disabled=\${disabled}
                ?error=\${error}
                ?block=\${block}
                ?large=\${large}
                ?wide=\${wide}
                ?narrow=\${narrow}
                ?secondary=\${secondary}
                ?tertiary=\${tertiary}
                ?ghost=\${ghost}
                ?loading=\${loading}
                label=\${label}
                icon=\${icon}
                cta-link=\${ctaLink}
                download=\${download}
                icon-placement=\${iconPlacement}
                ?toggle=\${toggle}
                ?on=\${on}
                ?controlled=\${controlled}
                ?external=\${external}
                ?inputGroup=\${inputGroup}
                @vl-click=\${onVlClick}
                @vl-toggle=\${onVlToggle}
            >
                \${unsafeHTML(typeof defaultSlot === 'string' ? \`
                            \${error === true ? 'Error: ' : ''}
                            \${defaultSlot}
                            \${disabled === true ? ' (disabled)' : ''}
                        \` : '')}
            </vl-button>
        \`)`,...j.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
  type,
  disabled,
  error,
  block,
  large,
  wide,
  narrow,
  secondary,
  tertiary,
  ghost,
  loading,
  icon,
  ctaLink,
  download,
  iconPlacement,
  toggle,
  on,
  controlled,
  external,
  inputGroup,
  label,
  defaultSlot,
  onVlClick,
  onVlToggle
}) => html\`
            <vl-button
                type=\${type}
                ?disabled=\${disabled}
                ?error=\${error}
                ?block=\${block}
                ?large=\${large}
                ?wide=\${wide}
                ?narrow=\${narrow}
                ?secondary=\${secondary}
                ?tertiary=\${tertiary}
                ?ghost=\${ghost}
                ?loading=\${loading}
                label=\${label}
                icon=\${icon}
                cta-link=\${ctaLink}
                download=\${download}
                icon-placement=\${iconPlacement}
                ?toggle=\${toggle}
                ?on=\${on}
                ?controlled=\${controlled}
                ?external=\${external}
                ?inputGroup=\${inputGroup}
                @vl-click=\${onVlClick}
                @vl-toggle=\${onVlToggle}
            >
                \${unsafeHTML(typeof defaultSlot === 'string' ? \`
                            \${error === true ? 'Error: ' : ''}
                            \${defaultSlot}
                            \${disabled === true ? ' (disabled)' : ''}
                        \` : '')}
            </vl-button>
        \`)`,...T.parameters?.docs?.source}}};const kn=["ButtonPrimary","ButtonSecondary","ButtonTertiary","ButtonGhost","ButtonDisabled","ButtonError","ButtonBlock","ButtonLarge","ButtonWide","ButtonNarrow","ButtonLoading","ButtonIcon","ButtonIconOnly","ButtonIconOnlyGhost","ButtonToggle","ButtonCtaLink","ButtonCtaLinkDownload","ButtonInputGroup"];export{p as ButtonBlock,x as ButtonCtaLink,j as ButtonCtaLinkDownload,g as ButtonDisabled,b as ButtonError,u as ButtonGhost,h as ButtonIcon,w as ButtonIconOnly,f as ButtonIconOnlyGhost,T as ButtonInputGroup,$ as ButtonLarge,y as ButtonLoading,k as ButtonNarrow,d as ButtonPrimary,s as ButtonSecondary,c as ButtonTertiary,v as ButtonToggle,m as ButtonWide,kn as __namedExportsOrder,mn as default};
