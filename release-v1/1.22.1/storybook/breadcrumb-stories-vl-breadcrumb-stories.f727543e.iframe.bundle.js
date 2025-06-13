(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[4387],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,r,t)=>{"use strict";t.d(r,{NF:()=>s,Zo:()=>l,ah:()=>a,pC:()=>o});var n=t("./node_modules/react/index.js");let o=n.createContext({});function s(e){return function(r){let t=a(r.components);return n.createElement(e,{...r,allComponents:t})}}function a(e){let r=n.useContext(o);return n.useMemo(()=>"function"==typeof e?e(r):{...r,...e},[r,e])}let c={};function l({components:e,children:r,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||c:a(e),n.createElement(o.Provider,{value:s},r)}},"./libs/components/src/breadcrumb/stories/vl-breadcrumb.stories.ts":(e,r,t)=>{"use strict";t.r(r),t.d(r,{BreadcrumbDefault:()=>u,__namedExportsOrder:()=>b,default:()=>m});var n=t("./libs/common/storybook/src/index.ts"),o=t("./node_modules/lit/index.js");t("./libs/components/src/breadcrumb/vl-breadcrumb-item.component.ts"),t("./libs/components/src/breadcrumb/vl-breadcrumb.component.ts");let s={...n._O,href1:"",href2:"",href3:"",href4:""},a={...(0,n.Wp)(),href1:{name:"data-vl-href",description:"Url voor bread-crumb-item #1.",table:{type:{summary:n.vK.URL},category:n.aA.CHILD_ATTRIBUTES,defaultValue:{summary:s.href1}}},href2:{name:"data-vl-href",description:"Url voor bread-crumb-item #2.",table:{type:{summary:n.vK.URL},category:n.aA.CHILD_ATTRIBUTES,defaultValue:{summary:s.href2}}},href3:{name:"data-vl-href",description:"Url voor bread-crumb-item #3.",table:{type:{summary:n.vK.URL},category:n.aA.CHILD_ATTRIBUTES,defaultValue:{summary:s.href3}}},href4:{name:"data-vl-href",description:"Url voor bread-crumb-item #4.",table:{type:{summary:n.vK.URL},category:n.aA.CHILD_ATTRIBUTES,defaultValue:{summary:s.href3}}}};t("./node_modules/react/index.js");var c=t("./node_modules/react/jsx-runtime.js"),l=t("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),i=t("./node_modules/@storybook/blocks/dist/index.mjs");function d(e){let r=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,l.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.h1,{id:"breadcrumb",children:"Breadcrumb"}),"\n",(0,c.jsxs)(r.p,{children:["Gebruik de ",(0,c.jsx)(r.code,{children:"breadcrumb"})," component om de locatie van de huidige pagina af te beelden binnen een navigeerbare hiërarchie."]}),"\n",(0,c.jsx)(r.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-js",children:"import { VlBreadcrumbComponent } from '@domg-wc/components';\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-html",children:"<vl-breadcrumb></vl-breadcrumb>\n"})}),"\n",(0,c.jsx)(i.Xz,{of:u}),"\n",(0,c.jsx)(r.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,c.jsx)(i.Ed,{of:u}),"\n",(0,c.jsx)(r.h2,{id:"referenties",children:"Referenties"}),"\n",(0,c.jsx)(r.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-breadcrumb--breadcrumb-default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Breadcrumb"})}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlBreadcrumb.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Breadcrumb"})}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-breadcrumb.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Breadcrumb"})})]})}let m={title:"Components/breadcrumb",tags:["autodocs"],args:s,argTypes:a,parameters:{docs:{page:function(e={}){let{wrapper:r}=Object.assign({},(0,l.ah)(),e.components);return r?(0,c.jsx)(r,Object.assign({},e,{children:(0,c.jsx)(d,e)})):d(e)}}}},u=(0,n.yg)(s,({href1:e,href2:r,href3:t,href4:n})=>(0,o.dy)`
        <vl-breadcrumb>
            <vl-breadcrumb-item data-vl-href=${e}>Vlaanderen Intern</vl-breadcrumb-item>
            <vl-breadcrumb-item data-vl-href=${r}>Regelgeving</vl-breadcrumb-item>
            <vl-breadcrumb-item data-vl-href=${t}>Webuniversum</vl-breadcrumb-item>
            <vl-breadcrumb-item data-vl-href=${n}>Componenten</vl-breadcrumb-item>
        </vl-breadcrumb>
    `);u.storyName="vl-breadcrumb - default",u.args={href1:"#",href2:"#",href3:"#"},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"story(breadcrumbItemArgs, ({\n  href1,\n  href2,\n  href3,\n  href4\n}) => html`\n        <vl-breadcrumb>\n            <vl-breadcrumb-item data-vl-href=${href1}>Vlaanderen Intern</vl-breadcrumb-item>\n            <vl-breadcrumb-item data-vl-href=${href2}>Regelgeving</vl-breadcrumb-item>\n            <vl-breadcrumb-item data-vl-href=${href3}>Webuniversum</vl-breadcrumb-item>\n            <vl-breadcrumb-item data-vl-href=${href4}>Componenten</vl-breadcrumb-item>\n        </vl-breadcrumb>\n    `)",...u.parameters?.docs?.source}}};let b=["BreadcrumbDefault"]},"./node_modules/lit/decorators.js":(e,r,t)=>{"use strict";t.d(r,{Mo:()=>n,Cb:()=>i});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n=e=>(r,t)=>{void 0!==t?t.addInitializer(()=>{customElements.define(e,r)}):customElements.define(e,r)},o=t("./node_modules/lit/node_modules/@lit/reactive-element/reactive-element.js");function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach(function(r){!function(e,r,t){(r=function(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t}(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var c={attribute:!0,type:String,converter:o.Ts,reflect:!1,hasChanged:o.Qu},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,r=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,{kind:n,metadata:o}=t,s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(t.name,e),"accessor"===n){var{name:a}=t;return{set(t){var n=r.get.call(this);r.set.call(this,t),this.requestUpdate(a,n,e)},init(r){return void 0!==r&&this.C(a,void 0,e),r}}}if("setter"===n){var{name:l}=t;return function(t){var n=this[l];r.call(this,t),this.requestUpdate(l,n,e)}}throw Error("Unsupported decorator location: "+n)};function i(e){return(r,t)=>"object"==typeof t?l(e,r,t):((e,r,t)=>{var n=r.hasOwnProperty(t);return r.constructor.createProperty(t,n?a(a({},e),{},{wrapped:!0}):e),n?Object.getOwnPropertyDescriptor(r,t):void 0})(e,r,t)}},"./node_modules/memoizerific sync recursive":e=>{function r(e){var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=()=>[],r.resolve=r,r.id="./node_modules/memoizerific sync recursive",e.exports=r},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,r,t)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=t("./node_modules/react/index.js"),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,s={},i=null,d=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(d=r.ref),r)a.call(r,n)&&!l.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:d,props:s,_owner:c.current}}r.Fragment=s,r.jsx=i,r.jsxs=i},"./node_modules/react/jsx-runtime.js":(e,r,t)=>{"use strict";e.exports=t("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/breadcrumb/vl-breadcrumb-item.component.ts":(e,r,t)=>{"use strict";t.d(r,{h:()=>i});var n=t("./node_modules/@domg/govflanders-style/component/index.js"),o=t("./node_modules/@domg/govflanders-style/common/index.js"),s=t("./node_modules/lit/index.js"),a=t("./node_modules/lit/decorators.js"),c=t("./libs/components/src/breadcrumb/vl-breadcrumb.uig-css.ts"),l=t("./libs/common/utilities/src/index.ts");class i extends l.fS{static get properties(){return{href:{type:String,attribute:"data-vl-href",reflect:!0}}}static get styles(){return[o.YN,n.nC,c.Z]}render(){return this.href?(0,s.dy)`
                <a href=${this.href} class="vl-breadcrumb__list__item__cta">
                    <slot></slot>
                </a>
            `:(0,s.dy)`
            <span class="vl-breadcrumb__list__item__cta">
                <slot></slot>
            </span>
        `}constructor(...e){super(...e),this.href=""}}i=function(e,r,t,n){var o,s=arguments.length,a=s<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,t,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(s<3?o(a):s>3?o(r,t,a):o(r,t))||a);return s>3&&a&&Object.defineProperty(r,t,a),a}([(0,a.Mo)("vl-breadcrumb-item")],i)},"./libs/components/src/breadcrumb/vl-breadcrumb.component.ts":(e,r,t)=>{"use strict";t.d(r,{c:()=>i});var n=t("./node_modules/@domg/govflanders-style/component/index.js"),o=t("./node_modules/@domg/govflanders-style/common/index.js"),s=t("./node_modules/lit/index.js"),a=t("./node_modules/lit/decorators.js"),c=t("./libs/common/utilities/src/index.ts"),l=t("./libs/components/src/breadcrumb/vl-breadcrumb.uig-css.ts");class i extends c.fS{static get styles(){return[o.YN,n.nC,l.Z]}firstUpdated(){new MutationObserver(()=>{this.requestUpdate()}).observe(this,{subtree:!0,childList:!0})}render(){return(0,s.dy)`
            <nav aria-label="U bent hier: " class="vl-breadcrumb">
                <ol class="vl-breadcrumb__list">
                    ${[...Array.from(this.children)].map((e,r)=>{let t=`item-${r}`;return e.setAttribute("slot",t),(0,s.dy)`
                            <li class="vl-breadcrumb__list__item">
                                <span class="vl-breadcrumb__list__item__separator" aria-hidden="true"></span>
                                <slot name=${t}></slot>
                            </li>
                        `})}
                </ol>
            </nav>
        `}}i=function(e,r,t,n){var o,s=arguments.length,a=s<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,t,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(s<3?o(a):s>3?o(r,t,a):o(r,t))||a);return s>3&&a&&Object.defineProperty(r,t,a),a}([(0,a.Mo)("vl-breadcrumb")],i)},"./libs/components/src/breadcrumb/vl-breadcrumb.uig-css.ts":(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var n=t("./node_modules/lit/index.js");let o=(0,n.iv)`
    .vl-breadcrumb__list__item__cta {
        display: flex;
        position: relative;
        top: -1px;
    }

    span.vl-breadcrumb__list__item__cta {
        color: unset;
        cursor: default;
        text-decoration: none;
    }

    span.vl-breadcrumb__list__item__cta:hover {
        text-decoration: none;
    }

    .vl-breadcrumb__list__item__separator {
        justify-content: center;
    }
`}}]);