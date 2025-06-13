"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[6269],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,n)=>{n.d(t,{NF:()=>r,Zo:()=>d,ah:()=>s,pC:()=>a});var o=n("./node_modules/react/index.js");let a=o.createContext({});function r(e){return function(t){let n=s(t.components);return o.createElement(e,{...t,allComponents:n})}}function s(e){let t=o.useContext(a);return o.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let l={};function d({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||l:s(e),o.createElement(a.Provider,{value:r},t)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,n)=>{/** @license React v17.0.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */n("./node_modules/object-assign/index.js");var o=n("./node_modules/react/index.js"),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;a=r("react.element"),t.Fragment=r("react.fragment")}var s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,r={},c=null,i=null;for(o in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(i=t.ref),t)l.call(t,o)&&!d.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:a,type:e,key:c,ref:i,props:r,_owner:s.current}}t.jsx=c,t.jsxs=c},"./node_modules/react/jsx-runtime.js":(e,t,n)=>{e.exports=n("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/document/vl-document.component.ts":(e,t,n)=>{n.d(t,{J:()=>s});var o=n("./libs/common/utilities/src/index.ts"),a=n("./node_modules/@domg/govflanders-style/common/index.js"),r=n("./node_modules/@domg/govflanders-style/component/index.js");let s=class extends(0,o.W$)(HTMLElement){static get _observedAttributes(){return["href"]}constructor(){super(`
          <style>
            ${a.YN}
            ${a.Oh}
            ${a.QT}
            ${r.A1}
            ${r.oQ}
          </style>
          <a class="vl-document" href="#" download>
            <div class="vl-document__type">
              <i class="vl-vi vl-vi-document" aria-hidden="true"></i>
              <span class="vl-document__type__text">
                <slot name="type"></slot>
              </span>
            </div>
            <div class="vl-document__content">
              <div class="vl-document__title vl-link">
                <slot name="title"></slot>
              </div>
              <div class="vl-document__metadata">
                <slot name="metadata"></slot>
              </div>
            </div>
          </a>
        `)}_hrefChangedCallback(e,t){this._element.href=t}};s=function(e,t,n,o){var a,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(s=(r<3?a(s):r>3?a(t,n,s):a(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}([(0,o.a6)("vl-document")],s)},"./libs/components/src/document/stories/vl-document.stories.ts":(e,t,n)=>{n.r(t),n.d(t,{DocumentDefault:()=>u,default:()=>m});var o=n("./node_modules/lit-html/lit-html.js");n("./libs/components/src/document/vl-document.component.ts");var a=n("./libs/common/storybook/src/index.ts");let r={href:"#",type:"",title:"",metadata:""},s={href:{name:"data-vl-href",description:"Attribuut wordt gebruikt om de download link te bepalen.",table:{type:{summary:a.vK.STRING},category:a.aA.ATTRIBUTES,defaultValue:{summary:r.href}}},type:{name:"type",table:{type:{summary:a.vK.HTML},category:a.aA.SLOTS,defaultValue:{summary:r.type}}},title:{name:"title",table:{type:{summary:a.vK.HTML},category:a.aA.SLOTS,defaultValue:{summary:r.title}}},metadata:{name:"metadata",table:{type:{summary:a.vK.HTML},category:a.aA.SLOTS,defaultValue:{summary:r.metadata}}}};n("./node_modules/react/index.js");var l=n("./node_modules/react/jsx-runtime.js"),d=n("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),c=n("./node_modules/@storybook/blocks/dist/index.mjs");function i(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,d.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"document",children:"Document"}),"\n",(0,l.jsxs)(t.p,{children:["Gebruik de ",(0,l.jsx)(t.code,{children:"document"})," component om een link naar een bestand toe te voegen dat de gebruiker in de browser kan bekijken\nof downloaden."]}),"\n",(0,l.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"import { VlDocumentComponent } from '@domg-wc/components';\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-html",children:"<vl-document></vl-document>\n"})}),"\n",(0,l.jsx)(c.Xz,{of:u}),"\n",(0,l.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,l.jsx)(c.Ed,{of:u}),"\n",(0,l.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,l.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-document",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Document"})}),"\n",(0,l.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-document--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Document"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlDocument.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Document"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-document.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Document"})})]})}let m={title:"Components/document",tags:["autodocs"],args:(0,a.T8)(r),argTypes:(0,a.xj)(s),parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,d.ah)(),e.components);return t?(0,l.jsx)(t,Object.assign({},e,{children:(0,l.jsx)(i,e)})):i(e)}}}},u=(0,a.yg)(r,({href:e,type:t,title:n,metadata:a})=>(0,o.dy)` <div is="vl-grid">
        <div is="vl-column" data-vl-size="3" data-vl-medium-size="6">
            <vl-document data-vl-href=${e}>
                <span slot="type">${t}</span>
                <span slot="title">${n}</span>
                <span slot="metadata">${a}</span>
            </vl-document>
        </div>
    </div>`);u.storyName="vl-document - default",u.args={type:"PDF",title:"Hubert en Jan van Eyck, Vlaamse Primitieven",metadata:"PDF - 580 kB"},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'story(documentArgs, ({\n  href,\n  type,\n  title,\n  metadata\n}) => html` <div is="vl-grid">\n        <div is="vl-column" data-vl-size="3" data-vl-medium-size="6">\n            <vl-document data-vl-href=${href}>\n                <span slot="type">${type}</span>\n                <span slot="title">${title}</span>\n                <span slot="metadata">${metadata}</span>\n            </vl-document>\n        </div>\n    </div>`)',...u.parameters?.docs?.source}}}}}]);