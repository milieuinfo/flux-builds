import{u as r,j as e,M as l,S as d,x as a}from"./iframe-Ds54rb_7.js";import"./preload-helper-D9Z9MdNV.js";const c=`import { css, CSSResult } from 'lit';
import { vlMediaScreenSmall } from '../var/vl-media-screen.css';

export const vlBodyStyles: CSSResult = css\`
    html {
        font-family: var(--vl-font);
        /* 62.5% of 16px user agent font size is 10px */
        font-size: 62.5%;
    }

    body {
        font-size: var(--vl-font-size);
        line-height: var(--vl-line-height);
        color: var(--vl-color--text);

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: none;

        @media screen and (max-width: \${vlMediaScreenSmall}px) {
            font-size: var(--vl-font-size--mobile);
            line-height: var(--vl-line-height--mobile);
        }
    }
\`;
`;function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...t.components},{FluxMetaData:s}=n;return s||m("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Styles/Base (intern)/body"}),`
`,e.jsx(n.h1,{id:"body",children:"Body"}),`
`,e.jsx(s,{id:"styles-base-body"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#doel",children:"Doel"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#implementatie",children:"Implementatie"})}),`
`]}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Op het document wordt automatisch de specifieke styling voor de native ",e.jsx(n.code,{children:"<html>"})," en ",e.jsx(n.code,{children:"<body>"})," tags voorzien."]}),`
`,e.jsx(n.p,{children:"Dit zorgt er voor dat:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"het specifieke 'Vlaanderen' font gebruikt wordt"}),`
`,e.jsxs(n.li,{children:["de ",e.jsx(n.a,{href:"https://www.aleksandrhovhannisyan.com/blog/62-5-percent-font-size-trick/",rel:"nofollow",children:"62,5% font size trick"}),` wordt toegepast,
waardoor `,e.jsx(n.code,{children:"1rem == 10px"})]}),`
`,e.jsx(n.li,{children:"op kleine schermen (<767) het font en de lijn hoogte iets kleiner gemaakt worden"}),`
`]}),`
`,e.jsx(n.h2,{id:"implementatie",children:"Implementatie"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Html / Body Code"}),e.jsx(d,{code:c,language:"css",dark:!0})]})]})}function h(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}function m(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const u={id:"styles-base-body",title:"Styles/Base (intern)/body",tags:["autodocs"],parameters:{docs:{page:h}}},o=({})=>a`
    <div>Deze specifieke &lt;body&gt; en &lt;html&gt; styling wordt automatisch op het document gezet.</div>
`;o.storyName="body - default";o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"({}) => html`\n    <div>Deze specifieke &lt;body&gt; en &lt;html&gt; styling wordt automatisch op het document gezet.</div>\n`",...o.parameters?.docs?.source}}};const f=["BodyDefault"];export{o as BodyDefault,f as __namedExportsOrder,u as default};
