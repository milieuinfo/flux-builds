import{u as r,j as e,M as i}from"./iframe-BgD7f6Cn.js";import"./preload-helper-D9Z9MdNV.js";function l(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Beheren/CI - CD"}),`
`,e.jsx(n.h1,{id:"ci---cd",children:"CI - CD"}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#beschrijving",children:"Beschrijving"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#bamboo-configuratie",children:"Bamboo Configuratie"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#bamboo-release",children:"Bamboo Release"})}),`
`]}),`
`,e.jsx(n.h2,{id:"beschrijving",children:"Beschrijving"}),`
`,e.jsxs(n.p,{children:["De build loopt via ",e.jsx(n.a,{href:"https://www.milieuinfo.be/bamboo/chain/viewChain.action?planKey=flux-CUWC",rel:"nofollow",children:"Bamboo"}),"."]}),`
`,e.jsxs(n.p,{children:[`Om de versionering te sturen en een changelog te genereren wordt de
`,e.jsx(n.a,{href:"https://github.com/semantic-release/semantic-release",rel:"nofollow",children:"semantic-release"})," plugin gebruikt."]}),`
`,e.jsxs(n.p,{children:[`De verschillende releases zijn terug te vinden op de
`,e.jsx(n.a,{href:"https://github.com/milieuinfo/flux-web-components/releases",rel:"nofollow",children:"release pagina"})," van de GitHub repository."]}),`
`,e.jsx(n.h2,{id:"bamboo-configuratie",children:"Bamboo Configuratie"}),`
`,e.jsxs(n.p,{children:["De build configuratie zit in het ",e.jsx(n.code,{children:"bamboo.yml"})," bestand in de root folder ",e.jsx(n.code,{children:"bamboo-specs"}),`. In Bamboo bestaat een
build-plan uit stages die sequentieel lopen, de volgende stage start pas als de vorige stage succesvol gelopen heeft.
Een stage bestaat zelf uit 1 of meerdere jobs, de jobs binnen een stage kunnen parallel lopen. Volgende stages en jobs
zijn gedefinieerd:`]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Checkout, Install and Cache Stage"})," - met de job",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"checkout-install-and-cache"}),": checkout van de repo, npm installatie, caching van de node_modules en Cypress"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Build and Test Stage"})," - met de volgende jobs die parallel lopen:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"build-apps-and-libs"})," (de build),"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"unit-component-integrator-tests"})," (verschillende testen)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"e2e-tests-storybook"})," (Storybook e2e-testen)"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Release and Publish Stage"})," - met de jobs",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"release-and-publish"}),`: deze loopt niet voor feature branches, er is een licht verschillende flow voor release
en pre-release branches`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Verify Release Stage"})," - met de job",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"verify-release"}),": verifieert dat de ge-releaste artifacts afneembaar zijn"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"bamboo-release",children:"Bamboo Release"}),`
`,e.jsxs(n.p,{children:["Een release vindt plaats in de ",e.jsx(n.strong,{children:"release-and-publish"}),` job en wordt gestuurd door
`,e.jsx(n.a,{href:"https://github.com/semantic-release/semantic-release",rel:"nofollow",children:"semantic-release"}),`. De configuratie van die plugin is te vinden
in de root folder en zit in 2 bestanden: `,e.jsx(n.code,{children:".releaserc-develop"})," en ",e.jsx(n.code,{children:".releaserc-release"}),`. De develop variant loopt voor de
pre-release branches ('develop' en 'develop-xyz'), de release variant voor de 'release' en 'release-x.y' branches.`]}),`
`,e.jsxs(n.p,{children:["In die ",e.jsx(n.strong,{children:"release-and-publish"})," stap gebeurt het volgende:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`semantic-release bepaalt het nieuwe versie nummer a.d.h.v. de commits (fix / feat / breaking-change) - met een
`,e.jsx(n.code,{children:"-develop"})," suffix voor develop branches"]}),`
`,e.jsx(n.li,{children:"de te publiceren artifacts krijgen het versie nummer"}),`
`,e.jsx(n.li,{children:"er wordt een tag gelegd met het versie nummer"}),`
`,e.jsxs(n.li,{children:["de artifacts worden gepushed naar ",e.jsx(n.a,{href:"https://repo.omgeving.vlaanderen.be/ui/packages",rel:"nofollow",children:"Artifactory"})]}),`
`,e.jsxs(n.li,{children:[`in het geval van een release wordt er een changelog aangemaakt en een
`,e.jsx(n.a,{href:"https://github.com/milieuinfo/flux-web-components/releases",rel:"nofollow",children:"GitHub release"})," uitgevoerd"]}),`
`]})]})}function t(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{t as default};
