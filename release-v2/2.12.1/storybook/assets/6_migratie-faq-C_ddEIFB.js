import{u as s,j as e,M as t}from"./iframe-B6HStWZE.js";import"./preload-helper-D9Z9MdNV.js";function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Afnemen/Migratie v2 - FAQ"}),`
`,e.jsx(n.h1,{id:"migratie-v2---faq",children:"Migratie v2 - FAQ"}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#kan-ik-direct-importeren-of-moet-ik-de-registerwebcomponents-functie-gebruiken",children:"Kan ik direct importeren of moet ik de registerWebComponents functie gebruiken?"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#blijft-de-fat-js-bundel-beschikbaar",children:"Blijft de fat-js bundel beschikbaar?"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#css-import-met-raw-werkt-niet-in-webpack-wat-ontbreekt-er",children:"CSS import met ?raw werkt niet in Webpack. Wat ontbreekt er?"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#hoe-komt-dat-klasses-die-in-web-universum-v3-staan-niet-meer-beschikbaar-zijn",children:"Hoe komt dat klasses die in Web Universum v3 staan, niet meer beschikbaar zijn?"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#vl-u-visually-hidden-werkt-niet-meer",children:"vl-u-visually-hidden werkt niet meer."})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#de-event-listeners-werken-niet-meer",children:"De event listeners werken niet meer."})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#attributen-wijzigingen",children:"Attributen-wijzigingen."})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#eigen-stylesheet-instellen-werkt-niet",children:"Eigen stylesheet instellen werkt niet?"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#wat-is-de-impact-op-vl-grid",children:"Wat is de impact op vl-grid?"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#data-vl-no-space-top-op-een-section-werkt-niet-meer",children:"data-vl-no-space-top op een section werkt niet meer."})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#de-form-validation-error-message-verschijnt-niet-wat-kan-de-oorzaak-zijn",children:"De form validation error message verschijnt niet. Wat kan de oorzaak zijn?"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#na-het-verwijderen-van-de-data-vl-prefix-zijn-er-zaken-gebroken-hoe-kan-dit",children:"Na het verwijderen van de data-vl- prefix zijn er zaken gebroken. Hoe kan dit?"})}),`
`]}),`
`,e.jsx(n.h2,{id:"kan-ik-direct-importeren-of-moet-ik-de-registerwebcomponents-functie-gebruiken",children:"Kan ik direct importeren of moet ik de registerWebComponents functie gebruiken?"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Antwoord:"})," Beide methoden worden ondersteund:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Directe import (auto-registratie):",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import '@domg-wc/components/button';
`})}),`
`]}),`
`,e.jsxs(n.li,{children:["Expliciete registratie:",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlButtonComponent } from '@domg-wc/components';
import { registerWebComponents } from '@domg-wc/common';
registerWebComponents([VlButtonComponent]);
`})}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"De expliciete registratie wordt aangeraden om tree-shaking te optimaliseren en alleen de benodigde componenten te laden."}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/docs/afnemen-migratie-v2-aanpak--documentatie#33-imports",children:"Meer informatie over hoe imports wijzigen vind je hier"})}),`
`,e.jsx(n.h2,{id:"blijft-de-fat-js-bundel-beschikbaar",children:"Blijft de fat-js bundel beschikbaar?"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Antwoord:"})," De fat-js bundel blijft beschikbaar voor legacy toepassingen. In v2 is deze aangepast om de nieuwe componentimplementaties te gebruiken, maar de API blijft grotendeels hetzelfde. Je kunt deze gebruiken via de CDN:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script src="https://cdn.omgeving.vlaanderen.be/domg/domg-wc/2.0.0/domg-wc-2.0.0.min.js"><\/script>
`})}),`
`,e.jsx(n.p,{children:"Echter, voor nieuwe projecten wordt het aangeraden om de npm-packages te gebruiken in plaats van de fat-js bundel."}),`
`,e.jsx(n.h2,{id:"css-import-met-raw-werkt-niet-in-webpack-wat-ontbreekt-er",children:"CSS import met ?raw werkt niet in Webpack. Wat ontbreekt er?"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Probleem:"})," Imports zoals ",e.jsx(n.code,{children:"import varsCss from './vl-vars.raw.css?raw'"})," falen of geven geen string terug."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Oplossing:"})," Zorg dat Webpack 5 een aparte rule heeft voor ",e.jsx(n.code,{children:"?raw"}),", zodat CSS als string ingelezen wordt:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\\.css$/i,
        resourceQuery: /raw/, // matcht ?raw
        type: 'asset/source', // geeft file-inhoud als string terug
      },
      {
        test: /\\.css$/i,
        use: ['style-loader', 'css-loader'], // normale CSS verwerking
      },
    ],
  },
};
`})}),`
`,e.jsx(n.p,{children:"Indien je TypeScript gebruikt, voeg dan ook een module-declaratie toe:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`declare module '*.css?raw' {
    const content: string;
    export default content;
}
`})}),`
`,e.jsx(n.h2,{id:"hoe-komt-dat-klasses-die-in-web-universum-v3-staan-niet-meer-beschikbaar-zijn",children:"Hoe komt dat klasses die in Web Universum v3 staan, niet meer beschikbaar zijn?"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Antwoord:"}),` Vroeger gebruikten we de css klasses van Digitaal Vlaanderen, zoals die gedocumenteerd waren in Web
Universum v3, als basis voor onze web componenten, zoals bv. de `,e.jsx(n.code,{children:"vl-u-visually-hidden"}),"-klasse of de ",e.jsx(n.code,{children:"vl-grid"}),"-klasse."]}),`
`,e.jsxs(n.p,{children:["Wat voor ons problematisch was, is dat bestaande klasses van DV voor conflicten zorgden; ",e.jsx(n.code,{children:"vl-grid"}),` bv
aan onze kant gebruikt achterliggend CSS grid, terwijl die van Web Universum v3 `,e.jsx(n.code,{children:"flexbox"})," gebruikt."]}),`
`,e.jsx(n.p,{children:`Daarnaast pasten we vaak onze HTML templates aan, aan de CSS van DV, ipv andersom. Vanaf v2 hebben we beslist om de CSS
te schrijven die het beste past bij onze HTML template, in plaats van onze HTML templates te wijzigen zodat we DV's CSS
kunnen afnemen zonder enige wijziging.`}),`
`,e.jsx(n.p,{children:`De CSS van DV kwam transitief binnen, ook hetgeen wij niet gedocumenteerd hebben in onze storybook.
Nu staat al die CSS aan onze kant en behouden we enkel wat we zelf gebruiken.`}),`
`,e.jsx(n.p,{children:`Daarnaast schrijven we nu voor nieuwe componenten onze eigen CSS, maar volgen daar op vlak van spacing, styling
& layout wel de guidelines die Digitaal Vlaanderen vooropstelt.`}),`
`,e.jsx(n.h2,{id:"vl-u-visually-hidden-werkt-niet-meer",children:"vl-u-visually-hidden werkt niet meer."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Antwoord:"})," De ",e.jsx(n.code,{children:"vl-u-visually-hidden"}),"-klasse is nu vervangen door ",e.jsx(n.code,{children:"vl-visually-hidden"}),`,
`,e.jsx(n.a,{href:"docs/styles-layout-afnemers-accessibility--documentatie",children:"zie deze pagina voor meer info"})]}),`
`,e.jsx(n.h2,{id:"de-event-listeners-werken-niet-meer",children:"De event listeners werken niet meer."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Probleem:"})," Event listeners die luisteren naar v1 events zoals ",e.jsx(n.code,{children:"vl-checked"}),", ",e.jsx(n.code,{children:"vl-input"})," of ",e.jsx(n.code,{children:"vl-select"})," werken niet meer."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Oplossing:"}),` Update de event namen naar de nieuwe v2 namen (zie desbetreffende documentatie).
Met name voor de form-gerelateerde componenten zijn de meeste events nu gestandaardiseerd naar `,e.jsx(n.code,{children:"vl-change"})," en ",e.jsx(n.code,{children:"vl-input"})]}),`
`,e.jsx(n.p,{children:`Vroeger was er geen mogelijkheid om op basis van events te weten, of de gebruiker de value veranderde,
of als het programmatorisch gebeurde, in beide gevallen werd hetzelfde event gedispatcht.`}),`
`,e.jsxs(n.p,{children:["Nu voorzien we aparte ",e.jsx(n.code,{children:"vl-input"})," en ",e.jsx(n.code,{children:"vl-change"}),` events. Gelijkaardig aan de HTML-standaard,
representeert `,e.jsx(n.code,{children:"vl-input"})," event gebruikersinteractie terwijl ",e.jsx(n.code,{children:"vl-change"}),` event voor eender welke wijziging wordt
voorzien (zowel gebruikersinteractie als programmatorische wijziging).`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// V1
radio.addEventListener('vl-checked', (event) => { ... });

// V2
radio.addEventListener('vl-change', (event) => { console.log('bij elke wijziging') });
radio.addEventListener('vl-input', (event) => { console.log('enkel bij gebruikersinteractie') });
`})}),`
`,e.jsx(n.h2,{id:"attributen-wijzigingen",children:"Attributen-wijzigingen."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Probleem:"})," Sommige attributen zijn gewijzigd van naam of format."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Oplossing:"}),` Raadpleeg de component-specifieke documentatie voor een gedetailleerd overzicht van wijzigingen per
component.`]}),`
`,e.jsx(n.p,{children:"Algemene wijzigingen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data-vl-*"}),"-attributen verliezen de ",e.jsx(n.code,{children:"data-vl-"}),"-prefix; bv. ",e.jsx(n.code,{children:'data-vl-size="4"'})," → ",e.jsx(n.code,{children:'size="4"'})]}),`
`,e.jsxs(n.li,{children:["alle componenten met ",e.jsx(n.code,{children:'is=""'})," attributen zijn geschrapt; bv. ",e.jsx(n.code,{children:'is="vl-button-pill"'})," → ",e.jsx(n.code,{children:"<vl-pill clickable>"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"eigen-stylesheet-instellen-werkt-niet",children:"Eigen stylesheet instellen werkt niet?"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Probleem:"})," Custom styling wordt overschreven of werkt niet."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Oplossing:"})}),`
`,e.jsxs(n.p,{children:["Onze ",e.jsx(n.a,{href:"/docs/recepten-css-styling--documentatie#globale-css",children:"globale styling"}),` wordt automatisch op de DOM geplaatst.
Je dient de volgende functie aan te roepen om je er van te
te verzekeren dat je applicatie-specifieke CSS pas ingeladen wordt nadat onze CSS ingeladen is:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { css } from 'lit';
import { GlobalStyles } from '@domg-wc/common';

const customCSS = css\`
 :root {
    --vl-side-sheet-width: 580px; /* voor desktop */
    --vl-side-sheet-width-mobile: 100%; /* voor mobile */
  }
\`;

GlobalStyles.getInstance().addCustomCss([customCSS]);
`})}),`
`,e.jsx(n.h2,{id:"wat-is-de-impact-op-vl-grid",children:"Wat is de impact op vl-grid?"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Antwoord:"})," De grid is grondig gewijzigd en heeft een aantal specifieke aanpassingen nodig."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"vl-grid"})," gebruikt nu achterliggend ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout",rel:"nofollow",children:"CSS grid"}),`
ipv flexbox`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"vl-column"})," heeft een default waarde nodig zoals ",e.jsx(n.code,{children:"vl-column--12"})," (bij ",e.jsx(n.code,{children:'is="vl-grid"'})," was dat niet het geval)."]}),`
`,e.jsx(n.li,{children:"Kolommen worden op een nieuwe manier aangeboden:"}),`
`]}),`
`,e.jsxs("table",{style:{width:"100%"},children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Oude attribuut"}),e.jsx("th",{children:"Nieuwe aanpak / vervanging"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:'data-vl-size="n"'}),e.jsx("td",{children:'class="vl-column--n"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:'data-vl-extra-small-size="n"'}),e.jsx("td",{children:'class="vl-column--xs-n"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:'data-vl-small-size="n"'}),e.jsx("td",{children:'class="vl-column--s-n"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:'data-vl-medium-size="n"'}),e.jsx("td",{children:'class="vl-column--m-n"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:'data-vl-medium-max-size="12"'}),e.jsx("td",{children:'mag weg (bij andere waarden dan "12" moeten de kolombreedtes herberekend worden naar een 12 kolommen grid)'})]})]}),`
`,e.jsx(n.p,{children:"Verifieer na de wijzigingen de grid layout zeker ook op verschillende resoluties."}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"data-vl-is-stacked..."})," attributen op ",e.jsx(n.code,{children:"vl-grid"})," kunnen vervangen worden door de stacked classes: ",e.jsx(n.code,{children:"vl-stacked-..."}),`.
Zie `,e.jsx(n.a,{href:"/docs/styles-layout-stacked--documentatie",children:"vl-stacked documentatie"}),"."]}),`
`,e.jsxs(n.p,{children:["Voor meer informatie kan je de ",e.jsx(n.a,{href:"/docs/styles-layout-grid--documentatie",children:"vl-grid documentatie hier raadplegen"}),"."]}),`
`,e.jsx(n.h2,{id:"data-vl-no-space-top-op-een-section-werkt-niet-meer",children:"data-vl-no-space-top op een section werkt niet meer."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Antwoord:"})," Klopt, in het geval van ",e.jsx(n.code,{children:'<section is="vl-region">'})," zouden we aanraden dit te vervangen door ",e.jsx(n.code,{children:'<section class="vl-section">'}),", waar we echter geen alternatief aanbieden voor ",e.jsx(n.code,{children:"data-vl-no-space-top"}),`.
Een mogelijke oplossing is om hier de class `,e.jsx(n.code,{children:"vl-section"})," te laten vallen en puur het semantische ",e.jsx(n.code,{children:"<section>"})," element over te houden."]}),`
`,e.jsx(n.h2,{id:"de-form-validation-error-message-verschijnt-niet-wat-kan-de-oorzaak-zijn",children:"De form validation error message verschijnt niet. Wat kan de oorzaak zijn?"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Antwoord"}),": Dit zijn de stappen om ",e.jsx(n.code,{children:'is="vl-form-validation-message data-vl-error"'})," te migreren:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:['Eerst migreren naar de v1 "next"-variant: ',e.jsx(n.code,{children:"<vl-error-message-next>"})]}),`
`,e.jsxs(n.li,{children:["Vervolgens migreren naar de v2 variant: ",e.jsx(n.code,{children:"<vl-form-message>"})]}),`
`,e.jsxs(n.li,{children:["Indien de message niet verschijnt kan dit komen omdat het component niet gekoppeld is aan een form element met het ",e.jsx(n.code,{children:"for"}),"-attribuut."]}),`
`,e.jsxs(n.li,{children:["Indien de message niet kan gekoppeld worden aan een form element, moet het attribuut ",e.jsx(n.code,{children:"show"})," toegevoegd worden."]}),`
`]}),`
`,e.jsx(n.h2,{id:"na-het-verwijderen-van-de-data-vl--prefix-zijn-er-zaken-gebroken-hoe-kan-dit",children:"Na het verwijderen van de data-vl- prefix zijn er zaken gebroken. Hoe kan dit?"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Antwoord"}),": Dit kan komen door het gebruik van ",e.jsx(n.code,{children:"data-vl-"})," in selectors of via het dataset object."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Selectors als ",e.jsx(n.code,{children:"component-naam[data-vl-...]"}),", ",e.jsx(n.code,{children:"[data-vl-...]"})," zullen breken. Hier moet ook de ",e.jsx(n.code,{children:"data-vl-"})," prefix gewist worden."]}),`
`,e.jsxs(n.li,{children:["Referenties via het dataset object zullen ook breken. Gebruik hiervoor ",e.jsx(n.code,{children:"getAttribute"}),` in de plaats.
bv: `,e.jsx(n.code,{children:"data-vl-max-resolution"})," → ",e.jsx(n.code,{children:"element.dataset.vlMaxResolution"}),` wordt:
`,e.jsx(n.code,{children:"max-resolution"})," → ",e.jsx(n.code,{children:"element.getAttribute('max-resolution')"})]}),`
`]})]})}function l(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{l as default};
