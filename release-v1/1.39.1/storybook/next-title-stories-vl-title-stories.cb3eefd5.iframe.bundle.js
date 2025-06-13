"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7625],{"../../libs/components/src/next/title/stories/vl-title.stories.ts":(e,t,l)=>{l.r(t),l.d(t,{TitleDefault:()=>z,__namedExportsOrder:()=>H,default:()=>j});var o=l("../../libs/common/storybook/src/index.ts"),n=l("../../node_modules/lit-html/lit-html.js"),i=l("../../libs/common/utilities/src/index.ts"),r=l("../../libs/common/utilities/src/css/global-styles-decorator.ts");l("../../node_modules/@lit/reactive-element/reactive-element.js"),l("../../node_modules/lit-element/lit-element.js");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s=(e,t,l)=>{for(var o of t)if(o[0]===e)return(0,o[1])();return null==l?void 0:l()},a=l("../../node_modules/lit/directives/class-map.js"),c=l("../../node_modules/lit/index.js"),d=l("../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts"),m=l("../../libs/common/utilities/src/css/mixin/title.mixin.css.ts");let h=[(0,c.AH)`
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
    `,...[1,2,3,4,5,6].map(e=>(0,c.AH)`
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

                ${(0,d.i)((0,c.AH)`
                        h${e}.underline {
                            margin-bottom: 1rem;
                        }
                    `)}
            `)],u={type:"h1",underline:!1,alt:!1,noSpaceBottom:!1};class f extends i.jW{static get styles(){return[h]}static get properties(){return{type:{type:String},underline:{type:Boolean},noSpaceBottom:{type:Boolean,attribute:"no-space-bottom"},alt:{type:Boolean}}}render(){let e={underline:this.underline,"no-space-bottom":this.noSpaceBottom,alt:this.alt};return(0,n.qy)`
            ${s(this.type,[["h1",()=>(0,n.qy)` <h1 class=${(0,a.H)(e)}>
                            <slot></slot>
                        </h1>`],["h2",()=>(0,n.qy)` <h2 class=${(0,a.H)(e)}>
                            <slot></slot>
                        </h2>`],["h3",()=>(0,n.qy)` <h3 class=${(0,a.H)(e)}>
                            <slot></slot>
                        </h3>`],["h4",()=>(0,n.qy)` <h4 class=${(0,a.H)(e)}>
                            <slot></slot>
                        </h4>`],["h5",()=>(0,n.qy)` <h5 class=${(0,a.H)(e)}>
                            <slot></slot>
                        </h5>`],["h6",()=>(0,n.qy)` <h6 class=${(0,a.H)(e)}>
                            <slot></slot>
                        </h6>`]],()=>(0,n.qy)` <h1 class=${(0,a.H)(e)}>
                    <slot></slot>
                </h1>`)}
        `}constructor(...e){super(...e),this.type=u.type,this.underline=u.underline,this.noSpaceBottom=u.noSpaceBottom,this.alt=u.alt}}f=function(e,t,l,o){var n,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,l):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,l,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(i<3?n(r):i>3?n(t,l,r):n(t,l))||r);return i>3&&r&&Object.defineProperty(t,l,r),r}([(0,r.n)(),(0,i.M1)("vl-title-next")],f);let v={...o.D8,...u,defaultSlot:""},p={...(0,o.RN)(!0),type:{name:"type",description:"Het type van de titel.",control:{type:o.VH.INLINE_RADIO},options:["h1","h2","h3","h4","h5","h6"],table:{type:{summary:o.QE.STRING},category:o.R6.ATTRIBUTES,defaultValue:{summary:v.type}}},underline:{name:"underline",description:"Voegt een subtiele lijn toe onder de titel.",table:{type:{summary:o.QE.BOOLEAN},category:o.R6.ATTRIBUTES,defaultValue:{summary:v.underline}}},alt:{name:"alt",description:"Zet alle letters om in uppercase en zal altijd een lijn toevoegen onder de titel.",table:{type:{summary:o.QE.BOOLEAN},category:o.R6.ATTRIBUTES,defaultValue:{summary:v.alt}}},noSpaceBottom:{name:"no-space-bottom",description:"Vermindert ruimte onder de titel.",table:{type:{summary:o.QE.BOOLEAN},category:o.R6.ATTRIBUTES,defaultValue:{summary:v.noSpaceBottom}}},defaultSlot:{name:"[default]",table:{type:{summary:o.QE.HTML},category:o.R6.SLOTS}}};l("../../node_modules/react/index.js");var g=l("../../node_modules/react/jsx-runtime.js"),$=l("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),b=l("../../node_modules/@storybook/blocks/dist/index.mjs");function x(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3",strong:"strong"},(0,$.RP)(),e.components),{VluxMetaData:l}=t;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t.h1,{id:"title---next",children:"Title - next"}),"\n",(0,g.jsx)(l,{id:"components-next-title"}),"\n",(0,g.jsxs)(t.p,{children:["Gebruik de ",(0,g.jsx)(t.code,{children:"title-next"})," component om een title af te beelden.",(0,g.jsx)("br",{})]}),"\n",(0,g.jsxs)(t.p,{children:["Deze component is de nieuwe versie van het ",(0,g.jsx)(t.a,{href:"/docs/elements-title-h1--documentatie",children:"vl-title"})," element, we raden aan om op termijn deze versie te gebruiken."]}),"\n",(0,g.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:"language-js",children:"import { VlTitleComponent } from '@domg-wc/components/next/title';\n"})}),"\n",(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:"language-html",children:"<vl-title-next></vl-title-next>\n"})}),"\n",(0,g.jsx)(b.Hl,{of:z}),"\n",(0,g.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,g.jsx)(b.ov,{of:z}),"\n",(0,g.jsx)(t.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),"\n",(0,g.jsx)(t.h3,{id:"richtlijnen",children:"Richtlijnen:"}),"\n",(0,g.jsx)(t.p,{children:"Gebruik opeenvolgende rangorde om de titel te bepalen en sla geen rangorde over."}),"\n",(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:"WEL"})," bv. ",(0,g.jsx)(t.code,{children:"h1"})," voor de hoofdtitel, ",(0,g.jsx)(t.code,{children:"h2"})," voor de subtitel, ",(0,g.jsx)(t.code,{children:"h3"})," voor de subsubtitel"]}),"\n",(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:"NIET"})," bv. ",(0,g.jsx)(t.code,{children:"h2"})," voor de hoofdtitel, ",(0,g.jsx)(t.code,{children:"h4"})," voor de subtitel."]}),"\n",(0,g.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,g.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,g.jsx)(t.p,{children:(0,g.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-titles",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Title"})})]})}var y=l("../../node_modules/lit/directives/unsafe-html.js");let j={id:"components-next-title",title:"Components-next/title",tags:["autodocs"],args:v,argTypes:p,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,$.RP)(),e.components);return t?(0,g.jsx)(t,Object.assign({},e,{children:(0,g.jsx)(x,e)})):x(e)}}}},z=(0,o._7)(v,({underline:e,noSpaceBottom:t,alt:l,defaultSlot:o})=>(0,n.qy)`
            <vl-title-next type="h1" underline=${e} no-space-bottom=${t} alt=${l}>
                h1 - ${(0,y._)(o)}
            </vl-title-next>
            <vl-title-next type="h2" underline=${e} no-space-bottom=${t} alt=${l}>
                h2 - ${(0,y._)(o)}
            </vl-title-next>
            <vl-title-next type="h3" underline=${e} no-space-bottom=${t} alt=${l}>
                h3 - ${(0,y._)(o)}
            </vl-title-next>
            <vl-title-next type="h4" underline=${e} no-space-bottom=${t} alt=${l}>
                h4 - ${(0,y._)(o)}
            </vl-title-next>
            <vl-title-next type="h5" underline=${e} no-space-bottom=${t} alt=${l}>
                h5 - ${(0,y._)(o)}
            </vl-title-next>
            <vl-title-next type="h6" underline=${e} no-space-bottom=${t} alt=${l}>
                h6 - ${(0,y._)(o)}
            </vl-title-next>
        `);z.storyName="vl-title-next - default",z.args={defaultSlot:"Ik ben een titel"},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:'story<TitleArgs>(titleArgs, ({\n  underline,\n  noSpaceBottom,\n  alt,\n  defaultSlot\n}) => html`\n            <vl-title-next type="h1" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h1 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n            <vl-title-next type="h2" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h2 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n            <vl-title-next type="h3" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h3 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n            <vl-title-next type="h4" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h4 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n            <vl-title-next type="h5" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h5 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n            <vl-title-next type="h6" underline=${underline} no-space-bottom=${noSpaceBottom} alt=${alt}>\n                h6 - ${unsafeHTML(defaultSlot)}\n            </vl-title-next>\n        `)',...z.parameters?.docs?.source}}};let H=["TitleDefault"]},"../../node_modules/lit/directives/unsafe-html.js":(e,t,l)=>{l.d(t,{_:()=>r});var o=l("../../node_modules/lit-html/lit-html.js"),n=l("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class i extends n.WL{constructor(e){if(super(e),this.et=o.s6,e.type!==n.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===o.s6||null==e)return this.vt=void 0,this.et=e;if(e===o.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}i.directiveName="unsafeHTML",i.resultType=1;var r=(0,n.u$)(i)},"../../libs/common/utilities/src/css/global-styles-decorator.ts":(e,t,l)=>{l.d(t,{n:()=>$});var o=l("../../node_modules/lit/index.js");let n=(0,o.AH)`
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
`,i=(0,o.AH)`
    :root {
        --vl-border-radius: 0.3rem;
    }
