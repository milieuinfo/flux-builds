"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3169],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,n,r)=>{r.d(n,{f:()=>h});var t=r("../../node_modules/react/index.js"),l=r("../../node_modules/react-dom/client.js"),o=new Map,a=({callback:e,children:n})=>{let r=(0,t.useRef)();return(0,t.useLayoutEffect)(()=>{r.current!==e&&(r.current=e,e())},[e]),n},s=async(e,n)=>{let r=await c(n);return new Promise(n=>{r.render(t.createElement(a,{callback:()=>n(null)},e))})},i=(e,n)=>{let r=o.get(e);r&&(r.unmount(),o.delete(e))},c=async e=>{let n=o.get(e);return n||(n=l.createRoot(e),o.set(e,n)),n},d=r("../../node_modules/@storybook/blocks/dist/index.mjs"),m={code:d.XA,a:d.zE,...d.Sw},u=class extends t.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:n}=this.props;n(e)}render(){let{hasError:e}=this.state,{children:n}=this.props;return e?null:t.createElement(t.Fragment,null,n)}},h=class{constructor(){this.render=async(e,n,l)=>{let o={...m,...n?.components},a=d.kQ;return new Promise((i,c)=>{r.e(814).then(r.bind(r,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:r})=>s(t.createElement(u,{showException:c,key:Math.random()},t.createElement(r,{components:o},t.createElement(a,{context:e,docsParameter:n}))),l)).then(()=>i())})},this.unmount=e=>{i(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,n,r)=>{r.d(n,{Hl:()=>t.Hl,W8:()=>t.W8,kL:()=>t.kL,ov:()=>t.ov}),r("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var t=r("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,n,r)=>{r.d(n,{BN:()=>l,RP:()=>a,gz:()=>o,xA:()=>i});var t=r("../../node_modules/react/index.js");let l=t.createContext({});function o(e){return function(n){let r=a(n.components);return t.createElement(e,{...n,allComponents:r})}}function a(e){let n=t.useContext(l);return t.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}let s={};function i({components:e,children:n,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||s:a(e),t.createElement(l.Provider,{value:o},n)}},"../../libs/components/src/next/link/stories/vl-link.stories.ts":(e,n,r)=>{r.r(n),r.d(n,{LinkBold:()=>_,LinkDefault:()=>j,LinkError:()=>S,LinkExternal:()=>T,LinkIcon:()=>L,LinkLarge:()=>w,LinkSmall:()=>E,__namedExportsOrder:()=>A,default:()=>k});var t=r("../../libs/common/storybook/src/index.ts"),l=r("../../node_modules/lit-html/lit-html.js"),o=r("../../libs/common/utilities/src/index.ts"),a=r("../../libs/common/utilities/src/css/global-styles-decorator.ts"),s=r("../../libs/common/utilities/src/css/icon/icon.css.ts"),i=r("../../libs/common/utilities/src/css/link/link.css.ts"),c=r("../../node_modules/lit/index.js"),d=r("../../node_modules/lit/directives/class-map.js");let m={href:"",bold:!1,small:!1,large:!1,error:!1,external:!1,icon:"",iconPlacement:"before"};class u extends o.jW{static get styles(){return[i.A,s.A]}static get properties(){return{href:{type:String},block:{type:Boolean},bold:{type:Boolean},error:{type:Boolean},small:{type:Boolean},large:{type:Boolean},external:{type:Boolean},icon:{type:String},iconPlacement:{type:String,attribute:"icon-placement",reflect:!0}}}updated(e){super.updated(e),e.has("iconPlacement")&&!this.iconPlacement&&(this.iconPlacement=m.iconPlacement)}render(){let e={bold:this.bold,error:this.error,small:this.small,large:this.large},n=this.external?"_blank":c.s6;return(0,c.qy)`
            <a class=${(0,d.H)(e)} href=${this.href} target=${n}>
                ${this.renderIcon(o.aK.BEFORE)}
                <slot></slot>
                ${this.renderIcon(o.aK.AFTER)} ${this.external?this.renderExternalIcon():""}
            </a>
        `}renderIcon(e){if(e!==this.iconPlacement)return c.s6;let n={"vl-icon":!0,[`vl-icon--${this.icon}`]:!0,"vl-icon--right-margin":"before"===this.iconPlacement,"vl-icon--left-margin":"after"===this.iconPlacement};return(0,c.qy)`<span class=${(0,d.H)(n)}></span>`}renderExternalIcon(){return(0,c.qy)`<span class="vl-icon vl-icon--external vl-icon--after"></span>`}constructor(...e){super(...e),this.href=m.href,this.bold=m.bold,this.small=m.small,this.large=m.large,this.error=m.error,this.external=m.external,this.icon=m.icon,this.iconPlacement=m.iconPlacement}}u=function(e,n,r,t){var l,o=arguments.length,a=o<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,r,t);else for(var s=e.length-1;s>=0;s--)(l=e[s])&&(a=(o<3?l(a):o>3?l(n,r,a):l(n,r))||a);return o>3&&a&&Object.defineProperty(n,r,a),a}([(0,a.n)(),(0,o.M1)("vl-link-next")],u);var h=r("../../libs/common/utilities/src/constants/index.ts");let f={...t.D8,...m,defaultSlot:""},v={...(0,t.RN)(!0),href:{name:"href",description:"De url waar de link naar verwijst.",table:{type:{summary:t.QE.STRING},category:t.R6.ATTRIBUTES,defaultValue:{summary:f.href}}},bold:{name:"bold",description:"Beeldt de tekst van de link vet af.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:f.bold}}},small:{name:"small",description:"Beeldt de tekst van de link klein af.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:f.small}}},large:{name:"large",description:"Beeldt de tekst van de link groot af.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:f.large}}},error:{name:"error",description:"Beeldt de link af in een error state.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:f.error}}},external:{name:"external",description:"Opent de link in een nieuw tabblad.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:f.external}}},icon:{name:"icon",description:"Beeldt een icoon af in de link.<br/>Standaard wordt dit icoon voor de tekst afgebeeld.",table:{type:{summary:t.QE.STRING},category:t.R6.ATTRIBUTES,defaultValue:{summary:f.icon}}},iconPlacement:{name:"icon-placement",description:"De positie van het icoon ten opzichte van de tekst.",control:{type:t.VH.SELECT},options:Object.values(h.aK),table:{type:{summary:(0,t.uf)(Object.values(h.aK))},category:t.R6.ATTRIBUTES,defaultValue:{summary:f.iconPlacement}}},defaultSlot:{name:"[default]",description:"De content van de link.",table:{type:{summary:t.QE.HTML},category:t.R6.SLOTS,defaultValue:{summary:f.defaultSlot}}}};var p=r("../../node_modules/lit/directives/unsafe-html.js");r("../../node_modules/react/index.js");var x=r("../../node_modules/react/jsx-runtime.js"),g=r("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),b=r("../../node_modules/@storybook/addon-docs/dist/index.mjs");function y(e){let n=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,g.RP)(),e.components);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n.h1,{id:"link---next",children:"Link - next"}),"\n",(0,x.jsxs)(n.p,{children:["Gebruik de ",(0,x.jsx)(n.code,{children:"link-next"})," component om een link af te beelden op een pagina.",(0,x.jsx)("br",{})]}),"\n",(0,x.jsxs)(n.p,{children:["Dit component is de volgende versie van de ",(0,x.jsx)(n.a,{href:"/docs/elements-link-link--documentatie",children:"vl-link"})," component."]}),"\n",(0,x.jsx)(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,x.jsx)(n.pre,{children:(0,x.jsx)(n.code,{className:"language-js",children:"import { VlLinkComponent } from '@domg-wc/components/next/link';\n"})}),"\n",(0,x.jsx)(n.pre,{children:(0,x.jsx)(n.code,{className:"language-html",children:"<vl-link-next></vl-link-next>\n"})}),"\n",(0,x.jsx)(b.Hl,{of:j}),"\n",(0,x.jsx)(n.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,x.jsx)(b.ov,{of:j}),"\n",(0,x.jsx)(n.h2,{id:"varianten",children:"Varianten"}),"\n",(0,x.jsx)(n.h3,{id:"bold",children:"Bold"}),"\n",(0,x.jsx)(b.Hl,{of:_}),"\n",(0,x.jsx)(n.h3,{id:"small",children:"Small"}),"\n",(0,x.jsx)(b.Hl,{of:E}),"\n",(0,x.jsx)(n.h3,{id:"large",children:"Large"}),"\n",(0,x.jsx)(b.Hl,{of:w}),"\n",(0,x.jsx)(n.h3,{id:"error",children:"Error"}),"\n",(0,x.jsx)(b.Hl,{of:S}),"\n",(0,x.jsx)(n.h3,{id:"external",children:"External"}),"\n",(0,x.jsx)(b.Hl,{of:T}),"\n",(0,x.jsx)(n.h3,{id:"icon",children:"Icon"}),"\n",(0,x.jsx)(b.Hl,{of:L}),"\n",(0,x.jsx)(n.h2,{id:"referenties",children:"Referenties"}),"\n",(0,x.jsx)(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,x.jsx)(n.p,{children:(0,x.jsx)(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-link",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Link"})})]})}(0,o.gy)([u]);let k={title:"Components-next/link",tags:["autodocs"],args:f,argTypes:v,parameters:{docs:{page:function(e={}){let{wrapper:n}=Object.assign({},(0,g.RP)(),e.components);return n?(0,x.jsx)(n,Object.assign({},e,{children:(0,x.jsx)(y,e)})):y(e)}}}},$=(0,t._7)(f,({href:e,bold:n,small:r,large:t,error:o,external:a,icon:s,iconPlacement:i,defaultSlot:c})=>(0,l.qy)`
            <vl-link-next
                href=${e}
                ?bold=${n}
                ?small=${r}
                ?large=${t}
                ?error=${o}
                ?external=${a}
                icon=${s}
                icon-placement=${i}
                >${(0,p._)(c)}</vl-link-next
            >
        `),j=$.bind({});j.storyName="vl-link-next - default",j.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen"};let _=$.bind({});_.storyName="vl-link-next - bold",_.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",bold:!0};let E=$.bind({});E.storyName="vl-link-next - small",E.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",small:!0};let w=$.bind({});w.storyName="vl-link-next - large",w.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",large:!0};let S=$.bind({});S.storyName="vl-link-next - error",S.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",error:!0};let T=$.bind({});T.storyName="vl-link-next - external",T.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",external:!0};let L=$.bind({});L.storyName="vl-link-next - icon",L.args={href:"https://www.vlaanderen.be",defaultSlot:"Vlaanderen",icon:"arrow-right-fat"},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"story(linkArgs, ({\n  href,\n  bold,\n  small,\n  large,\n  error,\n  external,\n  icon,\n  iconPlacement,\n  defaultSlot\n}) => html`\n            <vl-link-next\n                href=${href}\n                ?bold=${bold}\n                ?small=${small}\n                ?large=${large}\n                ?error=${error}\n                ?external=${external}\n                icon=${icon}\n                icon-placement=${iconPlacement}\n                >${unsafeHTML(defaultSlot)}</vl-link-next\n            >\n        `)",...j.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"story(linkArgs, ({\n  href,\n  bold,\n  small,\n  large,\n  error,\n  external,\n  icon,\n  iconPlacement,\n  defaultSlot\n}) => html`\n            <vl-link-next\n                href=${href}\n                ?bold=${bold}\n                ?small=${small}\n                ?large=${large}\n                ?error=${error}\n                ?external=${external}\n                icon=${icon}\n                icon-placement=${iconPlacement}\n                >${unsafeHTML(defaultSlot)}</vl-link-next\n            >\n        `)",..._.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"story(linkArgs, ({\n  href,\n  bold,\n  small,\n  large,\n  error,\n  external,\n  icon,\n  iconPlacement,\n  defaultSlot\n}) => html`\n            <vl-link-next\n                href=${href}\n                ?bold=${bold}\n                ?small=${small}\n                ?large=${large}\n                ?error=${error}\n                ?external=${external}\n                icon=${icon}\n                icon-placement=${iconPlacement}\n                >${unsafeHTML(defaultSlot)}</vl-link-next\n            >\n        `)",...E.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"story(linkArgs, ({\n  href,\n  bold,\n  small,\n  large,\n  error,\n  external,\n  icon,\n  iconPlacement,\n  defaultSlot\n}) => html`\n            <vl-link-next\n                href=${href}\n                ?bold=${bold}\n                ?small=${small}\n                ?large=${large}\n                ?error=${error}\n                ?external=${external}\n                icon=${icon}\n                icon-placement=${iconPlacement}\n                >${unsafeHTML(defaultSlot)}</vl-link-next\n            >\n        `)",...w.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"story(linkArgs, ({\n  href,\n  bold,\n  small,\n  large,\n  error,\n  external,\n  icon,\n  iconPlacement,\n  defaultSlot\n}) => html`\n            <vl-link-next\n                href=${href}\n                ?bold=${bold}\n                ?small=${small}\n                ?large=${large}\n                ?error=${error}\n                ?external=${external}\n                icon=${icon}\n                icon-placement=${iconPlacement}\n                >${unsafeHTML(defaultSlot)}</vl-link-next\n            >\n        `)",...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"story(linkArgs, ({\n  href,\n  bold,\n  small,\n  large,\n  error,\n  external,\n  icon,\n  iconPlacement,\n  defaultSlot\n}) => html`\n            <vl-link-next\n                href=${href}\n                ?bold=${bold}\n                ?small=${small}\n                ?large=${large}\n                ?error=${error}\n                ?external=${external}\n                icon=${icon}\n                icon-placement=${iconPlacement}\n                >${unsafeHTML(defaultSlot)}</vl-link-next\n            >\n        `)",...T.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"story(linkArgs, ({\n  href,\n  bold,\n  small,\n  large,\n  error,\n  external,\n  icon,\n  iconPlacement,\n  defaultSlot\n}) => html`\n            <vl-link-next\n                href=${href}\n                ?bold=${bold}\n                ?small=${small}\n                ?large=${large}\n                ?error=${error}\n                ?external=${external}\n                icon=${icon}\n                icon-placement=${iconPlacement}\n                >${unsafeHTML(defaultSlot)}</vl-link-next\n            >\n        `)",...L.parameters?.docs?.source}}};let A=["LinkDefault","LinkBold","LinkSmall","LinkLarge","LinkError","LinkExternal","LinkIcon"]},"../../node_modules/lit-html/directive.js":(e,n,r)=>{r.d(n,{OA:()=>t,WL:()=>o,u$:()=>l});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},l=e=>function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return{_$litDirective$:e,values:r}};class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}},"../../node_modules/lit/directives/class-map.js":(e,n,r)=>{r.d(n,{H:()=>o});var t=r("../../node_modules/lit-html/lit-html.js"),l=r("../../node_modules/lit-html/directive.js"),o=(0,l.u$)(class extends l.WL{constructor(e){var n;if(super(e),e.type!==l.OA.ATTRIBUTE||"class"!==e.name||(null===(n=e.strings)||void 0===n?void 0:n.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(n=>e[n]).join(" ")+" "}update(e,n){var[r]=n;if(void 0===this.it){for(var l in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),r)r[l]&&!(null!==(i=this.st)&&void 0!==i&&i.has(l))&&this.it.add(l);return this.render(r)}var o=e.element.classList;for(var a of this.it)a in r||(o.remove(a),this.it.delete(a));for(var s in r){var i,c,d=!!r[s];d===this.it.has(s)||(null===(c=this.st)||void 0===c?void 0:c.has(s))||(d?(o.add(s),this.it.add(s)):(o.remove(s),this.it.delete(s)))}return t.c0}})},"../../node_modules/lit/directives/unsafe-html.js":(e,n,r)=>{r.d(n,{_:()=>a});var t=r("../../node_modules/lit-html/lit-html.js"),l=r("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class o extends l.WL{constructor(e){if(super(e),this.et=t.s6,e.type!==l.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===t.s6||null==e)return this.vt=void 0,this.et=e;if(e===t.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var n=[e];return n.raw=n,this.vt={_$litType$:this.constructor.resultType,strings:n,values:[]}}}o.directiveName="unsafeHTML",o.resultType=1;var a=(0,l.u$)(o)},"../../node_modules/react-dom/client.js":(e,n,r)=>{var t=r("../../node_modules/react-dom/index.js");n.createRoot=t.createRoot,n.hydrateRoot=t.hydrateRoot},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,n,r)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=r("../../node_modules/react/index.js"),l=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,o={},c=null,d=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,t)&&!i.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:l,type:e,key:c,ref:d,props:o,_owner:s.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},"../../node_modules/react/jsx-runtime.js":(e,n,r)=>{e.exports=r("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../libs/common/utilities/src/constants/index.ts":(e,n,r)=>{r.d(n,{J3:()=>t.J3,aK:()=>t.aK,qm:()=>t.qm});var t=r("../../libs/common/utilities/src/constants/constants.ts")},"../../libs/common/utilities/src/css/link/link.css.ts":(e,n,r)=>{r.d(n,{A:()=>a});var t=r("../../node_modules/lit/index.js"),l=r("../../libs/common/utilities/src/css/mixin/outline.mixin.css.ts"),o=r("../../libs/common/utilities/src/css/mixin/media-queries.mixin.css.ts");let a=(0,t.AH)`
    a {
        /* Reset styles (gebaseerd op DV _reset.scss) */
        margin: 0;
        border: 0;
        padding: 0;

        /* Link styles (gebaseerd op DV _anchor.scss en _link.scss) */
        display: inline-flex;
        align-items: center;
        word-break: break-word;
        color: var(--vl-action-color);

        &:hover {
            color: var(--vl-action-color--hover);
            text-decoration: none;
        }

        &:focus {
            ${(0,l.H)()}
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

            ${(0,o.i)((0,t.AH)`
                    font-size: calc(var(--vl-font-size--small) - 0.1rem);
                `)}
        }

        &.large {
            font-size: var(--vl-font-size--large);

            ${(0,o.i)((0,t.AH)`
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

        /* Icon styles */
        .vl-icon {
            &:before {
                display: inline-block;
                text-decoration: none;
            }

            &.vl-icon--before {
                margin-right: 0.4rem;
            }

            &.vl-icon--after {
                margin-left: 0.4rem;
            }

            &.vl-icon--external {
                color: var(--vl-light-text-color);
            }
        }

        &:hover,
        &:focus,
        &:active {
            .vl-icon.vl-icon--external {
                color: var(--vl-light-text-color);
            }
        }

        &:visited .vl-icon {
            /* Moet op deze manier gedefinieerd worden of de styles werken niet, visited doet raar. */
            color: var(--vl-action-color--visited);
        }

        &:visited .vl-icon.vl-icon--external {
            /* Moet op deze manier gedefinieerd worden of de styles werken niet, visited doet raar. */
            color: var(--vl-light-text-color);
        }

        &.error:visited .vl-icon {
            /* Moet op deze manier gedefinieerd worden of de styles werken niet, visited doet raar. */
            color: var(--vl-error-color--hover);
        }

        &.error:visited .vl-icon.vl-icon--external {
            /* Moet op deze manier gedefinieerd worden of de styles werken niet, visited doet raar. */
            color: var(--vl-light-text-color);
        }
    }
`}}]);