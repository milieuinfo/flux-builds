import{Z as u,_ as p,W as v,X as g,u as m,j as e,C as s,b4 as h,s as c,b as l,r as f}from"./iframe-ylVHDfb1.js";import"./preload-helper-PPVm8Dsz.js";const o={...g,ellipsis:!1},k={...v,ellipsis:{name:"ellipsis",description:"Houdt elk breadcrumb item op één regel en kapt het af met een ellipsis wanneer het niet past.<br>Zonder dit attribuut loopt een lang breadcrumb item door over meerdere regels.",table:{type:{summary:p.BOOLEAN},category:u.ATTRIBUTES,defaultValue:{summary:String(o.ellipsis)}}}};function b(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...n.components},{FluxComponentMetaData:d}=r;return d||j("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"breadcrumb",children:"Breadcrumb"}),`
`,e.jsx(d,{id:"components-block-breadcrumb"}),`
`,e.jsx(r.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(r.p,{children:["Gebruik de ",e.jsx(r.code,{children:"breadcrumb"})," component om de locatie van de huidige pagina af te beelden binnen een navigeerbare hiërarchie."]}),`
`,e.jsx(r.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { VlBreadcrumbComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<vl-breadcrumb></vl-breadcrumb>
`})}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(r.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(h,{of:t}),`
`,e.jsx(r.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(r.h3,{id:"breadcrumb-met-buttons",children:"Breadcrumb met buttons"}),`
`,e.jsx(r.p,{children:"Gebruik een breadcrumb met buttons voor interactieve breadcrumbs die bijvoorbeeld submenu's openen."}),`
`,e.jsx(r.p,{children:"Vermijd het gebruik van links en buttons binnen dezelfde breadcrumb component."}),`
`,e.jsxs(r.p,{children:["Het laatste breadcrumb item is de huidige locatie. Geef dat item geen ",e.jsx(r.code,{children:"href"})," en geen ",e.jsx(r.code,{children:'type="button"'}),`, dan wordt het
als tekst weergegeven en is het niet aanklikbaar.`]}),`
`,e.jsx(s,{of:i}),`
`,e.jsx(r.h3,{id:"lange-tekst-afkappen",children:"Lange tekst afkappen"}),`
`,e.jsxs(r.p,{children:[`Houd de tekst van een breadcrumb item kort. Komt de tekst uit data, en heb je de lengte dus niet in de hand, dan kan
het `,e.jsx(r.code,{children:"ellipsis"})," attribuut helpen."]}),`
`,e.jsxs(r.p,{children:[`Standaard loopt een lang breadcrumb item door over meerdere regels. Is de ruimte beperkt, bijvoorbeeld in een
`,e.jsx(r.code,{children:"side-sheet"}),", dan houdt ",e.jsx(r.code,{children:"ellipsis"}),` elk breadcrumb item op één regel: een breadcrumb item dat niet past, begint op een
nieuwe regel en wordt pas afgekapt met een ellipsis (…) als het ook daar te breed is.`]}),`
`,e.jsxs(r.p,{children:[`De afgekapte tekst blijft volledig beschikbaar voor schermlezers, maar is visueel niet meer leesbaar. Gebruik
`,e.jsx(r.code,{children:"ellipsis"})," dus enkel waar de ruimte echt beperkt is."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<vl-breadcrumb ellipsis>
    <vl-breadcrumb-item href="#">Vlaanderen Intern</vl-breadcrumb-item>
    <vl-breadcrumb-item>Een breadcrumb item met een heel lange titel</vl-breadcrumb-item>
</vl-breadcrumb>
`})}),`
`,e.jsx(s,{of:a})]})}function x(n={}){const{wrapper:r}={...m(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(b,{...n})}):b(n)}function j(n,r){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}f(["vl-breadcrumb","vl-breadcrumb-item","vl-icon","vl-popover","vl-popover-action-list","vl-popover-action"]);const w={id:"components-block-breadcrumb",title:"Components - Block/breadcrumb/breadcrumb",tags:["autodocs"],args:o,argTypes:k,parameters:{docs:{page:x}}},t=c(o,({ellipsis:n})=>l`
        <vl-breadcrumb ?ellipsis=${n}>
            <vl-breadcrumb-item href="#">Vlaanderen Intern</vl-breadcrumb-item>
            <vl-breadcrumb-item href="#">Regelgeving</vl-breadcrumb-item>
            <vl-breadcrumb-item href="#">Webuniversum</vl-breadcrumb-item>
            <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
        </vl-breadcrumb>
    `);t.storyName="vl-breadcrumb - default";const i=c(o,({ellipsis:n})=>l`
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
    `);i.storyName="vl-breadcrumb - buttons";i.decorators=[n=>l` <div style="height: 100px;">${n()}</div> `];const a=c(o,({ellipsis:n})=>l`
        <vl-breadcrumb ?ellipsis=${n}>
            <vl-breadcrumb-item href="#">Vlaanderen Intern</vl-breadcrumb-item>
            <vl-breadcrumb-item href="#">Regelgeving</vl-breadcrumb-item>
            <vl-breadcrumb-item>
                Besluit van de Vlaamse Regering tot vaststelling van een gewestelijke stedenbouwkundige verordening voor
                publiciteitsinrichtingen
            </vl-breadcrumb-item>
        </vl-breadcrumb>
    `);a.storyName="vl-breadcrumb - ellipsis";a.args={ellipsis:!0};a.decorators=[n=>l` <div style="width: 400px;">${n()}</div> `];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(breadcrumbArgs, ({
  ellipsis
}) => html\`
        <vl-breadcrumb ?ellipsis=\${ellipsis}>
            <vl-breadcrumb-item href="#">Vlaanderen Intern</vl-breadcrumb-item>
            <vl-breadcrumb-item href="#">Regelgeving</vl-breadcrumb-item>
            <vl-breadcrumb-item href="#">Webuniversum</vl-breadcrumb-item>
            <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
        </vl-breadcrumb>
    \`)`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(breadcrumbArgs, ({
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
    \`)`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(breadcrumbArgs, ({
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
    \`)`,...a.parameters?.docs?.source}}};const $=["BreadcrumbDefault","BreadcrumbButtons","BreadcrumbEllipsis"];export{i as BreadcrumbButtons,t as BreadcrumbDefault,a as BreadcrumbEllipsis,$ as __namedExportsOrder,w as default};
