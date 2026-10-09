import{u as t,j as e,M as d}from"./iframe-CsVpDM3d.js";import"./preload-helper-PPVm8Dsz.js";function i(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Bijdragen/Opzet & Structuur"}),`
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
`,e.jsxs(n.p,{children:["We gebruiken Node en ",e.jsx(n.a,{href:"#package-manager-pnpm",children:"pnpm"}),` om dependencies te beheren en scripts uit te voeren. De Node versie is vastgelegd in de
package.json.`,e.jsx("br",{}),`
We gebruiken `,e.jsx(n.a,{href:"https://get.volta.sh",rel:"nofollow",children:"Volta"})," om de juiste Node versie te installeren:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`volta install node@22.20.0
node -v
v22.20.0
`})}),`
`,e.jsxs(n.p,{children:["Indien de versie niet klopt moet je de ",e.jsx(n.code,{children:"PATH"})," variabele aanpassen en de Volta bin vooraan zetten. In ",e.jsx(n.code,{children:"~/.zprofile"}),` kan
je daarvoor deze lijn toevoegen:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`export PATH="/Users/(your user)/.volta/bin:$PATH"
`})}),`
`,e.jsx(n.h3,{id:"package-manager-pnpm",children:"Package manager: pnpm"}),`
`,e.jsxs(n.p,{children:["De repo gebruikt ",e.jsx(n.strong,{children:"pnpm"})," in plaats van npm. De reden is ",e.jsx(n.strong,{children:"supply-chain security"}),", niet snelheid."]}),`
`,e.jsxs(n.p,{children:["Bij het installeren voert npm tot en met versie 11 de lifecycle-scripts (",e.jsx(n.code,{children:"preinstall"}),"/",e.jsx(n.code,{children:"install"}),"/",e.jsx(n.code,{children:"postinstall"}),`) van
elke dependency automatisch uit, ook de transitieve. Dat is het `,e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Attack_surface",rel:"nofollow",children:"aanvalsoppervlak"}),`
voor supply-chain-aanvallen: een gecompromitteerde package voert kwaadaardige code uit tijdens het installeren. Pnpm draait die scripts standaard niet. Enkel packages die in
`,e.jsx(n.code,{children:"allowBuilds"})," op ",e.jsx(n.code,{children:"true"})," staan (in de root ",e.jsx(n.code,{children:"pnpm-workspace.yaml"}),`) mogen build-scripts uitvoeren; de andere staan op
`,e.jsx(n.code,{children:"false"})," en zijn geblokkeerd. In deze repo staan ",e.jsx(n.code,{children:"cypress"})," (downloadt de Cypress binary) en ",e.jsx(n.code,{children:"playwright-webkit"}),`
(downloadt de WebKit-browser voor de component-tests op WebKit) op `,e.jsx(n.code,{children:"true"}),`. In CI is die WebKit-download een no-op
door `,e.jsx(n.code,{children:"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1"})," in de Jenkins-pod. ",e.jsx(n.code,{children:"strictDepBuilds"}),` laat de install bovendien falen
zodra een build-script niet expliciet toegelaten of geweigerd is, zodat een nieuw of onverwacht script niet ongemerkt
kan draaien.`]}),`
`,e.jsxs(n.p,{children:["Daarnaast is pnpm strenger over afhankelijkheden: een package dat je gebruikt maar niet expliciet in ",e.jsx(n.code,{children:"package.json"}),`
hebt opgenomen (een phantom dependency), werkt onder pnpm niet meer. Bij npm werkt dat vaak toevallig wel doordat npm
het naar de root van `,e.jsx(n.code,{children:"node_modules"})," hoist, waardoor zulke phantom dependencies onopgemerkt blijven."]}),`
`,e.jsxs(n.p,{children:[`npm 12 heeft een deel daarvan ingehaald en blokkeert de lifecycle-scripts van dependencies nu ook standaard. Voor
deze repo blijft pnpm de betere keuze: veiligere defaults, een install die faalt (in plaats van enkel te waarschuwen)
bij een script dat niet beoordeeld is, en strikte isolatie in een monorepo. De volledige afweging staat bij
`,e.jsx(n.a,{href:"/docs/recepten-van-npm-naar-pnpm--documentatie#pnpm-of-een-veilige-npm-12",children:"pnpm of een veilige npm 12"}),"."]}),`
`,e.jsxs(n.p,{children:[`Je hoeft pnpm niet apart te installeren: Node bevat een hulpmiddel (corepack) dat automatisch de juiste versie van
pnpm gebruikt. Welke versie dat is, staat vast in de `,e.jsx(n.code,{children:"package.json"}),` van het project, zodat iedereen met dezelfde
versie werkt. Corepack zet je eenmalig aan met:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`corepack enable
`})}),`
`,e.jsxs(n.p,{children:["Beheer je Node met Volta (zie hierboven), dan werkt ",e.jsx(n.code,{children:"corepack enable"})," niet: Volta plaatst een eigen ",e.jsx(n.code,{children:"pnpm"}),`-shim
die corepack overschaduwt. Laat Volta dan zelf pnpm beheren (`,e.jsx(n.code,{children:"VOLTA_FEATURE_PNPM=1"}),`); het
`,e.jsx(n.a,{href:"/docs/recepten-van-npm-naar-pnpm--documentatie",children:"migratierecept"})," beschrijft de stappen bij stap 1."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"npm wordt geweigerd."})," Het veld ",e.jsx(n.code,{children:"devEngines"})," in ",e.jsx(n.code,{children:"package.json"}),` verklaart pnpm als package manager van dit project,
met `,e.jsx(n.code,{children:'onFail: "error"'}),`. npm 10.9 en hoger (de npm van Node 22) leest dat veld bij de start van elk commando en stopt
meteen met `,e.jsx(n.code,{children:"EBADDEVENGINES"}),", nog vóór het iets resolvet of schrijft. Dat geldt voor ",e.jsx(n.code,{children:"npm install"}),`, maar ook voor
`,e.jsx(n.code,{children:"npm run"}),", ",e.jsx(n.code,{children:"npm ci"})," en de rest: gebruik ",e.jsx(n.code,{children:"pnpm run"}),", ",e.jsx(n.code,{children:"pnpm exec"}),`, enzovoort. Zet ook je IDE op pnpm als package
manager, anders krijg je diezelfde foutmelding bij IDE-acties. Een oudere npm kent het veld niet en wordt pas
achteraf door de `,e.jsx(n.code,{children:"preinstall"}),"-guard tegengehouden, zie de aandachtspunten onder de cheatsheet."]}),`
`,e.jsxs(n.p,{children:["Bij een pnpm-upgrade zet je in ",e.jsx(n.code,{children:"devEngines.packageManager.version"})," exact dezelfde waarde als in ",e.jsx(n.code,{children:"packageManager"}),`
(versie mét hash). Wijkt die af, dan waarschuwt pnpm bij elke install dat `,e.jsx(n.code,{children:"packageManager"}),` genegeerd wordt, of weigert
het. Door dat veld schrijft pnpm ook zijn eigen integriteitsgegevens (pnpm en `,e.jsx(n.code,{children:"@pnpm/exe"}),`) als tweede document in
`,e.jsx(n.code,{children:"pnpm-lock.yaml"}),"; dat blok hoort gewoon mee in de commit."]}),`
`,e.jsxs(n.p,{children:[`Wil je een eigen project van npm naar pnpm migreren? Dat is een ander onderwerp dan deze repo; volg daarvoor het
recept `,e.jsx(n.a,{href:"/docs/recepten-van-npm-naar-pnpm--documentatie",children:"Van npm naar pnpm"}),"."]}),`
`,e.jsx(n.h3,{id:"pnpm-cheatsheet",children:"Pnpm Cheatsheet"}),`
`,e.jsx(n.p,{children:"Hieronder de cheatsheet voor wie van npm komt (enkel de commando's die anders werken):"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Taak"}),e.jsx("th",{scope:"col",children:"npm"}),e.jsx("th",{scope:"col",children:"pnpm"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Clean install (CI, reproduceerbaar)"}),e.jsx("td",{children:e.jsx("code",{children:"npm ci"})}),e.jsx("td",{children:e.jsx("code",{children:"pnpm install --frozen-lockfile"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Install (dev)"}),e.jsx("td",{children:e.jsx("code",{children:"npm install"})}),e.jsx("td",{children:e.jsx("code",{children:"pnpm install"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Script draaien"}),e.jsx("td",{children:e.jsx("code",{children:"npm run <script>"})}),e.jsx("td",{children:e.jsx("code",{children:"pnpm run <script>"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Script met argument"}),e.jsx("td",{children:e.jsx("code",{children:"npm run <script> -- <arg>"})}),e.jsx("td",{children:e.jsx("code",{children:"pnpm run <script> <arg>"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Binary uitvoeren"}),e.jsx("td",{children:e.jsx("code",{children:"npx <bin>"})}),e.jsx("td",{children:e.jsx("code",{children:"pnpm exec <bin>"})})]})]})]}),`
`,e.jsx(n.p,{children:"Drie aandachtspunten:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:['Bij "Script met argument" geeft pnpm de ',e.jsx(n.code,{children:"--"}),` letterlijk door als argument, npm stript die. Gebruik in pnpm dus
geen `,e.jsx(n.code,{children:"--"})," voor het argument, anders komt ",e.jsx(n.code,{children:"--"})," als eerste argument in het script terecht."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pnpm install"})," gebruikt in CI automatisch ",e.jsx(n.code,{children:"--frozen-lockfile"}),` (pnpm detecteert de CI-omgeving); lokaal mag de
lockfile wel wijzigen.`]}),`
`,e.jsxs(n.li,{children:["Een ",e.jsx(n.code,{children:"npm install"})," uit gewoonte stopt met npm 10.9 of hoger meteen op ",e.jsx(n.code,{children:"devEngines"}),` (zie hierboven), zonder iets te
schrijven. Een oudere npm, of een `,e.jsx(n.code,{children:"--force"}),", wordt pas achteraf geweigerd door de ",e.jsx(n.code,{children:"preinstall"}),`-guard
(`,e.jsx(n.code,{children:"resources/utils-build/only-allow-pnpm.mjs"}),"); npm heeft dan al een ",e.jsx(n.code,{children:"node_modules"})," en een ",e.jsx(n.code,{children:"package-lock.json"}),`
weggeschreven. Ruim die op met `,e.jsx(n.code,{children:"rm -rf node_modules package-lock.json"})," en installeer opnieuw met ",e.jsx(n.code,{children:"pnpm install"}),`.
`,e.jsx(n.code,{children:"package-lock.json"})," staat in ",e.jsx(n.code,{children:".gitignore"}),", zodat zo'n lockfile nooit per ongeluk mee gecommit raakt."]}),`
`]}),`
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
  │  ├─ structures
  │  │   -> @domg-wc/structures
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
als `,e.jsx(n.a,{href:"/docs/afnemen-artifacts--documentatie",children:"npm packages"}),"."]})]})}function a(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{a as default};
