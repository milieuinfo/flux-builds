import{u as s,j as e,M as l,U as i}from"./iframe-BoAZAq4i.js";import"./preload-helper-PPVm8Dsz.js";function r(d){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Recepten/Van npm naar pnpm"}),`
`,e.jsx(n.h1,{id:"van-npm-naar-pnpm",children:"Van npm naar pnpm"}),`
`,e.jsxs(n.p,{children:["Dit recept is voor afnemers die hun eigen toepassing van npm naar ",e.jsx(n.a,{href:"https://pnpm.io/",rel:"nofollow",children:"pnpm"}),` willen migreren. Het
bundelt wat we zelf geleerd hebben bij de migratie van de flux-web-components repo: de keuzes, de commando's en de
valkuilen. Hoe pnpm binnen die repo zelf gebruikt wordt, is een ander onderwerp en staat bij
`,e.jsx(n.a,{href:"/docs/bijdragen-opzet-structuur--documentatie",children:"Bijdragen - Opzet & Structuur"}),"."]}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"@domg-wc/*"}),` packages zelf zijn package-manager-agnostisch: ze afnemen werkt evengoed met npm. De migratie is een
keuze voor je eigen project, en we bevelen ze aan.`]}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#waarom-pnpm",children:"Waarom pnpm"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#wat-verandert-er",children:"Wat verandert er"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#stappenplan",children:"Stappenplan"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#1-pnpm-beschikbaar-maken",children:"1. pnpm beschikbaar maken"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#2-registry-en-authenticatie-npmrc-blijft",children:"2. Registry en authenticatie: .npmrc blijft"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#3-pnpm-workspaceyaml-aanmaken",children:"3. pnpm-workspace.yaml aanmaken"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#4-lockfile-omzetten-en-installeren",children:"4. Lockfile omzetten en installeren"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#5-scripts-in-packagejson-aanpassen",children:"5. Scripts in package.json aanpassen"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#6-phantom-dependencies-oplossen",children:"6. Phantom dependencies oplossen"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#7-ci-docker-en-release",children:"7. CI, Docker en release"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#8-vangnet-tegen-een-npm-install-uit-gewoonte",children:"8. Vangnet tegen een npm install uit gewoonte"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#cheatsheet",children:"Cheatsheet"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#referenties",children:"Referenties"})}),`
`]}),`
`,e.jsx(n.h2,{id:"waarom-pnpm",children:"Waarom pnpm"}),`
`,e.jsxs(n.p,{children:["De reden is ",e.jsx(n.strong,{children:"supply-chain security"}),", niet snelheid (al krijg je die er gratis bij)."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["npm voert bij ",e.jsx(n.code,{children:"npm install"})," de lifecycle-scripts (",e.jsx(n.code,{children:"preinstall"}),"/",e.jsx(n.code,{children:"install"}),"/",e.jsx(n.code,{children:"postinstall"}),`) van élke dependency uit, ook
de transitieve. Een gecompromitteerde package voert zo code uit op je machine en in je CI, nog voor je één regel
van je eigen code gedraaid hebt.`]}),`
`,e.jsxs(n.li,{children:["pnpm draait die scripts niet, tenzij je een package expliciet toelaat (",e.jsx(n.code,{children:"allowBuilds"}),"). Met ",e.jsx(n.code,{children:"strictDepBuilds"}),` faalt
de install zodra er een script opduikt dat je nog niet beoordeeld hebt.`]}),`
`,e.jsxs(n.li,{children:["pnpm 11 wacht standaard 24 uur (",e.jsx(n.code,{children:"minimumReleaseAge"}),`) voor het een pas gepubliceerde versie installeert. De meeste
gekaapte versies worden binnen die tijd van de registry gehaald, dus je installeert ze nooit.`]}),`
`,e.jsxs(n.li,{children:["De ",e.jsx(n.code,{children:"node_modules"})," van pnpm is strikt: je kan enkel importeren wat je zelf in ",e.jsx(n.code,{children:"package.json"}),` declareert. Verborgen
(phantom) dependencies, die bij npm toevallig werken, komen aan het licht.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["Meer achtergrond bij ",e.jsx(n.a,{href:"/docs/afnemen-aan-de-slag--documentatie",children:"Afnemen - Aan De Slag"}),"."]}),`
`,e.jsx(n.h2,{id:"wat-verandert-er",children:"Wat verandert er"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Onderwerp"}),e.jsx("th",{scope:"col",children:"npm"}),e.jsx("th",{scope:"col",children:"pnpm"}),e.jsx("th",{scope:"col",children:"Uitleg"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Lockfile"}),e.jsx("td",{children:e.jsx("code",{children:"package-lock.json"})}),e.jsx("td",{children:e.jsx("code",{children:"pnpm-lock.yaml"})}),e.jsx("td",{children:e.jsx(n.a,{href:"#4-lockfile-omzetten-en-installeren",children:"stap 4"})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:["Layout van ",e.jsx("code",{children:"node_modules"})]}),e.jsx("td",{children:"plat: alles gehoist naar de root"}),e.jsxs("td",{children:["enkel je directe dependencies in de root, de rest als symlinks naar ",e.jsx("code",{children:"node_modules/.pnpm"})]}),e.jsx("td",{children:e.jsx(n.a,{href:"#6-phantom-dependencies-oplossen",children:"stap 6"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Lifecycle-scripts van dependencies"}),e.jsx("td",{children:"draaien automatisch"}),e.jsxs("td",{children:["enkel wat in ",e.jsx("code",{children:"allowBuilds"})," op ",e.jsx("code",{children:"true"})," staat"]}),e.jsx("td",{children:e.jsx(n.a,{href:"#4-lockfile-omzetten-en-installeren",children:"stap 4"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Configuratie"}),e.jsxs("td",{children:["alles in ",e.jsx("code",{children:".npmrc"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"pnpm-workspace.yaml"}),"; enkel registry en auth blijven in ",e.jsx("code",{children:".npmrc"})]}),e.jsx("td",{children:e.jsx(n.a,{href:"#3-pnpm-workspaceyaml-aanmaken",children:"stap 3"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Overrides"}),e.jsxs("td",{children:[e.jsx("code",{children:"overrides"})," in ",e.jsx("code",{children:"package.json"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"overrides"})," in ",e.jsx("code",{children:"pnpm-workspace.yaml"}),", andere syntax voor geneste overrides"]}),e.jsx("td",{children:e.jsx(n.a,{href:"#3-pnpm-workspaceyaml-aanmaken",children:"stap 3"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Versie van de package manager"}),e.jsx("td",{children:"wat er op de machine staat"}),e.jsxs("td",{children:["gepind in ",e.jsx("code",{children:"package.json"})," (",e.jsx("code",{children:"packageManager"}),"), corepack haalt ze op"]}),e.jsx("td",{children:e.jsx(n.a,{href:"#1-pnpm-beschikbaar-maken",children:"stap 1"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Argumenten aan een script"}),e.jsx("td",{children:e.jsx("code",{children:"npm run x -- --flag"})}),e.jsx("td",{children:e.jsx("code",{children:"pnpm run x --flag"})}),e.jsx("td",{children:e.jsx(n.a,{href:"#5-scripts-in-packagejson-aanpassen",children:"stap 5"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Binary uitvoeren"}),e.jsx("td",{children:e.jsx("code",{children:"npx"})}),e.jsxs("td",{children:[e.jsx("code",{children:"pnpm exec"})," (lokaal geïnstalleerd) of ",e.jsx("code",{children:"pnpm dlx"})," (eenmalig ophalen)"]}),e.jsx("td",{children:e.jsx(n.a,{href:"#5-scripts-in-packagejson-aanpassen",children:"stap 5"})})]})]})]}),`
`,e.jsx(n.h2,{id:"stappenplan",children:"Stappenplan"}),`
`,e.jsx(n.h3,{id:"1-pnpm-beschikbaar-maken",children:"1. pnpm beschikbaar maken"}),`
`,e.jsxs(n.p,{children:["Installeer pnpm niet globaal. Pin de versie in ",e.jsx(n.code,{children:"package.json"})," (het ",e.jsx(n.code,{children:"packageManager"}),` veld), zodat iedereen en de CI
met exact dezelfde versie werken. Die gepinde versie haal je op met corepack (zit in Node) of, als je dat al
gebruikt, met Volta. De twee sluiten elkaar uit: kies er één per machine.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Met corepack."})," ",e.jsx(n.a,{href:"https://github.com/nodejs/corepack",rel:"nofollow",children:"corepack"}),` haalt de gepinde package manager bij het eerste
gebruik zelf op.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`corepack enable
corepack use pnpm@11.15.1
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"corepack use"})," schrijft het ",e.jsx(n.code,{children:"packageManager"}),` veld, inclusief een integriteitshash, en draait meteen een
`,e.jsx(n.code,{children:"pnpm install"}),":"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"package.json"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`"packageManager": "pnpm@11.15.1+sha512.81350b07e53c9538a02f1f2303b4290fa2d7be04e56e2a970c4cc4b417dc761de196..."
`})}),`
`,e.jsxs(n.p,{children:["Pin een concrete versie, geen range. Een upgrade van pnpm is dan een bewuste commit: opnieuw ",e.jsx(n.code,{children:"corepack use"}),` met de
nieuwe versie, en dezelfde waarde in `,e.jsx(n.code,{children:"devEngines"}),` als je dat vangnet uit
`,e.jsx(n.a,{href:"#8-vangnet-tegen-een-npm-install-uit-gewoonte",children:"stap 8"}),` gebruikt. Corepack zit in Node tot en met versie 24; vanaf
Node 25 installeer je het eenmalig apart met `,e.jsx(n.code,{children:"npm install -g corepack"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Met Volta."})," Veel collega's beheren Node met ",e.jsx(n.a,{href:"https://volta.sh/",rel:"nofollow",children:"Volta"}),`, en Volta kan ook pnpm beheren. Volta en
corepack werken echter niet samen: Volta plaatst eigen shims (ook voor `,e.jsx(n.code,{children:"pnpm"}),"), negeert het ",e.jsx(n.code,{children:"packageManager"}),` veld en
zet `,e.jsx(n.code,{children:"corepack"})," zelfs niet op je ",e.jsx(n.code,{children:"PATH"}),". Gebruik je Volta, laat het dan zelf pnpm beheren in plaats van corepack:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`export VOLTA_FEATURE_PNPM=1
volta install pnpm@11.15.1
volta pin pnpm@11.15.1
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"volta pin"})," schrijft de versie in ",e.jsx(n.code,{children:"package.json"})," onder ",e.jsx(n.code,{children:"volta"}),". Hou ze gelijk aan ",e.jsx(n.code,{children:"packageManager"}),`, zodat collega's
zonder Volta via corepack, en de CI via npm (`,e.jsx(n.a,{href:"#7-ci-docker-en-release",children:"stap 7"}),`), net dezelfde pnpm krijgen. Meer bij
`,e.jsx(n.a,{href:"https://docs.volta.sh/advanced/pnpm",rel:"nofollow",children:"Volta - pnpm support"}),"."]}),`
`,e.jsx(n.h3,{id:"2-registry-en-authenticatie-npmrc-blijft",children:"2. Registry en authenticatie: .npmrc blijft"}),`
`,e.jsxs(n.p,{children:["pnpm leest enkel de registry- en auth-instellingen uit ",e.jsx(n.code,{children:".npmrc"}),`. De
`,e.jsx(n.a,{href:"/docs/recepten-artifactory-configuratie--documentatie",children:"Artifactory configuratie"})," in je ",e.jsx(n.code,{children:"~/.npmrc"}),` blijft dus
ongewijzigd werken:`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"~/.npmrc"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`registry=https://repo.omgeving.vlaanderen.be/artifactory/api/npm/acd-npm/
//repo.omgeving.vlaanderen.be/artifactory/api/npm/acd-npm/:_authToken=xXxyYyzZz
`})}),`
`,e.jsxs(n.p,{children:["Alle andere instellingen in een ",e.jsx(n.code,{children:".npmrc"})," (",e.jsx(n.code,{children:"save-exact"}),", ",e.jsx(n.code,{children:"engine-strict"}),", ",e.jsx(n.code,{children:"legacy-peer-deps"}),`, ...) negeert pnpm.
Wat je nog nodig hebt, verhuist in camelCase naar `,e.jsx(n.code,{children:"pnpm-workspace.yaml"})," (bvb. ",e.jsx(n.code,{children:"saveExact: true"}),`); de rest gooi je
weg.`]}),`
`,e.jsx(n.h3,{id:"3-pnpm-workspaceyaml-aanmaken",children:"3. pnpm-workspace.yaml aanmaken"}),`
`,e.jsxs(n.p,{children:["De configuratie van pnpm staat in ",e.jsx(n.a,{href:"https://pnpm.io/11.x/pnpm-workspace_yaml",rel:"nofollow",children:e.jsx(n.code,{children:"pnpm-workspace.yaml"})}),` in de root van je
project, ook als je geen workspace (monorepo) hebt. Dit is het bestand waarmee onze consumer-app de gepubliceerde
packages afneemt:`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"pnpm-workspace.yaml"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-yaml",children:`strictDepBuilds: true

minimumReleaseAge: 1440
minimumReleaseAgeExclude:
  - '@domg-wc/*'

allowBuilds:
  cypress: true
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"strictDepBuilds"})," - de install faalt zodra een dependency een build-script heeft dat nog niet in ",e.jsx(n.code,{children:"allowBuilds"}),`
staat. In pnpm 11 staat dit standaard aan; we zetten het expliciet zodat het ook zo blijft als de default ooit
verandert.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"minimumReleaseAge"}),` - installeer geen versies jonger dan 1440 minuten (24 uur), ook niet transitief. In pnpm 11 is
dit de default; expliciet zetten documenteert de keuze.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"minimumReleaseAgeExclude"})," - uitzonderingen op die wachttijd, zie de opmerking hieronder."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"allowBuilds"})," - per package of het zijn build-scripts mag draaien. Enkel ",e.jsx(n.code,{children:"true"}),` mag draaien, alles wat er niet
in staat is niet beoordeeld en blokkeert de install (zie `,e.jsx(n.a,{href:"#4-lockfile-omzetten-en-installeren",children:"stap 4"}),")."]}),`
`]}),`
`,e.jsx(i,{type:"warning",children:`
  Door <code>minimumReleaseAge</code> kan je een versie van <code>@domg-wc/*</code> pas 24 uur na de release
  installeren. Wil je een verse release meteen kunnen afnemen (bvb. een fix die je zelf aangevraagd hebt), zet dan
  <code>@domg-wc/*</code> in <code>minimumReleaseAgeExclude</code> zoals hierboven. Hetzelfde geldt voor de packages
  van je eigen organisatie die je zelf publiceert.
`}),`
`,e.jsxs(n.p,{children:["Heb je ",e.jsx(n.code,{children:"overrides"})," in je ",e.jsx(n.code,{children:"package.json"}),"? Die verhuizen naar ",e.jsx(n.code,{children:"pnpm-workspace.yaml"}),`. Een geneste override (enkel de
dependency van één bepaalde parent overschrijven) schrijf je bij pnpm met een `,e.jsx(n.code,{children:">"}),`-selector in plaats van een genest
object. Zo werd dat bij ons:`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"package.json"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`"overrides": {
    "color-parse": {
        "color-name": "2.0.0"
    },
    "validator": "13.15.35"
}
`})}),`
`,e.jsx(n.p,{children:"wordt"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"pnpm-workspace.yaml"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-yaml",children:`overrides:
  color-parse>color-name: 2.0.0
  validator: 13.15.35
`})}),`
`,e.jsx(n.h3,{id:"4-lockfile-omzetten-en-installeren",children:"4. Lockfile omzetten en installeren"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"pnpm import"})," maakt een ",e.jsx(n.code,{children:"pnpm-lock.yaml"})," op basis van je bestaande ",e.jsx(n.code,{children:"package-lock.json"}),`, met dezelfde versies. Zo
verandert de migratie zelf niets aan welke versies er geïnstalleerd worden, wat het debuggen achteraf eenvoudig
houdt. Nadien ruim je de npm-artefacten op en installeer je opnieuw:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`pnpm import
rm -rf node_modules package-lock.json
pnpm install
`})}),`
`,e.jsx(n.p,{children:"Bij die eerste install stopt pnpm met een melding als deze:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`[ERR_PNPM_IGNORED_BUILDS] Ignored build scripts: cypress@15.4.0, esbuild@0.25.0

Run "pnpm approve-builds" to pick which dependencies should be allowed to run scripts.
`})}),`
`,e.jsxs(n.p,{children:["en zet het de packages met een placeholder in je ",e.jsx(n.code,{children:"pnpm-workspace.yaml"}),":"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"pnpm-workspace.yaml"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-yaml",children:`allowBuilds:
  cypress: set this to true or false
  esbuild: set this to true or false
`})}),`
`,e.jsxs(n.p,{children:["Beoordeel ze één voor één: wat doet het script, en werkt de package zonder? Vul ",e.jsx(n.code,{children:"true"})," of ",e.jsx(n.code,{children:"false"}),` in en draai
`,e.jsx(n.code,{children:"pnpm install"})," opnieuw (",e.jsx(n.code,{children:"pnpm approve-builds"})," doet hetzelfde interactief). Een ",e.jsx(n.code,{children:"false"}),` blijft staan als documentatie
dat de package beoordeeld is.`]}),`
`,e.jsx(i,{type:"info",children:`
  Zet <code>cypress: true</code>. Het postinstall-script downloadt de Cypress binary; blokkeer je het, dan start
  Cypress niet en zie je "The cypress npm package is installed, but the Cypress binary is missing".
  Hetzelfde geldt voor <code>playwright-webkit</code> als je die gebruikt: het install-script downloadt de
  WebKit-browser. Op <code>false</code> ontbreekt die browser op een verse machine, en dat merk je pas bij de eerste
  run met <code>--browser webkit</code>. In CI is het script een no-op met
  <code>PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1</code>.
`}),`
`,e.jsxs(n.p,{children:["De andere die wij tegenkwamen, konden op ",e.jsx(n.code,{children:"false"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"esbuild: false"}),` - het script vervangt de JavaScript-wrapper door de native binary, een optimalisatie; esbuild werkt
zonder.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"core-js: false"}),", ",e.jsx(n.code,{children:"msw: false"}),", ",e.jsx(n.code,{children:"@parcel/watcher: false"}),", ",e.jsx(n.code,{children:"vue-demi: false"}),", ",e.jsx(n.code,{children:"@ffmpeg-installer/*: false"}),` -
funding-berichten, platform-switches of prebuilds met een fallback. Alle werken zonder.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["Commit ",e.jsx(n.code,{children:"pnpm-lock.yaml"})," en ",e.jsx(n.code,{children:"pnpm-workspace.yaml"})," samen met de wijzigingen aan ",e.jsx(n.code,{children:"package.json"}),"."]}),`
`,e.jsx(n.h3,{id:"5-scripts-in-packagejson-aanpassen",children:"5. Scripts in package.json aanpassen"}),`
`,e.jsxs(n.p,{children:["Ga je ",e.jsx(n.code,{children:"scripts"})," na, ook de commando's die genest in een script zitten (bvb. in ",e.jsx(n.code,{children:"start-server-and-test"}),`). Dit is
belangrijk: blijft er ergens een `,e.jsx(n.code,{children:"npm install"})," of ",e.jsx(n.code,{children:"npx"}),` staan, dan draait dat script alsnog npm, met een gehoiste
`,e.jsx(n.code,{children:"node_modules"}),` en net de supply-chain-risico's die je wou vermijden. Een volledig overzicht van de
commando-equivalenten staat in de `,e.jsx(n.a,{href:"#cheatsheet",children:"Cheatsheet"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"npm run x"})," wordt ",e.jsx(n.code,{children:"pnpm run x"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"npm run x -- --flag"})," wordt ",e.jsx(n.code,{children:"pnpm run x --flag"}),`. pnpm geeft alles na de scriptnaam letterlijk door, dus ook een
`,e.jsx(n.code,{children:"--"}),"; die komt dan als eerste argument in je script terecht."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"npx bin"})," voor een lokaal geïnstalleerde binary wordt ",e.jsx(n.code,{children:"pnpm exec bin"}),". ",e.jsx(n.code,{children:"npx"}),` voor een package dat je niet
geïnstalleerd hebt wordt `,e.jsx(n.code,{children:"pnpm dlx"}),"."]}),`
`,e.jsxs(n.li,{children:[`Draai je een binary vanuit een submap die zelf de werkmap moet zijn (bvb. een Cypress-configuratie in een
`,e.jsx(n.code,{children:"cypress/"}),"-map zonder eigen ",e.jsx(n.code,{children:"package.json"}),")? Roep de binary dan rechtstreeks aan via ",e.jsx(n.code,{children:"node_modules/.bin"}),`:
`,e.jsx(n.code,{children:"cd ./cypress && ../node_modules/.bin/cypress run"}),". Zo draait ze gegarandeerd met de submap als werkmap."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"npm pkg set"})," wordt ",e.jsx(n.code,{children:"pnpm pkg set"}),`, maar de syntax voor een scoped package verschilt per pnpm-versie. pnpm 10 volgt
npm: `,e.jsx(n.code,{children:'pnpm pkg set "dependencies.@domg-wc/components=2.19.0"'}),` werkt, en bracket-notatie met quotes maakt een key mét
de quotes erin. pnpm 11 heeft een eigen parser: `,e.jsx(n.code,{children:`pnpm pkg set "dependencies['@domg-wc/components']=2.19.0"`}),` werkt,
en de `,e.jsx(n.code,{children:"@"})," in een dot-pad geeft ",e.jsx(n.code,{children:"ERR_PNPM_UNEXPECTED_TOKEN_IN_PROPERTY_PATH"}),`. Geen van beide geeft door aan npm.
Hangt een script van die syntax af, pin dan je pnpm-versie of bewerk `,e.jsx(n.code,{children:"package.json"}),` met een klein node-script; zo
doen wij het in de verify-stage.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"6-phantom-dependencies-oplossen",children:"6. Phantom dependencies oplossen"}),`
`,e.jsxs(n.p,{children:["Na de migratie kan een build of test falen met ",e.jsx(n.code,{children:"Cannot find module 'x'"})," (Node, TypeScript) of ",e.jsx(n.code,{children:"Module not found"}),`
(webpack), voor een package dat onder npm gewoon werkte. Dat is een phantom dependency: je code gebruikt `,e.jsx(n.code,{children:"x"}),`, maar
`,e.jsx(n.code,{children:"x"})," staat niet in je ",e.jsx(n.code,{children:"package.json"}),` en kwam enkel binnen omdat een andere dependency het nodig had en npm het naar
de root hoiste. Onder pnpm staat `,e.jsx(n.code,{children:"x"})," enkel nog in de ",e.jsx(n.a,{href:"https://pnpm.io/11.x/symlinked-node-modules-structure",rel:"nofollow",children:"virtual store"}),", onbereikbaar voor je eigen code."]}),`
`,e.jsxs(n.p,{children:["De juiste oplossing is de dependency declareren: ",e.jsx(n.code,{children:"pnpm add x"})," (of ",e.jsx(n.code,{children:"pnpm add -D x"}),"). Met ",e.jsx(n.code,{children:"pnpm why x"}),` zie je via
welke dependency het package tot nu toe binnenkwam.`]}),`
`,e.jsxs(n.p,{children:["Let op: niet elke ",e.jsx(n.code,{children:"Cannot find module"}),` is een phantom dependency om toe te voegen. Soms wijst hij op een package
die er niet meer hoort (verwijderd of overbodig); dan verwijder je de import in plaats van de dependency te
declareren.`]}),`
`,e.jsxs(n.p,{children:[`Zit de phantom dependency in een tool die je niet kan aanpassen, dan biedt pnpm noodremmen die de strikte
`,e.jsx(n.code,{children:"node_modules"})," versoepelen (",e.jsx(n.code,{children:"publicHoistPattern"}),", ",e.jsx(n.code,{children:"shamefullyHoist"}),", ",e.jsx(n.code,{children:"nodeLinker: hoisted"}),`), in oplopende volgorde
van botheid; zie de `,e.jsx(n.a,{href:"https://pnpm.io/11.x/settings/node-modules",rel:"nofollow",children:"node_modules-instellingen"}),`. Elke stap levert strengheid
in. Bij de migratie van onze eigen repo en de consumer-app hadden we er geen enkele nodig.`]}),`
`,e.jsx(n.h3,{id:"7-ci-docker-en-release",children:"7. CI, Docker en release"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Installeren"}),": ",e.jsx(n.code,{children:"npm ci"})," wordt ",e.jsx(n.code,{children:"pnpm install --frozen-lockfile"}),`. pnpm detecteert een CI-omgeving en zet
`,e.jsx(n.code,{children:"--frozen-lockfile"})," dan zelf aan, maar expliciet is duidelijker. Een ",e.jsx(n.code,{children:"--maxsockets 5"}),` (om Artifactory niet te
overbelasten) wordt `,e.jsx(n.code,{children:"--network-concurrency 5"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"pnpm in de pipeline"}),": corepack haalt pnpm standaard van npmjs en leest geen auth uit ",e.jsx(n.code,{children:".npmrc"}),`. Zijn eigen token
(`,e.jsx(n.code,{children:"COREPACK_NPM_TOKEN"}),") stuurt het alleen mee als de tarball-URL exact de origin van ",e.jsx(n.code,{children:"COREPACK_NPM_REGISTRY"}),` heeft,
en met een registry-URL met een pad (Artifactory) is dat nooit zo: de packument lukt, de tarball geeft 403. Bereikt
je build-omgeving enkel een registry met authenticatie, installeer pnpm dan met npm, dat `,e.jsx(n.code,{children:".npmrc"}),` wél gebruikt.
Lees de versie uit `,e.jsx(n.code,{children:"packageManager"}),", zodat er één bron van waarheid blijft. Een globale ",e.jsx(n.code,{children:"npm install"}),` valt buiten
de `,e.jsx(n.code,{children:"devEngines"}),"-check uit ",e.jsx(n.a,{href:"#8-vangnet-tegen-een-npm-install-uit-gewoonte",children:"stap 8"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`PNPM_VERSION="$(node -p "require('./package.json').packageManager.replace(/^pnpm@/, '').split('+')[0]")"
npm install -g "pnpm@\${PNPM_VERSION}"
pnpm install --frozen-lockfile
`})}),`
`,e.jsxs(n.p,{children:["Mag je build-omgeving wél anoniem lezen op de registry, dan volstaat ",e.jsx(n.code,{children:"corepack enable"})," met ",e.jsx(n.code,{children:"COREPACK_NPM_REGISTRY"}),`
op die registry, plus de hash in `,e.jsx(n.code,{children:"packageManager"}),` (corepack controleert anders de npmjs-signatuur, die een
proxy-registry niet meelevert).`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Mutaties vóór de install"}),": pas je in de pipeline ",e.jsx(n.code,{children:"package.json"})," aan vóór je installeert (bvb. ",e.jsx(n.code,{children:"pnpm pkg set"}),`
van een versie), dan is de lockfile niet meer up-to-date en weigert `,e.jsx(n.code,{children:"--frozen-lockfile"}),`. Gebruik daar bewust
`,e.jsx(n.code,{children:"pnpm install --no-frozen-lockfile"}),", enkel voor die stap."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Vulnerability scan"}),": Trivy scant ",e.jsx(n.code,{children:"pnpm-lock.yaml"})," zoals ",e.jsx(n.code,{children:"package-lock.json"}),`. Pas het pad in je scan-stap aan;
heb je meerdere lockfiles, scan ze dan allemaal.`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"8-vangnet-tegen-een-npm-install-uit-gewoonte",children:"8. Vangnet tegen een npm install uit gewoonte"}),`
`,e.jsxs(n.p,{children:["Een ",e.jsx(n.code,{children:"npm install"})," uit gewoonte, door een collega of een tool, geeft opnieuw een gehoiste ",e.jsx(n.code,{children:"node_modules"}),` en een
`,e.jsx(n.code,{children:"package-lock.json"}),`. Alles werkt dan schijnbaar, maar de strikte pnpm-setup is lokaal stil ondermijnd. Drie
vangnetten:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Verklaar pnpm als package manager in ",e.jsx(n.code,{children:"package.json"})," met het veld ",e.jsx(n.code,{children:"devEngines"}),`. npm 10.9 en hoger (de npm van
Node 22) leest dat bij de start van elk commando en stopt meteen met `,e.jsx(n.code,{children:"EBADDEVENGINES"}),`, vóór het iets resolvet of
schrijft. Dat geldt voor `,e.jsx(n.code,{children:"npm install"}),", maar ook voor ",e.jsx(n.code,{children:"npm run"}),", ",e.jsx(n.code,{children:"npm ci"})," en de rest. Zet in ",e.jsx(n.code,{children:"version"}),` exact
dezelfde waarde als in `,e.jsx(n.code,{children:"packageManager"}),`, versie mét hash: met een andere of ontbrekende waarde waarschuwt pnpm bij
elke install dat `,e.jsx(n.code,{children:"packageManager"}),` genegeerd wordt. pnpm schrijft door dit veld ook zijn eigen integriteitsgegevens
(pnpm en `,e.jsx(n.code,{children:"@pnpm/exe"}),") als tweede document in ",e.jsx(n.code,{children:"pnpm-lock.yaml"}),"; commit dat mee."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"package.json"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`"packageManager": "pnpm@11.15.1+sha512.81350b07e53c9538a02f1f2303b4290fa2d7be04e56e2a970c4cc4b417dc761de196...",
"devEngines": {
    "packageManager": {
        "name": "pnpm",
        "version": "11.15.1+sha512.81350b07e53c9538a02f1f2303b4290fa2d7be04e56e2a970c4cc4b417dc761de196...",
        "onFail": "error"
    }
}
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Zet ",e.jsx(n.code,{children:"package-lock.json"})," in ",e.jsx(n.code,{children:".gitignore"}),", zodat zo'n lockfile nooit mee gecommit raakt."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Voeg een ",e.jsx(n.code,{children:"preinstall"}),`-script toe dat een andere package manager weigert. De pnpm-docs stellen
`,e.jsx(n.code,{children:'"preinstall": "npx only-allow pnpm"'})," voor. Let wel: ",e.jsx(n.code,{children:"npx"}),` haalt dat package bij élke install ongepind van de
registry, ook in de CI, en buiten `,e.jsx(n.code,{children:"minimumReleaseAge"}),` om. Wij kozen daarom voor een eigen script zonder
dependency, dat dezelfde check doet:`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"preinstall.mjs"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const userAgent = process.env.npm_config_user_agent ?? '';
if (!userAgent.startsWith('pnpm/')) {
    console.error('Dit project gebruikt pnpm: corepack enable && pnpm install');
    process.exit(1);
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"package.json"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`"scripts": {
    "preinstall": "node ./preinstall.mjs"
}
`})}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["Kanttekening: npm 7 en hoger schrijft ",e.jsx(n.code,{children:"node_modules"})," en ",e.jsx(n.code,{children:"package-lock.json"})," al weg vóór het de ",e.jsx(n.code,{children:"preinstall"}),` van je
project draait. De guard maakt de vergissing dus zichtbaar, maar voorkomt ze niet; hij is het vangnet voor een npm
ouder dan 10.9 (die `,e.jsx(n.code,{children:"devEngines"})," niet kent), een ",e.jsx(n.code,{children:"--force"}),`, of een andere package manager. Opruimen doe je met
`,e.jsx(n.code,{children:"rm -rf node_modules package-lock.json"})," gevolgd door ",e.jsx(n.code,{children:"pnpm install"}),"."]}),`
`,e.jsx(n.h2,{id:"cheatsheet",children:"Cheatsheet"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Taak"}),e.jsx("th",{scope:"col",children:"npm"}),e.jsx("th",{scope:"col",children:"pnpm"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Install (dev)"}),e.jsx("td",{children:e.jsx("code",{children:"npm install"})}),e.jsx("td",{children:e.jsx("code",{children:"pnpm install"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Clean install (CI, reproduceerbaar)"}),e.jsx("td",{children:e.jsx("code",{children:"npm ci"})}),e.jsx("td",{children:e.jsx("code",{children:"pnpm install --frozen-lockfile"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Dependency toevoegen"}),e.jsxs("td",{children:[e.jsx("code",{children:"npm install x"})," / ",e.jsx("code",{children:"npm install -D x"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"pnpm add x"})," / ",e.jsx("code",{children:"pnpm add -D x"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Dependency verwijderen"}),e.jsx("td",{children:e.jsx("code",{children:"npm uninstall x"})}),e.jsx("td",{children:e.jsx("code",{children:"pnpm remove x"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Dependencies updaten"}),e.jsx("td",{children:e.jsx("code",{children:"npm update"})}),e.jsx("td",{children:e.jsx("code",{children:"pnpm update"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Script met argument"}),e.jsx("td",{children:e.jsx("code",{children:"npm run x -- --flag"})}),e.jsx("td",{children:e.jsx("code",{children:"pnpm run x --flag"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Package eenmalig ophalen en uitvoeren"}),e.jsx("td",{children:e.jsx("code",{children:"npx pkg"})}),e.jsx("td",{children:e.jsx("code",{children:"pnpm dlx pkg"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Geïnstalleerde versies tonen"}),e.jsx("td",{children:e.jsx("code",{children:"npm list x"})}),e.jsxs("td",{children:[e.jsx("code",{children:"pnpm list x"})," (de ",e.jsx("code",{children:"--json"})," vorm verschilt)"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"package.json bewerken"}),e.jsx("td",{children:e.jsx("code",{children:"npm pkg set k=v"})}),e.jsxs("td",{children:[e.jsx("code",{children:"pnpm pkg set k=v"})," (scoped: syntax verschilt per pnpm-versie, zie stap 5)"]})]})]})]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://pnpm.io/11.x/settings/build",rel:"nofollow",children:"pnpm - Build-instellingen"}),": ",e.jsx(n.code,{children:"allowBuilds"}),", ",e.jsx(n.code,{children:"strictDepBuilds"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://pnpm.io/11.x/settings/dependency-resolution",rel:"nofollow",children:"pnpm - Dependency-resolutie"}),": ",e.jsx(n.code,{children:"minimumReleaseAge"}),`,
`,e.jsx(n.code,{children:"minimumReleaseAgeExclude"}),", ",e.jsx(n.code,{children:"overrides"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://pnpm.io/11.x/settings/node-modules",rel:"nofollow",children:"pnpm - node_modules-instellingen"}),": ",e.jsx(n.code,{children:"nodeLinker"}),", ",e.jsx(n.code,{children:"shamefullyHoist"}),`,
`,e.jsx(n.code,{children:"publicHoistPattern"})]}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://pnpm.io/11.x/cli/import",rel:"nofollow",children:["pnpm - ",e.jsx(n.code,{children:"pnpm import"})]})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://pnpm.io/11.x/only-allow-pnpm",rel:"nofollow",children:"pnpm - Only allow pnpm"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/nodejs/corepack",rel:"nofollow",children:"corepack"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://docs.volta.sh/advanced/pnpm",rel:"nofollow",children:"Volta - pnpm support"})}),`
`]})]})}function t(d={}){const{wrapper:n}={...s(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(r,{...d})}):r(d)}export{t as default};
