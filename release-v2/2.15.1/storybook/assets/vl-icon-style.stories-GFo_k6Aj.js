import{u as a,j as n,M as l,C as t,aV as d,x as r}from"./iframe-nqJ0ju39.js";import"./preload-helper-D9Z9MdNV.js";function c(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...a(),...o.components},{FluxComponentMetaData:s}=e;return s||p("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Components - Atom/icon-style"}),`
`,n.jsx(e.h1,{id:"icon-style",children:"Icon Style"}),`
`,n.jsx(s,{id:"components-atom-icon-style"}),`
`,n.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,n.jsxs(e.p,{children:["Er wordt specifieke ",n.jsx(e.code,{children:"icon"}),` styling voorzien. Het doel is deze implementatie te embedden in de css van concrete
componenten. Het is een bouwblok, niet bedoeld voor rechtstreeks gebruik! In een eindtoepassing een icoon toevoegen
gebeurt m.b.v. de `,n.jsx(e.a,{href:"/docs/components-atom-icon--documentatie",children:"vl-icon"})," component."]}),`
`,n.jsxs(e.p,{children:["Componenten zoals de ",n.jsx(e.a,{href:"/docs/components-atom-button--documentatie",children:"vl-button"}),` en
`,n.jsx(e.a,{href:"/docs/components-atom-link--documentatie",children:"vl-link"}),` kunnen ook een icoon bevatten, deze gebruiken
daarvoor deze basis css. Hierdoor worden componenten-in-componenten of shadow-dom's in shadow-dom's vermeden.`]}),`
`,n.jsxs(e.p,{children:["Daarnaast, zie ",n.jsx(e.a,{href:"/docs/beheren-icon-font--documentatie",children:"Beheren/Icon Font"}),`, wordt er een css-mapping voor de iconen
uit het `,n.jsx(e.a,{href:"/docs/styles-base-intern-font--documentatie",children:"icon-font"}),` naar een logische naam voorzien. De feitelijke mapping
wordt gegenereerd op basis van de `,n.jsx(e.code,{children:"svg"})," variant van het font."]}),`
`,n.jsx(e.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,n.jsx(t,{of:i})]})}function v(o={}){const{wrapper:e}={...a(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(c,{...o})}):c(o)}function p(o,e){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}const b={id:"components-atom-icon-style",title:"Components - Atom/icon-style (intern)",tags:["autodocs"],parameters:{docs:{page:v}}},i=({})=>r`
    <style>
        .sb-icon {
            ${d};
            margin-bottom: 1rem;
        }
    </style>
    <div class="sb-icon">
        <div>icon - default</div>
        <span class="vl-icon vl-icon--paperplane">
    </div>
    <div class="sb-icon">
        <div>icon - small</div>
        <span class="vl-icon vl-icon--small vl-icon--paperplane">
    </div>
    <div class="sb-icon">
        <div>icon - large</div>
        <span class="vl-icon vl-icon--large vl-icon--paperplane">
    </div>
    <div class="sb-icon">
        <div>icon - light</div>
        <span class="vl-icon vl-icon--light vl-icon--paperplane">
    </div>
    <div class="sb-icon">
        <div>icon - right-margin</div>
        <span class="vl-icon vl-icon--right-margin vl-icon--paperplane">
    </div>
    <div class="sb-icon">
        <div>icon - left-margin</div>
        <span class="vl-icon vl-icon--left-margin vl-icon--paperplane">
    </div>
    <div class="sb-icon">
        <div>icon - clickable</div>
        <span class="vl-icon vl-icon--clickable vl-icon--paperplane">
    </div>
`;i.storyName="icon-style - default";i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        .sb-icon {
            \${vlIconStyles};
            margin-bottom: 1rem;
        }
    </style>
    <div class="sb-icon">
        <div>icon - default</div>
        <span class="vl-icon vl-icon--paperplane">
    </div>
    <div class="sb-icon">
        <div>icon - small</div>
        <span class="vl-icon vl-icon--small vl-icon--paperplane">
    </div>
    <div class="sb-icon">
        <div>icon - large</div>
        <span class="vl-icon vl-icon--large vl-icon--paperplane">
    </div>
    <div class="sb-icon">
        <div>icon - light</div>
        <span class="vl-icon vl-icon--light vl-icon--paperplane">
    </div>
    <div class="sb-icon">
        <div>icon - right-margin</div>
        <span class="vl-icon vl-icon--right-margin vl-icon--paperplane">
    </div>
    <div class="sb-icon">
        <div>icon - left-margin</div>
        <span class="vl-icon vl-icon--left-margin vl-icon--paperplane">
    </div>
    <div class="sb-icon">
        <div>icon - clickable</div>
        <span class="vl-icon vl-icon--clickable vl-icon--paperplane">
    </div>
\``,...i.parameters?.docs?.source}}};const g=["IconStyleDefault"];export{i as IconStyleDefault,g as __namedExportsOrder,b as default};
