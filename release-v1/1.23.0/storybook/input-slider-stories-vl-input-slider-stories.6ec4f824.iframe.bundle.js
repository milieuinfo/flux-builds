(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[2102],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,r)=>{"use strict";r.d(t,{NF:()=>a,Zo:()=>s,ah:()=>o,pC:()=>i});var n=r("./node_modules/react/index.js");let i=n.createContext({});function a(e){return function(t){let r=o(t.components);return n.createElement(e,{...t,allComponents:r})}}function o(e){let t=n.useContext(i);return n.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let l={};function s({components:e,children:t,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||l:o(e),n.createElement(i.Provider,{value:a},t)}},"./libs/components/src/input-slider/stories/vl-input-slider.stories.ts":(e,t,r)=>{"use strict";r.r(t),r.d(t,{InputSliderDefault:()=>p,__namedExportsOrder:()=>v,default:()=>m});var n=r("./libs/common/storybook/src/index.ts"),i=r("./node_modules/lit-html/lit-html.js");r("./libs/components/src/input-slider/vl-input-slider.component.ts");var a=r("./node_modules/@storybook/addon-actions/dist/index.mjs");let o={...n._O,maxValue:100,minValue:0,value:0,onChangeValue:(0,a.aD)("vl-change-value")},l={...(0,n.Wp)(),maxValue:{name:"data-vl-max-value",description:"De maximumwaarde die geselecteerd kan worden.",table:{type:{summary:n.vK.NUMBER},category:n.aA.ATTRIBUTES,defaultValue:{summary:o.maxValue}}},minValue:{name:"data-vl-min-value",description:"De minimumwaarde die geselecteerd kan worden.",table:{type:{summary:n.vK.NUMBER},category:n.aA.ATTRIBUTES,defaultValue:{summary:o.minValue}}},value:{name:"data-vl-value",description:"De waarde van de input. Wordt gecorrigeerd indien deze zich onder de minValue of boven de maxValue begeeft.",table:{type:{summary:n.vK.NUMBER},category:n.aA.ATTRIBUTES,defaultValue:{summary:o.value}}},onChangeValue:{name:"vl-change-value",description:"Afgevuurd na het aanpasssen van de waarde.<br>Het event bevat de huidige waarde.",table:{type:{summary:"{ value: number }"},category:n.aA.EVENTS}}};r("./node_modules/react/index.js");var s=r("./node_modules/react/jsx-runtime.js"),d=r("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),u=r("./node_modules/@storybook/blocks/dist/index.mjs");function c(e){let t=Object.assign({h1:"h1",p:"p",code:"code",strong:"strong",h2:"h2",pre:"pre",a:"a"},(0,d.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"input-slider",children:"Input Slider"}),"\n",(0,s.jsxs)(t.p,{children:["Gebruik de ",(0,s.jsx)(t.code,{children:"input-slider"})," om een waarde te selecteren tussen een minimum en maximum waarde.\n",(0,s.jsx)(t.strong,{children:"Let op"}),": deze component is niet dezelfde als de ",(0,s.jsx)(t.code,{children:"vl-ui-range"})," component van Digitaal Vlaanderen."]}),"\n",(0,s.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { VlInputSliderComponent } from '@domg-wc/components';\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<vl-input-slider></vl-input-slider>\n"})}),"\n",(0,s.jsx)(u.Xz,{of:p}),"\n",(0,s.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,s.jsx)(u.Ed,{of:p}),"\n",(0,s.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,s.jsxs)(t.p,{children:["Dit is een nieuwe component binnen onze bibliotheek die gebaseerd is op de standaard ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range",target:"_blank",rel:"nofollow noopener noreferrer",children:"HTML5 input range slider"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["De stijl van deze component is gebaseerd op de ",(0,s.jsx)(t.code,{children:"vl-ui-range"})," ",(0,s.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-range",target:"_blank",rel:"nofollow noopener noreferrer",children:"component van Digitaal Vlaanderen"}),"."]})]})}let m={title:"Components/input-slider",tags:["autodocs"],args:o,argTypes:l,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,d.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}}},p=(0,n.yg)(o,({maxValue:e,minValue:t,value:r,onChangeValue:n})=>(0,i.dy)`
            <vl-input-slider
                data-vl-max-value=${e}
                data-vl-min-value=${t}
                data-vl-value=${r}
                @vl-change-value=${e=>n(e.detail)}
            ></vl-input-slider>
        `);p.storyName="vl-input-slider - default",p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"story(inputSliderArgs, ({\n  maxValue,\n  minValue,\n  value,\n  onChangeValue\n}) => html`\n            <vl-input-slider\n                data-vl-max-value=${maxValue}\n                data-vl-min-value=${minValue}\n                data-vl-value=${value}\n                @vl-change-value=${(event: CustomEvent) => onChangeValue(event.detail)}\n            ></vl-input-slider>\n        `)",...p.parameters?.docs?.source}}};let v=["InputSliderDefault"]},"./node_modules/lit/decorators.js":(e,t,r)=>{"use strict";r.d(t,{Mo:()=>n,Cb:()=>d});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n=e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},i=r("./node_modules/lit/node_modules/@lit/reactive-element/reactive-element.js");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){!function(e,t,r){(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l={attribute:!0,type:String,converter:i.Ts,reflect:!1,hasChanged:i.Qu},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,{kind:n,metadata:i}=r,a=globalThis.litPropertyMetadata.get(i);if(void 0===a&&globalThis.litPropertyMetadata.set(i,a=new Map),a.set(r.name,e),"accessor"===n){var{name:o}=r;return{set(r){var n=t.get.call(this);t.set.call(this,r),this.requestUpdate(o,n,e)},init(t){return void 0!==t&&this.C(o,void 0,e),t}}}if("setter"===n){var{name:s}=r;return function(r){var n=this[s];t.call(this,r),this.requestUpdate(s,n,e)}}throw Error("Unsupported decorator location: "+n)};function d(e){return(t,r)=>"object"==typeof r?s(e,t,r):((e,t,r)=>{var n=t.hasOwnProperty(r);return t.constructor.createProperty(r,n?o(o({},e),{},{wrapped:!0}):e),n?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,r)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r("./node_modules/react/index.js"),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,a={},d=null,u=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,n)&&!s.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:i,type:e,key:d,ref:u,props:a,_owner:l.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},"./node_modules/react/jsx-runtime.js":(e,t,r)=>{"use strict";e.exports=r("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/input-slider/vl-input-slider.component.ts":(e,t,r)=>{"use strict";var n=r("./node_modules/@domg/govflanders-style/component/index.js"),i=r("./node_modules/@domg/govflanders-style/common/index.js"),a=r("./node_modules/lit/index.js"),o=r("./node_modules/lit/decorators.js");r("./node_modules/reflect-metadata/Reflect.js");let l=(0,a.iv)`
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
`;var s=r("./libs/common/utilities/src/index.ts");class d extends s.fS{static get styles(){return[i.YN,n.K$,l]}static get properties(){return{maxValue:{type:Number,attribute:"data-vl-max-value",reflect:!0},minValue:{type:Number,attribute:"data-vl-min-value",reflect:!0},value:{type:Number,attribute:"data-vl-value",reflect:!0}}}updated(e){if(e.has("value")||e.has("minValue")||e.has("maxValue")){let t=this.validateValue(this.value);if(this.value!==t){this.value=t;return}e.has("value")&&!isNaN(this.value)&&this.dispatchEvent(new CustomEvent("vl-change-value",{detail:{value:this.value}}))}}render(){return(0,a.dy)`
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
        `}handleInput(e){let t=e.target,r=parseInt(t?.value??"");this.value=r}validateValue(e){let t=e;return t<this.minValue&&(t=this.minValue),t>this.maxValue&&(t=this.maxValue),t}constructor(...e){super(...e),this.maxValue=100,this.minValue=0,this.value=0}}d=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,o.Mo)("vl-input-slider")],d)}}]);