import{u as p,j as e,M as s,C as c,bc as d,x as i,bb as l}from"./iframe-iHJvAyUB.js";import"./preload-helper-D9Z9MdNV.js";function r(o){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...p(),...o.components},{FluxComponentMetaData:n}=a;return n||m("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components - Atom/paragraph-style"}),`
`,e.jsx(a.h1,{id:"paragraph-style",children:"Paragraph Style"}),`
`,e.jsx(n,{id:"components-atom-paragraph-style"}),`
`,e.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(a.p,{children:["De ",e.jsx(a.code,{children:"paragraph"}),` CSS voorziet specifieke styling voor paragrafen. Het doel is deze implementatie te embedden in de css
van concrete componenten. Het is een bouwblok, niet bedoeld voor rechtstreeks gebruik! In een eindtoepassing een
paragraaf toevoegen gebeurd m.b.v. de `,e.jsx(a.a,{href:"/docs/components-atom-paragraph--documentatie",children:"vl-paragraph"})," component."]}),`
`,e.jsx(a.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(a.p,{children:"In dit voorbeeld zie je verschillende paragraphs."}),`
`,e.jsx(c,{of:t})]})}function h(o={}){const{wrapper:a}={...p(),...o.components};return a?e.jsx(a,{...o,children:e.jsx(r,{...o})}):r(o)}function m(o,a){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}const y={id:"components-atom-paragraph-style",title:"Components - Atom/paragraph-style (intern)",tags:["autodocs"],parameters:{docs:{page:h}}},t=({})=>i`
    <style>
        ${d}
    </style>
    <p class="cy-p-default">paragraph - default</p>
    <p class="bold cy-p-bold">paragraph - bold</p>
    <p class="introduction cy-p-introduction">paragraph - introduction</p>
    <p class="bold introduction cy-p-introduction">paragraph - bold introduction</p>
`;t.storyName="paragraph - default";t.parameters=l;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${vlParagraphStyles}
    </style>
    <p class="cy-p-default">paragraph - default</p>
    <p class="bold cy-p-bold">paragraph - bold</p>
    <p class="introduction cy-p-introduction">paragraph - introduction</p>
    <p class="bold introduction cy-p-introduction">paragraph - bold introduction</p>
\``,...t.parameters?.docs?.source}}};const b=["ParagraphStyleDefault"];export{t as ParagraphStyleDefault,b as __namedExportsOrder,y as default};
