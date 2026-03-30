import{u as l,j as e,M as a,a as r}from"./iframe-B6HStWZE.js";import"./preload-helper-D9Z9MdNV.js";const d="1.48.2",x=`https://flux.omgeving.vlaanderen.be/release-v1/${d}/storybook/?path=`,t=`v${d}`,o="\n- Imports aan te passen naar `@domg-wc/components/next/...`\n- Componenten te registreren met `registerWebComponents()`\n- CSS styles toe te voegen via `static get styles()`\n- Legacy imports (zoals `VlGridElement`, `vlElementsStyle`, etc.) te verwijderen\n- Opletten bij het selecteren van elementen in code of in tests\n  bv: `.querySelector('h1')` of `.querySelector('[is=\"vl-button\"]')` zullen breken\n",c=`
Het gebruik van \`.dataset.vl...\` zal niet meer werken. Dit kan vervangen worden door \`.getAttribute('...')\`.
<table}>
  <tr>
    <th>v1</th>
    <th>v2</th>
  </tr>
  <tr>
    <td>data-vl-max-resolution</td>
    <td>max-resolution</td>
  </tr>
  <tr>
    <td>element.dataset.vlMaxResolution</td>
    <td>element.getAttribute('max-resolution')</td>
  </tr>
</table>
`;function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Afnemen/Migratie v2 - Aanpak"}),`
`,e.jsx(n.h1,{id:"migratie-v2---aanpak",children:"Migratie v2 - Aanpak"}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#aanpak-overzicht",children:"Aanpak Overzicht"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#aanpak-detail",children:"Aanpak Detail"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#1-migratie-naar-de-nieuwste-v1-release",children:"1. Migratie naar de nieuwste v1 release"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#2-legacy-componenten-vervangen-door-hun-next-variant",children:'2. Legacy componenten vervangen door hun "next"-variant'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#21-elementen-wegwerken",children:"2.1 Elementen wegwerken"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#211-grid-wijzigingen",children:"2.1.1 Grid wijzigingen"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#22-next-varianten-implementeren",children:'2.2 "next"-varianten implementeren'})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#23-vl-u--utility-classes",children:'2.3 "vl-u-..." utility classes'})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#3-migratie-naar-de-v2-release",children:"3. Migratie naar de v2 release"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#31-wijzigingen-in-v2",children:"3.1 Wijzigingen in v2"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#32-migratie-acties",children:"3.2 Migratie acties"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#31-imports",children:"3.3 Imports"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#34-optimalisaties",children:"3.4 Optimalisaties"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"aanpak-overzicht",children:"Aanpak Overzicht"}),`
`,e.jsx(n.p,{children:"De makkelijkste manier om te migreren naar v2 is als volgt:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["migreer minstens naar de v1 release waarvan v2 afgesplitst is: ",t," - hoger mag ook"]}),`
`,e.jsx(n.li,{children:'vervang de legacy componenten door hun "next"-variant'}),`
`,e.jsx(n.li,{children:"migreer naar de v2 release (best ineens naar de nieuwste v2 versie)"}),`
`]}),`
`,e.jsxs(n.p,{children:[`Op deze manier kan je tijdens de migratie de legacy componenten blijven gebruiken en ze geleidelijk vervangen door
hun "next"-variant. Nadat alle legacy componenten vervangen zijn door hun "next"-variant kan je de migratie naar
v2 uitvoeren. Die stap bestaat dan grotendeels uit het verwijderen van de `,e.jsx(n.code,{children:"-next"}),` suffix en het aanpassen van de
imports.`]}),`
`,e.jsx(n.h2,{id:"aanpak-detail",children:"Aanpak Detail"}),`
`,e.jsx(n.h3,{id:"1-migratie-naar-de-nieuwste-v1-release",children:"1. Migratie naar de nieuwste v1 release"}),`
`,e.jsxs(n.p,{children:["De v2 versie is gestart op basis van ",t,` - deze bevat de laatste bugfixes en verbeteringen van
de legacy componenten.`]}),`
`,e.jsxs(n.p,{children:["Het heeft de voorkeur om ",t,` te gebruiken als basis voor de migratie naar v2, deze release bevat
(voor de componenten die behouden bleven) dezelfde functionaliteit als de eerste v2 release. Op die manier zullen de
verdere stappen in de migratie eenvoudiger zijn.`]}),`
`,e.jsx(n.h3,{id:"2-legacy-componenten-vervangen-door-hun-next-variant",children:'2. Legacy componenten vervangen door hun "next"-variant'}),`
`,e.jsxs(n.p,{children:[`De legacy componenten zijn componenten die geschrapt worden, ze moeten vervangen worden door de equivalente
`,e.jsx(n.a,{href:"/docs/afnemen-migratie-v2-impact--documentatie",children:"next-component"}),` of
`,e.jsx(n.a,{href:"/docs/styles-concept--documentatie#layout-afnemers",children:"next-layout"}),"."]}),`
`,e.jsx("vl-alert",{type:"info",title:"Info",icon:"info-circle",size:"small","custom-css":".vl-alert{margin-bottom: 3rem;}",children:e.jsx(r,{options:{forceInline:!0},style:{fontSize:"14px"},children:`
  Zie [Migratie v2 - Impact](/docs/afnemen-migratie-v2-impact--documentatie) voor gedetaileerde informatie over welke elementen vervangen worden.
  In deze stap migreren we naar de waarden onder **v1 - Gebruik**.
  `})}),`
