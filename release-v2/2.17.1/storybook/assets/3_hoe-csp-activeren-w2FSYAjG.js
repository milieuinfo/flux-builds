import{u as i,j as e,M as r}from"./iframe-DynOw9qF.js";import"./preload-helper-D9Z9MdNV.js";function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Richtlijnen/Content Security Policy/Hoe CSP Activeren"}),`
`,e.jsx(n.h1,{id:"hoe-csp-activeren",children:"Hoe CSP Activeren"}),`
`,e.jsx("vl-alert",{"data-cy":"alert",icon:"info-circle",title:"CSP Activeren",type:"info",children:e.jsxs(n.p,{children:["Het doel is ",e.jsx(n.strong,{children:"op de server"})," waar je de toepassing host te zorgen dat er ",e.jsx(n.strong,{children:"zo strikt mogelijke CSP-headers"}),`
geconfigureerd zijn die meegestuurd worden met de response(s).`]})}),`
`,e.jsx(n.h2,{id:"voorbereiding",children:"Voorbereiding"}),`
`,e.jsxs(n.p,{children:[`De verschillende flux-web-componenten evolueren. Voor alle versies t.e.m. v2.2.0 is het niet zo zinvol om CSP te
configureren. De global-header van DV in die versies heeft `,e.jsx(n.code,{children:`"script-src 'unsafe-eval'"`}),` nodig, waardoor
`,e.jsx(n.a,{href:"/docs/richtlijnen-content-security-policy-wat-is-csp--documentatie#cross-side-scripting",children:"XSS"}),` mogelijk
is. Vanaf `,e.jsx(n.a,{href:"/docs/richtlijnen-content-security-policy-historiek-csp-aanpak--documentatie#juni-2025---v230",children:"v2.3.0"}),`
wordt de alternatieve `,e.jsx(n.code,{children:"vl-header-next"})," aangeboden die wel CSP-compliant is."]}),`
`,e.jsxs(n.p,{children:["Vanaf ",e.jsx(n.a,{href:"/docs/richtlijnen-content-security-policy-historiek-csp-aanpak--documentatie#augustus-2025---v240",children:"v2.4.0"}),`
zijn ook de oudere flux-web-componenten zo CSP-compliant als mogelijk gemaakt.`]}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.strong,{children:"aanbeveling"})," is dus ",e.jsx(n.strong,{children:"eerst te migreren naar versie v2.4.0"}),` (of hoger) alvorens het zinvol is CSP te activeren
voor een toepassing!`]}),`
`,e.jsx(n.h2,{id:"ideale-csp-configuratie",children:"Ideale CSP-configuratie"}),`
`,e.jsx(n.p,{children:"De ideale, meest veilige, configuratie ziet er als volgt uit:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`"Content-Security-Policy":
    "default-src 'self'; " +
    "font-src 'self'; " +
    "script-src 'self'; " +
    "style-src 'self'; " +
    "img-src 'self'; " +
    "connect-src 'self'; " +
    "object-src 'none'; " +
    "base-uri 'self'; " +
    "frame-ancestors 'none'"
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["met ",e.jsx(n.strong,{children:"'self'"}),` mogen er vanuit de toepassing enkel requests gebeuren naar hetzelfde domein - om fonts,
scripts, styles, images, ... op te vragen`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:`"object-src 'none'"`})," verbiedt alle loads via ",e.jsx(n.code,{children:"<object>"}),", ",e.jsx(n.code,{children:"<embed>"})," en ",e.jsx(n.code,{children:"<applet>"}),`: niets mag via die elementen
weergegeven worden, ongeacht herkomst - dit is een aanbevolen default die legacy functionaliteit blokkeert`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:`"frame-ancestors 'none'"`})," zorgt dat de pagina niet in een ",e.jsx(n.code,{children:"<iframe>"}),", ",e.jsx(n.code,{children:"<frame>"}),", ",e.jsx(n.code,{children:"<object>"})," of ",e.jsx(n.code,{children:"<embed>"}),`
opgenomen kan worden - dit is een anti-clickjacking maatregel`]}),`
`]}),`
`,e.jsx(n.h2,{id:"lossere-csp-regels",children:"Lossere CSP Regels"}),`
`,e.jsx(n.p,{children:"Praktisch zal je typisch lossere CSP regels moeten specifiëren:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"fonts, en beperkt styles en scripts, komen in ons geval van de CDN, wat een ander domein is"}),`
`,e.jsxs(n.li,{children:["de global-header ",e.jsx(n.code,{children:"vl-header-next"})," haalt - afhankelijk van de omgeving - fonts, scripts en styles uit andere domeinen"]}),`
`,e.jsxs(n.li,{children:["bij gebruik van de ",e.jsx(n.code,{children:"vl-textarea-rich"})," component moet ",e.jsx(n.code,{children:`"style-src-attr 'unsafe-inline'; "`}),` toegevoegd worden, zie
`,e.jsx(n.a,{href:"/docs/richtlijnen-content-security-policy-csp-problematieken--documentatie#csp-en-vl-textarea-rich--tinymce",children:"CSP en vl-textarea-rich / TinyMCE"}),`
voor details`]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Theoretisch zijn er, om te vermijden dat CSP regels versoepelt moeten worden, technisch nog 2 andere mogelijkheden:
`,e.jsx(n.strong,{children:"hashes"})," en ",e.jsx(n.strong,{children:"nonce's"}),"."]}),`
`,e.jsx(n.h3,{id:"csp-hash",children:"CSP Hash"}),`
`,e.jsxs(n.p,{children:["Indien bij strikte regels een bepaalde component toch een ",e.jsx(n.code,{children:"<style>"}),` blok in zijn html heeft dan geeft de browser een
fout, hij zal die stijl niet verwerken. De browser specifieert als mogelijke oplossing een hash, dat is een SHA-256
die berekend werd voor het desbetreffend blok code. Je kan die hash opnemen in de CSP-regel waarna het stijl-blok wel
toegelaten is en toegepast zal worden.`]}),`
`,e.jsxs(n.p,{children:[`Dit werkt enkel voor statische stijl, als je nadien dynamisch stijl wijzigt, blijft dat een CSP violation. Voor styles
kan je vermijden om met hashes te werken door ze niet in een `,e.jsx(n.code,{children:"<style>"}),` blok op te nemen, maar ze op de
adoptedStyleSheets van de shadow-dom of het document toe te voegen.`]}),`
`,e.jsx(n.p,{children:`Hetzelfde geldt voor scripts. In plaats van ze dynamisch toe te voegen, en met een hash te werken, kan je er beter voor
zorgen dat de scripts al initieel als code aanwezig zijn zodat je ze op het gepaste moment kan aanroepen.`}),`
`,e.jsx(n.h3,{id:"csp-nonce",children:"CSP Nonce"}),`
`,e.jsx(n.p,{children:`Een CSP-nonce is een dynamisch gegenereerde key die je meestuurt via de header en die gespecifiëerd wordt op scripts
of styles in je html. De nonce moet bij elke request random gegenereerd worden op de server, de implementatie is dus
niet triviaal.`}),`
`,e.jsx(n.h2,{id:"csp-voorbeeld",children:"CSP Voorbeeld"}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.a,{href:"https://git.omgeving.vlaanderen.be/git/flux/flux-csp-poc",rel:"nofollow",children:"flux-csp-poc"}),` in GitLab, is een voorbeeld toepassing
die de componenten `,e.jsx(n.code,{children:"vl-header-next"}),", ",e.jsx(n.code,{children:"vl-footer-next"}),", ",e.jsx(n.code,{children:"vl-textarea-rich"})," en ",e.jsx(n.code,{children:"vl-map"}),` integreert. De global-header
komt in dit geval uit de tni-omgeving van DV. De CSP regels zijn gespecifieerd in de webpack dev-server, in het
bestand `,e.jsx(n.code,{children:"webpack.config.cjs"}),". De toepassing heeft volgende CSP-configuratie nodig om te werken:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`"Content-Security-Policy":
    "default-src 'self'; " +
    "font-src 'self' https://widgets.test-vlaanderen.be https://ui.vlaanderen.be https://assets.vlaanderen.be https://widgets.tni-vlaanderen.be https://cdn.omgeving.vlaanderen.be; " +
    "script-src 'self' https://widgets.tni-vlaanderen.be https://cdn.omgeving.vlaanderen.be; " +
    "style-src 'self'; " +
    "style-src-elem 'self' https://widgets.tni-vlaanderen.be https://cdn.omgeving.vlaanderen.be; " +
    "style-src-attr 'unsafe-inline'; " +
    "img-src 'self' data: https://assets.vlaanderen.be https://widgets.tni-vlaanderen.be https://geo.api.vlaanderen.be; " +
    "connect-src 'self' https://staging.contactapi.cc.vlaanderen.be ws://localhost:8080 https://widgets.tni-vlaanderen.be wss://tni.contactapi.uat-vlaanderen.be https://chat.contactcenter.dev-vlaanderen.be https://tni.contactapi.uat-vlaanderen.be; " +
    "object-src 'none'; " +
    "base-uri 'self'; " +
    "frame-ancestors 'none'"
`})}),`
`,e.jsxs(n.p,{children:["Een goede aanpak om zo strikt mogelijke CSP-configuratie te verkrijgen is starten met bovenstaande ",e.jsx(n.a,{href:"#ideale-csp-configuratie",children:`'Ideale
CSP-configuratie'`}),`
en deze te verfijnen a.d.h.v. de fout boodschappen in de console.`]})]})}function d(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{d as default};
