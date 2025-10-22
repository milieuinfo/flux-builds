import{u as s,j as e,M as p,C as l,b7 as d,x as i,b6 as c}from"./iframe-Ds54rb_7.js";import"./preload-helper-D9Z9MdNV.js";function t(n){const a={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...n.components},{FluxMetaData:r}=a;return r||u("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Components - Atom/paragraph-style"}),`
`,e.jsx(a.h1,{id:"paragraph-style",children:"Paragraph Style"}),`
`,e.jsx(r,{id:"components-atom-paragraph-style"}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#doel",children:"Doel"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#voorbeelden",children:"Voorbeelden"})}),`
`]}),`
`,e.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(a.p,{children:["De ",e.jsx(a.code,{children:"[paragraph]"}),` CSS voorziet specifieke styling voor paragrafen. Het doel is deze implementatie te embedden in de css
van concrete componenten. Het is een bouwblok, niet bedoeld voor rechtstreeks gebruik! In een eindtoepassing een
paragraaf toevoegen gebeurd m.b.v. de `,e.jsx(a.a,{href:"/docs/components-atom-paragraph--documentatie",children:"vl-paragraph"})," component."]}),`
`,e.jsx(a.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(a.p,{children:"In dit voorbeeld zie je verschillende paragraphs."}),`
`,e.jsx(l,{of:o})]})}function h(n={}){const{wrapper:a}={...s(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(t,{...n})}):t(n)}function u(n,a){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const x={id:"components-atom-paragraph-style",title:"Components - Atom/paragraph-style (intern)",tags:["autodocs"],parameters:{docs:{page:h}}},o=({})=>i`
    <style>
        ${d}
    </style>
    <p class="cy-p-default">paragraph - default</p>
    <p class="bold cy-p-bold">paragraph - bold</p>
    <p class="introduction cy-p-introduction">paragraph - introduction</p>
    <p class="bold introduction cy-p-introduction">paragraph - bold introduction</p>
`;o.storyName="paragraph - default";o.parameters=c;o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${vlParagraphStyles}
    </style>
    <p class="cy-p-default">paragraph - default</p>
    <p class="bold cy-p-bold">paragraph - bold</p>
    <p class="introduction cy-p-introduction">paragraph - introduction</p>
    <p class="bold introduction cy-p-introduction">paragraph - bold introduction</p>
\``,...o.parameters?.docs?.source}}};const y=["ParagraphStyleDefault"];export{o as ParagraphStyleDefault,y as __namedExportsOrder,x as default};
