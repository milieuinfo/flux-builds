import{u as d,j as e,M as l,C as t,S as s,c4 as c,c5 as h,c6 as x,c7 as u,x as p}from"./iframe-CflcmDUD.js";import"./preload-helper-D9Z9MdNV.js";const j=`export const vlMediaScreenExtraSmall = 500;
export const vlMediaScreenSmall = 767;
export const vlMediaScreenMedium = 1023;
export const vlMediaScreenLarge = 1600;

export const vlPageMaxWidthWide = 1280;
`;function o(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...n.components},{FluxMetaData:i}=r;return i||v("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Styles/Base (intern)/var"}),`
`,e.jsx(r.h1,{id:"var",children:"Var"}),`
`,e.jsx(i,{id:"styles-base-var"}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#doel",children:"Doel"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#gebruik",children:"Gebruik"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#voorbeeld",children:"Voorbeeld"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#variabelen",children:"Variabelen"})}),`
`]}),`
`,e.jsx(r.h2,{id:"doel",children:"Doel"}),`
`,e.jsx(r.p,{children:`Voor consistentie in de styling en soms om waardes een naam te geven worden standaard CSS variabelen gebruikt.
De variabelen worden steeds globaal gespecifieerd en kunnen in een concrete component (in die scope) een afwijkende
waarde krijgen. Dit moet niet gezien worden als theming, er is maar 1 stijl: die van Vlaanderen.`}),`
`,e.jsx(r.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsxs(r.p,{children:["Het zijn standaard ",e.jsx(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",rel:"nofollow",children:"CSS variabelen"}),`:
ze beginnen dus met `,e.jsx(r.code,{children:"--"})," en zijn te gebruiken met ",e.jsx(r.code,{children:"var()"}),"."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{children:`.my-details {
  background-color: var(--vl-color--background-alt);
}
`})}),`
`,e.jsx(r.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(r.h2,{id:"variabelen",children:"Variabelen"}),`
`,e.jsx(r.p,{children:"Hieronder volgt een overzicht van alle variabelen, dit is een representatie van de code, ze zijn dus steeds up-to-date."}),`
`,e.jsx(r.h3,{id:"color",children:"Color"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Color Variables"}),e.jsx(s,{code:c,language:"css",dark:!0})]}),`
`,e.jsx(r.h3,{id:"general",children:"General"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"General Variables"}),e.jsx(s,{code:h,language:"css",dark:!0})]}),`
`,e.jsx(r.h3,{id:"media-screen",children:"Media Screen"}),`
`,e.jsx(r.p,{children:`De resolutie in een media query specifiëren via een css variabele wordt niet door browsers ondersteund. Om toch de
'breakpoints' eenduidig te specifiëren worden ze als standaard TypeScript variabelen gedefinieerd.`}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Media Screen Variables"}),e.jsx(s,{code:j,language:"ts",dark:!0})]}),`
`,e.jsx(r.h3,{id:"spacing",children:"Spacing"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Spacing Variables"}),e.jsx(s,{code:x,language:"css",dark:!0})]}),`
`,e.jsx(r.h3,{id:"typography",children:"Typography"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Typography Variables"}),e.jsx(s,{code:u,language:"css",dark:!0})]})]})}function g(n={}){const{wrapper:r}={...d(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}function v(n,r){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const S={id:"styles-base-var",title:"Styles/Base (intern)/var",tags:["autodocs"],parameters:{docs:{page:g}}},a=({})=>p` <style>
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
    <div class="sb-var">de alternatieve achtergrond en rand kleur</div>\``,...a.parameters?.docs?.source}}};const y=["VarColor"];export{a as VarColor,y as __namedExportsOrder,S as default};
