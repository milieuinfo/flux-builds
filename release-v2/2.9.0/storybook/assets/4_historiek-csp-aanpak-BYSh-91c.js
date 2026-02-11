import{u as o,j as e,M as t}from"./iframe-CYuKbPIU.js";import"./preload-helper-D9Z9MdNV.js";function r(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Richtlijnen/Content Security Policy/Historiek CSP Aanpak"}),`
`,e.jsx(n.h1,{id:"historiek-csp-aanpak",children:"Historiek CSP Aanpak"}),`
`,e.jsx(n.p,{children:"Volgende acties werden in het verleden al genomen rond CSP:"}),`
`,e.jsx(n.h3,{id:"augustus-2025---v240",children:"augustus 2025 - v2.4.0"}),`
`,e.jsxs(n.p,{children:[`Vanaf v2.4.0 zijn alle componenten zo CSP-compliant mogelijk gemaakt via
`,e.jsx(n.a,{href:"https://jira.omgeving.vlaanderen.be/jira/browse/FLUX-99",rel:"nofollow",children:"FLUX-99"}),`. Alle componenten die reeds herschreven waren
via een 'next-' variant waren al CSP-compliant, er waren echter nog een hoop componenten die embedded `,e.jsx(n.code,{children:"<style></style>"}),`
hadden. Deze zijn met deze release aangepast: de embedded style is verwijderd en de styling wordt nu geïnjecteerd via
adoptedStyleSheets op de shadow-dom.`]}),`
`,e.jsx(n.p,{children:"De volgende componenten werden in release v2.4.0 CSP-compliant gemaakt:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["in ",e.jsx(n.strong,{children:"components/block"}),": ",e.jsx(n.code,{children:"vl-accordion"}),", ",e.jsx(n.code,{children:"vl-contact-card"}),", ",e.jsx(n.code,{children:"vl-content-header"}),", ",e.jsx(n.code,{children:"vl-document"}),`,
`,e.jsx(n.code,{children:"vl-http-error-message"}),", ",e.jsx(n.code,{children:"vl-info-tile"}),", ",e.jsx(n.code,{children:"vl-infoblock"}),", ",e.jsx(n.code,{children:"vl-loader"}),", ",e.jsx(n.code,{children:"vl-modal"}),", ",e.jsx(n.code,{children:"vl-pager"}),", ",e.jsx(n.code,{children:"vl-proza-message"}),`,
`,e.jsx(n.code,{children:"vl-rich-data"}),", ",e.jsx(n.code,{children:"vl-rich-data-sorter"}),", ",e.jsx(n.code,{children:"vl-rich-data-table"}),", ",e.jsx(n.code,{children:"vl-search"}),", ",e.jsx(n.code,{children:"vl-side-sheet"}),", ",e.jsx(n.code,{children:"vl-tabs"}),", ",e.jsx(n.code,{children:"vl-template"}),`,
`,e.jsx(n.code,{children:"vl-typography"})]}),`
`,e.jsxs(n.li,{children:["in ",e.jsx(n.strong,{children:"components/compliance"}),": ",e.jsx(n.code,{children:"vl-cookie-consent"}),", ",e.jsx(n.code,{children:"vl-cookie-consent-opt-in"}),", ",e.jsx(n.code,{children:"vl-cookie"}),", ",e.jsx(n.code,{children:"vl-cookie-statement"}),`,
`,e.jsx(n.code,{children:"vl-header"}),", ",e.jsx(n.code,{children:"vl-header-next"})]}),`
`,e.jsxs(n.li,{children:["in ",e.jsx(n.strong,{children:"components/map"}),": ",e.jsx(n.code,{children:"vl-map"}),", ",e.jsx(n.code,{children:"vl-map-search"}),", ",e.jsx(n.code,{children:"vl-map-side-sheet-menu"}),", ",e.jsx(n.code,{children:"vl-map-side-sheet-menu-item"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["De enige component die niet volledig CSP-compliant is is ",e.jsx(n.code,{children:"vl-textarea-rich"}),`,
zie `,e.jsx(n.a,{href:"/docs/richtlijnen-content-security-policy-csp-problematieken--documentatie#csp-en-vl-textarea-rich--tinymce",children:"CSP en vl-textarea-rich / TinyMCE"}),`
voor meer informatie hierrond.`]}),`
`,e.jsx(n.h3,{id:"juni-2025---v230",children:"juni 2025 - v2.3.0"}),`
`,e.jsxs(n.p,{children:["Via ",e.jsx(n.a,{href:"https://jira.omgeving.vlaanderen.be/jira/browse/FLUX-100",rel:"nofollow",children:"FLUX-100"}),` is een CSP veilige versie van de header
(vl-header-next) en de footer (vl-footer-next) beschikbaar.`]}),`
`,e.jsx(n.h3,{id:"april-2024",children:"april 2024"}),`
`,e.jsx(n.p,{children:`In de 2e helft van 2024 worden alle elementen omgezet naar volwaardige componenten. Deze nieuwe code wordt ineens
CSP-compliant gemaakt.`}),`
`,e.jsx(n.h3,{id:"november-2023",children:"november 2023"}),`
`,e.jsx(n.p,{children:`Sinds eind 2023 worden de form componenten herschreven. We streven er naar die ineens CSP-compliant te maken. We
doen dit o.a. door de CSP-compliancy af te testen in de integrator-app.`}),`
`,e.jsx(n.h3,{id:"maart-2023",children:"maart 2023"}),`
`,e.jsxs(n.p,{children:["Het volgende is gemeld op de ",e.jsx(n.a,{href:"https://www.milieuinfo.be/confluence/display/AEO/2023-03-02%3A%3A+Verslag",rel:"nofollow",children:"TAW van 02/03/2023"}),`
door Christophe De Blende en besproken:`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`Ik heb zo het gevoel dat de urgentie van CSP onderschat wordt. Hier een paar statistieken van de verschillende
aanvallen die op de RP innet gecapteerd worden: `,e.jsx("a",{href:"top-threats-20221013.pdf",target:"_blank",children:"23/10/2022"}),", ",e.jsx("a",{href:"top-threats-20230213.pdf",target:"_blank",children:"23/02/2023"})," en ",e.jsx("a",{href:"top-threats-20230227.pdf",target:"_blank",children:"27/02/2023"}),`.
Van belang, al wat via SSL gebeurt zien we zelf niet. Dus er zijn veel exploits die nog niet gedetecteerd worden
omwille van de huidige firewall / ssl terminatie setup.`,e.jsx("br",{}),`
Er is wel een tijdje een firewall loop toegevoegd geweest om log4j shell exploit te kunnen firefighten en deze
statistieken zijn ook meegenomen. Om aan te geven dat je met een factor 100 mag vermenigvuldigen wat je nu ziet
in de dagdagelijkse statistieken.`]}),`
`]}),`
`,e.jsx(n.p,{children:"Hierbij zijn er volgende vragen / bemerkingen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"hoe verhouden die statistieken zich tot CSP: welke zullen er verminderen / verdwijnen als CSP actief wordt ?"}),`
`,e.jsx(n.li,{children:`het 'algemeen activeren van CSP' op de reverse-proxy (wat Lode al eens geprobeerd zou hebben - op ontwikkel?) is
niet zinvol, veel toepassingen zullen dan niet meer werken`}),`
`,e.jsx(n.li,{children:`CSP activatie zou applicatie per applicatie moeten doorgevoerd worden, omdat dit een grote doorlooptijd
(maanden / jaren) zal hebben zouden statistieken per sub-domein uitgesplitst moeten worden om impact te kunnen zien`}),`
`]}),`
`,e.jsx(n.h3,{id:"januari-2023",children:"januari 2023"}),`
`,e.jsxs(n.p,{children:["In het kader van ticket ",e.jsx(n.a,{href:"https://www.milieuinfo.be/jira/browse/UIG-2207",rel:"nofollow",children:"UIG-2207"})," zijn er beperkt zaken bekeken."]})]})}function a(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{a as default};
