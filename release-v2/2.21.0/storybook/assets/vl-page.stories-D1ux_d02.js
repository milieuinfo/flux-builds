import{Z as s,_ as i,W as f,X as g,u as m,j as e,C as d,b7 as x,s as u,b as j,r as b,R as y}from"./iframe-CsVpDM3d.js";import{V as k}from"./vl-footer.component-DjhW-Bcr.js";import{V as T}from"./vl-header.component-B55BVfZ0.js";import{V as z}from"./vl-page.component-DSwNfqbT.js";import"./preload-helper-PPVm8Dsz.js";const l={...g,center:!1,stretch:!1},S={...f,center:{name:"v-center",description:"Centreert de main content verticaal in de ruimte tussen de header en de footer.<br>Heeft enkel effect als `vl-page` hoger is dan zijn inhoud, zie Hoogte in de documentatie.",table:{type:{summary:i.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:l.center}}},stretch:{name:"v-stretch",description:"Laat de main content de volledige ruimte tussen de header en de footer innemen.<br>Heeft enkel effect als `vl-page` hoger is dan zijn inhoud, zie Hoogte in de documentatie.",table:{type:{summary:i.BOOLEAN},category:s.ATTRIBUTES,defaultValue:{summary:l.stretch}}},headerSlot:{name:"header",description:"De header van de pagina, gewoonlijk een `vl-header-next`. Die rendert zijn header zelf vooraan in de `body`.",control:!1,table:{type:{summary:i.HTML},category:s.SLOTS}},mainSlot:{name:"main",description:"De main content van de pagina. Komt in het `main` landmark terecht.",control:!1,table:{type:{summary:i.HTML},category:s.SLOTS}},footerSlot:{name:"footer",description:"De footer van de pagina, gewoonlijk een `vl-footer-next`. Die rendert zijn footer zelf achteraan in de `body`.",control:!1,table:{type:{summary:i.HTML},category:s.SLOTS}}};function p(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...t.components},{FluxComponentMetaData:h}=n;return h||V("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"page",children:"Page"}),`
`,e.jsx(h,{id:"structures-page"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"vl-page"})," bouwt de basis-layout van een pagina op: een header, de main content en een footer."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlPage } from '@domg-wc/structures';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-page>
    <vl-header-next slot="header" skip-to-content-id="main-content"></vl-header-next>
    <div id="main-content" slot="main"></div>
    <vl-footer-next slot="footer"></vl-footer-next>
</vl-page>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"vl-header-next"})," en ",e.jsx(n.code,{children:"vl-footer-next"})," renderen niet in ",e.jsx(n.code,{children:"vl-page"}),`: ze zetten hun header vooraan en hun footer achteraan
in de `,e.jsx(n.code,{children:"body"}),". De slots ",e.jsx(n.code,{children:"header"})," en ",e.jsx(n.code,{children:"footer"})," zijn voor die componenten enkel hun plaats in de markup."]}),`
`,e.jsx(d,{of:r}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(x,{of:r}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"v-center",children:"v-center"}),`
`,e.jsxs(n.p,{children:["Met ",e.jsx(n.code,{children:"v-center"}),` staat de main content verticaal gecentreerd in de ruimte tussen de header en de footer.
Dat heeft enkel effect als `,e.jsx(n.code,{children:"vl-page"})," hoger is dan zijn inhoud, zie ",e.jsx(n.a,{href:"#hoogte",children:"Hoogte"}),"."]}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(n.h3,{id:"v-stretch",children:"v-stretch"}),`
`,e.jsxs(n.p,{children:["Met ",e.jsx(n.code,{children:"v-stretch"}),` neemt de main content de volledige ruimte tussen de header en de footer in.
Dat heeft enkel effect als `,e.jsx(n.code,{children:"vl-page"})," hoger is dan zijn inhoud, zie ",e.jsx(n.a,{href:"#hoogte",children:"Hoogte"}),"."]}),`
`,e.jsx(d,{of:a}),`
`,e.jsx(n.h2,{id:"hoogte",children:"Hoogte"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"v-center"})," en ",e.jsx(n.code,{children:"v-stretch"})," hebben pas effect als ",e.jsx(n.code,{children:"vl-page"})," hoger is dan zijn inhoud. Laat ",e.jsx(n.code,{children:"vl-page"}),` daarvoor de ruimte
innemen die tussen de header en de footer overblijft: maak van de `,e.jsx(n.code,{children:"body"}),` een flex-kolom met de hoogte van het venster,
en laat elk element tussen de `,e.jsx(n.code,{children:"body"})," en ",e.jsx(n.code,{children:"vl-page"})," meegroeien, bijvoorbeeld de root van de applicatie."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`html {
    height: 100%;
}

body {
    display: flex;
    flex-direction: column;
    min-height: 100%;
}

/* elk element tussen body en vl-page, bijvoorbeeld de root van de applicatie */
app-root {
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
dan even hoog als het venster plus de header en de footer, en scrolt ze altijd.`]})]})}function D(t={}){const{wrapper:n}={...m(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(p,{...t})}):p(t)}function V(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}b([z,y,T,k]);const M={id:"structures-page",title:"Structures/page",tags:["autodocs"],args:l,argTypes:S,parameters:{docs:{page:D,story:{inline:!1,iframeHeight:600}},layout:"fullscreen"}},c=u(l,({center:t,stretch:n})=>j`
        <vl-page ?v-center=${t} ?v-stretch=${n}>
            <vl-header-next
                slot="header"
                identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"
                skip-to-content-id="main-content"
                development
                simple
            ></vl-header-next>
            <section id="main-content" slot="main" class="vl-section vl-section--alt" data-cy="page-content">
                <div class="vl-content-block">
                    <vl-title type="h1" no-space-bottom>vl-page</vl-title>
                </div>
            </section>
            <vl-footer-next
                slot="footer"
                identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b"
                development
            ></vl-footer-next>
        </vl-page>
    `),v=()=>{const t=document.createElement("style");return t.textContent=`
        html {
            height: 100%;
        }

        body.sb-show-main.sb-main-fullscreen {
            display: flex;
            flex-direction: column;
            min-height: 100%;
        }

        #storybook-root,
        #root-inner {
            display: flex;
            flex: 1;
            flex-direction: column;
        }

        vl-page {
            flex: 1;
        }
    `,document.head.append(t),()=>t.remove()},r=c.bind({});r.storyName="vl-page - default";const o=c.bind({});o.storyName="vl-page - v-center";o.args={center:!0};o.beforeEach=v;const a=c.bind({});a.storyName="vl-page - v-stretch";a.args={stretch:!0};a.beforeEach=v;r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(pageArgs, ({
  center,
  stretch
}) => html\`
        <vl-page ?v-center=\${center} ?v-stretch=\${stretch}>
            <vl-header-next
                slot="header"
                identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"
                skip-to-content-id="main-content"
                development
                simple
            ></vl-header-next>
            <section id="main-content" slot="main" class="vl-section vl-section--alt" data-cy="page-content">
                <div class="vl-content-block">
                    <vl-title type="h1" no-space-bottom>vl-page</vl-title>
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
                skip-to-content-id="main-content"
                development
                simple
            ></vl-header-next>
            <section id="main-content" slot="main" class="vl-section vl-section--alt" data-cy="page-content">
                <div class="vl-content-block">
                    <vl-title type="h1" no-space-bottom>vl-page</vl-title>
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
                skip-to-content-id="main-content"
                development
                simple
            ></vl-header-next>
            <section id="main-content" slot="main" class="vl-section vl-section--alt" data-cy="page-content">
                <div class="vl-content-block">
                    <vl-title type="h1" no-space-bottom>vl-page</vl-title>
                </div>
            </section>
            <vl-footer-next
                slot="footer"
                identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b"
                development
            ></vl-footer-next>
        </vl-page>
    \`)`,...a.parameters?.docs?.source}}};const L=["PageDefault","PageVCenter","PageVStretch"];export{r as PageDefault,o as PageVCenter,a as PageVStretch,L as __namedExportsOrder,M as default};
