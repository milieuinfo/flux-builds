import{u as t,j as e,M as r}from"./iframe-CsDE-vVI.js";import"./preload-helper-D9Z9MdNV.js";function i(o){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Richtlijnen/Analytics/Matomo Analytics"}),`
`,e.jsx(n.h1,{id:"matomo-analytics",children:"Matomo Analytics"}),`
`,e.jsx(n.h2,{id:"inleiding",children:"Inleiding"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://matomo.org/",rel:"nofollow",children:"Matomo"}),` is een open source web-analytics platform en het privacy-vriendelijke alternatief
voor Google Analytics. In tegenstelling tot veel andere oplossingen blijven de gegevens onder eigen beheer: bij
Departement Omgeving wordt Matomo zelf gehost, waardoor bezoekersgegevens binnen de eigen infrastructuur blijven.`]}),`
`,e.jsxs(n.p,{children:[`Matomo verzamelt onder andere pageviews, sessies, gebruikte browsers/toestellen en navigatiepatronen. Het laat
toe om via `,e.jsx(n.em,{children:"custom dimensions"})," en ",e.jsx(n.em,{children:"events"})," extra context mee te sturen."]}),`
`,e.jsxs(n.p,{children:["Meer info op de ",e.jsx(n.a,{href:"https://matomo.org/",rel:"nofollow",children:"Matomo website"}),"."]}),`
`,e.jsx(n.h2,{id:"omgevingen",children:"Omgevingen"}),`
`,e.jsx(n.p,{children:"Voor de Storybook-logging maken we gebruik van drie Matomo-omgevingen van Departement Omgeving:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://stats-ontwikkel.omgeving.vlaanderen.be",rel:"nofollow",children:"https://stats-ontwikkel.omgeving.vlaanderen.be"}),` - ontwikkelomgeving,
ook gebruikt vanaf lokale hosts (`,e.jsx(n.code,{children:"localhost"}),", ",e.jsx(n.code,{children:"127.0.0.1"}),", ",e.jsx(n.code,{children:"192.168.*"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://stats-oefen.omgeving.vlaanderen.be",rel:"nofollow",children:"https://stats-oefen.omgeving.vlaanderen.be"})," - oefenomgeving"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://stats.omgeving.vlaanderen.be",rel:"nofollow",children:"https://stats.omgeving.vlaanderen.be"})," - productieomgeving"]}),`
`]}),`
`,e.jsx(n.p,{children:"De productieomgeving is degene die je best raadpleegt."}),`
`,e.jsx(n.h2,{id:"matomo-logging-in-storybook",children:"Matomo logging in Storybook"}),`
`,e.jsx(n.p,{children:`Voor Storybook hebben we een eigen, lichte Matomo-integratie voorzien. Die bestaat uit twee bestanden met een
bewust verschillende plaatsing:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"apps/storybook/resources/public/matomo-loader.js"})," - zit in de ",e.jsx(n.code,{children:"staticDirs"}),` van Storybook en wordt dus per
build mee uitgeleverd in de root van elke gepubliceerde versie.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"apps/storybook/matomo-tracking.js"})," - staat bewust ",e.jsx(n.strong,{children:"niet"})," in ",e.jsx(n.code,{children:"staticDirs"}),`. Dit bestand wordt na het builden
één keer hoger in de boom geplaatst (typisch in `,e.jsx(n.code,{children:"release-vX/"})," of ",e.jsx(n.code,{children:"flux-builds/"}),`), zodat alle gepubliceerde
versies datzelfde centrale bestand gebruiken.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["De loader probeert het trackingscript in een aantal stappen op te halen: ",e.jsx(n.code,{children:"./matomo-tracking.js"}),`,
`,e.jsx(n.code,{children:"../matomo-tracking.js"}),", ",e.jsx(n.code,{children:"../../matomo-tracking.js"})," en ",e.jsx(n.code,{children:"../../../matomo-tracking.js"}),`. Op die manier vindt elke
versie het centrale bestand, ongeacht hoe diep ze in de mappenboom zit.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Waarom deze opzet?"}),` Wijzigingen aan de tracking-logica vereisen zo geen rebuild en redeploy van elke
gepubliceerde versie. Eén centraal `,e.jsx(n.code,{children:"matomo-tracking.js"}),` vervangen volstaat - alle versies pikken de nieuwe
versie op via de loader-fallback.`]}),`
`,e.jsx(n.h3,{id:"wat-wordt-er-gelogd",children:"Wat wordt er gelogd?"}),`
`,e.jsx(n.p,{children:"Het trackingscript voorziet onder meer:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"een initiële pageview bij het laden van Storybook"}),`
`,e.jsxs(n.li,{children:[`pageviews bij SPA-navigatie (Storybook wisselt van story zonder volledige page-reload); hiervoor worden
`,e.jsx(n.code,{children:"pushState"})," en ",e.jsx(n.code,{children:"replaceState"})," gepatcht zodat een ",e.jsx(n.code,{children:"locationchange"})," event afgevuurd wordt"]}),`
`,e.jsxs(n.li,{children:["een ",e.jsx(n.strong,{children:"custom dimension"})," (",e.jsx(n.code,{children:"dimension 1"}),`) met de Storybook-versie, afgeleid uit het URL-pad
(`,e.jsx(n.code,{children:"/release-vX/<versie>/storybook/"}),"); voor lokale builds is dat ",e.jsx(n.code,{children:"local"})]}),`
`,e.jsxs(n.li,{children:["het forceren van een ",e.jsx(n.em,{children:"new visit"}),` wanneer een gebruiker tussen versies navigeert, zodat gebruik per versie
zuiver geteld wordt`]}),`
`]})]})}function a(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{a as default};
