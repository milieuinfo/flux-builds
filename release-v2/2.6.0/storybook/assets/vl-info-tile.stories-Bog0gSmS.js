import{L as a,K as l,Q as M,P as z,H as G,I as W,bV as B,bW as A,u as j,j as e,C as i,bd as P,s as X,x}from"./iframe-Ds54rb_7.js";import{o as T}from"./unsafe-html-CgayEJ4y.js";import"./preload-helper-D9Z9MdNV.js";const t={...W,autoOpen:!1,center:!1,toggleable:!1,contentSlot:"",subtitleSlot:"",titleSlot:"",footerSlot:"",menuSlot:"",badgeSlot:"",size:"",icon:"",iconAsBadge:!1,type:"",fullHeight:!1},Y={...G,autoOpen:{name:"auto-open",description:"Opent de info tile automatisch bij de eerste render.<br>Alleen bruikbaar indien toggleable aanstaat.",table:{category:l.ATTRIBUTES,type:{summary:a.BOOLEAN},defaultValue:{summary:String(t.autoOpen)}}},center:{name:"center",description:"Centreert de tekst van de info tile.",table:{category:l.ATTRIBUTES,type:{summary:a.BOOLEAN},defaultValue:{summary:String(t.center)}}},fullHeight:{name:"full-height",description:"Strekt de info tile verticaal uit om de volledige hoogte van de container te vullen.",table:{category:l.ATTRIBUTES,type:{summary:a.BOOLEAN},defaultValue:{summary:String(t.fullHeight)}}},toggleable:{name:"toggleable",description:"Maakt de info tile openklapbaar.",table:{category:l.ATTRIBUTES,type:{summary:a.BOOLEAN},defaultValue:{summary:String(t.toggleable)}}},contentSlot:{name:"content",description:"De content van de info tile.",table:{category:l.SLOTS,type:{summary:a.HTML},defaultValue:{summary:t.contentSlot}}},subtitleSlot:{name:"subtitle",description:"De subtitel van de info tile.",table:{category:l.SLOTS,type:{summary:a.HTML},defaultValue:{summary:t.subtitleSlot}}},titleSlot:{name:"title",description:"De titel van de info tile.",table:{category:l.SLOTS,type:{summary:a.HTML},defaultValue:{summary:t.titleSlot}}},footerSlot:{name:"footer",description:"De footer van de info tile. Dit is de plaats waar actieknoppen toegevoegd kunnen worden.",table:{category:l.SLOTS,type:{summary:a.HTML},defaultValue:{summary:t.footerSlot}}},menuSlot:{name:"menu",description:"Slot-element om een popover menu toe te voegen in de rechterbovenhoek.",table:{category:l.SLOTS,type:{summary:a.HTML},defaultValue:{summary:t.menuSlot}}},badgeSlot:{name:"badge",description:'Slot-element om een badge toe te voegen. Dit werkt niet in combinatie met het "icon" attribuut.',table:{category:l.SLOTS,type:{summary:a.HTML},defaultValue:{summary:t.badgeSlot}}},size:{name:"size",description:'Grootte van de info tile. Dit attribuut past de padding van het component aan. Standaard is dit "small". De andere opties zijn "medium" en "large".',control:{type:z.SELECT},options:Object.values(A),table:{category:l.ATTRIBUTES,type:{summary:M(Object.values(A))},defaultValue:{summary:t.size}}},type:{name:"type",description:'Type van de info tile. Dit bepaalt de stijl en het uiterlijk van de tile. Standaard is dit "default". De andere opties zijn "alt", "error", "success", en "warning".',control:{type:z.SELECT},options:Object.values(B),table:{category:l.ATTRIBUTES,type:{summary:M(Object.values(B))},defaultValue:{summary:t.type}}},icon:{name:"icon",description:'Beeldt een icoon af in de info tile. Dit werkt niet in combinatie met het "badge" slot.',table:{category:l.ATTRIBUTES,type:{summary:a.STRING},defaultValue:{summary:t.icon}}},iconAsBadge:{name:"icon-as-badge",description:'Geeft aan het icoon de "badge" stijl. Het "icon" attribuut is in dit geval vereist. Dit werkt niet in combinatie met het "badge" slot.',table:{category:l.ATTRIBUTES,type:{summary:a.BOOLEAN},defaultValue:{summary:String(t.iconAsBadge)}}}};function D(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...j(),...s.components},{FluxMetaData:L}=n;return L||K("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"info-tile",children:"Info Tile"}),`
`,e.jsx(L,{id:"components-block-info-tile"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"info-tile"})," component in informatieve en interactieve dashboards."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlInfoTile } from '@domg-wc/components/block';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-info-tile></vl-info-tile>
`})}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(P,{of:r}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"small",children:"Small"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h3,{id:"medium",children:"Medium"}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h3,{id:"large",children:"Large"}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.h3,{id:"alt",children:"Alt"}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(n.h3,{id:"success",children:"Success"}),`
`,e.jsx(i,{of:S}),`
`,e.jsx(n.h3,{id:"warning",children:"Warning"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"error",children:"Error"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"gecentreerd",children:"Gecentreerd"}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(n.h3,{id:"verticaal-vullend",children:"Verticaal vullend"}),`
`,e.jsx(n.p,{children:"Hiermee krijgt de info tile een hoogte van 100%. Dit werkt enkel indien de container ook een vaste hoogte heeft."}),`
`,e.jsxs(n.p,{children:["Dit werkt best in combinatie met een ",e.jsx(n.code,{children:".vl-grid"}),", met verschillende ",e.jsx(n.code,{children:"vl-info-tile"})," componenten als directe kinderen, die elk de CSS-klassen ",e.jsx(n.code,{children:".vl-column"})," en ",e.jsx(n.code,{children:".vl-column--align-self-stretch"})," hebben (met daarbij klassen voor de kolom breedte en eventuele responsieve klassen)."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"met-toggle",children:"Met toggle"}),`
`,e.jsx(i,{of:$}),`
`,e.jsx(n.h3,{id:"met-menu",children:"Met menu"}),`
`,e.jsx(i,{of:v}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-info-tile",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Info Tile"})}),`
`,e.jsx(n.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-info-tile--default",rel:"nofollow",children:"Legacy Storybook - Info Tile"})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlInfoTile.html",rel:"nofollow",children:"Legacy Documentatie - Info Tile"})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-info-tile.html",rel:"nofollow",children:"Legacy Demo - Info Tile"})})]})}function Z(s={}){const{wrapper:n}={...j(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(D,{...s})}):D(s)}function K(s,n){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}const ee={id:"components-block-info-tile",title:"Components - Block/info-tile",tags:["autodocs"],args:t,argTypes:Y,parameters:{docs:{page:Z}}},o=X({...t,classes:""},({autoOpen:s,toggleable:n,center:L,contentSlot:w,subtitleSlot:O,titleSlot:I,footerSlot:k,menuSlot:E,badgeSlot:N,size:U,icon:V,iconAsBadge:C,type:R,fullHeight:_=!1,classes:F=""})=>x`
        <vl-info-tile
            ?auto-open=${s}
            ?center=${L}
            ?icon-as-badge=${C}
            ?toggleable=${n}
            ?full-height=${_}
            icon="${V}"
            size="${U}"
            type="${R}"
            class="${F}"
        >
            ${T(N)} ${T(I)} ${T(E)} ${T(O)}
            ${T(w)} ${T(k)}
        </vl-info-tile>
    `),r=o.bind({});r.storyName="vl-info-tile - default";r.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>'};const u=o.bind({});u.storyName="vl-info-tile - small";u.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',size:"small"};const d=o.bind({});d.storyName="vl-info-tile - medium";d.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',size:"medium"};const g=o.bind({});g.storyName="vl-info-tile - large";g.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',size:"large"};const f=o.bind({});f.storyName="vl-info-tile - alt";f.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',type:"alt"};const p=o.bind({});p.storyName="vl-info-tile - error";p.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',type:"error"};const S=o.bind({});S.storyName="vl-info-tile - success";S.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',type:"success"};const m=o.bind({});m.storyName="vl-info-tile - warning";m.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',type:"warning"};const c=o.bind({});c.storyName="vl-info-tile - full height";c.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',fullHeight:!0,classes:"vl-column vl-column--6 vl-column--s-12 vl-column--align-self-stretch"};c.decorators=[s=>x`
        <div class="vl-grid">
            ${s()}
            <vl-info-tile fullHeight class="vl-column vl-column--6 vl-column--s-12 vl-column--align-self-stretch">
                <span slot="title">Grotere info tile</span>
                <span slot="subtitle">sub-title</span>
                <div slot="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </vl-info-tile>
        </div>
    `];const b=o.bind({});b.storyName="vl-info-tile - centered";b.args={toggleable:!1,titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',center:!0};const $=o.bind({});$.storyName="vl-info-tile - toggleable";$.args={toggleable:!0,titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>'};const v=o.bind({});v.storyName="vl-info-tile - menu slot";v.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',menuSlot:`<span slot="menu">
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
        ">BD</div>`};const H=o.bind({});H.storyName="vl-info-tile - footer slot";H.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>',footerSlot:`<div slot="footer">
        <vl-button icon="file-download">Download</vl-button>
    </div>`};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
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
  classes = ''
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
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
  classes = ''
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
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
  classes = ''
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
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
  classes = ''
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
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
  classes = ''
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
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
  classes = ''
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...p.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
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
  classes = ''
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...S.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
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
  classes = ''
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
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
  classes = ''
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
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
  classes = ''
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...b.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
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
  classes = ''
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
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
  classes = ''
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
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
  classes = ''
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
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
  classes = ''
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...y.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`story({
  ...infoTileArgs,
  classes: ''
}, ({
  autoOpen,
  toggleable,
  center,
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
  classes = ''
}) => html\`
        <vl-info-tile
            ?auto-open=\${autoOpen}
            ?center=\${center}
            ?icon-as-badge=\${iconAsBadge}
            ?toggleable=\${toggleable}
            ?full-height=\${fullHeight}
            icon="\${icon}"
            size="\${size}"
            type="\${type}"
            class="\${classes}"
        >
            \${unsafeHTML(badgeSlot)} \${unsafeHTML(titleSlot)} \${unsafeHTML(menuSlot)} \${unsafeHTML(subtitleSlot)}
            \${unsafeHTML(contentSlot)} \${unsafeHTML(footerSlot)}
        </vl-info-tile>
    \`)`,...H.parameters?.docs?.source}}};const ne=["InfoTileDefault","InfoTileSmall","InfoTileMedium","InfoTileLarge","InfoTileAlt","InfoTileError","InfoTileSuccess","InfoTileWarning","InfoTileFullHeight","InfoTileCentered","InfoTileToggleable","InfoTileMenuSlot","InfoTileIcon","InfoTileBadgeSlot","InfoTileFooterSlot"];export{f as InfoTileAlt,y as InfoTileBadgeSlot,b as InfoTileCentered,r as InfoTileDefault,p as InfoTileError,H as InfoTileFooterSlot,c as InfoTileFullHeight,h as InfoTileIcon,g as InfoTileLarge,d as InfoTileMedium,v as InfoTileMenuSlot,u as InfoTileSmall,S as InfoTileSuccess,$ as InfoTileToggleable,m as InfoTileWarning,ne as __namedExportsOrder,ee as default};
