import{u as s,j as e,M as o}from"./iframe-COmpMQdF.js";import"./preload-helper-D9Z9MdNV.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Richtlijnen/Toegankelijkheid - Praktijk/Gekende Beperkingen [WIP]"}),`
`,e.jsx(n.h1,{id:"gekende-beperkingen-wip",children:"Gekende Beperkingen [WIP]"}),`
`,e.jsx(n.h2,{id:"focus-op-niet-tekstuele-inputs",children:"Focus op niet-tekstuele inputs"}),`
`,e.jsxs(n.p,{children:[`Op Safari is het niet mogelijk om, met standaard instellingen, focus te leggen op een niet-tekstuele input zoals
buttons, checkboxes of radios. Dit is een `,e.jsx(n.a,{href:"https://bugs.webkit.org/show_bug.cgi?id=22261",rel:"nofollow",children:"probleem gemeld bij Safari"}),` -
waar het gemarkeerd is als WONTFIX.`]}),`
`,e.jsx(n.p,{children:"Volgens onze WCAG expert is dit een bewuste keuze van Apple en leidt dit al jaren tot verwarring."}),`
`,e.jsx(n.p,{children:"Om toch een focus te kunnen leggen op deze elementen kan je:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["als gebruiker op Mac: ",e.jsx(n.code,{children:"tab"}),"+",e.jsx(n.code,{children:"option"})," drukken"]}),`
`,e.jsxs(n.li,{children:["of gebruik maken van de volgende instelling in Safari:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["ga naar ",e.jsx(n.code,{children:"Safari > Settings > Advanced"})]}),`
`,e.jsxs(n.li,{children:["zet de optie ",e.jsx(n.code,{children:"Press Tab to highlight each item on a web page"})," aan; dan zal elke ",e.jsx(n.code,{children:"tab"}),` uitgevoerd worden als
`,e.jsx(n.code,{children:"tab"}),"+",e.jsx(n.code,{children:"option"})]}),`
`]}),`
`]}),`
`]})]})}function a(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{a as default};