`,e.jsx(n.h4,{id:"21-elementen-wegwerken",children:e.jsx(n.strong,{children:"2.1 Elementen wegwerken"})}),`
`,e.jsxs(n.p,{children:["Vervang alle ",e.jsx(n.code,{children:'<x is="...">'})," elementen door hun nieuwe component of class."]}),`
`,e.jsxs(n.p,{children:[`Een aantal elementen verdwijnen, bv:
`,e.jsx(n.code,{children:'<body is="vl-body">'})," → ",e.jsx(n.code,{children:"<body>"})]}),`
`,e.jsxs(n.p,{children:[`Een aantal elementen worden vervangen door componenten, bv:
`,e.jsx(n.code,{children:'<button is="vl-button">'})," →  ",e.jsx(n.code,{children:"<vl-button-next>"})]}),`
`,e.jsxs(n.p,{children:[`Een aantal elementen worden vervangen door classes, bv:
`,e.jsx(n.code,{children:'is="vl-grid"'})," en ",e.jsx(n.code,{children:'is="vl-form-grid"'})," → ",e.jsx(n.code,{children:'class="vl-grid-next"'})]}),`
`,e.jsx("vl-alert",{type:"info",title:"Vergeet niet",icon:"info-circle",size:"small","custom-css":".vl-alert{margin-bottom: 3rem;}",children:e.jsx(r,{style:{fontSize:"14px"},children:o})}),`
`,e.jsx(n.h4,{id:"22-next-varianten-implementeren",children:e.jsx(n.strong,{children:'2.2 "next"-varianten implementeren'})}),`
`,e.jsxs(n.p,{children:['Voor alle componenten met een "next"-variant in ',e.jsx(n.a,{href:"/docs/afnemen-migratie-v2-impact--documentatie",children:"deze lijst"})," onder ",e.jsx(n.strong,{children:"v1 - Gebruik"}),", moet er eerst naar deze implementatie gemigreerd worden. Deze upgrade bevat breaking changes, dus in deze stap is het essentieel om goed te testen of alles blijft werken en eventuele fixes door te voeren."]}),`
`,e.jsx(n.h4,{id:"23-vl-u--utility-classes",children:e.jsx(n.strong,{children:'2.3 "vl-u-..." utility classes'})}),`
`,e.jsxs(n.p,{children:["Sommige ",e.jsx(n.code,{children:"vl-u-..."})," classes worden als component of stijl aangeboden in onze bibliotheek, zoals bv ",e.jsx(n.code,{children:"vl-text"}),". Indien ze niet beschikbaar zijn, bieden we deze (nog) niet aan. Je kan hiervoor een request indienen. Voorlopig zal de CSS-code gekopiëerd moeten worden naar de componenten die deze utility classes gebruiken."]}),`
`,e.jsx(n.h3,{id:"3-migratie-naar-de-v2-release",children:"3. Migratie naar de v2 release"}),`
`,e.jsxs(n.p,{children:["Functioneel (voor de behouden componenten) loopt v2.0.0 gelijk met v1 release ",t,"."]}),`
`,e.jsx(n.h4,{id:"31-wijzigingen-in-v2",children:e.jsx(n.strong,{children:"3.1 Wijzigingen in v2"})}),`
`,e.jsx(n.p,{children:"Volgende wijzigingen werden doorgevoerd in v2 tov v1:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"alle legacy componenten uit v1 werden verwijderd"}),`
`,e.jsxs(n.li,{children:['alle "next"-componenten zijn gepromoveerd: deze hebben geen ',e.jsx(n.code,{children:"-next"})," suffix meer en bij alle attributen werd de ",e.jsx(n.code,{children:"data-vl-"}),`-prefix
verwijderd.`]}),`
`,e.jsxs(n.li,{children:["de ",e.jsx(n.a,{href:"/docs/bijdragen-opzet-structuur--documentatie",children:"package structuur"})," wijzigde, dit heeft impact op de imports"]}),`
`]}),`
`,e.jsx("vl-alert",{type:"info",title:"Info",icon:"info-circle",size:"small","custom-css":".vl-alert{margin-bottom: 3rem;}",children:e.jsx(r,{options:{forceInline:!0},style:{fontSize:"14px"},children:`
  Zie [Migratie v2 - Impact](/docs/afnemen-migratie-v2-impact--documentatie) voor gedetaileerde informatie over welke componeten vervangen worden.
  In deze stap migreren we naar de waarden onder **v2 - Gebruik**.
  `})}),`
