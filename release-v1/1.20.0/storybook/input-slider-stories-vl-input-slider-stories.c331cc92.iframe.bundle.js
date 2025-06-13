"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[2102],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,n,t)=>{t.d(n,{NF:()=>a,Zo:()=>s,ah:()=>l,pC:()=>i});var r=t("./node_modules/react/index.js");let i=r.createContext({});function a(e){return function(n){let t=l(n.components);return r.createElement(e,{...n,allComponents:t})}}function l(e){let n=r.useContext(i);return r.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}let o={};function s({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||o:l(e),r.createElement(i.Provider,{value:a},n)}},"./node_modules/lit/decorators.js":(e,n,t)=>{var r;t.d(n,{Mo:()=>i,Cb:()=>o});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{let{kind:t,elements:r}=n;return{kind:t,elements:r,finisher(n){customElements.define(e,n)}}})(e,n),a=(e,n)=>"method"!==n.kind||!n.descriptor||"value"in n.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:n.key,initializer(){"function"==typeof n.initializer&&(this[n.key]=n.initializer.call(this))},finisher(t){t.createProperty(n.key,e)}}:{...n,finisher(t){t.createProperty(n.key,e)}},l=(e,n,t)=>{n.constructor.createProperty(t,e)};function o(e){return(n,t)=>void 0!==t?l(e,n,t):a(e,n)}null!=(null===(r=window.HTMLSlotElement)||void 0===r?void 0:r.prototype.assignedElements)||((e,n)=>e.assignedNodes(n).filter(e=>e.nodeType===Node.ELEMENT_NODE))},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,n,t)=>{/** @license React v17.0.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */t("./node_modules/object-assign/index.js");var r=t("./node_modules/react/index.js"),i=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;i=a("react.element"),n.Fragment=a("react.fragment")}var l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,a={},d=null,u=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(u=n.ref),n)o.call(n,r)&&!s.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:u,props:a,_owner:l.current}}n.jsx=d,n.jsxs=d},"./node_modules/react/jsx-runtime.js":(e,n,t)=>{e.exports=t("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/input-slider/vl-input-slider.component.ts":(e,n,t)=>{var r=t("./node_modules/@domg/govflanders-style/component/index.js"),i=t("./node_modules/@domg/govflanders-style/common/index.js"),a=t("./node_modules/lit/index.js"),l=t("./node_modules/lit/decorators.js");t("./node_modules/reflect-metadata/Reflect.js");let o=(0,a.iv)`
    .vl-input-slider {
        display: flex;
        align-items: center;
    }
    .vl-input-slider .vl-input-slider__input-range {
        width: calc(100% - 1rem);
    }
    .vl-input-slider .vl-input-slider__input-number {
        font-size: 1.4rem;
        width: 4.7rem;
        margin-left: 1.5rem;
        padding: 0 0 0 0.6rem !important;
        height: 2.4rem;
        line-height: 2.4rem;
    }
    .vl-input-slider input[type='range'] {
        -webkit-appearance: none;
        height: 2.4rem;
    }
    .vl-input-slider input[type='range']::-webkit-slider-runnable-track {
        background: #c6cdd3;
        height: 0.4rem;
        width: 100%;
        cursor: pointer;
    }
    .vl-input-slider input[type='range']::-moz-range-track {
        background: #c6cdd3;
        height: 0.4rem;
        width: 100%;
        cursor: pointer;
    }
    .vl-input-slider input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        cursor: pointer;
        width: 1.5rem;
        height: 2.4rem;
        background-color: #4d88db;
        border-radius: 0.3rem;
        margin-top: -1rem;
        border-left: 0.7rem solid #05c;
        border-right: 0.7rem solid #05c;
        border-top: 0.55rem solid #05c;
        border-bottom: 0.55rem solid #05c;
    }
    .vl-input-slider input[type='range']::-moz-range-thumb {
        cursor: pointer;
        width: 0.1rem;
        height: 1.3rem;
        background-color: #4d88db;
        border-radius: 0.3rem;
        margin-top: -1rem;
        border-left: 0.7rem solid #05c;
        border-right: 0.7rem solid #05c;
        border-top: 0.55rem solid #05c;
        border-bottom: 0.55rem solid #05c;
    }
