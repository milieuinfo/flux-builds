import{b_ as t,Z as c,_ as m,a1 as f,W as v,X as k,b$ as b,u,j as e,C as l,b4 as y,s as S,b as $,r as C,c0 as T}from"./iframe-ylVHDfb1.js";import"./preload-helper-PPVm8Dsz.js";const p={...k,...t},B={...v,alt:{name:"alt",description:'Het tekstalternatief van de badge. Met `img` komt het op de afbeelding; met een icoon krijgt de badge `role="img"` en dit `aria-label`.<br>Laat leeg als de badge enkel decoratief is.',table:{type:{summary:m.STRING},category:c.ATTRIBUTES,defaultValue:{summary:t.alt}}},background:{name:"background",description:"De achtergrondkleur van de badge.<br>`subtle`: `--vl-color--background-subtle`.<br>`default`: `--vl-color--background-default`, bv. op een `subtle` achtergrond.<br>`primary`: `--vl-theme-primary-color`, of `--vl-color--background-primary` zonder thema.<br>`action`: `--vl-color--action`, de blauwe actiekleur van de huisstijl.",control:{type:f.SELECT},options:Object.values(b),table:{type:{summary:Object.values(b).join(" | ")},category:c.ATTRIBUTES,defaultValue:{summary:t.background}}},icon:{name:"icon",description:"Het icoon in de badge. Het icoon is decoratief. Wordt enkel getoond als er geen `img` is.",table:{type:{summary:m.STRING},category:c.ATTRIBUTES,defaultValue:{summary:t.icon}}},img:{name:"img",description:"De url van een afbeelding in de badge, bv. een avatar of een logo. Heeft voorrang op `icon`.",table:{type:{summary:m.URL},category:c.ATTRIBUTES,defaultValue:{summary:t.img}}}};function h(n){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...u(),...n.components},{FluxComponentMetaData:i}=a;return i||D("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"badge",children:"Badge"}),`
`,e.jsx(i,{id:"components-block-badge"}),`
`,e.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(a.p,{children:[e.jsx(a.code,{children:"vl-badge"})," is een ronde badge met een icoon of een afbeelding, bv. een avatar of het logo van een bedrijf."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlBadgeComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-badge icon="file-tasks-check"></vl-badge>
<vl-badge img="/logo.png" alt="Logo van het bedrijf"></vl-badge>
`})}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(y,{of:o}),`
`,e.jsx(a.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(a.h3,{id:"primary",children:"primary"}),`
`,e.jsxs(a.p,{children:["Met ",e.jsx(a.code,{children:'background="primary"'})," krijgt de badge de primaire kleur van het thema (",e.jsx(a.code,{children:"--vl-theme-primary-color"}),`), of
`,e.jsx(a.code,{children:"--vl-color--background-primary"})," als er geen thema is. Met ",e.jsx(a.code,{children:'background="default"'}),` krijgt hij de standaard
achtergrondkleur, bv. voor een badge op een `,e.jsx(a.code,{children:"subtle"})," achtergrond."]}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(a.h3,{id:"action",children:"action"}),`
`,e.jsxs(a.p,{children:["Met ",e.jsx(a.code,{children:'background="action"'})," krijgt de badge de blauwe actiekleur van de huisstijl (",e.jsx(a.code,{children:"--vl-color--action"}),`), met een witte
tekst of icoon (`,e.jsx(a.code,{children:"--vl-color--text-on-action"}),")."]}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(a.h3,{id:"img",children:"img"}),`
`,e.jsxs(a.p,{children:["Met ",e.jsx(a.code,{children:"img"})," toont de badge een afbeelding in plaats van een icoon. Geef de afbeelding een ",e.jsx(a.code,{children:"alt"}),`, tenzij ze enkel
decoratief is, bv. omdat de naam ernaast staat.`]}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(a.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsxs(a.p,{children:[`Een badge is meestal decoratief: de informatie staat ernaast, bv. de naam van de gebruiker naast zijn avatar. Laat
`,e.jsx(a.code,{children:"alt"})," dan weg of leeg; schermlezers slaan de badge over."]}),`
`,e.jsxs(a.p,{children:["Draagt de badge zelf informatie die nergens anders staat, geef hem dan een ",e.jsx(a.code,{children:"alt"}),":"]}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["Met ",e.jsx(a.code,{children:"img"})," komt ",e.jsx(a.code,{children:"alt"})," op de afbeelding."]}),`
`,e.jsxs(a.li,{children:["Met een icoon krijgt de badge ",e.jsx(a.code,{children:'role="img"'})," en ",e.jsx(a.code,{children:"alt"})," als ",e.jsx(a.code,{children:"aria-label"}),`; het icoon zelf blijft verborgen voor
schermlezers.`]}),`
`]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-badge icon="building-big" alt="Bedrijf"></vl-badge>
`})}),`
`,e.jsxs(a.p,{children:["Zet je zelf een ",e.jsx(a.code,{children:"role"})," of ",e.jsx(a.code,{children:"aria-label"})," op een badge zonder ",e.jsx(a.code,{children:"alt"}),`, dan laat de badge die staan. Gebruik voor een icoon
wel liever `,e.jsx(a.code,{children:"alt"}),"."]}),`
`,e.jsx(a.h2,{id:"grootte",children:"Grootte"}),`
`,e.jsxs(a.p,{children:["De badge is standaard 4.5rem groot. Het icoon volgt de ",e.jsx(a.code,{children:"font-size"})," van de badge. Pas beide aan op het element zelf:"]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-css",children:`vl-badge {
    width: 2.4rem;
    height: 2.4rem;
    font-size: 1rem;
}
`})}),`
`,e.jsx(a.h2,{id:"css-parts",children:"CSS parts"}),`
`,e.jsxs(a.p,{children:["Via ",e.jsx(a.code,{children:"::part()"})," kan je de inhoud van de badge van buitenaf stijlen:"]}),`
`,e.jsxs(a.p,{children:[`| Part | Element |
| --- | --- |
| `,e.jsx(a.code,{children:"img"})," | De afbeelding, als ",e.jsx(a.code,{children:"img"}),` gezet is |
| `,e.jsx(a.code,{children:"icon"})," | Het icoon, als ",e.jsx(a.code,{children:"icon"})," gezet is en ",e.jsx(a.code,{children:"img"})," niet |"]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-css",children:`vl-badge::part(img) {
    object-fit: contain;
}
`})})]})}function A(n={}){const{wrapper:a}={...u(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(h,{...n})}):h(n)}function D(n,a){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}C([T]);const z={id:"components-block-badge",title:"Components - Block/badge",tags:["autodocs"],args:p,argTypes:B,parameters:{docs:{page:A}}},g=S(p,({alt:n,background:a,icon:i,img:j,customCSS:x})=>$`
        <vl-badge alt=${n} background=${a} icon=${i} img=${j} custom-css=${x}></vl-badge>
    `),o=g.bind({});o.storyName="vl-badge - default";o.args={icon:"file-tasks-check"};const r=g.bind({});r.storyName="vl-badge - primary";r.args={icon:"file-tasks-check",background:"primary"};const d=g.bind({});d.storyName="vl-badge - action";d.args={icon:"file-tasks-check",background:"action"};const s=g.bind({});s.storyName="vl-badge - img";s.args={img:"https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",alt:"Logo van het bedrijf"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(badgeArgs, ({
  alt,
  background,
  icon,
  img,
  customCSS
}) => html\`
        <vl-badge alt=\${alt} background=\${background} icon=\${icon} img=\${img} custom-css=\${customCSS}></vl-badge>
    \`)`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(badgeArgs, ({
  alt,
  background,
  icon,
  img,
  customCSS
}) => html\`
        <vl-badge alt=\${alt} background=\${background} icon=\${icon} img=\${img} custom-css=\${customCSS}></vl-badge>
    \`)`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(badgeArgs, ({
  alt,
  background,
  icon,
  img,
  customCSS
}) => html\`
        <vl-badge alt=\${alt} background=\${background} icon=\${icon} img=\${img} custom-css=\${customCSS}></vl-badge>
    \`)`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(badgeArgs, ({
  alt,
  background,
  icon,
  img,
  customCSS
}) => html\`
        <vl-badge alt=\${alt} background=\${background} icon=\${icon} img=\${img} custom-css=\${customCSS}></vl-badge>
    \`)`,...s.parameters?.docs?.source}}};const w=["BadgeDefault","BadgePrimary","BadgeAction","BadgeImage"];export{d as BadgeAction,o as BadgeDefault,s as BadgeImage,r as BadgePrimary,w as __namedExportsOrder,z as default};
