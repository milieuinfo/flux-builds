import{b as l,r as p,n as c,P as v,aY as m}from"./iframe-Cv28D2NX.js";import"./vl-accordion.component-MApwQbFM.js";import"./vl-info-tile.component-CXnTjId5.js";import"./vl-modal.component-Di4jiGh5.js";import"./vl-side-navigation.component-Bh_rK5ph.js";import{V as g}from"./vl-side-navigation-layout.component--szSopxK.js";import"./vl-tabs.component-DK-cBMq7.js";import{V as u}from"./vl-footer.component-DGF6e9dv.js";import{V as h}from"./vl-header.component-DA4f0IBZ.js";import"./vl-dashboard.component-BqwbFm2H.js";import"./vl-dashboard-header.component-DA3ig2qd.js";import"./vl-nav-link.component-Du0OL3Ck.js";import"./vl-nav-sub.component-Bf6IxpIc.js";import{V as b}from"./vl-page.component-D3Ny8MRz.js";import{s as i}from"./stories.helper-DYHi_5m6.js";import{o as n}from"./unsafe-html-7Tp0Sqh9.js";const r=o=>`
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
            sub-title="Paginatitel"
            back="Startpagina"
            back-link="#"
            skip-to-content-id="page-title"${o?`
            full-width`:""}
        >
            <a slot="heading" href="/">Naam applicatie</a>
        </vl-functional-header>
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
    `},f=r(d()),k=r(d(!0)),y=r(`
        <vl-functional-header
            sub-title="Paginatitel"
            back="Startpagina"
            back-link="#"
            skip-to-content-id="page-title"
        >
            <a slot="heading" href="/">Naam applicatie</a>
        </vl-functional-header>
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
`);p([b,h,u,c,v,m,g]);const w={title:"Patronen/Pagina Opbouw",parameters:{docs:{story:{inline:!1,iframeHeight:600}},layout:"fullscreen"}},e=i({},()=>l`${n(f)}`);e.storyName="pagina opbouw - standaard layout";const a=i({},()=>l`${n(k)}`);a.storyName="pagina opbouw - volledige breedte";const t=i({},()=>l`${n(y)}`);t.storyName="pagina opbouw - met side navigation";const P=["PaginaOpbouwStandaard","PaginaOpbouwVolledigeBreedte","PaginaOpbouwMetSideNavigation"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"story({}, () => html`${unsafeHTML(pageLayoutDefaultHtml)}`)",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"story({}, () => html`${unsafeHTML(pageLayoutFullWidthHtml)}`)",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"story({}, () => html`${unsafeHTML(pageLayoutSideNavigationHtml)}`)",...t.parameters?.docs?.source}}};const I=Object.freeze(Object.defineProperty({__proto__:null,PaginaOpbouwMetSideNavigation:t,PaginaOpbouwStandaard:e,PaginaOpbouwVolledigeBreedte:a,__namedExportsOrder:P,default:w},Symbol.toStringTag,{value:"Module"}));export{e as P,f as a,a as b,k as c,t as d,y as e,I as p};
