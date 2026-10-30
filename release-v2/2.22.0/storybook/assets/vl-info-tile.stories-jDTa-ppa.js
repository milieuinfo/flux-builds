import{Z as l,_ as g,X as he,a1 as O,W as de,a2 as E,c6 as N,c7 as w,u as R,j as e,C as o,b4 as fe,s as be,b as z,r as ue,bG as $e,f as pe}from"./iframe-ylVHDfb1.js";import{o as b}from"./unsafe-html--mv6C7rg.js";import{i as Se,V as ve}from"./vl-info-tile.component-D9Hz2vrm.js";import"./preload-helper-PPVm8Dsz.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,t={...he,...Se,triggerSlot:"",titleLabelSlot:"",subtitleSlot:"",badgeSlot:"",actionsSlot:"",contentSlot:"",footerSlot:"",onVlClickInfoTile:B("vl-click-info-tile"),onVlToggle:B("vl-toggle"),onVlOpen:B("vl-open"),onVlClose:B("vl-close")},Te={...de,open:{name:"open",description:"Of een `toggleable` info tile open is. Zet de begintoestand en volgt daarna de huidige toestand, ook na een klik.",table:{type:{summary:g.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(t.open)}}},toggleable:{name:"toggleable",description:"Maakt de inhoud van de info tile open- en dichtklapbaar.",table:{type:{summary:g.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(t.toggleable)}}},clickable:{name:"clickable",description:"Maakt de hele info tile aanklikbaar.<br>Niet combineren met `toggleable`.",table:{type:{summary:g.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(t.clickable)}}},clickableLabel:{name:"clickable-label",description:"Toegankelijke naam van een `clickable` info tile. Verplicht samen met `clickable`.",table:{type:{summary:g.STRING},category:l.ATTRIBUTES,defaultValue:{summary:t.clickableLabel}}},center:{name:"center",description:"Centreert de inhoud van de info tile.",table:{type:{summary:g.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(t.center)}}},fullHeight:{name:"full-height",description:"Geeft de info tile een hoogte van 100%. Werkt enkel als de container een vaste hoogte heeft.",table:{type:{summary:g.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(t.fullHeight)}}},size:{name:"size",description:"De grootte van de padding.",control:{type:O.SELECT},options:["",...Object.values(w)],table:{type:{summary:E(Object.values(w))},category:l.ATTRIBUTES,defaultValue:{summary:t.size}}},type:{name:"type",description:"Het type van de info tile.",control:{type:O.SELECT},options:["",...Object.values(N)],table:{type:{summary:E(Object.values(N))},category:l.ATTRIBUTES,defaultValue:{summary:t.type}}},icon:{name:"icon",description:"Icoon naast de titel.<br>Niet combineren met de `badge` slot.",table:{type:{summary:g.STRING},category:l.ATTRIBUTES,defaultValue:{summary:t.icon}}},iconAsBadge:{name:"icon-as-badge",description:"Toont het icoon in een ronde badge.",table:{type:{summary:g.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(t.iconAsBadge)}}},headingLevel:{name:"heading-level",description:"Het niveau van de heading van de titel, 1 tot 6.<br>Zonder of met een ongeldige waarde: 3.",control:{type:O.SELECT},options:["","1","2","3","4","5","6"],table:{type:{summary:"1 | 2 | 3 | 4 | 5 | 6"},category:l.ATTRIBUTES,defaultValue:{summary:t.headingLevel}}},highlight:{name:"highlight",description:"Voegt een accent toe aan de bovenkant van de info tile.",table:{type:{summary:g.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(t.highlight)}}},highlightLeft:{name:"highlight-left",description:"Voegt een accent toe aan de linkerkant van de info tile.",table:{type:{summary:g.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(t.highlightLeft)}}},triggerSlot:{name:"trigger",description:"De titel van de info tile. Bij een `toggleable` info tile staat hij in de toggle-knop.",table:{type:{summary:g.HTML},category:l.SLOTS,defaultValue:{summary:t.triggerSlot}}},titleLabelSlot:{name:"title-label",description:"Label naast de titel, bijvoorbeeld een pill.",table:{type:{summary:g.HTML},category:l.SLOTS,defaultValue:{summary:t.titleLabelSlot}}},subtitleSlot:{name:"subtitle",description:"De subtitel van de info tile.<br>Bij een `toggleable` info tile blijft de subtitel zichtbaar als de tile gesloten is.",table:{type:{summary:g.HTML},category:l.SLOTS,defaultValue:{summary:t.subtitleSlot}}},badgeSlot:{name:"badge",description:"Een eigen badge naast de titel.<br>Niet combineren met `icon`.",table:{type:{summary:g.HTML},category:l.SLOTS,defaultValue:{summary:t.badgeSlot}}},actionsSlot:{name:"actions",description:"Knoppen of links in de rechterbovenhoek, bijvoorbeeld een popover menu.",table:{type:{summary:g.HTML},category:l.SLOTS,defaultValue:{summary:t.actionsSlot}}},contentSlot:{name:"content",description:"De inhoud van de info tile. Bij een `toggleable` info tile klapt die open en dicht.",table:{type:{summary:g.HTML},category:l.SLOTS,defaultValue:{summary:t.contentSlot}}},footerSlot:{name:"footer",description:"De footer van de info tile, bijvoorbeeld voor actieknoppen.",table:{type:{summary:g.HTML},category:l.SLOTS,defaultValue:{summary:t.footerSlot}}},onVlClickInfoTile:{name:"vl-click-info-tile",description:"Afgevuurd bij een klik op een `clickable` info tile. Bubbelt.",table:{category:l.EVENTS}},onVlToggle:{name:"vl-toggle",description:"Afgevuurd bij elke wijziging van de open-toestand van een `toggleable` info tile. Bubbelt.",table:{type:{summary:"{ expanded: boolean }"},category:l.EVENTS}},onVlOpen:{name:"vl-open",description:"Afgevuurd wanneer een `toggleable` info tile opent. Bubbelt.",table:{category:l.EVENTS}},onVlClose:{name:"vl-close",description:"Afgevuurd wanneer een `toggleable` info tile sluit. Bubbelt.",table:{category:l.EVENTS}}};function D(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...R(),...r.components},{FluxComponentMetaData:A}=n;return A||Le("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"info-tile-next",children:"Info Tile next"}),`
`,e.jsx(A,{id:"components-block-next-info-tile"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"info-tile-next"})," component in informatieve en interactieve dashboards."]}),`
`,e.jsxs(n.p,{children:["Deze component is de nieuwe versie van de ",e.jsx(n.a,{href:"/docs/components-block-info-tile--documentatie",children:"vl-info-tile"})," component."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlInfoTileComponent } from '@domg-wc/components/block/next';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-info-tile-next>
    <span slot="trigger">Titel</span>
    <div slot="content">Inhoud</div>
</vl-info-tile-next>
`})}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(fe,{of:h}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"small",children:"Small"}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h3,{id:"medium",children:"Medium"}),`
`,e.jsx(o,{of:$}),`
`,e.jsx(n.h3,{id:"large",children:"Large"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"alt",children:"Alt"}),`
`,e.jsx(o,{of:S}),`
`,e.jsx(n.h3,{id:"success",children:"Success"}),`
`,e.jsx(o,{of:T}),`
`,e.jsx(n.h3,{id:"warning",children:"Warning"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"error",children:"Error"}),`
`,e.jsx(o,{of:v}),`
`,e.jsx(n.h3,{id:"gecentreerd",children:"Gecentreerd"}),`
`,e.jsx(o,{of:k}),`
`,e.jsx(n.h3,{id:"verticaal-vullend",children:"Verticaal vullend"}),`
`,e.jsxs(n.p,{children:[`Hiermee krijgt de info tile een hoogte van 100%. Dit werkt enkel als de container ook een vaste hoogte heeft, bijvoorbeeld
in een `,e.jsx(n.code,{children:".vl-grid"})," met ",e.jsx(n.code,{children:".vl-column--align-self-stretch"})," op elke info tile."]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h3,{id:"heading",children:"Heading"}),`
`,e.jsxs(n.p,{children:["Met ",e.jsx(n.code,{children:"heading-level"})," kies je het niveau van de heading van de titel. Standaard is dat 3."]}),`
`,e.jsx(o,{of:L}),`
`,e.jsx(n.h3,{id:"met-toggle",children:"Met toggle"}),`
`,e.jsx(o,{of:x}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Let op:"})," bij een ",e.jsx(n.code,{children:"toggleable"}),` info tile blijft de subtitel zichtbaar als de tile gesloten is. Zet tekst die mee
open en dicht moet klappen in de `,e.jsx(n.code,{children:"content"})," slot."]}),`
`]}),`
`,e.jsx(n.h3,{id:"met-acties",children:"Met acties"}),`
`,e.jsx(o,{of:y}),`
`,e.jsx(n.h3,{id:"icoon",children:"Icoon"}),`
`,e.jsx(o,{of:V}),`
`,e.jsx(n.h3,{id:"badge-slot",children:"Badge slot"}),`
`,e.jsx(o,{of:H}),`
`,e.jsx(n.h3,{id:"footer-slot",children:"Footer slot"}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.h3,{id:"clickable",children:"Clickable"}),`
`,e.jsxs(n.p,{children:["Maakt de hele info tile aanklikbaar. Niet combineren met ",e.jsx(n.code,{children:"toggleable"}),". Geef met ",e.jsx(n.code,{children:"clickable-label"})," een toegankelijke naam."]}),`
`,e.jsx(o,{of:M}),`
`,e.jsx(n.h3,{id:"highlight",children:"Highlight"}),`
`,e.jsx(o,{of:C}),`
`,e.jsx(n.h3,{id:"highlight-left",children:"Highlight left"}),`
`,e.jsx(o,{of:I}),`
`,e.jsx(n.h2,{id:"open-en-sluiten",children:"Open en sluiten"}),`
`,e.jsxs(n.p,{children:["Bij een ",e.jsx(n.code,{children:"toggleable"})," info tile zet het ",e.jsx(n.code,{children:"open"}),` attribuut de begintoestand en volgt het daarna de huidige toestand. Je kan
het lezen en zetten, of de methodes `,e.jsx(n.code,{children:"show()"}),", ",e.jsx(n.code,{children:"hide()"})," en ",e.jsx(n.code,{children:"toggle()"})," gebruiken."]}),`
`,e.jsxs(n.p,{children:["Bij elke wijziging van de open-toestand worden ",e.jsx(n.code,{children:"vl-toggle"})," (met ",e.jsx(n.code,{children:"{ expanded }"}),") en daarna ",e.jsx(n.code,{children:"vl-open"})," of ",e.jsx(n.code,{children:"vl-close"}),`
afgevuurd. Die events bubbelen.`]}),`
`,e.jsx(n.h2,{id:"styling",children:"Styling"}),`
`,e.jsxs(n.p,{children:["De component toont zijn onderdelen via ",e.jsx(n.code,{children:"::part()"}),": ",e.jsx(n.code,{children:"base"})," (krijgt ook ",e.jsx(n.code,{children:"expanded"})," als de info tile open is), ",e.jsx(n.code,{children:"header"}),`,
`,e.jsx(n.code,{children:"trigger"})," (enkel bij ",e.jsx(n.code,{children:"toggleable"}),"), ",e.jsx(n.code,{children:"icon"}),", ",e.jsx(n.code,{children:"subtitle"}),", ",e.jsx(n.code,{children:"content"}),", ",e.jsx(n.code,{children:"actions"})," en ",e.jsx(n.code,{children:"footer"}),"."]}),`
`,e.jsx(n.p,{children:"De achtergrondkleur, randkleur en iconkleur van de icon badge zijn aanpasbaar via CSS variabelen."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--vl-info-tile-icon-background-color"})}),": de achtergrondkleur van de icon badge."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--vl-info-tile-icon-border-color"})}),": de randkleur van de icon badge."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--vl-info-tile-icon-color"})}),": de kleur van het icoon zelf."]}),`
`]}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(n.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsxs(n.p,{children:["De inhoud van een gesloten ",e.jsx(n.code,{children:"toggleable"}),` info tile blijft vindbaar via de zoekfunctie van de browser (Ctrl+F of Cmd+F).
Vindt de browser een resultaat in die inhoud, dan klapt de info tile open. Hetzelfde gebeurt bij een link naar een `,e.jsx(n.code,{children:"id"}),`
in de inhoud.`]}),`
`,e.jsx(n.h2,{id:"migratie-van-vl-info-tile",children:"Migratie van vl-info-tile"}),`
`,e.jsxs(n.p,{children:[`| vl-info-tile | vl-info-tile-next |
| --- | --- |
| `,e.jsx(n.code,{children:"auto-open"})," | ",e.jsx(n.code,{children:"open"}),` |
| slot `,e.jsx(n.code,{children:"title"})," | slot ",e.jsx(n.code,{children:"trigger"}),` |
| slot `,e.jsx(n.code,{children:"menu"})," | slot ",e.jsx(n.code,{children:"actions"}),` |
| `,e.jsx(n.code,{children:"isOpen"})," | ",e.jsx(n.code,{children:"open"}),` |
| `,e.jsx(n.code,{children:"open()"})," en ",e.jsx(n.code,{children:"close()"})," | ",e.jsx(n.code,{children:"show()"})," en ",e.jsx(n.code,{children:"hide()"}),` |
| `,e.jsx(n.code,{children:"custom-css"})," op klassen in de shadow DOM | ",e.jsx(n.code,{children:"::part()"})," en ",e.jsx(n.code,{children:"vl-info-tile-next[open]"})," |"]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/info-tile",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Info Tile"})})]})}function me(r={}){const{wrapper:n}={...R(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(D,{...r})}):D(r)}function Le(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}ue([ve,$e,pe]);const He={id:"components-block-next-info-tile",title:"Components - Block/next/info-tile",tags:["autodocs"],args:t,argTypes:Te,parameters:{docs:{page:me}}},i=be({...t,classes:""},({open:r,toggleable:n,clickable:A,clickableLabel:U,center:F,fullHeight:G,size:W,icon:Z,iconAsBadge:P,type:X,headingLevel:q,highlight:Y,highlightLeft:K,classes:J,triggerSlot:Q,titleLabelSlot:ee,subtitleSlot:ne,badgeSlot:le,actionsSlot:te,contentSlot:oe,footerSlot:ie,onVlClickInfoTile:ae,onVlToggle:se,onVlOpen:ce,onVlClose:ge})=>z`
        <vl-info-tile-next
            ?open=${r}
            ?toggleable=${n}
            ?clickable=${A}
            clickable-label=${U}
            ?center=${F}
            ?full-height=${G}
            size=${W}
            icon=${Z}
            ?icon-as-badge=${P}
            type=${X}
            heading-level=${q}
            ?highlight=${Y}
            ?highlight-left=${K}
            class=${J}
            @vl-click-info-tile=${ae}
            @vl-toggle=${re=>se(re.detail)}
            @vl-open=${ce}
            @vl-close=${ge}
        >
            ${b(le)} ${b(Q)} ${b(ee)} ${b(te)}
            ${b(ne)} ${b(oe)} ${b(ie)}
        </vl-info-tile-next>
    `),a='<span slot="trigger">Broos Deprez</span>',c='<span slot="subtitle">Uw zoon (19.05.2005)</span>',s='<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',_=`<span slot="actions">
        <vl-button ghost icon="nav-show-more-vertical" id="btn-acties" label="Acties"></vl-button>
        <vl-popover for="btn-acties" placement="bottom-end">
            <vl-popover-action-list>
                <vl-popover-action icon="search">Zoeken</vl-popover-action>
                <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
            </vl-popover-action-list>
        </vl-popover>
    </span>`,h=i.bind({});h.storyName="vl-info-tile-next - default";h.args={triggerSlot:a,subtitleSlot:c,contentSlot:s};const u=i.bind({});u.storyName="vl-info-tile-next - small";u.args={triggerSlot:a,subtitleSlot:c,contentSlot:s,size:"small"};const $=i.bind({});$.storyName="vl-info-tile-next - medium";$.args={triggerSlot:a,subtitleSlot:c,contentSlot:s,size:"medium"};const p=i.bind({});p.storyName="vl-info-tile-next - large";p.args={triggerSlot:a,subtitleSlot:c,contentSlot:s,size:"large"};const S=i.bind({});S.storyName="vl-info-tile-next - alt";S.args={triggerSlot:a,subtitleSlot:c,contentSlot:s,type:"alt"};const v=i.bind({});v.storyName="vl-info-tile-next - error";v.args={triggerSlot:a,subtitleSlot:c,contentSlot:s,type:"error"};const T=i.bind({});T.storyName="vl-info-tile-next - success";T.args={triggerSlot:a,subtitleSlot:c,contentSlot:s,type:"success"};const m=i.bind({});m.storyName="vl-info-tile-next - warning";m.args={triggerSlot:a,subtitleSlot:c,contentSlot:s,type:"warning"};const d=i.bind({});d.storyName="vl-info-tile-next - full height";d.args={triggerSlot:a,subtitleSlot:c,contentSlot:s,fullHeight:!0,classes:"vl-column vl-column--6 vl-column--s-12 vl-column--align-self-stretch"};d.decorators=[r=>z`
        <div class="vl-grid">
            ${r()}
            <vl-info-tile-next full-height class="vl-column vl-column--6 vl-column--s-12 vl-column--align-self-stretch">
                <span slot="trigger">Grotere info tile</span>
                <span slot="subtitle">sub-title</span>
                <div slot="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </vl-info-tile-next>
        </div>
    `];const L=i.bind({});L.storyName="vl-info-tile-next - heading level";L.args={triggerSlot:a,subtitleSlot:c,contentSlot:s,headingLevel:"6"};const k=i.bind({});k.storyName="vl-info-tile-next - centered";k.args={triggerSlot:a,subtitleSlot:c,contentSlot:s,center:!0};const x=i.bind({});x.storyName="vl-info-tile-next - toggleable";x.args={triggerSlot:a,contentSlot:s,toggleable:!0};const y=i.bind({});y.storyName="vl-info-tile-next - actions slot";y.args={triggerSlot:a,subtitleSlot:c,contentSlot:s,actionsSlot:_};const V=i.bind({});V.storyName="vl-info-tile-next - icon";V.args={triggerSlot:a,subtitleSlot:c,contentSlot:s,icon:"file-tasks-check",iconAsBadge:!0};const H=i.bind({});H.storyName="vl-info-tile-next - badge slot";H.args={triggerSlot:a,subtitleSlot:c,contentSlot:s,badgeSlot:`<div slot="badge" style="
            width: 45px;
            height: 45px;
            background: var(--vl-color--background-alt);
            border: 1px solid var(--vl-color--border-default);
            border-radius: 50%;
            display: flex;
            flex-wrap: wrap;
            place-content: center center;
            font-weight: 500;
        ">BD</div>`};const j=i.bind({});j.storyName="vl-info-tile-next - footer slot";j.args={triggerSlot:a,subtitleSlot:c,contentSlot:s,footerSlot:'<div slot="footer"><vl-button icon="file-download">Download</vl-button></div>'};const f=i.bind({});f.storyName="vl-info-tile-next - icon primary background";f.args={triggerSlot:a,subtitleSlot:c,contentSlot:s,icon:"file-tasks-check",iconAsBadge:!0};f.decorators=[r=>z`
        <style>
            .info-tile-primary-icon {
                --vl-info-tile-icon-background-color: var(--vl-color--icon-success);
                --vl-info-tile-icon-border-color: var(--vl-color--border-success-subtle);
                --vl-info-tile-icon-color: var(--vl-color--border-inverse);
            }
        </style>
        <div class="info-tile-primary-icon">${r()}</div>
    `];const M=i.bind({});M.storyName="vl-info-tile-next - clickable";M.args={triggerSlot:a,subtitleSlot:c,contentSlot:s,actionsSlot:_,clickable:!0,clickableLabel:"detail pagina Broos Deprez openen"};const C=i.bind({});C.storyName="vl-info-tile-next - highlight";C.args={triggerSlot:a,subtitleSlot:c,contentSlot:s,highlight:!0};const I=i.bind({});I.storyName="vl-info-tile-next - highlight left";I.args={triggerSlot:a,subtitleSlot:c,contentSlot:s,highlightLeft:!0};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  open,
  toggleable,
  clickable,
  clickableLabel,
  center,
  fullHeight,
  size,
  icon,
  iconAsBadge,
  type,
  headingLevel,
  highlight,
  highlightLeft,
  classes,
  triggerSlot,
  titleLabelSlot,
  subtitleSlot,
  badgeSlot,
  actionsSlot,
  contentSlot,
  footerSlot,
  onVlClickInfoTile,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-info-tile-next
            ?open=\${open}
            ?toggleable=\${toggleable}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            ?center=\${center}
            ?full-height=\${fullHeight}
            size=\${size}
            icon=\${icon}
            ?icon-as-badge=\${iconAsBadge}
            type=\${type}
            heading-level=\${headingLevel}
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            class=\${classes}
            @vl-click-info-tile=\${onVlClickInfoTile}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(triggerSlot)} \${unsafeHTML(titleLabelSlot)} \${unsafeHTML(actionsSlot)}
            \${unsafeHTML(subtitleSlot)} \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile-next>
    \`)`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  open,
  toggleable,
  clickable,
  clickableLabel,
  center,
  fullHeight,
  size,
  icon,
  iconAsBadge,
  type,
  headingLevel,
  highlight,
  highlightLeft,
  classes,
  triggerSlot,
  titleLabelSlot,
  subtitleSlot,
  badgeSlot,
  actionsSlot,
  contentSlot,
  footerSlot,
  onVlClickInfoTile,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-info-tile-next
            ?open=\${open}
            ?toggleable=\${toggleable}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            ?center=\${center}
            ?full-height=\${fullHeight}
            size=\${size}
            icon=\${icon}
            ?icon-as-badge=\${iconAsBadge}
            type=\${type}
            heading-level=\${headingLevel}
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            class=\${classes}
            @vl-click-info-tile=\${onVlClickInfoTile}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(triggerSlot)} \${unsafeHTML(titleLabelSlot)} \${unsafeHTML(actionsSlot)}
            \${unsafeHTML(subtitleSlot)} \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile-next>
    \`)`,...u.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  open,
  toggleable,
  clickable,
  clickableLabel,
  center,
  fullHeight,
  size,
  icon,
  iconAsBadge,
  type,
  headingLevel,
  highlight,
  highlightLeft,
  classes,
  triggerSlot,
  titleLabelSlot,
  subtitleSlot,
  badgeSlot,
  actionsSlot,
  contentSlot,
  footerSlot,
  onVlClickInfoTile,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-info-tile-next
            ?open=\${open}
            ?toggleable=\${toggleable}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            ?center=\${center}
            ?full-height=\${fullHeight}
            size=\${size}
            icon=\${icon}
            ?icon-as-badge=\${iconAsBadge}
            type=\${type}
            heading-level=\${headingLevel}
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            class=\${classes}
            @vl-click-info-tile=\${onVlClickInfoTile}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(triggerSlot)} \${unsafeHTML(titleLabelSlot)} \${unsafeHTML(actionsSlot)}
            \${unsafeHTML(subtitleSlot)} \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile-next>
    \`)`,...$.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  open,
  toggleable,
  clickable,
  clickableLabel,
  center,
  fullHeight,
  size,
  icon,
  iconAsBadge,
  type,
  headingLevel,
  highlight,
  highlightLeft,
  classes,
  triggerSlot,
  titleLabelSlot,
  subtitleSlot,
  badgeSlot,
  actionsSlot,
  contentSlot,
  footerSlot,
  onVlClickInfoTile,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-info-tile-next
            ?open=\${open}
            ?toggleable=\${toggleable}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            ?center=\${center}
            ?full-height=\${fullHeight}
            size=\${size}
            icon=\${icon}
            ?icon-as-badge=\${iconAsBadge}
            type=\${type}
            heading-level=\${headingLevel}
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            class=\${classes}
            @vl-click-info-tile=\${onVlClickInfoTile}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(triggerSlot)} \${unsafeHTML(titleLabelSlot)} \${unsafeHTML(actionsSlot)}
            \${unsafeHTML(subtitleSlot)} \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile-next>
    \`)`,...p.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  open,
  toggleable,
  clickable,
  clickableLabel,
  center,
  fullHeight,
  size,
  icon,
  iconAsBadge,
  type,
  headingLevel,
  highlight,
  highlightLeft,
  classes,
  triggerSlot,
  titleLabelSlot,
  subtitleSlot,
  badgeSlot,
  actionsSlot,
  contentSlot,
  footerSlot,
  onVlClickInfoTile,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-info-tile-next
            ?open=\${open}
            ?toggleable=\${toggleable}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            ?center=\${center}
            ?full-height=\${fullHeight}
            size=\${size}
            icon=\${icon}
            ?icon-as-badge=\${iconAsBadge}
            type=\${type}
            heading-level=\${headingLevel}
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            class=\${classes}
            @vl-click-info-tile=\${onVlClickInfoTile}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(triggerSlot)} \${unsafeHTML(titleLabelSlot)} \${unsafeHTML(actionsSlot)}
            \${unsafeHTML(subtitleSlot)} \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile-next>
    \`)`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  open,
  toggleable,
  clickable,
  clickableLabel,
  center,
  fullHeight,
  size,
  icon,
  iconAsBadge,
  type,
  headingLevel,
  highlight,
  highlightLeft,
  classes,
  triggerSlot,
  titleLabelSlot,
  subtitleSlot,
  badgeSlot,
  actionsSlot,
  contentSlot,
  footerSlot,
  onVlClickInfoTile,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-info-tile-next
            ?open=\${open}
            ?toggleable=\${toggleable}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            ?center=\${center}
            ?full-height=\${fullHeight}
            size=\${size}
            icon=\${icon}
            ?icon-as-badge=\${iconAsBadge}
            type=\${type}
            heading-level=\${headingLevel}
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            class=\${classes}
            @vl-click-info-tile=\${onVlClickInfoTile}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(triggerSlot)} \${unsafeHTML(titleLabelSlot)} \${unsafeHTML(actionsSlot)}
            \${unsafeHTML(subtitleSlot)} \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile-next>
    \`)`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  open,
  toggleable,
  clickable,
  clickableLabel,
  center,
  fullHeight,
  size,
  icon,
  iconAsBadge,
  type,
  headingLevel,
  highlight,
  highlightLeft,
  classes,
  triggerSlot,
  titleLabelSlot,
  subtitleSlot,
  badgeSlot,
  actionsSlot,
  contentSlot,
  footerSlot,
  onVlClickInfoTile,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-info-tile-next
            ?open=\${open}
            ?toggleable=\${toggleable}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            ?center=\${center}
            ?full-height=\${fullHeight}
            size=\${size}
            icon=\${icon}
            ?icon-as-badge=\${iconAsBadge}
            type=\${type}
            heading-level=\${headingLevel}
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            class=\${classes}
            @vl-click-info-tile=\${onVlClickInfoTile}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(triggerSlot)} \${unsafeHTML(titleLabelSlot)} \${unsafeHTML(actionsSlot)}
            \${unsafeHTML(subtitleSlot)} \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile-next>
    \`)`,...T.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  open,
  toggleable,
  clickable,
  clickableLabel,
  center,
  fullHeight,
  size,
  icon,
  iconAsBadge,
  type,
  headingLevel,
  highlight,
  highlightLeft,
  classes,
  triggerSlot,
  titleLabelSlot,
  subtitleSlot,
  badgeSlot,
  actionsSlot,
  contentSlot,
  footerSlot,
  onVlClickInfoTile,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-info-tile-next
            ?open=\${open}
            ?toggleable=\${toggleable}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            ?center=\${center}
            ?full-height=\${fullHeight}
            size=\${size}
            icon=\${icon}
            ?icon-as-badge=\${iconAsBadge}
            type=\${type}
            heading-level=\${headingLevel}
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            class=\${classes}
            @vl-click-info-tile=\${onVlClickInfoTile}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(triggerSlot)} \${unsafeHTML(titleLabelSlot)} \${unsafeHTML(actionsSlot)}
            \${unsafeHTML(subtitleSlot)} \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile-next>
    \`)`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  open,
  toggleable,
  clickable,
  clickableLabel,
  center,
  fullHeight,
  size,
  icon,
  iconAsBadge,
  type,
  headingLevel,
  highlight,
  highlightLeft,
  classes,
  triggerSlot,
  titleLabelSlot,
  subtitleSlot,
  badgeSlot,
  actionsSlot,
  contentSlot,
  footerSlot,
  onVlClickInfoTile,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-info-tile-next
            ?open=\${open}
            ?toggleable=\${toggleable}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            ?center=\${center}
            ?full-height=\${fullHeight}
            size=\${size}
            icon=\${icon}
            ?icon-as-badge=\${iconAsBadge}
            type=\${type}
            heading-level=\${headingLevel}
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            class=\${classes}
            @vl-click-info-tile=\${onVlClickInfoTile}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(triggerSlot)} \${unsafeHTML(titleLabelSlot)} \${unsafeHTML(actionsSlot)}
            \${unsafeHTML(subtitleSlot)} \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile-next>
    \`)`,...d.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  open,
  toggleable,
  clickable,
  clickableLabel,
  center,
  fullHeight,
  size,
  icon,
  iconAsBadge,
  type,
  headingLevel,
  highlight,
  highlightLeft,
  classes,
  triggerSlot,
  titleLabelSlot,
  subtitleSlot,
  badgeSlot,
  actionsSlot,
  contentSlot,
  footerSlot,
  onVlClickInfoTile,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-info-tile-next
            ?open=\${open}
            ?toggleable=\${toggleable}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            ?center=\${center}
            ?full-height=\${fullHeight}
            size=\${size}
            icon=\${icon}
            ?icon-as-badge=\${iconAsBadge}
            type=\${type}
            heading-level=\${headingLevel}
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            class=\${classes}
            @vl-click-info-tile=\${onVlClickInfoTile}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(triggerSlot)} \${unsafeHTML(titleLabelSlot)} \${unsafeHTML(actionsSlot)}
            \${unsafeHTML(subtitleSlot)} \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile-next>
    \`)`,...L.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  open,
  toggleable,
  clickable,
  clickableLabel,
  center,
  fullHeight,
  size,
  icon,
  iconAsBadge,
  type,
  headingLevel,
  highlight,
  highlightLeft,
  classes,
  triggerSlot,
  titleLabelSlot,
  subtitleSlot,
  badgeSlot,
  actionsSlot,
  contentSlot,
  footerSlot,
  onVlClickInfoTile,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-info-tile-next
            ?open=\${open}
            ?toggleable=\${toggleable}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            ?center=\${center}
            ?full-height=\${fullHeight}
            size=\${size}
            icon=\${icon}
            ?icon-as-badge=\${iconAsBadge}
            type=\${type}
            heading-level=\${headingLevel}
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            class=\${classes}
            @vl-click-info-tile=\${onVlClickInfoTile}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(triggerSlot)} \${unsafeHTML(titleLabelSlot)} \${unsafeHTML(actionsSlot)}
            \${unsafeHTML(subtitleSlot)} \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile-next>
    \`)`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  open,
  toggleable,
  clickable,
  clickableLabel,
  center,
  fullHeight,
  size,
  icon,
  iconAsBadge,
  type,
  headingLevel,
  highlight,
  highlightLeft,
  classes,
  triggerSlot,
  titleLabelSlot,
  subtitleSlot,
  badgeSlot,
  actionsSlot,
  contentSlot,
  footerSlot,
  onVlClickInfoTile,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-info-tile-next
            ?open=\${open}
            ?toggleable=\${toggleable}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            ?center=\${center}
            ?full-height=\${fullHeight}
            size=\${size}
            icon=\${icon}
            ?icon-as-badge=\${iconAsBadge}
            type=\${type}
            heading-level=\${headingLevel}
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            class=\${classes}
            @vl-click-info-tile=\${onVlClickInfoTile}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(triggerSlot)} \${unsafeHTML(titleLabelSlot)} \${unsafeHTML(actionsSlot)}
            \${unsafeHTML(subtitleSlot)} \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile-next>
    \`)`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  open,
  toggleable,
  clickable,
  clickableLabel,
  center,
  fullHeight,
  size,
  icon,
  iconAsBadge,
  type,
  headingLevel,
  highlight,
  highlightLeft,
  classes,
  triggerSlot,
  titleLabelSlot,
  subtitleSlot,
  badgeSlot,
  actionsSlot,
  contentSlot,
  footerSlot,
  onVlClickInfoTile,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-info-tile-next
            ?open=\${open}
            ?toggleable=\${toggleable}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            ?center=\${center}
            ?full-height=\${fullHeight}
            size=\${size}
            icon=\${icon}
            ?icon-as-badge=\${iconAsBadge}
            type=\${type}
            heading-level=\${headingLevel}
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            class=\${classes}
            @vl-click-info-tile=\${onVlClickInfoTile}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(triggerSlot)} \${unsafeHTML(titleLabelSlot)} \${unsafeHTML(actionsSlot)}
            \${unsafeHTML(subtitleSlot)} \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile-next>
    \`)`,...y.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  open,
  toggleable,
  clickable,
  clickableLabel,
  center,
  fullHeight,
  size,
  icon,
  iconAsBadge,
  type,
  headingLevel,
  highlight,
  highlightLeft,
  classes,
  triggerSlot,
  titleLabelSlot,
  subtitleSlot,
  badgeSlot,
  actionsSlot,
  contentSlot,
  footerSlot,
  onVlClickInfoTile,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-info-tile-next
            ?open=\${open}
            ?toggleable=\${toggleable}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            ?center=\${center}
            ?full-height=\${fullHeight}
            size=\${size}
            icon=\${icon}
            ?icon-as-badge=\${iconAsBadge}
            type=\${type}
            heading-level=\${headingLevel}
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            class=\${classes}
            @vl-click-info-tile=\${onVlClickInfoTile}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(triggerSlot)} \${unsafeHTML(titleLabelSlot)} \${unsafeHTML(actionsSlot)}
            \${unsafeHTML(subtitleSlot)} \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile-next>
    \`)`,...V.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  open,
  toggleable,
  clickable,
  clickableLabel,
  center,
  fullHeight,
  size,
  icon,
  iconAsBadge,
  type,
  headingLevel,
  highlight,
  highlightLeft,
  classes,
  triggerSlot,
  titleLabelSlot,
  subtitleSlot,
  badgeSlot,
  actionsSlot,
  contentSlot,
  footerSlot,
  onVlClickInfoTile,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-info-tile-next
            ?open=\${open}
            ?toggleable=\${toggleable}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            ?center=\${center}
            ?full-height=\${fullHeight}
            size=\${size}
            icon=\${icon}
            ?icon-as-badge=\${iconAsBadge}
            type=\${type}
            heading-level=\${headingLevel}
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            class=\${classes}
            @vl-click-info-tile=\${onVlClickInfoTile}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(triggerSlot)} \${unsafeHTML(titleLabelSlot)} \${unsafeHTML(actionsSlot)}
            \${unsafeHTML(subtitleSlot)} \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile-next>
    \`)`,...H.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  open,
  toggleable,
  clickable,
  clickableLabel,
  center,
  fullHeight,
  size,
  icon,
  iconAsBadge,
  type,
  headingLevel,
  highlight,
  highlightLeft,
  classes,
  triggerSlot,
  titleLabelSlot,
  subtitleSlot,
  badgeSlot,
  actionsSlot,
  contentSlot,
  footerSlot,
  onVlClickInfoTile,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-info-tile-next
            ?open=\${open}
            ?toggleable=\${toggleable}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            ?center=\${center}
            ?full-height=\${fullHeight}
            size=\${size}
            icon=\${icon}
            ?icon-as-badge=\${iconAsBadge}
            type=\${type}
            heading-level=\${headingLevel}
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            class=\${classes}
            @vl-click-info-tile=\${onVlClickInfoTile}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(triggerSlot)} \${unsafeHTML(titleLabelSlot)} \${unsafeHTML(actionsSlot)}
            \${unsafeHTML(subtitleSlot)} \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile-next>
    \`)`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  open,
  toggleable,
  clickable,
  clickableLabel,
  center,
  fullHeight,
  size,
  icon,
  iconAsBadge,
  type,
  headingLevel,
  highlight,
  highlightLeft,
  classes,
  triggerSlot,
  titleLabelSlot,
  subtitleSlot,
  badgeSlot,
  actionsSlot,
  contentSlot,
  footerSlot,
  onVlClickInfoTile,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-info-tile-next
            ?open=\${open}
            ?toggleable=\${toggleable}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            ?center=\${center}
            ?full-height=\${fullHeight}
            size=\${size}
            icon=\${icon}
            ?icon-as-badge=\${iconAsBadge}
            type=\${type}
            heading-level=\${headingLevel}
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            class=\${classes}
            @vl-click-info-tile=\${onVlClickInfoTile}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(triggerSlot)} \${unsafeHTML(titleLabelSlot)} \${unsafeHTML(actionsSlot)}
            \${unsafeHTML(subtitleSlot)} \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile-next>
    \`)`,...f.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  open,
  toggleable,
  clickable,
  clickableLabel,
  center,
  fullHeight,
  size,
  icon,
  iconAsBadge,
  type,
  headingLevel,
  highlight,
  highlightLeft,
  classes,
  triggerSlot,
  titleLabelSlot,
  subtitleSlot,
  badgeSlot,
  actionsSlot,
  contentSlot,
  footerSlot,
  onVlClickInfoTile,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-info-tile-next
            ?open=\${open}
            ?toggleable=\${toggleable}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            ?center=\${center}
            ?full-height=\${fullHeight}
            size=\${size}
            icon=\${icon}
            ?icon-as-badge=\${iconAsBadge}
            type=\${type}
            heading-level=\${headingLevel}
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            class=\${classes}
            @vl-click-info-tile=\${onVlClickInfoTile}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(triggerSlot)} \${unsafeHTML(titleLabelSlot)} \${unsafeHTML(actionsSlot)}
            \${unsafeHTML(subtitleSlot)} \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile-next>
    \`)`,...M.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  open,
  toggleable,
  clickable,
  clickableLabel,
  center,
  fullHeight,
  size,
  icon,
  iconAsBadge,
  type,
  headingLevel,
  highlight,
  highlightLeft,
  classes,
  triggerSlot,
  titleLabelSlot,
  subtitleSlot,
  badgeSlot,
  actionsSlot,
  contentSlot,
  footerSlot,
  onVlClickInfoTile,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-info-tile-next
            ?open=\${open}
            ?toggleable=\${toggleable}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            ?center=\${center}
            ?full-height=\${fullHeight}
            size=\${size}
            icon=\${icon}
            ?icon-as-badge=\${iconAsBadge}
            type=\${type}
            heading-level=\${headingLevel}
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            class=\${classes}
            @vl-click-info-tile=\${onVlClickInfoTile}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(triggerSlot)} \${unsafeHTML(titleLabelSlot)} \${unsafeHTML(actionsSlot)}
            \${unsafeHTML(subtitleSlot)} \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile-next>
    \`)`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  open,
  toggleable,
  clickable,
  clickableLabel,
  center,
  fullHeight,
  size,
  icon,
  iconAsBadge,
  type,
  headingLevel,
  highlight,
  highlightLeft,
  classes,
  triggerSlot,
  titleLabelSlot,
  subtitleSlot,
  badgeSlot,
  actionsSlot,
  contentSlot,
  footerSlot,
  onVlClickInfoTile,
  onVlToggle,
  onVlOpen,
  onVlClose
}) => html\`
        <vl-info-tile-next
            ?open=\${open}
            ?toggleable=\${toggleable}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            ?center=\${center}
            ?full-height=\${fullHeight}
            size=\${size}
            icon=\${icon}
            ?icon-as-badge=\${iconAsBadge}
            type=\${type}
            heading-level=\${headingLevel}
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            class=\${classes}
            @vl-click-info-tile=\${onVlClickInfoTile}
            @vl-toggle=\${(event: CustomEvent) => onVlToggle(event.detail)}
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(triggerSlot)} \${unsafeHTML(titleLabelSlot)} \${unsafeHTML(actionsSlot)}
            \${unsafeHTML(subtitleSlot)} \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile-next>
    \`)`,...I.parameters?.docs?.source}}};const je=["InfoTileDefault","InfoTileSmall","InfoTileMedium","InfoTileLarge","InfoTileAlt","InfoTileError","InfoTileSuccess","InfoTileWarning","InfoTileFullHeight","InfoTileHeadingLevel","InfoTileCentered","InfoTileToggleable","InfoTileActionsSlot","InfoTileIcon","InfoTileBadgeSlot","InfoTileFooterSlot","InfoTileIconPrimaryBackground","InfoTileClickable","InfoTileHighlight","InfoTileHighlightLeft"];export{y as InfoTileActionsSlot,S as InfoTileAlt,H as InfoTileBadgeSlot,k as InfoTileCentered,M as InfoTileClickable,h as InfoTileDefault,v as InfoTileError,j as InfoTileFooterSlot,d as InfoTileFullHeight,L as InfoTileHeadingLevel,C as InfoTileHighlight,I as InfoTileHighlightLeft,V as InfoTileIcon,f as InfoTileIconPrimaryBackground,p as InfoTileLarge,$ as InfoTileMedium,u as InfoTileSmall,T as InfoTileSuccess,x as InfoTileToggleable,m as InfoTileWarning,je as __namedExportsOrder,He as default};
