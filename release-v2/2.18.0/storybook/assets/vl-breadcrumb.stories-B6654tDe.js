import{u as m,j as e,C as l,s as b,x as c,r as d}from"./iframe-COmpMQdF.js";import"./preload-helper-D9Z9MdNV.js";function i(o){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...o.components},{FluxComponentMetaData:a}=r;return a||s("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"breadcrumb",children:"Breadcrumb"}),`
`,e.jsx(a,{id:"components-block-breadcrumb"}),`
`,e.jsx(r.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(r.p,{children:["Gebruik de ",e.jsx(r.code,{children:"breadcrumb"})," component om de locatie van de huidige pagina af te beelden binnen een navigeerbare hiërarchie."]}),`
`,e.jsx(r.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { VlBreadcrumbComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<vl-breadcrumb></vl-breadcrumb>
`})}),`
`,e.jsx(l,{of:t}),`
`,e.jsx(r.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(r.h3,{id:"breadcrumb-met-buttons",children:"Breadcrumb met buttons"}),`
`,e.jsx(r.p,{children:"Gebruik een breadcrumb met buttons voor interactieve breadcrumbs die bijvoorbeeld submenu's openen."}),`
`,e.jsx(r.p,{children:"Vermijd het gebruik van links en buttons binnen dezelfde breadcrumb component."}),`
`,e.jsx(l,{of:n})]})}function u(o={}){const{wrapper:r}={...m(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(i,{...o})}):i(o)}function s(o,r){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}d(["vl-breadcrumb","vl-breadcrumb-item","vl-icon","vl-popover","vl-popover-action-list","vl-popover-action"]);const h={id:"components-block-breadcrumb",title:"Components - Block/breadcrumb/breadcrumb",tags:["autodocs"],parameters:{docs:{page:u}}},t=b({},()=>c`
        <vl-breadcrumb>
            <vl-breadcrumb-item href="#">Vlaanderen Intern</vl-breadcrumb-item>
            <vl-breadcrumb-item href="#">Regelgeving</vl-breadcrumb-item>
            <vl-breadcrumb-item href="#">Webuniversum</vl-breadcrumb-item>
            <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
        </vl-breadcrumb>
    `);t.storyName="vl-breadcrumb - default";const n=b({},()=>c`
        <vl-breadcrumb>
            <vl-breadcrumb-item type="button" @click=${()=>console.log("click 1")}>Natuur</vl-breadcrumb-item>
            <div>
                <vl-breadcrumb-item id="submenu-fauna-flora" type="button" @click=${o=>o.preventDefault()}>
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
            <vl-breadcrumb-item type="button" @click=${()=>console.log("click 3")}>Bomen</vl-breadcrumb-item>
        </vl-breadcrumb>
    `);n.storyName="vl-breadcrumb - buttons";n.decorators=[o=>c` <div style="height: 100px;">${o()}</div> `];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story({}, () => html\`
        <vl-breadcrumb>
            <vl-breadcrumb-item href="#">Vlaanderen Intern</vl-breadcrumb-item>
            <vl-breadcrumb-item href="#">Regelgeving</vl-breadcrumb-item>
            <vl-breadcrumb-item href="#">Webuniversum</vl-breadcrumb-item>
            <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
        </vl-breadcrumb>
    \`)`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story({}, () => html\`
        <vl-breadcrumb>
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
            <vl-breadcrumb-item type="button" @click=\${() => console.log('click 3')}>Bomen</vl-breadcrumb-item>
        </vl-breadcrumb>
    \`)`,...n.parameters?.docs?.source}}};const g=["BreadcrumbDefault","BreadcrumbButtons"];export{n as BreadcrumbButtons,t as BreadcrumbDefault,g as __namedExportsOrder,h as default};
