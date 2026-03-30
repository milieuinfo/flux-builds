import{Y as s,Z as r,W as f,U as j,u as k,j as n,bb as $,C as v,s as g,x as m,r as S,P as w,cc as q,bD as I,d as P}from"./iframe-B6HStWZE.js";import"./vl-side-navigation-layout.component-DjeO_5cq.js";import{t as y}from"./vl-side-navigation.component-B_tX0fZa.js";import"./preload-helper-D9Z9MdNV.js";const T={compact:!1,headingRootSelector:"",contentBlock:!1,maxDepth:void 0,navigationTitle:"",excludeSelectors:"",childSpacing:"small"},a={...f,...T,contentSlot:"",navigationSlot:""},C={...j,compact:{name:"compact",description:"Forceert de compacte weergave (toggle knop, verborgen navigatie standaard) ongeacht de viewport grootte.",table:{type:{summary:r.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:String(a.compact)}}},headingRootSelector:{name:"heading-root-selector",description:'CSS selector om het root container element te vinden waarbinnen naar headings gezocht wordt. Indien niet opgegeven, wordt het volledige document/shadow root doorzocht. Voorbeeld: "#section-1" om enkel headings binnen die sectie te scannen.',table:{type:{summary:r.STRING},category:s.ATTRIBUTES,defaultValue:{summary:a.headingRootSelector}}},contentBlock:{name:"content-block",description:"Past de vl-content-block class toe op de layout container voor correcte spacing.",table:{type:{summary:r.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:String(a.contentBlock)}}},maxDepth:{name:"max-depth",description:"Optionele maximum diepte voor shadow DOM traversal (bij scannen van headings én bij zoeken van scroll-target). Biedt fijnmazige controle over performantie vs compatibiliteit. 0 = enkel light DOM, 1 = light DOM + eerste niveau shadow DOM, undefined = onbeperkt (standaard).",table:{type:{summary:r.NUMBER},category:s.ATTRIBUTES,defaultValue:{summary:a.maxDepth!==void 0?String(a.maxDepth):"undefined"}}},navigationTitle:{name:"navigation-title",description:"Tekst die getoond wordt als titel boven de inhoudstafel in de side navigation. Wordt doorgegeven aan vl-side-navigation-next.",table:{type:{summary:r.STRING},category:s.ATTRIBUTES,defaultValue:{summary:a.navigationTitle}}},excludeSelectors:{name:"exclude-selectors",description:'Comma-separated CSS selectors van elementen om uit te sluiten tijdens het scannen van headings. Wordt doorgegeven aan vl-side-navigation-next. Voorbeeld: "iframe, table.large-data, .skip-headings".',table:{type:{summary:r.STRING},category:s.ATTRIBUTES,defaultValue:{summary:a.excludeSelectors}}},childSpacing:{name:"child-spacing",description:"Bepaalt de verticale ruimte tussen child-links. `medium` geeft extra ruimte (1.3rem marge boven en onder). `small` is de standaard compacte weergave. Wordt doorgegeven aan vl-side-navigation-next.",options:["medium","small"],control:{type:"select"},table:{type:{summary:r.STRING},category:s.ATTRIBUTES,defaultValue:{summary:a.childSpacing}}},contentSlot:{name:"content",description:"De hoofdinhoud van de pagina. Plaats hier het element (bijv. een div) met de secties en headings waarop de inhoudsopgave gebaseerd wordt. Moet een element zijn dat overeenkomt met heading-root-selector of een kind daarvan bevat.",table:{type:{summary:r.HTML},category:s.SLOTS,defaultValue:{summary:String(a.contentSlot)}}},navigationSlot:{name:"navigation",description:"Optioneel. Custom navigatie-component. Dit slot verwacht de [vl-side-navigation-next](/docs/components-next-side-navigation-side-navigation--documentatie). Indien niet gezet, wordt automatisch een `vl-side-navigation-next` gegenereerd op basis van de headings in de content slot.",table:{type:{summary:r.HTML},category:s.SLOTS,defaultValue:{summary:String(a.navigationSlot)}}}};function x(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...k(),...i.components},{FluxAlert:o,FluxComponentMetaData:l}=e;return o||b("FluxAlert"),l||b("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"side-navigation-layout",children:"Side Navigation Layout"}),`
`,n.jsx(l,{id:"components-block-next-side-navigation-layout"}),`
`,n.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,n.jsxs(e.p,{children:[`De side navigation layout bouwt automatisch een inhoudstafel op voor een gestructureerde tekst met behulp van de
`,n.jsx(e.a,{href:"/docs/components-next-side-navigation-side-navigation--documentatie",children:"side navigation"}),"."]}),`
`,n.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { VlSideNavigationLayoutComponent } from '@domg-wc/components/block/next';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-side-navigation-layout-next>
    <div slot="content">
        <!-- Je content met headings en bijhorende id's-->
    </div>
</vl-side-navigation-layout-next>
`})}),`
`,n.jsx(e.h2,{id:"gebruik",children:"Gebruik"}),`
`,n.jsxs(e.p,{children:[`De side navigation layout component zorgt automatisch voor de juiste grid layout voor een meegegeven tekst en genereert
een `,n.jsx(e.a,{href:"/docs/components-next-side-navigation-side-navigation--documentatie",children:"side navigation"}),", indien niet expliciet meegegeven."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Slots:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"content"})})," — Verplicht. Hier komt de hoofdinhoud (secties met headings en id's). De layout scant deze content om de inhoudsopgave op te bouwen; het root-element moet overeenkomen met het ",n.jsx(e.code,{children:"heading-root-selector"})," attribuut of een kind daarvan bevatten."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"navigation"})})," — Optioneel. Voor een eigen navigatie-component (bijv. ",n.jsx(e.code,{children:"vl-side-navigation-next"})," met custom TOC). Weglaten zorgt voor een automatisch gegenereerde side navigation."]}),`
`]}),`
`,n.jsx(e.h2,{id:"css-variabelen",children:"CSS variabelen"}),`
`,n.jsxs(e.p,{children:[`De sticky positie van de table of contents (inhoudsopgave) wordt bepaald door de CSS variabele
`,n.jsx(e.code,{children:"--vl-side-navigation-top"}),`. Gebruik deze variabele wanneer er een sticky element boven de side navigation staat
zodat de side-navigation niet onder dat element schuift.`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"--vl-side-navigation-top"})})," (standaard: ",n.jsx(e.code,{children:"50px"}),"): de ",n.jsx(e.code,{children:"top"}),`-waarde voor de sticky positie van de TOC.
Accepteert elke geldige CSS waarde (bijv. `,n.jsx(e.code,{children:"140px"}),", ",n.jsx(e.code,{children:"10rem"}),", of ",n.jsx(e.code,{children:"var(--header-height)"}),`). Definieer de variabele op een
voorouder van de side navigation (bijv. op `,n.jsx(e.code,{children:"main"})," of op de layout container)."]}),`
`]}),`
`,n.jsx(e.h2,{id:"eigenschappen",children:"Eigenschappen"}),`
`,n.jsx($,{of:d}),`
`,n.jsx(e.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,n.jsx(o,{type:"info",children:`
  De voorbeelden hieronder worden in een iframe weergegeven.
  De scroll-tracking van de side navigation werkt enkel wanneer
  je **binnen de iframe scrollt** (klik eerst op een navigatie-link om de content te scrollen).
   Wanneer je door de documentatiepagina zelf scrollt, verandert de positie van de content binnen het iframe niet,
    waardoor de actieve sectie niet wordt bijgewerkt.
`}),`
`,n.jsx(e.p,{children:"In een echte applicatie en in de individuele stories, waar de content in dezelfde viewport scrollt, werkt de scroll-tracking correct."}),`
`,n.jsx(e.h3,{id:"default-automatische-navigatie",children:"Default (Automatische navigatie)"}),`
`,n.jsx(e.p,{children:"De layout component genereert automatisch een side navigation op basis van de headings met id's in de content."}),`
`,n.jsx(v,{of:d}),`
`,n.jsx(e.h3,{id:"met-vl-steps",children:"Met vl-steps"}),`
`,n.jsx(v,{of:c}),`
`,n.jsx(e.h3,{id:"twee-layouts-met-eigen-content",children:"Twee layouts met eigen content"}),`
`,n.jsx(e.p,{children:"Je kunt meerdere side-navigation-layout componenten onder elkaar plaatsen; elk met eigen content en automatisch gegenereerde inhoudsopgave."}),`
`,n.jsx(v,{of:p}),`
`,n.jsx(e.h3,{id:"met-custom-toc",children:"Met custom TOC"}),`
`,n.jsxs(e.p,{children:["Je kan een custom TOC meegeven met eigen titels. Scroll tracking blijft automatisch werken zolang je in de ",n.jsx(e.code,{children:"vl-link"}),`
elementen refereert naar de relevante titels in de tekst.`]}),`
`,n.jsx(v,{of:u}),`
`,n.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/side-navigation",rel:"nofollow",children:"Digitaal Vlaanderen - Side Navigation"})}),`
`]}),`
`,n.jsx("vl-side-navigation-next",{compact:!0,"exclude-selectors":"iframe, #storybook-root",closed:!0})]})}function L(i={}){const{wrapper:e}={...k(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(x,{...i})}):x(i)}function b(i,e){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const V={id:"components-block-next-side-navigation-layout",title:"Components - Block/next/side-navigation-layout",tags:["autodocs"],args:a,argTypes:C,parameters:{docs:{page:L,story:{inline:!1,iframeHeight:500}}}};S([w,q,I,P]);const t=m`
    <vl-paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    </vl-paragraph>
`,d=g(a,({compact:i,contentBlock:e,navigationTitle:o,excludeSelectors:l,childSpacing:h})=>m`
            <vl-side-navigation-layout-next
                ?compact=${i}
                ?content-block=${e}
                heading-root-selector="#story-default-content"
                navigation-title=${o}
                exclude-selectors=${l}
                child-spacing=${h}
            >
                <div slot="content">
                    <div id="story-default-content">
                        <section>
                            <vl-title type="h2" id="default-content-1">Content 1</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </vl-paragraph>
                        </section>
                        <section>
                            <vl-title type="h3" id="default-content-1-1">Content 1 - 1</vl-title>
                            ${t} ${t}
                        </section>
                        <section>
                            <vl-title type="h3" id="default-content-1-2">Content 1 - 2</vl-title>
                            ${t} ${t}
                        </section>
                        <section>
                            <vl-title type="h2" id="default-content-2">Content 2</vl-title>
                            ${t} ${t}
                            <vl-title type="h3" id="content-2-1-heading">Content 2 - 1</vl-title>
                            ${t}
                            <vl-title type="h3" id="content-2-2-heading">Content 2 - 2</vl-title>
                            ${t} ${t}
                        </section>
                        <section>
                            <vl-title type="h2" id="default-content-3">Content 3</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </vl-paragraph>
                            ${t} ${t}
                        </section>
                    </div>
                </div>
            </vl-side-navigation-layout-next>
        `);d.storyName="vl-side-navigation-layout-next - default";const c=g(a,({compact:i,contentBlock:e,maxDepth:o,excludeSelectors:l,childSpacing:h})=>m`
            <vl-side-navigation-layout-next
                ?compact=${i}
                ?content-block=${e}
                max-depth=${o}
                heading-root-selector="#steps-content-container"
                max-depth="0"
                exclude-selectors=${l}
                child-spacing=${h}
            >
                <div slot="content" id="steps-content-container">
                    <vl-steps>
                        <vl-step>
                            <span slot="icon">1</span>
                            <span slot="title">
                                <vl-title type="h2" id="vl-steps-vl-step-1">Stap 1: eerste actie</vl-title>
                            </span>
                            <span slot="content">
                                <div>
                                    <vl-paragraph>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus.
                                    </vl-paragraph>
                                    ${t}
                                </div>
                            </span>
                        </vl-step>
                        <vl-step>
                            <span slot="icon">2</span>
                            <span slot="title">
                                <vl-title type="h2" id="vl-steps-vl-step-2">Stap 2: tweede actie</vl-title>
                            </span>
                            <span slot="content">
                                <div>
                                    <vl-title type="h3" underline id="vl-steps-vl-step-2-abstract">Abstract</vl-title>
                                    ${t}
                                    <vl-paragraph>
                                        Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada nunc vel
                                        risus commodo viverra maecenas accumsan lacus.
                                    </vl-paragraph>
                                    <vl-title type="h3" id="vl-steps-vl-step-2-volledig" underline>Volledig</vl-title>
                                    ${t} ${t}
                                </div>
                            </span>
                        </vl-step>
                        <vl-step>
                            <span slot="icon">3</span>
                            <span slot="title">
                                <vl-title type="h2" id="vl-steps-vl-step-3">Stap 3: derde actie</vl-title>
                            </span>
                            <span slot="content">
                                <div>
                                    <vl-paragraph>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </vl-paragraph>
                                    ${t} ${t} ${t}
                                    ${t} ${t}
                                </div>
                            </span>
                        </vl-step>
                    </vl-steps>
                </div>
            </vl-side-navigation-layout-next>
        `);c.storyName="vl-side-navigation-layout-next - met steps";c.parameters={docs:{story:{inline:!1,iframeHeight:800}}};const p=g(a,({compact:i,contentBlock:e,excludeSelectors:o,childSpacing:l})=>m`
            <vl-side-navigation-layout-next
                ?compact=${i}
                ?content-block=${e}
                heading-root-selector="#content-subsidies"
                exclude-selectors=${o}
                child-spacing=${l}
            >
                <div slot="content">
                    <div id="content-subsidies">
                        <section>
                            <vl-title type="h2" id="subsidies-inleiding">Subsidies - Inleiding</vl-title>
                            <vl-paragraph>
                                Op deze pagina vind je informatie over subsidies. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                            </vl-paragraph>
                            ${t}
                        </section>
                        <section>
                            <vl-title type="h3" id="subsidies-voorwaarden">Voorwaarden</vl-title>
                            <vl-paragraph>
                                Om in aanmerking te komen moet je voldoen aan een aantal voorwaarden. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur.
                            </vl-paragraph>
                            ${t}
                        </section>
                        <section>
                            <vl-title type="h3" id="subsidies-bedrag">Bedrag en duur</vl-title>
                            <vl-paragraph>
                                Het subsidiebedrag en de looptijd hangen af van je situatie. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </vl-paragraph>
                            ${t}
                        </section>
                        <section>
                            <vl-title type="h2" id="subsidies-aanvraag">Aanvraag indienen</vl-title>
                            <vl-paragraph>
                                Je kunt je aanvraag online of per post indienen. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </vl-paragraph>
                            ${t}

                            <vl-title type="h3" id="subsidies-online">Online aanvragen</vl-title>
                            <vl-paragraph>
                                Via het e-loket kun je digitaal je aanvraag doen. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </vl-paragraph>
                            ${t}

                            <vl-title type="h3" id="subsidies-post">Per post</vl-title>
                            <vl-paragraph>
                                Stuur het ingevulde formulier naar het vermelde adres. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </vl-paragraph>
                            ${t} ${t}
                        </section>
                        <section>
                            <vl-title type="h2" id="subsidies-afhandeling">Afhandeling en termijnen</vl-title>
                            <vl-paragraph>
                                Binnen welke termijn je een antwoord krijgt en hoe de betaling verloopt. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum.
                            </vl-paragraph>
                            ${t}
                        </section>
                    </div>
                </div>
            </vl-side-navigation-layout-next>
            <hr class="vl-separator-slash vl-padding--medium vl-margin--medium" />
            <vl-side-navigation-layout-next
                ?compact=${i}
                ?content-block=${e}
                heading-root-selector="#content-diensten"
                exclude-selectors=${o}
            >
                <div slot="content">
                    <div id="content-diensten">
                        <section>
                            <vl-title type="h2" id="diensten-overzicht">Diensten - Overzicht</vl-title>
                            <vl-paragraph>
                                Hier vind je een overzicht van de diensten die wij aanbieden. Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                            </vl-paragraph>
                        </section>
                        <section>
                            <vl-title type="h3" id="diensten-online">Online diensten</vl-title>
                            <vl-paragraph>
                                Veel zaken kun je via de website afhandelen. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </vl-paragraph>
                            ${t}
                        </section>
                        <section>
                            <vl-title type="h3" id="diensten-loket">Aan het loket</vl-title>
                            <vl-paragraph>
                                Voor bepaalde aanvragen moet je naar het loket komen. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </vl-paragraph>
                            ${t}
                        </section>
                        <section>
                            <vl-title type="h2" id="diensten-afspraak">Afspraak maken</vl-title>
                            <vl-paragraph>
                                Maak een afspraak om wachttijden te vermijden. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </vl-paragraph>
                            ${t}

                            <vl-title type="h3" id="diensten-telefoon">Telefonisch</vl-title>
                            <vl-paragraph>
                                Bel ons om een afspraak in te plannen. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </vl-paragraph>
                            ${t}

                            <vl-title type="h3" id="diensten-online-afspraak">Online reserveren</vl-title>
                            <vl-paragraph>
                                Kies een beschikbaar tijdstip in de online agenda. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </vl-paragraph>
                            ${t}
                        </section>
                        <section>
                            <vl-title type="h2" id="diensten-contact">Contact en openingstijden</vl-title>
                            <vl-paragraph>
                                Waar je ons kunt bereiken en wanneer we open zijn. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </vl-paragraph>
                            ${t}
                        </section>
                    </div>
                </div>
            </vl-side-navigation-layout-next>
        `);p.storyName="vl-side-navigation-layout-next - twee layouts met eigen content";p.parameters={docs:{story:{inline:!1,iframeHeight:900}}};const u=g(a,({compact:i,contentBlock:e,excludeSelectors:o,childSpacing:l})=>m`
            <vl-side-navigation-layout-next
                ?compact=${i}
                ?content-block=${e}
                heading-root-selector="#story-custom-toc-content"
                exclude-selectors=${o}
                child-spacing=${l}
            >
                <vl-side-navigation-next slot="navigation">
                    <ul>
                        <li>
                            <div class="nav-item-wrapper">
                                <vl-link href="#custom-intro">1. Inleiding</vl-link>
                                <vl-button
                                    ghost
                                    icon="arrow-right-fat"
                                    class="toggle-button"
                                    @click=${y}
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
                                    @click=${y}
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
                <div slot="content">
                    <div id="story-custom-toc-content">
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
                            ${t} ${t}
                        </section>
                        <section>
                            <vl-title type="h3" id="custom-documenten">Welke documenten</vl-title>
                            ${t} ${t}
                        </section>
                        <section>
                            <vl-title type="h2" id="custom-aanvraag">Hoe indienen</vl-title>
                            ${t}
                            <vl-title type="h3" id="custom-online">Online indienen</vl-title>
                            ${t}
                            <vl-title type="h3" id="custom-per-post">Per post indienen</vl-title>
                            ${t}
                        </section>
                        <section>
                            <vl-title type="h2" id="custom-termijnen">Verwachtingsdatum</vl-title>
                            ${t} ${t}
                        </section>
                    </div>
                </div>
            </vl-side-navigation-layout-next>
        `);u.storyName="vl-side-navigation-layout-next - custom table of contents";d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(sideNavigationLayoutArgs, ({
  compact,
  contentBlock,
  navigationTitle,
  excludeSelectors,
  childSpacing
}) => {
  return html\`
            <vl-side-navigation-layout-next
                ?compact=\${compact}
                ?content-block=\${contentBlock}
                heading-root-selector="#story-default-content"
                navigation-title=\${navigationTitle}
                exclude-selectors=\${excludeSelectors}
                child-spacing=\${childSpacing}
            >
                <div slot="content">
                    <div id="story-default-content">
                        <section>
                            <vl-title type="h2" id="default-content-1">Content 1</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </vl-paragraph>
                        </section>
                        <section>
                            <vl-title type="h3" id="default-content-1-1">Content 1 - 1</vl-title>
                            \${loremIpsumParagraph} \${loremIpsumParagraph}
                        </section>
                        <section>
                            <vl-title type="h3" id="default-content-1-2">Content 1 - 2</vl-title>
                            \${loremIpsumParagraph} \${loremIpsumParagraph}
                        </section>
                        <section>
                            <vl-title type="h2" id="default-content-2">Content 2</vl-title>
                            \${loremIpsumParagraph} \${loremIpsumParagraph}
                            <vl-title type="h3" id="content-2-1-heading">Content 2 - 1</vl-title>
                            \${loremIpsumParagraph}
                            <vl-title type="h3" id="content-2-2-heading">Content 2 - 2</vl-title>
                            \${loremIpsumParagraph} \${loremIpsumParagraph}
                        </section>
                        <section>
                            <vl-title type="h2" id="default-content-3">Content 3</vl-title>
                            <vl-paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </vl-paragraph>
                            \${loremIpsumParagraph} \${loremIpsumParagraph}
                        </section>
                    </div>
                </div>
            </vl-side-navigation-layout-next>
        \`;
})`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(sideNavigationLayoutArgs, ({
  compact,
  contentBlock,
  maxDepth,
  excludeSelectors,
  childSpacing
}) => {
  return html\`
            <vl-side-navigation-layout-next
                ?compact=\${compact}
                ?content-block=\${contentBlock}
                max-depth=\${maxDepth}
                heading-root-selector="#steps-content-container"
                max-depth="0"
                exclude-selectors=\${excludeSelectors}
                child-spacing=\${childSpacing}
            >
                <div slot="content" id="steps-content-container">
                    <vl-steps>
                        <vl-step>
                            <span slot="icon">1</span>
                            <span slot="title">
                                <vl-title type="h2" id="vl-steps-vl-step-1">Stap 1: eerste actie</vl-title>
                            </span>
                            <span slot="content">
                                <div>
                                    <vl-paragraph>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus
                                        quam id. Penatibus et magnis dis parturient montes nascetur ridiculus.
                                    </vl-paragraph>
                                    \${loremIpsumParagraph}
                                </div>
                            </span>
                        </vl-step>
                        <vl-step>
                            <span slot="icon">2</span>
                            <span slot="title">
                                <vl-title type="h2" id="vl-steps-vl-step-2">Stap 2: tweede actie</vl-title>
                            </span>
                            <span slot="content">
                                <div>
                                    <vl-title type="h3" underline id="vl-steps-vl-step-2-abstract">Abstract</vl-title>
                                    \${loremIpsumParagraph}
                                    <vl-paragraph>
                                        Penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada nunc vel
                                        risus commodo viverra maecenas accumsan lacus.
                                    </vl-paragraph>
                                    <vl-title type="h3" id="vl-steps-vl-step-2-volledig" underline>Volledig</vl-title>
                                    \${loremIpsumParagraph} \${loremIpsumParagraph}
                                </div>
                            </span>
                        </vl-step>
                        <vl-step>
                            <span slot="icon">3</span>
                            <span slot="title">
                                <vl-title type="h2" id="vl-steps-vl-step-3">Stap 3: derde actie</vl-title>
                            </span>
                            <span slot="content">
                                <div>
                                    <vl-paragraph>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </vl-paragraph>
                                    \${loremIpsumParagraph} \${loremIpsumParagraph} \${loremIpsumParagraph}
                                    \${loremIpsumParagraph} \${loremIpsumParagraph}
                                </div>
                            </span>
                        </vl-step>
                    </vl-steps>
                </div>
            </vl-side-navigation-layout-next>
        \`;
})`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`story(sideNavigationLayoutArgs, ({
  compact,
  contentBlock,
  excludeSelectors,
  childSpacing
}) => {
  return html\`
            <vl-side-navigation-layout-next
                ?compact=\${compact}
                ?content-block=\${contentBlock}
                heading-root-selector="#content-subsidies"
                exclude-selectors=\${excludeSelectors}
                child-spacing=\${childSpacing}
            >
                <div slot="content">
                    <div id="content-subsidies">
                        <section>
                            <vl-title type="h2" id="subsidies-inleiding">Subsidies - Inleiding</vl-title>
                            <vl-paragraph>
                                Op deze pagina vind je informatie over subsidies. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                            </vl-paragraph>
                            \${loremIpsumParagraph}
                        </section>
                        <section>
                            <vl-title type="h3" id="subsidies-voorwaarden">Voorwaarden</vl-title>
                            <vl-paragraph>
                                Om in aanmerking te komen moet je voldoen aan een aantal voorwaarden. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur.
                            </vl-paragraph>
                            \${loremIpsumParagraph}
                        </section>
                        <section>
                            <vl-title type="h3" id="subsidies-bedrag">Bedrag en duur</vl-title>
                            <vl-paragraph>
                                Het subsidiebedrag en de looptijd hangen af van je situatie. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </vl-paragraph>
                            \${loremIpsumParagraph}
                        </section>
                        <section>
                            <vl-title type="h2" id="subsidies-aanvraag">Aanvraag indienen</vl-title>
                            <vl-paragraph>
                                Je kunt je aanvraag online of per post indienen. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </vl-paragraph>
                            \${loremIpsumParagraph}

                            <vl-title type="h3" id="subsidies-online">Online aanvragen</vl-title>
                            <vl-paragraph>
                                Via het e-loket kun je digitaal je aanvraag doen. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </vl-paragraph>
                            \${loremIpsumParagraph}

                            <vl-title type="h3" id="subsidies-post">Per post</vl-title>
                            <vl-paragraph>
                                Stuur het ingevulde formulier naar het vermelde adres. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </vl-paragraph>
                            \${loremIpsumParagraph} \${loremIpsumParagraph}
                        </section>
                        <section>
                            <vl-title type="h2" id="subsidies-afhandeling">Afhandeling en termijnen</vl-title>
                            <vl-paragraph>
                                Binnen welke termijn je een antwoord krijgt en hoe de betaling verloopt. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum.
                            </vl-paragraph>
                            \${loremIpsumParagraph}
                        </section>
                    </div>
                </div>
            </vl-side-navigation-layout-next>
            <hr class="vl-separator-slash vl-padding--medium vl-margin--medium" />
            <vl-side-navigation-layout-next
                ?compact=\${compact}
                ?content-block=\${contentBlock}
                heading-root-selector="#content-diensten"
                exclude-selectors=\${excludeSelectors}
            >
                <div slot="content">
                    <div id="content-diensten">
                        <section>
                            <vl-title type="h2" id="diensten-overzicht">Diensten - Overzicht</vl-title>
                            <vl-paragraph>
                                Hier vind je een overzicht van de diensten die wij aanbieden. Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                            </vl-paragraph>
                        </section>
                        <section>
                            <vl-title type="h3" id="diensten-online">Online diensten</vl-title>
                            <vl-paragraph>
                                Veel zaken kun je via de website afhandelen. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </vl-paragraph>
                            \${loremIpsumParagraph}
                        </section>
                        <section>
                            <vl-title type="h3" id="diensten-loket">Aan het loket</vl-title>
                            <vl-paragraph>
                                Voor bepaalde aanvragen moet je naar het loket komen. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </vl-paragraph>
                            \${loremIpsumParagraph}
                        </section>
                        <section>
                            <vl-title type="h2" id="diensten-afspraak">Afspraak maken</vl-title>
                            <vl-paragraph>
                                Maak een afspraak om wachttijden te vermijden. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </vl-paragraph>
                            \${loremIpsumParagraph}

                            <vl-title type="h3" id="diensten-telefoon">Telefonisch</vl-title>
                            <vl-paragraph>
                                Bel ons om een afspraak in te plannen. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </vl-paragraph>
                            \${loremIpsumParagraph}

                            <vl-title type="h3" id="diensten-online-afspraak">Online reserveren</vl-title>
                            <vl-paragraph>
                                Kies een beschikbaar tijdstip in de online agenda. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </vl-paragraph>
                            \${loremIpsumParagraph}
                        </section>
                        <section>
                            <vl-title type="h2" id="diensten-contact">Contact en openingstijden</vl-title>
                            <vl-paragraph>
                                Waar je ons kunt bereiken en wanneer we open zijn. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </vl-paragraph>
                            \${loremIpsumParagraph}
                        </section>
                    </div>
                </div>
            </vl-side-navigation-layout-next>
        \`;
})`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(sideNavigationLayoutArgs, ({
  compact,
  contentBlock,
  excludeSelectors,
  childSpacing
}) => {
  return html\`
            <vl-side-navigation-layout-next
                ?compact=\${compact}
                ?content-block=\${contentBlock}
                heading-root-selector="#story-custom-toc-content"
                exclude-selectors=\${excludeSelectors}
                child-spacing=\${childSpacing}
            >
                <vl-side-navigation-next slot="navigation">
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
                <div slot="content">
                    <div id="story-custom-toc-content">
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
                            \${loremIpsumParagraph} \${loremIpsumParagraph}
                        </section>
                        <section>
                            <vl-title type="h3" id="custom-documenten">Welke documenten</vl-title>
                            \${loremIpsumParagraph} \${loremIpsumParagraph}
                        </section>
                        <section>
                            <vl-title type="h2" id="custom-aanvraag">Hoe indienen</vl-title>
                            \${loremIpsumParagraph}
                            <vl-title type="h3" id="custom-online">Online indienen</vl-title>
                            \${loremIpsumParagraph}
                            <vl-title type="h3" id="custom-per-post">Per post indienen</vl-title>
                            \${loremIpsumParagraph}
                        </section>
                        <section>
                            <vl-title type="h2" id="custom-termijnen">Verwachtingsdatum</vl-title>
                            \${loremIpsumParagraph} \${loremIpsumParagraph}
                        </section>
                    </div>
                </div>
            </vl-side-navigation-layout-next>
        \`;
})`,...u.parameters?.docs?.source}}};const B=["SideNavigationLayoutDefault","SideNavigationLayoutWithSteps","SideNavigationLayoutTwoLayouts","SideNavigationLayoutWithCustomToc"];export{d as SideNavigationLayoutDefault,p as SideNavigationLayoutTwoLayouts,u as SideNavigationLayoutWithCustomToc,c as SideNavigationLayoutWithSteps,B as __namedExportsOrder,V as default};
