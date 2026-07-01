import{u as r,j as e,M as l,S as a,x as d}from"./iframe-B0laZkYe.js";import"./preload-helper-D9Z9MdNV.js";const c=`import { css, CSSResult } from 'lit';
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
`;function i(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...n.components},{FluxComponentMetaData:s}=t;return s||h("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Styles/Base (intern)/body"}),`
`,e.jsx(t.h1,{id:"body",children:"Body"}),`
`,e.jsx(s,{id:"styles-base-body"}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(t.p,{children:["Op het document wordt automatisch de specifieke styling voor de native ",e.jsx(t.code,{children:"<html>"})," en ",e.jsx(t.code,{children:"<body>"})," tags voorzien."]}),`
`,e.jsx(t.p,{children:"Dit zorgt er voor dat:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"het specifieke 'Vlaanderen' font gebruikt wordt"}),`
`,e.jsxs(t.li,{children:["de ",e.jsx(t.a,{href:"https://www.aleksandrhovhannisyan.com/blog/62-5-percent-font-size-trick/",rel:"nofollow",children:"62,5% font size trick"}),` wordt toegepast,
waardoor `,e.jsx(t.code,{children:"1rem == 10px"})]}),`
`,e.jsx(t.li,{children:"op kleine schermen (<767) het font en de lijn hoogte iets kleiner gemaakt worden"}),`
`]}),`
`,e.jsx(t.h2,{id:"implementatie",children:"Implementatie"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Html / Body Code"}),e.jsx(a,{code:c,language:"css",dark:!0})]})]})}function m(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}function h(n,t){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const u={id:"styles-base-body",title:"Styles/Base (intern)/body",tags:["autodocs"],parameters:{docs:{page:m}}},o=({})=>d`
    <div>Deze specifieke &lt;body&gt; en &lt;html&gt; styling wordt automatisch op het document gezet.</div>
`;o.storyName="body - default";o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"({}) => html`\n    <div>Deze specifieke &lt;body&gt; en &lt;html&gt; styling wordt automatisch op het document gezet.</div>\n`",...o.parameters?.docs?.source}}};const f=["BodyDefault"];export{o as BodyDefault,f as __namedExportsOrder,u as default};
