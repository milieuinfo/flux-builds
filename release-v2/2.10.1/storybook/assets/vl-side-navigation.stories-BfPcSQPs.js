import{R as s,U as r,P as k,O as f,u as q,j as i,bh as j,C as c,s as p,x as u,r as L,b0 as U,bJ as y,h as w,ch as S}from"./iframe-iHJvAyUB.js";import{t as v}from"./vl-side-navigation.component-BhsvpvVh.js";import"./preload-helper-D9Z9MdNV.js";const C={closed:!1,compact:!1,headingRootSelector:"",maxDepth:void 0,navigationTitle:"Op deze pagina"},o={...k,...C,defaultSlot:""},T={...f,closed:{name:"closed",description:"Wanneer aanwezig wordt de inhoudstafel standaard verborgen. Heeft enkel effect wanneer het attribuut `compact` is gezet of bij mobiele weergave (viewport < 768px). Op desktop zonder compact wordt de navigatie altijd getoond.",table:{type:{summary:r.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:String(o.closed)}}},compact:{name:"compact",description:"Forceert de compacte weergave (toggle knop, verborgen navigatie standaard) ongeacht de viewport grootte.",table:{type:{summary:r.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:String(o.compact)}}},headingRootSelector:{name:"heading-root-selector",description:'CSS selector om het root container element te vinden waarbinnen naar headings gezocht wordt. Indien niet opgegeven, wordt het volledige document/shadow root doorzocht. Voorbeeld: "#section-1" om enkel headings binnen die sectie te scannen.',table:{type:{summary:r.STRING},category:s.ATTRIBUTES,defaultValue:{summary:o.headingRootSelector}}},maxDepth:{name:"max-depth",description:"Optionele maximum diepte voor shadow DOM traversal (bij scannen van headings én bij zoeken van scroll-target). Biedt fijnmazige controle over performantie vs compatibiliteit. 0 = enkel light DOM, 1 = light DOM + eerste niveau shadow DOM, undefined = onbeperkt (standaard).",table:{type:{summary:r.NUMBER},category:s.ATTRIBUTES,defaultValue:{summary:o.maxDepth!==void 0?String(o.maxDepth):"undefined"}}},navigationTitle:{name:"navigation-title",description:"Tekst die getoond wordt als titel boven de inhoudstafel.",table:{type:{summary:r.STRING},category:s.ATTRIBUTES,defaultValue:{summary:o.navigationTitle}}},defaultSlot:{name:"[default]",description:'Custom inhoudsopgave. Wanneer je hier content plaatst (bijv. een ul/li-structuur met vl-link elementen met href="#..."), wordt die gebruikt in plaats van de automatisch gegenereerde inhoudsopgave. De links moeten verwijzen naar heading-ids in de content.',table:{type:{summary:r.HTML},category:s.SLOTS,defaultValue:{summary:String(o.defaultSlot)}}}};function g(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...q(),...t.components},{FluxAlert:n,FluxComponentMetaData:d}=e;return n||h("FluxAlert"),d||h("FluxComponentMetaData"),i.jsxs(i.Fragment,{children:[i.jsx(e.h1,{id:"side-navigation-next",children:"Side Navigation Next"}),`
`,i.jsx(d,{id:"components-block-next-side-navigation-next"}),`
`,i.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,i.jsxs(e.p,{children:["Gebruik de ",i.jsx(e.code,{children:"side-navigation"}),` component om een compact navigatie-element aan een pagina toe te voegen. Het vat de
inhoud van lange pagina's samen aan de hand van de titels en leidt de gebruiker door de pagina inhoud.`]}),`
`,i.jsx(n,{type:"info",children:`
  Er bestaat een bijbehorend **Side Navigation Layout** component dat automatisch de grid-layout en een side navigation combineert.
  Heb je meer controle of maatwerk nodig, gebruik dan \`vl-side-navigation-next\` rechtstreeks. Voor de standaard combinatie van layout en inhoudsopgave volstaat het layout-component.
  Voor meer informatie: [Side Navigation Layout](/docs/components-next-side-navigation-layout--documentatie).
`}),`
`,i.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-js",children:`import { VlSideNavigationComponent } from '@domg-wc/components/block/next';
`})}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<vl-side-navigation-next></vl-side-navigation-next>
`})}),`
`,i.jsx(e.h2,{id:"gebruik",children:"Gebruik"}),`
`,i.jsxs(e.p,{children:[`De side navigation component scant automatisch de headings in de pagina en genereert een inhoudsopgave.
Alternatief kan je ook zelf een inhoudsopgave opstellen. `,i.jsx(e.a,{href:"#custom-table-of-contents",children:"Zie hier voor een code voorbeeld."})]}),`
`,i.jsx(e.h2,{id:"css-variabelen",children:"CSS variabelen"}),`
`,i.jsxs(e.p,{children:[`De sticky positie van de table of contents (inhoudsopgave) wordt bepaald door de CSS variabele
`,i.jsx(e.code,{children:"--vl-side-navigation-top"}),`. Gebruik deze variabele wanneer er een sticky element boven de side navigation staat
zodat de side-navigation niet onder dat element schuift.`]}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"--vl-side-navigation-top"})})," (standaard: ",i.jsx(e.code,{children:"50px"}),"): de ",i.jsx(e.code,{children:"top"}),`-waarde voor de sticky positie van de TOC.
Accepteert elke geldige CSS waarde (bijv. `,i.jsx(e.code,{children:"140px"}),", ",i.jsx(e.code,{children:"10rem"}),", of ",i.jsx(e.code,{children:"var(--header-height)"}),`). Definieer de variabele op een
voorouder van de side navigation (bijv. op `,i.jsx(e.code,{children:"main"})," of op de layout container)."]}),`
`]}),`
`,i.jsx(e.h2,{id:"eigenschappen",children:"Eigenschappen"}),`
`,i.jsxs(e.p,{children:["Het attribuut ",i.jsx(e.strong,{children:i.jsx(e.code,{children:"closed"})})," zorgt ervoor dat de inhoudstafel standaard verborgen is. Dit heeft enkel effect wanneer ",i.jsx(e.strong,{children:i.jsx(e.code,{children:"compact"})})," is gezet of bij mobiele weergave (viewport < 768px); op desktop zonder compact wordt de navigatie altijd getoond."]}),`
`,i.jsx(j,{of:a}),`
`,i.jsx(e.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,i.jsx(n,{type:"info",children:`
  De voorbeelden hieronder worden in een iframe weergegeven.
  De scroll-tracking van de side navigation werkt enkel wanneer
  je **binnen de iframe scrollt** (klik eerst op een navigatie-link om de content te scrollen).
   Wanneer je door de documentatiepagina zelf scrollt, verandert de positie van de content binnen het iframe niet,
    waardoor de actieve sectie niet wordt bijgewerkt.
`}),`
`,i.jsx(e.p,{children:"In een echte applicatie en in de individuele stories, waar de content in dezelfde viewport scrollt, werkt de scroll-tracking correct."}),`
`,i.jsx(e.h3,{id:"default",children:"Default"}),`
`,i.jsx(c,{of:a,inline:!1}),`
`,i.jsxs("details",{children:[i.jsx("summary",{children:"Compact (navigatie standaard gesloten)"}),i.jsxs(e.p,{children:["Met het attribuut ",i.jsx(e.code,{children:"compact"})," wordt de compacte weergave geforceerd: de navigatie staat standaard gesloten en kan via de toggle knop worden opengeklapt."]}),i.jsx(c,{of:l,inline:!1})]}),`
`,i.jsx(e.h2,{id:"scoping-met-heading-root-selector",children:"Scoping met heading-root-selector"}),`
`,i.jsxs(e.p,{children:["Je kan de side navigation beperken tot een specifieke sectie van de pagina door gebruik te maken van het ",i.jsx(e.code,{children:"heading-root-selector"})," attribuut:"]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<vl-side-navigation-next heading-root-selector="#section-1"></vl-side-navigation-next>
`})}),`
`,i.jsxs(e.p,{children:["Dit zal enkel headings binnen het element met id ",i.jsx(e.code,{children:"section-1"})," scannen."]}),`
`,i.jsx(e.h3,{id:"custom-table-of-contents",children:"Custom Table of Contents"}),`
`,i.jsxs(e.p,{children:["Je kan zelf ook een table of contents opstellen. Het is hierbij belangrijk dat je gebruik maakt van ",i.jsx(e.code,{children:"vl-link"}),`
componenten die verwijzen naar headings met bestaande id's.`]}),`
`,i.jsx(c,{of:m,inline:!1}),`
`,i.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:i.jsx(e.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/side-navigation",rel:"nofollow",children:"Digitaal Vlaanderen - Side Navigation"})}),`
`]}),`
`,i.jsx("vl-side-navigation-next",{compact:!0,"exclude-selectors":"iframe, #storybook-root",closed:!0})]})}function D(t={}){const{wrapper:e}={...q(),...t.components};return e?i.jsx(e,{...t,children:i.jsx(g,{...t})}):g(t)}function h(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const A={id:"components-block-next-side-navigation-next",title:"Components - Block/next/side-navigation-next",tags:["autodocs"],args:o,argTypes:T,parameters:{docs:{page:D,story:{inline:!1,iframeHeight:500}}}};L([U,y,w,S]);const x=u`
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
`,a=p(o,({closed:t,compact:e,headingRootSelector:n,maxDepth:d,navigationTitle:b})=>u`
            <div class="vl-grid vl-content-block">
                <vl-side-navigation-next
                    class="vl-column vl-column--3 vl-column--start-10 vl-column--m-3  vl-column--s-12 vl-side-navigation--order-1"
                    ?closed=${t}
                    ?compact=${e}
                    max-depth=${d}
                    heading-root-selector=${n}
                    navigation-title=${b}
                >
                </vl-side-navigation-next>
                <div class="vl-column vl-column--8 vl-column--m-9 vl-column--s-12 ">${x}</div>
            </div>
        `);a.storyName="vl-side-navigation-next - default";a.args={headingRootSelector:"#story-content-container"};const l=p(o,({closed:t,headingRootSelector:e,maxDepth:n,navigationTitle:d})=>u`
            <div class="vl-grid vl-content-block">
                <vl-side-navigation-next
                    class="vl-column vl-column--12 vl-side-navigation--order-1"
                    ?closed=${t}
                    compact
                    max-depth=${n}
                    heading-root-selector=${e}
                    navigation-title=${d}
                >
                </vl-side-navigation-next>
                <div class="vl-column vl-column--12">${x}</div>
            </div>
        `);l.storyName="vl-side-navigation-next - compact";l.args={compact:!0,headingRootSelector:"#story-content-container"};const m=p(o,({closed:t,compact:e,maxDepth:n})=>u`
        <div class="vl-grid vl-content-block">
            <vl-side-navigation-next
                class="vl-column vl-column--3 vl-column--start-10 vl-column--m-3  vl-column--s-12  vl-side-navigation--order-1"
                ?closed=${t}
                ?compact=${e}
                max-depth=${n}
            >
                <ul>
                    <li>
                        <div class="nav-item-wrapper">
                            <vl-link href="#custom-intro">1. Inleiding</vl-link>
                            <vl-button
                                ghost
                                icon="arrow-right-fat"
                                class="toggle-button"
                                @click=${v}
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
                                @click=${v}
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
                            hiernaast. Dit is een voorbeeld van een custom inhoudsopgave — je kunt zelf de teksten in de
                            navigatie kiezen. Bekijk de code van dit voorbeeld om te zien hoe je dit kunt doen.
                        </vl-paragraph>
                    </section>
                    <section>
                        <vl-title type="h3" id="custom-vereisten">Wat meebrengen</vl-title>
                        <vl-paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </vl-paragraph>
                        <vl-paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </vl-paragraph>
                    </section>
                    <section>
                        <vl-title type="h3" id="custom-documenten">Welke documenten</vl-title>
                        <vl-paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </vl-paragraph>
                        <vl-paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </vl-paragraph>
                    </section>
                    <section>
                        <vl-title type="h2" id="custom-aanvraag">Hoe indienen</vl-title>
                        <vl-paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </vl-paragraph>
                        <vl-title type="h3" id="custom-online">Online indienen</vl-title>
                        <vl-paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </vl-paragraph>
                        <vl-title type="h3" id="custom-per-post">Per post indienen</vl-title>
                        <vl-paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </vl-paragraph>
                    </section>
                    <section>
                        <vl-title type="h2" id="custom-termijnen">Verwachtingsdatum</vl-title>
                        <vl-paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </vl-paragraph>
                        <vl-paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </vl-paragraph>
                        <vl-paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </vl-paragraph>
                    </section>
                </div>
            </div>
        </div>
    `);m.storyName="vl-side-navigation-next - custom table of contents";a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(sideNavigationArgs, ({
  closed,
  compact,
  headingRootSelector,
  maxDepth,
  navigationTitle
}) => {
  return html\`
            <div class="vl-grid vl-content-block">
                <vl-side-navigation-next
                    class="vl-column vl-column--3 vl-column--start-10 vl-column--m-3  vl-column--s-12 vl-side-navigation--order-1"
                    ?closed=\${closed}
                    ?compact=\${compact}
                    max-depth=\${maxDepth}
                    heading-root-selector=\${headingRootSelector}
                    navigation-title=\${navigationTitle}
                >
                </vl-side-navigation-next>
                <div class="vl-column vl-column--8 vl-column--m-9 vl-column--s-12 ">\${sampleContent}</div>
            </div>
        \`;
})`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(sideNavigationArgs, ({
  closed,
  headingRootSelector,
  maxDepth,
  navigationTitle
}) => {
  return html\`
            <div class="vl-grid vl-content-block">
                <vl-side-navigation-next
                    class="vl-column vl-column--12 vl-side-navigation--order-1"
                    ?closed=\${closed}
                    compact
                    max-depth=\${maxDepth}
                    heading-root-selector=\${headingRootSelector}
                    navigation-title=\${navigationTitle}
                >
                </vl-side-navigation-next>
                <div class="vl-column vl-column--12">\${sampleContent}</div>
            </div>
        \`;
})`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(sideNavigationArgs, ({
  closed,
  compact,
  maxDepth
}) => {
  return html\`
        <div class="vl-grid vl-content-block">
            <vl-side-navigation-next
                class="vl-column vl-column--3 vl-column--start-10 vl-column--m-3  vl-column--s-12  vl-side-navigation--order-1"
                ?closed=\${closed}
                ?compact=\${compact}
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
                            hiernaast. Dit is een voorbeeld van een custom inhoudsopgave — je kunt zelf de teksten in de
                            navigatie kiezen. Bekijk de code van dit voorbeeld om te zien hoe je dit kunt doen.
                        </vl-paragraph>
                    </section>
                    <section>
                        <vl-title type="h3" id="custom-vereisten">Wat meebrengen</vl-title>
                        <vl-paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </vl-paragraph>
                        <vl-paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </vl-paragraph>
                    </section>
                    <section>
                        <vl-title type="h3" id="custom-documenten">Welke documenten</vl-title>
                        <vl-paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </vl-paragraph>
                        <vl-paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </vl-paragraph>
                    </section>
                    <section>
                        <vl-title type="h2" id="custom-aanvraag">Hoe indienen</vl-title>
                        <vl-paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </vl-paragraph>
                        <vl-title type="h3" id="custom-online">Online indienen</vl-title>
                        <vl-paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </vl-paragraph>
                        <vl-title type="h3" id="custom-per-post">Per post indienen</vl-title>
                        <vl-paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </vl-paragraph>
                    </section>
                    <section>
                        <vl-title type="h2" id="custom-termijnen">Verwachtingsdatum</vl-title>
                        <vl-paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </vl-paragraph>
                        <vl-paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </vl-paragraph>
                        <vl-paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco
                        </vl-paragraph>
                    </section>
                </div>
            </div>
        </div>
    \`;
})`,...m.parameters?.docs?.source}}};const O=["SideNavigationDefault","SideNavigationCompact","SideNavigationWithCustomToc"];export{l as SideNavigationCompact,a as SideNavigationDefault,m as SideNavigationWithCustomToc,O as __namedExportsOrder,A as default};
