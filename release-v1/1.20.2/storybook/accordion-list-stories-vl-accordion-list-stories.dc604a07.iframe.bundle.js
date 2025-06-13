(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[2880],{"./node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js":function(e){!function(o,t){e.exports=t()}("undefined"!=typeof self&&self,function(){"use strict";function e(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o="js-".concat(vl.ns,"accordion"),t="".concat(o,"--open"),n="".concat(o,"__toggle"),c=".".concat(n,"__text"),i="".concat(vl.ns,"step--disabled"),r="".concat(vl.ns,"vi-plus"),l="".concat(vl.ns,"vi-minus"),d="".concat(vl.ns,"accordion__content"),a="data-".concat(vl.ns),s="".concat(a,"accordion"),v="".concat(s,"-dressed"),u="".concat(s,"-toggle"),g=function(){function a(){!function(e,o){if(!(e instanceof o))throw TypeError("Cannot call a class as a function")}(this,a)}return!function(o,t,n){t&&e(o.prototype,t),n&&e(o,n),Object.defineProperty(o,"prototype",{writable:!1})}(a,[{key:"_listenToHash",value:function(e){window.location.hash&&e.hasAttribute("id")&&"#".concat(e.getAttribute("id"))===window.location.hash&&this.open(e)}},{key:"open",value:function(e){var o=e.querySelector("[".concat(u,"]"));o&&!vl.util.hasClass(e,t)&&o.click()}},{key:"toggle",value:function(e){var o=e.querySelector("[".concat(u,"]"));o&&o.click()}},{key:"dress",value:function(e){var n,a,u,g,h=this,m=e.getAttribute("id")||vl.util.uniqueId(),p=!0;e.setAttribute(v,!0),n=e.querySelector(c),a=e.closest(".".concat(o,", [").concat(s,"]")).querySelector(".".concat(d)),vl.util.exists(a)&&a.setAttribute("aria-hidden",p),n?(u=n.dataset.vlAccordionCloseText,g=n.dataset.vlAccordionOpenText,vl.util.hasClass(e,t)?n.innerHTML=u:n.innerHTML=g,n.setAttribute("id",m)):e.setAttribute("aria-expanded",!1),e.addEventListener("click",function(c){var d=c.target.closest(".".concat(o,", [").concat(s,"]"));if(d&&!vl.util.hasClass(e,i)){c.preventDefault(),p=!p,vl.util.toggleClass(d,t),n||e.setAttribute("aria-expanded",!p);var v=new CustomEvent("vl.accordion.hook.onChange",{detail:!p,target:d}),u=e.querySelector(".vl-vi");d.dispatchEvent(v),u&&vl.util.hasClass(u,r)?(vl.util.removeClass(u,r),vl.util.addClass(u,l)):u&&vl.util.hasClass(u,l)&&(vl.util.removeClass(u,l),vl.util.addClass(u,r)),vl.util.exists(a)&&a.setAttribute("aria-hidden",p),n&&(vl.util.hasClass(d,t)?n.innerHTML=n.dataset.vlAccordionCloseText:n.innerHTML=n.dataset.vlAccordionOpenText)}},!1),this._listenToHash(e),window.addEventListener("hashchange",function(){h._listenToHash(e)})}},{key:"dressAll",value:function(){var e=this,t=document.querySelectorAll("\n      .".concat(o,':not([data-vl-js-dress="false"]) .').concat(n,":not([").concat(v,"]),\n      [").concat(s,"]:not([data-").concat(vl.ns,'js-dress="false"]) [').concat(u,"]:not([").concat(v,"])\n    "));vl.util.each(t,function(o){e.dress(o)})}}]),a}();return"accordion"in vl||(vl.accordion=new g,document.addEventListener("DOMContentLoaded",function(){vl.accordion.dressAll()})),g})},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,o,t)=>{"use strict";t.d(o,{NF:()=>i,Zo:()=>d,ah:()=>r,pC:()=>c});var n=t("./node_modules/react/index.js");let c=n.createContext({});function i(e){return function(o){let t=r(o.components);return n.createElement(e,{...o,allComponents:t})}}function r(e){let o=n.useContext(c);return n.useMemo(()=>"function"==typeof e?e(o):{...o,...e},[o,e])}let l={};function d({components:e,children:o,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||l:r(e),n.createElement(c.Provider,{value:i},o)}},"./node_modules/lit/decorators.js":(e,o,t)=>{"use strict";var n;t.d(o,{Mo:()=>c,Cb:()=>l});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let c=e=>o=>"function"==typeof o?((e,o)=>(customElements.define(e,o),o))(e,o):((e,o)=>{let{kind:t,elements:n}=o;return{kind:t,elements:n,finisher(o){customElements.define(e,o)}}})(e,o),i=(e,o)=>"method"!==o.kind||!o.descriptor||"value"in o.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:o.key,initializer(){"function"==typeof o.initializer&&(this[o.key]=o.initializer.call(this))},finisher(t){t.createProperty(o.key,e)}}:{...o,finisher(t){t.createProperty(o.key,e)}},r=(e,o,t)=>{o.constructor.createProperty(t,e)};function l(e){return(o,t)=>void 0!==t?r(e,o,t):i(e,o)}null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)||((e,o)=>e.assignedNodes(o).filter(e=>e.nodeType===Node.ELEMENT_NODE))},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,o,t)=>{"use strict";/** @license React v17.0.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */t("./node_modules/object-assign/index.js");var n=t("./node_modules/react/index.js"),c=60103;if(o.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;c=i("react.element"),o.Fragment=i("react.fragment")}var r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,o,t){var n,i={},a=null,s=null;for(n in void 0!==t&&(a=""+t),void 0!==o.key&&(a=""+o.key),void 0!==o.ref&&(s=o.ref),o)l.call(o,n)&&!d.hasOwnProperty(n)&&(i[n]=o[n]);if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===i[n]&&(i[n]=o[n]);return{$$typeof:c,type:e,key:a,ref:s,props:i,_owner:r.current}}o.jsx=a,o.jsxs=a},"./node_modules/react/jsx-runtime.js":(e,o,t)=>{"use strict";e.exports=t("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/accordion-list/vl-accordion-list.component.ts":(e,o,t)=>{"use strict";var n=t("./node_modules/lit/index.js"),c=t("./node_modules/@domg/govflanders-style/component/index.js"),i=t("./node_modules/@domg/govflanders-style/common/index.js");t("./node_modules/reflect-metadata/Reflect.js");var r=t("./libs/common/utilities/src/index.ts"),l=t("./node_modules/lit/decorators.js");function d(e,o,t,n){var c,i=arguments.length,r=i<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,o,t,n);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(r=(i<3?c(r):i>3?c(o,t,r):c(o,t))||r);return i>3&&r&&Object.defineProperty(o,t,r),r}let a=class extends r.fS{constructor(){super(),this.observer=null,this.bordered=!1,this.bordered=!1}static get styles(){return[i.YN,c.R1]}firstUpdated(){this.observer=new MutationObserver(()=>{this.requestUpdate()}),this.observer.observe(this,{subtree:!0,childList:!0})}disconnectedCallback(){this.observer?.disconnect()}render(){return(0,n.dy)`
            <ul class="vl-accordion-list ${this.bordered?"vl-accordion-list--bordered":""}">
                ${[...Array.from(this.children)].map((e,o)=>{let t=`item-${o}`;return e.setAttribute("slot",t),(0,n.dy)`
                        <li class="vl-accordion-list__item">
                            <slot name="${t}"> </slot>
                        </li>
                    `})}
            </ul>
        `}};d([(0,l.Cb)({type:Boolean,attribute:"data-vl-bordered",reflect:!0})],a.prototype,"bordered",void 0),a=d([(0,r.a6)("vl-accordion-list")],a)},"./libs/components/src/accordion/vl-accordion.component.ts":(e,o,t)=>{"use strict";t.d(o,{b:()=>d});var n=t("./libs/common/utilities/src/index.ts"),c=t("./node_modules/@domg/govflanders-style/component/index.js"),i=t("./node_modules/@domg/govflanders-style/common/index.js"),r=t("./node_modules/lit/index.js");let l=(0,r.iv)`
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
`;t("./node_modules/@govflanders/vl-ui-util/dist/js/util.js"),t("./node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js"),t("./node_modules/reflect-metadata/Reflect.js");let d=class extends(0,n.W$)(HTMLElement){static get _observedAttributes(){return["toggle-text","open-toggle-text","close-toggle-text","content-padding"]}static get _observedClassAttributes(){return["bold","disabled"]}get _classPrefix(){return"vl-accordion--"}constructor(){super(`
          <style>
           ${i.YN}
           ${c.jn}
           ${c.oQ}
           ${c.RP}
           ${c.ob}
           ${c.R1}
           ${l}
          </style>
          <div class="js">
            <div class="vl-accordion" data-vl-accordion>
              <button class="vl-toggle vl-link vl-link--bold" data-vl-accordion-toggle>
                <i class="vl-accordion__icon vl-link__icon vl-link__icon--before vl-toggle__icon vl-vi vl-vi-arrow-right-fat" aria-hidden="true"></i>
                <slot name="title" class="vl-accordion__title"></slot>
              </button>
              <div class="vl-accordion__content js-vl-accordion__content">
                <div class="vl-accordion__panel">
                  <slot id="accordion-slot"></slot>
                </div>
              </div>
            </div>
          </div>
        `)}connectedCallback(){super.connectedCallback(),this.dress(),this._hasTitleSlot()&&this._propagateTitleSlotClickToAccordion(),this.hasAttribute("icon")&&(this._addIconElement(),this._accordionElement.classList.add("vl-accordion--has-icon")),this.hasAttribute("default-open")&&this.open(),this._buttonElement?.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("vl-on-toggle",{detail:{open:this._isOpen}}))})}_propagateTitleSlotClickToAccordion(){this._titleElement.addEventListener("click",e=>{e.stopPropagation(),this._buttonElement.click()})}_addIconElement(){let e=this.getAttribute("icon"),o=document.createElement("i");o.classList.add("vl-accordion__icon","vl-link__icon","vl-link__icon--before","vl-toggle__icon","vl-vi",`vl-vi-${e}`),o.setAttribute("aria-hidden","true"),this._buttonElement?.prepend(o)}_hasTitleSlot(){return this._titleElement.assignedElements().length>0}get _accordionElement(){return this._element.querySelector("[data-vl-accordion]")}get _buttonElement(){return this._element.querySelector("button")}get _titleElement(){return this._buttonElement.querySelector('slot[name="title"]')}get _openToggleTextAttribute(){return this.getAttribute("open-toggle-text")}get _closeToggleTextAttribute(){return this.getAttribute("close-toggle-text")}get _dressedAttribute(){return this.getAttribute("accordion-dressed")}get _isDressed(){return!!this._dressedAttribute}get _isOpen(){return this._accordionElement.classList.contains("js-vl-accordion--open")}dress(){this._isDressed||vl.accordion.dress(this._buttonElement)}open(){vl.accordion.open(this._accordionElement)}close(){this._isOpen&&this.toggle()}toggle(){vl.accordion.toggle(this._accordionElement)}_toggleTextChangedCallback(e,o){this._titleElement.textContent=o}_openToggleTextChangedCallback(e,o){this._titleElement.classList.add("js-vl-accordion__toggle__text"),this._titleElement.setAttribute("data-vl-accordion-open-text",o)}_closeToggleTextChangedCallback(e,o){this._titleElement.classList.add("js-vl-accordion__toggle__text"),this._titleElement.setAttribute("data-vl-accordion-close-text",o)}_contentPaddingChangedCallback(e,o){let t=n.RE[o],c=this._element.querySelector(".vl-accordion__panel");t?c.style.padding=t:c.style.removeProperty("padding")}_disabledChangedCallback(e,o){void 0!=o?this._buttonElement?.setAttribute("disabled",""):this._buttonElement?.removeAttribute("disabled")}};d=function(e,o,t,n){var c,i=arguments.length,r=i<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,o,t,n);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(r=(i<3?c(r):i>3?c(o,t,r):c(o,t))||r);return i>3&&r&&Object.defineProperty(o,t,r),r}([(0,n.a6)("vl-accordion")],d)},"./libs/components/src/accordion-list/stories/vl-accordion-list.stories.ts":(e,o,t)=>{"use strict";t.r(o),t.d(o,{AccordionListDefault:()=>u,AccordionListNested:()=>g,default:()=>v});var n=t("./node_modules/lit-html/lit-html.js");t("./libs/components/src/accordion/vl-accordion.component.ts"),t("./libs/components/src/accordion-list/vl-accordion-list.component.ts");var c=t("./libs/common/storybook/src/index.ts");let i={bordered:!1},r={bordered:{name:"data-vl-bordered",description:"Beeldt een border af boven en onder de accordions.",table:{type:{summary:c.vK.BOOLEAN},category:c.aA.ATTRIBUTES,defaultValue:{summary:!1}}}};t("./node_modules/react/index.js");var l=t("./node_modules/react/jsx-runtime.js"),d=t("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),a=t("./node_modules/@storybook/blocks/dist/index.mjs");function s(e){let o=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",h3:"h3"},(0,d.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.h1,{id:"accordion-list",children:"Accordion List"}),"\n",(0,l.jsxs)(o.p,{children:["Een lijst component die kan gebruikt worden als je meerdere accordions wilt afbeelden.\nVoor meer informatie over accordions zie de ",(0,l.jsx)(o.a,{href:"/story/components-accordion--accordion-default",children:"accordion"})," component."]}),"\n",(0,l.jsx)(o.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-js",children:"import { VlAccordionListComponent } from '@domg-wc/components';\n"})}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-html",children:"<vl-accordion-list></vl-accordion-list>\n"})}),"\n",(0,l.jsx)(a.Xz,{of:u}),"\n",(0,l.jsx)(o.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,l.jsx)(a.Ed,{of:u}),"\n",(0,l.jsx)(o.h2,{id:"varianten",children:"Varianten"}),"\n",(0,l.jsx)(o.h3,{id:"nested",children:"Nested"}),"\n",(0,l.jsx)(a.Xz,{of:g}),"\n",(0,l.jsx)(o.h2,{id:"referenties",children:"Referenties"}),"\n",(0,l.jsx)(o.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,l.jsx)(o.p,{children:(0,l.jsx)(o.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/js-components/vl-ui-accordion",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Accordion List"})})]})}let v={title:"Components/accordion-list",tags:["autodocs"],args:(0,c.T8)(i),argTypes:(0,c.xj)(r),parameters:{docs:{page:function(e={}){let{wrapper:o}=Object.assign({},(0,d.ah)(),e.components);return o?(0,l.jsx)(o,Object.assign({},e,{children:(0,l.jsx)(s,e)})):s(e)}}}},u=(0,c.yg)(i,({bordered:e})=>(0,n.dy)`
        <vl-accordion-list ?data-vl-bordered=${e}>
            <vl-accordion data-vl-toggle-text="Accordion 1"> Inhoud accordion 1 </vl-accordion>
            <vl-accordion data-vl-toggle-text="Accordion 2"> Inhoud accordion 2 </vl-accordion>
            <vl-accordion data-vl-toggle-text="Accordion 3"> Inhoud accordion 3 </vl-accordion>
        </vl-accordion-list>
    `);u.storyName="vl-accordion-list - default";let g=(0,c.yg)(i,({bordered:e})=>(0,n.dy)`
        <vl-accordion-list ?data-vl-bordered=${e}>
            <vl-accordion data-vl-toggle-text="Accordion 1">
                <vl-accordion-list>
                    <vl-accordion data-vl-toggle-text="Accordion 1.1"> Inhoud accordion 1.1 </vl-accordion>
                    <vl-accordion data-vl-toggle-text="Accordion 1.2"> Inhoud accordion 1.2 </vl-accordion>
                </vl-accordion-list>
            </vl-accordion>
            <vl-accordion data-vl-toggle-text="Accordion 2">
                <vl-accordion-list>
                    <vl-accordion data-vl-toggle-text="Accordion 2.1"> Inhoud accordion 2.1 </vl-accordion>
                    <vl-accordion data-vl-toggle-text="Accordion 2.2"> Inhoud accordion 2.2 </vl-accordion>
                </vl-accordion-list>
            </vl-accordion>
            <vl-accordion data-vl-toggle-text="Accordion 3">
                <vl-accordion-list>
                    <vl-accordion data-vl-toggle-text="Accordion 3.1"> Inhoud accordion 3.1 </vl-accordion>
                    <vl-accordion data-vl-toggle-text="Accordion 3.2"> Inhoud accordion 3.2 </vl-accordion>
                </vl-accordion-list>
            </vl-accordion>
        </vl-accordion-list>
    `);g.storyName="vl-accordion-list - nested",u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'story(accordionListArgs, ({\n  bordered\n}) => html`\n        <vl-accordion-list ?data-vl-bordered=${bordered}>\n            <vl-accordion data-vl-toggle-text="Accordion 1"> Inhoud accordion 1 </vl-accordion>\n            <vl-accordion data-vl-toggle-text="Accordion 2"> Inhoud accordion 2 </vl-accordion>\n            <vl-accordion data-vl-toggle-text="Accordion 3"> Inhoud accordion 3 </vl-accordion>\n        </vl-accordion-list>\n    `)',...u.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:'story(accordionListArgs, ({\n  bordered\n}) => html`\n        <vl-accordion-list ?data-vl-bordered=${bordered}>\n            <vl-accordion data-vl-toggle-text="Accordion 1">\n                <vl-accordion-list>\n                    <vl-accordion data-vl-toggle-text="Accordion 1.1"> Inhoud accordion 1.1 </vl-accordion>\n                    <vl-accordion data-vl-toggle-text="Accordion 1.2"> Inhoud accordion 1.2 </vl-accordion>\n                </vl-accordion-list>\n            </vl-accordion>\n            <vl-accordion data-vl-toggle-text="Accordion 2">\n                <vl-accordion-list>\n                    <vl-accordion data-vl-toggle-text="Accordion 2.1"> Inhoud accordion 2.1 </vl-accordion>\n                    <vl-accordion data-vl-toggle-text="Accordion 2.2"> Inhoud accordion 2.2 </vl-accordion>\n                </vl-accordion-list>\n            </vl-accordion>\n            <vl-accordion data-vl-toggle-text="Accordion 3">\n                <vl-accordion-list>\n                    <vl-accordion data-vl-toggle-text="Accordion 3.1"> Inhoud accordion 3.1 </vl-accordion>\n                    <vl-accordion data-vl-toggle-text="Accordion 3.2"> Inhoud accordion 3.2 </vl-accordion>\n                </vl-accordion-list>\n            </vl-accordion>\n        </vl-accordion-list>\n    `)',...g.parameters?.docs?.source}}}}}]);