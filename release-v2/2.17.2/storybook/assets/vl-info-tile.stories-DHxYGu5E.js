import{Z as l,_ as a,a2 as A,a1 as D,W as ne,X as le,bW as x,bX as O,u as V,j as e,C as i,b8 as te,s as oe,bY as ie,x as j}from"./iframe-BAEsER5t.js";import{o as H}from"./unsafe-html-BCucnB9c.js";import"./preload-helper-D9Z9MdNV.js";const{action:ae}=__STORYBOOK_MODULE_ACTIONS__,t={...le,autoOpen:!1,center:!1,clickable:!1,clickableLabel:"",toggleable:!1,contentSlot:"",subtitleSlot:"",titleSlot:"",footerSlot:"",menuSlot:"",badgeSlot:"",size:"",icon:"",iconAsBadge:!1,type:"",fullHeight:!1,onVlClickInfoTile:ae("vl-click-info-tile"),headingLevel:"",highlight:!1,highlightLeft:!1},se={headingLevel:{name:"heading-level",description:"Het heading-level van de titel (h1 t.e.m. h6). Indien niet opgegeven of ongeldig, wordt standaard h3 gebruikt.",control:{type:D.SELECT},options:["1","2","3","4","5","6"],table:{type:{summary:"1 | 2 | 3 | 4 | 5 | 6"},category:l.ATTRIBUTES,defaultValue:{summary:""}}},...ne,autoOpen:{name:"auto-open",description:"Opent de info tile automatisch bij de eerste render.<br>Alleen bruikbaar indien toggleable aanstaat.",table:{category:l.ATTRIBUTES,type:{summary:a.BOOLEAN},defaultValue:{summary:String(t.autoOpen)}}},center:{name:"center",description:"Centreert de tekst van de info tile.",table:{category:l.ATTRIBUTES,type:{summary:a.BOOLEAN},defaultValue:{summary:String(t.center)}}},fullHeight:{name:"full-height",description:"Strekt de info tile verticaal uit om de volledige hoogte van de container te vullen.",table:{category:l.ATTRIBUTES,type:{summary:a.BOOLEAN},defaultValue:{summary:String(t.fullHeight)}}},clickable:{name:"clickable",description:"Maakt de info-tile aanklikbaar. <br>Werkt niet in combinatie met `toggleable`-attribuut",table:{category:l.ATTRIBUTES,type:{summary:a.BOOLEAN},defaultValue:{summary:String(t.clickable)}}},clickableLabel:{name:"clickable-label",description:"Stelt de aria-label in van de button die de info-tile aanklikbaar maakt. <br>Van belang voor WCAG wanneer het `clickable`-attribuut aanstaat.",table:{category:l.ATTRIBUTES,type:{summary:a.STRING},defaultValue:{summary:t.clickableLabel}}},toggleable:{name:"toggleable",description:"Maakt de info tile openklapbaar.",table:{category:l.ATTRIBUTES,type:{summary:a.BOOLEAN},defaultValue:{summary:String(t.toggleable)}}},highlight:{name:"highlight",description:"Voegt een accent toe aan de bovenkant van de info tile.",table:{category:l.ATTRIBUTES,type:{summary:a.BOOLEAN},defaultValue:{summary:String(t.highlight)}}},highlightLeft:{name:"highlight-left",description:"Voegt een accent toe aan de linkerkant van de info tile.",table:{category:l.ATTRIBUTES,type:{summary:a.BOOLEAN},defaultValue:{summary:String(t.highlightLeft)}}},contentSlot:{name:"content",description:"De content van de info tile.",table:{category:l.SLOTS,type:{summary:a.HTML},defaultValue:{summary:t.contentSlot}}},subtitleSlot:{name:"subtitle",description:"De subtitel van de info tile.",table:{category:l.SLOTS,type:{summary:a.HTML},defaultValue:{summary:t.subtitleSlot}}},titleSlot:{name:"title",description:"De titel van de info tile.",table:{category:l.SLOTS,type:{summary:a.HTML},defaultValue:{summary:t.titleSlot}}},footerSlot:{name:"footer",description:"De footer van de info tile. Dit is de plaats waar actieknoppen toegevoegd kunnen worden.",table:{category:l.SLOTS,type:{summary:a.HTML},defaultValue:{summary:t.footerSlot}}},menuSlot:{name:"menu",description:"Slot-element om een popover menu toe te voegen in de rechterbovenhoek.",table:{category:l.SLOTS,type:{summary:a.HTML},defaultValue:{summary:t.menuSlot}}},badgeSlot:{name:"badge",description:'Slot-element om een badge toe te voegen. Dit werkt niet in combinatie met het "icon" attribuut.',table:{category:l.SLOTS,type:{summary:a.HTML},defaultValue:{summary:t.badgeSlot}}},size:{name:"size",description:'Grootte van de info tile. Dit attribuut past de padding van het component aan. Standaard is dit "small". De andere opties zijn "medium" en "large".',control:{type:D.SELECT},options:Object.values(O),table:{category:l.ATTRIBUTES,type:{summary:A(Object.values(O))},defaultValue:{summary:t.size}}},type:{name:"type",description:'Type van de info tile. Dit bepaalt de stijl en het uiterlijk van de tile. Standaard is dit "default". De andere opties zijn "alt", "error", "success", en "warning".',control:{type:D.SELECT},options:Object.values(x),table:{category:l.ATTRIBUTES,type:{summary:A(Object.values(x))},defaultValue:{summary:t.type}}},icon:{name:"icon",description:'Beeldt een icoon af in de info tile. Dit werkt niet in combinatie met het "badge" slot.',table:{category:l.ATTRIBUTES,type:{summary:a.STRING},defaultValue:{summary:t.icon}}},iconAsBadge:{name:"icon-as-badge",description:'Geeft aan het icoon de "badge" stijl. Het "icon" attribuut is in dit geval vereist. Dit werkt niet in combinatie met het "badge" slot.',table:{category:l.ATTRIBUTES,type:{summary:a.BOOLEAN},defaultValue:{summary:String(t.iconAsBadge)}}},onVlClickInfoTile:{name:"vl-click-info-tile",description:"Event dat afgevuurd wordt als er op de info-tile wordt geklikt.",table:{category:l.EVENTS}}};function w(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...V(),...s.components},{FluxComponentMetaData:I}=n;return I||re("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"info-tile",children:"Info Tile"}),`
`,e.jsx(I,{id:"components-block-info-tile"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"info-tile"})," component in informatieve en interactieve dashboards."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlInfoTile } from '@domg-wc/components/block';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-info-tile></vl-info-tile>
`})}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(te,{of:c}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"small",children:"Small"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"medium",children:"Medium"}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h3,{id:"large",children:"Large"}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(n.h3,{id:"alt",children:"Alt"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h3,{id:"success",children:"Success"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"warning",children:"Warning"}),`
`,e.jsx(i,{of:$}),`
`,e.jsx(n.h3,{id:"error",children:"Error"}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(n.h3,{id:"gecentreerd",children:"Gecentreerd"}),`
`,e.jsx(i,{of:v}),`
`,e.jsx(n.h3,{id:"verticaal-vullend",children:"Verticaal vullend"}),`
`,e.jsx(n.p,{children:"Hiermee krijgt de info tile een hoogte van 100%. Dit werkt enkel indien de container ook een vaste hoogte heeft."}),`
`,e.jsxs(n.p,{children:["Dit werkt best in combinatie met een ",e.jsx(n.code,{children:".vl-grid"}),", met verschillende ",e.jsx(n.code,{children:"vl-info-tile"})," componenten als directe kinderen, die elk de CSS-klassen ",e.jsx(n.code,{children:".vl-column"})," en ",e.jsx(n.code,{children:".vl-column--align-self-stretch"})," hebben (met daarbij klassen voor de kolom breedte en eventuele responsieve klassen)."]}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(n.h3,{id:"heading",children:"Heading"}),`
`,e.jsxs(n.p,{children:["Je kan een heading (h1-h6) laten renderen in de info-tile door gebruik te maken van de ",e.jsx(n.code,{children:"heading-level"})," attribute."]}),`
`,e.jsx(i,{of:S}),`
`,e.jsx(n.h3,{id:"met-toggle",children:"Met toggle"}),`
`,e.jsx(i,{of:m}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Let op:"})," Gebruik het ",e.jsx(n.code,{children:"subtitle"})," slot niet wanneer de info tile ",e.jsx(n.code,{children:"toggleable"}),` is. De subtitle hoort bij de content,
maar is geen onderdeel van het getogglede gedeelte.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"met-menu",children:"Met menu"}),`
`,e.jsx(i,{of:T}),`
`,e.jsx(n.h3,{id:"clickable",children:"Clickable"}),`
`,e.jsxs(n.p,{children:["Maakt de info-tile aanklikbaar. Dit is niet combineerbaar met het ",e.jsx(n.code,{children:"data-vl-toggleable"}),`-attribuut.
In dit voorbeeld wordt dit gebruikt in combinatie met een menu-slot.`]}),`
`,e.jsx(i,{of:k}),`
`,e.jsx(n.h3,{id:"highlight",children:"Highlight"}),`
`,e.jsx(i,{of:L}),`
`,e.jsx(n.h3,{id:"highlight-left",children:"Highlight left"}),`
`,e.jsx(i,{of:y}),`
`,e.jsx(n.h2,{id:"css-variabelen",children:"CSS variabelen"}),`
`,e.jsx(n.p,{children:"De achtergrondkleur, randkleur en iconkleur van het icon badge zijn aanpasbaar via CSS variabelen."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--vl-info-tile-icon-background-color"})})," (standaard: ",e.jsx(n.code,{children:"var(--vl-color--background-subtle)"}),"): de achtergrondkleur van het icon badge."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--vl-info-tile-icon-border-color"})})," (standaard: ",e.jsx(n.code,{children:"var(--vl-color--border-default)"}),"): de randkleur van het icon badge."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--vl-info-tile-icon-color"})})," (standaard: ",e.jsx(n.code,{children:"inherit"}),"): de kleur van het icon zelf."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`vl-info-tile {
    --vl-info-tile-icon-background-color: var(--vl-color--icon-success);
    --vl-info-tile-icon-border-color: var(--vl-color--border-success-subtle);
    --vl-info-tile-icon-color: var(--vl-color--border-inverse);
}
`})}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/info-tile",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Info Tile"})})]})}function ce(s={}){const{wrapper:n}={...V(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(w,{...s})}):w(s)}function re(s,n){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}const fe={id:"components-block-info-tile",title:"Components - Block/info-tile",tags:["autodocs"],args:t,argTypes:se,parameters:{docs:{page:ce}}},o=oe({...t,classes:""},({autoOpen:s,toggleable:n,center:I,clickable:C,clickableLabel:E,contentSlot:N,subtitleSlot:U,titleSlot:R,footerSlot:_,menuSlot:G,badgeSlot:F,size:W,icon:X,iconAsBadge:P,type:Y,fullHeight:Z=!1,classes:q="",headingLevel:J,onVlClickInfoTile:K,highlight:Q,highlightLeft:ee})=>j`
        <vl-info-tile
            ?auto-open=${s}
            ?center=${I}
            ?icon-as-badge=${P}
            ?toggleable=${n}
            ?full-height=${Z}
            ?clickable=${C}
            clickable-label=${E}
            icon="${X}"
            size="${W}"
            type="${Y}"
            class="${q}"
            heading-level="${ie(J)}"
            ?highlight=${Q}
            ?highlight-left=${ee}
            @vl-click-info-tile="${K}"
        >
            ${H(F)} ${H(R)} ${H(G)} ${H(U)}
            ${H(N)} ${H(_)}
        </vl-info-tile>
    `),c=o.bind({});c.storyName="vl-info-tile - default";c.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>'};const h=o.bind({});h.storyName="vl-info-tile - small";h.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',size:"small"};const d=o.bind({});d.storyName="vl-info-tile - medium";d.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',size:"medium"};const f=o.bind({});f.storyName="vl-info-tile - large";f.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',size:"large"};const u=o.bind({});u.storyName="vl-info-tile - alt";u.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',type:"alt"};const b=o.bind({});b.storyName="vl-info-tile - error";b.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',type:"error"};const p=o.bind({});p.storyName="vl-info-tile - success";p.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',type:"success"};const $=o.bind({});$.storyName="vl-info-tile - warning";$.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',type:"warning"};const r=o.bind({});r.storyName="vl-info-tile - full height";r.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',fullHeight:!0,classes:"vl-column vl-column--6 vl-column--s-12 vl-column--align-self-stretch"};r.decorators=[s=>j`
        <div class="vl-grid">
            ${s()}
            <vl-info-tile full-height class="vl-column vl-column--6 vl-column--s-12 vl-column--align-self-stretch">
                <span slot="title">Grotere info tile</span>
                <span slot="subtitle">sub-title</span>
                <div slot="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </vl-info-tile>
        </div>
    `];const S=o.bind({});S.storyName="vl-info-tile - heading level";S.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',headingLevel:"6"};const v=o.bind({});v.storyName="vl-info-tile - centered";v.args={toggleable:!1,titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',center:!0};const m=o.bind({});m.storyName="vl-info-tile - toggleable";m.args={toggleable:!0,titleSlot:'<span slot="title">Broos Deprez</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>'};const T=o.bind({});T.storyName="vl-info-tile - menu slot";T.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',menuSlot:`<span slot="menu">
        <vl-button ghost icon="nav-show-more-vertical" id="btn-acties" label="Acties"></vl-button>
        <vl-popover for="btn-acties" placement="bottom-end">
            <vl-popover-action-list>
                <vl-popover-action icon="search">Zoeken</vl-popover-action>
                <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
            </vl-popover-action-list>
        </vl-popover>
    </span>`};const M=o.bind({});M.storyName="vl-info-tile - icon";M.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',icon:"file-tasks-check",iconAsBadge:!0};const z=o.bind({});z.storyName="vl-info-tile - badge slot";z.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',badgeSlot:`<div slot="badge" style="
            width: 45px;
            height: 45px;
            background: var(--vl-color--background-alt);
            border: 1px solid var(--vl-color--border-default);
            border-radius: 50%;
            display: flex;
            flex-wrap: wrap;
            place-content: center center;
            font-weight: 500;
        ">BD</div>`};const B=o.bind({});B.storyName="vl-info-tile - footer slot";B.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',footerSlot:`<div slot="footer">
        <vl-button icon="file-download">Download</vl-button>
    </div>`};const g=o.bind({});g.storyName="vl-info-tile - icon primary background";g.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',icon:"file-tasks-check",iconAsBadge:!0};g.decorators=[s=>j`
        <style>
            .info-tile-primary-icon {
                --vl-info-tile-icon-background-color: var(--vl-color--icon-success);
                --vl-info-tile-icon-border-color: var(--vl-color--border-success-subtle);
                --vl-info-tile-icon-color: var(--vl-color--border-inverse);
            }
        </style>
        <div class="info-tile-primary-icon">${s()}</div>
    `];const k=o.bind({});k.storyName="vl-info-tile - clickable";k.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',menuSlot:`<span slot="menu">
        <vl-button ghost icon="nav-show-more-vertical" id="btn-acties" label="Acties"></vl-button>
        <vl-popover for="btn-acties" placement="bottom-end">
            <vl-popover-action-list>
                <vl-popover-action icon="search">Zoeken</vl-popover-action>
                <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
            </vl-popover-action-list>
        </vl-popover>
    </span>`,clickable:!0,clickableLabel:"detail pagina Broos Deprez openen"};const L=o.bind({});L.storyName="vl-info-tile - highlight";L.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',highlight:!0};const y=o.bind({});y.storyName="vl-info-tile - highlight left";y.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',highlightLeft:!0};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
  clickable,
  clickableLabel,
  contentSlot,
  subtitleSlot,
  titleSlot,
  footerSlot,
  menuSlot,
  badgeSlot,
  size,
  icon,
  iconAsBadge,
  type,
  fullHeight = false,
  classes = '',
  headingLevel,
  onVlClickInfoTile,
  highlight,
  highlightLeft
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
            heading-level="\${ifDefined(headingLevel)}"
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
  clickable,
  clickableLabel,
  contentSlot,
  subtitleSlot,
  titleSlot,
  footerSlot,
  menuSlot,
  badgeSlot,
  size,
  icon,
  iconAsBadge,
  type,
  fullHeight = false,
  classes = '',
  headingLevel,
  onVlClickInfoTile,
  highlight,
  highlightLeft
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
            heading-level="\${ifDefined(headingLevel)}"
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...h.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
  clickable,
  clickableLabel,
  contentSlot,
  subtitleSlot,
  titleSlot,
  footerSlot,
  menuSlot,
  badgeSlot,
  size,
  icon,
  iconAsBadge,
  type,
  fullHeight = false,
  classes = '',
  headingLevel,
  onVlClickInfoTile,
  highlight,
  highlightLeft
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
            heading-level="\${ifDefined(headingLevel)}"
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
  clickable,
  clickableLabel,
  contentSlot,
  subtitleSlot,
  titleSlot,
  footerSlot,
  menuSlot,
  badgeSlot,
  size,
  icon,
  iconAsBadge,
  type,
  fullHeight = false,
  classes = '',
  headingLevel,
  onVlClickInfoTile,
  highlight,
  highlightLeft
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
            heading-level="\${ifDefined(headingLevel)}"
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
  clickable,
  clickableLabel,
  contentSlot,
  subtitleSlot,
  titleSlot,
  footerSlot,
  menuSlot,
  badgeSlot,
  size,
  icon,
  iconAsBadge,
  type,
  fullHeight = false,
  classes = '',
  headingLevel,
  onVlClickInfoTile,
  highlight,
  highlightLeft
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
            heading-level="\${ifDefined(headingLevel)}"
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
  clickable,
  clickableLabel,
  contentSlot,
  subtitleSlot,
  titleSlot,
  footerSlot,
  menuSlot,
  badgeSlot,
  size,
  icon,
  iconAsBadge,
  type,
  fullHeight = false,
  classes = '',
  headingLevel,
  onVlClickInfoTile,
  highlight,
  highlightLeft
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
            heading-level="\${ifDefined(headingLevel)}"
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
  clickable,
  clickableLabel,
  contentSlot,
  subtitleSlot,
  titleSlot,
  footerSlot,
  menuSlot,
  badgeSlot,
  size,
  icon,
  iconAsBadge,
  type,
  fullHeight = false,
  classes = '',
  headingLevel,
  onVlClickInfoTile,
  highlight,
  highlightLeft
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
            heading-level="\${ifDefined(headingLevel)}"
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...p.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
  clickable,
  clickableLabel,
  contentSlot,
  subtitleSlot,
  titleSlot,
  footerSlot,
  menuSlot,
  badgeSlot,
  size,
  icon,
  iconAsBadge,
  type,
  fullHeight = false,
  classes = '',
  headingLevel,
  onVlClickInfoTile,
  highlight,
  highlightLeft
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
            heading-level="\${ifDefined(headingLevel)}"
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...$.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
  clickable,
  clickableLabel,
  contentSlot,
  subtitleSlot,
  titleSlot,
  footerSlot,
  menuSlot,
  badgeSlot,
  size,
  icon,
  iconAsBadge,
  type,
  fullHeight = false,
  classes = '',
  headingLevel,
  onVlClickInfoTile,
  highlight,
  highlightLeft
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
            heading-level="\${ifDefined(headingLevel)}"
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...r.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
  clickable,
  clickableLabel,
  contentSlot,
  subtitleSlot,
  titleSlot,
  footerSlot,
  menuSlot,
  badgeSlot,
  size,
  icon,
  iconAsBadge,
  type,
  fullHeight = false,
  classes = '',
  headingLevel,
  onVlClickInfoTile,
  highlight,
  highlightLeft
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
            heading-level="\${ifDefined(headingLevel)}"
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
  clickable,
  clickableLabel,
  contentSlot,
  subtitleSlot,
  titleSlot,
  footerSlot,
  menuSlot,
  badgeSlot,
  size,
  icon,
  iconAsBadge,
  type,
  fullHeight = false,
  classes = '',
  headingLevel,
  onVlClickInfoTile,
  highlight,
  highlightLeft
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
            heading-level="\${ifDefined(headingLevel)}"
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
  clickable,
  clickableLabel,
  contentSlot,
  subtitleSlot,
  titleSlot,
  footerSlot,
  menuSlot,
  badgeSlot,
  size,
  icon,
  iconAsBadge,
  type,
  fullHeight = false,
  classes = '',
  headingLevel,
  onVlClickInfoTile,
  highlight,
  highlightLeft
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
            heading-level="\${ifDefined(headingLevel)}"
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...m.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
  clickable,
  clickableLabel,
  contentSlot,
  subtitleSlot,
  titleSlot,
  footerSlot,
  menuSlot,
  badgeSlot,
  size,
  icon,
  iconAsBadge,
  type,
  fullHeight = false,
  classes = '',
  headingLevel,
  onVlClickInfoTile,
  highlight,
  highlightLeft
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
            heading-level="\${ifDefined(headingLevel)}"
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...T.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
  clickable,
  clickableLabel,
  contentSlot,
  subtitleSlot,
  titleSlot,
  footerSlot,
  menuSlot,
  badgeSlot,
  size,
  icon,
  iconAsBadge,
  type,
  fullHeight = false,
  classes = '',
  headingLevel,
  onVlClickInfoTile,
  highlight,
  highlightLeft
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
            heading-level="\${ifDefined(headingLevel)}"
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...M.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
  clickable,
  clickableLabel,
  contentSlot,
  subtitleSlot,
  titleSlot,
  footerSlot,
  menuSlot,
  badgeSlot,
  size,
  icon,
  iconAsBadge,
  type,
  fullHeight = false,
  classes = '',
  headingLevel,
  onVlClickInfoTile,
  highlight,
  highlightLeft
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
            heading-level="\${ifDefined(headingLevel)}"
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...z.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
  clickable,
  clickableLabel,
  contentSlot,
  subtitleSlot,
  titleSlot,
  footerSlot,
  menuSlot,
  badgeSlot,
  size,
  icon,
  iconAsBadge,
  type,
  fullHeight = false,
  classes = '',
  headingLevel,
  onVlClickInfoTile,
  highlight,
  highlightLeft
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
            heading-level="\${ifDefined(headingLevel)}"
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...B.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
  clickable,
  clickableLabel,
  contentSlot,
  subtitleSlot,
  titleSlot,
  footerSlot,
  menuSlot,
  badgeSlot,
  size,
  icon,
  iconAsBadge,
  type,
  fullHeight = false,
  classes = '',
  headingLevel,
  onVlClickInfoTile,
  highlight,
  highlightLeft
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
            heading-level="\${ifDefined(headingLevel)}"
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...g.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
  clickable,
  clickableLabel,
  contentSlot,
  subtitleSlot,
  titleSlot,
  footerSlot,
  menuSlot,
  badgeSlot,
  size,
  icon,
  iconAsBadge,
  type,
  fullHeight = false,
  classes = '',
  headingLevel,
  onVlClickInfoTile,
  highlight,
  highlightLeft
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
            heading-level="\${ifDefined(headingLevel)}"
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...k.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
  clickable,
  clickableLabel,
  contentSlot,
  subtitleSlot,
  titleSlot,
  footerSlot,
  menuSlot,
  badgeSlot,
  size,
  icon,
  iconAsBadge,
  type,
  fullHeight = false,
  classes = '',
  headingLevel,
  onVlClickInfoTile,
  highlight,
  highlightLeft
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
            heading-level="\${ifDefined(headingLevel)}"
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...L.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
  clickable,
  clickableLabel,
  contentSlot,
  subtitleSlot,
  titleSlot,
  footerSlot,
  menuSlot,
  badgeSlot,
  size,
  icon,
  iconAsBadge,
  type,
  fullHeight = false,
  classes = '',
  headingLevel,
  onVlClickInfoTile,
  highlight,
  highlightLeft
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            ?clickable=\${clickable}
            clickable-label=\${clickableLabel}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
            heading-level="\${ifDefined(headingLevel)}"
            ?highlight=\${highlight}
            ?highlight-left=\${highlightLeft}
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...y.parameters?.docs?.source}}};const ue=["InfoTileDefault","InfoTileSmall","InfoTileMedium","InfoTileLarge","InfoTileAlt","InfoTileError","InfoTileSuccess","InfoTileWarning","InfoTileFullHeight","InfoTileHeadingLevel","InfoTileCentered","InfoTileToggleable","InfoTileMenuSlot","InfoTileIcon","InfoTileBadgeSlot","InfoTileFooterSlot","InfoTileIconPrimaryBackground","InfoTileClickable","InfoTileHighlight","InfoTileHighlightLeft"];export{u as InfoTileAlt,z as InfoTileBadgeSlot,v as InfoTileCentered,k as InfoTileClickable,c as InfoTileDefault,b as InfoTileError,B as InfoTileFooterSlot,r as InfoTileFullHeight,S as InfoTileHeadingLevel,L as InfoTileHighlight,y as InfoTileHighlightLeft,M as InfoTileIcon,g as InfoTileIconPrimaryBackground,f as InfoTileLarge,d as InfoTileMedium,T as InfoTileMenuSlot,h as InfoTileSmall,p as InfoTileSuccess,m as InfoTileToggleable,$ as InfoTileWarning,ue as __namedExportsOrder,fe as default};
