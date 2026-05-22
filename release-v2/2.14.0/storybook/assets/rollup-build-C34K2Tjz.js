import{u as i,j as e,M as l}from"./iframe-D9dm7PbY.js";import"./preload-helper-D9Z9MdNV.js";function r(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Recepten/Rollup Beperkingen"}),`
`,e.jsx(n.h1,{id:"rollup-beperkingen",children:"Rollup Beperkingen"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://rollupjs.org/",rel:"nofollow",children:"Rollup"})," is een module bundler die gebruikt kan worden om webcomponenten te bundelen. De te preferen bundler bij Departement Omgeving is ",e.jsx(n.a,{href:"https://webpack.js.org/",rel:"nofollow",children:"Webpack"}),"."]}),`
`,e.jsx(n.h2,{id:"commonjs-modules",children:"CommonJS modules"}),`
`,e.jsxs(n.p,{children:["Projecten die opgebouwd zijn met ",e.jsx(n.code,{children:"Rollup"})," kunnen problemen geven, bij het bundelen van third party libraries die CommonJS modules gebruiken. Dit komt omdat Rollup standaard ES modules verwacht en sommige libraries nog steeds CommonJS modules gebruiken. Dit kan opgelost worden door de ",e.jsx(n.code,{children:"@rollup/plugin-commonjs"})," plugin te installeren en te configureren."]}),`
`,e.jsx(n.h2,{id:"imports",children:"Imports"}),`
`,e.jsxs(n.p,{children:[`Afhankelijk van de library kan je dit oplossen door de manier van import te veranderen.
Voor sommige libraries zullen named imports niet werken. In dat geval moet je `,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#forms_of_import_declarations",rel:"nofollow",children:"namespace imports"})," gebruiken."]}),`
`,e.jsx(n.h3,{id:"named-imports",children:"Named imports"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"ipv deze code:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-TypeScript",children:`import { Dropzone } from 'dropzone';
`})}),`
`,e.jsx(n.h3,{id:"namespace-imports",children:"Namespace imports"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"gebruik deze code:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-TypeScript",children:`import * as Dropzone from 'dropzone';
`})})]})}function d(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{d as default};
