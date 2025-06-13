(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[2050],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,o)=>{"use strict";o.d(t,{NF:()=>l,Zo:()=>a,ah:()=>r,pC:()=>i});var n=o("./node_modules/react/index.js");let i=n.createContext({});function l(e){return function(t){let o=r(t.components);return n.createElement(e,{...t,allComponents:o})}}function r(e){let t=n.useContext(i);return n.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let s={};function a({components:e,children:t,disableParentContext:o}){let l;return l=o?"function"==typeof e?e({}):e||s:r(e),n.createElement(i.Provider,{value:l},t)}},"./libs/components/src/next/title/stories/vl-title.stories.ts":(e,t,o)=>{"use strict";o.r(t),o.d(t,{TitleDefault:()=>_,__namedExportsOrder:()=>T,default:()=>j});var n=o("./libs/common/storybook/src/index.ts"),i=o("./node_modules/lit-html/lit-html.js");o("./node_modules/@lit/reactive-element/reactive-element.js"),o("./node_modules/lit-element/lit-element.js");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l=(e,t,o)=>{for(var n of t)if(n[0]===e)return(0,n[1])();return null==o?void 0:o()},r=o("./node_modules/lit/directives/class-map.js"),s=o("./node_modules/lit/index.js"),a=o("./libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts"),d=o("./libs/common/utilities/src/css/mixin/title.mixin.css.ts");let c=[(0,s.iv)`
        h1 {
            ${(0,d.T)(1)}
        }

        h2 {
            ${(0,d.T)(2)}
        }

        h3 {
            ${(0,d.T)(3)}
        }

        h4 {
            ${(0,d.T)(4)}
        }

        h5 {
            ${(0,d.T)(5)}
        }

        h6 {
            ${(0,d.T)(6)}
        }
    `,...[1,2,3,4,5,6].map(e=>(0,s.iv)`
                h${e} {
                    display: flex;
                    align-items: center;
                }

                h${e}.alt {
                    text-transform: uppercase;
                    font-weight: 500;
                    border-bottom: 3px solid rgb(232, 235, 238);
                    padding: 1.3rem 0 0.7rem;
                    margin: 0 0 2rem;
                }

                h${e}.underline {
                    border-bottom: 1px solid #cbd2da;
                    margin-bottom: 1.5rem;
                }

                h${e}.no-space-bottom {
                    margin-bottom: 0;
                }

                ${(0,a.R)((0,s.iv)`
                        h${e}.underline {
                            margin-bottom: 1rem;
                        }
                    `)}
            `)];var m=o("./libs/common/utilities/src/index.ts"),u=o("./libs/common/utilities/src/css/global-styles-decorator.ts");let h={type:"h1",underline:!1,alt:!1,noSpaceBottom:!1};class v extends m.fS{static get styles(){return[c]}static get properties(){return{type:{type:String},underline:{type:Boolean},noSpaceBottom:{type:Boolean,attribute:"no-space-bottom"},alt:{type:Boolean}}}render(){let e={underline:this.underline,"no-space-bottom":this.noSpaceBottom,alt:this.alt};return(0,i.dy)`
            ${l(this.type,[["h1",()=>(0,i.dy)`<h1 class=${(0,r.$)(e)}><slot></slot></h1>`],["h2",()=>(0,i.dy)`<h2 class=${(0,r.$)(e)}><slot></slot></h2>`],["h3",()=>(0,i.dy)`<h3 class=${(0,r.$)(e)}><slot></slot></h3>`],["h4",()=>(0,i.dy)`<h4 class=${(0,r.$)(e)}><slot></slot></h4>`],["h5",()=>(0,i.dy)`<h5 class=${(0,r.$)(e)}><slot></slot></h5>`],["h6",()=>(0,i.dy)`<h6 class=${(0,r.$)(e)}><slot></slot></h6>`]],()=>(0,i.dy)`<h1 class=${(0,r.$)(e)}><slot></slot></h1>`)}
        `}constructor(...e){super(...e),this.type=h.type,this.underline=h.underline,this.noSpaceBottom=h.noSpaceBottom,this.alt=h.alt}}v=function(e,t,o,n){var i,l=arguments.length,r=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(l<3?i(r):l>3?i(t,o,r):i(t,o))||r);return l>3&&r&&Object.defineProperty(t,o,r),r}([(0,u.Q)(),(0,m.a6)("vl-title-next")],v);let f={...n._O,...h,defaultSlot:""},p={...(0,n.Wp)(!0),type:{description:"Het type van de titel.",control:{type:n.Hy.INLINE_RADIO},options:["h1","h2","h3","h4","h5","h6"],table:{type:{summary:n.vK.STRING},category:n.aA.ATTRIBUTES,defaultValue:{summary:f.type}}},underline:{description:"Voegt een subtiele lijn toe onder de titel.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:f.underline}}},alt:{description:"Zet alle letters om in uppercase en zal altijd een lijn toevoegen onder de titel.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:f.alt}}},noSpaceBottom:{name:"no-space-bottom",description:"Vermindert ruimte onder de titel.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:f.noSpaceBottom}}},defaultSlot:{name:"[default]",table:{type:{summary:n.vK.HTML},category:n.aA.SLOTS}}};o("./node_modules/react/index.js");var $=o("./node_modules/react/jsx-runtime.js"),g=o("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),b=o("./node_modules/@storybook/blocks/dist/index.mjs");function x(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3",strong:"strong"},(0,g.ah)(),e.components);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h1,{id:"title---next",children:"Title - next"}),"\n",(0,$.jsxs)(t.p,{children:["Gebruik de ",(0,$.jsx)(t.code,{children:"title-next"})," component om een title af te beelden.",(0,$.jsx)("br",{})]}),"\n",(0,$.jsxs)(t.p,{children:["Deze component is de nieuwe versie van het ",(0,$.jsx)(t.a,{href:"/docs/elements-title-h1--documentatie",children:"vl-title"})," element, we raden aan om op termijn deze versie te gebruiken."]}),"\n",(0,$.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,$.jsx)(t.pre,{children:(0,$.jsx)(t.code,{className:"language-js",children:"import { VlTitleComponent } from '@domg-wc/components/next/title';\n"})}),"\n",(0,$.jsx)(t.pre,{children:(0,$.jsx)(t.code,{className:"language-html",children:"<vl-title-next></vl-title-next>\n"})}),"\n",(0,$.jsx)(b.Xz,{of:_}),"\n",(0,$.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,$.jsx)(b.Ed,{of:_}),"\n",(0,$.jsx)(t.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),"\n",(0,$.jsx)(t.h3,{id:"richtlijnen",children:"Richtlijnen:"}),"\n",(0,$.jsx)(t.p,{children:"Gebruik opeenvolgende rangorde om de titel te bepalen en sla geen rangorde over."}),"\n",(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:"WEL"})," bv. ",(0,$.jsx)(t.code,{children:"h1"})," voor de hoofdtitel, ",(0,$.jsx)(t.code,{children:"h2"})," voor de subtitel, ",(0,$.jsx)(t.code,{children:"h3"})," voor de subsubtitel"]}),"\n",(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:"NIET"})," bv. ",(0,$.jsx)(t.code,{children:"h2"})," voor de hoofdtitel, ",(0,$.jsx)(t.code,{children:"h4"})," voor de subtitel."]}),"\n",(0,$.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,$.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,$.jsx)(t.p,{children:(0,$.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-titles",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Title"})})]})}var y=o("./node_modules/lit/directives/unsafe-html.js");let j={title:"Components-next/title",tags:["autodocs"],args:f,argTypes:p,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,g.ah)(),e.components);return t?(0,$.jsx)(t,Object.assign({},e,{children:(0,$.jsx)(x,e)})):x(e)}}}},_=(0,n.yg)(f,({underline:e,noSpaceBottom:t,alt:o,defaultSlot:n})=>(0,i.dy)`
            <vl-title-next type="h1" underline=${e} no-space-bottom=${t} alt=${o}>
                h1 - ${(0,y.A)(n)}
            </vl-title-next>
            <vl-title-next type="h2" underline=${e} no-space-bottom=${t} alt=${o}>
                h2 - ${(0,y.A)(n)}
            </vl-title-next>
            <vl-title-next type="h3" underline=${e} no-space-bottom=${t} alt=${o}>
                h3 - ${(0,y.A)(n)}
            </vl-title-next>
            <vl-title-next type="h4" underline=${e} no-space-bottom=${t} alt=${o}>
                h4 - ${(0,y.A)(n)}
            </vl-title-next>
            <vl-title-next type="h5" underline=${e} no-space-bottom=${t} alt=${o}>
                h5 - ${(0,y.A)(n)}
            </vl-title-next>
            <vl-title-next type="h6" underline=${e} no-space-bottom=${t} alt=${o}>
                h6 - ${(0,y.A)(n)}
            </vl-title-next>
        `);_.storyName="vl-title-next - default",_.args={defaultSlot:"Ik ben een titel"},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:'story<TitleArgs>(titleArgs, ({\n  underline,\n  noSpaceBottom,\n  alt,\n  defaultSlot\n}) => html`\n            <vl-title-next type="h1" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h1 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n            <vl-title-next type="h2" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h2 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n            <vl-title-next type="h3" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h3 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n            <vl-title-next type="h4" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h4 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n            <vl-title-next type="h5" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h5 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n            <vl-title-next type="h6" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h6 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n        `)',..._.parameters?.docs?.source}}};let T=["TitleDefault"]},"./node_modules/lit-html/directive.js":(e,t,o)=>{"use strict";o.d(t,{XM:()=>i,Xe:()=>l,pX:()=>n});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=e=>function(){for(var t=arguments.length,o=Array(t),n=0;n<t;n++)o[n]=arguments[n];return{_$litDirective$:e,values:o}};class l{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},"./node_modules/lit/directives/class-map.js":(e,t,o)=>{"use strict";o.d(t,{$:()=>l});var n=o("./node_modules/lit-html/lit-html.js"),i=o("./node_modules/lit-html/directive.js"),l=(0,i.XM)(class extends i.Xe{constructor(e){var t;if(super(e),e.type!==i.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,t){var[o]=t;if(void 0===this.it){for(var i in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),o)o[i]&&!(null!==(a=this.st)&&void 0!==a&&a.has(i))&&this.it.add(i);return this.render(o)}var l=e.element.classList;for(var r of this.it)r in o||(l.remove(r),this.it.delete(r));for(var s in o){var a,d,c=!!o[s];c===this.it.has(s)||(null===(d=this.st)||void 0===d?void 0:d.has(s))||(c?(l.add(s),this.it.add(s)):(l.remove(s),this.it.delete(s)))}return n.Jb}})},"./node_modules/lit/directives/unsafe-html.js":(e,t,o)=>{"use strict";o.d(t,{A:()=>r});var n=o("./node_modules/lit-html/lit-html.js"),i=o("./node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class l extends i.Xe{constructor(e){if(super(e),this.et=n.Ld,e.type!==i.pX.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===n.Ld||null==e)return this.vt=void 0,this.et=e;if(e===n.Jb)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}l.directiveName="unsafeHTML",l.resultType=1;var r=(0,i.XM)(l)},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,o)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=o("./node_modules/react/index.js"),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var n,l={},d=null,c=null;for(n in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)r.call(t,n)&&!a.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:i,type:e,key:d,ref:c,props:l,_owner:s.current}}t.Fragment=l,t.jsx=d,t.jsxs=d},"./node_modules/react/jsx-runtime.js":(e,t,o)=>{"use strict";e.exports=o("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/common/utilities/src/css/global-styles-decorator.ts":(e,t,o)=>{"use strict";o.d(t,{Q:()=>g});var n=o("./node_modules/lit/index.js");let i=(0,n.iv)`
    :root {
        --vl-white: #ffffff;

        --vl-background-color: var(--vl-white);
        --vl-map-background-color: #ffffff;
        --vl-background-alt-color: #f7f9fc;
        --vl-accent-color: #ffe615;

        --vl-text-color: #333332;
        --vl-text-alt-color: #687483;
        --vl-light-text-color: #8695a8;

        --vl-border-color: #cbd2da;
        --vl-alt-border-color: #8695a8;
        --vl-doormat-graphic-border-color: #33333233;

        --vl-action-color: #0055cc;
        --vl-action-color--hover: #003bb0;
        --vl-action-color--active: #004099; /* --vl-action-color 10% darker */
        --vl-action-color--visited: #660599;
        --vl-action-color--disabled: #687483;
        --vl-action-background-color--disabled: #cbd2d9;

        --vl-action-tertiary-color: var(--vl-action-color); /* --vl-action-color */
        --vl-action-tertiary-color--hover: var(--vl-action-color); /* --vl-action-color */
        --vl-action-tertiary-border-color: #c6cdd3;
        --vl-action-tertiary-border-color--hover: #5990de;

        --vl-error-color: #d2373c;
        --vl-error-color--hover: #aa2729;

        --vl-focus-color: #0055cca6; /* --vl-action-color 65% opacity */

        --vl-label-color: #687483;
    }
`,l=(0,n.iv)`
    :root {
        --vl-border-radius: 0.3rem;
    }
`,r=(0,n.iv)`
    :root {
        --vl-spacing--xxsmall: 0.5rem;
        --vl-spacing--xsmall: 1rem;
        --vl-spacing--small: 1.5rem;
        --vl-spacing--normal: 2rem;
        --vl-spacing--medium: 3rem;
        --vl-spacing--large: 6rem;
    }
`;var s="https://cdn.omgeving.vlaanderen.be/domg/govflanders-font/22.0.2",a="FlandersArtSans",d="FlandersArtSerif",c="vlaanderen-icon-classic",m="".concat(s,"/iconfont/").concat(c);let u=(0,n.iv)`
    :root {
        /* Flanders font */
        --vl-font: ${(0,n.$m)(a)}, sans-serif;
        --vl-accent-font: ${(0,n.$m)(d)}, serif;

        --vl-font-size: 1.8rem;
        --vl-font-size--mobile: 1.6rem;
        --vl-font-size--small: 1.6rem;
        --vl-font-size--large: 2rem;

        --vl-line-height: 1.5;
        --vl-line-height--mobile: 1.33;

        /* Icon font */
        --vl-icon-font: ${(0,n.$m)(c)};
    }
`,h=(e,t,o,i)=>(0,n.iv)`
    @font-face {
        font-family: ${(0,n.$m)(e)};
        src: url(${(0,n.$m)(`${t}.woff2`)}) format('woff2'),
            url(${(0,n.$m)(`${t}.woff`)}) format('woff');
        font-weight: ${(0,n.$m)(o)};
        font-style: ${(0,n.$m)(i)};
    }
`,v=(0,n.iv)`
    /* Flanders font */
    ${h(a,`${s}/flanders/sans/${a}-Light`,300,"normal")}
    ${h(a,`${s}/flanders/sans/${a}-Regular`,400,"normal")}
    ${h(a,`${s}/flanders/sans/${a}-Medium`,500,"normal")}
    ${h(a,`${s}/flanders/sans/${a}-Bold`,700,"normal")}

    ${h(a,`${s}/flanders/italic/${a}-Light`,300,"italic")}
    ${h(a,`${s}/flanders/italic/${a}-Regular`,400,"italic")}
    ${h(a,`${s}/flanders/italic/${a}-Medium`,500,"italic")}
    ${h(a,`${s}/flanders/italic/${a}-Bold`,700,"italic")}

    ${h(d,`${s}/flanders/serif/${d}-Light`,300,"normal")}
    ${h(d,`${s}/flanders/serif/${d}-Regular`,400,"normal")}
    ${h(d,`${s}/flanders/serif/${d}-Medium`,500,"normal")}
    ${h(d,`${s}/flanders/serif/${d}-Bold`,700,"normal")}

    /* Icon font */
    ${h(c,m,"normal","normal")}
`;var f=o("./libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let p=[i,l,r,u,v,(0,n.iv)`
    html {
        font-family: var(--vl-font);
        /* 62.5% Font Size Trick  */
        font-size: 62.5%;
    }

    body {
        font-size: var(--vl-font-size);
        line-height: var(--vl-line-height);
        color: var(--vl-text-color);

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: none;

        ${(0,f.R)((0,n.iv)`
                font-size: var(--vl-font-size--mobile);
                line-height: var(--vl-line-height--mobile);
            `)}
    }
`];class ${static{this.registered=!1}static register(){this.registered||(document.adoptedStyleSheets=[...document.adoptedStyleSheets,...p.map(e=>e.styleSheet)],this.registered=!0,console.log("RegisterGlobalStyles: global styling toegevoegd aan het document"))}}let g=()=>e=>{$.register()}},"./libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts":(e,t,o)=>{"use strict";o.d(t,{R:()=>i,Y:()=>l});var n=o("./node_modules/lit/index.js");let i=e=>(0,n.iv)`
    @media screen and (max-width: 767px) {
        ${e}
    }
`,l=e=>(0,n.iv)`
    @media screen and (max-width: 1023px) {
        ${e}
    }
`},"./libs/common/utilities/src/css/mixin/title.mixin.css.ts":(e,t,o)=>{"use strict";o.d(t,{T:()=>r});var n=o("./node_modules/lit/index.js"),i=o("./libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let l={1:(0,n.iv)`
        font-size: 4.4rem;
        margin-bottom: 6rem;
        line-height: 1.18;

        ${(0,i.Y)((0,n.iv)`
                font-size: 4rem;
                margin-bottom: 4.5rem;
            `)}

        ${(0,i.R)((0,n.iv)`
                font-size: 3rem;
                margin-bottom: 3rem;
            `)}
    `,2:(0,n.iv)`
        font-size: 3.2rem;
        margin-bottom: 2rem;
        line-height: 1.24;

        ${(0,i.R)((0,n.iv)`
                font-size: 2.6rem;
                margin-bottom: 1.5rem;
            `)}
    `,3:(0,n.iv)`
        font-size: 2.6rem;
        margin-bottom: 2rem;
        line-height: 1.3;

        ${(0,i.R)((0,n.iv)`
                font-size: 2.2rem;
                margin-bottom: 1.5rem;
            `)}
    `,4:(0,n.iv)`
        font-size: 2.2rem;
        margin-bottom: 1.8rem;
        line-height: 1.36;

        ${(0,i.R)((0,n.iv)`
                font-size: 2rem;
                margin-bottom: 1.4rem;
            `)}
    `,5:(0,n.iv)`
        font-size: 2rem;
        margin-bottom: 1.6rem;
        line-height: 1.4;

        ${(0,i.R)((0,n.iv)`
                font-size: 1.8rem;
                margin-bottom: 1.2rem;
            `)}
    `,6:(0,n.iv)`
        font-size: 1.8rem;
        margin-bottom: 1.4rem;
        line-height: 1.44;

        ${(0,i.R)((0,n.iv)`
                font-size: 1.8rem;
                margin-bottom: 1rem;
            `)}
    `},r=e=>(0,n.iv)`
    /* Reset styles (gebaseerd op DV _reset.scss) */
    margin: 0;
    border: 0;
    padding: 0;
    vertical-align: baseline;

    /* Title styles (gebaseerd op DV vl-ui-titles/src/scss/_titles.scss) */
    font-weight: 500;
    ${l[e]}
`}}]);