`;var s=t("./libs/common/utilities/src/index.ts");let d=class extends s.fS{static get styles(){return[i.YN,r.K$,o]}static get properties(){return{maxValue:{type:Number,attribute:"data-vl-max-value",reflect:!0},minValue:{type:Number,attribute:"data-vl-min-value",reflect:!0},value:{type:Number,attribute:"data-vl-value",reflect:!0}}}updated(e){if(e.has("value")||e.has("minValue")||e.has("maxValue")){let n=this.validateValue(this.value);if(this.value!==n){this.value=n;return}e.has("value")&&!isNaN(this.value)&&this.dispatchEvent(new CustomEvent("vl-change-value",{detail:{value:this.value}}))}}render(){return(0,a.dy)`
            <div class="vl-input-slider">
                <input
                    id="input-range"
                    type="range"
                    aria-label="schuifregelaar"
                    class="vl-input-slider__input-range"
                    min=${this.minValue}
                    max=${this.maxValue}
                    .value=${this.value}
                    @input=${this.handleInput}
                />
                <input
                    id="input-number"
                    type="number"
                    aria-label="nummerinvoer"
                    class="vl-input-slider__input-number vl-input-field"
                    min=${this.minValue}
                    max=${this.maxValue}
                    .value=${this.value}
                    @input=${this.handleInput}
                />
            </div>
        `}handleInput(e){let n=e.target,t=parseInt(n?.value??"");this.value=t}validateValue(e){let n=e;return n<this.minValue&&(n=this.minValue),n>this.maxValue&&(n=this.maxValue),n}constructor(...e){super(...e),this.maxValue=100,this.minValue=0,this.value=0}};d=function(e,n,t,r){var i,a=arguments.length,l=a<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(l=(a<3?i(l):a>3?i(n,t,l):i(n,t))||l);return a>3&&l&&Object.defineProperty(n,t,l),l}([(0,l.Mo)("vl-input-slider")],d)},"./libs/components/src/input-slider/stories/vl-input-slider.stories.ts":(e,n,t)=>{t.r(n),t.d(n,{InputSliderDefault:()=>p,default:()=>c});var r=t("./node_modules/lit-html/lit-html.js");t("./libs/components/src/input-slider/vl-input-slider.component.ts");var i=t("./libs/common/storybook/src/index.ts"),a=t("./node_modules/@storybook/addon-actions/dist/index.mjs");let l={maxValue:100,minValue:0,value:0,onChangeValue:(0,a.aD)("vl-change-value")},o={maxValue:{name:"data-vl-max-value",description:"De maximumwaarde die geselecteerd kan worden.",table:{type:{summary:i.vK.NUMBER},category:i.aA.ATTRIBUTES,defaultValue:{summary:l.maxValue}}},minValue:{name:"data-vl-min-value",description:"De minimumwaarde die geselecteerd kan worden.",table:{type:{summary:i.vK.NUMBER},category:i.aA.ATTRIBUTES,defaultValue:{summary:l.minValue}}},value:{name:"data-vl-value",description:"De waarde van de input. Wordt gecorrigeerd indien deze zich onder de minValue of boven de maxValue begeeft.",table:{type:{summary:i.vK.NUMBER},category:i.aA.ATTRIBUTES,defaultValue:{summary:l.value}}},onChangeValue:{name:"vl-change-value",description:"Afgevuurd na het aanpasssen van de waarde.<br>Het event bevat de huidige waarde.",table:{type:{summary:"{ value: number }"},category:i.aA.EVENTS}}};t("./node_modules/react/index.js");var s=t("./node_modules/react/jsx-runtime.js"),d=t("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),u=t("./node_modules/@storybook/blocks/dist/index.mjs");function m(e){let n=Object.assign({h1:"h1",p:"p",code:"code",strong:"strong",h2:"h2",pre:"pre",a:"a"},(0,d.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"input-slider",children:"Input Slider"}),"\n",(0,s.jsxs)(n.p,{children:["Gebruik de ",(0,s.jsx)(n.code,{children:"input-slider"})," om een waarde te selecteren tussen een minimum en maximum waarde.\n",(0,s.jsx)(n.strong,{children:"Let op"}),": deze component is niet dezelfde als de ",(0,s.jsx)(n.code,{children:"vl-ui-range"})," component van Digitaal Vlaanderen."]}),"\n",(0,s.jsx)(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { VlInputSliderComponent } from '@domg-wc/components';\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<vl-input-slider></vl-input-slider>\n"})}),"\n",(0,s.jsx)(u.Xz,{of:p}),"\n",(0,s.jsx)(n.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,s.jsx)(u.Ed,{of:p}),"\n",(0,s.jsx)(n.h2,{id:"referenties",children:"Referenties"}),"\n",(0,s.jsxs)(n.p,{children:["Dit is een nieuwe component binnen onze bibliotheek die gebaseerd is op de standaard ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range",target:"_blank",rel:"nofollow noopener noreferrer",children:"HTML5 input range slider"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["De stijl van deze component is gebaseerd op de ",(0,s.jsx)(n.code,{children:"vl-ui-range"})," ",(0,s.jsx)(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-range",target:"_blank",rel:"nofollow noopener noreferrer",children:"component van Digitaal Vlaanderen"}),"."]})]})}let c={title:"Components/input-slider",tags:["autodocs"],args:(0,i.T8)(l),argTypes:(0,i.xj)(o),parameters:{docs:{page:function(e={}){let{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(m,e)})):m(e)}}}},p=(0,i.yg)(l,({maxValue:e,minValue:n,value:t,onChangeValue:i})=>(0,r.dy)`
            <vl-input-slider
                data-vl-max-value=${e}
                data-vl-min-value=${n}
                data-vl-value=${t}
                @vl-change-value=${e=>i(e.detail)}
            ></vl-input-slider>
        `);p.storyName="vl-input-slider - default",p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"story(inputSliderArgs, ({\n  maxValue,\n  minValue,\n  value,\n  onChangeValue\n}) => html`\n            <vl-input-slider\n                data-vl-max-value=${maxValue}\n                data-vl-min-value=${minValue}\n                data-vl-value=${value}\n                @vl-change-value=${(event: CustomEvent) => onChangeValue(event.detail)}\n            ></vl-input-slider>\n        `)",...p.parameters?.docs?.source}}}}}]);