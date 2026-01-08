import{u as r,j as n,M as u,S as c,C as s,x as d}from"./iframe-C7eocPW2.js";import"./preload-helper-D9Z9MdNV.js";const m="import { css, CSSResult, unsafeCSS } from 'lit';\n\nconst sansFontFamily = 'Flanders Art Sans';\nconst iconFontFamily = 'vlaanderen-icon';\nconst fontLocation = 'https://cdn.omgeving.vlaanderen.be/domg/govflanders-font/22.0.2';\nexport const iconFontLocation = `${fontLocation}/iconfont/vlaanderen-icon`;\n\nconst fontFace = (\n    fontFamily: string,\n    fontLocation: string,\n    fontWeight: number | string,\n    fontStyle: string\n): CSSResult => css`\n    @font-face {\n        font-family: ${unsafeCSS(fontFamily)};\n        src: url(${unsafeCSS(`${fontLocation}.woff2`)}) format('woff2'),\n            url(${unsafeCSS(`${fontLocation}.woff`)}) format('woff');\n        font-weight: ${unsafeCSS(fontWeight)};\n        font-style: ${unsafeCSS(fontStyle)};\n    }\n`;\n\nexport const vlFontStyles: CSSResult = css`\n    ${fontFace(sansFontFamily, `${fontLocation}/flanders/sans/FlandersArtSans-Light`, 300, 'normal')}\n    ${fontFace(sansFontFamily, `${fontLocation}/flanders/sans/FlandersArtSans-Regular`, 400, 'normal')}\n    ${fontFace(sansFontFamily, `${fontLocation}/flanders/sans/FlandersArtSans-Medium`, 500, 'normal')}\n    ${fontFace(sansFontFamily, `${fontLocation}/flanders/sans/FlandersArtSans-Bold`, 700, 'normal')}\n\n    ${fontFace(sansFontFamily, `${fontLocation}/flanders/italic/FlandersArtSans-Light`, 300, 'italic')}\n    ${fontFace(sansFontFamily, `${fontLocation}/flanders/italic/FlandersArtSans-Regular`, 400, 'italic')}\n    ${fontFace(sansFontFamily, `${fontLocation}/flanders/italic/FlandersArtSans-Medium`, 500, 'italic')}\n    ${fontFace(sansFontFamily, `${fontLocation}/flanders/italic/FlandersArtSans-Bold`, 700, 'italic')}\n\n    ${fontFace(iconFontFamily, `${iconFontLocation}`, 'normal', 'normal')}\n`;\n";function l(t){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...r(),...t.components},{FluxComponentMetaData:a}=i;return a||f("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(u,{title:"Styles/Base (intern)/font"}),`
`,n.jsx(i.h1,{id:"font",children:"Font"}),`
`,n.jsx(a,{id:"styles-base-font"}),`
`,n.jsx(i.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:n.jsx(i.a,{href:"#doel",children:"Doel"})}),`
`,n.jsx(i.li,{children:n.jsx(i.a,{href:"#implementatie",children:"Implementatie"})}),`
`,n.jsx(i.li,{children:n.jsx(i.a,{href:"#voorbeelden",children:"Voorbeelden"})}),`
`]}),`
`,n.jsx(i.h2,{id:"doel",children:"Doel"}),`
`,n.jsxs(i.p,{children:["Vanuit Digitaal Vlaanderen worden er 2 fonts voorzien: ",n.jsx(i.code,{children:"Flanders Art Sans"})," en ",n.jsx(i.code,{children:"vlaanderen-icon"}),"."]}),`
`,n.jsxs(i.p,{children:["Het ",n.jsx(i.code,{children:"Flanders Art Sans"}),` font is het default font, wat zowel voor de normale als de italic styling dient.
Beide styles zijn beschikbaar in de gewichten: 300, 400, 500 en 700.`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.a,{href:"/docs/components-atom-icon--documentatie#overzicht",children:"Alle iconen"})," komen uit het font ",n.jsx(i.code,{children:"vlaanderen-icon"}),"."]}),`
`,n.jsx(i.h2,{id:"implementatie",children:"Implementatie"}),`
`,n.jsxs("details",{open:!0,children:[n.jsx("summary",{children:"Font Code"}),n.jsx(c,{code:m,language:"ts",dark:!0})]}),`
`,n.jsx(i.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,n.jsx(i.p,{children:`In deze voorbeelden zie je de verschillende fonts in gebruikt, er worden telkens specifieke wrappers voorzien via een
custom style-class.`}),`
`,n.jsx("br",{}),`
`,n.jsx(i.h3,{id:"flanders-art-sans---normal",children:"Flanders Art Sans - normal"}),`
`,n.jsx(s,{of:e}),`
`,n.jsx(i.h3,{id:"flanders-art-sans---italic",children:"Flanders Art Sans - italic"}),`
`,n.jsx(s,{of:o})]})}function p(t={}){const{wrapper:i}={...r(),...t.components};return i?n.jsx(i,{...t,children:n.jsx(l,{...t})}):l(t)}function f(t,i){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const g={id:"styles-base-font",title:"Styles/Base (intern)/font",tags:["autodocs"],parameters:{docs:{page:p}}},e=({})=>d`
    <style>
        .sb-font-normal {
            font-family: 'Flanders Art Sans';
            font-style: normal;
        }

        .sb-font-title {
            font-size: 2rem;
            text-decoration: underline;
        }

        .sb-font-weight-300 {
            font-weight: 300;
        }

        .sb-font-weight-400 {
            font-weight: 400;
        }

        .sb-font-weight-500 {
            font-weight: 500;
        }

        .sb-font-weight-700 {
            font-weight: 700;
        }
    </style>
    <div class="sb-font-normal vl-font--weight-300">
        <div class="sb-font-title">Flanders Art Sans - normal - weight 300</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>
    </div>
    <br />
    <div class="sb-font-normal sb-font-weight-400">
        <div class="sb-font-title">Flanders Art Sans - normal - weight 400</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>
    </div>
    <br />
    <div class="sb-font-normal sb-font-weight-500">
        <div class="sb-font-title">Flanders Art Sans - normal - weight 500</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>
    </div>
    <br />
    <div class="sb-font-normal sb-font-weight-700">
        <div class="sb-font-title">Flanders Art Sans - normal - weight 700</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>
    </div>
    <br />
`;e.storyName="vl-font - Flanders Art Sans - normal";const o=({})=>d`
    <style>
        .sb-font-italic {
            font-family: 'Flanders Art Sans';
            font-style: italic;
        }

        .sb-font-title {
            font-size: 2rem;
            text-decoration: underline;
        }

        .sb-font-weight-300 {
            font-weight: 300;
        }

        .sb-font-weight-400 {
            font-weight: 400;
        }

        .sb-font-weight-500 {
            font-weight: 500;
        }

        .sb-font-weight-700 {
            font-weight: 700;
        }
    </style>
    <div class="sb-font-italic vl-font--weight-300">
        <div class="sb-font-title">Flanders Art Sans - italic - weight 300</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>
    </div>
    <br />
    <div class="sb-font-italic sb-font-weight-400">
        <div class="sb-font-title">Flanders Art Sans - italic - weight 400</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>
    </div>
    <br />
    <div class="sb-font-italic sb-font-weight-500">
        <div class="sb-font-title">Flanders Art Sans - italic - weight 500</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>
    </div>
    <br />
    <div class="sb-font-italic sb-font-weight-700">
        <div class="sb-font-title">Flanders Art Sans - italic - weight 700</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>
    </div>
    <br />
`;o.storyName="vl-font - Flanders Art Sans - italic";e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        .sb-font-normal {
            font-family: 'Flanders Art Sans';
            font-style: normal;
        }

        .sb-font-title {
            font-size: 2rem;
            text-decoration: underline;
        }

        .sb-font-weight-300 {
            font-weight: 300;
        }

        .sb-font-weight-400 {
            font-weight: 400;
        }

        .sb-font-weight-500 {
            font-weight: 500;
        }

        .sb-font-weight-700 {
            font-weight: 700;
        }
    </style>
    <div class="sb-font-normal vl-font--weight-300">
        <div class="sb-font-title">Flanders Art Sans - normal - weight 300</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>
    </div>
    <br />
    <div class="sb-font-normal sb-font-weight-400">
        <div class="sb-font-title">Flanders Art Sans - normal - weight 400</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>
    </div>
    <br />
    <div class="sb-font-normal sb-font-weight-500">
        <div class="sb-font-title">Flanders Art Sans - normal - weight 500</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>
    </div>
    <br />
    <div class="sb-font-normal sb-font-weight-700">
        <div class="sb-font-title">Flanders Art Sans - normal - weight 700</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>
    </div>
    <br />
\``,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({}) => html\`
    <style>
        .sb-font-italic {
            font-family: 'Flanders Art Sans';
            font-style: italic;
        }

        .sb-font-title {
            font-size: 2rem;
            text-decoration: underline;
        }

        .sb-font-weight-300 {
            font-weight: 300;
        }

        .sb-font-weight-400 {
            font-weight: 400;
        }

        .sb-font-weight-500 {
            font-weight: 500;
        }

        .sb-font-weight-700 {
            font-weight: 700;
        }
    </style>
    <div class="sb-font-italic vl-font--weight-300">
        <div class="sb-font-title">Flanders Art Sans - italic - weight 300</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>
    </div>
    <br />
    <div class="sb-font-italic sb-font-weight-400">
        <div class="sb-font-title">Flanders Art Sans - italic - weight 400</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>
    </div>
    <br />
    <div class="sb-font-italic sb-font-weight-500">
        <div class="sb-font-title">Flanders Art Sans - italic - weight 500</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>
    </div>
    <br />
    <div class="sb-font-italic sb-font-weight-700">
        <div class="sb-font-title">Flanders Art Sans - italic - weight 700</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>
    </div>
    <br />
\``,...o.parameters?.docs?.source}}};const v=["FontFlandersArtSansNormal","FontFlandersArtSansItalic"];export{o as FontFlandersArtSansItalic,e as FontFlandersArtSansNormal,v as __namedExportsOrder,g as default};
