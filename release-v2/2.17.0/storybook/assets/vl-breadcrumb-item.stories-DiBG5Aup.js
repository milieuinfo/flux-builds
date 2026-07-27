import{Z as i,a2 as h,a1 as g,_ as f,W as x,X as y,u as p,j as e,C as o,b8 as j,s as v,bY as b,x as k}from"./iframe-BgD7f6Cn.js";import"./preload-helper-D9Z9MdNV.js";const l={LINK:"link",BUTTON:"button",TEXT:"text"},d={...y,href:"",type:"link"},T={...x,href:{name:"href",description:"Url voor breadcrumb-item.",table:{type:{summary:f.URL},category:i.ATTRIBUTES,defaultValue:{summary:d.href}}},type:{name:"type",description:"Type breadcrumb-item.",control:{type:g.SELECT},options:["",...Object.values(l)],table:{type:{summary:h(Object.values(l))},category:i.ATTRIBUTES,defaultArgs:{summary:d.type}}}};function u(t){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...p(),...t.components},{FluxComponentMetaData:s}=r;return s||w("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"breadcrumb-item",children:"Breadcrumb Item"}),`
`,e.jsx(s,{id:"components-block-breadcrumb-item"}),`
`,e.jsxs(r.p,{children:["Gebruik de ",e.jsx(r.code,{children:"breadcrumb-item"})," component om een stap binnen de breadcrumbs weer te geven."]}),`
`,e.jsx(r.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { VlBreadcrumbItemComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<vl-breadcrumb-item></vl-breadcrumb-item>
`})}),`
`,e.jsx(o,{of:n}),`
`,e.jsx(r.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(j,{of:n}),`
`,e.jsx(r.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(r.h3,{id:"link-breadcrumb-item",children:"Link breadcrumb item"}),`
`,e.jsxs(r.p,{children:["Dit is de default variant. Type ",e.jsx(r.code,{children:"link"}),` kan weggelaten worden.
Het wordt automatisch als link weergegeven wanneer er een `,e.jsx(r.code,{children:"href"})," attribuut wordt meegegeven."]}),`
`,e.jsx(o,{of:n}),`
`,e.jsx(r.h3,{id:"button-breadcrumb-item",children:"Button breadcrumb item"}),`
`,e.jsxs(r.p,{children:["Indien je onderliggend een button wenst te gebruiken, kan je het type ",e.jsx(r.code,{children:"button"}),` gebruiken.
Een `,e.jsx(r.code,{children:"@click"})," handler is in dat geval vereist."]}),`
`,e.jsx(r.p,{children:"Vermijd het gebruik van links en buttons binnen dezelfde breadcrumb component."}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(r.h3,{id:"text-breadcrumb-item",children:"Text breadcrumb item"}),`
`,e.jsxs(r.p,{children:["Indien je een breadcrumb item wenst weer te geven zonder link of button, kan je het type ",e.jsx(r.code,{children:"text"}),` gebruiken.
Dit is bijvoorbeeld handig voor het weergeven van de huidige pagina.
Indien je zowel `,e.jsx(r.code,{children:"type"})," als ",e.jsx(r.code,{children:"href"})," weglaat, wordt het item automatisch als text weergegeven."]}),`
`,e.jsx(o,{of:c})]})}function B(t={}){const{wrapper:r}={...p(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(u,{...t})}):u(t)}function w(t,r){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const I={id:"components-block-breadcrumb-breadcrumb-item",title:"Components - Block/breadcrumb/breadcrumb-item",tags:["autodocs"],args:d,argTypes:T,parameters:{docs:{page:B}}},m=v(d,({href:t,type:r})=>k`
        <vl-breadcrumb>
            <vl-breadcrumb-item href=${b(t)} type=${b(r)} @click=${r==="button"?()=>console.log("click breadcrumb item"):null}>Breadcrumb item</vl-breadcrumb-item>
        </vl-breadcrumb>
    `),n=m.bind({});n.storyName="vl-breadcrumb - default";n.args={href:"#"};const a=m.bind({});a.storyName="vl-breadcrumb - button";a.args={type:"button"};const c=m.bind({});c.storyName="vl-breadcrumb - text";c.args={type:"text"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(breadcrumbItemArgs, ({
  href,
  type
}) => html\`
        <vl-breadcrumb>
            <vl-breadcrumb-item href=\${ifDefined(href)} type=\${ifDefined(type)} @click=\${type === 'button' ? () => console.log('click breadcrumb item') : null}>Breadcrumb item</vl-breadcrumb-item>
        </vl-breadcrumb>
    \`)`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(breadcrumbItemArgs, ({
  href,
  type
}) => html\`
        <vl-breadcrumb>
            <vl-breadcrumb-item href=\${ifDefined(href)} type=\${ifDefined(type)} @click=\${type === 'button' ? () => console.log('click breadcrumb item') : null}>Breadcrumb item</vl-breadcrumb-item>
        </vl-breadcrumb>
    \`)`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(breadcrumbItemArgs, ({
  href,
  type
}) => html\`
        <vl-breadcrumb>
            <vl-breadcrumb-item href=\${ifDefined(href)} type=\${ifDefined(type)} @click=\${type === 'button' ? () => console.log('click breadcrumb item') : null}>Breadcrumb item</vl-breadcrumb-item>
        </vl-breadcrumb>
    \`)`,...c.parameters?.docs?.source}}};const C=["BreadcrumbDefault","BreadcrumbButton","BreadcrumbText"];export{a as BreadcrumbButton,n as BreadcrumbDefault,c as BreadcrumbText,C as __namedExportsOrder,I as default};
