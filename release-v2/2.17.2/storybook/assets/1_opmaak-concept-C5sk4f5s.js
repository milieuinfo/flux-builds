import{u as o,j as e,M as r}from"./iframe-BAEsER5t.js";import"./preload-helper-D9Z9MdNV.js";function l(s){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components},{FluxAlert:i}=n;return i||t("FluxAlert"),e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Styles/Concept"}),`
`,e.jsx(n.h1,{id:"styles",children:"Styles"}),`
`,e.jsx(i,{type:"success",children:`
  Dit is de v2 aanpak voor **opmaak** in toepassingen.
`}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#concept",children:"Concept"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#base-intern",children:"Base (intern)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#layout-afnemers",children:"Layout (afnemers)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#aanbevolen-volgorde-van-styling",children:"Aanbevolen volgorde van styling"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#utility-classes-digitaal-vlaanderen",children:"Utility classes (Digitaal Vlaanderen)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#conventies",children:"Conventies"})}),`
`]}),`
`,e.jsx(n.h2,{id:"concept",children:"Concept"}),`
`,e.jsxs(n.p,{children:["Sinds de v2-release zijn de ",e.jsx(n.code,{children:"element"}),"-componenten weggewerkt. Dit heeft impact op de globale styling."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["In ",e.jsx(n.strong,{children:"v1"}),":",e.jsx(n.br,{}),`
`,"Componenten zoals ",e.jsx(n.code,{children:"vl-button"})," moesten gebruikt worden als:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<button is="vl-button">Actie</button>
`})}),`
`,e.jsx(n.p,{children:"Deze hadden geen shadow DOM. CSS werd dus globaal toegepast."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["In ",e.jsx(n.strong,{children:"v2"}),`:
Componenten zijn nu volwaardige web-componenten, bv.:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-button>Actie</vl-button>
`})}),`
`,e.jsxs(n.p,{children:[`Deze hebben een shadow DOM. De styling van het component zelf zit in die shadow DOM. Externe CSS “lekt” daar niet
automatisch in. Om tweaks mogelijk te maken voorzien de meeste componenten een `,e.jsx(n.code,{children:"custom-css"}),"-attribuut."]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"base-intern",children:"Base (intern)"}),`
`,e.jsxs(n.p,{children:["Dit is basis CSS, bouwstenen die ",e.jsx(n.strong,{children:"intern"}),` gebruikt worden.
Afnemers gebruiken dit nooit rechtstreeks.
Deze CSS wordt ofwel globaal op het document gezet of in web-componenten toegepast.`]}),`
`,e.jsx(n.p,{children:"Inhoud van de base-styles:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/styles-base-font--documentatie",children:"Vlaanderen fonts"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/docs/styles-base-mixin--documentatie",children:"Mixins"})," (bv. animaties)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/docs/styles-base-var--documentatie",children:"Variabelen"})," (kleuren, media-queries, …)"]}),`
`,e.jsxs(n.li,{children:["Styling voor native elementen, zoals ",e.jsx(n.a,{href:"/docs/styles-base-body--documentatie",children:"body"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"layout-afnemers",children:"Layout (afnemers)"}),`
`,e.jsxs(n.p,{children:["Dit is de basis voor algemene layout: alles wat orde en structuur geeft. Het zijn ",e.jsx(n.strong,{children:"containers"}),` waarin andere
componenten geplaatst worden.`]}),`
`,e.jsxs(n.p,{children:["In ",e.jsx(n.strong,{children:"v1"})," waren dit ",e.jsx(n.code,{children:"element"}),"-implementaties. Sinds ",e.jsx(n.strong,{children:"v2"})," zijn dit ",e.jsx(n.strong,{children:"CSS-classes"})," op native elementen."]}),`
`,e.jsx(n.p,{children:"Waarom geen web-componenten?"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`CSS en HTML vormen de basis van de layout en opmaak van een web-pagina. Het is aan te raden deze zoveel mogelijk
rechtstreeks toe te passen zonder JavaScript.`}),`
`,e.jsx(n.li,{children:"Containers zijn niet visueel, maar bepalen enkel plaats en ruimte."}),`
`,e.jsx(n.li,{children:"Met CSS op native elementen kan er zoveel genest worden als nodig, zonder shadow DOM problemen."}),`
`]}),`
`,e.jsx(n.h3,{id:"beschikbare-classes",children:"Beschikbare classes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".vl-content-block"})," – om content te groeperen"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".vl-grid"}),", ",e.jsx(n.code,{children:".vl-column"})," – 12-koloms layout"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".vl-group"})," – groepeert componenten horizontaal of verticaal"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".vl-margin-..."}),", ",e.jsx(n.code,{children:".vl-padding-..."}),", ",e.jsx(n.code,{children:".vl-spacer-..."})," en ",e.jsx(n.code,{children:".vl-stacked-..."})," – witruimte aanpassen"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".vl-section"})," – structuur definiëren"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".vl-separator-..."})," – varianten op de horizontale regel"]}),`
`]}),`
`,e.jsx(n.h3,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<section class="vl-section">
  <div class="vl-content-block">
    <div class="vl-grid">
      <div class="vl-column vl-column--6">
        <!-- Slechts op dit niveau is er nood aan een web-component -->
        <vl-info-tile>...</vl-info-tile>
      </div>
    </div>
  </div>
</section>
`})}),`
`,e.jsx(n.h3,{id:"afname",children:"Afname"}),`
`,e.jsx(n.p,{children:`Afnemers hoeven niets specifiek te doen om deze classes in te laden.
Zodra er één Flux-component gebruikt wordt, wordt alle layout-CSS globaal geregistreerd.`}),`
`,e.jsxs(n.p,{children:[`Indien je in je toepassing ook zelf web-componenten bouwt en je binnen je component de Flux layout styles wilt
gebruiken, moet je de `,e.jsx(n.code,{children:"vlLayoutStyles"})," manueel registreren adhv de ",e.jsx(n.code,{children:"styles()"}),"-method:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { vlLayoutStyles } from '@domg-wc/styles';

// Binnen de component class:
static get styles() {
  return [
    vlLayoutStyles,
  ]
}
`})}),`
`,e.jsx(n.h2,{id:"aanbevolen-volgorde-van-styling",children:"Aanbevolen volgorde van styling"}),`
`,e.jsx(n.p,{children:"Bij het toepassen van styling raden we deze volgorde aan:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Gebruik de Flux-styles"})}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Layout-classes zoals ",e.jsx(n.code,{children:".vl-padding-..."}),", ",e.jsx(n.code,{children:".vl-margin-..."}),", ",e.jsx(n.code,{children:".vl-group"}),", ",e.jsx(n.code,{children:".vl-section"}),", …"]}),`
`,e.jsx(n.li,{children:"In de meeste gevallen voldoende voor een nette opmaak."}),`
`]}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Tweaken met custom-css"})}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Voor kleine afwijkingen of correcties."}),`
`,e.jsx(n.li,{children:"Hou dit beperkt en consistent."}),`
`,e.jsxs(n.li,{children:["Dit wordt door de meeste componenten ondersteund via het ",e.jsx(n.code,{children:"custom-css"}),` attribuut. Deze CSS wordt toegevoegd aan de
`,e.jsx(n.code,{children:"adoptedStyleSheets"})," in de shadow DOM van de component."]}),`
`,e.jsxs(n.li,{children:["Voorbeeld",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-info-tile custom-css="h3 { color: yellow; }">...</vl-info-tile>
`})}),`
`]}),`
`]}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Schrijf custom style classes"})}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Voor het stylen / layouten van elementen en pagina's die specifiek gebruikt worden in de toepassing (voor grote
of herbruikbare aanpassingen).`}),`
`,e.jsxs(n.li,{children:["Voor het aanpassen van Flux CSS-variabelen:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"CSS-variabelen kunnen globaal aangepast worden en worden ook toegepast binnen de shadow DOM van web-componenten."}),`
`,e.jsx(n.li,{children:"CSS-variabelen kunnen in een custom class aangepast worden om enkel een deel van de pagina te beïnvloeden."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Gebruik een duidelijke prefix (bv. ",e.jsx(n.code,{children:"app-"}),") om conflicten te vermijden."]}),`
`,e.jsxs(n.li,{children:["Injecteer deze classes in de ",e.jsx(n.code,{children:"adoptedStyleSheets"})," van je toepassing."]}),`
`,e.jsxs(n.li,{children:["Voorbeeld",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export class ToepassingMain extends BaseLitElement {
  static get styles() {
    return [
      vlLayoutStyles,
      css\`
        .toepassing-main { 
          --vl-side-sheet-width: 600px;
        }
      \`,
    ]
  }

  render() {
    return html\`
      <main class="toepassing-main">...</main>
    \`
  }
}
`})}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"utility-classes-digitaal-vlaanderen",children:"Utility classes (Digitaal Vlaanderen)"}),`
`,e.jsxs(n.p,{children:[`De layout utitily classes van Digitaal
Vlaanderen worden niet as-is overgenomen en niet standaard beschikbaar gemaakt in de Flux web-componenten. Sommige van
deze utilities hebben we overgenomen als web-component indien daar een use-case voor was. Gebruikers kunnen ontbrekende
styles overnemen in custom classes (zoals `,e.jsx(n.a,{href:"#aanbevolen-volgorde-van-styling",children:"hierboven"}),` uitgelegd wordt) en ze op die
manier toepassen in hun applicatie.`]}),`
`,e.jsx(n.h2,{id:"conventies",children:"Conventies"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Alle CSS wordt geschreven als ",e.jsx(n.strong,{children:"CSS-in-TS"})," en aangeboden als ",e.jsx(n.strong,{children:"CSS-in-JS"}),"."]}),`
`,e.jsxs(n.li,{children:["De CSS volgt de ",e.jsx(n.a,{href:"https://getbem.com/",rel:"nofollow",children:e.jsx(n.strong,{children:"BEM"})}),"-methodologie."]}),`
`,e.jsxs(n.li,{children:["CSS-variabelen worden gebruikt om styling eenduidig te specificeren.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Variabelen zijn globaal gedefinieerd."}),`
`,e.jsx(n.li,{children:"Lokale afwijkingen zijn mogelijk binnen een component."}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Mixins worden geïmplementeerd als TypeScript-functies die parametriseerbare CSS teruggeven."}),`
`]})]})}function c(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}function t(s,n){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{c as default};
