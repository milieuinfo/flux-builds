import{Z as l,_ as d,W as x,X as u,u as m,j as e,C as c,b4 as j,s as b,b as y,r as k,R as w}from"./iframe-ylVHDfb1.js";import{V as z}from"./vl-footer.component-DygZL_pE.js";import{V as D}from"./vl-header.component-BscuUqhg.js";import{V as S}from"./vl-page.component-b8IK5Ik0.js";import"./preload-helper-PPVm8Dsz.js";const s={...u,center:!1,stretch:!1},T={...x,center:{name:"v-center",description:"Centreert de main content verticaal in de ruimte tussen de header en de footer.<br>Heeft enkel effect als `vl-page` hoger is dan zijn inhoud, zie Hoogte in de documentatie.",table:{type:{summary:d.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:s.center}}},stretch:{name:"v-stretch",description:"Laat de main content de volledige ruimte tussen de header en de footer innemen.<br>Heeft enkel effect als `vl-page` hoger is dan zijn inhoud, zie Hoogte in de documentatie.",table:{type:{summary:d.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:s.stretch}}},headerSlot:{name:"header",description:"De header van de pagina, gewoonlijk een `vl-header-next`. Die rendert zijn header zelf vooraan in de `body`.",control:!1,table:{type:{summary:d.HTML},category:l.SLOTS}},mainSlot:{name:"main",description:"De main content van de pagina. Komt in het `main` landmark terecht.",control:!1,table:{type:{summary:d.HTML},category:l.SLOTS}},footerSlot:{name:"footer",description:"De footer van de pagina, gewoonlijk een `vl-footer-next`. Die rendert zijn footer zelf achteraan in de `body`.",control:!1,table:{type:{summary:d.HTML},category:l.SLOTS}}};function v(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...t.components},{FluxAlert:i,FluxComponentMetaData:p}=n;return i||g("FluxAlert"),p||g("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"page",children:"Page"}),`
`,e.jsx(p,{id:"structures-page"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"vl-page"})," bouwt de basis-layout van een pagina op: een header, de main content en een footer."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlPage } from '@domg-wc/structures';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-page>
    <vl-header-next slot="header" skip-to-content-id="page-title"></vl-header-next>
    <div slot="main">
        <vl-title type="h1" id="page-title">Paginatitel</vl-title>
    </div>
    <vl-footer-next slot="footer"></vl-footer-next>
</vl-page>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"vl-header-next"})," en ",e.jsx(n.code,{children:"vl-footer-next"})," renderen niet in ",e.jsx(n.code,{children:"vl-page"}),`: ze zetten hun header vooraan en hun footer achteraan
in de `,e.jsx(n.code,{children:"body"}),". De slots ",e.jsx(n.code,{children:"header"})," en ",e.jsx(n.code,{children:"footer"})," zijn voor die componenten enkel hun plaats in de markup."]}),`
`,e.jsxs(n.p,{children:["Laat ",e.jsx(n.code,{children:"skip-to-content-id"}),` verwijzen naar de id van de eerste heading van de content, niet naar het element in het slot
`,e.jsx(n.code,{children:"main"}),": een screenreader leest anders de volledige inhoud voor zodra de skip link gebruikt wordt."]}),`
`,e.jsx(c,{of:r}),`
`,e.jsx(i,{type:"info",title:"Uitgewerkte voorbeelden",icon:"info-circle",children:`
  De opbouw van de main content vind je in het patroon
  <a href="/docs/patronen-pagina-opbouw--documentatie">Pagina Opbouw</a>: de
  <a href="/story/patronen-pagina-opbouw--pagina-opbouw-standaard">standaard layout</a>, de
  <a href="/story/patronen-pagina-opbouw--pagina-opbouw-volledige-breedte">volledige breedte</a> en een pagina
  <a href="/story/patronen-pagina-opbouw--pagina-opbouw-met-side-navigation">met side navigation</a>.
`}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(j,{of:r}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"v-center",children:"v-center"}),`
`,e.jsxs(n.p,{children:["Met ",e.jsx(n.code,{children:"v-center"}),` staat de main content verticaal gecentreerd in de ruimte tussen de header en de footer.
Dat heeft enkel effect als `,e.jsx(n.code,{children:"vl-page"})," hoger is dan zijn inhoud, zie ",e.jsx(n.a,{href:"#hoogte",children:"Hoogte"}),"."]}),`
`,e.jsx(c,{of:o}),`
`,e.jsx(n.h3,{id:"v-stretch",children:"v-stretch"}),`
`,e.jsxs(n.p,{children:["Met ",e.jsx(n.code,{children:"v-stretch"}),` neemt de main content de volledige ruimte tussen de header en de footer in.
Dat heeft enkel effect als `,e.jsx(n.code,{children:"vl-page"})," hoger is dan zijn inhoud, zie ",e.jsx(n.a,{href:"#hoogte",children:"Hoogte"}),"."]}),`
`,e.jsx(c,{of:a}),`
`,e.jsx(n.h2,{id:"hoogte",children:"Hoogte"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"v-center"})," en ",e.jsx(n.code,{children:"v-stretch"})," hebben pas effect als ",e.jsx(n.code,{children:"vl-page"})," hoger is dan zijn inhoud. Laat ",e.jsx(n.code,{children:"vl-page"}),` daarvoor de ruimte
innemen die tussen de header en de footer overblijft: maak van de `,e.jsx(n.code,{children:"body"}),` een flex-kolom met de hoogte van het venster,
en laat elk element tussen de `,e.jsx(n.code,{children:"body"})," en ",e.jsx(n.code,{children:"vl-page"})," meegroeien. De selector ",e.jsx(n.code,{children:"body :has(vl-page)"}),` selecteert precies die
elementen, bijvoorbeeld de root van de applicatie.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`html {
    height: 100%;
}

body {
    display: flex;
    flex-direction: column;
    min-height: 100%;
}

/* elk element tussen body en vl-page */
body :has(vl-page) {
    display: flex;
    flex: 1;
    flex-direction: column;
}

vl-page {
    flex: 1;
}
`})}),`
`,e.jsxs(n.p,{children:["De basisstijlen van Flux zetten zelf ",e.jsx(n.code,{children:"min-height: 100%"})," op de ",e.jsx(n.code,{children:"body"}),"; daarom krijgt ",e.jsx(n.code,{children:"html"}),` de hoogte van het venster
en niet de `,e.jsx(n.code,{children:"body"}),". Geef ",e.jsx(n.code,{children:"vl-page"})," geen ",e.jsx(n.code,{children:"min-height: 100vh"}),": met ",e.jsx(n.code,{children:"vl-header-next"})," en ",e.jsx(n.code,{children:"vl-footer-next"}),` wordt de pagina
dan even hoog als het venster plus de header en de footer, en scrolt ze altijd.`]}),`
`,e.jsx(i,{type:"warning",children:`
  <code>:has()</code> kijkt niet door een shadow root. Staat <code>vl-page</code> in de shadow DOM van een component,
  laat dan ook de host van dat component en de elementen tussen de shadow root en <code>vl-page</code> meegroeien.
`}),`
`,e.jsxs(n.p,{children:["Bijvoorbeeld voor een applicatie met ",e.jsx(n.code,{children:"app-root"}),` als host. In de stylesheet van het document vervangt deze regel
`,e.jsx(n.code,{children:"body :has(vl-page)"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* elk element tussen body en de host, en de host zelf */
body :has(app-root),
app-root {
    display: flex;
    flex: 1;
    flex-direction: column;
}
`})}),`
`,e.jsxs(n.p,{children:["In de styles van ",e.jsx(n.code,{children:"app-root"})," zelf, want de stylesheet van het document bereikt de shadow DOM niet:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* elk element tussen de shadow root en vl-page */
.app-layout {
    display: flex;
    flex: 1;
    flex-direction: column;
}

vl-page {
    flex: 1;
}
`})})]})}function V(t={}){const{wrapper:n}={...m(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(v,{...t})}):v(t)}function g(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}k([S,w,D,z]);const H={id:"structures-page",title:"Structures/page",tags:["autodocs"],args:s,argTypes:T,parameters:{docs:{page:V,story:{inline:!1,iframeHeight:600}},layout:"fullscreen"}},h=b(s,({center:t,stretch:n})=>y`
        <vl-page ?v-center=${t} ?v-stretch=${n}>
            <vl-header-next
                slot="header"
                identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"
                skip-to-content-id="page-title"
                development
                simple
            ></vl-header-next>
            <section slot="main" class="vl-section vl-section--alt" data-cy="page-content">
                <div class="vl-content-block">
                    <vl-title type="h1" id="page-title" no-space-bottom>vl-page</vl-title>
                </div>
            </section>
            <vl-footer-next
                slot="footer"
                identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b"
                development
            ></vl-footer-next>
        </vl-page>
    `),f=()=>{const t=document.createElement("style");return t.textContent=`
        html {
            height: 100%;
        }

        body.sb-show-main.sb-main-fullscreen {
            display: flex;
            flex-direction: column;
            min-height: 100%;
        }

        body :has(vl-page) {
            display: flex;
            flex: 1;
            flex-direction: column;
        }

        vl-page {
            flex: 1;
        }
    `,document.head.append(t),()=>t.remove()},r=h.bind({});r.storyName="vl-page - default";const o=h.bind({});o.storyName="vl-page - v-center";o.args={center:!0};o.beforeEach=f;const a=h.bind({});a.storyName="vl-page - v-stretch";a.args={stretch:!0};a.beforeEach=f;r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(pageArgs, ({
  center,
  stretch
}) => html\`
        <vl-page ?v-center=\${center} ?v-stretch=\${stretch}>
            <vl-header-next
                slot="header"
                identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"
                skip-to-content-id="page-title"
                development
                simple
            ></vl-header-next>
            <section slot="main" class="vl-section vl-section--alt" data-cy="page-content">
                <div class="vl-content-block">
                    <vl-title type="h1" id="page-title" no-space-bottom>vl-page</vl-title>
                </div>
            </section>
            <vl-footer-next
                slot="footer"
                identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b"
                development
            ></vl-footer-next>
        </vl-page>
    \`)`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(pageArgs, ({
  center,
  stretch
}) => html\`
        <vl-page ?v-center=\${center} ?v-stretch=\${stretch}>
            <vl-header-next
                slot="header"
                identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"
                skip-to-content-id="page-title"
                development
                simple
            ></vl-header-next>
            <section slot="main" class="vl-section vl-section--alt" data-cy="page-content">
                <div class="vl-content-block">
                    <vl-title type="h1" id="page-title" no-space-bottom>vl-page</vl-title>
                </div>
            </section>
            <vl-footer-next
                slot="footer"
                identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b"
                development
            ></vl-footer-next>
        </vl-page>
    \`)`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(pageArgs, ({
  center,
  stretch
}) => html\`
        <vl-page ?v-center=\${center} ?v-stretch=\${stretch}>
            <vl-header-next
                slot="header"
                identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"
                skip-to-content-id="page-title"
                development
                simple
            ></vl-header-next>
            <section slot="main" class="vl-section vl-section--alt" data-cy="page-content">
                <div class="vl-content-block">
                    <vl-title type="h1" id="page-title" no-space-bottom>vl-page</vl-title>
                </div>
            </section>
            <vl-footer-next
                slot="footer"
                identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b"
                development
            ></vl-footer-next>
        </vl-page>
    \`)`,...a.parameters?.docs?.source}}};const L=["PageDefault","PageVCenter","PageVStretch"];export{r as PageDefault,o as PageVCenter,a as PageVStretch,L as __namedExportsOrder,H as default};
