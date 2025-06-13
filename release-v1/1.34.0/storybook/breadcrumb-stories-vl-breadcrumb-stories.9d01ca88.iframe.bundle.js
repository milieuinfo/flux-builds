(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[4387],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,r,t)=>{"use strict";t.d(r,{NF:()=>s,Zo:()=>c,ah:()=>a,pC:()=>o});var n=t("./node_modules/react/index.js");let o=n.createContext({});function s(e){return function(r){let t=a(r.components);return n.createElement(e,{...r,allComponents:t})}}function a(e){let r=n.useContext(o);return n.useMemo(()=>"function"==typeof e?e(r):{...r,...e},[r,e])}let l={};function c({components:e,children:r,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||l:a(e),n.createElement(o.Provider,{value:s},r)}},"./libs/components/src/breadcrumb/stories/vl-breadcrumb.stories.ts":(e,r,t)=>{"use strict";t.r(r),t.d(r,{BreadcrumbDefault:()=>u,__namedExportsOrder:()=>b,default:()=>m});var n=t("./libs/common/storybook/src/index.ts"),o=t("./node_modules/lit/index.js");t("./libs/components/src/breadcrumb/vl-breadcrumb-item.component.ts"),t("./libs/components/src/breadcrumb/vl-breadcrumb.component.ts");let s={...n._O,href1:"",href2:"",href3:"",href4:""},a={...(0,n.Wp)(),href1:{name:"data-vl-href",description:"Url voor bread-crumb-item #1.",table:{type:{summary:n.vK.URL},category:n.aA.CHILD_ATTRIBUTES,defaultValue:{summary:s.href1}}},href2:{name:"data-vl-href",description:"Url voor bread-crumb-item #2.",table:{type:{summary:n.vK.URL},category:n.aA.CHILD_ATTRIBUTES,defaultValue:{summary:s.href2}}},href3:{name:"data-vl-href",description:"Url voor bread-crumb-item #3.",table:{type:{summary:n.vK.URL},category:n.aA.CHILD_ATTRIBUTES,defaultValue:{summary:s.href3}}},href4:{name:"data-vl-href",description:"Url voor bread-crumb-item #4.",table:{type:{summary:n.vK.URL},category:n.aA.CHILD_ATTRIBUTES,defaultValue:{summary:s.href3}}}};t("./node_modules/react/index.js");var l=t("./node_modules/react/jsx-runtime.js"),c=t("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),d=t("./node_modules/@storybook/blocks/dist/index.mjs");function i(e){let r=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,c.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.h1,{id:"breadcrumb",children:"Breadcrumb"}),"\n",(0,l.jsxs)(r.p,{children:["Gebruik de ",(0,l.jsx)(r.code,{children:"breadcrumb"})," component om de locatie van de huidige pagina af te beelden binnen een navigeerbare hiërarchie."]}),"\n",(0,l.jsx)(r.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-js",children:"import { VlBreadcrumbComponent } from '@domg-wc/components';\n"})}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-html",children:"<vl-breadcrumb></vl-breadcrumb>\n"})}),"\n",(0,l.jsx)(d.Xz,{of:u}),"\n",(0,l.jsx)(r.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,l.jsx)(d.Ed,{of:u}),"\n",(0,l.jsx)(r.h2,{id:"referenties",children:"Referenties"}),"\n",(0,l.jsx)(r.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-breadcrumb--breadcrumb-default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Breadcrumb"})}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlBreadcrumb.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Breadcrumb"})}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-breadcrumb.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Breadcrumb"})})]})}let m={title:"Components/breadcrumb",tags:["autodocs"],args:s,argTypes:a,parameters:{docs:{page:function(e={}){let{wrapper:r}=Object.assign({},(0,c.ah)(),e.components);return r?(0,l.jsx)(r,Object.assign({},e,{children:(0,l.jsx)(i,e)})):i(e)}}}},u=(0,n.yg)(s,({href1:e,href2:r,href3:t,href4:n})=>(0,o.dy)`
        <vl-breadcrumb>
            <vl-breadcrumb-item data-vl-href=${e}>Vlaanderen Intern</vl-breadcrumb-item>
            <vl-breadcrumb-item data-vl-href=${r}>Regelgeving</vl-breadcrumb-item>
            <vl-breadcrumb-item data-vl-href=${t}>Webuniversum</vl-breadcrumb-item>
            <vl-breadcrumb-item data-vl-href=${n}>Componenten</vl-breadcrumb-item>
        </vl-breadcrumb>
    `);u.storyName="vl-breadcrumb - default",u.args={href1:"#",href2:"#",href3:"#"},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"story(breadcrumbItemArgs, ({\n  href1,\n  href2,\n  href3,\n  href4\n}) => html`\n        <vl-breadcrumb>\n            <vl-breadcrumb-item data-vl-href=${href1}>Vlaanderen Intern</vl-breadcrumb-item>\n            <vl-breadcrumb-item data-vl-href=${href2}>Regelgeving</vl-breadcrumb-item>\n            <vl-breadcrumb-item data-vl-href=${href3}>Webuniversum</vl-breadcrumb-item>\n            <vl-breadcrumb-item data-vl-href=${href4}>Componenten</vl-breadcrumb-item>\n        </vl-breadcrumb>\n    `)",...u.parameters?.docs?.source}}};let b=["BreadcrumbDefault"]},"./node_modules/lit/decorators.js":(e,r,t)=>{"use strict";t.d(r,{Mo:()=>n,Cb:()=>l});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=e=>(r,t)=>{void 0!==t?t.addInitializer(()=>{customElements.define(e,r)}):customElements.define(e,r)};var o=t("./node_modules/@lit/reactive-element/reactive-element.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s={attribute:!0,type:String,converter:o.Ts,reflect:!1,hasChanged:o.Qu},a=(e=s,r,t)=>{let{kind:n,metadata:o}=t,a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(t.name,e),"accessor"===n){let{name:n}=t;return{set(t){let o=r.get.call(this);r.set.call(this,t),this.requestUpdate(n,o,e)},init(r){return void 0!==r&&this.C(n,void 0,e),r}}}if("setter"===n){let{name:n}=t;return function(t){let o=this[n];r.call(this,t),this.requestUpdate(n,o,e)}}throw Error("Unsupported decorator location: "+n)};function l(e){return(r,t)=>"object"==typeof t?a(e,r,t):((e,r,t)=>{let n=r.hasOwnProperty(t);return r.constructor.createProperty(t,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(r,t):void 0})(e,r,t)}},"./node_modules/memoizerific sync recursive":e=>{function r(e){var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=()=>[],r.resolve=r,r.id="./node_modules/memoizerific sync recursive",e.exports=r},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,r,t)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=t("./node_modules/react/index.js"),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,s={},d=null,i=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(i=r.ref),r)a.call(r,n)&&!c.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:d,ref:i,props:s,_owner:l.current}}r.Fragment=s,r.jsx=d,r.jsxs=d},"./node_modules/react/jsx-runtime.js":(e,r,t)=>{"use strict";e.exports=t("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/breadcrumb/vl-breadcrumb-item.component.ts":(e,r,t)=>{"use strict";t.d(r,{h:()=>d});var n=t("./node_modules/@domg/govflanders-style/component/index.js"),o=t("./node_modules/@domg/govflanders-style/common/index.js"),s=t("./node_modules/lit/index.js"),a=t("./node_modules/lit/decorators.js"),l=t("./libs/components/src/breadcrumb/vl-breadcrumb.uig-css.ts"),c=t("./libs/common/utilities/src/index.ts");class d extends c.fS{static get properties(){return{href:{type:String,attribute:"data-vl-href",reflect:!0}}}static get styles(){return[o.YN,n.nC,l.Z]}render(){return this.href?(0,s.dy)`
                <a href=${this.href} class="vl-breadcrumb__list__item__cta">
                    <slot></slot>
                </a>
            `:(0,s.dy)`
            <span class="vl-breadcrumb__list__item__cta">
                <slot></slot>
            </span>
        `}constructor(...e){super(...e),this.href=""}}d=function(e,r,t,n){var o,s=arguments.length,a=s<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,t,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(r,t,a):o(r,t))||a);return s>3&&a&&Object.defineProperty(r,t,a),a}([(0,a.Mo)("vl-breadcrumb-item")],d)},"./libs/components/src/breadcrumb/vl-breadcrumb.component.ts":(e,r,t)=>{"use strict";t.d(r,{c:()=>d});var n=t("./node_modules/@domg/govflanders-style/component/index.js"),o=t("./node_modules/@domg/govflanders-style/common/index.js"),s=t("./node_modules/lit/index.js"),a=t("./node_modules/lit/decorators.js"),l=t("./libs/common/utilities/src/index.ts"),c=t("./libs/components/src/breadcrumb/vl-breadcrumb.uig-css.ts");class d extends l.fS{static get styles(){return[o.YN,n.nC,c.Z]}firstUpdated(){new MutationObserver(()=>{this.requestUpdate()}).observe(this,{subtree:!0,childList:!0})}render(){return(0,s.dy)`
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
        `}}d=function(e,r,t,n){var o,s=arguments.length,a=s<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,t,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(r,t,a):o(r,t))||a);return s>3&&a&&Object.defineProperty(r,t,a),a}([(0,a.Mo)("vl-breadcrumb")],d)},"./libs/components/src/breadcrumb/vl-breadcrumb.uig-css.ts":(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var n=t("./node_modules/lit/index.js");let o=(0,n.iv)`
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