`,r=(0,o.AH)`
    :root {
        --vl-spacing--xxsmall: 0.5rem;
        --vl-spacing--xsmall: 1rem;
        --vl-spacing--small: 1.5rem;
        --vl-spacing--normal: 2rem;
        --vl-spacing--medium: 3rem;
        --vl-spacing--large: 6rem;
    }
`;var s="https://cdn.omgeving.vlaanderen.be/domg/govflanders-font/22.0.2",a="FlandersArtSans",c="FlandersArtSerif",d="vlaanderen-icon-classic",m="".concat(s,"/iconfont/").concat(d);let h=(0,o.AH)`
    :root {
        /* Flanders font */
        --vl-font: ${(0,o.iz)(a)}, sans-serif;
        --vl-accent-font: ${(0,o.iz)(c)}, serif;

        --vl-font-size--xxlarge: 2.8rem; /* DV: $vl-base-font-size--xxlarge */
        --vl-font-size--xlarge: 2.2rem; /* DV: $vl-base-font-size--xlarge */
        --vl-font-size--large: 2rem; /* DV: $vl-base-font-size--large */
        --vl-font-size: 1.8rem; /* DV: $vl-base-font-size */
        --vl-font-size--mobile: 1.6rem; /* DV: $vl-base-mobile-font-size */
        --vl-font-size--small: 1.6rem; /* DV: $vl-base-font-size--small */
        --vl-font-size--xsmall: 1.4rem; /* DV: $vl-base-font-size--xsmall */
        --vl-font-size--xxsmall: 1.2rem; /* DV: $vl-base-font-size--xxsmall */

        --vl-line-height: 1.5; /* DV: $vl-base-line-height */
        --vl-line-height--mobile: 1.33; /* DV: $vl-base-mobile-line-height */

        /* Icon font */
        --vl-icon-font: ${(0,o.iz)(d)};
    }
