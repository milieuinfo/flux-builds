import{f as s}from"./stories.helper-DYHi_5m6.js";import{u as p,j as e,M as c,C as d,b3 as i,b as l}from"./iframe-Cv28D2NX.js";import"./preload-helper-PPVm8Dsz.js";function n(o){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...p(),...o.components},{FluxComponentMetaData:r}=a;return r||m("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Components - Atom/paragraph-style"}),`
`,e.jsx(a.h1,{id:"paragraph-style",children:"Paragraph Style"}),`
`,e.jsx(r,{id:"components-atom-paragraph-style"}),`
`,e.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(a.p,{children:["De ",e.jsx(a.code,{children:"paragraph"}),` CSS voorziet specifieke styling voor paragrafen. Het doel is deze implementatie te embedden in de css
van concrete componenten. Het is een bouwblok, niet bedoeld voor rechtstreeks gebruik! In een eindtoepassing een
paragraaf toevoegen gebeurt m.b.v. de `,e.jsx(a.a,{href:"/docs/components-atom-paragraph--documentatie",children:"vl-paragraph"})," component."]}),`
`,e.jsx(a.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(a.p,{children:"In dit voorbeeld zie je verschillende paragraphs."}),`
`,e.jsx(d,{of:t})]})}function h(o={}){const{wrapper:a}={...p(),...o.components};return a?e.jsx(a,{...o,children:e.jsx(n,{...o})}):n(o)}function m(o,a){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}const f={id:"components-atom-paragraph-style",title:"Components - Atom/paragraph-style (intern)",tags:["autodocs"],parameters:{docs:{page:h}}},t=({})=>l`
    <style>
        ${i}
    </style>
    <p class="cy-p-default">paragraph - default</p>
    <p class="bold cy-p-bold">paragraph - bold</p>
    <p class="introduction cy-p-introduction">paragraph - introduction</p>
    <p class="bold introduction cy-p-introduction">paragraph - bold introduction</p>
`;t.storyName="paragraph - default";t.parameters=s;const b=["ParagraphStyleDefault"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${vlParagraphStyles}
    </style>
    <p class="cy-p-default">paragraph - default</p>
    <p class="bold cy-p-bold">paragraph - bold</p>
    <p class="introduction cy-p-introduction">paragraph - introduction</p>
    <p class="bold introduction cy-p-introduction">paragraph - bold introduction</p>
\``,...t.parameters?.docs?.source}}};export{t as ParagraphStyleDefault,b as __namedExportsOrder,f as default};
