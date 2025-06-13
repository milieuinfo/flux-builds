(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7625],{"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,o)=>{"use strict";o.d(t,{BN:()=>l,RP:()=>r,gz:()=>i,xA:()=>a});var n=o("../../node_modules/react/index.js");let l=n.createContext({});function i(e){return function(t){let o=r(t.components);return n.createElement(e,{...t,allComponents:o})}}function r(e){let t=n.useContext(l);return n.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let s={};function a({components:e,children:t,disableParentContext:o}){let i;return i=o?"function"==typeof e?e({}):e||s:r(e),n.createElement(l.Provider,{value:i},t)}},"../../libs/components/src/next/title/stories/vl-title.stories.ts":(e,t,o)=>{"use strict";o.r(t),o.d(t,{TitleDefault:()=>_,__namedExportsOrder:()=>A,default:()=>j});var n=o("../../libs/common/storybook/src/index.ts"),l=o("../../node_modules/lit-html/lit-html.js"),i=o("../../libs/common/utilities/src/index.ts"),r=o("../../libs/common/utilities/src/css/global-styles-decorator.ts");o("../../node_modules/@lit/reactive-element/reactive-element.js"),o("../../node_modules/lit-element/lit-element.js");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s=(e,t,o)=>{for(var n of t)if(n[0]===e)return(0,n[1])();return null==o?void 0:o()},a=o("../../node_modules/lit/directives/class-map.js"),d=o("../../node_modules/lit/index.js"),c=o("../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts"),m=o("../../libs/common/utilities/src/css/mixin/title.mixin.css.ts");let u=[(0,d.AH)`
        h1 {
            ${(0,m.D)(1)}
        }

        h2 {
            ${(0,m.D)(2)}
        }

        h3 {
            ${(0,m.D)(3)}
        }

        h4 {
            ${(0,m.D)(4)}
        }

        h5 {
            ${(0,m.D)(5)}
        }

        h6 {
            ${(0,m.D)(6)}
        }
    `,...[1,2,3,4,5,6].map(e=>(0,d.AH)`
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

                ${(0,c.i)((0,d.AH)`
                        h${e}.underline {
                            margin-bottom: 1rem;
                        }
                    `)}
            `)],h={type:"h1",underline:!1,alt:!1,noSpaceBottom:!1};class f extends i.jW{static get styles(){return[u]}static get properties(){return{type:{type:String},underline:{type:Boolean},noSpaceBottom:{type:Boolean,attribute:"no-space-bottom"},alt:{type:Boolean}}}render(){let e={underline:this.underline,"no-space-bottom":this.noSpaceBottom,alt:this.alt};return(0,l.qy)`
            ${s(this.type,[["h1",()=>(0,l.qy)` <h1 class=${(0,a.H)(e)}>
                            <slot></slot>
                        </h1>`],["h2",()=>(0,l.qy)` <h2 class=${(0,a.H)(e)}>
                            <slot></slot>
                        </h2>`],["h3",()=>(0,l.qy)` <h3 class=${(0,a.H)(e)}>
                            <slot></slot>
                        </h3>`],["h4",()=>(0,l.qy)` <h4 class=${(0,a.H)(e)}>
                            <slot></slot>
                        </h4>`],["h5",()=>(0,l.qy)` <h5 class=${(0,a.H)(e)}>
                            <slot></slot>
                        </h5>`],["h6",()=>(0,l.qy)` <h6 class=${(0,a.H)(e)}>
                            <slot></slot>
                        </h6>`]],()=>(0,l.qy)` <h1 class=${(0,a.H)(e)}>
                    <slot></slot>
                </h1>`)}
        `}constructor(...e){super(...e),this.type=h.type,this.underline=h.underline,this.noSpaceBottom=h.noSpaceBottom,this.alt=h.alt}}f=function(e,t,o,n){var l,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(l=e[s])&&(r=(i<3?l(r):i>3?l(t,o,r):l(t,o))||r);return i>3&&r&&Object.defineProperty(t,o,r),r}([(0,r.n)(),(0,i.M1)("vl-title-next")],f);let v={...n.D8,...h,defaultSlot:""},p={...(0,n.RN)(!0),type:{description:"Het type van de titel.",control:{type:n.VH.INLINE_RADIO},options:["h1","h2","h3","h4","h5","h6"],table:{type:{summary:n.QE.STRING},category:n.R6.ATTRIBUTES,defaultValue:{summary:v.type}}},underline:{description:"Voegt een subtiele lijn toe onder de titel.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:v.underline}}},alt:{description:"Zet alle letters om in uppercase en zal altijd een lijn toevoegen onder de titel.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:v.alt}}},noSpaceBottom:{name:"no-space-bottom",description:"Vermindert ruimte onder de titel.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:v.noSpaceBottom}}},defaultSlot:{name:"[default]",table:{type:{summary:n.QE.HTML},category:n.R6.SLOTS}}};o("../../node_modules/react/index.js");var $=o("../../node_modules/react/jsx-runtime.js"),g=o("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),b=o("../../node_modules/@storybook/blocks/dist/index.mjs");function x(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3",strong:"strong"},(0,g.RP)(),e.components);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h1,{id:"title---next",children:"Title - next"}),"\n",(0,$.jsxs)(t.p,{children:["Gebruik de ",(0,$.jsx)(t.code,{children:"title-next"})," component om een title af te beelden.",(0,$.jsx)("br",{})]}),"\n",(0,$.jsxs)(t.p,{children:["Deze component is de nieuwe versie van het ",(0,$.jsx)(t.a,{href:"/docs/elements-title-h1--documentatie",children:"vl-title"})," element, we raden aan om op termijn deze versie te gebruiken."]}),"\n",(0,$.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,$.jsx)(t.pre,{children:(0,$.jsx)(t.code,{className:"language-js",children:"import { VlTitleComponent } from '@domg-wc/components/next/title';\n"})}),"\n",(0,$.jsx)(t.pre,{children:(0,$.jsx)(t.code,{className:"language-html",children:"<vl-title-next></vl-title-next>\n"})}),"\n",(0,$.jsx)(b.Hl,{of:_}),"\n",(0,$.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,$.jsx)(b.ov,{of:_}),"\n",(0,$.jsx)(t.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),"\n",(0,$.jsx)(t.h3,{id:"richtlijnen",children:"Richtlijnen:"}),"\n",(0,$.jsx)(t.p,{children:"Gebruik opeenvolgende rangorde om de titel te bepalen en sla geen rangorde over."}),"\n",(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:"WEL"})," bv. ",(0,$.jsx)(t.code,{children:"h1"})," voor de hoofdtitel, ",(0,$.jsx)(t.code,{children:"h2"})," voor de subtitel, ",(0,$.jsx)(t.code,{children:"h3"})," voor de subsubtitel"]}),"\n",(0,$.jsxs)(t.p,{children:[(0,$.jsx)(t.strong,{children:"NIET"})," bv. ",(0,$.jsx)(t.code,{children:"h2"})," voor de hoofdtitel, ",(0,$.jsx)(t.code,{children:"h4"})," voor de subtitel."]}),"\n",(0,$.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,$.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,$.jsx)(t.p,{children:(0,$.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-titles",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Title"})})]})}var y=o("../../node_modules/lit/directives/unsafe-html.js");let j={title:"Components-next/title",tags:["autodocs"],args:v,argTypes:p,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,g.RP)(),e.components);return t?(0,$.jsx)(t,Object.assign({},e,{children:(0,$.jsx)(x,e)})):x(e)}}}},_=(0,n._7)(v,({underline:e,noSpaceBottom:t,alt:o,defaultSlot:n})=>(0,l.qy)`
            <vl-title-next type="h1" underline=${e} no-space-bottom=${t} alt=${o}>
                h1 - ${(0,y._)(n)}
            </vl-title-next>
            <vl-title-next type="h2" underline=${e} no-space-bottom=${t} alt=${o}>
                h2 - ${(0,y._)(n)}
            </vl-title-next>
            <vl-title-next type="h3" underline=${e} no-space-bottom=${t} alt=${o}>
                h3 - ${(0,y._)(n)}
            </vl-title-next>
            <vl-title-next type="h4" underline=${e} no-space-bottom=${t} alt=${o}>
                h4 - ${(0,y._)(n)}
            </vl-title-next>
            <vl-title-next type="h5" underline=${e} no-space-bottom=${t} alt=${o}>
                h5 - ${(0,y._)(n)}
            </vl-title-next>
            <vl-title-next type="h6" underline=${e} no-space-bottom=${t} alt=${o}>
                h6 - ${(0,y._)(n)}
            </vl-title-next>
        `);_.storyName="vl-title-next - default",_.args={defaultSlot:"Ik ben een titel"},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:'story<TitleArgs>(titleArgs, ({\n  underline,\n  noSpaceBottom,\n  alt,\n  defaultSlot\n}) => html`\n            <vl-title-next type="h1" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h1 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n            <vl-title-next type="h2" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h2 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n            <vl-title-next type="h3" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h3 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n            <vl-title-next type="h4" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h4 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n            <vl-title-next type="h5" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h5 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n            <vl-title-next type="h6" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h6 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n        `)',..._.parameters?.docs?.source}}};let A=["TitleDefault"]},"../../node_modules/lit-html/directive.js":(e,t,o)=>{"use strict";o.d(t,{OA:()=>n,WL:()=>i,u$:()=>l});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},l=e=>function(){for(var t=arguments.length,o=Array(t),n=0;n<t;n++)o[n]=arguments[n];return{_$litDirective$:e,values:o}};class i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},"../../node_modules/lit/directives/class-map.js":(e,t,o)=>{"use strict";o.d(t,{H:()=>i});var n=o("../../node_modules/lit-html/lit-html.js"),l=o("../../node_modules/lit-html/directive.js"),i=(0,l.u$)(class extends l.WL{constructor(e){var t;if(super(e),e.type!==l.OA.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,t){var[o]=t;if(void 0===this.it){for(var l in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),o)o[l]&&!(null!==(a=this.st)&&void 0!==a&&a.has(l))&&this.it.add(l);return this.render(o)}var i=e.element.classList;for(var r of this.it)r in o||(i.remove(r),this.it.delete(r));for(var s in o){var a,d,c=!!o[s];c===this.it.has(s)||(null===(d=this.st)||void 0===d?void 0:d.has(s))||(c?(i.add(s),this.it.add(s)):(i.remove(s),this.it.delete(s)))}return n.c0}})},"../../node_modules/lit/directives/unsafe-html.js":(e,t,o)=>{"use strict";o.d(t,{_:()=>r});var n=o("../../node_modules/lit-html/lit-html.js"),l=o("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class i extends l.WL{constructor(e){if(super(e),this.et=n.s6,e.type!==l.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===n.s6||null==e)return this.vt=void 0,this.et=e;if(e===n.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}i.directiveName="unsafeHTML",i.resultType=1;var r=(0,l.u$)(i)},"../../node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="../../node_modules/memoizerific sync recursive",e.exports=t},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,o)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=o("../../node_modules/react/index.js"),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var n,i={},d=null,c=null;for(n in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)r.call(t,n)&&!a.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:l,type:e,key:d,ref:c,props:i,_owner:s.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},"../../node_modules/react/jsx-runtime.js":(e,t,o)=>{"use strict";e.exports=o("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../libs/common/utilities/src/css/global-styles-decorator.ts":(e,t,o)=>{"use strict";o.d(t,{n:()=>g});var n=o("../../node_modules/lit/index.js");let l=(0,n.AH)`
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
`,i=(0,n.AH)`
    :root {
        --vl-border-radius: 0.3rem;
    }
`,r=(0,n.AH)`
    :root {
        --vl-spacing--xxsmall: 0.5rem;
        --vl-spacing--xsmall: 1rem;
        --vl-spacing--small: 1.5rem;
        --vl-spacing--normal: 2rem;
        --vl-spacing--medium: 3rem;
        --vl-spacing--large: 6rem;
    }
`;var s="https://cdn.omgeving.vlaanderen.be/domg/govflanders-font/22.0.2",a="FlandersArtSans",d="FlandersArtSerif",c="vlaanderen-icon-classic",m="".concat(s,"/iconfont/").concat(c);let u=(0,n.AH)`
    :root {
        /* Flanders font */
        --vl-font: ${(0,n.iz)(a)}, sans-serif;
        --vl-accent-font: ${(0,n.iz)(d)}, serif;

        --vl-font-size: 1.8rem;
        --vl-font-size--mobile: 1.6rem;
        --vl-font-size--small: 1.6rem;
        --vl-font-size--large: 2rem;

        --vl-line-height: 1.5;
        --vl-line-height--mobile: 1.33;

        /* Icon font */
        --vl-icon-font: ${(0,n.iz)(c)};
    }
`,h=(e,t,o,l)=>(0,n.AH)`
    @font-face {
        font-family: ${(0,n.iz)(e)};
        src: url(${(0,n.iz)(`${t}.woff2`)}) format('woff2'),
            url(${(0,n.iz)(`${t}.woff`)}) format('woff');
        font-weight: ${(0,n.iz)(o)};
        font-style: ${(0,n.iz)(l)};
    }
`,f=(0,n.AH)`
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
`;var v=o("../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let p=[l,i,r,u,f,(0,n.AH)`
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

        ${(0,v.i)((0,n.AH)`
                font-size: var(--vl-font-size--mobile);
                line-height: var(--vl-line-height--mobile);
            `)}
    }