`,u=(e,t,l,n)=>(0,o.AH)`
    @font-face {
        font-family: ${(0,o.iz)(e)};
        src: url(${(0,o.iz)(`${t}.woff2`)}) format('woff2'),
            url(${(0,o.iz)(`${t}.woff`)}) format('woff');
        font-weight: ${(0,o.iz)(l)};
        font-style: ${(0,o.iz)(n)};
    }
`,f=(0,o.AH)`
    /* Flanders font */
    ${u(a,`${s}/flanders/sans/${a}-Light`,300,"normal")}
    ${u(a,`${s}/flanders/sans/${a}-Regular`,400,"normal")}
    ${u(a,`${s}/flanders/sans/${a}-Medium`,500,"normal")}
    ${u(a,`${s}/flanders/sans/${a}-Bold`,700,"normal")}

    ${u(a,`${s}/flanders/italic/${a}-Light`,300,"italic")}
    ${u(a,`${s}/flanders/italic/${a}-Regular`,400,"italic")}
    ${u(a,`${s}/flanders/italic/${a}-Medium`,500,"italic")}
    ${u(a,`${s}/flanders/italic/${a}-Bold`,700,"italic")}

    ${u(c,`${s}/flanders/serif/${c}-Light`,300,"normal")}
    ${u(c,`${s}/flanders/serif/${c}-Regular`,400,"normal")}
    ${u(c,`${s}/flanders/serif/${c}-Medium`,500,"normal")}
    ${u(c,`${s}/flanders/serif/${c}-Bold`,700,"normal")}

    /* Icon font */
    ${u(d,m,"normal","normal")}
