"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[977],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,o)=>{o.d(t,{f:()=>f});var n=o("../../node_modules/react/index.js"),r=o("../../node_modules/react-dom/client.js"),l=new Map,s=({callback:e,children:t})=>{let o=(0,n.useRef)();return(0,n.useLayoutEffect)(()=>{o.current!==e&&(o.current=e,e())},[e]),t},a=async(e,t)=>{let o=await d(t);return new Promise(t=>{o.render(n.createElement(s,{callback:()=>t(null)},e))})},i=(e,t)=>{let o=l.get(e);o&&(o.unmount(),l.delete(e))},d=async e=>{let t=l.get(e);return t||(t=r.createRoot(e),l.set(e,t)),t},c=o("../../node_modules/@storybook/blocks/dist/index.mjs"),m={code:c.XA,a:c.zE,...c.Sw},u=class extends n.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:n.createElement(n.Fragment,null,t)}},f=class{constructor(){this.render=async(e,t,r)=>{let l={...m,...t?.components},s=c.kQ;return new Promise((i,d)=>{o.e(814).then(o.bind(o,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:o})=>a(n.createElement(u,{showException:d,key:Math.random()},n.createElement(o,{components:l},n.createElement(s,{context:e,docsParameter:t}))),r)).then(()=>i())})},this.unmount=e=>{i(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,o)=>{o.d(t,{Hl:()=>n.Hl,W8:()=>n.W8,kL:()=>n.kL,ov:()=>n.ov}),o("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var n=o("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/components/src/next/infotext/stories/vl-infotext.stories.ts":(e,t,o)=>{o.r(t),o.d(t,{InfotextBadge:()=>S,InfotextDefault:()=>j,InfotextLink:()=>k,__namedExportsOrder:()=>w,default:()=>y});var n=o("../../libs/common/storybook/src/index.ts"),r=o("../../node_modules/lit-html/lit-html.js"),l=o("../../libs/common/utilities/src/index.ts"),s=o("../../libs/common/utilities/src/css/global-styles-decorator.ts"),a=o("../../node_modules/lit/index.js"),i=o("../../node_modules/lit/directives/class-map.js"),d=o("../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let c=(0,a.AH)`
    .vl-infotext {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-weight: 500;
        color: var(--vl-text-alt-color);
        max-width: 14rem;

        ${(0,d.i)((0,a.AH)`
                .vl-infotext__text {
                    font-size: 1.4rem;
                }
            `)}

        &.vl-infotext--badge {
            background-color: var(--vl-background-alt-color);
            border: 1px solid var(--vl-alt-border-color);
            border-radius: 50%;
            width: 14rem;
            height: 14rem;

            .vl-infotext__value {
                line-height: 1;
                margin-top: -1rem;
            }

            .vl-infotext__text {
                font-size: 1.3rem;
                font-weight: 400;
                padding: 1rem 1rem 0;
            }
        }
    }

    a.vl-infotext {
        color: var(--vl-action-color);
        text-decoration: none;

        &:hover,
        &:focus {
            color: var(--vl-action-color--hover);

            .vl-infotext__text {
                text-decoration: underline;
            }
        }
    }
`,m={badge:!1,href:"",external:!1};class u extends l.jW{static get styles(){return[c]}static get properties(){return{badge:{type:Boolean},href:{type:String},external:{type:Boolean},value:{type:String,state:!0}}}connectedCallback(){super.connectedCallback(),this.adjustValue(),this.valueObserver=new MutationObserver(()=>this.adjustValue()),this.getValueSlot()&&this.valueObserver.observe(this.getValueSlot(),{subtree:!0,childList:!0}),window.addEventListener("resize",this.throttledAdjustValue),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.customStyleSheet]}disconnectedCallback(){super.disconnectedCallback(),this.valueObserver?.disconnect(),window.removeEventListener("resize",this.throttledAdjustValue)}render(){let e={"vl-infotext":!0,"vl-infotext--badge":this.badge};if(this.href){let t=this.external?"_blank":a.s6;return(0,a.qy)`<a class=${(0,i.H)(e)} href=${this.href} target=${t}>${this.renderContent()}</a>`}return(0,a.qy)` <div class=${(0,i.H)(e)}>${this.renderContent()}</div>`}renderContent(){return(0,a.qy)`
            <div class="vl-infotext__value">${this.value}</div>
            <div class="vl-infotext__text">
                <slot name="text"></slot>
            </div>
            <slot name="value" hidden></slot>
        `}getValueSlot(){return this.querySelector('[slot="value"]')}adjustValue(){let e=this.getValueSlot(),t=this.getFormattedValue(e?.textContent),o=this.getCustomFontSize(t.length);this.value=t,this.customStyleSheet.replaceSync(`.vl-infotext__value { font-size: ${o}; }`)}getFormattedValue(e){return!e||isNaN(Number(e))?e||"":Intl.NumberFormat("nl-BE").format(Number(e))}constructor(...e){super(...e),this.badge=m.badge,this.href=m.href,this.external=m.external,this.value="",this.customStyleSheet=new CSSStyleSheet,this.valueObserver=null,this.throttledAdjustValue=(0,l.nF)(()=>this.adjustValue(),100),this.getCustomFontSize=(e=0)=>{let t=!this.badge&&window.innerWidth<=767?2.4:4.8,o=t-e/4;return!e||e<=4?`${t}rem`:o<1.6?"1.6rem":`${o}rem`}}}u=function(e,t,o,n){var r,l=arguments.length,s=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(l<3?r(s):l>3?r(t,o,s):r(t,o))||s);return l>3&&s&&Object.defineProperty(t,o,s),s}([(0,s.n)(),(0,l.M1)("vl-infotext-next")],u);let f={...n.D8,...m,valueSlot:"",textSlot:""},v={...(0,n.RN)(!0),badge:{name:"badge",description:"Beeldt de infotext af in een badge.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:f.badge}}},href:{name:"href",description:"De url waar de infotext naar verwijst.",table:{type:{summary:n.QE.STRING},category:n.R6.ATTRIBUTES,defaultValue:{summary:f.href}}},external:{name:"external",description:"Opent de link in een nieuw tabblad.<br/>Te gebruiken in combinatie met het href attribuut.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:f.external}}},valueSlot:{name:"value",description:"De waarde van de infotext.<br/>De font-size wordt automatisch aangepast naargelang de lengte van de value.<br/>Indien er een nummer meegegeven wordt zal de value automatisch geformatteerd worden.",table:{type:{summary:n.QE.HTML},category:n.R6.SLOTS,defaultValue:{summary:f.valueSlot}}},textSlot:{name:"text",description:"De tekst van de infotext.",table:{type:{summary:n.QE.HTML},category:n.R6.SLOTS,defaultValue:{summary:f.textSlot}}}};var h=o("../../node_modules/lit/directives/unsafe-html.js");o("../../node_modules/react/index.js");var x=o("../../node_modules/react/jsx-runtime.js"),g=o("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),b=o("../../node_modules/@storybook/addon-docs/dist/index.mjs");function p(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,g.RP)(),e.components),{VluxMetaData:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t.h1,{id:"infotext---next",children:"Infotext - next"}),"\n",(0,x.jsx)(o,{id:"components-next-infotext"}),"\n",(0,x.jsxs)(t.p,{children:["Gebruik de ",(0,x.jsx)(t.code,{children:"infotext-next"})," component om belangrijke nummers duidelijk weer te gevem.",(0,x.jsx)("br",{})]}),"\n",(0,x.jsxs)(t.p,{children:["Dit component is de volgende versie van de ",(0,x.jsx)(t.a,{href:"/docs/elements-infotext--documentatie",children:"vl-infotext"})," component."]}),"\n",(0,x.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:"language-js",children:"import { VlInfotextComponent } from '@domg-wc/components/next/infotext';\n"})}),"\n",(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:"language-html",children:"<vl-infotext-next></vl-infotext-next>\n"})}),"\n",(0,x.jsx)(b.Hl,{of:j}),"\n",(0,x.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,x.jsx)(b.ov,{of:j}),"\n",(0,x.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,x.jsx)(t.h3,{id:"badge",children:"Badge"}),"\n",(0,x.jsx)(b.Hl,{of:S}),"\n",(0,x.jsx)(t.h3,{id:"link",children:"Link"}),"\n",(0,x.jsx)(b.Hl,{of:k}),"\n",(0,x.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,x.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,x.jsx)(t.p,{children:(0,x.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-infotext",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Infotext"})})]})}(0,l.gy)([u]);let y={id:"components-next-infotext",title:"Components-next/infotext",tags:["autodocs"],args:f,argTypes:v,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,g.RP)(),e.components);return t?(0,x.jsx)(t,Object.assign({},e,{children:(0,x.jsx)(p,e)})):p(e)}}}},$=(0,n._7)(f,({badge:e,href:t,external:o,valueSlot:n,textSlot:l})=>(0,r.qy)`
            <vl-infotext-next ?badge=${e} href=${t} ?external=${o}>
                <span slot="value">${(0,h._)(n)}</span>
                <span slot="text">${(0,h._)(l)}</span>
            </vl-infotext-next>
        `),j=$.bind({});j.storyName="vl-infotext-next - default",j.args={valueSlot:"3200",textSlot:"Bezoekers per dag"};let S=$.bind({});S.storyName="vl-infotext-next - badge",S.args={valueSlot:"3200",textSlot:"Bezoekers per dag",badge:!0};let k=$.bind({});k.storyName="vl-infotext-next - link",k.args={valueSlot:"3200",textSlot:"Bezoekers per dag",href:"https://www.vlaanderen.be"},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:'story(infotextArgs, ({\n  badge,\n  href,\n  external,\n  valueSlot,\n  textSlot\n}) => html`\n            <vl-infotext-next ?badge=${badge} href=${href} ?external=${external}>\n                <span slot="value">${unsafeHTML(valueSlot)}</span>\n                <span slot="text">${unsafeHTML(textSlot)}</span>\n            </vl-infotext-next>\n        `)',...j.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:'story(infotextArgs, ({\n  badge,\n  href,\n  external,\n  valueSlot,\n  textSlot\n}) => html`\n            <vl-infotext-next ?badge=${badge} href=${href} ?external=${external}>\n                <span slot="value">${unsafeHTML(valueSlot)}</span>\n                <span slot="text">${unsafeHTML(textSlot)}</span>\n            </vl-infotext-next>\n        `)',...S.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:'story(infotextArgs, ({\n  badge,\n  href,\n  external,\n  valueSlot,\n  textSlot\n}) => html`\n            <vl-infotext-next ?badge=${badge} href=${href} ?external=${external}>\n                <span slot="value">${unsafeHTML(valueSlot)}</span>\n                <span slot="text">${unsafeHTML(textSlot)}</span>\n            </vl-infotext-next>\n        `)',...k.parameters?.docs?.source}}};let w=["InfotextDefault","InfotextBadge","InfotextLink"]},"../../node_modules/lit/directives/unsafe-html.js":(e,t,o)=>{o.d(t,{_:()=>s});var n=o("../../node_modules/lit-html/lit-html.js"),r=o("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class l extends r.WL{constructor(e){if(super(e),this.et=n.s6,e.type!==r.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===n.s6||null==e)return this.vt=void 0,this.et=e;if(e===n.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}l.directiveName="unsafeHTML",l.resultType=1;var s=(0,r.u$)(l)},"../../node_modules/react-dom/client.js":(e,t,o)=>{var n=o("../../node_modules/react-dom/index.js");t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot},"../../libs/common/utilities/src/css/global-styles-decorator.ts":(e,t,o)=>{o.d(t,{n:()=>b});var n=o("../../node_modules/lit/index.js");let r=(0,n.AH)`
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
`,l=(0,n.AH)`
    :root {
        --vl-border-radius: 0.3rem;
    }
`,s=(0,n.AH)`
    :root {
        --vl-spacing--xxsmall: 0.5rem;
        --vl-spacing--xsmall: 1rem;
        --vl-spacing--small: 1.5rem;
        --vl-spacing--normal: 2rem;
        --vl-spacing--medium: 3rem;
        --vl-spacing--large: 6rem;
    }
`;var a="https://cdn.omgeving.vlaanderen.be/domg/govflanders-font/22.0.2",i="FlandersArtSans",d="FlandersArtSerif",c="vlaanderen-icon-classic",m="".concat(a,"/iconfont/").concat(c);let u=(0,n.AH)`
    :root {
        /* Flanders font */
        --vl-font: ${(0,n.iz)(i)}, sans-serif;
        --vl-accent-font: ${(0,n.iz)(d)}, serif;

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
        --vl-icon-font: ${(0,n.iz)(c)};
    }
`,f=(e,t,o,r)=>(0,n.AH)`
    @font-face {
        font-family: ${(0,n.iz)(e)};
        src: url(${(0,n.iz)(`${t}.woff2`)}) format('woff2'),
            url(${(0,n.iz)(`${t}.woff`)}) format('woff');
        font-weight: ${(0,n.iz)(o)};
        font-style: ${(0,n.iz)(r)};
    }
`,v=(0,n.AH)`
    /* Flanders font */
    ${f(i,`${a}/flanders/sans/${i}-Light`,300,"normal")}
    ${f(i,`${a}/flanders/sans/${i}-Regular`,400,"normal")}
    ${f(i,`${a}/flanders/sans/${i}-Medium`,500,"normal")}
    ${f(i,`${a}/flanders/sans/${i}-Bold`,700,"normal")}

    ${f(i,`${a}/flanders/italic/${i}-Light`,300,"italic")}
    ${f(i,`${a}/flanders/italic/${i}-Regular`,400,"italic")}
    ${f(i,`${a}/flanders/italic/${i}-Medium`,500,"italic")}
    ${f(i,`${a}/flanders/italic/${i}-Bold`,700,"italic")}

    ${f(d,`${a}/flanders/serif/${d}-Light`,300,"normal")}
    ${f(d,`${a}/flanders/serif/${d}-Regular`,400,"normal")}
    ${f(d,`${a}/flanders/serif/${d}-Medium`,500,"normal")}
    ${f(d,`${a}/flanders/serif/${d}-Bold`,700,"normal")}

    /* Icon font */
    ${f(c,m,"normal","normal")}
`;var h=o("../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let x=[r,l,s,u,v,(0,n.AH)`
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

        ${(0,h.i)((0,n.AH)`
                font-size: var(--vl-font-size--mobile);
                line-height: var(--vl-line-height--mobile);
            `)}
    }
`];class g{static{this.registered=!1}static register(){this.registered||(document.adoptedStyleSheets=[...document.adoptedStyleSheets,...x.map(e=>e.styleSheet)],this.registered=!0,console.log("RegisterGlobalStyles: global styling toegevoegd aan het document"))}}let b=()=>e=>{g.register()}},"../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts":(e,t,o)=>{o.d(t,{M:()=>l,i:()=>r});var n=o("../../node_modules/lit/index.js");let r=e=>(0,n.AH)`
    @media screen and (max-width: 767px) {
        ${e}
    }
`,l=e=>(0,n.AH)`
    @media screen and (max-width: 1023px) {
        ${e}
    }
`}}]);