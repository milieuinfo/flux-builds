import{u as t,j as e,M as o}from"./iframe-CsDE-vVI.js";import"./preload-helper-D9Z9MdNV.js";function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Beheren/Repositories"}),`
`,e.jsx(n.h1,{id:"repositories",children:"Repositories"}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overzicht",children:"Overzicht"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#flux-web-components",children:"flux-web-components"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#flux-assets",children:"flux-assets"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#flux-builds",children:"flux-builds"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overzicht",children:"Overzicht"}),`
`,e.jsx(n.p,{children:"Er zijn 3 repositories van Flux:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["flux-web-components - ",e.jsx(n.a,{href:"https://github.com/milieuinfo/flux-web-components",rel:"nofollow",children:"https://github.com/milieuinfo/flux-web-components"})]}),`
`,e.jsxs(n.li,{children:["flux-assets - ",e.jsx(n.a,{href:"https://github.com/milieuinfo/flux-assets",rel:"nofollow",children:"https://github.com/milieuinfo/flux-assets"})]}),`
`,e.jsxs(n.li,{children:["flux-builds - ",e.jsx(n.a,{href:"https://github.com/milieuinfo/flux-builds",rel:"nofollow",children:"https://github.com/milieuinfo/flux-builds"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"flux-web-components",children:"flux-web-components"}),`
`,e.jsx(n.p,{children:`De belangrijkste repo die de broncode van de flux-web-components bevat, de Storybook documentatie en de Playground
toepassingen. Dit is een mono-repo.`}),`
`,e.jsx(n.h2,{id:"flux-assets",children:"flux-assets"}),`
`,e.jsx(n.p,{children:`De flux-web-components hebben externe afhankelijkheden.  Die externe assets worden onder dit project opgenomen en
gepubliceerd op de CDN van Departement Omgeving. Code zal dus gebruik maken van versies gepubliceerd op de CDN.`}),`
`,e.jsxs(n.p,{children:["Volgende assets zitten in deze repo: ",e.jsx(n.strong,{children:"govflanders-font"}),", ",e.jsx(n.strong,{children:"govflanders-style"})," en ",e.jsx(n.strong,{children:"tinymce"})]}),`
`,e.jsx(n.h3,{id:"govflanders-font",children:"govflanders-font"}),`
`,e.jsx(n.p,{children:"Digitaal Vlaanderen voorziet eigen fonts, er zijn er 2"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`FlandersArt: in de varianten italic / sans - met telkens de sub-varianten black, bold, light, medium, regular
en thin`}),`
`,e.jsx(n.li,{children:"vlaanderen-icon (en icon-classic)"}),`
`]}),`
`,e.jsxs(n.p,{children:[`De flux-web-components refereren intern (geversioneerd) naar deze fonts. Voornamelijk voor het icon-font is de
versionering belangrijk daar de icoon referenties gelijk moeten lopen met het font voor de desbetreffende versie.
Voor meer informatie over het beheren van het icon-font zie de `,e.jsx(n.a,{href:"/docs/beheren-icon-font--documentatie",children:"Icon Font"})," documentatie."]}),`
`,e.jsx(n.h3,{id:"govflanders-style",children:"govflanders-style"}),`
`,e.jsx(n.p,{children:`De hoofdbrok van styling komt uit het Webuniversum van Digitaal Vlaanderen. Hun styling wordt aangeboden via
verschillende packages die .scss bestanden bevatten. De Flux web-componenten hebben vaak een shadow-dom, dit heeft
technische gevolgen die tot css duplicatie leiden, deze asset vermindert deze duplicatie.`}),`
`,e.jsx(n.p,{children:`Technisch worden in deze asset de DV packages gerefereert, de sccs verwerkt en gewrapped in .js bestanden. Het
resultaat wordt als geversioneerd artifact aangeboden waarop de flux-web-components dan dependen.`}),`
`,e.jsx(n.h3,{id:"tinymce",children:"tinymce"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://www.tiny.cloud/",rel:"nofollow",children:"TinyMCE"})," - een WYSIWYG editor gebruikt in ",e.jsx(n.code,{children:"vl-textarea"}),` - heeft theming nodig die statisch
gerefereerd wordt. I.p.v. elke toepassing deze theming apart te laten voorzien wordt die via dit asset geversioneerd
aangeboden op de CDN.`,e.jsx("br",{}),`
Onder `,e.jsx(n.code,{children:"tinymce"})," zit de theming voor v5.10.6, onder ",e.jsx(n.code,{children:"tinymce-next"})," deze voor v6.8.3."]}),`
`,e.jsx(n.h2,{id:"flux-builds",children:"flux-builds"}),`
`,e.jsxs(n.p,{children:[`De repo die de geversioneerde documentatie bevat,
zie `,e.jsx(n.a,{href:"/docs/beheren-documentatie-publicatie--documentatie",children:"Beheren/Documentatie Publicatie"})," voor meer informatie."]})]})}function l(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{l as default};
