(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[2880],{"./node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js":function(e){!function(t,o){e.exports=o()}("undefined"!=typeof self&&self,function(){"use strict";function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var t="js-".concat(vl.ns,"accordion"),o="".concat(t,"--open"),n="".concat(t,"__toggle"),c=".".concat(n,"__text"),r="".concat(vl.ns,"step--disabled"),i="".concat(vl.ns,"vi-plus"),l="".concat(vl.ns,"vi-minus"),d="".concat(vl.ns,"accordion__content"),a="data-".concat(vl.ns),s="".concat(a,"accordion"),v="".concat(s,"-dressed"),u="".concat(s,"-toggle"),g=function(){function a(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,a)}return!function(t,o,n){o&&e(t.prototype,o),n&&e(t,n),Object.defineProperty(t,"prototype",{writable:!1})}(a,[{key:"_listenToHash",value:function(e){window.location.hash&&e.hasAttribute("id")&&"#".concat(e.getAttribute("id"))===window.location.hash&&this.open(e)}},{key:"open",value:function(e){var t=e.querySelector("[".concat(u,"]"));t&&!vl.util.hasClass(e,o)&&t.click()}},{key:"toggle",value:function(e){var t=e.querySelector("[".concat(u,"]"));t&&t.click()}},{key:"dress",value:function(e){var n,a,u,g,m=this,h=e.getAttribute("id")||vl.util.uniqueId(),_=!0;e.setAttribute(v,!0),n=e.querySelector(c),a=e.closest(".".concat(t,", [").concat(s,"]")).querySelector(".".concat(d)),vl.util.exists(a)&&a.setAttribute("aria-hidden",_),n?(u=n.dataset.vlAccordionCloseText,g=n.dataset.vlAccordionOpenText,vl.util.hasClass(e,o)?n.innerHTML=u:n.innerHTML=g,n.setAttribute("id",h)):e.setAttribute("aria-expanded",!1),e.addEventListener("click",function(c){var d=c.target.closest(".".concat(t,", [").concat(s,"]"));if(d&&!vl.util.hasClass(e,r)){c.preventDefault(),_=!_,vl.util.toggleClass(d,o),n||e.setAttribute("aria-expanded",!_);var v=new CustomEvent("vl.accordion.hook.onChange",{detail:!_,target:d}),u=e.querySelector(".vl-vi");d.dispatchEvent(v),u&&vl.util.hasClass(u,i)?(vl.util.removeClass(u,i),vl.util.addClass(u,l)):u&&vl.util.hasClass(u,l)&&(vl.util.removeClass(u,l),vl.util.addClass(u,i)),vl.util.exists(a)&&a.setAttribute("aria-hidden",_),n&&(vl.util.hasClass(d,o)?n.innerHTML=n.dataset.vlAccordionCloseText:n.innerHTML=n.dataset.vlAccordionOpenText)}},!1),this._listenToHash(e),window.addEventListener("hashchange",function(){m._listenToHash(e)})}},{key:"dressAll",value:function(){var e=this,o=document.querySelectorAll("\n      .".concat(t,':not([data-vl-js-dress="false"]) .').concat(n,":not([").concat(v,"]),\n      [").concat(s,"]:not([data-").concat(vl.ns,'js-dress="false"]) [').concat(u,"]:not([").concat(v,"])\n    "));vl.util.each(o,function(t){e.dress(t)})}}]),a}();return"accordion"in vl||(vl.accordion=new g,document.addEventListener("DOMContentLoaded",function(){vl.accordion.dressAll()})),g})},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,o)=>{"use strict";o.d(t,{NF:()=>r,Zo:()=>d,ah:()=>i,pC:()=>c});var n=o("./node_modules/react/index.js");let c=n.createContext({});function r(e){return function(t){let o=i(t.components);return n.createElement(e,{...t,allComponents:o})}}function i(e){let t=n.useContext(c);return n.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let l={};function d({components:e,children:t,disableParentContext:o}){let r;return r=o?"function"==typeof e?e({}):e||l:i(e),n.createElement(c.Provider,{value:r},t)}},"./libs/components/src/accordion-list/stories/vl-accordion-list.stories.ts":(e,t,o)=>{"use strict";o.r(t),o.d(t,{AccordionListDefault:()=>u,AccordionListNested:()=>g,__namedExportsOrder:()=>m,default:()=>v});var n=o("./libs/common/storybook/src/index.ts"),c=o("./node_modules/lit-html/lit-html.js");o("./libs/components/src/accordion/vl-accordion.component.ts"),o("./libs/components/src/accordion-list/vl-accordion-list.component.ts");let r={...n._O,bordered:!1},i={...(0,n.Wp)(),bordered:{name:"data-vl-bordered",description:"Beeldt een border af boven en onder de accordions.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:!1}}}};o("./node_modules/react/index.js");var l=o("./node_modules/react/jsx-runtime.js"),d=o("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),a=o("./node_modules/@storybook/blocks/dist/index.mjs");function s(e){let t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",h3:"h3"},(0,d.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"accordion-list",children:"Accordion List"}),"\n",(0,l.jsxs)(t.p,{children:["Een lijst component die kan gebruikt worden als je meerdere accordions wilt afbeelden.\nVoor meer informatie over accordions zie de ",(0,l.jsx)(t.a,{href:"/story/components-accordion--accordion-default",children:"accordion"})," component."]}),"\n",(0,l.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"import { VlAccordionListComponent } from '@domg-wc/components';\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-html",children:"<vl-accordion-list></vl-accordion-list>\n"})}),"\n",(0,l.jsx)(a.Xz,{of:u}),"\n",(0,l.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,l.jsx)(a.Ed,{of:u}),"\n",(0,l.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,l.jsx)(t.h3,{id:"nested",children:"Nested"}),"\n",(0,l.jsx)(a.Xz,{of:g}),"\n",(0,l.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,l.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/js-components/vl-ui-accordion",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Accordion List"})})]})}let v={title:"Components/accordion-list",tags:["autodocs"],args:r,argTypes:i,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,d.ah)(),e.components);return t?(0,l.jsx)(t,Object.assign({},e,{children:(0,l.jsx)(s,e)})):s(e)}}}},u=(0,n.yg)(r,({bordered:e})=>(0,c.dy)`
        <vl-accordion-list ?data-vl-bordered=${e}>
            <vl-accordion data-vl-toggle-text="Accordion 1"> Inhoud accordion 1</vl-accordion>
            <vl-accordion data-vl-toggle-text="Accordion 2"> Inhoud accordion 2</vl-accordion>
            <vl-accordion data-vl-toggle-text="Accordion 3"> Inhoud accordion 3</vl-accordion>
        </vl-accordion-list>
    `);u.storyName="vl-accordion-list - default";let g=(0,n.yg)(r,({bordered:e})=>(0,c.dy)`
        <vl-accordion-list ?data-vl-bordered=${e}>
            <vl-accordion data-vl-toggle-text="Accordion 1">
                <vl-accordion-list>
                    <vl-accordion data-vl-toggle-text="Accordion 1.1"> Inhoud accordion 1.1</vl-accordion>
                    <vl-accordion data-vl-toggle-text="Accordion 1.2"> Inhoud accordion 1.2</vl-accordion>
                </vl-accordion-list>
            </vl-accordion>
            <vl-accordion data-vl-toggle-text="Accordion 2">
                <vl-accordion-list>
                    <vl-accordion data-vl-toggle-text="Accordion 2.1"> Inhoud accordion 2.1</vl-accordion>
                    <vl-accordion data-vl-toggle-text="Accordion 2.2"> Inhoud accordion 2.2</vl-accordion>
                </vl-accordion-list>
            </vl-accordion>
            <vl-accordion data-vl-toggle-text="Accordion 3">
                <vl-accordion-list>
                    <vl-accordion data-vl-toggle-text="Accordion 3.1"> Inhoud accordion 3.1</vl-accordion>
                    <vl-accordion data-vl-toggle-text="Accordion 3.2"> Inhoud accordion 3.2</vl-accordion>
                </vl-accordion-list>
            </vl-accordion>
        </vl-accordion-list>
    `);g.storyName="vl-accordion-list - nested",u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'story(accordionListArgs, ({\n  bordered\n}) => html`\n        <vl-accordion-list ?data-vl-bordered=${bordered}>\n            <vl-accordion data-vl-toggle-text="Accordion 1"> Inhoud accordion 1</vl-accordion>\n            <vl-accordion data-vl-toggle-text="Accordion 2"> Inhoud accordion 2</vl-accordion>\n            <vl-accordion data-vl-toggle-text="Accordion 3"> Inhoud accordion 3</vl-accordion>\n        </vl-accordion-list>\n    `)',...u.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:'story(accordionListArgs, ({\n  bordered\n}) => html`\n        <vl-accordion-list ?data-vl-bordered=${bordered}>\n            <vl-accordion data-vl-toggle-text="Accordion 1">\n                <vl-accordion-list>\n                    <vl-accordion data-vl-toggle-text="Accordion 1.1"> Inhoud accordion 1.1</vl-accordion>\n                    <vl-accordion data-vl-toggle-text="Accordion 1.2"> Inhoud accordion 1.2</vl-accordion>\n                </vl-accordion-list>\n            </vl-accordion>\n            <vl-accordion data-vl-toggle-text="Accordion 2">\n                <vl-accordion-list>\n                    <vl-accordion data-vl-toggle-text="Accordion 2.1"> Inhoud accordion 2.1</vl-accordion>\n                    <vl-accordion data-vl-toggle-text="Accordion 2.2"> Inhoud accordion 2.2</vl-accordion>\n                </vl-accordion-list>\n            </vl-accordion>\n            <vl-accordion data-vl-toggle-text="Accordion 3">\n                <vl-accordion-list>\n                    <vl-accordion data-vl-toggle-text="Accordion 3.1"> Inhoud accordion 3.1</vl-accordion>\n                    <vl-accordion data-vl-toggle-text="Accordion 3.2"> Inhoud accordion 3.2</vl-accordion>\n                </vl-accordion-list>\n            </vl-accordion>\n        </vl-accordion-list>\n    `)',...g.parameters?.docs?.source}}};let m=["AccordionListDefault","AccordionListNested"]},"./node_modules/lit/decorators.js":(e,t,o)=>{"use strict";o.d(t,{Mo:()=>n,Cb:()=>l});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};var c=o("./node_modules/@lit/reactive-element/reactive-element.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let r={attribute:!0,type:String,converter:c.Ts,reflect:!1,hasChanged:c.Qu},i=(e=r,t,o)=>{let{kind:n,metadata:c}=o,i=globalThis.litPropertyMetadata.get(c);if(void 0===i&&globalThis.litPropertyMetadata.set(c,i=new Map),i.set(o.name,e),"accessor"===n){let{name:n}=o;return{set(o){let c=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,c,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){let{name:n}=o;return function(o){let c=this[n];t.call(this,o),this.requestUpdate(n,c,e)}}throw Error("Unsupported decorator location: "+n)};function l(e){return(t,o)=>"object"==typeof o?i(e,t,o):((e,t,o)=>{let n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,o)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=o("./node_modules/react/index.js"),c=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,o){var n,r={},a=null,s=null;for(n in void 0!==o&&(a=""+o),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(s=t.ref),t)i.call(t,n)&&!d.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:c,type:e,key:a,ref:s,props:r,_owner:l.current}}t.Fragment=r,t.jsx=a,t.jsxs=a},"./node_modules/react/jsx-runtime.js":(e,t,o)=>{"use strict";e.exports=o("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/accordion-list/vl-accordion-list.component.ts":(e,t,o)=>{"use strict";var n=o("./node_modules/lit/index.js"),c=o("./node_modules/@domg/govflanders-style/component/index.js"),r=o("./node_modules/@domg/govflanders-style/common/index.js");o("./node_modules/reflect-metadata/Reflect.js");var i=o("./libs/common/utilities/src/index.ts"),l=o("./node_modules/lit/decorators.js");function d(e,t,o,n){var c,r=arguments.length,i=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(i=(r<3?c(i):r>3?c(t,o,i):c(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i}class a extends i.fS{constructor(){super(),this.observer=null,this.bordered=!1,this.bordered=!1}static get styles(){return[r.YN,c.R1]}firstUpdated(){this.observer=new MutationObserver(()=>{this.requestUpdate()}),this.observer.observe(this,{subtree:!0,childList:!0})}disconnectedCallback(){this.observer?.disconnect()}render(){return(0,n.dy)`
            <ul class="vl-accordion-list ${this.bordered?"vl-accordion-list--bordered":""}">
                ${[...Array.from(this.children)].map((e,t)=>{let o=`item-${t}`;return e.setAttribute("slot",o),(0,n.dy)`
                        <li class="vl-accordion-list__item">
                            <slot name="${o}"> </slot>
                        </li>
                    `})}
            </ul>
        `}}d([(0,l.Cb)({type:Boolean,attribute:"data-vl-bordered",reflect:!0})],a.prototype,"bordered",void 0),a=d([(0,i.a6)("vl-accordion-list")],a)},"./libs/components/src/accordion/vl-accordion.component.ts":(e,t,o)=>{"use strict";o.d(t,{b:()=>d});var n=o("./libs/common/utilities/src/index.ts"),c=o("./node_modules/@domg/govflanders-style/component/index.js"),r=o("./node_modules/@domg/govflanders-style/common/index.js"),i=o("./node_modules/lit/index.js");let l=(0,i.iv)`
    :host(.vl-accordion--bold) .vl-accordion__title,
    :host(.vl-accordion--bold) .vl-accordion__icon::before {
        font-weight: 700;
    }

    :host(.vl-accordion--disabled) .vl-toggle {
        cursor: not-allowed;
        text-decoration: none;
    }
    :host(.vl-accordion--disabled) .vl-accordion__title,
    :host(.vl-accordion--disabled) .vl-accordion__icon::before {
        color: #687483;
    }

    .vl-accordion:not(.js-vl-accordion--open) .vl-accordion__content {
        display: none;
    }

    .vl-accordion.vl-accordion--has-icon .vl-vi-arrow-right-fat {
        order: 2;
        margin-left: auto;
        padding-right: 0;
        padding-left: 0.4rem;
    }

    .vl-accordion__subtitle {
        margin-left: 22px;
        padding-left: 0.4rem;
    }

    .vl-accordion__button-container {
        display: flex;
    }

    .js-vl-accordion--open > .vl-accordion__button-container > .vl-toggle > .vl-vi-arrow-right-fat::before {
        transform: rotate(-90deg);
    }
`;o("./node_modules/@govflanders/vl-ui-util/dist/js/util.js"),o("./node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js"),o("./node_modules/reflect-metadata/Reflect.js");class d extends(0,n.W$)(HTMLElement){static get _observedAttributes(){return["toggle-text","open-toggle-text","close-toggle-text","content-padding"]}static get _observedClassAttributes(){return["bold","disabled"]}get _classPrefix(){return"vl-accordion--"}constructor(){super(`
          <style>
           ${r.YN}
           ${c.jn}
           ${c.oQ}
           ${c.RP}
           ${c.ob}
           ${c.R1}
           ${l}
          </style>
          <div class="js">
            <div class="vl-accordion" data-vl-accordion>
            <div class="vl-accordion__button-container">
              <button class="vl-toggle vl-link vl-link--bold" data-vl-accordion-toggle>
                <i class="vl-accordion__icon vl-link__icon vl-link__icon--before vl-toggle__icon vl-vi vl-vi-arrow-right-fat" aria-hidden="true"></i>
                <slot name="title" class="vl-accordion__title"></slot>
              </button>
              <div class="vl-accordion__menu">
                <slot name="menu"></slot>
              </div>
            </div>
              <div class="vl-accordion__subtitle">
                <slot name="subtitle"></slot>
              </div>
              <div class="vl-accordion__content js-vl-accordion__content">
                <div class="vl-accordion__panel">
                  <slot id="accordion-slot"></slot>
                </div>
              </div>
            </div>
          </div>
        `)}connectedCallback(){super.connectedCallback(),this.dress(),this._hasTitleSlot()&&this._propagateTitleSlotClickToAccordion(),this.hasAttribute("icon")&&(this._addIconElement(),this._accordionElement.classList.add("vl-accordion--has-icon")),this.hasAttribute("default-open")&&this.open(),this._buttonElement?.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("vl-on-toggle",{detail:{open:this._isOpen}}))})}_propagateTitleSlotClickToAccordion(){this._titleElement.addEventListener("click",e=>{e.stopPropagation(),this._buttonElement.click()})}_addIconElement(){let e=this.getAttribute("icon"),t=document.createElement("i");t.classList.add("vl-accordion__icon","vl-link__icon","vl-link__icon--before","vl-toggle__icon","vl-vi",`vl-vi-${e}`),t.setAttribute("aria-hidden","true"),this._buttonElement?.prepend(t)}_hasTitleSlot(){return this._titleElement.assignedElements().length>0}get _accordionElement(){return this._element.querySelector("[data-vl-accordion]")}get _buttonElement(){return this._element.querySelector("button")}get _titleElement(){return this._buttonElement.querySelector('slot[name="title"]')}get _openToggleTextAttribute(){return this.getAttribute("open-toggle-text")}get _closeToggleTextAttribute(){return this.getAttribute("close-toggle-text")}get _dressedAttribute(){return this.getAttribute("accordion-dressed")}get _isDressed(){return!!this._dressedAttribute}get _isOpen(){return this._accordionElement.classList.contains("js-vl-accordion--open")}dress(){this._isDressed||vl.accordion.dress(this._buttonElement)}open(){vl.accordion.open(this._accordionElement)}close(){this._isOpen&&this.toggle()}toggle(){vl.accordion.toggle(this._accordionElement)}_toggleTextChangedCallback(e,t){this._titleElement.textContent=t}_openToggleTextChangedCallback(e,t){this._titleElement.classList.add("js-vl-accordion__toggle__text"),this._titleElement.setAttribute("data-vl-accordion-open-text",t)}_closeToggleTextChangedCallback(e,t){this._titleElement.classList.add("js-vl-accordion__toggle__text"),this._titleElement.setAttribute("data-vl-accordion-close-text",t)}_contentPaddingChangedCallback(e,t){let o=n.RE[t],c=this._element.querySelector(".vl-accordion__panel");o?c.style.padding=o:c.style.removeProperty("padding")}_disabledChangedCallback(e,t){void 0!=t?this._buttonElement?.setAttribute("disabled",""):this._buttonElement?.removeAttribute("disabled")}}d=function(e,t,o,n){var c,r=arguments.length,i=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(i=(r<3?c(i):r>3?c(t,o,i):c(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i}([(0,n.a6)("vl-accordion")],d)}}]);