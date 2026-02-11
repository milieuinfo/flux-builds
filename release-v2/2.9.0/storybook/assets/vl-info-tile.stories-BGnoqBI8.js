import{K as t,L as i,Q as M,P as z,H as Y,I as Z,bV as I,bW as B,u as D,j as e,C as a,bc as K,s as Q,x as j}from"./iframe-CYuKbPIU.js";import{o as k}from"./unsafe-html-DQsG5exK.js";import"./preload-helper-D9Z9MdNV.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,l={...Z,autoOpen:!1,center:!1,clickable:!1,clickableLabel:"",toggleable:!1,contentSlot:"",subtitleSlot:"",titleSlot:"",footerSlot:"",menuSlot:"",badgeSlot:"",size:"",icon:"",iconAsBadge:!1,type:"",fullHeight:!1,onVlClickInfoTile:q("vl-click-info-tile")},J={...Y,autoOpen:{name:"auto-open",description:"Opent de info tile automatisch bij de eerste render.<br>Alleen bruikbaar indien toggleable aanstaat.",table:{category:t.ATTRIBUTES,type:{summary:i.BOOLEAN},defaultValue:{summary:String(l.autoOpen)}}},center:{name:"center",description:"Centreert de tekst van de info tile.",table:{category:t.ATTRIBUTES,type:{summary:i.BOOLEAN},defaultValue:{summary:String(l.center)}}},fullHeight:{name:"full-height",description:"Strekt de info tile verticaal uit om de volledige hoogte van de container te vullen.",table:{category:t.ATTRIBUTES,type:{summary:i.BOOLEAN},defaultValue:{summary:String(l.fullHeight)}}},clickable:{name:"clickable",description:"Maakt de info-tile aanklikbaar. <br>Werkt niet in combinatie met `toggleable`-attribuut",table:{category:t.ATTRIBUTES,type:{summary:i.BOOLEAN},defaultValue:{summary:String(l.clickable)}}},clickableLabel:{name:"clickable-label",description:"Stelt de aria-label in van de button die de info-tile aanklikbaar maakt. <br>Van belang voor WCAG wanneer het `clickable`-attribuut aanstaat.",table:{category:t.ATTRIBUTES,type:{summary:i.STRING},defaultValue:{summary:l.clickableLabel}}},toggleable:{name:"toggleable",description:"Maakt de info tile openklapbaar.",table:{category:t.ATTRIBUTES,type:{summary:i.BOOLEAN},defaultValue:{summary:String(l.toggleable)}}},contentSlot:{name:"content",description:"De content van de info tile.",table:{category:t.SLOTS,type:{summary:i.HTML},defaultValue:{summary:l.contentSlot}}},subtitleSlot:{name:"subtitle",description:"De subtitel van de info tile.",table:{category:t.SLOTS,type:{summary:i.HTML},defaultValue:{summary:l.subtitleSlot}}},titleSlot:{name:"title",description:"De titel van de info tile.",table:{category:t.SLOTS,type:{summary:i.HTML},defaultValue:{summary:l.titleSlot}}},footerSlot:{name:"footer",description:"De footer van de info tile. Dit is de plaats waar actieknoppen toegevoegd kunnen worden.",table:{category:t.SLOTS,type:{summary:i.HTML},defaultValue:{summary:l.footerSlot}}},menuSlot:{name:"menu",description:"Slot-element om een popover menu toe te voegen in de rechterbovenhoek.",table:{category:t.SLOTS,type:{summary:i.HTML},defaultValue:{summary:l.menuSlot}}},badgeSlot:{name:"badge",description:'Slot-element om een badge toe te voegen. Dit werkt niet in combinatie met het "icon" attribuut.',table:{category:t.SLOTS,type:{summary:i.HTML},defaultValue:{summary:l.badgeSlot}}},size:{name:"size",description:'Grootte van de info tile. Dit attribuut past de padding van het component aan. Standaard is dit "small". De andere opties zijn "medium" en "large".',control:{type:z.SELECT},options:Object.values(B),table:{category:t.ATTRIBUTES,type:{summary:M(Object.values(B))},defaultValue:{summary:l.size}}},type:{name:"type",description:'Type van de info tile. Dit bepaalt de stijl en het uiterlijk van de tile. Standaard is dit "default". De andere opties zijn "alt", "error", "success", en "warning".',control:{type:z.SELECT},options:Object.values(I),table:{category:t.ATTRIBUTES,type:{summary:M(Object.values(I))},defaultValue:{summary:l.type}}},icon:{name:"icon",description:'Beeldt een icoon af in de info tile. Dit werkt niet in combinatie met het "badge" slot.',table:{category:t.ATTRIBUTES,type:{summary:i.STRING},defaultValue:{summary:l.icon}}},iconAsBadge:{name:"icon-as-badge",description:'Geeft aan het icoon de "badge" stijl. Het "icon" attribuut is in dit geval vereist. Dit werkt niet in combinatie met het "badge" slot.',table:{category:t.ATTRIBUTES,type:{summary:i.BOOLEAN},defaultValue:{summary:String(l.iconAsBadge)}}},onVlClickInfoTile:{name:"vl-click-info-tile",description:"Event dat afgevuurd wordt als er op de info-tile wordt geklikt.",table:{category:t.EVENTS}}};function A(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...D(),...s.components},{FluxComponentMetaData:H}=n;return H||ne("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"info-tile",children:"Info Tile"}),`
`,e.jsx(H,{id:"components-block-info-tile"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"info-tile"})," component in informatieve en interactieve dashboards."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlInfoTile } from '@domg-wc/components/block';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-info-tile></vl-info-tile>
`})}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(K,{of:c}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"small",children:"Small"}),`
`,e.jsx(a,{of:u}),`
`,e.jsx(n.h3,{id:"medium",children:"Medium"}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(n.h3,{id:"large",children:"Large"}),`
`,e.jsx(a,{of:f}),`
`,e.jsx(n.h3,{id:"alt",children:"Alt"}),`
`,e.jsx(a,{of:b}),`
`,e.jsx(n.h3,{id:"success",children:"Success"}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(n.h3,{id:"warning",children:"Warning"}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(n.h3,{id:"error",children:"Error"}),`
`,e.jsx(a,{of:g}),`
`,e.jsx(n.h3,{id:"gecentreerd",children:"Gecentreerd"}),`
`,e.jsx(a,{of:S}),`
`,e.jsx(n.h3,{id:"verticaal-vullend",children:"Verticaal vullend"}),`
`,e.jsx(n.p,{children:"Hiermee krijgt de info tile een hoogte van 100%. Dit werkt enkel indien de container ook een vaste hoogte heeft."}),`
`,e.jsxs(n.p,{children:["Dit werkt best in combinatie met een ",e.jsx(n.code,{children:".vl-grid"}),", met verschillende ",e.jsx(n.code,{children:"vl-info-tile"})," componenten als directe kinderen, die elk de CSS-klassen ",e.jsx(n.code,{children:".vl-column"})," en ",e.jsx(n.code,{children:".vl-column--align-self-stretch"})," hebben (met daarbij klassen voor de kolom breedte en eventuele responsieve klassen)."]}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(n.h3,{id:"met-toggle",children:"Met toggle"}),`
`,e.jsx(a,{of:$}),`
`,e.jsx(n.h3,{id:"met-menu",children:"Met menu"}),`
`,e.jsx(a,{of:v}),`
`,e.jsx(n.h3,{id:"clickable",children:"Clickable"}),`
`,e.jsxs(n.p,{children:["Maakt de info-tile aanklikbaar. Dit is niet combineerbaar met het ",e.jsx(n.code,{children:"data-vl-toggleable"}),`-attribuut.
In dit voorbeeld wordt dit gebruikt in combinatie met een menu-slot.`]}),`
`,e.jsx(a,{of:T}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-info-tile",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Info Tile"})}),`
`,e.jsx(n.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-info-tile--default",rel:"nofollow",children:"Legacy Storybook - Info Tile"})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlInfoTile.html",rel:"nofollow",children:"Legacy Documentatie - Info Tile"})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-info-tile.html",rel:"nofollow",children:"Legacy Demo - Info Tile"})})]})}function ee(s={}){const{wrapper:n}={...D(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(A,{...s})}):A(s)}function ne(s,n){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}const ie={id:"components-block-info-tile",title:"Components - Block/info-tile",tags:["autodocs"],args:l,argTypes:J,parameters:{docs:{page:ee}}},o=Q({...l,classes:""},({autoOpen:s,toggleable:n,center:H,clickable:x,clickableLabel:O,contentSlot:w,subtitleSlot:V,titleSlot:C,footerSlot:E,menuSlot:N,badgeSlot:U,size:R,icon:_,iconAsBadge:F,type:G,fullHeight:W=!1,classes:P="",onVlClickInfoTile:X})=>j`
        <vl-info-tile
            ?auto-open=${s}
            ?center=${H}
            ?icon-as-badge=${F}
            ?toggleable=${n}
            ?full-height=${W}
            ?clickable=${x}
            clickable-label=${O}
            icon="${_}"
            size="${R}"
            type="${G}"
            class="${P}"
            @vl-click-info-tile="${X}"
        >
            ${k(U)} ${k(C)} ${k(N)} ${k(V)}
            ${k(w)} ${k(E)}
        </vl-info-tile>
    `),c=o.bind({});c.storyName="vl-info-tile - default";c.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>'};const u=o.bind({});u.storyName="vl-info-tile - small";u.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',size:"small"};const d=o.bind({});d.storyName="vl-info-tile - medium";d.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',size:"medium"};const f=o.bind({});f.storyName="vl-info-tile - large";f.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',size:"large"};const b=o.bind({});b.storyName="vl-info-tile - alt";b.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',type:"alt"};const g=o.bind({});g.storyName="vl-info-tile - error";g.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',type:"error"};const p=o.bind({});p.storyName="vl-info-tile - success";p.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',type:"success"};const m=o.bind({});m.storyName="vl-info-tile - warning";m.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',type:"warning"};const r=o.bind({});r.storyName="vl-info-tile - full height";r.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',fullHeight:!0,classes:"vl-column vl-column--6 vl-column--s-12 vl-column--align-self-stretch"};r.decorators=[s=>j`
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
    `];const S=o.bind({});S.storyName="vl-info-tile - centered";S.args={toggleable:!1,titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',center:!0};const $=o.bind({});$.storyName="vl-info-tile - toggleable";$.args={toggleable:!0,titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>'};const v=o.bind({});v.storyName="vl-info-tile - menu slot";v.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',menuSlot:`<span slot="menu">
        <vl-button ghost icon="nav-show-more-vertical" id="btn-acties" label="Acties"></vl-button>
        <vl-popover for="btn-acties" placement="bottom-end">
            <vl-popover-action-list>
                <vl-popover-action icon="search">Zoeken</vl-popover-action>
                <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
            </vl-popover-action-list>
        </vl-popover>
    </span>`};const h=o.bind({});h.storyName="vl-info-tile - icon";h.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',icon:"file-tasks-check",iconAsBadge:!0};const y=o.bind({});y.storyName="vl-info-tile - badge slot";y.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',badgeSlot:`<div slot="badge" style="
            width: 45px;
            height: 45px;
            background: var(--vl-color--background-alt);
            border: 1px solid var(--vl-color--border-default);
            border-radius: 50%;
            display: flex;
            flex-wrap: wrap;
            place-content: center center;
            font-weight: 500;
        ">BD</div>`};const L=o.bind({});L.storyName="vl-info-tile - footer slot";L.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',footerSlot:`<div slot="footer">
        <vl-button icon="file-download">Download</vl-button>
    </div>`};const T=o.bind({});T.storyName="vl-info-tile - clickable";T.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',menuSlot:`<span slot="menu">
        <vl-button ghost icon="nav-show-more-vertical" id="btn-acties" label="Acties"></vl-button>
        <vl-popover for="btn-acties" placement="bottom-end">
            <vl-popover-action-list>
                <vl-popover-action icon="search">Zoeken</vl-popover-action>
                <vl-popover-action icon="edit">Aanpassen</vl-popover-action>
                <vl-popover-action icon="bin">Verwijderen</vl-popover-action>
            </vl-popover-action-list>
        </vl-popover>
    </span>`,clickable:!0,clickableLabel:"detail pagina Broos Deprez openen"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story({
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
  onVlClickInfoTile
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
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story({
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
  onVlClickInfoTile
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
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story({
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
  onVlClickInfoTile
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
  onVlClickInfoTile
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
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story({
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
  onVlClickInfoTile
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
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story({
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
  onVlClickInfoTile
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
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story({
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
  onVlClickInfoTile
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
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story({
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
  onVlClickInfoTile
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
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...m.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story({
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
  onVlClickInfoTile
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
  onVlClickInfoTile
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
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...S.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`story({
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
  onVlClickInfoTile
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
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...$.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`story({
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
  onVlClickInfoTile
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
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story({
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
  onVlClickInfoTile
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
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`story({
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
  onVlClickInfoTile
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
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...y.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`story({
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
  onVlClickInfoTile
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
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...L.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`story({
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
  onVlClickInfoTile
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
            @vl-click-info-tile="\${onVlClickInfoTile}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...T.parameters?.docs?.source}}};const ae=["InfoTileDefault","InfoTileSmall","InfoTileMedium","InfoTileLarge","InfoTileAlt","InfoTileError","InfoTileSuccess","InfoTileWarning","InfoTileFullHeight","InfoTileCentered","InfoTileToggleable","InfoTileMenuSlot","InfoTileIcon","InfoTileBadgeSlot","InfoTileFooterSlot","InfoTileClickable"];export{b as InfoTileAlt,y as InfoTileBadgeSlot,S as InfoTileCentered,T as InfoTileClickable,c as InfoTileDefault,g as InfoTileError,L as InfoTileFooterSlot,r as InfoTileFullHeight,h as InfoTileIcon,f as InfoTileLarge,d as InfoTileMedium,v as InfoTileMenuSlot,u as InfoTileSmall,p as InfoTileSuccess,$ as InfoTileToggleable,m as InfoTileWarning,ae as __namedExportsOrder,ie as default};