`;var v=l("../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let p=[n,i,r,h,f,(0,o.AH)`
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

        ${(0,v.i)((0,o.AH)`
                font-size: var(--vl-font-size--mobile);
                line-height: var(--vl-line-height--mobile);
            `)}
    }
`];class g{static{this.registered=!1}static register(){this.registered||(document.adoptedStyleSheets=[...document.adoptedStyleSheets,...p.map(e=>e.styleSheet)],this.registered=!0,console.log("RegisterGlobalStyles: global styling toegevoegd aan het document"))}}let $=()=>e=>{g.register()}},"../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts":(e,t,l)=>{l.d(t,{M:()=>i,i:()=>n});var o=l("../../node_modules/lit/index.js");let n=e=>(0,o.AH)`
    @media screen and (max-width: 767px) {
        ${e}
    }
`,i=e=>(0,o.AH)`
    @media screen and (max-width: 1023px) {
        ${e}
    }
`},"../../libs/common/utilities/src/css/mixin/title.mixin.css.ts":(e,t,l)=>{l.d(t,{D:()=>r});var o=l("../../node_modules/lit/index.js"),n=l("../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let i={1:(0,o.AH)`
        font-size: 4.4rem;
        margin-bottom: 6rem;
        line-height: 1.18;

        ${(0,n.M)((0,o.AH)`
                font-size: 4rem;
                margin-bottom: 4.5rem;
            `)}

        ${(0,n.i)((0,o.AH)`
                font-size: 3rem;
                margin-bottom: 3rem;
            `)}
    `,2:(0,o.AH)`
        font-size: 3.2rem;
        margin-bottom: 2rem;
        line-height: 1.24;

        ${(0,n.i)((0,o.AH)`
                font-size: 2.6rem;
                margin-bottom: 1.5rem;
            `)}
    `,3:(0,o.AH)`
        font-size: 2.6rem;
        margin-bottom: 2rem;
        line-height: 1.3;

        ${(0,n.i)((0,o.AH)`
                font-size: 2.2rem;
                margin-bottom: 1.5rem;
            `)}
    `,4:(0,o.AH)`
        font-size: 2.2rem;
        margin-bottom: 1.8rem;
        line-height: 1.36;

        ${(0,n.i)((0,o.AH)`
                font-size: 2rem;
                margin-bottom: 1.4rem;
            `)}
    `,5:(0,o.AH)`
        font-size: 2rem;
        margin-bottom: 1.6rem;
        line-height: 1.4;

        ${(0,n.i)((0,o.AH)`
                font-size: 1.8rem;
                margin-bottom: 1.2rem;
            `)}
    `,6:(0,o.AH)`
        font-size: 1.8rem;
        margin-bottom: 1.4rem;
        line-height: 1.44;

        ${(0,n.i)((0,o.AH)`
                font-size: 1.8rem;
                margin-bottom: 1rem;
            `)}
    `},r=e=>(0,o.AH)`
    /* Reset styles (gebaseerd op DV _reset.scss) */
    margin: 0;
    border: 0;
    padding: 0;
    vertical-align: baseline;

    /* Title styles (gebaseerd op DV vl-ui-titles/src/scss/_titles.scss) */
    font-weight: 500;
    ${i[e]}
`}}]);