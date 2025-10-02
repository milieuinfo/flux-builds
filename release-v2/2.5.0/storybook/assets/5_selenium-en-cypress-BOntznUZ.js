import{u as s,j as e,M as t}from"./iframe-CflcmDUD.js";import"./preload-helper-D9Z9MdNV.js";function r(i){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Richtlijnen/Testen/Selenium en Cypress"}),`
`,e.jsx(n.h1,{id:"selenium-en-cypress",children:"Selenium en Cypress"}),`
`,e.jsx(n.h2,{id:"inleiding",children:"Inleiding"}),`
`,e.jsxs(n.p,{children:[`Bij Departement Omgeving wordt typisch Selenium gebruikt voor frontend testen. Selenium wordt algemeen veel gebruikt,
is goed gedocumenteerd, maar niet ideaal. Het artikel
`,e.jsx(n.a,{href:"https://blog.logrocket.com/cypress-io-the-selenium-killer/",rel:"nofollow",children:"cypress, the selenium killer"}),` beschrijft de problemen die
ik typisch ook ervaar met Selenium.`]}),`
`,e.jsx(n.h2,{id:"selenium",children:"Selenium"}),`
`,e.jsx(n.p,{children:"Een aantal algemene artikels die Selenium goed beschrijven zijn:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["de ",e.jsx(n.a,{href:"https://www.selenium.dev",rel:"nofollow",children:"Selenium website"})]}),`
`,e.jsxs(n.li,{children:["de ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Selenium_(software)",rel:"nofollow",children:"Selenium wikipedia"})," pagina"]}),`
`,e.jsxs(n.li,{children:["een ",e.jsx(n.a,{href:"https://www.guru99.com/introduction-to-selenium.html",rel:"nofollow",children:"introductie tot Selenium"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Selenium heeft een ",e.jsx(n.a,{href:"https://www.interviewbit.com/blog/selenium-architecture",rel:"nofollow",children:"flexibele architectuur"}),` met web-driver's
waardoor het historisch een breed scala van talen (om testen in te schrijven) en browsers ondersteund. Typisch werden
deze testen (vroeger in `,e.jsx(n.a,{href:"/docs/applicatief-testen-test-piramide-ssr-vs-spa--documentatie",children:"SSR toepassingen"}),`) in dezelfde taal als de
applicatie (bij DOMG dus in Java) geschreven. Toepassingen zijn geëvolueerd richting SPA's, in JavaScript geschreven.
Daar Selenium ook JavaScript ondersteuning heeft is dan vaak die test tool behouden. In de opzet van een SPA zijn er
echter betere alternatieven.`]}),`
`,e.jsx(n.h2,{id:"eenduidigheid",children:"Eenduidigheid"}),`
`,e.jsx(n.p,{children:"Volgende factoren maken het minder eenduidig wat er in de DOM gebeurt:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`bij een responsive toepassing zullen afhankelijk van de resolutie waarop getest wordt elementen onzichtbaar worden,
een ander formaat of andere positie hebben`}),`
`,e.jsx(n.li,{children:"door web-componenten met een shadow DOM is de DOM-structuur minder transparant"}),`
`,e.jsx(n.li,{children:"frameworks en component bibliotheken doen soms auto-magische zaken"}),`
`]}),`
`,e.jsx(n.h2,{id:"selenium-en-spas",children:"Selenium en SPA's"}),`
`,e.jsx(n.h3,{id:"page-object-model",children:"Page Object Model"}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.a,{href:"https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/",rel:"nofollow",children:"POM"}),` aanpak die vaak
gebruikt wordt is zinvol voor SSR's, je hebt verschillende pagina's met hun eigen url. Er is een 1 op 1 mapping
van de pagina met het POM. Voor een SPA is dat lastiger, er is maar 1 page waarbinnen alles dynamisch gebeurt.
Vasthouden aan het POM kan, maar zal niet eenduidig zijn.`]}),`
`,e.jsx(n.h2,{id:"cypress",children:"Cypress"}),`
`,e.jsxs(n.p,{children:["Alle informatie hierover is te vinden op de ",e.jsx(n.a,{href:"/docs/bijdragen-cypress--documentatie",children:"Cypress detail"})," pagina."]})]})}function o(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{o as default};
