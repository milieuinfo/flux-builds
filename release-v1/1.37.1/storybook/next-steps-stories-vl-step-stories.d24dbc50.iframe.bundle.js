(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9460],{"../../node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js":function(t){var e;"undefined"!=typeof self&&self,e=function(){"use strict";var t="js-".concat(vl.ns,"accordion"),e="".concat(t,"--open"),s="".concat(t,"__toggle"),n=".".concat(s,"__text"),l="".concat(vl.ns,"step--disabled"),o="".concat(vl.ns,"vi-plus"),i="".concat(vl.ns,"vi-minus"),a="".concat(vl.ns,"accordion__content"),r="data-".concat(vl.ns),c="".concat(r,"accordion"),d="".concat(c,"-dressed"),p="".concat(c,"-toggle"),v=function(){var r;function v(){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,v)}return r=[{key:"_listenToHash",value:function(t){window.location.hash&&t.hasAttribute("id")&&"#".concat(t.getAttribute("id"))===window.location.hash&&this.open(t)}},{key:"open",value:function(t){var s=t.querySelector("[".concat(p,"]"));s&&!vl.util.hasClass(t,e)&&s.click()}},{key:"toggle",value:function(t){var e=t.querySelector("[".concat(p,"]"));e&&e.click()}},{key:"dress",value:function(s){var r,p,v,u,h=this,m=s.getAttribute("id")||vl.util.uniqueId(),g=!0;s.setAttribute(d,!0),r=s.querySelector(n),p=s.closest(".".concat(t,", [").concat(c,"]")).querySelector(".".concat(a)),vl.util.exists(p)&&p.setAttribute("aria-hidden",g),r?(v=r.dataset.vlAccordionCloseText,u=r.dataset.vlAccordionOpenText,vl.util.hasClass(s,e)?r.innerHTML=v:r.innerHTML=u,r.setAttribute("id",m)):s.setAttribute("aria-expanded",!1),s.addEventListener("click",function(n){var a=n.target.closest(".".concat(t,", [").concat(c,"]"));if(a&&!vl.util.hasClass(s,l)){n.preventDefault(),g=!g,vl.util.toggleClass(a,e),r||s.setAttribute("aria-expanded",!g);var d=new CustomEvent("vl.accordion.hook.onChange",{detail:!g,target:a}),v=s.querySelector(".vl-vi");a.dispatchEvent(d),v&&vl.util.hasClass(v,o)?(vl.util.removeClass(v,o),vl.util.addClass(v,i)):v&&vl.util.hasClass(v,i)&&(vl.util.removeClass(v,i),vl.util.addClass(v,o)),vl.util.exists(p)&&p.setAttribute("aria-hidden",g),r&&(vl.util.hasClass(a,e)?r.innerHTML=r.dataset.vlAccordionCloseText:r.innerHTML=r.dataset.vlAccordionOpenText)}},!1),this._listenToHash(s),window.addEventListener("hashchange",function(){h._listenToHash(s)})}},{key:"dressAll",value:function(){var e=this,n=document.querySelectorAll("\n      .".concat(t,':not([data-vl-js-dress="false"]) .').concat(s,":not([").concat(d,"]),\n      [").concat(c,"]:not([data-").concat(vl.ns,'js-dress="false"]) [').concat(p,"]:not([").concat(d,"])\n    "));vl.util.each(n,function(t){e.dress(t)})}}],function(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(v.prototype,r),Object.defineProperty(v,"prototype",{writable:!1}),v}();return"accordion"in vl||(vl.accordion=new v,document.addEventListener("DOMContentLoaded",function(){vl.accordion.dressAll()})),v},t.exports=e()},"../../libs/components/src/next/steps/stories/vl-step.stories.ts":(t,e,s)=>{"use strict";s.r(e),s.d(e,{StepsStates:()=>c,StepsToggleable:()=>r,__namedExportsOrder:()=>d,default:()=>a});var n=s("../../libs/common/storybook/src/index.ts"),l=s("../../node_modules/lit-html/lit-html.js");s("../../libs/components/src/next/steps/vl-steps.component.ts");let o={...n.D8,toggleable:!1,type:null},i={...(0,n.RN)(),toggleable:{name:"data-vl-toggleable",description:"Beeldt een stap af als een accordion.",control:!1,table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:o.toggleable}}},type:{name:"data-vl-type",description:"Beeldt een stap af in een bepaalde staat.",control:!1,table:{type:{summary:["highlighted","disabled","success","warning","error"]},category:n.R6.ATTRIBUTES,defaultValue:{summary:o.type}}}},a={title:"Components-next/steps/step",tags:["autodocs"],args:o,argTypes:i,parameters:{controls:{hideNoControlsWarning:!0}}},r=(0,n._7)(o,()=>(0,l.qy)`
        <vl-steps-next>
            <vl-step-next data-vl-toggleable>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step-next>
            <vl-step-next data-vl-toggleable>
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step-next>
            <vl-step-next data-vl-toggleable>
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step-next>
        </vl-steps-next>
    `);r.storyName="vl-step-next - toggleable";let c=(0,n._7)(o,()=>(0,l.qy)`
        <vl-steps-next>
            <vl-step-next>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step-next>
            <vl-step-next data-vl-type="highlighted">
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step-next>
            <vl-step-next data-vl-type="disabled">
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Deze stap is geannuleerd.</span>
            </vl-step-next>
            <vl-step-next data-vl-type="success">
                <span slot="icon">4</span>
                <span slot="title">Stap 4: vierde actie</span>
                <span slot="subtitle">Dit is de vierde subtitel.</span>
                <span slot="content">Dit is de vierde stap content.</span>
            </vl-step-next>
            <vl-step-next data-vl-type="warning">
                <span slot="icon">5</span>
                <span slot="title">Stap 5: vijfde actie</span>
                <span slot="subtitle">Dit is de vijfde subtitel.</span>
                <span slot="content">Dit is de vijfde stap content.</span>
            </vl-step-next>
            <vl-step-next data-vl-type="error">
                <span slot="icon">6</span>
                <span slot="title">Stap 6: zesde actie</span>
                <span slot="subtitle">Dit is de zesde subtitel.</span>
                <span slot="content">Dit is de zesde stap content.</span>
            </vl-step-next>
        </vl-steps-next>
    `);c.storyName="vl-step-next - states",r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'story(stepArgs, () => html`\n        <vl-steps-next>\n            <vl-step-next data-vl-toggleable>\n                <span slot="icon">1</span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step-next>\n            <vl-step-next data-vl-toggleable>\n                <span slot="icon">2</span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step-next>\n            <vl-step-next data-vl-toggleable>\n                <span slot="icon">3</span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step-next>\n        </vl-steps-next>\n    `)',...r.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'story(stepArgs, () => html`\n        <vl-steps-next>\n            <vl-step-next>\n                <span slot="icon">1</span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step-next>\n            <vl-step-next data-vl-type="highlighted">\n                <span slot="icon">2</span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step-next>\n            <vl-step-next data-vl-type="disabled">\n                <span slot="icon">3</span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Deze stap is geannuleerd.</span>\n            </vl-step-next>\n            <vl-step-next data-vl-type="success">\n                <span slot="icon">4</span>\n                <span slot="title">Stap 4: vierde actie</span>\n                <span slot="subtitle">Dit is de vierde subtitel.</span>\n                <span slot="content">Dit is de vierde stap content.</span>\n            </vl-step-next>\n            <vl-step-next data-vl-type="warning">\n                <span slot="icon">5</span>\n                <span slot="title">Stap 5: vijfde actie</span>\n                <span slot="subtitle">Dit is de vijfde subtitel.</span>\n                <span slot="content">Dit is de vijfde stap content.</span>\n            </vl-step-next>\n            <vl-step-next data-vl-type="error">\n                <span slot="icon">6</span>\n                <span slot="title">Stap 6: zesde actie</span>\n                <span slot="subtitle">Dit is de zesde subtitel.</span>\n                <span slot="content">Dit is de zesde stap content.</span>\n            </vl-step-next>\n        </vl-steps-next>\n    `)',...c.parameters?.docs?.source}}};let d=["StepsToggleable","StepsStates"]},"../../node_modules/lit-html/directive.js":(t,e,s)=>{"use strict";s.d(e,{OA:()=>n,WL:()=>o,u$:()=>l});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},l=t=>function(){for(var e=arguments.length,s=Array(e),n=0;n<e;n++)s[n]=arguments[n];return{_$litDirective$:t,values:s}};class o{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"../../node_modules/lit/decorators.js":(t,e,s)=>{"use strict";s.d(e,{EM:()=>n,MZ:()=>a});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var l=s("../../node_modules/@lit/reactive-element/reactive-element.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let o={attribute:!0,type:String,converter:l.W3,reflect:!1,hasChanged:l.Ec},i=(t=o,e,s)=>{let{kind:n,metadata:l}=s,i=globalThis.litPropertyMetadata.get(l);if(void 0===i&&globalThis.litPropertyMetadata.set(l,i=new Map),i.set(s.name,t),"accessor"===n){let{name:n}=s;return{set(s){let l=e.get.call(this);e.set.call(this,s),this.requestUpdate(n,l,t)},init(e){return void 0!==e&&this.C(n,void 0,t),e}}}if("setter"===n){let{name:n}=s;return function(s){let l=this[n];e.call(this,s),this.requestUpdate(n,l,t)}}throw Error("Unsupported decorator location: "+n)};function a(t){return(e,s)=>"object"==typeof s?i(t,e,s):((t,e,s)=>{let n=e.hasOwnProperty(s);return e.constructor.createProperty(s,n?{...t,wrapped:!0}:t),n?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}},"../../node_modules/lit/directives/class-map.js":(t,e,s)=>{"use strict";s.d(e,{H:()=>o});var n=s("../../node_modules/lit-html/lit-html.js"),l=s("../../node_modules/lit-html/directive.js"),o=(0,l.u$)(class extends l.WL{constructor(t){var e;if(super(t),t.type!==l.OA.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,e){var[s]=e;if(void 0===this.it){for(var l in this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),s)s[l]&&!(null!==(r=this.st)&&void 0!==r&&r.has(l))&&this.it.add(l);return this.render(s)}var o=t.element.classList;for(var i of this.it)i in s||(o.remove(i),this.it.delete(i));for(var a in s){var r,c,d=!!s[a];d===this.it.has(a)||(null===(c=this.st)||void 0===c?void 0:c.has(a))||(d?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return n.c0}})},"../../libs/components/src/accordion/vl-accordion.component.ts":(t,e,s)=>{"use strict";s.d(e,{i:()=>r});var n=s("../../libs/common/utilities/src/index.ts"),l=s("../../node_modules/@domg/govflanders-style/component/index.js"),o=s("../../node_modules/@domg/govflanders-style/common/index.js"),i=s("../../node_modules/lit/index.js");let a=(0,i.AH)`
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
`;s("../../node_modules/@govflanders/vl-ui-util/dist/js/util.js"),s("../../node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js"),s("../../node_modules/reflect-metadata/Reflect.js");class r extends(0,n.H3)(HTMLElement){static get _observedAttributes(){return["toggle-text","open-toggle-text","close-toggle-text","content-padding"]}static get _observedClassAttributes(){return["bold","disabled"]}get _classPrefix(){return"vl-accordion--"}constructor(){super(`
          <style>
           ${o.h8}
           ${l.i9}
           ${l.py}
           ${l.gu}
           ${l.Ms}
           ${l.av}
           ${a}
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
        `)}connectedCallback(){super.connectedCallback(),this.dress(),this._hasTitleSlot()&&this._propagateTitleSlotClickToAccordion(),this.hasAttribute("icon")&&(this._addIconElement(),this._accordionElement.classList.add("vl-accordion--has-icon")),this.hasAttribute("default-open")&&this.open(),this._buttonElement?.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("vl-on-toggle",{detail:{open:this._isOpen}}))})}_propagateTitleSlotClickToAccordion(){this._titleElement.addEventListener("click",t=>{t.stopPropagation(),this._buttonElement.click()})}_addIconElement(){let t=this.getAttribute("icon"),e=document.createElement("i");e.classList.add("vl-accordion__icon","vl-link__icon","vl-link__icon--before","vl-toggle__icon","vl-vi",`vl-vi-${t}`),e.setAttribute("aria-hidden","true"),this._buttonElement?.prepend(e)}_hasTitleSlot(){return this._titleElement.assignedElements().length>0}get _accordionElement(){return this._element.querySelector("[data-vl-accordion]")}get _buttonElement(){return this._element.querySelector("button")}get _titleElement(){return this._buttonElement.querySelector('slot[name="title"]')}get _openToggleTextAttribute(){return this.getAttribute("open-toggle-text")}get _closeToggleTextAttribute(){return this.getAttribute("close-toggle-text")}get _dressedAttribute(){return this.getAttribute("accordion-dressed")}get _isDressed(){return!!this._dressedAttribute}get _isOpen(){return this._accordionElement.classList.contains("js-vl-accordion--open")}dress(){this._isDressed||vl.accordion.dress(this._buttonElement)}open(){vl.accordion.open(this._accordionElement)}close(){this._isOpen&&this.toggle()}toggle(){vl.accordion.toggle(this._accordionElement)}_toggleTextChangedCallback(t,e){this._titleElement.textContent=e}_openToggleTextChangedCallback(t,e){this._titleElement.classList.add("js-vl-accordion__toggle__text"),this._titleElement.setAttribute("data-vl-accordion-open-text",e)}_closeToggleTextChangedCallback(t,e){this._titleElement.classList.add("js-vl-accordion__toggle__text"),this._titleElement.setAttribute("data-vl-accordion-close-text",e)}_contentPaddingChangedCallback(t,e){let s=n.J3[e],l=this._element.querySelector(".vl-accordion__panel");s?l.style.padding=s:l.style.removeProperty("padding")}_disabledChangedCallback(t,e){void 0!=e?this._buttonElement?.setAttribute("disabled",""):this._buttonElement?.removeAttribute("disabled")}}r=function(t,e,s,n){var l,o=arguments.length,i=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(l=t[a])&&(i=(o<3?l(i):o>3?l(e,s,i):l(e,s))||i);return o>3&&i&&Object.defineProperty(e,s,i),i}([(0,n.M1)("vl-accordion")],r)},"../../libs/components/src/next/steps/vl-steps.component.ts":(t,e,s)=>{"use strict";var n=s("../../libs/common/utilities/src/index.ts"),l=s("../../node_modules/@domg/govflanders-style/common/index.js"),o=s("../../libs/elements/src/index.ts"),i=s("../../node_modules/lit/index.js"),a=s("../../node_modules/lit/decorators.js"),r=s("../../node_modules/lit/directives/class-map.js"),c=s("../../node_modules/@domg/govflanders-style/component/index.js"),d=s("../../libs/components/src/accordion/vl-accordion.component.ts");let p=(0,i.AH)`
    ::slotted(span.vl-icon) {
        vertical-align: inherit !important;
    }
`;class v extends n.jW{static{(0,n.gy)([d.i])}static get styles(){return[l.h8,o.hF,c.xo,p]}static get properties(){return{type:{type:String,attribute:"data-vl-type",reflect:!0},toggleable:{type:Boolean,attribute:"data-vl-toggleable",reflect:!0},isTitleAnnotationSlotAssigned:{attribute:!1}}}connectedCallback(){super.connectedCallback(),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.customCSSStyleSheet])}firstUpdated(t){if(super.firstUpdated(t),this.toggleable){let t=this.shadowRoot?.querySelector(".js-vl-accordion__toggle");t?.hasAttribute("data-vl-accordion-dressed")||(vl.accordion.dress(t),this.shadowRoot?.querySelector('slot[name="title"]')?.addEventListener("click",t=>{t.stopPropagation(),this.shadowRoot?.querySelector("button.js-vl-accordion__toggle")?.click()}))}let e=this.shadowRoot?.querySelector('slot[name="title-annotation"]');this.isTitleAnnotationSlotAssigned=e&&e.assignedNodes().length>0||!1}render(){let t=this.type,e=this.toggleable?this.getAccordionStepHeaderTemplate():this.getStepHeaderTemplate(),s={"vl-step":!0,[`vl-step--${t}`]:!!t,"vl-step--accordion js-vl-accordion":this.toggleable};return(0,i.qy)`
            <li role="listitem" class=${(0,r.H)(s)}>
                <div class="vl-step__container">
                    <div class="vl-step__icon">
                        <slot name="icon"></slot>
                        <span class="vl-step__icon__sub">
                            <slot name="sub-icon"></slot>
                        </span>
                    </div>
                    <div class="vl-step__wrapper">
                        ${e}
                        <div class="vl-step__content-wrapper">
                            <div class="vl-step__content">
                                <slot name="content"></slot>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        `}getStepHeaderTemplate(){let t=this.getStepHeaderTitleTemplate();return(0,i.qy)` <div class="vl-step__header">${t}</div>`}getAccordionStepHeaderTemplate(){let t=this.getStepHeaderTitleTemplate();return(0,i.qy)`
            <button class="vl-step__header js-vl-accordion__toggle">
                ${t}
                <div class="vl-step__header__info" aria-hidden="true">
                    <em class="vl-step__accordion-toggle"></em>
                </div>
            </button>
        `}getStepHeaderTitleTemplate(){return(0,i.qy)`
            <div class="vl-step__header__titles">
                <h3 class="vl-step__title">
                    <slot name="title"></slot>
                    ${this.isTitleAnnotationSlotAssigned?(0,i.qy)`
                              <span class="vl-step__title__annotation">
                                  <slot name="title-annotation"></slot>
                              </span>
                          `:""}
                </h3>
                <p class="vl-step__subtitle">
                    <slot name="subtitle"></slot>
                </p>
            </div>
        `}setCustomStyles(t){this.customCSSStyleSheet.replaceSync(t)}constructor(...t){super(...t),this.type=null,this.toggleable=!1,this.isTitleAnnotationSlotAssigned=!0,this.customCSSStyleSheet=new CSSStyleSheet}}v=function(t,e,s,n){var l,o=arguments.length,i=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(l=t[a])&&(i=(o<3?l(i):o>3?l(e,s,i):l(e,s))||i);return o>3&&i&&Object.defineProperty(e,s,i),i}([(0,a.EM)("vl-step-next")],v);class u extends n.jW{static get styles(){return[l.h8,o.hF,c.xo]}render(){return(0,i.qy)`
            <li role="listitem" class="vl-duration-step">
                <slot></slot>
            </li>
        `}}u=function(t,e,s,n){var l,o=arguments.length,i=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(l=t[a])&&(i=(o<3?l(i):o>3?l(e,s,i):l(e,s))||i);return o>3&&i&&Object.defineProperty(e,s,i),i}([(0,a.EM)("vl-duration-step-next")],u);class h extends n.jW{static{(0,n.gy)([v,u])}static get styles(){return[l.h8,o.hF,c.xo]}static get properties(){return{line:{type:Boolean,attribute:"data-vl-line",reflect:!0},timeline:{type:Boolean,attribute:"data-vl-timeline",reflect:!0},simpleTimeline:{type:Boolean,attribute:"data-vl-simple-timeline",reflect:!0},lastStepNoLine:{type:Boolean,attribute:"data-vl-last-step-no-line",reflect:!0}}}connectedCallback(){super.connectedCallback(),this.observer=new MutationObserver(()=>{this.setStepStyles()}),this.observer.observe(this,{childList:!0})}updated(t){super.updated(t),this.setStepStyles()}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect()}render(){let t={"vl-steps":!0,"vl-steps--has-line":this.line,"vl-steps--timeline":this.timeline,"vl-steps--timeline-simple":this.simpleTimeline,"vl-steps--last-step-no-line":this.lastStepNoLine};return(0,i.qy)`
            <div class=${(0,r.H)(t)}>
                <ul role="list" class="vl-steps__list">
                    <slot></slot>
                </ul>
            </div>
        `}setStepStyles(){[...Array.from(this.children)].forEach((t,e,s)=>{if(t instanceof v){let n=this.getStepStyles(e,s);t.setCustomStyles(n)}})}getStepStyles(t,e){let s=t===e.length-1,n=e[t-1]instanceof u,l="";return 0===t||n||(l+=`
                .vl-step {
                    margin-top: 5rem;
                }

                @media screen and (max-width: 767px) {
                    .vl-step {
                        margin-top: 2rem;
                    }
                }
            `),this.line&&(l+=`
            .vl-step::before {
                position: absolute;
                display: block;
                background-color: #cbd2da;
                content: '';
                width: 0.3rem;
                top: calc(4.2rem + 0.4rem);
                bottom: calc(-5rem + 0.4rem);
                left: -5rem;
            }
                
            @media screen and (max-width: 767px) {
                .vl-step::before {
                    top: 3.9rem;
                    bottom: -2rem;
                    left: -3.35rem;
                }
            }
            `),this.lastStepNoLine&&s&&(l+=`
                .vl-step::before {
                    display: none !important;
                }    
            `),this.timeline&&(l+=`
            .vl-step::before {
                position: absolute;
                display: block;
                background-color: #cbd2da;
                content: '';
                width: 0.3rem;
                top: 6rem;
                bottom: -4.6rem;
                left: -5rem;
            }
            @media screen and (max-width: 767px) {
                .vl-step::before {
                    top: 4.4rem;
                    bottom: -1.6rem;
                    left: -3.35rem;
                }
            }
            .vl-step > .vl-step__container > .vl-step__icon {
                font-size: 1.8rem;
                height: auto;
                line-height: 1.5rem;
                border-radius: 0;
                padding: 1.2rem 0;
                top: 0;
            }
            @media screen and (max-width: 767px) {
                .vl-step > .vl-step__container > .vl-step__icon {
                    font-size: 1.5rem;
                    padding: 0.5rem 0;
                }
            }
            .vl-step--success .vl-step__icon {
                background-color: #007a37;
                color: #fff;
            }
            .vl-step--warning .vl-step__icon {
                background-color: #ffa10a;
                color: #333332;
            }
            .vl-step--error .vl-step__icon {
                background-color: #d2373c;
                color: #fff;
            }
            `),this.simpleTimeline&&(l+=`
                .vl-step {
                    padding-top: 0;
                }
                .vl-step::before {
                    position: absolute;
                    display: block;
                    background-color: #cbd2da;
                    content: '';
                    width: 0.3rem;
                    top: 2.2rem;
                    bottom: -7.2rem;
                    left: -5rem;
                }
                @media screen and (max-width: 767px) {
                    .vl-step::before {
                        left: -3.35rem;
                    }
                }
                .vl-step > .vl-step__container > .vl-step__icon {
                    background-color: #687483;
                    height: 2.2rem;
                    width: 2.2rem;
                    transform: translateX(-6rem);
                    margin-top: 0.5rem;
                }
                .vl-step
                    > .vl-step__container
                    > .vl-step__icon
                    > .vl-step__icon__text,
                .vl-step
                    > .vl-step__container
                    > .vl-step__icon
                    > .vl-step__icon__sub {
                    display: none;
                }
                @media screen and (max-width: 767px) {
                    .vl-step > .vl-step__container > .vl-step__icon {
                        transform: translateX(-4.3rem);
                    }
                }
                .vl-step__header__titles {
                    margin-top: 0.1rem;
                }
            `),this.simpleTimeline&&s&&(l+=`
                .vl-step::before {
                    bottom: 0;
                }
            `),l}constructor(...t){super(...t),this.line=!1,this.timeline=!1,this.simpleTimeline=!1,this.lastStepNoLine=!1,this.observer=null}}h=function(t,e,s,n){var l,o=arguments.length,i=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(l=t[a])&&(i=(o<3?l(i):o>3?l(e,s,i):l(e,s))||i);return o>3&&i&&Object.defineProperty(e,s,i),i}([(0,a.EM)("vl-steps-next")],h)}}]);