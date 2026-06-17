import{Z as t,_ as r,bF as Y,X as q,bG as S,a2 as J,a1 as Q,W as nn,u as G,j as n,C as a,bc as en,s as tn,x as on,r as rn,d as ln}from"./iframe-nqJ0ju39.js";import{o as an}from"./unsafe-html-BpdtmJuL.js";import"./preload-helper-D9Z9MdNV.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,o={...q,...Y,defaultSlot:"",onVlClick:B("vl-click"),onVlToggle:B("vl-toggle")},dn={...nn,type:{name:"type",description:"Het type van de button.",table:{type:{summary:r.STRING},category:t.ATTRIBUTES,defaultValue:{summary:o.type}}},disabled:{name:"disabled",description:"Duidt aan dat de button uitgeschakeld is.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.disabled)}}},error:{name:"error",description:"Beeldt de button af als een error button.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.error)}}},block:{name:"block",description:"Duidt aan dat de button de volledige breedte van zijn parent mag innemen.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.block)}}},large:{name:"large",description:"Beeldt de button groot af.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.large)}}},wide:{name:"wide",description:"Beeldt de button breed af.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.wide)}}},narrow:{name:"narrow",description:"Beeldt de button smal af.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.narrow)}}},secondary:{name:"secondary",description:"Beeldt de button af als een secondary button.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.secondary)}}},tertiary:{name:"tertiary",description:"Beeldt de button af als een tertiary button.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.tertiary)}}},ghost:{name:"ghost",description:"Beeldt de button af als een ghost button.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.ghost)}}},loading:{name:"loading",description:"Beeldt de button af als een loading button.<br/>We raden aan dit enkel te gebruiken voor primary buttons.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.loading)}}},icon:{name:"icon",description:"Beeldt een icoon af in de button.<br/>Standaard wordt dit icoon voor de tekst afgebeeld.",table:{type:{summary:r.STRING},category:t.ATTRIBUTES,defaultValue:{summary:o.icon}}},iconPlacement:{name:"icon-placement",description:"De positie van het icoon ten opzichte van de tekst.<br>Voegt margin toe tussen het icoon en de tekst.",control:{type:Q.SELECT},options:["",...Object.values(S)],table:{type:{summary:J(Object.values(S))},category:t.ATTRIBUTES,defaultArgs:{summary:o.iconPlacement},defaultValue:{summary:S.BEFORE}}},toggle:{name:"toggle",description:"Beeldt de button af als een toggle button.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.toggle)}}},on:{name:"on",description:"Duidt aan dat de toggle button aan staat.<br>Te gebruiken in combinatie met het `toggle` attribuut.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.on)}}},controlled:{name:"controlled",description:"Duidt aan dat de state van de toggle button gecontroleerd wordt door een parent component.<br>De button zal zijn eigen `on` attribuut niet veranderen.<br>Te gebruiken in combinatie met het `toggle` attribuut.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.controlled)}}},ctaLink:{name:"cta-link",description:"Specifieert de cta-link (call to action link), zorgt ervoor dat de component een link (`<a>`) wordt met button-styling.",table:{type:{summary:r.STRING},category:t.ATTRIBUTES,defaultValue:{summary:o.ctaLink}}},external:{name:"external",description:"Opent de link in een nieuw tabblad. Dit attribuut wordt enkel gebruikt als de `cta-link` is ingesteld.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.external)}}},inputGroup:{name:"input-group",description:"Duidt aan dat de component deel is van een input-group.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(o.inputGroup)}}},label:{name:"label",description:"Stelt het aria-label attribuut van de button in.",table:{type:{summary:r.STRING},category:t.ATTRIBUTES,defaultValue:{summary:o.label}}},defaultSlot:{name:"[default]",description:"De content van de button.",table:{type:{summary:r.HTML},category:t.SLOTS,defaultValue:{summary:o.defaultSlot}}},onVlClick:{name:"vl-click",description:"Event dat afgevuurd wordt bij het klikken op de button.",table:{category:t.EVENTS}},onVlToggle:{name:"vl-toggle",description:"Event dat afgevuurd wordt als het `on` attribuut van de button verandert.",table:{type:{summary:"{ on: boolean }"},category:t.EVENTS}}};function L(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...G(),...i.components},{FluxComponentMetaData:T}=e;return T||sn("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"button",children:"Button"}),`
`,n.jsx(T,{id:"components-atom-button"}),`
`,n.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,n.jsxs(e.p,{children:["Gebruik de ",n.jsx(e.code,{children:"button"})," component om een button af te beelden op een pagina."]}),`
`,n.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { VlButtonComponent } from '@domg-wc/components/atom';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-button></vl-button>
`})}),`
`,n.jsx(a,{of:d}),`
`,n.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,n.jsx(en,{of:d}),`
`,n.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,n.jsx(e.h3,{id:"secondary",children:"Secondary"}),`
`,n.jsx(e.p,{children:"Gebruik een secondary button om een 1 of meerdere buttons af te beelden in combinatie met een primary button."}),`
`,n.jsx(a,{of:c}),`
`,n.jsx(e.h3,{id:"tertiary",children:"Tertiary"}),`
`,n.jsxs(e.p,{children:["Gebruik een tertiary button om een 1 of meerdere buttons af te beelden in combinatie met een primary button.",n.jsx("br",{}),`
Een tertiary button is subtieler dan een secondary button.`]}),`
`,n.jsx(a,{of:s}),`
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
`,n.jsx(a,{of:$}),`
`,n.jsx(e.h3,{id:"large",children:"Large"}),`
`,n.jsx(a,{of:p}),`
`,n.jsx(e.h3,{id:"wide",children:"Wide"}),`
`,n.jsx(a,{of:m}),`
`,n.jsx(e.h3,{id:"narrow",children:"Narrow"}),`
`,n.jsx(a,{of:y}),`
`,n.jsx(e.h3,{id:"loading",children:"Loading"}),`
`,n.jsxs(e.p,{children:["Gebruik een loading button om aan te tonen dat een actie enige tijd in beslag neemt.",n.jsx("br",{}),`
Gedurende het uitvoeren van de actie kan je de button als een loading button afbeelden.`,n.jsx("br",{}),`
We raden aan een loading button enkel te gebruiken voor primary buttons.`,n.jsx("br",{}),`
Indien je wil dat de loading button ook disabled is, kan je het `,n.jsx(e.code,{children:"disabled"})," attribuut in combinatie met het ",n.jsx(e.code,{children:"loading"}),`
attribuut gebruiken.`]}),`
`,n.jsx(a,{of:k}),`
`,n.jsx(e.h3,{id:"icoon",children:"Icoon"}),`
`,n.jsx(a,{of:h}),`
`,n.jsx(e.h3,{id:"enkel-icoon",children:"Enkel icoon"}),`
`,n.jsxs(e.p,{children:[`Om een icon-only button weer te geven kan je onderstaande code gebruiken.
Het invullen van het `,n.jsx(e.code,{children:"label"})," attribuut is hierbij verplicht (",n.jsx(e.a,{href:"https://www.w3.org/TR/WCAG22/#name-role-value",rel:"nofollow",children:"WCAG richtlijn"}),")."]}),`
`,n.jsx(a,{of:f}),`
`,n.jsxs(e.p,{children:["Voor een variant zonder opmaak (border, background), kan je het ",n.jsx(e.code,{children:"ghost"})," attribuut gebruiken."]}),`
`,n.jsx(a,{of:v}),`
`,n.jsx(e.h3,{id:"toggle",children:"Toggle"}),`
`,n.jsxs(e.p,{children:["Gebruik een toggle button om aan te duiden dat een actie aan of uit staat.",n.jsx("br",{}),`
De button wordt aan- of uitgezet door er op te klikken.`,n.jsx("br",{}),`
Gebruik het `,n.jsx(e.code,{children:"on"})," attribuut om de button programmatorisch aan- of uit te zetten.",n.jsx("br",{}),`
Gebruik het `,n.jsx(e.code,{children:"controlled"})," attribuut als je wil dat de button zich niet zelf aan- of uitzet, gebruik dan het ",n.jsx(e.code,{children:"on"}),`
attribuut om de button aan- of uit te zetten.`]}),`
`,n.jsx(a,{of:x}),`
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
`]}),`
`,n.jsxs(e.p,{children:[`Meer context over wanneer een button of een link te gebruiken kan je vinden in de blogpost
`,n.jsx(e.a,{href:"https://adamsilver.io/blog/but-sometimes-buttons-look-like-links/",rel:"nofollow",children:"'but sometimes buttons look like links'"}),"."]}),`
`,n.jsx(a,{of:j}),`
`,n.jsx(e.h3,{id:"input-group",children:"Input Group"}),`
`,n.jsxs(e.p,{children:["Het ",n.jsx(e.code,{children:"input-group"}),` attribuut is er om de knop een specifieke stijl te geven in combinatie met een input-field. Het
attribuut doet enkel iets in die combinatie. Zie `,n.jsx(e.a,{href:"/docs/components-form-input-group--documentatie",children:"Input Group [next]"}),`
voor meer informatie en voorbeelden.`]}),`
`,n.jsx(e.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,n.jsx(e.p,{children:"Zorg er steeds voor dat de button een duidelijke en beknopte tekstuele beschrijving heeft van de actie die uitgevoerd wordt bij het klikken op de button. Dit is belangrijk voor alle gebruikers, maar vooral voor gebruikers die schermlezers gebruiken."}),`
`,n.jsxs(e.p,{children:["Indien de button enkel een icoon bevat, is het verplicht om het ",n.jsx(e.code,{children:"label"})," attribuut te gebruiken zodat een beschrijvende ",n.jsx(e.code,{children:"aria-label"})," wordt toegevoegd aan de button."]}),`
`,n.jsxs(e.p,{children:["Indien de button een dropdown menu of dialog opent, gebruik dan het ",n.jsx(e.code,{children:"aria-haspopup"})," attribuut met de juiste waarde (",n.jsx(e.code,{children:"true"}),", ",n.jsx(e.code,{children:"menu"}),", ",n.jsx(e.code,{children:"listbox"}),", ",n.jsx(e.code,{children:"tree"}),", ",n.jsx(e.code,{children:"grid"}),", ",n.jsx(e.code,{children:"dialog"}),") om aan te geven dat er een popup aanwezig is. Dit helpt schermlezers om de gebruiker correct te informeren over de aanwezigheid van een popup. ",n.jsx(e.code,{children:"aria-haspopup"})," wordt doorgegeven aan de onderliggende button."]}),`
`,n.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,n.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/button",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Button"})})]})}function cn(i={}){const{wrapper:e}={...G(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(L,{...i})}):L(i)}function sn(i,e){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}rn([ln]);const $n={id:"components-atom-button",title:"Components - Atom/button",tags:["autodocs"],args:o,argTypes:dn,parameters:{docs:{page:cn}}},l=tn(o,({type:i,disabled:e,error:T,block:E,large:A,wide:C,narrow:O,secondary:N,tertiary:I,ghost:P,loading:R,icon:M,ctaLink:D,iconPlacement:z,toggle:H,on:U,controlled:K,external:_,inputGroup:W,label:F,defaultSlot:V,onVlClick:X,onVlToggle:Z})=>on`
            <vl-button
                type=${i}
                ?disabled=${e}
                ?error=${T}
                ?block=${E}
                ?large=${A}
                ?wide=${C}
                ?narrow=${O}
                ?secondary=${N}
                ?tertiary=${I}
                ?ghost=${P}
                ?loading=${R}
                label=${F}
                icon=${M}
                cta-link=${D}
                icon-placement=${z}
                ?toggle=${H}
                ?on=${U}
                ?controlled=${K}
                ?external=${_}
                ?inputGroup=${W}
                @vl-click=${X}
                @vl-toggle=${Z}
            >
                ${an(typeof V=="string"?`
                            ${T===!0?"Error: ":""}
                            ${V}
                            ${e===!0?" (disabled)":""}
                        `:"")}
            </vl-button>
        `),d=l.bind({});d.storyName="vl-button - primary";d.args={defaultSlot:"Klik op mij"};const c=l.bind({});c.storyName="vl-button - secondary";c.args={defaultSlot:"Klik op mij",secondary:!0};const s=l.bind({});s.storyName="vl-button - tertiary";s.args={defaultSlot:"Klik op mij",tertiary:!0};const u=l.bind({});u.storyName="vl-button - ghost";u.args={defaultSlot:"Klik op mij",ghost:!0};const g=l.bind({});g.storyName="vl-button - disabled";g.args={defaultSlot:"Klik op mij",disabled:!0};const b=l.bind({});b.storyName="vl-button - error";b.args={defaultSlot:"Klik op mij",error:!0};const $=l.bind({});$.storyName="vl-button - block";$.args={defaultSlot:"Klik op mij",block:!0};const p=l.bind({});p.storyName="vl-button - large";p.args={defaultSlot:"Klik op mij",large:!0};const m=l.bind({});m.storyName="vl-button - wide";m.args={defaultSlot:"Klik op mij",wide:!0};const y=l.bind({});y.storyName="vl-button - narrow";y.args={defaultSlot:"Klik op mij",narrow:!0};const k=l.bind({});k.storyName="vl-button - loading";k.args={defaultSlot:"Klik op mij",loading:!0};const h=l.bind({});h.storyName="vl-button - icon";h.args={defaultSlot:"Klik op mij",icon:"location",iconPlacement:"before"};const f=l.bind({});f.storyName="vl-button - icon only";f.args={icon:"location",label:"Locatie"};const v=l.bind({});v.storyName="vl-button - icon only - ghost";v.args={icon:"trash",label:"Verwijder",ghost:!0};const x=l.bind({});x.storyName="vl-button - toggle";x.args={defaultSlot:"Klik op mij",toggle:!0};const j=l.bind({});j.storyName="vl-button - cta-link";j.args={icon:"add",defaultSlot:"Voeg nieuw object toe.",ctaLink:"https://www.vlaanderen.be"};const w=l.bind({});w.storyName="vl-button - input-group";w.args={defaultSlot:"Klik op mij",inputGroup:!0};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
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
        \`)`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
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
        \`)`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
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
        \`)`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
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
        \`)`,...b.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
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
        \`)`,...$.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
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
        \`)`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
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
        \`)`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
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
        \`)`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
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
        \`)`,...k.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
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
        \`)`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
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
        \`)`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`story(buttonArgs, ({
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
        \`)`,...w.parameters?.docs?.source}}};const pn=["ButtonPrimary","ButtonSecondary","ButtonTertiary","ButtonGhost","ButtonDisabled","ButtonError","ButtonBlock","ButtonLarge","ButtonWide","ButtonNarrow","ButtonLoading","ButtonIcon","ButtonIconOnly","ButtonIconOnlyGhost","ButtonToggle","ButtonCtaLink","ButtonInputGroup"];export{$ as ButtonBlock,j as ButtonCtaLink,g as ButtonDisabled,b as ButtonError,u as ButtonGhost,h as ButtonIcon,f as ButtonIconOnly,v as ButtonIconOnlyGhost,w as ButtonInputGroup,p as ButtonLarge,k as ButtonLoading,y as ButtonNarrow,d as ButtonPrimary,c as ButtonSecondary,s as ButtonTertiary,x as ButtonToggle,m as ButtonWide,pn as __namedExportsOrder,$n as default};
