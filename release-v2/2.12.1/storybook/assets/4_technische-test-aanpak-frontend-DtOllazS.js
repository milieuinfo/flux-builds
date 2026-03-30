import{u as s,j as e,M as a}from"./iframe-B6HStWZE.js";import"./preload-helper-D9Z9MdNV.js";function i(t){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Richtlijnen/Testen/Technische Test Aanpak Frontend"}),`
`,e.jsx(n.h1,{id:"technische-test-aanpak-frontend",children:"Technische Test Aanpak Frontend"}),`
`,e.jsx(n.h2,{id:"unit-testen",children:"Unit Testen"}),`
`,e.jsx(n.p,{children:"Jest"}),`
`,e.jsx(n.h2,{id:"component-testen",children:"Component Testen"}),`
`,e.jsx(n.p,{children:"Cypress & Storybook"}),`
`,e.jsx(n.h2,{id:"te-vermijden-flaky-testen",children:"Te Vermijden: Flaky Testen"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://dev.to/codux/flaky-tests-and-how-to-deal-with-them-2id2",rel:"nofollow",children:"Flaky testen"}),` zijn testen die typisch lukken,
maar 'soms' niet. De soms hangt af van randvoorwaarden als: de snelheid van de computer waar de testen / de toepassing
op draaien, extra belastingen van het systeem, een trager netwerk, ... .
Des te dynamischer toepassingen worden, des te flaky-er testen worden. De oorzaak is nooit het test framework,
een tool die de problematiek echter in acht neemt kan de flakiness wel beperken en beheersbaar maken.`]}),`
`,e.jsx(n.p,{children:"Oorzaken van flakiness zijn vaak asynchrone gebeurtenissen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["door het gebruik van promises, async/await, observables (RxJS)",e.jsx("br",{}),`
-> eventueel ten gevolge van het maken van een reactive toepassing`]}),`
`,e.jsx(n.li,{children:"events die gebeuren vanuit de server kant: via SSE of een websocket"}),`
`]}),`
`,e.jsx(n.h2,{id:"timing-problemen",children:"Timing Problemen"}),`
`,e.jsx(n.p,{children:`Selenium stamt uit 2004, een tijd waar de aanpak om een webtoepassing te schrijven was: het dynamisch maken van
meerdere statische pagina's. Als het dynamische er uit bestaat te antwoorden met een volledig nieuwe pagina werkt
Selenium perfect: het selecteren en verifiëren van aanwezige DOM elementen lukt feilloos. Vanaf dat er AJAX
(Asynchronous JavaScript And XML) gebruikt werd, lag het al moeilijker. De feitelijke DOM-structuur wijzigt dan
ten gevolge van gebruiker acties. Doordat AJAX bewust en gecontroleerd gebruikt werd, viel het nog wel mee om
een Selenium test te schrijven. Je gebruikt typisch het patroon: wachten tot 'iets verwacht' gebeurt, om daarna
verder te gaan.`}),`
`,e.jsxs(n.p,{children:[`Bij een SPA is het echter minder eenduidig wat er in de DOM gebeurt, zie hiervoor de uitgebreidere uitleg m.b.t.
`,e.jsx(n.a,{href:"/docs/richtlijnen-testen-selenium-en-cypress--documentatie#eenduidigheid",children:"eenduidigheid"}),"."]})]})}function d(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{d as default};
