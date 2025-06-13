(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[9818],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,r,t)=>{"use strict";t.d(r,{r:()=>h});var n=t("./node_modules/react/index.js"),l=t("./node_modules/react-dom/client.js"),o=new Map,s=({callback:e,children:r})=>{let t=(0,n.useRef)();return(0,n.useLayoutEffect)(()=>{t.current!==e&&(t.current=e,e())},[e]),r},a=async(e,r)=>{let t=await d(r);return new Promise(r=>{t.render(n.createElement(s,{callback:()=>r(null)},e))})},i=(e,r)=>{let t=o.get(e);t&&(t.unmount(),o.delete(e))},d=async e=>{let r=o.get(e);return r||(r=l.createRoot(e),o.set(e,r)),r},c=t("./node_modules/@storybook/blocks/dist/index.mjs"),m={code:c.bD,a:c.Ct,...c.lO},u=class extends n.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:r}=this.props;r(e)}render(){let{hasError:e}=this.state,{children:r}=this.props;return e?null:n.createElement(n.Fragment,null,r)}},h=class{constructor(){this.render=async(e,r,l)=>{let o={...m,...r?.components},s=c.WI;return new Promise((i,d)=>{t.e(9506).then(t.bind(t,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:t})=>a(n.createElement(u,{showException:d,key:Math.random()},n.createElement(t,{components:o},n.createElement(s,{context:e,docsParameter:r}))),l)).then(()=>i())})},this.unmount=e=>{i(e)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(e,r,t)=>{"use strict";t.d(r,{$4:()=>n.$4,Ed:()=>n.Ed,Hw:()=>n.Hw,Uh:()=>n.Uh,Xz:()=>n.Xz,Z$:()=>n.Z$,h_:()=>n.h_}),t("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var n=t("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,r,t)=>{"use strict";t.d(r,{NF:()=>o,Zo:()=>i,ah:()=>s,pC:()=>l});var n=t("./node_modules/react/index.js");let l=n.createContext({});function o(e){return function(r){let t=s(r.components);return n.createElement(e,{...r,allComponents:t})}}function s(e){let r=n.useContext(l);return n.useMemo(()=>"function"==typeof e?e(r):{...r,...e},[r,e])}let a={};function i({components:e,children:r,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||a:s(e),n.createElement(l.Provider,{value:o},r)}},"./libs/components/src/next/link/stories/vl-link.stories.ts":(e,r,t)=>{"use strict";t.r(r),t.d(r,{LinkBold:()=>R,LinkDefault:()=>B,LinkError:()=>V,LinkExternal:()=>M,LinkLarge:()=>N,LinkSmall:()=>z,__namedExportsOrder:()=>D,default:()=>A});var n=t("./libs/common/storybook/src/index.ts"),l=t("./node_modules/lit-html/lit-html.js"),o=t("./node_modules/lit/index.js");let s=e=>(0,o.iv)`
        @media screen and (max-width: 767px) {
            ${e}
        }
    `,a=(0,o.iv)`
    a {
        /* Reset styles (gebaseerd op DV _reset.scss) */
        margin: 0;
        border: 0;
        padding: 0;

        /* Link styles (gebaseerd op DV _anchor.scss en _link.scss) */
        display: inline-block;
        word-break: break-word;
        color: var(--vl-action-color);

        &:hover {
            color: var(--vl-action-color--hover);
            text-decoration: none;
        }

        &:focus {
            ${(0,o.iv)`
        box-shadow: none;
        outline: var(--vl-focus-outline);
        outline-offset: 2px;
    `}
        }

        &:focus,
        &:active {
            color: var(--vl-action-color--active);
        }

        &:visited {
            color: var(--vl-action-color--visited);
        }

        &.bold {
            font-weight: 500;
            text-decoration: none;

            &:hover,
            &:focus,
            &:active {
                text-decoration: underline;
            }
        }

        &.small {
            font-size: var(--vl-font-size--small);

            ${s((0,o.iv)`
                    font-size: calc(var(--vl-font-size--small) - 0.1rem);
                `)}
        }

        &.large {
            font-size: var(--vl-font-size--large);

            ${s((0,o.iv)`
                    font-size: calc(var(--vl-font-size--large) - 0.2rem);
                `)}
        }

        &.error {
            color: var(--vl-error-color);

            &:hover,
            &:focus,
            &:active,
            &:visited {
                color: var(--vl-error-color--hover);
            }
        }
    }
`;var i=t("./libs/common/utilities/src/index.ts"),d=t("./node_modules/lit/directives/class-map.js");let c=(0,o.iv)`
    :root {
        --vl-white: #ffffff;
        --vl-background-color: var(--vl-white);

        --vl-text-color: #333332;

        --vl-action-color: #0055cc;
        --vl-action-color--hover: #003bb0;
        --vl-action-color--active: #004099;
        --vl-action-color--visited: #660599;

        --vl-error-color: #d2373c;
        --vl-error-color--hover: #aa2729;

        --vl-focus-color: #0055cca6; /* --vl-action-color 65% opacity */
    }
`,m=(0,o.iv)`
    :root {
        --vl-focus-outline: 3px solid var(--vl-focus-color);
    }
`,u=(e,r,t,n)=>(0,o.iv)`
        @font-face {
            font-family: ${(0,o.$m)(e)};
            src: url(${(0,o.$m)(`${r}.woff2`)}) format('woff2'),
                url(${(0,o.$m)(`${r}.woff`)}) format('woff');
            font-weight: ${t};
            font-style: ${(0,o.$m)(n)};
        }
    `,h="Flanders Art Sans",f="Flanders Art Serif",v="FlandersArtSans",p="FlandersArtSerif",g="https://cdn.omgeving.vlaanderen.be/domg/govflanders-font/22.0.2/flanders/",x=(0,o.iv)`
    ${u(h,`${g}sans/${v}-Light`,300,"normal")}
    ${u(h,`${g}sans/${v}-Regular`,400,"normal")}
    ${u(h,`${g}sans/${v}-Medium`,500,"normal")}
    ${u(h,`${g}sans/${v}-Bold`,700,"normal")}

    ${u(h,`${g}italic/${v}-Light`,300,"italic")}
    ${u(h,`${g}italic/${v}-Regular`,400,"italic")}
    ${u(h,`${g}italic/${v}-Medium`,500,"italic")}
    ${u(h,`${g}italic/${v}-Bold`,700,"italic")}

    ${u(f,`${g}serif/${p}-Light`,300,"normal")}
    ${u(f,`${g}serif/${p}-Regular`,400,"normal")}
    ${u(f,`${g}serif/${p}-Medium`,500,"normal")}
    ${u(f,`${g}serif/${p}-Bold`,700,"normal")}
`,$=[c,m,(0,o.iv)`
    :root {
        --vl-font: ${(0,o.$m)(h)}, sans-serif;
        --vl-accent-font: ${(0,o.$m)(f)}, serif;

        --vl-font-size: 1.8rem;
        --vl-font-size--mobile: 1.6rem;
        --vl-font-size--small: 1.6rem;
        --vl-font-size--large: 2rem;

        --vl-line-height: 1.5;
        --vl-line-height--mobile: 1.33;
    }
`,x,(0,o.iv)`
    html {
        font-family: var(--vl-font);
        /* 62.5% Font Size Trick  */
        font-size: 62.5%;
    }

    body {
        font-size: var(--vl-font-size);
        line-height: var(--vl-line-height);
        color: var(--vl-text-color);
    }

    ${s((0,o.iv)`
            body {
                font-size: var(--vl-font-size--mobile);
                line-height: var(--vl-line-height--mobile);
            }
        `)}
`];class b{static{this.registered=!1}static register(){this.registered||(document.adoptedStyleSheets=[...document.adoptedStyleSheets,...$.map(e=>e.styleSheet)],this.registered=!0,console.log("RegisterGlobalStyles: global styling toegevoegd aan het document"))}}let y={href:"",bold:!1,small:!1,large:!1,error:!1,external:!1};class k extends i.fS{static get styles(){return[a]}static get properties(){return{href:{type:String},block:{type:Boolean},bold:{type:Boolean},error:{type:Boolean},small:{type:Boolean},large:{type:Boolean},external:{type:Boolean}}}render(){let e={bold:this.bold,error:this.error,small:this.small,large:this.large},r=this.external?"_blank":o.Ld;return(0,o.dy)` <a class=${(0,d.$)(e)} href=${this.href} target=${r}><slot></slot></a> `}constructor(...e){super(...e),this.href=y.href,this.bold=y.bold,this.small=y.small,this.large=y.large,this.error=y.error,this.external=!1}}k=function(e,r,t,n){var l,o=arguments.length,s=o<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,r,t,n);else for(var a=e.length-1;a>=0;a--)(l=e[a])&&(s=(o<3?l(s):o>3?l(r,t,s):l(r,t))||s);return o>3&&s&&Object.defineProperty(r,t,s),s}([e=>{b.register()},(0,i.a6)("vl-link-next")],k);let j={...n._O,...y,defaultSlot:""},_={...(0,n.Wp)(!0),href:{name:"href",description:"De url waar de link naar verwijst.",table:{type:{summary:n.vK.STRING},category:n.aA.ATTRIBUTES,defaultValue:{summary:j.href}}},bold:{name:"bold",description:"Beeldt de tekst van de link vet af.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:j.bold}}},small:{name:"small",description:"Beeldt de tekst van de link klein af.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:j.small}}},large:{name:"large",description:"Beeldt de tekst van de link groot af.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:j.large}}},error:{name:"error",description:"Beeldt de link af in een error state.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:j.error}}},external:{name:"external",description:"Opent de link in een nieuw tabblad.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:j.external}}},defaultSlot:{name:"[default]",description:"De content van de link.",table:{type:{summary:n.vK.HTML},category:n.aA.SLOTS,defaultValue:{summary:j.defaultSlot}}}};var w=t("./node_modules/lit/directives/unsafe-html.js");t("./node_modules/react/index.js");var S=t("./node_modules/react/jsx-runtime.js"),E=t("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),L=t("./node_modules/@storybook/addon-docs/dist/index.mjs");function T(e){let r=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,E.ah)(),e.components);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(r.h1,{id:"link---next",children:"Link - next"}),"\n",(0,S.jsxs)(r.p,{children:["Gebruik de ",(0,S.jsx)(r.code,{children:"link-next"})," component om een link af te beelden op een pagina.",(0,S.jsx)("br",{})]}),"\n",(0,S.jsxs)(r.p,{children:["Dit component is de volgende versie van de ",(0,S.jsx)(r.a,{href:"/docs/elements-link-link--documentatie",children:"vl-link"})," component."]}),"\n",(0,S.jsx)(r.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,S.jsx)(r.pre,{children:(0,S.jsx)(r.code,{className:"language-js",children:"import { VlLinkComponent } from '@domg-wc/components/next/link';\n"})}),"\n",(0,S.jsx)(r.pre,{children:(0,S.jsx)(r.code,{className:"language-html",children:"<vl-link-next></vl-link-next>\n"})}),"\n",(0,S.jsx)(L.Xz,{of:B}),"\n",(0,S.jsx)(r.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,S.jsx)(L.Ed,{of:B}),"\n",(0,S.jsx)(r.h2,{id:"varianten",children:"Varianten"}),"\n",(0,S.jsx)(r.h3,{id:"bold",children:"Bold"}),"\n",(0,S.jsx)(L.Xz,{of:R}),"\n",(0,S.jsx)(r.h3,{id:"small",children:"Small"}),"\n",(0,S.jsx)(L.Xz,{of:z}),"\n",(0,S.jsx)(r.h3,{id:"large",children:"Large"}),"\n",(0,S.jsx)(L.Xz,{of:N}),"\n",(0,S.jsx)(r.h3,{id:"error",children:"Error"}),"\n",(0,S.jsx)(L.Xz,{of:V}),"\n",(0,S.jsx)(r.h3,{id:"external",children:"External"}),"\n",(0,S.jsx)(L.Xz,{of:M}),"\n",(0,S.jsx)(r.h2,{id:"referenties",children:"Referenties"}),"\n",(0,S.jsx)(r.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,S.jsx)(r.p,{children:(0,S.jsx)(r.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-link",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Link"})})]})}(0,i.YV)([k]);let A={title:"Components-next/link",tags:["autodocs"],args:j,argTypes:_,parameters:{docs:{page:function(e={}){let{wrapper:r}=Object.assign({},(0,E.ah)(),e.components);return r?(0,S.jsx)(r,Object.assign({},e,{children:(0,S.jsx)(T,e)})):T(e)}}}},O=(0,n.yg)(j,({href:e,bold:r,small:t,large:n,error:o,external:s,defaultSlot:a})=>(0,l.dy)`
            <vl-link-next
                href=${e}
                ?bold=${r}
                ?small=${t}
                ?large=${n}
                ?error=${o}
                ?external=${s}
                >${(0,w.A)(a)}</vl-link-next
            >
        `),B=O.bind({});B.storyName="vl-link-next - default",B.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen"};let R=O.bind({});R.storyName="vl-link-next - bold",R.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",bold:!0};let z=O.bind({});z.storyName="vl-link-next - small",z.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",small:!0};let N=O.bind({});N.storyName="vl-link-next - large",N.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",large:!0};let V=O.bind({});V.storyName="vl-link-next - error",V.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",error:!0};let M=O.bind({});M.storyName="vl-link-next - external",M.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",external:!0},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:"story(linkArgs, ({\n  href,\n  bold,\n  small,\n  large,\n  error,\n  external,\n  defaultSlot\n}) => html`\n            <vl-link-next\n                href=${href}\n                ?bold=${bold}\n                ?small=${small}\n                ?large=${large}\n                ?error=${error}\n                ?external=${external}\n                >${unsafeHTML(defaultSlot)}</vl-link-next\n            >\n        `)",...B.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:"story(linkArgs, ({\n  href,\n  bold,\n  small,\n  large,\n  error,\n  external,\n  defaultSlot\n}) => html`\n            <vl-link-next\n                href=${href}\n                ?bold=${bold}\n                ?small=${small}\n                ?large=${large}\n                ?error=${error}\n                ?external=${external}\n                >${unsafeHTML(defaultSlot)}</vl-link-next\n            >\n        `)",...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:"story(linkArgs, ({\n  href,\n  bold,\n  small,\n  large,\n  error,\n  external,\n  defaultSlot\n}) => html`\n            <vl-link-next\n                href=${href}\n                ?bold=${bold}\n                ?small=${small}\n                ?large=${large}\n                ?error=${error}\n                ?external=${external}\n                >${unsafeHTML(defaultSlot)}</vl-link-next\n            >\n        `)",...z.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:"story(linkArgs, ({\n  href,\n  bold,\n  small,\n  large,\n  error,\n  external,\n  defaultSlot\n}) => html`\n            <vl-link-next\n                href=${href}\n                ?bold=${bold}\n                ?small=${small}\n                ?large=${large}\n                ?error=${error}\n                ?external=${external}\n                >${unsafeHTML(defaultSlot)}</vl-link-next\n            >\n        `)",...N.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:"story(linkArgs, ({\n  href,\n  bold,\n  small,\n  large,\n  error,\n  external,\n  defaultSlot\n}) => html`\n            <vl-link-next\n                href=${href}\n                ?bold=${bold}\n                ?small=${small}\n                ?large=${large}\n                ?error=${error}\n                ?external=${external}\n                >${unsafeHTML(defaultSlot)}</vl-link-next\n            >\n        `)",...V.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:"story(linkArgs, ({\n  href,\n  bold,\n  small,\n  large,\n  error,\n  external,\n  defaultSlot\n}) => html`\n            <vl-link-next\n                href=${href}\n                ?bold=${bold}\n                ?small=${small}\n                ?large=${large}\n                ?error=${error}\n                ?external=${external}\n                >${unsafeHTML(defaultSlot)}</vl-link-next\n            >\n        `)",...M.parameters?.docs?.source}}};let D=["LinkDefault","LinkBold","LinkSmall","LinkLarge","LinkError","LinkExternal"]},"./node_modules/lit-html/directive.js":(e,r,t)=>{"use strict";t.d(r,{XM:()=>l,Xe:()=>o,pX:()=>n});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},l=e=>function(){for(var r=arguments.length,t=Array(r),n=0;n<r;n++)t[n]=arguments[n];return{_$litDirective$:e,values:t}};class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,t){this._$Ct=e,this._$AM=r,this._$Ci=t}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}},"./node_modules/lit/directives/class-map.js":(e,r,t)=>{"use strict";t.d(r,{$:()=>o});var n=t("./node_modules/lit-html/lit-html.js"),l=t("./node_modules/lit-html/directive.js"),o=(0,l.XM)(class extends l.Xe{constructor(e){var r;if(super(e),e.type!==l.pX.ATTRIBUTE||"class"!==e.name||(null===(r=e.strings)||void 0===r?void 0:r.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(r=>e[r]).join(" ")+" "}update(e,r){var[t]=r;if(void 0===this.it){for(var l in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[l]&&!(null!==(i=this.st)&&void 0!==i&&i.has(l))&&this.it.add(l);return this.render(t)}var o=e.element.classList;for(var s of this.it)s in t||(o.remove(s),this.it.delete(s));for(var a in t){var i,d,c=!!t[a];c===this.it.has(a)||(null===(d=this.st)||void 0===d?void 0:d.has(a))||(c?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return n.Jb}})},"./node_modules/lit/directives/unsafe-html.js":(e,r,t)=>{"use strict";t.d(r,{A:()=>s});var n=t("./node_modules/lit-html/lit-html.js"),l=t("./node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class o extends l.Xe{constructor(e){if(super(e),this.et=n.Ld,e.type!==l.pX.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===n.Ld||null==e)return this.vt=void 0,this.et=e;if(e===n.Jb)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var r=[e];return r.raw=r,this.vt={_$litType$:this.constructor.resultType,strings:r,values:[]}}}o.directiveName="unsafeHTML",o.resultType=1;var s=(0,l.XM)(o)},"./node_modules/memoizerific sync recursive":e=>{function r(e){var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=()=>[],r.resolve=r,r.id="./node_modules/memoizerific sync recursive",e.exports=r},"./node_modules/react-dom/client.js":(e,r,t)=>{"use strict";var n=t("./node_modules/react-dom/index.js");r.createRoot=n.createRoot,r.hydrateRoot=n.hydrateRoot},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,r,t)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=t("./node_modules/react/index.js"),l=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,o={},d=null,c=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(c=r.ref),r)s.call(r,n)&&!i.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:l,type:e,key:d,ref:c,props:o,_owner:a.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},"./node_modules/react/jsx-runtime.js":(e,r,t)=>{"use strict";e.exports=t("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);