import{u as o,j as e,M as c,C as s,x as d}from"./iframe-COmpMQdF.js";import"./preload-helper-D9Z9MdNV.js";function l(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...i.components},{FluxComponentMetaData:r}=n;return r||h("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Styles/Layout (afnemers)/accessibility"}),`
`,e.jsx(n.h1,{id:"accessibility-styles",children:"Accessibility styles"}),`
`,e.jsx(r,{id:"styles-layout-accessibility"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsx(n.p,{children:`Onder accessibility styles groeperen we stijlen die de layout beïnvloeden om de toegankelijkheid van een applicatie
te verbeteren.`}),`
`,e.jsx(n.h2,{id:"visually-hidden",children:"Visually hidden"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".vl-visually-hidden"}),` verbergt content visueel, maar houdt ze toegankelijk voor screenreaders.
Ze wordt gebruikt wanneer informatie niet zichtbaar hoeft te zijn voor ziende gebruikers, maar wel nog betekenisvol
is voor assistieve technologie.`]}),`
`,e.jsx(n.p,{children:"Het helpt extra context of labels beschikbaar te maken voor screenreader-gebruikers en wordt typisch toegepast op:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Beschrijvende teksten die visueel overbodig zijn"}),`
`,e.jsx(n.li,{children:"Formulierlabels of instructies die enkel auditief nodig zijn"}),`
`,e.jsx(n.li,{children:"Skip-links of navigatiehulpmiddelen"}),`
`]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"skip-link",children:"Skip link"}),`
`,e.jsxs(n.p,{children:["Je kan ",e.jsx(n.code,{children:".vl-skip-link"}),` toevoegen aan een link (native a-element) om er een skip-link van te maken. De skip-link moet een
interne anchor-link zijn en dus als href de ID meekrijgen van de eerste heading van de content of van de content zelf.`]}),`
`,e.jsx(n.p,{children:"Je kan de skip-link op twee manieren activeren:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Start een screenreader"}),", bv VoiceOver (command+F5), en navigeer naar het begin van de pagina."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Gebruik Tab"})," om naar het begin van de pagina te navigeren. Zodra de skip-link focus krijgt zal hij verschijnen."]}),`
`]}),`
`,e.jsx(n.p,{children:"Klikken op de skip-link brengt je meteen naar de inhoud. De header wordt niet voorgelezen."}),`
`,e.jsxs(n.p,{children:["Meer info vind je in de ",e.jsx(n.a,{href:"/docs/richtlijnen-toegankelijkheid-aanpak-2-bedienbaar-2-4-navigeerbaar--documentatie#blokken-omzeilen",children:'documentatie over toegankelijke navigatie: "Blokken omzeilen"'}),"."]}),`
`,e.jsx(s,{of:t})]})}function p(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}function h(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const g={id:"styles-layout-accessibility",title:"Styles/Layout (afnemers)/accessibility",tags:["autodocs"],parameters:{docs:{page:p}}},a=()=>d`
    <div>Deze content is zichtbaar voor de gebruiker.
        Maar deze content ...<span class="vl-visually-hidden">... is enkel toegankelijk voor screenreaders.</span>
    </div>
`;a.storyName="vl-visually-hidden - default";const t=()=>d`
    <a href="#main-content" class="vl-skip-link">Ga meteen naar de inhoud</a>
    <header>
        <vl-title type="h1">[Applicatie titel]</vl-title>
        <nav>[Applicatie navigatie]</nav>
    </header>
    <hr class="vl-separator-slash" />
    <main>
        <vl-title type="h2" id="main-content">[Applicatie inhoud]</vl-title>
        <vl-typography>
            <p>Je kan de <strong>skip-link</strong> op twee manieren activeren:</p>
            <ul>
                <li>
                    <strong>Start een screenreader</strong>, bv VoiceOver (command+F5), en navigeer naar het begin van
                    de pagina.
                </li>
                <li>
                    <strong>Gebruik Tab</strong> om naar het begin van de pagina te navigeren. Zodra de skip-link focus
                    krijgt zal hij verschijnen.
                </li>
            </ul>
            <p>Klikken op de skip-link brengt je meteen naar de inhoud. De header wordt niet voorgelezen.</p>
        </vl-typography>
    </main>
`;t.storyName="vl-skip-link - default";a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => html\`
    <div>Deze content is zichtbaar voor de gebruiker.
        Maar deze content ...<span class="vl-visually-hidden">... is enkel toegankelijk voor screenreaders.</span>
    </div>
\``,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => html\`
    <a href="#main-content" class="vl-skip-link">Ga meteen naar de inhoud</a>
    <header>
        <vl-title type="h1">[Applicatie titel]</vl-title>
        <nav>[Applicatie navigatie]</nav>
    </header>
    <hr class="vl-separator-slash" />
    <main>
        <vl-title type="h2" id="main-content">[Applicatie inhoud]</vl-title>
        <vl-typography>
            <p>Je kan de <strong>skip-link</strong> op twee manieren activeren:</p>
            <ul>
                <li>
                    <strong>Start een screenreader</strong>, bv VoiceOver (command+F5), en navigeer naar het begin van
                    de pagina.
                </li>
                <li>
                    <strong>Gebruik Tab</strong> om naar het begin van de pagina te navigeren. Zodra de skip-link focus
                    krijgt zal hij verschijnen.
                </li>
            </ul>
            <p>Klikken op de skip-link brengt je meteen naar de inhoud. De header wordt niet voorgelezen.</p>
        </vl-typography>
    </main>
\``,...t.parameters?.docs?.source}}};const u=["VisuallyHiddenDefault","SkipLinkDefault"];export{t as SkipLinkDefault,a as VisuallyHiddenDefault,u as __namedExportsOrder,g as default};
