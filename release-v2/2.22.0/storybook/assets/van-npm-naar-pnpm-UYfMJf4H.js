import{u as i,j as e,M as s}from"./iframe-ylVHDfb1.js";import"./preload-helper-PPVm8Dsz.js";function r(d){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Recepten/Van npm naar pnpm"}),`
`,e.jsx(n.h1,{id:"van-npm-naar-pnpm",children:"Van npm naar pnpm"}),`
`,e.jsxs(n.p,{children:["Korte handleiding om de frontend van je toepassing, bvb. in een Maven-project, van npm naar ",e.jsx(n.a,{href:"https://pnpm.io/",rel:"nofollow",children:"pnpm"}),`
om te zetten. Ze is gebaseerd op de migratie bij ARMOS Registraties. Reken op een halve dag, inclusief een groene
build.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"We raden pnpm aan."})," De ",e.jsx(n.code,{children:"@domg-wc/*"}),` packages werken technisch met elke package manager, maar kan je (nog) niet
migreren, zorg dan minstens voor een `,e.jsx(n.a,{href:"#pnpm-of-een-veilige-npm-12",children:"veilige npm 12"}),"."]}),`
`,e.jsx(n.h2,{id:"waarom",children:"Waarom"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Veiliger"}),": install scripts (",e.jsx(n.code,{children:"postinstall"}),` en co.) draaien enkel voor packages die je expliciet toelaat, en net
gepubliceerde versies worden standaard niet geïnstalleerd. Dat zijn net de twee manieren waarop recente
supply-chain-aanvallen binnenkwamen.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Strikter"}),": je code kan enkel packages importeren die in je eigen ",e.jsx(n.code,{children:"package.json"}),` staan. Er sluipen geen
verborgen (phantom) dependencies meer binnen.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sneller en kleiner"}),": packages staan één keer in een globale store en worden gelinkt, niet per project gekopieerd."]}),`
`]}),`
`,e.jsx(n.p,{children:"Voor de backend verandert er niets: Maven installeert Node en pnpm zelf, net zoals vroeger Node en npm."}),`
`,e.jsx(n.h2,{id:"pnpm-of-een-veilige-npm-12",children:"pnpm of een veilige npm 12"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Onze aanbeveling is pnpm."}),` npm 12 (juli 2026) heeft op security veel ingehaald: ook daar draaien install scripts
enkel voor packages in `,e.jsx(n.code,{children:"allowScripts"}),", en ",e.jsx(n.code,{children:"min-release-age"}),` houdt verse versies tegen. Maar in pnpm 11 staat die
bescherming standaard aan en faalt de install bij een script dat je nog niet beoordeeld hebt. In npm moet je ze zelf
aanzetten, en zonder `,e.jsx(n.code,{children:"strict-allow-scripts"})," waarschuwt npm enkel. Daarbovenop sluit de strikte ",e.jsx(n.code,{children:"node_modules"}),` van pnpm
phantom dependencies uit.`]}),`
`,e.jsxs(n.p,{children:["Kan je nog niet migreren, dan is een ",e.jsx(n.strong,{children:"veilige npm 12"}),` het minimum: npm 12 of hoger, een gecommitte
`,e.jsx(n.code,{children:"allowScripts"}),"-lijst in ",e.jsx(n.code,{children:"package.json"})," en deze instellingen in de ",e.jsx(n.code,{children:".npmrc"})," van je project:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`min-release-age=3
min-release-age-exclude[]=@domg-wc/*
min-release-age-exclude[]=@domg/*
strict-allow-scripts=true
`})}),`
`,e.jsxs(n.p,{children:["Keur een script goed met ",e.jsx(n.code,{children:"npm approve-scripts <package> --no-allow-scripts-pin"}),`. Zonder die vlag pint npm de versie,
en dan matcht de entry na de volgende upgrade niet meer.`]}),`
`,e.jsx(n.p,{children:"Zie een veilige npm 12 als tussenstap, niet als eindpunt: plan de migratie naar pnpm met de stappen hieronder."}),`
`,e.jsx(n.h2,{id:"stappen",children:"Stappen"}),`
`,e.jsx(n.h3,{id:"1-pnpm-beschikbaar-maken",children:"1. pnpm beschikbaar maken"}),`
`,e.jsxs(n.p,{children:["Vervang in ",e.jsx(n.code,{children:"package.json"})," het veld ",e.jsx(n.code,{children:'"packageManager": "npm@…"'})," door een vaste pnpm-versie, of voeg het toe:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`"packageManager": "pnpm@11.24.0"
`})}),`
`,e.jsx(n.p,{children:`Doe dit eerst: zolang daar npm staat, weigert corepack om pnpm te draaien. Een upgrade van pnpm wordt zo een bewuste
commit.`}),`
`,e.jsx(n.p,{children:"Lokaal haal je die versie op met corepack of met Volta. Kies er één per machine."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"corepack"}),": ",e.jsx(n.code,{children:"corepack enable"}),". corepack leest de versie uit ",e.jsx(n.code,{children:"packageManager"}),`. Vanaf Node 25 zit corepack niet
meer in Node; installeer het dan eerst eenmalig met `,e.jsx(n.code,{children:"npm install -g corepack"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Volta"}),": Volta negeert ",e.jsx(n.code,{children:"packageManager"})," en zet ",e.jsx(n.code,{children:"corepack"})," niet op je ",e.jsx(n.code,{children:"PATH"}),`. Laat Volta pnpm dan zelf beheren: zet
`,e.jsx(n.code,{children:"VOLTA_FEATURE_PNPM=1"})," in je shell-profiel en draai ",e.jsx(n.code,{children:"volta install pnpm@11.24.0"})," en ",e.jsx(n.code,{children:"volta pin pnpm@11.24.0"}),`. Hou
die versie gelijk aan `,e.jsx(n.code,{children:"packageManager"}),". Meer bij ",e.jsx(n.a,{href:"https://docs.volta.sh/advanced/pnpm",rel:"nofollow",children:"Volta - pnpm support"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"2-lockfile-omzetten",children:"2. Lockfile omzetten"}),`
`,e.jsxs(n.p,{children:["In de frontend-map (waar ",e.jsx(n.code,{children:"package.json"})," staat), met de bestaande ",e.jsx(n.code,{children:"package-lock.json"})," nog aanwezig:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`pnpm import
rm -rf node_modules package-lock.json
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"pnpm import"})," maakt een ",e.jsx(n.code,{children:"pnpm-lock.yaml"})," met ",e.jsx(n.strong,{children:"dezelfde versies"}),` als je npm-lockfile. Zo verandert de migratie zelf
niets aan wat er geïnstalleerd wordt, en dat houdt het debuggen achteraf eenvoudig.`]}),`
`,e.jsx(n.h3,{id:"3-pnpm-workspaceyaml-toevoegen",children:"3. pnpm-workspace.yaml toevoegen"}),`
`,e.jsxs(n.p,{children:["In pnpm 11 staat de configuratie in ",e.jsx(n.a,{href:"https://pnpm.io/11.x/pnpm-workspace_yaml",rel:"nofollow",children:e.jsx(n.code,{children:"pnpm-workspace.yaml"})}),` naast
`,e.jsx(n.code,{children:"package.json"}),", ook als je geen monorepo hebt. Enkel registry en token blijven in ",e.jsx(n.code,{children:"~/.npmrc"}),`, dus je
`,e.jsx(n.a,{href:"/docs/recepten-artifactory-configuratie--documentatie",children:"Artifactory configuratie"}),` werkt ongewijzigd. Andere
`,e.jsx(n.code,{children:".npmrc"}),"-instellingen negeert pnpm."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"pnpm-workspace.yaml"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-yaml",children:`# Packages die tijdens install een script mogen draaien (vervangt allowScripts van npm)
allowBuilds:
  '@swc/core': true
  cypress: true

# Vervangt overrides uit package.json
overrides:
  lit: 3.3.3
  color-parse>color-name: 2.0.0 # geneste override: enkel color-name onder color-parse

# Uitzonderingen op de standaard wachttijd van 24 uur na publicatie
minimumReleaseAgeExclude:
  - '@domg-wc/*'
  - '@domg/*'
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"allowBuilds"})," hoef je niet vooraf te vullen. Bij de eerste ",e.jsx(n.code,{children:"pnpm install"})," stopt pnpm met ",e.jsx(n.code,{children:"ERR_PNPM_IGNORED_BUILDS"}),`
en zet het de betrokken packages met een placeholder in dit bestand. Vul per package `,e.jsx(n.code,{children:"true"})," of ",e.jsx(n.code,{children:"false"}),` in en
installeer opnieuw (`,e.jsx(n.code,{children:"pnpm approve-builds"})," doet hetzelfde interactief). Cypress moet op ",e.jsx(n.code,{children:"true"}),`, anders ontbreekt de
Cypress binary. esbuild, core-js en vue-demi werken ook op `,e.jsx(n.code,{children:"false"}),"; die ",e.jsx(n.code,{children:"false"}),` blijft staan als bewijs dat je het
package beoordeeld hebt.`]}),`
`,e.jsxs(n.li,{children:["Zonder de uitzondering voor ",e.jsx(n.code,{children:"@domg-wc/*"}),` kan je een nieuwe Flux-release pas 24 uur na publicatie installeren.
`,e.jsx(n.code,{children:"@domg-wc/components"})," en ",e.jsx(n.code,{children:"@domg-wc/styles"})," hebben ",e.jsx(n.code,{children:"@domg/govflanders-style"}),` als dependency. Brengt een release een
nieuwe versie van die package mee, dan geldt de wachttijd daar ook voor, vandaar `,e.jsx(n.code,{children:"@domg/*"}),`. Publiceert je team zelf
packages onder een eigen scope, zet die scope er dan ook bij.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"4-packagejson-opkuisen",children:"4. package.json opkuisen"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Verwijder ",e.jsx(n.code,{children:"overrides"})," en ",e.jsx(n.code,{children:"allowScripts"}),": die staan nu in ",e.jsx(n.code,{children:"pnpm-workspace.yaml"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Vervang ",e.jsx(n.code,{children:"npm"})," door ",e.jsx(n.code,{children:"pnpm"})," in de ",e.jsx(n.code,{children:"scripts"}),`, ook waar het genest in een ander commando staat (bvb. in
`,e.jsx(n.code,{children:"start-server-and-test"}),"). Een achtergebleven ",e.jsx(n.code,{children:"npm install"})," of ",e.jsx(n.code,{children:"npx"})," draait alsnog npm."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"npm run x -- --flag"})," wordt ",e.jsx(n.code,{children:"pnpm run x --flag"}),": pnpm geeft een ",e.jsx(n.code,{children:"--"})," letterlijk door aan je script."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"npx x"})," wordt ",e.jsx(n.code,{children:"pnpm exec x"})," voor een geïnstalleerde binary, of ",e.jsx(n.code,{children:"pnpm dlx x"}),` voor een package dat je niet
installeerde.`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Zet ",e.jsx(n.code,{children:"package-lock.json"})," in ",e.jsx(n.code,{children:".gitignore"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Optioneel: laat npm meteen weigeren met ",e.jsx(n.code,{children:"devEngines"}),`. npm 10.9 en hoger stopt dan bij elk commando met
`,e.jsx(n.code,{children:"EBADDEVENGINES"}),". Zet in ",e.jsx(n.code,{children:"version"})," exact dezelfde waarde als in ",e.jsx(n.code,{children:"packageManager"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`"devEngines": {
    "packageManager": { "name": "pnpm", "version": "11.24.0", "onFail": "error" }
}
`})}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"5-maven-frontend-maven-plugin",children:"5. Maven (frontend-maven-plugin)"}),`
`,e.jsxs(n.p,{children:["In de plugin-configuratie wordt elke ",e.jsx(n.code,{children:"npm"})," een ",e.jsx(n.code,{children:"pnpm"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<npmVersion>"})," wordt ",e.jsx(n.code,{children:"<pnpmVersion>"}),", met dezelfde versie als in ",e.jsx(n.code,{children:"packageManager"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<npmDownloadRoot>${acd.repository.npm.dist.url}</npmDownloadRoot>"}),` wordt
`,e.jsx(n.code,{children:"<pnpmDownloadRoot>${acd.repository.pnpm.dist.url}</pnpmDownloadRoot>"}),"."]}),`
`,e.jsxs(n.li,{children:["Goal ",e.jsx(n.code,{children:"install-node-and-npm"})," wordt ",e.jsx(n.code,{children:"install-node-and-pnpm"}),"."]}),`
`,e.jsxs(n.li,{children:["Goal ",e.jsx(n.code,{children:"npm"})," wordt ",e.jsx(n.code,{children:"pnpm"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"<arguments>"})," (",e.jsx(n.code,{children:"install"}),", ",e.jsx(n.code,{children:"run build"}),", …) blijven hetzelfde."]}),`
`,e.jsx(n.h3,{id:"6-jenkins",children:"6. Jenkins"}),`
`,e.jsx(n.p,{children:"Draait je pipeline ook npm-commando's buiten Maven om, vervang die dan:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-groovy",children:`// was
sh 'npm ci'

// wordt (--frozen-lockfile: de lockfile mag niet veranderen)
sh 'pnpm install --frozen-lockfile'
`})}),`
`,e.jsxs(n.p,{children:["Een ",e.jsx(n.code,{children:"--maxsockets 5"})," wordt ",e.jsx(n.code,{children:"--network-concurrency 5"}),`. Scan je de lockfile met Trivy, pas dan het pad aan naar
`,e.jsx(n.code,{children:"pnpm-lock.yaml"}),"."]}),`
`,e.jsxs(n.p,{children:[`Staat pnpm niet op je build-agent, installeer het dan met npm. corepack kan pnpm niet ophalen via een Artifactory met
authenticatie (de tarball geeft 403), npm gebruikt je `,e.jsx(n.code,{children:".npmrc"})," wel. Lees de versie uit ",e.jsx(n.code,{children:"packageManager"}),`, dan blijft
er één bron van waarheid:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`PNPM_VERSION="$(node -p "require('./package.json').packageManager.replace(/^pnpm@/, '').split('+')[0]")"
npm install -g "pnpm@\${PNPM_VERSION}"
`})}),`
`,e.jsx(n.h3,{id:"7-builden-en-fixen",children:"7. Builden en fixen"}),`
`,e.jsxs(n.p,{children:["Draai de volledige build (",e.jsx(n.code,{children:"mvn verify"}),") en los op wat breekt. Wat de afnemer tegenkwam:"]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Symptoom"}),e.jsx("th",{scope:"col",children:"Oorzaak en oplossing"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"Cannot find module 'x'"})," (webpack: ",e.jsx("code",{children:"Module not found"}),")"]}),e.jsxs("td",{children:[e.jsx("code",{children:"x"})," werd gebruikt zonder in ",e.jsx("code",{children:"package.json"}),` te staan; npm installeerde het
toevallig mee. Voeg het expliciet toe met `,e.jsx("code",{children:"pnpm add x"}),". ",e.jsx("code",{children:"pnpm why x"}),` toont via welke
dependency het tot nu toe binnenkwam.`]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Install weigert een versie die net gepubliceerd is"}),e.jsxs("td",{children:[`Veiligheidsfeature van pnpm. Wacht een dag, of zet het package onder
`,e.jsx("code",{children:"minimumReleaseAgeExclude"})," (stap 3)."]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:["Jest: ",e.jsx("code",{children:"SyntaxError: Cannot use import statement outside a module"})]}),e.jsxs("td",{children:["pnpm zet packages onder ",e.jsx("code",{children:"node_modules/.pnpm/"}),". Neem ",e.jsx("code",{children:"\\.pnpm/"}),` op in de
uitzondering van `,e.jsx("code",{children:"transformIgnorePatterns"}),", zie hieronder."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Native binaries (SWC, …) ontbreken in een Linux-container"}),e.jsx("td",{children:"Laat pnpm de varianten voor glibc én musl installeren, zie hieronder."})]})]})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"jest.config.mjs"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`transformIgnorePatterns: ['/node_modules/(?!\\\\.pnpm/|(?:lit|lit-html|@lit)/)'],
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"pnpm-workspace.yaml"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-yaml",children:`# Linux-containers (glibc én musl) naast je eigen platform
supportedArchitectures:
  os: [current]
  cpu: [current]
  libc: [glibc, musl]
`})}),`
`,e.jsx(n.h2,{id:"spiekbriefje",children:"Spiekbriefje"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"npm"}),e.jsx("th",{scope:"col",children:"pnpm"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"npm install"})}),e.jsx("td",{children:e.jsx("code",{children:"pnpm install"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"npm ci"})}),e.jsx("td",{children:e.jsx("code",{children:"pnpm install --frozen-lockfile"})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"npm install x"})," / ",e.jsx("code",{children:"npm install -D x"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"pnpm add x"})," / ",e.jsx("code",{children:"pnpm add -D x"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"npm uninstall x"})}),e.jsx("td",{children:e.jsx("code",{children:"pnpm remove x"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"npm run build"})}),e.jsxs("td",{children:[e.jsx("code",{children:"pnpm run build"})," (of ",e.jsx("code",{children:"pnpm build"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"npm run x -- --flag"})}),e.jsx("td",{children:e.jsx("code",{children:"pnpm run x --flag"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"npx x"})}),e.jsxs("td",{children:[e.jsx("code",{children:"pnpm exec x"})," / ",e.jsx("code",{children:"pnpm dlx x"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"npm outdated"})}),e.jsx("td",{children:e.jsx("code",{children:"pnpm outdated"})})]})]})]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://pnpm.io/11.x/settings/build",rel:"nofollow",children:"pnpm - Build-instellingen"}),": ",e.jsx(n.code,{children:"allowBuilds"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://pnpm.io/11.x/settings/dependency-resolution",rel:"nofollow",children:"pnpm - Dependency-resolutie"}),": ",e.jsx(n.code,{children:"minimumReleaseAge"}),`,
`,e.jsx(n.code,{children:"overrides"})]}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://pnpm.io/11.x/cli/import",rel:"nofollow",children:["pnpm - ",e.jsx(n.code,{children:"pnpm import"})]})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://apostrophecms.com/docs/guide/npm-v12-install-scripts.html",rel:"nofollow",children:"npm v12 en install-scripts"}),": ",e.jsx(n.code,{children:"allowScripts"}),`,
`,e.jsx(n.code,{children:"approve-scripts"}),", ",e.jsx(n.code,{children:"strict-allow-scripts"})]}),`
`]})]})}function o(d={}){const{wrapper:n}={...i(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(r,{...d})}):r(d)}export{o as default};
