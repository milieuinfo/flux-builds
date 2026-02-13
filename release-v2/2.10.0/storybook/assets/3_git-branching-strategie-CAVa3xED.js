import{u as r,j as e,M as o}from"./iframe-FlvNZLqI.js";import"./preload-helper-D9Z9MdNV.js";const a=""+new URL("git-branching-strategie-teams-DppHH_r_.png",import.meta.url).href;function i(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Bijdragen/Git Branching Strategie"}),`
`,e.jsx(n.h1,{id:"git-branching-strategie",children:"Git Branching Strategie"}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overzicht",children:"Overzicht"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#branching-concepten",children:"Branching Concepten"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#team-branching-strategie",children:"Team Branching Strategie"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overzicht",children:"Overzicht"}),`
`,e.jsxs(n.p,{children:["De ontwikkeling gebeurt in ",e.jsx(n.a,{href:"https://git-scm.com/",rel:"nofollow",children:"git"})," op ",e.jsx(n.a,{href:"https://github.com/milieuinfo/flux-web-components",rel:"nofollow",children:"GitHub"}),`.
De algemene branching strategie is om via feature-branches tot pre-releases en uiteindelijk finale releases te komen.
Ontwikkelteams (ApoCow, Decibel, Phoenix, ...) kunnen bijdrages leveren m.b.v. de
`,e.jsx(n.a,{href:"#team-branching-strategie",children:"team branching strategie"}),"."]}),`
`,e.jsx(n.h2,{id:"branching-concepten",children:"Branching Concepten"}),`
`,e.jsx(n.h3,{id:"feature-branches",children:"Feature Branches"}),`
`,e.jsxs(n.p,{children:[`Jira tickets worden opgenomen en uitgevoerd in een aparte feature-branch. De conventie voor de branch naam is
`,e.jsx(n.strong,{children:"feature/JIRA-123-sleutel-woorden"}),`. Als het Flux team bvb. ticket FLUX-2322 opneemt met als titel
'cdn-assets voorzien met tinyMCE theming en publiceren op artifactory' dan gebeurt dat in een branch met bvb. de
naam `,e.jsx(n.strong,{children:"feature/FLUX-2322-tinymce-cdn"}),`. De feature branch is tijdelijk en bij voorkeur / meestal enkel voor eigen
gebruik. Het ticket nummer moet in de naam staan, de sleutelwoorden geven een indicatie van wat het inhoud. Vermijdt
gebruik. Het ticket nummer moet in de naam staan, de sleutelwoorden geven een indicatie van wat het inhoud. Vermijdt
er een ge-hyphende zin van te maken!`]}),`
`,e.jsx(n.h3,{id:"commit-boodschappen",children:"Commit Boodschappen"}),`
`,e.jsxs(n.p,{children:["Voor ",e.jsx(n.a,{href:"/docs/beheren-ci-cd--documentatie",children:"releases"}),` wordt
`,e.jsx(n.a,{href:"https://github.com/semantic-release/semantic-release",rel:"nofollow",children:"semantic-release"}),` gebruikt, dat steunt op commit
boodschappen die de `,e.jsx(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/",rel:"nofollow",children:"conventional commit"})," specificatie volgen."]}),`
`,e.jsxs(n.p,{children:["Commits dienen volgende structuur te hebben, waarbij ",e.jsx(n.strong,{children:"type"})," typisch 'fix' of 'feat' is."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<type>: <ticket-nummer> - <component> - <korte beschrijving>

[optioneel - details / uitgebreidere beschrijving]
`})}),`
`,e.jsx(n.p,{children:"In het voorbeeld van hierboven zet je dus als commit boodschap:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`feat: FLUX-2322 - op de CDN de TinyMCE theming publiceren

de theming van TinyMCE wordt gepubliceerd in een artefact @domg-cdn/tinymce-theming
het infra-team breidt hun scripts uit zodat de code uit de artefact op de CDN gezet wordt
`})}),`
`,e.jsx(n.h3,{id:"squashen",children:"Squashen"}),`
`,e.jsxs(n.p,{children:["Het doel is: ",e.jsx(n.strong,{children:"1 ticket = 1 feature branch = 1 uiteindelijke commit"})]}),`
`,e.jsx(n.p,{children:`Om dit te bereiken dien je alvorens de feature-branch naar develop te brengen (via een PR) de commits te squashen.
Tijdens ontwikkeling kan je committen en pushen naar believe, het is enkel op het moment dat je je werk afrond dat je
zorgt te eindigen met 1 commit die de conventional commit conventie volgt.`}),`
`,e.jsx(n.p,{children:"Opgelet: indien je squashed moet je nadien een force-push doen daar je je historiek herschreven hebt!"}),`
`,e.jsx(n.h3,{id:"rebasen",children:"Rebasen"}),`
`,e.jsx(n.p,{children:`Om het werk op een feature-branch naar de develop-branch te brengen zorgen we ervoor een lineaire historiek (d.m.v.
fast-forwards) te behouden. Om dit te bereiken dien je eventueel te rebasen. Mergen of rebasen is een keuze, omdat
het in dit geval om een componenten bibliotheek gaat (en geen eindtoepassing) opteren wij om te rebasen, dit is de
minst makkelijke optie van de 2, je dient bewust om te gaan met de integratie van commits in andere branches!`}),`
`,e.jsxs(n.p,{children:[`Op de git website (scroll helemaal naar beneden) staat er dit over
`,e.jsx(n.a,{href:"https://git-scm.com/book/en/v2/Git-Branching-Rebasing",rel:"nofollow",children:"mergen vs rebasen"}),":"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Merging: One point of view on this is that your repository’s commit history is a record of what actually happened.
It’s a historical document, valuable in its own right, and shouldn’t be tampered with. From this angle, changing the
commit history is almost blasphemous; you’re lying about what actually transpired. So what if there was a messy series
of merge commits? That’s how it happened, and the repository should preserve that for posterity.`}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Rebasing: The opposing point of view is that the commit history is the story of how your project was made. You
wouldn’t publish the first draft of a book, so why show your messy work? When you’re working on a project, you may need
a record of all your missteps and dead-end paths, but when it’s time to show your work to the world, you may want to
tell a more coherent story of how to get from A to B. People in this camp use tools like rebase and filter-branch to
rewrite their commits before they’re merged into the mainline branch. They use tools like rebase and filter-branch, to
tell the story in the way that’s best for future readers.`}),`
`]}),`
`,e.jsxs(n.p,{children:[`Opgelet: door te rebasen (en/of te squashen) herschrijf je historiek, nadien dien je steeds een force-push te doen.
Hou de `,e.jsx(n.a,{href:"https://www.gitkraken.com/blog/golden-rule-of-rebasing-in-git",rel:"nofollow",children:"'Golden Rule of Rebasing'"}),` in gedachte:
herschrijf geen historiek voor branches met meer dan 2 ogen op.`]}),`
`,e.jsx(n.h3,{id:"pull-requests-prs",children:"Pull Requests (PR's)"}),`
`,e.jsx(n.p,{children:"Alvorens een PR te lanceren via GitHub dien je te verifieren dat"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"je code correct geformatteerd is met Prettier"}),`
`,e.jsx(n.li,{children:"je ge-squash'ed hebt tot 1 commit"}),`
`,e.jsx(n.li,{children:"de commit boodschap conform conventional commit is"}),`
`]}),`
`,e.jsx(n.p,{children:`Telkens je pushed naar je feature-branch zal er een build lopen. Alvorens de PR te lanceren dient de build van je
feature branch geslaagd te zijn! Indien dit in orde is kan je de PR lanceren t.o.v. de develop branch. GitHub meld of
hij de branch kan inmergen via een fast-forward, indien dit niet kan dien je eerst te rebasen tov develop en te
force-pushen.`}),`
`,e.jsx(n.p,{children:`Nadat de PR is ingediend wordt de code ge-reviewed door iemand van het Flux-team, na integratie wordt de feature-branch
verwijderd!`}),`
`,e.jsx(n.h3,{id:"pr-code-reviews",children:"PR Code Reviews"}),`
`,e.jsx(n.p,{children:`Reviews mogen (op uitnodiging) ook door team-genoten gebeuren, om de code echter in develop te krijgen dienen er 2
approvals te zijn van het Flux-team. Wij (Kris Speltincx, Koen Buckinx en Karim Dehbi) zijn in de verschillende repo's
gespecifieerd als code-owners.`}),`
`,e.jsx(n.p,{children:`In GitHub staat de vlag op dat approvals vervallen bij een nieuwe commit. Je dient dus ge-squashed te hebben en
een correcte commit boodschap te voorzien alvorens we approven, ook de build op Bamboo moet gelukt zijn. Omdat
integratie tussen Bamboo en GitHub op dit vlak niet mogelijk is vragen we dat de indiener in de PR de Bamboo-build-link
van de branch vermeld, approvers kunnen dan snel verifiëren dat de build in orde is.`}),`
`,e.jsx(n.h2,{id:"team-branching-strategie",children:"Team Branching Strategie"}),`
`,e.jsx(n.p,{children:"Artifacts worden enkel gebouwd voor develop en release branches."}),`
`,e.jsxs(n.p,{children:[`Teams die ontwikkeling doen aan de component bibliotheek doen dat meestal in de context van aanpassingen voor een
concrete eindtoepassing. Vaak is dat werk experimenteler van aard, je kan daarvoor ook snapshot-artifacts genereren zodat
je kan integreren, je dient daarvoor de code te integreren met een branch die begint met `,e.jsx(n.code,{children:"develop-"}),", bvb. ",e.jsx(n.code,{children:"develop-xyz"}),`.
Op die manier kan de code afgenomen en geverifieerd worden, als het werk definitief is moet het wel nog steeds
ge-squashed, rebased en via een PR geïntegreerd worden!`]}),`
`,e.jsxs(n.p,{children:[`De snapshot-releases kan je terugvinden op artifactory onder de
`,e.jsx(n.a,{href:"https://repo.omgeving.vlaanderen.be/ui/repos/tree/General/snapshot-npm",rel:"nofollow",children:"snapshot-npm"}),`. Je dient van alle artifacts
steeds dezelfde versie af te nemen!`]}),`
`,e.jsx(n.p,{children:"De aanpak van deze specifieke branching strategy wordt verduidelijkt in onderstaand diagram."}),`
`,e.jsx("img",{src:a,alt:"Teams Branching Strategie"})]})}function h(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{h as default};