`];class ${static{this.registered=!1}static register(){this.registered||(document.adoptedStyleSheets=[...document.adoptedStyleSheets,...p.map(e=>e.styleSheet)],this.registered=!0,console.log("RegisterGlobalStyles: global styling toegevoegd aan het document"))}}let g=()=>e=>{$.register()}},"../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts":(e,t,o)=>{"use strict";o.d(t,{M:()=>i,i:()=>l});var n=o("../../node_modules/lit/index.js");let l=e=>(0,n.AH)`
    @media screen and (max-width: 767px) {
        ${e}
    }
`,i=e=>(0,n.AH)`
    @media screen and (max-width: 1023px) {
        ${e}
    }
`},"../../libs/common/utilities/src/css/mixin/title.mixin.css.ts":(e,t,o)=>{"use strict";o.d(t,{D:()=>r});var n=o("../../node_modules/lit/index.js"),l=o("../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let i={1:(0,n.AH)`
        font-size: 4.4rem;
        margin-bottom: 6rem;
        line-height: 1.18;

        ${(0,l.M)((0,n.AH)`
                font-size: 4rem;
                margin-bottom: 4.5rem;
            `)}

        ${(0,l.i)((0,n.AH)`
                font-size: 3rem;
                margin-bottom: 3rem;
            `)}
    `,2:(0,n.AH)`
        font-size: 3.2rem;
        margin-bottom: 2rem;
        line-height: 1.24;

        ${(0,l.i)((0,n.AH)`
                font-size: 2.6rem;
                margin-bottom: 1.5rem;
            `)}
    `,3:(0,n.AH)`
        font-size: 2.6rem;
        margin-bottom: 2rem;
        line-height: 1.3;

        ${(0,l.i)((0,n.AH)`
                font-size: 2.2rem;
                margin-bottom: 1.5rem;
            `)}
    `,4:(0,n.AH)`
        font-size: 2.2rem;
        margin-bottom: 1.8rem;
        line-height: 1.36;

        ${(0,l.i)((0,n.AH)`
                font-size: 2rem;
                margin-bottom: 1.4rem;
            `)}
    `,5:(0,n.AH)`
        font-size: 2rem;
        margin-bottom: 1.6rem;
        line-height: 1.4;

        ${(0,l.i)((0,n.AH)`
                font-size: 1.8rem;
                margin-bottom: 1.2rem;
            `)}
    `,6:(0,n.AH)`
        font-size: 1.8rem;
        margin-bottom: 1.4rem;
        line-height: 1.44;

        ${(0,l.i)((0,n.AH)`
                font-size: 1.8rem;
                margin-bottom: 1rem;
            `)}
    `},r=e=>(0,n.AH)`
    /* Reset styles (gebaseerd op DV _reset.scss) */
    margin: 0;
    border: 0;
    padding: 0;
    vertical-align: baseline;

    /* Title styles (gebaseerd op DV vl-ui-titles/src/scss/_titles.scss) */
    font-weight: 500;
    ${i[e]}
`}}]);