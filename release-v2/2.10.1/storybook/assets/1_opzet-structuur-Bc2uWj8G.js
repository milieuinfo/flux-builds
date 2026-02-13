import{u as i,j as e,M as o}from"./iframe-iHJvAyUB.js";import"./preload-helper-D9Z9MdNV.js";function t(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Bijdragen/Opzet & Structuur"}),`
`,e.jsx(n.h1,{id:"opzet--structuur",children:"Opzet & Structuur"}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#opzet",children:"Opzet"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#structuur",children:"Structuur"})}),`
`]}),`
`,e.jsx(n.h2,{id:"opzet",children:"Opzet"}),`
`,e.jsxs(n.p,{children:[`De code van de web-componenten bibliotheek zit in GitHub onder de
`,e.jsx(n.a,{href:"https://github.com/milieuinfo/flux-web-components",rel:"nofollow",children:"flux-web-components"}),` repository. Het is een monorepo, opgezet met
custom scripts, wel wordt de `,e.jsx(n.a,{href:"https://nx.dev/",rel:"nofollow",children:"Nx"})," structuur gevolgd (vroeger was het Nx)."]}),`
`,e.jsxs(n.p,{children:["Ontwikkeling gebeurt ",e.jsx(n.a,{href:"/docs/bijdragen-git-branching-strategie--documentatie",children:"branch-based"}),` waarbij het
`,e.jsx(n.a,{href:"/docs/beheren-ci-cd--documentatie",children:"release proces"})," volledig geautomatiseerd is."]}),`
`,e.jsxs(n.p,{children:["Naast de web-componenten bibliotheek zijn er nog ",e.jsx(n.a,{href:"/docs/beheren-repositories--documentatie",children:"andere repositories"}),"."]}),`
`,e.jsx(n.h3,{id:"private-dependencies",children:"Private dependencies"}),`
`,e.jsxs(n.p,{children:[`Een aantal dependencies zijn interne private npm packages. Om deze te kunnen installeren moet de Artifactory registry
correct geconfigureerd worden, met een persoonlijke authToken, in het root `,e.jsx(n.code,{children:"~/.npmrc"}),` bestand. Meer informatie vind je
`,e.jsx(n.a,{href:"/docs/recepten-artifactory-configuratie--documentatie",children:"hier"}),"."]}),`
`,e.jsx(n.h3,{id:"node-versie-en-volta",children:"Node versie en Volta"}),`
`,e.jsxs(n.p,{children:[`We gebruiken Node en npm om dependencies te beheren en scripts uit te voeren. De Node versie is vastgelegd in de
package.json.`,e.jsx("br",{}),`
We gebruiken `,e.jsx(n.a,{href:"https://get.volta.sh",rel:"nofollow",children:"Volta"})," om de juiste Node versie te installeren:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`volta install node@20.11.0
node -v
v20.11.0
`})}),`
`,e.jsxs(n.p,{children:["Indien de versie niet klopt moet je de ",e.jsx(n.code,{children:"PATH"})," variabele aanpassen en de Volta bin vooraan zetten. In ",e.jsx(n.code,{children:"~/.zprofile"}),` kan
je daarvoor deze lijn toevoegen:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`export PATH="/Users/(your user)/.volta/bin:$PATH"
`})}),`
`,e.jsx(n.h2,{id:"structuur",children:"Structuur"}),`
`,e.jsxs(n.p,{children:["Hieronder staat de projectstructuur van de ",e.jsx(n.a,{href:"https://github.com/milieuinfo/flux-web-components",rel:"nofollow",children:"flux-web-components"}),`
repo beschreven, achter de pijltjes staan de artifacts gespecifieerd die uit de sub-projecten komen.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`─ flux-web-components/
  ├─ apps/
  │  ├─ consumer/
  │  ├─ consumer-e2e/
  │  ├─ integrator/
  │  ├─ integrator-e2e/ (Cypress CSP testen)
  │  ├─ playground-lit/
  │  ├─ playground-native/
  │  ├─ playground-react/
  │  ├─ storybook/
  │  ├─ storybook-e2e/ (Cypress testen tov storybook)
  │   -> worden niet als artifact gepubliceerd
  ├─ libs/
  │  ├─ common/
  │  │   -> @domg-wc/common
  │  ├─ components/
  │  │   -> @domg-wc/components
  │  ├─ integrations/
  │  │   -> geen artifact, enkel voor intern gebruik in de integrator-app
  │  ├─ map
  │  │   -> @domg-wc/map
  │  ├─ styles
  │  │   -> @domg-wc/styles
  ├─ resources/
`})}),`
`,e.jsx(n.p,{children:"Er zitten verschillende applicaties en libs in de repo."}),`
`,e.jsx(n.h3,{id:"storybook",children:"Storybook"}),`
`,e.jsx(n.p,{children:"Storybook (deze documentatie) streeft naar het aanbieden van zo correct mogelijke informatie en documentatie."}),`
`,e.jsx(n.h3,{id:"playgrounds",children:"Playground's"}),`
`,e.jsx(n.p,{children:`De verschillende Playground applicaties zijn bedoeld om integraties en combinaties van componenten in verschillende
frameworks te testen.`}),`
`,e.jsx(n.h3,{id:"consumer",children:"Consumer"}),`
`,e.jsx(n.p,{children:`Consumer is de toepassing om te verifiëren dat de gereleasete artifacts afneembaar zijn. Er zitten afnames in
met named-imports, side-effect-imports en imports van de fat-lib.`}),`
`,e.jsx(n.h3,{id:"integrator",children:"Integrator"}),`
`,e.jsx(n.p,{children:`Integrator wordt gebruikt om integraties te voorzien die ruimer zijn dan 1 component of die technisch nodig zijn
om getest te kunnen worden, het wordt bvb. voor CSP verificatie gebruikt.`}),`
`,e.jsx(n.h3,{id:"libs",children:"Libs"}),`
`,e.jsxs(n.p,{children:[`De feitelijke componenten zitten opgesplitst in een aantal bibliotheken onder de libs folder. Ze worden aangeboden
als `,e.jsx(n.a,{href:"/docs/afnemen-artifacts--documentatie",children:"npm packages"}),"."]})]})}function a(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{a as default};
