import{u as r,j as e,M as a}from"./iframe-COmpMQdF.js";import"./preload-helper-D9Z9MdNV.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Richtlijnen/Content Security Policy/CSP Problematieken"}),`
`,e.jsx(n.h1,{id:"csp-problematieken",children:"CSP Problematieken"}),`
`,e.jsx(n.h2,{id:"web-componenten-problematiek",children:"Web-componenten problematiek"}),`
`,e.jsx(n.p,{children:`Web-componenten encapsuleren zowel (technische) logica met JavaScript als visualisatie met html en css. Sommige
componenten maken ook gebruik van externe bibliotheken. Voor CSP zijn er verschillende configuratie mogelijkheden.
Vanaf dat 1 component (of de achterliggende bibliotheek) een specifieke CSP regel moet openzetten moet dit voor de
ganse toepassing gebeuren.`}),`
`,e.jsx(n.p,{children:`Sinds v2.4.0 van de flux-web-componenten kan CSP voor bijna alle componenten en alle regels op het meest strikte gezet
worden. Er zijn nog een beperkt aantal uitzonderingen nodig:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["het domein ",e.jsx(n.code,{children:"https://cdn.omgeving.vlaanderen.be"}),` moet toegestaan worden om fonts, scripts en styles uit te halen,
omdat we vandaaruit ondersteunende, algemene zaken beschikbaar stellen`]}),`
`,e.jsxs(n.li,{children:["de ",e.jsx(n.code,{children:"global-header"}),` heeft extra domeinen nodig waarnaar aanvragen mogen gebeuren, omdat elke toepassing deze component
integreert moet dit steeds geconfigureerd worden, zie hieronder voor meer informatie`]}),`
`,e.jsxs(n.li,{children:["bij gebruik van de ",e.jsx(n.code,{children:"vl-map"})," moeten images uit ",e.jsx(n.code,{children:"https://geo.api.vlaanderen.be"})," beschikbaar zijn"]}),`
`,e.jsxs(n.li,{children:["de ",e.jsx(n.code,{children:"vl-textarea-rich"}),` embed TinyMCE, deze heeft (net als alle alternatieve rich-text editors) de configuratie
`,e.jsx(n.code,{children:"style-src-attr 'unsafe-inline';"})," nodig, dit moet enkel voorzien worden als de toepassing deze component gebruikt"]}),`
`]}),`
`,e.jsx(n.h2,{id:"csp-en-de-global-header",children:"CSP en de global-header"}),`
`,e.jsxs(n.p,{children:[`T.e.m. v2.2.0 integreerden de flux-web-componenten de v4 versie van de
`,e.jsx(n.a,{href:"https://www.vlaanderen.be/digitaal-vlaanderen/onze-diensten-en-platformen/mijn-burgerprofiel/global-header-en-footer",rel:"nofollow",children:"global header"}),`.
Sinds v2.3.0 is er een integratie beschikbaar met de nieuwe v5 versie via de `,e.jsx(n.code,{children:"vl-header-next"})," en ",e.jsx(n.code,{children:"vl-footer-next"}),`
component. Technische informatie over de upgrade kan je vinden in de documentatie van Digitaal Vlaanderen:
`,e.jsx(n.a,{href:"https://vlaamseoverheid.atlassian.net/wiki/spaces/IKPubliek/pages/7488733769/Upgraden+van+global+header+versie+4+naar+5",rel:"nofollow",children:"upgraden van global header versie 4 naar 5"}),"."]}),`
`,e.jsxs(n.p,{children:["De v4 versie van de header werkte enkel met de CSP configuratie ",e.jsx(n.code,{children:"Content-Security-Policy: script-src 'unsafe-eval';"}),`.
Om die reden was CSP activeren met die versie redelijk zinloos: in de volledige toepassing moest 'unsafe-eval' actief
zijn, waardoor `,e.jsx(n.a,{href:"/docs/richtlijnen-content-security-policy-wat-is-csp--documentatie#cross-side-scripting",children:"XSS"}),` mogelijk
is.`]}),`
`,e.jsxs(n.p,{children:[`De nieuwe v5 versie verhelpt dit probleem, 'unsafe-eval' is niet meer nodig. Door de functionaliteit van de header
moeten er, afhankelijk van de omgeving, wel domeinen gespecifieerd worden waarnaar specifieke aanroepen mogen
gebeuren. De lijst met CSP configuratie (per omgeving) is te vinden in de
`,e.jsx(n.a,{href:"https://test.widgets.burgerprofiel.dev-vlaanderen.be/docs/global-header/index.html#content-security-policy-csp",rel:"nofollow",children:"v5 global-header"}),`
documentatie.`]}),`
`,e.jsx(n.h2,{id:"csp-en-vl-textarea-rich--tinymce",children:"CSP en vl-textarea-rich / TinyMCE"}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"vl-textarea-rich"})," maakt gebruik van ",e.jsx(n.a,{href:"https://github.com/tinymce/tinymce",rel:"nofollow",children:"TinyMCE"}),`. Alle rich text editor's hebben,
om correct te werken, dezelfde CSP regel nodig: `,e.jsx(n.code,{children:`"Content-Security-Policy": "style-src-attr 'unsafe-inline';"`}),`. De reden
is dat ze dynamisch tekst stylen via het style attribuut.`]}),`
`,e.jsxs(n.p,{children:[`Een fundamentele oplossing is er niet, in alternatieve rich text editors kan je met een
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/nonce",rel:"nofollow",children:"'nonce'"}),` werken of
functionaliteit beperken. Een 'nonce' configureren is echter complex. Als je functionaliteit wil beperken kan je
overwegen de gewone `,e.jsx(n.code,{children:"vl-textarea"})," component te gebruiken."]}),`
`,e.jsxs(n.p,{children:["Als je er voor kiest ",e.jsx(n.code,{children:"vl-textarea-rich"})," te gebruiken dien je dus ",e.jsx(n.code,{children:`"style-src-attr 'unsafe-inline';"`}),` te specifiëren.
Op die manier laat je enkel toe dat scripts dynamisch het style attribuut zetten (of bewerken) op een DOM-element.
Als alle andere CSP-regels strikt gedefinieerd zijn is er geen risico. In dat geval kunnen er geen scripts geïnjecteerd
worden en alle scripts aanwezig zijn gekend omdat ze afkomstig zijn van een eigen (of toegelaten) domein, dus te
vertrouwen. Het enige wat die vertrouwde scripts dan nog kunnen doen is styling, zijnde visualisatie, van DOM-elementen
beïnvloeden.`]})]})}function s(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{s as default};
