import{u as t,j as e,M as d}from"./iframe-D9dm7PbY.js";import"./preload-helper-D9Z9MdNV.js";function r(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Recepten/Imports"}),`
`,e.jsx(n.h1,{id:"imports",children:"Imports"}),`
`,e.jsx(n.h2,{id:"import-varianten",children:"Import Varianten"}),`
`,e.jsxs(n.p,{children:["Er zijn verschillende manieren om te ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import",rel:"nofollow",children:"importeren"}),`.
De meest gangbare om de @domg-wc web-componenten te gebruiken zijn:`]}),`
`,e.jsx(n.h3,{id:"import-met-side-effects",children:"Import met side-effects"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import '@domg-wc/components/block/button';
`})}),`
`,e.jsxs(n.p,{children:[`Voor elke component is er op component niveau een barrel file voorzien (index.js). Indien er meerdere (sub-)componenten
zijn worden deze allemaal door deze import geregistreerd, in dit geval `,e.jsx(n.code,{children:"VlButtonElement"})," en ",e.jsx(n.code,{children:"VlLinkButtonElement"}),`.
Op deze manier krijg je `,e.jsx(n.strong,{children:"geen referentie"}),` naar de component, maar zowel de IDE als de bundler (bvb. webpack) weerhoudt
de code (ze wordt niet verwijderd omdat ze als dode code gezien wordt).`]}),`
`,e.jsx(n.h3,{id:"named-import",children:"Named Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import { registerWebComponents } from '@domg-wc/common';
import { VlButtonComponent } from '@domg-wc/components/atom';

registerWebComponents([VlButtonComponent]);
`})}),`
`,e.jsxs(n.p,{children:[`Bij een named import moet je ook 'iets' doen met de referentie, anders zal zowel de IDE als de bundler dit als 'dode'
code zien. Je IDE zal bij een re-arrange de import verwijderen, de bundler zal de code `,e.jsx(n.strong,{children:"niet weerhouden"}),`.
Om dit te vermijden moet je de referentie gebruiken. Het is voldoende de referentie op te nemen, gewoon `,e.jsx(n.code,{children:"VlButtonElement;"}),`
onder je import zetten. Om echter duidelijk te maken waarom je dit doet voorzien we de methode `,e.jsx(n.code,{children:"registerWebComponents"}),"."]}),`
`,e.jsx(n.h3,{id:"named-import-via-root-barrel-file",children:"Named Import via root-barrel file"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import { registerWebComponents } from '@domg-wc/common';
import { VlButtonComponent } from '@domg-wc/components/atom';

registerWebComponents([VlButtonComponent]);
`})}),`
`,e.jsxs(n.p,{children:[`Dit is een variant op de gewone named import. Elke @domg-wc artifact voorziet op root niveau een barrel file waarin alle
componenten van het artifact ge-exporteerd worden. `,e.jsx("br",{}),`
Belangrijk: in de package.json van het artifact wordt de root-barrel-file expliciet gemarkeerd als
`,e.jsx(n.strong,{children:"zonder neveneffecten"}),". Dit maakt dat je op deze manier enkel de componenten die je refereert importeert, niets meer."]}),`
`,e.jsx(n.h2,{id:"side-effects",children:"Side Effects"}),`
`,e.jsxs(n.p,{children:["Een ",e.jsx(n.a,{href:"https://sgom.es/posts/2020-06-15-everything-you-never-wanted-to-know-about-side-effects/",rel:"nofollow",children:"JavaScript side effect"}),`
is code die uitgevoerd wordt omdat ze geïmporteerd wordt, niet omdat ze aangeroepen wordt. Dit heeft impact op het
tree-shaken bij het bundelen. Vaak gebeurt het registreren van een web-component als side-effect in dezelfde module
(bestand) als waar de component gedefinieerd wordt.`]}),`
`,e.jsxs(n.p,{children:["Opmerking: de ",e.jsx(n.code,{children:"@domg-wc"}),` web-componenten worden geregistreerd m.b.v. de
`,e.jsx(n.a,{href:"https://netbasal.com/behind-the-scenes-how-typescript-decorators-operate-28f8dcacb224",rel:"nofollow",children:"decorator"})," ",e.jsx(n.code,{children:"@webComponent"}),`
die zorgt ervoor dat na typescript transpilatie de javascript code er als onderstaand uitziet. Daardoor zal de
registratie gebeuren onafhanklijk van de manier van importeren, zolang de code maar niet
`,e.jsx(n.a,{href:"/docs/recepten-tree-shaking--documentatie",children:"ge-tree-shaked"})," wordt!"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`let VlAccordionComponent = class VlAccordionComponent extends BaseHTMLElement {
 ...
};
VlAccordionComponent = __decorate([
    webComponent('vl-accordion'),
    __metadata("design:paramtypes", [])
], VlAccordionComponent);
export { VlAccordionComponent };
`})})]})}function s(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{s as default};
