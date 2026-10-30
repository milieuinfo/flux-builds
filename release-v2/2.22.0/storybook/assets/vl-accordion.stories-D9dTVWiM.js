import{Z as o,_ as l,X as z,a1 as j,W as _,a2 as U,bT as f,u as k,j as e,C as d,b4 as G,s as F,b as Z,r as X,bG as K,bv as W,f as Y}from"./iframe-ylVHDfb1.js";import{o as $}from"./unsafe-html--mv6C7rg.js";import{a as J,V as q}from"./vl-accordion.component-Da6SByGD.js";import"./preload-helper-PPVm8Dsz.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,t={...z,...J,triggerSlot:"",subtitleSlot:"",actionsSlot:"",contentSlot:"",onVlToggle:S("vl-toggle"),onVlOpen:S("vl-open"),onVlClose:S("vl-close")},Q={..._,open:{name:"open",description:"Of de accordion open is. Zet de begintoestand en volgt daarna de huidige toestand, ook na een klik.",table:{type:{summary:l.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(t.open)}}},toggleText:{name:"toggle-text",description:"Tekst van de toggle-knop.<br>Niet combineren met `open-toggle-text`, `close-toggle-text` of de `trigger` slot.",table:{type:{summary:l.STRING},category:o.ATTRIBUTES,defaultValue:{summary:t.toggleText}}},openToggleText:{name:"open-toggle-text",description:"Tekst van de toggle-knop als de accordion gesloten is.<br>Gebruik samen met `close-toggle-text`.",table:{type:{summary:l.STRING},category:o.ATTRIBUTES,defaultValue:{summary:t.openToggleText}}},closeToggleText:{name:"close-toggle-text",description:"Tekst van de toggle-knop als de accordion open is.<br>Gebruik samen met `open-toggle-text`.",table:{type:{summary:l.STRING},category:o.ATTRIBUTES,defaultValue:{summary:t.closeToggleText}}},contentPadding:{name:"content-padding",description:"De padding van de inhoud, op desktop en mobiel.",control:{type:j.SELECT},options:["",...Object.keys(f)],table:{type:{summary:U(Object.keys(f))},category:o.ATTRIBUTES,defaultValue:{summary:t.contentPadding}}},headingLevel:{name:"heading-level",description:"Zet de toggle-knop in een heading van niveau 1 tot 6.<br>Zonder of met een ongeldige waarde staat de knop niet in een heading.",control:{type:j.SELECT},options:["","1","2","3","4","5","6"],table:{type:{summary:"1 | 2 | 3 | 4 | 5 | 6"},category:o.ATTRIBUTES,defaultValue:{summary:t.headingLevel}}},icon:{name:"icon",description:"Icoon voor de tekst van de toggle-knop.",table:{type:{summary:l.STRING},category:o.ATTRIBUTES,defaultValue:{summary:t.icon}}},altBackground:{name:"alt-background",description:"Toont de accordion met een alternatieve grijze achtergrond.",table:{type:{summary:l.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(t.altBackground)}}},bold:{name:"bold",description:"Toont de tekst van de toggle-knop vetgedrukt.",table:{type:{summary:l.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(t.bold)}}},disabled:{name:"disabled",description:"Schakelt de accordion uit. Hij blijft gesloten en zijn inhoud is niet vindbaar.",table:{type:{summary:l.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(t.disabled)}}},triggerSlot:{name:"trigger",description:"Tekst of elementen in de toggle-knop.<br>Niet combineren met `toggle-text`, `open-toggle-text` of `close-toggle-text`.",table:{type:{summary:l.HTML},category:o.SLOTS,defaultValue:{summary:t.triggerSlot}}},subtitleSlot:{name:"subtitle",description:"Tekst onder de toggle-knop, zichtbaar in open en gesloten toestand.",table:{type:{summary:l.HTML},category:o.SLOTS,defaultValue:{summary:t.subtitleSlot}}},actionsSlot:{name:"actions",description:"Knoppen of links naast de toggle-knop, bijvoorbeeld een menu.",table:{type:{summary:l.HTML},category:o.SLOTS,defaultValue:{summary:t.actionsSlot}}},contentSlot:{name:"content",description:"De inhoud die open- en dichtklapt.",table:{type:{summary:l.HTML},category:o.SLOTS,defaultValue:{summary:t.contentSlot}}},onVlToggle:{name:"vl-toggle",description:"Afgevuurd bij elke wijziging van de open-toestand. Bubbelt.",table:{type:{summary:"{ expanded: boolean }"},category:o.EVENTS}},onVlOpen:{name:"vl-open",description:"Afgevuurd wanneer de accordion opent. Bubbelt.",table:{category:o.EVENTS}},onVlClose:{name:"vl-close",description:"Afgevuurd wanneer de accordion sluit. Bubbelt.",table:{category:o.EVENTS}}};function y(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...k(),...a.components},{FluxComponentMetaData:h}=n;return h||ne("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"accordion-next",children:"Accordion next"}),`
`,e.jsx(h,{id:"components-block-next-accordion"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"accordion-next"})," component om inhoud te tonen of te verbergen met een toggle-knop."]}),`
`,e.jsxs(n.p,{children:["Deze component is de nieuwe versie van de ",e.jsx(n.a,{href:"/docs/components-block-accordion--documentatie",children:"vl-accordion"})," component."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlAccordionComponent } from '@domg-wc/components/block/next';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-accordion-next toggle-text="Lees meer">
    <p slot="content">Inhoud</p>
</vl-accordion-next>
`})}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(G,{of:s}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"heading",children:"Heading"}),`
`,e.jsxs(n.p,{children:["Met ",e.jsx(n.code,{children:"heading-level"})," staat de toggle-knop in een heading van niveau 1 tot 6."]}),`
`,e.jsx(d,{of:r}),`
`,e.jsx(n.h3,{id:"dynamische-toggle",children:"Dynamische toggle"}),`
`,e.jsx(d,{of:g}),`
`,e.jsx(n.h3,{id:"icoon",children:"Icoon"}),`
`,e.jsx(d,{of:p}),`
`,e.jsx(n.h3,{id:"trigger-slot",children:"Trigger slot"}),`
`,e.jsx(d,{of:u}),`
`,e.jsx(n.h3,{id:"subtitle-slot",children:"Subtitle slot"}),`
`,e.jsx(d,{of:x}),`
`,e.jsx(n.h3,{id:"actions-slot",children:"Actions slot"}),`
`,e.jsx(d,{of:T}),`
`,e.jsx(n.h3,{id:"alternatieve-achtergrond",children:"Alternatieve achtergrond"}),`
`,e.jsx(d,{of:v}),`
`,e.jsx(n.h3,{id:"bold",children:"Bold"}),`
`,e.jsx(d,{of:b}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(d,{of:m}),`
`,e.jsx(n.h2,{id:"open-en-sluiten",children:"Open en sluiten"}),`
`,e.jsxs(n.p,{children:["Het ",e.jsx(n.code,{children:"open"}),` attribuut zet de begintoestand en volgt daarna de huidige toestand. Je kan het lezen en zetten, of de
methodes `,e.jsx(n.code,{children:"show()"}),", ",e.jsx(n.code,{children:"hide()"})," en ",e.jsx(n.code,{children:"toggle()"})," gebruiken. Een disabled accordion negeert die methodes."]}),`
`,e.jsxs(n.p,{children:["Bij elke wijziging van de open-toestand worden ",e.jsx(n.code,{children:"vl-toggle"})," (met ",e.jsx(n.code,{children:"{ expanded }"}),") en daarna ",e.jsx(n.code,{children:"vl-open"})," of ",e.jsx(n.code,{children:"vl-close"}),`
afgevuurd. Die events bubbelen; bij geneste accordions geeft `,e.jsx(n.code,{children:"event.target"})," aan welke accordion het event afvuurde."]}),`
`,e.jsx(n.h2,{id:"styling",children:"Styling"}),`
`,e.jsxs(n.p,{children:["De component toont zijn onderdelen via ",e.jsx(n.code,{children:"::part()"}),": ",e.jsx(n.code,{children:"base"})," (krijgt ook ",e.jsx(n.code,{children:"expanded"})," als de accordion open is), ",e.jsx(n.code,{children:"header"}),`,
`,e.jsx(n.code,{children:"trigger"}),", ",e.jsx(n.code,{children:"icon"}),", ",e.jsx(n.code,{children:"subtitle"}),", ",e.jsx(n.code,{children:"content"})," en ",e.jsx(n.code,{children:"actions"}),". Stijl op de open-toestand met ",e.jsx(n.code,{children:"vl-accordion-next[open]"}),"."]}),`
`,e.jsx(n.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsxs(n.p,{children:[`De inhoud van een gesloten accordion blijft vindbaar via de zoekfunctie van de browser (Ctrl+F of Cmd+F). Vindt de
browser een resultaat in die inhoud, dan klapt de accordion open. Hetzelfde gebeurt bij een link naar een `,e.jsx(n.code,{children:"id"}),` in de
inhoud.`]}),`
`,e.jsxs(n.p,{children:["Een accordion met het ",e.jsx(n.code,{children:"disabled"})," attribuut blijft gesloten, en zijn inhoud is niet vindbaar."]}),`
`,e.jsx(n.h2,{id:"migratie-van-vl-accordion",children:"Migratie van vl-accordion"}),`
`,e.jsxs(n.p,{children:[`| vl-accordion | vl-accordion-next |
| --- | --- |
| `,e.jsx(n.code,{children:"default-open"})," | ",e.jsx(n.code,{children:"open"}),` |
| slot `,e.jsx(n.code,{children:"title"})," | slot ",e.jsx(n.code,{children:"trigger"}),` |
| slot `,e.jsx(n.code,{children:"menu"})," | slot ",e.jsx(n.code,{children:"actions"}),` |
| default slot | slot `,e.jsx(n.code,{children:"content"}),` |
| `,e.jsx(n.code,{children:"open()"})," en ",e.jsx(n.code,{children:"close()"})," | ",e.jsx(n.code,{children:"show()"})," en ",e.jsx(n.code,{children:"hide()"}),` |
| `,e.jsx(n.code,{children:"_isOpen"})," | ",e.jsx(n.code,{children:"open"}),` |
| event `,e.jsx(n.code,{children:"vl-on-toggle"})," met ",e.jsx(n.code,{children:"{ open }"})," | event ",e.jsx(n.code,{children:"vl-toggle"})," met ",e.jsx(n.code,{children:"{ expanded }"}),", plus ",e.jsx(n.code,{children:"vl-open"})," en ",e.jsx(n.code,{children:"vl-close"}),` |
| `,e.jsx(n.code,{children:"custom-css"})," op klassen in de shadow DOM | ",e.jsx(n.code,{children:"::part()"})," en ",e.jsx(n.code,{children:"vl-accordion-next[open]"})," |"]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/accordion",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Accordion"})})]})}function ee(a={}){const{wrapper:n}={...k(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(y,{...a})}):y(a)}function ne(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}X([q,K,W,Y]);const de={id:"components-block-next-accordion",title:"Components - Block/next/accordion",tags:["autodocs"],args:t,argTypes:Q,parameters:{docs:{page:ee}}},i='<span slot="content">Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>',c=F(t,({open:a,toggleText:n,openToggleText:h,closeToggleText:V,contentPadding:L,headingLevel:A,icon:C,altBackground:M,bold:O,disabled:H,triggerSlot:B,subtitleSlot:E,actionsSlot:w,contentSlot:D,onVlToggle:N,onVlOpen:P,onVlClose:I})=>Z`
        <vl-accordion-next
            ?open=${a}
            toggle-text=${n}
            open-toggle-text=${h}
            close-toggle-text=${V}
            content-padding=${L}
            heading-level=${A}
            icon=${C}
            ?alt-background=${M}
            ?bold=${O}
            ?disabled=${H}
            @vl-toggle=${R=>N(R.detail)}
            @vl-open=${P}
            @vl-close=${I}
        >
            ${$(B)}${$(E)}${$(w)}${$(D)}
        </vl-accordion-next>
    `),s=c.bind({});s.storyName="vl-accordion-next - default";s.args={toggleText:"Lees meer over de onderwijsdoelstelling",contentSlot:i};const r=c.bind({});r.storyName="vl-accordion-next - heading";r.args={toggleText:"Dit is een heading van ingevouwen inhoud",headingLevel:"3",contentSlot:i};const g=c.bind({});g.storyName="vl-accordion-next - dynamic toggle";g.args={openToggleText:"Open de onderwijsdoelstelling",closeToggleText:"Sluit de onderwijsdoelstelling",contentSlot:i};const p=c.bind({});p.storyName="vl-accordion-next - icon";p.args={toggleText:"Lees meer over de onderwijsdoelstelling",icon:"university",contentSlot:i};const u=c.bind({});u.storyName="vl-accordion-next - trigger slot";u.args={triggerSlot:'<span slot="trigger">Lees meer over de onderwijsdoelstelling</span>',contentSlot:i};const x=c.bind({});x.storyName="vl-accordion-next - subtitle slot";x.args={triggerSlot:'<span slot="trigger">Lees meer over de onderwijsdoelstelling</span>',subtitleSlot:'<span slot="subtitle">Lorem ipsum</span>',contentSlot:i};const T=c.bind({});T.storyName="vl-accordion-next - actions slot";T.args={triggerSlot:'<span slot="trigger">Lees meer over de onderwijsdoelstelling</span>',subtitleSlot:'<span slot="subtitle">Lorem ipsum</span>',actionsSlot:`<span slot="actions">
                 <vl-button ghost icon="nav-show-more-vertical" id="btn-acties" label="onderwijs-menu"></vl-button>
                 <vl-popover for="btn-acties" placement="bottom-end">
                   <vl-popover-action-list>
                     <vl-popover-action icon="search">Zoeken</vl-popover-action>
                     <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                     <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
                   </vl-popover-action-list>
                 </vl-popover>
               </span>`,contentSlot:i};const v=c.bind({});v.storyName="vl-accordion-next - alt background";v.args={toggleText:"Lees meer over de onderwijsdoelstelling",altBackground:!0,contentSlot:i};const m=c.bind({});m.storyName="vl-accordion-next - disabled";m.args={toggleText:"Lees meer over de onderwijsdoelstelling",disabled:!0,contentSlot:i};const b=c.bind({});b.storyName="vl-accordion-next - bold";b.args={toggleText:"Lees meer over de onderwijsdoelstelling",bold:!0,contentSlot:i};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
  open,
  toggleText,
  openToggleText,
  closeToggleText,
  contentPadding,
  headingLevel,
  icon,
  altBackground,
  bold,
  disabled,
  triggerSlot,
  subtitleSlot,
  actionsSlot,
  contentSlot,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-accordion-next
            ?open=\${open}
            toggle-text=\${toggleText}
            open-toggle-text=\${openToggleText}
            close-toggle-text=\${closeToggleText}
            content-padding=\${contentPadding}
            heading-level=\${headingLevel}
            icon=\${icon}
            ?alt-background=\${altBackground}
            ?bold=\${bold}
            ?disabled=\${disabled}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(triggerSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(actionsSlot)}\${unsafeHTML(contentSlot)}
        </vl-accordion-next>
    \`)`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
  open,
  toggleText,
  openToggleText,
  closeToggleText,
  contentPadding,
  headingLevel,
  icon,
  altBackground,
  bold,
  disabled,
  triggerSlot,
  subtitleSlot,
  actionsSlot,
  contentSlot,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-accordion-next
            ?open=\${open}
            toggle-text=\${toggleText}
            open-toggle-text=\${openToggleText}
            close-toggle-text=\${closeToggleText}
            content-padding=\${contentPadding}
            heading-level=\${headingLevel}
            icon=\${icon}
            ?alt-background=\${altBackground}
            ?bold=\${bold}
            ?disabled=\${disabled}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(triggerSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(actionsSlot)}\${unsafeHTML(contentSlot)}
        </vl-accordion-next>
    \`)`,...r.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
  open,
  toggleText,
  openToggleText,
  closeToggleText,
  contentPadding,
  headingLevel,
  icon,
  altBackground,
  bold,
  disabled,
  triggerSlot,
  subtitleSlot,
  actionsSlot,
  contentSlot,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-accordion-next
            ?open=\${open}
            toggle-text=\${toggleText}
            open-toggle-text=\${openToggleText}
            close-toggle-text=\${closeToggleText}
            content-padding=\${contentPadding}
            heading-level=\${headingLevel}
            icon=\${icon}
            ?alt-background=\${altBackground}
            ?bold=\${bold}
            ?disabled=\${disabled}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(triggerSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(actionsSlot)}\${unsafeHTML(contentSlot)}
        </vl-accordion-next>
    \`)`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
  open,
  toggleText,
  openToggleText,
  closeToggleText,
  contentPadding,
  headingLevel,
  icon,
  altBackground,
  bold,
  disabled,
  triggerSlot,
  subtitleSlot,
  actionsSlot,
  contentSlot,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-accordion-next
            ?open=\${open}
            toggle-text=\${toggleText}
            open-toggle-text=\${openToggleText}
            close-toggle-text=\${closeToggleText}
            content-padding=\${contentPadding}
            heading-level=\${headingLevel}
            icon=\${icon}
            ?alt-background=\${altBackground}
            ?bold=\${bold}
            ?disabled=\${disabled}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(triggerSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(actionsSlot)}\${unsafeHTML(contentSlot)}
        </vl-accordion-next>
    \`)`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
  open,
  toggleText,
  openToggleText,
  closeToggleText,
  contentPadding,
  headingLevel,
  icon,
  altBackground,
  bold,
  disabled,
  triggerSlot,
  subtitleSlot,
  actionsSlot,
  contentSlot,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-accordion-next
            ?open=\${open}
            toggle-text=\${toggleText}
            open-toggle-text=\${openToggleText}
            close-toggle-text=\${closeToggleText}
            content-padding=\${contentPadding}
            heading-level=\${headingLevel}
            icon=\${icon}
            ?alt-background=\${altBackground}
            ?bold=\${bold}
            ?disabled=\${disabled}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(triggerSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(actionsSlot)}\${unsafeHTML(contentSlot)}
        </vl-accordion-next>
    \`)`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
  open,
  toggleText,
  openToggleText,
  closeToggleText,
  contentPadding,
  headingLevel,
  icon,
  altBackground,
  bold,
  disabled,
  triggerSlot,
  subtitleSlot,
  actionsSlot,
  contentSlot,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-accordion-next
            ?open=\${open}
            toggle-text=\${toggleText}
            open-toggle-text=\${openToggleText}
            close-toggle-text=\${closeToggleText}
            content-padding=\${contentPadding}
            heading-level=\${headingLevel}
            icon=\${icon}
            ?alt-background=\${altBackground}
            ?bold=\${bold}
            ?disabled=\${disabled}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(triggerSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(actionsSlot)}\${unsafeHTML(contentSlot)}
        </vl-accordion-next>
    \`)`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
  open,
  toggleText,
  openToggleText,
  closeToggleText,
  contentPadding,
  headingLevel,
  icon,
  altBackground,
  bold,
  disabled,
  triggerSlot,
  subtitleSlot,
  actionsSlot,
  contentSlot,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-accordion-next
            ?open=\${open}
            toggle-text=\${toggleText}
            open-toggle-text=\${openToggleText}
            close-toggle-text=\${closeToggleText}
            content-padding=\${contentPadding}
            heading-level=\${headingLevel}
            icon=\${icon}
            ?alt-background=\${altBackground}
            ?bold=\${bold}
            ?disabled=\${disabled}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(triggerSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(actionsSlot)}\${unsafeHTML(contentSlot)}
        </vl-accordion-next>
    \`)`,...T.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
  open,
  toggleText,
  openToggleText,
  closeToggleText,
  contentPadding,
  headingLevel,
  icon,
  altBackground,
  bold,
  disabled,
  triggerSlot,
  subtitleSlot,
  actionsSlot,
  contentSlot,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-accordion-next
            ?open=\${open}
            toggle-text=\${toggleText}
            open-toggle-text=\${openToggleText}
            close-toggle-text=\${closeToggleText}
            content-padding=\${contentPadding}
            heading-level=\${headingLevel}
            icon=\${icon}
            ?alt-background=\${altBackground}
            ?bold=\${bold}
            ?disabled=\${disabled}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(triggerSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(actionsSlot)}\${unsafeHTML(contentSlot)}
        </vl-accordion-next>
    \`)`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
  open,
  toggleText,
  openToggleText,
  closeToggleText,
  contentPadding,
  headingLevel,
  icon,
  altBackground,
  bold,
  disabled,
  triggerSlot,
  subtitleSlot,
  actionsSlot,
  contentSlot,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-accordion-next
            ?open=\${open}
            toggle-text=\${toggleText}
            open-toggle-text=\${openToggleText}
            close-toggle-text=\${closeToggleText}
            content-padding=\${contentPadding}
            heading-level=\${headingLevel}
            icon=\${icon}
            ?alt-background=\${altBackground}
            ?bold=\${bold}
            ?disabled=\${disabled}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(triggerSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(actionsSlot)}\${unsafeHTML(contentSlot)}
        </vl-accordion-next>
    \`)`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story(accordionArgs, ({
  open,
  toggleText,
  openToggleText,
  closeToggleText,
  contentPadding,
  headingLevel,
  icon,
  altBackground,
  bold,
  disabled,
  triggerSlot,
  subtitleSlot,
  actionsSlot,
  contentSlot,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-accordion-next
            ?open=\${open}
            toggle-text=\${toggleText}
            open-toggle-text=\${openToggleText}
            close-toggle-text=\${closeToggleText}
            content-padding=\${contentPadding}
            heading-level=\${headingLevel}
            icon=\${icon}
            ?alt-background=\${altBackground}
            ?bold=\${bold}
            ?disabled=\${disabled}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(triggerSlot)}\${unsafeHTML(subtitleSlot)}\${unsafeHTML(actionsSlot)}\${unsafeHTML(contentSlot)}
        </vl-accordion-next>
    \`)`,...b.parameters?.docs?.source}}};const ie=["AccordionDefault","AccordionHeading","AccordionDynamicToggle","AccordionIcon","AccordionTriggerSlot","AccordionSubtitleSlot","AccordionActionsSlot","AccordionAltBackground","AccordionDisabled","AccordionBold"];export{T as AccordionActionsSlot,v as AccordionAltBackground,b as AccordionBold,s as AccordionDefault,m as AccordionDisabled,g as AccordionDynamicToggle,r as AccordionHeading,p as AccordionIcon,x as AccordionSubtitleSlot,u as AccordionTriggerSlot,ie as __namedExportsOrder,de as default};