`,e.jsx(n.h4,{id:"32-migratie-acties",children:e.jsx(n.strong,{children:"3.2 Migratie acties"})}),`
`,e.jsx(n.p,{children:"De te ondernemen acties om te migreren zijn:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["verwijder de ",e.jsx(n.code,{children:"-next"})," suffix van de componenten"]}),`
`,e.jsxs(n.li,{children:["pas de imports aan (zie ",e.jsx(n.a,{href:"#33-imports",children:"hieronder"}),")"]}),`
`,e.jsxs(n.li,{children:["verwijder de ",e.jsx(n.code,{children:"data-vl-"})," prefix van de attributen"]}),`
`]}),`
`,e.jsx("vl-alert",{type:"info",title:"Opgelet",icon:"info-circle",size:"small","custom-css":".vl-alert{margin-bottom: 3rem;}",children:e.jsx(r,{options:{forceInline:!0},style:{fontSize:"14px"},children:c})}),`
`,e.jsx(n.h4,{id:"33-imports",children:e.jsx(n.strong,{children:"3.3 Imports"})}),`
`,e.jsx(n.p,{children:"De v2 versie kan je installeren via npm:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`npm uninstall @domg-wc/common-utilities @domg-wc/form @domg-wc/sections @domg-wc/elements && npm install @domg-wc/common@^2.1.0 @domg-wc/components@^2.1.0 @domg-wc/map@^2.1.0 @domg-wc/styles@^2.1.0
`})}),`
`,e.jsx(n.p,{children:"Dit kuist de oude installatiefiles op en voegt deze nieuwe dependencies toe aan je package.json:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`"@domg-wc/common": "2.1.0",
"@domg-wc/components": "2.1.0",
"@domg-wc/map": "2.1.0",
"@domg-wc/styles": "2.1.0",
`})}),`
`,e.jsx(n.p,{children:"Te wijzigen imports:"}),`
`,e.jsxs("table",{style:{width:"100%"},children:[e.jsxs("tr",{children:[e.jsx("th",{children:"v1 import"}),e.jsx("th",{children:"v2 import"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"@domg-wc/common-utilities"}),e.jsx("td",{children:"@domg-wc/common"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"@domg-wc/common-utilities/css"}),e.jsx("td",{children:"@domg-wc/styles"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"@domg-wc/components/next/..."}),e.jsx("td",{children:"@domg-wc/components/[atom, block, form]"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"@domg-wc/sections/..."}),e.jsx("td",{children:"@domg-wc/components/compliance"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"@domg-wc/form/..."}),e.jsx("td",{children:"@domg-wc/components/form"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"@domg-wc/elements"}),e.jsx("td",{children:e.jsx("em",{children:"(verwijderd)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"@domg-wc/components/proza-message/vl-proza-rest-client.util"}),e.jsx("td",{children:"@domg-wc/components/block/proza-message/vl-proza-rest-client.util"})]})]}),`
`,e.jsx(n.h4,{id:"34-optimalisaties",children:e.jsx(n.strong,{children:"3.4 Optimalisaties"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Gebruik waar mogelijk ",e.jsx(n.code,{children:"vlLayoutStyles"})," ipv de meer specifiekere ",e.jsx(n.code,{children:"vlGridStyles"}),", ",e.jsx(n.code,{children:"vlMarginStyles"}),", ..."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.p,{children:["Bekijk de ",e.jsx(n.a,{href:"/docs/afnemen-migratie-v2-faq--documentatie",children:"Migratie v2 - FAQ"})," voor meer specifieke vragen."]})]})}function j(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{c as dataVlInfoBlock,j as default,d as v1AfsplitsRelease,t as v1AfsplitsReleaseVersie,x as v1StorybookLink,o as v2InfoBlock};
