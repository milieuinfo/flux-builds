import{u as p,j as e,M as s,C as c,b7 as d,x as i,b6 as l}from"./iframe-BgD7f6Cn.js";import"./preload-helper-D9Z9MdNV.js";function r(t){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...p(),...t.components},{FluxComponentMetaData:n}=a;return n||m("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components - Atom/paragraph-style"}),`
`,e.jsx(a.h1,{id:"paragraph-style",children:"Paragraph Style"}),`
`,e.jsx(n,{id:"components-atom-paragraph-style"}),`
`,e.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(a.p,{children:["De ",e.jsx(a.code,{children:"paragraph"}),` CSS voorziet specifieke styling voor paragrafen. Het doel is deze implementatie te embedden in de css
van concrete componenten. Het is een bouwblok, niet bedoeld voor rechtstreeks gebruik! In een eindtoepassing een
paragraaf toevoegen gebeurt m.b.v. de `,e.jsx(a.a,{href:"/docs/components-atom-paragraph--documentatie",children:"vl-paragraph"})," component."]}),`
`,e.jsx(a.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(a.p,{children:"In dit voorbeeld zie je verschillende paragraphs."}),`
`,e.jsx(c,{of:o})]})}function h(t={}){const{wrapper:a}={...p(),...t.components};return a?e.jsx(a,{...t,children:e.jsx(r,{...t})}):r(t)}function m(t,a){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const y={id:"components-atom-paragraph-style",title:"Components - Atom/paragraph-style (intern)",tags:["autodocs"],parameters:{docs:{page:h}}},o=({})=>i`
    <style>
        ${d}
    </style>
    <p class="cy-p-default">paragraph - default</p>
    <p class="bold cy-p-bold">paragraph - bold</p>
    <p class="introduction cy-p-introduction">paragraph - introduction</p>
    <p class="bold introduction cy-p-introduction">paragraph - bold introduction</p>
`;o.storyName="paragraph - default";o.parameters=l;o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${vlParagraphStyles}
    </style>
    <p class="cy-p-default">paragraph - default</p>
    <p class="bold cy-p-bold">paragraph - bold</p>
    <p class="introduction cy-p-introduction">paragraph - introduction</p>
    <p class="bold introduction cy-p-introduction">paragraph - bold introduction</p>
\``,...o.parameters?.docs?.source}}};const b=["ParagraphStyleDefault"];export{o as ParagraphStyleDefault,b as __namedExportsOrder,y as default};
