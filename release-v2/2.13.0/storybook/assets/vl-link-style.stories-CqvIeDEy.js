import{u as a,j as e,M as t,C as r,aX as c,aW as d,x as m,b7 as k}from"./iframe-69xRVzLO.js";import"./preload-helper-D9Z9MdNV.js";function o(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...a(),...s.components},{FluxComponentMetaData:i}=n;return i||p("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Components - Atom/link-style"}),`
`,e.jsx(n.h1,{id:"link-style",children:"Link Style"}),`
`,e.jsx(i,{id:"components-atom-link-style"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"link"}),` CSS voorziet specifieke styling voor links. Het doel is deze implementatie te embedden in de css van concrete
componenten. Het is een bouwblok, niet bedoeld voor rechtstreeks gebruik! In een eindtoepassing een link toevoegen
gebeurd m.b.v. de `,e.jsx(n.a,{href:"/docs/components-atom-link--documentatie",children:"vl-link"})," component."]}),`
`,e.jsxs(n.p,{children:["Componenten zelf, bvb. de ",e.jsx(n.a,{href:"/docs/components-doormat--documentatie",children:"vl-doormat"}),` kunnen ook links bevatten en gebruiken deze CSS-klasse om geneste
shadow-dom's te vermijden.`]}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.p,{children:"In dit voorbeeld zie je verschillende links, ze worden hier specifiek ge-wrapped in een custom style-class."}),`
`,e.jsx(r,{of:l})]})}function v(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}function p(s,n){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}const f={id:"components-atom-link-style",title:"Components - Atom/link-style (intern)",tags:["autodocs"],parameters:{docs:{page:v}}},l=({})=>m`
    <style>
        ${c()}
        .sb-link {
            ${d};
            margin-bottom: 1rem;
        }
    </style>
    <div class="sb-link">
        <a>link - default</a>
    </div>
    <div class="sb-link">
        <a class="bold">link - bold</a>
    </div>
    <div class="sb-link">
        <a class="small">link - small</a>
    </div>
    <div class="sb-link">
        <a class="large">link - large</a>
    </div>
    <div class="sb-link">
        <a class="error">link - error</a>
    </div>
    <div class="sb-link">
        <a
            ><span class="vl-icon vl-icon--before vl-icon--bike"></span>link - fiets<span
                class="vl-icon vl-icon--after vl-icon--bike"
            ></span
        ></a>
    </div>
`;l.storyName="link-style - default";l.parameters=k;l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        \${vlLinkStyles()}
        .sb-link {
            \${vlIconStyles};
            margin-bottom: 1rem;
        }
    </style>
    <div class="sb-link">
        <a>link - default</a>
    </div>
    <div class="sb-link">
        <a class="bold">link - bold</a>
    </div>
    <div class="sb-link">
        <a class="small">link - small</a>
    </div>
    <div class="sb-link">
        <a class="large">link - large</a>
    </div>
    <div class="sb-link">
        <a class="error">link - error</a>
    </div>
    <div class="sb-link">
        <a
            ><span class="vl-icon vl-icon--before vl-icon--bike"></span>link - fiets<span
                class="vl-icon vl-icon--after vl-icon--bike"
            ></span
        ></a>
    </div>
\``,...l.parameters?.docs?.source}}};const h=["LinkStyleDefault"];export{l as LinkStyleDefault,h as __namedExportsOrder,f as default};
