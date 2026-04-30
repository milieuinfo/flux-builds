import{u as r,j as e,M as o}from"./iframe-69xRVzLO.js";import"./preload-helper-D9Z9MdNV.js";function i(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Recepten/Events"}),`
`,e.jsx(n.h1,{id:"events",children:"Events"}),`
`,e.jsx(n.h2,{id:"native--vs-custom-events",children:"Native- vs Custom-events"}),`
`,e.jsxs(n.p,{children:["De Flux-componenten bieden eigen custom-events aan, deze hebben de prefix ",e.jsx(n.code,{children:"vl-"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"De prefix maakt duidelijk dat het Flux-events zijn"}),`
`,e.jsx(n.li,{children:"en vermijden conflicten met standaard events of events van andere bibliotheken"}),`
`]}),`
`,e.jsxs(n.p,{children:["Luister bvb. naar ",e.jsx(n.code,{children:"vl-change"})," of ",e.jsx(n.code,{children:"vl-input"})," (i.p.v. ",e.jsx(n.code,{children:"click"}),") bij het aanvinken van ",e.jsx(n.code,{children:"vl-checkbox"}),`. Dit kan belangrijk
zijn wanneer je code momenteel naar native events luistert.`]}),`
`,e.jsxs(n.p,{children:["Op de documentatie pagina van een component vind je onder ",e.jsx(n.code,{children:"Configuratie"}),` een overzicht van de custom-events,
de native events worden niet vermeld!`]}),`
`,e.jsx(n.p,{children:"Indien aanwezig, heeft het de voorkeur te luisteren naar de custom events; deze worden typisch voorzien bij componenten:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"die een complexe DOM-structuur hebben"}),`
`,e.jsx(n.li,{children:"waar extra informatie meegegeven wordt met het event"}),`
`,e.jsx(n.li,{children:"waar het belangrijk is dat we de timing / frequentie van de events zelf kunnen bepalen"}),`
`,e.jsx(n.li,{children:"waar we complexiteit rond retargeting willen omzeilen (zie hieronder)"}),`
`]}),`
`,e.jsx(n.h3,{id:"retargeting",children:"Retargeting"}),`
`,e.jsxs(n.p,{children:["De Flux-componenten ontsluiten typisch native componenten die op hun beurt native events hebben. Bv. een ",e.jsx(n.code,{children:"<vl-button>"}),`
bevat een `,e.jsx(n.code,{children:"<button>"})," die de ",e.jsx(n.code,{children:"click"}),"'s  ontvangt van de gebruiker."]}),`
`,e.jsxs(n.p,{children:["Web-componenten ",e.jsx(n.a,{href:"https://web.dev/articles/shadowdom-v1#the_shadow_dom_event_model",rel:"nofollow",children:"re-targetten"}),` zelf bepaalde events,
hierdoor lijken die native events voor afnemers van de web-component host (`,e.jsx(n.code,{children:"vl-button"}),`) zelf te komen in plaats van het
native element `,e.jsx(n.code,{children:"<button>"}),". In dat voorbeeld is het belangrijk om ",e.jsx(n.code,{children:"event.composedPath()"}),` te gebruiken om het geklikte
element te achterhalen (`,e.jsx(n.code,{children:"button"}),"), in plaats van ",e.jsx(n.code,{children:"event.target"})," die bv. ",e.jsx(n.code,{children:"vl-button"})," zou geven."]}),`
`,e.jsxs(n.p,{children:[`Retargeting kan er ook voor zorgen dat bv. bepaalde events meerdere keren binnen komen,
terwijl je die maar 1 keer verwacht.
Meer info rond het onderwerp vind je op `,e.jsx(n.a,{href:"https://lit.dev/docs/components/events/#adding-event-listeners-to-the-component-or-its-shadow-root",rel:"nofollow",children:"Lit.dev"}),"."]}),`
`,e.jsx(n.h2,{id:"events-in-lit",children:"Events in Lit"}),`
`,e.jsxs(n.p,{children:[`Lit, waar de nieuwere Flux-componenten gebruik van maken, heeft zelf een uitgebreide documentatie pagina over
`,e.jsx(n.a,{href:"https://lit.dev/docs/components/events/",rel:"nofollow",children:"events"}),"."]}),`
`,e.jsxs(n.p,{children:["In plaats van event listeners te definiëren kan je ",e.jsx(n.code,{children:"@event-naam"}),` gebruiken om op een eenvoudigere manier met events
om te gaan.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-button @vl-click="\${(event: CustomEvent) => console.log('er is geklikt', event)}">Click Me!</vl-button>
`})}),`
`,e.jsx(n.h2,{id:"events-afnemen-in-react",children:"Events afnemen in React"}),`
`,e.jsx(n.p,{children:`Tot en met React 18 was het minder eenvoudig om met web componenten om te gaan en is het aan de afnemer om bv. wrappers
te voorzien.`}),`
`,e.jsxs(n.p,{children:["Lit voorziet ",e.jsx(n.code,{children:"@lit/react"})," die dit makkelijker maakt: ",e.jsx(n.a,{href:"https://lit.dev/docs/frameworks/react/",rel:"nofollow",children:"lit/react"}),`. Dit laat het
toe om Lit componenten op een meer React native manier te gebruiken.`]}),`
`,e.jsxs(n.p,{children:["Vanaf React 19 zijn ",e.jsx(n.a,{href:"https://react.dev/blog/2024/12/05/react-19#support-for-custom-elements",rel:"nofollow",children:"custom elements nu volledig ondersteund"}),"."]}),`
`,e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Versie"}),e.jsx("td",{children:"Ondersteuning"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"React <= 18"}),e.jsxs("td",{children:["weinig ondersteuning maar gebruik van ",e.jsx("strong",{children:"@lit/react"})," maakt het makkelijker"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"React 19"}),e.jsx("td",{children:"volledig ondersteund"})]})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Voor React specifieke controllers, kan het belangrijk zijn om de wrapper aan te passen zodat je kan omgaan met onze
specifieke custom events`}),`
`]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://lit.dev/docs/components/events/",rel:"nofollow",children:"Lit - Events"})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://lit.dev/docs/frameworks/react/",rel:"nofollow",children:"Lit - @lit/react"})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event",rel:"nofollow",children:"MDN - Events"})})]})}function d(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{d as default};
