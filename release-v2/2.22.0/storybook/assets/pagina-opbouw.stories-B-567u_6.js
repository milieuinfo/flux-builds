import{s as l,b as i,r as p,o as c,R as v,aX as m}from"./iframe-ylVHDfb1.js";import"./vl-accordion.component-Da6SByGD.js";import"./vl-info-tile.component-D9Hz2vrm.js";import"./vl-modal.component-GiDb0Bob.js";import"./vl-side-navigation.component-Do9gmewd.js";import{V as g}from"./vl-side-navigation-layout.component-nRGd575H.js";import"./vl-tabs.component-BfgJv0ll.js";import{V as u}from"./vl-footer.component-DygZL_pE.js";import{V as h}from"./vl-header.component-BscuUqhg.js";import"./vl-dashboard.component-Ttvi9lNX.js";import"./vl-dashboard-header.component-B0zuaYxQ.js";import"./vl-nav-link.component-HqPoI3Jx.js";import"./vl-nav-sub.component-R-nFNQB3.js";import{V as b}from"./vl-page.component-b8IK5Ik0.js";import{o as n}from"./unsafe-html--mv6C7rg.js";const r=o=>`
<vl-page>
    <vl-header-next
        slot="header"
        identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"
        skip-to-content-id="title"
        development
        simple
    ></vl-header-next>
    <div slot="main">
        ${o.trim()}
    </div>
    <vl-footer-next
        slot="footer"
        identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b"
        development
    ></vl-footer-next>
</vl-page>
`,d=(o=!1)=>{const s=o?"vl-content-block vl-content-block--full-width":"vl-content-block";return`
        <vl-functional-header
            title-label="Naam applicatie"
            link="#"
            sub-title="Paginatitel"
            back="Startpagina"
            back-link="#"
            skip-to-content-id="page-title"${o?`
            full-width`:""}
        ></vl-functional-header>
        <section class="vl-section">
            <div class="${s}">
                <div class="vl-stacked vl-stacked-medium">
                    <vl-title type="h1" id="page-title" no-space-bottom>Paginatitel</vl-title>
                    <vl-paragraph>Korte inleiding op de pagina.</vl-paragraph>
                    <vl-paragraph>
                        Elke sectie is een .vl-section met daarin een .vl-content-block. De verticale ruimte tussen
                        elementen komt van .vl-stacked op de container.
                    </vl-paragraph>
                </div>
            </div>
        </section>
        <section class="vl-section">
            <div class="${s}">
                <div class="vl-stacked vl-stacked-medium">
                    <vl-title type="h2" no-space-bottom>Tweede sectie</vl-title>
                    <vl-paragraph>Korte inleiding op de sectie.</vl-paragraph>
                    <vl-paragraph>
                        Elke sectie is een .vl-section met daarin een .vl-content-block. De verticale ruimte tussen
                        elementen komt van .vl-stacked op de container.
                    </vl-paragraph>
                </div>
            </div>
        </section>
    `},k=r(d()),f=r(d(!0)),y=r(`
        <vl-functional-header
            title-label="Naam applicatie"
            link="#"
            sub-title="Paginatitel"
            back="Startpagina"
            back-link="#"
            skip-to-content-id="page-title"
        ></vl-functional-header>
        <section class="vl-section">
            <div class="vl-content-block">
                <vl-side-navigation-layout-next heading-root-selector="#page-content" min-level="2">
                    <div slot="content" id="page-content" class="vl-stacked vl-stacked-medium">
                        <div class="vl-stacked vl-stacked-small">
                            <vl-title type="h1" id="page-title" no-space-bottom>Paginatitel</vl-title>
                            <vl-paragraph>Korte inleiding op de pagina.</vl-paragraph>
                            <vl-paragraph>
                                De side navigation wordt opgebouwd uit de headings met een id in de content.
                            </vl-paragraph>
                        </div>
                        <div class="vl-stacked vl-stacked-small">
                            <vl-title type="h2" id="eerste-onderdeel" no-space-bottom>Eerste onderdeel</vl-title>
                            <vl-paragraph>Inhoud van het eerste onderdeel.</vl-paragraph>
                        </div>
                        <div class="vl-stacked vl-stacked-small">
                            <vl-title type="h2" id="tweede-onderdeel" no-space-bottom>Tweede onderdeel</vl-title>
                            <vl-paragraph>Inhoud van het tweede onderdeel.</vl-paragraph>
                        </div>
                        <div class="vl-stacked vl-stacked-small">
                            <vl-title type="h2" id="derde-onderdeel" no-space-bottom>Derde onderdeel</vl-title>
                            <vl-paragraph>Inhoud van het derde onderdeel.</vl-paragraph>
                        </div>
                    </div>
                </vl-side-navigation-layout-next>
            </div>
        </section>
`);p([b,h,u,c,v,m,g]);const w={title:"Patronen/Pagina Opbouw",parameters:{docs:{story:{inline:!1,iframeHeight:600}},layout:"fullscreen"}},e=l({},()=>i`${n(k)}`);e.storyName="pagina opbouw - standaard layout";const t=l({},()=>i`${n(f)}`);t.storyName="pagina opbouw - volledige breedte";const a=l({},()=>i`${n(y)}`);a.storyName="pagina opbouw - met side navigation";e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"story({}, () => html`${unsafeHTML(pageLayoutDefaultHtml)}`)",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"story({}, () => html`${unsafeHTML(pageLayoutFullWidthHtml)}`)",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"story({}, () => html`${unsafeHTML(pageLayoutSideNavigationHtml)}`)",...a.parameters?.docs?.source}}};const P=["PaginaOpbouwStandaard","PaginaOpbouwVolledigeBreedte","PaginaOpbouwMetSideNavigation"],B=Object.freeze(Object.defineProperty({__proto__:null,PaginaOpbouwMetSideNavigation:a,PaginaOpbouwStandaard:e,PaginaOpbouwVolledigeBreedte:t,__namedExportsOrder:P,default:w},Symbol.toStringTag,{value:"Module"}));export{e as P,k as a,t as b,f as c,a as d,y as e,B as p};
