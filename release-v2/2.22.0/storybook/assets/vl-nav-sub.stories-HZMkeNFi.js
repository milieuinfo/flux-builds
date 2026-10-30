import{Z as t,_ as r,W as S,X as y,u as p,j as e,C as v,b4 as $,s as T,b as c,r as N}from"./iframe-ylVHDfb1.js";import{o as D}from"./unsafe-html--mv6C7rg.js";import{V as A}from"./vl-nav-link.component-HqPoI3Jx.js";import{n as i,V as C}from"./vl-nav-sub.component-R-nFNQB3.js";import"./preload-helper-PPVm8Dsz.js";const b={...y,...i,defaultSlot:""},M={...S,active:{name:"active",description:'Duidt de pagina van de groep aan als huidige pagina, met `aria-current="page"` op de link. Enkel zinvol met `href`.',table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(i.active)}}},collapsed:{name:"collapsed",description:"Verbergt de tekst van het label, voor een ingeklapte navigatie van `vl-dashboard`.<br>Geeft `collapsed` door aan de `vl-nav-link` componenten in het slot.",table:{type:{summary:r.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(i.collapsed)}}},href:{name:"href",description:"Maakt van het label een link naar een pagina van de groep, bv. een overzicht van het dossier. De link heeft de stijl van een `vl-nav-link`. Zonder `href` is het label gewone tekst.",table:{type:{summary:r.URL},category:t.ATTRIBUTES,defaultValue:{summary:i.href}}},icon:{name:"icon",description:"Het icoon naast het label.",table:{type:{summary:r.STRING},category:t.ATTRIBUTES,defaultValue:{summary:i.icon}}},label:{name:"label",description:"Het label van de groep. Is ook de toegankelijke naam van de lijst met links, ook als het label ingeklapt verborgen is.",table:{type:{summary:r.STRING},category:t.ATTRIBUTES,defaultValue:{summary:i.label}}},defaultSlot:{name:"[default]",description:"De `vl-nav-link` componenten van de groep.",table:{type:{summary:r.HTML},category:t.SLOTS}}};function h(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...p(),...a.components},{FluxComponentMetaData:d}=n;return d||L("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"nav-sub",children:"Nav sub"}),`
`,e.jsx(d,{id:"structures-dashboard-nav-sub"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"vl-nav-sub"})," groepeert ",e.jsx(n.code,{children:"vl-nav-link"})," componenten onder een gedeeld label in het slot ",e.jsx(n.code,{children:"nav-main"})," van ",e.jsx(n.code,{children:"vl-dashboard"}),"."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsxs(n.p,{children:["Gebruik ",e.jsx(n.code,{children:"vl-nav-sub"})," met ",e.jsx(n.a,{href:"/docs/structures-dashboard-nav-link--documentatie",children:"vl-nav-link"}),` in
`,e.jsx(n.a,{href:"/docs/structures-dashboard--documentatie",children:"vl-dashboard"}),`. De stories tonen de groep in een container zo breed als de
navigatie van `,e.jsx(n.code,{children:"vl-dashboard"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlNavLink, VlNavSub } from '@domg-wc/structures';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-nav-sub slot="nav-main" label="Dossier X" icon="file">
    <vl-nav-link href="/dossiers/x/lopend" icon="hourglass">Lopende taken</vl-nav-link>
    <vl-nav-link href="/dossiers/x/afgesloten" icon="file-tasks-check">Afgesloten taken</vl-nav-link>
</vl-nav-sub>
`})}),`
`,e.jsx(v,{of:s}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx($,{of:s}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"href",children:"href"}),`
`,e.jsxs(n.p,{children:["Zonder ",e.jsx(n.code,{children:"href"})," is het label gewone tekst: de groep heeft dan geen eigen pagina. Met ",e.jsx(n.code,{children:"href"}),` wordt het label een link naar
een pagina van de groep, bv. een overzicht van het dossier, met de stijl, het icoon en de uitlijning van een
`,e.jsx(n.code,{children:"vl-nav-link"}),". Met ",e.jsx(n.code,{children:"active"})," duidt die link de huidige pagina aan (",e.jsx(n.code,{children:'aria-current="page"'}),"); verplaats ",e.jsx(n.code,{children:"active"}),` net als bij
de links. De link blijft de toegankelijke naam van de lijst met links.`]}),`
`,e.jsxs(n.p,{children:["Kies ",e.jsx(n.code,{children:"href"})," als de groep een eigen landingspagina heeft, en laat het weg als de groep enkel de links bundelt."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-nav-sub slot="nav-main" label="Dossier X" icon="file" href="/dossiers/x" active>
    <vl-nav-link href="/dossiers/x/lopend" icon="hourglass">Lopende taken</vl-nav-link>
</vl-nav-sub>
`})}),`
`,e.jsx(v,{of:l}),`
`,e.jsx(n.h3,{id:"collapsed",children:"collapsed"}),`
`,e.jsxs(n.p,{children:["Met ",e.jsx(n.code,{children:"collapsed"})," verbergt ",e.jsx(n.code,{children:"vl-nav-sub"})," de tekst van zijn label en geeft het ",e.jsx(n.code,{children:"collapsed"}),` door aan zijn links, zoals in
een ingeklapte navigatie van `,e.jsx(n.code,{children:"vl-dashboard"}),". Met ",e.jsx(n.code,{children:"href"}),` wordt het label een klikbaar icoon, zoals de links. Het label
blijft de toegankelijke naam van de lijst met links. Dat geldt
vanaf een schermbreedte van 1024px. De story toont de groep in een container zo breed als de ingeklapte navigatie.`]}),`
`,e.jsx(v,{of:o})]})}function E(a={}){const{wrapper:n}={...p(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(h,{...a})}):h(a)}function L(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}N([C,A]);const m=c`
    <style>
        .nav-sub-story-navigation {
            width: var(--vl-dashboard-navigation-width, 300px);
            background-color: var(--vl-color--background-subtle);
        }

        .nav-sub-story-navigation--collapsed {
            width: 4.1rem;
            overflow: hidden;
        }
    </style>
`,g=a=>c`${m}
        <div role="list" class="nav-sub-story-navigation">${a()}</div>`,V=a=>c`${m}
        <div role="list" class="nav-sub-story-navigation nav-sub-story-navigation--collapsed">${a()}</div>`,B={id:"structures-dashboard-nav-sub",title:"Structures/dashboard/nav-sub",tags:["autodocs"],args:b,argTypes:M,parameters:{docs:{page:E}}},u=T(b,({active:a,collapsed:n,href:d,icon:f,label:k,customCSS:j,defaultSlot:x})=>c`
        <vl-nav-sub
            ?active=${a}
            ?collapsed=${n}
            href=${d}
            icon=${f}
            label=${k}
            custom-css=${j}
            >${D(x)}</vl-nav-sub
        >
    `),s=u.bind({});s.storyName="vl-nav-sub - default";s.args={icon:"file",label:"Dossier X",defaultSlot:`
        <vl-nav-link href="#lopend" icon="hourglass">Lopende taken</vl-nav-link>
        <vl-nav-link href="#afgesloten" icon="file-tasks-check">Afgesloten taken</vl-nav-link>
    `};s.decorators=[g];const l=u.bind({});l.storyName="vl-nav-sub - href";l.args={...s.args,href:"#dossier-x",active:!0};l.decorators=[g];const o=u.bind({});o.storyName="vl-nav-sub - collapsed";o.args={...s.args,collapsed:!0};o.decorators=[V];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(navSubArgs, ({
  active,
  collapsed,
  href,
  icon,
  label,
  customCSS,
  defaultSlot
}) => html\`
        <vl-nav-sub
            ?active=\${active}
            ?collapsed=\${collapsed}
            href=\${href}
            icon=\${icon}
            label=\${label}
            custom-css=\${customCSS}
            >\${unsafeHTML(defaultSlot)}</vl-nav-sub
        >
    \`)`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(navSubArgs, ({
  active,
  collapsed,
  href,
  icon,
  label,
  customCSS,
  defaultSlot
}) => html\`
        <vl-nav-sub
            ?active=\${active}
            ?collapsed=\${collapsed}
            href=\${href}
            icon=\${icon}
            label=\${label}
            custom-css=\${customCSS}
            >\${unsafeHTML(defaultSlot)}</vl-nav-sub
        >
    \`)`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(navSubArgs, ({
  active,
  collapsed,
  href,
  icon,
  label,
  customCSS,
  defaultSlot
}) => html\`
        <vl-nav-sub
            ?active=\${active}
            ?collapsed=\${collapsed}
            href=\${href}
            icon=\${icon}
            label=\${label}
            custom-css=\${customCSS}
            >\${unsafeHTML(defaultSlot)}</vl-nav-sub
        >
    \`)`,...o.parameters?.docs?.source}}};const O=["NavSubDefault","NavSubWithHref","NavSubCollapsed"];export{o as NavSubCollapsed,s as NavSubDefault,l as NavSubWithHref,O as __namedExportsOrder,B as default};
