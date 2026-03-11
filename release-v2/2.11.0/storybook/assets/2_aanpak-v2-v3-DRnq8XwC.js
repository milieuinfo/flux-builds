import{u as t,j as e,M as r}from"./iframe-BWsn3Pr7.js";import"./preload-helper-D9Z9MdNV.js";function o(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Planning/Aanpak v2, v3, ..."}),`
`,e.jsx(n.h1,{id:"aanpak-v2-v3-",children:"Aanpak v2, v3, ..."}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#waarom-v2",children:"Waarom v2"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#waarom-next-componenten",children:"Waarom Next Componenten"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#next-conventies",children:"Next Conventies"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#v2-vs-v3",children:"v2 vs. v3"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#v2-release",children:"v2 Release"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#v3-release",children:"v3 Release"})}),`
`]}),`
`,e.jsx(n.h2,{id:"waarom-v2",children:"Waarom v2"}),`
`,e.jsxs(n.p,{children:["De basis van de code die er is ",e.jsx(n.a,{href:"/docs/historiek-toekomst--documentatie",children:"dateert"}),` van 2020. Er is toen vertrokken
vanuit het idee de code van `,e.jsx(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/",rel:"nofollow",children:"Webuniversum v3"}),` as-is af te nemen.
Dit had een aantal gevolgen:`]}),`
`,e.jsx(n.h3,{id:"element-complicatie",children:"Element complicatie"}),`
`,e.jsxs(n.p,{children:["Componenten zoals de DV ",e.jsx(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-button",rel:"nofollow",children:"vl-ui-button"}),`
moeten als een uitbreiding op een native button geïmplementeerd worden. De Flux web-component moet dus extenden van
HTMLButtonElement. De rede is dat de scss van DV enkel werkt op een `,e.jsx(n.code,{children:"button"}),` tag, een custom component maken met als
tag `,e.jsx(n.code,{children:"vl-button"}),` werkt niet (de css die DV voorziet is daarvoor niet correct). Er was wel de mogelijkheid geweest om de
component te schrijven als wrapper: een `,e.jsx(n.code,{children:"vl-button"})," die dan daarin een ",e.jsx(n.code,{children:"button"}),` rendert, maar die keuze is toen niet
gemaakt.`]}),`
`,e.jsx(n.p,{children:"Die keuze, om dus de vl-button als een uitbreiding op een button te implementeren, heeft een aantal gevolgen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["afnemers moeten dit type componenten op een specifieke manier gebruiken: m.b.v. het ",e.jsx(n.code,{children:"is="}),` attribuut, zie
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/is",rel:"nofollow",children:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/is"})]}),`
`,e.jsxs(n.li,{children:["Safari gaat dit nooit ondersteunen, we moeten de polyfill ",e.jsx(n.code,{children:"@ungap/custom-elements"}),` voorzien om dat in Safari te
ondersteunen`]}),`
`,e.jsxs(n.li,{children:["bestaande web-component frameworks: bvb. ",e.jsx(n.a,{href:"https://lit.dev/",rel:"nofollow",children:"Lit"})," en ",e.jsx(n.a,{href:"https://stenciljs.com/docs/introduction",rel:"nofollow",children:"Stencil"}),`
ondersteunen het niet; overal LitElement (om consistent te zijn) als basis klasse gebruiken kan dus niet`]}),`
`,e.jsx(n.li,{children:`omdat op die manier - aan native elementen - extra attributen toegevoegd worden door de implementatie, en om
tegelijkertijd aan de HTML5 standaard te voldoen, is er gekozen de nieuwe attributen te prefixen met 'data-'; dit is
dan (om consistentie redenen) bij alle componenten zo doorgevoerd - terwijl dat voor componenten met een custom-tag
geen verplichting (en eigenlijk niet de bedoeling) is`}),`
`]}),`
`,e.jsxs(n.p,{children:["Opmerking: om duidelijk te maken of een bepaalde component gebruikt moet worden via een ",e.jsx(n.code,{children:"custom tag"})," of via het ",e.jsx(n.code,{children:"is="}),`
attribuut zijn in de nieuwe `,e.jsx(n.code,{children:"@domg-wc"}),` componenten (v1.x.x) alle componenten, die als uitbreiding op een native tag
geïmplementeerd zijn, gegroepeerd in het `,e.jsx(n.code,{children:"@domg-wc/elements"})," artifact."]}),`
`,e.jsx(n.h3,{id:"javascript-complicatie",children:"JavaScript complicatie"}),`
`,e.jsx(n.p,{children:`Een aantal DV componenten bevatten JavaScript. Die is deels door DV zelf geschreven en deels afkomstig van andere
bibliotheken. De DV specifieke JavaScript voorziet een soort van lifecycle waarbij componenten 'ge-dressed' worden.
Doordat er soms 'patches' dienden te gebeuren (en vermoedelijk om consistent te zijn) is uiteindelijk de meeste van
die JavaScript in onze code-base als code beland, dus niet als dependency naar DV- of externe artifacts. Dit heeft
volgende gevolgen:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`upgrades zijn moeilijk, doordat 'onze' JavaScript afwijkt van deze van DV kunnen we niet zomaar de meest recente
versie binnentrekken - we zouden deze moeten diffen, copy-pasten en aanpassen`}),`
`,e.jsx(n.li,{children:`er zijn rechten issues: omdat die JavaScript code een mix is van DV- en externe code weten we de bron en
de versie niet, we kunnen dus niet controleren of de licentie van die code wel toestaat dat we ze overnemen`}),`
`,e.jsxs(n.li,{children:[`de eigen DV-lifecycle is niet eenduidig en dus moeilijk correct te laten samen werken met de
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks",rel:"nofollow",children:"web-components lifecycle"}),`
of de `,e.jsx(n.a,{href:"https://lit.dev/docs/components/lifecycle/",rel:"nofollow",children:"Lit lifecycle"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"scss-complicatie",children:"SCSS complicatie"}),`
`,e.jsx(n.p,{children:`DV voorziet alle css is scss formaat, hierdoor kunnen ze gestructureerde css schrijven met mixins, variabelen,
nesting, ... . Dit heeft wel gevolgen bij ons:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`wij moeten die scss omzetten naar css, ofwel door een plugin in de build (wat we vroeger deden) ofwel door zelf een
pre-process'de bibliotheek te voorzien (wat we tegenwoordig doen via `,e.jsx(n.code,{children:"@domg/govflanders-style"}),")"]}),`
`,e.jsx(n.li,{children:"scss is geen 'standaard', wat toch 1 van de basis principes is van de keuzes gemaakt in 2020"}),`
`,e.jsx(n.li,{children:"Lit - wat we als uniforme basis nemen - ondersteunt geen scss"}),`
`,e.jsx(n.li,{children:`de fragmentatie door DV van de scss is niet goed om web componenten te schrijven: bij normaal gebruik wordt alle scss
nodig voor een website op 1 plaats geïmporteerd, op die manier krijg je minimale duplicatie.
Web-componenten zijn echter self contained, elke component bevat alles wat hij nodig heeft, het gevolg is dat we
in elke component alle 'gedeelde' css krijgen, daarin zit vaak overbodige css (voor die component)
en over componenten heen is er nodeloze duplicatie.`}),`
`]}),`
`,e.jsx(n.h2,{id:"waarom-next-componenten",children:"Waarom 'Next' Componenten"}),`
`,e.jsx(n.p,{children:`Om de componenten af te nemen, maar ook om ze te implementeren, is eenduidigheid belangrijk. We proberen de
Flux-componenten zo backwards compatibel als mogelijk te laten evolueren. Echter, om alles eenduidig te maken,
zullen we backwards incompatibele wijzigingen moeten doorvoeren.`}),`
`,e.jsx(n.p,{children:`Op zich zouden we dat kunnen doen door een fork te maken van de huidige code en in die fork aan een v2 release te
werken. Op die manier werken leek ons niet realistisch:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"voor de componenten die niet (of beperkt) wijzigen moeten bugfixes en features op 2 plaatsen gebeuren"}),`
`,e.jsx(n.li,{children:`als we componenten maar in v2 opnemen als ze volledig klaar zijn gaat het jaren duren voor alle componenten
(inclusief de map) er in zitten`}),`
`,e.jsx(n.li,{children:`we gaan niet kunnen (en niet willen) garanderen dat v2 en v1 componenten volledig samenwerken, afnemers gaan dus
moeten kiezen, maar niemand zal v2 willen / kunnen afnemen zolang die versie niet de bulk van de componenten bevat`}),`
`]}),`
`,e.jsx(n.p,{children:`Vandaar hebben we er dus voor gekozen om 'next'-componenten te introduceren. We laten de huidige versie van een
component bestaan en verder evolueren. Een nieuwe versie implementeren we in de huidige codebase en geven we
een nieuwe tag door deze te suffixen met '-next'.`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"opmerking 1:"}),` We hebben bekeken of we dezelfde tag zouden kunnen gebruiken voor de oude en de nieuwe component,
dan zou het afhangen van de import welke component je gebruikt.
Doordat je een tag maar 1 maal kan registreren (het is dus de oude of de nieuwe component) en er componenten zijn
die zelf andere componenten importeren (en dus registreren) zou je at-runtime overal, fundamenteel, voor de ene of
de andere moeten kiezen. Dit zou onze code, maar ook afnemers hun code veel te hard impacteren (vooral in de
overgangsfase).`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"opmerking 2:"}),` We hebben ook bekeken of we
`,e.jsx(n.a,{href:"https://github.com/WICG/webcomponents/blob/gh-pages/proposals/Scoped-Custom-Element-Registries.md",rel:"nofollow",children:"scoped elements"}),`
konden gebruiken, zodat we dezelfde tag konden behouden voor de nieuwe en de oude versie. Dit is echter een voorstel
met een `,e.jsx(n.a,{href:"https://www.npmjs.com/package/@webcomponents/scoped-custom-element-registry",rel:"nofollow",children:"polyfill prototype"}),` implementatie.
Deze oplossing ging technisch complex zijn voor de afnemers en gaf ook moeilijkheden met onze globale css (ook daar
heb je een oude en een nieuwe versie van).`]}),`
`,e.jsx(n.h2,{id:"next-conventies",children:"'Next' Conventies"}),`
`,e.jsx(n.p,{children:`Volgende keuzes zijn gemaakt om door te voeren in de 'next'-componenten. Hierdoor wijken ze momenteel af van de andere
componenten. Bij de feitelijke v2 release zullen we de andere componenten in lijn brengen (ook bij deze de next
conventies doorvoeren).`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"een component heeft een custom tag die begint met 'vl-'"}),`
`,e.jsx(n.li,{children:"een component extend altijd van LitElement (en heeft daardoor de Lit-lifecycle)"}),`
`,e.jsx(n.li,{children:`css wordt geschreven als css-in-ts en aangeboden als css-in-js; we voorzien mixins als JavaScript methodes en
gebruiken standaard css variabelen`}),`
`,e.jsxs(n.li,{children:[`styling wordt aangeboden als css, pure styling wordt niet meer als element of component aangeboden maar gewoon als
css die je via het `,e.jsx(n.code,{children:"class="})," attribuut moet gebruiken"]}),`
`,e.jsxs(n.li,{children:["het 'element' concept verdwijnt, componenten die een native element extenden (dus met het ",e.jsx(n.code,{children:"is="}),` attribuut gebruikt
moeten worden) worden stelselmatig weggewerkt:`,`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"het element wordt in de next-variant een component"}),`
`,e.jsx(n.li,{children:"als het element in een form gebruikt werd komt de next-variant in de form artifact"}),`
`,e.jsx(n.li,{children:"het element wordt een css klasse"}),`
`,e.jsx(n.li,{children:"het element wordt geschrapt"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["de ",e.jsx(n.code,{children:"data-"})," prefix bij de attributen verdwijnt omdat er geen nood meer aan is"]}),`
`]}),`
`,e.jsx(n.h2,{id:"v2-vs-v3",children:"v2 vs. v3"}),`
`,e.jsx(n.p,{children:"In v2 zullen er nog:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"componenten zijn die extenden van BaseElementOfType"}),`
`,e.jsx(n.li,{children:"is de map nog niet conform de nieuwe conventies"}),`
`,e.jsx(n.li,{children:"is er nog legacy code"}),`
`]}),`
`,e.jsx(n.p,{children:"In versie 3 (hopelijk) zal de volledige codebase consistent zijn en wordt alle legacy code geschrapt ."}),`
`,e.jsx(n.h2,{id:"v2-release",children:"v2 Release"}),`
`,e.jsxs(n.p,{children:[`Zolang we in v1 zaten kwamen er nieuwe 'next' componenten bij (zie
`,e.jsx(n.a,{href:"http://localhost:8080/?path=/docs/afnemen-migratie-v2-impact--documentatie",rel:"nofollow",children:"Migratie v2 - Impact"}),`). De bestaande
componenten bleven zoals ze geschreven waren, hun API wijzigde niet.`]}),`
`,e.jsx(n.p,{children:"Bij de v2 release deden we het volgende:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`als er een oude en een nieuwe variant was van dezelfde component werd de oude geschrapt en bij de nieuwe werd
de `,e.jsx(n.code,{children:"-next"}),` suffix verwijderd - de nieuwe vervangt dus de oude; hierdoor is de component niet backwards
compatibel`]}),`
`,e.jsxs(n.li,{children:["bij de componenten die behouden bleven schrappen we de ",e.jsx(n.code,{children:"data-"}),` prefix, zodat er in v2 nergens nog attributen zijn
die die conventie volgen`]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"opmerking 1"}),`: alle componenten die in release v2 zitten zitten ook in de laatste v1 release, er zullen
er echter minder in v2 zitten (de oude worden geschrapt) en ze zullen anders gebruikt moeten worden - de `,e.jsx(n.code,{children:"button"}),`
bvb. moet je niet meer gebruiken m.b.v. `,e.jsx(n.code,{children:'is="vl-button"'})," maar met de ",e.jsx(n.code,{children:"vl-button"})," tag"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"opmerking 2"}),`: in v2.0.0 zitten geen next-componenten meer, maar vanaf v2.1.0 kunnen er nieuwe next-componenten
komen, deze volgen dan dezelfde conventie: in v3 zullen deze de oude v2 versie vervangen - het doel is wel om dit te
beperken tot de 'map' componenten`]}),`
`,e.jsx(n.h2,{id:"v3-release",children:"v3 Release"}),`
`,e.jsx(n.p,{children:`Net zoals we via minor en patch releases v1 hebben uitgebreid en laten evolueren zullen we dat met v2 doen. Op een
bepaald moment zullen we terug een opkuis actie willen doen die dan zal resulteren in een v3 release. Een concrete
datum of feature-set voor v3 is er nog niet.`})]})}function a(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{a as default};
