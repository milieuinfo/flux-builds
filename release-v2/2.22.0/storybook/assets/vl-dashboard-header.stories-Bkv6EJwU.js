import{Z as o,_ as s,W as m,X as j,u as h,j as e,C as l,b4 as v,s as x,b as f,r as S,f as T}from"./iframe-ylVHDfb1.js";import{o as k}from"./unsafe-html--mv6C7rg.js";import{d as i,V as y}from"./vl-dashboard-header.component-B0zuaYxQ.js";import"./preload-helper-PPVm8Dsz.js";const p={...j,...i,headerActionsSlot:""},D={...m,pageIcon:{name:"page-icon",description:"Een icoon voor de `page-title`.",table:{type:{summary:s.STRING},category:o.ATTRIBUTES,defaultValue:{summary:i.pageIcon}}},pageSubtitle:{name:"page-subtitle",description:"Een ondertitel van de pagina, naast de `page-title`.",table:{type:{summary:s.STRING},category:o.ATTRIBUTES,defaultValue:{summary:i.pageSubtitle}}},pageTitle:{name:"page-title",description:"De titel van de pagina, als `h1` met het vaste id `vl-dashboard-page-title`.<br>Is het doel van de skip links van `vl-dashboard` en `vl-header-next`.",table:{type:{summary:s.STRING},category:o.ATTRIBUTES,defaultValue:{summary:i.pageTitle}}},headerActionsSlot:{name:"header-actions",description:"Acties bij de pagina, zoals knoppen en een zoekveld. Mag leeg blijven.",table:{type:{summary:s.HTML},category:o.SLOTS}}};function c(n){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...n.components},{FluxComponentMetaData:t}=a;return t||z("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"dashboard-header",children:"Dashboard header"}),`
`,e.jsx(t,{id:"structures-dashboard-dashboard-header"}),`
`,e.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(a.p,{children:[e.jsx(a.code,{children:"vl-dashboard-header"})," is de header van een pagina in ",e.jsx(a.code,{children:"vl-dashboard"}),": de titel, een ondertitel, een icoon en de acties van de pagina."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsxs(a.p,{children:["Zet één ",e.jsx(a.code,{children:"vl-dashboard-header"})," bovenaan de inhoud van elke pagina, in het slot ",e.jsx(a.code,{children:"content"}),` van
`,e.jsx(a.a,{href:"/docs/structures-dashboard--documentatie",children:"vl-dashboard"}),`. Hij mag ook dieper staan, bv. in de shadow root van een
route-component.`]}),`
`,e.jsxs(a.p,{children:[`De header is optioneel: een pagina zonder titel, ondertitel of acties heeft hem niet nodig. Zonder
`,e.jsx(a.code,{children:"vl-dashboard-header"}),":"]}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["springt de skip link van ",e.jsx(a.code,{children:"vl-dashboard"})," naar het begin van de inhoud (",e.jsx(a.code,{children:"main"}),") in plaats van naar de ",e.jsx(a.code,{children:"h1"}),";"]}),`
`,e.jsxs(a.li,{children:["blijft na het activeren van een navigatielink de focus op die link (op een smal scherm: op ",e.jsx(a.code,{children:"main"}),");"]}),`
`,e.jsxs(a.li,{children:["zorg je zelf voor één ",e.jsx(a.code,{children:"h1"})," bovenaan de inhoud, zodat de pagina een duidelijke koppenstructuur houdt."]}),`
`]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlDashboardHeader } from '@domg-wc/structures';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-dashboard-header page-title="Beheer items" page-icon="list">
    <vl-button slot="header-actions" icon="add">Nieuw item</vl-button>
</vl-dashboard-header>
`})}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(v,{of:d}),`
`,e.jsx(a.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(a.h3,{id:"zonder-header-actions",children:"Zonder header-actions"}),`
`,e.jsxs(a.p,{children:["Het slot ",e.jsx(a.code,{children:"header-actions"})," mag leeg blijven als de pagina geen acties heeft."]}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(a.h2,{id:"gedrag",children:"Gedrag"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["De header blijft bovenaan staan als de inhoud van ",e.jsx(a.code,{children:"vl-dashboard"}),` scrolt. Op een smal scherm blijft hij onder de
balk met de menuknop van `,e.jsx(a.code,{children:"vl-dashboard"}),". Zet hem niet in een element met ",e.jsx(a.code,{children:"overflow: hidden"}),` of
`,e.jsx(a.code,{children:"overflow: auto"}),`, anders blijft hij niet staan. Zet hem ook buiten de wrapper die de inhoud padding geeft, anders
krijgt hij die padding er nog eens bij.`]}),`
`,e.jsxs(a.li,{children:["De ",e.jsx(a.code,{children:"page-title"})," is een ",e.jsx(a.code,{children:"h1"})," met het vaste id ",e.jsx(a.code,{children:"vl-dashboard-page-title"})," en ",e.jsx(a.code,{children:'tabindex="-1"'}),`. De skip link van
`,e.jsx(a.code,{children:"vl-dashboard"})," en die van ",e.jsx(a.code,{children:"vl-header-next"})," (met ",e.jsx(a.code,{children:'skip-to-content-id="vl-dashboard-page-title"'}),`) springen ernaartoe.
Dat id is een vast contract: `,e.jsxs(a.strong,{children:["zet maar één ",e.jsx(a.code,{children:"vl-dashboard-header"})," tegelijk in de pagina"]}),", zodat er ook maar één ",e.jsx(a.code,{children:"h1"}),`
is. Tijdens een routewissel kunnen er kort twee staan; de skip link gaat dan naar de eerste.`]}),`
`,e.jsxs(a.li,{children:["Zodra de header met een ",e.jsx(a.code,{children:"page-title"})," gerenderd is of een andere ",e.jsx(a.code,{children:"page-title"}),` krijgt, meldt hij zich bij
`,e.jsx(a.code,{children:"vl-dashboard"}),". Volgt dat op het activeren van een navigatielink, dan zet ",e.jsx(a.code,{children:"vl-dashboard"})," de focus op zijn ",e.jsx(a.code,{children:"h1"}),"."]}),`
`,e.jsxs(a.li,{children:["Links en rechts gebruikt de header de padding ",e.jsx(a.code,{children:"--vl-dashboard-content-inline-padding"})," die ",e.jsx(a.code,{children:"vl-dashboard"}),` zet
(zonder `,e.jsx(a.code,{children:"vl-dashboard"}),": ",e.jsx(a.code,{children:"--vl-spacing--normal"}),`). Gebruik dezelfde variabele voor de inhoud eronder, dan lijnt die uit
met de titel.`]}),`
`,e.jsxs(a.li,{children:["Worden de ",e.jsx(a.code,{children:"header-actions"}),` smaller dan de titel toelaat, dan gaan ze onder de titel staan. De minimale breedte van de
titel zet je met de CSS-variabele `,e.jsx(a.code,{children:"--vl-dashboard-title-min-width"})," (standaard ",e.jsx(a.code,{children:"30rem"}),`), op de header of op een ouder,
bv. `,e.jsx(a.code,{children:"vl-dashboard"}),"."]}),`
`]})]})}function A(n={}){const{wrapper:a}={...h(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(c,{...n})}):c(n)}function z(n,a){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}S([y,T]);const w={id:"structures-dashboard-dashboard-header",title:"Structures/dashboard/dashboard-header",tags:["autodocs"],args:p,argTypes:D,parameters:{docs:{page:A}}},g=x(p,({pageIcon:n,pageSubtitle:a,pageTitle:t,customCSS:u,headerActionsSlot:b})=>f`
        <vl-dashboard-header
            page-icon=${n}
            page-subtitle=${a}
            page-title=${t}
            custom-css=${u}
            >${k(b)}</vl-dashboard-header
        >
    `),d=g.bind({});d.storyName="vl-dashboard-header - default";d.args={pageIcon:"list",pageSubtitle:"Subtitel",pageTitle:"Beheer items",headerActionsSlot:'<vl-button slot="header-actions" icon="add">Nieuw item</vl-button>'};const r=g.bind({});r.storyName="vl-dashboard-header - zonder header-actions";r.args={pageIcon:"places-home",pageTitle:"Overzicht"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(dashboardHeaderArgs, ({
  pageIcon,
  pageSubtitle,
  pageTitle,
  customCSS,
  headerActionsSlot
}) => html\`
        <vl-dashboard-header
            page-icon=\${pageIcon}
            page-subtitle=\${pageSubtitle}
            page-title=\${pageTitle}
            custom-css=\${customCSS}
            >\${unsafeHTML(headerActionsSlot)}</vl-dashboard-header
        >
    \`)`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(dashboardHeaderArgs, ({
  pageIcon,
  pageSubtitle,
  pageTitle,
  customCSS,
  headerActionsSlot
}) => html\`
        <vl-dashboard-header
            page-icon=\${pageIcon}
            page-subtitle=\${pageSubtitle}
            page-title=\${pageTitle}
            custom-css=\${customCSS}
            >\${unsafeHTML(headerActionsSlot)}</vl-dashboard-header
        >
    \`)`,...r.parameters?.docs?.source}}};const E=["DashboardHeaderDefault","DashboardHeaderWithoutActions"];export{d as DashboardHeaderDefault,r as DashboardHeaderWithoutActions,E as __namedExportsOrder,w as default};
