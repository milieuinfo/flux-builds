(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[9491],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,r)=>{"use strict";r.d(t,{r:()=>v});var o=r("./node_modules/react/index.js"),n=r("./node_modules/react-dom/client.js"),s=new Map,l=({callback:e,children:t})=>{let r=(0,o.useRef)();return(0,o.useLayoutEffect)(()=>{r.current!==e&&(r.current=e,e())},[e]),t},a=async(e,t)=>{let r=await d(t);return new Promise(t=>{r.render(o.createElement(l,{callback:()=>t(null)},e))})},i=(e,t)=>{let r=s.get(e);r&&(r.unmount(),s.delete(e))},d=async e=>{let t=s.get(e);return t||(t=n.createRoot(e),s.set(e,t)),t},c=r("./node_modules/@storybook/blocks/dist/index.mjs"),u={code:c.bD,a:c.Ct,...c.lO},m=class extends o.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},v=class{constructor(){this.render=async(e,t,n)=>{let s={...u,...t?.components},l=c.WI;return new Promise((i,d)=>{r.e(9506).then(r.bind(r,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:r})=>a(o.createElement(m,{showException:d,key:Math.random()},o.createElement(r,{components:s},o.createElement(l,{context:e,docsParameter:t}))),n)).then(()=>i())})},this.unmount=e=>{i(e)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,r)=>{"use strict";r.d(t,{$4:()=>o.$4,Ed:()=>o.Ed,Hw:()=>o.Hw,Uh:()=>o.Uh,Xz:()=>o.Xz,Z$:()=>o.Z$,h_:()=>o.h_}),r("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var o=r("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,r)=>{"use strict";r.d(t,{NF:()=>s,Zo:()=>i,ah:()=>l,pC:()=>n});var o=r("./node_modules/react/index.js");let n=o.createContext({});function s(e){return function(t){let r=l(t.components);return o.createElement(e,{...t,allComponents:r})}}function l(e){let t=o.useContext(n);return o.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let a={};function i({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||a:l(e),o.createElement(n.Provider,{value:s},t)}},"./libs/components/src/next/infotext/stories/vl-infotext.stories.ts":(e,t,r)=>{"use strict";r.r(t),r.d(t,{InfotextBadge:()=>_,InfotextDefault:()=>j,InfotextLink:()=>S,__namedExportsOrder:()=>w,default:()=>y});var o=r("./libs/common/storybook/src/index.ts"),n=r("./node_modules/lit-html/lit-html.js"),s=r("./libs/common/utilities/src/index.ts"),l=r("./libs/common/utilities/src/css/global-styles-decorator.ts"),a=r("./node_modules/lit/index.js"),i=r("./node_modules/lit/directives/class-map.js"),d=r("./libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let c=(0,a.iv)`
    .vl-infotext {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-weight: 500;
        color: var(--vl-text-alt-color);
        max-width: 14rem;

        ${(0,d.R)((0,a.iv)`
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
`,u={badge:!1,href:"",external:!1};class m extends s.fS{static get styles(){return[c]}static get properties(){return{badge:{type:Boolean},href:{type:String},external:{type:Boolean},value:{type:String,state:!0}}}connectedCallback(){super.connectedCallback(),this.adjustValue(),this.valueObserver=new MutationObserver(()=>this.adjustValue()),this.getValueSlot()&&this.valueObserver.observe(this.getValueSlot(),{subtree:!0,childList:!0}),window.addEventListener("resize",this.throttledAdjustValue),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.customStyleSheet]}disconnectedCallback(){super.disconnectedCallback(),this.valueObserver?.disconnect(),window.removeEventListener("resize",this.throttledAdjustValue)}render(){let e={"vl-infotext":!0,"vl-infotext--badge":this.badge};if(this.href){let t=this.external?"_blank":a.Ld;return(0,a.dy)`<a class=${(0,i.$)(e)} href=${this.href} target=${t}>${this.renderContent()}</a>`}return(0,a.dy)` <div class=${(0,i.$)(e)}>${this.renderContent()}</div>`}renderContent(){return(0,a.dy)`
            <div class="vl-infotext__value">${this.value}</div>
            <div class="vl-infotext__text">
                <slot name="text"></slot>
            </div>
            <slot name="value" hidden></slot>
        `}getValueSlot(){return this.querySelector('[slot="value"]')}adjustValue(){let e=this.getValueSlot(),t=this.getFormattedValue(e?.textContent),r=this.getCustomFontSize(t.length);this.value=t,this.customStyleSheet.replaceSync(`.vl-infotext__value { font-size: ${r}; }`)}getFormattedValue(e){return!e||isNaN(Number(e))?e||"":Intl.NumberFormat("nl-BE").format(Number(e))}constructor(...e){super(...e),this.badge=u.badge,this.href=u.href,this.external=u.external,this.value="",this.customStyleSheet=new CSSStyleSheet,this.valueObserver=null,this.throttledAdjustValue=(0,s.P2)(()=>this.adjustValue(),100),this.getCustomFontSize=(e=0)=>{let t=!this.badge&&window.innerWidth<=767?2.4:4.8,r=t-e/4;return!e||e<=4?`${t}rem`:r<1.6?"1.6rem":`${r}rem`}}}m=function(e,t,r,o){var n,s=arguments.length,l=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(l=(s<3?n(l):s>3?n(t,r,l):n(t,r))||l);return s>3&&l&&Object.defineProperty(t,r,l),l}([(0,l.Q)(),(0,s.a6)("vl-infotext-next")],m);let v={...o._O,...u,valueSlot:"",textSlot:""},f={...(0,o.Wp)(!0),badge:{name:"badge",description:"Beeldt de infotext af in een badge.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:v.badge}}},href:{name:"href",description:"De url waar de infotext naar verwijst.",table:{type:{summary:o.vK.STRING},category:o.aA.ATTRIBUTES,defaultValue:{summary:v.href}}},external:{name:"external",description:"Opent de link in een nieuw tabblad.<br/>Te gebruiken in combinatie met het href attribuut.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:v.external}}},valueSlot:{name:"value",description:"De waarde van de infotext.<br/>De font-size wordt automatisch aangepast naargelang de lengte van de value.<br/>Indien er een nummer meegegeven wordt zal de value automatisch geformatteerd worden.",table:{type:{summary:o.vK.HTML},category:o.aA.SLOTS,defaultValue:{summary:v.valueSlot}}},textSlot:{name:"text",description:"De tekst van de infotext.",table:{type:{summary:o.vK.HTML},category:o.aA.SLOTS,defaultValue:{summary:v.textSlot}}}};var h=r("./node_modules/lit/directives/unsafe-html.js");r("./node_modules/react/index.js");var x=r("./node_modules/react/jsx-runtime.js"),g=r("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),p=r("./node_modules/@storybook/addon-docs/dist/index.mjs");function b(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,g.ah)(),e.components);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t.h1,{id:"infotext---next",children:"Infotext - next"}),"\n",(0,x.jsxs)(t.p,{children:["Gebruik de ",(0,x.jsx)(t.code,{children:"infotext-next"})," component om belangrijke nummers duidelijk weer te gevem.",(0,x.jsx)("br",{})]}),"\n",(0,x.jsxs)(t.p,{children:["Dit component is de volgende versie van de ",(0,x.jsx)(t.a,{href:"/docs/elements-infotext--documentatie",children:"vl-infotext"})," component."]}),"\n",(0,x.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:"language-js",children:"import { VlInfotextComponent } from '@domg-wc/components/next/infotext';\n"})}),"\n",(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:"language-html",children:"<vl-infotext-next></vl-infotext-next>\n"})}),"\n",(0,x.jsx)(p.Xz,{of:j}),"\n",(0,x.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,x.jsx)(p.Ed,{of:j}),"\n",(0,x.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,x.jsx)(t.h3,{id:"badge",children:"Badge"}),"\n",(0,x.jsx)(p.Xz,{of:_}),"\n",(0,x.jsx)(t.h3,{id:"link",children:"Link"}),"\n",(0,x.jsx)(p.Xz,{of:S}),"\n",(0,x.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,x.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,x.jsx)(t.p,{children:(0,x.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-infotext",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Infotext"})})]})}(0,s.YV)([m]);let y={title:"Components-next/infotext",tags:["autodocs"],args:v,argTypes:f,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,g.ah)(),e.components);return t?(0,x.jsx)(t,Object.assign({},e,{children:(0,x.jsx)(b,e)})):b(e)}}}},$=(0,o.yg)(v,({badge:e,href:t,external:r,valueSlot:o,textSlot:s})=>(0,n.dy)`
            <vl-infotext-next ?badge=${e} href=${t} ?external=${r}>
                <span slot="value">${(0,h.A)(o)}</span>
                <span slot="text">${(0,h.A)(s)}</span>
            </vl-infotext-next>
        `),j=$.bind({});j.storyName="vl-infotext-next - default",j.args={valueSlot:"3200",textSlot:"Bezoekers per dag"};let _=$.bind({});_.storyName="vl-infotext-next - badge",_.args={valueSlot:"3200",textSlot:"Bezoekers per dag",badge:!0};let S=$.bind({});S.storyName="vl-infotext-next - link",S.args={valueSlot:"3200",textSlot:"Bezoekers per dag",href:"https://www.vlaanderen.be"},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:'story(infotextArgs, ({\n  badge,\n  href,\n  external,\n  valueSlot,\n  textSlot\n}) => html`\n            <vl-infotext-next ?badge=${badge} href=${href} ?external=${external}>\n                <span slot="value">${unsafeHTML(valueSlot)}</span>\n                <span slot="text">${unsafeHTML(textSlot)}</span>\n            </vl-infotext-next>\n        `)',...j.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:'story(infotextArgs, ({\n  badge,\n  href,\n  external,\n  valueSlot,\n  textSlot\n}) => html`\n            <vl-infotext-next ?badge=${badge} href=${href} ?external=${external}>\n                <span slot="value">${unsafeHTML(valueSlot)}</span>\n                <span slot="text">${unsafeHTML(textSlot)}</span>\n            </vl-infotext-next>\n        `)',..._.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:'story(infotextArgs, ({\n  badge,\n  href,\n  external,\n  valueSlot,\n  textSlot\n}) => html`\n            <vl-infotext-next ?badge=${badge} href=${href} ?external=${external}>\n                <span slot="value">${unsafeHTML(valueSlot)}</span>\n                <span slot="text">${unsafeHTML(textSlot)}</span>\n            </vl-infotext-next>\n        `)',...S.parameters?.docs?.source}}};let w=["InfotextDefault","InfotextBadge","InfotextLink"]},"./node_modules/lit-html/directive.js":(e,t,r)=>{"use strict";r.d(t,{XM:()=>n,Xe:()=>s,pX:()=>o});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=e=>function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return{_$litDirective$:e,values:r}};class s{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},"./node_modules/lit/directives/class-map.js":(e,t,r)=>{"use strict";r.d(t,{$:()=>s});var o=r("./node_modules/lit-html/lit-html.js"),n=r("./node_modules/lit-html/directive.js"),s=(0,n.XM)(class extends n.Xe{constructor(e){var t;if(super(e),e.type!==n.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,t){var[r]=t;if(void 0===this.it){for(var n in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),r)r[n]&&!(null!==(i=this.st)&&void 0!==i&&i.has(n))&&this.it.add(n);return this.render(r)}var s=e.element.classList;for(var l of this.it)l in r||(s.remove(l),this.it.delete(l));for(var a in r){var i,d,c=!!r[a];c===this.it.has(a)||(null===(d=this.st)||void 0===d?void 0:d.has(a))||(c?(s.add(a),this.it.add(a)):(s.remove(a),this.it.delete(a)))}return o.Jb}})},"./node_modules/lit/directives/unsafe-html.js":(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var o=r("./node_modules/lit-html/lit-html.js"),n=r("./node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s extends n.Xe{constructor(e){if(super(e),this.et=o.Ld,e.type!==n.pX.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===o.Ld||null==e)return this.vt=void 0,this.et=e;if(e===o.Jb)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}s.directiveName="unsafeHTML",s.resultType=1;var l=(0,n.XM)(s)},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./node_modules/react-dom/client.js":(e,t,r)=>{"use strict";var o=r("./node_modules/react-dom/index.js");t.createRoot=o.createRoot,t.hydrateRoot=o.hydrateRoot},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,r)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=r("./node_modules/react/index.js"),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var o,s={},d=null,c=null;for(o in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,o)&&!i.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:n,type:e,key:d,ref:c,props:s,_owner:a.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},"./node_modules/react/jsx-runtime.js":(e,t,r)=>{"use strict";e.exports=r("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/common/utilities/src/css/global-styles-decorator.ts":(e,t,r)=>{"use strict";r.d(t,{Q:()=>p});var o=r("./node_modules/lit/index.js");let n=(0,o.iv)`
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
`,s=(0,o.iv)`
    :root {
        --vl-border-radius: 0.3rem;
    }
`,l=(0,o.iv)`
    :root {
        --vl-spacing--xxsmall: 0.5rem;
        --vl-spacing--xsmall: 1rem;
        --vl-spacing--small: 1.5rem;
        --vl-spacing--normal: 2rem;
        --vl-spacing--medium: 3rem;
        --vl-spacing--large: 6rem;
    }
`;var a="https://cdn.omgeving.vlaanderen.be/domg/govflanders-font/22.0.2",i="FlandersArtSans",d="FlandersArtSerif",c="vlaanderen-icon-classic",u="".concat(a,"/iconfont/").concat(c);let m=(0,o.iv)`
    :root {
        /* Flanders font */
        --vl-font: ${(0,o.$m)(i)}, sans-serif;
        --vl-accent-font: ${(0,o.$m)(d)}, serif;

        --vl-font-size: 1.8rem;
        --vl-font-size--mobile: 1.6rem;
        --vl-font-size--small: 1.6rem;
        --vl-font-size--large: 2rem;

        --vl-line-height: 1.5;
        --vl-line-height--mobile: 1.33;

        /* Icon font */
        --vl-icon-font: ${(0,o.$m)(c)};
    }
`,v=(e,t,r,n)=>(0,o.iv)`
    @font-face {
        font-family: ${(0,o.$m)(e)};
        src: url(${(0,o.$m)(`${t}.woff2`)}) format('woff2'),
            url(${(0,o.$m)(`${t}.woff`)}) format('woff');
        font-weight: ${(0,o.$m)(r)};
        font-style: ${(0,o.$m)(n)};
    }
`,f=(0,o.iv)`
    /* Flanders font */
    ${v(i,`${a}/flanders/sans/${i}-Light`,300,"normal")}
    ${v(i,`${a}/flanders/sans/${i}-Regular`,400,"normal")}
    ${v(i,`${a}/flanders/sans/${i}-Medium`,500,"normal")}
    ${v(i,`${a}/flanders/sans/${i}-Bold`,700,"normal")}

    ${v(i,`${a}/flanders/italic/${i}-Light`,300,"italic")}
    ${v(i,`${a}/flanders/italic/${i}-Regular`,400,"italic")}
    ${v(i,`${a}/flanders/italic/${i}-Medium`,500,"italic")}
    ${v(i,`${a}/flanders/italic/${i}-Bold`,700,"italic")}

    ${v(d,`${a}/flanders/serif/${d}-Light`,300,"normal")}
    ${v(d,`${a}/flanders/serif/${d}-Regular`,400,"normal")}
    ${v(d,`${a}/flanders/serif/${d}-Medium`,500,"normal")}
    ${v(d,`${a}/flanders/serif/${d}-Bold`,700,"normal")}

    /* Icon font */
    ${v(c,u,"normal","normal")}
`;var h=r("./libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let x=[n,s,l,m,f,(0,o.iv)`
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

        ${(0,h.R)((0,o.iv)`
                font-size: var(--vl-font-size--mobile);
                line-height: var(--vl-line-height--mobile);
            `)}
    }
`];class g{static{this.registered=!1}static register(){this.registered||(document.adoptedStyleSheets=[...document.adoptedStyleSheets,...x.map(e=>e.styleSheet)],this.registered=!0,console.log("RegisterGlobalStyles: global styling toegevoegd aan het document"))}}let p=()=>e=>{g.register()}},"./libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts":(e,t,r)=>{"use strict";r.d(t,{R:()=>n,Y:()=>s});var o=r("./node_modules/lit/index.js");let n=e=>(0,o.iv)`
    @media screen and (max-width: 767px) {
        ${e}
    }
`,s=e=>(0,o.iv)`
    @media screen and (max-width: 1023px) {
        ${e}
    }
`}}]);