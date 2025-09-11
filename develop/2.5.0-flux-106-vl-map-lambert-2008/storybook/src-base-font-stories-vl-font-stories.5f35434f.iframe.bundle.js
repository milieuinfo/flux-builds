"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6280],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,n,t)=>{t.d(n,{f:()=>p});var i=t("../../node_modules/react/index.js"),o=t("../../node_modules/react-dom/client.js"),a=new Map,s=({callback:e,children:n})=>{let t=(0,i.useRef)();return(0,i.useLayoutEffect)(()=>{t.current!==e&&(t.current=e,e())},[e]),n},r=async(e,n)=>{let t=await d(n);return new Promise(n=>{t.render(i.createElement(s,{callback:()=>n(null)},e))})},l=(e,n)=>{let t=a.get(e);t&&(t.unmount(),a.delete(e))},d=async e=>{let n=a.get(e);return n||(n=o.createRoot(e),a.set(e,n)),n},u=t("../../node_modules/@storybook/blocks/dist/index.mjs"),c={code:u.XA,a:u.zE,...u.Sw},m=class extends i.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:n}=this.props;n(e)}render(){let{hasError:e}=this.state,{children:n}=this.props;return e?null:i.createElement(i.Fragment,null,n)}},p=class{constructor(){this.render=async(e,n,o)=>{let a={...c,...n?.components},s=u.kQ;return new Promise((l,d)=>{t.e(814).then(t.bind(t,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:t})=>r(i.createElement(m,{showException:d,key:Math.random()},i.createElement(t,{components:a},i.createElement(s,{context:e,docsParameter:n}))),o)).then(()=>l())})},this.unmount=e=>{l(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,n,t)=>{t.d(n,{Hl:()=>i.Hl,W8:()=>i.W8,kL:()=>i.kL,ov:()=>i.ov}),t("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var i=t("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/styles/src/base/font/stories/vl-font.stories.ts":(e,n,t)=>{t.r(n),t.d(n,{FontFlandersArtSansItalic:()=>c,FontFlandersArtSansNormal:()=>u,__namedExportsOrder:()=>m,default:()=>d});var i=t("../../node_modules/lit-html/lit-html.js");t("../../node_modules/react/index.js");var o=t("../../node_modules/react/jsx-runtime.js"),a=t("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),s=t("../../node_modules/@storybook/blocks/dist/index.mjs"),r=t("../../node_modules/@storybook/addon-docs/dist/index.mjs");function l(e){let n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a",p:"p",code:"code",h3:"h3"},(0,a.RP)(),e.components),{FluxMetaData:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("FluxMetaData",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.W8,{title:"Styles/Base (intern)/font"}),"\n",(0,o.jsx)(n.h1,{id:"font",children:"Font"}),"\n",(0,o.jsx)(t,{id:"styles-base-font"}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#doel",children:"Doel"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#implementatie",children:"Implementatie"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#voorbeelden",children:"Voorbeelden"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"doel",children:"Doel"}),"\n",(0,o.jsxs)(n.p,{children:["Vanuit Digitaal Vlaanderen worden er 2 fonts voorzien: ",(0,o.jsx)(n.code,{children:"Flanders Art Sans"})," en ",(0,o.jsx)(n.code,{children:"vlaanderen-icon"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Het ",(0,o.jsx)(n.code,{children:"Flanders Art Sans"})," font is het default font, wat zowel voor de normale als de italic styling dient.\nBeide styles zijn beschikbaar in de gewichten: 300, 400, 500 en 700."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/components-atom-icon--documentatie#overzicht",children:"Alle iconen"})," komen uit het font ",(0,o.jsx)(n.code,{children:"vlaanderen-icon"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"implementatie",children:"Implementatie"}),"\n",(0,o.jsxs)("details",{open:!0,children:[(0,o.jsx)("summary",{children:"Font Code"}),(0,o.jsx)(s.kL,{code:"import { css, CSSResult, unsafeCSS } from 'lit';\n\nconst sansFontFamily = 'Flanders Art Sans';\nconst iconFontFamily = 'vlaanderen-icon';\nconst fontLocation = 'https://cdn.omgeving.vlaanderen.be/domg/govflanders-font/22.0.2';\nexport const iconFontLocation = `${fontLocation}/iconfont/vlaanderen-icon`;\n\nconst fontFace = (\n    fontFamily: string,\n    fontLocation: string,\n    fontWeight: number | string,\n    fontStyle: string\n): CSSResult => css`\n    @font-face {\n        font-family: ${unsafeCSS(fontFamily)};\n        src: url(${unsafeCSS(`${fontLocation}.woff2`)}) format('woff2'),\n            url(${unsafeCSS(`${fontLocation}.woff`)}) format('woff');\n        font-weight: ${unsafeCSS(fontWeight)};\n        font-style: ${unsafeCSS(fontStyle)};\n    }\n`;\n\nexport const vlFontStyles: CSSResult = css`\n    ${fontFace(sansFontFamily, `${fontLocation}/flanders/sans/FlandersArtSans-Light`, 300, 'normal')}\n    ${fontFace(sansFontFamily, `${fontLocation}/flanders/sans/FlandersArtSans-Regular`, 400, 'normal')}\n    ${fontFace(sansFontFamily, `${fontLocation}/flanders/sans/FlandersArtSans-Medium`, 500, 'normal')}\n    ${fontFace(sansFontFamily, `${fontLocation}/flanders/sans/FlandersArtSans-Bold`, 700, 'normal')}\n\n    ${fontFace(sansFontFamily, `${fontLocation}/flanders/italic/FlandersArtSans-Light`, 300, 'italic')}\n    ${fontFace(sansFontFamily, `${fontLocation}/flanders/italic/FlandersArtSans-Regular`, 400, 'italic')}\n    ${fontFace(sansFontFamily, `${fontLocation}/flanders/italic/FlandersArtSans-Medium`, 500, 'italic')}\n    ${fontFace(sansFontFamily, `${fontLocation}/flanders/italic/FlandersArtSans-Bold`, 700, 'italic')}\n\n    ${fontFace(iconFontFamily, `${iconFontLocation}`, 'normal', 'normal')}\n`;\n",language:"ts",dark:!0})]}),"\n",(0,o.jsx)(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),"\n",(0,o.jsx)(n.p,{children:"In deze voorbeelden zie je de verschillende fonts in gebruikt, er worden telkens specifieke wrappers voorzien via een\ncustom style-class."}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h3,{id:"flanders-art-sans---normal",children:"Flanders Art Sans - normal"}),"\n",(0,o.jsx)(s.Hl,{of:u}),"\n",(0,o.jsx)(n.h3,{id:"flanders-art-sans---italic",children:"Flanders Art Sans - italic"}),"\n",(0,o.jsx)(s.Hl,{of:c})]})}let d={id:"styles-base-font",title:"Styles/Base (intern)/font",tags:["autodocs"],parameters:{docs:{page:function(e={}){let{wrapper:n}=Object.assign({},(0,a.RP)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}}}},u=({})=>(0,i.qy)`
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
`;u.storyName="vl-font - Flanders Art Sans - normal";let c=({})=>(0,i.qy)`
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
`;c.storyName="vl-font - Flanders Art Sans - italic",u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        .sb-font-normal {\n            font-family: \'Flanders Art Sans\';\n            font-style: normal;\n        }\n\n        .sb-font-title {\n            font-size: 2rem;\n            text-decoration: underline;\n        }\n\n        .sb-font-weight-300 {\n            font-weight: 300;\n        }\n\n        .sb-font-weight-400 {\n            font-weight: 400;\n        }\n\n        .sb-font-weight-500 {\n            font-weight: 500;\n        }\n\n        .sb-font-weight-700 {\n            font-weight: 700;\n        }\n    </style>\n    <div class="sb-font-normal vl-font--weight-300">\n        <div class="sb-font-title">Flanders Art Sans - normal - weight 300</div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n            anim id est laborum.\n        </p>\n    </div>\n    <br />\n    <div class="sb-font-normal sb-font-weight-400">\n        <div class="sb-font-title">Flanders Art Sans - normal - weight 400</div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n            anim id est laborum.\n        </p>\n    </div>\n    <br />\n    <div class="sb-font-normal sb-font-weight-500">\n        <div class="sb-font-title">Flanders Art Sans - normal - weight 500</div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n            anim id est laborum.\n        </p>\n    </div>\n    <br />\n    <div class="sb-font-normal sb-font-weight-700">\n        <div class="sb-font-title">Flanders Art Sans - normal - weight 700</div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n            anim id est laborum.\n        </p>\n    </div>\n    <br />\n`',...u.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        .sb-font-italic {\n            font-family: \'Flanders Art Sans\';\n            font-style: italic;\n        }\n\n        .sb-font-title {\n            font-size: 2rem;\n            text-decoration: underline;\n        }\n\n        .sb-font-weight-300 {\n            font-weight: 300;\n        }\n\n        .sb-font-weight-400 {\n            font-weight: 400;\n        }\n\n        .sb-font-weight-500 {\n            font-weight: 500;\n        }\n\n        .sb-font-weight-700 {\n            font-weight: 700;\n        }\n    </style>\n    <div class="sb-font-italic vl-font--weight-300">\n        <div class="sb-font-title">Flanders Art Sans - italic - weight 300</div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n            anim id est laborum.\n        </p>\n    </div>\n    <br />\n    <div class="sb-font-italic sb-font-weight-400">\n        <div class="sb-font-title">Flanders Art Sans - italic - weight 400</div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n            anim id est laborum.\n        </p>\n    </div>\n    <br />\n    <div class="sb-font-italic sb-font-weight-500">\n        <div class="sb-font-title">Flanders Art Sans - italic - weight 500</div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n            anim id est laborum.\n        </p>\n    </div>\n    <br />\n    <div class="sb-font-italic sb-font-weight-700">\n        <div class="sb-font-title">Flanders Art Sans - italic - weight 700</div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n            anim id est laborum.\n        </p>\n    </div>\n    <br />\n`',...c.parameters?.docs?.source}}};let m=["FontFlandersArtSansNormal","FontFlandersArtSansItalic"]},"../../node_modules/react-dom/client.js":(e,n,t)=>{var i=t("../../node_modules/react-dom/index.js");n.createRoot=i.createRoot,n.hydrateRoot=i.hydrateRoot}}]);