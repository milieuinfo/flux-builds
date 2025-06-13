(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[6697],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,r)=>{"use strict";r.d(t,{NF:()=>o,Zo:()=>l,ah:()=>n,pC:()=>s});var a=r("./node_modules/react/index.js");let s=a.createContext({});function o(e){return function(t){let r=n(t.components);return a.createElement(e,{...t,allComponents:r})}}function n(e){let t=a.useContext(s);return a.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let i={};function l({components:e,children:t,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||i:n(e),a.createElement(s.Provider,{value:o},t)}},"./libs/components/src/http-error-message/stories/vl-http-error-message.stories.ts":(e,t,r)=>{"use strict";r.r(t),r.d(t,{__namedExportsOrder:()=>P,default:()=>c,httpErrorMessage400:()=>v,httpErrorMessage401:()=>u,httpErrorMessage403:()=>f,httpErrorMessage404:()=>b,httpErrorMessage405:()=>T,httpErrorMessage408:()=>y,httpErrorMessage410:()=>_,httpErrorMessage411:()=>S,httpErrorMessage412:()=>E,httpErrorMessage413:()=>x,httpErrorMessage414:()=>M,httpErrorMessage415:()=>$,httpErrorMessage500:()=>A,httpErrorMessage501:()=>j,httpErrorMessage502:()=>k,httpErrorMessage503:()=>C,httpErrorMessage504:()=>L,httpErrorMessage505:()=>H,httpErrorMessage506:()=>N,httpErrorMessageDefault:()=>h});var a=r("./libs/common/storybook/src/index.ts"),s=r("./node_modules/lit-html/lit-html.js");r("./libs/components/src/http-error-message/vl-http-error-message.component.ts");let o={...a._O,title:"",image:"",alt:"",errorCode:"",textSlot:"",actionsSlot:""},n={...(0,a.Wp)(),title:{name:"data-vl-title",type:{name:a.vK.STRING,required:!1},description:"Past de title van de error message aan.",table:{type:{summary:a.vK.STRING},defaultValue:{summary:o.title},category:a.aA.ATTRIBUTES}},image:{name:"data-vl-image",type:{name:a.vK.STRING,required:!1},description:"De URL voor de afbeelding die weergegeven moet worden.",table:{type:{summary:a.vK.STRING},defaultValue:{summary:o.image},category:a.aA.ATTRIBUTES}},alt:{name:"data-vl-image-alt",type:{name:a.vK.STRING,required:!1},description:"Past de alternatieve tekst van de afbeelding aan.",table:{type:{summary:a.vK.STRING},defaultValue:{summary:o.alt},category:a.aA.ATTRIBUTES}},errorCode:{name:"data-vl-error-code",type:{name:a.vK.STRING,required:!1},description:"Geeft de default titel, afbeelding, tekst en actie voor een specifieke error code weer.",table:{type:{summary:a.vK.STRING},defaultValue:{summary:o.errorCode},category:a.aA.ATTRIBUTES}},textSlot:{name:"text",description:"Past de omschrijvende tekst onder de titel aan. Dit slot is niet reactief",table:{type:{name:a.vK.HTML},category:a.aA.SLOTS,defaultValue:{summary:o.textSlot}}},actionsSlot:{name:"actions",description:"Past de acties aan. Dit slot is niet reactief",table:{type:{name:a.vK.HTML},category:a.aA.SLOTS,defaultValue:{summary:o.actionsSlot}}}};var i=r("./node_modules/lit/directives/unsafe-html.js");r("./node_modules/react/index.js");var l=r("./node_modules/react/jsx-runtime.js"),d=r("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),m=r("./node_modules/@storybook/blocks/dist/index.mjs");function g(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,d.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"http-error-message",children:"HTTP Error Message"}),"\n",(0,l.jsxs)(t.p,{children:["Gebruik de ",(0,l.jsx)(t.code,{children:"http-error-message"})," component om een error boodschap aan de gebruiker te tonen."]}),"\n",(0,l.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"import { VlHttpErrorMessage } from '@domg-wc/components';\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-html",children:"<vl-http-error-message></vl-http-error-message>\n"})}),"\n",(0,l.jsx)(m.Xz,{of:h}),"\n",(0,l.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,l.jsx)(m.Ed,{of:h}),"\n",(0,l.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,l.jsxs)(t.p,{children:["Het gebruik van ",(0,l.jsx)(t.code,{children:"vl-http-400-message"})," en andere specifieke http error messages is deprecated.\nDeze kunnen met de ",(0,l.jsx)(t.code,{children:"http-error-message"})," gecreëerd worden d.m.v. het ",(0,l.jsx)(t.code,{children:"data-vl-error-code"})," attribuut."]}),"\n",(0,l.jsx)(t.h3,{id:"400-error",children:"400 error"}),"\n",(0,l.jsx)(m.Xz,{of:v}),"\n",(0,l.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,l.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-http-error-message--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Http Error Message"})})]})}let c={title:"components/http-error-message",tags:["autodocs"],args:o,argTypes:n,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,d.ah)(),e.components);return t?(0,l.jsx)(t,Object.assign({},e,{children:(0,l.jsx)(g,e)})):g(e)}}}},p=(0,a.yg)(o,({title:e,image:t,alt:r,errorCode:a,textSlot:o,actionsSlot:n})=>(0,s.dy)`
        <vl-http-error-message
            data-vl-title=${e}
            data-vl-image=${t}
            data-vl-image-alt=${r}
            data-vl-error-code=${a}
        >
            ${(0,i.A)(o)} ${(0,i.A)(n)}
        </vl-http-error-message>
    `),h=p.bind({});h.storyName="vl-http-error-message - default",h.args={title:"Niets gevonden hiervoor.",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",alt:"Niets gevonden",textSlot:'<p slot="text">Sorry, er liep iets onverwachts mis.</p>',actionsSlot:`<div slot="actions">
                    <a is="vl-link-button" href="#">Opnieuw opstarten</a>
                  </div>`};let v=p.bind({});v.storyName="vl-http-error-message - 400",v.args={errorCode:"400"};let u=p.bind({});u.storyName="vl-http-error-message - 401",u.args={errorCode:"401"};let f=p.bind({});f.storyName="vl-http-error-message - 403",f.args={errorCode:"403"};let b=p.bind({});b.storyName="vl-http-error-message - 404",b.args={errorCode:"404"};let T=p.bind({});T.storyName="vl-http-error-message - 405",T.args={errorCode:"405"};let y=p.bind({});y.storyName="vl-http-error-message - 408",y.args={errorCode:"408"};let _=p.bind({});_.storyName="vl-http-error-message - 410",_.args={errorCode:"410"};let S=p.bind({});S.storyName="vl-http-error-message - 411",S.args={errorCode:"411"};let E=p.bind({});E.storyName="vl-http-error-message - 412",E.args={errorCode:"412"};let x=p.bind({});x.storyName="vl-http-error-message - 413",x.args={errorCode:"413"};let M=p.bind({});M.storyName="vl-http-error-message - 414",M.args={errorCode:"414"};let $=p.bind({});$.storyName="vl-http-error-message - 415",$.args={errorCode:"415"};let A=p.bind({});A.storyName="vl-http-error-message - 500",A.args={errorCode:"500"};let j=p.bind({});j.storyName="vl-http-error-message - 501",j.args={errorCode:"501"};let k=p.bind({});k.storyName="vl-http-error-message - 502",k.args={errorCode:"502"};let C=p.bind({});C.storyName="vl-http-error-message - 503",C.args={errorCode:"503"};let L=p.bind({});L.storyName="vl-http-error-message - 504",L.args={errorCode:"504"};let H=p.bind({});H.storyName="vl-http-error-message - 505",H.args={errorCode:"505"};let N=p.bind({});N.storyName="vl-http-error-message - 506",N.args={errorCode:"506"},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...h.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...v.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...u.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...f.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...b.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...T.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...y.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",..._.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...S.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...E.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...x.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...M.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...$.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...j.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...k.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...C.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...L.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...H.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...N.parameters?.docs?.source}}};let P=["httpErrorMessageDefault","httpErrorMessage400","httpErrorMessage401","httpErrorMessage403","httpErrorMessage404","httpErrorMessage405","httpErrorMessage408","httpErrorMessage410","httpErrorMessage411","httpErrorMessage412","httpErrorMessage413","httpErrorMessage414","httpErrorMessage415","httpErrorMessage500","httpErrorMessage501","httpErrorMessage502","httpErrorMessage503","httpErrorMessage504","httpErrorMessage505","httpErrorMessage506"]},"./node_modules/lit-html/directive.js":(e,t,r)=>{"use strict";r.d(t,{XM:()=>s,Xe:()=>o,pX:()=>a});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=e=>function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return{_$litDirective$:e,values:r}};class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},"./node_modules/lit/directives/unsafe-html.js":(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var a=r("./node_modules/lit-html/lit-html.js"),s=r("./node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class o extends s.Xe{constructor(e){if(super(e),this.et=a.Ld,e.type!==s.pX.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===a.Ld||null==e)return this.vt=void 0,this.et=e;if(e===a.Jb)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}o.directiveName="unsafeHTML",o.resultType=1;var n=(0,s.XM)(o)},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,r)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r("./node_modules/react/index.js"),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var a,o={},d=null,m=null;for(a in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(m=t.ref),t)n.call(t,a)&&!l.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:s,type:e,key:d,ref:m,props:o,_owner:i.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},"./node_modules/react/jsx-runtime.js":(e,t,r)=>{"use strict";e.exports=r("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/http-error-message/vl-http-error-message.component.ts":(e,t,r)=>{"use strict";r.d(t,{k:()=>d});var a=r("./libs/common/utilities/src/index.ts"),s=r("./libs/elements/src/index.ts"),o=r("./libs/components/src/typography/vl-typography.component.ts"),n=r("./node_modules/lit/index.js");let i=(0,n.iv)`
    #info {
        font-size: small;
    }
    td {
        padding-right: 15px;
    }
    table {
        color: dimgray;
    }
