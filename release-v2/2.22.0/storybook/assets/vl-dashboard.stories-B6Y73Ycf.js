import{Z as r,_ as l,W as O,X as H,u as $,j as n,C as f,b4 as I,s as z,r as B,f as L,R as M,cn as G,m as P,n as R,V as W,b as i,A as p,co as Z,cp as A,bA as D,G as _}from"./iframe-ylVHDfb1.js";import{V as q}from"./vl-footer.component-DygZL_pE.js";import{V as X}from"./vl-header.component-BscuUqhg.js";import"./vl-checkbox.component-JIaDIK8d.js";import"./vl-datepicker.component-bkPzXCz5.js";import"./vl-fieldset.component-gnnClTNg.js";import"./vl-input-field-masked.component-CjwXFy6D.js";import"./vl-radio.component-bG225eeY.js";import"./vl-radio-group.component-Bg2Yqg1x.js";import"./vl-select.component-HC-RNt77.js";import"./vl-select-rich.component-Bv02-TZn.js";import"./vl-textarea.component-Plygnhn2.js";import"./vl-textarea-rich.component-B4o79-OP.js";import"./vl-upload.component-VXUupjXw.js";import{V as U}from"./vl-dashboard-header.component-B0zuaYxQ.js";import{d as s,V as F}from"./vl-dashboard.component-Ttvi9lNX.js";import{V as N}from"./vl-nav-link.component-HqPoI3Jx.js";import{V as K}from"./vl-nav-sub.component-R-nFNQB3.js";import"./preload-helper-PPVm8Dsz.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-upload-progress.component-C-7N_DLZ.js";const{action:J}=__STORYBOOK_MODULE_ACTIONS__,x={...H,userName:s.userName,userImg:s.userImg,userIcon:s.userIcon,collapsed:s.collapsed,notCollapsible:s.notCollapsible,onVlToggleNavigation:J("vl-toggle-navigation")},Y={...O,userName:{name:"user-name",description:"De naam van de gebruiker, het bedrijf of de entiteit in de header van de navigatie.<br>Staat naast `user-img`; die afbeelding is daarom decoratief en heeft een lege alt-tekst.",table:{type:{summary:l.STRING},category:r.ATTRIBUTES,defaultValue:{summary:s.userName}}},userImg:{name:"user-img",description:"Een afbeelding in de header van de navigatie, bv. een avatar van de gebruiker of een logo van het bedrijf of de entiteit.<br>Heeft voorrang op `user-icon`.",table:{type:{summary:l.URL},category:r.ATTRIBUTES,defaultValue:{summary:s.userImg}}},userIcon:{name:"user-icon",description:"Een icoon in de header van de navigatie. Wordt enkel getoond als er geen `user-img` is.",table:{type:{summary:l.STRING},category:r.ATTRIBUTES,defaultValue:{summary:s.userIcon}}},collapsed:{name:"collapsed",description:"Of de navigatie ingeklapt is. Wordt gereflecteerd: lees het uit, of zet het om de navigatie zelf in of uit te klappen.<br>Staat het attribuut er bij de start, dan wint het van de toestand in `localStorage`. Een wijziging van buitenaf wordt niet bewaard in `localStorage` en vuurt geen `vl-toggle-navigation` af.<br>Geef `collapsed` zelf door aan de `vl-nav-link` en `vl-nav-sub` componenten. Met `not-collapsible` is `collapsed` altijd `false`.",table:{type:{summary:l.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(s.collapsed)}}},notCollapsible:{name:"not-collapsible",description:"Verbergt de knop om de navigatie in te klappen, bv. als de links geen iconen hebben.<br>Een ingeklapte toestand uit `localStorage` wordt dan niet overgenomen.",table:{type:{summary:l.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(s.notCollapsible)}}},headerSlot:{name:"header",description:"De header van de pagina, gewoonlijk een `vl-header-next`.",control:!1,table:{type:{summary:l.HTML},category:r.SLOTS}},navMainSlot:{name:"nav-main",description:"De hoofdnavigatie, met `vl-nav-link` en `vl-nav-sub` componenten.<br>Gebruik ofwel iconen voor alle links, ofwel geen iconen.",control:!1,table:{type:{summary:l.HTML},category:r.SLOTS}},navUtilsSlot:{name:"nav-utils",description:"De hulpnavigatie, met `vl-nav-link` componenten, bv. voor instellingen of hulp.<br>Wordt enkel getoond als er inhoud is.",control:!1,table:{type:{summary:l.HTML},category:r.SLOTS}},contentSlot:{name:"content",description:"De inhoud van de pagina, met bovenaan één `vl-dashboard-header`. Neemt de volledige ruimte naast de navigatie in, zonder padding of maximale breedte.<br>De `vl-dashboard-header` mag ook dieper staan, bv. in de shadow root van een route-component.",control:!1,table:{type:{summary:l.HTML},category:r.SLOTS}},footerSlot:{name:"footer",description:"De footer van de pagina, gewoonlijk een `vl-footer-next`.",control:!1,table:{type:{summary:l.HTML},category:r.SLOTS}},onVlToggleNavigation:{name:"vl-toggle-navigation",description:"Event dat afgevuurd wordt bij het in- of uitklappen van de navigatie, ook bij het herstellen van een ingeklapte navigatie bij het laden.",table:{type:{summary:"{ collapsed: boolean }"},category:r.EVENTS}}};function T(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...$(),...a.components},{FluxComponentMetaData:o}=e;return o||ee("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"dashboard",children:"Dashboard"}),`
`,n.jsx(o,{id:"structures-dashboard"}),`
`,n.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"vl-dashboard"})," bouwt de layout van een applicatie op: een header, een inklapbare navigatie, de inhoud en een footer."]}),`
`,n.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { VlDashboard, VlDashboardHeader, VlNavLink, VlNavSub } from '@domg-wc/structures';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-dashboard user-name="Bedrijfsnaam" user-icon="building-big">
    <vl-header-next slot="header" skip-to-content-id="vl-dashboard-page-title"></vl-header-next>
    <vl-nav-link slot="nav-main" href="/overzicht" icon="places-home" active>Overzicht</vl-nav-link>
    <vl-nav-link slot="nav-main" href="/dossiers" icon="folder">Dossiers</vl-nav-link>
    <vl-nav-sub slot="nav-main" label="Dossier X" icon="file" href="/dossiers/x">
        <vl-nav-link href="/dossiers/x/lopend" icon="hourglass">Lopende taken</vl-nav-link>
    </vl-nav-sub>
    <vl-nav-link slot="nav-utils" href="/help" icon="question-mark-filled">Help</vl-nav-link>
    <div slot="content">
        <vl-dashboard-header page-title="Overzicht" page-icon="places-home"></vl-dashboard-header>
        <div class="dashboard-content vl-stacked vl-stacked-small"></div>
    </div>
    <vl-footer-next slot="footer"></vl-footer-next>
</vl-dashboard>
`})}),`
`,n.jsxs(e.p,{children:["Gebruik in de navigatie ",n.jsx(e.a,{href:"/docs/structures-dashboard-nav-link--documentatie",children:"vl-nav-link"}),` en
`,n.jsx(e.a,{href:"/docs/structures-dashboard-nav-sub--documentatie",children:"vl-nav-sub"}),`, en bovenaan de inhoud een
`,n.jsx(e.a,{href:"/docs/structures-dashboard-dashboard-header--documentatie",children:"vl-dashboard-header"}),"."]}),`
`,n.jsxs(e.p,{children:[`Klik in het voorbeeld op een link: die wordt actief, en de pagina met haar header wisselt mee, zie
`,n.jsx(e.a,{href:"#paginas",children:"Pagina's"}),"."]}),`
`,n.jsx(f,{of:g}),`
`,n.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,n.jsx(I,{of:g}),`
`,n.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,n.jsx(e.h3,{id:"zonder-gebruiker-en-titel",children:"Zonder gebruiker en titel"}),`
`,n.jsxs(e.p,{children:["Zonder ",n.jsx(e.code,{children:"user-name"}),", ",n.jsx(e.code,{children:"user-img"})," en ",n.jsx(e.code,{children:"user-icon"})," heeft de navigatie geen header. Zonder ",n.jsx(e.code,{children:"vl-dashboard-header"}),` heeft de
inhoud geen header.`]}),`
`,n.jsx(f,{of:j}),`
`,n.jsx(e.h3,{id:"collapsed",children:"collapsed"}),`
`,n.jsxs(e.p,{children:["Met ",n.jsx(e.code,{children:"collapsed"}),` start de navigatie ingeklapt, ook als de gebruiker ze bij een vorig bezoek uitklapte: het attribuut wint
van de toestand in `,n.jsx(e.code,{children:"localStorage"}),". Zonder het attribuut geldt de toestand uit ",n.jsx(e.code,{children:"localStorage"}),". Geef ",n.jsx(e.code,{children:"collapsed"}),` ook zelf
door aan de `,n.jsx(e.code,{children:"vl-nav-link"})," en ",n.jsx(e.code,{children:"vl-nav-sub"})," componenten, zie ",n.jsx(e.a,{href:"#navigatie",children:"Navigatie"}),"."]}),`
`,n.jsx(f,{of:b}),`
`,n.jsx(e.h3,{id:"not-collapsible",children:"not-collapsible"}),`
`,n.jsxs(e.p,{children:[`Inklappen heeft enkel zin als alle links een icoon hebben: een ingeklapte link toont enkel zijn icoon. Hebben de links
geen iconen, zet dan `,n.jsx(e.code,{children:"not-collapsible"}),". De knop om in te klappen verdwijnt, ",n.jsx(e.code,{children:"collapsed"})," is altijd ",n.jsx(e.code,{children:"false"}),`, en een
ingeklapte toestand uit een vorig bezoek wordt niet overgenomen.`]}),`
`,n.jsx(f,{of:u}),`
`,n.jsx(e.h2,{id:"paginas",children:"Pagina's"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"vl-dashboard"}),` is de vaste schil van de applicatie: de header, de navigatie en de footer staan er één keer in. Elke
pagina of route zet haar eigen titel, ondertitel, icoon en acties in een
`,n.jsx(e.a,{href:"/docs/structures-dashboard-dashboard-header--documentatie",children:"vl-dashboard-header"}),` bovenaan haar inhoud, in het slot
`,n.jsx(e.code,{children:"content"}),". Zo past de router enkel de inhoud aan, en niet de attributen van ",n.jsx(e.code,{children:"vl-dashboard"}),"."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Zet ",n.jsxs(e.strong,{children:["precies één ",n.jsx(e.code,{children:"vl-dashboard-header"})]})," in de pagina: zijn ",n.jsx(e.code,{children:"h1"})," heeft het vaste id ",n.jsx(e.code,{children:"vl-dashboard-page-title"}),`, het
doel van de skip links.`]}),`
`,n.jsxs(e.li,{children:["De header mag rechtstreeks in het slot ",n.jsx(e.code,{children:"content"})," staan, of dieper, bv. in de shadow root van een route-component."]}),`
`,n.jsxs(e.li,{children:["De ",n.jsx(e.code,{children:"header-actions"})," horen bij de header van de pagina; zonder acties blijft het slot leeg."]}),`
`,n.jsxs(e.li,{children:["De ",n.jsx(e.code,{children:"h1"})," van de pagina komt uit de ",n.jsx(e.code,{children:"vl-dashboard-header"}),"; begin de inhoud eronder met een ",n.jsx(e.code,{children:"h2"}),"."]}),`
`,n.jsxs(e.li,{children:["Na het activeren van een link in de navigatie zet ",n.jsx(e.code,{children:"vl-dashboard"})," de focus op de ",n.jsx(e.code,{children:"h1"}),` van de nieuwe
`,n.jsx(e.code,{children:"vl-dashboard-header"}),`, ook als de route die pas later rendert. De header meldt zich daarvoor zelf, zodra hij met een
`,n.jsx(e.code,{children:"page-title"})," gerenderd is of een andere ",n.jsx(e.code,{children:"page-title"}),` krijgt. Heeft de gebruiker de focus intussen ergens anders
gezet, dan blijft ze daar.`]}),`
`]}),`
`,n.jsx(e.p,{children:"Een schets met een router in een single-page applicatie:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-dashboard user-name="Bedrijfsnaam">
    <vl-nav-link slot="nav-main" href="/overzicht" icon="places-home">Overzicht</vl-nav-link>
    <vl-nav-link slot="nav-main" href="/items" icon="list">Beheer items</vl-nav-link>
    <!-- de router rendert hier de pagina van de huidige route -->
    <main-outlet slot="content"></main-outlet>
</vl-dashboard>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// per route: de actieve link verplaatsen en de pagina met haar eigen header renderen
router.on('/items', () => {
    dashboard.querySelectorAll('vl-nav-link').forEach((link) => {
        link.active = link.getAttribute('href') === '/items';
    });
    render(
        html\`
            <vl-dashboard-header page-title="Beheer items" page-icon="list">
                <vl-button slot="header-actions" icon="add">Nieuw item</vl-button>
            </vl-dashboard-header>
            <div class="dashboard-content vl-stacked vl-stacked-small">…</div>
        \`,
        outlet,
    );
});
`})}),`
`,n.jsxs(e.p,{children:["In het ",n.jsx(e.a,{href:"#voorbeeld",children:"voorbeeld bovenaan"}),` doet een click handler wat een router zou doen: de geklikte link wordt actief,
en de pagina met haar header komt in het slot `,n.jsx(e.code,{children:"content"}),`. Overzicht heeft een ondertitel en geen acties, Beheer items één
knop, en Dossiers, Lopende taken en Afgesloten taken een zoekveld, een knop en een icon-only knop met een `,n.jsx(e.code,{children:"label"}),`.
Dossier X is een `,n.jsx(e.code,{children:"vl-nav-sub"})," met ",n.jsx(e.code,{children:"href"}),`: zijn label linkt naar een eigen pagina zonder acties. Lopende taken en
Afgesloten taken tonen hun pad in een `,n.jsx(e.a,{href:"/docs/components-block-breadcrumb--documentatie",children:"vl-breadcrumb"}),"."]}),`
`,n.jsx(e.h3,{id:"actieve-link",children:"Actieve link"}),`
`,n.jsxs(e.p,{children:["Zet ",n.jsx(e.code,{children:"active"})," op de link van de huidige pagina; ",n.jsx(e.code,{children:"vl-nav-link"})," zet dan ",n.jsx(e.code,{children:'aria-current="page"'}),` op zijn interne link. Is de
huidige pagina die van een `,n.jsx(e.code,{children:"vl-nav-sub"})," met ",n.jsx(e.code,{children:"href"}),", zet ",n.jsx(e.code,{children:"active"})," dan op de ",n.jsx(e.code,{children:"vl-nav-sub"}),`. Er is maar één actieve link
tegelijk. Verplaats `,n.jsx(e.code,{children:"active"})," bij elke navigatie, samen met de pagina die je rendert."]}),`
`,n.jsx(e.h2,{id:"navigatie",children:"Navigatie"}),`
`,n.jsxs(e.p,{children:[`De navigatie neemt de volledige hoogte tussen de header en de footer in. Met de knop onderaan klapt de gebruiker ze in
tot de breedte van een icoon; `,n.jsx(e.code,{children:"vl-dashboard"})," onthoudt die keuze in ",n.jsx(e.code,{children:"localStorage"}),`. Op een scherm tot 1023px verdwijnt
de navigatie achter een menuknop, in een eigen balk boven de inhoud, en neemt ze opengeklapt de plaats van de inhoud
in, minstens zo hoog als het scherm onder de header.`]}),`
`,n.jsxs(e.p,{children:["Een klik op een link (een ",n.jsx(e.code,{children:"vl-nav-link"})," of ",n.jsx(e.code,{children:"vl-nav-sub"})," met ",n.jsx(e.code,{children:"href"}),", of een andere ",n.jsx(e.code,{children:"<a href>"}),`), met de muis of met Enter, zet de focus
op de `,n.jsx(e.code,{children:"h1"})," van de nieuwe ",n.jsx(e.code,{children:"vl-dashboard-header"}),` zodra die er is, ook bij een asynchrone route. Op mobiel sluit de
navigatie meteen en gaat de focus eerst naar het `,n.jsx(e.code,{children:"main"}),` landmark, het begin van de inhoud, tot de nieuwe header er is.
Rendert de link geen nieuwe pagina, dan blijft de focus op de link (op mobiel op `,n.jsx(e.code,{children:"main"}),`). Een pagina die meer dan 10
seconden na de klik rendert, of pas nadat de gebruiker intussen klikte of een toets indrukte, krijgt de focus niet meer
automatisch: die blijft dan op de link (op mobiel op `,n.jsx(e.code,{children:"main"}),"). Een knop (een ",n.jsx(e.code,{children:"vl-nav-link"}),`
zonder `,n.jsx(e.code,{children:"href"}),"), een ",n.jsx(e.code,{children:"link-action"})," of een ",n.jsx(e.code,{children:"disabled"})," link laat de navigatie open. ",n.jsx(e.code,{children:"Escape"}),` sluit de
navigatie en zet de focus terug op de menuknop. Wordt het scherm breder dan 1023px, dan verdwijnt de mobiele navigatie.`]}),`
`,n.jsxs(e.p,{children:[`De open mobiele navigatie houdt de toetsenbordfocus vast. Bij het openen gaat de focus naar de knop om te sluiten. Tab en
Shift+Tab lopen rond binnen het paneel: na de laatste link komt het eerste focusbare element van het paneel, en
omgekeerd. De inhoud van het dashboard, de header en de footer zijn zo niet met het toetsenbord te bereiken tot de
navigatie weer sluit. Dat werkt ook als `,n.jsx(e.code,{children:"vl-dashboard"})," in de shadow root van een applicatie staat."]}),`
`,n.jsxs(e.p,{children:["De toestand staat in de property en het gereflecteerde attribuut ",n.jsx(e.code,{children:"collapsed"}),": lees ",n.jsx(e.code,{children:"dashboard.collapsed"}),` uit, of zet
het om de navigatie zelf in of uit te klappen. Enkel de keuze van de gebruiker, met de knop om in of uit te klappen,
wordt bewaard in `,n.jsx(e.code,{children:"localStorage"}),"; zet je ",n.jsx(e.code,{children:"collapsed"})," zelf, dan blijft de bewaarde keuze ongewijzigd."]}),`
`,n.jsxs(e.p,{children:["Klapt de gebruiker de navigatie in of uit, of herstelt ",n.jsx(e.code,{children:"vl-dashboard"}),` bij het laden een ingeklapte navigatie, dan vuurt
het het event `,n.jsx(e.code,{children:"vl-toggle-navigation"})," af. Zet je ",n.jsx(e.code,{children:"collapsed"}),` zelf, dan niet: je weet dan al dat het verandert. Geef
`,n.jsx(e.code,{children:"collapsed"})," zelf door aan de ",n.jsx(e.code,{children:"vl-nav-link"})," en ",n.jsx(e.code,{children:"vl-nav-sub"}),` componenten in de slots, zowel bij het event als wanneer je
`,n.jsx(e.code,{children:"collapsed"})," zelf zet; ",n.jsx(e.code,{children:"vl-dashboard"})," doet dat niet. Een ",n.jsx(e.code,{children:"vl-nav-sub"})," geeft het verder door aan zijn eigen links."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`dashboard.addEventListener('vl-toggle-navigation', (event) => {
    dashboard
        .querySelectorAll(':scope > vl-nav-link, :scope > vl-nav-sub')
        .forEach((element) => element.toggleAttribute('collapsed', event.detail.collapsed));
});
`})}),`
`,n.jsxs(e.p,{children:["Heeft een ",n.jsx(e.code,{children:"vl-nav-link"})," een ",n.jsx(e.code,{children:'<span slot="link-badge">'}),`, dan toont de menuknop op mobiel een stip en vermeldt zijn
label dat er meldingen zijn.`]}),`
`,n.jsx(e.h2,{id:"breedte-en-padding-van-de-inhoud",children:"Breedte en padding van de inhoud"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"vl-dashboard"})," geeft de inhoud in het slot ",n.jsx(e.code,{children:"content"}),` de volledige ruimte naast de navigatie, zonder padding en zonder
maximale breedte. Die bepaal je zelf per pagina, met een eigen klasse op het element onder de `,n.jsx(e.code,{children:"vl-dashboard-header"}),`.
Gebruik voor de padding links en rechts `,n.jsx(e.code,{children:"--vl-dashboard-content-inline-padding"}),`: dezelfde waarde als in de
`,n.jsx(e.code,{children:"vl-dashboard-header"})," (en de mobiele balk), zodat de inhoud op dezelfde lijn begint als de titel. ",n.jsx(e.code,{children:"vl-dashboard"}),` zet ze
zelf, kleiner op een smal scherm. Gebruik verder de spacing tokens. Zet de ruimte tussen de blokken van de inhoud met
`,n.jsx(e.code,{children:"vl-stacked vl-stacked-small"})," (of ",n.jsx(e.code,{children:"-medium"}),", ook in geneste blokken) in plaats van marges, en geef een ",n.jsx(e.code,{children:"vl-title"}),`
daarin `,n.jsx(e.code,{children:"no-space-bottom"}),", anders telt zijn eigen marge bovenop die ruimte. ",n.jsx(e.code,{children:"vl-stacked"})," en ",n.jsx(e.code,{children:"vl-stacked-small"}),` zijn
globale utility-classes uit `,n.jsx(e.code,{children:"@domg-wc/styles"}),`: in de light DOM werken ze enkel als de globale Flux-styles geladen zijn.
Zet de CSS hieronder in een extern stylesheet (bestand), niet in een `,n.jsx(e.code,{children:"<style>"}),"-blok of een ",n.jsx(e.code,{children:"style"}),`-attribuut, zodat een
Content Security Policy zonder `,n.jsx(e.code,{children:"unsafe-inline"})," ze toelaat."]}),`
`,n.jsxs(e.p,{children:["Twee patronen, allebei links uitgelijnd met de titel in de ",n.jsx(e.code,{children:"vl-dashboard-header"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tekst"})," krijgt een maximale breedte van 1280px, de padding inbegrepen (",n.jsx(e.code,{children:"box-sizing: border-box"}),`), zodat tekst niet
de volle breedte van een breed scherm inneemt. De inhoud blijft links staan, niet gecentreerd. Zie de pagina Help in het
`,n.jsx(e.a,{href:"#voorbeeld",children:"voorbeeld bovenaan"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tabellen en kaarten"}),` gebruiken de volle breedte, met enkel de padding links en rechts. Een tabel die breder is
dan het scherm, scrolt in zijn eigen wrapper; `,n.jsx(e.code,{children:"vl-table"}),` doet dat zelf. Zie de pagina Beheer items in het
`,n.jsx(e.a,{href:"#voorbeeld",children:"voorbeeld bovenaan"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* tekst: maximaal 1280px breed, de padding inbegrepen */
.dashboard-content {
    box-sizing: border-box;
    max-width: 128rem;
    padding-block: var(--vl-spacing--medium);
    padding-inline: var(--vl-dashboard-content-inline-padding);
}

/* tabellen en kaarten: de volle breedte */
.dashboard-content--full-width {
    max-width: none;
}
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div slot="content">
    <vl-dashboard-header page-title="Beheer items"></vl-dashboard-header>
    <div class="dashboard-content dashboard-content--full-width vl-stacked vl-stacked-small">
        <vl-table>
            <table>…</table>
        </vl-table>
    </div>
</div>
`})}),`
`,n.jsx(e.h2,{id:"hoogte",children:"Hoogte"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"vl-dashboard"}),` is even hoog als het venster min de header en de footer, zodat de navigatie en de inhoud elk apart
scrollen. `,n.jsx(e.code,{children:"vl-header-next"})," en ",n.jsx(e.code,{children:"vl-footer-next"})," renderen niet in ",n.jsx(e.code,{children:"vl-dashboard"}),", maar vooraan en achteraan in de ",n.jsx(e.code,{children:"body"}),`.
Geef hun hoogte daarom mee met CSS-variabelen op `,n.jsx(e.code,{children:"vl-dashboard"})," of een ouder ervan:"]}),`
`,n.jsxs(e.p,{children:[`| CSS-variabele | Standaard | Gebruik |
| --- | --- | --- |
| `,n.jsx(e.code,{children:"--vl-dashboard-header-height"})," | ",n.jsx(e.code,{children:"43px"}),` | Hoogte van de header, ook voor de mobiele navigatie en de mobiele balk |
| `,n.jsx(e.code,{children:"--vl-dashboard-footer-height"})," | ",n.jsx(e.code,{children:"128px"}),` | Hoogte van de footer |
| `,n.jsx(e.code,{children:"--vl-dashboard-navigation-width"})," | ",n.jsx(e.code,{children:"300px"}),` | Breedte van de uitgeklapte navigatie |
| `,n.jsx(e.code,{children:"--vl-dashboard-title-min-width"})," | ",n.jsx(e.code,{children:"30rem"})," | Minimale breedte van de titel in de ",n.jsx(e.code,{children:"vl-dashboard-header"})," voor de ",n.jsx(e.code,{children:"header-actions"}),` naar een nieuwe lijn gaan |
| `,n.jsx(e.code,{children:"--vl-dashboard-content-inline-padding"})," | ",n.jsx(e.code,{children:"--vl-spacing--medium"}),", tot 1023px ",n.jsx(e.code,{children:"--vl-spacing--normal"})," | Padding links en rechts van de ",n.jsx(e.code,{children:"vl-dashboard-header"})," en de mobiele balk; hergebruik ze voor de inhoud, zie ",n.jsx(e.a,{href:"#breedte-en-padding-van-de-inhoud",children:"Breedte en padding van de inhoud"}),". Overschrijf ze op ",n.jsx(e.code,{children:"vl-dashboard"})," zelf: een waarde op een ouder verliest van de waarde die ",n.jsx(e.code,{children:"vl-dashboard"})," zet |"]}),`
`,n.jsx(e.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,n.jsxs(e.p,{children:["De ",n.jsx(e.code,{children:"h1"})," van de ",n.jsx(e.code,{children:"vl-dashboard-header"})," heeft het vaste id ",n.jsx(e.code,{children:"vl-dashboard-page-title"}),` en kan focus krijgen
(`,n.jsx(e.code,{children:'tabindex="-1"'}),"). Dat is het doel van de skip links:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"De skip link van de header."})," Geef ",n.jsx(e.code,{children:"vl-header-next"})," de ",n.jsx(e.code,{children:'skip-to-content-id="vl-dashboard-page-title"'}),`. Zijn skip
link is het eerste focusbare element van de pagina en springt meteen naar de hoofdinhoud, de `,n.jsx(e.code,{children:"h1"}),`, over de header én
de navigatie heen (WCAG 2.4.1). Het doel mag in een shadow root zitten: `,n.jsx(e.code,{children:"vl-header-next"})," zoekt het ook daar."]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["De skip link van ",n.jsx(e.code,{children:"vl-dashboard"}),"."]}),` Die staat aan het begin van de navigatie, slaat de navigatie over en gaat ook naar
de `,n.jsx(e.code,{children:"h1"}),", waar de ",n.jsx(e.code,{children:"vl-dashboard-header"})," ook staat. Is er geen ",n.jsx(e.code,{children:"vl-dashboard-header"})," met een ",n.jsx(e.code,{children:"page-title"}),`, dan gaat hij
naar het `,n.jsx(e.code,{children:"main"})," landmark."]}),`
`]}),`
`,n.jsxs(e.p,{children:["Heeft de pagina geen ",n.jsx(e.code,{children:"vl-dashboard-header"})," met een ",n.jsx(e.code,{children:"page-title"}),", geef ",n.jsx(e.code,{children:"vl-header-next"})," dan geen ",n.jsx(e.code,{children:"skip-to-content-id"}),`
die naar de `,n.jsx(e.code,{children:"h1"})," wijst, maar het id van de inhoud in het slot ",n.jsx(e.code,{children:"content"}),"."]})]})}function Q(a={}){const{wrapper:e}={...$(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(T,{...a})}):T(a)}function ee(a,e){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}B([F,U,N,K,L,M,G,P,R,W,X,q]);const Ce={id:"structures-dashboard",title:"Structures/dashboard/dashboard",tags:["autodocs"],args:x,argTypes:Y,parameters:{docs:{page:Q,story:{inline:!1,iframeHeight:800}},layout:"fullscreen"}},ne={"#items":"one","#dossiers":"multiple","#lopend":"multiple","#afgesloten":"multiple"},ae=i`
    <style>
        .dashboard-content {
            box-sizing: border-box;
            max-width: 128rem;
            padding-block: var(--vl-spacing--medium);
            padding-inline: var(--vl-dashboard-content-inline-padding);
        }

        .dashboard-content--full-width {
            max-width: none;
        }

        .dashboard-items-table :is(th, td) {
            white-space: nowrap;
        }
    </style>
`,de=()=>{const a=["In behandeling","Goedgekeurd","Afgewezen","Nieuw"],e=["Omgeving","Mobiliteit","Onderwijs","Welzijn","Cultuur"],o=Array.from({length:30},(d,c)=>c+1);return i`
        <vl-table hover class="dashboard-items-table">
            <table>
                <caption>
                    Alle items van het bedrijf
                </caption>
                <thead>
                    <tr>
                        ${["Nummer","Naam","Type","Status","Eigenaar","Afdeling","Locatie","Aangemaakt op","Gewijzigd op","Vervaldatum","Prioriteit","Opmerking"].map(d=>i`<th scope="col">${d}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${o.map(d=>i`
                            <tr>
                                <td>ITEM-${String(d).padStart(4,"0")}</td>
                                <td>Aanvraag omgevingsvergunning ${d}</td>
                                <td>${d%2?"Vergunning":"Melding"}</td>
                                <td>${a[d%a.length]}</td>
                                <td>Behandelaar ${d%7+1}</td>
                                <td>${e[d%e.length]}</td>
                                <td>Gent, Koningin Maria Hendrikaplein ${d}</td>
                                <td>${String(d%28+1).padStart(2,"0")}.09.2026</td>
                                <td>${String(d%28+1).padStart(2,"0")}.10.2026</td>
                                <td>${String(d%28+1).padStart(2,"0")}.12.2026</td>
                                <td>${["Hoog","Normaal","Laag"][d%3]}</td>
                                <td>Wacht op advies van de gemeente</td>
                            </tr>
                        `)}
                </tbody>
            </table>
        </vl-table>
    `},te=()=>i`
        <p>Antwoorden op de vragen die gebruikers het vaakst stellen over deze applicatie.</p>
        <div class="vl-stacked vl-stacked-medium">
            ${["Hoe vraag ik een nieuw item aan?","Wie behandelt mijn dossier?","Hoe lang duurt de behandeling van een aanvraag?","Kan ik een ingediende aanvraag nog wijzigen?","Hoe word ik op de hoogte gebracht van een beslissing?","Wat doe ik als ik het niet eens ben met een beslissing?"].map(e=>i`
                    <div class="vl-stacked vl-stacked-small">
                        <vl-title type="h3" no-space-bottom>${e}</vl-title>
                        <p>
                            Je vindt het antwoord meestal in het overzicht van je dossiers. Open het dossier en kijk bij
                            de tijdlijn: daar staat elke stap van de behandeling, met de datum en de behandelaar.
                            Ontbreekt er informatie, dan vraagt de behandelaar die via een melding op, en zie je een
                            rode stip bij Notificaties.
                        </p>
                        <p>
                            Lukt het niet, neem dan contact op met de helpdesk via het contactformulier. Vermeld het
                            nummer van je dossier, zodat de helpdesk het meteen terugvindt. De helpdesk antwoordt binnen
                            twee werkdagen.
                        </p>
                    </div>
                `)}
        </div>
    `,ie=a=>i`
    <vl-breadcrumb data-cy="dashboard-breadcrumb">
        <vl-breadcrumb-item href="#dossiers">Dossiers</vl-breadcrumb-item>
        <vl-breadcrumb-item href="#dossier-x">Dossier X</vl-breadcrumb-item>
        <vl-breadcrumb-item>${a}</vl-breadcrumb-item>
    </vl-breadcrumb>
`,oe={"#overzicht":{heading:"Recente items",text:"De items die je de voorbije week bekeek of wijzigde."},"#items":{heading:"Alle items",text:"Alle items van het bedrijf, met hun status en de datum van de laatste wijziging.",body:de,fullWidth:!0},"#notificaties":{heading:"Ongelezen meldingen",text:"Je hebt 1 ongelezen melding: een dossier wacht op je beslissing."},"#dossiers":{heading:"Mijn dossiers",text:"De dossiers waarvan jij de behandelaar bent."},"#dossier-x":{heading:"Samenvatting",text:"Aanvraag omgevingsvergunning voor de verbouwing van een woning in Gent, in behandeling sinds 12.09.2026. Er lopen nog 2 taken, 5 taken zijn afgerond."},"#lopend":{heading:"Taken in behandeling",text:"De taken van Dossier X die nog niet afgerond zijn.",breadcrumb:!0},"#afgesloten":{heading:"Afgeronde taken",text:"De taken van Dossier X die afgerond zijn, de recentste eerst.",breadcrumb:!0},"#instellingen":{heading:"Profiel",text:"Je naam, je e-mailadres en de meldingen die je per e-mail wilt ontvangen."},"#help":{heading:"Veelgestelde vragen",body:te}},y={href:"#overzicht",title:"Overzicht",icon:"places-home",subtitle:"Subtitel",headerActions:"none"},re=a=>{switch(a){case"one":return i`<vl-button slot="header-actions" icon="add">Nieuw item</vl-button>`;case"multiple":return i`
                <div slot="header-actions" class="vl-group vl-group--input-group">
                    <vl-input-field
                        name="search"
                        id="search"
                        label="Zoek op deze pagina"
                        input-group
                        autocomplete="off"
                    ></vl-input-field>
                    <vl-button tertiary label="Zoeken" icon="search" input-group></vl-button>
                </div>
                <vl-button slot="header-actions" icon="add" secondary>Nieuw item</vl-button>
                <vl-button slot="header-actions" icon="file-download" label="Exporteren" tertiary></vl-button>
            `;default:return p}},E=a=>{const e=oe[a?.href??"#overzicht"];return i`
        ${a?i`<vl-dashboard-header
                  page-title=${a.title}
                  page-icon=${D(a.icon)}
                  page-subtitle=${D(a.subtitle)}
                  >${re(a.headerActions)}</vl-dashboard-header
              >`:p}
        <div
            class=${_({"dashboard-content":!0,"dashboard-content--full-width":!!e.fullWidth,"vl-stacked":!0,"vl-stacked-small":!0})}
            data-cy="dashboard-content"
        >
            ${e.breadcrumb&&a?ie(a.title):p}
            <vl-title type="h2" no-space-bottom>${e.heading}</vl-title>
            ${e.text?i`<p data-cy="dashboard-content-text">${e.text}</p>`:p}
            ${e.body?e.body():p}
        </div>
    `},le=a=>{a.currentTarget.querySelectorAll(":scope > vl-nav-link, :scope > vl-nav-sub").forEach(e=>e.toggleAttribute("collapsed",a.detail.collapsed))},se=a=>[...a.childNodes].filter(e=>e.nodeType===Node.TEXT_NODE).map(e=>e.textContent).join("").trim(),ce=(a,e)=>a.querySelector(`vl-nav-link[href="${e}"]`)??a.querySelector(`vl-nav-sub[href="${e}"]`)?.shadowRoot?.querySelector("vl-nav-link")??null,he=a=>{const e=a.composedPath();if(e.some(t=>t instanceof Element&&t.slot==="link-action"))return;const o=a.currentTarget,d=e.find(t=>t instanceof Element&&t.localName==="vl-breadcrumb-item")?.getAttribute("href"),c=e.find(t=>t instanceof N)??(d?ce(o,d):null);if(!c)return;a.preventDefault();const m=c.href??"";o.querySelectorAll("vl-nav-link").forEach(t=>{t.active=t===c}),o.querySelectorAll("vl-nav-sub").forEach(t=>{t.active=!!t.href&&t.href===m});const S=m==="#overzicht"?y:{href:m,title:se(c),icon:c.icon,headerActions:ne[m]??"none"};A(E(S),o.querySelector(':scope > [slot="content"]'))},v=(a,e)=>e?a:p,w=({userName:a,userImg:e,userIcon:o,collapsed:d,notCollapsible:c,customCSS:m,onVlToggleNavigation:S},{page:t,icons:h=!0,interactive:C=!1}={})=>i`
    ${ae}
    <vl-dashboard
        user-name=${a}
        user-img=${e}
        user-icon=${o}
        ?collapsed=${d}
        ?not-collapsible=${c}
        custom-css=${m}
        @vl-toggle-navigation=${k=>{le(k),S(k)}}
        @click=${C?he:p}
    >
        <vl-header-next
            slot="header"
            identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"
            skip-to-content-id="vl-dashboard-page-title"
            development
            simple
        ></vl-header-next>

        <vl-nav-link slot="nav-main" href="#overzicht" icon=${v("places-home",h)} ?collapsed=${d} active
            >Overzicht</vl-nav-link
        >
        <vl-nav-link slot="nav-main" href="#items" icon=${v("list",h)} ?collapsed=${d}>
            Beheer items
            <vl-button slot="link-action" icon="plus-circle-filled" label="Item toevoegen" ghost></vl-button>
        </vl-nav-link>
        <vl-nav-link slot="nav-main" href="#notificaties" icon=${v("bell",h)} ?collapsed=${d}>
            Notificaties
            <span slot="link-badge">1</span>
        </vl-nav-link>
        <vl-nav-link slot="nav-main" href="#dossiers" icon=${v("folder",h)} ?collapsed=${d}
            >Dossiers</vl-nav-link
        >
        <vl-nav-sub
            slot="nav-main"
            label="Dossier X"
            href="#dossier-x"
            icon=${v("file",h)}
            ?collapsed=${d}
        >
            <vl-nav-link href="#lopend" icon=${v("hourglass",h)}>Lopende taken</vl-nav-link>
            <vl-nav-link href="#afgesloten" icon=${v("file-tasks-check",h)}>Afgesloten taken</vl-nav-link>
        </vl-nav-sub>

        <vl-nav-link slot="nav-utils" href="#instellingen" icon=${v("cog",h)} ?collapsed=${d}
            >Instellingen</vl-nav-link
        >
        <vl-nav-link slot="nav-utils" href="#help" icon=${v("question-mark-filled",h)} ?collapsed=${d}
            >Help</vl-nav-link
        >

        <!-- de outlet van de router: één pagina met haar vl-dashboard-header -->
        <div slot="content" ${Z(k=>k&&A(E(t),k))}></div>

        <vl-footer-next slot="footer" identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b" development></vl-footer-next>
    </vl-dashboard>
`,V={userName:"Bedrijfsnaam",userIcon:"building-big"},g=z(x,a=>w(a,{page:y,interactive:!0}));g.storyName="vl-dashboard - default";g.args=V;const j=z(x,a=>w(a));j.storyName="vl-dashboard - zonder gebruiker en titel";const b=z(x,a=>w(a,{page:y}));b.storyName="vl-dashboard - collapsed";b.args={...V,collapsed:!0};const u=z(x,a=>w(a,{page:y,icons:!1}));u.storyName="vl-dashboard - not-collapsible";u.args={userName:"Bedrijfsnaam",notCollapsible:!0};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`story(dashboardArgs, args => renderDashboard(args, {
  page: overviewPage,
  interactive: true
}))`,...g.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"story(dashboardArgs, args => renderDashboard(args))",...j.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`story(dashboardArgs, args => renderDashboard(args, {
  page: overviewPage
}))`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(dashboardArgs, args => renderDashboard(args, {
  page: overviewPage,
  icons: false
}))`,...u.parameters?.docs?.source}}};const Oe=["DashboardDefault","DashboardWithoutUserAndTitle","DashboardCollapsed","DashboardNotCollapsible"];export{b as DashboardCollapsed,g as DashboardDefault,u as DashboardNotCollapsible,j as DashboardWithoutUserAndTitle,Oe as __namedExportsOrder,Ce as default};
