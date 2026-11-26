import{u as b,j as e,C as d,b4 as u,b as l,r as p}from"./iframe-Cv28D2NX.js";import{C as v,T as h,d as g,a as j,s}from"./stories.helper-DYHi_5m6.js";import"./preload-helper-PPVm8Dsz.js";const o={...j,ellipsis:!1},k={...g,ellipsis:{name:"ellipsis",description:"Houdt elk breadcrumb item op één regel en kapt het af met een ellipsis wanneer het niet past.<br>Zonder dit attribuut loopt een lang breadcrumb item door over meerdere regels.",table:{type:{summary:h.BOOLEAN},category:v.ATTRIBUTES,defaultValue:{summary:String(o.ellipsis)}}}};function m(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...b(),...n.components},{FluxComponentMetaData:c}=r;return c||x("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"breadcrumb",children:"Breadcrumb"}),`
`,e.jsx(c,{id:"components-block-breadcrumb"}),`
`,e.jsx(r.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(r.p,{children:["Gebruik de ",e.jsx(r.code,{children:"breadcrumb"})," component om de locatie van de huidige pagina af te beelden binnen een navigeerbare hiërarchie."]}),`
`,e.jsx(r.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { VlBreadcrumbComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<vl-breadcrumb></vl-breadcrumb>
`})}),`
`,e.jsx(d,{of:a}),`
`,e.jsx(r.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(u,{of:a}),`
`,e.jsx(r.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(r.h3,{id:"breadcrumb-met-buttons",children:"Breadcrumb met buttons"}),`
`,e.jsx(r.p,{children:"Gebruik een breadcrumb met buttons voor interactieve breadcrumbs die bijvoorbeeld submenu's openen."}),`
`,e.jsx(r.p,{children:"Vermijd het gebruik van links en buttons binnen dezelfde breadcrumb component."}),`
`,e.jsxs(r.p,{children:["Het laatste breadcrumb item is de huidige locatie. Geef dat item geen ",e.jsx(r.code,{children:"href"})," en geen ",e.jsx(r.code,{children:'type="button"'}),`, dan wordt het
als tekst weergegeven en is het niet aanklikbaar.`]}),`
`,e.jsxs(r.p,{children:["Een submenu maak je met een ",e.jsx(r.code,{children:"vl-popover"})," waarvan ",e.jsx(r.code,{children:"for"})," verwijst naar het ",e.jsx(r.code,{children:"id"}),` van een breadcrumb item met
`,e.jsx(r.code,{children:'type="button"'}),". Het submenu is een disclosure, geen ARIA-menu: de knop krijgt ",e.jsx(r.code,{children:"aria-expanded"}),`, en de items zijn
gewone links of knoppen.`]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Zet het breadcrumb item en de ",e.jsx(r.code,{children:"vl-popover"})," samen in één element, bv. een ",e.jsx(r.code,{children:"<div>"}),`, met de popover direct na het item.
Zo klopt de volgorde met Tab. Elk kind van `,e.jsx(r.code,{children:"vl-breadcrumb"}),` wordt een apart item met een scheidingsteken; een losse
`,e.jsx(r.code,{children:"vl-popover"})," zou dus een leeg item worden."]}),`
`,e.jsx(r.li,{children:"Enter of Spatie op de knop opent het submenu. Je gaat door de items met Tab, niet met de pijltoetsen."}),`
`,e.jsx(r.li,{children:"Escape sluit het submenu en zet de focus terug op de knop."}),`
`]}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(r.h3,{id:"lange-tekst-afkappen",children:"Lange tekst afkappen"}),`
`,e.jsxs(r.p,{children:[`Houd de tekst van een breadcrumb item kort. Komt de tekst uit data, en heb je de lengte dus niet in de hand, dan kan
het `,e.jsx(r.code,{children:"ellipsis"})," attribuut helpen."]}),`
`,e.jsxs(r.p,{children:[`Standaard loopt een lang breadcrumb item door over meerdere regels. Een woord zonder spaties dat op geen enkele regel
past, bijvoorbeeld een code of een bestandsnaam, breekt daarbij af. Is de ruimte beperkt, bijvoorbeeld in een
`,e.jsx(r.code,{children:"side-sheet"}),", dan houdt ",e.jsx(r.code,{children:"ellipsis"}),` elk breadcrumb item op één regel: een breadcrumb item dat niet past, begint op een
nieuwe regel en wordt pas afgekapt met een ellipsis (…) als het ook daar te breed is.`]}),`
`,e.jsxs(r.p,{children:[`De afgekapte tekst blijft volledig beschikbaar voor schermlezers, maar is visueel niet meer leesbaar. Gebruik
`,e.jsx(r.code,{children:"ellipsis"})," dus enkel waar de ruimte echt beperkt is."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<vl-breadcrumb ellipsis>
    <vl-breadcrumb-item href="#">Vlaanderen Intern</vl-breadcrumb-item>
    <vl-breadcrumb-item>Een breadcrumb item met een heel lange titel</vl-breadcrumb-item>
</vl-breadcrumb>
`})}),`
`,e.jsx(d,{of:t}),`
`,e.jsxs(r.p,{children:["Staat de breadcrumb zonder ",e.jsx(r.code,{children:"ellipsis"})," naast inhoud die de ruimte vult, bv. naast een lange tekst in een ",e.jsx(r.code,{children:"vl-group"}),`, dan
kan een breadcrumb item smaller worden dan zijn langste woord en breekt ook een gewoon woord af. Wil je dat elk
breadcrumb item op één regel blijft zonder af te kappen, zet dan `,e.jsx(r.code,{children:"white-space: nowrap"})," op ",e.jsx(r.code,{children:"vl-breadcrumb"}),`. Doe dat enkel
bij een korte breadcrumb: een breadcrumb item dat breder is dan de beschikbare ruimte, loopt dan over de rand.`]})]})}function f(n={}){const{wrapper:r}={...b(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(m,{...n})}):m(n)}function x(n,r){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}p(["vl-breadcrumb","vl-breadcrumb-item","vl-icon","vl-popover","vl-popover-action-list","vl-popover-action"]);const E={id:"components-block-breadcrumb",title:"Components - Block/breadcrumb/breadcrumb",tags:["autodocs"],args:o,argTypes:k,parameters:{docs:{page:f}}},a=s(o,({ellipsis:n})=>l`
        <vl-breadcrumb ?ellipsis=${n}>
            <vl-breadcrumb-item href="#">Vlaanderen Intern</vl-breadcrumb-item>
            <vl-breadcrumb-item href="#">Regelgeving</vl-breadcrumb-item>
            <vl-breadcrumb-item href="#">Webuniversum</vl-breadcrumb-item>
            <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
        </vl-breadcrumb>
    `);a.storyName="vl-breadcrumb - default";const i=s(o,({ellipsis:n})=>l`
        <vl-breadcrumb ?ellipsis=${n}>
            <vl-breadcrumb-item type="button" @click=${()=>console.log("click 1")}>Natuur</vl-breadcrumb-item>
            <div>
                <vl-breadcrumb-item id="submenu-fauna-flora" type="button" @click=${r=>r.preventDefault()}>
                    Flora
                </vl-breadcrumb-item>
                <vl-popover
                    distance="6"
                    for="submenu-fauna-flora"
                    hide-arrow
                    placement="bottom-start"
                    trigger="click hover"
                >
                    <vl-popover-action-list>
                        <vl-popover-action icon="nature-leaf" @click=${()=>console.log("click flora")}>
                            Flora
                        </vl-popover-action>
                        <vl-popover-action icon="programming-bug" @click=${()=>console.log("click fauna")}>
                            Fauna
                        </vl-popover-action>
                    </vl-popover-action-list>
                </vl-popover>
            </div>
            <vl-breadcrumb-item>Bomen</vl-breadcrumb-item>
        </vl-breadcrumb>
    `);i.storyName="vl-breadcrumb - buttons";i.decorators=[n=>l` <div style="height: 100px;">${n()}</div> `];const t=s(o,({ellipsis:n})=>l`
        <vl-breadcrumb ?ellipsis=${n}>
            <vl-breadcrumb-item href="#">Vlaanderen Intern</vl-breadcrumb-item>
            <vl-breadcrumb-item href="#">Regelgeving</vl-breadcrumb-item>
            <vl-breadcrumb-item>
                Besluit van de Vlaamse Regering tot vaststelling van een gewestelijke stedenbouwkundige verordening voor
                publiciteitsinrichtingen
            </vl-breadcrumb-item>
        </vl-breadcrumb>
    `);t.storyName="vl-breadcrumb - ellipsis";t.args={ellipsis:!0};t.decorators=[n=>l` <div style="width: 400px;">${n()}</div> `];const $=["BreadcrumbDefault","BreadcrumbButtons","BreadcrumbEllipsis"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(breadcrumbArgs, ({
  ellipsis
}) => html\`
        <vl-breadcrumb ?ellipsis=\${ellipsis}>
            <vl-breadcrumb-item href="#">Vlaanderen Intern</vl-breadcrumb-item>
            <vl-breadcrumb-item href="#">Regelgeving</vl-breadcrumb-item>
            <vl-breadcrumb-item href="#">Webuniversum</vl-breadcrumb-item>
            <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
        </vl-breadcrumb>
    \`)`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(breadcrumbArgs, ({
  ellipsis
}) => html\`
        <vl-breadcrumb ?ellipsis=\${ellipsis}>
            <vl-breadcrumb-item type="button" @click=\${() => console.log('click 1')}>Natuur</vl-breadcrumb-item>
            <div>
                <vl-breadcrumb-item id="submenu-fauna-flora" type="button" @click=\${(e: Event) => e.preventDefault()}>
                    Flora
                </vl-breadcrumb-item>
                <vl-popover
                    distance="6"
                    for="submenu-fauna-flora"
                    hide-arrow
                    placement="bottom-start"
                    trigger="click hover"
                >
                    <vl-popover-action-list>
                        <vl-popover-action icon="nature-leaf" @click=\${() => console.log('click flora')}>
                            Flora
                        </vl-popover-action>
                        <vl-popover-action icon="programming-bug" @click=\${() => console.log('click fauna')}>
                            Fauna
                        </vl-popover-action>
                    </vl-popover-action-list>
                </vl-popover>
            </div>
            <vl-breadcrumb-item>Bomen</vl-breadcrumb-item>
        </vl-breadcrumb>
    \`)`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(breadcrumbArgs, ({
  ellipsis
}) => html\`
        <vl-breadcrumb ?ellipsis=\${ellipsis}>
            <vl-breadcrumb-item href="#">Vlaanderen Intern</vl-breadcrumb-item>
            <vl-breadcrumb-item href="#">Regelgeving</vl-breadcrumb-item>
            <vl-breadcrumb-item>
                Besluit van de Vlaamse Regering tot vaststelling van een gewestelijke stedenbouwkundige verordening voor
                publiciteitsinrichtingen
            </vl-breadcrumb-item>
        </vl-breadcrumb>
    \`)`,...t.parameters?.docs?.source}}};export{i as BreadcrumbButtons,a as BreadcrumbDefault,t as BreadcrumbEllipsis,$ as __namedExportsOrder,E as default};
