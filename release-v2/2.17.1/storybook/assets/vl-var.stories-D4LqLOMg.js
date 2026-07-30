import{u as d,j as e,M as l,C as t,S as s,cc as c,cd as h,ce as u,cf as p,x}from"./iframe-DynOw9qF.js";import"./preload-helper-D9Z9MdNV.js";const g=`export const vlMediaScreenExtraSmall = 500;
export const vlMediaScreenSmall = 767;
export const vlMediaScreenMedium = 1023;
export const vlMediaScreenLarge = 1600;

export const vlPageMaxWidthWide = 1280;
`;function o(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...r.components},{FluxComponentMetaData:i}=n;return i||v("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Styles/Base (intern)/var"}),`
`,e.jsx(n.h1,{id:"var",children:"Var"}),`
`,e.jsx(i,{id:"styles-base-var"}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#doel",children:"Doel"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#gebruik",children:"Gebruik"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#voorbeeld",children:"Voorbeeld"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#variabelen",children:"Variabelen"})}),`
`]}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsx(n.p,{children:`Voor consistentie in de styling en soms om waardes een naam te geven worden standaard CSS variabelen gebruikt.
De variabelen worden steeds globaal gespecifieerd en kunnen in een concrete component (in die scope) een afwijkende
waarde krijgen. Dit moet niet gezien worden als theming, er is maar 1 stijl: die van Vlaanderen.`}),`
`,e.jsx(n.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsxs(n.p,{children:["Het zijn standaard ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",rel:"nofollow",children:"CSS variabelen"}),`:
ze beginnen dus met `,e.jsx(n.code,{children:"--"})," en zijn te gebruiken met ",e.jsx(n.code,{children:"var()"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.my-details {
    background-color: var(--vl-color--background-default);
}
`})}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(n.h2,{id:"variabelen",children:"Variabelen"}),`
`,e.jsx(n.p,{children:`Hieronder volgt een overzicht van alle variabelen.
Dit is een representatie van de broncode, ze zijn dus steeds up-to-date.`}),`
`,e.jsx(n.h3,{id:"color",children:"Color"}),`
`,e.jsxs(n.p,{children:[`Meer informatie over het beschikbare kleurenpalet en toegankelijkheid van kleuren vind je op de
`,e.jsx(n.a,{href:"/docs/styles-kleurenpalet--documentatie",children:"kleurenpalet documentatie pagina"}),"."]}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Color Variables"}),e.jsx(s,{code:c,language:"css",dark:!0})]}),`
`,e.jsx(n.h3,{id:"general",children:"General"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"General Variables"}),e.jsx(s,{code:h,language:"css",dark:!0})]}),`
`,e.jsx(n.h3,{id:"media-screen",children:"Media Screen"}),`
`,e.jsx(n.p,{children:`De resolutie in een media query specifiëren via een css variabele wordt niet door browsers ondersteund. Om toch de
'breakpoints' eenduidig te specifiëren worden ze als standaard TypeScript variabelen gedefinieerd.`}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Media Screen Variables"}),e.jsx(s,{code:g,language:"ts",dark:!0})]}),`
`,e.jsx(n.h3,{id:"spacing",children:"Spacing"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Spacing Variables"}),e.jsx(s,{code:u,language:"css",dark:!0})]}),`
`,e.jsx(n.h3,{id:"typography",children:"Typography"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Typography Variables"}),e.jsx(s,{code:p,language:"css",dark:!0})]})]})}function j(r={}){const{wrapper:n}={...d(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}function v(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const k={id:"styles-base-var",title:"Styles/Base (intern)/var",tags:["autodocs"],parameters:{docs:{page:j}}},a=({})=>x` <style>
        .sb-var {
            background-color: var(--vl-color--background-alt);
            border: var(--vl-color--border-alt) 1px solid;
            width: 240px;
            padding: 10px;
            text-align: center;
        }
    </style>
    <div class="sb-var">de alternatieve achtergrond en rand kleur</div>`;a.storyName="vl-var - color";a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({}) => html\` <style>
        .sb-var {
            background-color: var(--vl-color--background-alt);
            border: var(--vl-color--border-alt) 1px solid;
            width: 240px;
            padding: 10px;
            text-align: center;
        }
    </style>
    <div class="sb-var">de alternatieve achtergrond en rand kleur</div>\``,...a.parameters?.docs?.source}}};const S=["VarColor"];export{a as VarColor,S as __namedExportsOrder,k as default};
