import{u as i,j as e,M as l}from"./iframe-CY-ZM549.js";import"./preload-helper-D9Z9MdNV.js";function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Beheren/CI - CD"}),`
`,e.jsx(n.h1,{id:"ci---cd",children:"CI - CD"}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#beschrijving",children:"Beschrijving"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#jenkins-configuratie",children:"Jenkins Configuratie"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#jenkins-release",children:"Jenkins Release"})}),`
`]}),`
`,e.jsx(n.h2,{id:"beschrijving",children:"Beschrijving"}),`
`,e.jsx(n.p,{children:"De build loopt via Jenkins. De Bamboo build wordt niet meer ondersteund."}),`
`,e.jsxs(n.p,{children:[`Om de versionering te sturen en een changelog te genereren wordt de
`,e.jsx(n.a,{href:"https://github.com/semantic-release/semantic-release",rel:"nofollow",children:"semantic-release"})," plugin gebruikt."]}),`
`,e.jsxs(n.p,{children:[`De verschillende releases zijn terug te vinden op de
`,e.jsx(n.a,{href:"https://github.com/milieuinfo/flux-web-components/releases",rel:"nofollow",children:"release pagina"})," van de GitHub repository."]}),`
`,e.jsx(n.h2,{id:"jenkins-configuratie",children:"Jenkins Configuratie"}),`
`,e.jsxs(n.p,{children:["De build configuratie zit in het ",e.jsx(n.code,{children:"Jenkinsfile.groovy"}),` bestand in de root van de repository. De bijhorende bash-scripts
staan in `,e.jsx(n.code,{children:"resources/ci-jenkins/bash"}),", de semantic-release configuratie in ",e.jsx(n.code,{children:"resources/ci-jenkins/release"}),"."]}),`
`,e.jsxs(n.p,{children:["Het is een declaratieve multibranch pipeline die op Kubernetes draait: elke stage die een eigen ",e.jsx(n.code,{children:"agent"}),` declareert
krijgt een eigen pod met een eigen workspace. De volledige pijplijn wordt overgeslagen als de commit een `,e.jsx(n.code,{children:"[skip ci]"}),`
bevat. Volgende stages zijn gedefinieerd:`]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Trivy scan"})," - security scan van ",e.jsx(n.code,{children:"package-lock.json"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"build-en-tests"})," - met de volgende stages die parallel lopen, elk in een eigen pod:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"build-apps-and-libs"})," (de build) - stasht de gebouwde libs en fat-lib voor de release stage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"unit-component-integrator-tests"})," (verschillende testen)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"e2e-tests-storybook"})," (Storybook e2e-testen)"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"release-and-publish"}),` - loopt enkel voor develop-, bugfix- en release-branches; er is een licht verschillende
flow voor release en pre-release branches`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"verify-release"})," - verifieert dat de ge-releaste artifacts afneembaar zijn"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"finalise-release"})," - rebaset een hoofd-release branch (",e.jsx(n.code,{children:"release-v<major>"}),`) naar zijn develop branch
(`,e.jsx(n.code,{children:"develop-v<major>"}),"), zodat de ",e.jsx(n.code,{children:"chore(release)"})," commit mee terug in develop komt"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`De drie release stages draaien sequentieel op de top-level agent en delen dus één workspace en checkout:
`,e.jsx(n.strong,{children:"verify-release"})," heeft de ",e.jsx(n.code,{children:"build/dist"})," output van ",e.jsx(n.strong,{children:"release-and-publish"})," nodig, en ",e.jsx(n.strong,{children:"finalise-release"}),` werkt op
dezelfde git checkout verder. De scripts beslissen zelf op basis van de branchnaam of ze effectief iets doen.`]}),`
`,e.jsx(n.h2,{id:"jenkins-release",children:"Jenkins Release"}),`
`,e.jsxs(n.p,{children:["Een release vindt plaats in de ",e.jsx(n.strong,{children:"release-and-publish"}),` stage en wordt gestuurd door
`,e.jsx(n.a,{href:"https://github.com/semantic-release/semantic-release",rel:"nofollow",children:"semantic-release"}),`. De configuratie van die plugin zit in 2
bestanden onder `,e.jsx(n.code,{children:"resources/ci-jenkins/release"}),": ",e.jsx(n.code,{children:".releaserc-develop"})," en ",e.jsx(n.code,{children:".releaserc-release"}),`. Het script kopieert de
juiste variant naar `,e.jsx(n.code,{children:".releaserc"}),` in de root: de develop variant voor de pre-release branches (branchnaam bevat
'develop' of 'bugfix'), de release variant voor de release branches (branchnaam bevat 'release').`]}),`
`,e.jsxs(n.p,{children:["In die ",e.jsx(n.strong,{children:"release-and-publish"})," stap gebeurt het volgende:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`semantic-release bepaalt het nieuwe versie nummer a.d.h.v. de commits (fix / feat / breaking-change) - met een
`,e.jsx(n.code,{children:"-develop"})," suffix voor develop branches"]}),`
`,e.jsx(n.li,{children:"de te publiceren artifacts krijgen het versie nummer"}),`
`,e.jsx(n.li,{children:"er wordt een tag gelegd met het versie nummer"}),`
`,e.jsxs(n.li,{children:["de artifacts worden gepushed naar ",e.jsx(n.a,{href:"https://repo.omgeving.vlaanderen.be/ui/packages",rel:"nofollow",children:"Artifactory"})]}),`
`,e.jsx(n.li,{children:"de fat-lib wordt als tgz naar Artifactory ge-upload (om op de CDN te geraken)"}),`
`,e.jsxs(n.li,{children:["Storybook wordt opnieuw gebouwd - pas dan is de ",e.jsx(n.code,{children:"CHANGELOG.md"}),` up-to-date - en als
`,e.jsx(n.code,{children:"storybook-<versie>.tgz"})," build-artifact gearchiveerd"]}),`
`,e.jsxs(n.li,{children:[`in het geval van een release wordt er een changelog aangemaakt en een
`,e.jsx(n.a,{href:"https://github.com/milieuinfo/flux-web-components/releases",rel:"nofollow",children:"GitHub release"})," uitgevoerd"]}),`
`]})]})}function t(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{t as default};
