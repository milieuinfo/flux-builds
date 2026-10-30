import{Z as l,_ as t,W as M,X as C,u as b,j as e,C as u,b4 as H,s as E,b as p,r as z,f as D}from"./iframe-ylVHDfb1.js";import{o as m}from"./unsafe-html--mv6C7rg.js";import{n as v,V as w}from"./vl-nav-link.component-HqPoI3Jx.js";import"./preload-helper-PPVm8Dsz.js";const S={...C,...v,defaultSlot:"",linkActionSlot:"",linkBadgeSlot:""},O={...M,active:{name:"active",description:'Duidt de link van de huidige pagina aan. Zet `aria-current="page"`.',table:{type:{summary:t.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(v.active)}}},collapsed:{name:"collapsed",description:"Toont enkel het icoon, voor een ingeklapte navigatie van `vl-dashboard`.<br>Verbergt ook de `link-action`.",table:{type:{summary:t.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(v.collapsed)}}},disabled:{name:"disabled",description:"Schakelt de link uit.",table:{type:{summary:t.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(v.disabled)}}},external:{name:"external",description:"Opent de link in een nieuw tabblad en toont het icoon voor een externe link.",table:{type:{summary:t.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(v.external)}}},href:{name:"href",description:"De url van de link. Aangeraden voor navigatie; zonder `href` is het een knop.",table:{type:{summary:t.URL},category:l.ATTRIBUTES,defaultValue:{summary:v.href}}},icon:{name:"icon",description:"Het icoon van de link. Gebruik in een navigatie ofwel iconen voor alle links, ofwel geen iconen.<br>Zonder icoon heeft een ingeklapte link geen zichtbare inhoud.",table:{type:{summary:t.STRING},category:l.ATTRIBUTES,defaultValue:{summary:v.icon}}},defaultSlot:{name:"[default]",description:"De tekst van de link.",table:{type:{summary:t.HTML},category:l.SLOTS}},linkActionSlot:{name:"link-action",description:'Een icon-only actieknop naast de link, bv. `<vl-button slot="link-action" icon="plus-circle-filled" label="Item toevoegen" ghost></vl-button>`.',table:{type:{summary:t.HTML},category:l.SLOTS}},linkBadgeSlot:{name:"link-badge",description:'Een badge bij de link, bv. een aantal meldingen: `<span slot="link-badge">3</span>`. De tekst wordt toegevoegd aan de toegankelijke naam van de link.<br>`vl-dashboard` toont op mobiel een stip op de menuknop zolang een link een badge heeft.',table:{type:{summary:t.HTML},category:l.SLOTS}}};function f(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...b(),...a.components},{FluxComponentMetaData:h}=n;return h||I("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"nav-link",children:"Nav link"}),`
`,e.jsx(h,{id:"structures-dashboard-nav-link"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"vl-nav-link"})," is een link in de navigatie van ",e.jsx(n.code,{children:"vl-dashboard"}),", in de slots ",e.jsx(n.code,{children:"nav-main"})," en ",e.jsx(n.code,{children:"nav-utils"})," of in een ",e.jsx(n.code,{children:"vl-nav-sub"}),"."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsxs(n.p,{children:["Gebruik ",e.jsx(n.code,{children:"vl-nav-link"})," in ",e.jsx(n.a,{href:"/docs/structures-dashboard--documentatie",children:"vl-dashboard"}),` of in een
`,e.jsx(n.a,{href:"/docs/structures-dashboard-nav-sub--documentatie",children:"vl-nav-sub"}),`. De stories tonen de link in een container zo breed
als de navigatie van `,e.jsx(n.code,{children:"vl-dashboard"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlNavLink } from '@domg-wc/structures';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-nav-link slot="nav-main" href="/overzicht" icon="places-home" active>Overzicht</vl-nav-link>
`})}),`
`,e.jsx(u,{of:i}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(H,{of:i}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"active",children:"active"}),`
`,e.jsxs(n.p,{children:["Met ",e.jsx(n.code,{children:"active"})," duidt de link de huidige pagina aan. ",e.jsx(n.code,{children:"vl-nav-link"})," zet dan ",e.jsx(n.code,{children:'aria-current="page"'}),` op zijn interne link,
zodat een schermlezer de link als huidige pagina voorleest.`]}),`
`,e.jsxs(n.p,{children:["Er is maar één actieve link tegelijk in de navigatie. ",e.jsx(n.code,{children:"vl-nav-link"})," verplaatst ",e.jsx(n.code,{children:"active"}),` niet zelf: doe dat bij elke
navigatie, bv. in de router, door `,e.jsx(n.code,{children:"active"}),` van de vorige link te halen en op de nieuwe link te zetten. Het
`,e.jsx(n.a,{href:"/docs/structures-dashboard--documentatie#actieve-link",children:"navigatievoorbeeld van vl-dashboard"})," toont hoe."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`navigation.querySelectorAll('vl-nav-link').forEach((link) => {
    link.active = link.getAttribute('href') === location.pathname;
});
`})}),`
`,e.jsx(u,{of:r}),`
`,e.jsx(n.h3,{id:"link-action",children:"link-action"}),`
`,e.jsxs(n.p,{children:["In het slot ",e.jsx(n.code,{children:"link-action"})," komt een icon-only actieknop naast de link. Geef de knop een ",e.jsx(n.code,{children:"label"}),"."]}),`
`,e.jsx(u,{of:o}),`
`,e.jsx(n.h3,{id:"link-badge",children:"link-badge"}),`
`,e.jsxs(n.p,{children:["In het slot ",e.jsx(n.code,{children:"link-badge"})," komt een badge, bv. een aantal meldingen. Gebruik daarvoor een ",e.jsx(n.code,{children:"span"}),`:
`,e.jsx(n.code,{children:"vl-nav-link"})," toont die als een rode badge rechts in de link, en als een kleine stip als de link ingeklapt is."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-nav-link slot="nav-main" href="/notificaties" icon="bell">
    Notificaties
    <span slot="link-badge">3</span>
</vl-nav-link>
`})}),`
`,e.jsxs(n.p,{children:[`Houd de inhoud kort, bv. een getal. De tekst van de badge wordt toegevoegd aan de toegankelijke naam van de link,
hier "Notificaties, 3", en volgt ook een gewijzigde teller. De badge zelf wordt niet nog eens voorgelezen. `,e.jsx(n.code,{children:"vl-dashboard"})," toont op mobiel een stip op de menuknop zolang een link een badge heeft."]}),`
`,e.jsx(u,{of:s}),`
`,e.jsx(n.h3,{id:"collapsed",children:"collapsed"}),`
`,e.jsxs(n.p,{children:["Met ",e.jsx(n.code,{children:"collapsed"})," toont de link enkel zijn icoon en verbergt hij de ",e.jsx(n.code,{children:"link-action"}),`, zoals in een ingeklapte navigatie van
`,e.jsx(n.code,{children:"vl-dashboard"}),". Een ",e.jsx(n.code,{children:"span"}),` wordt dan een kleine stip. Dat geldt vanaf een schermbreedte van 1024px; daaronder
toont `,e.jsx(n.code,{children:"vl-dashboard"}),` de volledige mobiele navigatie. De stories tonen de link in een container zo breed als de
ingeklapte navigatie.`]}),`
`,e.jsx(u,{of:d}),`
`,e.jsx(u,{of:c})]})}function V(a={}){const{wrapper:n}={...b(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(f,{...a})}):f(a)}function I(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}z([w,D]);const x=p`
    <style>
        .nav-link-story-navigation {
            width: var(--vl-dashboard-navigation-width, 300px);
            background-color: var(--vl-color--background-subtle);
        }

        .nav-link-story-navigation--collapsed {
            width: 4.1rem;
            overflow: hidden;
        }
    </style>
`,g=a=>p`${x}
        <div role="list" class="nav-link-story-navigation">${a()}</div>`,j=a=>p`${x}
        <div role="list" class="nav-link-story-navigation nav-link-story-navigation--collapsed">${a()}</div>`,G={id:"structures-dashboard-nav-link",title:"Structures/dashboard/nav-link",tags:["autodocs"],args:S,argTypes:O,parameters:{docs:{page:V}}},k=E(S,({active:a,collapsed:n,disabled:h,external:$,href:y,icon:L,customCSS:T,defaultSlot:A,linkActionSlot:N,linkBadgeSlot:B})=>p`
        <vl-nav-link
            ?active=${a}
            ?collapsed=${n}
            ?disabled=${h}
            ?external=${$}
            href=${y}
            icon=${L}
            custom-css=${T}
            >${m(A)}${m(N)}${m(B)}</vl-nav-link
        >
    `),i=k.bind({});i.storyName="vl-nav-link - default";i.args={href:"#overzicht",icon:"places-home",defaultSlot:"Overzicht"};i.decorators=[g];const r=k.bind({});r.storyName="vl-nav-link - active";r.args={...i.args,active:!0};r.decorators=[g];const o=k.bind({});o.storyName="vl-nav-link - link-action";o.args={href:"#items",icon:"list",defaultSlot:"Beheer items",linkActionSlot:'<vl-button slot="link-action" icon="plus-circle-filled" label="Item toevoegen" ghost></vl-button>'};o.decorators=[g];const s=k.bind({});s.storyName="vl-nav-link - link-badge";s.args={href:"#notificaties",icon:"bell",defaultSlot:"Notificaties",linkBadgeSlot:'<span slot="link-badge">3</span>'};s.decorators=[g];const d=k.bind({});d.storyName="vl-nav-link - collapsed";d.args={...o.args,collapsed:!0};d.decorators=[j];const c=k.bind({});c.storyName="vl-nav-link - collapsed met link-badge";c.args={...s.args,collapsed:!0};c.decorators=[j];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(navLinkArgs, ({
  active,
  collapsed,
  disabled,
  external,
  href,
  icon,
  customCSS,
  defaultSlot,
  linkActionSlot,
  linkBadgeSlot
}) => html\`
        <vl-nav-link
            ?active=\${active}
            ?collapsed=\${collapsed}
            ?disabled=\${disabled}
            ?external=\${external}
            href=\${href}
            icon=\${icon}
            custom-css=\${customCSS}
            >\${unsafeHTML(defaultSlot)}\${unsafeHTML(linkActionSlot)}\${unsafeHTML(linkBadgeSlot)}</vl-nav-link
        >
    \`)`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(navLinkArgs, ({
  active,
  collapsed,
  disabled,
  external,
  href,
  icon,
  customCSS,
  defaultSlot,
  linkActionSlot,
  linkBadgeSlot
}) => html\`
        <vl-nav-link
            ?active=\${active}
            ?collapsed=\${collapsed}
            ?disabled=\${disabled}
            ?external=\${external}
            href=\${href}
            icon=\${icon}
            custom-css=\${customCSS}
            >\${unsafeHTML(defaultSlot)}\${unsafeHTML(linkActionSlot)}\${unsafeHTML(linkBadgeSlot)}</vl-nav-link
        >
    \`)`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(navLinkArgs, ({
  active,
  collapsed,
  disabled,
  external,
  href,
  icon,
  customCSS,
  defaultSlot,
  linkActionSlot,
  linkBadgeSlot
}) => html\`
        <vl-nav-link
            ?active=\${active}
            ?collapsed=\${collapsed}
            ?disabled=\${disabled}
            ?external=\${external}
            href=\${href}
            icon=\${icon}
            custom-css=\${customCSS}
            >\${unsafeHTML(defaultSlot)}\${unsafeHTML(linkActionSlot)}\${unsafeHTML(linkBadgeSlot)}</vl-nav-link
        >
    \`)`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(navLinkArgs, ({
  active,
  collapsed,
  disabled,
  external,
  href,
  icon,
  customCSS,
  defaultSlot,
  linkActionSlot,
  linkBadgeSlot
}) => html\`
        <vl-nav-link
            ?active=\${active}
            ?collapsed=\${collapsed}
            ?disabled=\${disabled}
            ?external=\${external}
            href=\${href}
            icon=\${icon}
            custom-css=\${customCSS}
            >\${unsafeHTML(defaultSlot)}\${unsafeHTML(linkActionSlot)}\${unsafeHTML(linkBadgeSlot)}</vl-nav-link
        >
    \`)`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story(navLinkArgs, ({
  active,
  collapsed,
  disabled,
  external,
  href,
  icon,
  customCSS,
  defaultSlot,
  linkActionSlot,
  linkBadgeSlot
}) => html\`
        <vl-nav-link
            ?active=\${active}
            ?collapsed=\${collapsed}
            ?disabled=\${disabled}
            ?external=\${external}
            href=\${href}
            icon=\${icon}
            custom-css=\${customCSS}
            >\${unsafeHTML(defaultSlot)}\${unsafeHTML(linkActionSlot)}\${unsafeHTML(linkBadgeSlot)}</vl-nav-link
        >
    \`)`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(navLinkArgs, ({
  active,
  collapsed,
  disabled,
  external,
  href,
  icon,
  customCSS,
  defaultSlot,
  linkActionSlot,
  linkBadgeSlot
}) => html\`
        <vl-nav-link
            ?active=\${active}
            ?collapsed=\${collapsed}
            ?disabled=\${disabled}
            ?external=\${external}
            href=\${href}
            icon=\${icon}
            custom-css=\${customCSS}
            >\${unsafeHTML(defaultSlot)}\${unsafeHTML(linkActionSlot)}\${unsafeHTML(linkBadgeSlot)}</vl-nav-link
        >
    \`)`,...c.parameters?.docs?.source}}};const X=["NavLinkDefault","NavLinkActive","NavLinkWithAction","NavLinkWithBadge","NavLinkCollapsed","NavLinkCollapsedWithBadge"];export{r as NavLinkActive,d as NavLinkCollapsed,c as NavLinkCollapsedWithBadge,i as NavLinkDefault,o as NavLinkWithAction,s as NavLinkWithBadge,X as __namedExportsOrder,G as default};