`,l={400:{title:"Oeps, dat ging fout",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Verkeerd verzoek",errorText:(0,n.dy)` <p>
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 400">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 400.
        </p>`,errorActions:(0,n.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},401:{title:"Meld u eerst aan",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Niet aangemeld",errorText:(0,n.dy)` <p>
            Om toegang te krijgen tot deze pagina, moet u eerst aangemeld zijn.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 401">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 401.
        </p>`,errorActions:(0,n.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},403:{title:"Geen toegang tot deze pagina",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Onvoldoende rechten",errorText:(0,n.dy)` <p>
            U heeft daarvoor onvoldoende rechten.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 403">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 403.
        </p>`,errorActions:(0,n.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},404:{title:"Pagina niet gevonden",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/page-not-found.svg",imageAlt:"Pagina niet gevonden",errorText:(0,n.dy)` <p>
            We vonden de pagina niet terug. Controleer even of u een tikfout heeft gemaakt. Bent u via een link of
            website op deze pagina gekomen.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 404">Mail dan de helpdesk</a> en vermeld
            daarbij de URL hierboven en de foutcode 404.
        </p>`,errorActions:(0,n.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},405:{title:"Niet toegelaten",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Niet toegelaten",errorText:(0,n.dy)` <p>
            Er ging iets fout.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 405">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 405.
        </p>`,errorActions:(0,n.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},408:{title:"Oeps, dat duurde te lang",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Verzoek duurt te lang",errorText:(0,n.dy)` <p>
            Het laden van de pagina duurde te lang. Probeer het opnieuw en als het nog niet lukt:
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 408">mail dan de helpdesk</a> en vermeld
            daarbij de URL hierboven en de foutcode 408.
        </p>`,errorActions:(0,n.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},410:{title:"Pagina bestaat niet meer",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/page-not-found.svg",imageAlt:"Verzoek bestaat niet meer",errorText:(0,n.dy)` <p>
            Deze pagina bestaat niet meer.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 410">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 410.
        </p>`,errorActions:(0,n.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},411:{title:"Onvolledig verzoek",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Verzoek onvolledig",errorText:(0,n.dy)` <p>
            Er ontbreekt blijkbaar iets.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 411">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 411.
        </p>`,errorActions:(0,n.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},412:{title:"Voorwaarden voldoen niet",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Voorwaarden niet voldaan",errorText:(0,n.dy)` <p>
            Er ging iets fout.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 412">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 412.
        </p>`,errorActions:(0,n.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},413:{title:"Limiet overschreden",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Verzoek te groot",errorText:(0,n.dy)` <p>
            Er ging iets fout.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 413">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 413.
        </p>`,errorActions:(0,n.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},414:{title:"URL te groot",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"URI te groot",errorText:(0,n.dy)` <p>
            Er ging iets fout.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 414">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 414.
        </p>`,errorActions:(0,n.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},415:{title:"Mediatype niet ondersteund",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Media type niet ondersteund",errorText:(0,n.dy)` <p>
            Het mediatype van de gevraagde gegevens wordt niet ondersteund door de server.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 415">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 415.
        </p>`,errorActions:(0,n.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},500:{title:"Interne fout",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Onverwachte fout",errorText:(0,n.dy)` <p>
            Er ging iets fout. Probeer het nog eens. Lukt het nog niet,
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 500">mail dan de helpdesk</a> en vermeld
            daarbij de URL hierboven en de foutcode 500.
        </p>`,errorActions:(0,n.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},501:{title:"Verzoek niet ondersteund",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Niet ondersteund",errorText:(0,n.dy)` <p>
            Er ging iets fout.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 501">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 501.
        </p>`,errorActions:(0,n.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},502:{title:"Tijdelijk niet bereikbaar",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Tijdelijk niet bereikbaar",errorText:(0,n.dy)` <p>
            De website is tijdelijk niet bereikbaar. Probeer later opnieuw. Heb je vragen:
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 502">mail dan de helpdesk</a> en vermeld
            daarbij de URL hierboven en de foutcode 502.
        </p>`,errorActions:(0,n.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},503:{title:"De website is tijdelijk niet beschikbaar",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Tijdelijk niet bereikbaar",errorText:(0,n.dy)` <p>
            Probeer later opnieuw. Heb je vragen:
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 503">mail dan de helpdesk</a> en vermeld
            daarbij de URL hierboven en de foutcode 503.
        </p>`,errorActions:(0,n.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},504:{title:"Tijdelijk niet bereikbaar",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Tijdelijk niet bereikbaar",errorText:(0,n.dy)` <p>
            De website is tijdelijk niet bereikbaar. Probeer later opnieuw. Heb je vragen:
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 504">mail dan de helpdesk</a> en vermeld
            daarbij de URL hierboven en de foutcode 504.
        </p>`,errorActions:(0,n.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},505:{title:"HTTP-versie niet ondersteund",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Niet ondersteunde HTTP versie",errorText:(0,n.dy)` <p>
            De HTTP-versie van uw verzoek wordt niet ondersteund door onze server.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 505">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 505.
        </p>`,errorActions:(0,n.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`},506:{title:"Interne configuratiefout",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",imageAlt:"Interne configuratiefout",errorText:(0,n.dy)` <p>
            Er ging iets fout.
            <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 506">Mail de helpdesk</a> en vermeld daarbij de
            URL hierboven en de foutcode 506.
        </p>`,errorActions:(0,n.dy)` <div>
            <a is="vl-link-button" href="/">Terug naar de startpagina</a>
        </div>`}};class d extends(0,a.W$)(HTMLElement){static{(0,a.YV)([s.CH,s.YY,s.Br,o.P])}static get _observedAttributes(){return["title","image","image-alt","error-code"]}constructor(){super(`
          <style>
            ${s.CX}
            ${i}
          </style>
          <div is="vl-grid" data-vl-is-stacked data-vl-align-center data-vl-v-center>
            <div is="vl-column" data-vl-size="6" data-vl-medium-size="6" data-vl-small-size="6" data-vl-extra-small-size="6" class="vl-u-hidden vl-u-visible--s">
              <div class="vl-u-display-flex vl-u-flex-align-center vl-u-flex-v-center">
                <img id="image-small"/>
              </div>
            </div>
            <div is="vl-column" data-vl-size="6" data-vl-medium-size="6" data-vl-small-size="8">
              <div is="vl-grid" data-vl-is-stacked>
                <div is="vl-column" data-vl-size="12">
                  <h2 id="title" is="vl-h2"></h2>
                  <vl-typography id="text"><slot slot="text" name="text"></slot></vl-typography>
                  <vl-typography id="error-text"></vl-typography>
                </div>
                <div id="info">
                  <table>
                    <tr>
                      <td>URL:</td>
                      <td id="url"></td>
                    </tr>
                    <tr>
                      <td>Tijd:</td>
                      <td id="time"></td>
                    </tr>
                    <tr>
                      <td>User-agent:</td>
                      <td id="user-agent"></td>
                    </tr>
                  </table>
                </div>
                <div id="actions" is="vl-column" data-vl-size="12"><div id="error-actions"><slot name="actions"></slot></div></div>
              </div>
            </div>
            <div is="vl-column" data-vl-size="6" data-vl-medium-size="6" data-vl-small-size="6" class="vl-u-hidden--s">
              <div class="vl-u-display-flex vl-u-flex-align-center vl-u-flex-v-center">
                <img id="image-normal"/>
              </div>
            </div>
          </div>
        `)}connectedCallback(){super.connectedCallback(),this.__processAttributes(),this.__setDebugInfo()}get _title(){return this.dataset.vlTitle||this._defaults?.title}get _image(){return this.dataset.vlImage||this._defaults?.image}get _imageAlt(){return this.dataset.vlImageAlt||this._defaults?.imageAlt}get _errorCode(){return this.dataset.vlErrorCode||this._defaults?.errorCode}_titleChangedCallback(){this.__processTitle()}_imageChangedCallback(){this.__processImage()}_imageAltChangedCallback(){this.__processImageAlt()}_errorCodeChangedCallback(){this.__processErrorCode()}__setImageAttribute(e,t){this.__imageForSmallScreensElement.setAttribute(e,t),this.__imageForNormalScreensElement.setAttribute(e,t)}__setDebugInfo(){let e=navigator.userAgent,t=window.parent.location.href,r=new Date().toISOString();this.__urlElement.textContent=t,this.__timeElement.textContent=r,this.__userAgentElement.textContent=e}get __titleElement(){return this._element.querySelector("#title")}get __textElement(){return this._element.querySelector("#text")}get __actionsElement(){return this._element.querySelector("#actions")}get __actionElement(){return this._element.querySelector("#actions > *")}get __imageForSmallScreensElement(){return this._element.querySelector("#image-small")}get __imageForNormalScreensElement(){return this._element.querySelector("#image-normal")}get __urlElement(){return this._element.querySelector("#url")}get __timeElement(){return this._element.querySelector("#time")}get __userAgentElement(){return this._element.querySelector("#user-agent")}get __errorTextElement(){return this._element.querySelector("#error-text")}get __errorActionsElement(){return this._element.querySelector("#error-actions")}__processTitle(){let e=this._title||l[this._errorCode]?.title;this.__titleElement.textContent=e}__processImage(){let e=this._image||l[this._errorCode]?.image;this.__setImageAttribute("src",e)}__processImageAlt(){let e=this._imageAlt||l[this._errorCode]?.imageAlt;this.__setImageAttribute("alt",e)}__processErrorText(){if(this.__hasSlot(this.__textElement,"text"))(0,n.sY)("",this.__errorTextElement);else{let e=l[this._errorCode]?.errorText;(0,n.sY)(e,this.__errorTextElement)}}__processErrorActions(){if(this.__hasSlot(this.__actionElement,"actions"))(0,n.sY)("",this.__errorActionsElement);else{let e=l[this._errorCode]?.errorActions;(0,n.sY)(e,this.__errorActionsElement)}}__processAttributes(){this.__processTitle(),this.__processImage(),this.__processImageAlt(),this.__processErrorText(),this.__processErrorActions()}__processErrorCode(){this.__processAttributes()}__hasSlot(e,t){let r=e.querySelector(`slot[name=${t}]`);return(r?.assignedNodes()||[]).length>0}}d=function(e,t,r,a){var s,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(n=(o<3?s(n):o>3?s(t,r,n):s(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n}([(0,a.a6)("vl-http-error-message")],d)},"./libs/components/src/typography/vl-typography.component.ts":(e,t,r)=>{"use strict";r.d(t,{P:()=>d});var a=r("./libs/common/utilities/src/index.ts"),s=r("./node_modules/@domg/govflanders-style/common/index.js"),o=r("./node_modules/@domg/govflanders-style/component/index.js"),n=r("./node_modules/lit/index.js");let i=(0,n.iv)`
    .vl-typography {
        display: inline;
    }
`,l=[s.$4,i];class d extends(0,a.W$)(HTMLElement){static get _observedAttributes(){return["parameters"]}constructor(){super(`
          <style>
            ${s.YN}
            ${s.Oh}
            ${s.QT}
            ${o.$4}
            ${l}
            ${o.Bc}
          </style>
          <div id="content" class="vl-typography"></div>
        `),this._observer=this.__observeSlotElements(()=>this.__processSlotElements())}connectedCallback(){super.connectedCallback(),this.__processSlotElements()}disconnectedCallback(){this._observer.disconnect()}_parametersChangedCallback(e,t){this.__processSlotElements()}__processSlotElements(){this.__clearChildren();let e=this.dataset.vlParameters?JSON.parse(this.dataset.vlParameters):{},t=d.replaceTemplateParameters(this.innerHTML,e);this._element.insertAdjacentHTML("afterbegin",t)}__clearChildren(){for(;this._element.hasChildNodes();)this._element.firstChild.remove()}__observeSlotElements(e){let t=new MutationObserver(e);return t.observe(this,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),t}static replaceTemplateParameters(e,t){return Object.keys(t).forEach(r=>e=e.replaceAll("${parameter."+r+"}",t[r])),e=e.replace(/\${parameter.\w+}/g,"")}}d=function(e,t,r,a){var s,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(n=(o<3?s(n):o>3?s(t,r,n):s(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n}([(0,a.a6)("vl-typography")],d)}}]);