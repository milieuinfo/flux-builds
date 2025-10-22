import{u as o,j as e,M as s}from"./iframe-Ds54rb_7.js";import"./preload-helper-D9Z9MdNV.js";const a=""+new URL("component-bibliotheek-test-piramide-NxWpx5zG.png",import.meta.url).href;function i(t){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Richtlijnen/Testen/Test Piramide Component Bibliotheek"}),`
`,e.jsx(n.h1,{id:"test-piramide-component-bibliotheek",children:"Test Piramide Component Bibliotheek"}),`
`,e.jsx(n.h2,{id:"inleiding",children:"Inleiding"}),`
`,e.jsx(n.p,{children:`Het Flux-team bouwt een component bibliotheek, dit is verschillend van een eindtoepassing. Om die componenten afgebakend
te testen wordt de algemene test aanpak gevolgd met een specifieke invulling.`}),`
`,e.jsx(n.h2,{id:"variant-op-de-spa-test-piramide",children:"Variant op de SPA Test Piramide"}),`
`,e.jsxs(n.p,{children:[`De test piramide voor de component bibliotheek volgt de
`,e.jsx(n.a,{href:"/docs/applicatief-testen-klassieke-test-piramide--documentatie",children:"klassieke test piramide"}),` en is een variant op de
`,e.jsx(n.a,{href:"/docs/applicatief-testen-test-piramide-ssr-vs-spa--documentatie",children:"SPA test piramide"}),"."]}),`
`,e.jsx("br",{}),`
`,e.jsx("img",{src:a,alt:"Component Bibliotheek Test Piramide",height:"450px"}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.p,{children:"Om de component bibliotheek te testen zijn volgende keuzes gemaakt:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["de code wordt in ",e.jsx(n.a,{href:"https://www.typescriptlang.org/",rel:"nofollow",children:"TypeScript"}),` geschreven zodat we een stabiele basis verkrijgen die
o.a. refactorings minder fout gevoelig maakt`]}),`
`,e.jsxs(n.li,{children:[`er zijn minimale unit testen, enkel daar waar 'logica' zit die onafhankelijk is van visualisatie (html / css) -
bvb. in de map actions
`,e.jsx("br",{}),"-> net omdat er geen business logica hoort te zitten in UI-componenten"]}),`
`,e.jsxs(n.li,{children:[`de focus ligt op visuele component testen, hiervoor worden de componenten geïntegreerd in
`,e.jsx(n.a,{href:"https://storybook.js.org/",rel:"nofollow",children:"Storybook"})]}),`
`,e.jsx(n.li,{children:`Storybook geeft een 3 in 1 voordeel: de component wordt echt geïntegreerd - inclusief varianten - in een toepassing
(Storybook) die de documentatie (visueel raadpleegbaar) vormt van diezelfde component; na de integratie worden dan
de testen geschreven (2-staps proces)`}),`
`,e.jsx(n.li,{children:`een beperkt aantal componenten is een compositie van andere componenten, de testen daarvoor kunnen gezien worden als
component-integratie testen; omdat dat echter zelf een component is zien we dat als gewone component testen, hierdoor
zijn er dus geen integratie testen`}),`
`,e.jsx(n.li,{children:"e2e-testen zijn er niet, de component bibliotheek bevat bouwstenen, dat is het finale product"}),`
`,e.jsx(n.li,{children:`de bibliotheek wordt aangeboden via verschillende artefacts, om de garantie te hebben dat die artefacts afneembaar
zijn door andere teams is er de Consumer toepassing - die technisch op dezelfde manier de artefacts integreert zoals
een toepassing dat doet - de testen daarvoor zijn de 'artefact integratie testen'`}),`
`]})]})}function l(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{l as default};
