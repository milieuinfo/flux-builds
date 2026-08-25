import{u as i,j as e,M as o}from"./iframe-CY-ZM549.js";import"./preload-helper-D9Z9MdNV.js";function t(r){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Recepten/Tree Shaking"}),`
`,e.jsx(n.h1,{id:"tree-shaking",children:"Tree Shaking"}),`
`,e.jsxs(n.p,{children:[`Als je een bundler gebruikt - bvb. webpack of rollup - dan zal deze transitief (typisch vertrekkend vanuit je
applicatieve index.js) enkel die code opnemen die je importeert. Code die niet gerefereerd wordt of als ongebruikt
gezien wordt, belandt niet in de bundel. Dit proces van enkel relevante code opnemen noemt
`,e.jsx(n.a,{href:"https://webpack.js.org/guides/tree-shaking/",rel:"nofollow",children:"tree shaking"}),"."]}),`
`,e.jsxs(n.p,{children:[`De te prefereren bundler bij Departement Omgeving is webpack. Om te tree-shaken houdt webpack rekening met de
`,e.jsx(n.a,{href:"https://webpack.js.org/guides/tree-shaking/#clarifying-tree-shaking-and-sideeffects",rel:"nofollow",children:"'sideEffects'"}),` zoals
gespecifieerd in de package.json's (zowel van de applicatie als van de bibliotheken die gerefereerd worden).
Belangrijk hierbij is dat de default (indien er niets gespecifieerd wordt) `,e.jsx(n.code,{children:"sideEffects=true"}),` is. Dit heeft tot
gevolg dat als je eender welke named import doet via een barrel file ook alle andere vermelde exports geïmporteerd
worden. Om die reden worden in de `,e.jsx(n.code,{children:"@domg-wc"}),` artifacts de root-barrel files ge-exclude uit de sideEffects. Vroeger
(< v1.17.0) werd de default gebruikt waardoor er niet ge-tree-shaked werd als je op die manier imports deed en via
webpack bundelde.`]}),`
`,e.jsx(n.p,{children:`Opmerking 1: webpack werkt eigenlijk niet conform de import specificatie, een named import zou eigenlijk geen
side-effects mogen geven, daarvoor is expliciet de 'import with side-effects' voorzien.`}),`
`,e.jsxs(n.p,{children:["Opmerking 2: omdat we ",e.jsx(n.strong,{children:"op component niveau"}),` - voor webpack - sideffects activeren voor die sub-barrel files zorgt
dat ervoor dat als je het onderstaande doet toch ook `,e.jsx(n.code,{children:"VlLinkButtonElement"}),` geregistreerd wordt. Terwijl als je via de
root-barrel file gaat VlLinkButtonElement niet geregistreerd wordt!`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import { VlButtonComponent } from '@domg-wc/components/atom';
VlButtonComponent;
`})})]})}function a(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{a as default};
