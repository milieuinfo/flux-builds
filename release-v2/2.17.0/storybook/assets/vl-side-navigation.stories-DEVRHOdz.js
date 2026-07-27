import{Z as l,_ as s,X as y,W as L,u as j,j as e,b8 as U,C as g,s as h,x as v,r as w,Q as S,bH as $,d as T,bt as C}from"./iframe-BgD7f6Cn.js";import{t as q}from"./vl-side-navigation.component-BNTw7VxO.js";import"./preload-helper-D9Z9MdNV.js";const z={closed:!1,compact:!1,headingRootSelector:"",maxDepth:void 0,navigationTitle:"Op deze pagina",childSpacing:"small",multiActive:!1},t={...y,...z,defaultSlot:""},D={...L,closed:{name:"closed",description:"Wanneer aanwezig wordt de inhoudstafel standaard verborgen. Heeft enkel effect wanneer het attribuut `compact` is gezet of bij mobiele weergave (viewport < 768px). Op desktop zonder compact wordt de navigatie altijd getoond.",table:{type:{summary:s.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(t.closed)}}},compact:{name:"compact",description:"Forceert de compacte weergave (toggle knop, verborgen navigatie standaard) ongeacht de viewport grootte.",table:{type:{summary:s.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(t.compact)}}},headingRootSelector:{name:"heading-root-selector",description:'CSS selector om het root container element te vinden waarbinnen naar headings gezocht wordt. Indien niet opgegeven, wordt het volledige document/shadow root doorzocht. Voorbeeld: "#section-1" om enkel headings binnen die sectie te scannen.',table:{type:{summary:s.STRING},category:l.ATTRIBUTES,defaultValue:{summary:t.headingRootSelector}}},maxDepth:{name:"max-depth",description:"Optionele maximum diepte voor shadow DOM traversal (bij scannen van headings én bij zoeken van scroll-target). Biedt fijnmazige controle over performantie vs compatibiliteit. 0 = enkel light DOM, 1 = light DOM + eerste niveau shadow DOM, undefined = onbeperkt (standaard).",table:{type:{summary:s.NUMBER},category:l.ATTRIBUTES,defaultValue:{summary:t.maxDepth!==void 0?String(t.maxDepth):"undefined"}}},navigationTitle:{name:"navigation-title",description:"Tekst die getoond wordt als titel boven de inhoudstafel.",table:{type:{summary:s.STRING},category:l.ATTRIBUTES,defaultValue:{summary:t.navigationTitle}}},defaultSlot:{name:"[default]",description:'Custom inhoudsopgave. Wanneer je hier content plaatst (bijv. een ul/li-structuur met vl-link elementen met href="#..."), wordt die gebruikt in plaats van de automatisch gegenereerde inhoudsopgave. De links moeten verwijzen naar heading-ids in de content.',table:{type:{summary:s.HTML},category:l.SLOTS,defaultValue:{summary:String(t.defaultSlot)}}},childSpacing:{name:"child-spacing",description:"Bepaalt de verticale ruimte tussen child-links. `medium` geeft extra ruimte (1.3rem marge boven en onder), vergelijkbaar met de stijl van de klassieke vl-side-navigation. `small` is de standaard compacte weergave.",options:["medium","small"],control:{type:"select"},table:{type:{summary:s.STRING},category:l.ATTRIBUTES,defaultValue:{summary:t.childSpacing}}},multiActive:{name:"multi-active",description:"Wanneer aanwezig worden alle items waarvan content zichtbaar is als actief gemarkeerd, in plaats van enkel het bovenste. De actieve items worden aangeduid met een doorlopende lijn uiterst links. Zonder dit attribuut kan het zijn dat de onderste items onderaan nooit aangeduid worden.<br>Dit attribuut is niet reactief.",table:{type:{summary:s.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(t.multiActive)}}}};function x(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...j(),...n.components},{FluxAlert:a,FluxComponentMetaData:o}=i;return a||k("FluxAlert"),o||k("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"side-navigation-next",children:"Side Navigation Next"}),`
`,e.jsx(o,{id:"components-block-next-side-navigation"}),`
`,e.jsx(i.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(i.p,{children:["Gebruik de ",e.jsx(i.code,{children:"side-navigation"}),` component om een compact navigatie-element aan een pagina toe te voegen. Het vat de
inhoud van lange pagina's samen aan de hand van de titels en leidt de gebruiker door de pagina inhoud.`]}),`
`,e.jsx(a,{type:"info",children:`
  Er bestaat een bijbehorend **Side Navigation Layout** component dat automatisch de grid-layout en een side navigation combineert.
  Heb je meer controle of maatwerk nodig, gebruik dan \`vl-side-navigation-next\` rechtstreeks. Voor de standaard combinatie van layout en inhoudsopgave volstaat het layout-component.
  Voor meer informatie: [Side Navigation Layout](/docs/components-next-side-navigation-layout--documentatie).
`}),`
`,e.jsx(i.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`import { VlSideNavigationComponent } from '@domg-wc/components/block/next';
`})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<vl-side-navigation-next></vl-side-navigation-next>
`})}),`
`,e.jsx(i.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsxs(i.p,{children:[`De side navigation component scant automatisch de headings in de pagina en genereert een inhoudsopgave.
Alternatief kan je ook zelf een inhoudsopgave opstellen. `,e.jsx(i.a,{href:"#custom-table-of-contents",children:"Zie hier voor een code voorbeeld."})]}),`
`,e.jsx(i.h2,{id:"css-variabelen",children:"CSS variabelen"}),`
`,e.jsxs(i.p,{children:[`De sticky positie van de table of contents (inhoudsopgave) wordt bepaald door de CSS variabele
`,e.jsx(i.code,{children:"--vl-side-navigation-top"}),`. Gebruik deze variabele wanneer er een sticky element boven de side navigation staat
zodat de side-navigation niet onder dat element schuift.`]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"--vl-side-navigation-top"})})," (standaard: ",e.jsx(i.code,{children:"50px"}),"): de ",e.jsx(i.code,{children:"top"}),`-waarde voor de sticky positie van de TOC.
Accepteert elke geldige CSS waarde (bijv. `,e.jsx(i.code,{children:"140px"}),", ",e.jsx(i.code,{children:"10rem"}),", of ",e.jsx(i.code,{children:"var(--header-height)"}),`). Definieer de variabele op een
voorouder van de side navigation (bijv. op `,e.jsx(i.code,{children:"main"})," of op de layout container)."]}),`
`]}),`
`,e.jsx(i.h2,{id:"eigenschappen",children:"Eigenschappen"}),`
`,e.jsxs(i.p,{children:["Het attribuut ",e.jsx(i.strong,{children:e.jsx(i.code,{children:"closed"})})," zorgt ervoor dat de inhoudstafel standaard verborgen is. Dit heeft enkel effect wanneer ",e.jsx(i.strong,{children:e.jsx(i.code,{children:"compact"})})," is gezet of bij mobiele weergave (viewport < 768px); op desktop zonder compact wordt de navigatie altijd getoond."]}),`
`,e.jsx(U,{of:r}),`
`,e.jsx(i.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(a,{type:"info",children:`
  De voorbeelden hieronder worden in een iframe weergegeven.
  De scroll-tracking van de side navigation werkt enkel wanneer
  je **binnen de iframe scrollt** (klik eerst op een navigatie-link om de content te scrollen).
   Wanneer je door de documentatiepagina zelf scrollt, verandert de positie van de content binnen het iframe niet,
    waardoor de actieve sectie niet wordt bijgewerkt.
`}),`
`,e.jsx(i.p,{children:"In een echte applicatie en in de individuele stories, waar de content in dezelfde viewport scrollt, werkt de scroll-tracking correct."}),`
`,e.jsx(i.h3,{id:"default",children:"Default"}),`
`,e.jsx(g,{of:r,inline:!1}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Compact (navigatie standaard gesloten)"}),e.jsxs(i.p,{children:["Met het attribuut ",e.jsx(i.code,{children:"compact"})," wordt de compacte weergave geforceerd: de navigatie staat standaard gesloten en kan via de toggle knop worden opengeklapt."]}),e.jsx(g,{of:m,inline:!1})]}),`
`,e.jsx(i.h2,{id:"scoping-met-heading-root-selector",children:"Scoping met heading-root-selector"}),`
`,e.jsxs(i.p,{children:["Je kan de side navigation beperken tot een specifieke sectie van de pagina door gebruik te maken van het ",e.jsx(i.code,{children:"heading-root-selector"})," attribuut:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<vl-side-navigation-next heading-root-selector="#section-1"></vl-side-navigation-next>
`})}),`
`,e.jsxs(i.p,{children:["Dit zal enkel headings binnen het element met id ",e.jsx(i.code,{children:"section-1"})," scannen."]}),`
`,e.jsx(i.h3,{id:"custom-table-of-contents",children:"Custom Table of Contents"}),`
`,e.jsxs(i.p,{children:["Je kan zelf ook een table of contents opstellen. Het is hierbij belangrijk dat je gebruik maakt van ",e.jsx(i.code,{children:"vl-link"}),`
componenten die verwijzen naar headings met bestaande id's.`]}),`
`,e.jsx(g,{of:c,inline:!1}),`
`,e.jsx(i.h3,{id:"multi-sectie-auto--custom-in-één-nav",children:"Multi-sectie (auto + custom in één nav)"}),`
`,e.jsxs(i.p,{children:["Plaats meerdere ",e.jsx(i.code,{children:"vl-side-navigation-section-next"})," in één ",e.jsx(i.code,{children:"vl-side-navigation-next"}),`: combineer een
`,e.jsx(i.strong,{children:"auto-gegenereerde"})," sectie (gescoped op een gekozen container-id) met een ",e.jsx(i.strong,{children:"custom-TOC"}),` sectie, in één nav en
één drawer op mobile.`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<vl-side-navigation-next>
  <vl-side-navigation-section-next type="auto" heading-root-selector="#hoofdstukken" section-title="Op deze pagina">
  </vl-side-navigation-section-next>

  <vl-side-navigation-section-next section-title="Bijlagen">
    <ul>
      <li><vl-link href="#bijlage-a">Bijlage A</vl-link></li>
      <li><vl-link href="#bijlage-b">Bijlage B</vl-link></li>
    </ul>
  </vl-side-navigation-section-next>
</vl-side-navigation-next>
`})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Auto-sectie"}),": ",e.jsx(i.code,{children:'type="auto"'})," scant de headings binnen ",e.jsx(i.code,{children:"heading-root-selector"})," (hier ",e.jsx(i.code,{children:"#hoofdstukken"}),`). Scan-props
(`,e.jsx(i.code,{children:"min-level"}),", ",e.jsx(i.code,{children:"max-level"}),", ",e.jsx(i.code,{children:"max-depth"}),", ",e.jsx(i.code,{children:"exclude-selectors"}),") mogen op de parent of per sectie als override."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Custom-sectie"})," (zonder ",e.jsx(i.code,{children:'type="auto"'}),"): lever zelf een ",e.jsx(i.code,{children:"<ul>"})," met ",e.jsx(i.code,{children:"vl-link"}),"s naar bestaande heading-id's."]}),`
`]}),`
`,e.jsx(g,{of:u,inline:!1}),`
`,e.jsx(i.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/side-navigation",rel:"nofollow",children:"Digitaal Vlaanderen - Side Navigation"})}),`
`]}),`
`,e.jsx("vl-side-navigation-next",{compact:!0,"exclude-selectors":"iframe, #storybook-root",closed:!0})]})}function A(n={}){const{wrapper:i}={...j(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(x,{...n})}):x(n)}function k(n,i){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const O={id:"components-block-next-side-navigation",title:"Components - Block/next/side-navigation",tags:["autodocs"],args:t,argTypes:D,parameters:{docs:{page:A,story:{inline:!1,iframeHeight:500}}}};w([S,$,T,C]);const f=v`
    <div id="story-content-container">
        <section style="min-height: 400px">
            <vl-title type="h2" id="content-1-heading">Content 1</vl-title>
            <vl-paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco
            </vl-paragraph>
            <vl-paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco
            </vl-paragraph>
        </section>
        <section style="min-height: 400px;">
            <vl-title type="h3" id="content-1-1-heading">Content 1 - 1</vl-title>
            <vl-paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco
            </vl-paragraph>
            <vl-title type="h3" id="content-1-2-heading">Content 1 - 2</vl-title>
            <vl-paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco
            </vl-paragraph>
        </section>
        <section style="min-height: 400px;">
            <vl-title type="h2" id="content-2-heading">Content 2</vl-title>
            <vl-paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco
            </vl-paragraph>
            <vl-title type="h3" id="content-2-1-heading">Content 2 - 1</vl-title>
            <vl-paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco
            </vl-paragraph>
            <vl-title type="h3" id="content-2-2-heading">Content 2 - 2</vl-title>
            <vl-paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco </vl-paragraph
            ><vl-paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco
            </vl-paragraph>
        </section>
        <section style="min-height: 400px;">
            <vl-title type="h2" id="content-3-heading">Content 3</vl-title>
            <vl-paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco
            </vl-paragraph>
            <vl-paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco
            </vl-paragraph>
        </section>
    </div>
`,r=h(t,({closed:n,compact:i,headingRootSelector:a,maxDepth:o,navigationTitle:d,childSpacing:p,multiActive:b})=>v`
            <div class="vl-grid vl-content-block">
                <vl-side-navigation-next
                    class="vl-column vl-column--3 vl-column--start-10 vl-column--m-3  vl-column--s-12 vl-side-navigation--order-1"
                    ?closed=${n}
                    ?compact=${i}
                    ?multi-active=${b}
                    child-spacing=${p}
                    max-depth=${o}
                    heading-root-selector=${a}
                    navigation-title=${d}
                >
                </vl-side-navigation-next>
                <div class="vl-column vl-column--8 vl-column--m-9 vl-column--s-12 ">${f}</div>
            </div>
        `);r.storyName="vl-side-navigation-next - default";r.args={headingRootSelector:"#story-content-container"};const m=h(t,({closed:n,headingRootSelector:i,maxDepth:a,navigationTitle:o,childSpacing:d,multiActive:p})=>v`
            <div class="vl-grid vl-content-block">
                <vl-side-navigation-next
                    class="vl-column vl-column--12 vl-side-navigation--order-1"
                    ?closed=${n}
                    compact
                    ?multi-active=${p}
                    child-spacing=${d}
                    max-depth=${a}
                    heading-root-selector=${i}
                    navigation-title=${o}
                >
                </vl-side-navigation-next>
                <div class="vl-column vl-column--12">${f}</div>
            </div>
        `);m.storyName="vl-side-navigation-next - compact";m.args={compact:!0,headingRootSelector:"#story-content-container"};const c=h(t,({closed:n,compact:i,maxDepth:a,childSpacing:o,multiActive:d})=>v`
            <div class="vl-grid vl-content-block">
                <vl-side-navigation-next
                    class="vl-column vl-column--3 vl-column--start-10 vl-column--m-3  vl-column--s-12  vl-side-navigation--order-1"
                    ?closed=${n}
                    ?compact=${i}
                    ?multi-active=${d}
                    child-spacing=${o}
                    max-depth=${a}
                >
                    <ul>
                        <li>
                            <div class="nav-item-wrapper">
                                <vl-link href="#custom-intro">1. Inleiding</vl-link>
                                <vl-button
                                    ghost
                                    icon="arrow-right-fat"
                                    class="toggle-button"
                                    @click=${q}
                                ></vl-button>
                            </div>
                            <ul>
                                <li>
                                    <vl-link href="#custom-vereisten">1.1 Vereisten</vl-link>
                                </li>
                                <li>
                                    <vl-link href="#custom-documenten">1.2 Documenten</vl-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div class="nav-item-wrapper">
                                <vl-link href="#custom-aanvraag">2. Aanvraag indienen</vl-link>
                                <vl-button
                                    ghost
                                    icon="arrow-right-fat"
                                    class="toggle-button"
                                    @click=${q}
                                ></vl-button>
                            </div>
                            <ul>
                                <li>
                                    <vl-link href="#custom-online">2.1 Online</vl-link>
                                </li>
                                <li>
                                    <vl-link href="#custom-per-post">2.2 Per post</vl-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div class="nav-item-wrapper">
                                <vl-link href="#custom-termijnen">3. Termijnen</vl-link>
                            </div>
                        </li>
                    </ul>
                </vl-side-navigation-next>
                <div class="vl-column vl-column--8 vl-column--m-9 vl-column--s-12 ">
                    <div id="custom-toc-content">
                        <section>
                            <vl-title type="h2" id="custom-intro">Over deze pagina</vl-title>
                            <vl-paragraph>
                                Let op: de titels in de side-navigatie links zijn anders dan de koppen in de inhoud
                                hiernaast. Dit is een voorbeeld van een custom inhoudsopgave — je kunt zelf de teksten
                                in de navigatie kiezen. Bekijk de code van dit voorbeeld om te zien hoe je dit kunt
                                doen.
                            </vl-paragraph>
                        </section>
                        <section>
                            <vl-title type="h3" id="custom-vereisten">Wat meebrengen</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco
                            </vl-paragraph>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco
                            </vl-paragraph>
                        </section>
                        <section>
                            <vl-title type="h3" id="custom-documenten">Welke documenten</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco
                            </vl-paragraph>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco
                            </vl-paragraph>
                        </section>
                        <section>
                            <vl-title type="h2" id="custom-aanvraag">Hoe indienen</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco
                            </vl-paragraph>
                            <vl-title type="h3" id="custom-online">Online indienen</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco
                            </vl-paragraph>
                            <vl-title type="h3" id="custom-per-post">Per post indienen</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco
                            </vl-paragraph>
                        </section>
                        <section>
                            <vl-title type="h2" id="custom-termijnen">Verwachtingsdatum</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco
                            </vl-paragraph>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco
                            </vl-paragraph>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco
                            </vl-paragraph>
                        </section>
                    </div>
                </div>
            </div>
        `);c.storyName="vl-side-navigation-next - custom table of contents";const u=h(t,({closed:n,compact:i,headingRootSelector:a,navigationTitle:o,maxDepth:d,childSpacing:p,multiActive:b})=>v`
            <div class="vl-grid vl-content-block">
                <vl-side-navigation-next
                    class="vl-column vl-column--3 vl-column--start-10 vl-column--m-3 vl-column--s-12 vl-side-navigation--order-1"
                    ?closed=${n}
                    ?compact=${i}
                    child-spacing=${p}
                    max-depth=${d}
                    heading-root-selector=${a}
                    navigation-title=${o}
                    ?multi-active=${b}
                >
                    <vl-side-navigation-section-next type="auto" section-title="Op deze pagina">
                    </vl-side-navigation-section-next>

                    <vl-side-navigation-section-next section-title="Bijlagen">
                        <ul>
                            <li>
                                <div class="nav-item-wrapper">
                                    <vl-link href="#bijlage-plannen">Bijlage: plannen</vl-link>
                                    <vl-button
                                        ghost
                                        icon="arrow-right-fat"
                                        class="toggle-button"
                                        @click=${q}
                                    ></vl-button>
                                </div>
                                <ul>
                                    <li><vl-link href="#bijlage-plannen-grondplan">Grondplan</vl-link></li>
                                    <li><vl-link href="#bijlage-plannen-situering">Situeringsplan</vl-link></li>
                                </ul>
                            </li>
                            <li>
                                <div class="nav-item-wrapper">
                                    <vl-link href="#bijlage-fotos">Bijlage: foto's</vl-link>
                                </div>
                            </li>
                        </ul>
                    </vl-side-navigation-section-next>

                    <vl-side-navigation-section-next section-title="Acties">
                        <ul class="acties">
                            <li>
                                <div class="nav-item-wrapper">
                                    <vl-link href="/voortoetsen">Mijn voortoetsen</vl-link>
                                </div>
                            </li>
                            <li>
                                <div class="nav-item-wrapper">
                                    <vl-link href="https://www.vlaanderen.be" external>vlaanderen.be</vl-link>
                                </div>
                            </li>
                            <li>
                                <div class="nav-item-wrapper">
                                    <vl-button tertiary icon="print" @click=${()=>window.print()}>
                                        Pagina afdrukken
                                    </vl-button>
                                </div>
                            </li>
                        </ul>
                    </vl-side-navigation-section-next>
                </vl-side-navigation-next>

                <div class="vl-column vl-column--8 vl-column--m-9 vl-column--s-12">
                    <div id="sections-hoofdstukken">
                        <section style="min-height: 400px;">
                            <vl-title type="h2" id="sections-intro">Inleiding</vl-title>
                            <vl-paragraph>
                                Dit voorbeeld toont de side-navigation in <strong>sections-mode</strong> met drie
                                soorten secties in één nav: (1) een <strong>automatisch gegenereerde</strong> inhoudstafel
                                van de hoofdstukken hieronder, (2) een <strong>custom inhoudstafel</strong> die zelf naar
                                andere pagina-onderdelen linkt (de bijlagen), en (3) een sectie met
                                <strong>acties</strong> die niet naar een heading verwijzen (een link naar een andere
                                pagina, een print-knop en een externe link). Eén <code>vl-side-navigation-next</code>,
                                dus ook in compact / mobile één drawer.
                            </vl-paragraph>
                        </section>
                        <section style="min-height: 400px;">
                            <vl-title type="h2" id="sections-vereisten">Vereisten</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
                                numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                            </vl-paragraph>
                            <vl-title type="h3" id="sections-vereisten-documenten">Documenten</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur.
                            </vl-paragraph>
                            <vl-title type="h3" id="sections-vereisten-termijn">Termijn</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur.
                            </vl-paragraph>
                        </section>
                        <section style="min-height: 400px;">
                            <vl-title type="h2" id="sections-aanvraag">Aanvraag indienen</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
                                numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                            </vl-paragraph>
                            <vl-title type="h3" id="sections-aanvraag-online">Online indienen</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur.
                            </vl-paragraph>
                            <vl-title type="h3" id="sections-aanvraag-post">Per post indienen</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur.
                            </vl-paragraph>
                        </section>
                        <section style="min-height: 400px;">
                            <vl-title type="h2" id="sections-resultaat">Resultaat</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
                                numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                            </vl-paragraph>
                        </section>
                    </div>

                    <div id="sections-bijlagen">
                        <section style="min-height: 400px;">
                            <vl-title type="h2" id="bijlage-plannen">Bijlage: plannen</vl-title>
                            <vl-paragraph>
                                Deze hoofding zit buiten de auto-scope (#sections-hoofdstukken) en verschijnt enkel
                                via de custom "Bijlagen"-sectie, niet in de automatische inhoudstafel.
                            </vl-paragraph>
                            <vl-title type="h3" id="bijlage-plannen-grondplan">Grondplan</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur.
                            </vl-paragraph>
                            <vl-title type="h3" id="bijlage-plannen-situering">Situeringsplan</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur.
                            </vl-paragraph>
                        </section>
                        <section style="min-height: 400px;">
                            <vl-title type="h2" id="bijlage-fotos">Bijlage: foto's</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
                                numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                            </vl-paragraph>
                        </section>
                    </div>
                </div>
            </div>
        `);u.storyName="vl-side-navigation-next - sections";u.args={headingRootSelector:"#sections-hoofdstukken",navigationTitle:""};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(sideNavigationArgs, ({
  closed,
  compact,
  headingRootSelector,
  maxDepth,
  navigationTitle,
  childSpacing,
  multiActive
}) => {
  return html\`
            <div class="vl-grid vl-content-block">
                <vl-side-navigation-next
                    class="vl-column vl-column--3 vl-column--start-10 vl-column--m-3  vl-column--s-12 vl-side-navigation--order-1"
                    ?closed=\${closed}
                    ?compact=\${compact}
                    ?multi-active=\${multiActive}
                    child-spacing=\${childSpacing}
                    max-depth=\${maxDepth}
                    heading-root-selector=\${headingRootSelector}
                    navigation-title=\${navigationTitle}
                >
                </vl-side-navigation-next>
                <div class="vl-column vl-column--8 vl-column--m-9 vl-column--s-12 ">\${sampleContent}</div>
            </div>
        \`;
})`,...r.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(sideNavigationArgs, ({
  closed,
  headingRootSelector,
  maxDepth,
  navigationTitle,
  childSpacing,
  multiActive
}) => {
  return html\`
            <div class="vl-grid vl-content-block">
                <vl-side-navigation-next
                    class="vl-column vl-column--12 vl-side-navigation--order-1"
                    ?closed=\${closed}
                    compact
                    ?multi-active=\${multiActive}
                    child-spacing=\${childSpacing}
                    max-depth=\${maxDepth}
                    heading-root-selector=\${headingRootSelector}
                    navigation-title=\${navigationTitle}
                >
                </vl-side-navigation-next>
                <div class="vl-column vl-column--12">\${sampleContent}</div>
            </div>
        \`;
})`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(sideNavigationArgs, ({
  closed,
  compact,
  maxDepth,
  childSpacing,
  multiActive
}) => {
  return html\`
            <div class="vl-grid vl-content-block">
                <vl-side-navigation-next
                    class="vl-column vl-column--3 vl-column--start-10 vl-column--m-3  vl-column--s-12  vl-side-navigation--order-1"
                    ?closed=\${closed}
                    ?compact=\${compact}
                    ?multi-active=\${multiActive}
                    child-spacing=\${childSpacing}
                    max-depth=\${maxDepth}
                >
                    <ul>
                        <li>
                            <div class="nav-item-wrapper">
                                <vl-link href="#custom-intro">1. Inleiding</vl-link>
                                <vl-button
                                    ghost
                                    icon="arrow-right-fat"
                                    class="toggle-button"
                                    @click=\${toggleCustomTocChildren}
                                ></vl-button>
                            </div>
                            <ul>
                                <li>
                                    <vl-link href="#custom-vereisten">1.1 Vereisten</vl-link>
                                </li>
                                <li>
                                    <vl-link href="#custom-documenten">1.2 Documenten</vl-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div class="nav-item-wrapper">
                                <vl-link href="#custom-aanvraag">2. Aanvraag indienen</vl-link>
                                <vl-button
                                    ghost
                                    icon="arrow-right-fat"
                                    class="toggle-button"
                                    @click=\${toggleCustomTocChildren}
                                ></vl-button>
                            </div>
                            <ul>
                                <li>
                                    <vl-link href="#custom-online">2.1 Online</vl-link>
                                </li>
                                <li>
                                    <vl-link href="#custom-per-post">2.2 Per post</vl-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div class="nav-item-wrapper">
                                <vl-link href="#custom-termijnen">3. Termijnen</vl-link>
                            </div>
                        </li>
                    </ul>
                </vl-side-navigation-next>
                <div class="vl-column vl-column--8 vl-column--m-9 vl-column--s-12 ">
                    <div id="custom-toc-content">
                        <section>
                            <vl-title type="h2" id="custom-intro">Over deze pagina</vl-title>
                            <vl-paragraph>
                                Let op: de titels in de side-navigatie links zijn anders dan de koppen in de inhoud
                                hiernaast. Dit is een voorbeeld van een custom inhoudsopgave — je kunt zelf de teksten
                                in de navigatie kiezen. Bekijk de code van dit voorbeeld om te zien hoe je dit kunt
                                doen.
                            </vl-paragraph>
                        </section>
                        <section>
                            <vl-title type="h3" id="custom-vereisten">Wat meebrengen</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco
                            </vl-paragraph>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco
                            </vl-paragraph>
                        </section>
                        <section>
                            <vl-title type="h3" id="custom-documenten">Welke documenten</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco
                            </vl-paragraph>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco
                            </vl-paragraph>
                        </section>
                        <section>
                            <vl-title type="h2" id="custom-aanvraag">Hoe indienen</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco
                            </vl-paragraph>
                            <vl-title type="h3" id="custom-online">Online indienen</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco
                            </vl-paragraph>
                            <vl-title type="h3" id="custom-per-post">Per post indienen</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco
                            </vl-paragraph>
                        </section>
                        <section>
                            <vl-title type="h2" id="custom-termijnen">Verwachtingsdatum</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco
                            </vl-paragraph>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco
                            </vl-paragraph>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco
                            </vl-paragraph>
                        </section>
                    </div>
                </div>
            </div>
        \`;
})`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(sideNavigationArgs, ({
  closed,
  compact,
  headingRootSelector,
  navigationTitle,
  maxDepth,
  childSpacing,
  multiActive
}) => {
  return html\`
            <div class="vl-grid vl-content-block">
                <vl-side-navigation-next
                    class="vl-column vl-column--3 vl-column--start-10 vl-column--m-3 vl-column--s-12 vl-side-navigation--order-1"
                    ?closed=\${closed}
                    ?compact=\${compact}
                    child-spacing=\${childSpacing}
                    max-depth=\${maxDepth}
                    heading-root-selector=\${headingRootSelector}
                    navigation-title=\${navigationTitle}
                    ?multi-active=\${multiActive}
                >
                    <vl-side-navigation-section-next type="auto" section-title="Op deze pagina">
                    </vl-side-navigation-section-next>

                    <vl-side-navigation-section-next section-title="Bijlagen">
                        <ul>
                            <li>
                                <div class="nav-item-wrapper">
                                    <vl-link href="#bijlage-plannen">Bijlage: plannen</vl-link>
                                    <vl-button
                                        ghost
                                        icon="arrow-right-fat"
                                        class="toggle-button"
                                        @click=\${toggleCustomTocChildren}
                                    ></vl-button>
                                </div>
                                <ul>
                                    <li><vl-link href="#bijlage-plannen-grondplan">Grondplan</vl-link></li>
                                    <li><vl-link href="#bijlage-plannen-situering">Situeringsplan</vl-link></li>
                                </ul>
                            </li>
                            <li>
                                <div class="nav-item-wrapper">
                                    <vl-link href="#bijlage-fotos">Bijlage: foto's</vl-link>
                                </div>
                            </li>
                        </ul>
                    </vl-side-navigation-section-next>

                    <vl-side-navigation-section-next section-title="Acties">
                        <ul class="acties">
                            <li>
                                <div class="nav-item-wrapper">
                                    <vl-link href="/voortoetsen">Mijn voortoetsen</vl-link>
                                </div>
                            </li>
                            <li>
                                <div class="nav-item-wrapper">
                                    <vl-link href="https://www.vlaanderen.be" external>vlaanderen.be</vl-link>
                                </div>
                            </li>
                            <li>
                                <div class="nav-item-wrapper">
                                    <vl-button tertiary icon="print" @click=\${() => window.print()}>
                                        Pagina afdrukken
                                    </vl-button>
                                </div>
                            </li>
                        </ul>
                    </vl-side-navigation-section-next>
                </vl-side-navigation-next>

                <div class="vl-column vl-column--8 vl-column--m-9 vl-column--s-12">
                    <div id="sections-hoofdstukken">
                        <section style="min-height: 400px;">
                            <vl-title type="h2" id="sections-intro">Inleiding</vl-title>
                            <vl-paragraph>
                                Dit voorbeeld toont de side-navigation in <strong>sections-mode</strong> met drie
                                soorten secties in één nav: (1) een <strong>automatisch gegenereerde</strong> inhoudstafel
                                van de hoofdstukken hieronder, (2) een <strong>custom inhoudstafel</strong> die zelf naar
                                andere pagina-onderdelen linkt (de bijlagen), en (3) een sectie met
                                <strong>acties</strong> die niet naar een heading verwijzen (een link naar een andere
                                pagina, een print-knop en een externe link). Eén <code>vl-side-navigation-next</code>,
                                dus ook in compact / mobile één drawer.
                            </vl-paragraph>
                        </section>
                        <section style="min-height: 400px;">
                            <vl-title type="h2" id="sections-vereisten">Vereisten</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
                                numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                            </vl-paragraph>
                            <vl-title type="h3" id="sections-vereisten-documenten">Documenten</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur.
                            </vl-paragraph>
                            <vl-title type="h3" id="sections-vereisten-termijn">Termijn</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur.
                            </vl-paragraph>
                        </section>
                        <section style="min-height: 400px;">
                            <vl-title type="h2" id="sections-aanvraag">Aanvraag indienen</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
                                numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                            </vl-paragraph>
                            <vl-title type="h3" id="sections-aanvraag-online">Online indienen</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur.
                            </vl-paragraph>
                            <vl-title type="h3" id="sections-aanvraag-post">Per post indienen</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur.
                            </vl-paragraph>
                        </section>
                        <section style="min-height: 400px;">
                            <vl-title type="h2" id="sections-resultaat">Resultaat</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
                                numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                            </vl-paragraph>
                        </section>
                    </div>

                    <div id="sections-bijlagen">
                        <section style="min-height: 400px;">
                            <vl-title type="h2" id="bijlage-plannen">Bijlage: plannen</vl-title>
                            <vl-paragraph>
                                Deze hoofding zit buiten de auto-scope (#sections-hoofdstukken) en verschijnt enkel
                                via de custom "Bijlagen"-sectie, niet in de automatische inhoudstafel.
                            </vl-paragraph>
                            <vl-title type="h3" id="bijlage-plannen-grondplan">Grondplan</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur.
                            </vl-paragraph>
                            <vl-title type="h3" id="bijlage-plannen-situering">Situeringsplan</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur.
                            </vl-paragraph>
                        </section>
                        <section style="min-height: 400px;">
                            <vl-title type="h2" id="bijlage-fotos">Bijlage: foto's</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
                                numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                            </vl-paragraph>
                        </section>
                    </div>
                </div>
            </div>
        \`;
})`,...u.parameters?.docs?.source}}};const R=["SideNavigationDefault","SideNavigationCompact","SideNavigationWithCustomToc","SideNavigationWithSections"];export{m as SideNavigationCompact,r as SideNavigationDefault,c as SideNavigationWithCustomToc,u as SideNavigationWithSections,R as __namedExportsOrder,O as default};
