import{u as c,j as e,M as s}from"./iframe-CYuKbPIU.js";import"./preload-helper-D9Z9MdNV.js";function i(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Afnemen/Artifacts"}),`
`,e.jsx(n.h1,{id:"artifacts",children:"Artifacts"}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overzicht",children:"Overzicht"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#domg-wccommon",children:"@domg-wc/common"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#domg-wccomponentsblock",children:"@domg-wc/components/block"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#domg-wccomponentsform",children:"@domg-wc/components/form"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#domg-wccomponentscompliance",children:"@domg-wc/components/compliance"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#domg-wcmap",children:"@domg-wc/map"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#fat-lib-domg-wc-compliance",children:"fat-lib: domg-wc-compliance"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overzicht",children:"Overzicht"}),`
`,e.jsxs(n.p,{children:["Alle web-componenten van Departement Omgeving zijn beschikbaar via npm artifacts onder de npm scope ",e.jsx(n.code,{children:"@domg-wc"}),`;
`,e.jsx(n.strong,{children:"common"})," bevat technische code, ",e.jsx(n.strong,{children:"styles"}),` alle styling en layouts die op het document gezet worden,
`,e.jsx(n.strong,{children:"components"})," en ",e.jsx(n.strong,{children:"map"}),` bevatten de web-componenten. De web-componenten nodig voor legacy toepassingen zijn ook
beschikbaar via de CDN, zie `,e.jsx(n.a,{href:"#fat-lib-domg-wc-compliance",children:"'fat-lib: domg-wc-compliance'"}),"."]}),`
`,e.jsx(n.h2,{id:"domg-wcstyles",children:"@domg-wc/styles"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"styles"})," bevat basis css: zowel de css die globaal op het document gezet wordt als de layout specifiek css"]}),`
`,e.jsx(n.h2,{id:"domg-wccommon",children:"@domg-wc/common"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"common"})," is een technische bibliotheek met basis code en utilities"]}),`
`,e.jsx(n.h2,{id:"domg-wccomponents",children:"@domg-wc/components"}),`
`,e.jsxs(n.p,{children:["Historisch werd een ",e.jsx(n.strong,{children:"component"})," geïmplementeerd als een ",e.jsx(n.code,{children:"BaseElement"}),`: een eigen basis klasse beschikbaar in
@domg-wc/common via de methode `,e.jsx(n.code,{children:"BaseElementOfType"}),`. Nieuwere componenten worden geïmplementeerd m.b.v.
`,e.jsx(n.a,{href:"https://lit.dev/docs/api/LitElement/",rel:"nofollow",children:"LitElement"}),`; het doel op (lange) termijn is van alles (ook van de compliance
en map) LitElementen te maken.`]}),`
`,e.jsxs(n.p,{children:["Een ",e.jsx(n.strong,{children:"component"})," heeft technisch volgende eigenschappen:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"extends van BaseElement of van LitElement"}),`
`,e.jsxs(n.li,{children:["steeds te gebruiken als custom tag; bvb. ",e.jsx(n.code,{children:"<vl-breadcrumb></vl-breadcrumb>"})]}),`
`,e.jsxs(n.li,{children:["heeft ",e.jsx(n.strong,{children:"steeds"})," een shadow DOM"]}),`
`,e.jsx(n.li,{children:"de styling komt mee met de component (wordt geïnjecteerd in de shadow DOM)"}),`
`]}),`
`,e.jsx(n.p,{children:"De componenten zijn onderverdeeld in 4 soorten:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"atom"})," : kleine, native componenten, o.a. button, icon, link, ..."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"block"})," : de typische bouwstenen met middelmatige complexiteit,  o.a. accordion, alert, ..."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"compliance"})," : bevat de Departement Omgeving specifieke componenten; o.a. header, footer, privacy, ..."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"form"})," : de input componenten; typisch in een formulier te gebruiken"]}),`
`]}),`
`,e.jsx(n.h2,{id:"domg-wcmap",children:"@domg-wc/map"}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.strong,{children:"map"}),` is de grootste en uitgebreidste component. Het is een kaart component die achterliggend
`,e.jsx(n.a,{href:"https://openlayers.org",rel:"nofollow",children:"OpenLayers v8.2.0"}),` gebruikt. De functionaliteit zit in sub-componenten
die een plugin opzet volgen.`]}),`
`,e.jsx(n.h2,{id:"fat-lib-domg-wc-compliance",children:"fat-lib: domg-wc-compliance"}),`
`,e.jsxs(n.p,{children:[`Voor legacy toepassingen is er een 'fat-lib' variant van de web-componenten beschikbaar, hierin zijn enkel de
'compliance' componenten beschikbaar (vl-header / vl-footer / vl-accessibility / ...). Via de CDN van Departement
Omgeving kan je daar ge-versioneerd naar refereren conform: `,e.jsx(n.code,{children:"https://cdn.omgeving.vlaanderen.be/domg/domg-wc/2.0.0/domg-wc-compliance-2.0.0.min.js"}),`.
Bij de import worden de beschikbare web-componenten geregistreerd. Zie
`,e.jsx(n.a,{href:"/docs/recepten-cdn-bundel-fat-lib--documentatie",children:"CDN Bundel - fat-lib"})," onder ",e.jsx(n.code,{children:"Cookbook"})," voor meer informatie."]})]})}function d(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{d as default};
