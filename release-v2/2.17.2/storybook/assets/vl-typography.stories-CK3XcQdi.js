import{Z as g,W as x,X as f,u as b,j as e,C as m,b8 as j,c8 as k,x as o,c9 as q}from"./iframe-BAEsER5t.js";import"./preload-helper-D9Z9MdNV.js";const L={...f,parameters:'{"key1": "tempus" , "key2": "ipsum" }',updateUrlHash:!1},w={...x,parameters:{name:"parameters",description:"De key/value parameters die verwerkt en getoond zullen worden in het content element.",control:{disable:!0},table:{type:{summary:"string"},category:g.ATTRIBUTES}},updateUrlHash:{name:"update-url-hash",description:"Werkt bij een klik op een same-page anchor de URL-hash bij via history.pushState. Default wordt de hash niet aangepast (kan botsen met bv. een SPA-router).",control:{disable:!0},table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:g.ATTRIBUTES}}};function y(a){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...b(),...a.components},{FluxAlert:s,FluxComponentMetaData:h}=t;return s||v("FluxAlert"),h||v("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"typography",children:"Typography"}),`
`,e.jsx(h,{id:"components-block-typography"}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(t.p,{children:["Gebruik de ",e.jsx(t.code,{children:"typography"}),` component om de standaard elementen binnen een container visueel te stylen. De typography
component wordt voornamelijk gebruikt om de inhoud van een wysiwyg-editor te stylen zonder extra klassen toe te
voegen voor elk element.`]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlTypographyComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-typography></vl-typography>
`})}),`
`,e.jsx(t.h2,{id:"default",children:"Default"}),`
`,e.jsx(m,{of:r}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(j,{of:r}),`
`,e.jsx(t.h2,{id:"anchor-navigatie-same-page-links",children:"Anchor-navigatie (same-page links)"}),`
`,e.jsxs(t.p,{children:["Same-page anchor-links (bv. ",e.jsx(t.code,{children:'<a href="#mijn-sectie">'}),") werken binnen ",e.jsx(t.code,{children:"vl-typography"}),`. Omdat de component zijn
content naar een shadow root kopieert, vindt de native fragment-navigatie het doel-`,e.jsx(t.code,{children:"id"}),` niet meer; daarom neemt
`,e.jsx(t.code,{children:"vl-typography"}),` deze navigatie zelf over. Je hoeft hiervoor niets te configureren - het volstaat dat het doel een
`,e.jsx(t.code,{children:"id"})," heeft. Een klik op zo'n link:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["scrollt naar het element met het overeenkomstige ",e.jsx(t.code,{children:"id"}),` - ook als dat doel elders op de pagina staat (in de light
DOM of in een andere shadow root)`]}),`
`,e.jsx(t.li,{children:"verplaatst de focus mee naar het doel (WCAG 2.4.3 Focus Order)"}),`
`]}),`
`,e.jsx(t.h3,{id:"url-hash-bijwerken-opt-in",children:"URL-hash bijwerken (opt-in)"}),`
`,e.jsxs(t.p,{children:["Standaard wordt de URL-hash ",e.jsx(t.strong,{children:"niet"}),` aangepast bij een anchor-klik. Dat is bewust: automatisch een
`,e.jsx(t.code,{children:"history.pushState"}),` doen kan botsen met bv. een SPA-router. Wil je dat een klik de URL-hash wél bijwerkt
(deelbaar/bookmarkbaar, zonder dubbele history-entry), zet dan het `,e.jsx(t.code,{children:"update-url-hash"}),"-attribuut:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-typography update-url-hash>
    <p><a href="#mijn-sectie">Ga naar de sectie</a></p>
    ...
</vl-typography>
`})}),`
`,e.jsx(m,{of:n}),`
`,e.jsx(t.h3,{id:"navigeren-vanuit-een-element-buiten-vl-typography",children:"Navigeren vanuit een element buiten vl-typography"}),`
`,e.jsxs(t.p,{children:["Wil je vanuit een willekeurig element (bv. een knop) buiten de component naar een doel binnen ",e.jsx(t.code,{children:"vl-typography"}),`
navigeren - dwars doorheen shadow DOM-grenzen - gebruik dan de `,e.jsx(t.code,{children:"dispatchNavigateToAnchor"}),`-utility uit
`,e.jsx(t.code,{children:"@domg-wc/common"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { dispatchNavigateToAnchor } from '@domg-wc/common';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<button @click=\${(event) => dispatchNavigateToAnchor(event.currentTarget, '#mijn-sectie')}>
    Ga naar de sectie
</button>
`})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"dispatchNavigateToAnchor(source, hash)"})," stuurt het ",e.jsx(t.code,{children:"vl-navigate-to-anchor"}),`-event vanaf het bron-element;
de centrale listener zoekt het doel pagina-breed op (door alle open shadow roots en de light DOM) en navigeert
ernaartoe. De functie geeft `,e.jsx(t.code,{children:"true"}),` terug wanneer er effectief een doel gevonden en aangedaan werd, zodat je de
native navigatie enkel hoeft te onderdrukken wanneer er genavigeerd is.`]}),`
`,e.jsx(m,{of:i}),`
`,e.jsxs(t.h3,{id:"utilities-in-domg-wccommon",children:["Utilities in ",e.jsx(t.code,{children:"@domg-wc/common"})]}),`
`,e.jsxs(t.p,{children:["De onderliggende logica is herbruikbaar en niet aan ",e.jsx(t.code,{children:"vl-typography"}),` gebonden. Wie zelf een component bouwt die
content in een shadow root rendert, kan dezelfde same-page navigatie activeren met:`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"enableAnchorNavigation()"})}),` - Installeert (idempotent, pagina-breed en voor de paginalevensduur) de centrale
`,e.jsx(t.code,{children:"vl-navigate-to-anchor"}),"- en ",e.jsx(t.code,{children:"hashchange"}),`-listeners plus een initiële deep-link-check. Meerdere aanroepen
installeren slechts één keer.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"handleAnchorClick(event, { updateHash })"})}),` - Herbruikbare click-guard die een echte klik op een same-page
`,e.jsx(t.code,{children:'<a href="#...">'}),` vertaalt naar het navigatie-event. Hang hem aan een shadow root (voor één component) óf aan
`,e.jsx(t.code,{children:"document"}),` (voor álle anchors op de pagina). Modifier-/middenklikken en links naar een ander pad blijven
ongemoeid. `,e.jsx(t.code,{children:"updateHash"})," is opt-in (default ",e.jsx(t.code,{children:"false"}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"dispatchNavigateToAnchor(source, hash, { updateHash })"})}),` - Laat eender welke link/component (ook diep in
shadow DOM) naar een anchor navigeren via het composed custom event. Geeft `,e.jsx(t.code,{children:"true"}),` terug bij een treffer.
`,e.jsx(t.code,{children:"updateHash"})," is default ",e.jsx(t.code,{children:"false"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"navigateToAnchor(hash, { updateHash })"})}),` - Lager niveau: zoekt het doel pagina-breed op, scrollt ernaartoe en
verplaatst de focus. Werkt de URL-hash enkel bij als `,e.jsx(t.code,{children:"updateHash"})," ",e.jsx(t.code,{children:"true"})," is (default ",e.jsx(t.code,{children:"false"}),")."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"vl-typography"})," gebruikt dit zelf door ",e.jsx(t.code,{children:"handleAnchorClick"})," aan zijn shadow root te hangen en ",e.jsx(t.code,{children:"enableAnchorNavigation()"}),`
te activeren - er zit geen navigatielogica meer in de component zelf.`]}),`
`,e.jsx(t.h2,{id:"gekende-beperkingen",children:"Gekende beperkingen"}),`
`,e.jsx(s,{type:"warning",children:`
De vl-typography component kan niet goed om met interactieve elementen zoals knoppen of formulieren. Het is
aangeraden om dit component enkel te gebruiken voor statische content.
`}),`
`,e.jsxs(t.p,{children:["We raden dus aan om interactieve componenten buiten ",e.jsx(t.code,{children:"vl-typography"}),"-tags te definiëren en de ",e.jsx(t.code,{children:"vl-typography"}),` enkel
te gebruiken om statische native html te stylen.`]}),`
`,e.jsxs(t.p,{children:["Als je dan toch een interactief element in een ",e.jsx(t.code,{children:"vl-typography"}),`-tag wil gebruiken en de events van dat element wil
afhandelen, kan je dit doen door een event listener toe te voegen aan de `,e.jsx(t.code,{children:"vl-typography"}),"-tag."]}),`
`,e.jsx(t.p,{children:"In Lit kan dit bijvoorbeeld als volgt:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-typography @vl-click=\${this.handleButtonClick}>
   <vl-button>Indienen</vl-button>
</vl-typography>
`})}),`
`,e.jsx(k,{title:"Varianten",includePrimary:!1}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/typography",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Typography"})})]})}function D(a={}){const{wrapper:t}={...b(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(y,{...a})}):y(a)}function v(a,t){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const A={id:"components-block-typography",title:"Components - Block/typography",tags:["autodocs"],args:L,argTypes:w,parameters:{docs:{page:D},controls:{hideNoControlsWarning:!0}}},r=()=>o` <vl-typography data-cy="typography">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>Lorem dolor sit amet, consectetur adipisicing elit. Deleniti, in.</p>
</vl-typography>`;r.storyName="vl-typography - default";const n=()=>o` <vl-typography update-url-hash data-cy="typography">
    <p><a data-cy="anchor-link" href="#doel">Ga naar het doel</a></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
    <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    <h2 data-cy="anchor-target" id="doel">Doel-sectie</h2>
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
    <div style="height: 500px"></div>
</vl-typography>`;n.storyName="vl-typography - anchors";n.tags=["!autodocs"];n.parameters={docs:{story:{inline:!1,height:"450px"}}};const i=()=>o`
    <p>
        Een gewone knop <strong>buiten</strong> vl-typography stuurt het <code>vl-navigate-to-anchor</code> event en
        navigeert zo dwars doorheen shadow DOM-grenzen naar het doel binnen de component.
    </p>
    <button
        data-cy="external-link"
        @click=${a=>q(a.currentTarget,"#extern-doel")}
    >
        Ga naar het doel
    </button>
    <div style="height: 1000px"></div>
    <vl-typography data-cy="typography">
        <h2 data-cy="anchor-target" id="extern-doel">Doel-sectie (in shadow DOM)</h2>
        <p>Dit doel zit in de shadow root van vl-typography, maar is toch bereikbaar vanuit de externe knop.</p>
    </vl-typography>
`;i.storyName="vl-typography - anchors (externe link)";i.tags=["!autodocs"];i.parameters={docs:{story:{inline:!1,height:"450px"}}};const d=()=>o` <vl-typography data-cy="typography">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
</vl-typography>`;d.storyName="vl-typography - titles";const p=()=>o` <vl-typography data-cy="typography">
    <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        <li>
            Sublist
            <ul>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum.</li>
            </ul>
        </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, neque.</li>
    </ul>
    <ul>
        <li>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
        </li>
    </ul>

    <ol>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur.</li>
        <li>
            Sublist
            <ol>
                <li>Lorem dolor sit.</li>
                <li>Lorem ipsum.</li>
            </ol>
        </li>
        <li>Lorem ipsum.</li>
    </ol>

    <ul>
        <li>
            Ordered list inside unordered list
            <ol>
                <li>Lorem dolor sit.</li>
                <li>
                    Ordered list inside ordered list
                    <ol>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ol>
                </li>
            </ol>
        </li>
    </ul>
</vl-typography>`;p.storyName="vl-typography - lists";const u=()=>o` <vl-typography data-cy="typography">
    <p><strong>strong-tag</strong></p>
    <p><b>b-tag</b></p>
    <p><em>em-tag</em></p>
    <p><i>i-tag</i></p>
    <p><s>s-tag</s></p>
    <p>
        <mark>mark-tag</mark>
    </p>
    <p><code>code-tag</code></p>
    <p></p>
    <pre>pre-tag</pre>
    <p></p>
    <p></p>
    <hr />
    <p></p>
    <p></p>
    <blockquote>Lorem ipsum dolor sit amet.</blockquote>
    <p></p>
</vl-typography>`;u.storyName="vl-typography - markup";const c=()=>o` <vl-typography data-cy="typography">
    <table>
        <caption>
            table title
        </caption>
        <thead>
            <tr>
                <th>head 1</th>
                <th>head 2</th>
                <th>head 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>item 1</td>
                <td>item 2</td>
                <td>item 3</td>
            </tr>
            <tr>
                <td>item 1</td>
                <td>item 2</td>
                <td>item 3</td>
            </tr>
            <tr>
                <td>item 1</td>
                <td>item 2</td>
                <td>item 3</td>
            </tr>
        </tbody>
    </table>
</vl-typography>`;c.storyName="vl-typography - table";const l=({parameters:a,key1:t,key2:s})=>o` <vl-typography parameters=${a} data-cy="typography">
        <p>
            Lorem <b>${t}</b> dolor sit amet, consectetur adipiscing elit. Duis iaculis molestie feugiat. Lorem
            <b>${s}</b> eros, consequat et venenatis ac, scelerisque feugiat nunc. Nam molestie tincidunt lectus, nec
            volutpat ante egestas at. Curabitur quis odio metus. Morbi at purus ac purus convallis <b>${t}</b> at eu
            est. Nunc id ligula quis justo semper ullamcorper. Donec orci nisi, <b>${t}</b> varius massa ut,
            vulputate imperdiet nibh. Maecenas <b>${t}</b> lectus quis turpis cursus, ac vehicula ligula fermentum.
        </p>
        <p>
            Praesent consequat diam nec semper congue. <b>${s}</b> tempor ut erat nec aliquam. Quisque ullamcorper
            sapien magna, sit amet porta <b>${s}</b> pulvinar aliquam. Sed eleifend fringilla augue in vehicula. Sed
            leo sem, imperdiet non ornare maximus, bibendum facilisis massa. Nunc condimentum leo mi, quis porta ante
            mattis ut. Quisque eu enim vel metus consequat iaculis. Donec malesuada odio quis quam vulputate vestibulum.
        </p>
    </vl-typography>`;l.storyName="vl-typography - parameters";l.args={key1:"${parameter.key1}",key2:"${parameter.key1}"};l.argTypes={parameters:{control:{disable:!1}},key1:{name:"key1 (for demo purposes)"},key2:{name:"key1 (for demo purposes)"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => html\` <vl-typography data-cy="typography">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>Lorem dolor sit amet, consectetur adipisicing elit. Deleniti, in.</p>
</vl-typography>\``,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => html\` <vl-typography update-url-hash data-cy="typography">
    <p><a data-cy="anchor-link" href="#doel">Ga naar het doel</a></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
    <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    <h2 data-cy="anchor-target" id="doel">Doel-sectie</h2>
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
    <div style="height: 500px"></div>
</vl-typography>\``,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => html\`
    <p>
        Een gewone knop <strong>buiten</strong> vl-typography stuurt het <code>vl-navigate-to-anchor</code> event en
        navigeert zo dwars doorheen shadow DOM-grenzen naar het doel binnen de component.
    </p>
    <button
        data-cy="external-link"
        @click=\${(event: Event) => dispatchNavigateToAnchor(event.currentTarget as EventTarget, '#extern-doel')}
    >
        Ga naar het doel
    </button>
    <div style="height: 1000px"></div>
    <vl-typography data-cy="typography">
        <h2 data-cy="anchor-target" id="extern-doel">Doel-sectie (in shadow DOM)</h2>
        <p>Dit doel zit in de shadow root van vl-typography, maar is toch bereikbaar vanuit de externe knop.</p>
    </vl-typography>
\``,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => html\` <vl-typography data-cy="typography">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
</vl-typography>\``,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => html\` <vl-typography data-cy="typography">
    <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        <li>
            Sublist
            <ul>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum.</li>
            </ul>
        </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, neque.</li>
    </ul>
    <ul>
        <li>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
        </li>
    </ul>

    <ol>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur.</li>
        <li>
            Sublist
            <ol>
                <li>Lorem dolor sit.</li>
                <li>Lorem ipsum.</li>
            </ol>
        </li>
        <li>Lorem ipsum.</li>
    </ol>

    <ul>
        <li>
            Ordered list inside unordered list
            <ol>
                <li>Lorem dolor sit.</li>
                <li>
                    Ordered list inside ordered list
                    <ol>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ol>
                </li>
            </ol>
        </li>
    </ul>
</vl-typography>\``,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => html\` <vl-typography data-cy="typography">
    <p><strong>strong-tag</strong></p>
    <p><b>b-tag</b></p>
    <p><em>em-tag</em></p>
    <p><i>i-tag</i></p>
    <p><s>s-tag</s></p>
    <p>
        <mark>mark-tag</mark>
    </p>
    <p><code>code-tag</code></p>
    <p></p>
    <pre>pre-tag</pre>
    <p></p>
    <p></p>
    <hr />
    <p></p>
    <p></p>
    <blockquote>Lorem ipsum dolor sit amet.</blockquote>
    <p></p>
</vl-typography>\``,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => html\` <vl-typography data-cy="typography">
    <table>
        <caption>
            table title
        </caption>
        <thead>
            <tr>
                <th>head 1</th>
                <th>head 2</th>
                <th>head 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>item 1</td>
                <td>item 2</td>
                <td>item 3</td>
            </tr>
            <tr>
                <td>item 1</td>
                <td>item 2</td>
                <td>item 3</td>
            </tr>
            <tr>
                <td>item 1</td>
                <td>item 2</td>
                <td>item 3</td>
            </tr>
        </tbody>
    </table>
</vl-typography>\``,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
  parameters,
  key1,
  key2
}: any) => {
  return html\` <vl-typography parameters=\${parameters} data-cy="typography">
        <p>
            Lorem <b>\${key1}</b> dolor sit amet, consectetur adipiscing elit. Duis iaculis molestie feugiat. Lorem
            <b>\${key2}</b> eros, consequat et venenatis ac, scelerisque feugiat nunc. Nam molestie tincidunt lectus, nec
            volutpat ante egestas at. Curabitur quis odio metus. Morbi at purus ac purus convallis <b>\${key1}</b> at eu
            est. Nunc id ligula quis justo semper ullamcorper. Donec orci nisi, <b>\${key1}</b> varius massa ut,
            vulputate imperdiet nibh. Maecenas <b>\${key1}</b> lectus quis turpis cursus, ac vehicula ligula fermentum.
        </p>
        <p>
            Praesent consequat diam nec semper congue. <b>\${key2}</b> tempor ut erat nec aliquam. Quisque ullamcorper
            sapien magna, sit amet porta <b>\${key2}</b> pulvinar aliquam. Sed eleifend fringilla augue in vehicula. Sed
            leo sem, imperdiet non ornare maximus, bibendum facilisis massa. Nunc condimentum leo mi, quis porta ante
            mattis ut. Quisque eu enim vel metus consequat iaculis. Donec malesuada odio quis quam vulputate vestibulum.
        </p>
    </vl-typography>\`;
}`,...l.parameters?.docs?.source}}};const E=["TypographyDefault","TypographyAnchors","TypographyAnchorsExternalLink","TypographyTitles","TypographyLists","TypographyMarkup","TypographyTable","TypographyParameters"];export{n as TypographyAnchors,i as TypographyAnchorsExternalLink,r as TypographyDefault,p as TypographyLists,u as TypographyMarkup,l as TypographyParameters,c as TypographyTable,d as TypographyTitles,E as __namedExportsOrder,A as default};
