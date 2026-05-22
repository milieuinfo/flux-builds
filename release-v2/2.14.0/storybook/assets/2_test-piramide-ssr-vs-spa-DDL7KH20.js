import{u as a,j as e,M as r}from"./iframe-D9dm7PbY.js";import"./preload-helper-D9Z9MdNV.js";const s=""+new URL("ssr-vs-spa-BmRBqzUX.png",import.meta.url).href,o=""+new URL("ssr-test-piramide-jKvU18gT.png",import.meta.url).href,d=""+new URL("spa-test-piramide-BkHMQ765.png",import.meta.url).href;function i(t){const n={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Richtlijnen/Testen/Test Piramide SSR vs SPA"}),`
`,e.jsx(n.h1,{id:"test-piramide-ssr-vs-spa",children:"Test Piramide: SSR vs SPA"}),`
`,e.jsx(n.h2,{id:"srr-vs-spa",children:"SRR vs SPA"}),`
`,e.jsx("br",{}),`
`,e.jsx("img",{src:s,alt:"Ssr vs Spa",height:"450px"}),`
`,e.jsx(n.h2,{id:"testen-van-een-ssr",children:"Testen van een SSR"}),`
`,e.jsx(n.p,{children:`Vroeger werden toepassingen typisch gebouwd als server-side rendering applicaties. Voor hedendaagse toepassingen die
dichter aanleunen bij een website dan bij een complexere webtoepassing kan SSR nog steeds de voorkeur genieten.
Veel toepassingen bij Departement Omgeving zijn als SSR-toepassing geschreven. De frontend werkt dan niet onafhankelijk
van de backend maar zit erin vervat, het is een backend gestuurde toepassing. Er zullen unit en integratie testen zijn,
maar hoofdzakelijk voor de Java code die eerder backend gefocused is. Voor de frontend testen is het dan zinvol je te
beperken tot e2e-testen. Die e2e-testen zijn dan wel de enige frontend testen en zouden dan best zowel het happy
als (beperkt) het unhappy pad moeten afdekken. Logica zal zich eerder in de Java code bevinden, niet alle varianten van
geldige en ongeldige input dient dus via de frontend afgetest te worden daar dit al op een lager niveau in de piramide
getest werd.`}),`
`,e.jsx(n.p,{children:"Voor een SSR-toepassing ziet de test piramide er conceptueel als volgt uit:"}),`
`,e.jsx("img",{src:o,alt:"Ssr Test Piramide",height:"350px"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.p,{children:`De feitelijke backend test aanpak kan fijner uitgetekend worden, dit is echter buiten de scope van dit document (dat
zich beperkt tot frontend).`}),`
`,e.jsx(n.h2,{id:"testen-van-een-spa",children:"Testen van een SPA"}),`
`,e.jsxs(n.p,{children:[`Voor complexere web toepassingen heeft de
`,e.jsx(n.a,{href:"https://nl.wikipedia.org/wiki/Single_Page_Application",rel:"nofollow",children:"Single Page Application"}),` aanpak de voorkeur. Een SPA kan je
zien als een volwaardige toepassing die eenmalig ingeladen wordt in de browser (of aanwezig is op bvb. een tablet) en
communiceert met 1 (of meerdere) backends. In tegenstelling tot een SSR kan je om een SPA te testen wel de volledige
test piramide in beschouwing nemen. Een uitgebreidere uitleg hierover vind je in het Medium artikel
`,e.jsx(n.a,{href:"https://medium.com/inspiredbrilliance/testing-single-page-applications-b4001adc6452",rel:"nofollow",children:"Testing Single Page Applications"}),`,
eventueel vind je `,e.jsx("a",{href:"testing-single-page-applications-medium.pdf",target:"_blank",children:"hier"})," een kopie."]}),`
`,e.jsx(n.p,{children:`Samengevat komt het erop neer dat een goed geschreven SPA uit onderdelen bestaat die op test vlak alliëren met de lagen
van de test piramide:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"functionele logica - ongerelateerd aan UI zaken - zit afgebakend, hier tegenover worden unit testen geschreven"}),`
`,e.jsx(n.li,{children:`basis (herbruikbare) UI-functionaliteit zit in componenten, daar worden component testen voor geschreven - er
dient een opzet voorzien te worden om componenten standalone te kunnen testen`}),`
`,e.jsx(n.li,{children:`componenten kunnen gegroepeerd worden, denk bvb. aan complexere formulieren of wizards, die kan je geïntegreerd
testen (component integratie testen)`}),`
`,e.jsx(n.li,{children:`afhankelijk van de maturiteit al dan niet in combinatie met een framework kan de toepassing in modules opgesplitst
worden, een module (die bestaat uit een store, een router, componenten, ...) kan onafhankelijk van andere modules
getest worden, dit zijn dan ook integratie testen`}),`
`,e.jsx(n.li,{children:`de feitelijke eindtoepassing kan je e2e testen, afhankelijk van de kwaliteit van de backend en de team-samenstelling
kan je e2e testen t.o.v. een draaiende backend of opteren om de backend-calls te mocken`}),`
`]}),`
`,e.jsxs(n.p,{children:[`Bij een SPA zit er meer code en logica in de frontend dan bij een SSR-toepassing. Daar er echter met een scripting taal
gewerkt wordt is het aan te bevelen een extra kwaliteitslaag toe te voegen: een linter of een transpiler. In de backend
heb je - vaak zonder te beseffen - een compiler die er voor zorgt dat de code die je test minstens 'loopt'. In de
frontend heb je die garantie niet, door bvb. in `,e.jsx(n.a,{href:"https://www.typescriptlang.org/",rel:"nofollow",children:"TypeScript"}),` te werken en een
transpiler toe te voegen verhoog je dus met een minimale inspanning al de kwaliteit.`]}),`
`,e.jsx(n.p,{children:"Voor een SPA ziet de volledige test piramide er als volgt uit:"}),`
`,e.jsx("img",{src:d,alt:"Spa Test Piramide",height:"450px"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Dit lijkt mogelijks nodeloos 'gelaagd' of 'complex' maar is het niet. Een transpiler / linter (wat optioneel is maar
aanbevolen wordt) maakt deel uit van het ontwikkel / build proces (net zoals bij Java ontwikkeling). Unit testen zijn
typisch beperkt, de overige testen (component / component integratie / e2e) kan je zo opzetten dat het technische
varianten zijn; zodat ze praktisch niet aanvoelen als een ander type test.`}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`1 van de doelen van een SPA is de backend simpeler, eenduidiger en meer stateless te maken. Hierdoor
verschuift een deel van de logica en complexiteit naar de frontend. Er zal dus meer getest worden in de frontend,
maar minder in de backend t.o.v. een SSR-toepassing.`}),`
`]})]})}function c(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{c as default};
